---
title: 二项方程
title_en: Binomial Equations
source: https://algebrica.org/binomial-equations/
license: CC BY-NC 4.0
tags:
  - binomial-equations
  - equations
  - radicals
translation:
  status: current
  source_hash: d5560eba05752742612954006476faa180fa6debd81d8c19a29663076b967c89
  translator: omp
  updated: "2026-07-26T06:06:54.101Z"
---
## 什么是二项方程

二项方程是一类特殊的代数[方程](../equations/)，仅含两项。其一般形式如下：

$$ax^n + b = 0$$

其中 $a$ 为非零常数，$b$ 为常数，$x$ 是未知数，$n$ 为正[整数](../integers/)。

求解二项方程的方法取决于 $n$ 的取值。当 $n$ 为奇数时，方程有唯一的实数解。当 $n$ 为偶数时，实数解是否存在取决于被开方数的符号：当求解需要对负数开偶次方根时，方程没有实数解；当被开方数为零时，方程仅有一个实数解。在更深入的讨论中，解也可能是复数，这一情形在[复数的方根](../complex-numbers-roots/)的研究中加以讨论。

## 一次或二次方程

当 $n = 1$ 时，方程化为形如 $ax + b = 0$ 的[一次方程](../linear-equations/)，通过移项求解：

$$ax + b = 0 \quad \rightarrow \quad x = -\frac{b}{a}$$

当 $n = 2$ 时，方程化为形如 $ax^2 + b = 0$ 的[二次方程](../quadratic-equations/)。可用[求根公式](../quadratic-formula/)求解，或更直接地对 $-\frac{b}{a}$ 开平方根：

$$x = \pm\sqrt{-\frac{b}{a}}$$

> 该表达式仅当 $-\frac{b}{a} \geq 0$ 时给出实数解。否则方程有[复数解](../quadratic-equations-with-complex-solutions/)。

## 次数大于二的方程

当 $n$ 大于 $2$ 时，可通过提取 $-\frac{b}{a}$ 的 $n$ 次根来求解该方程，并按 $n$ 为偶数或奇数分两种情形讨论。

当 $n$ 为偶数且 $-\frac{b}{a}$ 为正数时，方程有两个不同的实数解；当 $-\frac{b}{a}$ 等于 $0$ 时，退化为唯一的实数解：

$$x = \pm\sqrt[n]{-\frac{b}{a}}$$

当 $n$ 为偶数且 $-\frac{b}{a}$ 为负数时，方程在[实数](../types-of-numbers/)域中无解。

- - -

当 $n$ 为奇数时，方程总有唯一的实数解：

$$x = \sqrt[n]{-\frac{b}{a}}$$

负数的 $n$ 次[根](../radicals/)仅当根指数为奇数时才在实数中存在。其提取方法与正数情形相同，负数的奇次根结果仍为负数。当根指数为偶数时，不存在实数结果。

## 例 1

考虑二项方程 $x^3 - 27 = 0$。将幂分离并提取立方根，得：

$$
\begin{align}
x^3 &= 27 \\[6pt]
x &= \sqrt[3]{27} \\[6pt]
  &= 3
\end{align}
$$

此处 $n$ 为奇数且根号下的数为正数，故方程有唯一的实数解：

$$x = 3$$

## 例 2

考虑二项方程 $x^3 + 8 = 0$。将幂分离并提取立方根，得：

$$
\begin{align}
x^3 &= -8 \\[6pt]
x &= \sqrt[3]{-8} \\[6pt]
  &= -2
\end{align}
$$

此处 $n$ 为奇数且根号下的数为负数，故方程有唯一的实数解：

$$x = -2$$

## 例 3

考虑二项方程 $x^4 - 16 = 0$。将幂分离并提取四次根，得：

$$
\begin{align}
x^4 &= 16 \\[6pt]
x &= \pm\sqrt[4]{16} \\[6pt]
  &= \pm 2
\end{align}
$$

此处 $n$ 为偶数且根号下的数为正数，故方程有两个不同的实数解，且关于原点对称：

$$x = -2 \quad x = 2$$

## 例 4

考虑二项方程 $x^4 + 5 = 0$。将幂分离，得：

$$
\begin{align}
x^4 &= -5 \\[6pt]
x &= \sqrt[4]{-5}
\end{align}
$$

此处 $n$ 为偶数且根号下的数为负数，故方程无实数解。因此实数解集为空集：

$$S = \varnothing$$

这些例子说明了最直接的情形。在实际问题中，更复杂的[多项式方程](../polynomial-equations/)有时可化为二项方程，再用此处所示的直接方法求解。
