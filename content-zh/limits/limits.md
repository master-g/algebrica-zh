---
title: 极限
title_en: Limits
source: https://algebrica.org/limits/
license: CC BY-NC 4.0
tags:
  - asymptotes
  - continuous-functions
  - epsilon-delta-definition
  - indeterminate-forms
  - limits
  - neighbourhood
translation:
  status: current
  source_hash: 14fce8dc763b6e44b6411bf9c01527a160184e3fab31a7e715316809e55b9066
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 引言

直观地说，当 $x$ 趋近于点 $x_0$ 时，[函数](../functions/) $f(x)$ 的极限描述了 $x$ 的取值任意接近 $x_0$ 而不必真正到达该点时，函数的行为。$x$ 的[邻域](../topology-of-the-real-line/)是由所有充分接近 $x$ 的点组成的区间。更形式化地说，$x$ 的邻域是任意满足 $\delta > 0$ 的开区间 $(x - \delta, x + \delta)$。极限通过邻域定义，函数在某点附近的局部行为也用同样的语言描述。

![图 1](/assets/limits/svg/limits-1.zh.svg)

邻域越小，其中的点就越接近 $x$。当区间 $(x - \delta, x + \delta)$ 变窄，也就是 $\delta$ 趋近于零时，邻域中的点与 $x$ 之间的距离也随之减小。

从平均[速度](../velocity/)到瞬时速度的过渡，是这一极限过程的一个物理例子。平均速度定义在非零时间区间上，而当该区间收缩且极限存在时，其极限就是某一时刻的速度。

## 定义

设 $f(x)$ 是一个函数，我们希望研究 $x$ 趋近点 $x_0$ 时它的行为。若当 $x$ 趋近于 $x_0$ 时，函数 $f(x)$ 的极限为 $\ell$，记作：

$$\lim_{x \to x_0} f(x) = \ell$$

形式上，这个陈述断言：对于任意容许误差 $\varepsilon > 0$，都存在相应的距离 $\delta > 0$，使得只要：

$$0 < |x - x_0| < \delta$$

就有：

$$|f(x) - \ell| < \varepsilon$$

等价地，对于 $\ell$ 的每个邻域，都存在 $x_0$ 的一个邻域，其中除 $x_0$ 本身外的所有点都会被映射到 $\ell$ 的该邻域中。

- - -

当定义只应用于 $x_0$ 的右邻域或只应用于左邻域时，分别称为右极限和左极限。它们记作：

$$\lim_{x \to x_0^+} f(x) \qquad \lim_{x \to x_0^-} f(x)$$

## 渐近线与无穷极限

一般而言，极限中的 $x$ 可以趋近实数 $x_0$，也可以趋近 $\pm \infty$：

$$\lim_{x \to x_0} f(x) = \ell \qquad \lim_{x \to x_0} f(x) = \pm \infty$$

此外，极限本身的值也可以是有限数或 $\pm \infty$：

$$\lim_{x \to \pm \infty} f(x) = \ell \qquad \lim_{x \to \pm \infty} f(x) = \pm \infty$$

- - -

当 $f(x)$ 的极限存在，并且 $x$ 趋近有限实数 $x_0$ 时函数值趋于 $\pm \infty$，函数在该点附近的行为决定了一条方程为 $x = x_0$ 的[竖直渐近线](../asymptotes/)。

![图 2](/assets/limits/svg/limits-2.zh.svg)

两个单侧极限常常向相反方向发散：

$$\lim_{x \to x_0^+} f(x) = -\infty \qquad \lim_{x \to x_0^-} f(x) = +\infty$$

- - -

当 $x$ 趋近于 $\pm\infty$ 时，若 $f(x)$ 的极限存在并趋近有限值 $L$，则直线 $y = L$ 是函数的一条[水平渐近线](../asymptotes/)。

![图 3](/assets/limits/svg/limits-3.zh.svg)

这发生在 $x$ 趋近无穷的两个方向时，极限都等于同一个值 $L$：

$$\lim_{x \to +\infty} f(x) = L \qquad \lim_{x \to -\infty} f(x) = L$$

> 渐近线是一条直线：当 $x$ 值或 $y$ 值无界增大或减小时，函数图像可以任意接近它。随着图像向坐标平面的极端区域延伸，曲线与渐近线之间的距离趋于零。[渐近线](../asymptotes/)专页系统介绍了水平、竖直和斜渐近线。

## 极限存在与连续性的条件

当函数的左极限和右极限都存在且有限，但取值不同 $\ell_1 \neq \ell_2$ 时，有：

$$
\begin{cases}
\lim\limits_{x \to x_0^-} f(x) = \ell_1 \in \mathbb{R} \\[6pt]
\lim\limits_{x \to x_0^+} f(x) = \ell_2 \in \mathbb{R}
\end{cases} \implies \nexists \lim\limits_{x \to x_0} f(x)
$$

双侧极限不存在，因为函数从不同方向趋近时会接近两个不同的值。不过，分别考察时，两个单侧极限都定义良好且有限。

- - -

根据极限的唯一性定理，如果函数 $f(x)$ 趋近 $x_0$ 时的极限存在，无论是有限值还是无穷值，该极限都是唯一的。这一陈述可形式化为：

$$\lim_{x \to x_0} f(x) = \ell \in \overline{\mathbb{R}} \implies \exists!\,\ell$$

如果两个有限值 $\ell_1 \neq \ell_2$ 都满足定义，取 $\varepsilon < |\ell_1 - \ell_2|/2$，就会迫使 $x_0$ 附近的 $f(x)$ 值同时落入两个互不相交的邻域，这是不可能的。

- - -

极限也定义了函数[连续](../continuous-functions/)的含义。如果函数 $y = f(x)$ 在点 $x_0$ 处连续，那么函数在 $x$ 趋近 $x_0$ 时的极限存在且有限，并且等于该点的函数值：

$$\lim_{x \to x_0} f(x) = f(x_0)$$

## 性质

极限遵守代数运算，因此和、积、商或常数倍的极限都可以由各部分的极限得到。[极限的代数](../algebra-of-limits/)专页通过证明和例题讨论每条规则。

- - -

常数与函数乘积的极限，等于该常数与函数极限的乘积，前提是函数极限存在。

$$\lim_{x \to x_0} \big( c f(x) \big) = c \lim_{x \to x_0} f(x) = c \cdot \ell$$

用常数乘函数不会改变取极限的过程，只会把结果按该常数缩放。

- - -

两个函数代数和的极限，等于它们各自极限的和，前提是两个极限都存在。

$$\lim_{x \to x_0} \big( f(x) + g(x) \big) = \lim_{x \to x_0} f(x) + \lim_{x \to x_0} g(x) = \ell_1 + \ell_2$$

因此可以分别计算每个函数的极限，再将它们相加。这条规则在处理[多项式](../polynomials/)、[正弦和余弦](../sine-and-cosine/)等三角函数以及其他常见初等表达式时尤其有用。

- - -

两个函数乘积的极限，等于它们各自极限的乘积，前提是两个极限都存在。

$$\lim\limits_{x \to x_0} \big( f(x) g(x) \big) = \lim\limits_{x \to x_0} f(x) \cdot \lim\limits_{x \to x_0} g(x) = \ell_1 \cdot \ell_2$$

- - -

两个函数商的极限，等于它们各自极限的商，前提是两个极限都存在且分母的极限不为零。

$$\lim\limits_{x \to x_0} \left( \frac{f(x)}{g(x)} \right) = \frac{\lim\limits_{x \to x_0} f(x)}{\lim\limits_{x \to x_0} g(x)} = \frac{\ell_1}{\ell_2}$$

## 标准性质不适用时

上面陈述的性质只有在所有相关极限都存在且有限，并且分母保持非零时才有效。在实际应用中，经常会遇到直接代入产生未定义结果的表达式，例如：

$$\frac{0}{0} \qquad \frac{\infty}{\infty} \qquad \infty - \infty$$

这类表达式称为[未定式](../indeterminate-forms/)。要解决它们，需要超出标准代数变形的专门技巧，包括因式分解、渐近比较、[洛必达法则](../hopital-rule/)，以及结合[泰勒展开](../taylor-series/)与[小 o 记号](../little-o-notation/)的方法。一个熟悉的例子是极限：

$$\lim_{x \to 0} \frac{\sin x}{x}$$

直接代入 $x = 0$ 得到未定义的 $\frac{0}{0}$。由于分母的极限为零，不能应用商的极限性质。正确值为 $1$，这是[重要极限](../remarkable-limits/)之一。

## 初等函数的极限

初等函数在无穷远处有简单的极限，对数函数在 $0^+$ 处也有简单极限。较难的极限计算大多可以归结为这些标准值。

- - -

对于常值函数 $f(x) = k$，其中 $k \in \mathbb{R}$，有：

$$
\begin{align}
\lim_{x \to -\infty} k &= k \\[6pt]
\lim_{x \to +\infty} k &= k
\end{align}
$$

- - -

对于恒等函数 $f(x) = x$，有：

$$
\begin{align}
\lim_{x \to -\infty} x &= -\infty \\[6pt]
\lim_{x \to +\infty} x &= +\infty
\end{align}
$$

- - -

对于底数 $a > 1$ 的[指数函数](../exponential-function/)，有：

$$
\begin{align}
\lim_{x \to -\infty} a^x &= 0 \\[6pt]
\lim_{x \to +\infty} a^x &= +\infty
\end{align}
$$

对于底数 $0 < a < 1$ 的指数函数，有：

$$
\begin{align}
\lim_{x \to -\infty} a^x &= +\infty \\[6pt]
\lim_{x \to +\infty} a^x &= 0
\end{align}
$$

- - -

对于偶指数 $n \in \mathbb{N}$ 的[幂函数](../power-function/) $f(x) = x^n$，有：

$$
\begin{align}
\lim_{x \to -\infty} x^n &= +\infty \\[6pt]
\lim_{x \to +\infty} x^n &= +\infty
\end{align}
$$

对于奇指数的幂函数，有：

$$
\begin{align}
\lim_{x \to -\infty} x^n &= -\infty \\[6pt]
\lim_{x \to +\infty} x^n &= +\infty
\end{align}
$$

- - -

对于偶数次根式的[根函数](../radicals/) $f(x) = \sqrt[n]{x}$，有：

$$\lim_{x \to +\infty} \sqrt[n]{x} = +\infty$$

> 对于偶数次根式，根函数只在 $x \geq 0$ 时有定义。因此，$x \to -\infty$ 时的极限不适用。

对于奇数次根式的根函数，有：

$$
\begin{align}
\lim_{x \to -\infty} \sqrt[n]{x} &= -\infty \\[6pt]
\lim_{x \to +\infty} \sqrt[n]{x} &= +\infty
\end{align}
$$

- - -

对于底数 $a > 1$ 的[对数函数](../logarithms/)，有：

$$
\begin{align}
\lim_{x \to 0^+} \log_a x &= -\infty \\[6pt]
\lim_{x \to +\infty} \log_a x &= +\infty
\end{align}
$$

对于底数 $0 < a < 1$ 的对数函数，有：

$$
\begin{align}
\lim_{x \to 0^+} \log_a x &= +\infty \\[6pt]
\lim_{x \to +\infty} \log_a x &= -\infty
\end{align}
$$

- - -

对于[绝对值](../absolute-value/)函数 $f(x) = |x|$，有：

$$
\begin{align}
\lim_{x \to -\infty} |x| &= +\infty \\[6pt]
\lim_{x \to +\infty} |x| &= +\infty
\end{align}
$$

- - -

对于[符号函数](../sign-function/) $\mathrm{sgn}(x)$，有：

$$
\begin{align}
\lim_{x \to -\infty} \mathrm{sgn}(x) &= -1 \\[6pt]
\lim_{x \to +\infty} \mathrm{sgn}(x) &= 1
\end{align}
$$
