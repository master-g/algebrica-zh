---
title: 矩阵的秩
title_en: Rank of a Matrix
source: https://algebrica.org/rank-of-a-matrix/
license: CC BY-NC 4.0
tags:
  - gaussian-elimination
  - linear-algebra
  - matrices
  - rank
  - rank-nullity-theorem
translation:
  status: current
  source_hash: e3a84429d164e0f75fa941856a7f479d24c51e1fc71611d784a4e38f8ac5d8c1
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

矩阵 $A$ 的秩，记作 $r(A)$ 或 $\mathrm{rank}(A)$，是 $A$ 中线性无关行数的最大值（或等价地，线性无关列数的最大值）。对于 $m \times n$ 矩阵 $A$，秩满足：

$$0 \leq r(A) \leq \min(m,n)$$

矩阵 $A$ 的秩等于关联[线性映射](../linear-maps/) $T_A : \mathbb{R}^n \to \mathbb{R}^m$ 的像的维数，其中 $T_A(\mathbf{x}) = A\mathbf{x}$，可将其视为从[向量空间](../vector-spaces/) $\mathbb{R}^n$ 到 $\mathbb{R}^m$ 的映射。互补量 $n - r(A)$ 是 $T_A$ 的核的维数，即被映射为零的[向量](../vectors/)所构成的子空间。这两个量由[秩-零化度定理](../kernel-and-image-of-a-linear-map/)相关联。对于任意 $A \in M_{m,n}(\mathbb{R})$，有：

$$\mathrm{rank}(A) + \mathrm{nullity}(A) = n$$

> 秩通过[Rouché-Capelli 定理](../rouche-capelli-theorem/)决定线性方程组的可解性，而条件 $r(A) = n$ 刻画了方阵何时[可逆](../inverse-matrix/)。

## 子矩阵与子式

矩阵 $A \in M_{m,n}(\mathbb{R})$ 的子矩阵是从 $A$ 中选取 $k$ 行和 $h$ 列所得的任意矩阵，保持元素的原始顺序，其中 $k \leq m$ 和 $h \leq n$。例如，从 $3 \times 4$ 矩阵 $A$ 中选取第 1 行和第 3 行以及第 1、2、4 列，得到 $2 \times 3$ 子矩阵：

$$
B = \begin{pmatrix}
a_{11} & a_{12} & a_{14} \\[6pt]
a_{31} & a_{32} & a_{34}
\end{pmatrix}
$$

矩阵 $A$ 的 $p$ 阶子式是从 $A$ 中提取的大小为 $p \times p$ 的方阵子矩阵的[行列式](../determinant/)。由于行列式仅对方阵有定义，因此只有方阵子矩阵才有子式。

## 通过子式定义

矩阵 $A$ 的秩是满足下列条件的最大整数 $r$：至少有一个 $r$ 阶子式非零。等价地，所有 $r+1$ 阶子式均为零。

下面的例子计算一个 $3 \times 4$ 矩阵的秩。考虑：

$$
A = \begin{pmatrix}
1 & 2 & 3 & 4 \\[6pt]
2 & 4 & 6 & 8 \\[6pt]
1 & 0 & 1 & 2
\end{pmatrix}
$$

第二行恰好是第一行的两倍。每个 $3 \times 3$ 阶子式都要用到全部三行，因此它包含两行成比例的行，从而为零。然而，从第 1、3 行和第 1、2 列提取的 $2 \times 2$ 子矩阵给出：

$$\det\begin{pmatrix} 1 & 2 \\[6pt] 1 & 0 \end{pmatrix} = 0-2 = -2 \neq 0$$

由于存在一个非零的 2 阶子式，而所有 3 阶子式均为零，故 $A$ 的秩为：

$$r(A) = 2$$

## 通过高斯消元法计算秩

对于高阶矩阵，计算所有子式并不实际。标准的计算方法是[高斯消元法](../gaussian-elimination/)，它通过施行不改变秩的初等行变换，将 $A$ 化为行阶梯形。秩等于化简后矩阵中非零行的数目。考虑上一个例子中的矩阵：

$$
A = \begin{pmatrix}
1 & 2 & 3 & 4 \\[6pt]
2 & 4 & 6 & 8 \\[6pt]
1 & 0 & 1 & 2
\end{pmatrix}
$$

将第二行减去第一行的两倍，将第三行减去第一行，得到：

$$
\begin{pmatrix}
1 & 2 & 3 & 4 \\[6pt]
0 & 0 & 0 & 0 \\[6pt]
0 & -2 & -2 & -2
\end{pmatrix}
$$

交换第二行与第三行，得到：

$$
\begin{pmatrix}
1 & 2 & 3 & 4 \\[6pt]
0 & -2 & -2 & -2 \\[6pt]
0 & 0 & 0 & 0
\end{pmatrix}
$$

行阶梯形有两个非零行，因此 $r(A) = 2$。

## 秩的性质

秩满足以下性质。

+ $r(A) = 0$ 当且仅当 $A$ 为零矩阵。
+ 对于 $n$ 阶方阵 $A$，$r(A) = n$ 当且仅当 $A$ 非奇异，即 $\det(A) \neq 0$。
+ $r(A) = r(A^{\mathrm{T}})$。秩在转置下不变。
+ $r(A+B) \leq r(A) + r(B)$。
+ $r(AB) \leq \min(r(A), r(B))$。

> 秩出现在[Rouché-Capelli 定理](../rouche-capelli-theorem/)中，该定理刻画了线性方程组 $A\mathbf{x} = \mathbf{b}$ 的相容性。该方程组相容当且仅当 $r(A) = r(A|\mathbf{b})$，其中 $A|\mathbf{b}$ 表示增广矩阵。当方程组相容时，解空间的维数为 $n - r(A)$。
