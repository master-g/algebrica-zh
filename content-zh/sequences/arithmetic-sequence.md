---
title: 等差数列
title_en: Arithmetic Sequence
source: https://algebrica.org/arithmetic-sequence/
license: CC BY-NC 4.0
tags:
  - arithmetic-sequence
  - common-difference
  - gauss-trick
  - sequence
  - sum-of-an-arithmetic-progression
translation:
  status: current
  source_hash: 6ae47489446f23ac1d4e2cc2e914758136a0e2128687021da1decbe02becd868
  translator: omp
  updated: "2026-08-01T14:29:37.845Z"
---
## 定义

**定义 1.** 若一个[数列](../sequences/) $a_n$ 的任意一项与前一项之差均为常数，则称其为等差数列。其各项可写为：

$$a_1, a_2, \dots, a_n \ ;\quad a_n - a_{n-1} = d$$

+ 按照约定，等差数列的首项通常以 $n = 1$ 作为下标。
+ $d$ 表示等差数列中相邻两项之差，称为公差。
+ 若 $d > 0$，该数列递增。
+ 若 $d < 0$，该数列递减。
+ 若 $d = 0$，该数列为常数列。

以非负偶数数列为例：

$$0, 2, 4, 6, 8, 10, \dots$$

首项为 $a_1 = 0$，公差为 $d = 2$。

![图 1](/assets/sequences/svg/arithmetic-sequence-1.zh.svg)

每一项都由前一项加 $2$ 得到，因此该数列满足等差数列的定义。

- - -
等差数列也可以递归地定义：给定首项，以及由前一项产生每一后继项的规则：

$$
\begin{cases}
a_1 = a \\[0.5em]
a_n = a_{n-1} + d,\quad n \geq 2
\end{cases}
$$

其中 $a, d \in \mathbb{R}$。

![图 2](/assets/sequences/svg/arithmetic-sequence-2.zh.svg)

等差数列呈现出特征性的阶梯状模式，每一级台阶的高度对应数列中相邻项之间的公差。

- - -
在等差数列中，每一项 $a_n$ 等于首项 $a_1$ 加上公差 $d$ 与 $(n - 1)$ 的乘积。由此得到第 $n$ 项的通项公式：

$$
a_n = a_1 + (n - 1) \cdot d,\quad n \geq 1
$$

该公式可直接计算数列中的任意一项，无需列出所有前项。

## 例

设一个等差数列的首项为 $a_1 = 2$，公差为 $d = 3$。使用通项公式：

$$
a_n = a_1 + (n - 1) \cdot d
$$

代入数值：

$$
a_n = 2 + (n - 1) \cdot 3
$$

计算前几项：

+ $a_1 = 2$
+ $a_2 = 2 + 1 \cdot 3 = 5$
+ $a_3 = 2 + 2 \cdot 3 = 8$
+ $a_4 = 2 + 3 \cdot 3 = 11$
+ $a_5 = 2 + 4 \cdot 3 = 14$

所得数列为：

$$ 2,\ 5,\ 8,\ 11,\ 14,\ \dots $$

## 等差数列前 $n$ 项之和

等差数列前 $n$ 项 $a_1, a_2, \dots, a_n$ 的和 $S_n$ 等于 $n$ 与首项、末项平均值之积：

$$
S_n = n \cdot \frac{a_1 + a_n}{2}
$$

该公式可快速计算等差数列中有限项的总和。例如，考虑非负偶数构成的等差数列：

$$
2,\ 4,\ 6,\ 8,\ 10
$$

我们需要计算前 5 项 $(n = 5)$ 之和。代入公式得：

$$
S_5 = 5 \cdot \frac{2 + 10}{2} = 5 \cdot 6 = 30
$$

> 此处体现了高斯技巧背后的同一逻辑：将首项与末项配对，即可迅速求出等差数列各项之和。$S_n$ 的闭式也可通过[数学归纳法原理](../principle-of-mathematical-induction/)加以证明，其中 $n = 1$ 为归纳基础。

## 求和公式的推导

$S_n$ 的闭式可由对称论证得出，无需数学归纳法。将求和式写两遍，第二遍倒序排列，使两行逐项对齐：

$$
\begin{aligned}
S_n &= a_1 + a_2 + a_3 + \cdots + a_{n-1} + a_n \\[6pt]
S_n &= a_n + a_{n-1} + a_{n-2} + \cdots + a_2 + a_1
\end{aligned}
$$

每一列包含一对项，由等差数列的定义可知，它们的和恒为 $a_1 + a_n$。事实上，若 $a_k = a_1 + (k-1) d$，则：

$$
a_k + a_{n-k+1} = \bigl(a_1 + (k-1)d\bigr) + \bigl(a_1 + (n-k)d\bigr) = 2a_1 + (n-1)d = a_1 + a_n
$$

逐列相加两行，得到 $2 S_n = n (a_1 + a_n)$，由此公式：

$$
S_n = n \cdot \frac{a_1 + a_n}{2}
$$

直接成立。代入 $a_n = a_1 + (n-1)d$，即得另一表达式：

$$
S_n = \frac{n}{2}\bigl(2 a_1 + (n-1) d\bigr)
$$

该式仅依赖于首项、公差和项数。

## 与一次函数的联系

通项 $a_n = a_1 + (n-1) d$ 是指标 $n$ 的一次函数，其斜率等于公差 $d$，截距为 $a_1 - d$。该数列的图像由均匀分布在一条直线上的点构成，这与[等比数列](../geometric-sequence/)形成对比——后者的各项落在指数函数的图像上。这种线性特征说明了为什么等差数列能够刻画每单位步长按固定量增减的各种量，从固定利率下的单利到常数级数的部分和皆然。
