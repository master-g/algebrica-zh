---
title: 级数收敛的渐近比较判别法
title_en: Asymptotic Comparison Test
source: https://algebrica.org/asymptotic-comparison-test/
license: CC BY-NC 4.0
tags:
  - asymptotic-comparison
  - comparison-test
  - convergence
  - series
translation:
  status: current
  source_hash: 914178a0494ba56da4d239bc27049d54409fb46bea6be2cec49b796d6fe39087
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 什么是渐近比较判别法

渐近比较判别法通过比较两项均为正的级数的通项之比的极限，而不是逐项建立不等式。它避免了[直接比较判别法](../series-with-positive-terms/)中的主要困难：猜出合适的不等式并加以证明。设 $\sum a_n$ 和 $\sum b_n$ 是两个正项级数，并且它们的通项渐近等价：

$$
a_n \sim b_n \qquad n \to +\infty
$$

那么，这两个级数具有相同的性质：要么都收敛，要么都发散。关系 $a_n \sim b_n$ 的含义是通项之比趋于 $1$：

$$
\lim_{n \to +\infty} \frac{a_n}{b_n} = 1
$$

只要这个极限是有限且严格为正，结论就可以更一般地成立，因为稳定在正数常数上的比值会使两个通项保持同一个数量级。

> 渐近等价只涉及通项最终的大小，因此该判别法可以用具有相同主导行为的简单模型级数来判断原级数的性质。

## 为什么有效

假设 $\frac{a_n}{b_n} \to L$，其中 $0 < L < +\infty$。根据极限的定义，对于任意足够小的 $\varepsilon > 0$，都存在一个[整数](../integers/) $N$，使得对所有 $n \geq N$：

$$
(L - \varepsilon) b_n < a_n < (L + \varepsilon) b_n
$$

两个不等式都只涉及 $b_n$ 的正倍数。如果 $\sum b_n$ 收敛，右侧不等式就用一个收敛级数从上方控制 $a_n$，因此根据[直接比较判别法](../series-with-positive-terms/)，$\sum a_n$ 收敛。如果 $\sum b_n$ 发散，左侧不等式就用一个发散级数从下方控制 $a_n$，因此 $\sum a_n$ 发散。于是两个级数具有相同的性质。

这种比较的一个自然参照是[广义调和级数](../harmonic-series/)，它的收敛性完全由指数决定。另一个常见模型是[门戈利级数](../telescoping-series/) $\sum \frac{1}{n(n+1)}$，它收敛到 $1$，并且与 $\sum \frac{1}{n^2}$ 渐近等价，因为 $\frac{1}{n^2} \sim \frac{1}{n(n+1)}$。

## 示例

使用渐近比较判别法，研究下面级数的性质：

$$
\sum_{n=1}^{\infty} \frac{e^{\sin^3\left(\frac{1}{\sqrt[3]{n}}\right)} - 1}{\sqrt[3]{n}}
$$

对每个 $n \geq 1$，通项都为正，因此可以与正项模型进行比较。当 $n \to +\infty$ 时，参数 $\frac{1}{\sqrt[3]{n}}$ 趋于零，这使我们能够用每个因子的首阶行为来替代它。利用[重要极限](../remarkable-limits/) $\sin x \sim x$ 和 $e^x - 1 \sim x$（当 $x \to 0$ 时），分子满足：

$$
e^{\sin^3\left(\frac{1}{\sqrt[3]{n}}\right)} - 1 \sim \sin^3\left(\frac{1}{\sqrt[3]{n}}\right) \sim \left(\frac{1}{\sqrt[3]{n}}\right)^3 = \frac{1}{n}
$$

除以 $\sqrt[3]{n}$，得到模型通项：

$$
a_n \sim \frac{1}{n \sqrt[3]{n}} = \frac{1}{n^{1 + \frac{1}{3}}} = \frac{1}{n^{\frac{4}{3}}} = b_n
$$

级数 $\sum b_n$ 是指数为 $\frac{4}{3} > 1$ 的广义调和级数，因此收敛。根据渐近比较判别法，原级数也收敛。
