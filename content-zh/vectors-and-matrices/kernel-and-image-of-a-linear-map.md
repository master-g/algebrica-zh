---
title: 线性映射的核与像
title_en: Kernel and Image of a Linear Map
source: https://algebrica.org/kernel-and-image-of-a-linear-map/
license: CC BY-NC 4.0
tags:
  - basis
  - image
  - isomorphism
  - kernel
  - linear-algebra
  - linear-map
  - linear-systems
  - matrices
  - rank-nullity-theorem
  - subspace
  - vector-space
translation:
  status: current
  source_hash: 061473c98a0d29d055a42836c8b8c2a546cc84fdc8a337b17651aabe15c3b380
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

设 $V$ 和 $W$ 是域 $F$ 上的向量空间，并固定一个[线性映射](../linear-maps/) $T : V \to W$。$T$ 的核是映射到 $W$ 的零向量的向量所组成的集合：

$$\ker(T) = \{\ \mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}_W\ \}$$

$T$ 的像是它的所有值组成的集合：

$$\mathrm{im}(T) = \{\ T(\mathbf{v}) \mid \mathbf{v} \in V\ \}$$

由于 $T(\mathbf{0}_V) = \mathbf{0}_W$，核包含 $\mathbf{0}_V$，像包含 $\mathbf{0}_W$。核是 $\{\ \mathbf{0}_W\ \}$ 的原像，而像是 $T(V)$。核和像也分别称为零空间和值域。

- - -

核是 $V$ 的一个[子空间](../subspaces/)，像是 $W$ 的一个子空间。为验证前一个结论，取 $\mathbf{u}, \mathbf{v} \in \ker(T)$ 以及 $\alpha, \beta \in F$。由线性性：

$$T(\alpha\mathbf{u} + \beta\mathbf{v}) = \alpha T(\mathbf{u}) + \beta T(\mathbf{v}) = \alpha\mathbf{0}_W + \beta\mathbf{0}_W = \mathbf{0}_W$$

因此 $\alpha\mathbf{u} + \beta\mathbf{v}$ 属于 $\ker(T)$。若 $\mathbf{w}_1 = T(\mathbf{u})$ 和 $\mathbf{w}_2 = T(\mathbf{v})$ 属于像，则：

$$\alpha\mathbf{w}_1 + \beta\mathbf{w}_2 = T(\alpha\mathbf{u} + \beta\mathbf{v})$$

所以 $\alpha\mathbf{w}_1 + \beta\mathbf{w}_2$ 也属于像。

更一般地，$V$ 的每个子空间 $U$ 的像 $T(U)$ 都是 $W$ 的子空间，而 $W$ 的每个子空间 $Z$ 的原像 $T^{-1}(Z)$ 都是 $V$ 的子空间。这些结论都可由同样的计算得到。取 $U = V$ 和 $Z = \{\ \mathbf{0}_W\ \}$，就分别得到像和核。

> 核是定义域的子空间，而像是陪域的子空间。当 $V = W$ 时二者可能重合。例如，定义自同态 $N : F^2 \to F^2$，使得 $N(x, y) = (y, 0)$，则 $\ker(N) = \mathrm{im}(N) = \mathrm{span}\{\ \mathbf{e}_1\ \}$。因此 $\ker(N) + \mathrm{im}(N)$ 不是直和，也不等于 $F^2$。

## 单射性与纤维

线性映射是单射，当且仅当它的核为 $\{\ \mathbf{0}_V\ \}$。若 $T$ 是单射且 $\mathbf{v} \in \ker(T)$，则 $T(\mathbf{v}) = T(\mathbf{0}_V)$，所以 $\mathbf{v} = \mathbf{0}_V$。反之，设核为 $\{\ \mathbf{0}_V\ \}$，且 $T(\mathbf{u}) = T(\mathbf{v})$。由线性性可得 $T(\mathbf{u} - \mathbf{v}) = \mathbf{0}_W$。因此 $\mathbf{u} - \mathbf{v} = \mathbf{0}_V$，从而 $T$ 是单射。

核还决定每个非空纤维。取 $\mathbf{w} \in \mathrm{im}(T)$，并选取满足 $T(\mathbf{v}_0) = \mathbf{w}$ 的 $\mathbf{v}_0$。等式 $T(\mathbf{v}) = \mathbf{w}$ 成立，当且仅当 $T(\mathbf{v} - \mathbf{v}_0) = \mathbf{0}_W$，这又等价于 $\mathbf{v} - \mathbf{v}_0 \in \ker(T)$。因此：

$$T^{-1}(\{\ \mathbf{w}\ \}) = \mathbf{v}_0 + \ker(T)$$

纤维中的每个向量都可以作为 $\mathbf{v}_0$，得到的仿射子空间相同。如果核是平凡的，每个非空纤维都只有一个元素。对于映射 $\mathbf{x} \mapsto A\mathbf{x}$，这个公式表示，[线性方程组](../systems-of-linear-equations/)的解是一个特解加上相应齐次方程组的解。

## 满射性与像的一个张成集

若 $S$ 张成 $V$，则 $T(S)$ 张成 $\mathrm{im}(T)$。事实上，每个 $\mathbf{v} \in V$ 都是 $S$ 中元素的有限[线性组合](../linear-combinations/)，而线性性将 $T(\mathbf{v})$ 表示为这些元素的像所作的相应线性组合。若 $V$ 有限基 $\mathbf{v}_1, \ldots, \mathbf{v}_n$，则：

$$\mathrm{im}(T) = \mathrm{span}\{\ T(\mathbf{v}_1), \ldots, T(\mathbf{v}_n)\ \}$$

这些向量不一定线性无关。映射 $T$ 是满射，当且仅当 $\mathrm{im}(T) = W$。

$T$ 的秩是 $\dim \mathrm{im}(T)$，零化度是 $\dim \ker(T)$。当 $V$ 和 $W$ 都是有限维时，由上面的包含关系和张成集可得 $\mathrm{rank}(T) \leq \min(\dim V, \dim W)$。

## 秩-零化度定理

设 $V$ 是有限维的，且 $T : V \to W$ 是线性映射。则：

$$\dim V = \dim \ker(T) + \dim \mathrm{im}(T)$$

令 $K = \ker(T)$。在[商空间](../vector-spaces/) $V/K$ 中，公式：

$$\overline{T}(\mathbf{v} + K) = T(\mathbf{v})$$

定义了一个映射 $\overline{T} : V/K \to \mathrm{im}(T)$。若 $\mathbf{u} + K = \mathbf{v} + K$，则 $\mathbf{u} - \mathbf{v} \in K$，因此 $T(\mathbf{u}) = T(\mathbf{v})$。所以 $\overline{T}$ 的取值不依赖陪集代表元。该映射是线性且满射。它的核只包含 $K$（即 $V/K$ 的零向量），所以它也是单射。因此：

$$V/\ker(T) \cong \mathrm{im}(T)$$

还需要计算商空间的维数。令 $\mathbf{k}_1, \ldots, \mathbf{k}_r$ 是 $K$ 的一个基，并将其扩充为 $V$ 的一个基：

$$\mathbf{k}_1, \ldots, \mathbf{k}_r, \mathbf{u}_1, \ldots, \mathbf{u}_s$$

陪集 $\mathbf{u}_1 + K, \ldots, \mathbf{u}_s + K$ 构成 $V/K$ 的一个基。它们张成商空间，因为含有 $\mathbf{k}_i$ 的项在商空间中消失。它们线性无关，因为：

$$\sum_{j=1}^{s}\gamma_j(\mathbf{u}_j + K) = K$$

意味着 $\sum_{j=1}^{s}\gamma_j\mathbf{u}_j \in K$，而所显示的 $V$ 的基的线性无关性给出 $\gamma_1 = \cdots = \gamma_s = 0$。因此 $\dim(V/K) = s$，而 $\dim V = r + s$。由于 $V/K$ 与 $\mathrm{im}(T)$ 同构，$\dim \mathrm{im}(T) = s$，定理得证。

> 定理只要求 $V$ 是有限维的，不需要对 $W$ 作有限维假设。对于无限维空间，相应的基数维数等式提供的信息较少。在 $\mathbb{R}[x]$ 上的求导是满射，其核是常数[多项式](../polynomials/)。在这种情况下，$\dim \mathbb{R}[x] = 1 + \dim \mathbb{R}[x]$。

作为一个应用，考虑迹映射 $\mathrm{tr} : M_n(F) \to F$。它是线性且满射，因为左上角元素为 $1$、其余元素为 $0$ 的矩阵的迹为 $1$。它的像的维数为 $1$，而 $M_n(F)$ 的维数为 $n^2$。因此，核（即迹为 $0$ 的矩阵所组成的子空间）的维数为 $n^2 - 1$。

## 推论

设 $V$ 和 $W$ 都是有限维的。秩-零化度定理给出以下结论：

+ 秩满足 $\dim \mathrm{im}(T) \leq \min(\dim V, \dim W)$。
+ $\dim V > \dim W$ 会迫使核非零，因此不存在单射 $F^5 \to F^3$。
+ $\dim V < \dim W$ 会迫使像为真子空间，因此不存在满射 $F^3 \to F^5$。

若 $\dim V = \dim W$，则单射、满射和双射彼此等价。若 $T$ 是单射，则其核的维数为 $0$，所以其像的维数为 $\dim V = \dim W$，必为 $W$。若 $T$ 是满射，则其像的维数为 $\dim W = \dim V$，所以其核的维数为 $0$。因此，有限维空间上的单射自同态是[可逆的](../inverse-function/)。这个等价性在无限维情形下失效。在 $\mathbb{R}[x]$ 上求导是满射但不是单射，而乘以 $x$ 是单射但不是满射。

定义域也有一种基于核的分解。选取一个补空间 $M$，使得 $V = \ker(T) \oplus M$。限制映射 $T|_M : M \to \mathrm{im}(T)$ 是一个[同构](../homomorphisms-and-isomorphisms/)。它的核是 $M \cap \ker(T) = \{\ \mathbf{0}\ \}$，所以它是单射。每个 $\mathbf{v} \in V$ 都可以分解为 $\mathbf{v} = \mathbf{k} + \mathbf{m}$，其中 $\mathbf{k} \in \ker(T)$ 且 $\mathbf{m} \in M$，并且 $T(\mathbf{v}) = T(\mathbf{m})$。因此该限制映射也是满射。

补空间 $M$ 并不唯一。商空间 $V/\ker(T)$ 的定义不需要选取补空间，而定理证明中使用的同构将它与像对应起来。

## 矩阵的核与像

设 $A \in M_{m \times n}(F)$，令 $L_A : F^n \to F^m$ 为映射 $L_A(\mathbf{x}) = A\mathbf{x}$。将 $A$ 的各列记为 $\mathbf{a}_1, \ldots, \mathbf{a}_n$。对于 $\mathbf{x} = (x_1, \ldots, x_n)$，由[矩阵乘法](../matrices/)可得：

$$A\mathbf{x} = x_1\mathbf{a}_1 + \cdots + x_n\mathbf{a}_n$$

因此 $\mathrm{im}(L_A)$ 是 $A$ 的列空间。它的维数是[秩](../rank-of-a-matrix/) $r(A)$，也等于行空间的维数。$L_A$ 的核是 $A$ 的零空间，即 $A\mathbf{x} = \mathbf{0}$ 的解空间。因此：

$$n = \dim \ker(L_A) + r(A)$$

[高斯消元](../gaussian-elimination/)同时给出这两个维数。主元列的数目是 $r(A)$，自由变量的数目是 $n - r(A)$。令一个自由变量等于 $1$、其余自由变量等于 $0$，求解齐次方程组，就能得到核的一个基。

方程组 $A\mathbf{x} = \mathbf{b}$ 有解，当且仅当 $\mathbf{b}$ 属于列空间。根据[罗歇–卡佩利定理](../rouche-capelli-theorem/)，这个条件等价于 $r(A) = r(A|\mathbf{b})$。有解时，解集是零空间的一个平移集，并有 $n - r(A)$ 个自由参数。

## 一个完整例子

考虑与下列矩阵对应的线性映射 $L_A : \mathbb{R}^4 \to \mathbb{R}^3$：

$$
A = \begin{pmatrix}
1 & 2 & 0 & 1 \\[6pt]
2 & 4 & 1 & 3 \\[6pt]
1 & 2 & 1 & 2
\end{pmatrix}
$$

从第二行中减去第一行的两倍，从第三行中减去第一行。此时后两行相等，因此再将其中一行减去另一行，得到行阶梯形：

$$
\begin{pmatrix}
1 & 2 & 0 & 1 \\[6pt]
0 & 0 & 1 & 1 \\[6pt]
0 & 0 & 0 & 0
\end{pmatrix}
$$

第一列和第三列包含主元。因此 $r(A) = 2$，由秩-零化度定理可得 $\dim \ker(L_A) = 4 - 2 = 2$。

自由变量是 $x_2$ 和 $x_4$。两个非零方程为 $x_1 + 2x_2 + x_4 = 0$ 与 $x_3 + x_4 = 0$，所以 $x_1 = -2x_2 - x_4$ 且 $x_3 = -x_4$。依次令每个自由变量等于 $1$，另一个等于 $0$，得到：

$$\mathbf{k}_1 = (-2, 1, 0, 0)$$

$$\mathbf{k}_2 = (-1, 0, -1, 1)$$

若 $a\mathbf{k}_1 + b\mathbf{k}_2 = \mathbf{0}$，第四个分量给出 $b = 0$，第二个分量随即给出 $a = 0$。因此这两个向量线性无关。由于核的维数为 $2$，它们构成 $\ker(L_A)$ 的一个基。

$A$ 的第二列是第一列的两倍，第四列是第一列与第三列之和。因此第一列和第三列构成像的一个基：

$$\mathrm{im}(L_A) = \mathrm{span}\{\ (1, 2, 1), (0, 1, 1)\ \}$$

所以像是 $\mathbb{R}^3$ 中满足方程 $y_1 - y_2 + y_3 = 0$ 的[平面](../planes/)。两个基向量都满足该方程，而 $\mathbb{R}^3$ 中一个非零齐次方程的解空间维数为 $2$。

由此，$A\mathbf{x} = \mathbf{b}$ 有解，当且仅当 $b_1 - b_2 + b_3 = 0$。对于 $\mathbf{b} = (1, 3, 2)$，该条件成立。对增广矩阵作行化简得到 $x_1 = 1 - 2x_2 - x_4$ 且 $x_3 = 1 - x_4$。取 $x_2 = x_4 = 0$，得到特解 $\mathbf{v}_0 = (1, 0, 1, 0)$。因此完整的解集为：

$$L_A^{-1}(\{\ \mathbf{b}\ \}) = (1, 0, 1, 0) + \mathrm{span}\{\ \mathbf{k}_1, \mathbf{k}_2\ \}$$

两个自由参数与 $\dim \ker(L_A) = 2$ 一致。方程 $b_1 - b_2 + b_3 = 0$ 描述了 $\mathbb{R}^3$ 内的二维像。

> 关于零空间、列空间、秩-零化度和商空间分解，参见 Anthony W. Knapp，《Basic Algebra》第二章第 2、3、5 节，书目列于[参考文献](../bibliography/)中。
