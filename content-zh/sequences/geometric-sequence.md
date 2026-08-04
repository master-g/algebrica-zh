---
title: 等比数列
title_en: Geometric Sequence
source: https://algebrica.org/geometric-sequence/
license: CC BY-NC 4.0
tags:
  - common-ratio
  - geometric-sequence
  - geometric-series
  - limit-of-a-sequence
  - sequence
  - sum-of-a-geometric-progression
translation:
  status: current
  source_hash: 62b0ce7455edfbf060878812b14de1ddb9f864072ccf7c60a171cf225182dc06
  translator: omp
  updated: "2026-08-01T15:07:11.327Z"
---
## 定义

**定义 1.** 若一个[数列](../sequences/) $a_n$ 的各项这样排列：任意一项与其前一项之比恒为常数，则称该数列为等比数列。其各项具有以下形式：

$$
a_1, a_2, \ldots, a_n \quad ;\quad \frac{a_n}{a_{n-1}} = r
$$

+ 按照惯例，等比数列的首项通常用 $n = 1$ 标记。
+ $r$ 表示等比数列中相邻两项之比，称为公比。
+ 若 $r > 1$，则该数列递增（[指数式增长](../exponential-function/)）。
+ 若 $0 < r < 1$，则该数列递减趋近于零。
+ 若 $r = 1$，则该数列为常数数列。
+ 若 $r < 0$，则该数列各项正负交替。

例如，考虑通项为如下的数列：

$$a_n = 3 \cdot 2^{n-1}$$

该数列是一个首项为 3 的等比数列，每一项由前一项乘以 $r = 2$ 得到。

![图 1](/assets/sequences/svg/geometric-sequence-1.zh.svg)

- - -
等比数列也可以通过递归定义，即每一项由前一项确定。其递归定义如下：

$$
\begin{cases}
a_1 = a \\[0.5em]
a_n = a_{n-1} \cdot r,\quad n \geq 2
\end{cases}
$$

+ $a \in \mathbb{R}$ 为首项，
+ $r \in \mathbb{R}$ 为公比，
+ $a_n$ 为该数列的通项。

等比数列呈现出特征性的指数增长模式，其中相邻项之比保持恒定，导致其绝对值快速增大（或减小）。

![图 2](/assets/sequences/svg/geometric-sequence-2.zh.svg)

> 相比之下，[等差数列](../arithmetic-sequence/)则呈现出特征性的线性增长模式，其中相邻项之差保持恒定，导致其随时间稳定地增加（或减少）。

- - -
在等比数列中，每一项 $a_n$ 由首项 $a_1$ 乘以公比 $r$ 的 $(n - 1)$ 次幂得到。由此得到第 $n$ 项的通项公式：

$$
a_n = a_1 \cdot r^{n - 1},\quad n \geq 1
$$

该公式可以直接计算数列中的任意一项，而无需知道或列出之前的所有项。

数列的显式形式与递归形式之间的关键区别在于每一项的定义方式：

+ 在显式形式中，每一项 $a_n$ 直接定义为 $n$ 的函数。
  可以独立计算任意一项，而无需用到之前的项。

+ 在递归形式中，每一项 $a_n$ 根据数列中前面的一项或多项来定义。要计算某一给定项，必须先知道其前面的项。

## 示例
设有一个等比数列，首项为 $a_1 = 2$，公比为 $r = 3$。使用公式：

$$
a_n = a_1 \cdot r^{n - 1}
$$

代入数值：

$$
a_n = 2 \cdot 3^{n - 1}
$$

现在计算前几项：

+ $a_1 = 2$
+ $a_2 = 2 \cdot 3^1 = 6$
+ $a_3 = 2 \cdot 3^2 = 18$
+ $a_4 = 2 \cdot 3^3 = 54$
+ $a_5 = 2 \cdot 3^4 = 162$
得到的数列为：

$$
2,\ 6,\ 18,\ 54,\ 162,\ \dots
$$

## 等比数列的前 $n$ 项之和

公比为 $r \neq 1$ 的等比数列，其前 $n$ 项（$a_1, a_2, \dots, a_n$）之和 $S_n$ 由以下公式给出：

$$
S_n = a_1 \cdot \frac{1 - r^n}{1 - r}
$$

这一闭式由一个利用数列乘法结构的简短代数论证得出。写出该和以及该和乘以 $r$ 的结果：

$$
\begin{aligned}
S_n   &= a_1 + a_1 r + a_1 r^2 + \cdots + a_1 r^{n-1} \\[6pt]
r S_n &= a_1 r + a_1 r^2 + a_1 r^3 + \cdots + a_1 r^n
\end{aligned}
$$

用第一个方程减去第二个方程，消去除第一项和最后一项以外的所有项：

$$
S_n - r S_n = a_1 - a_1 r^n = a_1 (1 - r^n)
$$

在左边提取公因式 $S_n$，得到 $S_n (1 - r) = a_1 (1 - r^n)$，再除以 $1 - r$ 即得闭式。当 $r = 1$ 时，该公式不适用，但数列为常数列，其和即为 $S_n = n \, a_1$。同一恒等式也可通过对 $n$ 进行[归纳](../principle-of-mathematical-induction/)来证明；当 $|r| < 1$ 时，$S_n$ 在 $n \to \infty$ 下的极限导出了和为 $a_1 / (1 - r)$ 的[等比级数](../geometric-series/)。

该公式可以快速计算等比数列中有限项的总和。例如，考虑下面的等比数列：

$$
2,\ 4,\ 8,\ 16,\ 32
$$

我们要计算前 5 项之和（$n = 5$）。使用公式，得：

$$
S_5 = 2 \cdot \frac{1 - 2^5}{1 - 2} = 2 \cdot \frac{1 - 32}{-1} = 2 \cdot 31 = 62
$$

## 等比数列的极限行为

关于等比数列 $a_n = a_1 \cdot r^{n-1}$ 的[极限](../convergent-and-divergent-sequences/)，其行为完全取决于公比 $r$：

+ 当 $r > 1$ 且 $a_1 > 0$ 时，它发散到 $+\infty$；当 $r > 1$ 且 $a_1 < 0$ 时，它发散到 $-\infty$。
+ 当 $r = 1$ 时，它是常数列，等于 $a_1$。
+ 当 $|r| < 1$ 时它是无穷小量，即对于 $-1 < r < 1$：各项趋向于零，当 $r$ 为负时符号交替。
+ 当 $r = -1$ 时，它是有界振荡数列：各项在 $a_1$ 和 $-a_1$ 之间交替，且该数列没有极限。
+ 当 $r < -1$ 时它以振荡方式发散：绝对值无界增长而符号交替，因此该数列无界且没有极限。

前面展示的数列：

$$
a_n = 2 \cdot 3^{n - 1}
$$

因为各项之间的公比为 $r = 3$，满足 $r > 1$，所以发散。因此各项呈指数增长，当 $n$ 增大时趋向于 $+\infty$。

例如，我们考虑图中所示的等比数列：

$$
a_n = (-2)^{n - 1}
$$

展开该数列，我们观察到其公比为 $r = -2$，满足 $r < -1$。

![图 3](/assets/sequences/svg/geometric-sequence-3.zh.svg)

因此，该数列表现出无界振荡行为，各项符号交替，同时绝对值呈指数增长。
