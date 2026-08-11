---
title: 基数与可数集
title_en: Cardinality and Countable Sets
source: https://algebrica.org/cardinality-and-countable-sets/
license: CC BY-NC 4.0
tags:
  - aleph-numbers
  - cantor-bernstein-theorem
  - cantors-theorem
  - cardinality
  - continuum-hypothesis
  - countable-sets
  - diagonal-argument
  - equipotence
  - power-set
  - transcendental-numbers
  - uncountable-sets
translation:
  status: current
  source_hash: d9849e76baf4032f7fe38652b9769e3357865900d893f06dcbb48360703a6ef1
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---

## 介绍

集合的基数是在忽略顺序、运算和其他结构后所得到的大小。对于有限集，基数就是元素的个数。当两个集合的元素能够建立一一对应时，它们具有相同的基数。对于有限集，这一定义与通常的计数一致；对于无限集，它比较集合的大小，而不赋予它们一个有限的计数。

可数集要么具有有限枚举，要么具有以自然数为索引的枚举。[整数](../integers/)和[有理数](../rational-numbers/)都是可数的，尽管前者把自然数作为真子集包含其中，而后者在实数轴上稠密。当没有任何枚举能够包含集合的全部元素时，该集合是不可数的。[实数](../real-numbers/)不可数，因此无限集可以具有不同的基数。

## 等势集

对有限集合计数，意味着把它的元素依次与 $1,2,\ldots,n$ 配对，直到集合中的元素全部用尽。当且仅当两边的元素都能配对且没有剩余时，两个有限集合的元素个数相同。这样的配对是一个[双射](../injective-surjective-and-bijective-functions/)，而这个定义同样适用于有限集和无限集。

当存在双射 $f\colon A\to B$ 时，称集合 $A$ 与 $B$ 等势。此时记作 $A\sim B$，并称 $A$ 与 $B$ 具有相同的基数。关系 $\sim$ 具有等价关系的三个形式性质。$A$ 上的恒等映射给出 $A\sim A$。如果 $f\colon A\to B$ 是双射，那么它的[逆函数](../inverse-function/)是从 $B$ 到 $A$ 的双射，因此 $A\sim B$ 蕴含 $B\sim A$。如果 $f\colon A\to B$ 和 $g\colon B\to C$ 是双射，那么[复合函数](../composite-functions/) $g\circ f$ 是从 $A$ 到 $C$ 的双射，因此 $A\sim B$ 且 $B\sim C$ 蕴含 $A\sim C$。

> 所有集合的总体本身不是一个集合，因此在通常意义下，$\sim$ 不是定义在某个集合上的等价关系。公理化集合论把它看作类的成员之间的关系。每个集合都有一个基数，即它的基数；当且仅当两个集合等势时，它们具有相同的基数。

- - -

对于有限集，这就是[集合](../sets/)词条中介绍的初等计数：当且仅当 $|A|=|B|$ 时，两个集合含有相同数量的元素。对于无限集，基数由双射的存在性定义，而不是由有限计数定义。

在本文中，$\mathbb{N}=\{0,1,2,3,\ldots\}$ 表示按照本站约定定义的[自然数](../natural-numbers/)，并且对 $n\geq1$，用符号 $I_n$ 表示初始段：

$$
I_n=\{\ k\in\mathbb{N}\mid 1\leq k\leq n \ \}
$$

空初始段为 $I_0=\emptyset$。

## 有限集与可数集

当 $A\sim I_n$ 时，称集合 $A$ 是基数为 $n$ 的有限集；当 $A\sim\mathbb{N}$ 时，称它是可数无限集。当以下两种情形之一成立时，集合是可数的；两种情形都不成立时，集合是不可数的。这两种情形彼此互斥，因为 $\mathbb{N}$ 与 $I_n$ 之间的双射会限制为从 $I_{n+1}$ 到 $I_n$ 的单射，而这被抽屉原理所禁止。

> 有些文献把“可数”一词保留给可数无限情形，而用“至多可数”表示这两种情形的析取。本文采用的约定把有限集也称为可数集，因此可数集就是其元素能够按第一个、第二个、第三个等位置列出的集合，列表可以是有限的，也可以是无穷的。

- - -

双射 $f\colon\mathbb{N}\to A$ 是 $A$ 的一个枚举。令 $a_n=f(n)$，列表具有如下形式：

$$
A=\{a_0,a_1,a_2,a_3,\ldots\}
$$

单射性意味着列表中的各项两两不同，满射性意味着 $A$ 的每个元素都占据某个位置。因此，可数无限集就是这样一种集合：其元素可以无重复地排列成一个无限[数列](../sequences/)。映射 $n\mapsto n+1$ 是从 $\mathbb{N}$ 到 $\mathbb{N}\setminus\{0\}$ 的双射，所以在索引更方便时，枚举也可以用正整数 $a_1,a_2,a_3,\ldots$ 编号。

[整数](../integers/)构成一个可数无限集。定义 $f\colon\mathbb{N}\to\mathbb{Z}$：

$$
f(n)=
\begin{cases}
\dfrac{n}{2} & n\in2\mathbb{N} \\[6pt]
-\dfrac{n+1}{2} & n\in2\mathbb{N}+1
\end{cases}
$$

偶数自变量对应的值为 $0,1,2,3,\ldots$，奇数自变量对应的值为 $-1,-2,-3,\ldots$。这两个族彼此不交，它们的并集是 $\mathbb{Z}$。在每个族中，该映射都是严格单调的，因而是单射。这个枚举为：

$$
\mathbb{Z}=\{0,-1,1,-2,2,-3,3,\ldots\}
$$

- - -

偶自然数集合 $E=\{\ 2n\mid n\in\mathbb{N} \ \}$ 是可数无限集，因为 $n\mapsto2n$ 是从 $\mathbb{N}$ 到 $E$ 的双射。集合 $E$ 是 $\mathbb{N}$ 的真子集，却具有相同的基数。有限集不可能出现这种情况，因为有限集的真子集元素更少。伽利略在 1638 年出版的《两门新科学的对话》中考察了自然数与其平方数之间的类似配对。后来戴德金把与某个真子集等势的集合称为无限集。现在这种集合称为戴德金无限集，在 ZFC 中，这个条件等价于无限性。

## 自然数的无限子集

每个无限子集 $A\subseteq\mathbb{N}$ 都是可数无限集。证明通过反复提取剩余元素中的最小者来构造 $A$ 的一个枚举，所依据的是 $\mathbb{N}$ 的[良序](../natural-numbers/)性质。令 $f(0)$ 为 $A$ 的最小元素；它存在是因为 $A$ 非空。定义了 $f(0),\ldots,f(n)$ 后，令：

$$
f(n+1)=\min\ \bigl(A\setminus\{f(0),\ldots,f(n)\}\bigr)
$$

右侧的集合非空，因为有限多个已选元素不可能耗尽 $A$。因此每一步都存在最小值，并且递归在整个 $\mathbb{N}$ 上定义了 $f$。每个新取的值都大于此前取出的所有值。因此：

$$
f(0)<f(1)<f(2)<\cdots
$$

严格递增的映射是单射，并且由这个链上的归纳法可得，对每个 $n$ 都有 $f(n)\geq n$。为证明满射性，取定 $a\in A$。不等式 $f(a)\geq a$ 表明满足 $f(n)\geq a$ 的指标 $n$ 的集合非空，因此它具有最小元素 $m$。如果 $f(m)>a$，那么由 $m$ 的最小性可知对每个 $k<m$ 都有 $f(k)<a$；于是对这些指标有 $a\neq f(k)$，从而 $a$ 属于 $A\setminus\{f(0),\ldots,f(m-1)\}$。由于 $f(m)$ 是这个集合的最小元素，便有 $f(m)\leq a$，这与 $f(m)>a$ 矛盾。因此 $f(m)=a$，且 $f$ 是从 $\mathbb{N}$ 到 $A$ 的双射。

可数集的子集是可数的。设 $B$ 可数且 $A\subseteq B$。当 $A$ 为空或 $B$ 有限时，结论立即成立。如果 $B$ 是可数无限集且 $A$ 非空，取一个双射 $h\colon B\to\mathbb{N}$。像 $h(A)$ 是 $\mathbb{N}$ 的非空子集，因此它是有限的或可数无限的。限制映射 $h|_A\colon A\to h(A)$ 是双射，所以 $A$ 可数。

## 可数性的判据

对于非空集合 $A$，可数性等价于以下两个单向条件中的任意一个。下列陈述彼此等价：

+ $A$ 是可数集。
+ 存在满射 $f\colon\mathbb{N}\to A$。
+ 存在单射 $g\colon A\to\mathbb{N}$。

假设第一个条件成立。如果 $A$ 是可数无限集，那么 $A$ 的一个枚举本身就是第二个条件所要求的满射。如果 $A$ 是基数为 $n\geq1$ 的有限集，取一个双射 $h\colon A\to I_n$，并定义 $s\colon\mathbb{N}\to I_n$：当 $1\leq k\leq n$ 时 $s(k)=k$，其他所有 $k$ 都令 $s(k)=n$。映射 $s$ 是满射，因此 $f=h^{-1}\circ s$ 是从 $\mathbb{N}$ 到 $A$ 的满射。

假设第二个条件成立。由满射性，对每个 $a\in A$，纤维 $f^{-1}(\{a\})$ 非空。作为 $\mathbb{N}$ 的子集，它具有最小元素。令 $g(a)=\min f^{-1}(\{a\})$。不同元素对应的纤维彼此不交，因此它们的最小元素不同，$g$ 是单射。

假设第三个条件成立。像 $g(A)$ 是 $\mathbb{N}$ 的非空子集，因此根据上一节它是可数的。映射 $g\colon A\to g(A)$ 是双射，所以 $A$ 可数。

> 用任意可数无限集 $C$ 替换 $\mathbb{N}$ 后，该陈述仍然成立。如果 $b\colon C\to\mathbb{N}$ 是双射，那么当 $f\colon\mathbb{N}\to A$ 是满射时，$f\circ b\colon C\to A$ 是满射。如果 $g\colon A\to\mathbb{N}$ 是单射，那么 $b^{-1}\circ g\colon A\to C$ 是单射。

- - -

第二个条件允许重复，因此即使列表中某些元素出现多次，也仍然能证明集合可数。第三个条件要求把集合单射编码到自然数中，但不要求每个自然数都被使用。

## 可数集的积与并

笛卡尔积 $\mathbb{N}\times\mathbb{N}$ 是可数无限集。按照坐标之和对这些有序对分组。对每个 $s\in\mathbb{N}$，恰有 $s+1$ 个有序对 $(j,k)$ 满足 $j+k=s$。每组都是有限的，每个有序对都属于某一组，并且这些组可以按 $s$ 递增的顺序列出：

$$
\mathbb{N}\times\mathbb{N}=\{(0,0),\ (1,0),\ (0,1),\ (2,0),\ (1,1),\ (0,2),\ (3,0),\ldots\}
$$

和小于 $s$ 的各组共包含 $1+2+\cdots+s$ 个有序对。在和为 $s$ 的一组中，有序对 $(j,k)$ 的从零开始的位置是 $k$。代入 $s=j+k$ 得到映射：

$$
\pi(j,k)=\frac{(j+k)(j+k+1)}{2}+k
$$

最初的几个值为 $\pi(0,0)=0$、$\pi(1,0)=1$、$\pi(0,1)=2$、$\pi(2,0)=3$、$\pi(1,1)=4$ 以及 $\pi(0,2)=5$。映射 $\pi$ 是从 $\mathbb{N}\times\mathbb{N}$ 到 $\mathbb{N}$ 的双射，称为康托尔配对函数。

等势性与积相容。设 $A\sim C$ 且 $B\sim D$，相应的双射为 $f\colon A\to C$ 和 $g\colon B\to D$。定义积映射：

$$
h\colon A\times B\to C\times D,\qquad h(a,b)=(f(a),g(b))
$$

映射 $h$ 是双射。因为 $h(a,b)=h(a',b')$ 会迫使 $f(a)=f(a')$ 且 $g(b)=g(b')$，从而 $a=a'$ 且 $b=b'$，所以 h 是单射。因为任意 $(c,d)\in C\times D$ 都是 $(f^{-1}(c),g^{-1}(d))$ 的像，所以 h 是满射。结合前面的结果可得 $\mathbb{Z}\times\mathbb{Z}\sim\mathbb{N}\times\mathbb{N}\sim\mathbb{N}$；再对因子的数量使用[归纳法](../principle-of-mathematical-induction/)，可得对每个 $k\geq1$ 都有 $\mathbb{N}^k\sim\mathbb{N}$。更一般地，有限个可数集的积是可数的，因为每个因子都能单射到 $\mathbb{N}$，由此得到的映射再单射到 $\mathbb{N}^k$。

- - -

可数个可数集的并是可数的。设 $(A_i)_{i\in\mathbb{N}}$ 是可数集组成的族，这些集合不必彼此不交。如果它们的并为空，结论立即成立。否则，从并集中取一个 $a$，并用 $\{a\}$ 替换每个空的 $A_i$。这不会改变并集，并且现在族中的所有集合都非空。对每个 $i$ 取一个满射 $f_i\colon\mathbb{N}\to A_i$，并定义：

$$
F\colon\mathbb{N}\times\mathbb{N}\to\bigcup_{i\in\mathbb{N}}A_i,\qquad F(i,j)=f_i(j)
$$

给定并集中的 $x$，存在某个指标 $i$ 使得 $x\in A_i$。由于 $f_i$ 是满射，存在某个 $j$ 使得 $x=f_i(j)=F(i,j)$。因此 $F$ 是满射。它与配对函数的逆函数复合后，是从 $\mathbb{N}$ 到该并集的满射，所以该并集可数。

> 同时选取映射 $f_i$ 使用了可数选择公理。如果某个规则规定了所有这些映射，则不需要任何选择原理。

[有理数](../rational-numbers/)是可数无限集。每个有理数都是一个整数除以正整数所得的商。考虑映射：

$$
q\colon\mathbb{Z}\times(\mathbb{N}\setminus\{0\})\to\mathbb{Q},\qquad q(p,n)=\frac{p}{n}
$$

映射 $q$ 是满射但不是单射，因为 $2/4$ 和 $1/2$ 的像相同。它的定义域是可数无限集，因此满射判据证明了 $\mathbb{Q}$ 可数。由于 $\mathbb{Q}$ 包含 $\mathbb{Z}$，它是可数无限集。[有理数](../rational-numbers/)词条通过遍历分数表并舍弃不处于最简形式的分数，证明了同一个结论。

## 实数的不可数性

证明 $\mathbb{R}$ 没有枚举要用到小数展开。有些[实数](../real-numbers/)具有两种这样的展开。例如，下面的等式是精确的：

$$
0.999\ldots=1
$$

[等比级数](../geometric-series/)的计算为：

$$
0.999\ldots=\sum_{n=1}^{\infty}\frac{9}{10^n}=\frac{9/10}{1-1/10}=1
$$

每个具有有限小数展开的数都有这种重复表示，例如 $0.42=0.41999\ldots$，而其他实数只有一种小数展开。为得到唯一的数字串，保留不以最终全为 $0$ 结尾的展开。因此保留 $0.41999\ldots$，舍弃 $0.42$。按照这一约定，每个 $x\in(0,1]$ 都恰有一种展开：

$$
x=0.a_1a_2a_3\ldots,\qquad a_n\in\{0,1,\ldots,9\}
$$

这个展开中的数字不会最终全为 $0$。反过来，每个这样的数字串都是恰好一个 $x\in(0,1]$ 的保留展开。

区间 $(0,1]$ 是不可数的。假设它可数。由于它是无限的，它必然是可数无限的，于是其元素可以枚举为 $x_1,x_2,x_3,\ldots$，并把每一项的数字排列成一个无限数组：

$$
\begin{align}
x_1&=0.a_{11}a_{12}a_{13}a_{14}\ldots \\[6pt]
x_2&=0.a_{21}a_{22}a_{23}a_{24}\ldots \\[6pt]
x_3&=0.a_{31}a_{32}a_{33}a_{34}\ldots \\[6pt]
x_4&=0.a_{41}a_{42}a_{43}a_{44}\ldots
\end{align}
$$

对角线元素 $a_{11},a_{22},a_{33},\ldots$ 确定了一个不在数组中的数。定义数字 $d_n$：

$$
d_n=
\begin{cases}
6 & a_{nn}=5 \\[6pt]
5 & a_{nn}\neq5
\end{cases}
$$

令 $y$ 的展开为 $0.d_1d_2d_3\ldots$。$y$ 的每个数字都属于 $\{5,6\}$，因此该字符串不会最终全为 $0$，它是某个 $y\in(0,1]$ 的保留展开。对每个 $n$，不等式 $d_n\neq a_{nn}$ 表明 $y$ 与 $x_n$ 的第 $n$ 个数字不同。保留展开是唯一的，所以对每个 $n$ 都有 $y\neq x_n$。因而 $y$ 不在该枚举中，这与满射性矛盾。

数字 $5$ 和 $6$ 确保构造出的展开是保留展开。如果允许修改后的数字以零结尾，那么显示出的展开可能会被舍弃而换成另一个展开，此时逐位比较它与各个 $x_n$ 的保留展开就不再有效。

> 假设枚举的前四项分别以 $0.1203\ldots$、$0.1557\ldots$、$0.2460\ldots$ 和 $0.3141\ldots$ 开始。对角线数字是 $1$、$5$、$6$ 和 $1$，因此构造出的数以 $0.5655\ldots$ 开始。它在相应的对角线位置上分别与这四项不同。

- - -

实数不可数，因为可数集的每个子集都是可数的。康托尔于 1874 年发表的第一个证明使用了区间套，而不是数字。[实数](../real-numbers/)词条从完备性出发给出了该证明。他的对角线构造发表于 1891 年。

展开的约定可以在任意底数 $r\geq2$ 下实施，数字取自 $\{0,1,\ldots,r-1\}$。下面使用底数 $2$ 的情形，此时 $(0,1]$ 对应于不会最终全为 $0$ 的二进制字符串。

## 自然数的幂集

二进制数字序列可以看作对一个子集的描述。令 $\{0,1\}^{\mathbb{N}}$ 表示所有映射 $\varphi\colon\mathbb{N}\to\{0,1\}$ 组成的集合。子集 $A\subseteq\mathbb{N}$ 决定其示性函数：

$$
\chi_A(n)=
\begin{cases}
1 & n\in A \\[6pt]
0 & n\notin A
\end{cases}
$$

映射 $\varphi\colon\mathbb{N}\to\{0,1\}$ 决定子集 $\varphi^{-1}(\{1\})$。这两个构造互为逆构造，因此 $\mathbb{N}$ 的[幂集](../sets/)与二进制序列集合等势：

$$
\mathcal{P}(\mathbb{N})\sim\{0,1\}^{\mathbb{N}}
$$

由对角线论证可知，$\{0,1\}^{\mathbb{N}}$ 不可数，并且这个论证不再需要关于表示的任何约定。假设二进制序列可以枚举为 $\varphi_1,\varphi_2,\varphi_3,\ldots$，并定义 $\psi(n)=1-\varphi_n(n)$。$\psi$ 的值属于 $\{0,1\}$，所以 $\psi$ 是一个二进制序列；而 $\psi(n)\neq\varphi_n(n)$ 表明 $\psi$ 在自变量 $n$ 处与 $\varphi_n$ 不同。因此 $\psi$ 不会出现在枚举中的任何位置。二进制序列集合没有枚举，$\mathcal{P}(\mathbb{N})$ 也不可数。

如果 $\varphi_n$ 是 $A_n\subseteq\mathbb{N}$ 的示性函数，那么 $\psi$ 是集合 $\{\ n\in\mathbb{N}\mid n\notin A_n\ \}$ 的示性函数。

## 康托尔定理

没有集合与它的幂集等势。对于任意集合 $A$，映射 $x\mapsto\{x\}$ 是从 $A$ 到 $\mathcal{P}(A)$ 的单射，因此 $|A|\leq|\mathcal{P}(A)|$。康托尔定理断言，不存在满射 $f\colon A\to\mathcal{P}(A)$，所以这个不等式是严格的。

令 $f\colon A\to\mathcal{P}(A)$ 为任意映射，因此对每个 $x\in A$，$f(x)$ 都是 $A$ 的一个子集。考虑不属于分配给自己的子集的元素组成的集合：

$$
D=\{\ x\in A\mid x\notin f(x) \ \}
$$

于是 $D$ 是 $A$ 的子集，因而是 $\mathcal{P}(A)$ 的元素，并且 $D$ 不在 $f$ 的像中。假设对某个 $z\in A$ 有 $D=f(z)$。如果 $z\in D$，那么 $D$ 的定义条件给出 $z\notin f(z)=D$，矛盾。如果 $z\notin D$，那么 $z\notin f(z)$，而这正是 $D$ 的定义条件，于是得到 $z\in D$，再次矛盾。两种情形都不成立，因此不存在这样的 $z$，$f$ 不是满射。特别地，$f$ 不是双射，不可能有 $A\sim\mathcal{P}(A)$。

当 $A=\mathbb{N}$ 时，该定理给出了 $\mathcal{P}(\mathbb{N})$ 不可数的另一个证明。反复进行幂集构造得到链：

$$
A,\quad \mathcal{P}(A),\quad \mathcal{P}(\mathcal{P}(A)),\quad \ldots
$$

每一项的基数都大于前一项，因此不存在最大的无限基数。一般地，$2^{|A|}$ 表示 $|\mathcal{P}(A)|$，这是把有限集 $|A|=n$ 时的恒等式 $|\mathcal{P}(A)|=2^n$ 推广到一般情形。由于 $|\mathbb{N}|=\aleph_0$，有：

$$
|\mathcal{P}(\mathbb{N})|=2^{\aleph_0}
$$

康托尔定理给出 $\aleph_0<2^{\aleph_0}$。

> 对角线集合 $D$ 使用了与罗素悖论相同的构造方法：所有不属于自身的集合组成的总体会导致矛盾。在康托尔定理中，这种构造是无害的，因为 $D$ 是从预先给定的集合 $A$ 中提取的，结论针对的是 $f$，而不是一个不一致性。

## 基数比较与康托尔–伯恩斯坦定理

通过单射比较基数。当存在从 $A$ 到 $B$ 的单射时，记作 $|A|\leq|B|$。由于恒等映射是单射，这个关系具有自反性；由于单射的复合仍是单射，它具有传递性。它的反对称性就是康托尔–伯恩斯坦定理。

康托尔–伯恩斯坦定理断言：单射 $f\colon A\to B$ 与 $g\colon B\to A$ 共同蕴含 $A\sim B$。康托尔于 1887 年陈述了该定理但没有给出证明；戴德金在同年一篇未发表的笔记中证明了它；伯恩斯坦于 1897 年参加康托尔的研讨会时找到了后来成为标准的论证。

这个证明通过把两个单射合并为一个双射来实现：对 $A$ 中的每个元素，决定使用 $f$ 还是使用 $g$ 的逆函数。令 $A_0=A\setminus g(B)$ 表示 $g$ 的像之外的元素组成的集合，并定义：

$$
C=\bigcup_{n\geq0}(g\circ f)^n(A_0)
$$

集合 $C$ 由从 $A_0$ 出发反复迭代 $g\circ f$ 所得到的元素组成，其中 $n=0$ 时得到的就是 $A_0$ 本身。定义：

$$
h(a)=
\begin{cases}
f(a) & a\in C \\[6pt]
g^{-1}(a) & a\notin C
\end{cases}
$$

第二行是有意义的，因为 $a\notin C$ 蕴含 $a\notin A_0$，所以存在唯一的 $b\in B$ 使 $a=g(b)$。为说明 $h$ 是单射，注意两个分支都是单射且它们的像不相交。当 $a\in C$ 时，$f(a)$ 不可能等于某个 $a'\notin C$ 对应的 $g^{-1}(a')$，因为那会得到 $a'=g(f(a))$，从而使 $a'$ 属于 $C$。为说明 $h$ 是满射，取 $b\in B$。如果 $g(b)\notin C$，则 $h(g(b))=b$。如果 $g(b)\in C$，那么对某个 $n\geq1$ 有 $g(b)\in(g\circ f)^n(A_0)$，因为 $g(b)\notin A_0$，所以对某个 $a\in(g\circ f)^{n-1}(A_0)\subseteq C$ 有 $g(b)=g(f(a))$；由 $g$ 的单射性可得 $b=f(a)=h(a)$。因此 $h$ 是双射。

该定理把许多基数比较归结为构造两个单射。包含关系 $(0,1)\subseteq(0,1]$ 是单射，而 $x\mapsto x/2$ 是反方向的单射。因此 $(0,1)\sim(0,1]$。[正切函数](../tangent-function/) $x\mapsto\tan(\pi x-\pi/2)$ 是从 $(0,1)$ 到 $\mathbb{R}$ 的双射，因此 $(0,1)$、$(0,1]$ 与 $\mathbb{R}$ 等势。特别地，每个非退化[区间](../intervals/)都是不可数的。

- - -

记 $\mathfrak{c}=|\mathbb{R}|$。为比较 $\mathfrak{c}$ 与 $2^{\aleph_0}$，把每个 $A\subseteq\mathbb{N}$ 映射到这样的实数：它的小数点后第 $(n+1)$ 位为 $1$（当 $n\in A$ 时），否则为 $0$。不同的子集具有不同的像，因为只含 0 和 1 的小数串不可能互为另一种展开。这给出了从 $\mathcal{P}(\mathbb{N})$ 到 $\mathbb{R}$ 的单射。反过来，保留的二进制展开给出了从 $(0,1]$ 到 $\{0,1\}^{\mathbb{N}}\sim\mathcal{P}(\mathbb{N})$ 的单射，而 $(0,1]\sim\mathbb{R}$。康托尔–伯恩斯坦定理给出：

$$
\mathcal{P}(\mathbb{N})\sim\mathbb{R}
$$

因此 $\mathfrak{c}=2^{\aleph_0}$。[无理数](../irrational-numbers/)也具有基数 $\mathfrak{c}$。为证明包含关系 $\mathbb{R}\setminus\mathbb{Q}\subseteq\mathbb{R}$ 的反向关系，枚举有理数 $\mathbb{Q}=\{q_0,q_1,q_2,\ldots\}$，并令 $r_n=\sqrt{2}+n$。各个 $r_n$ 是彼此不同的无理数。定义 $J\colon\mathbb{R}\to\mathbb{R}\setminus\mathbb{Q}$：

$$
J(x)=
\begin{cases}
r_{2n} & x=q_n \\[6pt]
r_{2n+1} & x=r_n \\[6pt]
x & x\notin\mathbb{Q}\cup\{r_n\mid n\in\mathbb{N}\}
\end{cases}
$$

三个分支的像彼此不交，并且每个分支都是单射。因此 $J$ 是单射，康托尔–伯恩斯坦定理给出 $\mathbb{R}\setminus\mathbb{Q}\sim\mathbb{R}$。

> 在康托尔–伯恩斯坦定理之后，基数之间的关系 $\leq$ 是一个偏序，并且该定理不需要任何选择原理。更强的陈述是任意两个基数都可比较，即总有 $|A|\leq|B|$ 或 $|B|\leq|A|$，它等价于选择公理。

## 基数与维数

单位正方形与单位区间等势，因此基数无法检测维数。通过交错保留的小数展开，定义从 $(0,1)\times(0,1)$ 到 $(0,1)$ 的映射。对于 $0.a_1a_2a_3\ldots$ 与 $0.b_1b_2b_3\ldots$，该映射为：

$$
(0.a_1a_2a_3\ldots,\ 0.b_1b_2b_3\ldots)\longmapsto 0.a_1b_1a_2b_2a_3b_3\ldots
$$

奇数位置的数字可以恢复第一个自变量，偶数位置的数字可以恢复第二个自变量，因此该映射是单射。它不是满射。展开为 $0.505050\ldots$ 的数要求第二个坐标的所有数字都等于 $0$，但这样的数不属于 $(0,1)$。反方向上，$x\mapsto(x,1/2)$ 是单射。康托尔–伯恩斯坦定理给出：

$$
(0,1)\times(0,1)\sim(0,1)
$$

由于 $(0,1)\sim\mathbb{R}$，所以 $\mathbb{R}^2\sim\mathbb{R}$。由归纳法，对每个 $n\geq1$ 都有 $\mathbb{R}^n\sim\mathbb{R}$，或者用基数记号写成 $\mathfrak{c}^n=\mathfrak{c}$。可数多个因子也具有相同的基数，因为：

$$
\mathfrak{c}^{\aleph_0}=(2^{\aleph_0})^{\aleph_0}=2^{\aleph_0\cdot\aleph_0}=2^{\aleph_0}=\mathfrak{c}
$$

因此实数序列集合 $\mathbb{R}^{\mathbb{N}}$ 与 $\mathbb{R}$ 等势。

康托尔于 1877 年得到正方形与线段等势的结果，并在给戴德金的报告中说，他虽然看到了这个结果，却无法相信它。这个结果并不违背直线与平面的几何区别，因为该双射是不连续的。不存在一个双向连续的双射 $\mathbb{R}^2\to\mathbb{R}$；布劳威尔于 1911 年在关于维数不变性的工作中证明了这一事实。基数计算点的数量而忽略它们的排列方式，而维数取决于[拓扑](../topology-of-the-real-line/)。

## 连续统假设

康托尔曾问，是否存在严格介于 $\aleph_0$ 与 $\mathfrak{c}$ 之间的基数。连续统假设断言不存在这样的基数。如果 $\aleph_1$ 表示最小的不可数基数，那么该假设就是下面的等式：

$$
2^{\aleph_0}=\aleph_1
$$

带选择公理的策梅洛–弗兰克尔集合论公理，简称 ZFC，无法决定连续统假设。假设 ZFC 一致，哥德尔的可构造宇宙证明了 ZFC 与连续统假设合在一起是一致的。科恩的强迫法证明了 ZFC 与连续统假设的否定合在一起也具有一致性。哥德尔于 1938 年得到第一个结果，科恩于 1963 年得到第二个结果。广义连续统假设具有同样的相对独立性，它断言对每个序数 $\alpha$ 都有 $2^{\aleph_\alpha}=\aleph_{\alpha+1}$。

## 在数集与函数中的应用

正如康托尔于 1874 年所证明的，代数数是可数的。当一个实数是一个具有整数系数的非零[多项式](../polynomials/)的根时，称它为代数数。固定 $n,H\in\mathbb{N}$。次数至多为 $n$ 且满足 $|c_i|\leq H$ 的系数的多项式只有有限多个，并且每个非零多项式至多有 $n$ 个实根。每个代数数都属于某个二元组 $(n,H)$ 对应的有限根集。由于 $\mathbb{N}\times\mathbb{N}$ 可数，代数数是有限集的可数并，因而可数。它在 $\mathbb{R}$ 中的补集，即[超越数](../irrational-numbers/)，是不可数的。

- - -

自然数有限序列的集合为 $\bigcup_{k\geq0}\mathbb{N}^k$，其中 $\mathbb{N}^0$ 包含空序列。每个 $\mathbb{N}^k$ 都可数，因此它们的并可数。$\mathbb{N}$ 的有限子集也可数，因为每个有限子集都由其元素组成的递增序列确定。因此，$\mathbb{N}$ 的无限子集组成的集合是不可数的。否则，它与有限子集的集合会构成 $\mathcal{P}(\mathbb{N})$ 的一个可数划分，这与康托尔定理矛盾。

- - -

从 $\mathbb{R}$ 到 $\mathbb{R}$ 的[连续函数](../continuous-functions/)具有基数 $\mathfrak{c}$。一个连续函数由它在 $\mathbb{Q}$ 上的限制决定，因为在稠密集上相等的两个连续函数处处相等。限制映射把连续函数单射到所有从 $\mathbb{Q}\to\mathbb{R}$ 的映射组成的集合中，而该集合的基数为 $\mathfrak{c}^{\aleph_0}=\mathfrak{c}$。常值函数给出了从 $\mathbb{R}$ 到连续函数集合的单射。康托尔–伯恩斯坦定理证明连续函数的基数是 $\mathfrak{c}$。

所有从 $\mathbb{R}$ 到 $\mathbb{R}$ 的函数组成的集合，其基数为：

$$
\mathfrak{c}^{\mathfrak{c}}=(2^{\aleph_0})^{\mathfrak{c}}=2^{\aleph_0\cdot\mathfrak{c}}=2^{\mathfrak{c}}
$$

康托尔定理给出 $\mathfrak{c}<2^{\mathfrak{c}}$，因此所有函数组成的集合的基数大于连续函数组成的集合。
