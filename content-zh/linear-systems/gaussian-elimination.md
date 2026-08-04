---
title: 高斯消元法
title_en: Gaussian Elimination
source: https://algebrica.org/gaussian-elimination/
license: CC BY-NC 4.0
tags:
  - augmented-matrix
  - back-substitution
  - gauss-jordan-elimination
  - gaussian-elimination
  - linear-algebra
  - linear-systems
  - matrices
  - pivot
  - reduced-row-echelon-form
  - row-echelon-form
translation:
  status: current
  source_hash: 7d576bec75270afcad4b3116f21fa4b3fc9bf3eff293ae873c79daf50f98dda4
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 什么是高斯消元法

高斯方法，即高斯消元法，是一种求解线性方程[组](../systems-of-linear-equations/)的算法。该过程每次消去一个变量，并将结果转化为包含更少项的[等价方程组](../equations/)。该算法适用于 $m$ 个方程、$n$ 个未知数的任意方程组。下面以一个 $3\times3$ 方程组为初始模型；当其系数矩阵可逆时，该方程组有唯一解。这一情形的逐方程处理见[含三个未知数的线性方程组](../systems-of-linear-equations-in-three-variables/)：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1 \\[6pt]
a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = b_2 \\[6pt]
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = b_3
\end{cases}
$$

算法的每一步都是以下三种初等运算之一：

+ 交换两个方程
+ 将一个方程乘以一个非零常数
+ 将一个方程的若干倍加到另一个方程上

每种运算都可由同类型的运算逆转，因此方程组的解集合始终保持不变。

> 该算法仅对系数使用四则运算，因此在任意[域](../fields/)上都无需修改即可使用，例如 $\mathbb{Q}$、$\mathbb{R}$ 或 $\mathbb{C}$。

- - -

该过程分为四步：

+ 从除第一个方程外的所有方程中消去变量 $x_1$。
+ 从第三个方程中消去变量 $x_2$。
+ 从第三个方程中解出 $x_3$。
+ 向后回代以求出其余变量。

后两步称为回代。消元过程并不总是以唯一解告终。若得到形如 $0 = c$ 且 $c \neq 0$ 的方程，则该方程组不相容，无解。若不出现矛盾，且主元个数少于未知数个数，则该方程组有无穷多解，由不对应主元的未知数参数化；对方阵方程组而言，这种情况发生于某个方程化简为恒等式 $0 = 0$ 之时。[罗歇–卡佩利定理](../rouche-capelli-theorem/)通过比较系数矩阵的秩与增广矩阵的秩来区分这些情形。

## 与矩阵的联系

在实际计算中，运算作用于方程组的增广矩阵，即在系数[矩阵](../matrices/)后附加常数项列所得的矩阵：

$$
\left(
\begin{array}{ccc|c}
a_{11} & a_{12} & a_{13} & b_1 \\[6pt]
a_{21} & a_{22} & a_{23} & b_2 \\[6pt]
a_{31} & a_{32} & a_{33} & b_3
\end{array}
\right)
$$

对方程的运算变为对该矩阵的初等行变换。高斯消元法将矩阵化为行阶梯形，其中每个零行都位于非零行之下，且每行的首个非零元（称为主元）严格位于上一行主元的右侧。对可逆的 $3\times3$ 矩阵，行阶梯形为上三角矩阵：

$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\[6pt]
a_{21} & a_{22} & a_{23} \\[6pt]
a_{31} & a_{32} & a_{33}
\end{pmatrix}
\quad \longrightarrow \quad
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\[6pt]
0 & a^\prime_{22} & a^\prime_{23} \\[6pt]
0 & 0 & a^{\prime\prime}_{33}
\end{pmatrix}
$$

> 行阶梯形要求每个主元下方为零，但主元上方的元素可以非零。高斯–若尔当消元法会将主元上方的元素也消去，得到下文所述的简化行阶梯形。

## 化为三角形

首先，从除第一个方程以外的所有方程中消去变量 $x_1$。若 $a_{11} = 0$，则先将第一个方程与一个 $x_1$ 的系数不为零的方程交换；之后每当主元为零时，也采用同样的交换方法。为了从第二个方程中消去 $x_1$，将第一个方程乘以 $a_{21}$，将第二个方程乘以 $a_{11}$（此操作合法，因为 $a_{11} \neq 0$），然后两式相减，用所得结果替换第二个方程：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1 \\[6pt]
\left(a_{11}a_{22} - a_{21}a_{12}\right)x_2 + \left(a_{11}a_{23} - a_{21}a_{13}\right)x_3 = a_{11}b_2 - a_{21}b_1 \\[6pt]
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = b_3
\end{cases}
$$

为简化计算，将第二个方程改写为：

$$a^\prime_{22}x_2 + a^\prime_{23}x_3 = b^\prime_2$$

方程组变为：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1 \\[6pt]
a^\prime_{22}x_2 + a^\prime_{23}x_3 = b^\prime_2 \\[6pt]
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = b_3
\end{cases}
$$

接下来，将第一个方程乘以 $a_{31}$，将第三个方程乘以 $a_{11}$，两式相减，并用所得结果替换第三个方程：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1 \\[6pt]
a^\prime_{22}x_2 + a^\prime_{23}x_3 = b^\prime_2 \\[6pt]
\left(a_{11}a_{32} - a_{31}a_{12}\right)x_2 + \left(a_{11}a_{33} - a_{31}a_{13}\right)x_3 = a_{11}b_3 - a_{31}b_1
\end{cases}
$$

将第三个方程改写为：

$$a^\prime_{32}x_2 + a^\prime_{33}x_3 = b^\prime_3$$

此时方程组为：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1 \\[6pt]
a^\prime_{22}x_2 + a^\prime_{23}x_3 = b^\prime_2 \\[6pt]
a^\prime_{32}x_2 + a^\prime_{33}x_3 = b^\prime_3
\end{cases}
$$

继续第二步，从第三个方程中消去变量 $x_2$。将第二个方程乘以 $a^\prime_{32}$，将第三个方程乘以 $a^\prime_{22}$，两式相减，并用所得结果替换第三个方程。按照与第一步相同的方式完成计算后，方程组化为：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1 \\[6pt]
a^\prime_{22}x_2 + a^\prime_{23}x_3 = b^\prime_2 \\[6pt]
a^{\prime\prime}_{33}x_3 = b^{\prime\prime}_3
\end{cases}
$$

这是一个三角形方程组。由于系数矩阵可逆，$a^{\prime\prime}_{33} \neq 0$，于是从第三个方程解出 $x_3$：

$$x_3 = \frac{b^{\prime\prime}_3}{a^{\prime\prime}_{33}}$$

回代利用 $x_3$ 的值，按相反顺序确定其余各变量。

## 示例

考虑如下的 $3\times3$ 线性方程组：

$$
\begin{cases}
x + y + z = 6 \\[6pt]
2x + 3y + z = 14 \\[6pt]
x + 2y + 3z = 14
\end{cases}
$$

为了消去第二个方程中的 $x$，将第一个方程的两倍从第二个方程中减去：

$$(2x + 3y + z) - 2(x + y + z) = y - z = 2$$

为了消去第三个方程中的 $x$，将第一个方程从第三个方程中减去：

$$(x + 2y + 3z) - (x + y + z) = y + 2z = 8$$

方程组变为：

$$
\begin{cases}
x + y + z = 6 \\[6pt]
y - z = 2 \\[6pt]
y + 2z = 8
\end{cases}
$$

以第二个方程作为新的主元，将第二个方程从第三个方程中减去，以消去第三个方程中的 $y$：

$$(y + 2z) - (y - z) = 3z = 6 \Rightarrow z = 2$$

回代可得其余变量。由第二个方程：

$$y - z = 2 \Rightarrow y = 2 + z = 4$$

由第一个方程：

$$x = 6 - y - z = 6 - 4 - 2 = 0$$

解为：

$$x = 0, \quad y = 4, \quad z = 2$$

用矩阵形式表示时，同样的计算作用于增广矩阵；箭头上方的标注记录了行变换：

$$
\left(
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\[6pt]
2 & 3 & 1 & 14 \\[6pt]
1 & 2 & 3 & 14
\end{array}
\right)
\xrightarrow{\substack{R_2 - 2R_1 \\ R_3 - R_1}}
\left(
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\[6pt]
0 & 1 & -1 & 2 \\[6pt]
0 & 1 & 2 & 8
\end{array}
\right)
\xrightarrow{R_3 - R_2}
\left(
\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\[6pt]
0 & 1 & -1 & 2 \\[6pt]
0 & 0 & 3 & 6
\end{array}
\right)
$$

最终的矩阵处于行阶梯形，对应于上文通过回代求解的三角形方程组。

- - -

消元法也能判定没有唯一解的方程组。考虑：

$$
\begin{cases}
x + y + z = 1 \\[6pt]
x + y + 2z = 3 \\[6pt]
2x + 2y + 3z = 4
\end{cases}
$$

将第一个方程从第二个方程中减去、将第一个方程的两倍从第三个方程中减去后，两者中均留下 $z = 2$；再将所得第二个方程从第三个方程中减去，便得到恒等式 $0 = 0$。阶梯形有两个主元和三个未知数，因此方程组有无穷多解。未知数 $y$ 是自由变量，回代得 $z = 2$ 和 $x = -1 - y$。若第三个方程的常数项为 $5$ 而非 $4$，则最后一行将变为 $0 = 1$，方程组将无解。

## 高斯–若尔当消元法与简化行阶梯形

高斯消元在矩阵达到行阶梯形时停止。此时主元列中的主元下方为零，未知数通过回代确定。高斯–若尔当消元法会继续进行，直到每个主元的上方和下方都为零。在简化行阶梯形（RREF）中，无需回代即可读出解。

矩阵处于简化行阶梯形，当且仅当满足以下四个条件：

+ 每个零行都位于所有非零行之下。
+ 每个非零行的首个非零元都是 $1$，这个元素就是该行的主元。
+ 每行的主元都位于上一行主元的右侧。
+ 每个主元都是其所在列中唯一的非零元。

第一和第三个条件属于行阶梯形的要求。在简化形式中，每个主元都是 $1$，且其上方的每个元素都为零。每个行等价类都有唯一的简化行阶梯形。行变换的顺序不唯一，但最终的简化矩阵唯一。

高斯–若尔当过程分为正向阶段和反向阶段：

+ 用高斯消元得到行阶梯形。
+ 将每个非零行除以其主元，使每个主元都为 $1$。
+ 从最后一个主元开始，将该行的适当倍数加到其上方各行，直到主元列中的其他元素全部为零。
+ 沿着主元行向上继续进行。

考虑如下方程组：

$$
\begin{cases}
2x + y = 4 \\[6pt]
x - y = 5
\end{cases}
$$

其增广矩阵为：

$$
\left(
\begin{array}{cc|c}
2 & 1 & 4 \\[6pt]
1 & -1 & 5
\end{array}
\right)
$$

第二行第一列的系数为 $1$，因此交换两行：

$$
\left(
\begin{array}{cc|c}
2 & 1 & 4 \\[6pt]
1 & -1 & 5
\end{array}
\right)
\xrightarrow{R_1 \leftrightarrow R_2}
\left(
\begin{array}{cc|c}
1 & -1 & 5 \\[6pt]
2 & 1 & 4
\end{array}
\right)
$$

正向阶段消去第二行中的 $x$：

$$
\left(
\begin{array}{cc|c}
1 & -1 & 5 \\[6pt]
2 & 1 & 4
\end{array}
\right)
\xrightarrow{R_2 \to R_2 - 2R_1}
\left(
\begin{array}{cc|c}
1 & -1 & 5 \\[6pt]
0 & 3 & -6
\end{array}
\right)
$$

我们将第二个主元归一化，并用它消去上方的元素：

$$
\left(
\begin{array}{cc|c}
1 & -1 & 5 \\[6pt]
0 & 3 & -6
\end{array}
\right)
\xrightarrow{R_2 \to \frac{1}{3}R_2}
\left(
\begin{array}{cc|c}
1 & -1 & 5 \\[6pt]
0 & 1 & -2
\end{array}
\right)
\xrightarrow{R_1 \to R_1 + R_2}
\left(
\begin{array}{cc|c}
1 & 0 & 3 \\[6pt]
0 & 1 & -2
\end{array}
\right)
$$

最终矩阵的系数块是单位矩阵。其两行分别是方程 $x=3$ 和 $y=-2$，因此方程组的唯一解为：

$$
(x,y) = (3,-2)
$$

- - -

在简化行阶梯形中，可以从没有主元的列直接看出不定方程组的自由变量。考虑增广矩阵：

$$
\left(
\begin{array}{cccc|c}
1 & 2 & 0 & 1 & 3 \\[6pt]
1 & 2 & 1 & 2 & 5 \\[6pt]
2 & 4 & 1 & 3 & 8
\end{array}
\right)
$$

将第一行从第二行中减去，并将第一行的两倍从第三行中减去：

$$
\left(
\begin{array}{cccc|c}
1 & 2 & 0 & 1 & 3 \\[6pt]
1 & 2 & 1 & 2 & 5 \\[6pt]
2 & 4 & 1 & 3 & 8
\end{array}
\right)
\xrightarrow{\substack{R_2 \to R_2 - R_1 \\ R_3 \to R_3 - 2R_1}}
\left(
\begin{array}{cccc|c}
1 & 2 & 0 & 1 & 3 \\[6pt]
0 & 0 & 1 & 1 & 2 \\[6pt]
0 & 0 & 1 & 1 & 2
\end{array}
\right)
$$

最后两行相同，因此相减得到零行：

$$
\left(
\begin{array}{cccc|c}
1 & 2 & 0 & 1 & 3 \\[6pt]
0 & 0 & 1 & 1 & 2 \\[6pt]
0 & 0 & 1 & 1 & 2
\end{array}
\right)
\xrightarrow{R_3 \to R_3 - R_2}
\left(
\begin{array}{cccc|c}
1 & 2 & 0 & 1 & 3 \\[6pt]
0 & 0 & 1 & 1 & 2 \\[6pt]
0 & 0 & 0 & 0 & 0
\end{array}
\right)
$$

最终矩阵处于简化行阶梯形。主元位于 $x$ 和 $z$ 所在的列，而 $y$ 和 $w$ 所在的列没有主元。令自由变量 $y=s$、$w=t$。两个非零行对应的方程为：

$$
\begin{align}
x + 2y + w &= 3 \\[6pt]
z + w &= 2
\end{align}
$$

令 $y=s$、$w=t$，主元变量为：

$$
\begin{align}
x &= 3 - 2s - t \\[6pt]
y &= s \\[6pt]
z &= 2 - t \\[6pt]
w &= t
\end{align}
$$

完整的解集为：

$$
\begin{pmatrix}
x \\[6pt]
y \\[6pt]
z \\[6pt]
w
\end{pmatrix}
=
\begin{pmatrix}
3 \\[6pt]
0 \\[6pt]
2 \\[6pt]
0
\end{pmatrix}
+
s
\begin{pmatrix}
-2 \\[6pt]
1 \\[6pt]
0 \\[6pt]
0
\end{pmatrix}
+
t
\begin{pmatrix}
-1 \\[6pt]
0 \\[6pt]
-1 \\[6pt]
1
\end{pmatrix}
\qquad s,t \in \mathbb{R}
$$

系数块中的每个非主元列都对应一个自由变量。如果简化增广矩阵的最后一列出现主元，则有一行是不可能成立的方程 $0=c$（其中 $c\neq0$），方程组不相容。

## 行变换的应用

矩阵的[秩](../rank-of-a-matrix/)是其行阶梯形中非零行的数目，因为初等行变换不改变[行空间](../vector-spaces/)。行阶梯形的非零行构成行空间的一个基，而原矩阵在主元位置上的列构成其[列空间](../linear-combinations/)的一个基。

方阵的[行列式](../determinant-of-a-square-matrix/)可以从消元过程中读出。交换两行会改变行列式的符号，将某一行乘以常数 $c \neq 0$ 会把行列式乘以 $c$，而将一行的倍数加到另一行则不改变行列式。若将 $A$ 化为上述三角形形式的过程中用了 $s$ 次行交换，并将各行乘以常数 $c_1, \dots, c_k$，则：

$$\det A = \frac{(-1)^s}{c_1 \cdots c_k} a^{\vphantom{\prime}}_{11}a^\prime_{22}a^{\prime\prime}_{33}$$

同一公式对任意 $n \times n$ 矩阵成立，只需用三角形形式的 $n$ 个对角元的乘积代替 $a_{11}a^\prime_{22}a^{\prime\prime}_{33}$。对于 $n \times n$ 矩阵，消元约需 $2n^3/3$ 次算术运算，而拉普拉斯展开的代价增长为 $n!$，因此行变换是处理大型矩阵的实用方法。

方阵的[逆矩阵](../inverse-matrix/)用同一过程计算。将 $A$ 与单位矩阵增广，并对分块矩阵 $[A \mid I_n]$ 施行高斯—若尔当消元。当且仅当消元将左分块化为 $I_n$ 时，矩阵 $A$ 可逆，此时结果右分块即为 $A^{-1}$，因为这些行变换对 $A$ 的合成作用就是左乘 $A^{-1}$。
