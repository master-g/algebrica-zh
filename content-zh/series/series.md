---
title: 级数
title_en: Series
source: https://algebrica.org/series/
license: CC BY-NC 4.0
tags:
  - convergence
  - divergence
  - partial-sums
  - series
translation:
  status: current
  source_hash: 1c4737d4f5053ec2719d9b9f522672e97198d4308fcda0f8047fd48af496d910
  translator: codex
  updated: "2026-08-11T00:00:00.000Z"
---
## 引言

设 $\{a_n\}_{n \geq 1}$ 是一个由[实数](../real-numbers/)组成的无穷[数列](../sequences/)。第 $n$ 阶部分和是前 $n$ 项之和：

$$
s_n = \sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n
$$

这些部分和构成数列 $\{s_n\}$。与之关联的级数记作 $\sum_{n=1}^{\infty} a_n$。数列 $\{s_n\}$ 的[极限](../limits/)决定该级数是否收敛；如果收敛，这个极限就是级数的和。

本文考察的项是实数，但级数的项也可以是[复数](../complex-numbers/)、[函数](../function-series/)、[向量](../vectors/)或[矩阵](../matrices/)。在每一种情形中，项所属的空间都必须定义加法运算，并明确部分和采用何种收敛概念。

## 级数的性质

部分和数列的[收敛或发散](../convergent-and-divergent-sequences/)决定级数的行为：

$$
\lim_{n \to \infty} s_n = \lim_{n \to \infty} \sum_{k=1}^{n} a_k
$$

+ 如果极限存在且有限，则级数 $\sum a_n$ 收敛。这个极限值就是级数的和。
+ 如果部分和趋于 $+\infty$ 或 $-\infty$，则级数 $\sum a_n$ 分别发散到 $+\infty$ 或 $-\infty$。
+ 如果部分和没有极限，例如发生振荡，则级数 $\sum a_n$ 也发散。

> “级数的和”是约定俗成的术语。它表示部分和数列的极限，而不是通常的有限和。

如果级数 $\sum a_k$ 的[绝对值](../absolute-value/)级数 $\sum |a_k|$ 收敛，则称原级数绝对收敛。每个绝对收敛的级数都收敛，但反过来不一定成立。收敛但不绝对收敛的级数称为条件收敛级数。绝对收敛级数经过任意重排后，其和都保持不变。相比之下，重排条件收敛级数可能改变其和，也可能使其发散。

改变有限个项不会影响收敛性。因此，只相差有限个项的两个级数要么都收敛，要么都发散。两者收敛时，其和不一定相等。

## 收敛的必要条件

如果级数 $\sum_{n=1}^{\infty} a_n$ 收敛，那么它的通项必须趋于零：

$$
\lim_{n \to \infty} a_n = 0
$$

这个条件是必要的，但不是充分的，因为 $a_n \to 0$ 并不能保证级数收敛。下文的调和级数就是充分性不成立的反例。为证明必要性，设 $S$ 是级数的和，于是部分和数列 $\{s_n\}$ 趋于 $S$。移位后的数列 $\{s_{n-1}\}$ 也趋于同一个极限：

$$
S = \lim_{n \to \infty} s_n = \lim_{n \to \infty} s_{n-1}
$$

由恒等式 $a_n = s_n - s_{n-1}$ 和[极限的运算法则](../algebra-of-limits/)可得：

$$
\lim_{n \to \infty} (s_n - s_{n-1}) = \lim_{n \to \infty} a_n = S - S = 0
$$

## 部分余项

对于和为 $S$ 的收敛级数，第 $n$ 阶部分余项记作 $R_n$，它是下标位于 $n$ 之后的各项之和：

$$
R_n = \sum_{k=n+1}^{\infty} a_k
$$

余项也等于级数的和与第 $n$ 阶部分和之差：

$$
R_n = S - s_n
$$

差 $R_n = S - s_n$ 衡量用 $s_n$ 近似 $S$ 时的误差，而 $|R_n|$ 是绝对误差。由于 $s_n \to S$，这个恒等式给出：

$$
\lim_{n \to \infty} R_n = 0
$$

[级数的柯西收敛准则](../cauchy-convergence-criterion-series/)通过有限尾和刻画收敛性，无须预先知道级数的和 $S$。

## 级数的线性性质

对于每个 $\lambda \in \mathbb{R}$ 和每个收敛级数 $\sum_{k=1}^{\infty} a_k$，级数 $\sum_{k=1}^{\infty} \lambda a_k$ 也收敛，其和为：

$$
\sum_{k=1}^{\infty} \lambda a_k = \lambda \sum_{k=1}^{\infty} a_k
$$

如果级数 $\sum_{k=1}^{\infty} a_k$ 和 $\sum_{k=1}^{\infty} b_k$ 都收敛，那么它们的逐项和也收敛，并且满足：

$$
\sum_{k=1}^{\infty} (a_k + b_k) = \sum_{k=1}^{\infty} a_k + \sum_{k=1}^{\infty} b_k
$$

这两个性质都可以通过对部分和应用有限和的线性性质与极限运算法则得到。

## 两个级数的柯西乘积

有限和相乘时，每一对下标都会产生一项。对于无穷级数，把下标之和同为 $n$ 的乘积 $a_k b_{n-k}$ 归为一组。级数 $\sum_{n=0}^{\infty} a_n$ 与 $\sum_{n=0}^{\infty} b_n$ 的柯西乘积是级数 $\sum_{n=0}^{\infty} c_n$，其中通项为：

$$
c_n = \sum_{k=0}^{n} a_k b_{n-k}
$$

对于有限和，这种分组方式可以还原通常的乘法。对于[幂级数](../power-series/)，$c_n$ 正是乘积中 $n$ 次项的系数。

两个因子都收敛，并不能保证它们的柯西乘积收敛。梅滕斯定理给出了一条充分条件：如果 $\sum_{n=0}^{\infty} a_n$ 绝对收敛于 $A$，且 $\sum_{n=0}^{\infty} b_n$ 收敛于 $B$，那么柯西乘积收敛于两个和的乘积：

$$
\sum_{n=0}^{\infty} c_n = A \cdot B
$$

当两个级数都条件收敛时，柯西乘积可能发散。例如，令 $a_n = b_n = \frac{(-1)^n}{\sqrt{n+1}}$。由于 $(n+1)^{-1/2}$ 单调递减并趋于零，这两个级数都由[莱布尼茨判别法](../leibniz-criterion/)收敛。它们的绝对值级数都是 $p = \frac{1}{2}$ 的 $p$ 级数，根据下文的分类可知该级数发散。柯西乘积的系数为：

$$
c_n = (-1)^n \sum_{k=0}^{n} \frac{1}{\sqrt{(k+1)(n-k+1)}}
$$

当 $0 \leq k \leq n$ 时，由[算术—几何平均不等式](../arithmetic-mean/)可得 $\sqrt{(k+1)(n-k+1)} \leq \frac{n+2}{2}$。取倒数后，每个加数都有下界 $\frac{2}{n+2}$。将这 $n+1$ 个下界相加可得：

$$
|c_n| \geq \frac{2(n+1)}{n+2}
$$

右侧趋于 $2$，所以 $c_n$ 不趋于零，柯西乘积发散。

## 经典级数

算术级数、调和级数、等比级数和裂项级数经常作为例子，也经常在收敛判别法中作为比较级数。

[直接比较判别法](../series-with-positive-terms/)和[渐近比较判别法](../asymptotic-comparison-test/)以已知级数为模型。其他判别法包括[比值判别法](../ratio-test-for-series-convergence/)、[根值判别法](../root-test-for-series-convergence/)和[积分判别法](../integral-test-for-series-convergence/)。

[算术级数](../arithmetic-series/)的各项组成一个[等差数列](../arithmetic-sequence/)。相邻两项之差为固定数 $d$，称为公差：

$$
\sum_{n=1}^{\infty} a_n, \qquad a_n = a_1 + (n-1)d
$$

将关于平均值对称的项配对，可以得到前 $n$ 项部分和的闭式表达式：

$$
s_n = \frac{n(a_1 + a_n)}{2} = \frac{n}{2}[2a_1 + (n-1)d]
$$

零级数是唯一收敛的算术级数。如果 $d = 0$ 且 $a_1 \neq 0$，通项是一个非零常数。如果 $d \neq 0$，通项的绝对值会无限增长。在这两种情形中，$a_n$ 都不趋于零，所以算术级数发散。

- - -

[调和级数](../harmonic-series/)是[自然数](../natural-numbers/)倒数的和：

$$
\sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n} + \cdots
$$

通项 $1/n$ 趋于零。当 $m \geq 1$ 时，下标从 $2^{m-1}+1$ 到 $2^m$ 的各项组成一个含 $2^{m-1}$ 项的分组，其中每一项都不小于 $1/2^m$。因此，每组的和都不小于 $1/2$，部分和无界，级数发散。这说明条件 $a_n \to 0$ 不足以保证收敛。将指数推广为实数 $p$，可得广义调和级数：

$$
\sum_{n=1}^{\infty} \frac{1}{n^p} = 1 + \frac{1}{2^p} + \frac{1}{3^p} + \cdots + \frac{1}{n^p} + \cdots, \quad p \in \mathbb{R}
$$

它是否收敛取决于 $p$：

+ 如果 $p > 1$，级数收敛。
+ 如果 $p \leq 1$，级数发散。

普通调和级数是边界情形 $p = 1$。

- - -

[等比级数](../geometric-series/)的各项组成一个公比为 $q$ 的[等比数列](../geometric-sequence/)：

$$
\sum_{n=0}^{\infty} q^n = 1 + q + q^2 + q^3 + \cdots + q^n + \cdots
$$

除首项外，每一项都是前一项的 $q$ 倍。当 $q \neq 1$ 时，前 $n$ 项之和为：

$$
s_n = \sum_{k=0}^{n-1} q^k = \frac{1-q^n}{1-q}
$$

+ 如果 $|q| < 1$，则 $q^n \to 0$，所以级数收敛于 $\frac{1}{1-q}$。
+ 如果 $|q| \geq 1$，则 $q^n$ 不趋于零，所以级数发散。

当 $q = -1$ 时，部分和在 $1$ 和 $0$ 之间振荡；当 $q < -1$ 时，部分和的绝对值无限增长。

- - -

[裂项级数](../telescoping-series/)的项可以分解，使相邻项相互抵消。以下级数就是裂项级数：

$$
\sum_{n=1}^{\infty} \frac{1}{n(n+1)} = \frac{1}{2} + \frac{1}{6} + \cdots + \frac{1}{n(n+1)} + \cdots
$$

每一项都有[部分分式分解](../partial-fraction-decomposition/) $\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$，所以所有中间项都会抵消，未抵消的两项给出：

$$
s_n = 1 - \frac{1}{n+1}
$$

由于 $\frac{1}{n+1}$ 趋于零，所以 $s_n$ 趋于 $1$，级数的和为 $1$。
