---
title: 多项式的乘法
title_en: Multiplying Polynomials
source: https://algebrica.org/multiplying-polynomials/
license: CC BY-NC 4.0
tags:
  - distributive-property
  - foil-method
  - multiplication-of-polynomials
  - notable-products
  - polynomial
  - polynomial-degree
  - polynomial-ring
translation:
  status: current
  source_hash: 6dfb153ad340fc43341bb168a3c1c0b172d29cb83ab65809ae27eccea2f20a09
  translator: omp
  updated: "2026-07-25T14:03:47.281Z"
---
## 定义与基本性质

**定义 1。** 设 $R$ 是一个交换[环](../rings/)，$R[x]$ 是 $R$ 上一元[多项式](../polynomials/)构成的环。考虑次数分别为 $n$ 和 $m$ 的两个多项式：

$$
P(x) = \sum_{i=0}^{n} a_i x^i \qquad Q(x) = \sum_{j=0}^{m} b_j x^j
$$

乘积 $P(x) \cdot Q(x)$ 是这样一个多项式，其 $x^k$ 的系数由对所有满足 $i + j = k$ 的数对 $(i, j)$ 求乘积 $a_i b_j$ 之和得到：

$$
(P \cdot Q)(x) = \sum_{k=0}^{n+m} \left( \sum_{i=0}^{k} a_i b_{k-i} \right) x^k
$$

此公式即系数数列的柯西卷积。它独立于 $P$ 和 $Q$ 次数之外的零系数如何书写来定义乘积。

以 $k$ 为下标的系数汇集了对 $P$ 中次数为 $i$ 的项与 $Q$ 中次数为 $k - i$ 的项配对所产生的、$k$ 次项的一切贡献。

约定 $a_i = 0$（对 $i > n$）与 $b_j = 0$（对 $j > m$）将求和范围扩展到每个多项式实际次数之外而不改变结果。

> 配合[加法](../adding-and-subtracting-polynomials/)与此乘积，$R[x]$ 构成一个环。若 $R$ 是有单位元的交换环，则 $R[x]$ 也是有单位元的交换环。若 $R$ 是整环，则 $R[x]$ 也是整环。

- - -
乘积的次数满足如下恒等式：

$$
\deg(P \cdot Q) = \deg P + \deg Q
$$

前提是两个因子都不是零多项式。该恒等式在任意整环中成立，因为 $P \cdot Q$ 的首项系数是乘积 $a_n b_m$，只要 $a_n$ 与 $b_m$ 都非零，它就非零。约定 $\deg 0 = -\infty$ 将此关系推广到两个因子之一为零的情形，因为对任意有限 $k$ 都有 $-\infty + k = -\infty$。

## 逐项相乘

实际计算乘积并不需要显式写出二重求和：反复应用分配律，将一个多项式的每一项乘以另一个多项式的每一项，再合并同类项，即可得到相同的结果。

给定 $P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_0$ 和 $Q(x) = b_m x^m + b_{m-1} x^{m-1} + \cdots + b_0$，乘积展开为形如 $a_i x^i \cdot b_j x^j = a_i b_j x^{i+j}$ 的成对乘积的有限和。以这种原始形式产生的单项式数目为 $(n+1)(m+1)$；把次数相同的项合并后，至多化为 $n + m + 1$ 项，从 $0$ 到 $n + m$ 的每一个整数次数各对应一项。

适合用于[多项式的和与差](../adding-and-subtracting-polynomials/)的竖式排列，在将偏积按次数排列后即可推广到乘法。$P$ 的每一项与 $Q$ 生成一行偏积；随后各行按次数对齐，逐列相加，做法与加法完全相同。

## 多项式乘法的性质

多项式乘法的结构性质继承自底层环 $R$ 的乘法。由于乘积是按系数通过卷积定义的，$R$ 中乘法所具有的相应性质会传递到 $R[x]$ 中。下面四条性质刻画了 $(R[x], \cdot)$ 的乘法行为，其中单位元的存在须额外假设 $R$ 有单位元。

第一条是结合律。对任意三个多项式 $P(x)$、$Q(x)$、$S(x)$：

$$
\bigl(P(x) \cdot Q(x)\bigr) \cdot S(x) = P(x) \cdot \bigl(Q(x) \cdot S(x)\bigr)
$$

第二条是乘法单位元的存在性。若 $R$ 有单位元 $1$，则常数多项式 $1 \in R[x]$ 满足：

$$
P(x) \cdot 1 = 1 \cdot P(x) = P(x)
$$

对任意多项式 $P(x)$ 成立。

- - -
第三条性质是对加法的左、右分配律：

$$
\begin{align}
P(x) \cdot \bigl(Q(x) + S(x)\bigr) &= P(x) \cdot Q(x) + P(x) \cdot S(x) \\[6pt]
\bigl(P(x) + Q(x)\bigr) \cdot S(x) &= P(x) \cdot S(x) + Q(x) \cdot S(x)
\end{align}
$$

第四条是交换律，只要底层环 $R$ 是交换环就成立。对任意一对多项式：

$$
P(x) \cdot Q(x) = Q(x) \cdot P(x)
$$

若 $R$ 是含幺交换环，则连同「[多项式的和与差](../adding-and-subtracting-polynomials/)」一节中讨论过的 $(R[x], +)$ 的阿贝尔群结构，上述四条性质使得 $(R[x], +, \cdot)$ 也成为含幺交换环。

> 与加法不同，多项式乘法并非通过合并同次系数来定义。$x^k$ 的系数的贡献来自一切满足 $i + j = k$ 的次数对 $(i, j)$，正是这一点把乘积与逐系数运算区分开来。

## 例 1

考虑以下次数为 $2$ 的多项式：

$$
P(x) = 2x^2 + 3x - 1
$$

$$
Q(x) = x^2 - 2x + 4
$$

将 $P(x)$ 的每一项分配到 $Q(x)$ 上来计算乘积：

$$
\begin{align}
P(x) \cdot Q(x) &= 2x^2 (x^2 - 2x + 4) \\[6pt]
                &\quad + 3x (x^2 - 2x + 4) \\[6pt]
                &\quad + (-1)(x^2 - 2x + 4)
\end{align}
$$

展开每一行得到：

$$
\begin{align}
2x^2 (x^2 - 2x + 4) &= 2x^4 - 4x^3 + 8x^2 \\[6pt]
3x (x^2 - 2x + 4)   &= 3x^3 - 6x^2 + 12x \\[6pt]
(-1)(x^2 - 2x + 4)  &= -x^2 + 2x - 4
\end{align}
$$

将各部分积按次数对齐，并逐列相加系数，得到：

$$
\begin{align}
P(x) \cdot Q(x) &= 2x^4 + (-4 + 3)x^3 + (8 - 6 - 1)x^2 + (12 + 2)x + (-4) \\[6pt]
                &= 2x^4 - x^3 + x^2 + 14x - 4
\end{align}
$$

$P(x)$ 和 $Q(x)$ 的次数均为 $2$，因此在因子非零且系数环为整环的条件下，乘积的次数为 $4$，与恒等式 $\deg(P \cdot Q) = \deg P + \deg Q$ 一致。

## 例 2

当其中一个因子是[单项式](../monomials/)时，乘法归结为分配律的一次应用：将另一个多项式的每一项乘以该单项式即可，无需合并同类项，因为各部分积的次数两两不同。考虑：

$$
P(x) = 3x^2
$$

$$
Q(x) = x^3 - 5x^2 + 2x - 7
$$

将 $Q(x)$ 的每一项乘以 $3x^2$，得到：

$$
\begin{align}
P(x) \cdot Q(x) &= 3x^2 \cdot x^3 + 3x^2 \cdot (-5x^2) + 3x^2 \cdot 2x + 3x^2 \cdot (-7) \\[6pt]
                &= 3x^5 - 15x^4 + 6x^3 - 21x^2
\end{align}
$$

在因子非零且系数环为整环的条件下，结果的次数为 $5 = 2 + 3$，与一般规则一致。

## 例 3

当一次项系数互为相反数时，乘积中的中间次项成对抵消，而最高次项得以保留。考虑以下多项式：

$$
P(x) = x^2 + x + 1
$$

$$
Q(x) = x^2 - x + 1
$$

将 $P(x)$ 的每一项分配到 $Q(x)$ 上，得到：

$$
\begin{align}
P(x) \cdot Q(x) &= x^2(x^2 - x + 1) + x(x^2 - x + 1) + 1 \cdot (x^2 - x + 1) \\[6pt]
                &= (x^4 - x^3 + x^2) + (x^3 - x^2 + x) + (x^2 - x + 1) \\[6pt]
                &= x^4 + x^2 + 1
\end{align}
$$

中间次数的项成对抵消，只留下 $x^4$、$x^2$ 和 $1$。所得恒等式：

$$
(x^2 + x + 1)(x^2 - x + 1) = x^4 + x^2 + 1
$$

是专门页面中讨论的[乘法公式](../notable-products/)之一，在该页面上，$x^4 + x^2 + 1$ 的因式分解由两平方差导出。

## 两个二项式的乘法与 FOIL 法

对于两个[二项式](../binomials/)，FOIL 法是分配律的一种紧凑形式。其名称是 First（首项）、Outer（外项）、Inner（内项）、Last（末项）的缩写。对于形如 $(a+b)(c+d)$ 的乘积：

$$
(a + b)(c + d) = ac + ad + bc + bd
$$

展开式中的四个单项式依次对应两个二项式的首项之积、外项之积、内项之积和末项之积。该方法是对两个二项式之积系统应用分配律的一种记忆口诀。

它不适用于超过两项的因子，此时必须改用将一个多项式的每一项乘以另一个多项式每一项的一般方法。有关带例题的详细讨论，见[二项式](../binomials/)条目。

## 乘法公式

若干反复出现的多项式恒等式属于[乘法公式](../notable-products/)，其中包括二项式的平方与立方：

$$
(a + b)^2 = a^2 + 2ab + b^2
$$

$$
(a + b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3
$$

以及两平方差：

$$
a^2 - b^2 = (a + b)(a - b)
$$

[二项式定理](../binomial-theorem/)是 $(a+b)^n$ 当 $n$ 为非负整数时的一般展开。其系数为[二项式系数](../binomial-coefficient/)。专门的页面从分配律出发推导该公式，并列出其标准特殊情形。

## 多元多项式的乘法

乘积的定义可以几乎不加修改地推广到含多个不定元的多项式。

**定义 2.** 设 $R[x_1, \dots, x_n]$ 为交换环 $R$ 上 $n$ 个不定元的多项式环。该环中的多项式是形如 $a_{\alpha} x_1^{\alpha_1} \cdots x_n^{\alpha_n}$ 的单项式的有限和，以非负整数构成的多重指标 $\alpha = (\alpha_1, \dots, \alpha_n)$ 为下标。

给定这样的两个多项式 $P = \sum_{\alpha} a_{\alpha} x^{\alpha}$ 与 $Q = \sum_{\beta} b_{\beta} x^{\beta}$，其乘积定义为：

$$
P \cdot Q = \sum_{\gamma} \left( \sum_{\alpha + \beta = \gamma} a_{\alpha} b_{\beta} \right) x^{\gamma}
$$

对 $\alpha + \beta = \gamma$ 的求和遍历所有按分量相加得到 $\gamma$ 的多重指标对。该构造在 $n = 1$ 时化为一元的情形，并具有与之相同的代数性质：结合律、交换律（当 $R$ 为交换环时）、分配律，以及当系数环具有单位元时乘法单位元的存在。当系数环为整环且因子非零时，乘积的总次数等于各因子总次数之和，零多项式沿用相同的约定。

- - -

作为具体例子，考虑以下两个二元多项式：

$$
P(x, y) = x + 2y
$$

$$
Q(x, y) = x^2 - xy + y^2
$$

将 $P$ 的每一项对 $Q$ 进行分配，得到：

$$
\begin{align}
P(x, y) \cdot Q(x, y) &= x(x^2 - xy + y^2) + 2y(x^2 - xy + y^2) \\[6pt]
                      &= x^3 - x^2 y + x y^2 + 2x^2 y - 2x y^2 + 2 y^3 \\[6pt]
                      &= x^3 + x^2 y - x y^2 + 2 y^3
\end{align}
$$

$P$ 的总次数为 $1$，$Q$ 的总次数为 $2$，因此乘积的总次数为 $3$，符合预期。

## 乘法与因式分解

多项式乘法的逆问题是[因式分解](../unique-factorization-of-polynomials/)。给定多项式 $P(x)$，目标是确定较低次数的多项式 $P_1(x), \dots, P_k(x)$，使其乘积等于 $P(x)$。乘法与因式分解通过[多项式除法算法](../polynomial-division/)联系起来：对于域上的多项式环中任意一对多项式 $P(x)$ 和 $D(x)$（满足 $D(x) \neq 0$），该算法确定唯一的商式 $Q(x)$ 与余式 $R(x)$，使得：

$$
P(x) = Q(x) \cdot D(x) + R(x) \qquad \deg R < \deg D
$$

当余式为零时，因式分解 $P=QD$ 是精确的，且 $D$ 是 $P$ 的一个因式。具体的因式分解方法结合了乘法、除法以及 $P$ 的[根](../roots-of-a-polynomial/)的信息。相关页面介绍了 [AC 法](../factoring-polynomials-ac-method/)、[配方法](../completing-the-square/)与[综合除法](../synthetic-division/)。
