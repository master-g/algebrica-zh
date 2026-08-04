---
title: 贝塔分布
title_en: Beta Distribution
source: https://algebrica.org/beta-distribution/
license: CC BY-NC 4.0
tags:
  - beta-distribution
  - beta-function
  - continuous-random-variables
  - expected-value
  - gamma-function
  - normal-approximation
  - probability
  - probability-density-function
  - statistics
  - uniform-distribution
  - variance
translation:
  status: current
  source_hash: 3a5b8986a6c51378296812e1faae04baca8cd95d487fceb87848f46205490dc3
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 贝塔分布简介

贝塔分布是在开[区间](../intervals/) $(0, 1)$ 上的连续概率分布。它有两个正参数 $\alpha$ 和 $\beta$，它们决定密度的曲率以及概率质量沿该区间的分布。服从贝塔分布的随机变量只取 $0$ 到 $1$ 之间的值，因此该分布可以对比例、比值和概率建模。它的[概率密度函数](../continuous-random-variables/)为：

$$f(x; \alpha, \beta) = \frac{x^{\alpha - 1}(1 - x)^{\beta - 1}}{B(\alpha, \beta)} \quad 0 < x < 1$$

归一化常数 $B(\alpha, \beta)$ 是贝塔函数，它具有如下的伽马函数表示：

$$B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}$$

代入后可得密度的以下等价形式：

$$f(x; \alpha, \beta) = \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha - 1}(1 - x)^{\beta - 1}$$

在区间 $(0, 1)$ 之外，密度为零。伽马函数 $\Gamma(c)$ 对每个 $c \in \mathbb{R}^+$ 都有定义，它的[反常积分](../improper-integrals/)表示为：

$$\Gamma(c) = \int_{0}^{+\infty} x^{c - 1} e^{-x} \ dx$$

对于每个[自然数](../natural-numbers/) $n$，恒等式 $\Gamma(n + 1) = n!$ 将伽马函数与[阶乘](../factorial/)联系起来。因此，函数 $x \mapsto \Gamma(x + 1)$ 将阶乘延拓到正[实数](../real-numbers/)。[累积分布函数](../continuous-random-variables/)为 $F(x) = P(X \le x)$。当 $0 \le x \le 1$ 时，它有如下积分表示：

$$F(x; \alpha, \beta) = \frac{1}{B(\alpha, \beta)} \int_{0}^{x} t^{\alpha - 1}(1 - t)^{\beta - 1} \ dt = I_x(\alpha, \beta)$$

函数 $I_x(\alpha, \beta)$ 是正则化不完全贝塔函数，即用完整贝塔函数 $B(\alpha, \beta)$ 除不完全积分所得的结果。对于正整数参数，它等于试验次数为 $\alpha + \beta - 1$ 的[二项分布](../binomial-distribution/)的上尾概率：

$$I_x(\alpha, \beta) = \sum_{j = \alpha}^{\alpha + \beta - 1} \binom{\alpha + \beta - 1}{j} x^{j}(1 - x)^{\alpha + \beta - 1 - j}$$

## 贝塔分布的形状

贝塔分布的形状取决于 $\alpha$ 和 $\beta$ 的取值。其密度可以是单峰的、U 形的，或是[单调](../increasing-and-decreasing-functions/)的。当两个参数都大于 $1$ 或都小于 $1$ 时，密度有一个内部[临界点](../maximum-minimum-and-inflection-points/)：

$$x_0 = \frac{\alpha - 1}{\alpha + \beta - 2}$$

该点的性质取决于参数：

+ 如果 $\alpha > 1$ 且 $\beta > 1$，点 $x_0$ 是最大值，分布为单峰分布，众数就在该点。
+ 如果 $0 < \alpha < 1$ 且 $0 < \beta < 1$，点 $x_0$ 是最小值，密度呈 U 形。
+ 如果一个参数大于或等于 $1$，另一个参数小于或等于 $1$，且 $(\alpha, \beta) \neq (1, 1)$，密度是单调的。
+ 如果 $\alpha = \beta = 1$，密度为常数。

交换两个参数会使密度关于区间中点发生镜像反射。如果 $X \sim \mathrm{Beta}(\alpha, \beta)$，那么 $1 - X \sim \mathrm{Beta}(\beta, \alpha)$。当 $\alpha = \beta$ 时，这种反射不改变密度，因此密度关于竖直直线 $x = \tfrac{1}{2}$ [对称](../even-and-odd-functions/)。

- - -

下图展示了对称情形 $0 < \alpha = \beta < 1$。密度呈 U 形，并在区间 $(0, 1)$ 的端点附近趋于无穷大。它在 $x = x_0$ 处取得最小值，这是其在[定义域](../determining-the-domain-of-a-function/)上的最低值。

![图 1](/assets/probability-and-statistics/svg/beta-distribution-1.svg)

当 $\alpha = \beta > 1$ 时，贝塔分布关于竖直直线 $x = \tfrac{1}{2}$ 对称，并且在那里有唯一的众数。公共参数增大时，密度会更集中在 $x = \tfrac{1}{2}$ 附近，正态分布给出的近似也会更加准确。

![图 2](/assets/probability-and-statistics/svg/beta-distribution-2.svg)

当 $\alpha$ 和 $\beta$ 较大时，近似的[正态分布](../normal-distribution/)具有以下均值和方差：

$$\mu = \frac{\alpha}{\alpha + \beta} \qquad \sigma^2 = \frac{\alpha \beta}{(\alpha + \beta)^2 (\alpha + \beta + 1)}$$

在对称情形 $\alpha = \beta = k$ 中，这些参数为：

$$\mu = \tfrac{1}{2} \qquad \sigma^2 = \frac{1}{4(2k + 1)} \approx \frac{1}{8k}$$

因此，当 $k \to \infty$ 时，分布近似为：

$$\mathrm{Beta}(k, k) \approx \mathcal{N}\!\left(\tfrac{1}{2}, \frac{1}{4(2k + 1)}\right)$$

- - -

对于 $X \sim \mathrm{Beta}(\alpha, \beta)$，其概率密度函数、均值、方差和[标准差](../variance-and-covariance-of-a-random-variable/)为：

[class="table-1"]

|  |
| :--- |
| $f(x; \alpha, \beta) = \dfrac{x^{\alpha - 1}(1 - x)^{\beta - 1}}{B(\alpha, \beta)}, \quad 0 < x < 1$ |
| $\mu = E(X) = \dfrac{\alpha}{\alpha + \beta}$ |
| $\sigma^{2} = \mathrm{Var}(X) = \dfrac{\alpha \beta}{(\alpha + \beta)^{2}(\alpha + \beta + 1)}$ |
| $\sigma = \sqrt{\dfrac{\alpha \beta}{(\alpha + \beta)^{2}(\alpha + \beta + 1)}}$ |

[/class]

## 贝塔分布的均值

贝塔分布随机变量的[均值](../introduction-to-the-mean/)，也称为[期望值](../mean-or-expected-value-of-a-random-variable/)，由形状参数 $\alpha$ 和 $\beta$ 决定。根据定义，其均值为：

$$\mu = E(X) = \int_{0}^{1} x f(x; \alpha, \beta) \ dx$$

代入概率密度函数得：

$$E(X) = \int_{0}^{1} x \frac{x^{\alpha - 1} (1 - x)^{\beta - 1}}{B(\alpha, \beta)} \ dx$$

合并 $x$ 的幂得：

$$E(X) = \frac{1}{B(\alpha, \beta)} \int_{0}^{1} x^{\alpha} (1 - x)^{\beta - 1} \ dx$$

右侧的积分是贝塔函数 $B(\alpha + 1, \beta)$，因此：

$$E(X) = \frac{B(\alpha + 1, \beta)}{B(\alpha, \beta)}$$

贝塔函数具有如下伽马函数表示：

$$B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}$$

由于伽马函数满足递推关系 $\Gamma(c + 1) = c\Gamma(c)$，该比值化简为：

$$E(X) = \frac{\alpha}{\alpha + \beta}$$

> 均值只取决于两个形状参数。当 $\alpha > \beta$ 时它大于 $\tfrac{1}{2}$，当 $\alpha < \beta$ 时它小于 $\tfrac{1}{2}$。

- - -

对于每个整数 $k \geq 1$，用 $x^k$ 替代 $x$ 的同一个积分给出该分布的相应矩：

$$E(X^k) = \frac{B(\alpha + k, \beta)}{B(\alpha, \beta)} = \prod_{r = 0}^{k - 1} \frac{\alpha + r}{\alpha + \beta + r}$$

均值是 $k = 1$ 的情形，而下一节用于计算方差的二阶矩 $E(X^2)$ 是 $k = 2$ 的情形。

## 贝塔分布的方差

贝塔分布的[方差](../variance-and-covariance-of-a-random-variable/)是相对于均值的平方偏差的期望。等价地，它有如下二阶矩公式：

$$\sigma^2 = \mathrm{Var}(X) = E(X^2) - [E(X)]^2$$

$$
\begin{align}
E(X^2) &= \int_{0}^{1} x^2 f(x; \alpha, \beta) \ dx \\[6pt]
&= \frac{1}{B(\alpha, \beta)} \int_{0}^{1} x^{\alpha + 1} (1 - x)^{\beta - 1} \ dx \\[16pt]
&= \frac{B(\alpha + 2, \beta)}{B(\alpha, \beta)}
\end{align}
$$

将这个表达式和均值代入定义，得到：

$$\sigma^2 = \frac{B(\alpha + 2, \beta)}{B(\alpha, \beta)} - \left(\frac{\alpha}{\alpha + \beta}\right)^2$$

贝塔—伽马恒等式为：

$$B(\alpha, \beta) = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}$$

结合递推关系 $\Gamma(c + 1) = c\Gamma(c)$，该恒等式将方差化简为：

$$\sigma^2 = \frac{\alpha \beta}{(\alpha + \beta)^2 (\alpha + \beta + 1)}$$

> 如果比值 $\alpha/(\alpha + \beta)$ 固定，增大集中度 $\alpha + \beta$ 会减小方差，使分布集中在均值附近。

## 特殊情形与相关分布

形状参数取特定值时，贝塔分布会退化为定义在区间 $(0, 1)$ 上的其他著名分布。

[均匀分布](../uniform-distribution/)对应 $\alpha = \beta = 1$。它在区间 $(0, 1)$ 上的概率密度函数为常数。更一般地，区间 $(a, b)$ 上的连续均匀分布具有如下密度：

$$
f(x) =
\begin{cases}
\dfrac{1}{b - a} & a < x < b \\[6pt]
0 & \mathrm{otherwise}
\end{cases}
$$

当 $a = 0$ 且 $b = 1$ 时，这就化为 $f(x) = 1$，正是整个 $(0, 1)$ 上恒定的 $\mathrm{Beta}(1, 1)$ 密度。

当 $\alpha = \beta = \tfrac{1}{2}$ 时，贝塔分布就是反正弦分布。其密度为：

$$f\!\left(x; \tfrac{1}{2}, \tfrac{1}{2}\right) = \frac{1}{\pi \sqrt{x(1 - x)}}$$

该密度在两个端点处发散，并在 $x = \tfrac{1}{2}$ 处取得最小值，正如前面所述的 U 形情形。取 $\alpha = 2$、$\beta = 1$ 时，得到在线性区间上递增的三角形密度：

$$f(x; 2, 1) = 2x$$

交换参数后，$\alpha = 1$、$\beta = 2$ 给出反射后的密度 $f(x; 1, 2) = 2(1 - x)$。恒等式 $1 - X \sim \mathrm{Beta}(\beta, \alpha)$ 将一个情形映射到另一个情形。

贝塔分布也会由伽马分布产生。如果 $U$ 和 $V$ 是相互独立的伽马变量，形状参数分别为 $\alpha$ 和 $\beta$ 且尺度相同，那么它们的归一化比值服从贝塔分布：

$$\frac{U}{U + V} \sim \mathrm{Beta}(\alpha, \beta)$$

从 $(U, V)$ 到 $(U/(U + V), U + V)$ 的变量变换给出了这一分布恒等式，以及贝塔函数与伽马函数之间的关系。
