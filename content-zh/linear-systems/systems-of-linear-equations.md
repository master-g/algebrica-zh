---
title: 线性方程组
title_en: Systems of Linear Equations
source: https://algebrica.org/systems-of-linear-equations/
license: CC BY-NC 4.0
tags:
  - augmented-matrix
  - coefficient-matrix
  - consistent-system
  - homogeneous-system
  - linear-algebra
  - linear-equations
  - linear-systems
  - matrix-representation
  - solution-set
translation:
  status: current
  source_hash: 02e323a392764e7f596bd417ec4589698324a887753b9246f8ff043fca66d579
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义与标准形式

线性方程组表达了关于相同未知量的若干条件，这些条件必须同时成立。给定 $n$ 个变量 $x_1, x_2, \dots, x_n$，当每个方程都是[线性方程](../linear-equations/)时，该方程组是线性的，即每个变量都以一次幂出现，且变量之间没有乘积。由 $m$ 个方程、$n$ 个未知量构成的线性方程组具有以下标准形式：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\[6pt]
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\[6pt]
\quad\vdots \\[6pt]
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m
\end{cases}
$$

每个系数 $a_{ij}$ 是第 $i$ 个方程中乘以变量 $x_j$ 的值，而每个 $b_i$ 是第 $i$ 个方程右边的常数项，也称为已知项。

## 解

求解线性方程组意味着找到一个有序的 $n$ 元组 $(s_1, s_2, \dots, s_n)$，其值同时满足方程组的每个方程。考虑方程组：

$$
\begin{cases}
2x_1 - x_2 = 2 \\[6pt]
x_1 + x_2 = 1
\end{cases}
$$

数对 $(1, 0)$ 是一个解：代入 $x_1 = 1$ 和 $x_2 = 0$ 后，第一个方程得到 $2 \cdot 1 - 0 = 2$，第二个方程得到 $1 + 0 = 1$，因此两者都成立。数对 $(0, 1)$ 不是解，因为它满足第二个方程 $0 + 1 = 1$，却不满足第一个方程，那里得到 $2 \cdot 0 - 1 = -1 \neq 2$。一个元组只有在同时满足每个方程时才是解。

方程组按其解的个数分类：

+ 当至少存在一个解时，方程组是相容的（或称可能的），此时其方程称为相容的。
+ 当不存在解时，方程组是不相容的（或称不可能的），此时其方程称为不相容的。
+ 当相容方程组恰有一个解时，它是确定的。
+ 当相容方程组有无穷多个解时，它是不定的。

- - -

线性方程组的每个方程在 $n$ 个未知量构成的空间中描述了一个平坦的集合：两个变量时是一条[直线](../lines/)，三个变量时是一个[平面](../planes/)，一般情形则是维数为 $n - 1$ 的超平面。一个[线性方程](../linear-equations/)施加这样一个约束，方程组的解必须同时满足所有约束，因此解集合是它们的交集。

这一图像与解的分类相吻合。在平面中，两条直线相交于一点，给出确定的方程组；或沿同一直线重合，给出无穷多个解；或保持平行不相交，给出不相容方程组。在更高维数中，平面和超平面也会出现相同的三种结果。

平面情形的图解法、代入法和消元法见[含两个未知数的线性方程组](../systems-of-linear-equations-in-two-variables/)条目。三个平面对应的消元过程见[含三个未知数的线性方程组](../systems-of-linear-equations-in-three-variables/)。

## 矩阵表示

线性方程组的系数和常数项可以排列成[矩阵](../matrices/)，这是一种紧凑的记法，标准求解方法都作用于其上。任何标准形式中具有 $m$ 个方程和 $n$ 个未知量的方程组，都有一个 $m \times n$ 的系数矩阵，由各变量的系数构成：

$$
A =
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\[6pt]
a_{21} & a_{22} & \cdots & a_{2n} \\[6pt]
\vdots & \vdots & \ddots & \vdots \\[6pt]
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

变量与常数项构成两个列[向量](../vectors/)：

$$
X =
\begin{pmatrix}
x_1 \\[6pt]
x_2 \\[6pt]
\vdots \\[6pt]
x_n
\end{pmatrix}
\qquad
B =
\begin{pmatrix}
b_1 \\[6pt]
b_2 \\[6pt]
\vdots \\[6pt]
b_m
\end{pmatrix}
$$

采用这种记法，方程组就化为单一的矩阵方程：

$$
A \cdot X = B
$$

> 在这种紧凑形式中，$A$ 是系数矩阵，$X$ 是变量的列向量，$B$ 是常数项的列向量。

将常数项列置于系数矩阵旁边，便得到增广矩阵，也称为完全矩阵，记作 $(A \mid B)$：

$$
(A \mid B) =
\left(
\begin{array}{cccc|c}
a_{11} & a_{12} & \cdots & a_{1n} & b_1 \\[6pt]
a_{21} & a_{22} & \cdots & a_{2n} & b_2 \\[6pt]
\vdots & \vdots & \ddots & \vdots & \vdots \\[6pt]
a_{m1} & a_{m2} & \cdots & a_{mn} & b_m
\end{array}
\right)
$$

竖线没有任何代数含义。它仅标记系数在何处终止、常数从何处开始。增广矩阵包含了方程组的全部数据，标准求解方法直接作用于它：

+ [高斯消元法](../gaussian-elimination/)通过初等行变换化简增广矩阵，适用于任意数量的方程与未知量。
+ [克拉默法则](../cramers-rule/)在系数矩阵为方阵且可逆时，将每个未知量表示为行列式之比。
+ [罗歇–卡佩利定理](../rouche-capelli-theorem/)比较系数矩阵的[秩](../rank-of-a-matrix/)与增广矩阵的秩，以判定方程组是否有解以及其解依赖于多少个自由参数。

## 齐次方程组

当一个方程组的所有常数项均为零时，即对每个 $i$ 都有 $b_i = 0$，则该方程组是齐次的，其矩阵形式为 $A \cdot X = 0$：

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = 0 \\[6pt]
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = 0 \\[6pt]
\quad\vdots \\[6pt]
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = 0
\end{cases}
$$

每一个线性方程组 $A \cdot X = B$ 都有一个对应的齐次方程组 $A \cdot X = 0$，它是将常数项替换为零、同时保持系数矩阵不变而得到的。

齐次方程组始终是相容的，因为零元组 $(0, 0, \dots, 0)$（称为平凡解）满足每个方程。因此，齐次方程组要么仅有平凡解，要么有无穷多个解。对于方阵方程组，当且仅当系数矩阵可逆，即其[行列式](../determinant/)非零时，平凡解才是唯一解；而行列式为零时则产生非平凡解。用矩阵秩表述的一般性判据属于[罗歇–卡佩利定理](../rouche-capelli-theorem/)。

## 解的存在性与唯一性

一个方程组无解、恰好有一个解，还是有无穷多个解，取决于方程的数目 $m$ 与未知数的数目 $n$ 之间的关系，以及系数矩阵：

+ 方阵方程组满足 $m = n$。当其系数矩阵可逆时，该方程组恰有一个解，下文用逆矩阵计算。
+ 超定方程组满足 $m > n$，方程数多于未知数。多余的方程可能彼此矛盾，因此超定方程组常常不相容。
+ 欠定方程组满足 $m < n$，方程数少于未知数。当其相容时，它有无穷多个解，因为某些未知数保持自由。

这些只是趋势，而非保证。精确的数目由[罗歇–卡佩利定理](../rouche-capelli-theorem/)给出，该定理将系数矩阵的[秩](../rank-of-a-matrix/) $r$ 与增广矩阵的秩 $(A \mid B)$ 加以比较。当 $r = n$ 时，相容的方程组是确定的；当 $r < n$ 时，它是不确定的，其解依赖于 $n - r$ 个自由参数。

若 $X_0$ 是 $A \cdot X = B$ 的一个特解，则每个解都具有如下形式：

$$
X = X_0 + Y
$$

其中 $Y$ 取遍对应的齐次方程组 $A \cdot X = 0$ 的解，这些解构成一个[向量空间](../vector-spaces/)。[罗歇–卡佩利定理](../rouche-capelli-theorem/)确立了这一分解。

## 用逆矩阵求解方阵系统

一个具有 $n$ 个方程和 $n$ 个未知数的方阵系统，当其系数矩阵 $A$ 非奇异时，可以用[逆矩阵](../inverse-matrix/)求解。若 $\det(A) \neq 0$，则矩阵 $A$ 可逆，且方程 $A \cdot X = B$ 有唯一解：

$$
X = A^{-1}B
$$

最小规模的情形完整展示了该方法。考虑一个含两个方程、两个未知数的方程组：

$$
\begin{cases}
3x_1 + x_2 = 5 \\[6pt]
x_1 + x_2 = 3
\end{cases}
$$

系数矩阵和常数向量分别为：

$$
A = \begin{pmatrix} 3 & 1 \\[6pt] 1 & 1 \end{pmatrix}
\qquad
B = \begin{pmatrix} 5 \\[6pt] 3 \end{pmatrix}
$$

行列式为 $\det(A) = 3 \cdot 1 - 1 \cdot 1 = 2$，非零，因此 $A$ 可逆。对于 $2 \times 2$ 矩阵，逆矩阵将两个对角元素互换位置，将另外两个元素取反，再除以行列式：

$$
A^{-1} = \frac{1}{2}\begin{pmatrix} 1 & -1 \\[6pt] -1 & 3 \end{pmatrix}
$$

将此逆矩阵与常数向量相乘，得到 $X = A^{-1}B$：

$$
\begin{pmatrix} x_1 \\[6pt] x_2 \end{pmatrix}
=
\frac{1}{2}\begin{pmatrix} 1 & -1 \\[6pt] -1 & 3 \end{pmatrix}
\begin{pmatrix} 5 \\[6pt] 3 \end{pmatrix}
=
\frac{1}{2}\begin{pmatrix} 2 \\[6pt] 4 \end{pmatrix}
=
\begin{pmatrix} 1 \\[6pt] 2 \end{pmatrix}
$$

因此该方程组有唯一解 $x_1 = 1$ 和 $x_2 = 2$。

- - -

我们求解一个含三个方程、三个未知数的线性方程组，故 $n = m$：

$$
\begin{cases}
x_1 + x_2 + x_3 = 3 \\[6pt]
2x_1 + x_2 + x_3 = 4 \\[6pt]
2x_1 + x_2 + 3x_3 = 8
\end{cases}
$$

首先构造系数矩阵 $A$ 并计算其行列式：

$$
A = \begin{pmatrix}
1 & 1 & 1 \\[6pt]
2 & 1 & 1 \\[6pt]
2 & 1 & 3
\end{pmatrix}
\qquad
\det(A) = -2
$$

> 关于[方阵行列式计算](../determinant/)的小节完整阐述了该方法。

- - -

由于行列式非零，$A$ 非奇异，其逆矩阵存在：

$$
A^{-1} =
\begin{pmatrix}
-1 & 1 & 0 \\[6pt]
2 & -\dfrac{1}{2} & -\dfrac{1}{2} \\[6pt]
0 & -\dfrac{1}{2} & \dfrac{1}{2}
\end{pmatrix}
$$

> 关于[逆矩阵](../inverse-matrix/)的小节逐步演算了这一计算的每一步。

- - -

现将解写为 $X = A^{-1}B$ 并执行乘法：

$$
\begin{pmatrix}
x_1 \\[6pt]
x_2 \\[6pt]
x_3
\end{pmatrix}
=
\begin{pmatrix}
-1 & 1 & 0 \\[6pt]
2 & -\dfrac{1}{2} & -\dfrac{1}{2} \\[6pt]
0 & -\dfrac{1}{2} & \dfrac{1}{2}
\end{pmatrix}
\cdot
\begin{pmatrix}
3 \\[6pt]
4 \\[6pt]
8
\end{pmatrix}
$$

将逆矩阵逐行乘以常数向量，得到三个未知数：

$$
\begin{align}
x_1 &= -1 \cdot 3 + 1 \cdot 4 + 0 \cdot 8 = 1 \\[6pt]
x_2 &= 2 \cdot 3 - \dfrac{1}{2} \cdot 4 - \dfrac{1}{2} \cdot 8 = 0 \\[6pt]
x_3 &= 0 \cdot 3 - \dfrac{1}{2} \cdot 4 + \dfrac{1}{2} \cdot 8 = 2
\end{align}
$$

因此该方程组有唯一解：

$$
x_1 = 1 \qquad x_2 = 0 \qquad x_3 = 2
$$

## 无穷多解的示例

我们求解由两个方程组成的含三个未知量的方程组，因此 $m < n$：

$$
\begin{cases}
x_1 + x_2 + x_3 = 2 \\[6pt]
2x_1 + x_2 - x_3 = 3
\end{cases}
$$

系数矩阵的秩为 $2$，根据[罗歇–卡佩利定理](../rouche-capelli-theorem/)，解依赖于 $n - r = 3 - 2 = 1$ 个自由参数。我们取 $x_3 = t$ 作为自由未知量，并将其移到等号右边：

$$
\begin{cases}
x_1 + x_2 = 2 - t \\[6pt]
2x_1 + x_2 = 3 + t
\end{cases}
$$

从第二个方程减去第一个方程，得到 $x_1 = 1 + 2t$，再将其代回第一个方程，得到 $x_2 = 1 - 3t$。[高斯消元法](../gaussian-elimination/)页面系统地执行这类化简。

解构成一个单参数族，可以分解为一个常数部分与一个固定向量的倍数之和：

$$
X =
\begin{pmatrix}
1 + 2t \\[6pt]
1 - 3t \\[6pt]
t
\end{pmatrix}
=
\begin{pmatrix}
1 \\[6pt]
1 \\[6pt]
0
\end{pmatrix}
+
t
\begin{pmatrix}
2 \\[6pt]
-3 \\[6pt]
1
\end{pmatrix}
\qquad t \in \mathbb{R}
$$

令 $t = 0$ 得到特解 $X_0 = (1, 1, 0)$，而向量 $(2, -3, 1)$ 是对应齐次方程组 $A \cdot X = 0$ 的一个解。当 $t$ 遍历 $\mathbb{R}$ 时，它生成该齐次方程组的所有解。该族就是上文引入的分解 $X = X_0 + Y$。在几何上，解集合是过 $X_0$、方向为 $(2, -3, 1)$ 的[向量形式直线](../vector-and-parametric-equations-of-a-line/)。
