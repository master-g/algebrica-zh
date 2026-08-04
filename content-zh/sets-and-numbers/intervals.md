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
  source_hash: f275a9a6d32e37330f86cf6dede6292ad31652814ce9327a3b0167fef2a39f82
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

区间是实数轴的一个子集，具有这样的性质：只要两个点属于它，那么位于这两个点之间的每个点也属于它。更准确地说，子集 $I \subseteq \mathbb{R}$ 是区间，当且仅当对于每一对满足 $a < b$ 的点 $a,b \in I$，整个集合 $\\{x \in \mathbb{R} : a \leq x \leq b\\}$ 都包含在 $I$ 中。这一性质称为实数轴上的凸性，它将区间与 $\mathbb{R}$ 的任意子集区分开来，例如有限集或不连通片段的并集。

区间是数学分析中最基本的对象之一。它们作为函数的定义域出现，作为[定积分](../definite-integrals/)理论中的积分区域出现，作为研究连续性与可微性的集合出现，也作为描述[实数轴](../real-numbers/)上更复杂子集的基本构件出现。

区间按照端点是否包含，以及是否有界或在一个或两个方向上无限延伸来分类。

## 有界区间

有界区间是包含在实数轴有限部分中的区间，也就是说，存在实数 $a$ 和 $b$，满足 $a \leq b$，使得该区间是 $[a,b]$ 的子集。以 $a$ 和 $b$ 为端点的开区间，是严格位于 $a$ 与 $b$ 之间且不包含两个端点的所有实数构成的集合，定义为：

$$
(a, b) = \\{x \in \mathbb{R} : a < x < b\\}
$$

[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-o | sign+r-in-o |     |
[/shortcode]

以 $a$ 和 $b$ 为端点的闭区间，是介于 $a$ 与 $b$ 之间且包含两个端点的所有实数构成的集合，定义为：

$$
[a, b] = \\{x \in \mathbb{R} : a \leq x \leq b\\}
$$

[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-c | sign+r-in-c |     |
[/shortcode]

以 $a$ 和 $b$ 为端点的两个半开区间分别包含一个端点而排除另一个端点，定义为：

$$
[a, b) = \\{x \in \mathbb{R} : a \leq x < b\\}
$$

[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-c | sign+r-in-o |     |
[/shortcode]

$$
(a, b] = \\{x \in \mathbb{R} : a < x \leq b\\}
$$

[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-o | sign+r-in-c |     |
[/shortcode]

退化区间是特殊情形 $[a,a]=\\{a\\}$，它恰好包含一个点。它平凡地满足区间的定义，因为不存在两个不同的点需要考虑它们之间的其他点。

## 无界区间

无界区间至少在一个方向上无限延伸。由于无穷不是实数，符号 $+\infty$ 和 $-\infty$ 纯粹作为记号约定，用来表示区间在相应方向上没有有限边界。端点 $+\infty$ 和 $-\infty$ 总是排除在外，相应的括号总是圆括号。四个无界区间定义如下。

$$
[a, +\infty) = \\{x \in \mathbb{R} : x \geq a\\}
$$

[shortcode="intervals"]
|     | $a$ |     |
|:----|-----|-----|
|     | sign+l-c |     |
[/shortcode]

$$
(a, +\infty) = \\{x \in \mathbb{R} : x > a\\}
$$

[shortcode="intervals"]
|     | $a$ |     |
|:----|-----|-----|
|     | sign+l-o |     |
[/shortcode]

$$
(-\infty, b] = \\{x \in \mathbb{R} : x \leq b\\}
$$

[shortcode="intervals"]
|     | $b$ |     |
|:----|-----|-----|
|     | sign+r-c |     |
[/shortcode]

$$
(-\infty, b) = \\{x \in \mathbb{R} : x < b\\}
$$

[shortcode="intervals"]
|     | $b$ |     |
|:----|-----|-----|
|     | sign+r-o |     |
[/shortcode]

整个实数轴本身也是一个区间，记作 $(-\infty,+\infty)=\mathbb{R}$；它包含每个实数，不受任何限制。

## 区间的运算

给定两个区间，可以通过[集合](../sets/)词条中定义的交集与并集这两种标准集合论运算来组合它们，从而形成新的集合。交集 $I \cap J$ 是同时属于两个区间的所有点组成的集合。两个区间的交集总是一个区间，但可能为空或退化。考虑 $I=(1,5)$ 和 $J=(3,7)$。同时属于两者的值恰好是 $(3,5)$ 中的那些值。

[shortcode="intervals"]
|     | $1$ | $3$ | $5$ | $7$ |     |
|:----|-----|-----|-----|-----|-----|
|     | sign+l-in-o |             | sign+r-in-o |             |     |
|     |             | sign+l-in-o |             | sign+r-in-o |     |
|     |             | sign+l-in-o-h | sign+r-in-o-h |           |     |
[/shortcode]

第三行展示交集 $(3,5)$，即两个区间共有的部分。

- - -

并集 $I \cup J$ 是至少属于两个区间之一的所有点组成的集合。与交集不同，两个区间的并集并不总是区间。它是区间，当且仅当两个区间重叠或共享一个端点。考虑同一个例子：$I=(1,5)$，$J=(3,7)$。由于两个区间重叠，它们的并集是区间 $(1,7)$。

[shortcode="intervals"]
|     | $1$ | $3$ | $5$ | $7$ |     |
|:----|-----|-----|-----|-----|-----|
|     | sign+l-in-o |             | sign+r-in-o |             |     |
|     |             | sign+l-in-o |             | sign+r-in-o |     |
|     | sign+l-in-o-h | sign+s-h |             | sign+r-in-o-h |     |
[/shortcode]

第三行展示并集 $(1,7)$。相比之下，并集 $(1,3) \cup (5,7)$ 不是区间，因为 $3$ 与 $5$ 之间的点不属于任何一个集合。

## 区间与邻域

与区间密切相关且在数学分析中居于核心地位的概念，是点的邻域。给定点 $x_0 \in \mathbb{R}$ 和实数 $\varepsilon > 0$，开区间：

$$
(x_0 - \varepsilon, \, x_0 + \varepsilon)
$$

称为 $x_0$ 的 $\varepsilon$-邻域，或简称 $x_0$ 的邻域。它由所有到 $x_0$ 的距离严格小于 $\varepsilon$ 的点组成，也就是所有满足 $|x-x_0|<\varepsilon$ 的 $x$，其中 $|\cdot|$ 表示[绝对值](../absolute-value/)。

[shortcode="intervals"]
|     | $x_0 - \varepsilon$ | $x_0$ | $x_0 + \varepsilon$ |     |
|:----|---------------------|-------|---------------------|-----|
|     | sign+l-in-o-h | sign+s-h | sign+r-in-o-h |     |
[/shortcode]

邻域提供了自然表达[极限](../limits/)、连续性和可微性定义的语言。它们与内点、开集和闭集以及紧性的关系，在[实数轴的拓扑](../topology-of-the-real-line/)中展开。若对 $f(x_0)$ 的每个邻域，都存在一个 $x_0$ 的邻域，使其在 $f$ 下的像包含于前一个邻域中，则函数 $f$ 在 $x_0$ 处连续。这一表述等价于经典的 $\varepsilon$-$\delta$ 定义，并明确体现了区间的作用。

如果点 $x_0$ 的某个邻域完全包含在集合 $S \subseteq \mathbb{R}$ 中，就称 $x_0$ 是 $S$ 的内点。开区间的每个点都是它的内点，这是开区间在分析中占据重要地位的原因之一。相反，闭区间的端点不是内点：端点的每个邻域都包含区间外的点。

## 区间的长度

以 $a$ 和 $b$ 为端点的有界区间，其长度定义为 $b-a$，不论端点是否包含。四个区间 $(a,b)$、$[a,b)$、$(a,b]$ 和 $[a,b]$ 的长度都相同，由下式给出：

$$
\ell(I) = b - a
$$

单个点没有延展，因此向区间中加入或从中移除有限个点不会改变其长度。退化区间 $[a,a]$ 的长度为 $\ell([a,a])=0$，与这一观察一致。无界区间具有无穷长度，意思是对于每个 $M>0$，区间中都存在与某点的距离超过 $M$ 的点，因此无法为其长度指定有限值。

长度与基数是不同的大小概念。每个非退化区间的基数都与 $\mathbb{R}$ 相同，与其长度或端点是否包含无关。这一比较在[基数与可数集](../cardinality-and-countable-sets/)中证明。

长度的概念是实数轴上测度理论的起点，它为 $\mathbb{R}$ 的任意子集赋予一种广义的大小概念。区间 $[a,b]$ 的测度等于其长度 $b-a$；通过外测度和可测性将这一赋值推广到更复杂的集合，便构成了[勒贝格积分](../riemann-integrability-criteria/)的基础。

## 区间的刻画

如果实数轴的一个子集不能写成两个不相交的非空开集之并，就称它是连通的。下面的定理用这一性质完整刻画了区间：子集 $S \subseteq \mathbb{R}$ 是区间，当且仅当它是连通的。

这一结果精确表达了如下直观想法：区间是实数轴上一段没有间隙的部分。连通性条件排除了 $(1,2) \cup (3,4)$ 这样的集合；它们之所以不是区间，是因为可以被分成两个不相交的开集。

[shortcode="intervals"]
|     | $1$ | $2$ | $3$ | $4$ |     |
|:----|-----|-----|-----|-----|-----|
|     | sign+l-in-o-h | sign+r-in-o-h |  |  |     |
|     |  |  | sign+l-in-o-h | sign+r-in-o-h |     |
[/shortcode]

> 这两个区间占据实数轴上相互分离且不重叠的部分，无法合并成一个连通的整体，这也确认了它们的并集不是区间。
