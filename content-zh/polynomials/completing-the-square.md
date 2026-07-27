---
title: 配方法
title_en: Completing the Square
source: https://algebrica.org/completing-the-square/
license: CC BY-NC 4.0
tags:
  - completing-the-square
  - discriminant
  - quadratic-equation
  - quadratic-formula
  - vertex-form
translation:
  status: current
  source_hash: b2cafcfb3a10c2e1557b5573706b6d2e9abb6e77a0befea974d26b8e6616a65d
  translator: omp
  updated: "2026-07-25T15:14:50.191Z"
---
## 引言

配方法是一种用于将二次[多项式](../polynomials/)重写为能揭示其结构性质的形式的技术。考虑如下形式的多项式（其中 a、b、c 均为实数且 a≠0）：

$$
p(x) = ax^2 + bx + c, \quad a \neq 0
$$

目标是确定实常数 $h$ 和 $k$（它们依赖于 $a$、$b$ 和 $c$），使得 $p(x)$ 取得顶点式

$$
p(x) = a(x + h)^2 + k
$$

数对 $(-h, k)$ 给出了对应[抛物线](../parabola/)的顶点。值 $k$ 当 $a > 0$ 时表示 $p$ 的最小值，当 $a < 0$ 时表示其最大值。令 $p(x)$ 等于零便得到方程 $a(x+h)^2 = -k$，由此在实数范围内（当判别式非负时）对两边取实平方根即可求得[根](../roots-of-a-polynomial/)；当判别式为负时没有实根，但在复数范围内仍有两个按重数计的根。

- - -
为了导出 $h$ 和 $k$ 的显式表达式，首先从二次项和一次项中提出 $a$：

$$
p(x) = a\left(x^2 + \frac{b}{a}x\right) + c
$$

关键的一步是在括号内加上并减去 $\left(\dfrac{b}{2a}\right)^{2}$，选取该量使得涉及 $x$ 的三项构成一个完全平方式[三项式](../trinomials/)，即标准的[乘法公式](../notable-products/)之一：

$$
p(x) = a\left(x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^{2} - \left(\frac{b}{2a}\right)^{2}\right) + c
$$

识别出此完全平方式三项式后，便可将其改写为紧凑形式：

$$
p(x) = a\left[\left(x + \frac{b}{2a}\right)^{2} - \frac{b^2}{4a^2}\right] + c
$$

展开 $a$ 并合并常数项，得到：

$$
p(x) = a\left(x + \frac{b}{2a}\right)^{2} - \frac{b^2}{4a} + c
$$

此即顶点式，其中：

$$
h = \frac{b}{2a} \qquad k = c - \frac{b^2}{4a}
$$

## 几何解释

配方法所依据的代数恒等式给出了一个直接的几何解释。考虑下面的表达式：

$$
x^2 + 6x + 9
$$

每一项都表示某个特定几何区域的面积：$x^2$ 对应于边长为 $x$ 的正方形；$6x$ 表示两个矩形的面积之和，每个矩形的尺寸为 $x \times 3$；$9$ 表示边长为 $3$ 的正方形的面积。当这三个区域围绕同一个顶点排列时，它们恰好拼成一个边长为 $x + 3$ 的更大正方形，从而验证了恒等式：

$$
x^2 + 6x + 9 = (x + 3)^2
$$

![图 1](/assets/polynomials/svg/completing-the-square-1.zh.svg)

这种几何推理恰好适用于常数项等于一次项系数一半的平方的情形，例如具有重根的多项式。令该表达式等于零得到方程 $(x+3)^2 = 0$，其唯一解为 $x = -3$。在一般情形下，即使所得图形在正实数范围内没有具体的几何实现，配方法仍能从代数上给出必要的修正。

> 当系数为较小的整数且多项式易于分解时，这种几何方法通常比使用[求根公式](../quadratic-formula/)更为直观。当首项系数或一次项含有分数或无理数时，其有效性会下降，因为运算变得更加复杂，此时一般优先使用求根公式。

## 例 1

用下面的二次方程可以演示该方法的应用：

$$
3x^2 - 4x - 1 = 0
$$

将常数项移到右边，两边同时除以 $3$：

$$
x^2 - \frac{4}{3}x = \frac{1}{3}
$$

加到两边的值是 $x$ 系数一半的平方，具体如下：

$$ 
\left(\frac{1}{2} \cdot \left(-\frac{4}{3}\right)\right)^{2}
= \left(-\frac{2}{3}\right)^{2}
= \frac{4}{9}
$$

$$
x^2 - \frac{4}{3}x + \frac{4}{9} = \frac{1}{3} + \frac{4}{9}
$$

此时左边构成一个完全平方式三项式：

$$
\left(x - \frac{2}{3}\right)^{2} = \frac{3}{9} + \frac{4}{9} = \frac{7}{9}
$$

对两边取平方根，得到

$$
x - \frac{2}{3} = \pm\frac{\sqrt{7}}{3}
$$

方程有两个实根：

$$
x = \frac{2 \pm \sqrt{7}}{3}
$$

> 当系数不是较小的整数时，配方法通常比直接套用[求根公式](../quadratic-formula/)更繁琐。此时一般优先采用后一种方法。

## 求根公式的推导

配方法的一个主要应用，是可以直接推出[求根公式](../quadratic-formula/)，而无需将其作为一个独立的结果。推导从一般的二次方程开始（其中 a、b、c 为实数且 a 不等于 0）：

$$
ax^2 + bx + c = 0 \quad a \neq 0.
$$

两边同时除以 $a$，并将常数项移到右边：

$$
x^2 + \frac{b}{a}x = -\frac{c}{a}
$$

两边加上 $\left(\dfrac{b}{2a}\right)^{2}$，即可在左边完成配方：

$$
x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^{2} = \left(\frac{b}{2a}\right)^{2} - \frac{c}{a}
$$

由此得到：

$$
\left(x + \frac{b}{2a}\right)^{2} = \frac{b^2 - 4ac}{4a^2}
$$

对两边取实平方根（在实数范围内要求判别式非负；当判别式为负时方程没有实根，但在复数范围内仍有两个按重数计的根），并解出 $x$，得到

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

> 这一推导表明，求根公式是将配方法应用于一般的[二次方程](../quadratic-equations/)所得到的直接结果。

- - -
求根公式中根号下的表达式 $b^2 - 4ac$ 称为该方程的判别式。它的符号决定了根的性质：

+ 当 $b^2 - 4ac > 0$ 时，方程有两个不相等的实根。
+ 当 $b^2 - 4ac = 0$ 时，方程有一个二重实根。
+ 当 $b^2 - 4ac < 0$ 时，方程没有实根，因为在 $\mathbb{R}$ 中负数的平方根没有定义。
