---
title: 逆矩阵
title_en: Inverse Matrix
source: https://algebrica.org/inverse-matrix/
license: CC BY-NC 4.0
tags:
  - adjugate
  - cofactor-method
  - gauss-jordan
  - inverse-matrix
  - linear-algebra
  - matrices
translation:
  status: current
  source_hash: cc80e1dbc76371ba823bdf504e0547371a2c0653ffbb8ada837cd846e3df3969
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

给定一个 $n$ 阶[矩阵](../matrices/) $A$，$A$ 的逆矩阵记为 $A^{-1}$，它是满足如下条件的矩阵：

$$A \cdot A^{-1} = A^{-1} \cdot A = I$$

其中 $I$ 是 $n$ 阶单位矩阵。当这样的矩阵存在时，它是唯一的。存在逆矩阵的方阵称为可逆的或非奇异的。不存在逆矩阵的矩阵称为奇异的。

逆矩阵表示由 $A$ 定义的[线性映射](../linear-maps/)的逆映射。如果 $A$ 将向量 $\mathbf{x}$ 映射到 $\mathbf{b}$，即 $A\mathbf{x} = \mathbf{b}$，那么 $A^{-1}$ 将 $\mathbf{b}$ 映射回 $\mathbf{x}$：

$$A\mathbf{x} = \mathbf{b} \implies \mathbf{x} = A^{-1}\mathbf{b}$$

这正是通过逆矩阵求解[线性方程组](../rouche-capelli-theorem/)所依据的原理。

方阵 $A$ 可逆当且仅当其[行列式](../determinant/)非零：

$$\det(A) \neq 0$$

> 条件 $\det(A) \neq 0$ 既是可逆性的必要条件也是充分条件。它等价于要求 $A$ 的各行（或各列）线性无关，且 $A$ 的[秩](../rank-of-a-matrix/)等于 $n$。所有 $n$ 阶可逆矩阵的集合在矩阵乘法下构成一个群，称为一般线性群 $GL(n, \mathbb{R})$，详见[群](../groups/)的条目。

## 逆矩阵的性质

逆矩阵满足以下性质，对于 $n$ 阶方阵 $A$ 和 $B$：

+ $(A^{-1})^{-1} = A$。逆矩阵的逆矩阵是原矩阵。
+ $(AB)^{-1} = B^{-1} A^{-1}$。乘积的逆矩阵会将因子的顺序反转。
+ $(A^{\mathrm{T}})^{-1} = (A^{-1})^{\mathrm{T}}$。转置的逆等于逆的转置。
+ $\det(A^{-1}) = \dfrac{1}{\det(A)}$。逆矩阵的行列式是 $A$ 行列式的倒数。

> $(AB)^{-1} = B^{-1}A^{-1}$ 中需要逆转顺序，原因与转置情况相同：矩阵乘法不满足交换律，因此求乘积的逆需要分别求每个因子的逆并逆转它们的顺序。

## 计算逆矩阵：余子式法

方阵 $A$（阶为 $n$）在存在逆矩阵时，可用余子式法计算。给定方阵 $A = (a_{ij})$，子式 $M_{ij}$ 是删除 $A$ 的第 $i$ 行与第 $j$ 列后所得 $(n-1) \times (n-1)$ 子矩阵的行列式。余子式 $C_{ij}$ 定义为：

$$C_{ij} = (-1)^{i+j} \cdot M_{ij}$$

余子式矩阵 $C$ 是以 $C_{ij}$ 为位置 $(i,j)$ 处元素的矩阵。余子式矩阵的转置记为 $C^{\mathrm{T}}$，称为 $A$ 的伴随矩阵，写作 $\mathrm{adj}(A)$。于是逆矩阵为：

$$A^{-1} = \frac{1}{\det(A)} C^{\mathrm{T}} = \frac{1}{\det(A)} \mathrm{adj}(A)$$

计算步骤如下：对 $A$ 的每个元素求余子式 $C_{ij}$，组装出余子式矩阵 $C$，转置得到 $\mathrm{adj}(A)$，再将每个元素除以 $\det(A)$。

## 二阶矩阵的逆矩阵

对于二阶矩阵，余子式法简化为一个显式公式。给定：

$$A = \begin{pmatrix} a & b \\[6pt] c & d \end{pmatrix}$$

交换两个对角元素并反转两个非对角元素的符号即得伴随矩阵，行列式为 $ad - bc$。因此逆矩阵为：

$$A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\[6pt] -c & a \end{pmatrix}$$

此公式在 $ad - bc \neq 0$ 时成立。考虑矩阵：

$$A = \begin{pmatrix} 1 & 2 \\[6pt] 3 & 4 \end{pmatrix}$$

其行列式为 $ad - bc = (1)(4) - (2)(3) = -2$，非零，故矩阵可逆。应用公式得：

$$
A^{-1} = \frac{1}{-2} \begin{pmatrix} 4 & -2 \\[6pt] -3 & 1 \end{pmatrix}
= \begin{pmatrix} -2 & 1 \\[6pt] \frac{3}{2} & -\frac{1}{2} \end{pmatrix}
$$

直接相乘即可验证 $A \cdot A^{-1} = I$。

> 同一公式也可由 Cayley–Hamilton 定理推出，对二阶矩阵该定理写作 $A^2 - (a+d)A + (ad-bc)I = O$。更一般地，该定理把任意可逆矩阵的逆表示为矩阵的多项式，此方法在[矩阵对角化](../matrix-diagonalization/)条目中展开。

## 示例 1

考虑以下矩阵：

$$
A = \begin{pmatrix}
3 & 0 & 0 \\[6pt]
2 & 1 & 0 \\[6pt]
-1 & 4 & 2
\end{pmatrix}
$$

这是一个下三角矩阵。其行列式等于对角元素的乘积，即 $\det(A) = 3 \cdot 1 \cdot 2 = 6$。下面逐个计算 $A$ 的九个余子式。

$$
\begin{align}
C_{11} &= (+1) \cdot \det\begin{pmatrix} 1 & 0 \\[6pt] 4 & 2 \end{pmatrix} = 2 \\[6pt]
C_{12} &= (-1) \cdot \det\begin{pmatrix} 2 & 0 \\[6pt] -1 & 2 \end{pmatrix} = -4 \\[6pt]
C_{13} &= (+1) \cdot \det\begin{pmatrix} 2 & 1 \\[6pt] -1 & 4 \end{pmatrix} = 9 \\[6pt]
C_{21} &= (-1) \cdot \det\begin{pmatrix} 0 & 0 \\[6pt] 4 & 2 \end{pmatrix} = 0 \\[6pt]
C_{22} &= (+1) \cdot \det\begin{pmatrix} 3 & 0 \\[6pt] -1 & 2 \end{pmatrix} = 6 \\[6pt]
C_{23} &= (-1) \cdot \det\begin{pmatrix} 3 & 0 \\[6pt] -1 & 4 \end{pmatrix} = -12 \\[6pt]
C_{31} &= (+1) \cdot \det\begin{pmatrix} 0 & 0 \\[6pt] 1 & 0 \end{pmatrix} = 0 \\[6pt]
C_{32} &= (-1) \cdot \det\begin{pmatrix} 3 & 0 \\[6pt] 2 & 0 \end{pmatrix} = 0 \\[6pt]
C_{33} &= (+1) \cdot \det\begin{pmatrix} 3 & 0 \\[6pt] 2 & 1 \end{pmatrix} = 3
\end{align}
$$

由上述九个余子式组装得到余子式矩阵 $C$：

$$
C = \begin{pmatrix}
\phantom{-}2 & -4 & \phantom{-}9 \\[6pt]
\phantom{-}0 & \phantom{-}6 & -12 \\[6pt]
\phantom{-}0 & \phantom{-}0 & \phantom{-}3
\end{pmatrix}
$$

对 $C$ 取转置，即得 $A$ 的伴随矩阵：

$$
\mathrm{adj}(A) = C^{\mathrm{T}} = \begin{pmatrix}
\phantom{-}2 & \phantom{-}0 & \phantom{-}0 \\[6pt]
-4 & \phantom{-}6 & \phantom{-}0 \\[6pt]
\phantom{-}9 & -12 & \phantom{-}3
\end{pmatrix}
$$

除以 $\det(A) = 6$：

$$
A^{-1} = \frac{1}{6}
\begin{pmatrix}
\phantom{-}2 & \phantom{-}0 & \phantom{-}0 \\[6pt]
-4 & \phantom{-}6 & \phantom{-}0 \\[6pt]
\phantom{-}9 & -12 & \phantom{-}3
\end{pmatrix}
=
\begin{pmatrix}
\dfrac{1}{3} & 0 & 0 \\[10pt]
-\dfrac{2}{3} & 1 & 0 \\[10pt]
\dfrac{3}{2} & -2 & \dfrac{1}{2}
\end{pmatrix}
$$

> 余子式法是精确的，但对于大型矩阵计算代价高昂，复杂度为 $O(n!)$，因为其中涉及的行列式求值开销极大。在数值计算实践中，逆矩阵通常通过[高斯消元法](../gaussian-elimination/)或 LU 分解来计算，二者均可达到 $O(n^3)$ 的复杂度。

## 用高斯—若尔当消元法求逆

余子式法在概念上清晰明了，但随着矩阵阶数增大，其计算开销将难以承受，因为它继承了用拉普拉斯展开求行列式时呈阶乘级增长的成本。在实际应用中，用高斯—若尔当消元法求矩阵的逆更为高效，其成本可降至 $O(n^3)$。

该过程的第一步是构造增广矩阵：将同阶单位矩阵 $I$ 置于 $A$ 的右侧：

$$[\ A \mid I\ ]$$

随后对该增广矩阵施以初等行变换，目标是将左半块化为单位矩阵。所允许的运算与求解线性方程组时所用相同：交换两行、将某一行乘以一个非零标量、将某一行加上另一行的标量倍数。每一次运算都同时对增广矩阵的两个块生效。

当过程结束、左半块已被化为 $I$ 时，右半块即为所求的逆矩阵：

$$[\ A \mid I\ ] \ \longrightarrow\ [\ I \mid A^{-1}\ ]$$

上述过程也可直接用于检验可逆性。若在化简过程中左半块的某一行变为全零行，则矩阵 $A$ 是奇异的，逆矩阵不存在。

> 当矩阵阶数超过三时，高斯—若尔当法是首选方法。余子式法作为定义和理论推理的工具仍有其价值，但就实际计算而言，高斯—若尔当法始终更为可取。

## 示例 2

以如下矩阵为例：

$$
A = \begin{pmatrix}
1 & 2 & 3 \\[6pt]
0 & 1 & 4 \\[6pt]
5 & 6 & 0
\end{pmatrix}
$$

将单位矩阵置于 $A$ 的右侧，构造增广矩阵：

$$
[\ A \mid I\ ] =
\left(
\begin{array}{ccc|ccc}
1 & 2 & 3 & 1 & 0 & 0 \\[6pt]
0 & 1 & 4 & 0 & 1 & 0 \\[6pt]
5 & 6 & 0 & 0 & 0 & 1
\end{array}
\right)
$$

首先消去第一列第三行处的元素。将第三行替换为它自身减去第一行的五倍，得到：

$$
\left(
\begin{array}{ccc|ccc}
1 & 2 & 3 & 1 & 0 & 0 \\[6pt]
0 & 1 & 4 & 0 & 1 & 0 \\[6pt]
0 & -4 & -15 & -5 & 0 & 1
\end{array}
\right)
$$

接下来消去第二列第三行处的元素。将第三行替换为它自身加上第二行的四倍，得到：

$$
\left(
\begin{array}{ccc|ccc}
1 & 2 & 3 & 1 & 0 & 0 \\[6pt]
0 & 1 & 4 & 0 & 1 & 0 \\[6pt]
0 & 0 & 1 & -5 & 4 & 1
\end{array}
\right)
$$

此时左半块已呈上三角形式，且主对角线上全为一。继续向上消去对角线以上的元素。将第二行替换为它自身减去第三行的四倍，将第一行替换为它自身减去第三行的三倍，得到：

$$
\left(
\begin{array}{ccc|ccc}
1 & 2 & 0 & 16 & -12 & -3 \\[6pt]
0 & 1 & 0 & 20 & -15 & -4 \\[6pt]
0 & 0 & 1 & -5 & 4 & 1
\end{array}
\right)
$$

最后，将第一行替换为它自身减去第二行的二倍，左边即化为单位矩阵，右边得到逆矩阵：

$$
\left(
\begin{array}{ccc|ccc}
1 & 0 & 0 & -24 & 18 & 5 \\[6pt]
0 & 1 & 0 & 20 & -15 & -4 \\[6pt]
0 & 0 & 1 & -5 & 4 & 1
\end{array}
\right)
$$

因此，$A$ 的逆矩阵为：

$$
A^{-1} = \begin{pmatrix}
-24 & 18 & 5 \\[6pt]
20 & -15 & -4 \\[6pt]
-5 & 4 & 1
\end{pmatrix}
$$

直接验算可确认结果正确，因为 $A \cdot A^{-1} = I$。逆矩阵出现在矩阵的[对角化](../matrix-diagonalization/)过程中，其中换基矩阵 $P$ 本身必须是可逆的。
