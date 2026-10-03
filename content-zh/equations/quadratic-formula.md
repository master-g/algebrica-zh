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
  source_hash: 71f4da0fb643a568cb40d2f42fa648daf4133aae805f812c9f5d332fda996d51
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 定义

在[二次方程](../quadratic-equations/)词条中，我们说明了这类方程写成标准形式 $ax^2 + bx + c = 0$ 时涉及一个二次多项式，并且根据[代数基本定理](../roots-of-a-polynomial/)，它在 $\mathbb{C}$ 中总是恰有两个根（按重数计）。本词条后面还会回顾，根的性质由判别式 $\Delta = b^2 - 4ac$ 的符号决定。求根最常用的是求根公式：

$$x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \tag{1}$$

公式 $(1)$ 为求解任何二次方程提供了一套直接的步骤。它适用于实系数或复系数方程，只要 $a \neq 0$，因为 $a$ 出现在分母中。下面两点说明 $(1)$ 中的各项：

+ $a$、$b$ 和 $c$ 是标准形式二次方程的系数，并且如上所述，$a \neq 0$。
+ 正负号给出与多项式两个根相对应的值。

公式 $(1)$ 还使我们能够研究系数依赖于参数时根如何变化，见[含参二次方程](../quadratic-equations-with-parameters/)词条。

- - -

对于下面的分类及其[几何解释](../geometrical-meaning-quadratic-equations/)，我们假设系数 $a$、$b$ 和 $c$ 是实数。

如开头所述，根号下的表达式 $b^2 - 4ac$ 称为判别式。它的符号唯一确定解的个数和性质。

当 $\Delta > 0$ 时，方程有两个不同的实数解。解集记为 $S = \{\ x_1, x_2 \ \}$，其中 $x_1, x_2 \in \mathbb{R}$ 且 $x_1 \neq x_2$。直接应用 $(1)$ 即可求出这些解。

当 $\Delta = 0$ 时，两个实根重合，所以方程只有一个重数为二的根。解集记为 $S = \{\ x \ \}$，其中 $x \in \mathbb{R}$ 且 $x = x_1 = x_2$。由于判别式为零，$(1)$ 化为下面的求解公式。

$$x = -\frac{b}{2a} \tag{2}$$

最后，当 $\Delta < 0$ 时，方程没有实数解，但总有两个虚部不为零的[共轭复数解](../quadratic-equations-with-complex-solutions/)，记作 $\nexists\ x \in \mathbb{R}$。把平方根写成[虚数单位](../complex-numbers/) $i$ 的倍数，就可以由 $(1)$ 得到复数解：

$$x_{1,2} = \frac{-b \pm i\sqrt{4ac - b^2}}{2a}\tag{3}$$

判别式还决定二次函数 $f(x) = ax^2 + bx + c$ 的图像相对于 $x$ 轴的位置。从几何上看，二次方程对应一条[抛物线](../parabola/)，它与该轴的交点取决于判别式的符号：

![图 1](/assets/polynomials/svg/polynomials-2.zh.svg)

更准确地说：

+ 如果 $\Delta > 0$，抛物线与 $x$ 轴交于两个不同的点，所以方程有两个解。
+ 如果 $\Delta = 0$，抛物线与 $x$ 轴相切于一点，即它的顶点，所以方程有一个重数为二的解。
+ 如果 $\Delta < 0$，抛物线与 $x$ 轴不相交，所以方程没有实数解。

## 证明

我们用[配方法](../completing-the-square/)从二次方程的标准形式推导 $(1)$。先把 $ax^2 + bx + c = 0$ 改写，使常数项单独留在右端：

$$ax^2 + bx = -c$$

为了配方，把两边同除以 $a$（按假设它不为零），得到：

$$x^2 + \frac{b}{a}x = -\frac{c}{a} \tag{4}$$

现在把左端变成完全平方。[二项式的平方](../notable-products/) $(a+b)^2$ 等于 $a^2 + 2ab + b^2$。因此，要使 $(4)$ 的左端成为完全平方，需要加上这个恒等式中与 $b^2$ 对应的项。把 $(4)$ 改写如下：

$$x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^2 = -\frac{c}{a} + \left(\frac{b}{2a}\right)^2$$

左端现在是一个二项式的平方。把它写成因式分解形式并化简右端，得到：

$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2} \tag{5}$$

对两边开平方，正负两个符号都要保留，因为一个平方根与它的相反数有相同的平方。于是可以把 $(5)$ 改写如下：

$$x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}$$

把 $x$ 单独分离出来，就得到 $(1)$：

$$x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

- - -

应用求根公式之后，还可以把解的和与积同方程的系数作比较，以此检验解。[韦达公式](../vieta-formulas/)提供了这种检验。它指出，对于根为 $x_1$ 和 $x_2$ 的二次方程 $ax^2 + bx + c = 0$，下列关系成立：

$$
\begin{align}
x_1 + x_2 &= -\frac{b}{a} \\[6pt]
x_1x_2 &= \frac{c}{a}
\end{align}
$$

无论判别式取何值，这些关系在 $\mathbb{C}$ 中都成立。把[因式分解形式](../factoring-quadratic-equations/) $a(x - x_1)(x - x_2)$ 展开并比较系数，就可以得到它们。

## 例题

先把 $(1)$ 应用于第一个方程 $x^2 - 4x + 2 = 0$。方程已经是标准形式，其中 $a = 1$、$b = -4$、$c = 2$，所以把这些系数代入公式，得到：

$$
\begin{align*}
x_{1,2} &= \frac{-(-4) \pm \sqrt{(-4)^2 - 4(1)(2)}}{2(1)} \\[6pt]
&= \frac{4 \pm \sqrt{16 - 8}}{2} \\[6pt]
&= \frac{4 \pm \sqrt{8}}{2} \\[6pt]
&=\frac{4 \pm 2\sqrt{2}}{2}
\end{align*}
$$

由于 $\Delta = 8 > 0$，方程有两个不同的实数解，即 $x_1 = 2 - \sqrt{2}$ 和 $x_2 = 2 + \sqrt{2}$。

- - -

第二个方程需要几步才能化成标准形式：

$$\frac{(x-1)^2}{2} - \frac{(x+1)(x-2)}{3} = \frac{x-1}{3}$$

先去分母，并展开平方和乘积，得到：

$$
\begin{align}
3(x^2 - 2x + 1) - 2(x^2 - x - 2) &= 2x - 2 \\[6pt]
3x^2 - 6x + 3 - 2x^2 + 2x + 4 &= 2x - 2 \\[6pt]
x^2 - 4x + 7 &= 2x - 2\\[6pt]
x^2 - 4x + 7 - 2x + 2 &= 0 \\[6pt]
x^2 - 6x + 9 &= 0
\end{align}
$$

原方程现在已是标准形式。它的系数为 $a = 1$、$b = -6$、$c = 9$，判别式为：

$$\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$$

由于 $\Delta = 0$，两根重合。把系数代入 $(2)$（前面已经指出，它是判别式为零时由 $(1)$ 得到的），得到：

$$x = -\frac{b}{2a} = -\frac{-6}{2(1)} = 3$$

因此方程只有一个实根 $x = 3$，其重数为二。

- - -

最后，我们求解 $x^2 + 2x + 5 = 0$。系数为 $a = 1$、$b = 2$、$c = 5$，这一次判别式为负：

$$\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16$$

因此方程没有实数解。我们用虚数单位 $i$ 表示平方根，于是 $\sqrt{-16} = 4i$，并由 $(3)$ 得到：

$$x_{1,2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i$$

两个解是共轭复数 $x_1 = -1 - 2i$ 和 $x_2 = -1 + 2i$。
