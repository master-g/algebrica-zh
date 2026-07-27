---
title: 二次方程的因式分解
title_en: Factoring Quadratic Equations
source: https://algebrica.org/factoring-quadratic-equations/
license: CC BY-NC 4.0
tags:
  - ac-method
  - discriminant
  - factoring
  - quadratic-equation
  - vieta-formulas
translation:
  status: current
  source_hash: c616b8b6053d2a0428b856309b536036b0ba01a1fd61f3af6f9d3ca3455875b6
  translator: omp
  updated: "2026-07-26T04:05:48.983Z"
---
## 推导

标准形式下的[二次方程](../quadratic-equations/)写作：

$$ax^{2} + bx + c = 0, \qquad a \neq 0$$

对该方程进行因式分解，意味着把左端改写为具有相同根的两个线性因式之积。当[判别式](../quadratic-formula/) $\Delta = b^2 - 4ac$ 非负时，该方程有两个[实根](../roots-of-a-polynomial/) $x_1$ 和 $x_2$，且成立如下恒等式：

$$ax^{2} + bx + c = a(x - x_1)(x - x_2) \tag{1}$$

当 $\Delta = 0$ 时两根重合，此时因式分解退化为 $a(x - x_0)^2$。当 $\Delta < 0$ 时，该多项式在 $\mathbb{R}$ 上不可约，只能在 $\mathbb{C}$ 上进行因式分解，此时两根为[共轭复数](../quadratic-equations-with-complex-solutions/)。

- - -

考虑与该方程相关联的二次[多项式](../polynomials/)：

$$P(x) = ax^2 + bx + c$$

由于 $a \neq 0$，可将首项系数提取出来：

$$P(x) = a\left(x^2 + \frac{b}{a}x + \frac{c}{a}\right)$$

括号中首一多项式的系数通过[韦达公式](../quadratic-formula/)与两根相联系：

$$x_1 + x_2 = -\frac{b}{a}, \qquad x_1x_2 = \frac{c}{a}$$

将这些表达式代入该多项式，可得：

$$
\begin{align}
P(x) &= a\left[x^2 - (x_1 + x_2)x + x_1x_2\right] \\[6pt]
&= a\left(x^2 - x_1x - x_2x + x_1x_2\right) \\[6pt]
&= a\left[x(x - x_1) - x_2(x - x_1)\right] \\[6pt]
&= a(x - x_1)(x - x_2)
\end{align}
$$

由此即得恒等式 $(1)$。令每个线性因式等于零，便可求得该方程的根：

$$x - x_1 = 0 \implies x = x_1$$

$$x - x_2 = 0 \implies x = x_2$$

> 上述因式分解是精确的，且直接由根的取值得出。当根事先未知时，可由[求根公式](../quadratic-formula/)求出，再代入 $(1)$。另一种方法在系数为整数且根为有理数时很有用，即 [AC 法](../factoring-polynomials-ac-method/)，它无需显式计算判别式即可对该多项式进行因式分解。

## 例 1

考虑一个有整数根的多项式：

$$x^{2} - 4x + 3$$

此处 $a = 1$，故恒等式 $(1)$ 退化为 $(x - x_1)(x - x_2)$。可以通过观察求根，即寻找两个数，其和为 $4$、积为 $3$。数对 $(1, 3)$ 同时满足这两个条件，于是因式分解为：

$$x^{2} - 4x + 3 = (x - 1)(x - 3)$$

相应的方程有解 $x_1 = 1$ 和 $x_2 = 3$。

## 例 2

考虑一个最高次项系数不等于一的多项式：

$$2x^{2} - 7x + 3$$

判别式为 $\Delta = 49 - 24 = 25$，因此根为实数且互异。应用求根公式可得：

$$x = \frac{7 \pm 5}{4}$$

得到 $x_1 = 3$ 与 $x_2 = \frac{1}{2}$。将这些值代入恒等式 $(1)$，其中 $a = 2$：

$$2x^{2} - 7x + 3 = 2(x - 3)\left(x - \tfrac{1}{2}\right) = (x - 3)(2x - 1)$$

> 因子 $2$ 已被并入第二个线性因式，从而得到具有整系数的因式分解。

## 例 3

考虑一个判别式为零的多项式，因而两根重合：

$$x^{2} - 6x + 9$$

[判别式](../quadratic-formula/)为 $\Delta = 36 - 36 = 0$，唯一根为 $x_0 = 3$。其因式分解为：

$$x^{2} - 6x + 9 = (x - 3)^{2}$$

这与恒等式 $(1)$ 一致，其中 $x_1 = x_2 = x_0$。

## 例 4

考虑一个判别式为负的多项式，因而该多项式在 $\mathbb{R}$ 上不可约：

$$x^{2} + 2x + 5$$

判别式为 $\Delta = 4 - 20 = -16$，根为一对共轭复数 $x_{1,2} = -1 \pm 2i$。因式分解仅在 $\mathbb{C}$ 上成立：

$$x^{2} + 2x + 5 = (x + 1 - 2i)(x + 1 + 2i)$$

关于此情形的完整讨论，参见[复数解的二次方程](../quadratic-equations-with-complex-solutions/)词条。
