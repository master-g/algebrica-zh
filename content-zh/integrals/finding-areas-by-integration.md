---
title: 用积分求面积
title_en: Finding Areas by Integration
source: https://algebrica.org/finding-areas-by-integration/
license: CC BY-NC 4.0
tags:
  - absolute-value
  - area-between-curves
  - continuous-functions
  - definite-integral
  - even-and-odd-functions
  - integration
  - linearity
  - riemann-integral
translation:
  status: current
  source_hash: fc2fa8224763a789d88e20fb6bba1cae23056a5d5cd157baa1784be3c1d9c109
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 用定积分求两条曲线之间的面积

[定积分](../definite-integrals/)页面把积分介绍为函数图像与 $x$ 轴之间的有向面积。同样的构造可以推广到由两条曲线围成的区域。设 $f(x)$ 和 $g(x)$ 是定义在[区间](../intervals/) $[a, b]$ 上的两个[连续函数](../continuous-functions/)，满足 $f(x) \geq g(x)$ 对每个 $x \in [a, b]$ 都成立，并假设它们的图像围成一个区域。这个区域的面积为：

$$A = \int_a^b [f(x) - g(x)] \ dx \tag{1}$$

> 由于 $f$ 和 $g$ 在 $[a, b]$ 上连续，它们的差 $f(x) - g(x)$ 在同一区间上也连续。闭有界区间上的连续函数是[黎曼可积](../riemann-integrability-criteria/)的，因此两条曲线之间的面积是良定义的。

- - -

考虑曲线 $f(x)$ 与 $g(x)$ 之间的灰色阴影区域：

![图 1](/assets/integrals/svg/finding-areas-by-integration-1.zh.svg)

面积 $A$ 等于曲线 $f(x)$ 下方面积与曲线 $g(x)$ 下方面积之差：

$$A = \int_a^b f(x) \ dx - \int_a^b g(x) \ dx$$

根据[不定积分](../indefinite-integrals/)页面回顾的积分线性性，这可以改写为方程 $(1)$。

## 相交曲线之间的面积

到目前为止，我们始终假设 $f(x) \geq g(x)$ 在整个区间 $[a, b]$ 上成立。然而，在许多情形中，区间本身并未给出：它由两条曲线共同确定，第一步是找出它们的交点。通过求解 $f(x) = g(x)$ 得到交点，所得解就是积分上下限。

确定区间后，两条曲线可能在区间内部相交，这意味着 $f(x)$ 和 $g(x)$ 会在某个内部点 $c$ 处交换相对位置。此时，被积函数 $f(x) - g(x)$ 会改变符号，如果直接在 $[a, b]$ 上做一次积分，$x$ 轴上方与下方的贡献会相互抵消，从而得到错误结果。

- - -

正确的做法是在每个交点处分割区间，分别在每个子区间上积分，并始终用上方曲线减去下方曲线：

$$A = \int_{a}^{c} [f(x) - g(x)] \ dx + \int_{c}^{b} [g(x) - f(x)] \ dx$$

如果不想跟踪哪条曲线位于上方，可以用绝对值简洁地写成：

$$A = \int_{a}^{b} |f(x) - g(x)| \ dx$$

![图 2](/assets/integrals/svg/finding-areas-by-integration-2.zh.svg)

[绝对值](../absolute-value/)保证每一块面积都按正值计算，而不论某个子区间上哪一个[函数](../functions/)更大。

> 只要两条曲线的所有交点都包含在积分上下限之中，公式 $A = \int_a^b |f(x) - g(x)| \ dx$ 就成立。绝对值确保两个函数之差始终取正，从而在曲线交换相对位置时，围成区域的任何部分都不会被抵消。

## 例 1

求曲线 $y_1 = e^x$ 与 $y_2 = x^2 - 1$ 在区间 $x \in [-1, 1]$ 上围成的面积。图形情形如下：

![图 3](/assets/integrals/svg/finding-areas-by-integration-3.zh.svg)

应用方程 $(1)$，面积由以下定积分给出：

$$A = \int_{-1}^{1} \left[ e^x - (x^2 - 1) \right] \ dx$$

- - -

展开括号并逐项积分，得到：

$$
\begin{align}
A &= \int_{-1}^{1} \left[ e^x - x^2 + 1 \right] \ dx \\[6pt]
  &= \left[ e^x - \frac{x^3}{3} + x \right]_{-1}^{1} \\[6pt]
  &= \left( e - \frac{1}{3} + 1 \right) - \left( e^{-1} + \frac{1}{3} - 1 \right) \\[6pt]
  &= e - \frac{1}{e} + \frac{4}{3}
\end{align}
$$

因此，两条曲线之间的面积为：

$$A = e - \frac{1}{e} + \frac{4}{3}$$

## 例 2

求曲线 $f(x) = x^3 - 3x$ 与 $g(x) = x$ 围成的区域面积。区间未给出，第一步是令 $f(x) = g(x)$，找出两条曲线的交点：

$$
\begin{align}
x^3 - 3x &= x \\[6pt]
x^3 - 4x &= 0 \\[6pt]
x(x^2 - 4) &= 0
\end{align}
$$

解为 $x = -2$、$x = 0$ 和 $x = 2$。这三个值就是积分上下限。

- - -

由于曲线在 $x = 0$ 处相交，必须在每个子区间内检查 $f$ 与 $g$ 的相对位置。在 $x = -1$ 处计算：

$$
\begin{align}
f(-1) &= (-1)^3 - 3(-1) = 2 \\[6pt]
g(-1) &= -1
\end{align}
$$

因此，$f(x) \geq g(x)$ 在 $[-2, 0]$ 上成立。由对称性，$g(x) \geq f(x)$ 在 $[0, 2]$ 上成立。

- - -

相应地，积分分成两部分：

$$A = \int_{-2}^{0} [f(x) - g(x)] \ dx + \int_{0}^{2} [g(x) - f(x)] \ dx$$

$$A = \int_{-2}^{0} (x^3 - 4x) \ dx + \int_{0}^{2} (4x - x^3) \ dx$$

- - -

第一个积分为：

$$
\begin{align}
\int_{-2}^{0} (x^3 - 4x) \ dx &= \left[ \frac{x^4}{4} - 2x^2 \right]_{-2}^{0} \\[6pt]
  &= 0 - \left(\frac{16}{4} - 2 \cdot 4\right) \\[6pt]
  &= 0 - (4 - 8) \\[6pt]
  &= 4
\end{align}
$$

第二个积分为：

$$
\begin{align}
\int_{0}^{2} (4x - x^3) \ dx &= \left[ 2x^2 - \frac{x^4}{4} \right]_{0}^{2} \\[6pt]
  &= \left(2 \cdot 4 - \frac{16}{4}\right) - 0 \\[6pt]
  &= 8 - 4 \\[6pt]
  &= 4
\end{align}
$$

总面积为：

$$A = 4 + 4 = 8$$

这个结果的对称性并非巧合：$f(x) = x^3 - 3x$ 是一个[奇函数](../even-and-odd-functions/)，两个区域关于原点互为镜像。

## 决策流程

下面的步骤总结了对一对一般曲线应用面积公式的方法。

+ 确定两个函数 $f(x)$、$g(x)$ 以及要计算面积的区间 $[a, b]$。如果区间未给出，就求解 $f(x) = g(x)$ 以定位交点；最小解和最大解成为积分区间的端点。
+ 检查两条曲线在 $[a, b]$ 上的相对位置。在每个子区间取一个测试点，计算 $f(x) - g(x)$，确定哪条曲线位于上方。
+ 当曲线在区间内部不相交时，应用标准公式：

$$A = \int_a^b [f(x) - g(x)] \ dx$$

+ 当曲线在内部点 $c$ 处相交时，分割积分，并在每个子区间上用上方曲线减去下方曲线：

$$A = \int_a^c [f(x) - g(x)] \ dx + \int_c^b [g(x) - f(x)] \ dx$$

+ 使用被积函数的一个[反导数](../indefinite-integrals/)和[微积分基本定理](../fundamental-theorem-of-calculus/)计算每个定积分。当反导数不是初等函数时，[换元积分](../integration-by-substitution/)或[分部积分](../integration-by-parts/)提供合适的工具。

> 这个构造可以推广到由两条以上曲线围成的区域，也可以推广到描述为 $y$ 关于 $x$ 的函数的区域。在所有情形中，基本思想相同：面积等于上边界与下边界之差的积分。

将图形与坐标轴之间的区域绕该轴旋转，会导出用于计算体积的[圆盘法](../the-disc-method/)。
