---
title: 正态分布
title_en: Normal Distribution
source: https://algebrica.org/normal-distribution/
license: CC BY-NC 4.0
tags:
  - central-limit-theorem
  - continuous-random-variables
  - expected-value
  - normal-distribution
  - probability
  - probability-density-function
  - standard-normal-distribution
  - statistics
  - variance
translation:
  status: current
  source_hash: 523661aaa0a9165a416208a336a9b87a64e33efa1a9aab96532f08cf8a82f7ac
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 正态分布的定义

正态分布也称为高斯分布，是一种连续概率分布，其密度函数具有对称的钟形。它描述了一个[连续随机变量](../continuous-random-variables/) $X$：其取值聚集在某个中心值附近，而偏离中心越远，出现的频率就越低。该分布有两个参数：[均值](../introduction-to-the-mean/) $μ$ 是分布的中心；[标准差](../variance/) $σ > 0$ 决定分布的离散程度。记作：

$$X \sim \mathcal{N}(\mu, \sigma^{2})$$

![图 1](/assets/probability-and-statistics/svg/normal-distribution-1.svg)

密度关于 $x = \mu$ 对称，并具有以下性质。

+ 曲线下的总面积等于 $1$，因为密度在整条实数轴上（从 $-\infty$ 到 $+\infty$）的积分为 $1$。
+ 曲线关于均值 $μ$ 对称，因此一半概率位于 $μ$ 左侧，另一半位于右侧。
+ 曲线有两个[拐点](../maximum-minimum-and-inflection-points/)，分别位于 $x = \mu - \sigma$ 和 $x = \mu + \sigma$，这里的[曲率改变符号](../sign-analysis-in-inequalities/)。
+ 当 $x$ 向任一方向远离均值时，曲线都[渐近](../asymptotes/)于水平轴。

参数 $μ$ 沿水平轴平移整条曲线，但不改变其形状。参数 $σ$ 围绕均值拉伸或压缩曲线：较小的 $σ$ 会把概率集中在狭窄而高的峰值中，较大的 $σ$ 则把概率分散成低而宽的曲线。

## 主要特征

对于 $X \sim \mathcal{N}(\mu, \sigma^{2})$，密度、均值、方差和标准差如下所示。参数 $μ$ 和 $σ^{2}$ 分别是该分布的均值和方差。

[class="table-1"]

|                                                                                                  |
| ------------------------------------------------------------------------------------------------ |
| $\mathcal{N}(x; \mu, \sigma) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}}$ |
| $E(X) = \mu$                                                                                     |
| $\mathrm{Var}(X) = \sigma^{2}$                                                                   |
| $\mathrm{SD}(X) = \sigma$                                                                        |

[/class]

> 密度由均值 $μ$ 和标准差 $σ$ 决定。均值是钟形曲线的中心，标准差决定其宽度。

## 正态分布的概率密度函数

服从该分布的随机变量 $X$ 称为正态随机变量。它的概率密度[函数](../functions/)为：

$$\mathcal{N}(x; \mu, \sigma) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}}$$

对每个[实数](../real-numbers/) $x$，都定义了该密度。它表示概率在 $X$ 的各个取值上的相对集中程度，只取决于 $μ$ 和 $σ$。关于随机变量的均值、方差和标准差（无论变量是[离散](../discrete-random-variables/)的还是[连续](../continuous-random-variables/)的），请参阅[随机变量的均值或期望值](../mean-or-expected-value-of-a-random-variable/)以及[随机变量的方差与协方差](../variance-and-covariance-of-a-random-variable/)。

- - -

密度在整条实数轴上的[反常积分](../improper-integrals/)等于 $1$：

$$\frac{1}{\sqrt{2\pi}\sigma} \int_{-\infty}^{+\infty} e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}} \ dx = 1$$

要找出曲线在两个点 $x_0$ 和 $x_1$ 之间的面积，我们计算密度在该[区间](../intervals/)上的[定积分](../definite-integrals/)。

![图 2](/assets/probability-and-statistics/svg/normal-distribution-2.svg)

这个面积就是 $X$ 落在 $[x_0, x_1]$ 中的概率，因此 $X$ 位于 $x_0$ 与 $x_1$ 之间的概率为：

$$
\begin{align}
P(x_0 < X < x_1) &= \int_{x_0}^{x_1} \mathcal{N}(x; \mu, \sigma) \ dx \\[6pt]
&= \frac{1}{\sqrt{2\pi}\sigma} \int_{x_0}^{x_1} e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}} \ dx
\end{align}
$$

该密度没有初等反导数，因此这个积分没有初等闭式。可以通过[数值积分](../numerical-integration/)来近似计算。

## 标准正态分布

每个正态随机变量 $X$ 都有一个标准化形式 $Z$，定义为：

$$Z = \frac{X - \mu}{\sigma}$$

变量 $Z$ 服从标准正态分布，其均值为 $0$、标准差为 $1$，记作 $Z \sim \mathcal{N}(0, 1)$。减去 $μ$ 会把变量的中心移到 $0$，除以 $σ$ 则把离散程度缩放为 $1$。这个变换是可逆的，因为 $X = \sigma Z + \mu$，所以每个正态分布都对应同一条标准曲线。这样，所有概率计算都可以化为查阅同一个参考分布的数值：从[标准正态 Z 表](../standard-normal-z-table/)读取数值，而不必为每一对 $μ$、$σ$ 分别计算一次积分。

- - -

对于一般区间 $[x_0, x_1]$，概率为：

$$P(x_0 < X < x_1) = \frac{1}{\sqrt{2\pi}\sigma} \int_{x_0}^{x_1} e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}} \ dx$$

令 $z = (x-\mu)/\sigma$，应用[换元积分](../integration-by-substitution/)，有 $dx = \sigma \ dz$，于是 $X$ 的区间等价于 $Z$ 的区间：

$$P(x_0 < X < x_1) = P\left(\frac{x_0 - \mu}{\sigma} < Z < \frac{x_1 - \mu}{\sigma}\right)$$

标准化后的上下界为 $z_0 = (x_0-\mu)/\sigma$ 和 $z_1 = (x_1-\mu)/\sigma$。因子 $σ$ 相消，同一个概率可以表示为标准密度的积分：

$$
\begin{align}
P(x_0 < X < x_1) &= \frac{1}{\sqrt{2\pi}\sigma} \int_{x_0}^{x_1} e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}} \ dx \\[6pt]
&= \frac{1}{\sqrt{2\pi}} \int_{z_0}^{z_1} e^{-\frac{z^{2}}{2}} \ dz = P(z_0 < Z < z_1)
\end{align}
$$

标准化把每个正态分布都联系到标准正态曲线，因此 $X$ 的概率可以通过查阅 $Z$ 的表值获得。

## 累积分布函数

标准正态变量的累积分布函数记为 $Φ$。对每个实数 $z$，它表示 $z$ 左侧的概率：

$$\Phi(z) = P(Z \le z) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{z} e^{-\frac{t^{2}}{2}} \ dt$$

$\Phi(z)$ 是标准正态曲线在 $z$ 左侧下方的面积。随着 $z$ 遍历整条实数轴，它从 $0$ 增加到 $1$；根据对称性，$\Phi(0) = 1/2$。对称恒等式为：

$$\Phi(-z) = 1 - \Phi(z)$$

负自变量的数值可以由这个恒等式和 $z \ge 0$ 时的数值得到。对于一般变量 $X \sim \mathcal{N}(\mu, \sigma^{2})$，标准化后，概率 $P(X \le x)$ 等于 $\Phi((x-\mu)/\sigma)$。[标准正态 Z 表](../standard-normal-z-table/)列出了 $\Phi$ 的数值，并展示如何读取这些数值、组合它们来计算具体概率。

## 标准正态分布的分位数

在某些问题中，已知概率而未知与之对应的数值，因此需要使用 $\Phi$ 的逆函数。对于 $α \in (0, 1)$，标准正态分布的[分位数](../median-and-quantiles/) $z_\alpha$ 是其左侧概率为 $α$ 的数值：

$$P(Z \le z_\alpha) = \Phi(z_\alpha) = \alpha$$

分位数 $z_\alpha$ 是表中与 $α$ 对应的 $\Phi$ 自变量。区间估计中经常出现的分位数为：

| $α$   | $0.90$ | $0.95$  | $0.975$ | $0.99$ | $0.995$ |
| ---------- | ------ | ------- | ------- | ------ | ------- |
| $z_α$ | $1.28$ | $1.645$ | $1.96$  | $2.33$ | $2.58$  |

根据对称性，对于 $t > 0$，区间 $[-t, t]$ 的概率为：

$$P(|Z| \le t) = 2\Phi(t) - 1$$

令 $P(|Z| \le t) = 0.95$，得到 $\Phi(t) = 0.975$，因此 $t = 1.96$。所以事件 $-1.96 \le Z \le 1.96$ 的概率为 $0.95$，端点 $1.96$ 就是 $95\%$ 置信表述中使用的分位数。

## 三西格玛法则

在正态分布中，一个区间的概率只取决于它与均值之间的距离，这个距离用标准差来衡量。68-95-99.7 法则也称为三西格玛法则，描述了概率在中心附近的集中程度。

![图 3](/assets/probability-and-statistics/svg/normal-distribution-3.svg)

+ 约 $68\%$ 的取值落在均值一个标准差以内，在均值两侧分别占 $34.1\%$。
+ 约 $95\%$ 的取值落在均值两个标准差以内；这在第一条带的两侧又各增加了 $13.6\%$。
+ 约 $99.7\%$ 的取值落在均值三个标准差以内；这在前两条带的两侧又各增加了 $2.1\%$。

> 这些百分比就是标准正态分布的数值 $2\Phi(1) - 1$、$2\Phi(2) - 1$ 和 $2\Phi(3) - 1$。超过三个标准差后只剩约 $0.3\%$ 的概率，且平均分布在两条尾部。

## 中心极限定理

在满足以下条件时，正态分布是标准化的和与平均值的极限分布。设 $X_1, X_2, \dots, X_n$ 是相互独立且同分布的随机变量，每个变量的均值为 $E(X_i) = \mu$，有限方差为 $\mathrm{Var}(X_i) = \sigma^{2} > 0$。

先考虑它们的和：

$$S_n = X_1 + X_2 + \cdots + X_n$$

由均值的线性性质以及各项的独立性可知，总和的均值和方差为：

$$E(S_n) = n\mu \qquad \mathrm{Var}(S_n) = n\sigma^{2}$$

当 $n$ 较大时，$S_n$ 的分布近似为 $\mathcal{N}(n\mu, n\sigma^{2})$，而标准化后的和趋近于标准正态分布：

$$\frac{S_n - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1) \quad (n \to \infty)$$

对[样本均值](../arithmetic-mean/) $\bar{X}_n = S_n/n$ 也有同样的结论。将总和除以 $n$ 得到：

$$\bar{X}_n = \frac{1}{n} \sum_{i=1}^{n} X_i$$

样本均值的均值为 $E(\bar{X}_n) = \mu$，方差为 $\mathrm{Var}(\bar{X}_n) = \sigma^{2}/n$。其标准化形式具有相同的极限：

$$\frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1) \quad (n \to \infty)$$

在这些假设下，当 $n$ 较大时，总和与样本均值都近似服从正态分布。

> 符号 $\xrightarrow{d}$ 表示依分布收敛。随着 $n$ 增大，标准化变量的分布趋近于标准正态分布。常用的经验指南是 $n > 30$，但所需样本量取决于原始分布偏离对称性的程度。

## 中心极限定理示例

某快递站一个班次处理 $n = 200$ 个包裹。包裹重量相互独立，每个包裹的均值为 $μ = 12$ 千克、标准差为 $σ = 5$ 千克，班次总重量为 $S = X_1 + \cdots + X_{200}$。我们估计总重量超过 $2500$ 千克的概率。

总和的均值和标准差为：

$$E(S) = n\mu = 200 \times 12 = 2400 \qquad \sigma\sqrt{n} = 5\sqrt{200} \approx 70.7$$

根据中心极限定理，$S$ 近似服从 $\mathcal{N}(2400, 5000)$。标准化后的阈值为：

$$z = \frac{2500 - 2400}{70.7} \approx 1.41$$

因此，上尾概率为：

$$P(S > 2500) \approx P(Z > 1.41) = 1 - \Phi(1.41) = 1 - 0.9207 = 0.0793$$

班次总重量超过 $2500$ 千克的概率约为 $0.079$，即 $7.9\%$。

## 相关分布与近似

正态分布是若干其他分布的极限模型或近似模型。二项[分布](../binomial-distribution/)变量 $X \sim \mathrm{Bin}(n, p)$ 是 $n$ 个相互独立的[伯努利变量](../bernoulli-distribution/)之和，因此中心极限定理适用于它。德莫弗–拉普拉斯定理指出，标准化的二项分布收敛于标准正态分布：

$$\frac{X - np}{\sqrt{np(1-p)}} \xrightarrow{d} \mathcal{N}(0, 1) \quad (n \to \infty)$$

通常在 $np > 5$ 且 $n(1-p) > 5$ 时使用该近似。由于二项分布是离散的、正态分布是连续的，把每个整数边界 $k$ 替换为 $k \pm 0.5$（即连续性校正），可以提高区间概率估计的准确性。[二项分布](../binomial-distribution/)页面通过一个完整示例展开了这一近似。

正态分布也是另外两个由它构造的分布在大样本下的参考分布。[卡方分布](../chi-square-distribution/)有 $n$ 个自由度时，等于 $n$ 个相互独立的标准正态变量的平方和，其 $E(X) = n$、$\mathrm{Var}(X) = 2n$；标准化后它趋近于标准正态，因此当 $n$ 较大时，其分位数满足 $\chi^{2}_\alpha(n) \approx z_\alpha\sqrt{2n} + n$。[学生 t 分布](../student-t-distribution/)有 $n$ 个自由度时，随着 $n$ 增大直接趋近于标准正态，因此当 $n$ 较大时，$t_\alpha(n) \approx z_\alpha$。
