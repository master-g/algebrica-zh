---
title: 模
title_en: Modules
source: https://algebrica.org/modules/
license: CC BY-NC 4.0
tags:
  - abelian-group
  - algebraic-structures
  - basis
  - free-module
  - homomorphism
  - ideal
  - linear-independence
  - module
  - module-theory
  - ring
  - submodule
  - torsion
translation:
  status: current
  source_hash: c57b3e406e5fe5f60d9c3196c8d869fc2e7fc7b1d10db1fd51e043f729c10d1d
  translator: omp
  updated: "2026-07-23T06:20:13.587Z"
---
## 定义

模是用[环](../rings/)替换[向量空间](../vector-spaces/)定义中标量所在的[域](../fields/)所得到的代数结构。其动机在于，若干常见构造——例如环中的[理想](../rings/)、赋予典范 $\mathbb{Z}$-作用的[阿贝尔群](../groups/)，以及在系数环上考察的[多项式环](../polynomials/)——都符合一个统一的模式，其中标量不必可逆。所得理论比向量空间理论更为广泛，为整个交换代数和同调代数提供了通用语言。

设 $R$ 为含幺环。$R$ 上的左模（简称左 $R$-模）是一个[阿贝尔群](../groups/) $(M, +)$，配备了数乘 $\cdot : R \times M \to M$，满足以下公理：

+ 模加法的分配律：对所有 $r \in R$ 和 $\mathbf{u}, \mathbf{v} \in M$，有 $r \cdot (\mathbf{u} + \mathbf{v}) = r \cdot \mathbf{u} + r \cdot \mathbf{v}$。
+ 环加法的分配律：对所有 $r, s \in R$ 和 $\mathbf{v} \in M$，有 $(r + s) \cdot \mathbf{v} = r \cdot \mathbf{v} + s \cdot \mathbf{v}$。
+ 与环乘法的相容性：对所有 $r, s \in R$ 和 $\mathbf{v} \in M$，有 $(rs) \cdot \mathbf{v} = r \cdot (s \cdot \mathbf{v})$。
+ 单位元作用：对所有 $\mathbf{v} \in M$，乘法单位元 $1 \in R$ 满足 $1 \cdot \mathbf{v} = \mathbf{v}$。

$R$ 上的右模定义类似，把标量放在模元素右侧，相容性条件为 $\mathbf{v} \cdot (rs) = (\mathbf{v} \cdot r) \cdot s$；当 $R$ 是交换环时，左模与右模两个概念可等同，简称 $R$-模。

> 定义 $M$ 所依据的环 $R$ 称为 $M$ 的标量环。当 $R$ 为[域](../fields/)时，上述公理恰好化为向量空间的公理，因此每个向量空间都是模，模论将向量空间理论作为特殊情形包含在内。

## 性质

一些初等结论直接由公理得出。对任意 $\mathbf{v} \in M$，乘以环的加法单位元满足 $0 \cdot \mathbf{v} = \mathbf{0}$。为此，可写出：

$$0 \cdot \mathbf{v} = (0 + 0) \cdot \mathbf{v} = 0 \cdot \mathbf{v} + 0 \cdot \mathbf{v}$$

然后利用 $(M, +)$ 的阿贝尔群结构，从两边消去 $0 \cdot \mathbf{v}$。类似的论证表明，对每个 $r \in R$ 有 $r \cdot \mathbf{0} = \mathbf{0}$，并且对所有 $r \in R$ 与 $\mathbf{v} \in M$ 有 $(-r) \cdot \mathbf{v} = -(r \cdot \mathbf{v}) = r \cdot (-\mathbf{v})$。特别地，取 $r = 1$ 即得 $(-1) \cdot \mathbf{v} = -\mathbf{v}$。

模与[向量空间](../vector-spaces/)的一个区别在于，可能存在被某个非零标量零化的非零元素。元素 $\mathbf{v} \in M$ 称为挠元，若存在非零的 $r \in R$ 使得 $r \cdot \mathbf{v} = \mathbf{0}$。$M$ 中所有挠元构成的集合记为 $T(M)$；当 $R$ 是[整环](../rings/)时，它是 $M$ 的子模。模在 $T(M) = \\{\ \mathbf{0} \ \\}$ 时称为无挠，在 $T(M) = M$ 时称为挠模。无挠正是向量空间自动满足的性质，因为在[域](../fields/)中，当 $\alpha \neq 0$ 时，由 $\alpha$ 的可逆性，方程 $\alpha \cdot \mathbf{v} = \mathbf{0}$ 必推出 $\mathbf{v} = \mathbf{0}$。

## 代数层次结构

迄今所引入的结构构成一个刚性递增的链。[群](../groups/)带有一个运算及其逆元。[环](../rings/)带有两个运算，但仅对加法保证存在逆元。[域](../fields/)带有两个运算，对加法以及乘法下的所有非零元素都保证存在逆元。[向量空间](../vector-spaces/)则建立在域之上，由域对一个独立的向量集合施加标量乘法作用。

在此图景中，模位于环与向量空间之间。它的构造方式与向量空间相同，只是把标量所在的域换成环。一般标量失去乘法逆元，使得相应理论中病态现象明显增多：

+ 基未必存在。
+ 秩即使有定义，对于任意环也未必不变。
+ 挠现象出现并起到结构性作用。

> 每个向量空间都是其标量域上的模，每个阿贝尔群都是[整数](../integers/)环上的模。环 $R$ 上的模范畴同时推广了向量空间与阿贝尔群，并在相应的特殊情形下分别化为二者。

## 示例

最根本的例子如下。每个阿贝尔群 $(A, +)$ 都带有唯一的 $\mathbb{Z}$-模结构，其中[整数](../integers/) $n$ 与元素 $a \in A$ 的数乘由重复加法定义。对于 $n > 0$，令：

$$n \cdot a = \underbrace{a + a + \cdots + a}_{n \text{ 个加数}}$$

对于 $n < 0$，令 $n \cdot a = -((-n) \cdot a)$；对于 $n = 0$，令 $0 \cdot a = 0$。模的四条公理在此情形归结为阿贝尔群中整数倍的通常性质，因此 $\mathbb{Z}$-模理论与阿贝尔群理论完全一致。

设 $R$ 为环，$n$ 为正整数。由 $R$ 中元素组成的有序 $n$-元组所构成的集合 $R^n$，配以逐分量加法与逐分量数乘，是一个 $R$-模。这是在域 $F$ 上考虑的[向量空间](../vector-spaces/) $F^n$ 的直接推广。当 $R = \mathbb{Z}$ 时，模 $\mathbb{Z}^n$ 是有限秩自由模的原型例子。

- - -

每个环 $R$ 都是自身上的模，其数乘由环乘法给出。将 $R$ 视为左 $R$-模时，其子模恰好就是 $R$ 的[左理想](../rings/)。这一视角统一了理想与模的语言，并为交换代数中研究模提供了主要动机之一。

集合 $\mathbb{Z}/n\mathbb{Z}$ 在[模](../modulo-operator/) $n$ 的加法下是一个 $n$ 阶阿贝尔群，因此由上述构造可知它是一个 $\mathbb{Z}$-模。每个元素 $\bar{a} \in \mathbb{Z}/n\mathbb{Z}$ 都满足 $n \cdot \bar{a} = 0$，因而整个模都是挠模。这表明，即使是一个有限生成的 $\mathbb{Z}$-模也未必拥有基，因为挠元的存在使得包含它的任何子集都无法线性无关。

## 子模

非空子集 $N \subseteq M$ 当 $N$ 在继承自 $M$ 的运算下本身构成一个 $R$-模时，称为 $M$ 的子模。等价地，当对一切 $\mathbf{u}, \mathbf{v} \in N$ 和一切 $r \in R$ 都有 $\mathbf{u} + \mathbf{v} \in N$ 和 $r \cdot \mathbf{v} \in N$ 时，$N$ 是一个子模。这两个条件合起来表达了在任意 $R$-线性组合下的封闭性，并且蕴含零元素 $\mathbf{0}$ 属于每个子模。

每个模 $M$ 都有两个典范子模：零子模 $\\{\ \mathbf{0} \ \\}$ 以及 $M$ 自身；当该模不是零模时，二者不同。任何与 $M$ 不同的子模称为真子模。

作为例子，考虑 $\mathbb{Z}$-模 $\mathbb{Z}$ 以及偶数构成的子集 $2\mathbb{Z}$。对任意 $a, b \in 2\mathbb{Z}$，和 $a + b$ 仍为偶数；对任意 $n \in \mathbb{Z}$ 和 $a \in 2\mathbb{Z}$，乘积 $n \cdot a$ 也是偶数。两个封闭性条件均满足，因此 $2\mathbb{Z}$ 是 $\mathbb{Z}$ 的子模。更一般地，阿贝尔群 $A$ 的每个[子群](../groups/)都自动是 $A$ 的 $\mathbb{Z}$-子模，因为加法结构已经控制了整数的数乘。

## 自由模与基

子集 $S \subseteq M$ 称为在 $R$ 上线性无关，是指其中两两不同元素的有限组合

$$r_1 \mathbf{v}_1 + r_2 \mathbf{v}_2 + \cdots + r_k \mathbf{v}_k = \mathbf{0}$$

（满足 $\mathbf{v}_i \in S$ 与 $r_i \in R$）仅在每个系数 $r_i$ 都为零时才成立。集合 $S$ 称为生成 $M$，当 $M$ 的每个元素都可以表示为 $S$ 中元素的有限 $R$-[线性组合](../linear-combinations/)。$M$ 的基是线性无关的生成集。

具有基的模称为自由模，任意基的基数称为其秩。对于交换环上的模，秩是良定义的，即任意两个基具有相同的基数。模 $R^n$ 在 $R$ 上是秩为 $n$ 的自由模，其基由典范的 $n$-元组给出，每个元组在某一位置取 $1$，其余位置取 $0$。

并非每个模都是自由的。$\mathbb{Z}$-模 $\mathbb{Z}/n\mathbb{Z}$ 在 $n > 1$ 时不具有基，因为每个元素都被 $n$ 零化，不可能属于线性无关的集合。这正是与向量空间的类比失效之处。在[域](../fields/)上每个模都是自由的，且秩与维数一致。在一般环上，自由性是例外而非常规。

> 整数 $\mathbb{Z}$ 作为 $\mathbb{Z}$-模，是秩为 $1$ 的自由模，基为 $\\{\ 1 \ \\}$。相比之下，模 $\mathbb{Z}/2\mathbb{Z}$ 由单个元素 $\bar{1}$ 生成，但 $\bar{1}$ 并非线性无关，因为 $2 \cdot \bar{1} = 0$ 在 $\mathbb{Z}/2\mathbb{Z}$ 中成立，而 $2 \neq 0$ 在 $\mathbb{Z}$ 中成立。

## 模同态与模同构

模同态，也称为 $R$-线性映射，是两个左 $R$-模之间保持加法结构以及环作用的[函数](../functions/) $\varphi : M \to N$。明确地说，$\varphi$ 为模同态，当且仅当对所有 $\mathbf{u}, \mathbf{v} \in M$ 和所有 $r \in R$ 以下两个恒等式成立：

$$\varphi(\mathbf{u} + \mathbf{v}) = \varphi(\mathbf{u}) + \varphi(\mathbf{v})$$

$$\varphi(r \cdot \mathbf{v}) = r \cdot \varphi(\mathbf{v})$$

这两个条件可以合并为单一要求：对所有 $r, s \in R$ 和 $\mathbf{u}, \mathbf{v} \in M$，$\varphi(r\mathbf{u} + s\mathbf{v}) = r \varphi(\mathbf{u}) + s \varphi(\mathbf{v})$。模同态的[核](../homomorphisms-and-isomorphisms/)与像定义如下：

$$\ker(\varphi) = \\{\ \mathbf{v} \in M : \varphi(\mathbf{v}) = \mathbf{0} \ \\}$$

$$\mathrm{im}(\varphi) = \\{\ \varphi(\mathbf{v}) : \mathbf{v} \in M \ \\}$$

核是 $M$ 的子模，像是 $N$ 的子模。模同态是单射当且仅当其核为零子模。

- - -

双射的模同态称为模同构，当两个模之间存在同构时称它们同构，记作 $M \cong N$。为了说明这一概念可以多么灵活，考虑 $\mathbb{Z}$-模 $\mathbb{Z}$ 以及由 $\varphi(a) = 2a$ 定义的映射 $\varphi : \mathbb{Z} \to \mathbb{Z}$。对任意 $a, b \in \mathbb{Z}$ 有：

$$
\begin{align}
\varphi(a + b) &= 2(a + b) \\[6pt]
               &= 2a + 2b \\[6pt]
               &= \varphi(a) + \varphi(b)
\end{align}
$$

直接验证还表明，对每个 $n \in \mathbb{Z}$ 都有 $\varphi(n \cdot a) = 2na = n \cdot \varphi(a)$，因此 $\varphi$ 是 $\mathbb{Z}$-线性的。其核是平凡子模 $\\{\ 0 \ \\}$，故 $\varphi$ 是单射的，其像是真子模 $2\mathbb{Z}$。因此，将映射 $\varphi$ 的陪域限制为其像时，它给出 $\mathbb{Z}$ 与其真子模 $2\mathbb{Z}$ 之间的同构（该映射到自身并不满射），这一现象在有限维[向量空间](../vector-spaces/)中不可能发生，因为有限维空间到自身的单射线性映射必然是满射的。

> 上面的例子突出了模与向量空间之间最重要的差异之一。秩-零化度定理以及有限维空间自同态的单射与满射等价性，都依赖于无挠性以及每个向量空间的自由性——这些性质在一般模论框架中并不成立。保持结构的映射的一般框架，连同单态射、满态射、同构、自同态和自同构等相关概念，是[同态与同构](../homomorphisms-and-isomorphisms/)页面的主题。
