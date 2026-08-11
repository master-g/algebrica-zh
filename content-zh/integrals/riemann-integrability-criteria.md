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
  source_hash: 0dd940d789b5af3ca85bc84a294b291a9c6a5cda2dfeda0df19721821ce40b9b
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 划分、上和与下和

[闭区间](../intervals/)上的有界[函数](../functions/)的黎曼积分，在矩形近似收敛到共同值时，测量其图像下方的有向面积。主要问题是如何判断这个[极限](../limits/)过程是否定义良好。即使函数并不明显[连续](../continuous-functions/)，下面的判据也能回答这个问题。[定积分](../definite-integrals/)页面给出定义与基本性质。

- - -

设 $a < b$，且 $f:[a,b]\to\mathbb{R}$ 有界。$[a,b]$ 的一个划分 $P$ 是点的有限集合：

$$P = \{\ x_0, x_1, \dots, x_n \ \}$$

这些点按递增顺序排列：

$$a = x_0 < x_1 < \cdots < x_n = b$$

在每个子区间 $[x_{i-1}, x_i]$ 上，定义 $f$ 的上确界和下确界。由于 $f$ 有界，这两个量都有限：

$$M_i = \sup_{x \in [x_{i-1}, x_i]} f(x)$$

$$m_i = \inf_{x \in [x_{i-1}, x_i]} f(x)$$

量 $M_i$ 是 $f$ 在该子区间上的[上确界](../supremum-and-infimum/)，即不小于 $f$ 在那里所取任意值的最小数。量 $m_i$ 是下确界，即不大于 $f$ 在那里所取任意值的最大数。

![图 1](/assets/integrals/svg/riemann-integrability-criteria-1.zh.svg)

第一幅图展示所示非负函数的下和。在每个子区间上，矩形上边的高度为 $m_i$，并位于图像之下或与其相交。第二幅图展示上和。每个矩形上边的高度为 $M_i$，并位于图像之上或与其相交。当 $f$ 黎曼可积时，下和与上和夹住其积分。

![图 2](/assets/integrals/svg/riemann-integrability-criteria-2.zh.svg)

对于图中所示的连续函数，细化划分会分割部分矩形，并减小或保持两个近似值之间的差。

- - -

当 $f$ 连续时，$M_i$ 和 $m_i$ 分别等于子区间上的实际最大值和最小值。对于一般的有界函数，使用上确界和下确界，是因为函数可能取不到最大值或最小值。利用 $M_i$ 和 $m_i$，达布上和与下和定义为：

$$U(f, P) = \sum_{i=1}^n M_i(x_i - x_{i-1})$$

$$L(f, P) = \sum_{i=1}^n m_i(x_i - x_{i-1})$$

达布和具有两个顺序性质。细化划分只会使上和减小、下和增大。此外，即使来自不同划分，每个下和也不大于每个上和，因为二者都可以通过共同细化进行比较。特别地：

$$L(f, P) \leq U(f, P)$$

因此，细化会缩小或保持上下和之间的差，但这个差未必趋于零。有界函数可积，当且仅当存在适当的划分使该差任意小。

## 达布判据

为陈述判据，对所有上和取下确界、对所有下和取上确界，以此定义 $f$ 的上积分和下积分：

$$U(f) = \inf_{P} U(f, P)$$

$$L(f) = \sup_{P} L(f, P)$$

在两个定义中，$P$ 都遍历 $[a, b]$ 的所有划分。$U(f)$ 是所有上和的下确界，$L(f)$ 是所有下和的上确界。上述顺序性质说明，每个有界函数 $f$ 都满足 $L(f) \leq U(f)$。

有界函数 $f$ 在 $[a, b]$ 上黎曼可积，当且仅当这两个数相等：

$$U(f) = L(f)$$

此时，它们的公共值就是积分：

$$\int_a^b f(x) \ dx = U(f) = L(f)$$

这个等式给出定义，却很少允许直接计算。等价的达布判据指出：有界函数 $f$ 在 $[a, b]$ 上黎曼可积，当且仅当每个 $\varepsilon > 0$ 都对应一个划分 $P$，使得：

$$U(f, P) - L(f, P) < \varepsilon$$

![图 3](/assets/integrals/svg/riemann-integrability-criteria-3.zh.svg)

这些图示说明了所示连续函数的判据。粗划分会在上下矩形之间留下明显的差。细化划分会缩小这个差，因为该函数在短子区间上的振幅很小。

![图 4](/assets/integrals/svg/riemann-integrability-criteria-4.zh.svg)

对于可积函数，总能找到一个划分，使上和与下和按指定程度接近。要证明可积性，只需对每个 $\varepsilon > 0$ 构造这样的划分。

在每个子区间 $[x_{i-1}, x_i]$ 上，差值 $M_i - m_i$ 是 $f$ 在该子区间上的振幅。直接计算得到：

$$U(f, P) - L(f, P) = \sum_{i=1}^n (M_i - m_i)(x_i - x_{i-1})$$

该恒等式把达布差表示为振幅的加权和。有界函数可积，当且仅当对每个 $\varepsilon > 0$，都存在某个划分使该和小于 $\varepsilon$。如果该和在所有划分上都有正下界，则函数不可黎曼积分。

## 常用的充分条件

以下三个条件都蕴含黎曼可积性，并且通常可以避免直接估计达布和。有界函数 $f$ 在 $[a, b]$ 上只要满足其中任一条件，就黎曼可积。

+ 如果 $f$ 在 $[a, b]$ 上[连续](../continuous-functions/)，那么它一致连续。因此，在每个充分短的子区间上，振幅 $M_i - m_i$ 一致地变小，达布判据给出可积性。
+ 如果 $f$ 在 $[a, b]$ 上单调，令 $\lVert P\rVert$ 表示最大子区间长度。用 $\lVert P\rVert$ 限制每个子区间长度，并利用端点差的裂项相消，可得 $U(f, P) - L(f, P) \leq \lVert P\rVert|f(b) - f(a)|$。因此该差可以任意小。
+ 如果 $f$ 有界且只有有限个[不连续点](../discontinuities-of-real-functions/)，就可以用总长度任意小的区间覆盖这些点。有界性控制这些区间上的贡献。在剩余的紧集片段上，$f$ 一致连续，从而控制达布差的其余部分。该条件包含闭有界区间上的[分段连续函数](../piecewise-functions/)。

> 这些条件相互重叠，且都是充分条件而非必要条件。单调函数可以有稠密的可数跳跃间断点集，因此仅凭稠密性不能判断黎曼可积性。准确条件取决于不连续点集的测度。

## 不连续点集判据

有界函数 $f:[a,b]\to\mathbb{R}$ 在该区间上黎曼可积，当且仅当它的不连续点集合具有勒贝格测度零。集合 $D \subset [a, b]$ 具有零测度，是指对每个 $\varepsilon > 0$，都可以用一个总长度小于 $\varepsilon$ 的可数区间族覆盖它。因此，不连续点集可以是无限集或稠密集，只要其测度为零。下面两个例子对比正测度与零测度的不连续点集。

> 勒贝格测度把通常的长度概念扩展到区间之外。区间 $[c, d]$ 的测度为 $d - c$。集合具有零测度，是指可以用总长度任意小的区间覆盖它。每个有限集或可数集都具有零测度。特别地，$\mathbb{Q} \cap [a, b]$ 具有零测度。

- - -

[狄利克雷函数](../dirichlet-function/)定义为：

$$
f(x) =
\begin{cases}
1 & x \in \mathbb{Q} \\[6pt]
0 & x \notin \mathbb{Q}
\end{cases}
$$

它在 $[a, b]$ 的每一点都[不连续](../discontinuities-of-real-functions/)，因此不连续点集合就是整个区间，并且具有正测度。所以狄利克雷函数不是黎曼可积的。每个子区间同时包含有理数和无理数，因此对每个 $i$ 都有 $M_i = 1$ 和 $m_i = 0$。所以，对每个划分 $P$ 都有 $U(f, P) - L(f, P) = b - a$，无论划分多么细都不例外。

- - -

托马函数定义为：

$$
t(x) =
\begin{cases}
0 & x \notin \mathbb{Q} \\[6pt]
\dfrac{1}{q} & x = \dfrac{p}{q},\quad \gcd(p,q)=1,\ q > 0
\end{cases}
$$

它恰好在有理数处不连续，在每个无理数处连续。$[a, b]$ 中的有理数构成可数集，因此托马函数黎曼可积。由于 $t \geq 0$，且每个子区间都包含无理数，每个达布下和都为零。因此，上积分与下积分的公共值为零。

## 识别黎曼可积性

要判断 $[a, b]$ 上的有界函数 $f$ 是否黎曼可积，可使用以下检查。

+ 如果 $f$ 在 $[a, b]$ 上连续，那么它可积。
+ 如果 $f$ 在 $[a, b]$ 上单调，那么它可积。
+ 如果 $f$ 只有有限个不连续点，那么它可积。
+ 如果 $f$ 的不连续点构成零测度集合，那么它可积。
+ 如果 $f$ 的不连续点集具有正勒贝格测度，则 $f$ 不黎曼可积。直接的达布证明则寻找常数 $\eta > 0$，使每个划分 $P$ 都满足 $U(f, P) - L(f, P) \geq \eta$。

> 对于具有已知反导数 $F$ 的连续被积函数，[微积分基本定理](../fundamental-theorem-of-calculus/)给出 $\int_a^b f(x) \ dx = F(b) - F(a)$。反导数可以通过[换元积分](../integration-by-substitution/)或[分部积分](../integration-by-parts/)求得。如果没有闭式结果，[数值积分](../numerical-integration/)可以近似积分值。
