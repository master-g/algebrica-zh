---
title: 向量空间
title_en: Vector Spaces
source: https://algebrica.org/vector-spaces/
license: CC BY-NC 4.0
tags:
  - abelian-group
  - algebraic-structures
  - basis
  - dimension
  - direct-sum
  - field
  - homomorphism-theorem
  - linear-combination
  - linear-independence
  - linear-map
  - quotient-space
  - rank-nullity-theorem
  - subspace
  - vector-space
translation:
  status: current
  source_hash: 05de49c439c64262c5661f2e84aa37b8615fe1dba3b93d0624c2fcf203f430a6
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 具体模型

平面 $\mathbb{R}^2$ 是一个向量空间，其元素是有序对。它的加法与数乘为：

$$(a_1, a_2) + (b_1, b_2) = (a_1 + b_1, a_2 + b_2)$$

$$\alpha(a_1, a_2) = (\alpha a_1, \alpha a_2)$$

加法把两个[向量](../vectors/)相结合，而[实数](../real-numbers/) $\alpha$ 对向量进行缩放。按分量定义加法与数乘后，对任意[域](../fields/)，$F^n$ 都是 $F$ 上的向量空间。例如，$\mathbb{Q}^n$ 是 $\mathbb{Q}$ 上的向量空间，$\mathbb{R}^n$ 是 $\mathbb{R}$ 上的向量空间，$\mathbb{F}_p^n$ 是有限域 $\mathbb{F}_p$ 上的向量空间。

向量空间的元素不一定是数表。所有元素取自 $F$ 的 $m \times n$ [矩阵](../matrices/)组成的集合 $M_{m \times n}(F)$，带有逐元素加法与数乘。$F[x]$ 是所有[多项式](../polynomials/)组成的集合，带有多项式加法以及乘以 $F$ 中常数的运算。若 $X$ 是非空集合，则 $F^X$ 是由[函数](../functions/) $f : X \to F$ 组成的集合，带有逐点运算：

$$(f + g)(x) = f(x) + g(x)$$

$$(\alpha f)(x) = \alpha f(x)$$

实数的[数列](../sequences/)是 $\mathbb{R}^{\mathbb{N}}$ 的元素。对区间 $I$，从 $I$ 到 $\mathbb{R}$ 的[连续函数](../continuous-functions/)与[可微函数](../derivatives/)是 $\mathbb{R}^I$ 中对两种运算都封闭的子集。在每种情形中，加法与数乘都满足同样的恒等式。这些运算并不定义长度或角度；后者需要额外的[内积](../inner-product-spaces/)结构。抽象定义列出了向量空间公理。

## 抽象定义

域 $F$ 上的向量空间是一个集合 $V$，配备向量加法 $+ : V \times V \to V$ 与数乘 $\cdot : F \times V \to V$。这些运算满足以下公理：

+ $(V, +)$ 是一个阿贝尔群。
+ 对所有 $\alpha, \beta \in F$ 与 $\mathbf{v} \in V$，有 $\alpha \cdot (\beta \cdot \mathbf{v}) = (\alpha\beta) \cdot \mathbf{v}$。
+ 对所有 $\mathbf{v} \in V$，有 $1 \cdot \mathbf{v} = \mathbf{v}$。
+ 对所有 $\alpha \in F$ 与 $\mathbf{u}, \mathbf{v} \in V$，有 $\alpha \cdot (\mathbf{u} + \mathbf{v}) = \alpha \cdot \mathbf{u} + \alpha \cdot \mathbf{v}$。
+ 对所有 $\alpha, \beta \in F$ 与 $\mathbf{v} \in V$，有 $(\alpha + \beta) \cdot \mathbf{v} = \alpha \cdot \mathbf{v} + \beta \cdot \mathbf{v}$。

阿贝尔群的单位元是零向量 $\mathbf{0}$，$F$ 中的元素称为标量。选择 $F$ 是结构的一部分。例如，$\mathbb{C}^n$ 既是[复数](../complex-numbers/)域上的向量空间，也是 $\mathbb{R}$ 上的向量空间，但这两个结构的维数不同。

公理蕴含了关于零元与加法逆元的运算法则。对标量加法的分配律给出：

$$0 \cdot \mathbf{v} = (0 + 0) \cdot \mathbf{v} = 0 \cdot \mathbf{v} + 0 \cdot \mathbf{v}$$

阿贝尔群中的消去律给出 $0 \cdot \mathbf{v} = \mathbf{0}$。将分配律应用于 $\alpha \cdot (\mathbf{0} + \mathbf{0})$，得到 $\alpha \cdot \mathbf{0} = \mathbf{0}$。分配律还给出 $(-1) \cdot \mathbf{v} = -\mathbf{v}$ 以及 $(-\alpha) \cdot \mathbf{v} = -(\alpha \cdot \mathbf{v})$。

设 $\alpha \cdot \mathbf{v} = \mathbf{0}$ 且 $\alpha \neq 0$。乘以 $\alpha^{-1}$ 得到：

$$\mathbf{v} = (\alpha^{-1}\alpha) \cdot \mathbf{v} = \alpha^{-1} \cdot (\alpha \cdot \mathbf{v}) = \mathbf{0}$$

因此，$\alpha \cdot \mathbf{v} = \mathbf{0}$ 蕴含 $\alpha = 0$ 或 $\mathbf{v} = \mathbf{0}$。不同的标量给出非零向量的不同倍数，所以每个无限域上的非零向量空间都是无限的。

> 向量空间具有底层的阿贝尔[群](../groups/)以及独立的标量域。[模](../modules/)使用标量[环](../rings/)而非域，因此下面的若干结果对模不再成立。

## 子空间与张成

[子空间](../subspaces/)是 $V$ 的非空子集 $W \subseteq V$，并且对加法与数乘封闭。继承运算后，$W$ 是同一域上的向量空间。零向量属于 $W$，因为对任意 $\mathbf{w} \in W$ 有 $0 \cdot \mathbf{w} = \mathbf{0}$。

给定子集 $S \subseteq V$，它的张成由 $S$ 中元素的所有有限[线性组合](../linear-combinations/)组成：

$$\mathrm{span}(S) = \{\ \alpha_1\mathbf{v}_1 + \cdots + \alpha_n\mathbf{v}_n \mid n \geq 1,\ \alpha_i \in F,\ \mathbf{v}_i \in S\ \}$$

约定 $\mathrm{span}(\varnothing) = \{\ \mathbf{0} \ \}$，以涵盖空集。$S$ 的张成是包含 $S$ 的最小子空间，因为每个这样的子空间都包含 $S$ 中元素的所有有限线性组合。

例如，向量 $(1, 2)$ 生成子空间：

$$W = \mathrm{span}\{\ (1, 2)\ \} = \{\ (t, 2t) \mid t \in \mathbb{R}\ \}$$

这是斜率为 $2$ 的[过原点直线](../vector-and-parametric-equations-of-a-line/)。若 $s, t, \alpha \in \mathbb{R}$，则 $(s, 2s) + (t, 2t) = (s + t, 2(s + t))$ 且 $\alpha(t, 2t) = (\alpha t, 2\alpha t)$，所以该集合对两种运算都封闭。

![IMG. 1](/assets/algebraic-structures/svg/vector-spaces-1.svg)

[子空间](../subspaces/)页面包含封闭性判据、和与交、格拉斯曼公式、直和与补空间。

## 线性映射

同一域上两个向量空间之间的[函数](../functions/) $T : V \to W$，若保持加法与数乘，则称为[线性映射](../linear-maps/)：

$$T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$$

$$T(\alpha \mathbf{v}) = \alpha T(\mathbf{v})$$

等价地，对所有向量 $\mathbf{u}, \mathbf{v}$ 与标量 $\alpha, \beta$，有 $T(\alpha\mathbf{u} + \beta\mathbf{v}) = \alpha T(\mathbf{u}) + \beta T(\mathbf{v})$。线性映射的复合仍是线性的，从一个空间到自身的线性映射称为自同态。双射线性映射是一个[线性同构](../homomorphisms-and-isomorphisms/)，其逆映射也是线性的。

坐标投影 $P : F^3 \to F^2$ 定义为 $P(x, y, z) = (x, y)$，它是线性的。迹映射 $\mathrm{tr} : M_n(F) \to F$ 是线性的，因为 $\mathrm{tr}(A + B) = \mathrm{tr}(A) + \mathrm{tr}(B)$ 且 $\mathrm{tr}(\alpha A) = \alpha\mathrm{tr}(A)$。[形式导数](../derivatives/) $D : F[x] \to F[x]$ 是线性的，并满足：

$$D\left(\sum_{k=0}^n a_kx^k\right) = \sum_{k=1}^n ka_kx^{k-1}$$

$T$ 的[核与像](../kernel-and-image-of-a-linear-map/)为：

$$\ker(T) = \{\ \mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0} \ \}$$

$$\mathrm{im}(T) = \{\ T(\mathbf{v}) \mid \mathbf{v} \in V \ \}$$

这两个集合都是子空间。若 $T(\mathbf{u}) = T(\mathbf{v}) = \mathbf{0}$，则 $T(\alpha\mathbf{u} + \beta\mathbf{v}) = \mathbf{0}$。对于像，$\alpha T(\mathbf{u}) + \beta T(\mathbf{v}) = T(\alpha\mathbf{u} + \beta\mathbf{v})$，而该元素属于 $\mathrm{im}(T)$。

## 基、坐标与维数

当 $B \subseteq V$ 中任意不同元素构成的有限线性组合为零时，其所有系数都为零，则称 $B$ 线性无关。空集线性无关，而包含 $\mathbf{0}$ 的集合线性相关。$V$ 的基是张成 $V$ 的线性无关子集。

若 $B = \{\ \mathbf{v}_1, \ldots, \mathbf{v}_n \ \}$ 是一组基，则每个向量都有唯一展开式：

$$\mathbf{v} = \alpha_1\mathbf{v}_1 + \cdots + \alpha_n\mathbf{v}_n$$

存在性来自张成性质。若另一个展开式的系数为 $\beta_1, \ldots, \beta_n$，相减得到：

$$(\alpha_1 - \beta_1)\mathbf{v}_1 + \cdots + (\alpha_n - \beta_n)\mathbf{v}_n = \mathbf{0}$$

线性无关性随后给出对每个 $i$ 都有 $\alpha_i = \beta_i$。

$F^n$ 的标准基由向量 $\mathbf{e}_1, \ldots, \mathbf{e}_n$ 组成，其中 $\mathbf{e}_i$ 在位置 $i$ 的元素为 $1$，其他位置为零。在 $M_{m \times n}(F)$ 中，恰有一个元素为 $1$ 而其他元素为零的矩阵组成一组基。次数至多为 $n$ 的多项式的基是单项式 $1, x, \ldots, x^n$。这些基分别含有 $n$、$mn$ 与 $n + 1$ 个元素。

多项式空间 $F[x]$ 有无限基 $\{\ 1, x, x^2, \ldots\ \}$。含有多于一个点的区间上的连续实值函数空间是无限维的，因为它包含任意次数的线性无关单项式。标量域会影响维数。向量 $\mathbf{e}_1, \ldots, \mathbf{e}_n$ 构成 $\mathbb{C}^n$ 在 $\mathbb{C}$ 上的一组基，而 $\mathbf{e}_1, \ldots, \mathbf{e}_n, i\mathbf{e}_1, \ldots, i\mathbf{e}_n$ 构成它在 $\mathbb{R}$ 上的一组基。因此 $\dim_{\mathbb{C}}\mathbb{C}^n = n$ 且 $\dim_{\mathbb{R}}\mathbb{C}^n = 2n$。

当向量空间具有有限张成集时，称为有限维空间。从这样的集合中去掉相关向量即可得到一组基。若 $m$ 个向量张成 $V$，而 $n$ 个向量线性无关，交换论证给出 $n \leq m$。将这个不等式沿两个方向应用于两组基，说明它们有相同的元素个数。这个数就是维数 $\dim V$。零空间 $\{\ \mathbf{0} \ \}$ 的基是空集，维数为 $0$。

基有两个等价刻画：

+ 它是极小张成集。
+ 它是极大线性无关集。

从基中去掉一个向量后，所得集合不再张成 $V$。向基中加入一个向量会得到相关集合。反过来，极大线性无关集张成 $V$，因为其张成之外的向量可以加入而不会产生关系。

若 $W$ 是有限维空间 $V$ 的子空间，则 $W$ 中的线性无关子集可以扩充为 $W$ 的一组基，而这组基还可以扩充为 $V$ 的一组基。因此 $\dim W \leq \dim V$，且只有 $W = V$ 时等号成立。

> 假设选择公理，佐恩引理可以把任意向量空间中的线性无关子集扩充为一组基。有限维空间使用上面的有限扩充过程。

给基 $B = (\mathbf{v}_1, \ldots, \mathbf{v}_n)$ 排序，就能把向量的系数变成其坐标向量：

$$[\mathbf{v}]_B = (\alpha_1, \ldots, \alpha_n)$$

坐标映射 $C_B : V \to F^n$ 定义为 $C_B(\mathbf{v}) = [\mathbf{v}]_B$，是一个线性同构。因此，每个 $F$ 上的 $n$ 维向量空间都同构于 $F^n$，尽管这个同构依赖于所选的有序基。

在基上的函数决定了整个空间上的一个线性映射。给定 $f : B \to U$，公式

$$T\left(\sum_i \alpha_i\mathbf{v}_i\right) = \sum_i \alpha_i f(\mathbf{v}_i)$$

定义了唯一的线性映射 $T : V \to U$，其在 $B$ 上的限制是 $f$。坐标的唯一性保证了该公式良定义。

设 $T : V \to U$ 的定义域是有限维的。若 $\mathbf{k}_1, \ldots, \mathbf{k}_r$ 是 $\ker(T)$ 的一组基，将其扩展为 $V$ 的一组基 $\mathbf{k}_1, \ldots, \mathbf{k}_r, \mathbf{v}_{r+1}, \ldots, \mathbf{v}_n$。向量 $T(\mathbf{v}_{r+1}), \ldots, T(\mathbf{v}_n)$ 张成 $\mathrm{im}(T)$，因为 $T$ 把核分量映为零。若这些像的某个线性组合为零，则对应的 $\mathbf{v}_{r+1}, \ldots, \mathbf{v}_n$ 的组合属于核，因而是 $\mathbf{k}_1, \ldots, \mathbf{k}_r$ 的线性组合。扩展基的线性无关性迫使所有系数为零。这些像构成 $\mathrm{im}(T)$ 的一组基，所以：

$$\dim V = \dim \ker(T) + \dim \mathrm{im}(T)$$

这就是秩-零化度定理。右侧两项分别是 $T$ 的零化度与秩。

对于矩阵映射 $A : F^n \to F^m$，$\dim \mathrm{im}(A)$ 是[矩阵的秩](../rank-of-a-matrix/)，而 $\ker(A)$ 是[齐次方程组](../systems-of-linear-equations/) $A\mathbf{x} = \mathbf{0}$ 的解空间。

## 商空间

当两个向量之差落在子空间 $N$ 中时，商空间把它们视为等价。$\mathbf{v}$ 的等价类是陪集 $\mathbf{v} + N$，所有等价类组成的集合为：

$$V/N = \{\ \mathbf{v} + N \mid \mathbf{v} \in V \ \}$$

商空间上的向量运算定义为：

$$(\mathbf{u} + N) + (\mathbf{v} + N) = (\mathbf{u} + \mathbf{v}) + N$$

$$\alpha(\mathbf{v} + N) = \alpha\mathbf{v} + N$$

若 $\mathbf{v} + N = \mathbf{v}' + N$，则 $\mathbf{v} - \mathbf{v}' \in N$。$N$ 对加法与数乘封闭，说明替换代表元不会改变任一结果。商映射 $\pi_N : V \to V/N$ 定义为 $\pi_N(\mathbf{v}) = \mathbf{v} + N$，它是线性满射，核为 $N$。

商映射具有因子分解性质。若 $T : V \to U$ 线性且 $N \subseteq \ker(T)$，则同一 $N$ 陪集中的向量在 $T$ 下有相同的像。公式

$$\widetilde{T}(\mathbf{v} + N) = T(\mathbf{v})$$

由此定义唯一的线性映射 $\widetilde{T} : V/N \to U$，使得 $T = \widetilde{T} \circ \pi_N$。取 $N = \ker(T)$ 并将陪域限制为 $\mathrm{im}(T)$，得到同态基本定理：

$$V/\ker(T) \cong \mathrm{im}(T)$$

该同构把 $\mathbf{v} + \ker(T)$ 映到 $T(\mathbf{v})$。根据 $\mathrm{im}(T)$ 的定义，它的核为零且是满射。

当 $T : V \to U$ 为满射时，逆像给出 $U$ 的子空间与包含 $\ker(T)$ 的 $V$ 的子空间之间的双射。逆向对应把 $L \subseteq U$ 映为 $T^{-1}(L)$，把 $M \subseteq V$ 映为 $T(M)$。这就是向量空间的对应定理。

同态基本定理给出两个商空间恒等式。若 $N \subseteq M \subseteq V$，则：

$$(V/N)/(M/N) \cong V/M$$

若 $A$ 与 $N$ 是 $V$ 的子空间，将商映射限制在 $A$ 上得到：

$$(A + N)/N \cong A/(A \cap N)$$

受限映射的核是 $A \cap N$，而 $(A + N)/N$ 中的每个陪集都有一个来自 $A$ 的代表元。

## 直和与补空间

对两个子空间 $A$ 与 $B$，当 $A \cap B = \{\ \mathbf{0} \ \}$ 时，称和 $A + B$ 为直和。此时 $A + B$ 中每个向量都有唯一表示 $\mathbf{a} + \mathbf{b}$，其中 $\mathbf{a} \in A$ 且 $\mathbf{b} \in B$。有限维子空间的格拉斯曼公式为：

$$\dim(A + B) = \dim A + \dim B - \dim(A \cap B)$$

当交为平凡交时，公式化为 $\dim(A \oplus B) = \dim A + \dim B$。

设 $N$ 是有限维向量空间 $V$ 的子空间。取 $N$ 的一组基 $\mathbf{n}_1, \ldots, \mathbf{n}_r$，并将其扩展为基：

$$\mathbf{n}_1, \ldots, \mathbf{n}_r, \mathbf{m}_{r+1}, \ldots, \mathbf{m}_n$$

这是 $V$ 的一组基。令 $M = \mathrm{span}\{\ \mathbf{m}_{r+1}, \ldots, \mathbf{m}_n\ \}$。那么每个 $\mathbf{v} \in V$ 都有唯一表示 $\mathbf{v} = \mathbf{n} + \mathbf{m}$，其中 $\mathbf{n} \in N$ 且 $\mathbf{m} \in M$。因此 $V = N \oplus M$，而 $M$ 是 $N$ 的[补空间](../subspaces/)。维数满足：

$$\dim V = \dim N + \dim M$$

对于线性映射 $T : V \to U$，取 $N = \ker(T)$。限制映射 $T|_M : M \to \mathrm{im}(T)$ 是同构。它是单射，因为 $M \cap \ker(T) = \{\ \mathbf{0}\ \}$；它是满射，因为 $V$ 的每个向量都有一个位于 $M$ 中且像相同的分量。因此：

$$V \cong \ker(T) \oplus \mathrm{im}(T)$$

若 $T$ 是满射，则 $T|_M$ 的逆映射再复合包含映射 $M \subseteq V$，给出一个线性映射 $S : U \to V$，满足 $T \circ S = \mathrm{id}_U$。因此，每个定义域有限维的满射线性映射都有右逆。

商映射在 $M$ 上的限制是同构 $M \cong V/N$。这些对应依赖于所选的补空间，并给出：

$$V \cong N \oplus V/N$$

$$\dim V = \dim N + \dim(V/N)$$

## 示例

考虑线性映射 $T : \mathbb{R}^3 \to \mathbb{R}^2$：

$$T(x, y, z) = (x + y, y + z)$$

每个输出坐标都是 $x,y,z$ 的线性组合，因此 $T$ 是线性的。当 $x + y = 0$ 且 $y + z = 0$ 时，向量属于核。因此：

$$\ker(T) = \mathrm{span}\{\ (-1, 1, -1)\ \}$$

对任意 $(a, b) \in \mathbb{R}^2$，向量 $(a, 0, b)$ 映为 $(a, b)$，所以 $T$ 是满射。秩-零化度恒等式变为：

$$3 = \dim \ker(T) + \dim \mathrm{im}(T) = 1 + 2$$

平面 $M = \{\ (a, 0, b) \mid a, b \in \mathbb{R}\ \}$ 与核只在原点相交。每个向量都有分解：

$$(x, y, z) = (-y, y, -y) + (x + y, 0, y + z)$$

第一项属于 $\ker(T)$，第二项属于 $M$，所以 $\mathbb{R}^3 = \ker(T) \oplus M$。限制映射 $T|_M$ 是同构 $(a, 0, b) \mapsto (a, b)$，其逆映射给出右逆 $S(a, b) = (a, 0, b)$。同态基本定理把商空间 $\mathbb{R}^3/\ker(T)$ 与 $\mathbb{R}^2$ 对应起来。

> 子空间、基、维数与线性映射都可以推广到环上的[模](../modules/)，但系数一般不能除以非零标量。因此，模不一定有基，子模不一定有补空间，上述维数论证也不再适用。

> 若要从群论出发发展向量空间理论，可参见 Frederick M. Goodman，《Algebra: Abstract and Concrete》第 3.3 节，书目列于[参考文献](/bibliography/)中。
