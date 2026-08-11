function decodeHtml(value) {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(?:0*39|x0*27);/gi, "'")
    .trim();
}

function classText(html, className) {
  const escapedName = className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `<[^>]+class=["'](?:${escapedName}(?:\\s[^"']*)?|[^"']*\\s${escapedName}(?:\\s[^"']*)?)["'][^>]*>([\\s\\S]*?)<\\/[^>]+>`,
    'i',
  );
  const match = html.match(pattern);
  return match ? decodeHtml(match[1]) : '';
}

function countBeforeLabel(html, label) {
  const labelPattern = new RegExp(
    `class=["'][^"']*\\bs-c-t-c-label\\b[^"']*["'][^>]*>\\s*${label}\\s*<`,
    'i',
  );
  const labelMatch = labelPattern.exec(html);
  if (!labelMatch) return 0;

  const precedingHtml = html.slice(Math.max(0, labelMatch.index - 500), labelMatch.index);
  const counts = [...precedingHtml.matchAll(
    /class=["'][^"']*\bs-c-t-c-item-count\b[^"']*["'][^>]*>\s*(\d+)\s*</gi,
  )];
  return counts.length > 0 ? Number(counts.at(-1)[1]) : 0;
}

/** Extract the graph payload embedded by the upstream article template. */
export function extractArticleGraph(html) {
  if (!html.includes('collapsible-tree')) return null;

  const scriptDatasetMatch = html.match(
    /\b(?:var|let|const)\s+dataset\s*=\s*(\{[\s\S]*?\})\s*;/,
  );
  const attributeDatasetMatch = html.match(
    /\bdata-collapsible-tree-data=(['"])([\s\S]*?)\1/i,
  );
  const datasetJson = scriptDatasetMatch?.[1]
    || (attributeDatasetMatch ? decodeHtml(attributeDatasetMatch[2]) : null);
  if (!datasetJson) return null;

  let dataset;
  try {
    dataset = JSON.parse(datasetJson);
  } catch {
    return null;
  }

  const canvasHeightMatch = html.match(/\bfixedCanvasHeight\s*=\s*(\d+)/)
    || html.match(/\bdata-collapsible-tree-height=['"](\d+)['"]/i);
  const difficultyMatch = html.match(
    /\bdifficulty-level\s+dl-(\d)\b[^>]*>(?:\s*<div[^>]*>\s*<\/div>){0,4}\s*([^<]+?)\s*<\/div>/i,
  );
  const difficultyLevel = difficultyMatch ? Number(difficultyMatch[1]) : 0;
  const difficultyLabel = difficultyMatch
    ? decodeHtml(difficultyMatch[2])
    : '';

  return {
    dataset,
    type: classText(html, 's-c-t-c-node-type'),
    description: classText(html, 'collapsible-tree-description'),
    difficulty: {
      level: difficultyLevel,
      label: difficultyLabel,
    },
    requires: countBeforeLabel(html, 'Requires'),
    enables: countBeforeLabel(html, 'Enables'),
    canvasHeight: canvasHeightMatch ? Number(canvasHeightMatch[1]) : 440,
  };
}

export function articleGraphSourceCandidates(source, slug) {
  const candidates = [source];
  const sourceUrl = new URL(source);
  const sourceSlug = sourceUrl.pathname.split('/').filter(Boolean).at(-1);
  if (sourceSlug !== slug) {
    candidates.push(new URL(`/${slug}/`, sourceUrl.origin).href);
  }
  return candidates;
}

export async function fetchArticleGraph({ source, slug, fetchHtml }) {
  let fetched = false;
  let lastError = null;

  for (const candidate of articleGraphSourceCandidates(source, slug)) {
    try {
      const graph = extractArticleGraph(await fetchHtml(candidate));
      fetched = true;
      if (graph) return { source: candidate, ...graph };
    } catch (error) {
      lastError = error;
    }
  }

  if (!fetched && lastError) throw lastError;
  return null;
}

/** Produce a stable, dependency-free left-to-right tree layout for static SVG. */
export function layoutArticleGraph(dataset, { height = 440 } = {}) {
  const nodes = [];
  const links = [];
  let previousLeafParent = null;
  let nextLeafY = 0;

  function visit(item, depth, parent = null) {
    const node = {
      id: nodes.length,
      name: String(item?.name ?? ''),
      depth,
      x: 68 + depth * 116,
      y: 0,
      children: [],
    };
    nodes.push(node);

    for (const child of item?.children ?? []) {
      node.children.push(visit(child, depth + 1, node));
    }

    if (node.children.length === 0) {
      if (previousLeafParent !== null) {
        nextLeafY += previousLeafParent === parent ? 20 : 40;
      }
      node.y = nextLeafY;
      previousLeafParent = parent;
    } else {
      node.y = (node.children[0].y + node.children.at(-1).y) / 2;
    }

    if (parent) links.push({ source: parent, target: node });
    return node;
  }

  if (!dataset || typeof dataset !== 'object') return { nodes, links };
  const root = visit(dataset, 0);
  const offsetY = height / 2 + 8 - root.y;
  for (const node of nodes) node.y += offsetY;

  for (const link of links) {
    const middleX = (link.source.x + link.target.x) / 2;
    link.path = [
      `M${link.source.x},${link.source.y}`,
      `C${middleX},${link.source.y}`,
      `${middleX},${link.target.y}`,
      `${link.target.x},${link.target.y}`,
    ].join(' ');
  }

  return { nodes, links };
}
