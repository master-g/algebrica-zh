---
title: 基变换矩阵
title_en: Coordinates and the Change-of-Basis Matrix
source: https://algebrica.org/change-of-basis-matrix/
license: CC BY-NC 4.0
tags:
  - basis
  - change-of-basis
  - coordinates
  - endomorphism
  - linear-algebra
  - linear-map
  - matrices
  - similar-matrices
  - vector-space
translation:
  status: current
  source_hash: 9ba67c4ed2eaa59a5981b296c6a095702903ca958d9fb8be6cac11e9fadf6c18
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 相对于有序基的坐标

设 $V$ 是[域](../fields/) $F$ 上的 $n$ 维[向量空间](../vector-spaces/)。$V$ 的有序基是一个有限序列 $\mathcal{B} = (\mathbf{v}_1, \ldots, \mathbf{v}_n)$，它的各项构成一个基。于是每个向量 $\mathbf{v} \in V$ 都有唯一的展开式：

$$\mathbf{v} = \alpha_1\mathbf{v}_1 + \cdots + \alpha_n\mathbf{v}_n$$

系数存在，是因为 $\mathcal{B}$ 张成 $V$；系数唯一，是因为 $\mathcal{B}$ [线性无关](../linear-combinations/)。如果第二个展开式的系数是 $\beta_1, \ldots, \beta_n$，把两个展开式相减，得到：

$$(\alpha_1 - \beta_1)\mathbf{v}_1 + \cdots + (\alpha_n - \beta_n)\mathbf{v}_n = \mathbf{0}$$

线性无关迫使这个组合的每个系数都为零，所以对每个 $i$ 都有 $\alpha_i = \beta_i$。

$\mathbf{v}$ 关于 $\mathcal{B}$ 的坐标列是由展开式的系数构成的列：

$$
[\mathbf{v}]_{\mathcal{B}} =
\begin{pmatrix}
\alpha_1 \\[6pt]
\vdots \\[6pt]
\alpha_n
\end{pmatrix} \in F^n
$$

坐标写成列，这样[矩阵](../matrices/)就通过左乘作用在它们上面。

- - -

坐标映射 $C_{\mathcal{B}} : V \to F^n$ 把 $\mathbf{v}$ 送到 $[\mathbf{v}]_{\mathcal{B}}$。它是线性的。如果 $\mathbf{u} = \sum_i \alpha_i\mathbf{v}_i$ 且 $\mathbf{w} = \sum_i \beta_i\mathbf{v}_i$，那么 $\lambda\mathbf{u} + \mu\mathbf{w} = \sum_i (\lambda\alpha_i + \mu\beta_i)\mathbf{v}_i$。由展开式的唯一性，$\lambda\mathbf{u} + \mu\mathbf{w}$ 的坐标是标量 $\lambda\alpha_i + \mu\beta_i$。这个映射是单射，因为坐标全为零的向量是零向量；它是满射，因为任意 $n$ 个标量都可以用作系数。因此 $C_{\mathcal{B}}$ 是一个[同构](../homomorphisms-and-isomorphisms/)，$V \cong F^n$。

这个同构依赖于基，也依赖于基的顺序。在 $\mathbb{R}^2$ 中，向量 $\mathbf{v} = (3, 1)$ 关于 $(\mathbf{e}_1, \mathbf{e}_2)$ 的坐标列是 $(3, 1)^{\mathsf{T}}$，关于 $(\mathbf{e}_2, \mathbf{e}_1)$ 的坐标列是 $(1, 3)^{\mathsf{T}}$。基没有规定的顺序，而有序基带有一个编号，它固定了各个坐标的位置。

基的选取改变了哪些系数作为坐标出现。在次数至多为 $2$ 的实[多项式](../polynomials/)空间 $P_2(\mathbb{R})$ 中，单项式 $1, x, x^2$ 给出通常意义下 $p$ 的系数，而基 $1, x - 1, (x - 1)^2$ 给出 $p$ 在 $1$ 处的[泰勒展开式](../taylor-formula-with-remainder/)的系数。对于 $p(x) = x^2$，恒等式 $x^2 = 1 + 2(x - 1) + (x - 1)^2$ 表明两个坐标列是 $(0, 0, 1)^{\mathsf{T}}$ 和 $(1, 2, 1)^{\mathsf{T}}$。

## 基变换矩阵

固定同一个空间 $V$ 的两个有序基：

$$\mathcal{B} = (\mathbf{v}_1, \ldots, \mathbf{v}_n) \qquad \mathcal{B}' = (\mathbf{v}'_1, \ldots, \mathbf{v}'_n)$$

对每个 $j$，有唯一的标量 $p_{1j}, \ldots, p_{nj}$ 满足：

$$\mathbf{v}_j = \sum_{i=1}^{n} p_{ij}\mathbf{v}'_i$$

从 $\mathcal{B}$ 到 $\mathcal{B}'$ 的基变换矩阵是 $n$ 阶方阵 $P_{\mathcal{B} \to \mathcal{B}'} = (p_{ij})$。它的第 $j$ 列是坐标列 $[\mathbf{v}_j]_{\mathcal{B}'}$。这个矩阵也称为两个基之间的过渡矩阵。

取 $\mathbf{v} \in V$，它在 $\mathcal{B}$ 中的坐标是 $\alpha_1, \ldots, \alpha_n$，代入每个 $\mathbf{v}_j$ 的展开式，并交换两个有限和：

$$
\begin{align}
\mathbf{v} &= \sum_{j=1}^{n} \alpha_j\mathbf{v}_j \\[6pt]
  &= \sum_{j=1}^{n} \alpha_j \sum_{i=1}^{n} p_{ij}\mathbf{v}'_i \\[6pt]
  &= \sum_{i=1}^{n} \left(\sum_{j=1}^{n} p_{ij}\alpha_j\right)\mathbf{v}'_i
\end{align}
$$

内层的和是乘积 $P_{\mathcal{B} \to \mathcal{B}'}[\mathbf{v}]_{\mathcal{B}}$ 的第 $i$ 个元素，外层的和是 $\mathbf{v}$ 在 $\mathcal{B}'$ 中的一个展开式。因此由坐标的唯一性得到基变换公式：

$$[\mathbf{v}]_{\mathcal{B}'} = P_{\mathcal{B} \to \mathcal{B}'}[\mathbf{v}]_{\mathcal{B}}$$

> 箭头的方向固定了约定的两个方面。$P_{\mathcal{B} \to \mathcal{B}'}$ 的各列是用 $\mathcal{B}'$ 表示的 $\mathcal{B}$ 的向量，乘以这个矩阵把 $\mathcal{B}$ 坐标转换为 $\mathcal{B}'$ 坐标。反向的转换使用 $P_{\mathcal{B}' \to \mathcal{B}}$。下面的复合律证明这两个矩阵互为逆矩阵。

没有别的矩阵满足这个公式。如果对每个 $\mathbf{v}$ 都有 $M[\mathbf{v}]_{\mathcal{B}} = [\mathbf{v}]_{\mathcal{B}'}$，取 $\mathbf{v} = \mathbf{v}_j$。那么 $[\mathbf{v}_j]_{\mathcal{B}}$ 是 $F^n$ 的第 $j$ 个标准列，所以乘积 $M[\mathbf{v}_j]_{\mathcal{B}}$ 是 $M$ 的第 $j$ 列，它必须等于 $[\mathbf{v}_j]_{\mathcal{B}'}$。

- - -

更一般地，相对于 $V$ 的有序基 $\mathcal{B}$ 和 $W$ 的有序基 $\mathcal{C}$，线性映射 $T : V \to W$ 的[矩阵](../linear-maps/)以 $[T(\mathbf{v}_j)]_{\mathcal{C}}$ 为第 $j$ 列。它是对每个 $\mathbf{v} \in V$ 都满足 $[T(\mathbf{v})]_{\mathcal{C}} = A[\mathbf{v}]_{\mathcal{B}}$ 的唯一矩阵 $A$。取 $W = V$、$T = \mathrm{id}_V$ 和 $\mathcal{C} = \mathcal{B}'$，可知 $P_{\mathcal{B} \to \mathcal{B}'}$ 是恒等映射相对于定义域中的 $\mathcal{B}$ 和陪域中的 $\mathcal{B}'$ 的矩阵。$V$ 的每个向量都不变，而它的坐标列变了。

## 可逆性与变换的复合

设 $\mathcal{B}$、$\mathcal{B}'$ 和 $\mathcal{B}''$ 是 $V$ 的三个有序基。对任意的 $\mathbf{v}$ 应用两次基变换公式，得到：

$$[\mathbf{v}]_{\mathcal{B}''} = P_{\mathcal{B}' \to \mathcal{B}''}[\mathbf{v}]_{\mathcal{B}'} = P_{\mathcal{B}' \to \mathcal{B}''}P_{\mathcal{B} \to \mathcal{B}'}[\mathbf{v}]_{\mathcal{B}}$$

右边的乘积满足从 $\mathcal{B}$ 到 $\mathcal{B}''$ 的基变换的定义性质，所以由唯一性得到复合律：

$$P_{\mathcal{B}' \to \mathcal{B}''}P_{\mathcal{B} \to \mathcal{B}'} = P_{\mathcal{B} \to \mathcal{B}''}$$

$P_{\mathcal{B} \to \mathcal{B}}$ 的第 $j$ 列是 $[\mathbf{v}_j]_{\mathcal{B}}$，即第 $j$ 个标准列，所以 $P_{\mathcal{B} \to \mathcal{B}} = I_n$。在复合律中令 $\mathcal{B}'' = \mathcal{B}$，得到：

$$P_{\mathcal{B}' \to \mathcal{B}}P_{\mathcal{B} \to \mathcal{B}'} = I_n$$

交换两个基的角色，就得到另一种顺序的乘积。因此每个基变换矩阵都[可逆](../inverse-matrix/)，并且：

$$P_{\mathcal{B} \to \mathcal{B}'}^{-1} = P_{\mathcal{B}' \to \mathcal{B}}$$

特别地，$\det P_{\mathcal{B} \to \mathcal{B}'} \neq 0$，因为矩阵可逆恰好当它的[行列式](../determinant/)不为零。

- - -

反过来，固定 $V$ 的一个有序基 $\mathcal{B}' = (\mathbf{v}'_1, \ldots, \mathbf{v}'_n)$，取一个 $n$ 阶可逆矩阵 $P = (p_{ij})$，并定义 $n$ 个向量：

$$\mathbf{v}_j = \sum_{i=1}^{n} p_{ij}\mathbf{v}'_i$$

为了证明这些向量构成一个基，假设 $\sum_j \gamma_j\mathbf{v}_j = \mathbf{0}$。应用 $C_{\mathcal{B}'}$ 得到 $\sum_j \gamma_j[\mathbf{v}_j]_{\mathcal{B}'} = \mathbf{0}$。这些坐标列就是 $P$ 的各列。由于 $P$ 可逆，它的各列线性无关，所以每个 $\gamma_j$ 都为零。于是 $\mathbf{v}_1, \ldots, \mathbf{v}_n$ 是 $n$ 维空间中 $n$ 个线性无关的向量。它们构成一个有序基 $\mathcal{B}$，满足 $P_{\mathcal{B} \to \mathcal{B}'} = P$。

$V$ 上的基变换矩阵恰好是 $n$ 阶可逆矩阵。一旦固定了一个有序基，$V$ 的有序基就与[一般线性群](../groups/) $\mathrm{GL}_n(F)$ 的元素一一对应。

## 例题

在 $\mathbb{R}^2$ 中，设 $\mathcal{E} = (\mathbf{e}_1, \mathbf{e}_2)$ 是标准基，并令 $\mathbf{u}_1 = (1, 1)$ 和 $\mathbf{u}_2 = (1, -1)$。如果 $a\mathbf{u}_1 + b\mathbf{u}_2 = \mathbf{0}$，那么 $a + b = 0$ 且 $a - b = 0$，所以 $a = b = 0$。于是 $\mathcal{B} = (\mathbf{u}_1, \mathbf{u}_2)$ 是一个有序基。关于 $\mathcal{E}$ 的坐标就是各个分量本身，所以 $P_{\mathcal{B} \to \mathcal{E}}$ 的各列是 $\mathbf{u}_1$ 和 $\mathbf{u}_2$：

$$
P_{\mathcal{B} \to \mathcal{E}} =
\begin{pmatrix}
1 & 1 \\[6pt]
1 & -1
\end{pmatrix}
$$

反方向的变换是逆矩阵：

$$
P_{\mathcal{E} \to \mathcal{B}} = -\frac{1}{2}
\begin{pmatrix}
-1 & -1 \\[6pt]
-1 & 1
\end{pmatrix}
=
\begin{pmatrix}
\dfrac{1}{2} & \dfrac{1}{2} \\[6pt]
\dfrac{1}{2} & -\dfrac{1}{2}
\end{pmatrix}
$$

对于 $\mathbf{v} = (3, 1)$，基变换公式给出：

$$
[\mathbf{v}]_{\mathcal{B}} =
\begin{pmatrix}
\dfrac{1}{2} & \dfrac{1}{2} \\[6pt]
\dfrac{1}{2} & -\dfrac{1}{2}
\end{pmatrix}
\begin{pmatrix}
3 \\[6pt]
1
\end{pmatrix}
=
\begin{pmatrix}
2 \\[6pt]
1
\end{pmatrix}
$$

展开式 $2\mathbf{u}_1 + \mathbf{u}_2 = (2, 2) + (1, -1) = (3, 1)$ 验证了这个坐标列。给定的向量直接确定了 $P_{\mathcal{B} \to \mathcal{E}}$，而它的逆矩阵把 $\mathcal{E}$ 坐标变为 $\mathcal{B}$ 坐标。

- - -

第一节中的多项式基是：

$$\mathcal{M} = (1, x, x^2) \qquad \mathcal{T} = (1, x - 1, (x - 1)^2)$$

展开式 $1 = 1$、$x = 1 + (x - 1)$ 和 $x^2 = 1 + 2(x - 1) + (x - 1)^2$ 给出从 $\mathcal{M}$ 到 $\mathcal{T}$ 的基变换的三列：

$$
P_{\mathcal{M} \to \mathcal{T}} =
\begin{pmatrix}
1 & 1 & 1 \\[6pt]
0 & 1 & 2 \\[6pt]
0 & 0 & 1
\end{pmatrix}
$$

对于反方向，恒等式 $1 = 1$、$x - 1 = -1 + x$ 和 $(x - 1)^2 = 1 - 2x + x^2$ 给出三列：

$$
P_{\mathcal{T} \to \mathcal{M}} =
\begin{pmatrix}
1 & -1 & 1 \\[6pt]
0 & 1 & -2 \\[6pt]
0 & 0 & 1
\end{pmatrix}
$$

把这两个矩阵按任一顺序相乘，都得到 $I_3$。对于 $p(x) = a + bx + cx^2$，在 $\mathcal{T}$ 中的坐标列是：

$$
P_{\mathcal{M} \to \mathcal{T}}
\begin{pmatrix}
a \\[6pt]
b \\[6pt]
c
\end{pmatrix}
=
\begin{pmatrix}
a + b + c \\[6pt]
b + 2c \\[6pt]
c
\end{pmatrix}
$$

三个元素是 $p(1)$、$p'(1)$ 和 $p''(1)/2$，即 $p$ 在 $1$ 处的泰勒系数。于是 $P_{\mathcal{M} \to \mathcal{T}}$ 把 $p$ 在 $0$ 处的泰勒系数变为在 $1$ 处的泰勒系数。

## 线性映射的基变换

设 $W$ 是 $F$ 上的 $m$ 维向量空间，设 $T : V \to W$ 是一个[线性映射](../linear-maps/)，并选取 $V$ 的两个有序基 $\mathcal{B}$、$\mathcal{B}'$ 和 $W$ 的两个有序基 $\mathcal{C}$、$\mathcal{C}'$。用 $A$ 表示 $T$ 相对于 $\mathcal{B}$ 和 $\mathcal{C}$ 的矩阵，用 $A'$ 表示 $T$ 相对于 $\mathcal{B}'$ 和 $\mathcal{C}'$ 的矩阵。令：

$$P = P_{\mathcal{B}' \to \mathcal{B}} \qquad Q = P_{\mathcal{C}' \to \mathcal{C}}$$

矩阵 $P$ 把 $\mathcal{B}'$ 坐标转换为 $\mathcal{B}$ 坐标，而 $Q$ 把 $\mathcal{C}'$ 坐标转换为 $\mathcal{C}$ 坐标。因此 $Q^{-1}$ 把 $\mathcal{C}$ 坐标转换为 $\mathcal{C}'$ 坐标。对于 $\mathbf{v} \in V$，三步坐标运算是：

$$
\begin{align}
[T(\mathbf{v})]_{\mathcal{C}'} &= Q^{-1}[T(\mathbf{v})]_{\mathcal{C}} \\[6pt]
  &= Q^{-1}A[\mathbf{v}]_{\mathcal{B}} \\[6pt]
  &= Q^{-1}AP[\mathbf{v}]_{\mathcal{B}'}
\end{align}
$$

这个等式对每个 $\mathbf{v} \in V$ 成立，所以由 $T$ 的矩阵的唯一性得到：

$$A' = Q^{-1}AP$$

如果对某个 $n$ 阶可逆矩阵 $P$ 和某个 $m$ 阶可逆矩阵 $Q$ 有 $A' = Q^{-1}AP$，就说两个 $m \times n$ 矩阵 $A$ 和 $A'$ 是等价的。等价的矩阵是同一个线性映射相对于定义域和陪域的不同基的矩阵。

- - -

在定义域和陪域中独立地作基变换时，秩确定了一个标准形。设 $r$ 是 $T$ 的[秩](../rank-of-a-matrix/)。由[秩-零化度定理](../kernel-and-image-of-a-linear-map/)，$T$ 的核的维数是 $n - r$。选取 $V$ 的向量 $\mathbf{u}_1, \ldots, \mathbf{u}_r$，使它们的像构成 $\mathrm{im}(T)$ 的一个基，选取 $\ker(T)$ 的一个基 $\mathbf{k}_1, \ldots, \mathbf{k}_{n-r}$，并取：

$$\mathcal{B}' = (\mathbf{u}_1, \ldots, \mathbf{u}_r, \mathbf{k}_1, \ldots, \mathbf{k}_{n-r})$$

这 $n$ 个向量线性无关。如果 $\sum_{i=1}^{r} a_i\mathbf{u}_i + \sum_{j=1}^{n-r} b_j\mathbf{k}_j = \mathbf{0}$，应用 $T$ 得到 $\sum_{i=1}^{r} a_iT(\mathbf{u}_i) = \mathbf{0}$。由于向量 $T(\mathbf{u}_1), \ldots, T(\mathbf{u}_r)$ 线性无关，每个 $a_i$ 都为零。于是剩下的关系 $\sum_{j=1}^{n-r} b_j\mathbf{k}_j = \mathbf{0}$ 蕴含每个 $b_j$ 都为零。因此 $\mathcal{B}'$ 是 $V$ 的一个有序基。线性无关的向量 $T(\mathbf{u}_1), \ldots, T(\mathbf{u}_r)$ 可以扩充为 $W$ 的一个有序基 $\mathcal{C}'$。按照构造，$T$ 的矩阵的前 $r$ 列是 $F^m$ 的前 $r$ 个标准列，其余各列为零。因此在这两个基下的矩阵是：

$$
A' =
\begin{pmatrix}
I_r & 0 \\[6pt]
0 & 0
\end{pmatrix}
$$

所以每个秩为 $r$ 的 $m \times n$ 矩阵都等价于这个矩阵。由于乘以可逆矩阵保持秩不变，两个大小相同的矩阵等价，当且仅当它们的秩相同。于是，当定义域和陪域的基可以独立选取时，秩完全确定了等价类。

## 自同态与相似矩阵

对于自同态 $T : V \to V$，它在有序基 $\mathcal{B}$ 下的矩阵是在定义域和陪域中都相对于 $\mathcal{B}$ 的矩阵。因此基变换公式中出现的是一个矩阵和它的逆。设 $A$ 是 $T$ 在 $\mathcal{B}$ 下的矩阵，$A'$ 是它在 $\mathcal{B}'$ 下的矩阵，并令 $P = P_{\mathcal{B}' \to \mathcal{B}}$。上一节的公式取 $Q = P$ 就成为：

$$A' = P^{-1}AP$$

如果对某个可逆的 $P$ 有 $A' = P^{-1}AP$，就说两个 $n$ 阶方阵 $A$ 和 $A'$ 是相似的。相似是一个等价关系。它是自反的，因为 $A = I^{-1}AI$。它是对称的，因为由 $A' = P^{-1}AP$ 得到 $A = (P^{-1})^{-1}A'P^{-1}$。它是传递的，因为由 $A'' = R^{-1}A'R$ 和 $A' = P^{-1}AP$ 得到 $A'' = (PR)^{-1}A(PR)$。$A$ 的相似类是固定的自同态 $T$ 相对于 $V$ 的各个有序基的矩阵的集合。

- - -

行列式与有序基无关，因为由乘积法则得到：

$$\det(P^{-1}AP) = \det(P)^{-1}\det(A)\det(P) = \det(A)$$

[特征多项式](../eigenvalues-and-eigenvectors/)与有序基无关，因为 $P^{-1}AP - \lambda I = P^{-1}(A - \lambda I)P$，从而 $\det(P^{-1}AP - \lambda I) = \det(A - \lambda I)$。相似的矩阵有相同的特征值，代数重数也相同。[迹](../matrices/)是不变量，因为由 $\mathrm{tr}(XY) = \mathrm{tr}(YX)$ 得到 $\mathrm{tr}(P^{-1}AP) = \mathrm{tr}(APP^{-1}) = \mathrm{tr}(A)$。秩是不变量，因为相似的矩阵特别地是等价的。

相似是比等价更细的关系。矩阵 $I_2$ 和 $\mathrm{diag}(1, 2)$ 的秩都是 $2$，所以它们等价；但对每个可逆的 $P$ 都有 $P^{-1}I_2P = I_2$，所以与 $I_2$ 相似的矩阵只有 $I_2$ 本身。等价允许在定义域和陪域中独立地作基变换，而相似在两边使用同一个基变换。秩可以对等价类分类，但不能对相似类分类。

- - -

由[特征向量](../eigenvalues-and-eigenvectors/)构成的基使 $T$ 的矩阵成为对角矩阵。如果 $\mathcal{B}' = (\mathbf{w}_1, \ldots, \mathbf{w}_n)$ 满足 $T(\mathbf{w}_j) = \lambda_j\mathbf{w}_j$，那么 $T$ 在 $\mathcal{B}'$ 下的矩阵的第 $j$ 列在位置 $j$ 处是 $\lambda_j$，其余位置为零。于是这个矩阵是 $D = \mathrm{diag}(\lambda_1, \ldots, \lambda_n)$。如果 $A$ 是 $T$ 在 $F^n$ 的标准基 $\mathcal{E}$ 下的矩阵，且 $P = P_{\mathcal{B}' \to \mathcal{E}}$，那么 $P$ 的各列是特征向量，[对角化](../matrix-diagonalization/)公式为：

$$P^{-1}AP = D$$

考虑 $\mathbb{R}^2$ 的自同态 $T$，它由 $T(x, y) = (x + 2y, 2x + y)$ 定义，在标准基下的矩阵是：

$$
A =
\begin{pmatrix}
1 & 2 \\[6pt]
2 & 1
\end{pmatrix}
$$

第一个例题中的基 $\mathcal{B} = (\mathbf{u}_1, \mathbf{u}_2)$ 由特征向量组成，因为 $T(\mathbf{u}_1) = (3, 3) = 3\mathbf{u}_1$ 且 $T(\mathbf{u}_2) = (-1, 1) = -\mathbf{u}_2$。那个例题中算出的矩阵满足：

$$
\begin{pmatrix}
\dfrac{1}{2} & \dfrac{1}{2} \\[6pt]
\dfrac{1}{2} & -\dfrac{1}{2}
\end{pmatrix}
\begin{pmatrix}
1 & 2 \\[6pt]
2 & 1
\end{pmatrix}
\begin{pmatrix}
1 & 1 \\[6pt]
1 & -1
\end{pmatrix}
=
\begin{pmatrix}
3 & 0 \\[6pt]
0 & -1
\end{pmatrix}
$$

自同态 $T$ 把 $(1, 1)$ 张成的直线上的向量乘以 $3$，把 $(1, -1)$ 张成的直线上的向量乘以 $-1$。这两条不变直线是相对于 $\mathcal{B}$ 的坐标轴，$T$ 在这个基下的矩阵是对角矩阵。

> 关于坐标、过渡矩阵、等价和相似，参见 Sheldon Axler 的 Linear Algebra Done Right 第 3 章，以及 Anthony W. Knapp 的 Basic Algebra 第 II 章第 3 节，均列于[参考书目](../bibliography/)。
