---
title: 级数收敛的积分判别法
title_en: Integral Test for Series Convergence
source: https://algebrica.org/integral-test-for-series-convergence/
license: CC BY-NC 4.0
tags:
  - convergence
  - improper-integrals
  - integral-test
  - p-series
  - series
translation:
  status: current
  source_hash: 677522dcef00999253639fdd39a5beef1b3f564fde895aaa380fb48d4d710f83
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 什么是积分判别法

精确求出无穷[级数](../series/)的和通常是不可能的，所以关于级数的大多数问题只关心其收敛性。积分判别法通过将[正项级数](../series-with-positive-terms/)与相应函数的[广义积分](../improper-integrals/)进行比较，回答这个问题。

设 $f$ 是区间 $[k, +\infty)$ 上连续、正且[递减的函数](../increasing-and-decreasing-functions/)，并令 $a_n = f(n)$。积分判别法通过以下两个结论联系级数和广义积分。

+ 如果 $\int_k^{\infty} f(x) \, dx$ 收敛，则 $\sum_{n=k}^{\infty} a_n$ 收敛。
+ 如果 $\int_k^{\infty} f(x) \, dx$ 发散，则 $\sum_{n=k}^{\infty} a_n$ 发散。

积分的下限必须等于级数开始的下标。在这一条件下，级数和积分具有相同的收敛行为，因此可以通过研究其中一个来了解另一个。

## 何时可以应用积分判别法

证明要求函数连续、为正且单调递减，但在实际应用中，这些条件只需从某个位置开始成立。假设 $f$ 在有界的初始区间 $k \leq n \leq N$ 上递增或取负值，而当 $n \geq N+1$ 时为正且递减。那么级数可以拆成两部分。

$$
\sum_{n=k}^{\infty} a_n = \sum_{n=k}^{N} a_n + \sum_{n=N+1}^{\infty} a_n
$$

第一部分是有限个有限项的和，因此不会影响收敛性。第二部分满足判别法的假设，整个级数的收敛性与这个尾部的收敛性相同。因此，只要 $f$ 最终为正且递减，就足以应用积分判别法。

## 将级数与面积比较

这个判别法来自将级数看作曲线 $y = f(x)$ 下方面积的估计。在每个区间 $[n, n+1]$ 上，我们绘制一个宽度为 $1$ 的矩形，并取某个端点处的 $f$ 值作为高度。矩形面积之和构成一个级数；将它与曲线下的精确面积比较，就把这两个收敛概念联系起来。

![图 1](/assets/series/svg/integral-test-for-series-convergence-1.zh.svg)

+ 曲线 $f(x)$ 是连续[函数](../functions/)的图像。
+ 阴影区域是广义积分的一部分，即从 $x = 1$ 到某个 $x = n$ 的曲线下面积。
+ 矩形表示各项 $f(n)$，每个矩形的底为 $1$，高为 $f(n)$。

> 将离散的和与连续的面积比较，是积分判别法的核心。根据矩形高估还是低估了面积，积分就会从上方或下方控制级数，从而确定其收敛性。

- - -

两个经典级数展示了这两种结果。取[调和级数](../harmonic-series/) $\sum_{n=1}^{\infty} \frac{1}{n}$，以及区间 $[1, +\infty)$ 上的 $f(x) = \frac{1}{x}$。以每个区间的左端点作为高度时，每个矩形都高估了曲线下的面积，因此和大于积分。

$$
\sum_{n=1}^{\infty} \frac{1}{n} > \int_1^{\infty} \frac{1}{x} \, dx
$$

广义积分发散，因此级数大于一个发散量，也随之发散。

- - -

现在取 $\sum_{n=1}^{\infty} \frac{1}{n^2}$，以及区间 $[1, +\infty)$ 上的 $f(x) = \frac{1}{x^2}$。以右端点作为高度时，每个矩形都低估了面积，并且这些矩形复现了去掉第一项后的级数。将第一项加回来，就得到一个上界。

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = 1 + \sum_{n=2}^{\infty} \frac{1}{n^2} < 1 + \int_1^{\infty} \frac{1}{x^2} \, dx = 1 + 1 = 2
$$

各项均为正，所以部分和递增，并且始终由 $2$ 从上方控制。有上界的递增数列收敛，因此该级数收敛。

## 证明

考虑前 $k$ 项的部分和。

$$
s_k = \sum_{n=1}^{k} f(n)
$$

由于各项为正，部分和[数列](../sequences/) $\{s_k\}$ 递增，并且当 $k \to \infty$ 时存在极限。

$$
\lim_{k \to +\infty} s_k = s \in [0, +\infty]
$$

广义积分以相同方式定义，即取上限趋于无穷时定积分的极限。

$$
\lim_{k \to +\infty} \int_1^k f(x) \, dx = \int_1^{+\infty} f(x) \, dx
$$

根据相邻区间上的可加性，区间 $[1, k]$ 上的积分可以分解为各个单位子区间 $[n, n+1]$ 上积分之和。

$$
\int_1^k f(x) \, dx = \sum_{n=1}^{k-1} \int_n^{n+1} f(x) \, dx
$$

这些子区间彼此不交且首尾相接。由于 $f$ 递减，对于每个 $x \in [n, n+1]$，都有：

$$
f(n+1) \leq f(x) \leq f(n)
$$

在 $[n, n+1]$ 上对不等式两边积分，不等号方向保持不变。

$$
\int_n^{n+1} f(n+1) \, dx \leq \int_n^{n+1} f(x) \, dx \leq \int_n^{n+1} f(n) \, dx
$$

两侧的被积函数都是常数，因此外侧积分分别等于 $f(n+1)$ 和 $f(n)$。

$$
f(n+1) \leq \int_n^{n+1} f(x) \, dx \leq f(n)
$$

将这些不等式从 $n = 1$ 加到 $k-1$，得到：

$$
\sum_{n=1}^{k-1} f(n+1) \leq \sum_{n=1}^{k-1} \int_n^{n+1} f(x) \, dx \leq \sum_{n=1}^{k-1} f(n)
$$

令 $k \to \infty$，中间一项变成广义积分。

$$
\sum_{n=2}^{\infty} f(n) \leq \int_1^{\infty} f(x) \, dx \leq \sum_{n=1}^{\infty} f(n)
$$

广义积分被夹在两个只相差第一项 $f(1)$ 的级数副本之间。如果积分收敛，左侧不等式为级数提供上界，而有上界的正项级数收敛。如果积分发散，右侧不等式表明级数下方有一个发散量，因此级数也发散。

## 积分判别法不能给出什么

积分判别法可以确定级数是否收敛，但永远不会给出级数的和。与 $\sum_{n=1}^{\infty} \frac{1}{n^2}$ 的比较清楚地说明了这一点。这个论证只能给出如下界：

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} < 2
$$

而精确值 $\frac{\pi^2}{6} \approx 1.645$ 则需要完全不同的方法。从这里开始，积分判别法只用于将级数分类为收敛或发散，而不是计算级数的和。

## p-级数判别法

积分判别法的一个直接推论涉及 p-级数这一族级数：

$$
\sum_{n=k}^{\infty} \frac{1}{n^p}
$$

其中指数 $p$ 为实数且 $k > 0$。将判别法应用于 $f(x) = \frac{1}{x^p}$，就把问题化为判断广义积分 $\int_k^{\infty} \frac{1}{x^p} \, dx$；当 $p > 1$ 时积分收敛，当 $p \leq 1$ 时积分发散。级数遵循同一规则，因此当 $p > 1$ 时 $\sum \frac{1}{n^p}$ 收敛，当 $p \leq 1$ 时发散。

[调和级数](../harmonic-series/)是 $p = 1$ 的情形，此时发散；$p = 2$ 则给出前面遇到的收敛级数。这个规则可以一次性分类许多级数：$\sum_{n=4}^{\infty} \frac{1}{n^7}$ 因为 $p = 7 > 1$ 而收敛，而 $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n}}$ 因为 $p = \frac{1}{2} \leq 1$ 而发散。

## 示例

判断下面的级数收敛还是发散。

$$
\sum_{n=2}^{\infty} \frac{1}{n\log n}
$$

相应的函数是 $f(x) = \frac{1}{x\log x}$，定义在 $x \geq 2$ 上。它为正且连续，并且由于分母随 $x$ 增大而增大，所以它递减，积分判别法可以应用。我们计算广义积分。

$$
\int_2^{\infty} \frac{1}{x\log x} \, dx
$$

[代换](../integration-by-substitution/) $u = \log x$ 给出 $du = \frac{1}{x} \, dx$，并且积分下限变为 $\log 2$。

$$
\int_{\log 2}^{\infty} \frac{1}{u} \, du = \lim_{t \to \infty} \int_{\log 2}^{t} \frac{1}{u} \, du = \lim_{t \to \infty} [\log u]_{\log 2}^{t} = \infty
$$

积分发散，因此由积分判别法，级数发散。

- - -

判断下面的级数收敛还是发散。

$$
\sum_{n=0}^{\infty} ne^{-n^2}
$$

相应的函数是 $f(x) = xe^{-x^2}$，当 $x > 0$ 时为正。这个函数并非在整个区间上递减，因此我们考察其导数。

$$
f'(x) = e^{-x^2}(1 - 2x^2)
$$

[导数](../derivatives/)在 $x = \frac{1}{\sqrt{2}}$ 处为零，在此点之前为正，在此点之后为负。函数在 $[0, \frac{1}{\sqrt{2}}]$ 上递增，在 $[\frac{1}{\sqrt{2}}, +\infty)$ 上递减，因此它最终递减，足以应用积分判别法。令 $u = -x^2$，则 $du = -2x \, dx$，利用这一代换计算广义积分。

$$
\begin{align}
\int_0^{\infty} xe^{-x^2}\,dx
&= \lim_{t\to\infty}\int_0^t xe^{-x^2}\,dx \\[6pt]
&= \lim_{t\to\infty}\left[-\frac{1}{2}e^{-x^2}\right]_0^t \\[6pt]
&= \lim_{t\to\infty}\left(\frac{1}{2}-\frac{1}{2}e^{-t^2}\right) \\[7pt]
&= \frac{1}{2}
\end{align}
$$

积分收敛，因此由积分判别法，级数收敛。
