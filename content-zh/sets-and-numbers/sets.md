---
title: 集合
title_en: Sets
source: https://algebrica.org/sets/
license: CC BY-NC 4.0
tags:
  - cardinality
  - cartesian-product
  - de-morgan-laws
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
  source_hash: 15ef071383d7fb5ddf7784a3d8fd08c96b5db58d878618dd5431856b0b606919
  translator: omp
  updated: "2026-07-21T17:04:11.226Z"
---
## 引言

集合是由称为元素的若干对象构成的整体。集合用大写字母 $A$、$B$、$C$ 表示，其元素用小写字母表示。记号 $x \in A$ 表示对象 $x$ 属于集合 $A$，而 $x \notin A$ 表示 $x$ 不是 $A$ 的元素。对于任意给定的对象，总能明确无误地判定该对象是否属于该集合。

集合可以用枚举法或集合构造式来描述。枚举法是显式列出集合的每个元素，当集合的基数有限且较小时比较实用：

$$
A = \{a_1, a_2, a_3, a_4\}
$$

当元素很多或无限时，集合构造式更为合适。此时集合由每个元素为属于它所必须满足的性质来描述：

$$
A = \\{ x \in \mathbb{Z} \mid x > 4, \ x \leq 8 \\}
$$

上述记法将 $A$ 定义为所有[整数](../integers/) $x$ 中满足 $x > 4$ 且 $x \leq 8$ 的那些整数构成的集合，即如下集合：

$$
A = \{5, 6, 7, 8\}
$$

空集不含任何元素，记为 $\emptyset$ 或 $\\{\\}$，在集合论中的地位类似于零在算术中的地位。

## 全集

一个包含所考虑的全部对象的主集合称为全集，记为 $U$。在给定情境下的所有集合都是 $U$ 的子集。$U$ 的选取取决于具体情况。在初等数论中，常用 $U = \mathbb{Z}$；而在实分析中，通常选 $U = \mathbb{R}$。

> 全集这一工具使得集合补集的概念明确无歧义，详见集合运算一节。

## 有限集合的基数

集合 $A$ 的基数记为 $|A|$，表示该集合所含元素的个数。基数可以在不同情形下度量，如下所述。

空集的基数为 $|\emptyset| = 0$。两个有限集合基数相同当且仅当它们所含元素的个数相同。

有限集合 $A$（含 $n$ 个元素）的幂集的基数由下式给出：

$$
|\mathcal{P}(A)| = 2^n
$$

两个有限集合 $A$ 和 $B$ 的笛卡尔积的基数由下式给出：

$$
|A \times B| = |A| \cdot |B|
$$

此时 $A$ 的每个元素可以与 $B$ 的每个元素配对，产生 $|A| \cdot |B|$ 个有序对。

两个集合 $A$ 和 $B$ 的并集的基数由下式给出：

$$
|A \cup B| = |A| + |B| - |A \cap B|
$$

上述表达式即容斥原理，确保两个集合共有的元素只被计数一次。$A \cup B$ 的每个元素在和 $|A| + |B|$ 中出现。同时属于 $A \cap B$ 的元素被计了两次，因此减去该交叉项以保证计数正确。

该原理可推广到三个集合，表示为：

$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
$$

该公式的结构可作如下理解：

+ 仅属于一个集合的元素只被计数一次。
+ 被两个集合共有的元素被加了两次、减了一次，净贡献为 $1$。
+ 同时属于全部三个集合的元素被加了三次、减了三次，再通过三重交集加回一次，净贡献同样为一。

## 子集与幂集

子集与幂集的概念是同时引入的。子集是其所有元素都属于另一个集合的集合，而幂集是元素本身为某个给定集合的子集的集合。若集合 $A$ 的每个元素也是 $B$ 的元素，则 $A$ 是 $B$ 的子集：

$$
A \subseteq B \iff \forall \ x, \ x \in A \rightarrow x \in B
$$

两个集合相等当且仅当彼此互相包含，这是数学中确立集合相等的标准方法：

$$
A = B \iff A \subseteq B \text{ 且 } B \subseteq A
$$

若 $A \subseteq B$ 且 $A \neq B$，则 $A$ 是 $B$ 的真子集，记为 $A \subsetneq B$，此时 $B$ 中至少存在一个不属于 $A$ 的元素。空集是任意集合的子集。包含关系 $\emptyset \subseteq A$ 对任意集合 $A$ 均成立，因为蕴含 $x \in \emptyset \Rightarrow x \in A$ 是空虚为真的。

集合 $A$ 的幂集是 $A$ 的所有子集构成的集合，记为 $\mathcal{P}(A)$。它包含空集 $\emptyset$ 和集合 $A$ 本身。若 $A$ 有 $n$ 个元素，则 $\mathcal{P}(A)$ 有 $2^n$ 个元素。例如，若 $A = \\{a, b, c\\}$，则幂集包含 $2^3 = 8$ 个元素：

$$
\mathcal{P}(A) = \{\emptyset, \ \{a\}, \ \{b\}, \ \{c\}, \ \{a,b\}, \ \{a,c\}, \ \{b,c\}, \ \{a,b,c\}\}
$$

## 指标集族

当同时考虑多个集合时，用指标来标记它们可以使记法紧凑。以集合 $I$ 为指标集的集族，为每个指标 $i \in I$ 指派一个集合 $A_i$，记为 $\\{A_i\\}_{i \in I}$。指标集 $I$ 可以是有限的、可数的或不可数的，因此这种记法比有限项的列表更为一般。

集族的并集是至少属于其某个成员的元素构成的集合，交集是属于其每个成员的元素构成的集合：

$$
\bigcup_{i \in I} A_i = \\{x \mid x \in A_i \text{ 存在某个 } i \in I\\}
$$

$$
\bigcap_{i \in I} A_i = \\{x \mid x \in A_i \text{ 对每个 } i \in I\\}
$$

一个元素只要被集族的某个成员包含，就属于并集；只有被集族的每个成员都包含时，才属于交集。

集族 $\\{A_i\\}_{i \in I}$ 是两两不相交的，当且仅当其中任意两个不同成员没有公共元素：

$$
A_i \cap A_j = \emptyset \quad \forall \ i \neq j
$$

对每个 $n \in \mathbb{N}$，单元素集 $\\{n\\}$ 构成一个两两不相交的集族，其并集为集合 $\mathbb{N}$。

## 划分

集合 $A$ 的划分是一个由非空子集 $\\{A_i\\}_{i \in I}$ 组成的集族，这些子集两两不相交且覆盖整个 $A$。以下条件必须成立：

$$
\begin{align}
&A_i \neq \emptyset \quad \forall \ i \in I \\[6pt]
&A_i \cap A_j = \emptyset \quad \forall \ i \neq j \\[6pt]
& \bigcup_{i \in I} A_i = A
\end{align}
$$

子集 $A_i$ 称为划分的块，$A$ 的每个元素恰好属于其中一个块。一个简单的例子是[整数](../integers/)集 $\mathbb{Z}$，它可以划分为偶数集和奇数集，因为这两个块非空、不相交，且合在一起覆盖整个 $\mathbb{Z}$。

划分与等价关系密切相关。给定 $A$ 上的一个等价关系：

+ 它所导出的等价类构成 $A$ 的一个划分。
+ $A$ 的任意一个划分都确定一个等价关系：当两个元素属于同一个块时，规定它们等价。

## 集合运算

集合运算通过组合不同集合的元素来生成新的集合。主要运算有并、交、补和差。

$A$ 和 $B$ 的并集是属于两个集合中至少一个的所有元素构成的集合。$A$ 和 $B$ 的公共元素只列出一次，因为集合不允许重复。

![IMG. 1](/assets/sets-and-numbers/svg/sets-1.svg)

$$
A \cup B = \\{x \mid x \in A \text{ 或 } x \in B\\}
$$

- - -

$A$ 和 $B$ 的交集是同时属于两个集合的元素构成的集合：

![IMG. 2](/assets/sets-and-numbers/svg/sets-2.svg)

$$
A \cap B = \\{x \mid x \in A \text{ 且 } x \in B\\}
$$

若 $A \cap B = \emptyset$，则两个集合不相交，没有公共元素。

- - -

$A$ 关于全集 $U$ 的补集是 $U$ 中不属于 $A$ 的所有元素构成的集合。记为：

$$
A^c = \\{x \in U \mid x \notin A\\}
$$

![IMG. 3](/assets/sets-and-numbers/svg/sets-3.svg)

$A$ 的补集也可以表示为 $\overline{A}$ 或 $U \setminus A$。当 $U$ 改变时，同一个集合可能得到不同的补集，因为补集的元素随所选全集而变化。

- - -

$A$ 和 $B$ 的差集，记为 $A \setminus B$，是属于 $A$ 但不属于 $B$ 的元素构成的集合：

![IMG. 4](/assets/sets-and-numbers/svg/sets-4.svg)

$$
A \setminus B = \\{x \in A \text{ 且 } x \notin B\\}
$$

一般地 $A \setminus B \neq B \setminus A$ 成立，因为两个集合的差不是可交换的运算。对于包含 $A$ 和 $B$ 的任意全集，恒等式 $A \setminus B = A \cap B^c$ 成立，它通过补集来表达差集。

$A$ 和 $B$ 的对称差，记为 $A \triangle B$，是属于两个集合之一但不同时属于两者的元素构成的集合：

![IMG. 5](/assets/sets-and-numbers/svg/sets-5.svg)

$$
A \triangle B = (A \setminus B) \cup (B \setminus A)
$$

一个等价的表示由以下表达式给出：

$$
A \triangle B = (A \cup B) \setminus (A \cap B)
$$

对称差满足交换律和结合律，且满足 $A \triangle A = \emptyset$ 和 $A \triangle \emptyset = A$。与交集一起，对称差赋予给定集合的所有子集组成的族以布尔[环](../rings/)的结构。

## 集合运算的性质

集合运算满足一系列恒等式，这些恒等式构成布尔代数的基础，对全集 $U$ 中的任意集合 $A$、$B$ 和 $C$ 都成立。并集和交集是可交换的运算。两个集合组合的顺序不影响结果。

$$
\begin{align}
A \cup B &= B \cup A \\[6pt]
A \cap B &= B \cap A
\end{align}
$$

两种运算也满足结合律，即当三个集合组合时，操作数的分组方式无关紧要。

$$
\begin{align}
(A \cup B) \cup C &= A \cup (B \cup C) \\[6pt]
(A \cap B) \cap C &= A \cap (B \cap C)
\end{align}
$$

并集和交集相互满足分配律，类似于算术中的分配律。

$$
\begin{align}
A \cap (B \cup C) &= (A \cap B) \cup (A \cap C) \\[6pt]
A \cup (B \cap C) &= (A \cup B) \cap (A \cup C)
\end{align}
$$

空集和全集分别充当并集和交集的单位元。任意集合与它们之一组合，结果都返回原集合。

$$
\begin{align}
A \cup \emptyset &= A \\[6pt]
A \cap U &= A
\end{align}
$$

空集对交集起零化作用，全集对并集起零化作用。任意集合与这些元素组合，返回的是吸收元而非原集合：

$$
\begin{align}
A \cap \emptyset &= \emptyset \\[6pt]
A \cup U &= U
\end{align}
$$

$U$ 的每个元素要么属于 $A$，要么属于其补集，绝不会同时属于两者。对补集运算连续施加两次，将返回原集合：

$$
\begin{align}
A \cup A^c &= U \\[6pt]
A \cap A^c &= \emptyset \\[6pt]
(A^c)^c &= A
\end{align}
$$

## 德摩根律

德摩根律是描述并集和交集在补集运算下行为的代数恒等式。这些恒等式允许将集合表达式改写为等价形式，有助于简化运算。

$$
\begin{align}
(A \cup B)^c &= A^c \cap B^c \\[6pt]
(A \cap B)^c &= A^c \cup B^c
\end{align}
$$

第一定律指出，并集的补集等于各自补集的交集。一个元素不在 $A \cup B$ 中，当且仅当它既不在 $A$ 中也不在 $B$ 中，这等价于同时属于 $A^c$ 和 $B^c$。

![IMG. 6](/assets/sets-and-numbers/svg/sets-6.svg)

第二定律指出，一个元素不在交集 $A \cap B$ 中，当且仅当它至少不在两个集合中的一个中，从而它属于 $A^c \cup B^c$。

这些定律可以推广到任意集族 $\\{A_i\\}_{i \in I}$，对指标集 $I$ 的大小没有任何限制：

$$
\begin{align}
\left(\bigcup_{i \in I} A_i\right)^c &= \bigcap_{i \in I} A_i^c \\[6pt]
\left(\bigcap_{i \in I} A_i\right)^c &= \bigcup_{i \in I} A_i^c
\end{align}
$$

集合的代数结构与逻辑联结词之间存在对应关系。德摩根律可以转化为联结词 $\land$ 和 $\lor$ 的如下等价式：

$$
\neg(P \lor Q) \equiv \neg P \land \neg Q
$$

$$
\neg(P \land Q) \equiv \neg P \lor \neg Q
$$

## 示例

设 $U = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$ 为全集，定义以下两个子集：

$$
\begin{align}
A &= \{1, 2, 3, 4, 6\} \\[6pt]
B &= \{2, 4, 6, 8, 10\}
\end{align}
$$

两个集合的并集和交集可直接由定义计算：

$$
\begin{align}
A \cup B &= \{1, 2, 3, 4, 6, 8, 10\} \\[6pt]
A \cap B &= \{2, 4, 6\}
\end{align}
$$

关于 $U$ 的补集收集了从各自集合中排除的元素：

$$
\begin{align}
A^c &= \{5, 7, 8, 9, 10\} \\[6pt]
B^c &= \{1, 3, 5, 7, 9\}
\end{align}
$$

现在验证德摩根第一定律。并集的补集为：

$$
(A \cup B)^c = U \setminus (A \cup B) = \\{5, 7, 9\\}
$$

各补集的交集为：

$$
\begin{align}
A^c \cap B^c &= \{5, 7, 8, 9, 10\} \cap \{1, 3, 5, 7, 9\} \\[6pt]
&= \{5, 7, 9\}
\end{align}
$$

两个集合一致，验证了德摩根第一定律。下面用基数验证容斥原理：

$$
|A| = 5 \quad |B| = 5 \quad |A \cap B| = 3
$$

$$
|A \cup B| = 5 + 5 - 3 = 7
$$

直接计数 $A \cup B = \\{1, 2, 3, 4, 6, 8, 10\\}$ 的元素，确认 $|A \cup B| = 7$。

计算对称差并检验它与其他运算的关系：

$$
A \triangle B = (A \setminus B) \cup (B \setminus A)
$$

两个差集分别是 $A \setminus B = \\{1, 3\\}$ 和 $B \setminus A = \\{8, 10\\}$，由此得：

$$
A \triangle B = \\{1, 3, 8, 10\\}
$$

通过使用并集和交集的等价刻画可得相同的结果：

$$
\begin{align}
(A \cup B) \setminus (A \cap B) &= \{1, 2, 3, 4, 6, 8, 10\} \setminus \{2, 4, 6\} \\[6pt]
&= \{1, 3, 8, 10\}
\end{align}
$$

## 笛卡尔积

给定两个集合 $A$ 和 $B$，笛卡尔积 $A \times B$ 是所有满足 $a$ 属于 $A$ 且 $b$ 属于 $B$ 的有序对 $(a, b)$ 构成的集合：

$$
A \times B = \\{(a, b) \mid a \in A, \ b \in B\\}
$$

有序对是不对称的：当 $a$ 和 $b$ 不相同时，$(a, b)$ 不同于 $(b, a)$。两个有序对相等当且仅当它们的对应分量相等，如下式所表达：

$$
(a, b) = (a', b') \iff a = a' \text{ 且 } b = b'
$$

一般而言，$A \times B$ 和 $B \times A$ 不是同一个集合。若 $A$ 含 $m$ 个元素，$B$ 含 $n$ 个元素，则 $A \times B$ 含 $mn$ 个元素。例如，$\mathbb{R} \times \mathbb{R}$，即所有[实数](../real-numbers/)对的集合，就是笛卡尔平面 $\mathbb{R}^2$。

给定集合 $A_1, A_2, \ldots, A_n$，它们的笛卡尔积是所有有序 $n$ 元组的集合：

$$
A_1 \times A_2 \times \cdots \times A_n = \\{(a_1, a_2, \ldots, a_n) \mid a_i \in A_i \text{ 对每个 } i = 1, \ldots, n\\}
$$

$n$ 元组 $(a_1, \ldots, a_n)$ 是 $n$ 个元素的有序序列，两个 $n$ 元组相等当且仅当所有对应分量相等。若所有集合相同，即对每个 $i$ 都有 $A_i = A$，则该积为 $A^n$。空间 $\mathbb{R}^n$ 是 $\mathbb{R}$ 与自身的 $n$ 重笛卡尔积，其元素为实数的 $n$ 元组。

## 有序对

到目前为止，有序对 $(a, b)$ 被当作一个直观概念来处理，即第一分量为 $a$、第二分量为 $b$ 的对象对。在形式上，有序对可以用集合论方法定义为一个包含两个元素的集合：

$$
(a, b) = \\{\\{a\\}, \ \\{a, b\\}\\}
$$

项 $\\{a\\}$ 是单元素集，$\\{a, b\\}$ 是无序对。元素 $a$ 同时出现在两者中，而 $b$ 只出现在其中一个里。该定义的合理性由以下结论保证：

$$
(a, b) = (c, d) \implies a = c \text{ 且 } b = d
$$

为验证此性质，假设 $\\{\\{a\\}, \\{a, b\\}\\} = \\{\\{c\\}, \\{c, d\\}\\}$。分两种情形讨论，取决于 $a = b$ 还是 $a \neq b$。

第一种情形，当 $a = b$ 时，有 $\\{a, b\\} = \\{a\\}$，所以左边变为 $\\{\\{a\\}\\}$，一个单元素集。为使等式成立，右边也必须是单元素集，这要求 $\\{c\\} = \\{c, d\\}$，从而 $c = d$。两边唯一的元素必须相同，故 $\\{a\\} = \\{c\\}$，因此 $a = c$。由于 $b = a = c = d$，可得 $a = c$ 且 $b = d$。

若 $a \neq b$，则左边含有两个不同的元素：$\\{a\\}$ 和 $\\{a, b\\}$。单元素集 $\\{a\\}$ 必须对应右边的 $\\{c\\}$ 或 $\\{c, d\\}$。若 $\\{a\\} = \\{c, d\\}$，则 $c = d = a$，这将使 $\\{c\\} = \\{c, d\\}$，导致右边为单元素集，与左边含有两个不同元素矛盾。因此 $\\{a\\} = \\{c\\}$，故 $a = c$。由此得 $\\{a, b\\} = \\{c, d\\} = \\{a, d\\}$，又因 $a \neq b$，必有 $b = d$。

在两种情形下，都有 $a = c$ 且 $b = d$，如所需。反向的推导是直接的，因为若 $a = c$ 且 $b = d$，则通过代入可知两个集合相同。
