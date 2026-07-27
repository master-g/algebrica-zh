---
title: 复数解的二次方程
title_en: Quadratic Equations with Complex Solutions
source: https://algebrica.org/quadratic-equations-with-complex-solutions/
license: CC BY-NC 4.0
tags:
  - complex-conjugate
  - complex-numbers
  - discriminant
  - quadratic-equation
translation:
  status: current
  source_hash: 5193d99d75743adead4b91465bfe9a71ba78fc9f08a61202c39c0058e50fd55c
  translator: omp
  updated: "2026-07-26T06:01:33.920Z"
---
## 实数解与复数解

当系数为实数时，[二次方程](../quadratic-equations/)解的性质完全由判别式 $\Delta = b^2 - 4ac$ 的符号决定，该判别式出现在[求根公式](../quadratic-formula/)的根式下：

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

当 $\Delta > 0$ 时，方程有两个不同的实数解。当 $\Delta = 0$ 时，两个解重合，方程有唯一的实根，按重数二计。当 $\Delta < 0$ 时，涉及负数的平方根，方程无实数解。然而，方程在[复数](../complex-numbers/)域中恰好有两个解，在实系数条件下二者恒以共轭复数对的形式出现。

- - -

根据[代数学基本定理](../roots-of-a-polynomial/)，次数为 $n$ 的[多项式](../polynomials/)方程在 $\mathbb{C}$ 中恰有 $n$ 个根（按重数计）。将此应用于二次方程的情形，可以保证每个形如 $ax^2 + bx + c = 0$ 的方程在 $\mathbb{C}$ 中恰有两个根，无论判别式的符号如何。上述三种情形描述了这两个根的分布方式：两个不同的实根、一个二重实根，或两个非实的共轭复数。

## 共轭复数

给定复数 $z = a + ib$，其共轭复数通过改变虚部的符号而得到：

$$\overline{z} = a - ib$$

复数 $\overline{z}$ 在高斯平面上由与 $z$ 关于实轴对称的点表示。

![图 2](/assets/complex-numbers/svg/complex-numbers-2.zh.svg)

一个数恰好在其与自身共轭复数相等时为实数，因为 $z = \overline{z}$ 迫使虚部为零。

> 共轭保持代数运算。对于任意两个复数 $w$ 和 $z$，有 $\overline{w + z} = \overline{w} + \overline{z}$ 和 $\overline{wz} = \overline{w}\overline{z}$。在下文的论证中，关于共轭仅用到这两个恒等式。

## 复共轭根

当系数 $a$、$b$、$c$ 均为[实数](../properties-of-real-numbers/)时，方程 $ax^2 + bx + c = 0$ 的复根总是成对出现且互为共轭复数。若 $z \in \mathbb{C}$ 是一个根，则 $\overline{z}$ 也是一个根。

设 $az^2 + bz + c = 0$。对两边取共轭复数，并利用共轭对加法与乘法的分配律，可得：

$$\overline{az^2 + bz + c} = \overline{a}(\overline{z})^2 + \overline{b}\overline{z} + \overline{c} = \overline{0}$$

由于每个实数都等于其自身的共轭复数，故 $\overline{a} = a$、$\overline{b} = b$、$\overline{c} = c$、$\overline{0} = 0$。该关系因此化简为：

$$a(\overline{z})^2 + b\overline{z} + c = 0$$

这正是原方程在 $\overline{z}$ 处取值的结果，因此 $\overline{z}$ 是同一方程的根。当 $\Delta < 0$ 时，两根互异且均为非实复数，从而构成一对真正的共轭复数。

> 系数为实数这一假设是本质性的。例如对方程 $x^2 + ix + 1 = 0$，其系数不全为实数，根之间未必互为共轭复数。

## 复根的一般形式

在实系数前提下，当 $\Delta < 0$ 时，$4ac - b^2$ 为正数，判别式的平方根可用虚数单位表示为 $\sqrt{b^2 - 4ac} = i\sqrt{4ac - b^2}$。将其代入求根公式，便得到两根的闭式表达式：

$$x_{1,2} = -\frac{b}{2a} \pm \frac{\sqrt{4ac - b^2}}{2a}i$$

两根的实部都等于 $-\dfrac{b}{2a}$，而虚部符号相反。这使得共轭关系一目了然：两根实部相同，仅在虚部符号上有所差别。

## 两根的和与积

根与系数之间的关系由[韦达公式](../vieta-formulas/)给出，在 $\mathbb{C}$ 上与在实数域上同样成立。对方程 $ax^2 + bx + c = 0$ 的两根 $z$、$\overline{z}$，有：

$$z + \overline{z} = -\frac{b}{a} \qquad z\overline{z} = \frac{c}{a}$$

记 $z = p + iq$，则两根之和为 $z + \overline{z} = 2p$，两根之积为 $z\overline{z} = p^2 + q^2$。由于 $a$、$b$、$c$ 均为实数，这两个量也都是实数。两根之积等于模长的平方 $|z|^2$，只要虚部不为零，它就严格为正。

利用这两个恒等式，便可由实系数二次方程的任意一个复根重建该方程。将 $ax^2 + bx + c = 0$ 除以 $a$，得到首一方程：

$$x^2 - (z + \overline{z})x + z\overline{z} = 0$$

## 例 1

解二次方程：

$$x^2 + 4x + 5 = 0$$

该方程已具有标准形式 $ax^2 + bx + c = 0$，系数 $a = 1$、$b = 4$、$c = 5$ 均为实数。代入[求根公式](../quadratic-formula/)得：

$$x_{1,2} = \frac{-4 \pm \sqrt{4^2 - 4 \cdot 1 \cdot 5}}{2 \cdot 1}$$

判别式为负：

$$\Delta = 16 - 20 = -4$$

由于 $\Delta < 0$，该方程无实数解。记 $\sqrt{-4} = 2i$，并继续应用求根公式，得：

$$x_{1,2} = \frac{-4 \pm 2i}{2}$$

化简后，两个共轭复数解为：

$$x_1 = -2 + i \qquad x_2 = -2 - i$$

直接验证可确认该结果。两根之和为 $x_1 + x_2 = -4$，与 $-\dfrac{b}{a} = -4$ 一致；两根之积为 $x_1 x_2 = (-2)^2 - i^2 = 4 + 1 = 5$，与 $\dfrac{c}{a} = 5$ 一致。

## 例 2

下例说明判别式为负且系数不全是整数的情形，此时还需额外的化简才能把解写成标准复数形式。考虑方程：

$$3x^2 - 2x + 4 = 0$$

该方程具有标准形式，系数 $a = 3$、$b = -2$、$c = 4$ 均为实数。代入[求根公式](../quadratic-formula/)得：

$$x_{1,2} = \frac{2 \pm \sqrt{(-2)^2 - 4 \cdot 3 \cdot 4}}{2 \cdot 3}$$

计算判别式：

$$\Delta = 4 - 48 = -44$$

由于 $\Delta < 0$，该方程无实数解。写成 $\sqrt{-44} = 2\sqrt{11}i$，得：

$$x_{1,2} = \frac{2 \pm 2\sqrt{11}i}{6} = \frac{1 \pm \sqrt{11}i}{3}$$

因此两个共轭复数解为：

$$x_1 = \frac{1 + \sqrt{11}i}{3} \qquad x_2 = \frac{1 - \sqrt{11}i}{3}$$

实部 $\dfrac{1}{3}$ 与一般表达式 $-\dfrac{b}{2a} = \dfrac{2}{6} = \dfrac{1}{3}$ 相符，这为计算提供了一种快速的一致性检验。

## 例 3

韦达公式也可反向使用：从一个已知的复根出发，构造一个具有实系数的二次方程。设已知一个根为：

$$z = 3 - 2i$$

由于系数须为实数，第二个根是其共轭复数 $\overline{z} = 3 + 2i$。两根之和与两根之积为：

$$z + \overline{z} = 6 \qquad z\overline{z} = 3^2 + 2^2 = 13$$

将这些值代入首一形式 $x^2 - (z + \overline{z})x + z\overline{z} = 0$，得：

$$x^2 - 6x + 13 = 0$$

该方程的判别式为 $\Delta = 36 - 52 = -16$，证实两根为非实数；对其求解得到 $3 \pm 2i$，与预期一致。
