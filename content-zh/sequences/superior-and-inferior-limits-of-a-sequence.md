---
title: 数列的上极限与下极限
title_en: Superior and Inferior Limits of a Sequence
source: https://algebrica.org/superior-and-inferior-limits-of-a-sequence/
license: CC BY-NC 4.0
tags:
  - accumulation-point
  - bounded-sequence
  - convergent-sequence
  - limit-inferior
  - limit-of-a-sequence
  - limit-superior
  - sequence
translation:
  status: current
  source_hash: b1e771d97631fe8586f0622d5f877966a32eb7036b02cbf283153323e84369db
  translator: omp
  updated: "2026-08-01T15:47:13.475Z"
---
## 引言

[数列](../sequences/)的值域的[上确界与下确界](../supremum-and-infimum/)描述了其各项的全局位置，但对长期行为却无所揭示。数列 $a_n = (-1)^n$ 的上确界为 $1$，下确界为 $-1$，当 $n$ 增大时这两个值被反复取到，然而该数列不[收敛](../convergent-and-divergent-sequences/)。

在另一个极端，数列 $a_n = 1/n$ 的上确界为 $1$，仅取到一次，而此后每一项都与 $0$ 任意接近。因此，值域的上确界作为对最终行为的描述具有误导性。

需要一种更精细的构造，记录项在任意大下标处聚集的值，并舍弃任何有限初始段的贡献。上极限与下极限提供了这样的构造。它们对每个[实数](../real-numbers/)数列都有定义，在广义实数轴 $[-\infty, +\infty]$ 上始终存在，并且当且仅当数列收敛时两者相等。对于不收敛但有界的数列，它们给出两个极端聚集值，数列的项在这两个值之间振荡。

## 通过嵌套上确界与下确界的定义

**定义 1。** 设 $(a_n)_{n \in \mathbb{N}}$ 为实数数列。对每个下标 $n$，考察从位置 $n$ 开始的数列尾部，并取其上确界与下确界。

$$
M_n = \sup_{k \geq n} a_k, \qquad m_n = \inf_{k \geq n} a_k
$$

每一个 $M_n$ 当数列有上界时为实数，否则等于 $+\infty$；$m_n$ 亦然。随着下标 $n$ 增大，尾部收缩：集合 $\\{a_k : k \geq n+1\\}$ 包含于 $\\{a_k : k \geq n\\}$。在更小的集合上取上确界不会产生更大的值，因此数列 $(M_n)$ 是单调不增的。同理，$(m_n)$ 单调不减。

广义实数轴上的单调数列始终存在极限，可能等于 $\pm\infty$。[单调收敛定理](../monotone-sequences/)明确给出这些极限，我们令：

$$
\limsup_{n \to \infty} a_n = \lim_{n \to \infty} M_n = \inf_{n \in \mathbb{N}} M_n
$$

$$
\liminf_{n \to \infty} a_n = \lim_{n \to \infty} m_n = \sup_{n \in \mathbb{N}} m_n
$$

上极限是尾部上确界构成的单调不增数列的下确界，下极限是尾部下确界构成的单调不减数列的上确界。这两个量对每个实数数列都有定义，取值于 $[-\infty, +\infty]$。

> 解释如下。尾部上确界 $M_n$ 度量数列在位置 $n$ 之后还能达到多高。随着 $n$ 增大，早期的离群值被舍弃，$M_n$ 趋近于各项持续聚集的最大值。尾部下确界 $m_n$ 从下方起到对称的作用。

## 例题

首先考虑振荡数列 $a_n = (-1)^n$，它的项在 $+1$ 和 $-1$ 之间交替。对每个指标 $n$，尾部 $\\{a_k : k \geq n\\}$ 同时包含 $+1$ 和 $-1$，因此尾部的上确界始终为 $+1$，下确界始终为 $-1$。

$$
M_n = 1, \qquad m_n = -1 \qquad \forall n \in \mathbb{N}
$$

两个数列都是常数列，它们的极限立即可得。

$$
\limsup_{n \to \infty} (-1)^n = 1, \qquad \liminf_{n \to \infty} (-1)^n = -1
$$

这两个量不相等，这与该数列不收敛的事实一致。

- - -

接下来考虑由以下表达式定义的数列：

$$
a_n = (-1)^n + \frac{1}{n}
$$

各项的符号交替变化，同时漂移趋于 $\pm 1$。偶数项构成子列 $1 + 1/(2k)$，它从上方递减趋于 $1$。奇数项构成子列 $-1 + 1/(2k+1)$，它从上方递增趋于 $-1$。对每个指标 $n$，尾部包含大于 $1$ 的偶数项，因此 $M_n > 1$，且尾部上确界由最小偶数指标 $k \geq n$ 取到。

$$
M_n = 1 + \frac{1}{k_n}, \qquad k_n = \min\\{k \geq n : k \equiv 0 \pmod{2}\\}
$$

当 $n \to \infty$ 时，指标 $k_n$ 也趋于无穷，且 $M_n \to 1$。对称的论证适用于尾部下确界：尾部中最负的项是指标最小的奇数项，且 $m_n \to -1$。

$$
\limsup_{n \to \infty} \left( (-1)^n + \frac{1}{n} \right) = 1, \qquad \liminf_{n \to \infty} \left( (-1)^n + \frac{1}{n} \right) = -1
$$

该例子表明，与单纯的振荡 $(-1)^n$ 相比，扰动 $1/n$ 不改变上极限和下极限。将有界数列加上一个[无穷小](../convergent-and-divergent-sequences/)数列，其聚值偏移为零。

- - -

第三个例子突出了不同的特征。考虑数列：

$$
a_n = \sin\left( \frac{n\pi}{2} \right)
$$

当 $n$ 遍历 $0, 1, 2, 3$ 时，这些值循环取 $0, 1, 0, -1$，然后以周期四重复。每个尾部都包含全部四个值，因此：

$$
M_n = 1, \qquad m_n = -1 \qquad \forall n \in \mathbb{N}
$$

因而 $\limsup a_n = 1$，$\liminf a_n = -1$。值 $0$ 在数列中出现无穷多次，它严格介于下极限和上极限之间。这与下面给出的刻画一致：$0$ 是该数列的一个聚点，但既非最大者也非最小者。

## 聚点刻画

**定义 2.** 称实数 $\ell$ 为数列 $(a_n)$ 的聚点，若存在子列 $(a_{n_k})$ 使得 $a_{n_k} \to \ell$。

数列的聚点集合可以只含一个点（当数列收敛时）、有限多个点（例如 $a_n = \sin(n\pi/2)$，其聚点恰为 $-1, 0, 1$），乃至一个不可数族。当数列存在发散到 $\pm\infty$ 的子列时，$\pm\infty$ 这些值亦可作为聚点。

**定理 1.** 设 $(a_n)$ 为实数数列。上极限是 $(a_n)$ 在 $[-\infty, +\infty]$ 中的最大聚点，下极限则是最小聚点。

证明需要对每个量分两步进行：上极限本身是一个聚点，且没有聚点能超过它。我们假定 $L = \limsup a_n$ 有限来完成第一步。$L = \pm\infty$ 的情形是类似的，且略微简单。

依定义，$M_n \to L$，故对每个 $\varepsilon > 0$，存在 $N$ 使得 $L - \varepsilon < M_n < L + \varepsilon$ 对一切 $n \geq N$ 成立。不等式 $M_n > L - \varepsilon$ 意味着从 $n$ 开始的尾段中含有一项严格大于 $L - \varepsilon$，而不等式 $M_n < L + \varepsilon$ 意味着该尾段的每一项至多为 $L + \varepsilon$（更精确地说，严格小于 $L + \varepsilon$，仅当上确界被取到时才可能等于 $M_n$）。

由此可以选取指标子列 $n_1 < n_2 < \cdots$ 使得 $|a_{n_k} - L| < 1/k$，方法是在每一步选取一个足够靠后的尾段，以及该尾段中接近其上确界的一项。所构造的子列收敛于 $L$，因此 $L$ 是一个聚点。

对于第二步，设 $\ell$ 是满足 $\ell > L$ 的聚点。取 $\varepsilon = (\ell - L)/2 > 0$。$M_n$ 收敛于 $L$ 给出一个指标 $N$，使得 $M_n < L + \varepsilon = \ell - \varepsilon$ 对每个 $n \geq N$ 成立。特别地，每一项 $a_k$（其中 $k \geq N$）都满足 $a_k \leq M_N < \ell - \varepsilon$，这与存在收敛于 $\ell$ 的子列矛盾。故没有聚点能超过 $L$。

$\liminf$ 的论证是对称的。因此下极限与上极限夹住该数列的一切聚点，且它们本身也属于该集合。

> 该定理借助子列极限给出了 $\limsup$ 与 $\liminf$ 的另一种定义。两种表述等价，各从不同侧面阐明其义：尾段上确界的构造是构造性的，在具体情形中易于计算；而聚点刻画在概念上更贴近这些量的本义。

## 收敛判据

$\limsup$、$\liminf$ 与普通极限之间的关系由以下命题刻画，这是该构造最有用的应用之一。

**定理 2。** 设 $(a_n)$ 为一列实数，并设 $\ell \in \mathbb{R}$。则 $a_n \to \ell$ 当且仅当：

$$
\limsup_{n \to \infty} a_n = \liminf_{n \to \infty} a_n = \ell
$$

我们证明两个方向。先设 $a_n \to \ell$。收敛数列的每个子列也收敛到同一极限，因此 $(a_n)$ 的唯一聚点是 $\ell$。由定理 1 得 $\limsup a_n = \liminf a_n = \ell$。

反之，设 $\limsup a_n = \liminf a_n = \ell$，其中 $\ell$ 为有限实数。由定义有：

$$
M_n \to \ell, \qquad m_n \to \ell
$$

固定 $\varepsilon > 0$。存在 $N$，使得对每个 $n \geq N$ 都有 $\ell - \varepsilon < m_n$ 和 $M_n < \ell + \varepsilon$。由构造，对每个 $n$ 都有 $m_n \leq a_n \leq M_n$，因此不等式链：

$$
\ell - \varepsilon < m_n \leq a_n \leq M_n < \ell + \varepsilon
$$

对每个 $n \geq N$ 成立。这恰好说明对每个 $n \geq N$ 都有 $|a_n - \ell| < \varepsilon$，即收敛到 $\ell$ 的定义。

同一命题可推广到 $\ell = \pm\infty$ 的情形，并采用自然的解释：$a_n \to +\infty$ 当且仅当 $\liminf a_n = +\infty$，而 $a_n \to -\infty$ 当且仅当 $\limsup a_n = -\infty$。在两种情形中，这两个广义实数量都坍缩为同一值，该值即为数列的极限。

> 这一判据在处理以下数列时尤为有用：直接用 $\varepsilon$ 论证较为困难，但尾部上确界与尾部下确界却易于求得。分别计算 $\limsup$ 与 $\liminf$ 并加以比较，便可将收敛性问题转化为两个良定义量是否相等的问题。

## 基本不等式

数列的若干序性质直接由定义得出，并在数列的分析中反复使用。

第一条涉及这两个量的相对位置。对于每个数列 $(a_n)$：

$$
\liminf_{n \to \infty} a_n \leq \limsup_{n \to \infty} a_n
$$

要看出这一点，注意对每个 $n$ 有 $m_n \leq a_n \leq M_n$，因此对每个 $n$ 有 $m_n \leq M_n$。两边取极限保持不等式，因为两个数列都是单调的，并且在广义实数轴上有极限。

第二条涉及两个数列之间的比较。若 $a_n \leq b_n$ 对所有充分大的 $n$ 成立，则：

$$
\limsup_{n \to \infty} a_n \leq \limsup_{n \to \infty} b_n, \qquad \liminf_{n \to \infty} a_n \leq \liminf_{n \to \infty} b_n
$$

两者的论证相同。假设对每个 $n \geq N$ 有 $a_n \leq b_n$。对每个 $k \geq N$：

$$
\sup_{j \geq k} a_j \leq \sup_{j \geq k} b_j
$$

因为上确界取自相同的指标值域，且不等式逐项成立。对 $k \to \infty$ 取极限保持不等式，得到 $\limsup a_n \leq \limsup b_n$。下极限的论证完全相同，用 $\inf$ 替换 $\sup$ 即可。

一个有用的推论是 $\limsup$ 和 $\liminf$ 的夹逼：若 $a_n \leq b_n \leq c_n$ 对所有充分大的 $n$ 成立，则：

$$
\liminf a_n \leq \liminf b_n \leq \limsup b_n \leq \limsup c_n
$$

当外侧的界满足 $\liminf a_n = \limsup c_n = \ell$ 时，该链迫使 $\liminf b_n = \limsup b_n = \ell$，根据定理 2，数列 $(b_n)$ 收敛于 $\ell$。这以稍加灵活的形式恢复了[夹逼定理](../convergent-and-divergent-sequences/)，因为外层两个数列本身不必收敛。

## 与根值判别法的联系

上极限通过根值判别法，在非负项[级数](../series/)的收敛中起核心作用。给定级数 $\sum_{n=0}^{\infty} a_n$，其中 $a_n \geq 0$，令：

$$
\rho = \limsup_{n \to \infty} \sqrt[n]{a_n}
$$

当 $\rho < 1$ 时级数收敛，当 $\rho > 1$ 时级数发散；$\rho = 1$ 的情形无法判定。使用 $\limsup$ 而非 $\lim$ 是关键：这使得根值判别法适用于每个级数，而不仅仅是那些普通极限 $\lim \sqrt[n]{a_n}$ 存在的级数。
