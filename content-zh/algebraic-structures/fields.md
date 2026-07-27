---
title: 域
title_en: Fields
source: https://algebrica.org/fields/
license: CC BY-NC 4.0
tags:
  - abelian-group
  - algebraic-structures
  - characteristic
  - complex-numbers
  - distributivity
  - field-extension
  - field-theory
  - finite-field
  - homomorphism
  - rational-numbers
  - real-numbers
  - subfield
translation:
  status: current
  source_hash: 03dac7f6e8b6037d7d0d30fbbbf4454c9d58b3c5afc2338ddfb8092a7c00a929
  translator: omp
  updated: "2026-07-23T05:28:35.618Z"
---
## 定义

域是一种代数结构，其中加法与乘法两种运算均完全可逆，唯一的例外是除以零被排除在外。当人们观察到某些数系——例如[有理数](../rational-numbers/)、[实数](../real-numbers/)与[复数](../complex-numbers/)——允许加法、减法、乘法以及除以任意非零元素，且所有预期的代数规则均成立时，这一概念便由此产生。

形式上，域是一个集合 $F$，连同两个二元运算 $+$ 与 $\cdot$，满足以下公理：

+ $(F, +)$ 构成阿贝尔群。加法单位元记作 $0$，元素 $a \in F$ 的加法逆元记作 $-a$。
+ $(F \setminus \\{\ 0 \ \\}, \cdot)$ 构成阿贝尔群。乘法单位元记作 $1$，非零元素 $a$ 的乘法逆元记作 $a^{-1}$。
+ 乘法对加法满足分配律：对所有 $a, b, c \in F$，恒等式 $a \cdot (b + c) = a \cdot b + a \cdot c$ 成立。

> $0 \neq 1$ 这一要求通过将 $0$ 排除在乘法群之外而隐含地成立，它确保平凡集合 $\\{\ 0 \ \\}$ 不能成为域。因此，域是每个非零元素都可逆的含幺交换[环](../rings/)。每个域都是环，但环一般并非域。

## 性质

若干性质可直接由上述公理推出。对任意 $a \in F$，乘以零满足 $a \cdot 0 = 0$。这并非假设，而是推导所得：

$$a \cdot 0 = a \cdot (0 + 0) = a \cdot 0 + a \cdot 0$$

利用加法群结构，从等式两边消去 $a \cdot 0$，即得结果。

域不含零因子。若 $a \cdot b = 0$ 且 $a \neq 0$，则 $a$ 可逆，且有：

$$b = a^{-1} \cdot (a \cdot b) = a^{-1} \cdot 0 = 0$$

因此在域中，两个非零元素的乘积始终非零，正是这一性质使消去律得以贯穿整个代数学。加法结构与乘法结构通过以下恒等式相互关联：

$$(-a) \cdot b = a \cdot (-b) = -(a \cdot b)$$

该式对所有 $a, b \in F$ 成立。特别地，两个负元素之积为正，即：

$$(-a) \cdot (-b) = a \cdot b$$

这是公理的推论，而非约定。

## 代数层级

[群](../groups/)是最基本的代数结构。它由一个集合配备单一二元运算构成，满足封闭性、结合律、单位元的存在性以及逆元的存在性。

当引入第二个运算并要求它对第一个运算满足分配律，却不要求该运算可逆时，所得的结构便是[环](../rings/)。整数 $\mathbb{Z}$ 是其典型例子。每个[整数](../integers/)都有加法逆元，然而大多数整数在 $\mathbb{Z}$ 自身内部并没有乘法逆元，因为 $2^{-1}$ 不属于 $\mathbb{Z}$。

在含幺交换环上再施加一个要求——每个非零元素关于乘法均可逆——便得到域。这三种结构构成一条刚性递增的链：

+ 群具有一个带逆元的运算。
+ 环具有两个运算，仅对加法保证逆元存在。
+ 域具有两个运算，对加法保证逆元，并对乘法下所有非零元素保证逆元存在。

> 有理数 $\mathbb{Q}$、实数 $\mathbb{R}$ 与复数 $\mathbb{C}$ 都是域。相比之下，整数 $\mathbb{Z}$ 构成环而非域，因为除法在其中不封闭。域在线性代数中扮演核心角色，为[向量空间](../vector-spaces/)提供标量；当标量取自环而非域时，所得结构是[模](../modules/)。

## 例

有理数的集合 $\mathbb{Q}$ 配备通常的加法和乘法，是包含整数的最小的域。每个非零有理数 $p/q$ 都有乘法逆元 $q/p$，且所有域公理均成立。

实数的集合 $\mathbb{R}$ 是 $\mathbb{Q}$ 的域扩张。它允许一个与其代数结构相容的序，这一性质将其在域族中区分开来，也是建立在其上的许多分析概念的基础。专门针对 $\mathbb{R}$ 的域公理完整列表及具体示例，汇集于[实数的性质](../properties-of-real-numbers/)页面中。

复数的集合 $\mathbb{C}$ 是 $\mathbb{R}$ 的域扩张。与 $\mathbb{R}$ 不同，它是代数闭的：每个以 $\mathbb{C}$ 中元素为系数的非常数多项式都至少在 $\mathbb{C}$ 中有一个根，这一结果被称为代数学基本定理。

- - -

对于任意素数 $p$，集合 $\mathbb{Z}/p\mathbb{Z} = \\{\ 0, 1, \ldots, p - 1 \ \\}$ 配以[模](../modulo-operator/) $p$ 的加法和乘法构成域，通常记作 $\mathbb{F}_p$。这是一个有限域：它恰好包含 $p$ 个元素。$p$ 的素性是至关重要的。例如，在 $\mathbb{Z}/6\mathbb{Z}$ 中，元素 $2$ 和 $3$ 满足 $2 \cdot 3 = 0$，因此二者均不可逆，该结构不构成域。

> 有限域仅当元素个数为素数幂 $p^n$ 时才存在，其中 $p$ 为某个素数，$n$ 为正整数。对于每个这样的素数幂，在同构意义下恰好存在唯一的有限域，记为 $\mathbb{F}_{p^n}$ 或 $\mathrm{GF}(p^n)$。

## 子域与域扩张

当子集 $K \subseteq F$ 在继承自 $F$ 的运算下本身构成域时，称 $K$ 为 $F$ 的子域。等价地，当 $K$ 包含 $0$ 和 $1$，且对加法、取负、乘法及非零元素取乘法逆元的运算封闭时，它为 $F$ 的子域。有理数 $\mathbb{Q}$ 构成 $\mathbb{R}$ 的子域，而后者又是 $\mathbb{C}$ 的子域。这些包含关系定义了一条域的链：

$$\mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$$

当 $K$ 为 $F$ 的子域时，域 $F$ 被称为 $K$ 的域扩张，记为 $F/K$。从此角度看，$\mathbb{C}/\mathbb{R}$ 是一个域扩张，$\mathbb{C}$ 可被视为 $\mathbb{R}$ 上以 $\\{\ 1, i \ \\}$ 为基底的二维[向量空间](../vector-spaces/)来研究。将 $F$ 视为 $K$ 上的向量空间时的维数称为扩张次数，记为 $[F : K]$。在此例中，$[\mathbb{C} : \mathbb{R}] = 2$。

## 域的特征

每个域 $F$ 都有一个与之关联的非负整数，称为域的特征，它衡量乘法单位元自加多少次才能达到零。形式上，$F$ 的特征是最小的正整数 $n$，使得：

$$\underbrace{1 + 1 + \cdots + 1}_{n} = 0$$

当不存在这样的 $n$ 时，特征定义为 $0$。域的特征总是零或素数。若特征为合数 $n = ab$，其中 $1 < a, b < n$，则可写成：

$$0 = \underbrace{1 + \cdots + 1}_{n} = \left(\underbrace{1 + \cdots + 1}_{a}\right) \cdot \left(\underbrace{1 + \cdots + 1}_{b}\right)$$

由于域没有零因子，两个因子之一必须为零，这与 $n$ 的最小性矛盾。域 $\mathbb{Q}$、$\mathbb{R}$ 和 $\mathbb{C}$ 的特征均为零。有限域 $\mathbb{F}_p$ 的特征为 $p$。

## 域同态

域同态是两个域之间的[函数](../functions/) $\varphi : F \to K$，它保持两种运算：对所有 $a, b \in F$：

$$\varphi(a + b) = \varphi(a) + \varphi(b)$$

$$\varphi(a \cdot b) = \varphi(a) \cdot \varphi(b)$$

域同态还满足 $\varphi(1_F) = 1_K$；每个域同态必为单射。为证明这一点，考察它的[核](../homomorphisms-and-isomorphisms/)：

$$\ker(\varphi) = \\{\ a \in F : \varphi(a) = 0 \ \\}$$

是 $F$ 的[理想](../rings/)。由于 $F$ 是域，它仅有的理想是 $\\{\ 0 \ \\}$ 和 $F$ 本身，而条件 $\varphi(1) = 1 \neq 0$ 排除了第二种可能。双射的域同态称为域同构。当两个域之间存在同构时，称这两个域同构，记为 $F \cong K$。同构的域在代数上无法区分：它们共享所有仅依赖于域公理的性质。

> 函数将定义域中不同元素映到陪域中不同元素时称为单射（或一一的），等价地，$\varphi(a) = \varphi(b)$ 蕴含 $a = b$；函数同时为单射和满射时称为双射，满射意味着陪域中每个元素都是定义域中至少一个元素的像。这些概念也见于[群](../groups/)、[环](../rings/)、[模](../modules/)，以及[同态与同构](../homomorphisms-and-isomorphisms/)页面。
