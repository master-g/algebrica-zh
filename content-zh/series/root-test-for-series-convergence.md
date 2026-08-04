---
title: 级数收敛的根值判别法
title_en: Root Test for Series Convergence
source: https://algebrica.org/root-test-for-series-convergence/
license: CC BY-NC 4.0
tags:
  - absolute-convergence
  - convergence
  - root-test
  - series
translation:
  status: current
  source_hash: 256ac74c4826d71c1607e777e6299da09c23946391e38de4cacbd53ec07921b2
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 什么是根值判别法

根值判别法用于判断无穷[级数](../series/)收敛还是发散。当级数的每一项都包含 $n$ 次[幂](../powers/)，例如[指数函数](../exponential-function/)或[根式](../radicals/)，它尤其有用。设有一个正项级数：

$$
\sum_{n=1}^{+\infty} a_n
$$

假设下面的上极限存在且有限：

$$
\limsup_{n \to \infty} \sqrt[n]{|a_n|} = L
$$

我们使用 $\limsup$，因为对于有下界的实数数列，它总是有定义的。即使通常的[极限](../limits/) $\lim_{n \to \infty} \sqrt[n]{|a_n|}$ 不存在，取[上极限](../superior-and-inferior-limits-of-a-sequence/)仍然可以检测数列的长期行为，从而判断级数收敛还是发散。

如果极限 $L$ 存在，可能出现以下三种情况：

+ 如果 $L < 1$，级数绝对收敛。
+ 如果 $L > 1$ 或 $L = \infty$，级数发散。
+ 如果 $L = 1$，判别法无法给出结论。

> 我们使用[绝对值](../absolute-value/) $|a_n|$，是为了用根值判别法判断级数的绝对收敛性。这样，即使各项 $a_n$ 为负或符号交替，判别法仍然适用，我们只需关注各项的大小。

## 如何识别何时使用根值判别法

当级数的通项写成 $a_n = (b_n)^n$ 的形式，也就是整个通项都取 $n$ 次幂时，根值判别法尤其有用。在这种情况下，对 $a_n$ 开 $n$ 次根会显著简化表达式，并且通常可以直接得到一个容易处理的极限。

相比之下，在这种情形中其他判别法可能变得更加复杂，尤其是比值 $\frac{a_{n+1}}{a_n}$ 不容易化简，或者阶乘与[指数](../exponential-function/)项使极限难以计算时。

根值判别法在以下情形中特别有效：

+ 当 $a_n = (f(n))^n$ 且 $f(n) > 0$ 时；
+ 当各项包含类似指数的增长或衰减时；
+ 当 $\sqrt[n]{|a_n|}$ 比 $\frac{a_{n+1}}{a_n}$ 更容易计算时。

在其他情形下，如果通项没有取 $n$ 次幂，可能更适合使用其他判别法。

## 证明

考虑绝对收敛且 $L < 1$ 的情形。存在一个[实数](../types-of-numbers/) $r$，使得：

$$
L < r < 1
$$

根据 $\limsup$ 的定义，存在一个[整数](../integers/) $N$，使得对所有 $n \geq N$，都有：

$$
\sqrt[n]{|a_n|} < r
\quad \rightarrow \quad |a_n| < r^n
$$

因此，级数的尾部满足：

$$
\sum_{n=N}^{\infty} |a_n| < \sum_{n=N}^{\infty} r^n
$$

由于 $0 < r < 1$，[等比级数](../geometric-series/) $\sum r^n$ 收敛。因此，根据[比较判别法](../series-with-positive-terms/)，尾部 $\sum_{n=N}^{\infty} |a_n|$ 收敛，整个级数 $\sum |a_n|$ 也收敛。

- - -

再考虑级数发散且 $L > 1$ 的情形。根据 $\limsup$ 的定义，存在无穷多个下标 $n$，使得：

$$
\sqrt[n]{|a_n|} > r
\quad r > 1
$$

于是，$|a_n| > r^n$ 这个不等式无穷多次成立。但由于 $r^n \to \infty$，可知 $|a_n| \nrightarrow 0$。

级数 $\sum a_n$ 收敛的必要条件不成立，因此级数发散。

- - -

最后一种情形是 $L = 1$，此时无法得到任何结论。对任意 $\varepsilon > 0$，都可以找到无穷多个 $n$，使得：

$$
\sqrt[n]{|a_n|} > 1 - \varepsilon
\quad \land \quad
\sqrt[n]{|a_n|} < 1 + \varepsilon
$$

这个范围既包含收敛行为，也包含发散行为。例如，[调和级数](../harmonic-series/) $a_n = \frac{1}{n}$ 满足 $\sqrt[n]{|a_n|} \to 1$，但它发散。[p-级数](../harmonic-series/) $a_n = \frac{1}{n^2}$ 也满足 $\sqrt[n]{|a_n|} \to 1$，但它收敛。因此，当 $L = 1$ 时，根值判别法无法给出结论。

## 示例

考虑级数：

$$
\sum_{n=1}^{\infty} \left( \frac{3n}{5n + 2} \right)^n
$$

我们判断这个级数收敛还是发散。每一项都具有 $a_n = (u_n)^n$ 的形式，因此适合使用根值判别法，而且比其他方法更简单。

- - -

定义[数列](../sequences/)：

$$
a_n = \left( \frac{3n}{5n + 2} \right)^n
$$

为了应用根值判别法，我们计算 $a_n$ 的 $n$ 次根的上极限：

$$
\limsup_{n \to \infty} \sqrt[n]{a_n} = \lim_{n \to \infty} \left( \frac{3n}{5n + 2} \right)
$$

由于各项为正，可以省略绝对值并化简：

$$
\frac{3n}{5n + 2} = \frac{3}{5 + \frac{2}{n}} \longrightarrow \frac{3}{5}
$$

因此得到：

$$
\limsup_{n \to \infty} \sqrt[n]{a_n} = \frac{3}{5} < 1
$$

由于极限小于 $1$，根值判别法告诉我们该级数绝对收敛。

- - -

含有取 $n$ 次幂的三角因子会导致同类计算。考虑级数：

$$
\sum_{n=1}^{\infty} \left( \frac{n}{3} \tan \frac{1}{n} \right)^n
$$

对于每个 $n \geq 1$，各项都为正，并且整个表达式取了 $n$ 次幂，因此根值判别法是自然的选择。开 $n$ 次根会消去外层的幂：

$$
\sqrt[n]{a_n} = \frac{n}{3} \tan \frac{1}{n}
$$

当 $n \to \infty$ 时，参数 $\frac{1}{n}$ 趋于零，此时 $\tan \frac{1}{n} \sim \frac{1}{n}$，这是一个[重要极限](../remarkable-limits/)。因此，根值的极限为：

$$
\lim_{n \to \infty} \frac{n}{3} \tan \frac{1}{n} = \lim_{n \to \infty} \frac{n}{3} \cdot \frac{1}{n} = \frac{1}{3}
$$

由于极限等于 $\frac{1}{3} < 1$，级数收敛。
