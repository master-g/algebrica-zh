---
title: 无理数
title_en: Irrational Numbers
source: https://algebrica.org/irrational-numbers/
license: CC BY-NC 4.0
tags:
  - algebraic-numbers
  - cardinality
  - cauchy-sequence
  - decimal-expansion
  - density
  - golden-ratio
  - irrational-numbers
  - real-numbers
  - square-root-of-two
  - transcendental-numbers
translation:
  status: current
  source_hash: 0687b39b02bf9bbe860458dd41940f6438948c5442f915fda642198a1a0926d6
  translator: omp
  updated: "2026-07-22T12:08:19.687Z"
---
## 定义

一个实数如果不能写成两个整数之比，就是无理数。无理数集合是 $\mathbb{R}$ 中[有理数](../rational-numbers/) $\mathbb{Q}$ 的补集，记作 $\mathbb{I}$。其形式描述为：

$$
\mathbb{I} = \{x \in \mathbb{R} \mid x \notin \mathbb{Q}\}
$$

等价地，$\mathbb{I} = \mathbb{R} \setminus \mathbb{Q}$。集合 $\mathbb{Q}$ 与 $\mathbb{I}$ 构成[实数轴](../real-numbers/)的一个[划分](../sets/)。每个实数要么是有理数，要么是无理数，二者互斥。这一分解可由以下恒等式概括：

$$
\mathbb{R} = \mathbb{Q} \cup \mathbb{I}, \qquad \mathbb{Q} \cap \mathbb{I} = \emptyset
$$

无理数并非像 $\mathbb{Z}$ 扩张 $\mathbb{N}$ 或 $\mathbb{Q}$ 扩张 $\mathbb{Z}$ 那样，作为 $\mathbb{Q}$ 的代数扩张而产生。它们只在有理数轴的完备化迫使存在有理数未能占据的点时才出现。因此，$\mathbb{R}$ 中 $\mathbb{I}$ 的存在是[完备性公理](../real-numbers/)的推论，而非独立的代数构造。

## 小数表示

小数展开为无理数提供了直接的刻画。[有理数](../rational-numbers/)的小数表示要么是有限的，如 $1/4 = 0.25$，要么是最终循环的，如 $1/7 = 0.\overline{142857}$。

无理数的小数展开既不终止也不循环。没有任何有限的数字块从某一点起无限重复。

这种二分性是判定无理性的实用判据。实数 $x$ 为有理数当且仅当其小数展开最终循环。其逆否命题表明，任何缺乏最终循环性的小数展开都定义一个无理数。以下构造说明了这一点：

$$
x = 0.101001000100001000001\ldots
$$

数字的排列使得每个 $1$ 与下一个之间被越来越多的零隔开。没有数字块永远重复，所得的数直接构造即为无理数。这个例子表明，无理数可以显式地给出，而无需借助代数方程或几何量。

## $\sqrt{2}$ 的无理性

$\sqrt{2}$ 是单位正方形对角线的长度，是无理数的一个经典例子。其反证法仅用到整数的基本性质。

假设 $\sqrt{2}$ 是有理数。则存在整数 $p$ 和 $q$，满足 $q \neq 0$，使得：

$$
\sqrt{2} = \frac{p}{q}
$$

可以假定分数 $p/q$ 处于最简形式，即 $p$ 和 $q$ 没有大于 $1$ 的公因子。两边平方得：

$$
2 = \frac{p^2}{q^2} \quad\Longrightarrow\quad p^2 = 2q^2
$$

方程 $p^2 = 2q^2$ 表明 $p^2$ 是偶数，而奇数的平方为奇数，故 $p$ 本身必为偶数。记 $p = 2k$，其中 $k$ 为某整数。代入得：

$$
(2k)^2 = 2q^2 \quad\Longrightarrow\quad 4k^2 = 2q^2 \quad\Longrightarrow\quad q^2 = 2k^2
$$

对 $q^2$ 施行同样的论证，可知 $q$ 也是偶数。因此 $p$ 和 $q$ 都能被 $2$ 整除，与分数 $p/q$ 已是最简形式的假设矛盾。原假设因此不成立，$\sqrt{2}$ 不能表示为两个整数之比。

该矛盾也可表述为无限递降法。从满足 $p^2=2q^2$ 的正整数 $p,q$ 出发，写 $p=2k$。方程变为 $q^2=2k^2$，故 $(q,k)$ 是同一方程的另一个正整数解。此外，$q<p$，因为 $p^2=2q^2$。重复此构造将产生正整数的无穷严格递减数列，而由 $\mathbb{N}$ 的良序性，这是不可能的。

$\sqrt{2}$ 处的有理间隙可以任意精度地夹逼。对每个有理数 $\varepsilon>0$，存在非负有理数 $x$ 使得：

$$
x^2<2<(x+\varepsilon)^2
$$

假设不存在这样的 $x$。由于没有有理数的平方等于 $2$，蕴涵 $x^2<2 \Rightarrow (x+\varepsilon)^2<2$ 将对每个非负有理数 $x$ 成立。从 $0^2<2$ 出发，归纳法将给出 $(n\varepsilon)^2<2$ 对所有 $n\in\mathbb{N}$ 成立。由阿基米德性质，存在整数 $n>2/\varepsilon$ 使得 $n\varepsilon>2$，从而 $(n\varepsilon)^2>4$，矛盾。对 $\varepsilon=0.001$，可取 $x=1.414$，因为 $1.414^2=1.999396$ 且 $1.415^2=2.002225$。

因此，有理数可以从两侧逼近这个缺失的值，尽管没有任何一个等于它。逐次选取更小的 $\varepsilon$ 值产生有理近似如 $1.4,1.41,1.414,\ldots$。这些近似构成一个[柯西数列](../cauchy-sequence/)，其极限不在 $\mathbb{Q}$ 中，而存在于其完备化 $\mathbb{R}$ 中。

> 设 $k\geq2$，并设 $n$ 为不是完全 $k$ 次幂的正整数。某个素数在 $n$ 的分解中以不能被 $k$ 整除的指数出现。若 $\sqrt[k]{n}=p/q$，其中 $p,q$ 为互素的正整数，则 $p^k=nq^k$。该素数的指数既能被 $k$ 整除，又在模 $k$ 下非零，矛盾。故 $\sqrt[k]{n}$ 是无理数。

## 代数无理数与超越无理数

无理数根据更精细的代数判据进一步分为两个不相交的类。实数若为某个非零整系数[多项式](../polynomials/)的根，则为代数数，否则为超越数。该分类与有理、无理的二分关系如下：

+ 每个有理数都是代数数，因为 $p/q$ 是多项式 $qx - p$ 的唯一根。
+ 许多无理数是代数数。$\sqrt{2}$ 是 $x^2 - 2$ 的根，而黄金分割比是 $x^2 - x - 1$ 的根。
+ 超越数必然是无理数，因为有理数必为代数数。

证明某个特定的数是超越数通常需要初等代数以外的结果。林德曼–魏尔斯特拉斯定理确立了 $e$ 和 $\pi$ 的超越性。划分 $\mathbb{R} = \mathbb{A} \cup (\mathbb{R} \setminus \mathbb{A})$ 在[数的类型](../types-of-numbers/)中讨论。

## 经典例子

若干无理数具有简短的代数、几何或分析定义。

+ 对每个不是完全平方数的正整数 $n$，[平方根](../radicals/) $\sqrt{n}$ 都是无理数。最小的情形有 $\sqrt{2}$、$\sqrt{3}$、$\sqrt{5}$、$\sqrt{6}$、$\sqrt{7}$、$\sqrt{8}$ 和 $\sqrt{10}$。
+ 对每个不是完全立方数的正整数 $n$，立方根 $\sqrt[3]{n}$ 都是无理数。同样的原理可推广到更高次的根。
+ 黄金分割比由 $\varphi = (1 + \sqrt{5})/2$ 定义，是 $x^2 - x - 1 = 0$ 的正根，其无理性继承自 $\sqrt{5}$。
+ $\pi$ 是圆的[周长](../circumference/)与直径之比，且为超越数。
+ $e$ 是[自然对数](../logarithms/)的底，同样为超越数。它可以作为由有理数组成、但极限不是有理数的[数列的极限](../euler-number-limit-sequence/)来引入。

自然对数 $\ln 2$ 是另一个超越数，因而也是无理数。这些常数的小数展开起始如下：

$$
\sqrt{2} = 1.41421356\ldots, \qquad \varphi = 1.61803398\ldots
$$

$$
\pi = 3.14159265\ldots, \qquad e = 2.71828182\ldots
$$

数字无限延续而不落入任何重复模式，与无理性的小数刻画一致。

## 实数轴上的稠密性

无理数并非实数轴上的孤立点。任意两个不同的实数之间存在无理数，这一性质称为 $\mathbb{I}$ 在 $\mathbb{R}$ 中的稠密性。给定 $x, y \in \mathbb{R}$ 满足 $x < y$，可如下构造无理数 $\xi$ 满足 $x < \xi < y$。

由有理数在 $\mathbb{R}$ 中的稠密性，存在 $q \in \mathbb{Q}$ 使以下不等式成立：

$$
x - \sqrt{2} < q < y - \sqrt{2}
$$

每项加 $\sqrt{2}$ 得 $x < q + \sqrt{2} < y$。$\xi = q + \sqrt{2}$ 是无理数，因为有理数与无理数之和恒为无理数。为验证这一事实，假设 $q + \sqrt{2}$ 是有理数。则 $\sqrt{2} = (q + \sqrt{2}) - q$ 将是两个有理数之差从而为有理数，与 $\sqrt{2}$ 的无理性矛盾。

该论证表明，$\mathbb{R}$ 的每个开区间，无论多小，都包含无穷多个无理数。结合关于 $\mathbb{Q}$ 的类似稠密性命题，这意味着有理数与无理数在实数轴的每个尺度上都相互交织。

## 基数

有理数与无理数都稠密，但基数不同。集合 $\mathbb{Q}$ 是可数的，而 $\mathbb{R}$ 不可数。若 $\mathbb{I}$ 可数，则恒等式 $\mathbb{R}=\mathbb{Q}\cup\mathbb{I}$ 将把 $\mathbb{R}$ 表为两个可数集之并。因此 $\mathbb{I}$ 不可数。

因此无理数不可数，尽管有理数在 $\mathbb{R}$ 中稠密。代数数 $\mathbb{A}$ 是可数的，因为每个整系数多项式只有有限个根，而此类多项式的族是可数的。其补集 $\mathbb{R} \setminus \mathbb{A}$，即超越数集合，因此不可数。

> 稠密性与基数衡量不同的性质。每个开区间都包含有理数和无理数，但有理数和代数数是可数的，而无理数和超越数是不可数的。

## 代数行为

与 $\mathbb{Q}$ 和 $\mathbb{R}$ 不同，集合 $\mathbb{I}$ 在通常的算术运算下不封闭。初等例子表明了这种不封闭性。

两个无理数之和可能是有理数，如以下恒等式所示：

$$
\sqrt{2} + (-\sqrt{2}) = 0
$$

两个无理数之积也可能是有理数：

$$
\sqrt{2} \cdot \sqrt{2} = 2, \qquad \sqrt{2} \cdot \sqrt{8} = 4
$$

有理数与无理数之间的混合运算有确定的结果。若 $q \in \mathbb{Q}$ 且 $\xi \in \mathbb{I}$，则 $q + \xi \in \mathbb{I}$；若 $q \neq 0$，则 $q \cdot \xi \in \mathbb{I}$。无论哪种情况，有理的结果都将迫使 $\xi$ 为有理数，与假设矛盾。

因此，$(\mathbb{I}, +)$ 不是[群](../groups/)，因为其对加法不封闭；$\mathbb{I}$ 在从 $\mathbb{R}$ 继承的运算下不是[环](../rings/)。$\mathbb{R}$ 与 $\mathbb{Q}$ 都是域，而 $\mathbb{I}$ 不是域。

## 几何起源

无理数的发现传统上归功于毕达哥拉斯学派，与单位正方形的对角线相关。由[毕达哥拉斯定理](../pythagorean-theorem/)，边长为 $1$ 的正方形其对角线长度 $d$ 满足：

$$
d^2 = 1^2 + 1^2 = 2
$$

因此对角线的长度为 $d = \sqrt{2}$，上面的证明表明该量是无理数。同样的构造应用于正五边形得到黄金分割比 $\varphi$，而圆周求长产生 $\pi$。

这些例子表明，有理数尽管稠密，却不能度量初等几何图形产生的所有长度。完备化 $\mathbb{R}$ 包含了缺失的无理长度。
