---
title: 作为数列极限的欧拉数
title_en: Euler's Number as the Limit of a Sequence
source: https://algebrica.org/euler-number-limit-sequence/
license: CC BY-NC 4.0
tags:
  - binomial-theorem
  - eulers-number
  - geometric-series
  - limit-of-a-sequence
  - monotone-convergence-theorem
  - sequence
translation:
  status: current
  source_hash: 2ca5ebdac6d1f2e76513b0d41fb3e00ef5ad66fcabc5ec25d27b04aa52ada5f9
  translator: omp
  updated: "2026-08-01T15:33:06.099Z"
---
## 数列如何揭示 $e$

欧拉数记作 $e$，是数学中最重要的常数之一。引入它有几种等价的方式：通过无穷[级数](../series/)、通过自然[指数函数](../exponential-functions/)，或通过[数列](../sequences/)的极限。本页聚焦于最后一种方式。

我们考虑数列 $\{a_n\}$，其中 $n \in \mathbb{N}$ 由以下表达式定义：

$$
a_n = \left(1 + \frac{1}{n}\right)^n
$$

如下文各节所示，此数列严格递增且有上界。根据单调收敛定理，它因此收敛于一个有限极限。该[极限](../limits/)被取作欧拉数的定义，我们写作：

$$
e := \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n
$$

符号 $:=$ 表示这是一个定义：数 $e$ 被引入作为该数列收敛到的值。其小数展开开头为 $e \approx 2.71828$，且可以证明 $e$ 既是无理数又是超越数。

无理性意味着 $e$ 不能表示为两个[整数](../integers/)之比，因此 $e$ 属于[无理数](../irrational-numbers/)集合。超越性是一个更强的性质：它意味着 $e$ 不是任何系数为有理数的非零[多项式方程](../polynomial-equations/)的根。

下图说明数列各项随 $n$ 增大时的行为。当 $n$ 较小时数值增长迅速，随后增速放缓，从下方趋近 $e$ 但始终无法达到。

![图 1](/assets/sequences/svg/euler-number-limit-sequence-1.zh.svg)

> 每一项 $a_n$ 都严格小于 $e$，且差距随 $n$ 增大而缩小，但收敛速度足够慢，以至于即使 $n$ 取很大的值也仅给出极限的粗略近似。

以下数值表说明数列随下标增大时的行为。

$$
\begin{align}
n = 1:& \quad a_1 = \left(1 + \frac{1}{1}\right)^1 = 2 \\[6pt]
n = 10:& \quad a_{10} = \left(1 + \frac{1}{10}\right)^{10} \approx 2.59374 \\[6pt]
n = 100:& \quad a_{100} = \left(1 + \frac{1}{100}\right)^{100} \approx 2.70481 \\[6pt]
n = 1000:& \quad a_{1000} = \left(1 + \frac{1}{1000}\right)^{1000} \approx 2.71692
\end{align}
$$

各项稳步增大并从下方趋近 $e \approx 2.71828$，每一个后续值都捕获了极限的更多小数位。收敛是单调的但速度缓慢：即使在 $n = 1000$ 处，近似值与 $e$ 也仅在小数点后第二位上吻合。

## 证明数列的单调性

为证明数列 $\{a_n\}$ 是严格递增的，我们用[二项式定理](../binomial-theorem/)展开其中的每一项。将该定理应用于表达式 $\left(1 + \frac{1}{n}\right)^n$，得到如下展开：

$$
a_n = \sum_{k=0}^{n} \binom{n}{k} \frac{1}{n^k}
= \sum_{k=0}^{n} \frac{1}{k!} \cdot \frac{n(n-1)\cdots(n-k+1)}{n^k}
$$

形如下式的每一个因子：

$$\frac{n(n-1)\cdots(n-k+1)}{n^k}$$

都可以写成 $k$ 个形如 $\left(1 - \frac{j}{n}\right)$ 的因子之积，其中 $j = 0, 1, \ldots, k-1$。于是展开式变为：

$$
a_n = \sum_{k=0}^{n} \frac{1}{k!} \prod_{j=0}^{k-1} \left(1 - \frac{j}{n}\right)
$$

现在考虑 $a_{n+1}$ 的对应表达式，它是把 $n$ 处处替换为 $n+1$ 得到的。此时有两点变化：求和的上界增大一，新增了一个正项；原有的每个因子 $\left(1 - \frac{j}{n}\right)$ 都被 $\left(1 - \frac{j}{n+1}\right)$ 替代，后者严格更大，因为被减去的量变小了。

因此 $a_{n+1}$ 的和中的每一项都严格大于 $a_n$ 的和中对应的项，并且和本身还多出一个正项。由此可得，对一切 $n \in \mathbb{N}$ 都有 $a_{n+1} > a_n$，故该数列是严格递增的。

## 证明数列的有界性

余下只需证明该数列有界。由于 $a_1 = 2$，且该数列严格递增，故对一切 $n \geq 1$ 都有 $a_n > 2$。因此只需确立一个上界。我们断言：对一切 $n \in \mathbb{N}$ 都有 $a_n < 3$。

从上一节所得的展开式出发，并注意到每个因子 $\left(1 - \frac{j}{n}\right)$ 至多为 $1$，便得到如下估计：

$$
a_n = \sum_{k=0}^{n} \frac{1}{k!} \prod_{j=0}^{k-1} \left(1 - \frac{j}{n}\right) < \sum_{k=0}^{n} \frac{1}{k!}
$$

为从上方估计这个和，我们用不等式 $k! \geq 2^{k-1}$，它对一切 $k \geq 1$ 成立，其依据是 $2 \cdot 3 \cdots k$ 中的 $k-1$ 个因子每个都至少为 $2$。于是得到：

$$
\sum_{k=0}^{n} \frac{1}{k!} \leq 1 + \sum_{k=1}^{n} \frac{1}{2^{k-1}} = 1 + \sum_{k=0}^{n-1} \frac{1}{2^k}
$$

右端的和是一个[等比级数](../geometric-series/)的部分和，其公比为 $\frac{1}{2}$。它的值为：

$$
\sum_{k=0}^{n-1} \frac{1}{2^k} = 2\left(1 - \frac{1}{2^n}\right) < 2
$$

综合以上估计，可得对一切 $n \in \mathbb{N}$ 都有 $a_n < 1 + 2 = 3$。连同下界 $a_n > 2$，即证该数列是有界的。

## 与 $e$ 的级数定义的联系

有界性的证明所揭示的内容远不止一个粗略的上界。作为 $a_n$ 的上界出现的量：

$$\sum_{k=0}^{n} \frac{1}{k!}$$

本身就是下列级数的部分和：

$$
\sum_{k=0}^{\infty} \frac{1}{k!} = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \cdots
$$

该级数收敛，其和恰好为 $e$。事实上，下面的恒等式表明这两个定义是等价的：

$$
e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = \sum_{k=0}^{\infty} \frac{1}{k!}
$$

由指数函数的泰勒展开得到的级数表示，其收敛速度比数列 $\{a_n\}$ 快得多，为计算 $e$ 的十进制近似值提供了更为高效的途径。
