---
title: 克拉默法则
title_en: Cramer's Rule
source: https://algebrica.org/cramers-rule/
license: CC BY-NC 4.0
tags:
  - coefficient-matrix
  - cramers-rule
  - determinant
  - homogeneous-system
  - linear-algebra
  - linear-systems
translation:
  status: current
  source_hash: 12ce55b902787f0c3e95dd585850fabd664e29aa3ba0d69a803821dc1a77e418
  translator: omp
  updated: "2026-08-01T05:09:50.807Z"
---
## 定义

克拉默法则通过系数[矩阵](../matrices/)的[行列式](../determinant/)，求解由 $n$ 个[线性方程](../linear-equations/)组成、含 $n$ 个未知量的[方程组](../systems-of-linear-equations/)。当系数矩阵为方阵且行列式非零时该法则适用，这正是方程组有唯一解的条件。

考虑一个由 $n$ 个方程组成、含 $n$ 个未知量的一般方程组：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\[6pt]
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\[6pt]
\quad\vdots \\[6pt]
a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n = b_n
\end{cases}
$$

该方程组的矩阵形式为 $A\mathbf{x} = \mathbf{b}$，其系数矩阵为：

$$
A =
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\[6pt]
a_{21} & a_{22} & \cdots & a_{2n} \\[6pt]
\vdots & \vdots & \ddots & \vdots \\[6pt]
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{pmatrix}
$$

未知量与常量分别构成两个列[向量](../vectors/)：

$$
\mathbf{x} =
\begin{pmatrix}
x_1 \\[6pt]
x_2 \\[6pt]
\vdots \\[6pt]
x_n
\end{pmatrix}
\qquad
\mathbf{b} =
\begin{pmatrix}
b_1 \\[6pt]
b_2 \\[6pt]
\vdots \\[6pt]
b_n
\end{pmatrix}
$$

设系数矩阵 $A$ 可逆，即 $\det(A) \neq 0$。此时方程组有唯一解，$A$ 的逆将其表示为：

$$
\begin{pmatrix}
x_1 \\[6pt]
x_2 \\[6pt]
\vdots \\[6pt]
x_n
\end{pmatrix}
=
\frac{1}{\det(A)}
\begin{pmatrix}
A_{11} & A_{21} & \cdots & A_{n1} \\[6pt]
A_{12} & A_{22} & \cdots & A_{n2} \\[6pt]
\vdots & \vdots & \ddots & \vdots \\[6pt]
A_{1n} & A_{2n} & \cdots & A_{nn}
\end{pmatrix}
\begin{pmatrix}
b_1 \\[6pt]
b_2 \\[6pt]
\vdots \\[6pt]
b_n
\end{pmatrix}
$$

这就是克拉默法则的一般形式。其中 $A_{ij}$ 是元素 $a_{ij}$ 的代数余子式，因此与 $\mathbf{b}$ 相乘的矩阵是余子式矩阵的转置，即 $A$ 的伴随矩阵，记为 $\mathrm{adj}(A)$。

第 $k$ 个位置的未知量是一个分数，其分母为 $\det(A)$，分子为将 $A$ 的第 $k$ 列替换为常数列后所得矩阵 $A_k$ 的行列式：

$$
x_k = \frac{\det(A_k)}{\det(A)}
$$

## 规则的证明

克拉默法则指出，若 $A$ 是可逆的 $n \times n$ 矩阵，$A_k$ 表示将 $A$ 的第 $k$ 列替换为常数 $\mathbf{b}$ 后所得的矩阵，则 $A\mathbf{x} = \mathbf{b}$ 的唯一解的分量为 $x_k = \det(A_k)/\det(A)$。该公式仅由行列式的两条性质导出，无需借助逆矩阵。将一列加上另一列的标量倍数不改变行列式的值，而将单列乘以标量则使行列式乘以该标量。

将 $A$ 的各列记为 $C_1, C_2, \dots, C_n$。乘积 $A\mathbf{x}$ 以未知数为系数组合这些列，因此方程 $A\mathbf{x} = \mathbf{b}$ 就是如下的单列等式：

$$
\mathbf{b} = x_1 C_1 + x_2 C_2 + \dots + x_n C_n
$$

固定一个下标 $k$。按构造，$A_k$ 的第 $k$ 列为 $\mathbf{b}$，其余各列均与 $A$ 相同：

$$
A_k = \left( C_1 \ \cdots \ C_{k-1} \ \ \mathbf{b} \ \ C_{k+1} \ \cdots \ C_n \right)
$$

用上述等式替换 $\mathbf{b}$，并对每个 $j \neq k$，从第 $k$ 列减去 $x_j C_j$。每一步都减去了 $A_k$ 的某一列的倍数，因此均不改变行列式的值。当所有含 $j \neq k$ 的项都被消去后，第 $k$ 列就收缩为 $x_k C_k$：

$$
\det(A_k) = \det\left( C_1 \ \cdots \ x_k C_k \ \cdots \ C_n \right)
$$

从该列中提出标量 $x_k$，得到：

$$
\det(A_k) = x_k \det\left( C_1 \ \cdots \ C_k \ \cdots \ C_n \right) = x_k \det(A)
$$

由于 $A$ 可逆，$\det(A) \neq 0$，相除即得未知数：

$$
x_k = \frac{\det(A_k)}{\det(A)}
$$

同样的计算对每个 $k = 1, \dots, n$ 均成立，从而完成了法则的证明。

## 几何解释

公式中的每个行列式都是一个有向面积，在更高维数中则是有向体积。取 $n = 2$，将列 $C_1$ 和 $C_2$ 视为平面中的向量。方程变为 $x_1 C_1 + x_2 C_2 = \mathbf{b}$，而 $\det(A)$ 是以 $C_1$ 和 $C_2$ 为边构成的平行四边形的有向面积。

从以 $x_1 C_1$ 和 $C_2$ 为边构成的平行四边形出发。将一条边按因子 $x_1$ 拉伸，面积也按同一因子拉伸，因此其有向面积为 $x_1 \det(A)$。现在将该边加上 $x_2 C_2$，沿 $C_2$ 的方向滑动。将一条边沿与对边平行的方向滑动，底数和高均保持不变，因此面积不变。该边变为 $x_1 C_1 + x_2 C_2 = \mathbf{b}$，平行四边形此时以 $\mathbf{b}$ 和 $C_2$ 为边，其有向面积为 $\det(A_1)$。令两个面积相等，得：

$$
\det(A_1) = x_1 \det(A)
$$

因此 $x_1 = \det(A_1)/\det(A)$。交换两列的角色，以同样方式可得 $x_2$。

对于 $n$ 个未知数，$n$ 个向量的行列式是它们所张成的平行六面体的有向体积，而上面用到的两种操作——缩放一条边以及使其沿平行于其他边的方向剪切——都无需改变即可推广。它们对每个 $k$ 都重现了 $\det(A_k) = x_k \det(A)$，这正是已经通过代数推导得到的关系。

> 面积在滑动步骤下的不变性是卡瓦列里原理的平面情形，该原理赋予平行截面积相等的两个立体以相同的体积。

## 计算开销

克拉默法则是一个公式，而非实用算法。通过它求解 $n \times n$ 阶方程组意味着计算 $n + 1$ 个 $n$ 阶行列式，即分母 $\det(A)$ 加上每个未知数各一个分子 $\det(A_k)$。直接从定义展开一个 $n$ 阶行列式需要累加 $n!$ 个带号乘积，因此其开销增长快于 $n$ 的任何指数函数。

高斯消元法用大约 $n^3/3$ 次算术运算将系数矩阵化为三角形，而行列式就是消元完成后各主元的乘积，此时方程组已然解出。对于 $n = 20$，单个行列式的展开大约需要 $20! \approx 2 \cdot 10^{18}$ 次乘法，而消元法大约只需 $20^3/3 \approx 2.7 \cdot 10^3$ 次运算。克拉默法则对于小型方程组以及需要将每个未知数表示为行列式之显式比值的理论论证仍然有用。

## 齐次方程组的解

[齐次方程组](../systems-of-linear-equations/)的所有常数项均为零。这样的方程组总是有平凡解，即每个未知数都为零，而系数矩阵的行列式决定是否存在其他解：

+ 若 $\det(A) \neq 0$，则方程组只有平凡解。
+ 若 $\det(A) = 0$，则方程组有无穷多个解，其中包括至少一个未知数非零的非平凡解。

> 齐次方程组总是相容的，因为平凡解满足每个方程。

## 示例 1

考虑以下由三个未知量构成的三元齐次方程组：

$$
\begin{cases}
x + y + z = 0 \\[6pt]
2x - y + z = 0 \\[6pt]
3x + y + 2z = 0
\end{cases}
$$

该方程组的矩阵形式为 $A\mathbf{x} = \mathbf{0}$，其系数矩阵为：

$$
A = \begin{pmatrix}
1 & 1 & 1 \\[6pt]
2 & -1 & 1 \\[6pt]
3 & 1 & 2
\end{pmatrix}
$$

解的性质取决于 $A$ 的行列式：

$$
\begin{align}
\det(A) &= 1 \cdot (-1 \cdot 2 - 1 \cdot 1) - 1 \cdot (2 \cdot 2 - 1 \cdot 3) + 1 \cdot (2 \cdot 1 - (-1) \cdot 3) \\[6pt]
&= 1(-2 - 1) - 1(4 - 3) + 1(2 + 3) \\[6pt]
&= -3 - 1 + 5 \\[6pt]
&= 1
\end{align}
$$

由于行列式非零，该方程组仅有平凡解：

$$
x = 0 \quad y = 0 \quad z = 0
$$

> 这与克拉默法则一致。当 $\det(A) \neq 0$ 时，每个分子 $\det(A_k)$ 都含有一个全零列，因此每个 $x_k = 0$ 均为零，平凡解是唯一的解。

## 示例 2

求解以下二元线性方程组：

$$
\begin{cases}
2x + 3y = 8 \\[6pt]
4x - y = 2
\end{cases}
$$

识别出系数矩阵 $A$、未知向量 $\mathbf{x}$ 和常数向量 $\mathbf{b}$：

$$
A = \begin{pmatrix}
2 & 3 \\[6pt]
4 & -1
\end{pmatrix}
\qquad
\mathbf{x} = \begin{pmatrix}
x \\[6pt]
y
\end{pmatrix}
\qquad
\mathbf{b} = \begin{pmatrix}
8 \\[6pt]
2
\end{pmatrix}
$$

系数矩阵的行列式为：

$$
\det(A) = 2 \cdot (-1) - 3 \cdot 4 = -2 - 12 = -14
$$

由于其值非零，该方程组恰有唯一解，克拉默法则适用。

将 $A$ 的第一列替换为常数，得到 $A_1$：

$$
A_1 = \begin{pmatrix}
8 & 3 \\[6pt]
2 & -1
\end{pmatrix}
\qquad\rightarrow\qquad
\det(A_1) = 8 \cdot (-1) - 3 \cdot 2 = -8 - 6 = -14
$$

将 $A$ 的第二列替换为常数，得到 $A_2$：

$$
A_2 = \begin{pmatrix}
2 & 8 \\[6pt]
4 & 2
\end{pmatrix}
\qquad\rightarrow\qquad
\det(A_2) = 2 \cdot 2 - 8 \cdot 4 = 4 - 32 = -28
$$

由公式求出各未知量：

$$
\begin{align}
x &= \frac{\det(A_1)}{\det(A)} = \frac{-14}{-14} = 1 \\[6pt]
y &= \frac{\det(A_2)}{\det(A)} = \frac{-28}{-14} = 2
\end{align}
$$

该方程组的解为：

$$
x = 1 \qquad y = 2
$$

> 线性方程组的解是一个 $n$ 元组，它同时满足每一个方程。此处，数对 $(x, y) = (1, 2)$ 是唯一同时满足两个方程的解。
