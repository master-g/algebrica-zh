---
title: 子空间
title_en: Subspaces
source: https://algebrica.org/subspaces/
license: CC BY-NC 4.0
tags:
  - basis
  - complement
  - dimension
  - direct-sum
  - grassmann-formula
  - linear-algebra
  - span
  - subspaces
  - vector-spaces
translation:
  status: current
  source_hash: d05b0ef4e5aec3876dc22bbaab00b71e531b61189ebc6b24f809e6960f1e5a5e
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 子空间的定义

一个[域](../fields/) $F$ 上的[向量空间](../vector-spaces/) $V$ 带有加法和数乘。对于[子集](../sets/) $W \subseteq V$，只有当这两种运算的结果仍属于 $W$ 时，它们才能限制在 $W$ 上。下面三个子集分别以不同方式不满足这一要求。

第一象限 $Q = \{\ (x, y) \in \mathbb{R}^2 \mid x \geq 0,\ y \geq 0 \ \}$ 包含其中任意两个元素的和，因为非负数之和仍为非负数。但它对数乘不封闭，因为 $(-1)(1, 1) = (-1, -1)$ 位于 $Q$ 外。

两条坐标轴的并集 $U$ 对任意 $\mathbf{v} \in U$ 和任意 $\alpha \in \mathbb{R}$ 都包含 $\alpha\mathbf{v}$，因为坐标轴上向量的任意倍数仍在同一坐标轴上。但它对加法不封闭，因为 $(1, 0) + (0, 1) = (1, 1)$ 不在任何一条坐标轴上。

方程为 $y = x + 1$ 的直线 $r$ 不经过原点。它不能在继承的运算下成为向量空间，因为每个向量空间都包含[零向量](../vectors/)。

这三种失败彼此独立。两个封闭性条件互不蕴含，二者也都不能推出子集包含零向量。包含零向量且同时满足两个封闭性条件的子集称为子空间。

向量空间 $V$ 的子集 $W$ 在从 $V$ 继承的运算下，$W$ 本身成为 $F$ 上的向量空间时，称为 $V$ 的子空间。对任意 $V$，集合 $\{\ \mathbf{0} \ \}$ 和 $V$ 都是子空间；对每个 $V$，它们都是平凡子空间。

## 子空间判别准则

无需逐一检查每条向量空间公理，因为大多数公理都是对 $V$ 中所有向量成立的恒等式，因而也自动对 $W$ 中的向量成立。加法的结合律和交换律、两个分配律以及数乘的相容性都不需要进一步验证。只需要检查对两种运算的封闭性、零向量的归属以及加法逆元的归属。

子集 $W \subseteq V$ 是子空间，当且仅当满足以下三个条件：

+ $\mathbf{0} \in W$
+ 对所有 $\mathbf{u}, \mathbf{v} \in W$，都有 $\mathbf{u} + \mathbf{v} \in W$
+ 对所有 $\alpha \in F$ 和 $\mathbf{v} \in W$，都有 $\alpha\mathbf{v} \in W$

第一条保证零向量属于 $W$。第三条保证每个加法逆元也属于 $W$，因为当 $\mathbf{v} \in W$ 时，$-\mathbf{v} = (-1)\mathbf{v}$。第二条和第三条保证两种运算在 $W$ 上有定义。

第一条还可以弱化为要求 $W$ 非空。取任意 $\mathbf{v} \in W$，对第三条使用 $\alpha = 0$，得到 $0\mathbf{v} = \mathbf{0} \in W$。把条件明确写出来，可以排除任何不包含原点的候选集合。

两个封闭性条件可以合并为一个条件：当 $W$ 非空且

$$\alpha\mathbf{u} + \beta\mathbf{v} \in W \qquad \forall\,\mathbf{u}, \mathbf{v} \in W,\ \alpha, \beta \in F$$

时，即为子空间。令 $\alpha=\beta=1$，条件表示对加法封闭；令 $\beta=0$，条件表示对数乘封闭。对项数作[数学归纳法](../principle-of-mathematical-induction/)，可以证明有限个[线性组合](../linear-combinations/)也满足同样的结论，所以子空间包含其自身元素的每个线性组合。

## 齐次方程组的解集

设 $A$ 是一个元素为实数的 $m \times n$ 矩阵。相应齐次[方程组](../systems-of-linear-equations/)的解集为：

$$\mathcal{S} = \{\ \mathbf{x} \in \mathbb{R}^n \mid A\mathbf{x} = \mathbf{0} \ \}$$

由于 $A\mathbf{0} = \mathbf{0}$，原点属于 $\mathcal{S}$。对于 $\mathbf{x}, \mathbf{y} \in \mathcal{S}$ 及 $\alpha, \beta \in \mathbb{R}$，[线性映射](../linear-maps/) $\mathbf{x} \mapsto A\mathbf{x}$ 满足：

$$A(\alpha\mathbf{x} + \beta\mathbf{y}) = \alpha A\mathbf{x} + \beta A\mathbf{y} = \mathbf{0}$$

因此，集合 $\mathcal{S}$ 是 $\mathbb{R}^n$ 的子空间，也是映射 $\mathbf{x} \mapsto A\mathbf{x}$ 的[核](../kernel-and-image-of-a-linear-map/)。若 $r$ 是 $A$ 的[秩](../rank-of-a-matrix/)，则经过[高斯消元](../gaussian-elimination/)后，化简后的方程组有 $n-r$ 个自由变量，其标准参数表示为每个自由变量提供一个基向量。因此 $\dim \mathcal{S} = n-r = n-\mathrm{rank}(A)$。

当 $\mathbf{b}\neq\mathbf{0}$ 时，方程组 $A\mathbf{x}=\mathbf{b}$ 的解集不是子空间，因为 $\mathbf{x}=\mathbf{0}$ 不满足方程。[Rouché–Capelli 定理](../rouche-capelli-theorem/)决定了该方程组是否有解。若有解且 $\mathbf{x}_0$ 是其中一个解，则解集是平移集 $\mathbf{x}_0+\mathcal{S}$，其中的元素形如 $\mathbf{x}_0+\mathbf{s}$，$\mathbf{s}\in\mathcal{S}$。

> 子空间的平移集称为仿射子空间。不经过原点的直线和平面是仿射子空间，但不是子空间。齐次方程组的解集是子空间，而有解的非齐次方程组的解集是仿射子空间。

## 平面与空间的子空间

$\mathbb{R}^2$ 的子空间包括零子空间、经过原点的[直线](../lines/)以及 $\mathbb{R}^2$ 本身。若 $W$ 包含非零向量 $\mathbf{v}$，则每个倍数 $\alpha\mathbf{v}$ 都属于 $W$。这些倍数组成经过原点且方向为 $\mathbf{v}$ 的直线。若 $W$ 还包含不在该直线上的第二个向量 $\mathbf{w}$，则 $\mathbf{v}$ 和 $\mathbf{w}$ 构成 $\mathbb{R}^2$ 的一个基，于是 $W=\mathbb{R}^2$。

$\mathbb{R}^3$ 的子空间包括零子空间、经过原点的直线、[经过原点的平面](../planes/)以及 $\mathbb{R}^3$ 本身。每个子空间都是某个齐次方程组的解集。平面的方程为 $ax+by+cz=0$，其中 $(a,b,c)\neq(0,0,0)$；直线则是两个此类独立方程的解集。

维数可以区分这些情形。$\mathbb{R}^n$ 的每个子空间都有一个满足 $0\leq k\leq n$ 的维数 $k$，并且与 $\mathbb{R}^k$ [线性同构](../homomorphisms-and-isomorphisms/)。

## 函数空间与矩阵空间的子空间

次数不超过 $n$ 的多项式构成系数属于 $F$ 的所有[多项式](../polynomials/)的一个子空间，因为任意和与数乘要么是零多项式，要么次数不超过 $n$。次数恰好为 $n$ 的多项式不构成子空间，因为 $x^n$ 与 $1-x^n$ 之和的次数为 $0$。

在阶为 $n$ 的方阵[矩阵](../matrices/)空间 $M_n(\mathbb{R})$ 中，对称矩阵构成一个子空间，因为转置满足 $(\alpha A+\beta B)^{\mathrm{T}}=\alpha A^{\mathrm{T}}+\beta B^{\mathrm{T}}$，而当两个矩阵都对称时，右侧等于 $\alpha A+\beta B$。迹为零的矩阵也构成子空间，因为迹是线性的。[可逆矩阵](../inverse-matrix/)不构成子空间，因为单位矩阵 $I$ 和其相反数 $-I$ 都可逆，而它们的和是零矩阵。

在 $f:\mathbb{R}\to\mathbb{R}$ 的所有函数中，[连续函数](../continuous-functions/)构成一个子空间，因为连续函数的和与数乘仍然连续。[可微函数](../derivatives/)、在固定点 $x_0$ 处取零的函数，以及齐次线性[微分方程](../differential-equations/)的解也具有同样性质。满足 $f(x_0)=1$ 的函数不构成子空间，因为零函数不在其中。

## 交集与并集

设 $\{\ W_i \ \}_{i \in I}$ 是 $V$ 的任意一个子空间族。它们的交集包含 $\mathbf{0}$，因为每个 $W_i$ 都如此。若 $\mathbf{u}$ 和 $\mathbf{v}$ 属于交集，且 $\alpha,\beta\in F$，则由封闭性，$\alpha\mathbf{u}+\beta\mathbf{v}$ 属于每个 $W_i$，因而属于交集。因此，任意子空间族（有限或无限）的交集都是子空间。

并集的行为不同。$\mathbb{R}^2$ 的两条坐标轴是子空间，但它们的并集不是子空间，$(1,0)$ 与 $(0,1)$ 的和就说明了这一点。更一般地，设 $W_1$ 和 $W_2$ 是子空间，且互不包含。取 $\mathbf{u}\in W_1$ 但 $\mathbf{u}\notin W_2$，取 $\mathbf{v}\in W_2$ 但 $\mathbf{v}\notin W_1$。假设 $\mathbf{u}+\mathbf{v}$ 属于并集，例如 $\mathbf{u}+\mathbf{v}\in W_1$，那么 $\mathbf{v}=(\mathbf{u}+\mathbf{v})-\mathbf{u}$ 就属于 $W_1$，与 $\mathbf{v}$ 的选取矛盾；对称的论证排除了 $\mathbf{u}+\mathbf{v}\in W_2$。所以，两个子空间的并集是子空间，当且仅当其中一个包含另一个。

## 两个子空间的和

给定 $V$ 的两个子空间 $A$ 和 $B$，它们的和定义为：

$$A + B = \{\ \mathbf{a} + \mathbf{b} \mid \mathbf{a} \in A,\ \mathbf{b} \in B \ \}$$

这个集合是一个子空间，因为它包含 $\mathbf{0}=\mathbf{0}+\mathbf{0}$。对于其中的两个元素 $\mathbf{a}_1+\mathbf{b}_1$ 和 $\mathbf{a}_2+\mathbf{b}_2$，有：

$$\alpha(\mathbf{a}_1 + \mathbf{b}_1) + \beta(\mathbf{a}_2 + \mathbf{b}_2) = (\alpha\mathbf{a}_1 + \beta\mathbf{a}_2) + (\alpha\mathbf{b}_1 + \beta\mathbf{b}_2)$$

第一个括号属于 $A$，第二个括号属于 $B$，所以结果属于 $A+B$。取 $\mathbf{b}=\mathbf{0}$ 可知 $A\subseteq A+B$，同理 $B\subseteq A+B$，所以这个和包含并集。任意同时包含 $A$ 和 $B$ 的子空间 $W$，由于对加法封闭，会包含每个 $\mathbf{a}+\mathbf{b}$，因而包含 $A+B$。所以，这个和是包含 $A\cup B$ 的最小子空间，也是该并集的张成空间。

这个定义可以推广到有限个子空间 $A_1,\ldots,A_s$，它们的和由所有形如 $\mathbf{a}_1+\cdots+\mathbf{a}_s$ 且 $\mathbf{a}_i\in A_i$ 的向量组成。当每个 $A_i$ 都是由单个向量生成的直线 $F\mathbf{v}_i$ 时，这个和就是 $\mathbf{v}_1,\ldots,\mathbf{v}_s$ 的张成空间，因此有限集合的张成空间是子空间和的一个特例。

在 $\mathbb{R}^3$ 中，两个不同的过原点平面交于一条直线，它们的和是整个空间；而一个平面与其包含的一条直线的和仍是该平面。两个加项的交集决定了它们的和的维数。

## Grassmann 公式

对于向量空间 $V$ 的有限维子空间 $A$ 和 $B$：

$$\dim(A + B) = \dim A + \dim B - \dim(A \cap B)$$

证明从 $A\cap B$ 的一个基 $\{\ \mathbf{u}_1,\ldots,\mathbf{u}_k\ \}$ 开始。由于这组向量在 $A$ 中线性无关，可以把它扩充为 $A$ 的基 $\{\ \mathbf{u}_1,\ldots,\mathbf{u}_k,\mathbf{a}_1,\ldots,\mathbf{a}_p\ \}$。它在 $B$ 中也线性无关，所以可以扩充为 $B$ 的基 $\{\ \mathbf{u}_1,\ldots,\mathbf{u}_k,\mathbf{b}_1,\ldots,\mathbf{b}_q\ \}$。两个基的并集为：

$$\mathcal{B} = \{\ \mathbf{u}_1, \ldots, \mathbf{u}_k, \mathbf{a}_1, \ldots, \mathbf{a}_p, \mathbf{b}_1, \ldots, \mathbf{b}_q \ \}$$

这是 $A+B$ 的一个基。

$A+B$ 的每个元素都是一个 $A$ 中元素与一个 $B$ 中元素之和。这两个元素分别是对应基的线性组合，因此 $\mathcal{B}$ 张成 $A+B$。为证明线性无关性，假设 $\mathcal{B}$ 中向量的一个线性组合为零：

$$\sum_{i=1}^{k} \lambda_i\mathbf{u}_i + \sum_{j=1}^{p} \mu_j\mathbf{a}_j + \sum_{l=1}^{q} \nu_l\mathbf{b}_l = \mathbf{0}$$

令 $\mathbf{w}=\sum_l\nu_l\mathbf{b}_l$。上述关系意味着 $\mathbf{w}=-\sum_i\lambda_i\mathbf{u}_i-\sum_j\mu_j\mathbf{a}_j$，所以 $\mathbf{w}$ 属于 $A$。根据它的定义，$\mathbf{w}$ 也属于 $B$。因此 $\mathbf{w}\in A\cap B$，从而对于某些标量 $\delta_i$，有 $\mathbf{w}=\sum_i\delta_i\mathbf{u}_i$。$\mathbf{w}$ 的两个表达式给出：

$$\sum_{i=1}^{k} \delta_i\mathbf{u}_i - \sum_{l=1}^{q} \nu_l\mathbf{b}_l = \mathbf{0}$$

这个关系中的向量是 $B$ 的基的一个子集，因此线性无关性推出对所有 $l$ 都有 $\nu_l=0$，并且对所有 $i$ 都有 $\delta_i=0$。原关系于是化为 $A$ 的基的一个零线性组合，所以 $\lambda_i=0$ 且 $\mu_j=0$。所有系数都为零，$\mathcal{B}$ 线性无关。

基 $\mathcal{B}$ 有 $k+p+q$ 个元素，所以 $\dim(A+B)=k+p+q$。由于 $\dim A=k+p$ 且 $\dim B=k+q$，和 $\dim A+\dim B=2k+p+q$ 把交集中的 $k$ 个向量重复计算了一次。减去 $\dim(A\cap B)=k$，便得到所述公式。

- - -

在 $\mathbb{R}^4$ 中，定义两个平面：

$$A = \mathrm{span}\{\ (1, 0, 1, 0),\ (0, 1, 0, 1) \ \}, \qquad B = \mathrm{span}\{\ (1, 1, 0, 0),\ (0, 0, 1, 1) \ \}$$

$A$ 中的向量形如 $(a,b,a,b)$，$B$ 中的向量形如 $(c,c,d,d)$。两种形式相等，当且仅当 $a=c$、$b=c$、$a=d$ 且 $b=d$。因此四个参数全部相同，交集是由 $(1,1,1,1)$ 生成的直线。根据 Grassmann 公式，$\dim(A+B)=2+2-1=3$，所以两个平面张成的是 $\mathbb{R}^4$ 的一个超平面，而不是整个空间。在四维空间中，两个平面也可能只在原点相交；此时它们的和的维数为 $4$。

## 直和

$A+B$ 中的向量分解为 $\mathbf{a}+\mathbf{b}$ 并不总是唯一的。在 $\mathbb{R}^2$ 中，若 $A=B=\mathbb{R}^2$，向量 $(1,1)$ 有两种分解：$(1,1)+(0,0)$ 以及 $(1,0)+(0,1)$。分解的唯一性取决于交集。

当 $A+B$ 中每个向量恰好有一种表示 $\mathbf{a}+\mathbf{b}$，其中 $\mathbf{a}\in A$ 且 $\mathbf{b}\in B$ 时，称和 $A+B$ 为直和，记作 $A\oplus B$。这恰好发生在 $A\cap B=\{\ \mathbf{0}\ \}$ 时。若交集中包含非零向量 $\mathbf{w}$，则 $\mathbf{w}+\mathbf{0}$ 和 $\mathbf{0}+\mathbf{w}$ 是 $\mathbf{w}$ 的两种不同分解。反过来，若 $\mathbf{a}_1+\mathbf{b}_1=\mathbf{a}_2+\mathbf{b}_2$，则 $\mathbf{a}_1-\mathbf{a}_2=\mathbf{b}_2-\mathbf{b}_1$ 是同时属于两个子空间的向量，因此只能为零，两个分解也就相同。

Grassmann 公式在这种情况下化为：

$$\dim(A \oplus B) = \dim A + \dim B$$

因此，两个有限维子空间的和是直和，当且仅当 $\dim(A+B)=\dim A+\dim B$。

对于多于两个加项的情形，两两交集的条件不再充分。和 $A_1+\cdots+A_s$ 为直和，当且仅当把零向量分解为 $\mathbf{a}_i\in A_i$ 的各项时，唯一可能的分解是所有项都等于 $\mathbf{0}$：

$$\mathbf{0} = \mathbf{a}_1 + \cdots + \mathbf{a}_s \quad \Longrightarrow \quad \mathbf{a}_1 = \cdots = \mathbf{a}_s = \mathbf{0}$$

这个要求等价于和中每个向量的分解都是唯一的。$\mathbb{R}^2$ 中三条不同的直线说明了为什么两两交集条件不够。设 $A_1$、$A_2$、$A_3$ 分别由 $(1,0)$、$(0,1)$、$(1,1)$ 生成。它们任意两条都只在原点相交，但零向量有如下非平凡分解：

$$(1, 0) + (0, 1) - (1, 1) = (0, 0)$$

所以三条直线的和的维数为 $2$ 而不是 $3$。要得到直和，每个 $A_i$ 与其余子空间之和的交集都必须只有原点。

## 补空间

$V$ 的子空间 $B$ 称为子空间 $A$ 的补空间，当 $V=A\oplus B$，也就是 $A+B=V$ 且 $A\cap B=\{\ \mathbf{0}\ \}$ 时成立。此时，$V$ 中每个向量都能唯一分解为一个 $A$ 中分量和一个 $B$ 中分量。

在有限维情形中，补空间总是存在。$A$ 的一个基 $\{\ \mathbf{u}_1,\ldots,\mathbf{u}_k\ \}$ 可以扩充为 $V$ 的一个基 $\{\ \mathbf{u}_1,\ldots,\mathbf{u}_k,\mathbf{w}_1,\ldots,\mathbf{w}_{n-k}\ \}$。令 $B$ 为新增向量张成的子空间。$V$ 中每个向量都是这个基的线性组合，其系数可以分为属于 $A$ 的部分和属于 $B$ 的部分，所以 $A+B=V$。若 $\mathbf{x}\in A\cap B$，则 $\mathbf{x}$ 可以分别用 $\mathbf{u}_i$ 和 $\mathbf{w}_j$ 表示。两式相减得到基向量之间的一个关系，因此线性无关性推出 $\mathbf{x}=\mathbf{0}$。维数满足：

$$\dim A + \dim B = \dim V$$

补空间并不唯一。在 $\mathbb{R}^2$ 中，由 $(1,0)$ 生成的子空间 $A$ 的每一条经过原点的其他直线都是补空间，包括由 $(0,1)$ 和 $(1,1)$ 生成的直线。$A$ 的一个基可以有不同的方式扩充为 $V$ 的基，而每种扩充都确定一个维数为 $\dim V-\dim A$ 的补空间。

## 内部直和与外部直和

符号 $\oplus$ 表示两种不同的构造。给定同一个域上的向量空间 $V_1,\ldots,V_s$，它们不必是某个公共空间的子空间；它们的外部直和是笛卡尔积 $V_1\times\cdots\times V_s$，运算按分量进行：

$$
(\mathbf{v}_1, \ldots, \mathbf{v}_s) + (\mathbf{w}_1, \ldots, \mathbf{w}_s) = (\mathbf{v}_1 + \mathbf{w}_1, \ldots, \mathbf{v}_s + \mathbf{w}_s), \qquad \alpha(\mathbf{v}_1, \ldots, \mathbf{v}_s) = (\alpha\mathbf{v}_1, \ldots, \alpha\mathbf{v}_s)
$$

它的维数等于各因子维数之和。

上面讨论的内部直和涉及同一个空间 $V$ 中的子空间 $A_1,\ldots,A_s$。映射 $(\mathbf{a}_1,\ldots,\mathbf{a}_s)\mapsto\mathbf{a}_1+\cdots+\mathbf{a}_s$ 定义了从 $A_i$ 的外部直和到 $V$ 的一个线性映射。它的像是 $A_1+\cdots+A_s$，并且当且仅当零向量只有平凡分解时才是单射。因此，$A_i$ 的和是直和，当且仅当该映射是从外部直和到 $A_1+\cdots+A_s$ 的同构。
