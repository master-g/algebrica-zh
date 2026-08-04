---
title: 方阵的行列式
title_en: Determinant of a Square Matrix
source: https://algebrica.org/determinant/
license: CC BY-NC 4.0
tags:
  - binet-theorem
  - determinant
  - gaussian-elimination
  - laplace-expansion
  - linear-algebra
  - matrices
  - sarrus-rule
  - vandermonde-determinant
translation:
  status: current
  source_hash: 8fa1bc7430e50d939ad7a02aa9860e0e4de4e69bd30ee97863721c17af9fce3e
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

对于每一个阶数为 $n$ 的[方阵](../matrices/)，都可以关联一个[实数](../types-of-numbers/)，称为该矩阵的行列式，记作 $\det(A)$ 或 $|A|$。行列式是一个标量值函数，它编码了相关[线性映射](../linear-maps/)的代数性质和几何性质：

$$\det : M_n(\mathbb{R}) \to \mathbb{R}$$

它判断矩阵是否可逆，并度量变换缩放体积的因子。它出现在通过[克莱姆法则](../cramers-rule/)求解[线性方程组](../rouche-capelli-theorem/)的显式解中，以及[特征值](../eigenvalues-and-eigenvectors/)和线性变换的研究中。1 阶矩阵的行列式就是元素本身：

$$A = \begin{pmatrix} a_{11} \end{pmatrix} \implies \det(A) = a_{11}$$

对于 2 阶方阵，行列式是主对角线上元素的乘积与副对角线上元素的乘积之差：

$$
A = \begin{pmatrix} a_{11} & a_{12} \\[6pt] a_{21} & a_{22} \end{pmatrix}
\implies
\det(A) = a_{11} \cdot a_{22} - a_{21} \cdot a_{12}
$$

例如：

$$
A = \begin{pmatrix} 3 & 2 \\[6pt] 1 & 4 \end{pmatrix}
\implies
\det(A) = 3 \cdot 4 - 1 \cdot 2 = 10
$$

## 对角矩阵和三角矩阵

对于对角矩阵，即所有非对角元素均为零的方阵，行列式等于主对角线上元素的乘积：

$$
A = \begin{pmatrix}
a_{11} & 0 & \cdots & 0 \\[6pt]
0 & a_{22} & \cdots & 0 \\[6pt]
\vdots & \vdots & \ddots & \vdots \\[6pt]
0 & 0 & \cdots & a_{nn}
\end{pmatrix}
\implies
\det(A) = a_{11} \cdot a_{22} \cdot \ldots \cdot a_{nn}
$$

同样的结论适用于上三角矩阵和下三角矩阵。在这两种情形下，行列式都是对角元的乘积，因为展开中的所有额外项均为零。

## 拉普拉斯展开

$n \geq 3$ 阶方阵的行列式可以用代数余子式展开（也称拉普拉斯展开）递归计算。给定 $n$ 阶方阵 $A = (a_{ij})$，子式 $M_{ij}$ 是删去 $A$ 的第 $i$ 行和第 $j$ 列后所得 $(n-1) \times (n-1)$ 子矩阵的行列式。代数余子式 $C_{ij}$ 定义为：

$$C_{ij} = (-1)^{i+j} \cdot M_{ij}$$

符号因子 $(-1)^{i+j}$ 在 $i+j$ 为偶数时取正，在 $i+j$ 为奇数时取负。沿任意一行 $i$ 展开即可得到 $A$ 的行列式：

$$\det(A) = \sum_{k=1}^{n} a_{ik} \cdot C_{ik} = \sum_{k=1}^{n} a_{ik} \cdot (-1)^{i+k} \cdot M_{ik}$$

沿任意一列 $j$ 展开可得到相同结果：

$$\det(A) = \sum_{k=1}^{n} a_{kj} \cdot C_{kj}$$

以下示例展示了 3 阶矩阵的计算过程。考虑：

$$
A = \begin{pmatrix}
2 & 0 & -1 \\[6pt]
3 & -2 & 0 \\[6pt]
1 & 4 & 1
\end{pmatrix}
$$

沿第一行展开，计算每个元素的代数余子式贡献。

- - -

对于 $a_{11} = 2$，子式是删去第 1 行和第 1 列后所得子矩阵的行列式：

$$C_{11} = (-1)^{1+1} \cdot \det\begin{pmatrix} -2 & 0 \\[6pt] 4 & 1 \end{pmatrix} = (+1) \cdot (-2-0) = -2$$

贡献为 $a_{11} \cdot C_{11} = 2 \cdot (-2) = -4$。

- - -

对于 $a_{12} = 0$，子式为：

$$C_{12} = (-1)^{1+2} \cdot \det\begin{pmatrix} 3 & 0 \\[6pt] 1 & 1 \end{pmatrix} = (-1) \cdot (3-0) = -3$$

贡献为 $a_{12} \cdot C_{12} = 0 \cdot (-3) = 0$。

- - -

对于 $a_{13} = -1$，子式为：

$$C_{13} = (-1)^{1+3} \cdot \det\begin{pmatrix} 3 & -2 \\[6pt] 1 & 4 \end{pmatrix} = (+1) \cdot (12+2) = 14$$

贡献为 $a_{13} \cdot C_{13} = (-1) \cdot 14 = -14$。

- - -

将三项贡献相加，得到：

$$\det(A) = -4 + 0 + (-14) = -18$$

> 拉普拉斯展开的计算代价随矩阵阶数呈阶乘增长，时间复杂度为 $O(n!)$。因此，该方法对于数值应用中的大型矩阵并不实用，更倾向于使用 LU 分解等更高效的算法。

## 萨卢斯法则

对于 3 阶矩阵，行列式可用萨卢斯法则计算。这是一种直接的助记方法，与拉普拉斯展开等价。给定矩阵：

$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\[6pt]
a_{21} & a_{22} & a_{23} \\[6pt]
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

行列式为：

$$
\begin{align}
\det(A) &= a_{11} a_{22} a_{33} + a_{12} a_{23} a_{31} + a_{13} a_{21} a_{32} \\[6pt]
&\quad - a_{13} a_{22} a_{31} - a_{11} a_{23} a_{32} - a_{12} a_{21} a_{33}
\end{align}
$$

三个正项对应三条主对角线（左上至右下）方向的乘积，三个负项对应三条副对角线（右上至左下）方向的乘积。一种直观的记法是将 $A$ 的前两列附在右侧：

$$
\begin{pmatrix}
a_{11} & a_{12} & a_{13} & \color{gray}{a_{11}} & \color{gray}{a_{12}} \\[6pt]
a_{21} & a_{22} & a_{23} & \color{gray}{a_{21}} & \color{gray}{a_{22}} \\[6pt]
a_{31} & a_{32} & a_{33} & \color{gray}{a_{31}} & \color{gray}{a_{32}}
\end{pmatrix}
$$

以下示例将萨卢斯法则应用于一个具体矩阵。考虑：

$$
A = \begin{pmatrix}
1 & -2 & 3 \\[6pt]
0 & 4 & -1 \\[6pt]
2 & 1 & 0
\end{pmatrix}
$$

得到：

$$
\begin{align}
\det(A) &= (1)(4)(0) + (-2)(-1)(2) + (3)(0)(1) \\[6pt]
&\quad - (3)(4)(2) - (1)(-1)(1) - (-2)(0)(0) \\[6pt]
&= 0 + 4 + 0 - 24 + 1 + 0 \\[6pt]
&= -19
\end{align}
$$

> 萨卢斯法则仅适用于 3 阶矩阵，不能推广到更高阶。

## 行列式与初等变换

行列式在行的三种初等变换下表现可控，由于 $\det(A^{\mathrm{T}}) = \det(A)$，相同的结论对相应的列变换也成立。设 $A'$ 为由 $A$ 经一次初等变换得到的矩阵。

+ 将某一行的倍数加到另一行上，行列式不变：$\det(A') = \det(A)$。
+ 将某一行乘以标量 $\alpha$，行列式乘以同一标量：$\det(A') = \alpha \det(A)$。
+ 交换相异的两行，行列式变号：$\det(A') = -\det(A)$。

第一条规则解释了为何两行成比例的矩阵行列式为零：将其中一行的适当倍数加到另一行即可得到全零行。第三条规则表明，仅交换一次行便足以使行列式变号，而偶数次交换则恢复原号。

## 通过行变换计算行列式

初等变换下的行为给出了一种计算行列式的方法，可避免拉普拉斯展开的阶乘代价。通过初等变换将矩阵化为三角矩阵形式，记录每次变换对行列式的影响，并将三角矩阵的行列式读为其对角元素的乘积。

考虑矩阵：

$$
A = \begin{pmatrix}
0 & 2 & 1 \\[6pt]
1 & 1 & 1 \\[6pt]
2 & 0 & 3
\end{pmatrix}
$$

位置 $(1,1)$ 处的元素为零，因此交换前两行。单次交换使行列式变号：

$$
\begin{pmatrix}
1 & 1 & 1 \\[6pt]
0 & 2 & 1 \\[6pt]
2 & 0 & 3
\end{pmatrix}
$$

从第三行减去第一行的两倍，以消去对角线下方第一列的元素。将一行的倍数加到另一行上，行列式不变：

$$
\begin{pmatrix}
1 & 1 & 1 \\[6pt]
0 & 2 & 1 \\[6pt]
0 & -2 & 1
\end{pmatrix}
$$

将第二行加到第三行，消去对角线下方剩余的元素，行列式仍不变：

$$
\begin{pmatrix}
1 & 1 & 1 \\[6pt]
0 & 2 & 1 \\[6pt]
0 & 0 & 2
\end{pmatrix}
$$

矩阵已化为上三角，其行列式为对角元素的乘积 $1 \cdot 2 \cdot 2 = 4$。过程中使用了一次行交换，因此原矩阵的行列式为该值的相反数：

$$\det(A) = -4$$

> 将 $n$ 阶矩阵化为三角矩阵形式大约需要 $2n^3/3$ 次算术运算，而完整的拉普拉斯展开大约需要 $n \cdot n!$ 次。当阶数超过三或四时，行变换是首选方法。

## 行列式的性质

以下是行列式的基本性质。

+ 若 $A$ 有一整行或一整列全为零，则 $\det(A) = 0$。
+ 若 $A$ 有两行或两列成比例，则 $\det(A) = 0$。更一般地，若某一行或某一列是其他行或列的[线性组合](../linear-combinations/)，则 $\det(A) = 0$。
+ 若某一行或某一列的所有元素都乘以标量 $k$，则行列式乘以 $k$。等价地，可以从任何一行或一列中提取标量因子：对于 $n$ 阶矩阵，$\det(kA) = k^n \det(A)$。
+ 乘积的行列式等于行列式的乘积，这一结论称为比内定理：$\det(AB) = \det(A) \cdot \det(B)$。
+ 转置的行列式等于原矩阵的行列式：$\det(A^{\mathrm{T}}) = \det(A)$。
+ 方阵 $A$ 可逆当且仅当 $\det(A) \neq 0$。当 $\det(A) = 0$ 时，该矩阵称为奇异矩阵，正如[逆矩阵](../inverse-matrix/)词条中所讨论的那样。同样的条件等价于 $n$ 阶方阵的[秩](../rank-of-a-matrix/)为 $n$。

> 比内定理涉及乘积而非和。一般情况下 $\det(A + B) \neq \det(A) + \det(B)$。例如，设 $A = I_2$ 和 $B = -I_2$，这两个行列式都等于 $1$，而 $A + B = O$ 的行列式为 $0$。

> 恒等式 $\det(AB) = \det(A) \cdot \det(B)$ 与 $\det(I) = 1$ 一起，将行列式表示为从一般线性群 $GL_n(\mathbb{R})$ 到[域](../fields/) $\mathbb{R}$ 乘法群的[群](../groups/)同态。该同态的核为特殊线性群 $SL_n(\mathbb{R})$，由行列式为 1 的矩阵构成。

> 线性方程组的[Rouché–Capelli 定理](../rouche-capelli-theorem/)使用了同样的标量判据：方阵系统 $A\mathbf{x} = \mathbf{b}$ 有唯一解当且仅当 $\det(A) \neq 0$，这也是克拉默法则给出显式封闭解的条件。

## 克莱姆法则

当一个方阵[线性方程组](../rouche-capelli-theorem/) $A\mathbf{x} = \mathbf{b}$ 的系数矩阵可逆时，行列式以行列式之比给出每个未知量的封闭形式解 $x_j = \det(A_j)/\det(A)$，其中 $A_j$ 由 $A$ 将其第 $j$ 列替换为 $\mathbf{b}$ 而得到。该方法在[克莱姆法则](../cramers-rule/)的专门条目中讨论。

## 范德蒙德行列式

在多项式插值中，会出现一族反复出现的行列式。给定 $n$ 个标量 $x_1, x_2, \ldots, x_n$，范德蒙德矩阵以 $1, x_i, x_i^2, \ldots, x_i^{n-1}$ 作为其第 $i$ 行：

$$
V = \begin{pmatrix}
1 & x_1 & x_1^2 & \cdots & x_1^{n-1} \\[6pt]
1 & x_2 & x_2^2 & \cdots & x_2^{n-1} \\[6pt]
\vdots & \vdots & \vdots & \ddots & \vdots \\[6pt]
1 & x_n & x_n^2 & \cdots & x_n^{n-1}
\end{pmatrix}
$$

其行列式可因式分解为所有满足 $i > j$ 的差 $x_i - x_j$ 之积：

$$\det(V) = \prod_{i > j} (x_i - x_j)$$

该乘积恰在 $x_i$ 中有两个相等时为零，因此矩阵可逆当且仅当值 $x_1, x_2, \ldots, x_n$ 互不相同。这就是一个次数至多为 $n-1$ 的多项式由其在 $n$ 个不同点上的值唯一确定的原因，因为其系数求解的是一个以范德蒙德矩阵为系数矩阵的线性方程组。

对于三个值 $x_1 = 1$、$x_2 = 2$、$x_3 = 4$，矩阵及其行列式为：

$$
V = \begin{pmatrix}
1 & 1 & 1 \\[6pt]
1 & 2 & 4 \\[6pt]
1 & 4 & 16
\end{pmatrix}
\qquad
\det(V) = (2-1)(4-1)(4-2) = 6
$$

直接展开行列式得到相同的值。
