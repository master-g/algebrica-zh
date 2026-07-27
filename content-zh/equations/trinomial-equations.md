---
title: 三项式方程
title_en: Trinomial Equations
source: https://algebrica.org/trinomial-equations/
license: CC BY-NC 4.0
tags:
  - equations
  - quadratic-formula
  - trinomial-equations
translation:
  status: current
  source_hash: 276fa3844fcc5403af0d1e27bcbcae320f7cd4e9203d123168b75c7ad2591ab8
  translator: omp
  updated: "2026-07-26T06:12:29.696Z"
---
## 定义

三项式方程是一类特殊的[多项式方程](../polynomial-equations/)，由常数与某一变量的[幂](../powers/)三项构成。其一般形式如下：

$$ax^{2n} + bx^{n} + c = 0$$

这一形式便于采用换元策略：令 $x^n = y$，即可把方程化为标准二次方程。

其中 $a$、$b$、$c$ 为实数系数，$a \neq 0$，$x$ 是未知数，$n$ 为正整数。当 $n = 1$ 时，方程化为普通的[二次方程](../quadratic-equations/)：

$$ax^2 + bx + c = 0$$

当 $n = 2$ 时，方程呈 $ax^4 + bx^2 + c = 0$ 之形，称为双二次方程。这是最常见的三项式方程，通过换元 $x^2 = y$ 可降元为关于 $y$ 的二次方程。

## 如何求解三项式方程

形如 $ax^{2n} + bx^n + c = 0$ 的三项式方程，可通过换元降元为二次方程。令：

$$x^n = y$$

方程变为：

$$ay^2 + by + c = 0$$

这个关于 $y$ 的二次方程可借[因式分解](../factoring-quadratic-equations/)、[配方法](../completing-the-square/)或[求根公式](../quadratic-formula/)求解。求出 $y$ 的值后，通过 $y = x^n$ 回代，即可得到 $x$ 对应的值。具体步骤可归纳如下：

+ 令 $y = x^n$，使方程化为 $ay^2 + by + c = 0$。
+ 解关于 $y$ 的二次方程，得到关联二次方程的 $y$ 根。
+ 对每个 $y$ 根 $y_i$，通过解 $x^n = y_i$ 求出对应的 $x$ 值。
+ 将所得的每个 $x$ 值代入原方程核验。

注意：在实数域中，关联二次方程的某些 $y$ 根可能没有对应的实数 $x$ 值——这并非增根，降元过程本身是等价的。仍应将最终所得的 $x$ 值代入原方程核验，以确认其确实成立并满足所涉及的数域或其他隐含条件。

## 实数解的数量

关于 $y$ 的二次方程最多产生两个根 $y_1$ 和 $y_2$，但从每个 $y_i$ 还原得到的 $x$ 的实数值个数，取决于 $n$ 的奇偶性以及 $y_i$ 的符号。最后一步 $x^n = y_i$ 是一个[二项方程](../binomial-equations/)，其实数解遵循相同的规则。

当 $n$ 为偶数时，方程 $x^n = y_i$ 贡献：

+ 当 $y_i > 0$ 时，有两个实数解 $x = \pm\sqrt[n]{y_i}$
+ 当 $y_i = 0$ 时，有一个实数解 $x = 0$
+ 当 $y_i < 0$ 时，无实数解

当 $n$ 为奇数时，方程 $x^n = y_i$ 恒贡献恰好一个实数解 $x = \sqrt[n]{y_i}$，因为奇数次根对每个实数（无论正负）都有定义。

> 因此，一个双二次方程可以有四个、三个、两个、一个或没有实数解，这取决于关联的二次方程的根 $y_i$ 的个数与符号。

## 示例 1

考虑双二次方程 $3x^4 - 7x^2 + 2 = 0$。令 $y = x^2$ 进行降元，可将其转化为一个二次方程：

$$3y^2 - 7y + 2 = 0$$

应用[求根公式](../quadratic-formula/)得到 $y$ 的值：

$$
\begin{align}
y &= \frac{-(-7) \pm \sqrt{(-7)^2 - 4 \cdot 3 \cdot 2}}{2 \cdot 3} \\[6pt]
  &= \frac{7 \pm \sqrt{49 - 24}}{6} \\[6pt]
  &= \frac{7 \pm \sqrt{25}}{6} \\[6pt]
  &= \frac{7 \pm 5}{6}
\end{align}
$$

两个值为：

$$y_1 = \frac{12}{6} = 2, \qquad y_2 = \frac{2}{6} = \frac{1}{3}$$

- - -

将 $y$ 的每个值通过 $x^2 = y$ 回代，以求得对应的 $x$ 的值。对于 $y = 2$：

$$x^2 = 2 \quad \rightarrow \quad x = \pm\sqrt{2}$$

对于 $y = \frac{1}{3}$：

$$x^2 = \frac{1}{3} \quad \rightarrow \quad x = \pm\sqrt{\frac{1}{3}}$$

- - -

将候选解代回原方程 $3x^4 - 7x^2 + 2 = 0$ 进行验证。对于 $x = \pm\sqrt{2}$：

$$3(\sqrt{2})^4 - 7(\sqrt{2})^2 + 2 = 3 \cdot 4 - 7 \cdot 2 + 2 = 12 - 14 + 2 = 0$$

对于 $x = \pm\sqrt{\frac{1}{3}}$：

$$3\left(\sqrt{\frac{1}{3}}\right)^4 - 7\left(\sqrt{\frac{1}{3}}\right)^2 + 2 = 3 \cdot \frac{1}{9} - 7 \cdot \frac{1}{3} + 2 = \frac{1}{3} - \frac{7}{3} + 2 = 0$$

这四个值都满足原方程。因此解集为：

$$x = \pm\sqrt{2} \quad \text{且} \quad x = \pm\sqrt{\frac{1}{3}}$$

## 示例 2

考虑双二次方程 $x^4 - 3x^2 - 4 = 0$。作代换 $y = x^2$ 可将其降元为二次方程，因式分解为：

$$y^2 - 3y - 4 = 0 \quad \rightarrow \quad (y - 4)(y + 1) = 0$$

由此得到两个 $y$ 值：

$$y_1 = 4, \qquad y_2 = -1$$

- - -

对每个 $y$ 值，通过 $x^2 = y$ 回代求 $x$。由于根指数为偶数，只有当 $y$ 取非负值时才能得到实数解。对于 $y = 4$：

$$x^2 = 4 \quad \rightarrow \quad x = \pm 2$$

$y = -1$ 不产生实数解，因为方程 $x^2 = -1$ 在[实数](../types-of-numbers/)范围内无解。因此原方程有两个实数解：

$$x = -2 \quad x = 2$$

## 示例 3

考虑方程 $x^6 + 7x^3 - 8 = 0$，其首项指数为 $6$，代换涉及奇数次幂。令 $y = x^3$ 可将其降元为二次方程，因式分解为：

$$y^2 + 7y - 8 = 0 \quad \rightarrow \quad (y - 1)(y + 8) = 0$$

由此得到两个 $y$ 值：

$$y_1 = 1, \qquad y_2 = -8$$

- - -

对每个 $y$ 值，通过 $x^3 = y$ 回代求 $x$。由于根指数为奇数，$y$ 的每个实数值都恰好给出一个实数解，负值也不例外。对于 $y = 1$：

$$x^3 = 1 \quad \rightarrow \quad x = 1$$

对于 $y = -8$：

$$x^3 = -8 \quad \rightarrow \quad x = -2$$

两个值都是实数，因此方程有两个解：

$$x = -2 \quad x = 1$$

> 更高偶数次的三项式方程（如上例）表明，代换法可推广到任何形如 $2n$ 的指数，$n$ 的奇偶性决定如何将每个根 $y_i$ 回代为 $x$ 的值。
