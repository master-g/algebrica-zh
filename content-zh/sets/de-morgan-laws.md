---
title: 德摩根律
title_en: De Morgan's Laws
source: https://algebrica.org/de-morgan-laws/
license: CC BY-NC 4.0
tags:
  - de-morgan-laws
  - set
  - set-operations
  - universal-set
translation:
  status: current
  source_hash: a01c3e041c672a82bec5979d3b8d05b7eb1d81221d87267bc5f53e0fcfa01f99
  translator: claude
  updated: "2026-10-08T00:00:00.000Z"
---

## 定义

德摩根律描述并集、交集与补集运算之间的关系。考虑同一个全[集](../sets/) $U$ 的两个子集 $A$ 和 $B$，并把 $A$ 关于 $U$ 的补集记作 $A^c = U \setminus A$。这两条定律是：

$$ \tag{1}
\begin{align}
(A \cup B)^c &= A^c \cap B^c \\[6pt]
(A \cap B)^c &= A^c \cup B^c
\end{align}
$$

第一条定律指出，两个集合的并集的补集等于它们各自补集的交集。事实上，$U$ 的一个元素不属于 $A \cup B$，当且仅当它既不属于 $A$ 也不属于 $B$，这等价于它同时属于 $A^c$ 和 $B^c$，从而属于二者的交集。

![图 1](/assets/sets/svg/sets-6.svg)

$$(A \cup B)^c = A^c \cap B^c$$

第二条定律指出，两个集合的交集的补集等于它们各自补集的并集。事实上，$U$ 的一个元素不属于 $A \cap B$，当且仅当两个集合中至少有一个不包含它。于是该元素至少属于 $A^c$ 和 $B^c$ 之一，也就是属于二者的并集。

![图 2](/assets/sets/svg/sets-7.svg)

$$(A \cap B)^c = A^c \cup B^c$$

这些定律可以推广到同一个全集 $U$ 的任意子集族 $(A_i)_{i\in I}$，对指标集 $I$ 的[基数](../cardinality-and-countable-sets/)没有任何限制。所有补集都关于 $U$ 取，并且成立与 $(1)$ 类似的下列恒等式：

$$ \tag{2}
\begin{align}
\left(\bigcup_{i \in I} A_i\right)^c &= \bigcap_{i \in I} A_i^c \\[6pt]
\left(\bigcap_{i \in I} A_i\right)^c &= \bigcup_{i \in I} A_i^c
\end{align}
$$

第一个等式指出，$U$ 的一个元素落在并集之外，当且仅当它不属于任何一个集合 $A_i$，也就是属于所有的补集 $A_i^c$。第二个等式指出，$U$ 的一个元素落在交集之外，当且仅当至少有一个 $A_i$ 不包含它，也就是属于各补集的并集。

> 当 $I = \emptyset$ 时，我们约定 $\bigcup_{i\in\emptyset} A_i = \emptyset$ 且 $\bigcap_{i\in\emptyset} A_i = U$。在这些约定下，$(2)$ 中的恒等式对空族同样成立。

- - -

上面的论证依赖于对隶属条件取否定，它也可以用[逻辑联结词](../propositional-logic/)来表述。以两个集合为例，固定一个元素 $x\in U$，用 $P$ 表示命题 $x\in A$，用 $Q$ 表示命题 $x\in B$。元素 $x$ 属于并集 $A\cup B$，当且仅当两个命题中至少有一个为真；它属于交集 $A\cap B$，当且仅当两个命题都为真。

因此，并集对应于析取 $\lor$，交集对应于合取 $\land$，补集对应于否定 $\neg$。德摩根律通过下列等价式表达这一关系，它们对任意两个命题都成立：

$$ \tag{3}
\begin{align}
\neg(P \lor Q) &\equiv \neg P \land \neg Q \\[6pt]
\neg(P \land Q) &\equiv \neg P \lor \neg Q
\end{align}
$$

$(3)$ 中的第一个等价式指出，否定“两个命题中至少有一个为真”这一断言，等价于断言二者都为假。第二个等价式指出，否定“二者都为真”这一断言，等价于断言至少有一个为假。我们可以用真值表验证这些等价式：考虑 $P$ 和 $Q$ 真值的所有组合，用 $\mathrm{T}$ 表示真，用 $\mathrm{F}$ 表示假。对 $(3)$ 中的第一个等价式，我们得到：

$$
\begin{array}{cc|cc}
P & Q & \neg(P\lor Q) & \neg P\land\neg Q \\[6pt]
\hline
\mathrm{T} & \mathrm{T} & \mathrm{F} & \mathrm{F} \\[6pt]
\mathrm{T} & \mathrm{F} & \mathrm{F} & \mathrm{F} \\[6pt]
\mathrm{F} & \mathrm{T} & \mathrm{F} & \mathrm{F} \\[6pt]
\mathrm{F} & \mathrm{F} & \mathrm{T} & \mathrm{T}
\end{array}
$$

对 $(3)$ 中的第二个等价式，真值表如下：

$$
\begin{array}{cc|cc}
P & Q & \neg(P\land Q) & \neg P\lor\neg Q \\[6pt]
\hline
\mathrm{T} & \mathrm{T} & \mathrm{F} & \mathrm{F} \\[6pt]
\mathrm{T} & \mathrm{F} & \mathrm{T} & \mathrm{T} \\[6pt]
\mathrm{F} & \mathrm{T} & \mathrm{T} & \mathrm{T} \\[6pt]
\mathrm{F} & \mathrm{F} & \mathrm{T} & \mathrm{T}
\end{array}
$$

在每张表中，最后两列逐行一致，这就验证了两边等价。把这些等价式应用于每个 $x\in U$ 的隶属条件，就得到两个集合恒等式。例如，要推导 $(1)$ 中的第一个等式，我们固定任意元素 $x\in U$。并集和补集的定义使我们可以把属于 $(A\cup B)^c$ 转写为一个析取的否定。再应用 $(3)$ 中的第一个逻辑等价式，得到：

$$
\begin{align}
x\in(A\cup B)^c &\iff \neg\bigl((x\in A)\lor(x\in B)\bigr) \\[6pt]
&\iff (x\notin A)\land(x\notin B) \\[6pt]
&\iff (x\in A^c)\land(x\in B^c) \\[6pt]
&\iff x\in A^c\cap B^c
\end{align}
$$

由于这些等价式对每个 $x\in U$ 都成立，两个集合有相同的元素。因此我们得出 $(A\cup B)^c = A^c\cap B^c$。

## 示例

设 $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$ 为全集。考虑两个子集：

$$ \tag{4}
\begin{align}
A &= \{1, 2, 3, 4, 6\} \\[6pt]
B &= \{2, 4, 6, 8, 10\}
\end{align}
$$

由并集和交集的定义得：

$$
\begin{align}
A \cup B &= \{1, 2, 3, 4, 6, 8, 10\} \\[6pt]
A \cap B &= \{2, 4, 6\}
\end{align}
$$

要计算关于 $U$ 的补集，我们分别选出全集中不属于 $A$ 和不属于 $B$ 的元素，得到：

$$
\begin{align}
A^c &= \{5, 7, 8, 9, 10\} \\[6pt]
B^c &= \{1, 3, 5, 7, 9\}
\end{align}
$$

接着分别计算第一条德摩根律的两边来验证它。$U$ 中被并集排除在外的元素是 $5$、$7$ 和 $9$，所以：

$$
(A \cup B)^c = U \setminus (A \cup B) = \{5, 7, 9\}
$$

同样这些元素同时属于两个补集，因此可以写成：

$$
\begin{align}
A^c \cap B^c &= \{5, 7, 8, 9, 10\} \cap \{1, 3, 5, 7, 9\} \\[6pt]
&= \{5, 7, 9\}
\end{align}
$$

两个集合一致，这就对所选的集合验证了第一条定律。

- - -

用同样的集合，我们来验证[容斥原理](../inclusion-exclusion-principle/)，即把两个有限集合的基数相加再减去其交集的基数，从而算出并集基数的公式。$(4)$ 中的两个集合各有五个元素，它们的交集有三个元素：

$$
|A| = 5 \quad |B| = 5 \quad |A \cap B| = 3
$$

在和 $|A| + |B|$ 中，公共元素被计了两次，减去交集的基数就保证并集的每个元素恰好被计一次：

$$
|A \cup B| = 5 + 5 - 3 = 7
$$

直接数 $A \cup B = \{1, 2, 3, 4, 6, 8, 10\}$ 的元素，可以确认 $|A \cup B| = 7$，与该原理的预测一致。

- - -

最后，我们计算[对称差](../sets/)，它由恰好属于两个集合之一的元素组成。根据定义，下面的等式成立：

$$
A \triangle B = (A \setminus B) \cup (B \setminus A)
$$

$A$ 中不属于 $B$ 的元素构成集合 $A \setminus B = \{1, 3\}$，而 $B$ 中不属于 $A$ 的元素构成集合 $B \setminus A = \{8, 10\}$。因此它们的并集为：

$$
A \triangle B = \{1, 3, 8, 10\}
$$

从并集中去掉交集的元素也能得到同样的结果，因为这些元素正是同时属于两个集合的元素：

$$
\begin{align}
(A \cup B) \setminus (A \cap B) &= \{1, 2, 3, 4, 6, 8, 10\} \setminus \{2, 4, 6\} \\[6pt]
&= \{1, 3, 8, 10\}
\end{align}
$$

因此两个表达式都给出 $A\triangle B = \{1, 3, 8, 10\}$。
