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
  source_hash: 625964ffa423a279fabf664a333587efb61b96146b3f0dc4589c65b1e0c0662d
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

域是一个带有加法与乘法的集合，其中每个元素都有加法逆元，每个非零元素都有乘法逆元。[有理数](../rational-numbers/)、[实数](../real-numbers/)与[复数](../complex-numbers/)都是域。在每种情形中，加法与乘法满足域公理，而减法以及除以非零元素仍然留在同一个集合中。

形式上，域是一个集合 $F$ 连同两个二元运算 $+$ 与 $\cdot$，满足以下公理：

+ $(F, +)$ 是一个阿贝尔群。加法单位元记作 $0$，元素 $a \in F$ 的加法逆元记作 $-a$。
+ $(F \setminus \{\ 0 \ \}, \cdot)$ 是一个阿贝尔群。乘法单位元记作 $1$，非零元素 $a$ 的乘法逆元记作 $a^{-1}$。
+ 乘法对加法满足分配律：对所有 $a, b, c \in F$，等式 $a \cdot (b + c) = a \cdot b + a \cdot c$ 与 $(a + b) \cdot c = a \cdot c + b \cdot c$ 成立。

在含乘法单位元的环 $R$ 中，单位元或可逆元是指元素 $u \in R$，存在某个 $v \in R$ 满足 $u \cdot v = v \cdot u = 1$。根据结合律，这个逆元是唯一的，记作 $u^{-1}$。域 $F$ 的单位元就是它的非零元素。当 $0 \neq 1$ 时，加法单位元不可能是单位元，因为对所有 $a \in F$ 都有 $0 \cdot a = 0$。

> 乘法群 $F \setminus \{\ 0 \ \}$ 的单位元是 $1$，所以公理要求 $0 \neq 1$。因此零环不是域。等价地，域是每个非零元素都可逆的含幺交换[环](../rings/)。每个域都是环，但每个环不一定是域。

## 性质

对任意 $a \in F$，乘以零满足 $a \cdot 0 = 0$。分配律给出：

$$a \cdot 0 = a \cdot (0 + 0) = a \cdot 0 + a \cdot 0$$

加法群中的消去律随后给出 $a \cdot 0 = 0$。

域不含零因子。若 $a \cdot b = 0$ 且 $a \neq 0$，则 $a$ 可逆，且有：

$$b = a^{-1} \cdot (a \cdot b) = a^{-1} \cdot 0 = 0$$

在域中，两个非零元素的乘积非零，因此可以约去非零因子。加法与乘法结构满足：

$$(-a) \cdot b = a \cdot (-b) = -(a \cdot b)$$

该等式对所有 $a, b \in F$ 成立。两个加法逆元相乘得到：

$$(-a) \cdot (-b) = a \cdot b$$

这是将前一个等式中的 $b$ 换成 $-b$ 后得到的。

## 代数层级

[群](../groups/)是配备单个二元运算的集合，该运算满足封闭性、结合律、存在单位元以及存在逆元。

[环](../rings/)具有加法与乘法。加法使集合成为阿贝尔群，而乘法满足结合律并在两侧对加法分配。乘法不一定交换：当 $n \geq 2$ 时，[矩阵](../matrices/)在 $\mathrm{M}_n(\mathbb{R})$ 中的乘法就说明了这一点；按照这里采用的约定，环也不一定含有乘法单位元。整数 $\mathbb{Z}$ 是含单位元的交换环。每个[整数](../integers/)都有加法逆元，但大多数整数在 $\mathbb{Z}$ 内没有乘法逆元，因为 $2^{-1}$ 不属于 $\mathbb{Z}$。

域是每个非零元素都有乘法逆元的含幺交换环。由此得到以下层级：

+ 群有一个运算，且每个元素都有逆元。
+ 环有两个运算，且每个元素都有加法逆元。
+ 域有两个运算，并且每个非零元素还都有乘法逆元。

> 有理数 $\mathbb{Q}$、实数 $\mathbb{R}$ 与复数 $\mathbb{C}$ 都是域。整数 $\mathbb{Z}$ 是环而非域，因为除法在其中不封闭。[向量空间](../vector-spaces/)的标量来自域，而[模](../modules/)的标量来自环。

## 示例

有理数集合 $\mathbb{Q}$ 配备通常的加法与乘法，是包含整数的最小域。每个非零有理数 $p/q$ 都有乘法逆元 $q/p$，且所有域公理均成立。

实数集合 $\mathbb{R}$ 是扩张 $\mathbb{Q}$ 的域。它具有与域运算相容的序并且是完备的，因此每个非空且有上界的子集都有[最小上界](../supremum-and-infimum/)。[实数的性质](../properties-of-real-numbers/)页面列出了 $\mathbb{R}$ 的域公理并给出了具体例子。

复数集合 $\mathbb{C}$ 是扩张 $\mathbb{R}$ 的域。它是代数闭的，而 $\mathbb{R}$ 不是。[代数学基本定理](../roots-of-a-polynomial/)指出，每个系数在 $\mathbb{C}$ 中的非常数多项式都在 $\mathbb{C}$ 中有一个根。

环 $\mathbb{Z}$ 有单位元 $1$，但并非每个非零整数都有逆元。若整数 $a$ 与 $b$ 满足 $ab = 1$，则 $|a||b| = 1$，从而 $|a| = |b| = 1$。因此 $1$ 与 $-1$ 是 $\mathbb{Z}$ 中唯一的单位元，$\mathbb{Z}$ 不是域。

对任意域 $K$，[多项式环](../polynomials/) $K[x]$ 是另一个含单位元但不是域的交换环。它的单位元恰好是非零常数多项式。若非零多项式 $f$ 与 $g$ 满足 $fg = 1$，则：

$$\deg(fg) = \deg(f) + \deg(g) = 0$$

两个次数都必须为零。正次数多项式在 $K[x]$ 中不可能有乘法逆元。

- - -

对任意素数 $p$，集合 $\mathbb{Z}/p\mathbb{Z} = \{\ [0], [1], \ldots, [p - 1] \ \}$ 配以[模](../modulo-operator/) $p$ 的加法与乘法，是域 $\mathbb{F}_p$。它有 $p$ 个元素。若 $[a]$ 非零，则 $p$ 不整除 $a$，所以 $\gcd(a,p) = 1$。贝祖等式给出整数 $r$ 与 $s$，使得 $ar + ps = 1$。将这个等式模 $p$ 化简便得到 $[a][r] = [1]$，所以 $[r]$ 是 $[a]$ 的逆元。合数模数不一定给出域。在 $\mathbb{Z}/6\mathbb{Z}$ 中，元素 $[2]$ 与 $[3]$ 满足 $[2][3] = [0]$，所以二者都不可逆，$\mathbb{Z}/6\mathbb{Z}$ 不是域。

> 有限域仅当元素个数为素数幂 $p^n$ 时才存在，其中 $p$ 为素数，$n$ 为正整数。对于每个这样的素数幂，在同构意义下恰好存在唯一的有限域，记为 $\mathbb{F}_{p^n}$ 或 $\mathrm{GF}(p^n)$。

## 子域与域扩张

子集 $K \subseteq F$ 在继承自 $F$ 的运算下本身构成域时，称为 $F$ 的子域。等价地，当 $K$ 包含 $0$ 与 $1$，且对加法、取负、乘法以及对非零元素取乘法逆元封闭时，$K$ 是 $F$ 的子域。有理数 $\mathbb{Q}$ 是 $\mathbb{R}$ 的子域，而它本身是 $\mathbb{C}$ 的子域。这些包含关系定义了一条域的链：

$$\mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$$

当 $K$ 是 $F$ 的子域时，域 $F$ 是 $K$ 的域扩张，记作 $F/K$。扩张 $\mathbb{C}/\mathbb{R}$ 是 $\mathbb{R}$ 上的二维[向量空间](../vector-spaces/)，其基为 $\{\ 1, i \ \}$。扩张的次数 $[F : K]$ 是 $F$ 作为 $K$ 上向量空间的维数。因此 $[\mathbb{C} : \mathbb{R}] = 2$。

## 域的特征

每个域 $F$ 都有一个特征，即由乘法单位元的重复加法决定的非负整数。如果将 $1$ 加上正次数，结果为零，则特征是使其成立的最小正整数 $n$：

$$\underbrace{1 + 1 + \cdots + 1}_{n} = 0$$

当不存在这样的 $n$ 时，特征定义为 $0$。域的特征总是零或素数。若特征是合数 $n = ab$，其中 $1 < a, b < n$，则可以写成：

$$0 = \underbrace{1 + \cdots + 1}_{n} = \left(\underbrace{1 + \cdots + 1}_{a}\right) \cdot \left(\underbrace{1 + \cdots + 1}_{b}\right)$$

由于域没有零因子，两个因子之一必须为零，这与 $n$ 的最小性矛盾。域 $\mathbb{Q}$、$\mathbb{R}$ 与 $\mathbb{C}$ 的特征均为零。有限域 $\mathbb{F}_p$ 的特征为 $p$。

## 域同态

域同态是两个域之间保持两种运算的[函数](../functions/) $\varphi : F \to K$：对所有 $a, b \in F$：

$$\varphi(a + b) = \varphi(a) + \varphi(b)$$

$$\varphi(a \cdot b) = \varphi(a) \cdot \varphi(b)$$

定义还要求 $\varphi(1_F) = 1_K$。每个域同态都是单射。为此考察[核](../homomorphisms-and-isomorphisms/)：

$$\ker(\varphi) = \{\ a \in F : \varphi(a) = 0 \ \}$$

它是 $F$ 的[理想](../rings/)。由于 $F$ 是域，它的唯一理想是 $\{\ 0 \ \}$ 与 $F$ 本身，而条件 $\varphi(1) = 1 \neq 0$ 排除了后一种可能。既是双射的域同态称为域同构。当两个域之间存在同构时，称它们同构，记作 $F \cong K$。同构的域具有相同的代数性质。

> 当函数满足 $\varphi(a) = \varphi(b)$ 蕴含 $a = b$ 时，它是单射或一一映射。当函数既单射又满射时，它是双射。因此陪域中的每个元素恰好有一个原像。[同态与同构](../homomorphisms-and-isomorphisms/)页面给出了[群](../groups/)、[环](../rings/)与[模](../modules/)的相应定义。
