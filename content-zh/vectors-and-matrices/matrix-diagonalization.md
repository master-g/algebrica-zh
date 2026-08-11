---
title: 矩阵对角化
title_en: Matrix Diagonalization
source: https://algebrica.org/matrix-diagonalization/
license: CC BY-NC 4.0
tags:
  - cayley-hamilton-theorem
  - diagonalization
  - eigenvalues
  - eigenvectors
  - linear-algebra
  - matrices
  - similar-matrices
  - spectral-theorem
translation:
  status: current
  source_hash: d4665172224d4b66bd79305aff2e01305c9890a9803919dd62b698e43b9606c2
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 对角化条件

一个[方阵](../matrices/)称为可对角化的，当可以找到其底层[向量空间](../vector-spaces/)的一组基，该基完全由该矩阵的[特征向量](../eigenvalues-and-eigenvectors/)组成。当这样的基存在时，该矩阵可以写成对角矩阵，其对角元即为特征值。在这种表示下，幂、指数函数以及线性微分方程的解的计算都归结为对对角元的操作。

设 $A$ 为一个 $n$ 阶方阵，其元素取自 $\mathbb{R}$ 或 $\mathbb{C}$。矩阵 $A$ 可对角化，当且仅当存在可逆矩阵 $P$ 和对角矩阵 $D$，使得以下关系成立：

$$A = P D P^{-1}$$

$P$ 的列是 $A$ 的特征向量，$D$ 的对角元是相应的特征值。等价地，上述关系可以改写为如下形式：

$$P^{-1} A P = D$$

这一表述清楚地表明 $P$ 是一个换基矩阵：它将 $A$ 的标准表示转化为在特征向量基中表示的对角表示 $D$。

> 矩阵 $D$ 除了对角线上特征值的排列顺序外是唯一的，而 $P$ 则不唯一，因为每个特征向量都可以用任意非零标量倍数替换。

## 相似矩阵

关系 $P^{-1} A P = D$ 是方阵之间更一般关系的一个实例。两个 $n$ 阶方阵 $A$ 和 $B$ 称为相似的，记作 $A \sim B$，当存在可逆矩阵 $P$ 使得：

$$B = P^{-1} A P$$

相似矩阵表示同一[线性映射](../linear-maps/)在不同基下的表示，其中 $P$ 是它们之间的[换基矩阵](../change-of-basis-matrix/)。因此，不依赖于基的选择的量为相似矩阵所共有：$A$ 和 $B$ 具有相同的特征多项式，从而具有相同的特征值及其相同的代数重数，特别地具有相同的[行列式](../determinant/)、相同的迹和相同的[秩](../rank-of-a-matrix/)。

用这种语言来说，一个矩阵可对角化当且仅当它与一个对角矩阵相似。该矩阵的对角元是 $A$ 的特征值，$P$ 的列是构成新基的特征向量。

## 特征值与特征向量

对角化的构造完全依赖于 $A$ 的[特征结构](../eigenvalues-and-eigenvectors/)。回顾一下，标量 $\lambda$ 是 $A$ 的特征值，如果存在一个非零向量 $\mathbf{v}$ 满足以下方程：

$$A\mathbf{v} = \lambda\mathbf{v}$$

这样的向量 $\mathbf{v}$ 称为 $A$ 的对应于 $\lambda$ 的特征向量。特征值通过求解特征方程来确定，该方程通过要求矩阵 $A - \lambda I$ 为奇异矩阵而得到：

$$\det(A - \lambda I) = 0$$

该方程的左端是关于 $\lambda$ 的 $n$ 次[多项式](../polynomials/)，称为 $A$ 的特征多项式。其根（按重数计）即为 $A$ 的特征值。一旦确定了特征值 $\lambda_k$，对应的特征向量就是齐次[线性方程组](../rouche-capelli-theorem/)的非零解：

$$(A - \lambda_k I)\mathbf{v} = \mathbf{0}$$

所有解的集合（包括零向量）构成 $\mathbb{R}^n$（或 $\mathbb{C}^n$）的一个子空间，称为对应于 $\lambda_k$ 的特征空间。

## 代数重数与几何重数

每个特征值 $\lambda_k$ 都带有两个不同的重数概念，它们在判定 $A$ 是否可对角化时起着核心作用。$\lambda_k$ 的代数重数，记为 $m_a(\lambda_k)$，是 $\lambda_k$ 作为特征多项式的根的重数。$\lambda_k$ 的几何重数，记为 $m_g(\lambda_k)$，是对应特征空间的维数，即：

$$m_g(\lambda_k) = \dim \ker(A - \lambda_k I)$$

可以证明，对于每个特征值，几何重数不超过代数重数：

$$1 \leq m_g(\lambda_k) \leq m_a(\lambda_k)$$

矩阵 $A$ 可对角化，当且仅当对于每个特征值 $\lambda_k$，几何重数等于代数重数。特别地，具有 $n$ 个不同特征值的矩阵总是可对角化的，因为在这种情况下每个特征值的两种重数都等于一。

## 对角化步骤

矩阵 $P$ 和 $D$ 的实际构造遵循一套明确定义的步骤。

+ 第一步是计算特征多项式 $\det(A - \lambda I)$ 并求出其所有[根](../roots-of-a-polynomial/)。这些根即为 $A$ 的特征值 $\lambda_1, \lambda_2, \ldots, \lambda_k$。
+ 第二步是对每个特征值，通过求解齐次方程组 $(A - \lambda_j I)\mathbf{v} = \mathbf{0}$ 来确定相应特征空间的基。所有这些基的并集必须恰好包含 $n$ 个线性无关的向量，矩阵才可对角化。
+ 第三步是将特征向量按列排列，排列顺序与 $D$ 中特征值的次序相对应，由此构成矩阵 $P$。然后将特征值 $\lambda_j$ 置于位置 $(j,j)$，从而构造出对角矩阵 $D$。

一旦 $P$ 组装完毕，便验证其可逆性并计算 $P^{-1}$，从而完成分解 $A = P D P^{-1}$。$P^{-1}$ 的计算依赖于[逆矩阵](../inverse-matrix/)词条中所述的方法。

## 示例 1

考虑以下矩阵：

$$A = \begin{pmatrix} 3 & 1 \\[6pt] 0 & 2 \end{pmatrix}$$

为了求特征值，计算 $A - \lambda I$ 的[行列式](../determinant/)：

$$\det(A - \lambda I) = \det \begin{pmatrix} 3 - \lambda & 1 \\[6pt] 0 & 2 - \lambda \end{pmatrix} = (3 - \lambda)(2 - \lambda)$$

因此特征方程如下：

$$(3 - \lambda)(2 - \lambda) = 0$$

两个根为 $\lambda_1 = 2$ 和 $\lambda_2 = 3$，均为单根，因此该矩阵可对角化。对于 $\lambda_1 = 2$，求解方程组 $(A - 2I)\mathbf{v} = \mathbf{0}$：

$$\begin{pmatrix} 1 & 1 \\[6pt] 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\[6pt] v_2 \end{pmatrix} = \begin{pmatrix} 0 \\[6pt] 0 \end{pmatrix}$$

第一行给出 $v_1 + v_2 = 0$，因此 $v_1 = -v_2$。选取 $v_2 = 1$，得到特征向量 $\mathbf{v}_1 = (-1, 1)^{\mathrm{T}}$。对于 $\lambda_2 = 3$，求解 $(A - 3I)\mathbf{v} = \mathbf{0}$：

$$\begin{pmatrix} 0 & 1 \\[6pt] 0 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\[6pt] v_2 \end{pmatrix} = \begin{pmatrix} 0 \\[6pt] 0 \end{pmatrix}$$

两行均给出 $v_2 = 0$，$v_1$ 自由。选取 $v_1 = 1$，得到特征向量 $\mathbf{v}_2 = (1, 0)^{\mathrm{T}}$。将这两个特征向量作为列放置，构成矩阵 $P$：

$$P = \begin{pmatrix} -1 & 1 \\[6pt] 1 & 0 \end{pmatrix}$$

其[逆矩阵](../inverse-matrix/)直接计算如下：

$$P^{-1} = \begin{pmatrix} 0 & 1 \\[6pt] 1 & 1 \end{pmatrix}$$

对角矩阵按对应顺序收录特征值：

$$D = \begin{pmatrix} 2 & 0 \\[6pt] 0 & 3 \end{pmatrix}$$

通过直接相乘可验证 $A = P D P^{-1}$ 成立。因此矩阵 $A$ 可对角化，其对角化由上述分解给出，其中 $P$ 和 $D$ 如上构造。

## 示例 2

考虑一个具有重特征值的矩阵。令 $A$ 为如下 $3 \times 3$ 矩阵：

$$
A = \begin{pmatrix}
4 & 1 & 0 \\[6pt]
0 & 4 & 0 \\[6pt]
0 & 0 & 2
\end{pmatrix}
$$

特征多项式通过展开 $A - \lambda I$ 的行列式得到：

$$
\det(A - \lambda I) = \det \begin{pmatrix}
4 - \lambda & 1 & 0 \\[6pt]
0 & 4 - \lambda & 0 \\[6pt]
0 & 0 & 2 - \lambda
\end{pmatrix} = (4 - \lambda)^2 (2 - \lambda)
$$

因此特征值为 $\lambda_1 = 4$，代数重数为二，以及 $\lambda_2 = 2$，代数重数为一。单重特征值 $\lambda_2 = 2$ 不存在困难。求解 $(A - 2I)\mathbf{v} = \mathbf{0}$ 得到方程组：

$$
\begin{pmatrix}
2 & 1 & 0 \\[6pt]
0 & 2 & 0 \\[6pt]
0 & 0 & 0
\end{pmatrix}
\begin{pmatrix} v_1 \\[6pt] v_2 \\[6pt] v_3 \end{pmatrix}
=
\begin{pmatrix} 0 \\[6pt] 0 \\[6pt] 0 \end{pmatrix}
$$

第二行给出 $v_2 = 0$，代入第一行得到 $v_1 = 0$，而 $v_3$ 为自由变量。因此特征空间是一维的，由向量 $\mathbf{v}_3 = (0, 0, 1)^{\mathrm{T}}$ 张成。重特征值 $\lambda_1 = 4$ 是关键情形。求解 $(A - 4I)\mathbf{v} = \mathbf{0}$ 得到方程组：

$$
\begin{pmatrix}
0 & 1 & 0 \\[6pt]
0 & 0 & 0 \\[6pt]
0 & 0 & -2
\end{pmatrix}
\begin{pmatrix} v_1 \\[6pt] v_2 \\[6pt] v_3 \end{pmatrix}
=
\begin{pmatrix} 0 \\[6pt] 0 \\[6pt] 0 \end{pmatrix}
$$

第一行给出 $v_2 = 0$，第三行给出 $v_3 = 0$，而 $v_1$ 为自由变量。与 $\lambda_1 = 4$ 关联的特征空间因此是一维的，由 $\mathbf{v}_1 = (1, 0, 0)^{\mathrm{T}}$ 张成。由于 $\lambda_1 = 4$ 的几何重数为一，严格小于其代数重数二，所求出的三个特征向量不足以构成 $\mathbb{R}^3$ 的基，因此矩阵 $A$ 不可对角化。

> 此示例表明，重特征值的存在本身并不阻止对角化：关键在于对应的特征空间维数是否等于代数重数。具有重特征值的矩阵是否可对角化取决于 $A - \lambda I$ 的[秩](../rank-of-a-matrix/)。

## 对角化失败的情形

并非每个方阵都可对角化。当至少一个特征值的几何重数严格小于其代数重数时，矩阵便不可对角化。在此情形下，与该特征值关联的特征空间过小，无法提供足够数量的线性无关的特征向量。一个标准示例如矩阵：

$$B = \begin{pmatrix} 2 & 1 \\[6pt] 0 & 2 \end{pmatrix}$$

其特征多项式为 $(2 - \lambda)^2$，因此 $\lambda = 2$ 是唯一的特征值，代数重数为二。求解 $(B - 2I)\mathbf{v} = \mathbf{0}$ 得到：

$$\begin{pmatrix} 0 & 1 \\[6pt] 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\[6pt] v_2 \end{pmatrix} = \begin{pmatrix} 0 \\[6pt] 0 \end{pmatrix}$$

唯一条件为 $v_2 = 0$，因此特征空间是一维的，由 $(1, 0)^{\mathrm{T}}$ 张成。由于几何重数为一而代数重数为二，无法组成 $\mathbb{R}^2$ 的特征向量基，因此矩阵 $B$ 不可对角化。

> 此类矩阵在若尔当标准形的框架下进行研究，该框架通过引入若尔当块为不可对角化矩阵提供了规范表示。

## 对域的依赖

一个矩阵是否可对角化可能取决于标量域，因为特征值是特征多项式的根，而这些根未必位于基域中。旋转矩阵

$$A = \begin{pmatrix} 0 & 1 \\[6pt] -1 & 0 \end{pmatrix}$$

的特征多项式为 $\lambda^2 + 1$，它没有实根，因此在 $\mathbb{R}$ 上该矩阵没有特征向量，不可对角化。在 $\mathbb{C}$ 上，同一个矩阵有两个不同的特征值 $i$ 和 $-i$，因此它有两个线性无关的特征向量，可对角化。于是，一个在 $\mathbb{R}$ 上不可对角化的实矩阵，一旦被视为复矩阵，就可能变得可对角化。

## 对称矩阵的对角化

有一类矩阵无需任何计算即可对角化。每个实对称矩阵在 $\mathbb{R}$ 上都可对角化，且其特征向量可选取为构成一个[标准正交基](../inner-product-spaces/)，这一结论称为谱定理。实对称矩阵的特征值全为实数，即使某个特征值是重的，其几何重数也等于其代数重数。

考虑对称矩阵：

$$
A = \begin{pmatrix}
0 & 1 & 1 \\[6pt]
1 & 0 & 1 \\[6pt]
1 & 1 & 0
\end{pmatrix}
$$

其特征多项式为 $-(\lambda + 1)^2(\lambda - 2)$，故特征值为 $\lambda_1 = -1$（代数重数为二）和 $\lambda_2 = 2$（代数重数为一）。解 $(A + I)\mathbf{v} = \mathbf{0}$ 给出唯一条件 $v_1 + v_2 + v_3 = 0$，其解空间是二维的，由 $(1, -1, 0)^{\mathrm{T}}$ 和 $(1, 0, -1)^{\mathrm{T}}$ 张成。因此该重特征值的几何重数为二，与其代数重数相等，而解 $(A - 2I)\mathbf{v} = \mathbf{0}$ 给出特征向量 $(1, 1, 1)^{\mathrm{T}}$。这三个特征向量构成 $\mathbb{R}^3$ 的一个基，所以 $A$ 可对角化，正如谱定理所保证的那样。

## 可对角化矩阵的幂

对角化最直接的应用之一涉及矩阵整数幂的计算。对于可对角化矩阵 $A = P D P^{-1}$，其第 $k$ 次幂具有如下简洁表达式：

$$A^k = P D^k P^{-1}$$

这一恒等式源于 $A^2 = (PDP^{-1})(PDP^{-1}) = PD^2P^{-1}$ 这一观察，由归纳法可推广到任意正整数 $k$。由于 $D$ 是对角矩阵，它的第 $k$ 次幂只需将每个对角元升到第 $k$ 次幂即可得到：

$$
D^k = \begin{pmatrix}
\lambda_1^k & & \\[6pt]
& \ddots & \\[6pt]
& & \lambda_n^k
\end{pmatrix}
$$

这一观察把原本繁重的矩阵乘法转化成了简单的标量计算。

## 凯莱–哈密顿定理

每个方阵都满足其自身的特征方程。若 $p_A(\lambda) = \det(A - \lambda I)$ 是 $n$ 阶矩阵 $A$ 的特征多项式，则将 $A$ 代入 $\lambda$，并将常数项视为单位阵的倍数，便得到零矩阵：

$$p_A(A) = O$$

这就是凯莱–哈密顿定理，它对每个方阵都成立，无论是否可对角化。对于二阶矩阵，特征多项式为 $\lambda^2 - \mathrm{tr}(A)\lambda + \det(A)$，因此定理写作：

$$A^2 - \mathrm{tr}(A) A + \det(A) I = O$$

考虑矩阵：

$$A = \begin{pmatrix} 2 & 1 \\[6pt] 1 & 3 \end{pmatrix}$$

此处 $\mathrm{tr}(A) = 5$ 且 $\det(A) = 5$，故特征多项式为 $\lambda^2 - 5\lambda + 5$。直接计算可验证 $A^2 - 5A + 5I = O$。

该关系式提供了一种无需计算伴随矩阵即可求逆的方法。整理 $A^2 - 5A + 5I = O$ 得到 $A(5I - A) = 5I$，因此：

$$A^{-1} = \frac{1}{5}(5I - A) = \frac{1}{5}\begin{pmatrix} 3 & -1 \\[6pt] -1 & 2 \end{pmatrix}$$

同样的思路适用于任意阶，因为定理将 $A^n$ 表示出来，并借此将所有更高的幂以及可逆矩阵的逆，用 $I, A, \ldots, A^{n-1}$ 表示出来。
