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
  - field
  - linear-combination
  - linear-independence
  - linear-map
  - rank-nullity-theorem
  - subspace
  - vector-space
translation:
  status: current
  source_hash: d0b4695a906b7e487da75cd4b7b388b5294b53679d4b7a95b6eb37c6c7010bf8
  translator: omp
  updated: "2026-07-23T05:50:27.214Z"
---
## 定义

向量空间是一种代数结构，它将可被缩放并可[线性组合](../linear-combinations/)的量的概念加以形式化。这一概念出现在任何需要处理能够以一致方式相加和乘以数的对象之处：平面上的几何箭头、实系数[多项式](../polynomials/)、[实数](../real-numbers/)数列以及区间上的[连续函数](../continuous-functions/)都具有这一共同模式。

与定义在单一集合上的[群](../groups/)或[环](../rings/)不同，向量空间涉及两个不同的集合：一个[域](../fields/) $F$，其元素称为标量；以及一个集合 $V$，其元素称为[向量](../vectors/)。$F$ 上的向量空间是一个集合 $V$，连同两个运算：向量加法 $+ : V \times V \to V$ 和数乘 $\cdot : F \times V \to V$，满足以下公理：

+ $(V, +)$ 是一个阿贝尔群。存在一个零向量 $\mathbf{0} \in V$，使得对所有 $\mathbf{v} \in V$ 都有 $\mathbf{v} + \mathbf{0} = \mathbf{v}$，且每个向量 $\mathbf{v}$ 都有加法逆元 $-\mathbf{v}$。
+ 与域乘法的相容性：对所有 $\alpha, \beta \in F$ 和 $\mathbf{v} \in V$，恒等式 $\alpha \cdot (\beta \cdot \mathbf{v}) = (\alpha\beta) \cdot \mathbf{v}$ 成立。
+ 数乘的单位元：对所有 $\mathbf{v} \in V$，乘法单位元 $1 \in F$ 满足 $1 \cdot \mathbf{v} = \mathbf{v}$。
+ 数乘对向量加法的分配律：对所有 $\alpha \in F$ 和 $\mathbf{u}, \mathbf{v} \in V$，恒等式 $\alpha \cdot (\mathbf{u} + \mathbf{v}) = \alpha \cdot \mathbf{u} + \alpha \cdot \mathbf{v}$ 成立。
+ 数乘对域加法的分配律：对所有 $\alpha, \beta \in F$ 和 $\mathbf{v} \in V$，恒等式 $(\alpha + \beta) \cdot \mathbf{v} = \alpha \cdot \mathbf{v} + \beta \cdot \mathbf{v}$ 成立。

> 定义 $V$ 所依据的域 $F$ 称为 $V$ 的标量域。在本科阶段遇到的大多数应用中，$F$ 要么是 $\mathbb{R}$，要么是 $\mathbb{C}$，相应地称为实向量空间或复向量空间。

## 性质

由公理可直接推出若干基本结论。对任意标量 $\alpha \in F$ 和任意向量 $\mathbf{v} \in V$，乘以零满足 $0 \cdot \mathbf{v} = \mathbf{0}$。理由如下：

$$0 \cdot \mathbf{v} = (0 + 0) \cdot \mathbf{v} = 0 \cdot \mathbf{v} + 0 \cdot \mathbf{v}$$

再利用 $(V, +)$ 的群结构从两边消去 $0 \cdot \mathbf{v}$ 即得结论。类似地，对任意 $\mathbf{v} \in V$ 有 $\alpha \cdot \mathbf{0} = \mathbf{0}$ 和 $(-1) \cdot \mathbf{v} = -\mathbf{v}$，更一般地，对任意 $\alpha \in F$ 有 $(-\alpha) \cdot \mathbf{v} = -(\alpha \cdot \mathbf{v})$。

当 $\alpha \cdot \mathbf{v} = \mathbf{0}$ 时，要么 $\alpha = 0$，要么 $\mathbf{v} = \mathbf{0}$。这是非零标量可逆的直接推论：当 $\alpha \neq 0$ 时，

$$\mathbf{v} = 1 \cdot \mathbf{v} = (\alpha^{-1}\alpha) \cdot \mathbf{v} = \alpha^{-1} \cdot (\alpha \cdot \mathbf{v}) = \alpha^{-1} \cdot \mathbf{0} = \mathbf{0}$$

这一性质是「域中无零因子」在向量空间中的对应，线性无关的理论正以此为基础。

不同的标量给出同一个固定非零向量的不同倍数。当 $\mathbf{v} \neq \mathbf{0}$ 且 $\alpha \neq \beta$ 时，由刚才证明的性质，差 $(\alpha - \beta) \cdot \mathbf{v}$ 非零，故 $\alpha \cdot \mathbf{v} \neq \beta \cdot \mathbf{v}$。在诸如 $\mathbb{R}$ 这样的无限域上，这迫使每个非平凡空间都是无限的，因为单个非零向量 $\mathbf{v}$ 已经可以为每个标量 $\alpha$ 生成一个不同的倍数 $\alpha \cdot \mathbf{v}$。因此实向量空间要么只有一个元素，要么有无穷多个元素，而平凡空间 $\\{\ \mathbf{0} \ \\}$ 是唯一有限的情形。

## 代数层级

在代数结构的标准分类中，向量空间位于群、环和域之上，因为它依赖于一个标量域的存在。

群由一个集合配备一个允许逆元的运算构成。环引入了第二个运算，但该运算不必可逆。域要求两种运算在非零元素上都完全可逆。向量空间则以一个域为既定前提，在其之上构建新的结构，其中域通过缩放作用于另一个独立的向量集合。三种基础结构构成一条刚性递增的链：

+ 群具有一个带逆元的运算。
+ 环具有两个运算，但仅对加法保证逆元存在。
+ 域具有两个运算，对加法以及乘法下所有非零元素均保证逆元存在。

> 向量空间本身并不是这条链的进一步延伸，而是一种以域为前提的结构。每一个建立在 $\mathbb{R}$ 或 $\mathbb{C}$ 之上的向量空间，都依赖域公理成立才能使其数乘有良好定义。当标量取自[环](../rings/)而非域时，所得到的结构是[模](../modules/)，它推广了向量空间的概念，将在专门页面中讨论。

## 示例

最小的向量空间是平凡空间 $\\{\ \mathbf{0} \ \\}$，仅由零向量构成，建立在任意域 $F$ 之上。其运算是唯一确定的：对每个 $\alpha \in F$，有 $\mathbf{0} + \mathbf{0} = \mathbf{0}$ 和 $\alpha \cdot \mathbf{0} = \mathbf{0}$。它的基是空集，因此其维数为 $0$，且它是唯一一个维数为 $0$ 的向量空间。

所有实数的有序 $n$ 元组的集合 $\mathbb{R}^n$，在逐分量加法与数乘下构成 $\mathbb{R}$ 上的向量空间。对于 $n = 2$，加法定义为 $(a_1, a_2) + (b_1, b_2) = (a_1 + b_1, a_2 + b_2)$，数乘定义为 $\alpha \cdot (a_1, a_2) = (\alpha a_1, \alpha a_2)$。零向量为 $(0, 0)$。这是有限维实向量空间的原型，为一般理论提供了几何直观。

所有复数的有序 $n$ 元组的集合 $\mathbb{C}^n$，在类似的运算下构成 $\mathbb{C}$ 上的向量空间。它也可以被视为 $\mathbb{R}$ 上的向量空间，但此时其维数加倍：$\mathbb{C}^n$ 作为实向量空间的维数为 $2n$。

所有 $m$ 行 $n$ 列实元素的[矩阵](../matrices/)的集合 $M_{m \times n}(\mathbb{R})$，在逐元素加法与数乘下构成 $\mathbb{R}$ 上的向量空间。$A = (a_{ij})$ 与 $B = (b_{ij})$ 的和是元素为 $a_{ij} + b_{ij}$ 的矩阵，标量倍数 $\alpha A$ 的元素为 $\alpha a_{ij}$。零向量是每个元素都等于 $0$ 的矩阵。一组基由 $mn$ 个仅有一个元素等于 $1$ 而其余均为 $0$ 的矩阵构成，因此该空间的维数为 $mn$。取单行时重现 $\mathbb{R}^n$ 为 $M_{1 \times n}(\mathbb{R})$，取单列时给出与 $M_{n \times 1}(\mathbb{R})$ 相同的空间，因此[行向量与列向量](../vectors/)是特殊的矩阵。当 $m = n$ 时，矩阵为 $n$ 阶方阵，且 $M_{n \times n}(\mathbb{R})$ 的维数为 $n^2$。

- - -

所有次数不超过 $n$ 的实系数[多项式](../polynomials/)的集合 $\mathbb{R}[x]_{\leq n}$，在多项式的通常加法及多项式与实常数的乘法下构成 $\mathbb{R}$ 上的向量空间。零向量为零多项式。该空间的一组自然基是 $\\{\ 1, x, x^2, \ldots, x^n \ \\}$，它包含 $n + 1$ 个元素，因此该空间的维数为 $n + 1$。去掉次数的上界限制，便得到所有实多项式构成的空间 $\mathbb{R}[x]$，其基为 $\\{\ 1, x, x^2, \ldots \ \\}$，维数为无穷。

闭区间 $[a, b]$ 上所有连续实值函数的集合 $\mathcal{C}([a, b])$，在逐点加法与数乘下构成 $\mathbb{R}$ 上的向量空间：$(f + g)(x) = f(x) + g(x)$ 和 $(\alpha f)(x) = \alpha f(x)$。该空间是无限维的，因为各次单项式构成线性无关子集，因此不存在有限生成集。

## 子空间

非空子集 $W \subseteq V$ 当 $W$ 在从 $V$ 继承的运算下本身构成 $F$ 上的向量空间时，称为 $V$ 的子空间。与其逐一验证所有公理，只须检验两个条件：对所有 $\mathbf{u}, \mathbf{v} \in W$ 与所有 $\alpha \in F$，成员关系 $\mathbf{u} + \mathbf{v} \in W$ 与 $\alpha \cdot \mathbf{v} \in W$ 必须成立。这两个条件合起来称为对线性组合的封闭性。零向量 $\mathbf{0}$ 必属于每个子空间，因为令 $\alpha = 0$ 即得 $0 \cdot \mathbf{v} = \mathbf{0} \in W$。

举例来说，集合 $W = \\{\ (x, y) \in \mathbb{R}^2 : y = 2x \ \\}$ 是 $\mathbb{R}^2$ 的子空间。对于 $W$ 中任意两个向量 $(x_1, 2x_1)$ 与 $(x_2, 2x_2)$，它们的和 $(x_1 + x_2, 2x_1 + 2x_2) = (x_1 + x_2, 2(x_1 + x_2))$ 属于 $W$；而对任意标量 $\alpha \in \mathbb{R}$，向量 $\alpha(x_1, 2x_1) = (\alpha x_1, 2\alpha x_1)$ 也属于 $W$。两个条件均满足，故 $W$ 是 $\mathbb{R}^2$ 的子空间。从几何上看，$W$ 是过原点且斜率为 $2$ 的直线。

![IMG. 1](/assets/algebraic-structures/svg/vector-spaces-1.svg)

> $W$ 中的任一向量都位于过原点且斜率为 $2$ 的直线上。将两个这样的向量相加或将其中一个乘以标量，所得向量始终落在同一直线上，因此 $W$ 对两种运算都封闭。

## 基与维数

$V$ 中的一组向量 $\\{\ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \ \\}$ 称为线性无关，当且仅当方程：

$$\alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \cdots + \alpha_n \mathbf{v}_n = \mathbf{0}$$

的唯一解为 $\alpha_1 = \alpha_2 = \cdots = \alpha_n = 0$。不是线性无关的向量集合称为线性相关，这意味着集合中至少有一个向量可以表示为其余向量的[线性组合](../linear-combinations/)。$V$ 的基是张成 $V$ 的线性无关向量集合，即 $V$ 中的每个向量都可以表示为基向量的线性组合。任意向量在给定基下的表示是唯一的。若：

$$\mathbf{v} = \alpha_1 \mathbf{v}_1 + \cdots + \alpha_n \mathbf{v}_n = \beta_1 \mathbf{v}_1 + \cdots + \beta_n \mathbf{v}_n$$

则相减得到：

$$(\alpha_1 - \beta_1)\mathbf{v}_1 + \cdots + (\alpha_n - \beta_n)\mathbf{v}_n = \mathbf{0}$$

由线性无关性可得对所有 $k$ 都有 $\alpha_k = \beta_k$。

- - -

同一向量空间的任意两组基包含相同个数的元素。这一论证基于如下观察：当 $m$ 个向量的集合张成 $V$，而 $n$ 个向量的集合在 $V$ 中线性无关时，不等式 $n \leq m$ 成立。将此不等式沿两个方向各应用一次，便迫使任意两组基的基数相等。这个共同的基数称为 $V$ 的维数，记作 $\dim V$。

$\mathbb{R}^n$ 的标准基由 $n$ 个向量 $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ 组成，其中 $\mathbf{e}_k$ 在第 $k$ 个位置取 $1$，其余位置取 $0$。例如，$\mathbb{R}^3$ 的标准基为：

$$\mathbf{e}_1 = (1, 0, 0), \quad \mathbf{e}_2 = (0, 1, 0), \quad \mathbf{e}_3 = (0, 0, 1)$$

每个[向量](../vectors/) $(a, b, c) \in \mathbb{R}^3$ 都可以唯一地表示为 $a \mathbf{e}_1 + b \mathbf{e}_2 + c \mathbf{e}_3$，这证实了这三个向量构成一组基，且 $\dim \mathbb{R}^3 = 3$。

## 线性映射

线性映射，又称线性变换，是同一域 $F$ 上两个向量空间之间的[函数](../functions/) $\varphi : V \to W$，它保持向量空间的结构。具体而言，$\varphi$ 是线性的，当且仅当对所有 $\mathbf{u}, \mathbf{v} \in V$ 和所有 $\alpha \in F$ 下列两个条件成立：

$$\varphi(\mathbf{u} + \mathbf{v}) = \varphi(\mathbf{u}) + \varphi(\mathbf{v})$$

$$\varphi(\alpha \cdot \mathbf{v}) = \alpha \cdot \varphi(\mathbf{v})$$

这两个条件可以合并为单一要求：对所有 $\alpha, \beta \in F$ 和 $\mathbf{u}, \mathbf{v} \in V$ 都有 $\varphi(\alpha \mathbf{u} + \beta \mathbf{v}) = \alpha\varphi(\mathbf{u}) + \beta\varphi(\mathbf{v})$。双射的线性映射称为线性同构，当两个向量空间之间存在线性同构时，称它们同构。$F$ 上每个 $n$ 维向量空间都与 $F^n$ 同构，因此有限维向量空间完全由其维数和标量域分类。

线性映射 $\varphi : V \to W$ 的[核](../homomorphisms-and-isomorphisms/)和像定义如下：

$$\ker(\varphi) = \\{\ \mathbf{v} \in V : \varphi(\mathbf{v}) = \mathbf{0} \ \\}$$

$$\mathrm{im}(\varphi) = \\{\ \varphi(\mathbf{v}) : \mathbf{v} \in V \ \\}$$

$\ker(\varphi)$ 和 $\mathrm{im}(\varphi)$ 分别是 $V$ 和 $W$ 的子空间。维数定理，又称秩-零化度定理，断言对于有限维空间之间的任意线性映射，下列恒等式成立：

$$\dim V = \dim \ker(\varphi) + \dim \mathrm{im}(\varphi)$$

$\mathrm{im}(\varphi)$ 的维数称为 $\varphi$ 的秩，$\ker(\varphi)$ 的维数称为其零化度。秩-零化度定理是[线性方程组](../systems-of-linear-equations/)理论、[矩阵](../matrices/)分析以及有限维空间之间线性映射分类的基础。

## 示例

考虑由以下定义的线性映射 $\varphi : \mathbb{R}^3 \to \mathbb{R}^2$：

$$\varphi(x, y, z) = (x + y, y + z)$$

为验证线性性，需验证：

$$\varphi(\mathbf{u} + \mathbf{v}) = \varphi(\mathbf{u}) + \varphi(\mathbf{v})$$

$$\varphi(\alpha \mathbf{v}) = \alpha \varphi(\mathbf{v})$$

对所有向量和标量均成立，这由 $\mathbb{R}^3$ 中加法与数乘的线性性立得。核由所有满足 $x + y = 0$ 与 $y + z = 0$ 的向量 $(x, y, z)$ 构成，即 $x = -y$ 与 $z = -y$。因此 $\ker(\varphi)$ 的每个元素都具有以下形式：

$$(-y, y, -y) = y(-1, 1, -1)$$

其中 $y \in \mathbb{R}$，故核是由 $(-1, 1, -1)$ 张成的一维子空间。像为整个 $\mathbb{R}^2$，因为对任意 $(a, b) \in \mathbb{R}^2$，向量 $(a, 0, b)$ 都满足 $\varphi(a, 0, b) = (a, b)$，这表明 $\varphi$ 是满射，从而 $\dim \mathrm{im}(\varphi) = 2$。秩-零化度定理得到验证：

$$\dim \mathbb{R}^3 = \dim \ker(\varphi) + \dim \mathrm{im}(\varphi) = 1 + 2 = 3$$

因此 $\varphi$ 的核是过原点、方向为 $(-1, 1, -1)$ 的直线，而 $\mathrm{im}(\varphi) = \mathbb{R}^2$。

> 子空间、基、维数以及线性映射等概念，经过适当调整后，都可推广到环上的[模](../modules/)这一更一般的框架中；由于标量不再具有乘法逆元，会出现域上的线性代数中所没有的现象。关于各类代数结构之间保结构映射的统一视角，汇集于[同态与同构](../homomorphisms-and-isomorphisms/)页面。
