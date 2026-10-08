---
title: 实数轴的拓扑
title_en: Topology of the Real Line
source: https://algebrica.org/topology-of-the-real-line/
license: CC BY-NC 4.0
tags:
  - accumulation-point
  - boundary-point
  - closed-set
  - closure
  - compactness
  - heine-borel-theorem
  - interior-point
  - isolated-point
  - neighborhood
  - open-cover
  - open-set
  - real-line
translation:
  status: current
  source_hash: 7344e1d5f67ad780e414ae9e9a7a9b2a35e0843b57356bd8cf9175f93cfce895
  translator: codex
  updated: "2026-10-08T00:00:00.000Z"
---

## 引言

实数轴的拓扑是 $\mathbb{R}$ 的开[子集](../sets/)所组成的族。在[实数轴](../real-numbers/)上，这些集合通过两点之间的距离 $|x-y|$ 定义。当集合中的每一点都是该集合所含某个开区间的中心时，这个集合是开集。所有这类集合组成 $\mathbb{R}$ 的标准拓扑；开集中的隶属关系描述了接近程度，而不必引用距离。

这些概念包括邻域、内部点与边界点、聚点与孤立点、开集与闭集、闭包与内部。海涅–博雷尔定理指出，$\mathbb{R}$ 的子集是紧的，当且仅当它既闭又有界。

## 邻域、内部点与边界点

给定点 $x\in\mathbb{R}$ 和半径 $\varepsilon>0$，$x$ 的 $\varepsilon$-邻域是开[区间](../intervals/)：

$$
I_\varepsilon(x)=(x-\varepsilon,x+\varepsilon)=\{y\in\mathbb{R} \mid |y-x|<\varepsilon\}
$$

其中的点到 $x$ 的距离（用[绝对值](../absolute-value/)测量）小于 $\varepsilon$。若 $0 < \delta < \varepsilon$，则 $I_\delta(x)\subseteq I_\varepsilon(x)$。

$x$ 的去心 $\varepsilon$-邻域包含 $I_\varepsilon(x)$ 的所有点，但不包含其中心：

$$
I_\varepsilon^*(x)=I_\varepsilon(x)\setminus\{x\}=\{y\in\mathbb{R} \mid 0<|y-x|<\varepsilon\}
$$

去心邻域包含 $x$ 附近的点，但不包含 $x$。它用于聚点和极限的定义；这些定义研究任意接近某点时的行为，并不要求函数在该点有值。

设 $E\subseteq\mathbb{R}$，$x$ 是实数轴上的一点。以下三种情形恰有一种成立。

+ 以 $x$ 为中心的某个邻域包含于 $E$ 时，$x$ 是内部点。
+ 当 $x$ 的某个邻域包含于补集 $\mathbb{R}\setminus E$ 时，$x$ 是 $E$ 的外部点。
+ 当 $x$ 的每个邻域都至少包含一个 $E$ 中的点和一个 $\mathbb{R}\setminus E$ 中的点时，$x$ 是 $E$ 的边界点。

这三个类别两两不交并覆盖 $\mathbb{R}$。内部点的集合称为 $E$ 的内部，记为 $E^{\circ}$；边界点的集合称为 $E$ 的边界，记为 $\partial E$。内部点属于 $E$，外部点不属于 $E$，而边界点可能属于 $E$，也可能属于其补集。

当 $E=(0,1]$ 时，内部为 $(0,1)$，外部为 $(-\infty,0)\cup(1,+\infty)$，边界为 $\{0,1\}$，其中 $1\in E$ 而 $0\notin E$。当 $E=\mathbb{Q}$ 时，每个实数的邻域都同时包含有理数和无理数，因此没有点是 $\mathbb{Q}$ 的内部点或外部点，并且 $\partial\mathbb{Q}=\mathbb{R}$。

## 开集

集合 $A\subseteq\mathbb{R}$ 是开集，当且仅当 $A$ 中每一点都是 $A$ 的内部点，也就是 $A=A^{\circ}$。对每个 $x\in A$，存在一个依赖于 $x$ 的半径 $\varepsilon>0$，使得 $I_\varepsilon(x)\subseteq A$。

有界区间 $(a,b)$ 是开集。取 $x\in(a,b)$，令 $\varepsilon=\min\{x-a,b-x\}$；由于 $a < x < b$，这是一个正数。若 $|y-x| < \varepsilon$，则 $y > x-\varepsilon\geq a$ 且 $y < x+\varepsilon\leq b$，所以 $I_\varepsilon(x)\subseteq(a,b)$。无界区间 $(a,+\infty)$ 和 $(-\infty,b)$ 也是开集，分别取 $\varepsilon=x-a$ 与 $\varepsilon=b-x$。空集是开集，因为其中没有点需要检验；$\mathbb{R}$ 是开集，因为它包含每个邻域。闭区间 $[a,b]$ 不是开集，因为对任意 $\varepsilon>0$，点 $a-\varepsilon/2$ 都位于 $I_\varepsilon(a)$ 中却不在 $[a,b]$ 中，所以 $a$ 不是内部点。

两种运算保持开性。任意开集的并是开集，有限个开集的交也是开集。

设 $\{A_i\}_{i\in I}$ 是开集，且 $x$ 属于它们的并。于是对某个指标 $i_0$ 有 $x\in A_{i_0}$；由于 $A_{i_0}$ 是开集，存在 $\varepsilon>0$ 使 $I_\varepsilon(x)\subseteq A_{i_0}$，从而 $I_\varepsilon(x)$ 包含于这些集合的并。对于有限个开集 $A_1,\dots,A_n$ 及交集中的点 $x$，对每个 $j$ 都存在半径 $\varepsilon_j>0$，使 $I_{\varepsilon_j}(x)\subseteq A_j$。数 $\varepsilon=\min\{\varepsilon_1,\dots,\varepsilon_n\}$ 为正，因为它是有限个正数中的最小值。由于对每个 $j$ 都有 $I_\varepsilon(x)\subseteq A_j$，该邻域包含于交集。

交集的情形必须是有限的。所有邻域 $(-1/n,1/n)$（其中 $n\in\mathbb{N}$）的交集是一个单点：

$$
\bigcap_{n=1}^{\infty}\left(-\frac{1}{n},\frac{1}{n}\right)=\{0\}
$$

根据[阿基米德性质](../real-numbers/)，当 $n$ 足够大时，满足 $x\neq0$ 的实数 $x$ 有 $|x|>1/n$，因此它落在其中一个集合之外。单点集 $\{0\}$ 不是开集，因为 $0$ 的每个邻域都包含 $0$ 以外的点。对于无限族，前面论证中使用的最小值变成下确界，而正数的下确界可能为零。

> 这两个稳定性性质，加上 $\emptyset$ 和 $\mathbb{R}$ 的开性，在一般拓扑中被作为公理。集合 $X$ 上的拓扑是 $X$ 的一个子集族，称为开集；它包含 $\emptyset$ 和 $X$，并且对任意并和有限交保持稳定。$\mathbb{R}$ 的开子集构成实数轴的标准拓扑，也称欧几里得拓扑。

$\mathbb{R}$ 的每个非空开子集都是一族可数个两两不交的开区间的并。对 $x\in A$，所有包含 $x$ 且包含于 $A$ 的开区间的并是一个开区间；这样得到的两个区间要么相等，要么不相交。根据稠密性，每个区间都包含一个[有理数](../rational-numbers/)，而不相交的区间包含不同的有理数，因此这族区间是可数的。

## 聚点与孤立点

当对每个 $\varepsilon>0$ 都有 $I_\varepsilon^*(x)\cap E\neq\emptyset$ 时，称点 $x\in\mathbb{R}$ 是 $E\subseteq\mathbb{R}$ 的聚点。等价地说，$x$ 的每个邻域都至少包含一个与 $x$ 不同的 $E$ 中的点。$E$ 的聚点集合称为导集 $E'$。

该定义比较 $x$ 与 $E$ 中靠近它的点，并不要求 $x\in E$。因此，$E$ 的聚点不一定属于 $E$，而 $E$ 中的点也不一定是聚点。属于 $E$ 但不是 $E$ 的聚点的点 $x\in E$，称为 $E$ 的孤立点；它有一个邻域与 $E$ 的交集只有 $x$。因此，$E$ 的每个点不是孤立点，就是 $E$ 的聚点。

聚点的每个邻域都包含 $E$ 中无穷多个点。假设某个邻域 $I_\varepsilon(x)$ 只包含 $E$ 中与 $x$ 不同的点 $y_1,\dots,y_n$。这个列表非空，因为 $x\in E'$；数 $\delta=\min\{|y_1-x|,\dots,|y_n-x|\}$ 为正，因为这些 $y_j$ 都不等于 $x$。$I_\delta(x)$ 中任何与 $x$ 不同的 $E$ 中点都必须是某个 $y_j$，但这是不可能的，因为 $|y_j-x|\geq\delta$。所以 $I_\delta(x)$ 除了可能包含 $x$ 之外不含 $E$ 的任何点，这与 $x\in E'$ 矛盾。

聚点可以通过[数列](../sequences/)刻画。当且仅当存在一个由 $E$ 中点组成、每一项都不同于 $x$ 且收敛到 $x$ 的数列 $(x_n)$ 时，点 $x$ 属于 $E'$。若 $x\in E'$，对每个 $n\in\mathbb{N}$ 选取 $x_n\in I_{1/n}(x)\cap E$ 且 $x_n\neq x$。于是 $|x_n-x|<1/n$，所以 $x_n\to x$。反过来，这样的数列在 $x$ 的每个邻域中都有一项不同于 $x$。

[极限](../limits/)的定义使用了这一概念。写作 $\lim_{x\to x_0}f(x)=\ell$ 时，要求 $x_0$ 是 $f$ 定义域的聚点，这样才能考察任意接近 $x_0$ 的点处的 $f$ 值。点 $x_0$ 可以不在定义域中，这正是定义将它排除在比较之外的原因。

+ 对于 $E=(0,1]$，有 $E'=[0,1]$，且 $E$ 没有孤立点。
+ 对于 $E=\{1/n \mid n\in\mathbb{N}\}$，每个点都是孤立点，且 $E'=\{0\}$，所以 $E$ 的唯一聚点不属于 $E$。
+ 对于 $E=\mathbb{Q}$，有 $E'=\mathbb{R}$，因为有理数稠密。
+ 有限集和 $\mathbb{Z}$ 都没有聚点，它们的所有点都是孤立点。

没有聚点的 $\mathbb{R}$ 的子集必定是有限的或无界的。每个有界的无限实数集至少有一个聚点。这是[博尔查诺–魏尔斯特拉斯定理](../convergent-and-divergent-sequences/)的集合论形式，也是实数[完备性](../real-numbers/)的结果。在 $\mathbb{Q}$ 中该结论不成立：$\sqrt{2}$ 的十进制截断数组成一个有界无限集，但在 $\mathbb{Q}$ 中没有聚点。

## 闭集

集合 $F\subseteq\mathbb{R}$ 是闭集，当且仅当其补集 $\mathbb{R}\setminus F$ 是开集。等价地，$F$ 是闭集，当且仅当它的每个聚点都属于它，即 $F'\subseteq F$。

设 $F$ 是闭集且 $x\in F'$。如果 $x$ 不属于 $F$，那么它属于开集 $\mathbb{R}\setminus F$；于是它的某个邻域包含于 $\mathbb{R}\setminus F$，不含 $F$ 中的任何点，这与 $x\in F'$ 矛盾。反过来，假设 $F'\subseteq F$，取 $x\in\mathbb{R}\setminus F$。由 $x\notin F'$ 可知，某个邻域 $I_\varepsilon(x)$ 不含除 $x$ 以外的 $F$ 中点；又因 $x\notin F$，有 $I_\varepsilon(x)\subseteq\mathbb{R}\setminus F$。因此 $F$ 的补集是开集，$F$ 是闭集。

由聚点的数列刻画可得一个数列判据。集合 $F$ 是闭集，当且仅当 $F$ 中每个[收敛数列](../convergent-and-divergent-sequences/)的极限都属于 $F$。若 $F$ 是闭集且 $x_n\to x$、$x_n\in F$，要么对某个指标有 $x=x_n$，从而 $x\in F$；要么有无穷多个指标满足 $x_n\neq x$，此时 $x\in F'\subseteq F$。

+ 区间 $[a,b]$ 是闭集，因为其补集 $(-\infty,a)\cup(b,+\infty)$ 是两个开集的并。
+ 有限集和 $\mathbb{Z}$ 没有聚点，因此都是闭集。
+ 集合 $\{1/n \mid n\in\mathbb{N}\}$ 不是闭集，因为 $0$ 是不属于它的聚点。集合 $\{0\}\cup\{1/n \mid n\in\mathbb{N}\}$ 是闭集。
+ 区间 $[0,1)$ 既不是开集也不是闭集，因为 $0$ 不是内部点，而 $1$ 是集合外部的聚点。
+ 集合 $\emptyset$ 和 $\mathbb{R}$ 既是开集又是闭集，并且它们是具有此性质的 $\mathbb{R}$ 的唯一子集。这等价于实数轴的[连通性](../intervals/)。

根据[德摩根定律](../de-morgan-laws/)，任意闭集的交是闭集，有限个闭集的并是闭集。并集必须是有限的。对每个 $n\in\mathbb{N}$，集合 $[1/n,1]$ 都是闭集，但所有这些集合的并是 $(0,1]$，不是闭集。

## 闭包、内部与边界

我们已经逐点定义了 $E$ 的内部。它是所有包含于 $E$ 的开集的并，因此是 $E$ 的最大开子集。$E$ 的闭包记为 $\overline{E}$，是所有包含 $E$ 的闭集的交。闭集的交是闭集，所以 $\overline{E}$ 是包含 $E$ 的最小闭集。

$E$ 的闭包由 $E$ 的点和其聚点组成：

$$
\overline{E}=E\cup E'
$$

等价地，当 $x$ 的每个邻域都与 $E$ 相交时，点 $x$ 属于 $E$ 的闭包：

$$
x\in\overline{E}\iff I_\varepsilon(x)\cap E\neq\emptyset \quad \forall \varepsilon>0
$$

若 $x\in E$，交集中包含 $x$。若 $x\notin E$ 且 $x$ 的每个邻域都与 $E$ 相交，那么每个交集都包含一个不同于 $x$ 的 $E$ 中点，所以 $x\in E'$。反向结论由聚点的定义得到。

集合 $E\cup E'$ 包含 $E$ 且是闭集。为说明这一点，设 $x$ 是 $E\cup E'$ 的聚点，并取 $\varepsilon>0$。邻域 $I_\varepsilon(x)$ 包含 $E\cup E'$ 中一个不同于 $x$ 的点 $y$。若 $y\in E$，则该邻域在 $x$ 之外与 $E$ 相交。若 $y\in E'$，则取一个包含于 $I_\varepsilon(x)$ 且避开 $x$ 的 $y$ 的邻域；这个邻域包含一个不同于 $y$ 的 $E$ 中点。在两种情形下，$I_\varepsilon(x)$ 都与 $E$ 在某个不同于 $x$ 的点相交，所以 $x\in E'$。任何包含 $E$ 的闭集 $F$ 都满足 $E'\subseteq F'\subseteq F$，从而 $E\cup E'\subseteq F$；因此包含 $E$ 的最小闭集是 $E\cup E'$。于是，$E$ 是闭集，当且仅当 $E=\overline{E}$；$E$ 是开集，当且仅当 $E=E^{\circ}$。边界是闭包与内部之差：

$$
\partial E=\overline{E}\setminus E^{\circ}
$$

边界点的每个邻域都同时与 $E$ 及其补集相交。因此，边界是两个闭包的交：

$$
\partial E=\overline{E}\cap\overline{\mathbb{R}\setminus E}
$$

当 $\overline{A}=\mathbb{R}$，或等价地，当每个非空开集都包含 $A$ 中的点时，称集合 $A\subseteq\mathbb{R}$ 在 $\mathbb{R}$ 中稠密。[有理数](../rational-numbers/)和[无理数](../irrational-numbers/)都稠密。因此，对 $E=\mathbb{Q}$，有 $\overline{E}=\mathbb{R}$、$E^{\circ}=\emptyset$ 和 $\partial\mathbb{Q}=\mathbb{R}$。由于 $\mathbb{Q}$ 是可数集，实数轴含有一个可数稠密子集，这一性质称为可分性。

## 紧性

$K\subseteq\mathbb{R}$ 的开覆盖，是一族开集 $\{A_i\}_{i\in I}$，其并包含 $K$。子覆盖是其中并仍包含 $K$ 的子族；当子族只有有限个成员时，称为有限子覆盖。当 $K$ 的每个开覆盖都有有限子覆盖时，称集合 $K$ 是紧的。

这个定义涉及每一个开覆盖。某一个覆盖有有限子覆盖，并不能证明紧性。

有限集是紧的。给定一个开覆盖，为有限集中的每个点选取一个包含它的成员；所选成员构成有限子覆盖。区间 $(0,1)$ 不是紧的。对 $n\geq2$，区间 $A_n=(1/n,1)$ 是开集并覆盖 $(0,1)$，因为每个 $x\in(0,1)$ 在 $n$ 足够大时都满足 $x>1/n$。有限子族的并是其中最大指标 $N$ 所对应的 $(1/N,1)$，它遗漏 $(0,1)$ 中低于 $1/N$ 的点。实数轴不是紧的，因为覆盖 $\{(-n,n)\}_{n\in\mathbb{N}}$ 没有有限子覆盖。

$\mathbb{R}$ 的每个紧子集都是有界且闭的。

紧集 $K$ 是[有界的](../supremum-and-infimum/)。当 $n\in\mathbb{N}$ 时，区间 $(-n,n)$ 构成 $K$ 的开覆盖；有限子覆盖的并是某个 $(-N,N)$，因此对每个 $x\in K$ 都有 $|x| < N$。

紧集 $K$ 是闭集。固定 $y\notin K$，考虑集合：

$$
A_n=\left(-\infty,y-\frac{1}{n}\right)\cup\left(y+\frac{1}{n},+\infty\right)
$$

每个 $A_n$ 都是开集，因为它是两个开区间的并，并且 $A_n\subseteq A_{n+1}$。每个 $x\in K$ 都满足 $|x-y|>0$，所以当 $n$ 足够大时 $|x-y|>1/n$；因此族 $\{A_n\}_{n\in\mathbb{N}}$ 覆盖 $K$。有限子覆盖的并是其中最大指标 $N$ 所对应的 $A_N$，而 $K\subseteq A_N$ 意味着 $I_{1/N}(y)\cap K=\emptyset$。点 $y$ 是 $K$ 的外部点，所以 $\mathbb{R}\setminus K$ 是开集。

## 海涅–博雷尔定理

集合 $K\subseteq\mathbb{R}$ 是紧的，当且仅当它既是闭集又是有界集。

其中一个方向已经证明。对于反向，我们先证明每个闭有界区间都是紧的，再考虑任意闭有界集。

闭区间 $J_1=[a,b]$ 是紧的。假设开覆盖 $\mathcal{O}$ 没有 $J_1$ 的有限子覆盖，并在中点处把 $J_1$ 分成两个闭半区间。如果两个半区间都能由 $\mathcal{O}$ 的有限子覆盖，那么这两个有限子族的并就会覆盖 $J_1$；因此至少有一个半区间没有有限子覆盖。将它记为 $J_2$，重复二分过程。结果得到闭区间的嵌套数列：

$$
J_1\supseteq J_2\supseteq J_3\supseteq\cdots
$$

区间 $J_n$ 的长度为 $(b-a)/2^{n-1}$，并且没有一个 $J_n$ 有来自 $\mathcal{O}$ 的有限子覆盖。根据[闭区间套定理](../real-numbers/)，存在一个点 $c$ 属于每个 $J_n$。由于 $\mathcal{O}$ 覆盖 $J_1$，某个 $A\in\mathcal{O}$ 包含 $c$；又因 $A$ 是开集，存在 $\varepsilon>0$ 使 $I_\varepsilon(c)\subseteq A$。选取 $n$ 使 $(b-a)/2^{n-1}<\varepsilon$。由于 $c\in J_n$，$J_n$ 的每个点到 $c$ 的距离都小于 $\varepsilon$，因此：

$$
J_n\subseteq I_\varepsilon(c)\subseteq A
$$

集合 $A$ 是 $J_n$ 的有限子覆盖。这与 $J_n$ 的选取矛盾，因此 $\mathcal{O}$ 有 $[a,b]$ 的有限子覆盖。

现在令 $K$ 是闭有界集，$\mathcal{O}$ 是 $K$ 的开覆盖。由于 $K$ 有界，存在包含它的区间 $[a,b]$。因为 $K$ 是闭集，$\mathbb{R}\setminus K$ 是开集。因此，$\mathcal{O}\cup\{\mathbb{R}\setminus K\}$ 是 $[a,b]$ 的开覆盖，并由上一步得到有限子覆盖。如果这个有限子覆盖包含 $\mathbb{R}\setminus K$，就将其移除。剩余成员属于 $\mathcal{O}$ 且覆盖 $K$，因为 $K$ 中没有点属于 $\mathbb{R}\setminus K$。因此 $K$ 是紧的。

> 该定理是 $\mathbb{R}$ 的性质，并非所有带距离的集合都满足的普遍事实。取带有从实数轴继承的距离的 $X=(0,1)$，令 $F=\{1/n \mid n\geq2\}$。在 $X$ 内，集合 $F$ 有界且闭，因为它在 $\mathbb{R}$ 中唯一的聚点是 $0$，而 $0$ 不属于 $X$。以 $1/n$ 为中心、半径为 $1/(n+1)^2$ 的区间只与 $F$ 在 $1/n$ 处相交，因此这些区间构成 $F$ 的开覆盖，但没有有限子族能覆盖 $F$，所以 $F$ 不是紧的。区别在于 $\mathbb{R}$ 完备，而 $X$ 不完备。

## 紧性与数列

在 $\mathbb{R}$ 中，一个数列条件等价于紧性。集合 $K\subseteq\mathbb{R}$ 是紧的，当且仅当 $K$ 中点组成的每个数列都有一个收敛到 $K$ 中某点的子数列。这一性质称为列紧性。

设 $K$ 是紧集，因而闭且有界；设 $(x_n)$ 是 $K$ 中的数列。该数列有界，所以根据[博尔查诺–魏尔斯特拉斯定理](../convergent-and-divergent-sequences/)有一个收敛子数列；由于 $K$ 是闭集，其极限属于 $K$。反过来，假设 $K$ 不是紧的。如果 $K$ 无界，则对每个自然数 n 选取 $x_n\in K$ 使 $|x_n|>n$。$(x_n)$ 的任何子数列都无界，因此没有子数列收敛。如果 $K$ 不是闭集，取一个不属于 $K$ 的聚点 $x\in K'$，并选取 $x_n\in K$ 使 $|x_n-x|<1/n$。那么 $x_n\to x$，每个子数列也都收敛到 $x$，而极限在 $K$ 之外。

如果[连续函数](../continuous-functions/)的定义域是紧集，那么它的像也是紧集。[魏尔斯特拉斯定理](../weierstrass-theorem/)指出，闭有界区间上的连续函数取得最大值和最小值。紧集上的连续函数是[一致连续的](../uniform-continuity/)，而单独的连续性并不能保证在 $(0,1)$ 和 $[0,+\infty)$ 这样的区间上一致连续。
