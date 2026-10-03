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
  source_hash: 777141ff7240897b82f1d90295d87d91bd5b954a4a4390be3b77c65ebb988089
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 定义

设 $A$ 和 $B$ 是[实数](../real-numbers/)的非空[子集](../sets/)。$A$ 的元素是输入，$B$ 的元素是可能的输出。函数 $f$ 给每个 $x \in A$ 指定唯一一个值 $f(x) \in B$。记作：

$$
f \colon A \to B
$$

+ 集合 $A$ 是函数的[定义域](../determining-the-domain-of-a-function/)。
+ 集合 $B$ 是陪域。
+ 对每个 $x \in A$，值 $f(x) \in B$ 是 $x$ 在 $f$ 下的像。
+ $x$ 是自变量，$y=f(x)$ 是因变量。

一次法则 $2x - 1$ 定义了函数：

$$
f \colon \mathbb{R} \to \mathbb{R}, \quad f(x) = 2x - 1
$$

写成 $x \mapsto 2x - 1$ 表示同一个对应，只是没有给函数命名。在输入 $3$ 处，它的值为：

$$
f(3) = 2 \cdot 3 - 1 = 5
$$

符号 $f$ 表示整个对应，而 $f(3)$ 是特定输入 $3$ 的像。

![图 1](/assets/functions/svg/functions-1.zh.svg)

> 唯一性是对每个固定的输入要求的。不同的输入可以有相同的像。

- - -

函数 $f \colon A \to B$ 可能具有下列性质：

+ 如果 $B$ 的每个元素至多是 $A$ 中一个元素的像，也就是说，对任意满足 $x_1 \neq x_2$ 的 $x_1, x_2 \in A$ 都有 $f(x_1) \neq f(x_2)$，则称函数是单射。等价地，对每个 $y \in B$，至多有一个 $x \in A$ 使得 $f(x) = y$。
+ 如果 $B$ 的每个元素至少是 $A$ 中一个元素的像，也就是说，对每个 $y \in B$ 至少存在一个 $x \in A$ 使得 $f(x) = y$，则称函数是满射。等价地，$f(A) = B$。
+ 如果函数既是单射又是满射，也就是说，对每个 $y \in B$ 存在唯一的 $x \in A$ 使得 $f(x) = y$，则称函数是双射，或等价地称为可逆的。

这些性质在[单射、满射与双射函数](../injective-surjective-and-bijective-functions/)条目中有详细讨论。

- - -

每个集合 $A$ 都有一个恒等函数。它在任意 $x \in A$ 处的值就是 $x$ 本身：

$$
\mathrm{id}_A \colon A \to A, \quad \mathrm{id}_A(x) = x
$$

它是双射，因为不同的输入给出不同的输出，并且 $A$ 的每个元素都被取到。对固定的值 $c \in B$，从 $A$ 到 $B$ 的常值函数定义为：

$$
f \colon A \to B, \quad f(x) = c
$$

当 $A$ 的元素多于一个时，常值函数不是单射；它是满射恰好当 $B = \{\ c \ \}$。

- - -

给定 $E \subseteq A$，$f \colon A \to B$ 在 $E$ 上的限制定义为：

$$
f|_E \colon E \to B, \quad f|_E(x) = f(x)
$$

限制定义域可以使一个非单射的函数变成单射。如果 $f|_E$ 是单射，那么以 $f(E)$ 为陪域的同一个对应定义了从 $E$ 到 $f(E)$ 的双射，因而有[反函数](../inverse-function/)。

- - -

$f$ 的图像是有序对 $(x, f(x))$ 的集合，这些有序对是把每个输入与指定给它的输出配对得到的：

$$
G_f = \{\ (x, f(x)) \mid x \in A \ \}
$$

于是 $G_f \subseteq A \times B$，并且每个 $x \in A$ 恰好作为一个有序对的第一个坐标出现。

## 什么不是函数

关系 $R \subseteq A \times B$ 是从 $A$ 到 $B$ 的函数，仅当每个 $x \in A$ 恰好与一个值 $y \in B$ 相关联。

![图 2](/assets/functions/svg/functions-2.zh.svg)

在图中，单个元素 $x_0$ 对应陪域中两个不同的值，所以这个关系不是函数。用形式化的语言说，所要求的存在唯一性条件是：

$$
\forall \ x \in A,\ \exists! \ y \in B\ \vert \ (x, y) \in R
$$

在图示的关系中，$(x_0, y_1)$ 和 $(x_0, y_2)$ 都属于 $R$，且 $y_1 \neq y_2$，这违反了唯一性。下表中出现了同样的问题：

| X  | -3 |  1 | -3 |  5 |  2 |
|----|----|----|----|----|----|
| Y  |  7 |  4 | 10 | -2 |  8 |

这个关系不是函数，因为 $x = -3$ 同时与 $7$ 和 $10$ 相关联，而不是恰好与一个值相关联。

- - -

要判断平面上的一条曲线是否是定义在它到 $x$ 轴的投影上的某个函数的图像，可以用竖线检验法：曲线通过检验，恰好当每条竖直线与曲线至多交于一点。

![图 3](/assets/functions/svg/functions-3.zh.svg)

左边的曲线是一条[抛物线](../parabola/)，它是函数的图像，因为每个 $x$ 恰好对应一个 $y$。右边的曲线不是函数的图像，因为 $x_2$ 对应不止一个 $y$ 值。

## 陪域与值域的区别

对于函数 $f \colon A \to B$，陪域是事先指明的目标集合 $B$。

$f$ 的值域，也称为函数的像，是所取到的值的集合 $f(A)$。它总是 $B$ 的子集。

考虑由 $f(x) = x^2$ 定义的函数 $f \colon \mathbb{R} \to \mathbb{R}$。它的陪域是 $\mathbb{R}$，而值域是 $[0, +\infty)$，所以它不是满射。以 $[0, +\infty)$ 为陪域的同一个对应定义了一个满射函数，但它不是单射，因为 $f(-1) = f(1) = 1$。当定义域和陪域都取为 $[0, +\infty)$ 时，同一个法则定义了一个双射。

对于子集 $E \subseteq A$，它的像定义为：

$$
f(E) = \{\ f(x) \mid x \in E \ \}
$$

取 $E = A$ 就得到值域 $f(A)$。对于子集 $F \subseteq B$，它的原像定义为：

$$
f^{-1}(F) = \{\ x \in A \mid f(x) \in F \ \}
$$

记号 $f^{-1}(F)$ 表示一个集合，并不要求 $f$ 可逆。函数 $f \colon A \to f(A)$ 是满射，因为按照构造，$f(A)$ 的每个元素都被取到。

## 函数相等与零点

按照这里采用的约定，定义域和陪域是函数的组成部分。当这些集合相同，并且两个函数在每一点处的值都相同时，两个函数相等。对于 $f,g \colon D \to B$，逐点的条件是：

$$
f(x) = g(x) \quad \forall \ x \in D
$$

如果函数在点 $a \in D$ 处为零，则称该点是 $f$ 的零点：

$$
f(a) = 0
$$

求零点相当于解[方程](../equations/) $f(x)=0$。每个解 $a$ 确定了图像与 $x$ 轴的一个交点 $(a,0)$。在[符号分析](../sign-analysis-in-inequalities/)中，每个零点都必须作为 $f$ 取正值的区间与取负值的区间之间可能的分界点来考察。符号在零点处不一定改变，因为图像可能与轴相切后仍留在同一侧。

## 对称函数与有界函数

[偶函数和奇函数](../even-and-odd-functions/)描述函数在变换 $x \mapsto -x$ 下的行为。设 $A \subseteq \mathbb{R}$ 关于原点对称，即 $x \in A \Rightarrow -x \in A$。对于函数 $f \colon A \to \mathbb{R}$，两种情形是：

+ 如果对所有 $x \in A$ 都有 $f(-x) = f(x)$，则函数是偶函数（关于 $y$ 轴对称）。
+ 如果对所有 $x \in A$ 都有 $f(-x) = -f(x)$，则函数是奇函数（关于原点对称）

- - -

对于函数 $f \colon A \to \mathbb{R}$（$A \subseteq \mathbb{R}$），如果存在 $m, M \in \mathbb{R}$ 使得下式成立，则称函数有界：

$$
m \leq f(x) \leq M \quad \forall \ x \in A
$$

如果存在 $M \in \mathbb{R}$ 使得对每个 $x \in A$ 都有 $f(x) \leq M$，则函数有上界；如果存在 $m \in \mathbb{R}$ 使得对每个 $x \in A$ 都有 $m \leq f(x)$，则函数有下界。

有界意味着值域落在某个[有界区间](../intervals/) $[m, M]$ 内。它并不蕴含全局[最大值或最小值](../maximum-minimum-and-inflection-points/)的存在。全局最大值是函数取到的[上界](../supremum-and-infimum/)，全局最小值是函数取到的下界（[反正切](../arctangent-function/)就是一个例子）。

## 单调函数与周期函数

[递增、递减与单调函数](../increasing-and-decreasing-functions/)比较函数在有序的点处的值。对于函数 $f \colon A \to \mathbb{R}$，下面前四个定义中的不等式都必须对每一对满足 $x_1 < x_2$ 的 $x_1, x_2 \in A$ 成立：

+ 如果 $f(x_1) \leq f(x_2)$，则函数递增。
+ 如果 $f(x_1) < f(x_2)$，则函数严格递增。
+ 如果 $f(x_1) \geq f(x_2)$，则函数递减。
+ 如果 $f(x_1) > f(x_2)$，则函数严格递减。
+ 如果函数在整个定义域上递增或递减，则它是单调的。
+ 如果函数在整个定义域上严格递增或严格递减，则它是严格单调的。

- - -

对于函数 $f \colon X \to \mathbb{R}$，如果存在 $T > 0$，使得平移 $x \mapsto x + T$ 把 $X$ 映成它自身，并且下面的恒等式对每个 $x \in X$ 成立，则称函数是周期函数：

$$
f(x + T) = f(x)
$$

每个满足这些条件的正数 $T$ 都是 $f$ 的一个周期。如果正周期的集合有最小元，这个元素就是基本周期。[正弦函数和余弦函数](../sine-and-cosine/)的基本周期都是 $2\pi$。

## 代数函数与超越函数

对连续实函数分类的一种方式是借助多项式关系。设 $f \colon D \to \mathbb{R}$，其中 $D \subseteq \mathbb{R}$ 包含一个非退化的[区间](../intervals/)。如果存在一个二元非零多项式 $P$，它的系数为实数、关于 $y$ 的次数为正，使得对每个 $x \in D$ 都有 $P(x, f(x)) = 0$，则称函数是代数函数。例如，$f(x) = \sqrt{x}$ 在 $[0, +\infty)$ 上是代数函数，因为 $f(x)^2 - x = 0$。

每个[多项式函数](../polynomial-function/)都是[有理函数](../rational-functions/)，因为它可以写成分母为 $1$ 的形式；每个有理函数 $f(x) = N(x)/Q(x)$ 都是代数函数，因为 $Q(x)f(x) - N(x) = 0$。因此，多项式函数、有理函数、代数函数这三类依次包含：

$$
\mathrm{Pol} \subseteq \mathrm{Rat} \subseteq \mathrm{Alg}
$$

这里考虑的[无理函数](../irrational-functions/)构成非有理代数函数的一个子类。它们的最简表达式在根号内含有变量，并且只用到有限次开方。它们并没有穷尽代数函数，因为有些代数函数不能用根式表示。

不满足任何这种多项式关系的连续实函数是超越函数。标准的初等例子包括[指数函数](../exponential-function/)和[对数函数](../logarithmic-function/)、[三角函数](../sine-and-cosine/)和反三角函数，以及[双曲函数](../hyperbolic-sine-and-cosine/)。在这里，超越的意思是非代数，而不是非初等。

## 主要函数的定义域

一个实表达式的自然定义域是 $\mathbb{R}$ 的最大子集，在其上表达式中的每个运算都有定义并且取实值。当表达式施加多个限制时，它的自然定义域通过[合并所有定义域条件](../determining-the-domain-of-a-function/)得到。

- - -

[多项式函数](../polynomial-function/)的形式为：

$$
y = \sum_{k=0}^{n} a_kx^k
$$

系数 $a_0, a_1, \dots, a_n$ 是实数，$n$ 是非负整数。当多项式的次数为 $n$ 时，它的首项系数是 $a_n$，且 $a_n \neq 0$。零多项式的所有系数都等于零。单项式 $x^0$ 是常数单项式 $1$。常数项和各个正整数次幂对每个实数 $x$ 都有定义，包括 $x = 0$。因此每个多项式的自然定义域都是 $\mathbb{R}$。考虑三次多项式：

$$
y = 2x^3 - 5x^2 + 3x - 1
$$

每一项对每个实数 $x$ 都有定义，所以这个多项式的定义域也是 $\mathbb{R}$。

- - -

在[有理函数](../rational-functions/)中，分子 $N(x)$ 和分母 $D(x)$ 都是多项式，且 $D$ 不是零多项式。有理函数的形式为：

$$
y = \frac{N(x)}{D(x)}
$$

这个商恰好在满足 $D(x) \neq 0$ 的那些实数 $x$ 处有定义。考虑有理函数：

$$
y = \frac{x^2 - 4}{x - 2}
$$

分母在 $x = 2$ 处为零，所以定义域是 $\mathbb{R} \setminus \{\ 2 \ \}$。虽然当 $x \neq 2$ 时表达式可以化简为 $x + 2$，但这种约分并不会把 $2$ 加进原来的定义域。

- - -

设 $f \colon D \to \mathbb{R}$，并设 $n \geq 2$ 是整数。指数为 $n$ 的[根式](../radicals/)形式为：

$$
y = \sqrt[n]{f(x)}
$$

定义域取决于 $n$ 的奇偶性。如果 $n$ 是偶数，被开方式必须非负，所以定义域是：

$$
\{\ x \in D \mid f(x) \geq 0 \ \}
$$

对于偶数指数 $n = 2$，考虑：

$$
y = \sqrt{x - 2}
$$

被开方式必须非负，所以定义域是 $[2, +\infty)$。如果 $n$ 是奇数，根式不施加进一步的限制，定义域是 $D$。对于奇数指数 $n = 3$，考虑：

$$
y = \sqrt[3]{x - 2}
$$

立方根对负的和非负的被开方式都有定义，所以它的定义域是 $\mathbb{R}$。

- - -

对于 $f \colon D \to \mathbb{R}$，含有[对数](../logarithms/)的表达式形式为：

$$
y = \log_a{f(x)}, \quad a > 0, \quad a \neq 1
$$

对数的真数必须严格为正，所以定义域是：

$$
\{\ x \in D \mid f(x) > 0 \ \}
$$

对于底数 $2$，考虑：

$$
y = \log_2(x - 1)
$$

这个函数只在 $x - 1 > 0$ 时有定义，所以定义域是 $(1, +\infty)$。对任何 $x \leq 1$，表达式没有定义，因为非正数的对数在实数范围内不存在。第二个例子使用自然对数：

$$
y = \ln(3x + 6)
$$

由不等式 $3x + 6 > 0$ 得到 $x > -2$，所以定义域是 $(-2, +\infty)$。

- - -

对于 $f \colon D \to \mathbb{R}$，底数为常数的[指数表达式](../exponential-function/)形式为：

$$
y = a^{f(x)}, \quad a > 0, \quad a \neq 1
$$

它的定义域是 $D$。取 $a = 2$ 和 $f(x) = x$，得到：

$$
y = 2^x
$$

由于 $2 > 0$，这个函数的定义域是 $\mathbb{R}$，值域是 $(0, +\infty)$。

- - -

底数和指数都含变量的表达式形式为：

$$
y = [f(x)]^{g(x)}
$$

如果[实数幂](../powers/)由 $[f(x)]^{g(x)} = \exp(g(x)\ln f(x))$ 定义，就要求 $f(x) > 0$。在这个定义下，如果 $f$ 和 $g$ 的定义域分别是 $D_f$ 和 $D_g$，那么定义域是：

$$
\{\ x \in D_f \cap D_g \mid f(x) > 0 \ \}
$$

对于非正的底数，实定义域取决于指数的取值，必须逐一情形确定。

- - -

对于 $f \colon D \to \mathbb{R}$，指数为无理数 $\alpha \in \mathbb{R} \setminus \mathbb{Q}$ 的幂形式为：

$$
f(x)^{\alpha}
$$

它的定义域由下面两种情形给出：

$$
\{\ x \in D \mid f(x) \geq 0 \ \}, \quad \alpha > 0
$$
$$
\{\ x \in D \mid f(x) > 0 \ \}, \quad \alpha < 0
$$

- - -

+ [正弦函数](../sine-function/) $y = \sin x$ 和[余弦函数](../cosine-function/) $y = \cos x$ 的定义域是 $\mathbb{R}$。
+ [正切函数](../tangent-function/) $y = \tan x$ 的定义域是 $\mathbb{R} \setminus \left\{\ \pi/2 + k\pi \mid k \in \mathbb{Z}\ \right\}$。
+ [余切函数](../cotangent-function/) $y = \cot x$ 的定义域是 $\mathbb{R} \setminus \left\{\ k\pi \mid k \in \mathbb{Z}\ \right\}$。
+ [反正弦函数](../arcsine-function/) $y = \arcsin x$ 和[反余弦函数](../arccosine-function/) $y = \arccos x$ 的定义域是 $[-1, 1]$。
+ [反正切函数](../arctangent-function/) $y = \arctan x$ 和[反余切函数](../arccotangent-function/) $y = \mathrm{arccot}\ x$ 的定义域是 $\mathbb{R}$。

## 函数之间的运算

设 $f \colon X_1 \to \mathbb{R}$ 和 $g \colon X_2 \to \mathbb{R}$，其中 $X_1 \subseteq \mathbb{R}$、$X_2 \subseteq \mathbb{R}$，并令 $X=X_1 \cap X_2$。

和、差、积在 $X$ 上逐点定义：

$$
\begin{align}
(f + g)(x) &= f(x) + g(x) \\[6pt]
(f - g)(x) &= f(x) - g(x) \\[6pt]
(f \cdot g)(x) &= f(x)g(x)
\end{align}
$$

两个函数 $f(x)$ 和 $g(x)$ 的商，定义域是 $\{\ x \in X \mid g(x) \neq 0 \ \}$，定义为：

$$
\left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}
$$

函数之间的另一种运算是[复合](../composite-functions/)。如果 $f \colon A \to B$ 且 $g \colon B \to C$，那么复合函数 $g \circ f$ 先应用 $f$，再对结果应用 $g$：

$$
(g \circ f)(x)=g(f(x))
$$
