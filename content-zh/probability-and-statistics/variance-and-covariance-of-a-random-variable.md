---
title: 随机变量的方差与协方差
title_en: Variance and Covariance of Random Variables
source: https://algebrica.org/variance-and-covariance-of-a-random-variable/
license: CC BY-NC 4.0
tags:
  - correlation-coefficient
  - covariance
  - probability
  - random-variables
  - standard-deviation
  - statistics
  - variance
translation:
  status: current
  source_hash: 7340a8434af7d2fd42fb4b5a37abf02b1d4c26317c98009c6e8eac9dc883e2c7
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 随机变量的方差

对于有限数据集，[方差](../variance/)是各个观测值与[算术均值](../arithmetic-mean/)之差的平方的均值。如果观测值为 $x_1, \ldots, x_n$，均值为 $M$，那么：

$$
\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - M)^2
$$

对平方进行[展开](../notable-products/)后，同一个方差也可以写成：

$$
\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}x_i^2 - M^2
$$

因此，方差等于平方的均值减去均值的平方。

- - -

设 $X$ 的二阶矩有限，即 $E[X^2] < +\infty$，并记 $\mu = E[X]$ 为它的[期望值](../mean-or-expected-value-of-a-random-variable/)。$X$ 的方差是相对于 $\mu$ 的平方偏差的期望值：

$$
\mathrm{Var}(X) = E[(X - \mu)^2]
$$

根据期望值的线性性，展开后得到：

$$
\mathrm{Var}(X) = E[X^2] - [E[X]]^2
$$

方差非负。当且仅当 $X = \mu$ 以概率 $1$ 成立时，方差为 $0$。对于概率质量函数为 $f$ 的[离散随机变量](../discrete-random-variables/)，方差为：

$$
\sigma^2 = E[(X - \mu)^2] = \sum_x (x - \mu)^2 f(x)
$$

在此表达式中，$x$ 遍历 $X$ 的所有可能取值。对于概率密度函数为 $f$ 的[连续随机变量](../continuous-random-variables/)，方差是下面的[反常积分](../improper-integrals/)：

$$
\sigma^2 = E[(X - \mu)^2] = \int_{-\infty}^{+\infty} (x - \mu)^2 f(x) \ dx
$$

这分别是同一个期望值 $E[(X - \mu)^2]$ 的离散形式和连续形式。

## 偏差与标准差

差值 $x - \mu$ 是可能取值 $x$ 相对于期望值的偏差。当 $x > \mu$ 时它为正，当 $x < \mu$ 时它为负，当 $x = \mu$ 时它为零。它的[绝对值](../absolute-value/)就是到 $\mu$ 的距离。方差的非负[平方根](../radicals/)是标准差：

$$
\sigma = \sqrt{\mathrm{Var}(X)}
$$

标准差与 $X$ 具有相同的单位，而方差的单位是原单位的平方。

## 示例 1

设 $X$ 表示某条生产线上一批四个产品中的次品数量。它的概率质量函数为：

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $0.1$ | $0.3$ | $0.4$ | $0.1$ | $0.1$ |

期望值为：

$$
E[X] = \sum_x x f(x)
$$

数值计算如下：

$$
\begin{align}
E[X] &= (0)(0.1) + (1)(0.3) + (2)(0.4) + (3)(0.1) + (4)(0.1) \\[6pt]
     &= 0 + 0.3 + 0.8 + 0.3 + 0.4 = 1.8
\end{align}
$$

每批次品数量的期望值为 $\mu = 1.8$。方差为：

$$
\mathrm{Var}(X) = \sum_x (x - \mu)^2 f(x)
$$

取 $\mu = 1.8$，数值计算如下：

$$
\begin{align}
\mathrm{Var}(X) &= (0 - 1.8)^2(0.1) + (1 - 1.8)^2(0.3) + (2 - 1.8)^2(0.4) + (3 - 1.8)^2(0.1) + (4 - 1.8)^2(0.1) \\[6pt]
&= (3.24)(0.1) + (0.64)(0.3) + (0.04)(0.4) + (1.44)(0.1) + (4.84)(0.1) \\[6pt]
&= 0.324 + 0.192 + 0.016 + 0.144 + 0.484 = 1.16
\end{align}
$$

标准差是方差的非负平方根：

$$
\sigma = \sqrt{\mathrm{Var}(X)} = \sqrt{1.16} \approx 1.08
$$

因此，方差为 $1.16$ 个次品的平方，标准差约为 $1.08$ 个次品。

## 两个随机变量的协方差

设 $X$ 和 $Y$ 具有联合分布且二阶矩有限。它们的均值为 $\mu_X = E[X]$ 和 $\mu_Y = E[Y]$，协方差是它们相对于各自均值的偏差之积的期望值：

$$
\mathrm{Cov}(X, Y) = E[(X - \mu_X)(Y - \mu_Y)]
$$

协方差为正，表示两个偏差往往具有相同的符号；协方差为负，表示它们往往具有相反的符号。展开乘积后，协方差为：

$$
\mathrm{Cov}(X, Y) = E[XY] - E[X]E[Y]
$$

对于具有联合概率质量函数 $f$ 的离散随机变量，协方差为：

$$
\mathrm{Cov}(X, Y) = \sum_x \sum_y (x - \mu_X)(y - \mu_Y) f(x, y)
$$

对于每一对 $(x, y)$，$f(x, y)$ 是它在[联合概率分布](../discrete-random-variables/)中的概率。如果 $(X, Y)$ 具有[联合概率密度函数](../continuous-random-variables/) $f$，则协方差为：

$$
\mathrm{Cov}(X, Y) = \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} (x - \mu_X)(y - \mu_Y) f(x, y) \ dy \ dx
$$

协方差具有对称性，变量与自身的协方差就是它的方差：

$$
\mathrm{Cov}(X, Y) = \mathrm{Cov}(Y, X), \qquad \mathrm{Cov}(X, X) = \mathrm{Var}(X)
$$

具有有限二阶矩的独立随机变量的协方差为零。反之则不成立：相互依赖的随机变量也可能具有零协方差。

## 相关系数

协方差的单位是 $X$ 与 $Y$ 的单位之积，因此其大小取决于单位的选择。如果两个变量的方差都为正，那么它们的相关系数等于协方差除以两个标准差之积：

$$
\rho_{XY} = \frac{\sigma_{XY}}{\sigma_X \sigma_Y} = \frac{\mathrm{Cov}(X, Y)}{\sqrt{\mathrm{Var}(X)} \sqrt{\mathrm{Var}(Y)}}
$$

在此表达式中，$\sigma_{XY} = \mathrm{Cov}(X, Y)$，而 $\sigma_X$ 和 $\sigma_Y$ 是两个变量的标准差。当任一变量平移或乘以正的常数时，$\rho_{XY}$ 的值不变。

[柯西—施瓦茨不等式](../inner-product-spaces/)蕴含 $-1 \le \rho_{XY} \le 1$。当且仅当一个中心化变量以概率 $1$ 等于另一个变量的正标量倍数时，系数恰为 $1$；当该倍数为负时，系数恰为 $-1$。系数接近任一端点，表示线性关联很强；系数接近 $0$，表示线性关联很弱，但仍可能存在非线性依赖。例如，如果 $X$ 在 $[-1, 1]$ 上服从均匀分布且 $Y = X^2$，那么即使 $Y$ 由 $X$ 决定，仍有 $\mathrm{Cov}(X, Y) = 0$。

## 示例 2

设 $X$ 表示一周内用于学习的小时数，$Y$ 表示一次六分制测验的得分。下面四对取值具有正概率：

| $X$ | $Y$ | $f(x, y)$ |
|:---:|:---:|:---------:|
| $1$ | $2$ | $0.2$ |
| $2$ | $3$ | $0.3$ |
| $3$ | $5$ | $0.3$ |
| $4$ | $6$ | $0.2$ |

其他所有数值对的概率都为 $0$。$X$ 的较大取值与 $Y$ 的较大取值同时出现，但这四对点并不位于同一条直线上。我们计算 $X$ 和 $Y$ 的相关系数。

两个变量的期望值为：

$$
\begin{align}
E[X] &= (1)(0.2) + (2)(0.3) + (3)(0.3) + (4)(0.2) = 2.5 \\[6pt]
E[Y] &= (2)(0.2) + (3)(0.3) + (5)(0.3) + (6)(0.2) = 4.0
\end{align}
$$

乘积 $XY$ 的期望值为：

$$
\begin{align}
E[XY] &= (1 \cdot 2)(0.2) + (2 \cdot 3)(0.3) + (3 \cdot 5)(0.3) + (4 \cdot 6)(0.2) \\[6pt]
      &= 0.4 + 1.8 + 4.5 + 4.8 = 11.5
\end{align}
$$

利用 $\mathrm{Cov}(X, Y) = E[XY] - E[X]E[Y]$，协方差为：

$$
\mathrm{Cov}(X, Y) = 11.5 - (2.5)(4.0) = 11.5 - 10 = 1.5
$$

两个平方的期望值为：

$$
\begin{align}
E[X^2] &= (1)^2(0.2) + (2)^2(0.3) + (3)^2(0.3) + (4)^2(0.2) = 7.3 \\[6pt]
E[Y^2] &= (2)^2(0.2) + (3)^2(0.3) + (5)^2(0.3) + (6)^2(0.2) = 18.2
\end{align}
$$

$X$ 和 $Y$ 的方差为：

$$
\begin{align}
\mathrm{Var}(X) &= E[X^2] - [E[X]]^2 = 7.3 - (2.5)^2 = 7.3 - 6.25 = 1.05 \\[6pt]
\mathrm{Var}(Y) &= E[Y^2] - [E[Y]]^2 = 18.2 - (4.0)^2 = 18.2 - 16 = 2.2
\end{align}
$$

相关系数为：

$$
\begin{align}
\rho_{XY} &= \frac{\mathrm{Cov}(X, Y)}{\sqrt{\mathrm{Var}(X)} \sqrt{\mathrm{Var}(Y)}} \\[6pt]
          &= \frac{1.5}{\sqrt{1.05}\sqrt{2.2}} = \frac{1.5}{\sqrt{2.31}} \approx 0.987
\end{align}
$$

$X$ 与 $Y$ 的相关性约为 $0.987$。因此，四个可能的数值对靠近一条递增直线，但并不完全位于其上。
