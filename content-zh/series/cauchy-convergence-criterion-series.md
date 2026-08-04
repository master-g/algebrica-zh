---
title: 级数的柯西收敛准则
title_en: Cauchy Convergence Criterion for Series
source: https://algebrica.org/cauchy-convergence-criterion-series/
license: CC BY-NC 4.0
tags:
  - cauchy-criterion
  - convergence
  - partial-sums
  - series
translation:
  status: current
  source_hash: 32e8bec49697f48942f8a1788b26848c30527a3ec0313b25cd1f32afadf18e3f
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 定义

柯西准则无需知道级数的和，就可以证明一个[级数](../series/)收敛。这个准则不去计算级数的具体值，而是检查部分和最终是否可以任意接近。当这一条件成立时，即使级数的[极限](../limits/)仍未知，级数也会收敛。

这个准则依赖于数列的[柯西收敛准则](../cauchy-sequence/)，它讨论[数列](../sequences/)的收敛性。该准则指出，数列 $a_n$ 收敛，当且仅当：

$$
\forall \ \varepsilon > 0 \ \exists \ \nu \in \mathbb{N} \ : \ |a_n - a_m| < \varepsilon \quad \forall\ n, m > \nu
$$

设 $\sum_{k=1}^{\infty} a_k$ 是一个级数。根据柯西准则，当且仅当满足以下条件时，该级数收敛：

$$
\forall \ \varepsilon > 0 \ \exists \ \nu \in \mathbb{N}\ : \ 
\left| \sum_{k=\nu+1}^{\nu+p} a_k \right| < \varepsilon \quad \forall \ p \in \mathbb{N}
$$

从足够大的下标开始，级数的任意尾和都必须任意小，这就保证了部分和收敛。为了证明这一点，我们将数列的柯西收敛准则应用于级数。

+ 回顾一下，级数 $\sum a_k$ 收敛，当且仅当其部分和数列 $s_n = \sum_{k=1}^{n} a_k$ 收敛。
+ 因此，级数收敛，当且仅当数列 $(s_n)$ 是柯西数列。

对于级数，两个部分和之差可以写成：

$$
s_{n+p} - s_n = \sum_{k=n+1}^{n+p} a_k
$$

取绝对值得到：

$$
|s_{n+p} - s_n| = \left| \sum_{k=n+1}^{n+p} a_k \right|
$$

数列的柯西准则要求：只要 $n$ 足够大，就对所有 $p \in \mathbb{N}$ 有 $|s_{n+p} - s_n| < \varepsilon$。在本例中，表达式：

$$
\left| \sum_{k=n+1}^{n+p} a_k \right|
$$

代表级数的一个尾和。如果当 $n$ 很大时这个尾和变得很小，那么它就在数列的柯西条件中扮演 $\varepsilon$ 的角色，这就证明了该准则。

## 示例 1

我们使用柯西准则证明：当 $|x| < 1$ 时，[等比级数](../geometric-series/)收敛：

$$
\sum_{k=0}^{\infty} x^k
$$

考虑从下标 $n+1$ 开始的级数尾和：

$$
\left| \sum_{k=n+1}^{n+p} x^k \right| = \left| x^{n+1} + x^{n+2} + \dots + x^{n+p} \right|
$$

这是一个有限等比和，可以直接计算：

$$
\left| \sum_{k=n+1}^{n+p} x^k \right| = \left| x^{n+1} \cdot \frac{1 - x^p}{1 - x} \right| = \frac{|x|^{n+1} \cdot |1 - x^p|}{|1 - x|}
$$

由于 $|x| < 1$，当 $n \to \infty$ 时有 $|x|^{n+1} \to 0$，而其他因子保持有界。因此，对于任意 $\varepsilon > 0$，都可以找到足够大的 $n$，使整个表达式小于 $\varepsilon$。这说明尾和可以任意小，从而满足柯西准则。

## 示例 2

现在证明：在特定值 $x = 0.5$ 处，等比级数收敛：

$$
\sum_{k=0}^{\infty} x^k
$$

由于 $|x| < 1$，我们预期该级数收敛。应用柯西收敛准则，需要考察尾和的大小：

$$
\left| \sum_{k=n+1}^{n+p} x^k \right|
$$

利用公式可以计算这个和：

$$
\sum_{k=n+1}^{n+p} x^k = x^{n+1} \cdot \frac{1 - x^p}{1 - x}
$$

取绝对值得到：

$$
\left| \sum_{k=n+1}^{n+p} x^k \right| = \frac{(0.5)^{n+1} \cdot |1 - (0.5)^p|}{|1 - 0.5|} = 2 \cdot (0.5)^{n+1} \cdot |1 - (0.5)^p|
$$

有两个事实可以控制这个表达式：$(0.5)^{n+1} \to 0$（当 $n \to \infty$ 时），并且对所有 $p \in \mathbb{N}$ 都有 $|1 - (0.5)^p| \leq 1$。因此：

$$
\left| \sum_{k=n+1}^{n+p} x^k \right| \leq 2 \cdot (0.5)^{n+1}
$$

由于右侧在 $n \to \infty$ 时趋于零，所以对任意 $\varepsilon > 0$，都可以找到足够大的 $n$，使得：

$$
\left| \sum_{k=n+1}^{n+p} x^k \right| < \varepsilon \quad p \in \mathbb{N}
$$

这满足柯西收敛准则。因此，当 $x = 0.5$ 时，该级数收敛。
