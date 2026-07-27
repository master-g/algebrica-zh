---
title: 求根公式
title_en: Quadratic Formula
source: https://algebrica.org/quadratic-formula/
license: CC BY-NC 4.0
tags:
  - completing-the-square
  - discriminant
  - quadratic-equation
  - quadratic-formula
  - vieta-formulas
translation:
  status: current
  source_hash: 52f3a1689e893f25e018fa4743977d87b6ac3ff89305020caefe3756ea7be698
  translator: omp
  updated: "2026-07-26T04:02:15.222Z"
---
## 定义

给定标准形式 $ax^2 + bx + c = 0$ 的 [二次方程](../quadratic-equations/)，求根公式用系数 $a$、$b$、$c$ 显式给出其根的表达式：

$$x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

该公式通过对一般标准形式应用 [配方法](../completing-the-square/) 推导得到，是初等代数的核心结论之一。它适用于任何实系数或复系数的二次方程，前提是 $a \neq 0$。

+ $a$、$b$、$c$ 是方程的系数，其中 $a \neq 0$。
+ 正负号反映了一个事实：公式给出两个值，对应于该多项式的两个根。
+ 由 [代数学基本定理](../roots-of-a-polynomial/)，二次多项式在 $\mathbb{C}$ 中恰有两个根（计入重数）。当系数均为实数时，根据判别式的符号，这两个根可能是两个不同的实数、一个二重实根，或一对共轭复数。

只要能够计算平方根，求根公式就成立。当系数为 [实数](../properties-of-real-numbers/) 时，公式总能在 $\mathbb{C}$ 中给出解，因为每个复数在 $\mathbb{C}$ 中都有平方根。这保证了只要在合适的数系中讨论，任何二次方程都不会无解。

> 求根公式还为研究当系数依赖于某个参数时根如何变化提供了自然的框架。此时判别式成为该参数本身的函数，其符号决定了根的性质如何随参数变化而改变。这一分析在 [含参数的二次方程](../quadratic-equations-with-parameters/) 专条中展开。

## 配方法推导

求根公式通过对一般方程应用 [配方法](../completing-the-square/) 得到。出发点是标准形式，条件 $a \neq 0$ 保证方程确实是二次的：

$$ax^2 + bx + c = 0$$

第一步将常数项移到右边，分离出含未知数的项：

$$ax^2 + bx = -c$$

由于配方法适用于首一表达式，两边除以首项系数 $a$（由假设知其非零）：

$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

- - -

此时左边被凑成完全平方式。一次项系数为 $\frac{b}{a}$，配方需要在两边加上其一半的平方，即 $\left(\frac{b}{2a}\right)^2$，以保持等式成立：

$$x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^2 = -\frac{c}{a} + \left(\frac{b}{2a}\right)^2$$

构造上左边是二项式的平方，而右边在公分母 $4a^2$ 下合并：

$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$

- - -

两边开平方会引入正负两种取值。当 $a$ 为实数时，$\sqrt{4a^2}=2|a|$，而正负号已经涵盖了 $a$ 的符号，因此可等价地把分母写成 $2a$；当 $a$ 为复数时，$\sqrt{\Delta}$ 的两个取值互为相反数，下面的正负号同样给出全部结果：

$$x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}$$

将项 $\frac{b}{2a}$ 移到右边即可分离出未知数：

$$x = -\frac{b}{2a} \pm \frac{\sqrt{b^2 - 4ac}}{2a}$$

两个分数共有分母 $2a$，合并成单一表达式，即求根公式：

$$x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

此推导表明，公式对一切满足 $a \neq 0$ 的二次方程成立，且出现在根号下的量 $b^2 - 4ac$（判别式）自然产生于代数运算之中。

## 判别式

平方根号下的项 $\Delta = b^2 - 4ac$，称为判别式。以下按正负号分类时，假设 $a$、$b$、$c$ 均为实数；在此条件下，判别式决定了二次方程实数解的个数与性质。

当 $\Delta > 0$ 时，方程有两个不同的实数解：

$$S = \{\ x_1, x_2 \ \} \qquad x_1, x_2 \in \mathbb{R} \qquad x_1 \neq x_2$$

$$x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

当 $\Delta = 0$ 时，方程有一个二重实根：

$$S = \{\ x \ \} \qquad x \in \mathbb{R} \qquad x = x_1 = x_2$$

$$x = -\frac{b}{2a}$$

当 $\Delta < 0$ 时，方程没有实数解，而是给出一对虚部非零的复共轭解：

$$\nexists\ x \in \mathbb{R}$$

$$x_{1,2} = \frac{-b \pm i\sqrt{4ac - b^2}}{2a}$$

关于最后一种情形的详细讨论，见「[复数解的二次方程](../quadratic-equations-with-complex-solutions/)」条目。

- - -

判别式 $\Delta = b^2 - 4ac$ 还决定二次函数 $f(x) = ax^2 + bx + c$ 的图像相对于 $x$ 轴的位置。从几何上看，二次方程对应一条[抛物线](../parabola/)，判别式的符号决定了它相对于该轴的位置：

![图 1](/assets/polynomials/svg/polynomials-2.zh.svg)

+ 若 $\Delta > 0$，抛物线与 $x$ 轴相交于两个不同的点。
+ 若 $\Delta = 0$，抛物线在顶点处与 $x$ 轴相切。
+ 若 $\Delta < 0$，抛物线与 $x$ 轴不相交。

判别式与曲线形状之间的关系，在「[二次方程的几何意义](../geometrical-meaning-quadratic-equations/)」条目中有进一步讨论。

## 韦达公式

对于二次方程 $ax^2 + bx + c = 0$，设其两根为 $x_1$ 和 $x_2$，两根之和与积分别为：

$$x_1 + x_2 = -\frac{b}{a} \qquad x_1x_2 = \frac{c}{a}$$

这些关系在 $\mathbb{C}$ 中对判别式的任何取值都成立，它们可直接由展开[因式形式](../factoring-quadratic-equations/) $a(x - x_1)(x - x_2)$ 并比较系数得到。任意次数多项式情形的一般陈述及其推导与应用，在「[韦达公式](../vieta-formulas/)」条目中展开；而这些关系在分解高次多项式时所起的作用，则在「[三项式方程](../trinomial-equations/)」条目中讨论。

## 例 1

使用求根公式求解方程 $x^2 - 4x + 2 = 0$。该方程已为标准形式，其中 $a = 1$、$b = -4$、$c = 2$。代入公式得：

$$
\begin{align*}
x_{1,2} &= \frac{-(-4) \pm \sqrt{(-4)^2 - 4(1)(2)}}{2(1)} \\[6pt]
&= \frac{4 \pm \sqrt{16 - 8}}{2} \\[6pt]
&= \frac{4 \pm \sqrt{8}}{2}
\end{align*}
$$

由于 $\Delta = 8 > 0$，方程有两个不同的实数解。化简 $\sqrt{8} = 2\sqrt{2}$，得到：

$$x_{1,2} = \frac{4 \pm 2\sqrt{2}}{2} = 2 \pm \sqrt{2}$$

因此两个解为 $x_1 = 2 - \sqrt{2}$ 和 $x_2 = 2 + \sqrt{2}$。

## 例 2

求解方程 $x^2 - 6x + 9 = 0$。此处 $a = 1$、$b = -6$、$c = 9$，故判别式为：

$$\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$$

由于 $\Delta = 0$，两根重合。代入公式得：

$$x = -\frac{b}{2a} = -\frac{-6}{2(1)} = 3$$

方程有唯一实根 $x = 3$，按二重根计。对应的抛物线在点 $(3, 0)$ 处与 $x$ 轴相切。

## 例 3

求解方程 $x^2 + 2x + 5 = 0$。系数为 $a = 1$、$b = 2$、$c = 5$，判别式为：

$$\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16$$

由于 $\Delta < 0$，方程无实数解。用虚数单位 $\sqrt{-16} = 4i$ 表示平方根，公式给出：

$$x_{1,2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i$$

两解构成一对共轭复数 $x_1 = -1 - 2i$ 和 $x_2 = -1 + 2i$。
