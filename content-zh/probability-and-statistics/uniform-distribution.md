---
title: 均匀分布
title_en: Uniform Distribution
source: https://algebrica.org/uniform-distribution/
license: CC BY-NC 4.0
tags:
  - beta-distribution
  - continuous-random-variables
  - cumulative-distribution-function
  - expected-value
  - probability
  - probability-density-function
  - statistics
  - uniform-distribution
  - variance
translation:
  status: current
  source_hash: c86615c0b1ef34c2eda2dea17f4965877a60aa71d0ced3dc252df9aaf9cd1edc
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 定义

均匀分布也称为矩形分布，是一种在有界[区间](../intervals/)上具有恒定密度的连续分布。因此，长度相等的子区间具有相等的概率。当已知某个量位于两个边界之间，而现有信息没有理由偏向区间中的任何一部分时，这个模型很合适。

如果[连续随机变量](../continuous-random-variables/) $X$ 在区间 $[a,b]$ 上服从均匀分布，记作 $X \sim \mathrm{U}(a,b)$，那么它在该区间上的概率密度函数为常数：

$$
f(x;a,b) =
\begin{cases}
\dfrac{1}{b-a} & a \le x \le b \\[6pt]
0 & \mathrm{otherwise}
\end{cases}
$$

这里 $a$ 和 $b$ 是支持集的端点，且 $a < b$。密度函数的图像是一个矩形。它的底边长度为 $b-a$，高度为 $1/(b-a)$，因此面积为 $1$。当区间变宽时，由于总面积固定，高度会降低。

![图 1](/assets/probability-and-statistics/svg/uniform-distribution-1.svg)

> 密度在端点 $a$ 和 $b$ 处的取值无关紧要。在有限个点上改变密度不会影响任何概率，因此分段定义中的常数部分可以包含或排除任一端点。

如果 $I_1$ 和 $I_2$ 是 $[a,b]$ 的两个长度相同的子区间，公共长度为 $w$，那么它们具有相同的概率：

$$
P(X \in I_1) = P(X \in I_2) = \frac{w}{b-a}
$$

概率由子区间的长度决定。它在 $[a,b]$ 内的位置不会产生影响。单个点的长度为零，因此每个单独取值的概率都为零：

$$
P(X = x_0) = 0
$$

## 主要性质

对于 $X \sim \mathrm{U}(a,b)$，其概率密度函数、均值、方差和[标准差](../variance/)为：

[class="table-1"]

|                                                          |
| :------------------------------------------------------- |
| $f(x;a,b) = \dfrac{1}{b-a}, \quad a \le x \le b$         |
| $\mu = E(X) = \dfrac{a+b}{2}$                            |
| $\sigma^{2} = \mathrm{Var}(X) = \dfrac{(b-a)^{2}}{12}$   |
| $\sigma = \dfrac{b-a}{2\sqrt{3}}$                        |

[/class]

均值是区间的中点，而方差只取决于区间长度 $b-a$。密度在整个区间上都是常数，因此该分布没有唯一的众数。在上述密度取值的约定下，$[a,b]$ 中的每个点都是众数。

## 均匀分布的均值

均匀分布的[均值](../introduction-to-the-mean/)或[期望值](../mean-or-expected-value-of-a-random-variable/)，是以该密度为权重对 $x$ 积分所得的结果：

$$
\mu = E(X) = \int_{a}^{b} x f(x;a,b) \ dx
$$

在 $[a,b]$ 上，密度是常数 $1/(b-a)$，因此可以将它提到[积分](../definite-integrals/)号外：

$$
E(X) = \frac{1}{b-a} \int_{a}^{b} x \ dx
$$

$x$ 的原函数是 $x^{2}/2$，因此定积分为：

$$
\int_{a}^{b} x \ dx = \frac{b^{2}}{2} - \frac{a^{2}}{2} = \frac{b^{2} - a^{2}}{2}
$$

由于 $b^{2} - a^{2} = (b-a)(b+a)$，因子 $b-a$ 可以约去：

$$
\begin{align}
E(X) &= \frac{1}{b-a} \cdot \frac{(b-a)(b+a)}{2} \\[6pt]
     &= \frac{a+b}{2}
\end{align}
$$

均值是 $[a,b]$ 的中点。

## 均匀分布的方差

[方差](../variance-and-covariance-of-a-random-variable/)是相对于均值的平方偏差的期望。由于 $[a,b]$ 上每一点的密度都相同，方差只取决于区间的长度。这里使用的恒等式是：

$$
\sigma^{2} = \mathrm{Var}(X) = E(X^{2}) - [E(X)]^{2}
$$

二阶矩是以密度为权重对 $x^{2}$ 的积分，与之前一样提出常数因子：

$$
E(X^{2}) = \int_{a}^{b} x^{2} f(x;a,b) \ dx = \frac{1}{b-a} \int_{a}^{b} x^{2} \ dx
$$

$x^{2}$ 的原函数是 $x^{3}/3$，所以积分为：

$$
\int_{a}^{b} x^{2} \ dx = \frac{b^{3}}{3} - \frac{a^{3}}{3} = \frac{b^{3} - a^{3}}{3}
$$

[因式分解](../notable-products/)为 $b^{3} - a^{3} = (b-a)(b^{2} + ab + a^{2})$，因此因子 $b-a$ 可以约去：

$$
E(X^{2}) = \frac{b^{2} + ab + a^{2}}{3}
$$

均值的平方为：

$$
[E(X)]^{2} = \left( \frac{a+b}{2} \right)^{2} = \frac{a^{2} + 2ab + b^{2}}{4}
$$

将两者作差，并用公分母 $12$ 表示：

$$
\begin{align}
\mathrm{Var}(X) &= \frac{b^{2} + ab + a^{2}}{3} - \frac{a^{2} + 2ab + b^{2}}{4} \\[6pt]
&= \frac{4(b^{2} + ab + a^{2}) - 3(a^{2} + 2ab + b^{2})}{12} \\[6pt]
&= \frac{a^{2} - 2ab + b^{2}}{12} \\[6pt]
&= \frac{(b-a)^{2}}{12}
\end{align}
$$

方差与区间长度的平方成正比，并且与区间在实数轴上的位置无关。标准差是正平方根：

$$
\sigma = \frac{b-a}{2\sqrt{3}}
$$

## 累积分布函数

[累积分布函数](../continuous-random-variables/)是 $F(x;a,b) = P(X \le x)$。当 $x < a$ 时它为零。当 $x$ 位于 $[a,b]$ 中时，它为：

$$
F(x;a,b) = \int_{a}^{x} \frac{1}{b-a} \ dt = \frac{x-a}{b-a}
$$

当 $x > b$ 时，其值为 $1$，因为 $X \le b$ 的概率为 $1$。完整表达式为：

$$
F(x;a,b) =
\begin{cases}
0 & x < a \\[6pt]
\dfrac{x-a}{b-a} & a \le x \le b \\[6pt]
1 & x > b
\end{cases}
$$

在 $[a,b]$ 上，图像是从 $(a,0)$ 到 $(b,1)$ 的线段，斜率为 $1/(b-a)$。对于 $a \le c \le d \le b$，区间 $[c,d]$ 的概率是 $F$ 的两个取值之差：

$$
P(c \le X \le d) = F(d;a,b) - F(c;a,b) = \frac{d-c}{b-a}
$$

分位数函数可以通过对 $x$ 求解 $p = F(x;a,b)$ 得到。对于 $0 < p < 1$，它为：

$$
F^{-1}(p) = a + p(b-a)
$$

当 $p = 1/2$ 时，分位数是中点 $(a+b)/2$。因此，中位数和均值都等于这个中点。

## 标准均匀分布

取 $a = 0$、$b = 1$ 时的均匀分布称为标准均匀分布 $\mathrm{U}(0,1)$。它在 $[0,1]$ 上的密度为 $1$，其累积分布函数在 $0 \le u \le 1$ 时为 $F(u;0,1) = u$。均值为 $1/2$，方差为 $1/12$。

每个一般的均匀随机变量都是标准均匀随机变量的仿射变换。如果 $U \sim \mathrm{U}(0,1)$，那么：

$$
X = a + (b-a)U \sim \mathrm{U}(a,b)
$$

反过来，如果 $X \sim \mathrm{U}(a,b)$，那么 $(X-a)/(b-a) \sim \mathrm{U}(0,1)$。标准均匀变量的反射 $1-U$ 仍然服从标准均匀分布，因为当 $0 \le u \le 1$ 时，$P(1-U \le u) = P(U \ge 1-u) = u$。

伪随机数生成器输出有限精度的数值，用于模拟从 $\mathrm{U}(0,1)$ 中独立抽取的样本。逆变换法利用这些输出，从其他连续分布中获得样本。假设 $F$ 是连续且严格递增的累积分布函数。如果 $U \sim \mathrm{U}(0,1)$，则变量 $X = F^{-1}(U)$ 的分布函数为 $F$，因为：

$$
P(X \le x) = P(F^{-1}(U) \le x) = P(U \le F(x)) = F(x)
$$

最后一个等式成立，是因为在 $[0,1]$ 上 $P(U \le u) = u$。例如，参数为 $\lambda > 0$ 的指数分布在 $x \ge 0$ 时满足 $F(x) = 1 - e^{-\lambda x}$，其逆函数为 $F^{-1}(p) = -\ln(1-p)/\lambda$。由于 $1-U$ 仍然服从标准均匀分布，变量 $X = -\ln(U)/\lambda$ 服从这个指数分布。

## 与贝塔分布的关系

标准均匀分布是[贝塔分布](../beta-distribution/)的一个特例，其两个形状参数都等于一。参数为 $\alpha > 0$ 和 $\beta > 0$ 的贝塔分布，其密度为：

$$
f(x;\alpha,\beta) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)}, \qquad 0 < x < 1
$$

这里 $B(\alpha,\beta)$ 是贝塔函数。当 $\alpha = \beta = 1$ 时，它的取值为：

$$
B(1,1) = \int_{0}^{1} dx = 1
$$

当 $\alpha = \beta = 1$ 时，分子中的两个指数都为零。因此密度为：

$$
f(x;1,1) = 1, \qquad 0 < x < 1
$$

这正是 $\mathrm{U}(0,1)$ 的密度。

## 示例 1

一台工业切割机的周期时间会随机械公差和温度略有变化。假设周期时间在 $4.8$ 到 $5.4$ 秒之间具有恒定密度。如果 $X$ 表示以秒为单位的周期时间，那么：

$$
X \sim \mathrm{U}(4.8, 5.4)
$$

在这个区间上，密度是常数 $1/(5.4 - 4.8) = 1/0.6$。

- - -

由于 $X$ 是连续的，$P(X < 5) = P(X \le 5)$。这个概率为：

$$
P(X < 5) = P(X \le 5) = F(5; 4.8, 5.4) = \frac{5 - 4.8}{5.4 - 4.8} = \frac{0.2}{0.6} = \frac{1}{3}
$$

这个概率约为 $0.333$。

- - -

对于区间 $[5.1,5.3]$，其概率为：

$$
P(5.1 \le X \le 5.3) = \frac{5.3 - 5.1}{5.4 - 4.8} = \frac{0.2}{0.6} = \frac{1}{3}
$$

两个概率都等于 $1/3$，因为两个子区间的长度都是 $0.2$。它们在支持集中的位置不会影响各自的概率。

- - -

期望周期时间是区间的中点：

$$
E(X) = \frac{4.8 + 5.4}{2} = \frac{10.2}{2} = 5.1
$$

平均周期时间为 $5.1$ 秒。

- - -

方差为：

$$
\mathrm{Var}(X) = \frac{(5.4 - 4.8)^{2}}{12} = \frac{0.36}{12} = 0.03
$$

标准差为：

$$
\sigma = \sqrt{0.03} \approx 0.173
$$

周期时间的标准差约为 $0.173$ 秒。
