---
title: 函数
title_en: Functions
source: https://algebrica.org/functions/
license: CC BY-NC 4.0
tags:
  - bounded-function
  - codomain
  - domain
  - function
  - periodic-function
  - range
translation:
  status: current
  source_hash: 11d0eae5d98999c9848ba5116cb92b6ff98641cdf5859d5a8b19d2639c06f457
  translator: codex
  updated: "2026-08-11T00:00:00.000Z"
---
## 定义

本文讨论定义域 $A \subseteq \mathbb{R}$ 和陪域 $B \subseteq \mathbb{R}$ 均非空的函数；二者都是[实数](../real-numbers/)的[子集](../sets/)。从 $A$ 到 $B$ 的函数 $f$，为每个 $x \in A$ 指定唯一的值 $f(x) \in B$。这种指定写成：

$$
f \colon A \to B
$$

+ 集合 $A$ 称为函数的[定义域](../determining-the-domain-of-a-function/)；
+ 集合 $B$ 称为陪域；
+ 对每个 $x \in A$，函数指定唯一的值 $f(x) \in B$；
+ 当输出记作 $y = f(x)$ 时，$x$ 是自变量，$y$ 是因变量。

例如，定义函数 $f \colon \mathbb{R} \to \mathbb{R}$ 为 $f(x) = 2x - 1$。记号 $x \mapsto 2x - 1$ 表示同一个对应关系。用 $3$ 代入 $x$ 得 $f(3) = 2 \cdot 3 - 1 = 5$。符号 $f$ 表示整个函数，$f(3)$ 表示该函数的一个值。

这种对应关系可以由公式、表格、图示或[分段规则](../piecewise-functions/)指定。

![图 1](/assets/functions/svg/functions-1.zh.svg)

> 满足存在性和唯一性条件的规则定义了一个定义良好的函数。如果一个关系没有为 $A$ 中某个元素赋值，或为它赋予多个值，则它不是函数。

- - -

函数 $f$ 的图像是由所有把输入与输出配对的有序对组成的集合：

$$
G_f = \{\ (x, f(x)) \mid x \in A \ \}
$$

因此 $G_f \subseteq A \times B$，并且每个 $x \in A$ 恰好作为一个有序对的第一坐标出现。

- - -

函数 $f \colon A \to B$ 可以具有下列性质：

+ 如果 $B$ 中每个元素至多是 $A$ 中一个元素的像，则称该函数为单射；也就是说，对任意 $x_1, x_2 \in A$，只要 $x_1 \neq x_2$，就有 $f(x_1) \neq f(x_2)$。等价地，对每个 $y \in B$，至多存在一个 $x \in A$ 使 $f(x) = y$；
+ 如果 $B$ 中每个元素至少是 $A$ 中一个元素的像，则称该函数为满射；也就是说，对每个 $y \in B$，至少存在一个 $x \in A$ 使 $f(x) = y$。等价地，$f(A) = B$；
+ 如果函数既是单射又是满射，则称它为双射；也就是说，对每个 $y \in B$，存在唯一的 $x \in A$ 使 $f(x) = y$。

这三个条件、它们在图像上的含义及其与单侧逆的关系详见[单射、满射与双射函数](../injective-surjective-and-bijective-functions/)。

从 $\mathbb{R}$ 到 $\mathbb{Z}$ 的[向下取整函数与向上取整函数](../floor-and-ceiling-functions/)都是满射，但不是单射。对任一函数，每个整数的原像都是长度为 $1$ 的半开区间。

双射 $A \to B$ 证明 $|A| = |B|$，单射 $A \to B$ 证明 $|A| \leq |B|$。[基数与可数集](../cardinality-and-countable-sets/)条目利用这些映射比较无限集合，并建立可数性判据。

- - -

恒等函数和常值函数是最简单的两种情形。集合 $A$ 上的恒等函数把每个元素映射到自身：

$$
\mathrm{id}_A \colon A \to A, \quad \mathrm{id}_A(x) = x
$$

它是双射，因为不同的输入给出不同的输出，并且 $A$ 中每个元素都能取到。对固定值 $c \in B$，从 $A$ 到 $B$ 的常值函数定义为：

$$
f \colon A \to B, \quad f(x) = c
$$

当 $A$ 含有多个元素时，常值函数不是单射；当且仅当 $B = \{\ c \ \}$ 时，它是满射。

- - -

函数 $f \colon A \to B$ 是双射，当且仅当它有双侧逆，即存在函数 $g \colon B \to A$，使得：

$$(g \circ f)(x) = x, \quad \forall \ x \in A$$
$$(f \circ g)(y) = y, \quad \forall \ y \in B$$

这里 $(g \circ f)(x) = g(f(x))$。等式右侧分别是 $A$ 和 $B$ 上的恒等函数，因此两个条件可以写成 $g \circ f = \mathrm{id}_A$ 和 $f \circ g = \mathrm{id}_B$。只要这样的函数 $g$ 存在，它就是唯一的。它是 $f$ 的[逆函数](../inverse-function/)，记作 $f^{-1}$。

> 对任意满足 $a > 0$ 且 $a \neq 1$ 的底数，从 $\mathbb{R}$ 到 $(0,+\infty)$ 的[指数函数](../exponential-function/) $x \mapsto a^x$，与从 $(0,+\infty)$ 到 $\mathbb{R}$ 的[对数函数](../logarithmic-function/) $\log_a$ 互为逆函数。

一个函数可能在整个 $A$ 上不是单射，但仍然可以在较小的定义域上求逆。给定 $E \subseteq A$，限制 $f|_E$ 是在 $E$ 的每一点都与 $f$ 一致的函数：

$$
f|_E \colon E \to B, \quad f|_E(x) = f(x)
$$

如果 $f$ 在 $E$ 上是单射，则同一个对应关系以 $f(E)$ 为陪域时，定义了从 $E$ 到 $f(E)$ 的双射，因此存在逆函数。正弦函数在 $\mathbb{R}$ 上不是单射。把它限制到 $[-\pi/2, \pi/2]$，并把陪域取为 $[-1, 1]$，得到：

$$
\sin|_{[-\pi/2, \pi/2]} \colon [-\pi/2, \pi/2] \to [-1, 1]
$$

这个限制是双射，其逆函数是[反正弦函数](../arcsine-function/) $\arcsin \colon [-1, 1] \to [-\pi/2, \pi/2]$。

## 什么不是函数

关系 $R \subseteq A \times B$ 只有在每个 $x \in A$ 都恰好对应一个 $y \in B$ 时，才定义从 $A$ 到 $B$ 的函数。如果某个 $x$ 没有对应值，或有多个对应值，这个关系就不满足函数的条件。

![图 2](/assets/functions/svg/functions-2.zh.svg)

图中显示了第二种失败情形。单个元素 $x_0$ 对应陪域中的两个不同值，因此该关系不是函数。所需的存在性和唯一性条件为：

$$
\forall x \in A,\ \exists! y \in B:\ (x, y) \in R
$$

图示关系同时包含 $(x_0, y_1)$ 和 $(x_0, y_2)$，二者都属于 $R$，并且 $y_1 \neq y_2$，所以它违反唯一性。下面的表格给出一个数值例子：

| X | -3 |  1 | -3 |  5 |  2 |
|----|----|----|----|----|----|
| Y |  7 |  4 | 10 | -2 |  8 |

这个关系不是函数，因为 $x = -3$ 同时对应 $7$ 和 $10$，而不是恰好对应一个值。

- - -

平面曲线在其向 $x$ 轴投影所得的集合上是函数图像，当且仅当每条竖直线与它至多相交于一点。这个判据称为垂线测试。

![图 3](/assets/functions/svg/functions-3.zh.svg)

图中左侧的曲线是[抛物线](../parabola/)，表示一个函数，因为每个 $x$ 都对应唯一的 $y$；右侧的曲线不是函数，因为对于 $x_2$，$y$ 有多个可能值。

## 陪域与值域的区别

对函数 $f \colon A \to B$，陪域是声明的目标集合 $B$。

值域（或像集）是函数实际取得的值组成的集合，即 $f(A)$，并且总是 $B$ 的子集。

考虑函数 $f \colon \mathbb{R} \to \mathbb{R}$，其中 $f(x) = x^2$。它的陪域是 $\mathbb{R}$，值域是 $[0,+\infty)$，所以它不是满射。保持同一对应规则并把陪域改为 $[0,+\infty)$，所得函数是满射，但不是单射，因为 $f(-1) = f(1) = 1$。如果定义域和陪域都取为 $[0,+\infty)$，同一公式定义一个双射。

更一般地，子集 $E \subseteq A$ 的像是该子集各点产生的输出集合：

$$
f(E) = \{\ f(x) \mid x \in E \ \}
$$

因此值域就是整个定义域的像。反过来，子集 $F \subseteq B$ 的原像定义为：

$$
f^{-1}(F) = \{\ x \in A \mid f(x) \in F \ \}
$$

记号 $f^{-1}(F)$ 表示一个集合，并不要求 $f$ 可逆。函数 $f \colon A \to f(A)$ 是满射，因为 $f(A)$ 中每个元素按构造都能取到。

## 函数相等与零点

按本文采用的约定，定义域和陪域都是函数数据的一部分。两个函数相等，是指这些集合相同，并且函数在每一点的值相同。对 $f,g \colon D \to B$，逐点条件为：

$$
f(x) = g(x) \quad \forall \ x \in D
$$

如果点 $a \in D$ 使函数在该点为零：

$$
f(a) = 0
$$

就称该点为 $f$ 的零点。此时函数图像在点 $(a,0)$ 处与 $x$ 轴相交。求零点等价于求解[方程](../equations/) $f(x) = 0$。在[符号分析](../sign-analysis-in-inequalities/)中，每个零点都必须作为正负区间的潜在边界来检查，但函数符号不一定在该点改变。

## 对称函数

[奇偶函数](../even-and-odd-functions/)描述函数关于原点反射时的行为。设 $A \subseteq \mathbb{R}$ 是关于原点对称的定义域，即 $x \in A \Rightarrow -x \in A$。函数 $f : A \to \mathbb{R}$ 称为：

+ 偶函数，如果对所有 $x \in A$ 都有 $f(-x) = f(x)$；
+ 奇函数，如果对所有 $x \in A$ 都有 $f(-x) = -f(x)$。

偶函数的图像关于 $y$ 轴对称，奇函数的图像关于原点对称。对[幂函数](../power-function/) $f(x) = x^n$，其中 $n$ 是正整数，恒等式 $f(-x) = (-1)^n x^n$ 表明：$n$ 为偶数时 $f$ 恰为偶函数，$n$ 为奇数时 $f$ 恰为奇函数。

## 有界函数

对函数 $f \colon A \to \mathbb{R}$，其中 $A \subseteq \mathbb{R}$，有界性定义如下：

+ 有上界，如果存在 $M \in \mathbb{R}$，使得对所有 $x \in A$ 都有 $f(x) \leq M$；
+ 有下界，如果存在 $m \in \mathbb{R}$，使得对所有 $x \in A$ 都有 $m \leq f(x)$；
+ 有界，如果同时满足上述两个条件，即对所有 $x \in A$ 都有 $m \leq f(x) \leq M$。

有界表示值域包含在某个[有界区间](../intervals/) $[m,M]$ 中，并不意味着函数存在全局[最大值或最小值](../maximum-minimum-and-inflection-points/)。

全局最大值是函数能够取到的[上界](../supremum-and-infimum/)，全局最小值是函数能够取到的下界。有界函数可能两者都不存在。[反正切函数](../arctangent-and-arccotangent/)就是一个例子：

$$
f(x) = \arctan x
$$

对每个实数 $x$，它满足 $-\frac{\pi}{2} < \arctan x < \frac{\pi}{2}$，所以它有界。它没有全局最大值或全局最小值，因为当 $x \to +\infty$ 时，$\arctan x \to \frac{\pi}{2}$；当 $x \to -\infty$ 时，$\arctan x \to -\frac{\pi}{2}$，但两个极限值都取不到。

## 单调函数

[递增、递减与单调函数](../increasing-and-decreasing-functions/)比较有序点处的函数值。对函数 $f \colon A \to \mathbb{R}$，下面前四项中的不等式都必须对任意满足 $x_1 < x_2$ 的 $x_1,x_2 \in A$ 成立：

+ 递增函数，如果 $f(x_1) \leq f(x_2)$；
+ 严格递增函数，如果 $f(x_1) < f(x_2)$；
+ 递减函数，如果 $f(x_1) \geq f(x_2)$；
+ 严格递减函数，如果 $f(x_1) > f(x_2)$；
+ 单调函数，如果它在整个定义域上递增或递减；
+ 严格单调函数，如果它在整个定义域上严格递增或严格递减。

## 周期函数

函数 $f \colon X \to \mathbb{R}$ 称为周期函数，是指存在 $T > 0$，使平移 $x \mapsto x+T$ 把 $X$ 双射到自身，并且对每个 $x \in X$ 都有：

$$
f(x + T) = f(x)
$$

每个满足这些条件的正数 $T$ 都是 $f$ 的周期。如果所有正周期中存在最小元素，该元素称为基本周期。[正弦函数和余弦函数](../sine-and-cosine/)的基本周期都是 $2\pi$。

## 函数的分类

下面的代数函数与超越函数之分适用于非退化区间上的初等实函数。如果存在一个实系数二元非零多项式 $P$，且该多项式关于 $y$ 的次数为正，并使 $P(x,f(x)) = 0$ 在整个区间上成立，则实值函数 $f$ 在该区间上称为代数函数。例如，在 $[0,+\infty)$ 上，函数 $f(x) = \sqrt{x}$ 满足 $f(x)^2-x=0$。常见的代数函数类别包括：

+ [多项式函数](../polynomial-function/)具有关于 $x$ 的常系数[多项式](../polynomials/)表达式；
+ [有理函数](../rational-functions/)是两个多项式之比；
+ 从有理函数出发，经过有限次算术运算和[开方](../radicals/)得到的函数是代数函数。[无理函数](../irrational-functions/)条目说明了用于 $\sqrt{x}$ 等表达式的较窄初等约定。

这些类别不能穷尽全部代数函数。有些代数函数不能用根式表示，即不能从有理函数出发，通过有限次算术运算和开方得到。超越函数是非代数函数。标准函数 $x \mapsto a^x$ 和 $x \mapsto \log_a x$（其中 $a>0$ 且 $a\neq1$），以及标准正弦函数和余弦函数，都是超越函数。

## 主要函数的定义域

函数包含一个声明的定义域。如果一个实数公式没有声明定义域，它的自然定义域是使公式中每一步运算都有定义且取实值的最大 $\mathbb{R}$ 子集。同一公式也可以定义在更小的声明定义域上。当表达式施加多个限制时，所有限制必须同时满足。[系统方法](../determining-the-domain-of-a-function/)说明如何合并这些条件。

- - -

[多项式函数](../polynomial-function/)具有如下形式：

$$
y = \sum_{k=0}^{n} a_kx^k
$$

在这个表达式中，$a_0,a_1,\dots,a_n$ 是实系数，$n$ 是非负整数。当多项式的次数为 $n$ 时，首项系数满足 $a_n \neq 0$；零多项式的所有系数都为零。这里 $x^0$ 表示常数单项式 $1$，包括 $x=0$ 时。每个多项式的自然定义域都是 $\mathbb{R}$，因为常数项和正整数次幂对每个实数都有定义。例如：

$$
y = 2x^3 - 5x^2 + 3x - 1
$$

每一项都对每个实数 $x$ 有定义，所以这个多项式的定义域也是 $\mathbb{R}$。

- - -

[有理函数](../rational-functions/)具有如下形式：

$$
y = \frac{N(x)}{D(x)}
$$

其中 $N(x)$ 和 $D(x)$ 是多项式，并且 $D$ 不是零多项式。函数在满足 $D(x) \neq 0$ 的实数 $x$ 处有定义。例如：

$$
y = \frac{x^2 - 4}{x - 2}
$$

分母在 $x=2$ 时为零，所以定义域是 $\mathbb{R}\setminus\{\ 2\ \}$。虽然表达式在 $x\neq2$ 时可以约成 $x+2$，但约分不会把 $2$ 加回原表达式的定义域。

- - -

分析定义域时，考虑下面的[根式表达式](../radicals/)，其中 $f \colon D \to \mathbb{R}$，$n$ 是满足 $n\geq2$ 的整数：

$$
y = \sqrt[n]{f(x)}
$$

定义域取决于 $n$ 的奇偶性。如果 $n$ 为偶数，被开方数必须非负，因此定义域为：

$$
\{\ x \in D \mid f(x) \geq 0\ \}
$$

偶数根指数的一个例子是：

$$
y = \sqrt{x - 2}
$$

被开方数必须非负，因此定义域是 $[2,+\infty)$。如果 $n$ 为奇数，根式不增加限制，定义域就是 $D$。奇数根指数的例子是：

$$
y = \sqrt[3]{x - 2}
$$

立方根对负数和非负数被开方数都有定义，所以定义域是 $\mathbb{R}$。

- - -

对 $f \colon D \to \mathbb{R}$，含[对数](../logarithms/)的表达式具有如下形式：

$$
y = \log_a{f(x)}, \quad a > 0, \quad a \neq 1
$$

对数的真数必须严格为正，因此定义域为：

$$
\{\ x \in D \mid f(x) > 0\ \}
$$

例如：

$$
y = \log_2(x - 1)
$$

这个函数只有在 $x-1>0$ 时有定义，所以定义域是 $(1,+\infty)$。当 $x\leq1$ 时，表达式没有定义，因为非正数的实对数不存在。另一个例子是：

$$
y = \ln(3x + 6)
$$

这里真数 $3x+6$ 必须为正，所以定义域是 $(-2,+\infty)$。

- - -

对 $f \colon D \to \mathbb{R}$，常数底数的[指数表达式](../exponential-function/)具有如下形式：

$$
y = a^{f(x)}, \quad a > 0, \quad a \neq 1
$$

它的定义域是 $D$。例如：

$$
y = 2^x
$$

因为 $2>0$，这个函数对每个实数 $x$ 都有定义。它的定义域是 $\mathbb{R}$，值域是 $(0,+\infty)$。

- - -

底数和指数都为变量的表达式具有如下形式：

$$
y = [f(x)]^{g(x)}
$$

[实数幂的标准定义](../powers/) $[f(x)]^{g(x)}=\exp(g(x)\ln f(x))$ 要求 $f(x)>0$。按这个约定，如果 $f$ 和 $g$ 的定义域分别是 $D_f$ 和 $D_g$，则表达式的定义域为：

$$
\{\ x \in D_f \cap D_g \mid f(x) > 0\ \}
$$

对非正底数，实数定义域取决于指数的值，必须逐种情况确定。

- - -

对 $f \colon D \to \mathbb{R}$，指数为无理数 $\alpha \in \mathbb{R}\setminus\mathbb{Q}$ 的幂具有形式：

$$
f(x)^{\alpha}
$$

它的定义域分为下面两种情况：

$$
\{\ x \in D \mid f(x) \geq 0\ \}, \quad \alpha > 0
$$
$$
\{\ x \in D \mid f(x) > 0\ \}, \quad \alpha < 0
$$

当 $\alpha<0$ 时使用严格不等式，是为了排除会导致除以零的底数 $0$。标准实数幂函数不定义负数的无理数次幂，因此负底数也被排除。

- - -

三角函数的定义域如下：

+ $y = \sin x$ 和 $y = \cos x$ 的定义域是 $\mathbb{R}$；
+ [正切函数](../tangent-function/) $y = \tan x$ 的定义域是 $\mathbb{R}\setminus\left\{\ \frac{\pi}{2}+k\pi \mid k\in\mathbb{Z}\ \right\}$；
+ [余切函数](../cotangent-function/) $y = \cot x$ 的定义域是 $\mathbb{R}\setminus\left\{\ k\pi \mid k\in\mathbb{Z}\ \right\}$；
+ $y = \arcsin x$ 和 $y = \arccos x$ 的定义域是 $[-1, 1]$；
+ $y = \arctan x$ 和 $y = \mathrm{arccot}\ x$ 的定义域是 $\mathbb{R}$。

> 对由多个初等函数构成的表达式，其定义域是各组成部分施加的限制的交集。求解[方程](../equations/)或[不等式](../inequalities/)，以及[分析函数图像](../analyzing-the-graphs-of-functions/)之前，必须先施加这些限制；[系统方法](../determining-the-domain-of-a-function/)说明了具体步骤。

## 函数之间的运算

设 $f$ 和 $g$ 的定义域分别是 $X_1\subseteq\mathbb{R}$ 和 $X_2\subseteq\mathbb{R}$：

$$
f \colon X_1 \to \mathbb{R}, \quad g \colon X_2 \to \mathbb{R}
$$

它们的公共定义域是 $X=X_1\cap X_2$。和、差、积在 $X$ 上定义，商的定义域可能更小。

两个函数 $f$ 和 $g$ 的和定义为：

$$
(f + g)(x) = f(x) + g(x)
$$

两个函数的差为：

$$
(f - g)(x) = f(x) - g(x)
$$

两个函数的积为：

$$
(f \cdot g)(x) = f(x)g(x)
$$

两个函数的商为：

$$
\left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}
$$

它只在满足 $g(x)\neq0$ 的 $x\in X$ 处有定义。其定义域要从 $X$ 中排除所有使分母为零的点。

复合函数的定义域由另一项条件确定。它由 $X_1$ 中满足 $f(x)$ 属于 $X_2$ 的点组成：

$$
C = \{\ x \in X_1 \mid f(x) \in X_2\ \}
$$

对每个 $x\in C$，复合函数为 $(g\circ f)(x)=g(f(x))$。[复合函数](../composite-functions/)条目详细说明了这项运算。
