---
title: 矩阵
title_en: Matrices
source: https://algebrica.org/matrices/
license: CC BY-NC 4.0
tags:
  - antisymmetric-matrices
  - linear-algebra
  - matrices
  - matrix-multiplication
  - matrix-operations
  - matrix-powers
  - nilpotent-matrices
  - trace
  - transpose
  - vector-space
translation:
  status: current
  source_hash: 3aba2c824ef86593dbbc3546e931e24f88881aa7cd02f074d6d74b43913ce76f
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 引言

矩阵是由[实数](../types-of-numbers/)按行列排列而成的矩形阵列。一个有 $m$ 行 $n$ 列的矩阵，其维数为 $m \times n$。例如，一个 $3 \times 2$ 矩阵有 3 行 2 列。矩阵中出现的每个数称为元素。元素由两个下标索引来标识：第一个表示行，第二个表示列。因此 $a_{2,3}$ 表示第二行第三列的元素。一个维数为 $m \times n$ 的矩阵 $A$ 写作：

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\[6pt]
a_{21} & a_{22} & \cdots & a_{2n} \\[6pt]
\vdots & \vdots & \ddots & \vdots \\[6pt]
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

也可简写为 $A = (a_{ij})$，其中 $a_{ij}$ 表示第 $i$ 行第 $j$ 列的元素，$1 \leq i \leq m$ 且 $1 \leq j \leq n$。

> 所有元素为实数的 $m \times n$ 矩阵的集合在加法下构成阿贝尔群。当限定于 $n$ 阶方阵时，矩阵乘法的附加结构使 $M_{n \times n}(\mathbb{R})$ 成为一个[环](../rings/)。$n$ 阶可逆矩阵的子集在乘法下构成一个[群](../groups/)，称为一般线性群 $GL(n, \mathbb{R})$。

## 向量与零矩阵

由单行构成的矩阵是行[向量](../vectors/)，由单列构成的矩阵是列向量。下面是一个有 3 列的行向量 $A$ 和一个有 3 行的列向量 $B$：

$$
A = \begin{pmatrix} a_1 & a_2 & a_3 \end{pmatrix}
\qquad
B = \begin{pmatrix} b_1 \\[6pt] b_2 \\[6pt] b_3 \end{pmatrix}
$$

每个元素都等于零的矩阵称为零矩阵，记为 $O$。零矩阵是矩阵加法的加法单位元，下文将作讨论。

> 行向量和列向量在通常意义上都是矩阵，遵循所有相同的代数规则。此处将其作为特殊情形处理以求清晰，但在[线性组合](../linear-combinations/)和[向量空间](../vector-spaces/)的语境中将作更深入的讨论。

## 方阵与特殊类型

当一个矩阵的行数等于列数时，即其维数为 $n \times n$ 时，该矩阵称为方阵。整数 $n$ 称为矩阵的阶。在方阵中，满足 $i = j$ 的元素 $a_{ij}$ 构成主对角线（$a_{11}, a_{22}, a_{33}$）。满足 $i + j = n+1$ 的元素构成副对角线：

$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\[6pt]
a_{21} & a_{22} & a_{23} \\[6pt]
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

主对角线以外的所有元素均为零的方阵称为对角矩阵。下面是一个 $3 \times 3$ 对角矩阵的例子：

$$
D = \begin{pmatrix}
4 & 0 & 0 \\[6pt]
0 & 5 & 0 \\[6pt]
0 & 0 & 6
\end{pmatrix}
$$

$n$ 阶单位矩阵记为 $I_n$，它是对角元素全部等于 $1$ 的对角矩阵：

$$
I_3 = \begin{pmatrix}
1 & 0 & 0 \\[6pt]
0 & 1 & 0 \\[6pt]
0 & 0 & 1
\end{pmatrix}
$$

标量矩阵是对角元素全部等于同一个值 $k$ 的对角矩阵，因此其形式为 $kI_n$。下面是与 $k = 5$ 对应的 $3$ 阶标量矩阵：

$$
5I_3 = \begin{pmatrix}
5 & 0 & 0 \\[6pt]
0 & 5 & 0 \\[6pt]
0 & 0 & 5
\end{pmatrix}
$$

主对角线以下所有元素均为零的方阵称为上三角矩阵，主对角线以上所有元素均为零的方阵称为下三角矩阵：

$$
U = \begin{pmatrix}
2 & -1 & 3 \\[6pt]
0 & 5 & 4 \\[6pt]
0 & 0 & 7
\end{pmatrix}
\qquad
L = \begin{pmatrix}
3 & 0 & 0 \\[6pt]
-2 & 6 & 0 \\[6pt]
5 & 1 & 4
\end{pmatrix}
$$

方阵 $A$ 是对称矩阵的条件是它等于自身的转置，即 $A = A^{\mathrm{T}}$。这意味着对所有 $i$ 和 $j$ 都有 $a_{ij} = a_{ji}$：第 $i$ 行第 $j$ 列的元素等于第 $j$ 行第 $i$ 列的元素。下面是一个 $3 \times 3$ 对称矩阵：

$$
S = \begin{pmatrix}
1 & 3 & -2 \\[6pt]
3 & 0 & 5 \\[6pt]
-2 & 5 & 4
\end{pmatrix}
$$

> 对称矩阵出现在二次型、[内积空间](../inner-product-spaces/)和谱理论中。每个实对称矩阵都有实数[特征值](../eigenvalues-and-eigenvectors/)和正交的特征向量基，这一结论称为谱定理。

方阵 $A$ 是反对称矩阵（也称斜对称矩阵）的条件是它等于其转置的相反数，即 $A^{\mathrm{T}} = -A$。用元素表示即为对所有 $i$ 和 $j$ 都有 $a_{ij} = -a_{ji}$。令 $i = j$ 得到 $a_{ii} = -a_{ii}$，因此反对称矩阵主对角线上的每个元素都为零。下面是一个 $3 \times 3$ 反对称矩阵：

$$
T = \begin{pmatrix}
0 & 2 & -3 \\[6pt]
-2 & 0 & 5 \\[6pt]
3 & -5 & 0
\end{pmatrix}
$$

> 同时为对称矩阵和反对称矩阵的只有零矩阵，因为 $a_{ij} = a_{ji}$ 和 $a_{ij} = -a_{ji}$ 一起迫使 $a_{ij} = 0$。每个方阵都可以唯一地分解为 $A = \frac{1}{2}(A + A^{\mathrm{T}}) + \frac{1}{2}(A - A^{\mathrm{T}})$，其中第一项是对称矩阵，第二项是反对称矩阵。

## 转置

维数为 $m \times n$ 的矩阵 $A$ 的转置记作 $A^{\mathrm{T}}$，是通过交换 $A$ 的行与列所得到的维数为 $n \times m$ 的矩阵。形式上，$A^{\mathrm{T}}$ 中位置 $(i,j)$ 处的元素即为 $A$ 中位置 $(j,i)$ 处的元素。例如：

$$
A = \begin{pmatrix}
2 & -1 & 3 \\[6pt]
7 & 5 & 4 \\[6pt]
9 & 6 & 8
\end{pmatrix}
\qquad
A^{\mathrm{T}} = \begin{pmatrix}
2 & 7 & 9 \\[6pt]
-1 & 5 & 6 \\[6pt]
3 & 4 & 8
\end{pmatrix}
$$

对于维数兼容的矩阵 $A$ 和 $B$ 以及任意标量 $k$，转置满足以下性质：

+ $(A^{\mathrm{T}})^{\mathrm{T}} = A$
+ $(A + B)^{\mathrm{T}} = A^{\mathrm{T}} + B^{\mathrm{T}}$
+ $(kA)^{\mathrm{T}} = k A^{\mathrm{T}}$
+ $(AB)^{\mathrm{T}} = B^{\mathrm{T}} A^{\mathrm{T}}$

> 恒等式 $(AB)^{\mathrm{T}} = B^{\mathrm{T}} A^{\mathrm{T}}$ 将因子的顺序反转。这一反转是必要的，因为矩阵乘法不满足交换律，并且它在其他若干语境中也会出现，包括[乘积的逆](../inverse-matrix/)。

## 矩阵的加法逆元

矩阵 $A$ 的加法逆元记作 $-A$，是将 $A$ 的每个元素取负后所得到的矩阵：每个元素 $a_{ij}$ 变为 $-a_{ij}$。矩阵 $A$ 和 $-A$ 具有相同的维数，其和为零矩阵：

$$A + (-A) = O$$

例如：

$$
A = \begin{pmatrix}
2 & -1 & 3 \\[6pt]
7 & 5 & 4 \\[6pt]
9 & 6 & 8
\end{pmatrix}
\qquad
-A = \begin{pmatrix}
-2 & 1 & -3 \\[6pt]
-7 & -5 & -4 \\[6pt]
-9 & -6 & -8
\end{pmatrix}
$$

## 矩阵的加法与减法

两个矩阵只有在维数相同时才能相加或相减。给定两个 $m \times n$ 矩阵 $A = (a_{ij})$ 与 $B = (b_{ij})$，它们的和 $C = A + B$ 是由下式定义的 $m \times n$ 矩阵：

$$c_{ij} = a_{ij}+b_{ij}$$

$C$ 的每个元素是 $A$ 与 $B$ 对应元素之和。下面的例子展示了两个 $2 \times 3$ 矩阵的计算过程：

$$
A = \begin{pmatrix}
2 & -1 & 3 \\[6pt]
7 & 5 & 4
\end{pmatrix}
\qquad
B = \begin{pmatrix}
4 & 0 & -2 \\[6pt]
1 & 3 & 6
\end{pmatrix}
$$

其和为：

$$
\begin{align}
A+B &= \begin{pmatrix}
2+4 & -1+0 & 3+(-2) \\[6pt]
7+1 & 5+3 & 4+6
\end{pmatrix} \\[12pt]
&= \begin{pmatrix}
6 & -1 & 1 \\[6pt]
8 & 8 & 10
\end{pmatrix}
\end{align}
$$

差 $A-B$ 定义为 $A+(-B)$，即 $A$ 与 $B$ 的加法逆元之和。矩阵加法满足下列性质，对于任意维数为 $m \times n$ 的矩阵 $A$、$B$、$C$：

+ 交换律：$A+B = B+A$。两个矩阵相加的顺序不影响结果。
+ 结合律：$(A+B)+C = A+(B+C)$。三个或更多矩阵的和可以按任意分组计算。
+ 加法单位元：$A+O = A$，其中 $O$ 是维数相同的零矩阵。加上零矩阵后 $A$ 保持不变。
+ 加法逆元：$A+(-A) = O$。每个矩阵都有唯一的加法逆元。

## 数乘

给定一个维数为 $m \times n$ 的矩阵 $A = (a_{ij})$ 和一个实数 $k$，其数乘积 $kA$ 是这样一个 $m \times n$ 矩阵：第 $(i,j)$ 位置上的元素为 $k \cdot a_{ij}$。矩阵的每一个元素都乘以 $k$。例如，取 $k = 2$：

$$
A = \begin{pmatrix}
1 & -2 & 4 \\[6pt]
0 & 3 & -1
\end{pmatrix}
\qquad
2A = \begin{pmatrix}
2 & -4 & 8 \\[6pt]
0 & 6 & -2
\end{pmatrix}
$$

对于具有相同维数的矩阵 $A$、$B$ 以及实数 $k$、$h$，数乘满足以下性质：

+ 结合律：$k(hA) = (kh)A$。连续的数乘可以合并为一次。
+ 对矩阵加法的分配律：$k(A+B) = kA+kB$。标量分配到矩阵之和上。
+ 对标量加法的分配律：$(k+h)A = kA+hA$。标量之和分配到单个矩阵上。

> 矩阵加法与数乘共同满足向量空间的公理，因此 $M_{m \times n}(\mathbb{R})$ 是一个实[向量空间](../vector-spaces/)。那些仅有一个元素等于 $1$、其余位置均为零的 $mn$ 个矩阵构成一组基，故其维数为 $mn$。

## 矩阵乘法

矩阵乘法在一个相容性条件下定义：乘积 $AB$ 仅当 $A$ 的列数等于 $B$ 的行数时才有定义。若 $A$ 的维数为 $m \times n$，$B$ 的维数为 $n \times p$，则乘积 $C = AB$ 是一个维数为 $m \times p$ 的矩阵，其在位置 $(i,j)$ 处的元素定义为：

$$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$

对于固定的 $m \times n$ 矩阵 $A$，乘积 $\mathbf{x} \mapsto A\mathbf{x}$ 是从 $\mathbb{R}^n$ 到 $\mathbb{R}^m$ 的[线性映射](../linear-maps/)。矩阵乘法表示这些映射的复合。

每个元素 $c_{ij}$ 的计算方式是取 $A$ 的第 $i$ 行与 $B$ 的第 $j$ 列的点积：将对应元素逐项相乘并求和。下面的例子计算一个 $2 \times 3$ 矩阵 $A$ 与一个 $3 \times 2$ 矩阵 $B$ 的乘积：

$$
A = \begin{pmatrix}
1 & -2 & 3 \\[6pt]
0 & 4 & -1
\end{pmatrix}
\qquad
B = \begin{pmatrix}
2 & 0 \\[6pt]
-1 & 5 \\[6pt]
4 & -3
\end{pmatrix}
$$

乘积矩阵 $AB$ 的各元素 $c_{ij}$ 由 $A$ 的每一行乘以 $B$ 的每一列得到：

$$
\begin{align}
c_{11} &= (1)(2)+(-2)(-1)+(3)(4) = 16 \\[6pt]
c_{12} &= (1)(0)+(-2)(5)+(3)(-3) = -19 \\[6pt]
c_{21} &= (0)(2)+(4)(-1)+(-1)(4) = -8 \\[6pt]
c_{22} &= (0)(0)+(4)(5)+(-1)(-3) = 23
\end{align}
$$

结果是一个 $2 \times 2$ 矩阵，与维数 $m \times p = 2 \times 2$ 一致。

$$
C = AB = \begin{pmatrix}
16 & -19 \\[6pt]
-8 & 23
\end{pmatrix}
$$

> 矩阵乘法一般不满足交换律。即使 $AB$ 和 $BA$ 都有定义，这两个乘积通常也不相同。这是矩阵乘法与实数乘法的一个区别。

与实数运算的另一个区别涉及乘积为零的情形，因为两个非零矩阵的乘积可以是零矩阵。矩阵

$$
A = \begin{pmatrix} 2 & 4 \\[6pt] 1 & 2 \end{pmatrix}
\qquad
B = \begin{pmatrix} 2 & 4 \\[6pt] -1 & -2 \end{pmatrix}
$$

都是非零的，然而它们的乘积为零：

$$
AB = \begin{pmatrix}
(2)(2)+(4)(-1) & (2)(4)+(4)(-2) \\[6pt]
(1)(2)+(2)(-1) & (1)(4)+(2)(-2)
\end{pmatrix}
=
\begin{pmatrix} 0 & 0 \\[6pt] 0 & 0 \end{pmatrix}
$$

对于实数成立的、从 $AB = O$ 到 $A = O$ 或 $B = O$ 的推理，对矩阵没有对应的结论。

> 作为等于零矩阵的乘积的一个因子而出现的非零矩阵，是[环](../rings/) $M_{n \times n}(\mathbb{R})$ 的零因子。零因子的存在正是消去律 $AB = AC \implies B = C$ 对任意非零因子 $A$ 不成立的原因。

- - -

在特殊方阵中引入的单位矩阵 $I_n$ 是乘法的乘法单位元，因此对任意维数相容的矩阵 $A$，

$$A \cdot I = I \cdot A = A$$

例如：

$$
\begin{pmatrix}
3 & 5 \\[6pt]
1 & -2
\end{pmatrix}
\cdot
\begin{pmatrix}
1 & 0 \\[6pt]
0 & 1
\end{pmatrix}
=
\begin{pmatrix}
3 & 5 \\[6pt]
1 & -2
\end{pmatrix}
$$

对于维数相容的矩阵，矩阵乘法满足以下性质：

+ 结合律：$(AB)C = A(BC)$。连续乘积的计算顺序不影响结果。
+ 左分配律：$A(B+C) = AB+AC$。乘法从左侧对加法分配。
+ 右分配律：$(B+C)A = BA+CA$。乘法从右侧对加法分配。
+ 非交换性：一般而言，$AB \neq BA$，即使两个乘积都有定义。

## 方阵的幂

对于 $n$ 阶方阵 $A$，乘积的结合律使得整数幂的定义是合理的。规定 $A^1 = A$，并对每个整数 $p \geq 2$ 定义 $A^p = A^{p-1} A$，从而有 $A^2 = AA$ 和 $A^3 = AAA$。由于单位矩阵是乘法单位元，因此规定 $A^0 = I_n$ 是自洽的。

同阶的两个对角矩阵的乘积仍是对角矩阵，每个对角元等于对应元素的乘积。整数幂因此分别作用于每个对角元，所以对角矩阵及其幂为：

$$
D = \begin{pmatrix} d_1 & & \\[6pt] & \ddots & \\[6pt] & & d_n \end{pmatrix}
\qquad
D^p = \begin{pmatrix} d_1^p & & \\[6pt] & \ddots & \\[6pt] & & d_n^p \end{pmatrix}
$$

对角化将一般方阵的幂归结为这种情形，详见[对角化](../matrix-diagonalization/)。

非交换性改变了那些在实数上无需说明即可成立的代数恒等式。用分配律展开 $(A+B)^2$ 得到

$$(A+B)^2 = A^2 + AB + BA + B^2$$

仅当 $A$ 和 $B$ 可交换，即 $AB = BA$ 时，它才简化为熟悉的 $A^2 + 2AB + B^2$。例如

$$
A = \begin{pmatrix} 1 & 1 \\[6pt] 0 & 1 \end{pmatrix}
\qquad
B = \begin{pmatrix} 1 & 0 \\[6pt] 1 & 1 \end{pmatrix}
$$

这两个矩阵不可交换，因为

$$
AB = \begin{pmatrix} 2 & 1 \\[6pt] 1 & 1 \end{pmatrix}
\qquad
BA = \begin{pmatrix} 1 & 1 \\[6pt] 1 & 2 \end{pmatrix}
$$

而直接计算可得

$$
(A+B)^2 = \begin{pmatrix} 5 & 4 \\[6pt] 4 & 5 \end{pmatrix}
\qquad
A^2 + 2AB + B^2 = \begin{pmatrix} 6 & 4 \\[6pt] 4 & 4 \end{pmatrix}
$$

两个结果不一致，因此二项式恒等式失效。同样的障碍也影响其他标准因式分解，诸如 $A^2 - B^2 = (A+B)(A-B)$ 这样的恒等式仅对可交换的矩阵成立。

## 幂零矩阵

方阵 $A$ 如果其某个正整数幂等于零矩阵，即对某个整数 $p \geq 1$ 有 $A^p = O$，则称为幂零的。其中最小的 $p$ 称为幂零指数。对角元全为零的上三角矩阵给出一个典型例子：

$$
N = \begin{pmatrix}
0 & 1 & 2 \\[6pt]
0 & 0 & 3 \\[6pt]
0 & 0 & 0
\end{pmatrix}
$$

每次幂运算将非零元进一步上移远离对角线，因此

$$
N^2 = \begin{pmatrix}
0 & 0 & 3 \\[6pt]
0 & 0 & 0 \\[6pt]
0 & 0 & 0
\end{pmatrix}
\qquad
N^3 = O
$$

且 $N$ 的幂零指数为 $3$。

幂零矩阵不可逆。假设 $A^p = O$ 且某个矩阵 $B$ 满足 $AB = I_n$。则

$$A^{p-1} = A^{p-1} I_n = A^{p-1}(AB) = A^p B = OB = O$$

因而指数降低一。重复此步骤可将指数降至 $A = O$，但零矩阵给出 $OB = O \neq I_n$，不可能满足 $AB = I_n$。这样的 $B$ 不存在，这就将幂零性与[逆矩阵](../inverse-matrix/)条目中讨论的可逆性判据联系了起来。

## 迹

设 $A$ 为 $n$ 阶方阵，其迹记作 $\mathrm{tr}(A)$，定义为主对角线上各项之和：

$$\mathrm{tr}(A) = a_{11} + a_{22} + \cdots + a_{nn} = \sum_{i=1}^{n} a_{ii}$$

迹关于其自变量是线性的，因此对每一个标量 $k$ 都有 $\mathrm{tr}(A+B) = \mathrm{tr}(A) + \mathrm{tr}(B)$ 和 $\mathrm{tr}(kA) = k\mathrm{tr}(A)$。转置不改变对角线，故 $\mathrm{tr}(A^{\mathrm{T}}) = \mathrm{tr}(A)$。两个矩阵乘积的迹不依赖于两个因子的次序，尽管乘积本身依赖于次序。对于 $n$ 阶方阵 $A$ 和 $B$，

$$\mathrm{tr}(AB) = \sum_{i=1}^{n} \sum_{k=1}^{n} a_{ik} b_{ki} = \sum_{k=1}^{n} \sum_{i=1}^{n} b_{ki} a_{ik} = \mathrm{tr}(BA)$$

> 迹等于 $A$ 的特征值之和，按代数重数计算，如[特征值与特征向量](../eigenvalues-and-eigenvectors/)条目所示。

> 本条目中的定义和性质是对实数项表述的，但和、标量倍数、乘积与转置等运算无需改变即可适用于复数项，更一般地适用于任意[域](../fields/) $K$ 上的矩阵。证明中仅用到域公理，因此无论 $K$ 是 $\mathbb{R}$、$\mathbb{C}$ 还是其他域，同一套代数都成立。

对于每一个 $n$ 阶方阵，都关联着一个实数，称为[行列式](../determinant/)，记作 $\det(A)$，它决定该矩阵是否可逆，详见[逆矩阵](../inverse-matrix/)条目。线性无关的行或列的最大个数称为[秩](../rank-of-a-matrix/)。当方阵拥有一组由[特征向量](../eigenvalues-and-eigenvectors/)构成的基时，可通过[对角化](../matrix-diagonalization/)将其化为对角形。
