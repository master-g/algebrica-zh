---
title: 连续随机变量
title_en: Continuous Random Variables
source: https://algebrica.org/continuous-random-variables/
license: CC BY-NC 4.0
tags:
  - continuous-random-variables
  - cumulative-distribution-function
  - joint-probability-distributions
  - probability
  - probability-density-function
  - random-variables
  - statistics
translation:
  status: current
  source_hash: 8fa47edf4e5ad521ebe7306848fd9a4b053b7c85cd9a24b749dc2451da7fd089
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 定义

概率空间 $(\Omega, \mathcal{F}, P)$ 上的随机变量是一个可测的[函数](../functions/)：

$$
X : \Omega \to \mathbb{R}
$$

[集合](../sets/) $\Omega$ 包含随机试验的结果，$\mathcal{F}$ 是可以为其分配概率的事件组成的集合，$P$ 是概率测度。可测性要求对每个 $x \in \mathbb{R}$ 都有如下关系：

$$
\{\ \omega \in \Omega \mid X(\omega) \le x\ \} \in \mathcal{F}
$$

这个关系说明，满足 $X(\omega) \le x$ 的结果构成一个事件，因此概率 $P(X \le x)$ 有定义。

在本文采用的术语中，当随机变量的概率分布具有概率密度函数时，$X$ 称为连续随机变量。等价地说，它的分布相对于[实数轴](../real-numbers/)上的勒贝格测度绝对连续。这个性质涉及 $X$ 的分布，而不是 $\Omega$ 的基数。同一个样本空间可以同时支持连续随机变量和[离散随机变量](../discrete-random-variables/)，而连续随机变量的密度支集可以位于一个[区间](../intervals/)、多个不相交区间或无界集合上。

> 有些教材把累积分布函数连续的任意分布都称为连续分布。这一更宽泛的约定包括康托分布等奇异分布；它们对每个点的概率都为零，却没有密度。在本文中，“连续”表示绝对连续，因此密度确实存在。

## 概率密度函数

$X$ 的概率密度函数是一个可测函数 $f_X : \mathbb{R} \to [0, +\infty)$，对每个可测子集 $A \subseteq \mathbb{R}$ 都满足：

$$
P(X \in A) = \int_A f_X(x) \ dx
$$

取 $A = \mathbb{R}$，得到由[反常积分](../improper-integrals/)表示的归一化条件：

$$
\int_{-\infty}^{+\infty} f_X(x) \ dx = 1
$$

特别地，当 $a < b$ 时，区间 $(a, b]$ 的概率为下面的[定积分](../definite-integrals/)：

$$
P(a < X \le b) = \int_a^b f_X(x) \ dx
$$

![图 1](/assets/probability-and-statistics/svg/continuous-random-variables-1.zh.svg)

单个点的长度为零，因此任意单个取值的概率都是零：

$$
P(X = x_0) = 0
$$

因此，添加或删除任一端点都不会改变区间的概率：

$$
P(a < X < b) = P(a \le X < b) = P(a < X \le b) = P(a \le X \le b)
$$

$f_X(x_0)$ 的值不是概率 $P(X = x_0)$。密度可以超过 $1$。下面的函数就是一个例子：

$$
f_X(x) =
\begin{cases}
2 & 0 \le x \le \dfrac{1}{2} \\[6pt]
0 & \mathrm{otherwise}
\end{cases}
$$

它在实数轴上的积分为 $1$，因此是一个密度。在 $[0, 1/2]$ 上它的值为 $2$，而子区间的概率是该子区间长度的两倍。在有限个点上，或在任意长度为零的集合上改变密度，都不会改变分布。

## 累积分布函数

$X$ 的累积分布函数对每个实数 $x$ 定义为：

$$
F_X(x) = P(X \le x)
$$

当 $X$ 具有密度 $f_X$ 时，这一定义变为：

$$
F_X(x) = \int_{-\infty}^{x} f_X(t) \ dt
$$

函数 $F_X$ 是[非减函数](../increasing-and-decreasing-functions/)，并满足以下[极限条件](../limits/)：

$$
\lim_{x \to -\infty} F_X(x) = 0, \qquad \lim_{x \to +\infty} F_X(x) = 1
$$

每个累积分布函数都是右连续的。由密度得到的累积分布函数是[连续函数](../continuous-functions/)，更准确地说是绝对连续的。当 $a < b$ 时，区间的概率为：

$$
P(a < X \le b) = F_X(b) - F_X(a)
$$

由于具有密度的变量没有点质量，无论选择哪种端点，概率都由同一个差值给出。

[微积分基本定理](../fundamental-theorem-of-calculus/)给出了累积分布函数与密度之间的关系。如果 $f_X$ 在 $x$ 处连续，那么：

$$
F_X'(x) = f_X(x)
$$

对于任意密度，这个等式对几乎处处的 $x$ 成立，但导数不一定在每个点存在。因此，从逐点意义上说，$F_X$ 不一定是 $f_X$ 的原函数。

## 指数分布示例

设 $X$ 表示某个部件的寿命（单位为年），并假设 $X$ 服从速率为 $\lambda > 0$ 的指数分布。其密度为：

$$
f_X(x) =
\begin{cases}
\lambda e^{-\lambda x} & x \ge 0 \\[6pt]
0 & x < 0
\end{cases}
$$

参数 $\lambda$ 的单位是每年倒数。根据[指数函数的积分](../integral-of-the-exponential-function/)，归一化条件为：

$$
\int_{-\infty}^{+\infty} f_X(x) \ dx
= \int_0^{+\infty} \lambda e^{-\lambda x} \ dx
= \left[-e^{-\lambda x}\right]_0^{+\infty}
= 1
$$

当 $x \ge 0$ 时，将密度从 $0$ 积分到 $x$，得到 $1 - e^{-\lambda x}$。因此，累积分布函数为：

$$
F_X(x) =
\begin{cases}
0 & x < 0 \\[6pt]
1 - e^{-\lambda x} & x \ge 0
\end{cases}
$$

部件寿命介于一到三年之间的概率为：

$$
\begin{align}
P(1 < X < 3)
&= F_X(3) - F_X(1) \\[6pt]
&= \left(1 - e^{-3\lambda}\right) - \left(1 - e^{-\lambda}\right) \\[6pt]
&= e^{-\lambda} - e^{-3\lambda}
\end{align}
$$

如果 $\lambda = 0.5$，那么：

$$
P(1 < X < 3) = e^{-0.5} - e^{-1.5} \approx 0.3834
$$

在这个模型下，寿命介于一到三年之间的概率约为 $38.3\%$。

> 指数模型假设瞬时失效率为常数，因此只有在这一假设合理时，它才适合描述真实部件的寿命。

## 连续随机变量的均值与方差

具有密度 $f_X$ 的连续随机变量 $X$，只要相应的积分有限，就有[均值或期望值](../mean-or-expected-value-of-a-random-variable/)和[方差](../variance-and-covariance-of-a-random-variable/)：

$$
\begin{align}
\mu = E(X) &= \int_{-\infty}^{+\infty} xf_X(x) \ dx \\[6pt]
\mathrm{Var}(X) &= \int_{-\infty}^{+\infty} (x - \mu)^2f_X(x) \ dx
\end{align}
$$

第一个积分按照密度为每个取值加权；第二个积分是相对于 $\mu$ 的平方偏差的期望值。

## 联合概率密度

当函数可测，并且对每个可测区域 $A \subseteq \mathbb{R}^2$ 满足以下条件时，数对 $(X, Y)$ 具有联合概率密度 $f_{X,Y} : \mathbb{R}^2 \to [0, +\infty)$：

$$
P\big((X, Y) \in A\big) = \iint_A f_{X,Y}(x, y) \ dx \ dy
$$

取 $A = \mathbb{R}^2$，得到归一化条件：

$$
\int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} f_{X,Y}(x, y) \ dy \ dx = 1
$$

对于矩形 $(a, b] \times (c, d]$，定义关系变为：

$$
P(a < X \le b, c < Y \le d)
= \int_a^b \int_c^d f_{X,Y}(x, y) \ dy \ dx
$$

每个变量都有一个边际密度，可以通过对另一个变量积分消去得到：

$$
\begin{align}
f_X(x) &= \int_{-\infty}^{+\infty} f_{X,Y}(x, y) \ dy \\[6pt]
f_Y(y) &= \int_{-\infty}^{+\infty} f_{X,Y}(x, y) \ dx
\end{align}
$$

当且仅当联合密度除去一个面积为零的集合后可以分解为以下形式时，变量 $X$ 和 $Y$ 相互独立：

$$
f_{X,Y}(x, y) = f_X(x)f_Y(y)
$$

一般来说，边际密度不能确定联合密度。不同的联合分布可能具有相同的边际密度，却具有不同的 $X$ 与 $Y$ 之间的依赖关系。即使存在两个边际密度，也不能保证存在联合密度。若 $X$ 具有密度且 $Y = X$，那么两个变量具有相同的密度，但数对 $(X, Y)$ 以概率 $1$ 落在直线 $y = x$ 上。由于这条直线的面积为零，关于 $\mathbb{R}^2$ 中面积的联合分布没有密度。
