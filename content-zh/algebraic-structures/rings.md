---
title: 环
title_en: Rings
source: https://algebrica.org/rings/
license: CC BY-NC 4.0
tags:
  - abelian-group
  - algebraic-structures
  - commutative-ring
  - distributivity
  - homomorphism
  - ideal
  - integral-domain
  - polynomial-ring
  - ring-theory
  - subring
  - zero-divisor
translation:
  status: current
  source_hash: b264306bddef5cbce3c5b44bfa7311f308c3fdf7eba2423ed36dbbb4f96867b3
  translator: omp
  updated: "2026-07-23T05:13:37.793Z"
---
## 定义

环是一种代数结构，它通过引入第二个二元运算来推广[群](../groups/)的概念。这一概念源于如下观察：若干基本对象，例如[整数](../integers/)、实系数的[多项式](../polynomials/)以及给定阶数的[方阵](../matrices/)，都具有共同的模式。它们都允许加法与乘法两种运算，两种运算以可预期的方式相互作用，但乘法未必交换，也未必存在逆元。环是一个集合 $R$ 连同两个二元运算 $+$ 与 $\cdot$（加法与乘法），满足以下公理：

+ $(R, +)$ 是一个阿贝尔群。存在元素 $0 \in R$ 使得对所有 $a \in R$ 有 $a + 0 = a$，且对每个 $a \in R$ 都存在 $-a \in R$ 满足 $a + (-a) = 0$。
+ 乘法结合律：对所有 $a, b, c \in R$，等式 $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ 成立。
+ 分配律：对所有 $a, b, c \in R$，等式 $a \cdot (b + c) = a \cdot b + a \cdot c$ 与 $(a + b) \cdot c = a \cdot c + b \cdot c$ 成立。

当对所有 $a, b \in R$ 有 $a \cdot b = b \cdot a$ 时，环 $(R, +, \cdot)$ 称为交换环。当存在乘法单位元 $1 \in R$ 使得对所有 $a \in R$ 有 $1 \cdot a = a \cdot 1 = a$ 时，该环称为含幺环。

## 性质

由公理可直接推出若干结论。对任意 $a \in R$，用加法单位元作乘法满足 $a \cdot 0 = 0 \cdot a = 0$。这是分配律的结果：

$$a \cdot 0 = a \cdot (0 + 0) = a \cdot 0 + a \cdot 0$$

再利用 $(R, +)$ 的群结构从两边消去 $a \cdot 0$。类似地，对所有 $a, b \in R$ 以下等式成立：

$$(-a) \cdot b = a \cdot (-b) = -(a \cdot b)$$

特别地，当 $R$ 含幺元时有 $(-1) \cdot a = -a$。这些符号法则在任何环中都成立。

非零元素 $a \in R$ 称为零因子，是指存在非零元素 $b \in R$ 使得 $a \cdot b = 0$ 或 $b \cdot a = 0$。零因子是区分环与域的一个特征：在[域](../fields/)中，任何非零元素都不能是零因子。满足 $1 \neq 0$ 且不含零因子的含幺交换环称为整环。

## 代数层级

群是装备了一个二元运算的集合，该运算满足封闭性、结合律、存在单位元以及存在逆元。

环通过引入第二个运算——乘法——来推广这一框架；乘法要求满足结合律并对加法满足分配律，但不一定交换，也不要求存在逆元。

在含幺交换环上再附加「每个非零元素都有乘法逆元」的要求时，该结构就变为[域](../fields/)。这三种结构构成一条刚性递增的链：

+ 群带有一个运算，且存在逆元。
+ 环带有两个运算，仅加法保证存在逆元。
+ 域带有两个运算，加法以及乘法下所有非零元素都保证存在逆元。

> 整数 $\mathbb{Z}$ 是「是环而非域」最自然的例子：每个整数都有加法逆元，但 $2^{-1}$ 不属于 $\mathbb{Z}$。相比之下，[有理数](../rational-numbers/) $\mathbb{Q}$ 构成一个域。同一层级在线性代数中再次出现：取自环的标量生成[模](../modules/)，取自域的标量生成[向量空间](../vector-spaces/)。

## 示例

整数集合 $\mathbb{Z}$ 配以通常的加法与乘法，是含幺交换环的最简单例子。加法单位元是 $0$，乘法单位元是 $1$，每个整数都有加法逆元。整数构成一个整环，因为两个非零整数的乘积总是非零的。

实系数多项式的集合，记作 $\mathbb{R}[x]$，在多项式的通常加法与乘法下构成一个含幺交换环。加法单位元是零多项式，乘法单位元是常数多项式 $1$。这个环也是一个整环。

- - -

设 $n$ 为正整数。集合 $\mathbb{Z}/n\mathbb{Z} = \\{\ 0, 1, \ldots, n - 1 \ \\}$ 配以 [模](../modulo-operator/) $n$ 的加法与乘法，构成一个含幺交换环。例如，在 $\mathbb{Z}/6\mathbb{Z}$ 中有 $2 \cdot 3 = 0$，故 $2$ 与 $3$ 是零因子，$\mathbb{Z}/6\mathbb{Z}$ 不是整环。然而当 $n$ 为素数时，$\mathbb{Z}/n\mathbb{Z}$ 不含零因子，且事实上是一个域。剩余类的算术，连同具体实现这些运算的加法表与乘法表，在介绍[取模运算符](../modulo-operator/)的页面中讨论。

设 $F$ 为一个域，$n$ 为正整数。所有元素取自 $F$ 的 $n \times n$ [矩阵](../matrices/)的集合 $\mathrm{M}_n(F)$，在矩阵加法与乘法下构成一个环。加法单位元是零矩阵，乘法单位元是单位矩阵 $I_n$。当 $n \geq 2$ 时，这个环不是交换环，因为矩阵乘法一般不可交换，且它含有零因子。

## 子环

环 $R$ 的子集 $S$，当 $S$ 在继承自 $R$ 的运算下本身构成一个环时，称为子环。非空子集 $S \subseteq R$ 是 $R$ 的子环，当且仅当它对减法与乘法封闭，即对所有 $a, b \in S$ 有 $a - b \in S$ 与 $a \cdot b \in S$。对减法的封闭性等价于要求 $S$ 是 $(R, +)$ 的子群，而对乘法的封闭性则保证第二个运算在 $S$ 上也是良定义的。每个环 $R$ 都有两个典范子环：

+ 平凡子环 $\\{\ 0 \ \\}$。
+ $R$ 自身。

当该环不是零环时，二者不同。任何异于 $R$ 的子环称为真子环。

作为一个例子，偶整数集合 $2\mathbb{Z} = \\{\ \ldots, -4, -2, 0, 2, 4, \ldots \ \\}$ 是 $(\mathbb{Z}, +, \cdot)$ 的子环。对任意两个偶整数 $a = 2m$ 与 $b = 2k$，有 $a - b = 2(m - k) \in 2\mathbb{Z}$ 与 $a \cdot b = 4mk \in 2\mathbb{Z}$，故两个条件均满足。集合 $2\mathbb{Z}$ 不含 $\mathbb{Z}$ 的乘法单位元 $1$，这说明含幺环的子环本身不一定是含幺环。

## 理想

理想是允许构造商环的子集，其作用类似于群论中的正规子群。子集 $I \subseteq R$ 称为 $R$ 的左理想，当它在加法下构成一个子群（即对加法与减法均封闭），并关于 $R$ 中元素的左乘法封闭，即对所有 $a \in I$ 和 $r \in R$，元素 $r \cdot a$ 都属于 $I$。右理想通过右乘法类似地定义。同时既是左理想又是右理想的子集称为双边理想，简称理想。

固定整数 $n$ 的所有倍数构成的集合 $n\mathbb{Z}$ 是 $\mathbb{Z}$ 的理想：它对加减法封闭（因而是加法子群），且对任意 $a = nk \in n\mathbb{Z}$ 和任意 $r \in \mathbb{Z}$ 有：

$$r \cdot a = n(rk) \in n\mathbb{Z}$$

> 理想恰好就是环同态的核，这一事实使它们成为构造商环以及通过环的同态像集研究环结构的自然工具。

## 环同态与同构

环同态是两个环之间保持两种运算的[函数](../functions/)。给定两个环 $(R, +, \cdot)$ 和 $(S, \oplus, \odot)$，函数 $\varphi : R \to S$ 是环同态当对所有 $a, b \in R$ 满足：

$$\varphi(a + b) = \varphi(a) \oplus \varphi(b)$$

$$\varphi(a \cdot b) = \varphi(a) \odot \varphi(b)$$

第一个条件要求 $\varphi$ 是加法群之间的[群同态](../groups/)，第二个条件要求它保持乘法。作为推论，$\varphi$ 将 $R$ 的加法单位元映射到 $S$ 的加法单位元。当两个环都是含幺环时，通常还额外要求 $\varphi(1_R) = 1_S$。环同态 $\varphi : R \to S$ 的[核](../homomorphisms-and-isomorphisms/)与像集和群的情形一样定义：

$$\ker(\varphi) = \\{\ a \in R : \varphi(a) = 0_S \ \\}$$

$$\mathrm{im}(\varphi) = \\{\ \varphi(a) : a \in R \ \\}$$

核始终是 $R$ 的理想，像集始终是 $S$ 的子环。一个同态是单射当且仅当它的核只包含 $R$ 的加法单位元。

- - -

既是单射又是满射的环同态称为环同构。两个环称为同构的，记作 $R \cong S$，当它们之间存在一个同构。同构的环在结构上完全相同，并共享所有内在于其环结构的性质。

作为例子，考虑映射 $\varphi : \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$，其定义为 $\varphi(a) = a \bmod n$。这个映射保持两种运算，因为和的剩余类等于 $\mathbb{Z}/n\mathbb{Z}$ 中剩余类的和，乘积的情况同理。因此它是一个环同态，其核恰好是 $n\mathbb{Z}$，即 $n$ 的倍数构成的理想。

> 再加上每个非零元素均可逆的要求，就将含幺交换环提升为[域](../fields/)，这是发展线性代数的结构，也是[向量空间](../vector-spaces/)理论赖以建立的基础。关于各种标准代数结构之间保持结构的映射的一般框架，在[同态与同构](../homomorphisms-and-isomorphisms/)页面中有详细讨论。
