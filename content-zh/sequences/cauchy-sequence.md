---
title: 柯西数列
title_en: Cauchy Sequence
source: https://algebrica.org/cauchy-sequence/
license: CC BY-NC 4.0
tags:
  - cauchy-sequence
  - completeness
  - convergence
  - limit-of-a-sequence
  - sequence
translation:
  status: current
  source_hash: 8b3b60524b7210ea1f3a3cb095b4f6cffd6322377555fe2851573ae81d5654e5
  translator: omp
  updated: "2026-08-01T15:22:03.739Z"
---
## 定义

柯西数列是一种特殊的[数列](../sequences/)，随着项数往后推进，各项之间的距离越来越近。无论[极限](../limits/)是多少、甚至是否知道它，都不影响这一判断。真正关键的是项与项之间的差越来越小。这一概念之所以重要，是因为它帮助我们在尚未确切知道数列趋向何处时，就能判断其行为是否稳定。

**定义 1。** 设 $\{a_n\}$ 为一个实数数列。若对任意 $\varepsilon > 0$，都存在 $\nu \in \mathbb{N}$，使下列条件成立，则称该数列为柯西数列：

$$
|a_n - a_m| < \varepsilon \quad \forall n, m > \nu
$$

该条件只涉及各项之间的相互距离，不依赖任何外部极限。在实数轴 $\mathbb{R}$ 上，一个基本定理(下文将详细论述)断言：一个数列是柯西数列，当且仅当它是[收敛](../convergent-and-divergent-sequences/)的。这一等价性是 $\mathbb{R}$ 的一种结构性属性，称为完备性；它并非在所有有序域中都成立。例如在 $\mathbb{Q}$ 中，存在有理数构成的柯西数列，其极限是[无理数](../irrational-numbers/)。

> 同一准则也适用于[级数](../series/)，使我们无需知道和的精确值即可判定其收敛。与其计算极限，不如检查部分和数列的各项是否彼此任意靠近——这一策略在[级数的柯西收敛准则](../cauchy-convergence-criterion-series/)一页中有所阐述。

- - -
形如 $a_n = \frac{1}{n}$ 的数列是一个柯西数列，随着 $n$ 增大，各项之间的距离越来越近。将其绘成图形，可以看到：

+ 一条从 $a_1 = 1$ 出发、迅速下降的曲线，
+ 在零附近越来越稠密的点，
+ 当 $n$ 与 $m$ 充分大时，任意两项 $a_n$ 与 $a_m$ 之间的距离越来越小。

![图 1](/assets/sequences/svg/convergent-and-divergent-sequences-1.zh.svg)

随着 $n$ 增大，各项越来越小，趋向于零。这是数列收敛于 0 的一个经典例子。

另一个柯西数列的例子由如下定义的数列给出：

$$
a_n = 1 + \frac{1}{2} + \frac{1}{4} + \dots + \frac{1}{2^n}
$$

这是一个公比为 $\frac{1}{2}$ 的等比数列前 $n$ 项之和。该数列是柯西数列，原因在于：

+ 各项之间的距离越来越近。
+ 每个新项对总和的贡献越来越小。
+ 当 $m > n$ 时，$a_n$ 与 $a_m$ 之间的距离变得极其微小，因为此时只添加如下形式的值：

$$\begin{align}\\[0.5em]\dfrac{1}{2^{n+1}}, \dfrac{1}{2^{n+2}}, \dots \end{align}$$

取极限，该数列收敛于 $2$，从而证实它既是柯西数列，又是收敛数列。

![图 2](/assets/sequences/svg/cauchy-sequence-1.zh.svg)

> 一般地，当一个数列中每一项与其前一项之比为常数时，称该数列为[等比数列](../sequences/)。

- - -

**定理 1。** 每个收敛数列 $(x_n)_n$ 都是柯西数列。

> 柯西数列使我们能够仅凭各项彼此靠近的程度来判定收敛，而无需知道实际的极限。在实数等完备空间中，这种内在的相容性已足以保证数列收敛。

- - -
事实上，设 $(x_n)$ 为 $\mathbb{R}$ 中的一个收敛数列，并设 $L \in \mathbb{R}$ 为其极限。根据收敛的定义，有：

$$
\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\quad |x_n - L| < \frac{\varepsilon}{2} \quad \forall n \geq N
$$

现在，对任意 $n, m \geq N$,应用[三角不等式](../absolute-value/)：

$$
|x_n - x_m| = |x_n - L + L - x_m| \leq |x_n - L| + |x_m - L| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$

于是得到：

$$
\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\quad |x_n - x_m| < \varepsilon \quad \forall n, m \geq N
$$

这恰好就是柯西数列的定义。因此，每个收敛数列都是柯西数列。

- - -

**定理 2。** 每个柯西数列 $(x_n)$ 也是[有界数列](../convergent-and-divergent-sequences/)。事实上，根据定义，若 $(x_n)$ 是柯西数列，则：

$$
\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\quad |x_n - x_m| < \varepsilon \quad \forall n, m \geq N
$$

取 $\varepsilon = 1$。于是存在 $N \in \mathbb{N}$，使得：

$$
|x_n - x_m| < 1 \quad \forall n, m \geq N
$$

固定 $m = N$，便得：

$$
|x_n - x_N| < 1 \Rightarrow |x_n| \leq |x_N| + 1 \quad \forall n \geq N
$$

现在定义：

$$
M_1 := \max\{|x_0|, |x_1|, \dots, |x_{N-1}|\}, \quad M_2 := |x_N| + 1
$$

令：

$$
M := \max\{M_1, M_2\} \Rightarrow |x_n| \leq M \quad \forall n \in \mathbb{N}
$$

因此，数列 $(x_n)$ 始终落在一个有限区间之内，从而是有界的。

## 实数轴的完备性

上述两个定理表明，每个收敛数列都是柯西数列，每个柯西数列都是有界的。第一个命题的逆命题，即 $\mathbb{R}$ 中的每个柯西数列都收敛，是一个更深刻的结果，也是实数轴完备性的等价表述之一。

定理。设 $(x_n)$ 是 $\mathbb{R}$ 中的柯西数列。则 $(x_n)$ 收敛到一个实数极限。

证明将前文确立的有界性与波尔查诺-魏尔斯特拉斯性质相结合，后者断言每个有界的实数数列都存在收敛子列。设 $(x_{n_k})$ 为这样的收敛子列，其中 $x_{n_k} \to L \in \mathbb{R}$。

给定 $\varepsilon > 0$，柯西条件给出一个指标 $\nu$，使得对每个 $n, m \geq \nu$ 都有 $|x_n - x_m| < \varepsilon/2$，而该子列的收敛性给出一个指标 $K$，使得对每个 $k \geq K$ 都有 $|x_{n_k} - L| < \varepsilon/2$。

选取足够大的 $k$ 使得 $n_k \geq \nu$，由三角不等式得到：

$$
|x_n - L| \leq |x_n - x_{n_k}| + |x_{n_k} - L| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$

对每个 $n \geq \nu$ 成立，这正是收敛到 $L$ 的定义。

> 同样的命题在[有理数](../rational-numbers/)的域 $\mathbb{Q}$ 中不成立。$\sqrt{2}$ 的十进制逼近数列，即 $1, 1.4, 1.41, 1.414, \dots$，是 $\mathbb{Q}$ 中的柯西数列，但在 $\mathbb{Q}$ 中不收敛，因为其极限是[无理数](../irrational-numbers/)。$\mathbb{Q}$ 关于柯西数列的完备化是[实数](../real-numbers/)的经典构造方法之一。

## 柯西数列的重要性

柯西条件提供了一种不依赖于任何候选极限的收敛判据。这一内在特征在两种情形下尤为有用。

第一，当需要在不计算极限的情况下证明数列收敛时，估计 $|x_n - x_m|$ 通常比估计 $|x_n - L|$ 更容易。

第二，柯西数列的概念无需修改即可推广到抽象度量空间，在其中它提供了 $\mathbb{R}$ 中收敛的自然推广。

每个柯西数列都收敛的度量空间称为完备的，而完备性正是使 $\mathbb{R}$ 适合作分析学基础的结构性质。
