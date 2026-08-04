---
title: 函数列
title_en: Sequences of Functions
source: https://algebrica.org/sequence-of-functions/
license: CC BY-NC 4.0
tags:
  - function
  - pointwise-convergence
  - sequence
  - sequence-of-functions
  - uniform-convergence
translation:
  status: current
  source_hash: ac2878ec36b92b36e37738430bf986d9983162433c17ebc30cf41df34aacb299
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 引言

设想有一个由不同[函数](../functions/)组成的列表，其中每个函数都与一个数 $n = 1, 2, 3, \ldots \in \mathbb{N}$ 相关联。于是，对每个 $n$，我们得到一个不同的函数；这个按顺序排列的函数列表，本质上就是一个[函数列](../sequences/)。

**定义 1。** 设 $A \subseteq \mathbb{R}$ 是一个非空子集，并且对每个 $n \in \mathbb{N}$，都有函数 $f_n: A \rightarrow \mathbb{R}$。如果
$(f_n) = (f_1, f_2, f_3, \dots)$，则称其为 $A$ 上的函数列。

考虑一个简单的实际例子。设 $(f_n)$ 是函数列，其中 $n \in \mathbb{N}_0$、$x \in \mathbb{R}$，并定义为：

$$
f_n(x) = \frac{x}{n+1}
$$

这是一个函数族，其中每个函数都是线性的，并且直线的斜率随着 $n$ 增大而减小。当 $n = 0, 1, 2, 3, \ldots$ 时，有：

$$
\begin{aligned}
f_0(x) &= \frac{x}{0+1} = x \\[0.5em]
f_1(x) &= \frac{x}{1+1} = \frac{x}{2} \\[0.5em]
f_2(x) &= \frac{x}{2+1} = \frac{x}{3} \\[0.5em]
f_3(x) &= \frac{x}{3+1} = \frac{x}{4} \\[0.5em]
\vdots
\end{aligned}
$$

因此，函数列为：

$$
(f_n) = \left( x, \frac{x}{2}, \frac{x}{3}, \frac{x}{4}, \dots \right)
$$

图示如下：

![图 1](/assets/sequences/svg/sequences-of-functions-1.zh.svg)

该图展示了下标 $n$ 增大时，直线 $f_n(x)$ 的斜率逐渐减小。这反映出，对每个 $x$，函数都逐渐变平并趋近于零函数 $f(x) = 0$。换句话说，当 $n$ 趋于无穷时，函数列 $f_n(x)$ 逐点收敛于零函数。

## 逐点收敛

**定义 2。** 设 $\lbrace f_n(x) \rbrace$ 是定义在公共[定义域](../determining-the-domain-of-a-function/) $A \subseteq \mathbb{R}$ 上的函数列，其中 $n \in \mathbb{N}$。如果对每个 $x \in C$，数列 $\lbrace f_n(x) \rbrace$ 都收敛，则称函数列 $\lbrace f_n(x) \rbrace$ 在集合 $C \subseteq A$ 上逐点收敛。在这种情况下，[极限](../limits/)函数 $f(x)$ 定义为：

$$
f(x) = \lim_{n \to +\infty} f_n(x) \quad \forall x \in C
$$

集合 $C$ 称为函数列 $\{f_n(x)\}$ 的逐点收敛集。

逐点收敛也可以表述如下。设 $(f_n)$ 是定义在集合 $A$ 上的函数列。那么，$(f_n)$ 在 $A$ 上逐点收敛于 $f : A \to \mathbb{R}$，当且仅当对所有 $x \in A$ 和所有 $\varepsilon > 0$，都存在 $K \in \mathbb{N}$，使得：

$$|f_n(x) - f(x)| < \varepsilon \quad \forall n \geq K$$

> 换句话说，对每个固定的点 $x$，只要选取足够大的 $n$，就可以使 $f_n(x)$ 任意接近 $f(x)$。达到给定精度所需的下标 $K$ 可能随 $x$ 和 $\varepsilon$ 的不同而变化。

- - -
考虑前面讨论过的函数列：

$$
f_n(x) = \frac{x}{n+1}, \quad x \in \mathbb{R}, \quad n \in \mathbb{N}_0
$$

考察 $n \to \infty$ 时每个 $x$ 的情形。固定一个一般的 $x$，例如 $x = 2$，相应的数列为：

$$
\begin{aligned}
f_0(2) &= 2 \\[0.5em]
f_1(2) &= 1 \\[0.5em]
f_2(2) &= \frac{2}{3} \\[0.5em]
f_3(2) &= \frac{2}{4} \\[0.5em]
&\vdots
\end{aligned}
$$

当 $n \to \infty$ 时，这个数列趋于零。一般地，对每个 $x \in \mathbb{R}$：

$$
\lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} \frac{x}{n+1} = 0
$$

因此，极限函数为：

$$
f(x) = 0 \quad \forall x \in \mathbb{R}
$$

根据实数数列极限的唯一性，函数列 $(f_n)$ 的逐点极限是唯一的。

## 示例

研究区间 $-1 < x < 1$ 上如下函数列的行为：

$$
f_n(x) = x^n
$$

对于该区间内固定的 $x$，我们知道 $x$ 的[绝对值](../absolute-value/)小于 $1$，即 $|x| < 1$。这意味着我们考察的是绝对值小于 $1$ 的数的[幂](../powers/)。根据[指数](../exponential-function/)的性质，当底数的绝对值小于 $1$ 时，$n$ 趋于无穷时数列 $x^n$ 趋于零：

$$
\lim_{n \to \infty} x^n = 0
$$

绝对值满足 $|x| < 1$ 的实数 $x$ 的幂构成的数列收敛于零。

因此，对区间 $-1 < x < 1$ 中的每个 $x$，函数列 $f_n(x) = x^n$ 都逐点收敛于零函数。

$$
f(x) = 0 \quad \forall x \in (-1,1)
$$

## 逐点收敛的推论

**定义 3。** 设函数列 $\{f_n\}$ 中的函数 $f_n : A \to \mathbb{R}$ 逐点收敛于函数 $f : A \to \mathbb{R}$。则有以下性质：

+ 如果对所有 $x \in A$ 都有 $f_n(x) \geq 0$，那么对所有 $x \in A$ 都有 $f(x) \geq 0$。实际而言，如果每个函数 $f_n(x)$ 在 $A$ 上都非负，那么极限函数 $f(x)$ 在 $A$ 上也非负。这反映了非负实数数列的极限不可能为负。

+ 如果每个 $f_n$ 在 $A$ 上都是非减的，那么 $f$ 也是非减的。因此，如果每个函数 $f_n$ 在 $A$ 上都是非减的，那么极限函数 $f$ 也会是非减的。换句话说，单调性在逐点收敛下得以保持。

## 一致收敛

设 $(f_n)$ 是定义在集合 $A \subseteq \mathbb{R}$ 上的函数列。如果对任意 $\varepsilon > 0$，都存在一个[自然数](../natural-numbers/) $K$，使得对所有 $n \geq K$ 及所有 $x \in A$，都有下列不等式成立，则称 $(f_n)$ 在 $A$ 上一致收敛于函数 $f : A \to \mathbb{R}$：

$$
|f_n(x) - f(x)| < \varepsilon
$$

如果 $(f_n)$ 一致收敛于 $f$，那么 $(f_n)$ 也逐点收敛于 $f$。

- - -
考虑函数列：

$$
f_n(x) = \frac{x}{n}, \quad x \in [0,1], \quad n \in \mathbb{N}
$$

对区间 $[0,1]$ 中每个固定的 $x$，有：

$$
\lim_{n \to \infty} f_n(x) = 0
$$

这意味着函数列 $f_n(x)$ 逐点收敛于函数 $f(x) = 0$。现在检查它在 $[0,1]$ 上是否一致收敛。计算函数 $f_n(x)$ 与极限函数 $f(x)$ 之差：

$$
|f_n(x) - f(x)| = \left| \frac{x}{n} - 0 \right| = \frac{x}{n}
$$

这个差在区间 $[0,1]$ 上的最大值为：

$$
\sup_{x \in [0,1]} |f_n(x) - f(x)| = \frac{1}{n}
$$

给定任意 $\varepsilon > 0$，可以选取 $N$ 使得：

$$
\frac{1}{N} < \varepsilon
$$

于是，对所有 $n \geq N$ 及所有 $x \in [0,1]$，都有：

$$
|f_n(x) - f(x)| < \varepsilon
$$

这就证明了函数列 $f_n(x) = \frac{x}{n}$ 在区间 $[0,1]$ 上一致收敛于极限函数 $f(x) = 0$。

## 逐点收敛并不足够

逐点收敛与一致收敛对极限的分析性质有着非常不同的影响。说明这种差异的标准例子是函数列：

$$
f_n(x) = x^n \qquad x \in [0, 1]
$$

每个函数 $f_n$ 都在 $[0, 1]$ 上[连续](../continuous-functions/)，而逐点极限为：

$$
f(x) = \lim_{n \to \infty} x^n =
\begin{cases}
0 & 0 \leq x < 1 \\[6pt]
1 & x = 1
\end{cases}
$$

极限函数在 $x = 1$ 处发生跳跃，因此不连续，尽管函数列中的每个成员都是连续的。它在 $[0, 1]$ 上并不一致收敛：差值 $|f_n(x) - f(x)| = x^n$ 在 $x \to 1^-$ 时趋近于 $1$，所以该差值在 $[0, 1]$ 上的上确界对每个 $n$ 都等于 $1$，并不趋于零。

这一差异解释了一致收敛在分析学中的重要性：逐点收敛几乎不保持任何性质，而一致收敛则能保持许多我们希望极限函数从函数列成员那里继承的结构性质。

## 一致收敛保持的性质

一致收敛是若干经典函数性质传递到极限的自然方式。下面三个定理概括了最重要的传递结果。

**定理 1。** 设 $(f_n)$ 是定义在集合 $A \subseteq \mathbb{R}$ 上的函数列，并且每个函数都在点 $x_0 \in A$ 处连续。如果 $f_n$ 在 $A$ 上一致收敛于 $f$，那么极限函数 $f$ 在 $x_0$ 处连续。特别地，如果每个 $f_n$ 在 $A$ 上连续，那么 $f$ 也在 $A$ 上连续。

证明采用标准的 $\varepsilon/3$ 分解。固定 $\varepsilon > 0$。由一致收敛性，选取 $N$，使得对每个 $x \in A$ 及每个 $n \geq N$，都有 $|f_n(x) - f(x)| < \varepsilon/3$。由 $f_N$ 在 $x_0$ 处的连续性，选取 $x_0$ 的一个邻域，使得在该邻域内 $|f_N(x) - f_N(x_0)| < \varepsilon/3$。于是由三角不等式得到：

$$
|f(x) - f(x_0)| \leq |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)| < \varepsilon
$$

这在该邻域内成立，正是 $f$ 在 $x_0$ 处连续的定义。

- - -
**定理 2。** 设 $(f_n)$ 是闭且有界的区间 [a, b] 上的连续函数列，并且 $(f_n)$ 在 [a, b] 上一致收敛于 $f$。则：

$$
\lim_{n \to \infty} \int_a^b f_n(x) \, dx = \int_a^b f(x) \, dx
$$

换句话说，一致收敛允许交换[积分](../definite-integrals/)与极限。逐点收敛并不足够：标准反例是一列高而窄的尖峰，其面积始终不趋于零，但尖峰不断向右移动，因此逐点极限为零，而积分并不趋于零。

- - -
**定理 3。** 设 $(f_n)$ 是 $[a, b]$ 上的可微函数列，且 $(f_n(x_0))$ 在某个点 $x_0 \in [a, b]$ 收敛，同时 $(f_n')$ 在 $[a, b]$ 上一致收敛。那么 $(f_n)$ 一致收敛于一个在 $[a, b]$ 上可微的函数 $f$，并且：

$$
f'(x) = \lim_{n \to \infty} f_n'(x)
$$

三个传递定理中，关于微分的定理要求最高：它要求的不是函数列本身一致收敛，而是导函数列一致收敛，并且还要求在一个点上收敛。

函数列 $(f_n)$ 的逐点收敛不会保持可微性；即使 $(f_n)$ 一致收敛，也不足以允许逐项微分。

> 三个经典例子说明了逐点收敛的局限性：$[0,1]$ 上的 $f_n(x) = x^n$ 不保持连续性；尖峰函数列不保持积分值；而 $f_n(x) = \sin(nx)/\sqrt{n}$ 这样的快速振荡函数列不保持可微性。一致收敛模式修正了这些问题，因此成为函数列分析中的标准要求。
