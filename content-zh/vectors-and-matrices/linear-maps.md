---
title: 线性映射
title_en: Linear Maps
source: https://algebrica.org/linear-maps/
license: CC BY-NC 4.0
tags:
  - basis
  - composition
  - endomorphism
  - image
  - isomorphism
  - kernel
  - linear-algebra
  - linear-map
  - matrices
  - matrix-representation
  - rank-nullity-theorem
  - vector-space
translation:
  status: current
  source_hash: 216ba23b01d7ef8ba420caf6a024fbeb8380bc3de776f143546516be94b11fd9
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

设 $V$ 和 $W$ 是同一个[域](../fields/) $F$ 上的[向量空间](../vector-spaces/)。[函数](../functions/) $T : V \to W$ 是线性的，是指对所有 $\mathbf{u}, \mathbf{v} \in V$ 以及每个 $\alpha \in F$，它满足以下两个条件：

$$T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$$

$$T(\alpha\mathbf{v}) = \alpha T(\mathbf{v})$$

第一个条件是可加性，第二个条件是齐次性。和 $\mathbf{u} + \mathbf{v}$ 以及积 $\alpha\mathbf{v}$ 在 $V$ 中计算，而右侧的运算在 $W$ 中计算。当需要强调标量域时，将 $T$ 称为 $F$-线性映射。线性映射、线性函数和线性变换是同义词。这两个条件等价于一个恒等式。可加性和齐次性蕴含：

$$T(\alpha\mathbf{u} + \beta\mathbf{v}) = \alpha T(\mathbf{u}) + \beta T(\mathbf{v})$$

反之，取 $\alpha = \beta = 1$ 和 $\beta = 0$，分别得到可加性和齐次性。对项数作数学归纳法，可得任意有限个[线性组合](../linear-combinations/)所对应的恒等式：

$$T\left(\sum_{i=1}^{n} \alpha_i\mathbf{v}_i\right) = \sum_{i=1}^{n} \alpha_i T(\mathbf{v}_i)$$

线性组合的像，就是以相同系数对各个像作出的线性组合。

齐次性有两个推论。取 $\alpha = 0$ 得到 $T(\mathbf{0}_V) = \mathbf{0}_W$，取 $\alpha = -1$ 得到 $T(-\mathbf{v}) = -T(\mathbf{v})$。因此，不保持原点不变的映射不是线性的。

$V$ 的自同态是一个线性映射 $T : V \to V$，也称为线性算子。线性泛函或线性形式的陪域为 $F$，把它视为自身上的一维向量空间。双射线性映射是一个[同构](../homomorphisms-and-isomorphisms/)，而从 $V$ 到自身的同构是一个自同构。

> 仅有可加性就使 $T$ 成为底层加法[群](../groups/)的同态。齐次性要求它与标量乘法相容。二者结合起来，正是环上的[模](../modules/)同态所满足的条件。

- - -

例如，零映射 $\mathbf{v} \mapsto \mathbf{0}$ 和恒等映射 $\mathrm{id}_V$ 都是线性的。对固定的 $\lambda \in F$，映射 $T(\mathbf{v}) = \lambda\mathbf{v}$ 是比例为 $\lambda$ 的位似变换，也是线性的。若 $U$ 是 $V$ 的一个[子空间](../subspaces/)，则包含映射 $U \to V$ 和商映射 $V \to V/U$ 都是线性的。

每个[矩阵](../matrices/)都定义一个线性映射。对 $A \in M_{m \times n}(F)$，映射 $L_A : F^n \to F^m$ 在列向量上定义为：

$$L_A(\mathbf{x}) = A\mathbf{x}$$

矩阵乘积的分配律给出 $A(\mathbf{x} + \mathbf{y}) = A\mathbf{x} + A\mathbf{y}$，而与标量的相容性给出 $A(\alpha\mathbf{x}) = \alpha(A\mathbf{x})$，所以 $L_A$ 是线性的。如下文所证，列向量空间之间的每个线性映射都具有这种形式。

在平面中，绕原点的旋转、投影到经过原点的直线上的正交投影，以及关于这类直线的反射都是线性的。关于与 $x$ 轴成角 $\theta$ 且经过原点的直线的反射，其矩阵为：

$$A = \begin{pmatrix} \cos 2\theta & \sin 2\theta \\[6pt] \sin 2\theta & -\cos 2\theta \end{pmatrix}$$

这些映射都保持原点不变，并将以 $\mathbf{u}$ 和 $\mathbf{v}$ 为邻边的平行四边形映射为以 $T(\mathbf{u})$ 和 $T(\mathbf{v})$ 为邻边的平行四边形，这就是几何形式的可加性。

- - -

转置是一个线性映射 $M_{m \times n}(F) \to M_{n \times m}(F)$，因为 $(A + B)^{\mathrm{T}} = A^{\mathrm{T}} + B^{\mathrm{T}}$ 且 $(\alpha A)^{\mathrm{T}} = \alpha A^{\mathrm{T}}$。在实系数次数至多为 $n$ 的[多项式](../polynomials/)空间 $P_n(\mathbb{R})$ 上，当 $n \geq 1$ 时，求导 $p \mapsto p'$ 是取值于 $P_{n-1}(\mathbb{R})$ 的线性映射。

在固定点 $c \in F$ 处的求值定义了 $F[x]$ 上的线性泛函 $\mathrm{ev}_c(p) = p(c)$，因为多项式和的值等于各个值之和。在实[连续函数](../continuous-functions/)空间 $C([a, b])$ 上，[定积分](../definite-integrals/)定义了线性泛函：

$$I(f) = \int_a^b f(x) \ dx$$

这里的线性性来自积分的可加性以及常数因子法则。

## 非线性映射

固定非零向量 $\mathbf{b}$ 的平移 $\tau(\mathbf{v}) = \mathbf{v} + \mathbf{b}$ 将 $\mathbf{0}$ 映射到 $\mathbf{b}$，因此不是线性的。线性映射与常向量之和是仿射映射 $\mathbf{v} \mapsto T(\mathbf{v}) + \mathbf{b}$，当且仅当 $\mathbf{b} = \mathbf{0}$ 时它才是线性的。实函数 $f(x) = mx + q$ 只有在 $q = 0$ 时才是 $\mathbb{R} \to \mathbb{R}$ 的线性映射，尽管对每个 $q$ 它的图像都是一条[直线](../lines/)。

可加性和齐次性彼此都不能推出对方。定义 $H : \mathbb{R}^2 \to \mathbb{R}$：

$$
H(x, y) =
\begin{cases}
\dfrac{x^3}{x^2 + y^2} & (x, y) \neq (0, 0) \\[6pt]
0 & (x, y) = (0, 0)
\end{cases}
$$

对每个实数 $\alpha$，这个函数满足 $H(\alpha x, \alpha y) = \alpha H(x, y)$，所以它具有齐次性。但它不可加，因为 $H(1, 0) = 1$，$H(0, 1) = 0$，而 $H(1, 1) = 1/2$。

其他函数会同时不满足这两个条件。绝对值满足 $|\alpha x| = |\alpha||x|$，所以对负的 $\alpha$ 它不具有齐次性；它也不满足可加性，因为 $|1 + (-1)| = 0$，而 $|1| + |-1| = 2$。[行列式](../determinant/) $\det : M_2(\mathbb{R}) \to \mathbb{R}$ 满足 $\det(\alpha A) = \alpha^2\det(A)$，所以不具有齐次性。等式 $\det(I_2 + I_2) = 4$ 与 $\det(I_2) + \det(I_2) = 2$ 表明它也不满足可加性。

线性性取决于标量域。复共轭 $z \mapsto \overline{z}$ 具有可加性，并且对实数 $\alpha$ 满足 $\overline{\alpha z} = \alpha\overline{z}$，所以将 $\mathbb{C}$ 看作维数为 $2$ 的实向量空间时，它是 $\mathbb{R}$-线性的。但它不是 $\mathbb{C}$-线性的，因为 $\overline{i \cdot 1} = -i$，而 $i\overline{1} = i$。

> 反过来，可加性蕴含对每个有理数 $q$ 都有 $T(q\mathbf{v}) = qT(\mathbf{v})$，所以在 $\mathbb{Q}$ 上第二个条件由第一个条件推出。在 $\mathbb{R}$ 上这个蕴含不成立。可以通过选择 $\mathbb{R}$ 作为 $\mathbb{Q}$-向量空间的一组基来构造反例。这种构造使用选择公理，所得函数在每一点都不连续。

## 由基确定映射

线性映射在一组基上的取值决定了该映射，并且可以任意指定陪域中基向量的像。若 $B$ 是 $V$ 的一组基，$f : B \to W$ 是任意函数，则存在唯一线性映射 $T : V \to W$，使得对每个 $\mathbf{b} \in B$ 都有 $T(\mathbf{b}) = f(\mathbf{b})$。

对唯一性而言，每个 $\mathbf{v} \in V$ 都有唯一展开式：

$$\mathbf{v} = \alpha_1\mathbf{v}_1 + \cdots + \alpha_r\mathbf{v}_r$$

其中 $\mathbf{v}_1, \ldots, \mathbf{v}_r$ 是 $B$ 中互不相同的元素。$f$ 的线性延拓必须满足：

$$T(\mathbf{v}) = \alpha_1f(\mathbf{v}_1) + \cdots + \alpha_rf(\mathbf{v}_r)$$

因此，预先指定的值决定了 $T(\mathbf{v})$，任意两个 $f$ 的线性延拓都相等。

对存在性而言，按所显示的公式定义 $T$。坐标的唯一性保证了这个定义良好。给定 $\mathbf{u}$ 和 $\mathbf{v}$，在 $B$ 的某个公共有限子集上展开二者，允许出现零系数。$\mathbf{u} + \mathbf{v}$ 的坐标是对应坐标之和，而 $\alpha\mathbf{v}$ 的坐标是 $\mathbf{v}$ 的坐标乘以 $\alpha$，因此该公式给出 $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ 以及 $T(\alpha\mathbf{v}) = \alpha T(\mathbf{v})$。按此构造，$T$ 在 $B$ 上的限制就是 $f$。

在一组基上取值相同的两个线性映射相等，因为它们在每个基向量线性组合上的差都为零。因此，从一个 $n$ 维空间出发的线性映射由 $W$ 中的 $n$ 个向量决定，并且这些向量可以任意指定。例如，规定 $T(\mathbf{e}_1) = (1, 0, -1)$ 和 $T(\mathbf{e}_2) = (2, 1, 0)$，就决定了映射 $T : \mathbb{R}^2 \to \mathbb{R}^3$：

$$T(x, y) = x(1, 0, -1) + y(2, 1, 0) = (x + 2y, y, -x)$$

一组基的两个性质缺一不可。向量 $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_1 + \mathbf{e}_2$ 张成 $\mathbb{R}^2$ 但线性相关，而规定 $f(\mathbf{e}_1) = f(\mathbf{e}_2) = 0$ 且 $f(\mathbf{e}_1 + \mathbf{e}_2) = 1$ 没有线性延拓，因为线性性要求第三个值为 $0$。线性无关允许在 $B$ 上任意指定值，而张成性保证 $T$ 对 $V$ 中每个向量都有取值。

## 核与像

线性映射 $T : V \to W$ 的核与像为：

$$\ker(T) = \{\ \mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}\ \}$$

$$\mathrm{im}(T) = \{\ T(\mathbf{v}) \mid \mathbf{v} \in V\ \}$$

核是 $V$ 的子空间。若 $\mathbf{u}, \mathbf{v} \in \ker(T)$，则 $T(\alpha\mathbf{u} + \beta\mathbf{v}) = \mathbf{0}$，所以 $\alpha\mathbf{u} + \beta\mathbf{v} \in \ker(T)$。像是 $W$ 的子空间。若 $\mathbf{w}_1 = T(\mathbf{u})$ 和 $\mathbf{w}_2 = T(\mathbf{v})$ 属于像，则 $\alpha\mathbf{w}_1 + \beta\mathbf{w}_2 = T(\alpha\mathbf{u} + \beta\mathbf{v})$，它也属于像。

核还给出单射性的判据。若 $T$ 是单射，则 $T(\mathbf{v}) = \mathbf{0} = T(\mathbf{0})$ 蕴含 $\mathbf{v} = \mathbf{0}$，所以核是平凡的。反之，若 $\ker(T) = \{\ \mathbf{0}\ \}$ 且 $T(\mathbf{u}) = T(\mathbf{v})$，则 $T(\mathbf{u} - \mathbf{v}) = \mathbf{0}$ 蕴含 $\mathbf{u} = \mathbf{v}$。因此，$T$ 是单射，当且仅当 $\ker(T) = \{\ \mathbf{0}\ \}$。

若 $B$ 张成 $V$，则 $T(B)$ 张成 $\mathrm{im}(T)$，因为 $V$ 中每个向量都是 $B$ 中元素的线性组合，而 $T$ 保持这类组合。像的维数是 $T$ 的秩，核的维数是它的零化度。秩满足 $\mathrm{rank}(T) \leq \min\{\dim V, \dim W\}$。秩-零化度定理给出：

$$\dim V = \dim \ker(T) + \dim \mathrm{im}(T)$$

为证明该定理，将核的一组基扩充为 $V$ 的一组基。补入向量的像随后构成 $\mathrm{im}(T)$ 的一组基。[线性映射的核与像](../kernel-and-image-of-a-linear-map/)页面给出了完整证明、向量原像的描述，以及如何将这两个子空间转换为矩阵形式。

## 复合与同构

设 $T : V \to W$ 和 $S : W \to U$ 是线性映射。它们的[复合映射](../composite-functions/) $S \circ T : V \to U$ 是线性的：

$$
\begin{align}
(S \circ T)(\alpha\mathbf{u} + \beta\mathbf{v}) &= S(\alpha T(\mathbf{u}) + \beta T(\mathbf{v})) \\[6pt]
  &= \alpha S(T(\mathbf{u})) + \beta S(T(\mathbf{v})) \\[6pt]
  &= \alpha(S \circ T)(\mathbf{u}) + \beta(S \circ T)(\mathbf{v})
\end{align}
$$

函数复合满足结合律，恒等映射是中性元，因为 $T \circ \mathrm{id}_V = T$ 且 $\mathrm{id}_W \circ T = T$。复合对加法满足分配律，并且与标量乘法相容，具体表现为 $S \circ (T_1 + T_2) = S \circ T_1 + S \circ T_2$、$(S_1 + S_2) \circ T = S_1 \circ T + S_2 \circ T$ 以及 $\alpha(S \circ T) = (\alpha S) \circ T = S \circ (\alpha T)$。

设线性映射 $T : V \to W$ 是双射。对 $\mathbf{w}_1, \mathbf{w}_2 \in W$，令 $\mathbf{v}_i = T^{-1}(\mathbf{w}_i)$。由于 $T(\alpha\mathbf{v}_1 + \beta\mathbf{v}_2) = \alpha\mathbf{w}_1 + \beta\mathbf{w}_2$，其[逆映射](../inverse-function/)满足：

$$T^{-1}(\alpha\mathbf{w}_1 + \beta\mathbf{w}_2) = \alpha T^{-1}(\mathbf{w}_1) + \beta T^{-1}(\mathbf{w}_2)$$

这个恒等式证明 $T^{-1}$ 是线性的。若两个向量空间之间存在一个线性双射，则称二者同构，记为 $V \cong W$。同构关系具有自反性，因为每个恒等映射都是同构；具有传递性，因为同构的复合仍是同构；具有对称性，因为同构的逆映射仍是同构。

对于 $F$ 上的有限维空间，$V \cong W$ 等价于 $\dim V = \dim W$。线性双射将 $V$ 的一组基映射为 $W$ 的一组基，因此同构空间具有相同维数。反之，当维数相等时，选取 $V$ 的基 $(\mathbf{v}_1, \ldots, \mathbf{v}_n)$ 和 $W$ 的基 $(\mathbf{w}_1, \ldots, \mathbf{w}_n)$。由 $T(\mathbf{v}_j) = \mathbf{w}_j$ 定义的线性映射是双射，因为它将一组基映射为另一组基。特别地，一个 $n$ 维空间 $V$ 的有序基定义了坐标同构 $V \cong F^n$。

对于两个等维有限维空间之间的线性映射，秩-零化度定理使单射性等价于满射性。因此，任一条件都足以使该映射成为同构。这个等价性在无限维空间中可能失效。在实[数列](../sequences/)空间上，左移和右移分别为：

$$L(a_1, a_2, a_3, \ldots) = (a_2, a_3, \ldots)$$

$$R(a_1, a_2, a_3, \ldots) = (0, a_1, a_2, \ldots)$$

二者都是同一个空间的线性自同态。左移 $L$ 是满射，其核由 $(1, 0, 0, \ldots)$ 张成；右移 $R$ 是单射，其像由首项为零的数列组成。它们满足 $L \circ R = \mathrm{id}$ 且 $R \circ L \neq \mathrm{id}$，所以单边逆不一定是逆映射。

## 线性映射空间

线性映射 $V \to W$ 按点相加和数乘：

$$(S + T)(\mathbf{v}) = S(\mathbf{v}) + T(\mathbf{v})$$

$$(\alpha T)(\mathbf{v}) = \alpha T(\mathbf{v})$$

这两个运算都保持线性性。对于加法，$(S + T)(\alpha\mathbf{u} + \beta\mathbf{v})$ 等于 $\alpha S(\mathbf{u}) + \beta S(\mathbf{v}) + \alpha T(\mathbf{u}) + \beta T(\mathbf{v})$，也就是 $\alpha(S + T)(\mathbf{u}) + \beta(S + T)(\mathbf{v})$。对于数乘，$(\alpha T)(\beta\mathbf{u} + \gamma\mathbf{v}) = \beta(\alpha T)(\mathbf{u}) + \gamma(\alpha T)(\mathbf{v})$。在这些逐点运算下，从 $V$ 到 $W$ 的线性映射构成 $F$ 上的向量空间，记作：

$$\mathrm{Hom}_F(V, W)$$

它的零元是零映射，$T$ 的加法逆元是映射 $\mathbf{v} \mapsto -T(\mathbf{v})$。

复合是 $\mathrm{End}_F(V) = \mathrm{Hom}_F(V, V)$ 上的一种乘法。配上加法和复合，这个空间成为带单位元 $\mathrm{id}_V$ 的结合[环](../rings/)。由于复合与标量乘法相容，它还是 $F$ 上的代数。当 $\dim V \geq 2$ 时，这种乘法非交换。在 $F^2$ 上，考虑自同态 $P(x, y) = (x, 0)$ 和 $Q(x, y) = (y, 0)$。它们的复合为：

$$(P \circ Q)(x, y) = (y, 0)$$

$$(Q \circ P)(x, y) = (0, 0)$$

第二个复合是零映射，而两个因子都非零，所以 $\mathrm{End}_F(V)$ 有零因子，其非零元素不一定可逆。

- - -

设 $\dim V = n$ 且 $\dim W = m$，其中 $V$ 的基为 $\mathbf{v}_1, \ldots, \mathbf{v}_n$，$W$ 的基为 $\mathbf{w}_1, \ldots, \mathbf{w}_m$。对 $i \leq m$ 和 $j \leq n$，定义 $T_{ij} : V \to W$，令其在 $V$ 的基上的取值为：

$$T_{ij}(\mathbf{v}_k) = \delta_{jk}\mathbf{w}_i$$

其中 $\delta_{jk}$ 是克罗内克符号。这 $mn$ 个映射构成 $\mathrm{Hom}_F(V, W)$ 的一组基。给定 $T$，令 $a_{ij}$ 为 $T(\mathbf{v}_j)$ 在 $W$ 的基下的坐标，即 $T(\mathbf{v}_j) = \sum_i a_{ij}\mathbf{w}_i$。映射 $T$ 与 $\sum_{i, j} a_{ij}T_{ij}$ 在每个 $\mathbf{v}_k$ 上取值相同，因此二者相等，这说明这族映射张成整个空间。若 $\sum_{i, j} c_{ij}T_{ij}$ 是零映射，则它在 $\mathbf{v}_k$ 处的值为 $\sum_i c_{ik}\mathbf{w}_i = \mathbf{0}$。由 $\mathbf{w}_i$ 的线性无关性可得，对每个 $i$ 和 $k$ 都有 $c_{ik} = 0$。因此：

$$\dim \mathrm{Hom}_F(V, W) = \dim V \cdot \dim W$$

对偶空间 $V^* = \mathrm{Hom}_F(V, F)$ 是取 $W = F$ 的情形，所以有限维空间与其对偶具有相同维数。

## 线性映射的矩阵

上一节中的标量 $a_{ij}$ 就是一个矩阵的元素。固定 $V$ 的有序基 $\mathcal{B} = (\mathbf{v}_1, \ldots, \mathbf{v}_n)$ 和 $W$ 的有序基 $\mathcal{C} = (\mathbf{w}_1, \ldots, \mathbf{w}_m)$。相对于这两组基，$T$ 的矩阵是 $m \times n$ 矩阵 $A$，其第 $j$ 列是 $T(\mathbf{v}_j)$ 在 $\mathcal{C}$ 下的坐标列。若 $[\mathbf{v}]_{\mathcal{B}}$ 表示 $\mathbf{v}$ 的坐标列，则：

$$[T(\mathbf{v})]_{\mathcal{C}} = A[\mathbf{v}]_{\mathcal{B}}$$

要验证这个恒等式，只需取 $\mathbf{v} = \mathbf{v}_j$。此时 $[\mathbf{v}_j]_{\mathcal{B}}$ 是第 $j$ 个标准列，因此与 $A$ 相乘得到 $A$ 的第 $j$ 列。反之，每个 $m \times n$ 矩阵都通过这个公式定义一个唯一的线性映射。因此 $T \mapsto A$ 是双射，并且保持和与数乘。于是它是一个同构 $\mathrm{Hom}_F(V, W) \cong M_{m \times n}(F)$。

对于带标准基的 $V = F^n$ 和 $W = F^m$，该公式变为 $T(\mathbf{v}) = A\mathbf{v}$。$A$ 的第 $j$ 列是 $T(\mathbf{e}_j)$，所以这些空间之间的每个线性映射都是乘以唯一矩阵。

设 $T : V \to W$ 在基 $\mathcal{B}$ 和 $\mathcal{C}$ 下的矩阵为 $A$，设 $S : W \to U$ 在基 $\mathcal{C}$ 和基 $\mathcal{D}$ 下的矩阵为 $B$。先对 $T$、再对 $S$ 应用坐标公式，得到：

$$[(S \circ T)(\mathbf{v})]_{\mathcal{D}} = B(A[\mathbf{v}]_{\mathcal{B}}) = (BA)[\mathbf{v}]_{\mathcal{B}}$$

所以 $S \circ T$ 的矩阵是 $BA$。映射 $T$ 是同构，当且仅当 $A$ [可逆](../inverse-matrix/)，此时 $T^{-1}$ 的矩阵为 $A^{-1}$。

$T$ 的秩是[矩阵的秩](../rank-of-a-matrix/)，而 $T$ 的核对应于[齐次方程组](../systems-of-linear-equations/) $A\mathbf{x} = \mathbf{0}$ 的解。矩阵取决于两组有序基。换基会将 $A$ 替换为 $Q^{-1}AP$，其中 $P$ 和 $Q$ 可逆。如果一个自同态的定义域和陪域使用同一组基，则换基形式为 $C^{-1}AC$。由这个公式关联的矩阵称为相似矩阵。如果自同态有一组由[特征向量](../eigenvalues-and-eigenvectors/)组成的基，则可以选择 $C$ 使 $C^{-1}AC$ 为对角矩阵，从而 $A$ [可对角化](../matrix-diagonalization/)。

## 一个完整例子

令 $P_2(\mathbb{R})$ 为次数至多为 $2$ 的实系数多项式空间。$T : P_2(\mathbb{R}) \to \mathbb{R}^2$ 的两个坐标是多项式在 $1$ 处的值和导数：

$$T(p) = (p(1), p'(1))$$

两个分量关于 $p$ 都是线性的，因为 $(p + q)(1) = p(1) + q(1)$ 且 $(p + q)' = p' + q'$，对数乘也有相应恒等式。因此 $T$ 是线性的。

单项式 $1, x, x^2$ 构成 $P_2(\mathbb{R})$ 的一组基。它们的像为 $T(1) = (1, 0)$、$T(x) = (1, 1)$ 和 $T(x^2) = (1, 2)$，所以相对于这组基和 $\mathbb{R}^2$ 的标准基，$T$ 的矩阵是：

$$A = \begin{pmatrix} 1 & 1 & 1 \\[6pt] 0 & 1 & 2 \end{pmatrix}$$

这三个取值决定了 $T$。对于 $p = a + bx + cx^2$，由线性性：

$$T(p) = (a + b + c, b + 2c)$$

当且仅当 $a + b + c = 0$ 且 $b + 2c = 0$ 时，多项式属于核。第二个方程给出 $b = -2c$，代入第一个方程得到 $a = c$。因此核为：

$$\ker(T) = \mathrm{span}\{\ (x - 1)^2\ \}$$

其中的元素是 $P_2(\mathbb{R})$ 中以 $1$ 为根且根的重数至少为 $2$ 的多项式。这等价于两个条件 $p(1) = 0$ 和 $p'(1) = 0$。

该映射是满射。对 $(s, t) \in \mathbb{R}^2$，多项式 $p(x) = s + t(x - 1)$ 满足 $p(1) = s$ 且 $p'(1) = t$。因此秩为 $2$，零化度为 $1$，并且：

$$3 = \dim \ker(T) + \dim \mathrm{im}(T) = 1 + 2$$

由于 $\dim P_2(\mathbb{R}) = 3$ 大于 $\dim \mathbb{R}^2 = 2$，不存在从 $P_2(\mathbb{R})$ 到 $\mathbb{R}^2$ 的线性单射。在次数至多为 $1$ 的多项式子空间 $P_1(\mathbb{R})$ 上，限制映射 $T|_{P_1(\mathbb{R})} : P_1(\mathbb{R}) \to \mathbb{R}^2$ 是一个同构。它的逆映射将 $(s, t)$ 映射为 $s + t(x - 1)$，也就是在 $1$ 处取值为 $s$、导数为 $t$ 的[一阶泰勒多项式](../taylor-formula-with-remainder/)。
