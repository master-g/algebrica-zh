---
title: 绝对值函数
title_en: Absolute Value Function
source: https://algebrica.org/absolute-value-function/
license: CC BY-NC 4.0
tags:
  - absolute-value
  - continuity
  - corner-point
  - even-function
  - graph-transformation
  - non-differentiability
  - sign-function
translation:
  status: current
  source_hash: 81569c1ce6a455061abfb2dd03fe55347421d28678c85b6986d748139d0a2f92
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 绝对值的引入

本文介绍[绝对值](../absolute-value/)，从它的定义开始：

$$
|x| =
\begin{cases}
+x & x \geq 0 \\[6pt]
-x & x < 0
\end{cases}
\quad \forall \ x \in \mathbb{R}
$$

绝对值函数把每个实数对应到它在数轴上与零的距离。由于距离从不为负，负数会映射到相应的正数，而正数保持不变。

![图 1](/assets/sets-and-numbers/svg/real-numbers-1.zh.svg)

更一般地，$|x - a|$ 表示数轴上点 $x$ 与点 $a$ 之间的距离：

$$|x-a| = |a-x|$$

由于 $a - x = -(x - a)$，竖线内的两个表达式互为相反数。因此 $|a - x| = |-(x - a)| = |x - a|$，所以这两个表达式相等，尽管竖线内的项顺序相反。

## 绝对值函数的图像与对称性

绝对值函数定义为：

$$
y = |x| =
\begin{cases}
+x & x \geq 0 \\[6pt]
-x & x < 0
\end{cases}
$$

![图 2](/assets/sets-and-numbers/svg/absolute-value-1.zh.svg)

它的图像由两条在原点相接的半直线组成，形成 V 形。图像关于 $y$ 轴对称，因此函数是[偶函数](../even-and-odd-functions/)，并满足：

$$|{-x}| = |x| \quad \forall \ x \in \mathbb{R}$$

## 性质

+ [定义域](../determining-the-domain-of-a-function/)：$\mathbb{R}$
+ 值域：$\mathbb{R}^+_0$
+ 对于单调性，函数在 $(-\infty, 0]$ 上[递减](../increasing-and-decreasing-functions/)，在 $[0, +\infty)$ 上递增。
+ 函数是[偶函数](../even-and-odd-functions/)，因为 $|{-x}| = |x|$。
+ 函数在整个实轴 $\mathbb{R}$ 上[连续](../continuous-functions/)。
+ 函数除在 $x = 0$ 处外处处可导，该点是一个[尖点](../points-of-non-differentiability/)。
+ 函数在 $x = 0$ 处取得[绝对最小值](../maximum-minimum-and-inflection-points/)，此时 $|x| = 0$，且没有最大值。
+ 在定义域端点处的极限为：

$$
\begin{align}
\lim_{x \to -\infty} |x| &= +\infty \\[6pt]
\lim_{x \to +\infty} |x| &= +\infty
\end{align}
$$

## 通过翻折负值部分绘制函数的绝对值

考虑由方程

$$y = x^2 - 1$$

定义的[抛物线](../parabola/)。

![图 3](/assets/functions/svg/absolute-value-function-1.zh.svg)

这条曲线有一部分位于 $x$ 轴下方，即函数值为负的区间。要找出这个区间，需要解不等式：

$$x^2 - 1 < 0 \quad \Longrightarrow \quad -1 < x < 1$$

因此，$y = x^2 - 1$ 在开区间 $(-1, 1)$ 上为负，图像也位于 $x$ 轴下方。

要绘制 $f(x) = |x^2 - 1|$，先从 $y = x^2 - 1$ 的图像开始。保留位于 $x$ 轴上方或轴上的部分，把原来位于其下方的部分关于 $x$ 轴翻折。

![图 4](/assets/functions/svg/absolute-value-function-2.zh.svg)

翻折后的图像所有取值都非负，这正是绝对值的要求。

## 绝对值函数的极限、导数与积分

绝对值函数的一个基本[极限](../limits/)是：

$$\lim_{x \to 0} \frac{|x|}{x}$$

这个极限不存在，因为左极限和右极限不同：

$$\lim_{x \to 0^-} \frac{|x|}{x} = -1, \qquad \lim_{x \to 0^+} \frac{|x|}{x} = 1$$

由于两个单侧极限不同，$|x|$ 在 $x = 0$ 处不可导。

绝对值函数的[导数](../derivatives/)分段定义为：

$$
\frac{d}{dx} |x| =
\begin{cases}
1 & x > 0 \\[6pt]
-1 & x < 0
\end{cases}
$$

由于函数在 $x = 0$ 处有一个[尖点](../points-of-non-differentiability/)，导数在此处不存在。

绝对值函数的[不定积分](../indefinite-integrals/)为：

$$\int |x| \ dx = \frac{x^2 \cdot \mathrm{sgn}(x)}{2} + c$$

$\mathrm{sgn}(x)$ 是[符号函数](../sign-function/)，定义为：

$$
\mathrm{sgn}(x) =
\begin{cases}
-1 & x < 0 \\[6pt]
0 & x = 0 \\[6pt]
1 & x > 0
\end{cases}
$$
