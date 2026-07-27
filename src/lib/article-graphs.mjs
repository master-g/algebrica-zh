import graphs from '../data/article-graphs.json' with { type: 'json' };
import graphTranslations from '../data/article-graphs-zh.json' with { type: 'json' };

export function getArticleGraph(slug) {
  const graph = graphs[slug];
  if (!graph) return null;
  return applyArticleGraphTranslation(graph, graphTranslations[slug]);
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
