---
title: 数列的收敛与发散
title_en: Sequence Convergence and Divergence
source: https://algebrica.org/convergent-and-divergent-sequences/
license: CC BY-NC 4.0
tags:
  - bounded-sequence
  - convergent-sequence
  - divergent-sequence
  - limit-of-a-sequence
  - oscillating-sequence
  - sequence
translation:
  status: current
  source_hash: 937629dde26f001865f8e68c949a4d22188a09c4a2cc785a099c6b1f4c4543b2
  translator: omp
  updated: "2026-08-01T10:39:15.984Z"
---
## 收敛数列

[数列](../sequences/)是有序的元素集合，每个元素被分配到由[自然数](../types-of-numbers/)索引的特定位置。对于每个数列 $(a_n)_{n \in \mathbb{N}}$，其各项 $a_n$ 都有一个关联的行为，描述它们如何随着索引 $n$ 的增大而变化。

分析这一行为有助于判断数列是收敛于有限[极限](../limits/)，还是发散至无穷，或者呈现振荡模式。

**定义 1.** 数列 $(a_n)_{n \in \mathbb{N}}$ 被称为收敛于极限 $\ell \in \mathbb{R}$，如果对于每个 $\varepsilon > 0$，都存在 $n_0 \in \mathbb{N}$，使得：

$$
|a_n - \ell| < \varepsilon \quad \forall n \geq n_0.
$$

此时，我们记：

$$
\lim_{n \to +\infty} a_n = \ell
\quad \lor \quad
a_n \to \ell \quad (n \to +\infty).
$$

换言之，这意味着数列的各项随着 $n$ 的增大而越来越接近数 $\ell$。无论容差 $\varepsilon$ 多么小，从某个索引起，所有项都将保持在距 $\ell$ 不超过该距离的范围内。例如，考虑以下数列：

$$ a_n = \left( \frac{1}{n} \right)_{n \geq 1} = \left(1, \frac{1}{2}, \frac{1}{3}, \ldots \right) $$

随着 $n$ 的增大，各项越来越小，趋近于零。

![图 1](/assets/sequences/svg/convergent-and-divergent-sequences-1.svg)

这是收敛于 0 的数列的经典示例。当数列的各项随着索引的增大而任意接近于零时，该数列被称为无穷小量，且：

$$
\lim_{n \to +\infty} a_n = 0.
$$

数列 $(a_n)_{n \in \mathbb{N}}$ 的极限若存在，则是唯一的。假设（反证法）数列同时收敛于 $\ell_1$ 和 $\ell_2$，其中 $\ell_1 \neq \ell_2$。

选取 $\varepsilon = |\ell_1 - \ell_2|/2 > 0$，收敛于 $\ell_1$ 给出一个索引 $n_1$，使得对 $n \geq n_1$ 有 $|a_n - \ell_1| < \varepsilon$；而收敛于 $\ell_2$ 给出一个索引 $n_2$，使得对 $n \geq n_2$ 有 $|a_n - \ell_2| < \varepsilon$。

对 $n \geq \max\{n_1, n_2\}$，[三角不等式](../absolute-value/)导出矛盾：

$$|\ell_1 - \ell_2| \leq |\ell_1 - a_n| + |a_n - \ell_2| < 2\varepsilon = |\ell_1 - \ell_2|$$

因此，两个候选极限必然相等。

## 示例

考虑如下定义的数列：

$$
a_n = \frac{n}{n + 2}
$$

我们的目标是利用收敛的形式定义，证明该数列在 $n \to +\infty$ 时收敛到 1。

为此，必须证明对于任意 $\varepsilon > 0$，存在一个自然数 $n_0$，使得对所有 $n \geq n_0$：

$$
\left| \frac{n}{n + 2} - 1 \right| < \varepsilon
$$

化简该绝对值表达式：

$$
\left| \frac{n}{n + 2} - 1 \right| = \left| \frac{-2}{n + 2} \right| = \frac{2}{n + 2}.
$$

我们希望：

$$
\frac{2}{n + 2} < \varepsilon
$$

求解该不等式：

$$
n + 2 > \frac{2}{\varepsilon} \quad \Rightarrow \quad n > \frac{2}{\varepsilon} - 2
$$

因此可以定义：

$$
n_0 = \left\lceil \frac{2}{\varepsilon} - 2 \right\rceil
$$

从此项之后，数列的每一项与极限 $1$ 的距离都保持在 $\varepsilon$ 以内。因此，根据定义：

$$
\lim_{n \to +\infty} \frac{n}{n + 2} = 1.
$$

## 发散数列

若数列 $(a_n)_{n \in \mathbb{N}}$ 不收敛到有限极限，则称该数列发散。发散可分为以下几种情况。

数列发散到 $+\infty$，如果对于任意 $M > 0$，存在索引 $n_0 \in \mathbb{N}$，使得  

$$
  a_n > M \quad \forall n \geq n_0
  $$

  此时，记为：

$$
  \lim_{n \to +\infty} a_n = +\infty \quad \lor \quad a_n \to +\infty \quad (n \to +\infty)
  $$

- - -
数列发散到 $-\infty$，如果对于任意 $M < 0$，存在索引 $n_0 \in \mathbb{N}$，使得  

$$
  a_n < M \quad \forall n \geq n_0
  $$

  此时，记为：

$$
  \lim_{n \to +\infty} a_n = -\infty \quad \lor \quad a_n \to -\infty \quad (n \to +\infty)
  $$

## 有界数列

有界数列是指各项始终位于一个固定的有限[区间](../intervals/)内的数列，无论索引变得多大。形式上说，设 $\{a_n\}$ 为一个数列。我们称该数列有界，如果存在常数 $M > 0$，使得：

$$
|a_n| \leq M \quad \forall n \in \mathbb{N}
$$

我们称数列 $\{a_n\}$ 有上界，如果存在常数 $M \in \mathbb{R}$，使得：

$$
a_n \leq M \quad \forall n \in \mathbb{N}
$$

我们称该数列有下界，如果存在常数 $M \in \mathbb{R}$，使得：

$$
a_n \geq M \quad \forall n \in \mathbb{N}
$$

## 振荡数列

振荡数列是一种特殊的有界数列。考虑如下数列：

$$
(a_n)_{n \in \mathbb{N}} = ((-1)^n)_{n \in \mathbb{N}} = (+1, -1, +1, -1, +1, -1, \dots)
$$

随着下标 $n$ 增大，数列的各项始终在 $+1$ 和 $-1$ 之间交替变化。

![图 2](/assets/sequences/svg/convergent-and-divergent-sequences-2.svg)

这类数列不趋于任何有限值，称为振荡数列。它既不收敛于有限极限，也不发散到 $+\infty$ 或 $-\infty$，其各项在不同值之间持续波动。对于任意大的下标，各项聚集的极值由数列的[上极限与下极限](../superior-and-inferior-limits-of-a-sequence/)精确刻画。

## 等比数列

考虑一种数列，称为[等比数列](../geometric-sequence/)，根据固定的实数 $q$ 的不同，它可以表现出不同的行为。一般地，当数列每一项与其前一项之比为常数时，该数列称为等比数列。更精确地，等比数列定义如下：

$$
a_n := q^n
$$

数列的行为完全取决于 $q$ 的值：

+ 若 $q > 1$，则发散到 $+\infty$，因为幂 $q^n$ 无界增长。
+ 若 $q = 1$，则为常数数列且等于 $1$，因为对每个 $n$ 都有 $a_n = 1^n = 1$。
+ 若 $|q| < 1$ 则为无穷小量，即对于满足 $q \neq 0$ 的 $-1 < q < 1$：各项趋于零，当 $q$ 为负时符号交替。
+ 若 $q = -1$，则为有界振荡数列，因为 $a_n$ 在 $+1$ 和 $-1$ 之间交替变化且无极限。
+ 若 $q < -1$，则振荡发散：绝对值无界增长且符号交替，因此数列无界且无极限。

![图 3](/assets/sequences/svg/convergent-and-divergent-sequences-3.svg)

如图所示，当 $q = 2$ 时，等比数列 $a_n = q^n$ 的值[指数式](../exponential-function/)增长。随着 $n$ 增大，每一项都是前一项的两倍，导致数值急剧增长。

> 仔细比较[等差数列](../arithmetic-sequence/)与等比数列之间的差异，以更好地理解它们的结构和增长模式有何不同。

## 极限的代数运算

数列的[极限](../limits/)与基本算术运算以可预见的方式相互作用。设 $(a_n)$ 和 $(b_n)$ 为两个收敛数列，其中 $a_n \to \ell$ 和 $b_n \to m$。下列恒等式成立：

+ 和：$\lim_{n \to \infty} (a_n + b_n) = \ell + m$。
+ 差：$\lim_{n \to \infty} (a_n - b_n) = \ell - m$。
+ 积：$\lim_{n \to \infty} (a_n \cdot b_n) = \ell \cdot m$。
+ 商：$\lim_{n \to \infty} \dfrac{a_n}{b_n} = \dfrac{\ell}{m}$，条件是 $m \neq 0$ 且从某一项起 $b_n \neq 0$。
+ 常数倍：$\lim_{n \to \infty} (c \cdot a_n) = c \cdot \ell$，对于每个 $c \in \mathbb{R}$。
+ 绝对值：$\lim_{n \to \infty} |a_n| = |\ell|$。

这些法则直接来自收敛的 $\varepsilon$ 定义和三角不等式。例如，和的恒等式是通过将 $\varepsilon$ 分成相等的两部分得到的：选取指标 $n_1, n_2$，使得当 $n \geq n_1$ 时 $|a_n - \ell| < \varepsilon/2$，当 $n \geq n_2$ 时 $|b_n - m| < \varepsilon/2$。

于是当 $n \geq \max\{n_1, n_2\}$ 时，由三角不等式得：

$$
|(a_n + b_n) - (\ell + m)| \leq |a_n - \ell| + |b_n - m| < \varepsilon
$$

其余恒等式有类似的证明。

> 当两个极限中至少有一个为无穷时，只要结果明确，上述法则在扩充形式下仍然成立：例如，对于每个有限的 $\ell$，$\ell + \infty = +\infty$。那些不产生规范值的情形，例如 $\infty - \infty$ 或 $0 \cdot \infty$，称为[未定式](../indeterminate-forms/)，需要进一步分析。

## 夹逼定理

当一个数列被夹在两个都收敛到同一极限的数列之间时，它也收敛到该极限。这就是[夹逼定理](../squeeze-theorem/)。

**定理 1。** 设 $(a_n)$、$(b_n)$、$(c_n)$ 为三个数列，使得当 $n$ 充分大时 $a_n \leq b_n \leq c_n$ 成立。若 $\lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = \ell$，则 $\lim_{n \to \infty} b_n = \ell$。

证明是直接的。固定 $\varepsilon > 0$。由 $a_n$ 和 $c_n$ 收敛到 $\ell$，存在一个下标 $n_0$，使得对每个 $n \geq n_0$，$\ell - \varepsilon < a_n$ 和 $c_n < \ell + \varepsilon$ 都成立。由链条 $\ell - \varepsilon < a_n \leq b_n \leq c_n < \ell + \varepsilon$ 可得 $|b_n - \ell| < \varepsilon$，这正是收敛的定义。

当数列过于复杂而难以直接处理，但具有明确的上界和下界时，夹逼定理尤为有用。例如，数列 $b_n = \sin(n)/n$ 被夹在 $-1/n$ 和 $1/n$ 之间，两者都趋于零；由该定理立得 $\lim b_n = 0$。

## 符号保持性

若数列收敛到严格正的极限，则其项最终为正。更精确地说，若 $a_n \to \ell$ 且 $\ell > 0$，则存在 $n_0 \in \mathbb{N}$，使得对每个 $n \geq n_0$，$a_n > 0$ 成立。关于 $\ell < 0$ 的对称结论同样成立：各项最终为负。

为验证这一点，在收敛的定义中取 $\varepsilon = \ell/2 > 0$。存在 $n_0$，使得对每个 $n \geq n_0$，$|a_n - \ell| < \ell/2$ 成立，整理后得到 $\ell/2 < a_n < 3\ell/2$。特别地 $a_n > \ell/2 > 0$，如所断言。

> 极限为严格正的这一假设不能放宽为 $\ell \geq 0$：数列 $a_n = -1/n$ 收敛到 $0$，但每一项都是负的。符号保持性是严格正（或严格负）极限的严格性质。

## 子列与波尔查诺–魏尔斯特拉斯定理

$(a_n)$ 的子列通过选取一组递增的指标 $n_1 < n_2 < n_3 < \cdots$ 并考虑新的数列 $(a_{n_k})_{k \in \mathbb{N}}$ 而得到。子列继承原数列的收敛性：若 $a_n \to \ell$，则每个子列也收敛于 $\ell$。这一观察提供了一个常用的不收敛判据：若 $(a_n)$ 的两个子列收敛到不同的极限，则 $(a_n)$ 不收敛。[上极限与下极限](../superior-and-inferior-limits-of-a-sequence/)对这一现象给出了系统的刻画，指出了能作为子列极限取得的极大值与极小值。

其反问题是，一个不收敛的数列是否仍然拥有收敛子列，对此波尔查诺–魏尔斯特拉斯定理给出了回答。

**定理 2.** 每个有界实数数列都存在收敛子列。

该结果是实数轴的结构性质，源于完备性。它在[柯西数列](../cauchy-sequence/)的理论中扮演核心角色——用于将有界性提升为收敛；同时在[魏尔斯特拉斯定理](../weierstrass-theorem/)的证明中也起关键作用，该定理断言连续函数在紧区间上能取得极值。
