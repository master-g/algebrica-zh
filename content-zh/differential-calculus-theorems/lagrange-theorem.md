---
title: 拉格朗日定理
title_en: Lagrange's Theorem
source: https://algebrica.org/lagrange-theorem/
license: CC BY-NC 4.0
tags:
  - derivatives
  - differential-calculus-theorems
  - lagrange-theorem
  - mean-value-theorem
translation:
  status: current
  source_hash: a61dcac2f97c518fe061e9851cff03bd0e6b4eb5ce3fbc379a311211cd09c538
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 定理陈述

**定理。** 设函数 $f(x)$ 在闭且有界区间 $[a, b]$ 上[连续](../continuous-functions/)，并且在区间内部每一点都可导。那么，至少存在一个区间内的点 $c$，使得下式成立：

$$
f'(c) = \frac{f(b)-f(a)}{b-a}
$$

这意味着，至少存在一个点，使函数的导数等于连接 $a$ 与 $b$ 的割线斜率。换句话说，在区间内某个点处，函数的瞬时变化率等于其平均变化率。

这个定理（也称为中值定理）从几何角度指出：图像上至少存在一个点 $c$，使该点处的切线平行于连接点 $A$ 和 $B$ 的割线。

![图 1](/assets/differential-calculus-theorems/svg/lagrange-theorem-1.zh.svg)

在直角三角形 $ABH$ 中，有 $\overline{BH} = \overline{AH} \cdot \tan{\alpha}$，即：

$$\tan{\alpha} = \frac{\overline{BH}}{\overline{AH}} $$

我们有：

$$
\begin{align}
\overline{BH} &= f(b)-f(a) \\[6pt]
\overline{AH} &= b-a
\end{align}
$$

线段 $AB$ 的斜率等于 $\tan\alpha$，即：

$$\tan{\alpha} = \frac{f(b)-f(a)}{b-a} $$

由于曲线上 $c$ 点处的切线平行于 $AB$，二者的斜率相同，因此：

$$f'(c) = \frac{f(b)-f(a)}{b-a} $$

## 证明

为了证明拉格朗日定理，我们定义辅助函数 $\varphi(x)$：

$$
\varphi(x) = f(x)-f(a)-\frac{f(b)-f(a)}{b-a} \cdot (x-a)
$$

验证 $\varphi(x)$ 满足[罗尔定理](../rolle-theorem/)的假设：

+ $f(x)$ 在闭区间 $[a, b]$ 上连续。
+ $f(x)$ 在开区间 $(a, b)$ 上可导。
+ $\varphi(a) = \varphi(b)$。

计算 $\varphi(a)$ 和 $\varphi(b)$，得到：

$$
\varphi(a) = f(a)-f(a)-\frac{f(b)-f(a)}{b-a} \cdot (a-a) = 0
$$

$$
\begin{align}
\varphi(b) &= f(b)-f(a)-\frac{f(b)-f(a)}{b-a} \cdot (b-a)\\[0.5em]
            &= f(b)-(f(b)-f(a)) = 0
\end{align}
$$

因此，$\varphi(a) = \varphi(b) = 0$。

对 $\varphi(x)$ 应用罗尔定理，可以找到至少一个点 $c \in (a, b)$，使得 $\varphi'(c) = 0$。计算 $\varphi(x)$ 的[导数](../derivatives/)：

$$ \varphi'(x) = f'(x)-\frac{f(b)-f(a)}{b-a}$$

现在计算点 $c$ 处 $\varphi(x)$ 的导数，并令其等于 0。于是得到：

$$ \varphi'(c) = f'(c)-\frac{f(b)-f(a)}{b-a} = 0$$

也就是：

$$ f'(c)=\frac{f(b)-f(a)}{b-a}$$

这正好就是我们要证明的结论。

> 中值定理本身是[柯西定理](../cauchy-theorem/)的特殊情形，其中第二个函数取为恒等函数。由这个更一般的结论，还可以得到用于计算不定式极限的[洛必达法则](../hopital-rule/)。

## 关于单调性的推论

拉格朗日定理给出三个将导数符号与[函数](../functions/)定性行为联系起来的推论。设 $f$ 在 $[a, b]$ 上[连续](../continuous-functions/)，在 $(a, b)$ 上可导。以下结论成立。

+ 如果对每个 $x \in (a, b)$ 都有 $f'(x) > 0$，那么 $f$ 在 $[a, b]$ 上严格递增。
+ 如果对每个 $x \in (a, b)$ 都有 $f'(x) < 0$，那么 $f$ 在 $[a, b]$ 上严格递减。
+ 如果对每个 $x \in (a, b)$ 都有 $f'(x) = 0$，那么 $f$ 在 $[a, b]$ 上为常数。

三个情形的论证是统一的。任取 $[a, b]$ 中的两个点 $x_1, x_2$，其中 $x_1 < x_2$，并在子区间 $[x_1, x_2]$ 上应用拉格朗日定理。存在 $c \in (x_1, x_2)$，使得：

$$
f(x_2) - f(x_1) = f'(c) \cdot (x_2 - x_1)
$$

因构造方式可知，因子 $x_2 - x_1$ 为正，所以 $f(x_2) - f(x_1)$ 的符号与 $f'(c)$ 的符号一致。如果 $f'$ 在 $(a, b)$ 内处处为正，那么 $f(x_2) > f(x_1)$，函数严格递增。

$f' < 0$ 的情形是对称的，会得到递减行为。如果 $f'$ 恒等于零，那么对每一对 $x_1, x_2$ 都有 $f(x_2) = f(x_1)$，因此 $f$ 为常数。

> 在开区间内满足 $f'(x) > 0$ 就足以推出函数在包含端点的闭区间上严格单调递增。端点 $a$ 或 $b$ 处不必存在导数，因为这里只通过连续性使用 $f(a)$ 和 $f(b)$ 的值。

- - -

第三个推论的一个后果，是可以刻画具有相同导数的两个函数。设 $f$ 和 $g$ 在 $[a, b]$ 上连续、在 $(a, b)$ 上可导，并且对每个 $x \in (a, b)$ 都满足 $f'(x) = g'(x)$。令 $h(x) = f(x) - g(x)$，则导数 $h'(x) = f'(x) - g'(x)$ 在 $(a, b)$ 上恒等于零。根据第三个推论，$h$ 在 $[a, b]$ 上为常数，也就是说，存在 $C \in \mathbb{R}$，使得：

$$
f(x) - g(x) = C \quad \forall \ x \in [a, b]
$$

因此，在连通区间上具有相同导数的两个函数只相差一个加法常数。这一结果是[不定积分](../indefinite-integrals/)理论的基础，说明了积分常数为何会出现。同一个恒等式也是[微积分基本定理](../fundamental-theorem-of-calculus/)的分析桥梁：该定理将这个定性陈述转化为从任意原函数计算定积分的明确规则。

> 定义域的连通性至关重要。在两个区间的不交并上，具有相同导数的两个函数可能在每个分支上分别相差不同的常数，因此结论不再归结为单个常数。

## Lipschitz 型估计

拉格朗日定理根据导数的大小，为 $f$ 的增量提供定量界。如果对每个 $x \in (a, b)$ 都有 $|f'(x)| \leq M$，那么对任意两个点 $x_1, x_2 \in [a, b]$：

$$
|f(x_2) - f(x_1)| \leq M \, |x_2 - x_1|
$$

在 $[x_1, x_2]$ 上应用定理并取绝对值，即可得到这一估计：

$$|f(x_2) - f(x_1)| = |f'(c)| \, |x_2 - x_1| \leq M \, |x_2 - x_1|$$

因此，导数在某个[区间](../intervals/)上有界的函数，在该区间上是 Lipschitz 连续的，其 Lipschitz 常数至多为 $M$。这种中值定理的不等式形式经常用于实分析中的误差估计和稳定性论证。

## 例 1

为了观察定理的实际应用，考虑一个具体情形。我们希望在给定区间内找出一个点 $c$，使函数的瞬时变化率等于该区间上的平均变化率。这个计算也说明，这样的点通常不能通过直接观察预先确定。考虑[多项式](../polynomials/)：

$$
f(x) = x^3 - 4x^2 + x + 6
$$

在闭区间 $[1,4]$ 上。由于 $f$ 是多项式，它在 $[1,4]$ 上[连续](../continuous-functions/)，在 $(1,4)$ 上可导。因此，拉格朗日定理的假设都得到满足。先计算函数在端点处的值：

$$
f(1) = 1 - 4 + 1 + 6 = 4
$$
$$
f(4) = 64 - 64 + 4 + 6 = 10
$$

经过点 $(1,4)$ 和 $(4,10)$ 的割线斜率为：

$$
\begin{aligned}
\frac{f(4) - f(1)}{4 - 1}
  &= \frac{10 - 4}{3} \\[6pt]
  &= 2
\end{aligned}
$$

这个数表示 $f$ 在 $[1,4]$ 上的平均变化率。接下来计算导数：

$$
f'(x) = 3x^2 - 8x + 1
$$

我们寻找满足 $f'(c) = 2$ 的 $c$ 值。这得到方程：

$$
3c^2 - 8c + 1 = 2
$$
$$
3c^2 - 8c - 1 = 0
$$

应用[求根公式](../quadratic-formula/)：

$$
\begin{aligned}
c &= \frac{8 \pm \sqrt{64 + 12}}{6} \\[6pt]
  &= \frac{8 \pm \sqrt{76}}{6} \\[6pt]
  &= \frac{4 \pm \sqrt{19}}{3}
\end{aligned}
$$

得到两个候选值：

$$
c_1 = \frac{4 - \sqrt{19}}{3} \approx 0.21
$$
$$
c_2 = \frac{4 + \sqrt{19}}{3} \approx 2.79
$$

拉格朗日定理保证在开区间 $(1,4)$ 内有一个解。在得到的两个值中，只有：

$$
c = \frac{4 + \sqrt{19}}{3} \approx 2.79
$$

位于 $(1,4)$ 内。另一个根落在区间之外，因此在这里不相关。在这个点处，函数 $f$ 的图像切线平行于连接 $(1,4)$ 和 $(4,10)$ 的割线。答案是：

$$ c = \dfrac{4+\sqrt{19}}{3} $$

> 这个例子表明，方程 $f'(c)=2$ 可能有多个解，但只有位于区间内部的解对该定理有意义。
