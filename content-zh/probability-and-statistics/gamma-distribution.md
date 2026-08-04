---
title: 伽马分布
title_en: Gamma Distribution
source: https://algebrica.org/gamma-distribution/
license: CC BY-NC 4.0
tags:
  - chi-square-distribution
  - continuous-random-variables
  - expected-value
  - exponential-distribution
  - gamma-distribution
  - gamma-function
  - moment-generating-function
  - poisson-process
  - probability
  - variance
translation:
  status: current
  source_hash: a9250139895bb6f5a0dd87699dacac0fca4a7b1c3d40a7fa129b8d4e0c4dac0b
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 伽马函数与密度

伽马分布是定义在[正半轴](../intervals/)上的连续概率分布。它用于描述等待时间、持续时间以及多个相互独立的正值贡献之和。伽马函数是其密度的一部分，对于 $\alpha > 0$，由下面的[反常积分](../improper-integrals/)定义：

$$\Gamma(\alpha) = \int_{0}^{\infty} x^{\alpha - 1} e^{-x} \ dx$$

利用[分部积分](../integration-by-parts/)可得递推关系：

$$
\begin{align}
\Gamma(\alpha + 1)
&= \int_{0}^{+\infty} x^{\alpha} e^{-x} \ dx \\[6pt]
&= \left[-x^{\alpha}e^{-x}\right]_{0}^{+\infty}
+ \alpha\int_{0}^{+\infty}x^{\alpha - 1}e^{-x} \ dx \\[6pt]
&= \alpha\Gamma(\alpha)
\end{align}
$$

当 $\alpha > 0$ 时，边界项为零。由于 $\Gamma(1) = 1$，递推关系给出：对每个正[整数](../integers/) $n$，都有 $\Gamma(n) = (n - 1)!$。因此，伽马函数是[正实数](../real-numbers/)上[阶乘](../factorial/)的延拓。[高斯积分](../normal-distribution/)给出：

$$\Gamma\left(\frac{1}{2}\right) = \int_{0}^{+\infty}x^{-1/2}e^{-x} \ dx = \sqrt{\pi}$$

伽马函数也是[贝塔分布](../beta-distribution/)归一化常数的一部分。对于较大的正数 $t$，[斯特林近似](../factorial/)给出

$$\Gamma(t + 1) \sim \sqrt{2\pi t}\left(\frac{t}{e}\right)^{t}$$

如果一个[连续随机变量](../continuous-random-variables/) $X$ 的形状参数为 $\alpha > 0$、尺度参数为 $\beta > 0$，且其概率密度函数为

$$
f(x;\alpha,\beta) =
\begin{cases}
\dfrac{1}{\beta^{\alpha}\Gamma(\alpha)} x^{\alpha - 1} e^{-x/\beta} & x > 0 \\[6pt]
0 & x \le 0
\end{cases}
$$

+ $\alpha$ 是形状参数。固定 $\beta$ 时，它决定原点附近的行为和偏度。
+ $\beta$ 是尺度参数。固定 $\alpha$ 时，较大的取值会增加均值和方差。

其支集是正半轴。当 $\alpha > 1$ 时，众数为 $(\alpha - 1)\beta$。当 $0 < \alpha \le 1$ 时，密度是[递减](../increasing-and-decreasing-functions/)的，并在左端点处取得上确界。

![图 1](/assets/probability-and-statistics/svg/gamma-distribution-1.svg)

- - -

概率密度的总积分为 $1$。对于伽马密度，这一条件是

$$\int_{0}^{+\infty} \frac{1}{\beta^{\alpha}\Gamma(\alpha)} x^{\alpha - 1} e^{-x/\beta} \ dx = 1$$

令 $x = \beta t$，作[换元](../integration-by-substitution/)，有 $dx = \beta \ dt$，于是积分为

$$\int_{0}^{+\infty} \frac{1}{\beta^{\alpha}\Gamma(\alpha)} (\beta t)^{\alpha - 1} e^{-t} \beta \ dt$$

合并 $\beta$ 的幂次，得到

$$\frac{1}{\Gamma(\alpha)} \int_{0}^{+\infty} t^{\alpha - 1} e^{-t} \ dt$$

该积分就是 $\Gamma(\alpha)$，因此归一化后的积分为

$$\frac{1}{\Gamma(\alpha)} \cdot \Gamma(\alpha) = 1$$

## 密度、均值和方差

对于 $X \sim \mathrm{Gamma}(\alpha, \beta)$，其密度、均值、方差和[标准差](../variance/)为

[class="table-1"]

|  |
| :--- |
| $f(x; \alpha, \beta) = \dfrac{1}{\Gamma(\alpha) \beta^{\alpha}} x^{\alpha - 1} e^{-x/\beta}, \quad x > 0$ |
| $\mu = E(X) = \alpha \beta$ |
| $\sigma^{2} = \mathrm{Var}(X) = \alpha \beta^{2}$ |
| $\sigma = \beta \sqrt{\alpha}$ |

[/class]

## 伽马分布的期望值

[连续随机变量的期望值](../mean-or-expected-value-of-a-random-variable/)为

$$\mu = E(X) = \int_{-\infty}^{+\infty} x f(x) \ dx$$

对于形状参数为 $\alpha$、尺度参数为 $\beta$ 的伽马分布，其密度为

$$f(x;\alpha,\beta) = \frac{1}{\beta^{\alpha}\Gamma(\alpha)} x^{\alpha - 1} e^{-x/\beta} \quad x > 0$$

它的期望值为

$$\mu = E(X) = \int_{0}^{+\infty} x \frac{1}{\beta^{\alpha}\Gamma(\alpha)} x^{\alpha - 1} e^{-x/\beta} \ dx$$

合并 $x$ 的幂次，得到

$$E(X) = \frac{1}{\beta^{\alpha}\Gamma(\alpha)} \int_{0}^{+\infty} x^{\alpha} e^{-x/\beta} \ dx$$

令 $x = \beta t$ 且 $dx = \beta \ dt$，则

$$
\begin{align}
E(X) &= \frac{1}{\beta^{\alpha}\Gamma(\alpha)} \int_{0}^{+\infty} (\beta t)^{\alpha} e^{-t} \beta \ dt \\[6pt]
&= \frac{\beta^{\alpha}\beta}{\beta^{\alpha}\Gamma(\alpha)} \int_{0}^{+\infty} t^{\alpha} e^{-t} \ dt \\[6pt]
&= \frac{\beta}{\Gamma(\alpha)} \int_{0}^{+\infty} t^{\alpha} e^{-t} \ dt
\end{align}
$$

该积分为 $\Gamma(\alpha + 1)$：

$$\int_{0}^{+\infty} t^{\alpha} e^{-t} \ dt = \Gamma(\alpha + 1)$$

由递推关系 $\Gamma(\alpha + 1) = \alpha \Gamma(\alpha)$，得到

$$\mu = \alpha \beta$$

均值就是形状参数与尺度参数的乘积。

- - -

速率参数 $\lambda = 1/\beta$ 是尺度参数的倒数。在这种参数化下，密度为

$$f(x;\alpha,\lambda) = \frac{\lambda^{\alpha}}{\Gamma(\alpha)} x^{\alpha - 1} e^{-\lambda x} \quad x > 0$$

其期望值为

$$E(X) = \frac{\alpha}{\lambda}$$

## 伽马分布的方差

对于具有有限二阶矩的连续随机变量，[方差](../variance-and-covariance-of-a-random-variable/)为

$$\sigma^{2} = E(X^{2}) - [E(X)]^{2}$$

对于伽马密度，二阶矩为

$$E(X^{2}) = \int_{0}^{+\infty} x^{2} \frac{1}{\beta^{\alpha}\Gamma(\alpha)} x^{\alpha - 1} e^{-x/\beta} \ dx$$

合并 $x$ 的幂次，得到

$$E(X^{2}) = \frac{1}{\beta^{\alpha}\Gamma(\alpha)} \int_{0}^{+\infty} x^{\alpha + 1} e^{-x/\beta} \ dx$$

令 $x = \beta t$ 且 $dx = \beta \ dt$，则积分为

$$
\begin{align}
E(X^{2}) &= \frac{1}{\beta^{\alpha}\Gamma(\alpha)} \int_{0}^{+\infty} (\beta t)^{\alpha + 1} e^{-t} \beta \ dt \\[6pt]
&= \frac{\beta^{\alpha + 2}}{\beta^{\alpha}\Gamma(\alpha)} \int_{0}^{+\infty} t^{\alpha + 1} e^{-t} \ dt \\[6pt]
&= \frac{\beta^{2}}{\Gamma(\alpha)} \Gamma(\alpha + 2)
\end{align}
$$

由递推关系可得

$$\Gamma(\alpha + 2) = (\alpha + 1)\alpha \Gamma(\alpha)$$

代入这个恒等式，得到

$$E(X^{2}) = \beta^{2} \alpha(\alpha + 1)$$

伽马分布的均值为

$$E(X) = \alpha \beta$$

将其代入方差公式，得到

$$\sigma^{2} = \beta^{2}\alpha(\alpha + 1) - (\alpha\beta)^{2} = \alpha\beta^{2}$$

当 $\lambda = 1/\beta$ 为速率参数时，方差为

$$\mathrm{Var}(X) = \frac{\alpha}{\lambda^{2}}$$

## 伽马分布的特殊情形

当 $\alpha = 1$ 时，伽马分布就是[指数分布](../exponential-distribution/)。[几何分布](../geometric-distribution/)是它的离散等待时间类比。令速率 $\lambda = 1/\beta$，其密度为

$$
f(x;\lambda) =
\begin{cases}
\lambda e^{-\lambda x} & x > 0 \\[6pt]
0 & x \le 0
\end{cases}
$$

参数 $\lambda$ 是速率。在速率为 $\lambda$ 的[泊松过程](../poisson-distribution/)中，相邻事件之间的时间服从这个指数分布。

自由度为 $r$ 的卡方随机变量服从如下伽马分布：

$$X \sim \chi_{r}^{2} \quad \Longleftrightarrow \quad X \sim \mathrm{Gamma}\left(\frac{r}{2},2\right)$$

这里伽马分布的第二个参数是尺度。在速率参数化下，速率为 $1/2$。当 $r = 2$ 时，卡方分布是速率为 $1/2$ 的指数分布。如果 $X$ 服从形状参数为 $\alpha$、速率参数为 $\lambda$ 的伽马分布，那么

$$2\lambda X \sim \chi_{2\alpha}^{2}$$

## 矩、矩母函数与和

均值和二阶矩都是幂矩公式的特例。对于任意实数 $k > -\alpha$，矩 $E(X^{k})$ 存在，且为

$$
\begin{align}
E(X^{k})
&= \frac{1}{\beta^{\alpha}\Gamma(\alpha)}
\int_{0}^{+\infty}x^{\alpha + k - 1}e^{-x/\beta} \ dx \\[6pt]
&= \beta^{k}\frac{\Gamma(\alpha + k)}{\Gamma(\alpha)}
\end{align}
$$

对于正整数 $k$，递推关系给出

$$E(X^{k}) = \beta^{k}\alpha(\alpha + 1)\cdots(\alpha + k - 1)$$

当 $\lambda = 1/\beta$ 为速率参数时，公式为

$$E(X^{k}) = \frac{\Gamma(\alpha + k)}{\Gamma(\alpha)\lambda^{k}}$$

对于 $\lambda > 0$，代入伽马积分可得

$$\int_{0}^{+\infty}x^{\alpha - 1}e^{-\lambda x} \ dx = \frac{\Gamma(\alpha)}{\lambda^{\alpha}}$$

对于尺度参数 $\beta$ 和 $t < 1/\beta$，矩母函数为

$$
\begin{align}
M_{X}(t)
&= E(e^{tX}) \\[6pt]
&= \frac{1}{\beta^{\alpha}\Gamma(\alpha)}
\int_{0}^{+\infty}x^{\alpha - 1}e^{-x(1/\beta - t)} \ dx \\[6pt]
&= (1 - \beta t)^{-\alpha}
\end{align}
$$

使用速率参数 $\lambda$ 时，它为

$$M_{X}(t) = \left(\frac{\lambda}{\lambda - t}\right)^{\alpha}, \qquad t < \lambda$$

- - -

设 $X_{1},\ldots,X_{m}$ 是相互独立的伽马随机变量，其形状参数分别为 $\alpha_{1},\ldots,\alpha_{m}$，且具有共同的速率参数 $\lambda$。对于 $S = X_{1} + \cdots + X_{m}$，由独立性可得

$$
\begin{align}
M_{S}(t)
&= \prod_{j=1}^{m}M_{X_{j}}(t) \\[6pt]
&= \prod_{j=1}^{m}
\left(\frac{\lambda}{\lambda - t}\right)^{\alpha_{j}} \\[6pt]
&= \left(\frac{\lambda}{\lambda - t}\right)^{\alpha_{1}+\cdots+\alpha_{m}}
\end{align}
$$

这是形状参数为 $\alpha_{1}+\cdots+\alpha_{m}$、速率参数为 $\lambda$ 的伽马随机变量的矩母函数。因此，$S$ 服从这个伽马分布。如果 $X_{1},\ldots,X_{n}$ 是速率为 $\lambda$ 的相互独立的指数随机变量，那么

$$X_{1}+\cdots+X_{n} \sim \mathrm{Gamma}(n,\lambda)$$

在速率为 $\lambda$ 的泊松过程中，变量 $X_{j}$ 是连续两次到达之间的时间间隔。它们的和就是直到第 $n$ 个事件发生前的等待时间。
