---
title: 单射、满射与双射函数
title_en: Injective, Surjective and Bijective Functions
source: https://algebrica.org/injective-surjective-and-bijective-functions/
license: CC BY-NC 4.0
tags:
  - bijective-function
  - cardinality
  - codomain
  - domain
  - function
  - injective-function
  - inverse-function
  - range
  - surjective-function
translation:
  status: current
  source_hash: 5676cc4e11475e7ec06369b9c26246f291bfd38871455ee072835ef828ba388f
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 引言

设 $f \colon A \to B$ 是一个[函数](../functions/)，[定义域](../determining-the-domain-of-a-function/)为 $A$，陪域为 $B$。对固定的 $y \in B$，被函数送到 $y$ 的自变量的集合是 $f$ 在 $y$ 上的纤维：

$$
f^{-1}(\{\ y\ \}) = \{\ x \in A \mid f(x) = y \ \}
$$

记号 $f^{-1}(\{\ y\ \})$ 表示单元素集 $\{\ y\ \}$ 的原像，并不假定 $f$ 有反函数。

这个集合的元素是以 $x$ 为未知数的方程 $f(x) = y$ 的解。单射性、满射性和双射性描述的是当 $y$ 取遍陪域时这个方程的解的个数。

> 函数给每个 $x \in A$ 恰好指定一个值 $y = f(x)$。这里 $x$ 是固定的，$y$ 是未知的。而这三个性质是固定 $y$，数它在 $A$ 中的原像。不满足其中某个性质的函数仍然是函数。

## 定义

如果对每个 $y \in B$，方程 $f(x) = y$ 至多有一个解，从而没有任何纤维含有两个不同的元素，就说函数 $f$ 是单射。同一个条件可以用两个自变量来写：

$$
\forall x_1, x_2 \in A, \quad f(x_1) = f(x_2) \ \Rightarrow \ x_1 = x_2
$$

同一个蕴含式的逆否形式说的是，不同的自变量有不同的像：

$$
\forall x_1, x_2 \in A, \quad x_1 \neq x_2 \ \Rightarrow \ f(x_1) \neq f(x_2)
$$

![图 1](/assets/functions/svg/injective-surjective-and-bijective-functions-1.zh.svg)

单射的函数称为单射。值 $f(x)$ 确定了自变量 $x$，所以单射可以在它所取到的值的集合上反过来。

- - -

如果对每个 $y \in B$，方程 $f(x) = y$ 至少有一个解，从而没有任何纤维是空集，就说函数 $f$ 是满射：

$$
\forall y \in B, \ \exists x \in A \ \colon \ f(x) = y
$$

$f$ 的值域是所取到的值的集合 $f(A)$。由于对每个函数都有 $f(A) \subseteq B$，$f$ 是满射恰好当反向的包含 $B \subseteq f(A)$ 也成立。等价地：

$$
f(A) = B
$$

![图 2](/assets/functions/svg/injective-surjective-and-bijective-functions-2.zh.svg)

满射的函数称为满射。这个性质取决于事先指明的陪域。把 $B$ 换成 $f(A)$，就得到一个取值相同的满射函数。

- - -

如果对每个 $y \in B$，方程 $f(x) = y$ 恰好有一个解，从而每个纤维都只含一个元素，就说函数 $f$ 是双射：

$$
\forall y \in B, \ \exists! x \in A \ \colon \ f(x) = y
$$

符号 $\exists!$ 是“恰好存在一个”的缩写。对每个 $y$ 的存在性就是满射性，而唯一性就是单射性。因此，一个函数是双射，恰好当它既是单射又是满射。

![图 3](/assets/functions/svg/injective-surjective-and-bijective-functions-3.zh.svg)

双射的函数称为双射。$A$ 的每个元素在 $B$ 中有一个像，$B$ 的每个元素恰好是 $A$ 中一个元素的像。

- - -

一个函数可以不满足其中一个条件，也可以两个都不满足。

![图 4](/assets/functions/svg/injective-surjective-and-bijective-functions-4.zh.svg)

要证明某个性质不成立，需要给出一个明确的反例。要证明 $f$ 不是单射，就举出两个自变量 $x_1 \neq x_2$，使得 $f(x_1) = f(x_2)$。要证明 $f$ 不是满射，就举出一个元素 $y \in B$，并证明 $f(x) = y$ 没有解。

考虑在[整数](../integers/)上定义的函数 $f \colon \mathbb{Z} \to \mathbb{Z}$：

$$
f(n) = n(n - 1)
$$

由于 $0 \neq 1$ 但 $f(0) = f(1)$，函数 $f$ 不是单射。两个相邻的整数 $n$ 和 $n - 1$ 中有一个是偶数，所以对每个 $n$，$f(n)$ 都是偶数。因此奇数 $1$ 上的纤维是空集，$f$ 不是满射。

## 整数上的四个函数

在从 $\mathbb{Z}$ 到 $\mathbb{Z}$ 的函数中，这两个性质的四种组合都会出现。考虑平移 $t$、加倍映射 $d$、用[下取整函数](../floor-and-ceiling-functions/)定义的减半映射 $h$，以及平方映射 $q$：

$$
t(n) = n + 3, \quad d(n) = 2n, \quad h(n) = \left\lfloor \frac{n}{2} \right\rfloor, \quad q(n) = n^2
$$

平移是双射，因为 $n \mapsto n - 3$ 是它的逆。加倍映射是单射，因为 $2n = 2m$ 给出 $n = m$；它不是满射，因为奇数从不是某个整数的两倍。减半映射是满射，因为对每个 $k \in \mathbb{Z}$ 都有 $h(2k) = k$；它不是单射，因为 $h(0) = h(1) = 0$。平方映射既不是单射也不是满射，因为 $q(-1) = q(1)$，并且没有整数的平方是 $-1$。

| $\mathbb{Z}$ 上的函数 | 单射 | 满射 |
|---|---|---|
| $t(n) = n + 3$ | 是 | 是 |
| $d(n) = 2n$ | 是 | 否 |
| $h(n) = \lfloor n/2 \rfloor$ | 否 | 是 |
| $q(n) = n^2$ | 否 | 否 |

如果把每个映射的陪域换成它的值域，每个映射都成为满射，而它是否是单射不变。

## 从图像上读出这两个条件

对于 $A, B \subseteq \mathbb{R}$ 的函数 $f \colon A \to B$，两个条件都可以从图像上读出：

$$
G_f = \{\ (x, f(x)) \mid x \in A \ \}
$$

固定一个高度 $c \in B$，把 $G_f$ 与水平线 $y = c$ 相交。交集中的点具有 $(x, c)$ 的形式，其中 $f(x) = c$，所以交点对应于 $c$ 上的纤维的元素。于是交点的个数等于纤维的大小：

+ 如果每条高度为 $c \in B$ 的水平线与图像至多相交一次，函数是单射。
+ 如果每条这样的直线与图像至少相交一次，函数是满射。
+ 如果每条这样的直线与图像恰好相交一次，函数是双射。

这个判别法就是水平线检验法。它不同于竖线检验法，后者判断平面上的一条曲线究竟是不是函数的图像，[函数](../functions/)条目中有说明。陪域之外的高度不施加任何条件，所以检验只能对 $c \in B$ 的直线 $y = c$ 进行。

- - -

[严格递增](../increasing-and-decreasing-functions/)函数的图像与每条水平线至多相交一次。

![图 5](/assets/functions/svg/injective-surjective-and-bijective-functions-5.zh.svg)

如果一条水平线与图像交于两点 $(x_1, c)$ 和 $(x_2, c)$，其中 $x_1 < x_2$，严格递增就给出 $f(x_1) < f(x_2)$，矛盾。于是每个纤维至多有一个元素，$f$ 是单射。单射性要求这个结论对每个 $c \in B$ 成立，而不只是对图中所示的高度成立。

- - -

只要有一条水平线与图像相交不止一次，就证明函数不是单射。

![图 6](/assets/functions/svg/injective-surjective-and-bijective-functions-6.zh.svg)

直线 $y = c$ 与这个图像交于三点，所以方程 $g(x) = c$ 有三个解，$c$ 上的纤维有三个元素。因此 $g$ 不是单射。每条水平线都与图像相交，所以 $g$ 是满射。

- - -

三个从 $\mathbb{R}$ 到 $\mathbb{R}$ 的函数说明图像和陪域怎样决定这两个性质。[指数函数](../exponential-function/) $x \mapsto e^x$ 严格递增，因而是单射。它的值为正，所以方程 $e^x = -1$ 没有解，这个函数不是到 $\mathbb{R}$ 的满射。

三次[多项式函数](../polynomial-function/) $x \mapsto x^3 - x$ 取到任意大的正值和负值。它是[连续](../continuous-functions/)的，所以[介值定理](../intermediate-value-theorem/)对每个实数 $y$ 给出 $x^3 - x = y$ 的一个解，函数是满射。它不是单射，因为 $x^3 - x$ 在 $-1$、$0$ 和 $1$ 处都为零。

第三个函数用到[绝对值](../absolute-value/)：

$$
g(x) = \frac{x}{1 + |x|}
$$

它的值满足 $|g(x)| < 1$，所以 $g$ 不是到 $\mathbb{R}$ 的满射。函数在两条半直线上分别严格递增。如果 $x < 0 \leq z$，那么 $g(x) < 0 \leq g(z)$，所以 $g$ 在 $\mathbb{R}$ 上严格递增，是单射。它连续，在 $-\infty$ 和 $+\infty$ 处的极限分别是 $-1$ 和 $1$。因此它的值域是[区间](../intervals/) $(-1, 1)$，以这个区间为陪域的同一个公式定义了一个双射。

当 $0 \leq y < 1$ 时，唯一的原像 $x$ 满足 $x \geq 0$，由方程 $y = x/(1 + x)$ 得到 $x = y/(1 - y)$。当 $-1 < y < 0$ 时，唯一的原像 $x$ 满足 $x < 0$，由方程 $y = x/(1 - x)$ 得到 $x = y/(1 + y)$。于是，对每个 $y \in (-1, 1)$，[反函数](../inverse-function/)为：

$$
g^{-1}(y) = \frac{y}{1 - |y|}
$$

## 定义域和陪域是函数的组成部分

当两个函数有相同的定义域、相同的陪域和相同的值时，它们相等。改变其中任何一个集合都会改变函数，并可能改变它的单射性、满射性或双射性。指数函数的两个版本只在陪域上不同：

$$
\exp \colon \mathbb{R} \to \mathbb{R} \qquad \exp \colon \mathbb{R} \to (0, +\infty)
$$

第一个函数是单射但不是满射。第二个函数的公式和定义域相同，却是双射；它的反函数是[自然对数](../logarithmic-function/)。

对任何函数，把 $B$ 换成值域 $f(A)$ 不改变函数值。所得的映射是余限制：

$$
\tilde{f} \colon A \to f(A), \quad \tilde{f}(x) = f(x)
$$

按值域的定义，$f(A)$ 的每个元素都被取到，所以 $\tilde{f}$ 是满射。设 $\iota \colon f(A) \to B$ 是包含映射。这个映射是单射，原来的函数分解为：

$$
f = \iota \circ \tilde{f}
$$

于是每个函数都分解为一个满射与一个单射的复合。改变陪域对这两个性质的影响不同。扩大 $B$ 不改变单射性，但可能破坏满射性，而把 $B$ 缩小到值域则恢复满射性。

- - -

限制定义域可以恢复单射性。如果 $E \subseteq A$ 且 $f$ 在 $E$ 上是单射，那么以 $f(E)$ 为陪域的限制 $f|_E$ 是双射。[余弦函数](../cosine-function/)在 $\mathbb{R}$ 上不是单射，因为 $\cos(-x) = \cos x$，但它在 $[0, \pi]$ 上的限制严格递减，并取到 $[-1, 1]$ 中的每个值。这个限制是：

$$
\cos|_{[0, \pi]} \colon [0, \pi] \to [-1, 1]
$$

它是双射，它的反函数是[反余弦函数](../arccosine-function/)。

## 左逆、右逆与可逆性

这三个性质中的每一个都对应于一个反方向函数的存在。在本节中，始终设 $f \colon A \to B$，并用 $\mathrm{id}_A$ 表示 $A$ 上的恒等函数。

假设 $A$ 非空。函数 $f$ 是单射，当且仅当它有左逆，即一个满足 $g \circ f = \mathrm{id}_A$ 的函数 $g \colon B \to A$。如果这样的 $g$ 存在且 $f(x_1) = f(x_2)$，应用 $g$ 得到 $x_1 = g(f(x_1)) = g(f(x_2)) = x_2$。反过来，假设 $f$ 是单射，并固定 $a_0 \in A$。每个 $y \in f(A)$ 恰好有一个原像，所以对 $y \in f(A)$ 令 $g(y)$ 等于那个原像，对其余的 $y$ 令 $g(y) = a_0$，就定义了一个满足 $g(f(x)) = x$ 的函数。

在承认[选择公理](../sets/)的前提下，函数 $f$ 是满射，当且仅当它有右逆，即一个满足 $f \circ g = \mathrm{id}_B$ 的函数 $g \colon B \to A$。如果这样的 $g$ 存在，那么 $y = f(g(y))$，所以 $g(y)$ 是每个 $y \in B$ 的一个原像。反过来，满射函数的每个纤维都非空，在每个纤维中选取一个元素 $g(y)$，就得到 $f(g(y)) = y$。

> 某个特定的满射可能有由明确法则定义的右逆。而“每个满射都有右逆”这个断言等价于选择公理。上面左逆的构造不需要这样的原则，因为对每个 $y \notin f(A)$ 有 $g(y) = a_0$，而单射性确定了每个 $y \in f(A)$ 的原像。

函数 $f$ 是双射，当且仅当它有双侧逆，即一个同时满足下面两个恒等式的函数 $g \colon B \to A$：

$$
g \circ f = \mathrm{id}_A \qquad f \circ g = \mathrm{id}_B
$$

双侧逆是唯一的。如果 $g_1$ 是左逆，$g_2$ 是右逆，由复合的结合律得到：

$$
g_1 = g_1 \circ \mathrm{id}_B = g_1 \circ (f \circ g_2) = (g_1 \circ f) \circ g_2 = \mathrm{id}_A \circ g_2 = g_2
$$

这个唯一的双侧逆就是[反函数](../inverse-function/) $f^{-1}$。

- - -

单侧逆不一定唯一，同一个函数的左逆也不一定是它的右逆。在[自然数](../natural-numbers/)上，设 $s$ 是后继函数，并把 $p$ 定义为从每个正的自变量中减去一：

$$
s(n) = n + 1, \qquad p(n) = \begin{cases} n - 1 & n \geq 1 \\[6pt] 0 & n = 0 \end{cases}
$$

那么对每个 $n$ 都有 $p(s(n)) = n$，所以 $p \circ s = \mathrm{id}_{\mathbb{N}}$，而 $s(p(0)) = 1$，所以 $s \circ p \neq \mathrm{id}_{\mathbb{N}}$。于是 $s$ 是单射但不是满射，因为 $0$ 不是后继；而 $p$ 是满射但不是单射，因为 $p(0) = p(1) = 0$。把值 $p(0) = 0$ 换成任何别的自然数，就得到 $s$ 的另一个左逆。

## 复合下的性质

设 $f \colon A \to B$ 和 $g \colon B \to C$，并考虑[复合函数](../composite-functions/) $g \circ f \colon A \to C$。这两个性质在复合下都保持。

如果 $f$ 和 $g$ 是单射且 $g(f(x_1)) = g(f(x_2))$，由 $g$ 的单射性得到 $f(x_1) = f(x_2)$，再由 $f$ 的单射性得到 $x_1 = x_2$。如果 $f$ 和 $g$ 是满射且 $c \in C$，那么有某个 $b \in B$ 满足 $g(b) = c$，有某个 $a \in A$ 满足 $f(a) = b$，因此 $g(f(a)) = c$。所以两个双射的复合是双射，它的逆为：

$$
(g \circ f)^{-1} = f^{-1} \circ g^{-1}
$$

对每个性质，只有一个逆向的蕴含成立。如果 $g \circ f$ 是单射，那么由 $f(x_1) = f(x_2)$ 得到 $g(f(x_1)) = g(f(x_2))$，从而 $x_1 = x_2$，所以 $f$ 是单射。如果 $g \circ f$ 是满射，每个 $c \in C$ 都等于某个 $a$ 对应的 $g(f(a))$，所以 $c$ 属于 $g$ 的值域，$g$ 是满射。

上一节的映射 $s$ 和 $p$ 表明另外两个逆向的蕴含不成立。它们的复合 $p \circ s$ 是 $\mathbb{N}$ 的恒等映射，它是双射，尽管内层的映射 $s$ 不是满射，外层的映射 $p$ 不是单射。

## 计数论证与基数

对有限集，这两个性质通过计数联系起来。如果 $A$ 和 $B$ 有限且 $|A| > |B|$，任何函数 $A \to B$ 都不是单射，因为单射性会把 $|A|$ 个不同的像放进一个元素少于 $|A|$ 个的集合里。这个结论就是鸽巢原理。对称地，如果 $|A| < |B|$，任何函数 $A \to B$ 都不是满射。

当两个有限集有相同的基数 $n$ 时，这两个性质变得等价。单射 $f \colon A \to B$ 满足 $|f(A)| = n$，而 $B$ 的含 $n$ 个元素的子集就是 $B$ 本身，所以 $f$ 是满射。如果一个满射 $f$ 不是单射，就会有两个自变量取同一个值，集合 $f(A)$ 的元素会少于 $n$ 个，等式 $f(A) = B$ 就不成立。因此，单凭其中任何一个性质就能推出 $f$ 是双射。为了数出从 $n$ 元集到 $m$ 元集的单射的个数（$1 \leq n \leq m$），先给第一个集合的元素排定一个顺序。第一个元素有 $m$ 种可能的像，第二个有 $m - 1$ 种，最后一个有 $m - n + 1$ 种。因此单射的个数是：

$$
m(m - 1) \cdots (m - n + 1) = \frac{m!}{(m - n)!}
$$

当 $m = n$ 时，这个数是[阶乘](../factorial/) $n!$，即 $n$ 元集到自身的双射的个数。这些双射在复合下构成[对称群](../symmetric-group/)。

- - -

对无限集，这种等价可能不成立。后继映射 $s(n) = n + 1$ 作为从 $\mathbb{N}$ 到自身的函数是单射但不是满射，而映射 $h(n) = \lfloor n/2 \rfloor$ 是满射但不是单射。如果一个集合到自身有一个不是满射的单射，它就不可能是有限集。这样的集合称为戴德金无限集。

双射把大小的比较推广到有限集之外。如果两个集合之间存在双射，就说它们等势；关系 $|A| \leq |B|$ 的意思是存在从 $A$ 到 $B$ 的单射。康托尔-伯恩斯坦定理指出，两个方向相反的单射可以产生一个双射，所以这个关系是反对称的。如果一个集合有限或与 $\mathbb{N}$ 等势，就说它是可数的；[基数与可数集](../cardinality-and-countable-sets/)条目展开讨论了这些判别法，并证明 $\mathbb{R}$ 不可数。

## 其他结构中的同样条件

代数结构之间的映射是底集之间的函数，所以上面的定义不加改动就适用。对于群和向量空间，单射的[同态](../homomorphisms-and-isomorphisms/)是单态射，满射的同态是满态射，双射的同态是同构。

对于[向量空间](../vector-spaces/)之间的[线性映射](../linear-maps/) $T \colon V \to W$，单射性由[核](../kernel-and-image-of-a-linear-map/)决定。由线性性得到 $T(\mathbf{u}) - T(\mathbf{v}) = T(\mathbf{u} - \mathbf{v})$，所以方程 $T(\mathbf{u}) = T(\mathbf{v})$ 化为 $T(\mathbf{u} - \mathbf{v}) = \mathbf{0}$。核是 $\mathbf{0}$ 上的纤维，$T$ 是单射恰好当核只含零向量。当 $V$ 和 $W$ 是有限维的且 $\dim V = \dim W$ 时，秩-零化度定理表明单射性与满射性等价，这与基数相同的有限集之间的函数的情形类似。
