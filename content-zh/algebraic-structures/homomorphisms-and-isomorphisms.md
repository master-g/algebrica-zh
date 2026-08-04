---
title: 同态与同构
title_en: Homomorphisms and Isomorphisms
source: https://algebrica.org/homomorphisms-and-isomorphisms/
license: CC BY-NC 4.0
tags:
  - algebraic-structures
  - alternating-group
  - automorphism
  - endomorphism
  - epimorphism
  - group-action
  - homomorphism
  - image
  - isomorphism
  - kernel
  - monomorphism
  - permutation
translation:
  status: current
  source_hash: 9a7659cc04bf46d7a50fefc785d751a878a9376c2e7078c915c6f7fdd76a113c
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 一般思想

本文讨论的每种代数结构都有一个底层[集合](../sets/)，一个或多个运算（例如加法、乘法或标量乘法），有时还带有一些指定元素，例如单位元或零元。

同态是相同类型的两个代数结构之间的一个[函数](../functions/)。它与每个运算交换，并保持定义所要求的每个指定元素。具体条件取决于结构是群、环、[模](../modules/)，还是[向量空间](../vector-spaces/)。单射性与满射性是彼此独立的性质，并不属于同态的定义。

> 在范畴论中，代数结构是对象，它们之间的同态是态射。在这一语言下，只要相应范畴具有所需的构造，核、像与商就有统一的定义。

## 标准代数结构中的同态

[群](../groups/)是带有一个运算的集合。群同态 $\varphi : (G, \cdot) \to (H, \star)$ 是满足下式的函数：

$$\varphi(a \cdot b) = \varphi(a) \star \varphi(b)$$

对所有 $a, b \in G$ 成立。这个方程蕴含 $\varphi(e_G) = e_H$ 以及 $\varphi(a^{-1}) = \varphi(a)^{-1}$，所以无需分别要求保持单位元与逆元。事实上，$\varphi(e_G) = \varphi(e_G) \star \varphi(e_G)$，在 $H$ 中消去可得 $\varphi(e_G) = e_H$。于是 $e_H = \varphi(a \cdot a^{-1}) = \varphi(a) \star \varphi(a^{-1})$，从而得到 $\varphi(a^{-1}) = \varphi(a)^{-1}$。

[环](../rings/)是带有两个运算的集合。环同态 $\varphi : R \to S$ 是同时满足以下两个条件的函数：

$$\varphi(a + b) = \varphi(a) + \varphi(b)$$

$$\varphi(a \cdot b) = \varphi(a) \cdot \varphi(b)$$

对所有 $a, b \in R$ 成立。对于含幺环，通常还加入条件 $\varphi(1_R) = 1_S$；这个条件并不是前两个条件的推论。

[域](../fields/)是带单位元的交换环，其中每个非零元素都可逆。域同态是保持单位元的域之间的环同态。每个域同态都是单射。它的核是源域的一个理想，因此要么是零理想，要么是整个域。由于同态保持单位元，其核不可能是整个域。

环 $R$ 上的[模](../modules/)是带有与环 $R$ 中元素相容的标量乘法的阿贝尔群。模同态 $\varphi : M \to N$（也称为 $R$-线性映射）满足：

$$\varphi(\mathbf{u} + \mathbf{v}) = \varphi(\mathbf{u}) + \varphi(\mathbf{v})$$

$$\varphi(r \cdot \mathbf{v}) = r \cdot \varphi(\mathbf{v})$$

对所有 $\mathbf{u}, \mathbf{v} \in M$ 以及所有 $r \in R$ 成立。[向量空间](../vector-spaces/)之间的[线性映射](../linear-maps/)是标量环为域的模同态。

> 每种结构的定义都为每个必须保持的运算设置一个条件。群同态保持群运算，环同态保持加法与乘法，模同态保持加法与标量乘法。

## 群作用与循环同态

设群 $G$ 作用在集合 $X$ 上。每个 $g \in G$ 通过 $\rho(g)(x) = g \cdot x$ 定义 $X$ 的一个置换 $\rho(g)$。这个对应 $\rho : G \to \mathrm{Sym}(X)$ 是同态，因为：

$$\rho(gh)(x) = (gh) \cdot x = g \cdot (h \cdot x) = \rho(g)(\rho(h)(x))$$

因此 $\rho(gh) = \rho(g) \circ \rho(h)$。它的核由固定 $X$ 中每一点的 $G$ 元素组成。当且仅当这个核为 $\{\ e_G \ \}$ 时，该作用是忠实的。

令 $D_4$ 为正方形的[对称群](../dihedral-groups/)。它对四个顶点的作用定义了同态 $\rho_V : D_4 \to S_4$。该同态是单射，因为固定全部四个顶点的对称变换就是恒等变换。它不是满射，因为 $D_4$ 有 $8$ 个元素，而 $S_4$ 有 $24$ 个元素。对两条对角线的作用定义了满射同态 $\rho_D : D_4 \to S_2$。其核有四个元素：恒等元、半转以及关于两条对角线的两个反射。

群 $G$ 的每个元素 $a$ 都通过 $\eta_a(k) = a^k$ 定义一个同态 $\eta_a : \mathbb{Z} \to G$。恒等式 $a^{k+l} = a^ka^l$ 证明了同态性质，而其像是循环子群 $\langle a \rangle$。若 $a$ 的阶为有限值 $m$，则 $\ker(\eta_a) = m\mathbb{Z}$。若 $a$ 的阶为无限，则 $\ker(\eta_a) = \{ 0  \}$。

对于正整数 $n$，约化映射 $q_n : \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$ 定义为 $q_n(k) = [k]$。它是核为 $n\mathbb{Z}$ 的满射同态。当 $G = \mathbb{Z}/n\mathbb{Z}$ 且 $a = [1]$ 时，这个映射就是 $\eta_a$。

若 $G$ 为阿贝尔群且 $n \in \mathbb{Z}$，则由 $P_n(g) = g^n$ 定义的幂映射 $P_n : G \to G$ 是自同态，因为 $(gh)^n = g^nh^n$。其核为 $\{\ g \in G : g^n = e_G \ \}$。当 $n \ne 0$ 时，核中的每个元素的阶都整除 $|n|$，而阶具有这种性质的每个元素都属于核。当 $n = 0$ 时，核就是整个 $G$。若 $G$ 有限、$n > 0$ 且 $\gcd(n, |G|) = 1$，则 $P_n$ 是同构。核中元素的阶同时整除 $n$ 与 $|G|$，所以它只能是单位元。因此该映射是单射，而有限集到自身的单射必为满射。于是每个 $g \in G$ 在 $G$ 中都有唯一的 $n$ 次根。

## 核与像

对于群同态，核是陪域中单位元的原像。对于环、模或向量空间的同态，核是零元的原像。若 $e_B$ 表示 $B$ 中相应的中性元素，则：

$$\ker(\varphi) = \{\ a \in A : \varphi(a) = e_B \ \}$$

$\varphi$ 的像为：

$$\mathrm{im}(\varphi) = \{\ \varphi(a) : a \in A \ \}$$

当 $A$ 为[群](../groups/)时，核是正规子群；当 $A$ 为[环](../rings/)时，核是理想；当 $A$ 为[模](../modules/)时，核是子模。像是 $B$ 的与 $B$ 同类型的子结构。对于这些结构，$\varphi$ 是单射当且仅当其核是平凡的，也就是只含单位元的子群、零理想或零子模。

对于群同态 $\varphi : (G, \cdot) \to (H, \star)$，子群的像与原像都是子群。若 $A \leq G$，则 $\varphi(A)$ 是 $H$ 的子群，因为 $\varphi(A)$ 中元素的乘积与逆仍留在 $\varphi(A)$ 中。若 $B \leq H$，则 $\varphi^{-1}(B) = \{\ g \in G : \varphi(g) \in B \ \}$ 是 $G$ 的子群，无论 $\varphi$ 是否可逆。事实上，若 $x, y \in \varphi^{-1}(B)$，则 $\varphi(x \cdot y^{-1}) = \varphi(x) \star \varphi(y)^{-1} \in B$，所以子群判别法适用。取 $A = G$ 得到 $\mathrm{im}(\varphi)$，取 $B = \{ e_H  \}$ 得到 $\ker(\varphi)$。

若 $A$ 是 $G$ 的正规子群且 $\varphi$ 为满射，则 $\varphi(A)$ 是 $H$ 的正规子群。给定 $h \in H$，取 $g \in G$ 使 $\varphi(g) = h$。对每个 $a \in A$，有 $h\varphi(a)h^{-1} = \varphi(gag^{-1}) \in \varphi(A)$，因为 $gag^{-1} \in A$。

群同态的核是正规子群。若 $x \in \ker(\varphi)$ 且 $g \in G$，则：

$$\varphi(g \cdot x \cdot g^{-1}) = \varphi(g) \star \varphi(x) \star \varphi(g)^{-1} = e_H$$

因此对每个 $g \in G$ 都有 $g \ker(\varphi) g^{-1} \subseteq \ker(\varphi)$。将 $g$ 换成 $g^{-1}$ 得到 $g^{-1}\ker(\varphi)g \subseteq \ker(\varphi)$。用 $g$ 共轭这个包含关系便得到反向包含，所以 $g\ker(\varphi)g^{-1} = \ker(\varphi)$。反过来，每个正规子群 $N \trianglelefteq G$ 都是某个核。由 $\pi(g) = gN$ 定义的商映射 $\pi : G \to G/N$ 的核就是 $N$。

对于[域](../fields/) $F$ 与正整数 $n$，[行列式](../determinant-of-a-square-matrix/) $\det : \mathrm{GL}(n, F) \to F^{\times}$ 是群同态，因为 $\det(AB) = \det(A)\det(B)$。它是满射，因为对每个 $a \in F^{\times}$，$\mathrm{diag}(a, 1, \ldots, 1)$ 的行列式为 $a$。它的核是特殊线性群 $\mathrm{SL}(n, F)$，其元素是行列式为 $1$ 的可逆矩阵。因此 $\mathrm{SL}(n, F)$ 是 $\mathrm{GL}(n, F)$ 的正规子群。

> 在加法结构中，$\varphi(a) = \varphi(a')$ 当且仅当 $a - a' \in \ker(\varphi)$。在用乘法记号书写的群中，同样的等式当且仅当 $a^{-1}a' \in \ker(\varphi)$。若 $N = \ker(\varphi)$，这些条件还等价于 $aN = a'N$。因此，核恰好记录了哪些元素具有相同的像。

## 符号同态

对[对称群](../symmetric-group/) $S_n$ 中的 $\sigma$，令 $P_\sigma$ 为满足 $P_\sigma\mathbf{e}_i = \mathbf{e}_{\sigma(i)}$ 的置换矩阵。由于 $P_{\sigma\tau} = P_\sigma P_\tau$，行列式定义了群同态：

$$\mathrm{sgn} : S_n \to \{\ 1, -1 \ \}$$

其在 $\sigma$ 处的值为 $\mathrm{sgn}(\sigma) = \det(P_\sigma)$。

换位的置换矩阵由单位矩阵交换两列得到，所以其行列式为 $-1$。若 $\sigma$ 是 $r$ 个换位的乘积，则 $\mathrm{sgn}(\sigma) = (-1)^r$。由于符号的定义不依赖于选择这样的乘积，$r$ 的奇偶性与分解方式无关。

符号为 $1$ 的置换称为偶置换，符号为 $-1$ 的置换称为奇置换。偶置换组成交错群：

$$A_n = \ker(\mathrm{sgn})$$

群 $A_n$ 是 $S_n$ 的正规子群。当 $n \geq 2$ 时，符号同态是满射，因此 $A_n$ 的指数为 $2$。若 $\tau$ 是任意换位，则奇置换的集合是陪集 $\tau A_n$。

每个 $k$-循环都有分解：

$$(a_1, a_2, \ldots, a_k) = (a_1, a_k)(a_1, a_{k-1})\cdots(a_1, a_2)$$

由此可知，$k$-循环的符号为 $(-1)^{k-1}$。因此，$k$ 为奇数时 $k$-循环为偶置换，$k$ 为偶数时为奇置换。

## 单态射、满态射与同构

我们使用以下术语：

+ 单态射是单射同态。
+ 满态射是满射同态。
+ 同构是双射同态。
+ 自同态是从一个结构到其自身的同态。
+ 自同构是双射自同态，即一个结构到其自身的同构。

当存在同构 $\varphi : A \to B$ 时，结构 $A$ 与 $B$ 称为同构，记作 $A \cong B$。它们具有所有能用相应代数结构的语言表达的相同性质。

> 在范畴论中，单态射与满态射由消去性质定义。对于群、环、模和向量空间，单态射恰好是单射同态，同构恰好是双射同态。满态射不一定是满射。例如，包含 $\mathbb{Z} \hookrightarrow \mathbb{Q}$ 在含幺环范畴中是满态射，尽管它不是满射。从 $\mathbb{Q}$ 出发且在 $\mathbb{Z}$ 上一致的任意两个环同态，在每个有理数上也都相同。

## 复合与自同构群

若 $\varphi : A \to B$ 与 $\psi : B \to C$ 是相同类型结构之间的同态，则它们的复合 $\psi \circ \varphi : A \to C$ 也是同态。每个映射都保持给定的运算，因此它们的复合也保持这些运算。恒等映射是自同构。两个同构的复合是同构，同构的逆也是同构。因此同构是一种等价关系，其等价类就是同构类。

对于固定结构 $A$，$A$ 的所有自同态组成的集合 $\mathrm{End}(A)$ 在复合下封闭，并包含恒等映射 $\mathrm{id}_A$。它是一个幺半群，因为复合满足结合律，而自同态不一定具有逆。

$A$ 的双射自同态就是它的自同构。它们组成的集合 $\mathrm{Aut}(A)$ 在复合与取逆下封闭，因此 $(\mathrm{Aut}(A), \circ)$ 是一个[群](../groups/)，称为 $A$ 的自同构群。

群 $G$ 的每个元素 $g$ 都通过 $c_g : G \to G$ 定义映射 $c_g(x) = gxg^{-1}$。对所有 $x, y \in G$，有 $c_g(xy) = c_g(x)c_g(y)$，且 $c_{g^{-1}}$ 是 $c_g$ 的逆。因此 $c_g$ 是一个自同构，称为内自同构。当某个 $g \in G$ 满足 $y = c_g(x)$ 时，称元素 $x$ 与 $y$ 共轭。在 $S_n$ 中，两个置换共轭，当且仅当对每个 $\ell \in \{\ 1, 2, \ldots, n \ \}$，它们的不交循环分解包含相同数量的 $\ell$-循环。

考虑加法群 $(\mathbb{Z}, +)$。自同态 $\varphi : \mathbb{Z} \to \mathbb{Z}$ 由 $\varphi(1)$ 决定。对每个正整数 $n$，可加性给出：

$$\varphi(n) = \varphi(\underbrace{1 + 1 + \cdots + 1}_{n}) = n\varphi(1)$$

下标表示这里有 n 个加数。

这个恒等式也对负整数与零成立，因此对每个 $n \in \mathbb{Z}$ 都有 $\varphi(n) = n\varphi(1)$。自同态 $\varphi$ 是双射，当且仅当 $\varphi(1)$ 是 $\mathbb{Z}$ 的生成元，也就是 $\varphi(1) = 1$ 或 $\varphi(1) = -1$。所以 $\mathrm{Aut}(\mathbb{Z})$ 有两个元素：恒等映射与映射 $n \mapsto -n$。它同构于 $\mathbb{Z}/2\mathbb{Z}$。

## 同构定理

同构定理描述同态、子结构与商之间的关系。第一同构定理将同态像与按核取商联系起来；第二同构定理比较子结构与其在商映射下的像；第三同构定理将两个连续的商合并为一个商。

第一同构定理对群、环、模和向量空间具有相同的形式。若 $\varphi : A \to B$ 是同态，则 $A$ 按 $\varphi$ 的核取商所得的结构同构于 $\varphi$ 的像：

$$A / \ker(\varphi) \cong \mathrm{im}(\varphi)$$

对于定义域有限维的线性映射，在这个同构上取维数便得到[秩-零化度定理](../kernel-and-image-of-a-linear-map/)。

商的含义取决于结构类型。对于[群](../groups/)，$A / \ker(\varphi)$ 是按正规子群取商所得的商群；对于[环](../rings/)，是按理想取商所得的商环；对于[模](../modules/)，是按子模取商所得的商模。在每种情形下，核都具有构造商所需的类型。诱导映射定义为 $\overline{\varphi}([a]) = \varphi(a)$。它是良定义的，因为同一个等价类中的两个元素在 $\varphi$ 下具有相同的像。

> 若要把一个商与另一个结构对应起来，可以构造一个到该结构的满射同态并计算其核。如果这个核正是定义该商的子结构，第一同构定理就给出所需的同构。

- - -

第二同构定理比较子群与其在商映射下的像。若 $H \leq G$ 且 $N \trianglelefteq G$，则 $H \cap N \trianglelefteq H$，乘积 $HN$ 是 $G$ 的子群，而商映射 $G \to G/N$ 诱导同构：

$$H/(H \cap N) \cong HN/N$$

对于环、模或向量空间 $A$，令 $M$ 与 $N$ 分别为理想、子模或子空间。此时同构为：

$$M/(M \cap N) \cong (M + N)/N$$

在每种情形下，商映射的核都是交集，因此第一同构定理给出了这个同构。

- - -

第三同构定理描述分阶段取商。设 $X$ 是群、环、模或向量空间，并令 $N \subseteq M$ 分别为 $X$ 的正规子群、理想、子模或子空间。于是 $M/N$ 分别是 $X/N$ 的正规子群、理想、子模或子空间，定理给出同构：

$$(X/N)/(M/N) \cong X/M$$

商映射 $X/N \to X/M$ 的核为 $M/N$，所以第一同构定理给出该同构。

## 同构所刻画的性质

同构保持所有能用给定代数结构的语言表达的性质。两个同构的群可能具有不同的表示、元素名称或运算记号，但它们满足相同的群论性质。环、域、模和向量空间也有同样的结论。

令 $\mathrm{Aff}(n, \mathbb{R})$ 为仿射映射 $T_{A,\mathbf{b}}(\mathbf{x}) = A\mathbf{x} + \mathbf{b}$ 组成的群，其中 $A \in \mathrm{GL}(n, \mathbb{R})$ 且 $\mathbf{b} \in \mathbb{R}^n$。定义从 $\mathrm{Aff}(n, \mathbb{R})$ 到 $\mathrm{GL}(n+1, \mathbb{R})$ 的映射：

$$
T_{A,\mathbf{b}} \longmapsto
\begin{pmatrix}
A & \mathbf{b} \\
0 & 1
\end{pmatrix}
$$

这个映射是到由这些分块矩阵组成的子群上的同构。等式 $T_{A,\mathbf{b}} \circ T_{C,\mathbf{d}} = T_{AC, A\mathbf{d} + \mathbf{b}}$ 与分块矩阵乘法一致。投影 $p(T_{A,\mathbf{b}}) = A$ 是到 $\mathrm{GL}(n, \mathbb{R})$ 的满射同态，其核是平移群 $T_{I,\mathbf{b}}$。映射 $\mathbf{b} \mapsto T_{I,\mathbf{b}}$ 是从加法群 $\mathbb{R}^n$ 到该核的同构。

加法群 $(\mathbb{Z}/2\mathbb{Z}, +)$、乘法群 $(\{\ 1, -1 \ \}, \cdot)$ 以及一个非等边等腰三角形的对称群彼此同构。从 $\mathbb{Z}/2\mathbb{Z}$ 到 $\{\ 1, -1 \ \}$ 的映射 $0 \mapsto 1$、$1 \mapsto -1$ 就是这些同构之一。对三个群中的任意一个证明的定理，在重新标记元素与运算后，对另外两个同样成立。

[对数](../logarithms/)是从乘法下的正实数群到加法下的实数群的同构：

$$\log : (\mathbb{R}^{+}, \cdot) \to (\mathbb{R}, +)$$

恒等式 $\log(xy) = \log(x) + \log(y)$ 证明了该映射是同态，而指数函数是它的逆。

> 同构不是相等。两个同构的结构可能有不同的底层集合，而同构是它们之间的一个函数。当只讨论代数性质时，人们常说“二阶循环群”。当底层集合或所选映射很重要时，例如在同调代数和基于泛性质的论证中，同构类与所选代表是不同的数据。
