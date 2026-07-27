---
title: 区间
title_en: Intervals
source: https://algebrica.org/intervals/
license: CC BY-NC 4.0
tags:
  - bounded-interval
  - closed-interval
  - connectedness
  - convexity
  - half-open-interval
  - interval
  - length
  - neighborhood
  - open-interval
  - real-line
  - unbounded-interval
translation:
  status: current
  source_hash: 3afd43230a1d67f5acc1c36af12ad2d8f7e075a9e45090f7a93a5749a1674b71
  translator: omp
  updated: "2026-07-22T15:42:00.170Z"
---
## 定义

区间是实数轴的一个子集，其性质为：只要两个点属于它，位于它们之间的每一个点也属于它。更精确地说，子集 $I \subseteq \mathbb{R}$ 是区间，当且仅当对于每一对满足 $a < b$ 的点 $a, b \in I$，整个集合 $\\{x \in \mathbb{R} : a \leq x \leq b\\}$ 都包含在 $I$ 中。这一性质被称为实数轴上的凸性，它将区间与 $\mathbb{R}$ 的一般子集（如有限集或互不连通的若干片段的并集）区分开来。

区间是数学分析中最基本的对象之一。它们作为函数的定义域出现，作为[定积分](../definite-integrals/)理论中的积分区域出现，作为研究连续性与可微性的集合出现，并且作为描述[实数轴](../real-numbers/)上更复杂子集的基本构件出现。

区间按照其端点是否被包含、以及它们是有界还是在某一个或两个方向上无限延伸来分类。

## 有界区间

有界区间是包含在实数轴的有限部分内的区间，即存在实数 $a$ 和 $b$ 满足 $a \leq b$，使得该区间是 $[a, b]$ 的子集。以 $a$ 和 $b$ 为端点的开区间是严格介于 $a$ 和 $b$ 之间的所有实数构成的集合，排除两个端点。其定义如下：

$$
(a, b) = \\{x \in \mathbb{R} : a < x < b\\}
$$

[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-o-h | sign+r-in-o-h |     |
[/shortcode]

以 $a$ 和 $b$ 为端点的闭区间是介于 $a$ 和 $b$ 之间的所有实数构成的集合，包含两个端点。其定义如下：

$$
[a, b] = \\{x \in \mathbb{R} : a \leq x \leq b\\}
$$

[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-c-h | sign+r-in-c-h |     |
[/shortcode]

以 $a$ 和 $b$ 为端点的两个半开区间，其中一个包含一个端点而排除另一个端点。其定义如下：

$$
[a, b) = \\{x \in \mathbb{R} : a \leq x < b\\}
$$

[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-c-h | sign+r-in-o-h |     |
[/shortcode]

$$
(a, b] = \\{x \in \mathbb{R} : a < x \leq b\\}
$$

[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-o-h | sign+r-in-c-h |     |
[/shortcode]

退化区间是 $[a, a] = \\{a\\}$ 这一特殊情形，它恰好包含一个点。它平凡地满足区间的定义，因为其中不存在两个不同的点，因而无需检验它们之间的点。

## 无界区间

无界区间至少在一个方向上无限延伸。由于无穷不是实数，符号 $+\infty$ 和 $-\infty$ 纯粹用作记号约定，表示区间在相应方向上没有有限边界。端点 $+\infty$ 和 $-\infty$ 总是被排除，相应的括号总是圆括号。四个无界区间定义如下。

$$
[a, +\infty) = \\{x \in \mathbb{R} : x \geq a\\}
$$

[shortcode="intervals"]
|     | $a$ |     |
|:----|-----|-----|
|     | sign+l-c-h |     |
[/shortcode]

$$
(a, +\infty) = \\{x \in \mathbb{R} : x > a\\}
$$

[shortcode="intervals"]
|     | $a$ |     |
|:----|-----|-----|
|     | sign+l-o-h |     |
[/shortcode]

$$
(-\infty, b] = \\{x \in \mathbb{R} : x \leq b\\}
$$

[shortcode="intervals"]
|     | $b$ |     |
|:----|-----|-----|
|     | sign+r-c-h |     |
[/shortcode]

$$
(-\infty, b) = \\{x \in \mathbb{R} : x < b\\}
$$

[shortcode="intervals"]
|     | $b$ |     |
|:----|-----|-----|
|     | sign+r-o-h |     |
[/shortcode]

整个实数轴本身也是一个区间，记作 $(-\infty, +\infty) = \mathbb{R}$，它包含每一个实数，没有任何限制。

## 区间的运算

给定两个区间，可以通过「[集合](../sets/)」词条中定义的交集与并集这两种标准集合论运算来组合它们，从而得到新的集合。交集 $I \cap J$ 是同时属于两个区间的所有点构成的集合。两个区间的交集总是一个区间，可能为空集或退化区间。考虑 $I = (1, 5)$ 和 $J = (3, 7)$。同时属于两者的值恰好是 $(3, 5)$ 中的那些。

[shortcode="intervals"]
|     | $1$ | $3$ | $5$ | $7$ |     |
|:----|-----|-----|-----|-----|-----|
|     | sign+l-in-o |             | sign+r-in-o |             |     |
|     |             | sign+l-in-o |             | sign+r-in-o |     |
|     |             | sign+l-in-o-h | sign+r-in-o-h |           |     |
[/shortcode]

第三行展示了交集 $(3, 5)$，即两个区间共同拥有的部分。

- - -

并集 $I \cup J$ 是至少属于两个区间之一的全部点构成的集合。与交集不同，两个区间的并集并不总是区间。两个区间的并集是区间，当且仅当它们重叠，或者它们相接的公共端点至少属于其中一个区间。考虑同样的例子，$I = (1, 5)$ 和 $J = (3, 7)$。由于两个区间重叠，它们的并集是区间 $(1, 7)$。

[shortcode="intervals"]
|     | $1$ | $3$ | $5$ | $7$ |     |
|:----|-----|-----|-----|-----|-----|
|     | sign+l-in-o |             | sign+r-in-o |             |     |
|     |             | sign+l-in-o |             | sign+r-in-o |     |
|     | sign+l-in-o-h | sign+s-h |             | sign+r-in-o-h |     |
[/shortcode]

第三行展示了并集 $(1, 7)$。相比之下，并集 $(1, 3) \cup (5, 7)$ 不是区间，因为介于 $3$ 和 $5$ 之间的点不属于任何一个集合。

## 区间与邻域

与区间密切相关且在数学分析中居于核心地位的一个概念是点的邻域。给定一个点 $x_0 \in \mathbb{R}$ 和一个实数 $\varepsilon > 0$，开区间：

$$
(x_0 - \varepsilon, \ x_0 + \varepsilon)
$$

称为 $x_0$ 的 $\varepsilon$-邻域，或简称 $x_0$ 的邻域。它由所有与 $x_0$ 的距离严格小于 $\varepsilon$ 的点构成，即所有满足 $|x-x_0| < \varepsilon$ 的 $x$，其中 $|\cdot|$ 表示[绝对值](../absolute-value/)。

[shortcode="intervals"]
|     | $x_0 - \varepsilon$ | $x_0$ | $x_0 + \varepsilon$ |     |
|:----|---------------------|-------|---------------------|-----|
|     | sign+l-in-o-h | sign+s-h | sign+r-in-o-h |     |
[/shortcode]

邻域提供了自然表达[极限](../limits/)、连续性与可微性定义的语言。函数 $f$ 在 $x_0$ 处连续，是指对于 $f(x_0)$ 的每一个邻域，都存在 $x_0$ 的一个邻域，使得它在 $f$ 下的像集包含于前者之中。这一表述与经典的 $\varepsilon$-$\delta$ 定义等价，并使区间的作用得以显化。

如果 $x_0$ 的某个邻域完全包含在 $S$ 中，则称点 $x_0$ 是集合 $S \subseteq \mathbb{R}$ 的内点。开区间的每一个点都是它的内点，这正是开区间在分析中扮演特殊角色的原因之一。相比之下，闭区间的端点不是内点：端点的每一个邻域都包含区间之外的点。

## 区间的长度

以 $a$ 和 $b$ 为端点的有界区间，其长度定义为 $b - a$，不论端点是否被包含。四个区间 $(a, b)$、$[a, b)$、$(a, b]$ 和 $[a, b]$ 都具有相同的长度，由如下表达式给出：

$$
\ell(I) = b - a
$$

单个点没有大小，因此在一个区间中添加或去掉有限个点不会改变它的长度。退化区间 $[a, a]$ 的长度为 $\ell([a,a]) = 0$，这与上述观察一致。无界区间具有无穷的长度，其含义是：对于每一个 $M > 0$，区间中都存在距离超过 $M$ 的点，因此无法将任何有限值指派为它们的长度。

长度的概念是实数轴上测度理论的出发点，该理论为 $\mathbb{R}$ 的一般子集赋予一种推广的大小概念。区间 $[a, b]$ 的测度与其长度 $b - a$ 一致，而通过外测度与可测性的概念将这一指派推广到更复杂的集合，便构成了[勒贝格积分](../riemann-integrability-criteria/)的基础。

## 区间的刻画

实数轴的一个子集称为连通的，如果它不能写成两个不相交、非空的相对开集之并——此处「相对开集」指在该子集的子空间拓扑中为开集的集合。下面的定理用这一性质给出了区间的完整刻画。子集 $S \subseteq \mathbb{R}$ 是区间，当且仅当它是连通的。

这一结果精确化了如下直观概念：区间是实数轴上没有间隙的一部分。连通性的条件排除了诸如 $(1, 2) \cup (3, 4)$ 这样的集合，它们之所以不是区间，是因为它们可以被分成两个不相交的相对开集。

[shortcode="intervals"]
|     | $1$ | $2$ | $3$ | $4$ |     |
|:----|-----|-----|-----|-----|-----|
|     | sign+l-in-o-h | sign+r-in-o-h |  |  |     |
|     |  |  | sign+l-in-o-h | sign+r-in-o-h |     |
[/shortcode]

> 这两个区间占据实数轴上分离的、不重叠的部分，无法合并为一个连通的整体，由此确认它们的并集不是区间。
