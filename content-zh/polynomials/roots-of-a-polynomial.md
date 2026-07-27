---
title: 多项式的根
title_en: Roots of a Polynomial
source: https://algebrica.org/roots-of-a-polynomial/
license: CC BY-NC 4.0
tags:
  - fundamental-theorem-of-algebra
  - multiplicity
  - polynomial
  - rational-root-theorem
  - roots
  - vieta-formulas
translation:
  status: current
  source_hash: 79fcc2576ca35c508caf59bd3f6aeb80caa6ca664c79ef50da97bc2853e3a255
  translator: omp
  updated: "2026-07-25T14:54:27.043Z"
---
## 定义

设 $p(x)$ 是系数取自域 $\mathbb{F}$（通常为 $\mathbb{R}$ 或 $\mathbb{C}$）的[多项式](../polynomials/)。$p$ 的根，或称零点，是指满足下列条件的任意元素 $r \in \mathbb{F}$：

$$
p(r) = 0
$$

给定形如以下的多项式：

$$
p(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0
$$

其中 $a_n \neq 0$，元素 $r$ 为根当且仅当代入 $x = r$ 后得到：

$$p(r) = a_n r^n + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0$$

「根」与「零点」两术语互换使用。

对于实系数多项式 $p : \mathbb{R} \to \mathbb{R}$，其实根是其图像与 $x$ 轴的交点。根的重数会影响图像在该点附近的局部形态。在重数为一的单根处，图像干净地穿过 $x$ 轴且不与之相切。

![图 1](/assets/polynomials/svg/roots-of-a-polynomial-1.zh.svg)

对于偶数重数的实根，图像与 $x$ 轴相切但不穿过。由于当 $m$ 为偶数时 $(x - r)^m \geq 0$，多项式在 $r$ 处不[变号](../sign-analysis-in-inequalities/)，图像反弹回轴的同一侧。

![图 2](/assets/polynomials/svg/roots-of-a-polynomial-2.zh.svg)

对于奇数重数大于一（即 $m \geq 3$）的实根，图像穿过该轴但在交点处显得更为平缓。随着重数增大，这种平缓愈加明显，使曲线呈现[类似拐点](../maximum-minimum-and-inflection-points/)的形态。

![图 3](/assets/polynomials/svg/roots-of-a-polynomial-3.zh.svg)

这些性质源于如下的局部因式分解：

$$
p(x) = (x - r)^m q(x)
$$

其中 $q(r) \neq 0$。由于 $q$ 在 $r$ 处[连续](../continuous-functions/)且不为零，它在 $r$ 的某个邻域内保持常号，故 $p(x)$ 在 $r$ 附近的符号完全由因子 $(x - r)^m$ 决定。

+ 当 $m$ 为奇数时，$(x - r)^m$ 在 $x$ 经过 $r$ 时变号，故 $p$ 穿过该轴。
+ 当 $m$ 为偶数时，$(x - r)^m \geq 0$ 在 $r$ 两侧同号，故 $p$ 不变号，图像回到轴的同一侧。

在任意域上，次数为 $n$ 的非零多项式至多有 $n$ 个互异的根。证明对 $n$ 进行归纳。非零常数没有根。若一个正次数多项式没有根，结论立即成立。否则，取一个根 $r$。由因式定理得 $p(x)=(x-r)q(x)$，其中 $\deg q=n-1$。任何其他根 $s\neq r$ 都满足 $0=(s-r)q(s)$，从而 $q(s)=0$。归纳假设将 $q$ 的根数限定为至多 $n-1$ 个，再加上 $r$，可知 $p$ 至多有 $n$ 个根。

按重数计的同一计数仍然成立。若互异的根为 $r_1,\ldots,r_k$，相应的重数为 $m_1,\ldots,m_k$，反复应用因式定理可知 $(x-r_1)^{m_1}\cdots(x-r_k)^{m_k}$ 整除 $p(x)$。因此 $m_1+\cdots+m_k\leq n$。

> 次数不超过 $n$ 的两个不同的多项式不可能在多于 $n$ 个点处取相同值。若 $p(x) - q(x)$ 的次数不超过 $n$ 且在 $n + 1$ 个点处为零，则 $p \equiv q$。

## 根的重数

重数的概念通过量化一个给定值作为根的次数，对根的定义加以细化。设 $p(x)$ 是系数取自域 $\mathbb{F}$ 的多项式，$r \in \mathbb{F}$ 是 $p(x)$ 的一个根。$r$ 的重数是指最大的正整数 $m$，使得 $(x - r)^m$ 在 $\mathbb{F}[x]$ 中整除 $p(x)$，而 $(x - r)^{m+1}$ 不整除。等价地，$p(x)$ 具有因式分解：

$$
p(x) = (x - r)^m q(x)
$$

其中 $q(r) \neq 0$。多项式 $q(x)$ 汇集了 $p(x)$ 的所有其余因式，而条件 $q(r) \neq 0$ 保证指数 $m$ 不能再增大。

重数为 1 的根称为单根。重数大于或等于 2 的根称为重根，最低几种情形有专门名称：重数为 2 的根称为二重根，重数为 3 的根称为三重根。一个 $n$ 次多项式所有根的重数之和不超过 $n$。当等号成立时，该多项式在 $\mathbb{F}$ 上可完全分解为一次因式：

$$
p(x) = a_n (x - r_1)^{m_1} (x - r_2)^{m_2} \cdots (x - r_k)^{m_k}
$$

其中 $m_1 + m_2 + \cdots + m_k = n$。在复数域上，代数基本定理断言这样的完全分解总是存在。

在特征为 0 的域（如实数域或复数域）上，重数还可用 $p(x)$ 的[导数](../derivatives/)来刻画。元素 $r$ 是 $p(x)$ 的 $m$ 重根，当且仅当：

$$
p(r) = p'(r) = p''(r) = \cdots = p^{(m-1)}(r) = 0
$$

且

$$
p^{(m)}(r) \neq 0
$$

逐次求导给出了一种构造性地判定已知根重数的方法。将各阶导数在 $r$ 处求值，第一个非零导数的阶数即为该根的重数。

> 对于实系数多项式的实根，上述导数刻画解释了前文所述的图形行为。在单根处，多项式为零但导数不为零，因此图像以非零斜率穿越 $x$ 轴。在 $m \geq 2$ 重根处，前 $m-1$ 阶导数也在 $r$ 处为零，且随着 $m$ 增大，图像在该交点处变得越来越平坦。

## 有理根定理

给定一个整系数多项式：

$$
p(x) = a_n x^n + \cdots + a_0 \in \mathbb{Z}[x]
$$

[有理根定理](../polynomial-equations/)确定一个有限的有理根候选集合。若 $r = s/q$（最简形式，其中 $s, q \in \mathbb{Z}$、$q > 0$）是 $p(x)$ 的根，则必有 $s \mid a_0$ 且 $q \mid a_n$。

该定理将有理根的搜索化归为一个有限的分数集合，其中每个分数都可以通过直接代入或[综合除法](../synthetic-division/)进行验证。

## 代数学基本定理

在[复数](../complex-numbers-introduction/)域 $\mathbb{C}$ 中，每个非常数多项式都至少有一个根。反复应用因式定理，任何 $n \geq 1$ 次多项式在 $\mathbb{C}$ 上都可以完全分解为一次因式：

$$
p(x) = a_n (x - r_1)^{m_1}(x - r_2)^{m_2} \cdots (x - r_k)^{m_k}
$$

其中 $m_1 + m_2 + \cdots + m_k = n$。按重数计，$n$ 次多项式在 $\mathbb{C}$ 中恰有 $n$ 个根。[唯一分解定理](../unique-factorization-of-polynomials/)表明，一次因式的多重集，因而赋予每个复根的重数，是唯一确定的。这一性质刻画了 $\mathbb{C}$ 作为代数闭[域](../fields/)的特征。

在 $\mathbb{R}$ 上，实系数多项式的复根成共轭对出现。若 $r = \alpha + \beta i$（其中 $\beta \neq 0$）是 $p \in \mathbb{R}[x]$ 的根，则 $\bar{r} = \alpha - \beta i$ 也是根，且两个因式合并为 $\mathbb{R}$ 上的不可约二次因式：

$$
(x - r)(x - \bar{r}) = x^2 - 2\alpha x + (\alpha^2 + \beta^2)
$$

因此每个奇数次实系数多项式都至少有一个实根。为建立根与系数的关系，展开乘积：

$$
a_n(x - r_1)(x - r_2)\cdots(x - r_n)
$$

将此乘积与标准形式比较：

$$
a_n x^n + a_{n-1}x^{n-1} + \cdots + a_0
$$

比较系数得到[韦达公式](../vieta-formulas/)，它把每个系数表示为根的初等对称多项式。特别地：

$$
r_1 + r_2 + \cdots + r_n = \frac{-a_{n-1}}{a_n}
$$

$$
r_1 r_2 \cdots r_n = \frac{(-1)^n a_0}{a_n}
$$

二次情形在[三项式](../trinomials/)页面中有详细讨论。

## 求根：方法综述

对于 1 次和 2 次的多项式，有初等的精确公式。一次多项式 $ax + b$ 有唯一的根 $x = -b/a$。对于二次多项式 $ax^2 + bx + c$，其根由[求根公式](../quadratic-formula/)给出：

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

量 $\Delta = b^2 - 4ac$ 称为判别式。

+ 若 $\Delta > 0$，则该多项式有两个互异的实根。
+ 若 $\Delta = 0$，则它有一个二重实根。
+ 若 $\Delta < 0$，则它有一对共轭复根。

> 3 次（卡尔达诺公式）和 4 次（费拉里方法）的多项式也存在闭式解，但其推导要复杂得多。对于更高次的多项式，这一问题需要更高级的方法。

- - -
多项式的根恰好就是对应的[多项式方程](../polynomial-equations/) $p(x) = 0$ 的解，上述方法对两种情形同样适用。

[部分分式分解](../partial-fraction-decomposition/)用到分母 $Q(x)$ 的根及其重数。每个单根对应一个线性项，而重数为 $m$ 的根则对应分母的幂从 $1$ 到 $m$ 的若干项。
