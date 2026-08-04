---
title: 罗歇–卡佩利定理
title_en: Rouché-Capelli Theorem
source: https://algebrica.org/rouche-capelli-theorem/
license: CC BY-NC 4.0
tags:
  - augmented-matrix
  - coefficient-matrix
  - consistent-system
  - homogeneous-system
  - linear-algebra
  - linear-systems
  - rank
  - rouche-capelli-theorem
  - solution-set
translation:
  status: current
  source_hash: 9dc1e0eb0927f92313285204cf4428eb3f182a6e7ce91501af2cc197e2622ea3
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定理陈述

罗歇–卡佩利定理用两个矩阵不变量——系数矩阵的[秩](../rank-of-a-matrix/)与增广矩阵的秩——来刻画[线性方程组](../systems-of-linear-equations/)的可解性。考虑一个由 $m$ 个方程、$n$ 个未知量组成的线性方程组，其矩阵形式为：

$$
A\mathbf{x} = \mathbf{b}
$$

其中 $A \in M_{m,n}(\mathbb{R})$ 为系数[矩阵](../matrices/)，$\mathbf{x} \in \mathbb{R}^n$ 为未知量的列[向量](../vectors/)，$\mathbf{b} \in \mathbb{R}^m$ 为常数项的列向量。增广矩阵 $A \mid \mathbf{b}$ 是在 $A$ 中追加 $\mathbf{b}$ 作为额外的一列而得到的，其尺寸为 $m \times (n+1)$。

设 $S$ 是一个由 $m$ 个方程、$n$ 个未知量组成的线性方程组，其系数矩阵为 $A$，增广矩阵为 $A \mid \mathbf{b}$。则：

- 方程组 $S$ 相容当且仅当 $r(A) = r(A \mid \mathbf{b})$；
- 当 $S$ 相容且 $r(A) = r(A \mid \mathbf{b}) = r$ 时，若 $r = n$ 则方程组有唯一解；若 $r < n$ 则有无穷多个解，这些解依赖于 $n - r$ 个自由参数；
- 当 $S$ 相容时，其解为所有向量 $\mathbf{x} = \mathbf{x}_0 + \mathbf{y}$，其中 $\mathbf{x}_0$ 为任意一个固定解，$\mathbf{y}$ 遍历对应的齐次方程组 $A\mathbf{y} = \mathbf{0}$ 的所有解。

第一部分是一个仅用秩来表述的相容性判据。第二部分给出相容方程组的解的计数，并将自由参数的个数等同于未知量个数与公共秩之间的差 $n - r$。第三部分描述解集。一旦已知某个解 $\mathbf{x}_0$，其余每个解与它的差都是齐次方程组的一个解，因此解集就是齐次解空间沿 $\mathbf{x}_0$ 平移所得的结果。

> 当 $A$ 为方阵且[行列式](../determinant/)非零时，方程组的秩为 $n$，可通过[逆矩阵](../inverse-matrix/)以闭式 $\mathbf{x} = A^{-1}\mathbf{b}$ 求解，也可逐个未知量通过[克拉默法则](../cramers-rule/)求解。行列式为零正是该定理所检测的秩亏损的代数对应。

## 几何解释

条件 $r(A) = r(A \mid \mathbf{b})$ 可以通过 $A$ 各列的[线性组合](../linear-combinations/)来理解。用 $C_1, C_2, \ldots, C_n \in \mathbb{R}^m$ 表示 $A$ 的各列。矩阵—向量乘积可以写成：

$$
A\mathbf{x} = x_1 C_1 + x_2 C_2 + \cdots + x_n C_n
$$

因此，求解方程组等价于将 $\mathbf{b}$ 表示为 $A$ 各列的线性组合。这样的表达式存在，当且仅当 $\mathbf{b}$ 属于线性映射 $\mathbf{x} \mapsto A\mathbf{x}$ 的[像](../kernel-and-image-of-a-linear-map/)，也就是 $A$ 的列空间。这当且仅当将 $\mathbf{b}$ 添加到 $A$ 的各列之后不会扩大列空间。由于列空间的维数等于秩，上述最后一个条件恰好就是 $r(A) = r(A \mid \mathbf{b})$。

> 因此，秩的相等性所检验的正是 $\mathbf{b}$ 是否位于 $A$ 各列所张成的子空间中。当该等式不成立时，$\mathbf{b}$ 位于该子空间之外，各列的任何线性组合都无法生成它，方程组无解。

## 定理的证明

定理中关于相容性的部分，可通过[高斯消元法](../gaussian-elimination/)将方程组化为行阶梯形，再分析化简后矩阵中主元的位置来证明。

对增广矩阵 $A \mid \mathbf{b}$ 施行初等行变换，直至得到行阶梯形 $\tilde{A} \mid \tilde{\mathbf{b}}$。同样的变换也将 $A$ 化为行阶梯形矩阵 $\tilde{A}$,因为右侧附加的那一列不影响系数块。初等行变换保持秩不变，故下列等式成立：

$$
r(A) = r(\tilde{A}), \qquad r(A \mid \mathbf{b}) = r(\tilde{A} \mid \tilde{\mathbf{b}})
$$

此外，原方程组 $S$ 与由 $\tilde{A} \mid \tilde{\mathbf{b}}$ 定义的化简后方程组 $\tilde{S}$ 具有相同的解集合，因为每一初等行变换都不改变解集合。交换两个方程、或将某个方程乘以一个非零标量，都产生等价的方程组；将一个方程的若干倍加到另一个方程上，既不会增加也不会消去解。因此，证明就归结为：对已经处于行阶梯形的方程组验证相容性判据。

处于行阶梯形的方程组不相容，当且仅当化简后的增广矩阵含有一行形如 $(0, 0, \ldots, 0 \mid c)$ 且 $c \neq 0$,因为这样的行对应不可能成立的方程 $0 = c$。存在这样一行，等价于 $\tilde{A} \mid \tilde{\mathbf{b}}$ 的最后一列中有一个主元，即一个不属于 $\tilde{A}$ 的主元。当这样的主元存在时，增广矩阵的主元恰好比系数矩阵多一个，故：

$$
r(\tilde{A} \mid \tilde{\mathbf{b}}) = r(\tilde{A}) + 1
$$

当这样的主元不存在时，$\tilde{A} \mid \tilde{\mathbf{b}}$ 的所有主元都落在 $\tilde{A}$ 内，两个矩阵具有相同的秩。因此，$\tilde{S}$ 相容等价于下面的等式：

$$
r(\tilde{A}) = r(\tilde{A} \mid \tilde{\mathbf{b}})
$$

结合上述秩的等式，原方程组 $S$ 相容当且仅当 $r(A) = r(A \mid \mathbf{b})$,这正是要证明的结论。

定理的第二部分可由同样的行阶梯形分析推出。当化简后的方程组相容且有 $r$ 个主元时，与主元列对应的变量可用其余 $n - r$ 个变量表示，这些变量充当自由参数。由此得到唯一解，当且仅当 $n - r = 0$;否则得到一族含 $(n-r)$ 个参数的解。

第三部分描述的是相容性既已成立时的解集合。取一个特解 $\mathbf{x}_0$,使 $A\mathbf{x}_0 = \mathbf{b}$,并设 $\mathbf{x}$ 为任意另一个解。它们的差 $\mathbf{y} = \mathbf{x} - \mathbf{x}_0$ 满足：

$$
A\mathbf{y} = A(\mathbf{x} - \mathbf{x}_0) = A\mathbf{x} - A\mathbf{x}_0 = \mathbf{b} - \mathbf{b} = \mathbf{0}
$$

故 $\mathbf{y}$ 是相应的齐次方程组的解。反过来，若 $\mathbf{y}$ 满足 $A\mathbf{y} = \mathbf{0}$,则：

$$
A(\mathbf{x}_0 + \mathbf{y}) = A\mathbf{x}_0 + A\mathbf{y} = \mathbf{b} + \mathbf{0} = \mathbf{b}
$$

故 $\mathbf{x}_0 + \mathbf{y}$ 也是一个解。因此，每个解都形如 $\mathbf{x}_0 + \mathbf{y}$,其中 $\mathbf{y}$ 属于该齐次方程组的解集合，这就证明了第三部分。

## 例 1

以下方程组展示了唯一解的情形：

$$
\begin{cases}
3x - y = 7 \\[6pt]
x + 2y = 0
\end{cases}
$$

系数矩阵与增广矩阵分别为：

$$
A \mid \mathbf{b} = \begin{pmatrix} 3 & -1 & 7 \\[6pt] 1 & \phantom{-}2 & 0 \end{pmatrix}
$$

由于 $\det(A) = 3 \cdot 2 - (-1) \cdot 1 = 7 \neq 0$，$A$ 的秩为 $2$，即最大值。增广矩阵的秩至多为 $2$，且它包含一个秩为 $2$ 的子矩阵 $A$，故其秩亦为 $2$。罗歇–卡佩利定理随之保证了方程组的相容性，又因 $r = n = 2$，解是唯一的。为求此解，由第二个方程写出 $x = -2y$，代入第一个方程得到 $3(-2y) - y = 7$，从而 $y = -1$。回代即得 $x = 2$。故方程组有唯一解 $(x, y) = (2, -1)$。

## 例 2

以下方程组展示了无穷多解的情形：

$$
\begin{cases}
x_1 + x_2 - x_3 + 2x_4 = 1 \\[6pt]
2x_1 + 2x_2 + x_3 + x_4 = 5 \\[6pt]
x_1 + x_2 + x_4 = 2
\end{cases}
$$

增广矩阵为：

$$
A \mid \mathbf{b} = \begin{pmatrix}
1 & 1 & -1 & 2 & 1 \\[6pt]
2 & 2 & \phantom{-}1 & 1 & 5 \\[6pt]
1 & 1 & \phantom{-}0 & 1 & 2
\end{pmatrix}
$$

将第二行替换为 $R_2 - 2R_1$、第三行替换为 $R_3 - R_1$，化为行阶梯形，得到：

$$
\begin{pmatrix}
1 & 1 & -1 & \phantom{-}2 & 1 \\[6pt]
0 & 0 & \phantom{-}3 & -3 & 3 \\[6pt]
0 & 0 & \phantom{-}1 & -1 & 1
\end{pmatrix}
$$

再施行 $R_2 \to \tfrac{1}{3} R_2$，继之以 $R_3 \to R_3 - R_2$，得到：

$$
\begin{pmatrix}
1 & 1 & -1 & \phantom{-}2 & 1 \\[6pt]
0 & 0 & \phantom{-}1 & -1 & 1 \\[6pt]
0 & 0 & \phantom{-}0 & \phantom{-}0 & 0
\end{pmatrix}
$$

化简后的系数矩阵与增广矩阵各有两个主元，分别位于第一列和第三列。因此 $r(A) = r(A \mid \mathbf{b}) = 2$，方程组相容。由于 $n = 4$ 且 $r = 2$，定理预言解族依赖于两个自由参数。将 $x_2$ 和 $x_4$ 视为参数，由第二个主元方程得 $x_3 = 1 + x_4$，由第一个主元方程得 $x_1 = 1 - x_2 + x_3 - 2 x_4 = 2 - x_2 - x_4$。完整的解集由下式描述：

$$
\begin{cases}
x_1 = 2 - x_2 - x_4 \\[6pt]
x_3 = 1 + x_4
\end{cases}
$$

其中 $x_2, x_4 \in \mathbb{R}$ 任意。合并参数，即呈现定理第三部分所预言的结构：

$$
\begin{pmatrix} x_1 \\[6pt] x_2 \\[6pt] x_3 \\[6pt] x_4 \end{pmatrix}
= \begin{pmatrix} 2 \\[6pt] 0 \\[6pt] 1 \\[6pt] 0 \end{pmatrix}
+ x_2 \begin{pmatrix} -1 \\[6pt] \phantom{-}1 \\[6pt] \phantom{-}0 \\[6pt] \phantom{-}0 \end{pmatrix}
+ x_4 \begin{pmatrix} -1 \\[6pt] \phantom{-}0 \\[6pt] \phantom{-}1 \\[6pt] \phantom{-}1 \end{pmatrix}
$$

第一个向量是 $x_2 = x_4 = 0$ 时所得的特解，另外两个向量则是齐次方程组 $A\mathbf{x} = \mathbf{0}$ 的解。解集是它们所张成的子空间经特解平移的结果，即 $\mathbb{R}^4$ 中一个二维仿射子空间，与定理给出的值 $n - r = 2$ 一致。

## 例 3

以下方程组说明了矛盾方程组的情形：

$$
\begin{cases}
x + 2y + z = 1 \\[6pt]
2x + y + 3z = 1 \\[6pt]
3x + 3y + 4z = 0
\end{cases}
$$

系数矩阵为：

$$
A = \begin{pmatrix}
1 & 2 & 1 \\[6pt]
2 & 1 & 3 \\[6pt]
3 & 3 & 4
\end{pmatrix}
$$

第三行是前两行之和，因此各行线性相关，且 $\det(A) = 0$。于是 $r(A) < 3$。由前两行与前两列构成的子矩阵的行列式为 $1 \cdot 1 - 2 \cdot 2 = -3$，该值非零，从而确认 $r(A) = 2$。增广矩阵为：

$$
A \mid \mathbf{b} = \begin{pmatrix}
1 & 2 & 1 & 1 \\[6pt]
2 & 1 & 3 & 1 \\[6pt]
3 & 3 & 4 & 0
\end{pmatrix}
$$

$A \mid \mathbf{b}$ 的第三行不再是前两行之和，因为常数列使得 $1 + 1 = 2 \neq 0$。为了确认秩已经增大，我们计算由第一、第二和第四列构成的 $3 \times 3$ 子式：

$$
\det \begin{pmatrix}
1 & 2 & 1 \\[6pt]
2 & 1 & 1 \\[6pt]
3 & 3 & 0
\end{pmatrix} = 3 \cdot (2 - 1) - 3 \cdot (1 - 2) + 0 = 3 + 3 = 6
$$

该子式非零，故 $r(A \mid \mathbf{b}) = 3$。由于 $r(A) = 2 \neq 3 = r(A \mid \mathbf{b})$，根据罗歇–卡佩利定理，该方程组无解。

## 含参数系统的讨论

当方程组的系数依赖于某个[参数](../linear-equations-with-parameters/)时，秩会随参数的变化而改变，解的分类也随之改变。考虑如下方程组：

$$
\begin{cases}
k x + 2 y = 2 \\[6pt]
3 x + (k+1) y = 3
\end{cases}
$$

其中参数为 $k \in \mathbb{R}$。系数矩阵为：

$$
A = \begin{pmatrix} k & 2 \\[6pt] 3 & k+1 \end{pmatrix}
$$

其行列式为：

$$
\det(A) = k(k+1) - 6 = k^2 + k - 6 = (k - 2)(k + 3)
$$

该行列式当且仅当 $k = 2$ 和 $k = -3$ 时为零。对于 $k$ 的所有其他取值，行列式不为零，因此 $r(A) = 2$。增广矩阵的秩至多为 $2$，而已包含秩为 $2$ 的子矩阵 $A$，因此也有 $r(A \mid \mathbf{b}) = 2$。由罗歇–卡佩利定理可知，方程组有唯一解。

当 $k = 2$ 时，代入得：

$$
A = \begin{pmatrix} 2 & 2 \\[6pt] 3 & 3 \end{pmatrix}, \qquad A \mid \mathbf{b} = \begin{pmatrix} 2 & 2 & 2 \\[6pt] 3 & 3 & 3 \end{pmatrix}
$$

两个方程都化简为 $x + y = 1$，因此 $r(A) = r(A \mid \mathbf{b}) = 1$。方程组相容，且有一族单参数解，形式为 $(x, y) = (1 - t, t)$，其中 $t \in \mathbb{R}$。

当 $k = -3$ 时，代入得：

$$
A = \begin{pmatrix} -3 & \phantom{-}2 \\[6pt] \phantom{-}3 & -2 \end{pmatrix}, \qquad A \mid \mathbf{b} = \begin{pmatrix} -3 & \phantom{-}2 & 2 \\[6pt] \phantom{-}3 & -2 & 3 \end{pmatrix}
$$

$A$ 的第二行是第一行的相反数，因此 $r(A) = 1$。然而对于增广矩阵，由第一列和第三列构成的子式行列式为：

$$
\det \begin{pmatrix} -3 & 2 \\[6pt] \phantom{-}3 & 3 \end{pmatrix} = -9 - 6 = -15
$$

该行列式不为零，因此 $r(A \mid \mathbf{b}) = 2$。两个秩不相等，因此方程组不相容。综上所述，当 $k \neq 2$ 且 $k \neq -3$ 时方程组有唯一解，当 $k = 2$ 时有无穷多解，当 $k = -3$ 时无解。

## 齐次方程组

齐次线性方程组的形式为：

$$
A\mathbf{x} = \mathbf{0}
$$

增广矩阵与 $A$ 的区别仅在于多了一列零，这不会增加秩。因此 $r(A) = r(A \mid \mathbf{0})$ 恒成立，罗歇–卡佩利定理表明每个齐次方程组都是相容的。零向量 $\mathbf{x} = \mathbf{0}$ 总是一个解，称为平凡解。

该定理还描述了非平凡解存在的条件。若 $r(A) = n$，则方程组仅有平凡解。若 $r(A) < n$，则解集合构成一个 $(n - r)$ 参数族，其中必然包含非零向量。由此得到非平凡解存在性的判据：

> 齐次方程组 $A\mathbf{x} = \mathbf{0}$ 存在非平凡解当且仅当 $r(A) < n$。

对方程个数等于未知量个数的方阵方程组，即 $m = n$，该条件变为 $\det(A) = 0$。对方程个数少于未知量个数的方程组，即 $m < n$，秩不能超过 $m$，因而严格小于 $n$；这类方程组总是存在非平凡解。
