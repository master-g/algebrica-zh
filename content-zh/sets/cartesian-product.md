---
title: 笛卡尔积
title_en: Cartesian Product
source: https://algebrica.org/cartesian-product/
license: CC BY-NC 4.0
tags:
  - axiom-of-choice
  - bijection
  - cardinality
  - cartesian-product
  - indexed-product
  - n-tuple
  - ordered-pair
  - set-operations
translation:
  status: current
  source_hash: 2a7d503da7690770869bc15b3ef87bed9fc616f0893fc5b12a8240c0e43fb9db
  translator: claude
  updated: "2026-10-08T00:00:00.000Z"
---

## 定义

简单地说，笛卡尔积是由两个集合能够构成的所有有序对组成的集合。每个有序对有两个分量，第一个属于第一个集合，第二个属于第二个集合。形式上，两个[集合](../sets/) $A$ 和 $B$ 的笛卡尔积由下面的恒等式给出：

$$
A \times B = \{\ (a,b) \mid a \in A,\ b \in B \ \} \tag{1}
$$

按照约定，$(1)$ 中的符号 $\times$ 表示集合上的这一构造，而不是集合元素之间的代数乘法。两个有序对相等，是指它们在相同位置上的分量取相同的值，即：

$$
(a,b)=(c,d) \iff a=c \land b=d \tag{2}
$$

为了说明一个重要的区别，假设有集合 $A=\{2,5\}$ 和集合 $B=\{5,2\}$。根据集合的性质，$A$ 与 $B$ 相等，因为它们含有相同的元素，而与次序无关。但对有序对而言，次序是有意义的。如果由 $A$ 和 $B$ 构成有序对 $(2,5)$ 和 $(5,2)$，它们是不同的，因为分量的次序相反。

为了说明 $(1)$ 中的构造，考虑两个集合 $A=\{2,5,8\}$ 和 $B=\{u,v\}$，把它们的元素分别排成列标题和行标题。在每个交叉处，填入由相应的列项和行项构成的有序对，得到：

$$ \tag{3}
\begin{array}{c|ccc}
B\backslash A & 2 & 5 & 8 \\[6pt]
\hline
u & (2,u) & (5,u) & (8,u) \\[6pt]
v & (2,v) & (5,v) & (8,v)
\end{array}
$$

这样就构造出了笛卡尔积 $A \times B$，其中 $A$ 的每个元素都与 $B$ 的两个元素分别配对。因此表内的单元格列出了积中全部六个可能的有序对。我们还可以用这张表计算有限集合之积的[基数](../cardinality-and-countable-sets/)。一般地，如果 $A$ 有 $m$ 个元素，$B$ 有 $n$ 个元素，那么可能的有序对总数为 $m \times n$，即：

$$
|A \times B|=|A|\cdot|B| \tag{4}
$$

事实上，在表中所示的例子里，积恰好含有 $3\cdot 2=6$ 个元素。因此公式 $(4)$ 给出了笛卡尔积的基数。如果两个集合中有一个为空，就无法构成任何有序对；反之，如果两个集合都至少含有一个元素，那么取 $a\in A$ 和 $b\in B$ 就得到 $(a,b)\in A\times B$。于是：

$$
A\times B=\emptyset
\iff
\begin{cases}
A=\emptyset & \lor \\[6pt]
B=\emptyset
\end{cases}
$$

公式 $(4)$ 在这种情形下仍然成立，因为两个数值因子中至少有一个为零，所以积的基数为零。

- - -

对于分量是集合而不是数值的有序对，我们现在指出一个重要的区别。必须记住，含有空集的集合并不是空集。例如，$\{q\}$ 的[幂集](../sets/)，即它的所有子集（包括空集）构成的集合，是 $\mathcal{P}(\{q\})=\{\emptyset,\{q\}\}$。它与一个单元素集（恰有一个元素的集合）例如 $\{3\}$ 的笛卡尔积为：

$$
\mathcal{P}(\{q\})\times\{3\}
=\{(\emptyset,3),(\{q\},3)\}
$$

因此这个积不是空集，而是含有两个元素。

- - -

当 $(1)$ 中的两个因子都是 $\mathbb{R}$ 的子集时，积 $A \times B$ 中的有序对就是[笛卡尔平面](../the-cartesian-coordinate-plane/)上的点。取 $\mathbb{R}$ 与自身的积，就得到整个平面：

$$
\mathbb{R}^2=\mathbb{R}\times\mathbb{R}
=\{\ (x,y)\mid x\in\mathbb{R},\ y\in\mathbb{R}\ \}
$$

例如，[区间](../intervals/) $[-2,1]$ 与 $[0,3]$ 的积是：

$$
[-2,1]\times[0,3]
=\{\ (x,y)\in\mathbb{R}^2\mid -2\leq x\leq 1,\ 0\leq y\leq 3\ \}
$$

因此这个积是以 $(-2,0)$、$(1,0)$、$(1,3)$ 和 $(-2,3)$ 为顶点的矩形，包括它的边界和内部。

## 因子的次序

现在回到前面用过的集合 $A=\{2,5,8\}$ 和 $B=\{u,v\}$，考察因子的次序如何影响笛卡尔积。交换因子并构造 $B\times A$，得到的排列与表 $(3)$ 不同，行与列互换了：

$$ \tag{5}
\begin{array}{c|cc}
A\backslash B & u & v \\[6pt]
\hline
2 & (u,2) & (v,2) \\[6pt]
5 & (u,5) & (v,5) \\[6pt]
8 & (u,8) & (v,8)
\end{array}
$$

可以看到，表 $(5)$ 与表 $(3)$ 含有同样多的有序对，但这些有序对是不同的。例如，有序对 $(u,2)$ 只属于 $B \times A$ 而不属于 $A\times B$，因为它的第一个分量 $u$ 不属于 $A$。因此笛卡尔积不是可交换的运算，我们有：

$$A\times B\neq B\times A$$

通过交换分量，可以把 $A\times B$ 中的每个有序对 $(a,b)$ 与 $B\times A$ 中的有序对 $(b,a)$ 对应起来。例如，$(2,u)$ 与 $(u,2)$ 相对应。一般的规则是：

$$
(a,b)\longleftrightarrow(b,a)
$$

于是第二个积中的每个有序对恰好与第一个积中的一个有序对相对应。要还原出那个有序对，只需再交换一次分量，从 $(b,a)$ 回到 $(a,b)$。没有哪个有序对被遗漏或被对应两次，这就是两个积即使含有不同的有序对也具有相同基数的原因。对于非空集合，等式 $A\times B=B\times A$ 成立当且仅当 $A=B$。然而，如果至少有一个因子为空，那么即使两个因子不同，两个积也都是空集。这些情形可由下面的等价式表达：

$$
A\times B=B\times A
\iff
\begin{cases}
A=B & \lor \\[6pt]
A=\emptyset & \lor \\[6pt]
B=\emptyset
\end{cases}
$$

## 集合运算

在 $(1)$ 中，我们把笛卡尔积定义为集合上的一种运算，因此它具有若干性质，其中包括对[并、交、差](../sets/)的分配律。于是，对三个集合 $A$、$B$ 和 $C$，下列恒等式成立：

$$
\begin{align}
A\times(B\cup C)&=(A\times B)\cup(A\times C) \\[6pt]
A\times(B\cap C)&=(A\times B)\cap(A\times C) \\[6pt]
A\times(B\setminus C)&=(A\times B)\setminus(A\times C)
\end{align}
$$

+ 在第一个恒等式中，一个有序对属于右边，是指它至少属于积 $A\times B$ 和 $A\times C$ 之一。这要求它的第一个分量属于 $A$，第二个分量至少属于 $B$ 和 $C$ 之一，即属于 $B\cup C$，而这恰好是属于左边的条件。
+ 在第二个恒等式中，属于右边要求第一个分量属于 $A$，第二个分量同时属于 $B$ 和 $C$，这正是定义左边的条件。
+ 最后，在第三个恒等式中，有序对必须属于 $A\times B$ 且被排除在 $A\times C$ 之外。第一个条件已经保证它的第一个分量属于 $A$。因此，被排除在第二个积之外等价于要求它的第二个分量不属于 $C$。于是这个分量属于 $B\setminus C$，这正是左边所要求的。

笛卡尔积的另一个性质与包含关系有关。如果 $A\subseteq A'$ 且 $B\subseteq B'$，那么 $A\times B$ 中每个有序对的第一个分量都在 $A'$ 中，第二个分量都在 $B'$ 中。因此：

$$
A\subseteq A' \land B\subseteq B'
\implies A\times B\subseteq A'\times B'
$$

## 多个因子的积

现在考虑把 $(1)$ 中的笛卡尔积推广为 $n$ 个数集之积的情形。首先把有序 $n$ 元组定义为具有 $n$ 个分量的序列 $(a_1,\ldots,a_n)$，其中 $n\geq 1$。两个 $n$ 元组相等，当且仅当对应位置上的分量相等。于是，$n$ 个集合的笛卡尔积由下面的表达式定义：

$$ \tag{6}
A_1\times\cdots\times A_n
=\{\ (a_1,\ldots,a_n)\mid a_i\in A_i \quad \forall \ i\in\{1,\ldots,n\}\ \}
$$

如果各因子都是有限的，那么每个分量有 $|A_i|$ 种取法。反复应用两个集合之积的基数公式 $(4)$，得到：

$$
|A_1\times\cdots\times A_n|=\prod_{i=1}^{n}|A_i|
$$

当所有因子都是同一个集合（比如 $A$）时，我们使用记号 $A^n$。如果 $A$ 是有限的，那么 $|A^n|=|A|^n$。特别地，$\mathbb{R}^n$ 是[实数](../real-numbers/)的 $n$ 元组构成的集合。一个特殊情形是 $\mathbb{R}^3$，它用三个坐标描述空间。有三个因子时，必须把有序三元组与含有另一个有序对的有序对区分开来，这些元素具有下列形式：

$$
\begin{align}
((a,b),c)&\in(A\times B)\times C \\[6pt]
(a,(b,c))&\in A\times(B\times C) \\[6pt]
(a,b,c)&\in A\times B\times C
\end{align}
$$

如果有一个因子为空，这三种构造都给出空集。

## 子集与二进制序列

笛卡尔积在组合数学中很有用，因为它使我们能够数出有限集合的全部子集。考虑含有 $n$ 个不同元素的集合 $E=\{e_1,\ldots,e_n\}$，并把每个子集 $S\subseteq E$ 与如下定义的 $n$ 元组 $(\varepsilon_1,\ldots,\varepsilon_n)\in\{0,1\}^n$ 对应起来：

$$ \tag{7}
\varepsilon_i=
\begin{cases}
1 & e_i\in S \\[6pt]
0 & e_i\notin S
\end{cases}
$$

$(7)$ 中的每个分量 $\varepsilon_i$ 表明元素 $e_i$ 是否属于 $S$。所得的 $n$ 元组只含有值 $0$ 和 $1$，因此称为二进制序列。集合 $\{0,1\}^n$ 包含所有长度为 $n$ 的这种序列。

例如，如果固定次序 $e_1,e_2,e_3,e_4$，那么子集 $S=\{e_2,e_4\}$ 由序列 $(0,1,0,1)$ 描述。第一项和第三项是 $0$，因为 $e_1$ 和 $e_3$ 不属于 $S$；第二项和第四项是 $1$，因为 $e_2$ 和 $e_4$ 属于它。我们也可以从序列出发，按固定的次序读出它的分量来还原相应的子集：当第 $i$ 个位置上的项是 $1$ 时收入 $e_i$，是 $0$ 时排除它。例如，由 $(0,1,0,1)$ 恰好得到 $\{e_2,e_4\}$。

注意，每个子集恰好确定一个序列，每个序列也恰好确定一个子集。因此，数 $E$ 的子集等价于数笛卡尔积 $\{0,1\}^n$ 的元素；由于每个因子有两个元素，基数为：

$$
|\mathcal{P}(E)|=|\{0,1\}^n|=2^n
$$

## 指标集族的积

笛卡尔积的定义可以推广到[集族](../sets/) $(A_i)_{i\in I}$，即使指标集 $I$ 是无限的，也就是积有无穷多个因子时也是如此。积的一个元素给每个指标 $i$ 指定一个属于 $A_i$ 的分量，这个积写作：

$$
\prod_{i\in I}A_i
=\{\ (a_i)_{i\in I}\mid a_i\in A_i \quad \forall \ i\in I\ \}
$$

形式上，这样的分量族是一个[函数](../functions/) $a$，其定义域为 $I$，取值于各因子的并集，并满足条件：

$$
a\colon I\longrightarrow\bigcup_{i\in I}A_i
\qquad
a(i)\in A_i \quad \forall \ i\in I
$$

如果有一个因子为空，积就是空集，因为没有函数能给该指标指定一个允许的值。然而，如果指标集为空，那么恰好有一个函数以它为定义域，即空函数。因此，没有因子的积是一个单元素集，基数为 $1$（$A^0$ 的唯一元素是空序列）。
