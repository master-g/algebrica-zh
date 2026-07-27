---
title: 数的类型
title_en: Types of Numbers
source: https://algebrica.org/types-of-numbers/
license: CC BY-NC 4.0
tags:
  - algebraic-numbers
  - complex-numbers
  - integers
  - irrational-numbers
  - natural-numbers
  - rational-numbers
  - real-numbers
  - transcendental-numbers
  - types-of-numbers
translation:
  status: current
  source_hash: 9f5fe7d1603002613d68e687405ef27d4d12b0c0d2ff3375012ddf0176e2a49e
  translator: omp
  updated: "2026-07-22T08:35:06.966Z"
---
## 引言

数被组织成层层嵌套的族，每一族都在前一族的基础上扩展，以容纳更小的族所无法表示的量。主要的数[集合](../sets/)，按包含关系排列，依次为：自然数 $\mathbb{N}$、[整数](../integers/) $\mathbb{Z}$、[有理数](../rational-numbers/) $\mathbb{Q}$、[实数](../real-numbers/) $\mathbb{R}$ 和[复数](../complex-numbers/) $\mathbb{C}$。[无理数](../irrational-numbers/) $\mathbb{I}$ 并非这一层级中独立的一层，而是有理数在 $\mathbb{R}$ 中的补集。这些集合之间的包含关系如下：

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}, \qquad \mathbb{I} \subset \mathbb{R}
$$

![IMG. 1](/assets/sets-and-numbers/svg/types-of-numbers-1.svg)

另一种分类方式横贯这一层级，将 $\mathbb{R}$ 划分为代数数 $\mathbb{A}$ 和超越数，并细化了有理数与无理数的区分。每一次扩展都解决了前一层的局限，直至到达 $\mathbb{C}$，在其内每一个[多项式方程](../polynomial-equations/)都有解。

## 自然数

[自然数](../natural-numbers/)集合，记为 $\mathbb{N}$，是用于计数离散量的非负整数的全体：

$$
\mathbb{N} = \\{0, 1, 2, 3, 4, \ldots\\}
$$

每一个元素都由前一个元素加一得到，从 $0$ 开始。由于自然数表示一个集合包含多少个元素，它们也称为基数。零是否属于 $\mathbb{N}$ 是一个约定问题；最常见的两种选择如下：

$$
\mathbb{N}_0 = \\{0, 1, 2, 3, \ldots\\}
$$

$$
\mathbb{N}^+ = \\{1, 2, 3, \ldots\\}
$$

从基础理论的角度看，$\mathbb{N}$ 是 $\mathbb{R}$ 中最小的归纳集。它包含 $0$，并且每当它包含一个元素 $n$ 时，也包含 $n+1$。这一性质是[数学归纳法原理](../principle-of-mathematical-induction/)的基础。

## 整数

整数集合，记为 $\mathbb{Z}$，通过为每一个正自然数添加一个负的对应物来扩展 $\mathbb{N}$：

$$
\mathbb{Z} = \\{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\\}
$$

每个整数要么是正的、负的，要么是零。集合 $\mathbb{Z}$ 可以表示为自然数及其负数的并集：

$$
\mathbb{Z} = \mathbb{N} \cup \\{-n : n \in \mathbb{N}^+\\}
$$

当符号或零的排除需要明确时，使用以下子集：

$$
\begin{align}
\mathbb{Z}^+ &= \{1, 2, 3, \ldots\} \\[6pt]
\mathbb{Z}^- &= \{-1, -2, -3, \ldots\} \\[6pt]
\mathbb{Z}^* &= \mathbb{Z} \setminus \{0\}
\end{align}
$$

从 $\mathbb{N}$ 到 $\mathbb{Z}$ 的过渡使减法始终有定义：对任意 $a, b \in \mathbb{Z}$，差 $a - b$ 仍然是整数。诸如 $3 - 5$ 这样的减法，在 $\mathbb{N}$ 内没有值，但在 $\mathbb{Z}$ 中产生整数 $-2$。从代数的角度看，$(\mathbb{Z}, +)$ 是一个交换[群](../groups/)，$(\mathbb{Z}, +, \cdot)$ 是一个含幺交换[环](../rings/)，但不是域，因为大多数整数没有乘法逆元。另有一条目专门详细讨论[整数](../integers/)的性质。

## 有理数

[有理数](../rational-numbers/)集合，记为 $\mathbb{Q}$，是所有可以表示为两个整数之比（分母非零）的数的全体：

$$
\mathbb{Q} = \left \{ \frac{p}{q} : p, q \in \mathbb{Z}, \ q \neq 0 \right\}
$$

每个整数都是有理数，因为任意 $n \in \mathbb{Z}$ 都可以写成 $n/1$。有理数的小数展开要么是有限的，要么是最终循环的。例如，$1/4 = 0.25$ 和 $1/3 = 0.\overline{3}$。以下是有理数的进一步例子：

$$
\frac{-5}{4}, \quad \frac{12}{7}, \quad -8, \quad \frac{25}{19}
$$

从 $\mathbb{Z}$ 到 $\mathbb{Q}$ 的过渡使得除以任意非零整数始终有定义。用代数的语言说，$\mathbb{Q}$ 是包含 $\mathbb{Z}$ 的最小[域](../fields/)，通过为每一个非零整数添加乘法逆元构造而成。

## 无理数

如果一个实数不能表示为两个整数之比，则称其为[无理数](../irrational-numbers/)。无理数集合记为 $\mathbb{I}$，且满足 $\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$，其中 $\mathbb{Q} \cap \mathbb{I} = \emptyset$。无理数的小数展开是无限不循环的。常见的例子包括：

$$
\sqrt{2}, \quad \sqrt{3}, \quad \pi, \quad e, \quad -\sqrt[3]{5}
$$

$\sqrt{2}$ 的无理性是数学中最古老的结果之一，有一个简洁的反证法证明。假设 $\sqrt{2} = p/q$ 为最简分数，则迫使 $p$ 和 $q$ 均为偶数，这与假设矛盾。

$\pi$ 和 $e$ 是无理数，同时也是超越数，即它们不是任何以有理数为系数的非零多项式的根。

## 实数

[实数](../real-numbers/)集合，记为 $\mathbb{R}$，是有理数与无理数的并集：

$$
\mathbb{R} = \mathbb{Q} \cup \mathbb{I}
$$

从 $\mathbb{Q}$ 到 $\mathbb{R}$ 的过渡填补了有理数留下的空隙，使得每一个收敛[数列](../sequences/)在该集合内都有[极限](../limits/)。每个实数都有如下形式的十进制表示：

$$
p.\alpha_0 \ \alpha_1 \ \alpha_2 \ \alpha_3 \ldots
$$

各部分的含义如下：

+ $p \in \mathbb{Z}$ 是整数部分，可以是正的、负的或零。
+ $\alpha_0, \alpha_1, \alpha_2, \ldots$ 是小数位，每一位属于 $\\{0, 1, \ldots, 9\\}$。
+ 各位由自然数编号，因此小数展开无限延续。

对于有理数，小数展开是最终循环的。对于无理数，小数展开是无限不循环的。

- - -

从几何上看，$\mathbb{R}$ 对应于一条没有空隙的直线上的点，即实数轴。

完备性将 $\mathbb{R}$ 与 $\mathbb{Q}$ 区分开来。例如，$\sqrt{2}$ 的有理数近似所构成的数列在 $\mathbb{Q}$ 内没有极限，但其极限在 $\mathbb{R}$ 中存在。最小上界的主题在[上确界与下确界](../supremum-and-infimum/)条目中讨论。

集合 $\mathbb{R}$ 是全序的：对任意两个实数 $x$ 和 $y$，关系 $x < y$、$x = y$、$x > y$ 中恰好有一个成立。$\mathbb{R}$ 满足阿基米德性质：对每一个实数 $x$，都存在一个自然数 $n$ 使得 $n > x$。该性质排除了 $\mathbb{R}$ 中的无穷大元素和无穷小元素。

$\mathbb{Q}$ 和 $\mathbb{I}$ 都在 $\mathbb{R}$ 中稠密：每一个开区间，无论多么小，都既包含有理数又包含无理数。这两个族在实数轴的每一个尺度上交织在一起，尽管它们在数量上有所不同。

$\mathbb{Q}$ 与 $\mathbb{R}$ 之间的进一步区别在于基数。有理数是可数的，即其元素可以与 $\mathbb{N}$ 建立一一对应。而实数是不可数的，这一点由康托尔的对角线论证所证明。在这个精确的意义上，几乎每一个实数都是无理数。实数系的性质在[实数的性质](../properties-of-real-numbers/)条目中进一步讨论。

由于零没有符号，它既不属于正实数也不属于负实数。以下术语是标准的：非负实数满足 $x \geq 0$，而非正实数满足 $x \leq 0$。

## 代数数与超越数

如果一个实数是某个以有理数为系数的非零多项式的根，则称其为代数数，否则为超越数。代数数集合记为 $\mathbb{A}$，每个实数恰好属于这两类之一：

$$
\mathbb{R} = \mathbb{A} \cup (\mathbb{R} \setminus \mathbb{A})
$$

$$
\mathbb{A} \cap (\mathbb{R} \setminus \mathbb{A}) = \emptyset
$$

每个有理数 $p/q$ 都是代数数，因为它是线性多项式 $qx - p$ 的根。一些常见的无理数也是代数数：$\sqrt{2}$ 是 $x^2 - 2$ 的根，$\sqrt[3]{5}$ 是 $x^3 - 5$ 的根。代数数与超越数的分类细化了有理数与无理数的划分：

$$
\mathbb{Q} \subset \mathbb{A}, \qquad \mathbb{A} \setminus \mathbb{Q} \subset \mathbb{I}
$$

超越数是不在 $\mathbb{A}$ 中的实数。最著名的两个例子是 $\pi$ 和 $e$。

> 集合 $\mathbb{A}$ 是可数的，因为以有理数为系数的多项式构成一个可数族，而每个多项式只有有限个根。由于 $\mathbb{R}$ 是不可数的，超越数构成一个不可数集合，在这个意义上，几乎每一个实数都是超越数，尽管具体的例子相对稀少。

## 复数

[复数](../complex-numbers/)集合，记为 $\mathbb{C}$，通过引入一个满足 $i^2 = -1$ 的元素 $i$ 来扩展 $\mathbb{R}$。每个复数都可以唯一地分解为实部和虚部，写成如下形式：

$$
z = a + bi
$$

其中 $a$ 和 $b$ 是实数，分别称为 $z$ 的实部和虚部。当 $b = 0$ 时，该数退化为实数，因此 $\mathbb{R} \subset \mathbb{C}$。当 $a = 0$ 且 $b \neq 0$ 时，该数为纯虚数，如 $i$、$-3i$ 和 $\sqrt{2}\ i$。

从几何上看，$\mathbb{C}$ 与欧几里得平面等同，将 $z = a + bi$ 表示为坐标为 $(a, b)$ 的点。水平轴对应实数，竖直轴对应纯虚数，代数运算有直接的几何解释。

过渡到 $\mathbb{C}$ 使得可以对负数取平方根，更一般地，可以将每个多项式完全分解。根据代数基本定理，每个非常数复系数多项式在 $\mathbb{C}$ 中至少有一个根。

集合 $\mathbb{R}$ 不具有这一封闭性质，因为多项式 $x^2 + 1$ 没有实根。关于[复数](../complex-numbers/)的完整讨论见相应条目。
