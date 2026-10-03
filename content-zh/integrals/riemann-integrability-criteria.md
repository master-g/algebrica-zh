---
title: 黎曼可积性判据
title_en: Riemann Integrability Criteria
source: https://algebrica.org/riemann-integrability-criteria/
license: CC BY-NC 4.0
tags:
  - bounded-functions
  - continuous-functions
  - darboux-sums
  - definite-integral
  - dirichlet-function
  - integration
  - lebesgue-measure
  - monotone-functions
  - partition
  - riemann-integral
  - thomae-function
translation:
  status: current
  source_hash: 980534ed71160653292fc040e79c9b06739cd58b910d28480dbed97060670712
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 划分、上和与下和

我们知道，[闭区间](../intervals/)上有界[函数](../functions/)的[黎曼积分](../definite-integrals/)度量的是其图像下方的面积（计入符号）。这是通过矩形近似实现的，这些近似逐步收敛到同一个值。主要的困难通常在于判断这个[极限](../limits/)过程是否定义良好。下面我们给出一系列判据，即使函数并不明显[连续](../continuous-functions/)，它们也能回答这个问题。

我们要给出的判据，在以下几种情形中判定 $[a,b]$ 上的有界函数 $f$ 是否可积。最后两个条件用到勒贝格测度，我们稍后再介绍。

+ 如果 $f$ 在 $[a, b]$ 上连续，那么它可积。
+ 如果 $f$ 在 $[a, b]$ 上[单调](../increasing-and-decreasing-functions/)，那么它可积。
+ 如果 $f$ 只有有限个不连续点，那么它可积。
+ 如果 $f$ 的不连续点构成零测度集合，那么它可积。
+ 如果 $f$ 的不连续点集具有正的勒贝格测度，那么 $f$ 不是黎曼可积的。

- - -

我们从两个点 $a < b$ 和一个有界函数 $f:[a,b]\to\mathbb{R}$ 出发。把 $[a,b]$ 的一个划分 $P$ 定义为点的有限集合 $P = \{\ x_0, x_1, \dots, x_n \ \}$，这些点的排列顺序满足：

$$a = x_0 < x_1 < \cdots < x_n = b$$

在每个子区间 $[x_{i-1}, x_i]$ 上，我们定义 $f$ 的[上确界和下确界](../supremum-and-infimum/)。由于 $f$ 有界，可以把它的上确界和下确界定义如下：

$$M_i = \sup_{x \in [x_{i-1}, x_i]} f(x)$$

$$m_i = \inf_{x \in [x_{i-1}, x_i]} f(x)$$

$M_i$ 是大于或等于 $f$ 在子区间 $[x_{i-1},x_i]$ 上所取每个值的最小数，而 $m_i$ 是小于或等于 $f$ 在同一子区间上所取每个值的最大数。下图展示了一个非负函数及其下和。在每个子区间上，矩形的上边位于高度 $m_i$ 处，在图像上或图像下方。

![图 1](/assets/integrals/svg/riemann-integrability-criteria-1.zh.svg)

下一幅图展示上和。每个矩形的上边位于高度 $M_i$ 处，在图像上或图像上方。

![图 2](/assets/integrals/svg/riemann-integrability-criteria-2.zh.svg)

我们知道，当 $f$ 黎曼可积时，它的积分介于下和与上和之间。

当 $f$ 连续时，$M_i$ 和 $m_i$ 就是子区间上实际取到的最大值和最小值；但对一般的有界函数，我们使用上确界和下确界，因为在该区间上最大值或最小值可能永远取不到。

利用 $M_i$ 和 $m_i$，我们定义所谓的达布上和与达布下和，它们分别由下式给出：

$$U(f, P) = \sum_{i=1}^n M_i(x_i - x_{i-1})$$

$$L(f, P) = \sum_{i=1}^n m_i(x_i - x_{i-1})$$

这些和满足下列顺序性质：

+ 随着我们把划分细化为越来越小的子区间，上和只会减小或保持不变，下和只会增大或保持不变。
+ 此外，每个下和都小于或等于每个上和，即使它们对应不同的划分也是如此，因为二者可以通过一个共同的细化来比较。

特别地，下面的不等式成立：

$$L(f, P) \leq U(f, P)$$

因此，细化会缩小上和与下和之间的差，或者使它保持不变，但这个差不一定趋于零。

## 达布判据

达布判据指出，有界闭区间上的有界函数黎曼可积，当且仅当存在划分使上和与下和之差任意小。为了看出这一点，我们先把 $f$ 的上积分和下积分定义为所有上和的下确界与所有下和的上确界：

$$U(f) = \inf_{P} U(f, P)$$

$$L(f) = \sup_{P} L(f, P)$$

在两个定义中，$P$ 都取遍 $[a, b]$ 的所有划分。量 $U(f)$ 是上和的最大下界，而 $L(f)$ 是下和的最小上界。由上面的顺序性质，对每个有界函数 $f$ 都有 $L(f) \leq U(f)$。有界函数 $f$ 在 $[a, b]$ 上黎曼可积，当且仅当这两个数相等：

$$U(f) = L(f)$$

此时，它们的公共值由下面的积分给出：

$$\int_a^b f(x) \ dx = U(f) = L(f)$$

所以这个等式给出了黎曼可积性的定义。与这个定义等价的达布判据指出：有界函数 $f$ 在 $[a, b]$ 上黎曼可积，当且仅当对每个 $\varepsilon > 0$，都存在一个划分 $P$，使得：

$$U(f, P) - L(f, P) < \varepsilon$$

![图 3](/assets/integrals/svg/riemann-integrability-criteria-3.zh.svg)

这些图以一个任意的连续函数为例说明这个判据。粗的划分在上、下矩形之间留下明显的差，而细化划分会缩小这个差，因为该函数在充分短的子区间上振幅很小。

![图 4](/assets/integrals/svg/riemann-integrability-criteria-4.zh.svg)

对于可积函数，可以找到一个划分，使上和与下和想要多接近就多接近；要证明可积性，只需对每个 $\varepsilon > 0$ 构造出这样的划分。具体地说，在每个子区间 $[x_{i-1}, x_i]$ 上，差 $M_i - m_i$ 是 $f$ 在该子区间上的振幅。直接计算得到：

$$U(f, P) - L(f, P) = \sum_{i=1}^n (M_i - m_i)(x_i - x_{i-1})$$

所以这个恒等式表示的就是两个达布和之间的差。有界函数可积，恰好当对每个 $\varepsilon > 0$ 都存在一个划分使这个和小于 $\varepsilon$。

反之，如果这个差有一个对所有划分都成立的正下界，也就是说，存在常数 $\eta > 0$ 使下面的不等式对每个划分都成立，那么函数不是黎曼可积的：

$$
U(f,P)-L(f,P)=\sum_{i=1}^{n}(M_i-m_i)(x_i-x_{i-1})\geq\eta
$$

事实上，如果取 $\varepsilon=\eta$，就没有任何划分满足达布判据所要求的不等式。

## 常用的充分条件

下面三个条件都蕴含黎曼可积性，并且常常使我们不必直接估计达布和；毕竟在每个子区间上求上确界和下确界，再找出一个使差小于 $\varepsilon$ 的划分，可能并不容易。$[a, b]$ 上的有界函数 $f$ 只要至少满足其中一个条件，就黎曼可积。

+ 如果 $f$ 在 $[a, b]$ 上[连续](../continuous-functions/)，那么它[一致连续](../uniform-continuity/)。因此，在所有充分短的子区间上，它的振幅 $M_i - m_i$ 一致地小，由达布判据得到可积性。
+ 如果 $f$ 在 $[a, b]$ 上单调，用 $\lVert P\rVert$ 表示最长子区间的长度。用 $\lVert P\rVert$ 作为每个子区间长度的上界，得到 $U(f, P) - L(f, P) \leq \lVert P\rVert|f(b) - f(a)|$，因为各端点处函数值之差的绝对值构成一个裂项和。因此这个差可以任意小。
+ 如果 $f$ 有界且只有有限个[不连续点](../discontinuities-of-real-functions/)，我们可以用总长度任意小的区间覆盖这些点。有界性控制了这些区间上的贡献。在其余的紧致部分上，$f$ 一致连续，这使我们能够控制达布和之差的其余部分。这个条件包括有界闭区间上的[分段连续函数](../piecewise-functions/)。

请记住，一个函数即使不满足上面三个条件中的任何一个，也可能可积。此外，即使是单调函数，它的不连续点也可能[在区间中稠密](../topology-of-the-real-line/)。因此，要刻画黎曼可积性，需要考虑不连续点集的测度，下一个判据就是这样做的。

## 基于不连续点集的判据

现在转到一个更深入的情形，考虑有界函数 $f:[a,b]\to\mathbb{R}$。这个函数黎曼可积，当且仅当它的不连续点集的勒贝格测度为零。通俗地说，这意味着所有不连续点可以被有限个或可数个区间覆盖，而这些区间的总长度任意小。

严格地说，集合 $D \subset [a, b]$ 的测度为零，是指对每个 $\varepsilon > 0$，它都可以被一个总长度小于 $\varepsilon$ 的可数区间族覆盖。因此，不连续点集可以是无限集，也可以是稠密集，只要它的测度为零。下面两个例子把正测度的不连续点集与零测度的不连续点集作一对比。

- - -

作为例子，取[狄利克雷函数](../dirichlet-function/)，它定义为：

$$
f(x) =
\begin{cases}
1 & x \in \mathbb{Q} \\[6pt]
0 & x \notin \mathbb{Q}
\end{cases}
$$

这个函数在 $[a, b]$ 的每一点都[不连续](../discontinuities-of-real-functions/)，所以它的不连续点集是整个区间，具有正测度。因此狄利克雷函数不是黎曼可积的。每个子区间都同时含有有理数和无理数，所以对每个 $i$ 都有 $M_i = 1$ 和 $m_i = 0$。由此可知，对每个划分 $P$ 都有 $U(f, P) - L(f, P) = b - a$，无论划分多细。

- - -

每个有限集或[可数集](../cardinality-and-countable-sets/)的勒贝格测度都为零。现在考虑托马函数，它定义为：

$$
t(x) =
\begin{cases}
0 & x \notin \mathbb{Q} \\[6pt]
\dfrac{1}{q} & x = \dfrac{p}{q}
\end{cases}
$$

在第二行中，$p\in\mathbb{Z}$、$q\in\mathbb{N}$、$q>0$，且分数 $p/q$ 为最简分数。

这个函数恰好在[有理数](../rational-numbers/)处不连续，在每个[无理数](../irrational-numbers/)处连续。$[a, b]$ 中的有理数构成可数集，所以托马函数黎曼可积。由于 $t \geq 0$ 且每个子区间都含有无理数，每个达布下和都为零。因此上积分与下积分的公共值为零。
