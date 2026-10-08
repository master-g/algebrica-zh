---
title: 集合
title_en: Sets
source: https://algebrica.org/sets/
license: CC BY-NC 4.0
tags:
  - bijection
  - cardinality
  - cartesian-product
  - disjoint-union
  - inclusion-exclusion
  - indexed-family
  - ordered-pair
  - partition
  - power-set
  - set
  - set-operations
  - subset
  - universal-set
translation:
  status: current
  source_hash: 25be55f285c2b1da0f6373a7ce446f43e66e29aa8da0e6944b909882076bbcb3
  translator: claude
  updated: "2026-10-08T00:00:00.000Z"
---
## 引言

集合是由称为元素的对象组成的整体，并且完全由哪些对象属于它决定。两个集合相等，当且仅当它们拥有相同的元素。列出元素时所用的顺序以及列表中的重复项都不会改变集合。例如，下面三种描述定义的是同一个集合：

$$
\{1,2,3\}=\{3,1,2\}=\{1,1,2,3,3\}
$$

恰好含有一个元素的集合称为单元素集。因此 $\{a\}$ 是单元素集，而当 $a\neq b$ 时，$\{a,b\}$ 含有两个元素。集合通常用大写字母 $A$、$B$、$C$ 表示，元素用小写字母表示。记号 $x\in A$ 表示 $x$ 属于 $A$，而 $x\notin A$ 表示 $x$ 不属于 $A$。对于所考虑的每个对象，其成员关系都必须具有明确无歧义的真值。

集合可以用枚举法或集合构造式来描述。枚举法显式列出集合的每个元素，当集合的基数有限且较小时很实用：

$$
A = \{a_1, a_2, a_3, a_4\}
$$

当元素很多或无限时，集合构造式通常更简洁。它从一个预先指定的集合中选出满足给定条件的元素。例如，可以写出下面的[整数](../integers/)子集：

$$
A = \{ x \in \mathbb{Z} \mid x > 4, \ x \leq 8 \ \}
$$

背景集合 $\mathbb{Z}$ 限制了可能成为成员的候选对象。两个不等式随后选出以下四个整数：

$$
A = \{5, 6, 7, 8\}
$$

> 在朴素集合论中，任意条件不一定定义一个集合。形如 $\{\ x\in S\mid P(x)\ \}$ 的表达式，是从已经存在的集合 $S$ 中抽取元素。如果没有这样的背景集合，一个条件可能描述出不能成为集合的对象汇集。无限制地进行这类定义会导致罗素悖论。

空集不含任何元素，记为 $\emptyset$ 或 $\{\ \}$，它在集合论中的作用类似于零在算术中的作用。

## 全集

包含所考虑的全部对象的主集合称为全集，记为 $U$。在给定语境中，所有集合都是 $U$ 的子集。$U$ 的选择取决于具体情形。在初等数论中通常取 $U = \mathbb{Z}$，而在实分析中通常取 $U = \mathbb{R}$。

> 全集是使集合补集概念明确无歧义的工具，集合运算一节会进一步讨论这一点。

## 有限集合的基数

有限集合 $A$ 的基数记为 $|A|$，表示 $A$ 中元素的数量。基数也可以通过[函数](../functions/)进行比较。当存在从 $A$ 到 $B$ 的[双射](../injective-surjective-and-bijective-functions/)时，两个集合 $A$ 和 $B$ 具有相同的基数。这一条件写作：

$$
|A|=|B| \iff \exists f\colon A \overset{\sim}{\longrightarrow} B
$$

对于有限集合，这个条件等价于它们的元素数量相等。空集的基数为 $|\emptyset|=0$。

对于无限集合，即使两个集合都不是有限的，双射仍然定义了基数相等。[基数与可数集合](../cardinality-and-countable-sets/)将这一概念扩展到无限集合，并包括与幂集的比较。

两个有限集合 $A$ 和 $B$ 的[笛卡尔积](../cartesian-product/)基数为：

$$
|A \times B| = |A| \cdot |B|
$$

在这种情况下，$A$ 的每个元素都可以与 $B$ 的每个元素配对，产生 $|A| \cdot |B|$ 个有序对。

两个集合 $A$ 和 $B$ 的并集基数为：

$$
|A \cup B| = |A| + |B| - |A \cap B|
$$

上式就是容斥原理，它确保两个集合共有的元素只被计数一次。$A \cup B$ 的每个元素都会出现在和 $|A| + |B|$ 中。属于 $A \cap B$ 的元素被计算了两次，因此要减去这一项以保证计数正确。

该原理可推广到三个集合，表达式为：

$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
$$

这个公式的结构可以这样理解：

+ 只属于一个集合的元素只计算一次。
+ 被两个集合共有的元素计算两次并减去一次，净贡献为 $1$。
+ 属于三个集合的元素先加三次、减三次，再通过三重交集加回一次，净贡献仍为 1。

## 子集与幂集

子集和幂集这两个概念一起引入。子集是其所有元素都属于另一个集合的集合，而幂集的元素本身是某个给定集合的子集。如果 $A$ 的每个元素也是 $B$ 的元素，则 $A$ 是 $B$ 的子集：

$$
A \subseteq B \iff \forall \ x, \ x \in A \rightarrow x \in B
$$

两个集合相等，当且仅当每一个都包含于另一个，这是数学中证明集合相等的标准方法：

$$
A = B \iff A \subseteq B \land B \subseteq A
$$

如果 $A \subseteq B$ 且 $A \neq B$，则 $A$ 是 $B$ 的真子集，记为 $A \subsetneq B$；在这种情况下，$B$ 中至少有一个元素不属于 $A$。空集是每个集合的子集。对任意集合 $A$，包含关系 $\emptyset \subseteq A$ 都成立，因为蕴含 $x \in \emptyset \Rightarrow x \in A$ 是空真命题。

集合 $A$ 的幂集是 $A$ 的所有子集组成的集合，记为 $\mathcal{P}(A)$。它包含空集 $\emptyset$ 和集合 $A$ 本身。如果 $A$ 有 $n$ 个元素，那么 $\mathcal{P}(A)$ 有 $2^n$ 个元素。例如，若 $A=\{a,b,c\}$，则幂集含有 $2^3=8$ 个元素：

$$
\mathcal{P}(A) = \{\emptyset, \ \{a\}, \ \{b\}, \ \{c\}, \ \{a,b\}, \ \{a,c\}, \ \{b,c\}, \ \{a,b,c\}\}
$$

指数 $2^n$ 来自与函数的对应关系。每个子集 $E\subseteq A$ 都有一个特征函数 $\chi_E\colon A\to\{0,1\}$，定义为：

$$
\chi_E(a)=
\begin{cases}
1 & a\in E \\[6pt]
0 & a\notin E
\end{cases}
$$

反过来，函数 $\chi\colon A\to\{0,1\}$ 决定子集 $\{\ a\in A\mid \chi(a)=1\ \}$。这两个构造互为逆构造。当 $A$ 有 $n$ 个元素时，$\chi$ 在 $A$ 的每个元素处都有两个独立的可能取值，因此有 $2^n$ 个特征函数，也就有 $2^n$ 个子集。

## 指标集族

当同时考虑多个集合时，用指标标记它们可以使记法保持紧凑。以集合 $I$ 为指标集的集族，为每个指标 $i\in I$ 指派一个集合 $A_i$，记为 $(A_i)_{i\in I}$。形式上，这个集族是一个定义域为 $I$ 的函数，在 $i$ 处的函数值为 $A_i$。即使两个函数值相同，指标仍保持区别，因此 $A_i=A_j$ 不意味着 $i=j$。指标集可以是有限、可数或不可数的。

集族的并集是至少属于其中一个成员的元素组成的集合，交集则是属于每个成员的元素组成的集合：

$$
\bigcup_{i\in I} A_i = \{\ x \mid \exists i\in I,\ x\in A_i \ \}
$$

$$
\bigcap_{i\in I} A_i = \{\ x \mid \forall i\in I,\ x\in A_i \ \}
$$

只要集族中的一个成员包含某个元素，该元素就属于并集；只有集族中的每个成员都包含它时，该元素才属于交集。

集族 $(A_i)_{i\in I}$ 在任意两个指标不同时对应的成员之间没有公共元素时，称为两两不相交：

$$
A_i \cap A_j = \emptyset \quad \forall \ i \neq j
$$

对每个 $n\in\mathbb{N}$，单元素集 $\{n\}$ 构成两两不相交的集族，其并集是集合 $\mathbb{N}$。

## 划分

集合 $A$ 的一个划分，是由非空子集 $(A_i)_{i\in I}$ 组成的集族；这些子集两两不相交并覆盖整个 $A$。它们必须满足以下条件：

$$
\begin{align}
& A_i \neq \emptyset \quad \forall \ i \in I \\[6pt]
& A_i \cap A_j = \emptyset \quad \forall \ i \neq j \\[6pt]
& \bigcup_{i \in I} A_i = A
\end{align}
$$

子集 $A_i$ 称为划分的块，$A$ 的每个元素恰好属于其中一个块。一个简单例子是[整数](../integers/)集 $\mathbb{Z}$：它可以划分为偶数集和奇数集，因为这两个块非空、互不相交，并且合起来覆盖整个 $\mathbb{Z}$。

划分与等价关系有关。给定 $A$ 上的等价关系：

+ 它诱导的等价类构成 $A$ 的一个划分。
+ $A$ 的任意划分都通过规定“属于同一块的两个元素等价”来定义一个等价关系。

## 集合运算

集合运算通过组合不同集合的元素来生成新集合。主要运算有并集、交集、补集和差集。

$A$ 与 $B$ 的并集是属于两个集合中至少一个的所有元素构成的集合。属于 $A$ 和 $B$ 的公共元素只列出一次，因为集合不允许重复。

![图 1](/assets/sets/svg/sets-1.svg)

$$
A \cup B = \{x \mid x \in A \lor x \in B\}
$$

- - -

$A$ 与 $B$ 的交集是同时属于两个集合的元素构成的集合：

![图 2](/assets/sets/svg/sets-2.svg)

$$
A \cap B = \{x \mid x \in A \land x \in B\}
$$

如果 $A \cap B = \emptyset$，则两个集合不相交，不含公共元素。

- - -

$A$ 关于全集 $U$ 的补集，是 $U$ 中所有不属于 $A$ 的元素构成的集合，记为：

$$
A^c = \{x \in U \mid x \notin A\}
$$

![图 3](/assets/sets/svg/sets-3.svg)

$A$ 的补集也可表示为 $\overline{A}$ 或 $U \setminus A$。当 $U$ 改变时，同一个集合可能有不同的补集，因为补集中的元素随所选全集而变化。

- - -

$A$ 与 $B$ 的差集记为 $A \setminus B$，是属于 $A$ 但不属于 $B$ 的元素构成的集合：

![图 4](/assets/sets/svg/sets-4.svg)

$$
A \setminus B = \{x \mid x \in A \land x \notin B\}
$$

一般而言，$A \setminus B \neq B \setminus A$，因为两个集合的差集运算不满足交换律。对于包含 $A$ 和 $B$ 的任意全集，恒等式 $A \setminus B = A \cap B^c$ 成立，它用补集表达了差集。

$A$ 与 $B$ 的对称差记为 $A \triangle B$，是属于两个集合之一但不同时属于两者的元素构成的集合：

![图 5](/assets/sets/svg/sets-5.svg)

$$
A \triangle B = (A \setminus B) \cup (B \setminus A)
$$

以下表达式给出一种等价表示：

$$
A \triangle B = (A \cup B) \setminus (A \cap B)
$$

对称差满足交换律和结合律，并满足 $A \triangle A = \emptyset$ 以及 $A \triangle \emptyset = A$。它与交集一起，为给定集合的所有子集组成的集族赋予布尔[环](../rings/)结构。

## 集合运算的性质

集合运算满足一系列恒等式，这些恒等式构成布尔代数的基础，并对全集 $U$ 中的任意集合 $A$、$B$ 和 $C$ 成立。并集和交集都是可交换运算，组合两个集合的顺序不会影响结果。

$$
\begin{align}
A \cup B &= B \cup A \\[6pt]
A \cap B &= B \cap A
\end{align}
$$

两种运算也满足结合律，也就是说组合三个集合时，运算对象的分组方式无关紧要。

$$
\begin{align}
(A \cup B) \cup C &= A \cup (B \cup C) \\[6pt]
(A \cap B) \cap C &= A \cap (B \cap C)
\end{align}
$$

并集和交集相互满足分配律，方式类似于算术中的分配律。

$$
\begin{align}
A \cap (B \cup C) &= (A \cap B) \cup (A \cap C) \\[6pt]
A \cup (B \cap C) &= (A \cup B) \cap (A \cup C)
\end{align}
$$

空集和全集分别是并集和交集的单位元。任意集合与它们之一组合，都会返回原集合。

$$
\begin{align}
A \cup \emptyset &= A \\[6pt]
A \cap U &= A
\end{align}
$$

空集对交集起吸收作用，全集对并集起吸收作用。任意集合与这些元素组合，返回的是吸收元而不是原集合：

$$
\begin{align}
A \cap \emptyset &= \emptyset \\[6pt]
A \cup U &= U
\end{align}
$$

$U$ 的每个元素要么属于 $A$，要么属于其补集，绝不会同时属于两者。连续两次应用补集运算会返回原集合：

$$
\begin{align}
A \cup A^c &= U \\[6pt]
A \cap A^c &= \emptyset \\[6pt]
(A^c)^c &= A
\end{align}
$$

## 不交并

普通并集只保留同时属于 $A$ 和 $B$ 的元素的一个出现。不交并为这样的元素保留两个带标签的版本，分别来自两个源集合。一种构造为：

$$
A\sqcup B=(\{0\}\times A)\cup(\{1\}\times B)
$$

集合 $\{0\}\times A$ 和 $\{1\}\times B$ 不相交，因为其中有序对的第一分量不同。定义函数 $i_A\colon A\to A\sqcup B$，$i_A(a)=(0,a)$，以及 $i_B\colon B\to A\sqcup B$，$i_B(b)=(1,b)$，它们都是单射。它们的像互不相交，且并集是 $A\sqcup B$。因此，不交并的每个元素都恰好来自两个源集合中的一个。

如果 $A$ 和 $B$ 有限，那么两个带标签的副本分别含有 $|A|$ 和 $|B|$ 个元素。它们互不相交，因此：

$$
|A\sqcup B|=|A|+|B|
$$

当 $A\cap B=\emptyset$ 时，去掉标签就定义了从 $A\sqcup B$ 到 $A\cup B$ 的双射。当 $A\cap B\neq\emptyset$ 时，同一规则不再是单射。对于 $x\in A\cap B$，不交并 $A\sqcup B$ 中的两个不同元素 $(0,x)$ 和 $(1,x)$ 都会映射到 $x$。

## 有序对

到目前为止，有序对 $(a, b)$ 被当作直观概念，即第一分量为 $a$、第二分量为 $b$ 的对象对。在形式上，有序对可以用集合论定义为一个包含两个元素的集合：

$$
(a, b) = \{\{a\}, \ \{a, b\}\}
$$

项 $\{a\}$ 是单元素集，$\{a, b\}$ 是无序对。元素 $a$ 同时出现在两者中，而 $b$ 只出现在其中一个中。以下结果说明了这个定义的合理性：

$$
(a, b) = (c, d) \implies a = c \land b = d
$$

为验证这一性质，假设 $\{\{a\}, \{a, b\}\} = \{\{c\}, \{c, d\}\}$。根据 $a = b$ 或 $a \neq b$，分两种情况讨论。

第一种情况是 $a = b$。此时 $\{a, b\} = \{a\}$，所以左侧变为单元素集 $\{\{a\}\}$。为了相等，右侧也必须是单元素集，这要求 $\{c\} = \{c, d\}$，从而 $c = d$。两侧的唯一元素必须相同，因此 $\{a\} = \{c\}$，于是 $a = c$。由于 $b = a = c = d$，可得 $a = c$ 且 $b = d$。

如果 $a \neq b$，那么左侧含有两个不同的元素：$\{a\}$ 和 $\{a, b\}$。单元素集 $\{a\}$ 必须对应右侧的 $\{c\}$ 或 $\{c, d\}$。如果 $\{a\} = \{c, d\}$，那么 $c = d = a$，这会使 $\{c\} = \{c, d\}$，从而右侧成为单元素集，与左侧含有两个不同元素相矛盾。因此 $\{a\} = \{c\}$，所以 $a = c$。于是 $\{a, b\} = \{c, d\} = \{a, d\}$，又因为 $a \neq b$，必有 $b = d$。

在两种情况下，都有 $a = c$ 且 $b = d$，这正是所需结论。反向结论显然成立，因为如果 $a = c$ 且 $b = d$，那么通过代入两个集合完全相同。
