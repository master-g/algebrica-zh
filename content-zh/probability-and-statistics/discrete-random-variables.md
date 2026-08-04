---
title: 离散随机变量
title_en: Discrete Random Variables
source: https://algebrica.org/discrete-random-variables/
license: CC BY-NC 4.0
tags:
  - cumulative-distribution-function
  - discrete-random-variables
  - joint-probability-distributions
  - probability
  - probability-mass-function
  - random-variables
  - statistics
translation:
  status: current
  source_hash: 35cc8767c90e0e2e614229e23e9d9a2e99c93ec2b9a9665e123dac9b23e454b6
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 定义

离散随机变量是从样本空间 $\Omega$ 到[实数](../real-numbers/)的一个[函数](../functions/) $X$，其概率分布集中在有限集或可数无限集 $S \subseteq \mathbb{R}$ 上：

$$
X : \Omega \rightarrow \mathbb{R}, \qquad P(X \in S) = 1
$$

在这个定义中，$\Omega$ 是随机试验结果组成的[集合](../sets/)。它可以是有限集、可数无限集或不可数集。无论 $\Omega$ 的基数如何，变量 $X$ 以概率 $1$ 属于有限集或可数无限集 $S$，因此称为离散变量。

> 不可数样本空间既可以支持离散随机变量，也可以支持[连续随机变量](../continuous-random-variables/)。分类取决于随机变量的分布，而不是样本空间的基数。

- - -

考虑这样一个试验：将同一枚骰子掷两次，令 $X$ 表示得到的六点数。$X$ 的可能取值为 $0$、$1$ 和 $2$：$0$ 表示两次都没有掷出六点，$1$ 表示恰好一次掷出六点，$2$ 表示两次都是六点。下表列出了随机变量的每个取值 $x$ 及其概率 $f(x)$：

| $x$ | $0$ | $1$ | $2$ |
|:------|:--:|:--:|:--:|
| $f(x)$ | $\dfrac{25}{36}$ | $\dfrac{10}{36}$ | $\dfrac{1}{36}$ |

这些概率满足：

$$
\sum_x f(x) = 1
$$

这与全概率定律一致：该定律指出，一次试验中所有互斥结果的概率之和为 $1$。

$f(x)$ 的取值计算如下：

$$
\begin{align}
P(X = 0) &= \left(\frac{5}{6}\right)^2 = \frac{25}{36} \\[6pt]
P(X = 1) &= 2 \cdot \frac{1}{6} \cdot \frac{5}{6} = \frac{10}{36} \\[6pt]
P(X = 2) &= \left(\frac{1}{6}\right)^2 = \frac{1}{36}
\end{align}
$$

+ 当 $x = 0$ 时，两次掷出的都是六点以外的数。一次没有掷出六点的概率是 $\frac{5}{6}$，因此连续两次都发生这种情况的概率为 $\left(\frac{5}{6}\right)^2$。
+ 当 $x = 1$ 时，两次中恰好出现一个六点。这有两种可能：第一次是六点而第二次不是，或者第一次不是而第二次是。每种情况的概率都是 $\frac{1}{6} \cdot \frac{5}{6}$，所以总概率为 $2 \cdot \frac{1}{6} \cdot \frac{5}{6}$。
+ 最后，当 $x = 2$ 时，两次掷出的都是六点。一次掷出六点的概率是 $\frac{1}{6}$，因此连续两次都掷出六点的概率为 $\left(\frac{1}{6}\right)^2$。

## 离散概率分布

离散随机变量在每个可能取值处都有一个相应的概率。描述这些概率的函数 $f(x)$ 称为概率质量函数，或离散概率分布。对于这样的分布，必须满足以下条件：

$$
\begin{align}
& f(x) \ge 0 \\[11pt]
& \sum_x f(x) = 1 \\[6pt]
& P(X = x) = f(x)
\end{align}
$$

这些条件说明每个概率都非负，概率之和为 $1$，并且取值 $x$ 的概率是 $f(x)$。概率质量函数决定了 $X$ 的所有概率性质，尤其是它的[均值或期望值](../mean-or-expected-value-of-a-random-variable/)和[方差](../variance-and-covariance-of-a-random-variable/)。

- - -

累积分布函数 $F(x)$ 表示 $X$ 取值不超过 $x$ 的概率：

$$
F(x) = P(X \le x) = \sum_{t \le x} f(t)
$$

函数 $F(x)$ 是截至 $x$ 累积的总概率。它对所有实数 $x$ 定义，并随着新的概率质量加入而逐级增加；它是非减的，且不会超过 $1$。

回到掷骰子两次的例子，其中 $X$ 表示得到的六点数，构造它的累积分布函数。$X$ 的概率质量函数为：

| $x$    |       $0$        |       $1$       |      $2$       |
| :----- | :--------------: | :-------------: | :------------: |
| $f(x)$ | $\dfrac{25}{36}$ | $\dfrac{10}{36}$ | $\dfrac{1}{36}$ |

累积分布函数通过将截至每个 $x$ 的概率相加得到：

| $x$ | $0$ | $1$ | $2$ |
|:------|:--:|:--:|:--:|
| $F(x)$ | $\dfrac{25}{36}$ | $\dfrac{35}{36}$ | $1$ |

事实上，有：

$$
\begin{align}
F(0) &= P(X \le 0) = f(0) = \frac{25}{36} \\[6pt]
F(1) &= P(X \le 1) = f(0) + f(1) = \frac{25}{36} + \frac{10}{36} = \frac{35}{36} \\[12pt]
F(2) &= P(X \le 2) = f(0) + f(1) + f(2) = 1
\end{align}
$$

表格只列出了 $F$ 在 $X$ 的可能取值处的值，但这个函数对每个实数 $x$ 都有定义。当 $x < 0$ 时，$F(x) = 0$，因为尚未累积任何概率。在相邻的可能取值之间，函数保持不变；在每个可能取值处，它跳跃增加 $f(x)$；当 $x \ge 2$ 时，所有结果都已包含在内，函数值为 $1$。

## 联合概率分布

当样本空间是多维的时，试验的每个结果涉及两个或更多随机变量。对于两个离散随机变量 $X$ 和 $Y$，用函数 $f(x, y)$ 描述它们同时取定值对的概率，该函数称为联合概率分布：

$$
f(x, y) = P(X = x, Y = y)
$$

在这个表达式中，$f(x, y)$ 表示 $X$ 取值 $x$ 且同时 $Y$ 取值 $y$ 的概率。联合概率分布必须满足以下条件：

$$
\begin{align}
& f(x, y) \ge 0 \\[11pt]
& \sum_x \sum_y f(x, y) = 1 \\[6pt]
& P(X = x, Y = y) = f(x, y)
\end{align}
$$

这些条件说明，对每一对 $(x, y)$，$f(x, y)$ 都是非负的；对所有数值对求和的结果为 $1$；每个联合概率 $P(X = x, Y = y)$ 都等于 $f(x, y)$。对 $f(x, y)$ 按一个变量求和，可以得到另一个变量单独的分布，称为它的边际概率分布：

$$
g(x) = \sum_y f(x, y) \qquad h(y) = \sum_x f(x, y)
$$

函数 $g(x)$ 表示无论 $Y$ 取何值，$X$ 取值 $x$ 的概率；$h(y)$ 则是 $Y$ 的相应概率。

## 示例 1

一个小盒子里有 $4$ 个球，其中 $2$ 个白球、$2$ 个黑球。随机抽取两个球且不放回。令 $X$ 表示抽到的黑球数，$Y$ 表示抽到的白球数。

由于只抽取两个球，每个结果都满足 $x + y = 2$，可能的数值对为：

$$
(0, 2),\ (1, 1),\ (2, 0)
$$

每一对的概率等于有利抽取方式数除以总抽取方式数。[二项式系数](../binomial-coefficient/) $\binom{2}{x}$ 计算从 $2$ 个黑球中选出 $x$ 个的方式数，$\binom{2}{y}$ 计算选出 $y$ 个白球的方式数，而 $\binom{4}{2} = 6$ 是从盒中抽取两个球的总方式数：

$$
f(x, y) = \frac{\dbinom{2}{x}\dbinom{2}{y}}{\dbinom{4}{2}}
$$

这个公式在 $x + y = 2$ 时成立。其他数值对的概率都是 $0$，因为抽取两个球不可能产生这样的结果。在每一对数值处计算 $f(x, y)$，得到下表，其中 $x$ 的取值沿行排列，$y$ 的取值沿列排列：

$$
\begin{array}{c|ccc|c}
f(x, y) & 0 & 1 & 2 & \mathrm{Totals} \\[6pt]
\hline
0 & \dfrac{0}{6} & \dfrac{0}{6} & \dfrac{1}{6} & \dfrac{1}{6} \\[6pt]
1 & \dfrac{0}{6} & \dfrac{4}{6} & \dfrac{0}{6} & \dfrac{4}{6} \\[6pt]
2 & \dfrac{1}{6} & \dfrac{0}{6} & \dfrac{0}{6} & \dfrac{1}{6} \\[6pt]
\hline
\mathrm{Totals} & \dfrac{1}{6} & \dfrac{4}{6} & \dfrac{1}{6} & 1
\end{array}
$$

每个单元格表示抽取特定黑白球组合的概率。行和与列和分别是边际概率分布 $g(x)$ 和 $h(y)$，所有单元格的总和为 $1$。
