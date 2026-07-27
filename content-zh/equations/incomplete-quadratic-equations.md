---
title: 不完全二次方程
title_en: Incomplete Quadratic Equations
source: https://algebrica.org/incomplete-quadratic-equations/
license: CC BY-NC 4.0
tags:
  - incomplete-quadratic-equations
  - quadratic-equation
  - zero-product-property
translation:
  status: current
  source_hash: deac82baf5281ad951e77280001bc063af2f38005f9b5f7c52a9853150286017
  translator: omp
  updated: "2026-07-26T04:11:06.045Z"
---
## 定义

当 [二次方程](../quadratic-equations/) 的标准形式 $ax^2 + bx + c = 0$ 中缺少 $bx$ 与 $c$ 这两项中的一项或两项，而 $ax^2$ 这一项仍存在时，该方程就是不完全的。这类方程存在直接求解的方法，无需使用[求根公式](../quadratic-formula/)或[因式分解](../factoring-quadratic-equations/)。

当 $b$ 与 $c$ 都等于零时，方程化为：

$$ax^2 = 0, \quad a \neq 0$$

两边同除以 $a$（按假设它不为零），得到 $x^2 = 0$，对于 $a$ 的每个可取值，唯一的实数解都是 $x = 0$。

![图 1](/assets/equations/svg/incomplete-quadratic-equations.zh.svg)

> 从几何上看，该方程表示一条顶点在原点 $(0, 0)$、关于 $y$ 轴对称的[抛物线](../parabola/)。其图像在 $a > 0$ 时开口向上，在 $a < 0$ 时开口向下，$|a|$ 的大小决定开口的宽窄。虽然方程只有一个解，但函数在 $x = 0$ 处有一个二重根：$x$ 轴在原点处与抛物线相切。

## b = 0 的情形

当 $b = 0$ 时，方程取如下形式：

$$ax^2 + c = 0, \quad a \neq 0, \ c \neq 0$$

分离出 $x^2$ 后得到：

$$x^2 = -\frac{c}{a}$$

该方程表示一条关于 $y$ 轴对称的抛物线。当 $a$ 与 $c$ 异号时，$-\frac{c}{a}$ 为正，方程有两个不同的实数解：

$$x_{1,2} = \pm\sqrt{-\frac{c}{a}}$$

此时抛物线与 $x$ 轴交于关于原点对称的两点。当 $a$ 与 $c$ 同号时，$-\frac{c}{a}$ 为负，方程没有实数解：

$$-\frac{c}{a} < 0 \implies x \notin \mathbb{R}$$

此时抛物线完全位于 $x$ 轴的上方或下方，与之不相交。

## c = 0 的情形

当 $c = 0$ 时，方程取如下形式：

$$ax^2 + bx = 0, \quad a \neq 0, \ b \neq 0$$

提取 $x$ 得 $x(ax + b) = 0$。由零积性质，要么 $x = 0$，要么 $ax + b = 0$，因此方程有两个不同的实数解：

$$x_1 = 0 \qquad x_2 = -\frac{b}{a}$$

## 示例

考虑方程 $3x^2 = 0$。由于 $b$ 与 $c$ 均为零，唯一解为 $x = 0$。

- - -

考虑方程 $2x^2 - 8 = 0$。它具有 $ax^2 + c = 0$ 的形式，其中 $a = 2$ 与 $c = -8$。由于 $a$ 与 $c$ 异号，存在两个实数解。分离 $x^2$ 得：

$$x^2 = \frac{8}{2} = 4$$

对两边取平方根，得到两个解：

$$x_{1,2} = \pm\sqrt{4} = \pm 2$$

- - -

考虑方程 $x^2 + 5 = 0$。此处 $a = 1$ 与 $c = 5$ 同号，故 $-\frac{c}{a} = -5 < 0$。方程[没有实数解](../quadratic-equations-with-complex-solutions/)。

- - -

考虑方程 $3x^2 - 6x = 0$。它具有 $ax^2 + bx = 0$ 的形式，其中 $a = 3$ 与 $b = -6$。提取 $x$ 得 $x(3x - 6) = 0$，两个解为：

$$x_1 = 0 \qquad x_2 = \frac{6}{3} = 2$$

## 一个需要避免的常见错误

对于形如 $ax^2 + bx = 0$ 的方程，一个常见错误是在方程写成如下形式时两边同时除以 $x$：

$$ax^2 = -bx$$

这里除以 $x$ 是不成立的，因为 $x = 0$ 本身就是一个解，而除以零是未定义的。这种操作会[消去根 $x = 0$](../loss-of-roots/)，并将方程降为一次方程，从而只得到解 $x = -\frac{b}{a}$。正确的做法是将 $x$ 作为公因式提取出来，如上所示。
