import graphs from '../data/article-graphs.json' with { type: 'json' };

export function getArticleGraph(slug) {
  return graphs[slug] ?? null;
}
