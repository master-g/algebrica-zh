---
title: 正项级数
title_en: Series With Positive Terms
source: https://algebrica.org/series-with-positive-terms/
license: CC BY-NC 4.0
tags:
  - comparison-test
  - convergence
  - positive-term-series
  - series
translation:
  status: current
  source_hash: a691f715d9f5ed22e74ba205214e59564eca520d21f4608215e4e84f16fb743f
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 定义

正项级数是指其中每一项 $a_k$ 对所有 $k \in \mathbb{N}$ 都满足 $a_k > 0$ 的级数。因此，其部分和数列：

$$
S_n = \sum_{k=1}^{n} a_k
$$

严格递增，因为每加入一项，都会贡献一个正数。这保证了该[级数](../series/)不会振荡或递减。这样的级数只有两种可能的行为：如果部分和有上界，级数就收敛于有限值；否则就发散到无穷大。它不可能是不定的，也不可能条件收敛。更形式化地说，对于形如

$$
\sum_{k=1}^{\infty} a_k \quad a_k > 0
$$

的级数，当且仅当部分和数列 $(S_n)$ 有界时，级数收敛。正是这一性质使正项级数适合使用比较判别法、[积分判别法](../integral-test-for-series-convergence/)和[比值判别法](../ratio-test-for-series-convergence/)等收敛判别法；这些方法都要求各项非负。

- - -

[调和级数](../harmonic-series/)是一个发散的正项级数：

$$
\sum_{k=1}^{\infty} \frac{1}{k}
$$

尽管各项 $\frac{1}{k}$ 趋于零，部分和数列仍无限增长。

一般地，如果数列 $\{a_n\}$ 的各项对每个 $n \in \mathbb{N}$ 都具有相同的符号，即要么全部为正，要么全部为负，我们称其为定号级数。

## 比较判别法

为了判断一个级数收敛还是发散，我们将它与另一个行为已知的级数进行比较。对于正项级数，当直接判断收敛性较为困难时，这种方法尤其有用。

设 $\sum a_k$ 和 $\sum b_k$ 是两个正项级数。假设存在一个[整数](../integers/) $N \in \mathbb{N}$，使得：

$$
0 \leq a_k \leq b_k \quad k \geq N
$$

每一项 $a_k$ 都非负，且小于或等于对应的 $b_k$（这一条件对于正确应用比较判别法至关重要）。那么：

+ 如果 $\sum b_k$ 收敛，则 $\sum a_k$ 也收敛。
+ 如果 $\sum a_k$ 发散，则 $\sum b_k$ 也发散。

- - -

考虑两个级数的部分和：

$$
S_n = \sum_{k=1}^{n} a_k, \quad T_n = \sum_{k=1}^{n} b_k
$$

由于数列 $a_k$ 和 $b_k$ 都由非负项组成，$S_n$ 和 $T_n$ 都是非减的。因为对所有 $k \geq N$ 都有 $a_k \leq b_k$，所以：

$$
S_n \leq T_n \quad n \geq N
$$

如果级数 $\sum b_k$ 收敛，那么 $T_n$ 有限极限并且有上界。由于 $S_n \leq T_n$，部分和数列 $S_n$ 也有上界。非减且有界的[数列收敛](../monotone-sequences/)，因此 $\sum a_k$ 也收敛。

如果 $\sum a_k$ 发散，那么 $S_n \to \infty$。但由于 $S_n \leq T_n$，这个不等式要成立，唯一可能就是 $T_n$ 也无限增长。因此，$\sum b_k$ 也发散。

## 示例

利用比较判别法，我们来判断下面级数的性质：

$$
\sum_{n=1}^{\infty} \frac{1}{n^2 + 2n + 1}
$$

分母是多项式，且所有项都为正，因此这是一个正项级数，可以应用比较判别法。

> 必须验证这一点，因为比较判别法只适用于所有项均为正的级数。

- - -

首先，检查收敛的必要条件是否满足：

$$
\lim_{n \to +\infty} \frac{1}{n^2 + 2n + 1} = 0
$$

这个[极限](../limits/)的形式是 $\frac{1}{\infty}$，因此等于零，收敛的必要条件得到满足。根据比较判别法：

$$
\frac{1}{n^2 + 2n + 1} < \frac{1}{n^2}
$$

因为第一个表达式的分母大于第二个表达式的分母。令：

$$
a_n = \frac{1}{n^2 + 2n + 1}, \qquad b_n = \frac{1}{n^2}
$$

则有：

$$
a_n < b_n
$$

下面的级数是一个[广义调和级数](../harmonic-series/)，已知当分母中的指数满足 $p > 1$ 时收敛：

$$
\sum_{n=1}^{\infty} b_n = \sum_{n=1}^{\infty} \frac{1}{n^2}
$$

因此，根据比较判别法，由于级数 $\sum b_n$ 收敛，级数 $\sum a_n$ 也收敛。

> 使用比较判别法判断正项级数的性质通常很直接，但选择恰当的比较级数并证明不等式需要练习。

## 推广到定号级数

为正项级数构造的收敛判别法——上面的比较判别法，以及[渐近比较判别法](../asymptotic-comparison-test/)、[比值判别法](../ratio-test-for-series-convergence/)和[根值判别法](../root-test-for-series-convergence/)——只要求从某个下标开始各项非负。由于改变有限个项不会改变级数的性质，这些判别法同样适用于最终非负的级数，即对所有 $n \geq N$ 都有 $a_n \geq 0$。

非正项级数可以通过提出负号化为这一情形：

$$
\sum_{n=0}^{\infty} a_n = -\sum_{n=0}^{\infty} (-a_n)
$$

级数 $\sum (-a_n)$ 的各项非负，因此判别法可以确定其性质；而整体因子 $-1$ 不会改变收敛或发散。只有最终非正的级数也可以用同样的方法处理。
