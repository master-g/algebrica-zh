---
title: 实数
title_en: Real Numbers
source: https://algebrica.org/real-numbers/
license: CC BY-NC 4.0
tags:
  - archimedean-property
  - bolzano-weierstrass
  - cauchy-sequence
  - completeness
  - dedekind-cut
  - density
  - floor-function
  - nested-intervals
  - nth-root
  - ordered-field
  - rational-exponentiation
  - real-line
  - real-numbers
  - uncountability
translation:
  status: current
  source_hash: 32ee505033b622b742ed11d259879f7410eda5a67d0ced73a4521430e2469c77
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 域与序结构

实数在加法和乘法下构成一个[域](../fields/)。两种运算都满足结合律和交换律，乘法对加法满足分配律，且每个非零实数都有乘法逆元。加法单位元为 $0$，乘法单位元为 $1$。这些公理在[实数的性质](../properties-of-real-numbers/)一文中讨论。域 $\mathbb{R}$ 还具有一个全序关系，记作 $<$。对于任意两个元素 $x,y\in\mathbb{R}$，以下三种关系中有且仅有一种成立：

$$
x < y \qquad x = y \qquad y < x
$$

序与域的运算是相容的：

+ 若 $x < y$，则对每个 $z \in \mathbb{R}$ 都有 $x + z < y + z$。
+ 若 $x < y$ 且 $z > 0$，则 $xz < yz$。

有序域是带有全序并满足上述相容性条件的域。$\mathbb{Q}$ 和 $\mathbb{R}$ 都是有序域。使两者区别开来的，是下面引入的完备性。

## 实数轴

实数在一条直线上有几何表示。任取一点标记为 $0$，再在其右侧取一点标记为 $1$。每个实数 $x$ 对应唯一的点。正数位于 $0$ 的右侧，负数位于左侧，它们到原点的距离为[绝对值](../absolute-value/)$|x|$。

![IMG. 1](/assets/sets-and-numbers/svg/real-numbers-1.svg)

这一对应是 $\mathbb{R}$ 与直线上各点之间的双射，并且保持序。关系 $x < y$ 成立当且仅当 $x$ 对应的点位于 $y$ 对应的点的左侧。

## 完备性公理

将 $\mathbb{R}$ 与 $\mathbb{Q}$ 区分开来的性质是完备性。每个由[有理数](../rational-numbers/)组成的[柯西数列](../cauchy-sequence/)都收敛到某个实数，尽管其极限不一定是有理数。有理数系中缺失的这些极限就是[无理数](../irrational-numbers/)。

这一定义的表述依赖于上界的概念。子集 $S \subseteq \mathbb{R}$ 有上界，是指存在实数 $M$，使得对每个 $x \in S$ 都有 $x \leq M$。这样的数 $M$ 是 $S$ 的一个上界。当最小上界存在时，它就是上确界 $\sup S$。

实数的完备性公理可以表述如下：$\mathbb{R}$ 的每个有上界的非空子集在 $\mathbb{R}$ 中都有[上确界](../supremum-and-infimum/)。这一命题称为最小上界性质。有理数不满足此性质。为说明原因，考虑以下[集合](../sets/)：

$$
S = \{q \in \mathbb{Q} \mid q^2 < 2\}
$$

该集合在 $\mathbb{Q}$ 中非空且有上界，但在 $\mathbb{Q}$ 中没有最小上界。它在 $\mathbb{R}$ 中的上确界是无理数 $\sqrt{2}$。

数 $\sqrt{2}$ 的存在性由完备性保证。在 $\mathbb{R}$ 中构造的集合 $\{x \in \mathbb{R} \mid x \geq 0 \land x^2 \leq 2\}$ 非空且有上界，因此它有上确界 $r$。若 $r^2<2$，则存在正数 $h$，使得 $h<1$ 且 $h<(2-r^2)/(2r+1)$。于是 $(r+h)^2<2$，这与 $r$ 是上界矛盾。若 $r^2>2$，则存在正数 $h$，使得 $h<r$ 且 $h<(r^2-2)/(2r)$。于是 $(r-h)^2>2$，因此 $r-h$ 仍然是上界，这与 $r$ 的最小性矛盾。故 $r^2=2$。

同样的构造定义了每个非负实数 $c$ 的[$n$ 次方根](../radicals/)：

$$
c^{1/n}:=\sup\{x\in\mathbb{R}\mid x\geq0\land x^n\leq c\}
$$

对于每个正[自然数](../natural-numbers/)$n$，该上确界是唯一的非负实数，其 $n$ 次幂为 $c$。若 $x>0$ 且 $q=a/b$，其中 $a\in\mathbb{Z}$ 为任意整数，$b\in\mathbb{N}$ 为正，则[有理指数幂](../powers/)由 $x^q=(x^{1/b})^a$ 定义。若 $a/b=c/d$ 是另一种表示，其中 $c\in\mathbb{Z}$ 为任意整数，$d\in\mathbb{N}$ 为正，则两个候选值具有相同的 $bd$ 次幂，因为 $ad=bc$，所以正根的唯一性使定义不依赖于所选的分数表示。对任意有理数 $q,r$，它满足 $x^{q+r}=x^qx^r$、$(x^q)^r=x^{qr}$ 和 $x^{-q}=1/x^q$。

对称的概念适用于有下界的集合。子集 $S \subseteq \mathbb{R}$ 有下界，是指存在 $m \in \mathbb{R}$，使得对所有 $x \in S$ 都有 $x \geq m$。最大下界即[下确界](../supremum-and-infimum/)，记作 $\inf S$。完备性公理蕴含：$\mathbb{R}$ 的每个有下界的非空子集在 $\mathbb{R}$ 中都有下确界。

最小上界是唯一的。若 $s$ 和 $t$ 都是同一集合的最小上界，则由 $s$ 的最小性可得 $s\leq t$，而由 $t$ 的最小性可得 $t\leq s$。由反对称性得 $s=t$。

在下面的柯西构造中，最小上界性质可由有理逼近推出。有界的有理代表元直接表明所构造的域具有阿基米德性质。若 $x=[(x_j)]$ 且对每个 $j$ 都有 $|x_j|\leq B$，则每个整数 $N>B$ 都满足 $x<N$。设 $E\subseteq\mathbb{R}$ 非空且有上界。对于每个正整数 $n$，使得 $k/n$ 是 $E$ 的上界的那些整数 $k$ 构成一个有下界的非空集合。该集合有最小元素 $m_n$，因此 $m_n/n$ 是上界，而 $(m_n-1)/n$ 不是。对于正整数 $n,n'$，定义不等式给出：

$$
-\frac{1}{n'}<\frac{m_n}{n}-\frac{m_{n'}}{n'}\leq\frac{1}{n}
$$

因此 $(m_n/n)$ 是柯西数列。其极限 $s$ 是 $E$ 的上界，因为 $E$ 的每个元素对每个 $n$ 都不超过 $m_n/n$。$E$ 的任何上界对每个 $n$ 都至少为 $(m_n-1)/n$，而第二个数列有相同的极限 $s$。因此每个上界都至少为 $s$，所以 $s=\sup E$。

## 阿基米德性质

完备性的一个推论是 $\mathbb{R}$ 的阿基米德性质。对于每个实数 $x$，都存在[自然数](../natural-numbers/)$n$，使得 $n > x$。等价地，自然数集合 $\mathbb{N}$ 在 $\mathbb{R}$ 中没有上界。论证如下：

+ 反设 $\mathbb{N}$ 在 $\mathbb{R}$ 中有上界。
+ 由完备性公理，$\mathbb{N}$ 有上确界，称之为 $s = \sup \mathbb{N}$。
+ 由于 $s - 1 < s$，数 $s - 1$ 不是 $\mathbb{N}$ 的上界，因此存在 $n \in \mathbb{N}$，使得 $n > s - 1$。
+ 由此得 $n + 1 > s$。由于 $n + 1 \in \mathbb{N}$，这与 $s$ 是 $\mathbb{N}$ 的上界矛盾。

对于 $x = 7.4$，大于 $x$ 的最小自然数是 $8$。这样的自然数的存在性依赖于阿基米德性质，在某些有序域中不成立。

一个等价的定量形式表明，对所有正实数 $x$ 和 $\varepsilon$，存在正整数 $M$，使得 $M\varepsilon>x$。将前一形式应用于 $x/\varepsilon$，便得到整数 $M>x/\varepsilon$。因此，任何固定的正量的反复累加最终都会超过任何给定的实数。

每个实数还有唯一的[整数部分](../floor-and-ceiling-functions/)。对每个 $x\in\mathbb{R}$，阿基米德性质将 $x$ 限制在两个整数之间，而不超过 $x$ 的整数中有最大元。记该整数为 $\lfloor x\rfloor$，则有：

$$
\lfloor x\rfloor\leq x<\lfloor x\rfloor+1
$$

没有两个整数同时满足这些不等式，因为两个不同的整数至少相差 $1$。

## 戴德金分割

戴德金分割是一个子集 $A \subseteq \mathbb{Q}$，满足三个条件：$A$ 非空且 $A \neq \mathbb{Q}$；若 $q \in A$ 且 $p < q$，则 $p \in A$；$A$ 没有最大元。集合 $\mathbb{R}$ 则定义为 $\mathbb{Q}$ 的所有戴德金分割的全体。

举例来说，有理数 $r \in \mathbb{Q}$ 对应于分割 $A_r = \{q \in \mathbb{Q} \mid q<r\}$。而无理数（如 $\sqrt{2}$）则对应于分割：

$$
A = \{q \in \mathbb{Q} \mid q\leq0\} \cup \{q \in \mathbb{Q} \mid q>0 \land q^2<2\}
$$

该集合满足所有三个条件，且没有有理上确界。这一构造将分割 $A$ 本身定义为填补有理序中这一空缺的实数。

$\mathbb{R}$ 的代数结构直接由分割上的集合运算构建。加法定义为：

$$
A + B = \{p+q \mid p\in A,q\in B\}
$$

序由包含关系给出，因此 $A \leq B$ 当且仅当 $A \subseteq B$。这些定义使 $\mathbb{R}$ 成为全序域。若分割的非空族 $S$ 有上界，则其上确界为并集 $\bigcup_{A \in S}A$。该并集是一个分割，且是 $S$ 的最小上界。

> 戴德金构造仅利用了 $\mathbb{Q}$ 的序结构。其对实数的定义使得每个有界的非空分割族都有最小上界。

## 柯西数列构造

$\mathbb{R}$ 的第二种构造从 $\mathbb{Q}$ 的一个局限出发。并非每个由有理数组成的[柯西数列](../cauchy-sequence/)都收敛到有理数。$\mathbb{Q}$ 中的数列 $(x_n)_{n \in \mathbb{N}}$ 是柯西数列，是指对每个 $\varepsilon \in \mathbb{Q}^+$，存在 $N \in \mathbb{N}$，使得：

$$
m, n \geq N \implies |x_m - x_n| < \varepsilon
$$

该定义不涉及[极限](../limits/)，因为极限在 $\mathbb{Q}$ 中可能不存在。每个柯西数列都是有界的。取 $N$，使得对所有 $n\geq N$ 都有 $|x_n-x_N|<1$。尾部各项不超过 $|x_N|+1$，而前面有限多项也有共同的上界。逼近 $\sqrt{2}$ 的一个有理数列为：

$$
\left(1,\frac{3}{2},\frac{7}{5},\frac{17}{12},\ldots\right)
$$

该数列在 $\mathbb{Q}$ 中是柯西数列，但其极限落在 $\mathbb{Q}$ 之外。$\mathbb{Q}$ 中的两个柯西数列 $(x_n)$ 和 $(y_n)$ 被宣布为等价，当且仅当对每个有理数 $\varepsilon>0$，存在 $N\in\mathbb{N}$，使得对所有 $n\geq N$ 都有 $|x_n-y_n|<\varepsilon$。在引入极限记号后，该条件可以写成：

$$
(x_n) \sim (y_n) \iff \lim_{n \to \infty} |x_n - y_n| = 0
$$

关系 $\sim$ 是自反的和对称的，三角不等式证明其满足传递性。实数随后被定义为等价类的集合：

$$
\mathbb{R} := C/{\sim}
$$

其中 $C$ 表示 $\mathbb{Q}$ 中所有柯西数列的全体。加法和乘法逐项定义：

$$
[(x_n)] + [(y_n)] = [(x_n + y_n)]
$$

$$
[(x_n)] \cdot [(y_n)] = [(x_n y_n)]
$$

由三角不等式，两个柯西数列的和是柯西数列。乘积也是柯西数列，因为两个数列都有界。取 $M>0$，使得 $|x_n|,|y_n|\leq M$。则：

$$
|x_ny_n-x_my_m|\leq |x_n||y_n-y_m|+|y_m||x_n-x_m|
$$

取两个差值都小于 $\varepsilon/(2M)$，则乘积的差值小于 $\varepsilon$。同样的估计也证明了运算不依赖于代表元的选择。若 $(x_n)\sim(x_n')$ 且 $(y_n)\sim(y_n')$，则：

$$
|(x_n+y_n)-(x_n'+y_n')|\leq|x_n-x_n'|+|y_n-y_n'|
$$

并且，在为四个数列选取共同的上界 $M$ 之后：

$$
|x_ny_n-x_n'y_n'|\leq M|x_n-x_n'|+M|y_n-y_n'|
$$

因此加法和乘法在等价类上是良定义的。

取倒数需要进一步的论证。正项数列 $10^{-n}$ 代表 $0$，而其逐项倒数构成无界数列 $10^n$。一个非零实数也可以有包含零项的代表元，例如 $(0,0.9,0.99,0.999,\ldots)$ 是实数 $1$ 的一个代表元。因此逐项取倒数需要一个与零有正距离的代表元。

每个非零等价类都有这样的代表元。若 $(x_n)$ 不等价于零数列，则存在 $\varepsilon>0$，使 $|x_n|\geq\varepsilon$ 会在数列任意远的尾部出现。一旦柯西条件对充分大的 $m,n$ 给出 $|x_n-x_m|<\varepsilon/2$，这样的某一项就迫使整个尾部满足 $|x_n|\geq\varepsilon/2$。改变有限多个初始项后，得到等价数列满足对每个 $n$ 都有 $|x_n|\geq c>0$。其倒数数列是柯西数列，因为：

$$
\left|\frac{1}{x_n}-\frac{1}{x_m}\right|=\frac{|x_m-x_n|}{|x_nx_m|}\leq\frac{|x_m-x_n|}{c^2}
$$

该估计还表明，与零有正距离的等价代表元具有等价的倒数数列。因此公式 $[(x_n)]^{-1}=[(x_n^{-1})]$ 对每个非零等价类都是良定义的。

正性的判定也需要与零保持距离。一个等价类是正的，是指它有代表元 $(x_n)$，使得对每个 $n$ 都有 $x_n\geq c>0$；它是负的，是指它有代表元满足 $x_n\leq-c<0$。像 $10^{-n}$ 这样的正项数列不满足此条件，因而代表零。柯西性质表明每个非零等价类要么是正的，要么是负的，但不能兼有。严格序随后定义为：当 $y-x$ 为正时 $x<y$，当 $x<y$ 或 $x=y$ 时 $x\leq y$。这些定义不依赖于代表元的选择。

有理数通过 $q\mapsto[(q,q,q,\ldots)]$ 嵌入 $\mathbb{R}$，并保持加法、乘法、倒数和序。

这一构造是完备的。设 $(X_m)$ 是一个由实数组成的柯西数列。对每个正整数 $m$，选取 $q_m\in\mathbb{Q}$，使得 $|X_m-q_m|<1/m$。这样的有理数存在，因为 $X_m$ 的一个代表元是由有理数组成的柯西数列。在该数列的尾部差值小于 $1/(2m)$ 之后取其中一项，则等价类距离不超过 $1/(2m)$，从而小于 $1/m$。数列 $(q_m)$ 是柯西数列，因为：

$$
|q_m-q_n|\leq|q_m-X_m|+|X_m-X_n|+|X_n-q_n|
$$

令 $X=[(q_m)]$。给定 $\varepsilon>0$，取 $N$，使得当 $m,n\geq N$ 时，$1/m<\varepsilon/2$ 且 $|q_n-q_m|<\varepsilon/2$。对每个 $m\geq N$，数列 $(q_n-q_m)_n$ 代表 $X-q_m$，且其绝对值最终不超过 $\varepsilon/2$。因此 $|X-q_m|\leq\varepsilon/2$，由三角不等式得 $|X-X_m|<\varepsilon$。从而 $X_m\to X$，所以每个由实数组成的柯西数列都有实数极限。

例如，实数 $\sqrt{2}$ 是任意一个收敛到它的、由有理数组成的柯西数列的等价类，如 $(1, 1.4, 1.41, 1.414, \ldots)$。两个这样的数列满足 $(x_n) \sim (y_n)$，因此定义同一个实数。在这一构造中，完备性意味着每个由实数组成的柯西数列都收敛到实数。戴德金构造和柯西构造作为完备有序域是[同构](../homomorphisms-and-isomorphisms/)的，它们描述的恰好是同一个数学对象。

## 完备性的推论

有理数在 $\mathbb{R}$ 中稠密。对满足 $x<y$ 的每个 $x,y\in\mathbb{R}$，都存在 $q\in\mathbb{Q}$ 满足 $x<q<y$。阿基米德性质给出自然数 $n$，使得 $n(y-x)>1$。然后取最小整数 $m>nx$，便得 $x<m/n<y$。

若实数 $x$ 对每个 $\varepsilon>0$ 都满足 $x\leq\varepsilon$，则 $x\leq0$，因为 $x$ 若为正，便会超过 $\varepsilon=x/2$。类似地，对所有 $\varepsilon>0$ 都有 $|x|\leq\varepsilon$ 蕴含 $x=0$。这一判据通过将差的绝对值限制在每个正数阈值以下来证明等式，它在[极限](../limits/)的研究中反复出现。

尽管 $\mathbb{Q}$ 在 $\mathbb{R}$ 中稠密，这两个集合的基数不同。有理数是可数的，而实数是不可数的。这些结果及其与康托尔对角线论证的关系详见[基数与可数集](../cardinality-and-countable-sets/)。因此[无理数](../irrational-numbers/)$\mathbb{R}\setminus\mathbb{Q}$ 是不可数的。

下面的不可数性证明使用区间套定理。闭区间序列 $I_n = [a_n, b_n]$ 构成区间套，是指 $I_1 \supseteq I_2 \supseteq I_3 \supseteq \cdots$。完备性保证它们的交集至少包含一个点：

$$
\bigcap_{n=1}^{\infty} I_n \neq \emptyset
$$

左端点构成一个单调不减的数列，以每个 $b_m$ 为上界，因此它们有上确界 $x = \sup_n a_n$，对所有 $n$ 满足 $a_n \leq x \leq b_n$。点 $x$ 属于每个区间。当长度 $b_n-a_n$ 趋于零时，交集是单点集 $\{x\}$。有理数不满足此性质。端点为有理数且围绕 $\sqrt{2}$ 收缩的区间套序列，在 $\mathbb{Q}$ 中的交集为空集。

反设 $[0,1]$ 中的实数可以排列成列表 $x_1,x_2,x_3,\ldots$。选取一个排除 $x_1$ 的闭区间 $I_1\subseteq[0,1]$，再选取一个排除 $x_2$ 的闭区间 $I_2\subseteq I_1$，如此继续，使得每一步都有 $x_n\notin I_n$。区间套定理给出一个点 $x\in\bigcap_n I_n$。该点与每个 $x_n$ 都不同，不在列表中，从而产生矛盾。

第二个证明是康托尔对角线论证，直接从小数展开入手。将假设列表中的每个数写成 $x_k=0.d_{k1}d_{k2}d_{k3}\ldots$，并通过选取 $e_k\neq d_{kk}$ 来定义 $y=0.e_1e_2e_3\ldots$。例如，当 $d_{kk}\neq1$ 时取 $e_k=1$，当 $d_{kk}=1$ 时取 $e_k=2$。数 $y$ 对每个 $k$ 都在第 $k$ 位上与 $x_k$ 不同，因此它不在列表中。从 $\{1,2\}$ 中选取数字可以避免诸如 $0.4999\ldots=0.5000\ldots$ 这样的数有两种小数展开的问题。

波尔查诺–魏尔斯特拉斯定理是完备性的另一个推论。每个有界的实数列都有收敛子列。等价地，$\mathbb{R}$ 的每个有界无限子集都有[聚点](../topology-of-the-real-line/)。

## $\mathbb{R}$ 的唯一性

实数系是唯一的完备有序域。任意两个完备有序域作为有序域是同构的，且它们之间的同构是唯一的。在保持结构的双射的意义下，$\mathbb{R}$ 是 $\mathbb{Q}$ 的唯一完备化。

> 欧几里得空间 $\mathbb{R}^n$ 是 $\mathbb{R}$ 上的[向量空间](../vector-spaces/)。其他域也可以作为标量域，但此处讨论的分析性质依赖于 $\mathbb{R}$ 的序和完备性。

## 区间

[区间](../intervals/)是一个子集 $I\subseteq\mathbb{R}$，满足以下条件：只要两个点属于 $I$，它们之间的每个点也属于 $I$。区间可以是有界的，如 $(a,b)$ 和 $[a,b]$；也可以是无界的，如 $[a,+\infty)$ 和 $(-\infty,b)$。实数轴是区间 $(-\infty,+\infty)$。

不同长度的区间可以有相同的基数。映射 $x\mapsto2x$ 是从 $[0,1]$ 到 $[0,2]$ 的双射，[正切函数](../tangent-function/)是从 $(-\pi/2,\pi/2)$ 到 $\mathbb{R}$ 的双射。区间 $[0,1]$ 和 $(0,1)$ 也有相同的基数。长度区分这些区间，而基数则不能。
