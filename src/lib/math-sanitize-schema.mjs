import { defaultSchema } from 'rehype-sanitize';

/**
 * Extend the default rehype-sanitize schema to allow MathJax SVG output.
 * Keeps script stripping and javascript: URL blocking intact.
 */
function makeMathSchema(base) {
  return {
    ...base,
    // 关闭 id/name 的 user-content- 前缀改写:MathJax 的 <path id> 与 <use xlink:href>
    // 必须逐字对应,前缀化会让全部字形引用悬空(公式空白)。元素均为管线产出,无注入面。
    clobber: [],
    tagNames: [
      ...(base.tagNames || []),
      // MathJax SVG 的伴随 <style> 块必须保留为元素——标签被剥掉会把整段 CSS 以文本泄漏进页面。
      // remark 默认不允许原始 HTML,LLM 内容无法注入元素,放行 <style> 无注入面。
      'style',
      'aside',
      'mjx-container',
      'mjx-assistive-mml',
      'mjx-math',
      'mjx-mrow',
      'mjx-mi',
      'mjx-mo',
      'mjx-mn',
      'mjx-mtext',
      'mjx-mspace',
      'mjx-msub',
      'mjx-msup',
      'mjx-msubsup',
      'mjx-mfrac',
      'mjx-msqrt',
      'mjx-mroot',
      'mjx-munder',
      'mjx-mover',
      'mjx-munderover',
      'mjx-mtable',
      'mjx-mtr',
      'mjx-mtd',
      'mjx-semantics',
      'mjx-annotation',
      'svg',
      'g',
      'path',
      'defs',
      'use',
      'line',
      'rect',
      'circle',
      'ellipse',
      'polygon',
      'polyline',
      'text',
      'tspan',
      'clipPath',
      'linearGradient',
      'radialGradient',
      'stop',
      'symbol',
    ],
    attributes: {
      ...(base.attributes || {}),
      'mjx-container': ['class', 'jax', 'display', 'justify', 'width', 'role', 'style', 'tabIndex'],
      'mjx-assistive-mml': ['role'],
      'mjx-math': ['xmlns', 'display', 'alttext'],
      // 属性键按 hast 的实际写法:SVG 表现属性保留连字符(stroke-width),data-* 才是驼峰。
      // 嵌套 <svg> 的 x/y 是拉伸定界符中段的定位,剥掉后矩阵括号、cases 大括号会断开。
      svg: ['xmlns', 'x', 'y', 'width', 'height', 'role', 'focusable', 'viewBox', 'xmlnsXLink', 'style', 'preserveAspectRatio', 'dataTable', 'dataLabels'],
      g: ['stroke', 'fill', 'stroke-width', 'transform', 'dataMmlNode', 'dataMjxError', 'style'],
      path: ['id', 'd'],
      use: ['dataC', 'xLinkHref', 'href', 'transform'],
      line: ['x1', 'y1', 'x2', 'y2', 'stroke', 'stroke-width', 'dataLine'],
      rect: ['x', 'y', 'width', 'height', 'rx', 'ry', 'stroke', 'stroke-width', 'fill', 'dataFrame', 'dataBackground'],
      circle: ['cx', 'cy', 'r'],
      ellipse: ['cx', 'cy', 'rx', 'ry'],
      polygon: ['points'],
      polyline: ['points'],
      text: ['x', 'y', 'dx', 'dy', 'transform', 'font-size', 'font-family', 'font-style', 'font-weight', 'text-anchor'],
      tspan: ['x', 'y', 'dx', 'dy'],
      clipPath: ['id'],
      linearGradient: ['id', 'x1', 'y1', 'x2', 'y2'],
      radialGradient: ['id', 'cx', 'cy', 'r'],
      stop: ['offset', 'stop-color'],
      symbol: ['id'],
      a: ['href', 'title', 'target', 'rel', 'class'],
      aside: ['className', 'role'],
      section: ['dataFootnotes', ['className', 'footnotes', 'article-section']],
      '*': [...(base.attributes?.['*'] || []), 'className', 'class'],
    },
  };
}

export const mathSanitizeSchema = makeMathSchema(defaultSchema);
