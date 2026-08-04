import graphs from '../data/article-graphs.json' with { type: 'json' };
import graphTranslations from '../data/article-graphs-zh.json' with { type: 'json' };

export function getArticleGraph(slug, source = null) {
  const graphEntry = resolveArticleGraphEntry(slug, source);
  if (!graphEntry) return null;
  const { key, graph } = graphEntry;
  return applyArticleGraphTranslation(graph, graphTranslations[key] || graphTranslations[slug]);
}

/** Resolve upstream graph data when a source URL uses a legacy slug. */
export function resolveArticleGraphEntry(slug, source = null) {
  if (graphs[slug]) return { key: slug, graph: graphs[slug] };
  if (!source) return null;
  const match = Object.entries(graphs).find(([, graph]) => graph.source === source);
  return match ? { key: match[0], graph: match[1] } : null;
}

export function applyArticleGraphTranslation(graph, translation) {
  if (!translation) return graph;
  return {
    ...graph,
    ...translation,
    difficulty: {
      ...graph.difficulty,
      ...translation.difficulty,
    },
  };
}
