---
title: 特征值与特征向量
title_en: Eigenvalues and Eigenvectors
source: https://algebrica.org/eigenvalues-and-eigenvectors/
license: CC BY-NC 4.0
tags:
  - characteristic-polynomial
  - diagonalization
  - eigenvalues
  - eigenvectors
  - linear-algebra
  - matrices
translation:
  status: current
  source_hash: 46e385d6fdb70a55c8024cb47d7a516b9e82b95b8577e2a73e463edf0b7dc521
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

由[方阵](../matrices/) $A$ 表示的[线性映射](../linear-maps/)通过在空间中移动向量来发挥作用。变换可以拉伸、压缩、旋转或反射向量，一般而言，[向量](../vectors/)的像指向与原向量不同的方向。然而，在所有向量中，存在这样一些向量，$A$ 对它们的作用很简单：变换以常数因子缩放它们，保持其方向不变。这样的向量称为 $A$ 的特征向量，对应的缩放因子称为特征值。

> 特征向量是变换仅作缩放的方向，特征值不依赖于表示变换所选的基。

- - -

设 $A$ 为 $n$ 阶[方阵](../matrices/)，元素取自 $\mathbb{R}$ 或 $\mathbb{C}$。若存在标量 $\lambda$ 使得以下方程成立，则非零[向量](../vectors/) $\mathbf{v}$ 称为 $A$ 的特征向量：

$$A\mathbf{v} = \lambda\mathbf{v}$$

标量 $\lambda$ 称为 $A$ 的与 $\mathbf{v}$ 相关联的特征值。该条件要求 $A$ 将 $\mathbf{v}$ 映射为自身的标量倍数：向量 $\mathbf{v}$ 可能被拉伸或压缩，当 $\lambda$ 为负时其方向可能反转，但它始终位于过原点的同一条直线上。特征向量是变换的不变方向，特征值是沿这些方向的缩放因子。

> 按约定排除零向量。方程 $A\mathbf{0} = \lambda\mathbf{0}$ 对一切 $\lambda$ 都成立，不携带关于矩阵的任何信息。

- - -

下图对方阵说明了这一思想：

$$A = \begin{pmatrix} 2 & 1 \\[6pt] 1 & 2 \end{pmatrix}$$

![图 1](/assets/vectors-and-matrices/svg/eigenvalues-and-eigenvectors-1.svg)

[单位圆](../unit-circle/)被映射为[椭圆](../ellipse/)：大多数向量在变换下改变方向。两个特征向量 $\mathbf{v}_1$ 和 $\mathbf{v}_2$ 是例外。它们始终位于过原点的同一条直线上，分别被 $\lambda_1 = 3$ 和 $\lambda_2 = 1$ 缩放。

## 特征方程

将特征值方程改写为 $(A - \lambda I)\mathbf{v} = \mathbf{0}$，其中 $I$ 是 $n$ 阶单位矩阵，显然当且仅当矩阵 $A - \lambda I$ 为奇异矩阵时，存在非零解 $\mathbf{v}$。奇异的条件是它的[行列式](../determinant/)为零。方程

$$\det(A - \lambda I) = 0$$

称为 $A$ 的特征方程。展开行列式得到一个关于 $\lambda$ 的 $n$ 次多项式，称为 $A$ 的特征多项式。$A$ 的特征值是该多项式的[根](../roots-of-a-polynomial/)，根据代数学基本定理，在 $\mathbb{C}$ 中按重数计恰好有 $n$ 个。

> 实矩阵的特征多项式具有实系数，但这并不排除复根。实矩阵的复特征值总是成共轭对出现。更一般地，对于元素属于[域](../fields/) $F$ 的矩阵，特征值是特征多项式在 $F$ 或 $F$ 的代数扩张中的根，因此合适的所在域取决于该多项式的因式分解性质。

## 对域的依赖性

矩阵的特征值取决于矩阵所考虑的域，因为它们是特征多项式的根，而实系数多项式不一定有实根。因此实矩阵可能完全没有实特征值。考虑旋转矩阵：

$$A = \begin{pmatrix} 0 & 1 \\[6pt] -1 & 0 \end{pmatrix}$$

它的特征多项式由 $A - \lambda I$ 的行列式计算得到：

$$\det(A - \lambda I) = \det\begin{pmatrix} -\lambda & 1 \\[6pt] -1 & -\lambda \end{pmatrix} = \lambda^2 + 1$$

在 $\mathbb{R}$ 上该多项式没有根，因此 $A$ 没有实特征值，这与旋转不固定任何方向的几何事实一致。在 $\mathbb{C}$ 上根为 $\lambda = i$ 和 $\lambda = -i$。解 $(A - iI)\mathbf{v} = \mathbf{0}$ 得到条件 $y = ix$，因此特征空间由 $(1, i)^{\mathrm{T}}$ 张成，解 $(A + iI)\mathbf{v} = \mathbf{0}$ 得到 $(1, -i)^{\mathrm{T}}$。两个特征值是复共轭的，两个特征向量也是如此。

平面的反射则有所不同。其矩阵的迹为 $0$、行列式为 $-1$，所以特征多项式为 $\lambda^2 - 1$，特征值是实数 $1$ 与 $-1$；反射轴是特征值 $1$ 对应的特征空间，垂直直线是特征值 $-1$ 对应的特征空间。保持正多边形的旋转与反射构成[二面体群](../dihedral-groups/)。

> 矩阵的特征值一般不是其元素，特别地也不是主对角线上的元素。仅当矩阵为三角矩阵时，对角线上的元素才等于特征值，因为此时 $\det(A - \lambda I)$ 是对角差 $a_{ii} - \lambda$ 的乘积。

## 特征空间

对于每个特征值 $\lambda_0$，满足 $A\mathbf{v} = \lambda_0\mathbf{v}$ 的所有向量的[集合](../sets/)是[向量空间](../vector-spaces/) $\mathbb{R}^n$ 或 $\mathbb{C}^n$ 的子空间。它与 $A - \lambda_0 I$ 的[线性映射的核](../kernel-and-image-of-a-linear-map/)重合，称为 $A$ 对应于 $\lambda_0$ 的特征空间：

$$E_{\lambda_0} = \ker(A - \lambda_0 I) = \\{\ \mathbf{v} : (A - \lambda_0 I)\mathbf{v} = \mathbf{0} \ \\}$$

$E_{\lambda_0}$ 的维数称为 $\lambda_0$ 的几何重数。由于特征空间是 $A - \lambda_0 I$ 的核，秩-零化度关系给出 $\dim E_{\lambda_0} = n - \mathrm{rank}(A - \lambda_0 I)$，因此几何重数可直接由 $A - \lambda_0 I$ 的[秩](../rank-of-a-matrix/)得出。另一方面，$\lambda_0$ 作为特征多项式的根的重数称为 $\lambda_0$ 的代数重数。可以证明，几何重数永远不会超过代数重数。

## 例 1

考虑以下[矩阵](../matrices/)：

$$A = \begin{pmatrix} 3 & 1 \\[6pt] 0 & 2 \end{pmatrix}$$

我们构造矩阵 $A - \lambda I$ 并计算其[行列式](../determinant/)来求特征[多项式](../polynomials/)。由于 $A - \lambda I$ 是上三角矩阵，其行列式等于对角元素的乘积：

$$\det(A - \lambda I) = (3 - \lambda)(2 - \lambda)$$

令该表达式等于零，得到 $\lambda_1 = 2$ 和 $\lambda_2 = 3$。对于 $\lambda_1 = 2$，我们求解 $(A - 2I)\mathbf{v} = \mathbf{0}$。矩阵 $A - 2I$ 化简为：

$$A - 2I = \begin{pmatrix} 1 & 1 \\[6pt] 0 & 0 \end{pmatrix}$$

该方程组给出唯一条件 $v_1 + v_2 = 0$，因此 $v_1 = -v_2$。取 $v_2 = 1$，特征空间 $E_2$ 由以下向量张成：

$$\mathbf{v}_1 = \begin{pmatrix} -1 \\[6pt] 1 \end{pmatrix}$$

对于 $\lambda_2 = 3$，矩阵 $A - 3I$ 为：

$$A - 3I = \begin{pmatrix} 0 & 1 \\[6pt] 0 & -1 \end{pmatrix}$$

两行均给出条件 $v_2 = 0$，$v_1$ 为自由变量。取 $v_1 = 1$，特征空间 $E_3$ 由以下向量张成：

$$\mathbf{v}_2 = \begin{pmatrix} 1 \\[6pt] 0 \end{pmatrix}$$

因此，矩阵 $A$ 的特征值 $\lambda_1 = 2$ 对应特征向量 $(-1, 1)^{\mathrm{T}}$，特征值 $\lambda_2 = 3$ 对应特征向量 $(1, 0)^{\mathrm{T}}$。

## 例 2

考虑矩阵

$$
A = \begin{pmatrix}
2 & 1 & 0 \\[6pt]
0 & 2 & 0 \\[6pt]
0 & 0 & 3
\end{pmatrix}
$$

矩阵 $A - \lambda I$ 是分块上三角的，所以它的行列式又是各对角元的乘积。特征多项式如下：

$$p(\lambda) = (2 - \lambda)^2(3 - \lambda)$$

令 $p(\lambda) = 0$ 给出两个特征值：$\lambda_1 = 2$，其代数重数为二；以及 $\lambda_2 = 3$，其代数重数为一。

对于 $\lambda_2 = 3$，我们解 $(A - 3I)\mathbf{v} = \mathbf{0}$。矩阵 $A - 3I$ 为：

$$
A - 3I = \begin{pmatrix}
-1 & 1 & 0 \\[6pt]
0 & -1 & 0 \\[6pt]
0 & 0 & 0
\end{pmatrix}
$$

第二行给出 $v_2 = 0$，第一行随后给出 $v_1 = 0$，$v_3$ 是自由的。取 $v_3 = 1$，特征空间 $E_3$ 由以下向量张成：

$$\mathbf{v}_1 = \begin{pmatrix} 0 \\[6pt] 0 \\[6pt] 1 \end{pmatrix}$$

对于 $\lambda_1 = 2$，我们解 $(A - 2I)\mathbf{v} = \mathbf{0}$。矩阵 $A - 2I$ 为：

$$
A - 2I = \begin{pmatrix}
0 & 1 & 0 \\[6pt]
0 & 0 & 0 \\[6pt]
0 & 0 & 1
\end{pmatrix}
$$

第一行给出 $v_2 = 0$，第三行给出 $v_3 = 0$，而 $v_1$ 是自由的。取 $v_1 = 1$，特征空间 $E_2$ 是一维的，由以下向量张成：

$$\mathbf{v}_2 = \begin{pmatrix} 1 \\[6pt] 0 \\[6pt] 0 \end{pmatrix}$$

因此 $\lambda_1 = 2$ 的几何重数为一，而其代数重数为二。由于这两个值不同，矩阵 $A$ 不可[对角化](../matrix-diagonalization/)。它只有两个[线性无关](../rank-of-a-matrix/)的特征向量，这不足以构成 $\mathbb{R}^3$ 的基。

## 特征向量的线性无关

对应于不同特征值的特征向量总是线性无关的。更精确地说，如果 $\lambda_1, \ldots, \lambda_k$ 是 $A$ 的两两不同的特征值，对应的特征向量为 $\mathbf{v}_1, \ldots, \mathbf{v}_k$，那么 $\mathbf{v}_1, \ldots, \mathbf{v}_k$ 是线性无关的。证明通过对 $k$ 施行归纳法进行，并利用每个特征值互不相同这一事实，从任何假定的线性相关关系中导出矛盾。

因此，一个 $n$ 阶方阵若具有 $n$ 个不同的特征值，则总有 $n$ 个线性无关的特征向量，从而具有一组由特征向量构成的基。

## 对角化

一个 $n$ 阶矩阵 $A$ 如果可以写成如下形式，则称为可对角化的：

$$A = PDP^{-1}$$

其中 $P$ 是一个[可逆](../inverse-matrix/)矩阵，$D$ 是对角矩阵。$P$ 的各列是 $A$ 的特征向量，$D$ 的对应对角元则是相应的特征值。这种分解在存在时，可以简化 $A$ 的幂的计算。$k$ 次幂具有如下形式：

$$A^k = PD^kP^{-1}$$

由于对角矩阵的幂只需将每个对角元分别取相应幂即可，这避免了执行 $k$ 次逐次的矩阵乘法。

一个矩阵可对角化，当且仅当它的每个特征值的几何重数等于代数重数。当此条件不满足时，该矩阵不能被对角化，但可以化为若尔当标准形——这是一般情形下最接近对角形式的结构。完整的处理过程见专门的[矩阵对角化](../matrix-diagonalization/)条目。

## 迹、行列式与特征值

设 $\lambda_1, \lambda_2, \ldots, \lambda_n$ 为 $A$ 的按代数重数计的特征值。两个经典恒等式将它们与矩阵的元素直接联系起来。$A$ 的迹定义为其对角元之和，满足：

$$\mathrm{tr}(A) = \lambda_1 + \lambda_2 + \cdots + \lambda_n$$

$A$ 的[行列式](../determinant/)满足：

$$\det(A) = \lambda_1 \cdot \lambda_2 \cdots \lambda_n$$

两个恒等式都源于特征多项式的结构。第二个恒等式表明，一个矩阵奇异当且仅当零是其特征值之一。当手算特征值时，这两个关系提供了一种快速的校验手段。
