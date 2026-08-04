---
title: 级数收敛的比值判别法
title_en: Ratio Test for Series Convergence
source: https://algebrica.org/ratio-test-for-series-convergence/
license: CC BY-NC 4.0
tags:
  - convergence
  - divergence
  - ratio-test
  - series
translation:
  status: current
  source_hash: 741f6ae7e910edad783848a550d8d63f798b840d10035dbea5d565a2a5a90e91
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 什么是比值判别法

比值判别法通过考察相邻项之比的极限，判断含正项的无穷[级数](../series/)收敛还是发散。当通项含有[阶乘](../factorial/)或指数时，它是自然的选择，因为比值 $\frac{a_{n+1}}{a_n}$ 往往比[根值判别法](../root-test-for-series-convergence/)中使用的 $n$ 次根更容易化简。设有一个正项级数：

$$
\sum_{n=0}^{\infty} a_n, \qquad a_n > 0
$$

假设相邻项之比的[极限](../limits/)存在：

$$
\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = l
$$

可能出现以下三种情况：

+ 如果 $l < 1$，级数收敛。
+ 如果 $l > 1$，级数发散。
+ 如果 $l = 1$，判别法无法给出结论。

> 对于各项为负或更一般的恒号级数，同样的结论仍然成立，因为此时相邻项之比等于它们绝对值之比。

## 证明

先考虑 $l < 1$ 的情形。选取一个[实数](../types-of-numbers/) $r$，使得 $l < r < 1$。根据极限的定义，存在一个[整数](../integers/) $N$，使得对所有 $n \geq N$，都有：

$$
\frac{a_{n+1}}{a_n} < r
$$

从下标 $N$ 开始反复应用这个不等式，得到：

$$
a_{N+k} < r^k a_N \qquad k \geq 0
$$

因此，级数的尾部由公比为 $r$ 的[等比级数](../geometric-series/)从上方控制：

$$
\sum_{k=0}^{\infty} a_{N+k} < a_N \sum_{k=0}^{\infty} r^k
$$

由于 $0 < r < 1$，右侧的等比级数收敛。根据[比较判别法](../series-with-positive-terms/)，尾部收敛，整个级数也收敛。

- - -

现在考虑 $l > 1$ 的情形。选取一个实数 $r$，使得 $1 < r < l$。根据极限的定义，存在一个整数 $N$，使得对所有 $n \geq N$，都有：

$$
\frac{a_{n+1}}{a_n} > r
$$

于是从下标 $N$ 开始各项递增，因此 $a_n > r^{n-N} a_N$。右侧不断增大，所以 $a_n \nrightarrow 0$。收敛的必要条件不成立，级数发散。

> 当 $l > 1$ 时，通项不会趋于零，而是会无界增长。发散的原因是某一项没有趋于零，而不是趋于零的各项缓慢累积。

边界值 $l = 1$ 不提供任何信息。[调和级数](../harmonic-series/) $a_n = \frac{1}{n}$ 的比值为 $\frac{n}{n+1} \to 1$，但它发散；[p-级数](../harmonic-series/) $a_n = \frac{1}{n^2}$ 的比值为 $\left(\frac{n}{n+1}\right)^2 \to 1$，但它收敛。

## 示例

使用比值判别法，判断下面级数的性质：

$$
\sum_{n=1}^{\infty} \frac{n!2^n}{n^n}
$$

对于每个 $n \geq 1$，各项都为正。由于同时出现阶乘以及 $2^n$ 和 $n^n$，研究相邻项之比是方便的做法。计算这个比值：

$$
\begin{align}
\frac{a_{n+1}}{a_n} &= \frac{(n+1)!2^{n+1}}{(n+1)^{n+1}} \cdot \frac{n^n}{n!2^n} \\[6pt]
&= \frac{(n+1)2n^n}{(n+1)^{n+1}} \\[6pt]
&= 2\left(\frac{n}{n+1}\right)^n
\end{align}
$$

剩下的极限是一个标准的[指数极限](../euler-number-limit-sequence/)，我们用指数函数将其改写为：

$$
\lim_{n \to \infty} \left(\frac{n}{n+1}\right)^n = \lim_{n \to \infty} e^{n\log\left(\frac{n}{n+1}\right)}
$$

指数趋于有限值，因为：

$$
\lim_{n \to \infty} n\log\left(1 - \frac{1}{n+1}\right) = \lim_{n \to \infty} n\left(-\frac{1}{n+1}\right) = -1
$$

代回后，相邻项之比的极限为：

$$
\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = 2e^{-1} = \frac{2}{e} < 1
$$

由于极限小于 $1$，根据比值判别法，级数收敛。
