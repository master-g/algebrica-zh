---
title: 数列
title_en: Sequences
source: https://algebrica.org/sequences/
license: CC BY-NC 4.0
tags:
  - fibonacci-sequence
  - monotone-sequence
  - recursive-sequence
  - sequence
  - term
translation:
  status: current
  source_hash: 1f33247454f29ae48da1d56991ccf2c5cc1374b5d76ec4e7da70201313ead41f
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 什么是数列

数列是有序的元素集合，每个元素被赋予一个由[自然数](../natural-numbers/)索引的特定位置。考虑实数集合 $\mathbb{R}$。取值于 $\mathbb{R}$ 的数列是形如 $\mathbb{N} \rightarrow \mathbb{R}$ 的函数，它为每个 $n \in \mathbb{N}$ 赋予唯一的实数 $a(n) \in \mathbb{R}$。

+ 数列 $a : \mathbb{N} \rightarrow \mathbb{R}$ 记作 $\lbrace a_n \rbrace_{n \in \mathbb{N}}$。
+ 数列生成的每个元素称为一项。
+ $a_n$ 的表达式定义了确定数列每一项的规则。

当数列是从 $\mathbb{N}$ 到某个集合的双射时，它枚举一个可数无限集。[基数与可数集](../cardinality-and-countable-sets/)条目将这一定义与有限枚举及可数性判据联系起来。

通常考虑仅在自然数的一个子集上定义的数列会有帮助，例如从某个特定[整数](../integers/)值开始的数列。这类数列的形式为：

$$
a : \{n \in \mathbb{N} : n \geq n_0\} \to \mathbb{R}.
$$

这意味着该数列对所有大于或等于某个初始指标 $n_0$ 的自然数有定义。

- - -
例如，考虑由 $a(n) := \dfrac{1}{n}$ 定义的[函数](../functions/) $a: \mathbb{N}^+ \to \mathbb{R}$。这是一个对每个 $n \in \mathbb{N}^+$ 有定义的实值数列，其各项为：

$$
a_1 = 1, \quad a_2 = \frac{1}{2}, \quad \dots, \quad a_n = \frac{1}{n} \quad \forall n \in \mathbb{N}^+.
$$

- - -
另一个数列的例子是 $a_n = n!$，即 $n$ 的[阶乘](../factorial/)，它定义为从 1 到 $n$ 所有正整数的乘积。该数列的前几项为：

$$
a_1 = 1, \quad a_2 = 2, \quad a_3 = 6, \quad a_4 = 24, \quad a_5 = 120, \quad \dots
$$

## 示例

例如，考虑公式：

$$
a_n := \frac{1}{n - 2}
$$

它定义了一个实值数列 $a : \{3, 4, 5, \dots\} \to \mathbb{R}$，其中值 $3, 4, 5, \dots$ 表示数列的指标。事实上，由于分母在 $n = 2$ 时为零，项 $a_2$ 无定义。为避免这种奇异性，我们将[定义域](../determining-the-domain-of-a-function/)限制为 $n \geq 3$。在这种情况下，我们将数列写作：

$$
(a_n)_{n \geq 3} = \left( \frac{1}{n - 2} \right)_{n \geq 3}
$$

该数列的前几项为：

$$
a_3 = 1, \quad a_4 = \frac{1}{2}, \quad a_5 = \frac{1}{3}, \quad a_6 = \frac{1}{4}, \quad a_7 = \frac{1}{5}, \ \dots
$$

可以看到，该数列递减并当 $n \to \infty$ 时收敛于零（其含义将在后文说明）。

## 递归定义的数列

递归数列是这样的数列：其中每一项由前面的一项或多项定义。定义这样的数列需要两个要素：

+ 一个初始值。
+ 一个递推关系，它确定如何计算每一个新项。

最著名的递归数列之一是斐波那契数列，定义为：

$$
\begin{cases}
a_0 = 0, \\[0.5em]
a_1 = 1, \\[0.5em]
a_n = a_{n-1} + a_{n-2} \quad \forall n \geq 2
\end{cases}
$$

这意味着每一项等于它前面两项之和。该数列的前几项为：

$$
\begin{aligned}
a_0 &= 0 \\[0.5em]
a_1 &= 1 \\[0.5em]
a_2 &= 1 \\[0.5em]
a_3 &= 2 \\[0.5em]
a_4 &= 3 \\[0.5em]
a_5 &= 5 \\[0.5em]
a_6 &= 8 \\[0.5em]
&\vdots
\end{aligned}
$$

> 递归是程序设计中的一种常用策略，它通过反复应用同一条规则直到到达基本情形来求解复杂任务。它在生成数列和求解具有自重复结构的问题时尤为有效。

## 单调数列

根据各项的变化方式可以对数列进行分类。一般地，满足以下任一条件的数列称为[单调数列](../monotone-sequences/)：

+ 常数列：若每一项都等于前一项：$a_n = a_{n+1} \quad \forall n \in \mathbb{N}$。

+ 递增数列：若每一项都大于前一项：$a_n < a_{n+1} \quad \forall n \in \mathbb{N}$。

 + 递减数列：若每一项都小于前一项：$a_n > a_{n+1} \quad \forall n \in \mathbb{N}$。

+ 单调不减：$a_n \leq a_{n+1} \quad \forall n \in \mathbb{N}$。

+ 单调不增：$a_n \geq a_{n+1} \quad \forall n \in \mathbb{N}$。

**定理 1。** 若数列 $(a_n)_{n \in \mathbb{N}}$ 单调且有界，则它存在有限的[极限](../convergent-and-divergent-sequences/)。

**定理 2。** 若数列单调但无界，则它发散到 $+\infty$ 或 $-\infty$，取决于单调的方向。在有界的情形下，极限由数列值域的[上确界或下确界](../supremum-and-infimum/)决定：

$$
\lim_{n \to +\infty} a_n =
\begin{cases}
\sup \{ a_n : n \in \mathbb{N} \} & a_n < a_{n+1} \quad \forall n \in \mathbb{N} \\[0.5em]
\inf \{ a_n : n \in \mathbb{N} \} & a_n > a_{n+1} \quad \forall n \in \mathbb{N}
\end{cases}
$$

该结果保证有界的单调数列总是收敛的，其极限对应于上确界或下确界，取决于单调的方向。[单调数列](../monotone-sequences/)的专题页面给出了该定理的证明，并详细讨论了无界的情形。

## 柯西数列

描述数列行为的另一种方式着眼于各项之间的相互距离，而非固定极限的存在性。从某个指标起各项彼此任意接近的数列称为[柯西数列](../cauchy-sequence/)。

在 $\mathbb{R}$ 中每个柯西数列都收敛，反之每个收敛数列都是柯西数列：这一等价性是实数轴的结构完备性，它将 $\mathbb{R}$ 与有理数域区分开来。

## 特殊数列与进一步发展

数列中最重要的几类包括[等差数列](../arithmetic-sequence/)（各项相差一个常数）和[等比数列](../geometric-sequence/)（各项以常数比相连）。它们的行为以及前 $n$ 项之和的闭式表达式在专题页面中讨论。

当生成每一项的规则产生的是[函数](../functions/)而非数时，所得到的对象是[函数列](../sequence-of-functions/)，其收敛性按逐点收敛和一致收敛的方式研究。

极限 $e := \lim_{n \to \infty}(1 + 1/n)^n$ 提供了单调有界数列的一个著名例子，在关于[欧拉数](../euler-number-limit-sequence/)的页面中讨论。数列的许多性质最有效地由[数学归纳法原理](../principle-of-mathematical-induction/)来建立，只要命题以自然数为参数即可应用。

对于不收敛但有界的数列，例如振荡数列，通常的极限不存在。[上极限与下极限](../superior-and-inferior-limits-of-a-sequence/)将分析推广到这一情形，确定出各项在任意大的指标处聚集的最大和最小聚值。
