---
title: 调和级数
title_en: Harmonic Series
source: https://algebrica.org/harmonic-series/
license: CC BY-NC 4.0
tags:
  - divergence
  - harmonic-series
  - p-series
  - series
translation:
  status: current
  source_hash: a8f8a9a011d3d0100ab011631fc20e7a3d13a7b02d3fbcbb3b15243a1d433f11
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 定义

调和级数定义为如下无穷和：

$$
\sum_{k=1}^{\infty} \frac{1}{k}
$$

其中每一项都是一个[自然数](../natural-numbers/)的倒数。尽管各项都趋于零，但这个[级数](../series/)仍然发散，也就是说其部分和无限增长。由于它是一个[正项级数](../series-with-positive-terms/)，其部分和数列的极限存在，并且级数发散到正无穷：

$$
S = \lim_{n \to +\infty} s_n = \lim_{n \to +\infty} \sum_{k=1}^{n} \frac{1}{k}
$$

有人可能会认为，当 $n \to \infty$ 时，各项趋于零，因此级数应该收敛。这是一个逻辑错误：各项 $\frac{1}{n}$ 的确趋于零，但速度不够快，因而级数不会收敛。

![图 1](/assets/series/svg/harmonic-series-1.zh.svg)

> 上图给出了调和级数截至 $n = 100$ 的部分和图像。可以看到，曲线虽然上升缓慢，却始终在上升，这证实了该级数是发散的。

- - -

有多种方法可以证明调和级数发散。一种方法是将[部分和](../series/)中的项分组：

$$
\sum_{k=1}^{\infty} \frac{1}{k} = 1 + \frac{1}{2} + \left( \frac{1}{3} + \frac{1}{4} \right) + \left( \frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8} \right) + \cdots
$$

每一组包含的项数是前一组的两倍。观察可知，每一组至少为总和增加 $1/2$，因此整个级数不断增长且没有上界：

$$
\sum_{k=1}^{\infty} \frac{1}{k} = \infty
$$

所以，调和级数发散。了解调和级数及其变体的行为十分有用，因为[比较判别法](../series-with-positive-terms/)和[渐近比较判别法](../asymptotic-comparison-test/)常常可以将复杂级数与调和级数联系起来，以判断其收敛性。

## 广义调和级数（p-级数）

将分母提升到[幂](../powers/) $a$，得到如下级数：

$$
\sum_{k=1}^{\infty} \frac{1}{k^a}
$$

与标准调和级数不同，它是否收敛取决于指数 $a$：

+ 如果 $a > 1$，级数收敛。
+ 如果 $a \leq 1$，级数发散。

- - -

级数 $\sum a_k$ 收敛的一个必要条件是其通项趋于零：

$$
\lim_{k \to \infty} a_k = 0.
$$

如果这个条件不满足，即 $\lim_{k \to \infty} a_k \neq 0$，那么级数发散。对于指数 $a \leq 1$ 的广义调和级数，这个条件会失效。例如，当 $a = 0$ 时，各项变成常数 $a_k = 1$，并且：

$$
\lim_{k \to \infty} \frac{1}{k^0} = \lim_{k \to \infty} 1 = 1 \neq 0.
$$

因此，由于其通项不趋于零，该级数发散。

- - -

当 $a > 1$ 时，我们应用[积分判别法](../integral-test-for-series-convergence/)来判断级数是否收敛。考虑相应的[广义积分](../improper-integrals/)：

$$
\int_1^{\infty} \frac{1}{x^a} \, dx
$$

由于 $a > 1$，有：

$$
\int_1^{\infty} \frac{1}{x^a} \, dx
= \lim_{t \to \infty} \int_1^t x^{-a} \, dx
$$

计算积分在端点处的值，得到：

$$
\lim_{t \to \infty} \left[ \frac{x^{1-a}}{1 - a} \right]_1^t
= \lim_{t \to \infty} \left( \frac{t^{1 - a}}{1 - a} - \frac{1}{1 - a} \right)
$$

因为 $a > 1$，所以指数 $1 - a < 0$，从而 $t^{1 - a} \to 0$。因此：

$$
\int_1^{\infty} \frac{1}{x^a} \, dx = \frac{1}{a - 1}
$$

这个值是有限的，所以对所有 $a > 1$，该级数都收敛。

## 阿贝尔级数

为广义调和级数乘上一个[对数](../logarithms/)因子，得到由两个指数 $p$ 和 $q$ 决定的阿贝尔级数：

$$
\sum_{n=2}^{\infty} \frac{1}{n^p (\log n)^q}
$$

求和从 $n = 2$ 开始，以避开 $n = 1$；此时 $\log 1 = 0$，会导致除以零。幂 $n^p$ 决定主要的衰减速率，而对数因子只在边界处进一步影响其行为。它分为以下四种情形：

+ 如果 $p > 1$，对任意 $q$，级数都收敛。
+ 如果 $p = 1$ 且 $q > 1$，级数收敛。
+ 如果 $p = 1$ 且 $q \leq 1$，级数发散。
+ 如果 $p < 1$，对任意 $q$，级数都发散。

- - -

当 $p \neq 1$ 时，幂 $n^p$ 支配对数，因此级数的行为类似广义调和级数。当 $p > 1$ 时，取一个满足 $1 < s < p$ 的指数 $s$。由于 $(\log n)^q$ 的增长速度慢于 $n$ 的任意正幂，最终有：

$$
\frac{1}{n^p (\log n)^q} < \frac{1}{n^s}
$$

级数 $\sum \frac{1}{n^s}$ 因 $s > 1$ 而收敛，所以由[比较判别法](../series-with-positive-terms/)可知原级数收敛。当 $p < 1$ 时，取一个满足 $p < s < 1$ 的 $s$。最终不等式反向：

$$
\frac{1}{n^p (\log n)^q} > \frac{1}{n^s}
$$

级数 $\sum \frac{1}{n^s}$ 因 $s < 1$ 而发散，所以原级数也发散。

- - -

当 $p = 1$ 时处于边界情形，此时由对数单独决定级数的行为。我们对函数应用[积分判别法](../integral-test-for-series-convergence/)：

$$
f(x) = \frac{1}{x (\log x)^q}
$$

该函数在 $x \geq 2$ 上为正、[连续](../continuous-functions/)且[递减](../increasing-and-decreasing-functions/)。利用[代换](../integration-by-substitution/) $u = \log x$，广义积分变为：

$$
\int_2^{\infty} \frac{1}{x (\log x)^q} \, dx = \int_{\log 2}^{\infty} \frac{1}{u^q} \, du
$$

最后一个积分当且仅当 $q > 1$ 时收敛。因此由积分判别法，$p = 1$ 时的级数当且仅当 $q > 1$ 时收敛。作为应用，我们研究如下级数的性质：

$$
\sum_{n=2}^{\infty} \frac{1}{n \sqrt{\log n}}
$$

这是一个 $p = 1$、$q = \frac{1}{2}$ 的阿贝尔级数。由于 $p = 1$ 且 $q = \frac{1}{2} \leq 1$，该级数发散。
