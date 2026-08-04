---
title: 有理数
title_en: Rational Numbers
source: https://algebrica.org/rational-numbers/
license: CC BY-NC 4.0
tags:
  - cardinality
  - countability
  - decimal-expansion
  - density
  - equivalence-class
  - field
  - lowest-terms
  - ordered-field
  - periodic-expansion
  - rational-numbers
translation:
  status: current
  source_hash: b923b0a9bdbccf1beb106bd4279a87f6767a6252816a318370bd6d1f1af9881b
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---

## 定义

有理数的[集合](../sets/)记作 $\mathbb{Q}$。其中的元素是两个[整数](../integers/)之比，且分母非零：

$$
\mathbb{Q} := \left\{\ \frac{p}{q} \mid p,q \in \mathbb{Z},\ q \neq 0\ \right\}
$$

在分数 $p/q$ 中，整数 $p$ 是分子，整数 $q$ 是分母。要求 $q \neq 0$ 是必要的，因为在 $\mathbb{Z}$ 和 $\mathbb{Q}$ 中除以零都没有定义。

每个整数都是有理数，因为任意 $n \in \mathbb{Z}$ 都可以写成 $n/1$。因此 $\mathbb{Z} \subset \mathbb{Q}$。再结合 $\mathbb{N} \subset \mathbb{Z}$，就得到[数的类型](../types-of-numbers/)中描述的包含链：

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}
$$

整数集对非零整数的除法不封闭，因为 $1/2$ 不是整数。每个非零有理数在 $\mathbb{Q}$ 中都有乘法逆元，所以只要除数非零，两个有理数的商仍是有理数。

## 作为等价类的构造

在对 $\mathbb{Q}$ 的严格构造中，每个有理数都是整数有序对的一个等价类。这与从[自然数](../natural-numbers/)的有序对构造 $\mathbb{Z}$ 的方式类似。考虑集合：

$$
P = \{\ (p, q) \in \mathbb{Z} \times \mathbb{Z} \mid q \neq 0\ \}
$$

如果两个属于 $P$ 的有序对 $(p, q)$ 和 $(r, s)$ 的交叉乘积相等，就称它们等价。这个条件不需要使用除法：

$$
(p, q) \sim (r, s) \quad \longleftrightarrow \quad ps = qr
$$

关系 $\sim$ 具有自反性、对称性和传递性。因此，它是 $P$ 上的等价关系，而有理数集合就是商集：

$$
\mathbb{Q} := P / {\sim}
$$

分数 $p/q$ 是有序对 $(p, q)$ 的等价类。例如，有序对 $(2, 3)$、$(4, 6)$ 和 $(-6, -9)$ 属于同一个类，表示有理数 $2/3$。交叉乘积验证了这两个等价关系：

$$
2 \cdot 6 = 12 = 3 \cdot 4, \qquad 2 \cdot (-9) = -18 = 3 \cdot (-6)
$$

分子和分母不同的分数可能表示同一个有理数。有理数是一个等价类，而不是这个类中的某个特定代表元。

## 最简形式

每个有理数都有唯一的约分代表元，也称为最简形式。当 $\gcd(p, q) = 1$ 且 $q > 0$ 时，分数 $p/q$ 处于最简形式。这些条件会从每个等价类中选出唯一的有序对 $(p, q)$。

要约分一个分数，就把分子和分母同时除以它们的最大公约数。对于 $18/24$，最大公约数是 $6$，因此：

$$
\frac{18}{24} = \frac{18 / 6}{24 / 6} = \frac{3}{4}
$$

有序对 $(3, 4)$ 满足 $\gcd(3, 4) = 1$，是该类的最简形式代表元。对于负有理数，负号放在分子上，分母保持为正。因此 $-15/35$ 的最简形式是 $-3/7$。

> 假设 $p/q$ 和 $r/s$ 处于最简形式且表示同一个有理数。等式 $ps = qr$、两对分子的互素性以及 $q, s > 0$ 共同蕴含 $p = r$ 且 $q = s$。因此，两个约分分数表示同一个有理数，当且仅当它们完全相同。

## 算术运算

在 $\mathbb{Q}$ 上的加法和乘法定义在代表元上。对于 $\mathbb{Q}$ 中的 $p/q$ 和 $r/s$，定义为：

$$
\frac{p}{q} + \frac{r}{s} = \frac{ps + qr}{qs}
$$

$$
\frac{p}{q} \cdot \frac{r}{s} = \frac{pr}{qs}
$$

只要 $q$ 和 $s$ 非零，分母 $qs$ 就非零。交叉相乘表明，等价的代表元会给出等价的和与积，因此这两个运算在等价类上都是良定义的。减法使用加法逆元 $-p/q = (-p)/q$；除以非零有理数 $r/s$ 就是乘以其倒数 $s/r$：

$$
\frac{p}{q} - \frac{r}{s} = \frac{ps - qr}{qs}
$$

$$
\frac{p}{q} \div \frac{r}{s} = \frac{p}{q} \cdot \frac{s}{r} = \frac{ps}{qr}, \qquad r \neq 0
$$

有理数对加法、减法和乘法封闭；当除数非零时，也对除法封闭。例如：

$$
\frac{2}{3} + \frac{1}{4} = \frac{2 \cdot 4 + 3 \cdot 1}{3 \cdot 4} = \frac{11}{12}
$$

$$
\frac{2}{3} \cdot \frac{1}{4} = \frac{2}{12} = \frac{1}{6}
$$

由于 $\gcd(2, 12) = 2$，第二个结果可以约分为 $1/6$。

## 域结构

在这些运算下，$\mathbb{Q}$ 是一个[域](../fields/)。它是 $\mathbb{Z}$ 的分式域，并且通过通常的[嵌入](../homomorphisms-and-isomorphisms/) $n \mapsto n/1$，成为包含整数的最小域。对所有 $a, b, c \in \mathbb{Q}$，域公理为：

+ 加法满足结合律和交换律，$0 = 0/1$ 是加法单位元。
+ 每个有理数 $a$ 都有加法逆元 $-a$，满足 $a + (-a) = 0$。
+ 乘法满足结合律和交换律，$1 = 1/1$ 是乘法单位元。
+ 每个非零有理数 $a$ 都有乘法逆元 $a^{-1}$，满足 $a \cdot a^{-1} = 1$。
+ 乘法对加法满足分配律：$a(b + c) = ab + ac$。

与 $\mathbb{Z}$ 的区别在于，$\mathbb{Q}$ 中每个非零元素都有乘法逆元。只有 $1$ 和 $-1$ 这两个整数的逆元仍是整数。

$\mathbb{Q}$ 还从 $\mathbb{Z}$ 继承了全序。当 $q > 0$ 时，有理数 $p/q$ 在 $p > 0$ 时为正，在 $p < 0$ 时为负。如果 $q, s > 0$，则当且仅当 $ps < rq$ 时有 $p/q < r/s$。这个序与加法以及乘以正元素相容，因此 $\mathbb{Q}$ 是一个[有序域](../properties-of-real-numbers/)。

## 小数表示

每个有理数的小数展开要么终止，要么最终循环。展开由长除法得到，其形式取决于分母最简形式的质因数分解。

将正分母写成 $q = 2^a5^bm$，其中 $a, b \geq 0$ 且 $\gcd(m, 10) = 1$。当且仅当 $m = 1$ 时，小数展开终止。如果 $m > 1$，循环部分的长度等于 $10$ 模 $m$ 的[乘法阶](../groups/)，并且整除 $\varphi(m)$，其中 $\varphi$ 是[欧拉函数](../modulo-operator/)。

两种情况如下：

$$
\frac{1}{4} = 0.25, \qquad \frac{3}{8} = 0.375
$$

$$
\frac{1}{3} = 0.\overline{3}, \qquad \frac{1}{7} = 0.\overline{142857}, \qquad \frac{5}{6} = 0.8\overline{3}
$$

上划线标出无限重复的数字块。对于 $1/7$，周期长度为 $6$，等于 $\varphi(7)$。由于 $6 = 2 \cdot 3$，分母 $5/6$ 中的因子 $2$ 产生不循环的前缀，而因子 $3$ 产生循环部分。终止小数还有一个带循环 $9$ 的第二种表示，例如 $0.25 = 0.24\overline{9}$。

> 一个实数是有理数，当且仅当它的小数展开终止或最终循环。因此，无限且不循环的小数展开表示一个[无理数](../irrational-numbers/)。

## 将循环小数转化为分数

每个最终循环小数都是有理数。要恢复它的分数形式，可以乘以 $10$ 的适当幂，使循环块的两份对齐，然后减去原来的小数。这样循环尾就会抵消。

对于 $x = 0.\overline{27}$，循环块有两位。乘以 $100$ 会将小数点移过一个完整周期：

$$
100 x = 27.\overline{27}
$$

减去原方程 $x = 0.\overline{27}$，即可消去循环尾并得到一个线性方程：

$$
100 x - x = 27 \quad\Longrightarrow\quad 99 x = 27 \quad\Longrightarrow\quad x = \frac{27}{99} = \frac{3}{11}
$$

由于 $\gcd(27, 99) = 9$，最后一步将分数约成了 $3/11$。如果展开含有不循环前缀，就先乘以 $10$ 的适当幂将小数点移过前缀，再对循环部分进行同样的消去。

## 实数轴上的稠密性

有理数在 $\mathbb{R}$ 中稠密。因此，对于满足 $x < y$ 的任意 $x, y \in \mathbb{R}$，都存在有理数 $q$ 使得 $x < q < y$。证明使用了 $\mathbb{R}$ 的阿基米德性质，详见[实数](../real-numbers/)。

给定 $x < y$，阿基米德性质保证存在正整数 $n$，使得 $n(y - x) > 1$。[开区间](../intervals/) $(nx, ny)$ 的长度大于 $1$，因此存在整数 $m$ 满足 $nx < m < ny$。由于 $n > 0$，除以 $n$ 得：

$$
x < \frac{m}{n} < y
$$

有理数 $m/n$ 严格位于 $x$ 和 $y$ 之间。对 $(x, m/n)$ 递归应用同一论证，就能在 $(x, y)$ 中得到无穷多个不同的有理数。特别地，任意两个不同的有理数之间都有无穷多个其他有理数。

等价地，用[绝对值](../absolute-value/)表述：对于每个 $x \in \mathbb{R}$ 和每个 $\varepsilon > 0$，都存在 $q \in \mathbb{Q}$ 满足 $|x - q| < \varepsilon$。这一逼近性质并不意味着 $\mathbb{Q}$ 是完备的。例如，一个有理数[柯西数列](../cauchy-sequence/)可以在 $\mathbb{R}$ 中收敛到 $\sqrt{2}$，尽管 $\sqrt{2} \notin \mathbb{Q}$。

## 基数

有理数是可数无限的，即 $\mathbb{Q}$ 与 $\mathbb{N}$ 之间存在[双射](../functions/)。显式枚举可以证明这一点。可数性的通用判据，以及基于从 $\mathbb{Z}\times(\mathbb{N}\setminus\{0\})$ 到有理数的满射的另一种证明，见[基数与可数集](../cardinality-and-countable-sets/)。

下面的无限表格在第 $p$ 行、第 $q$ 列放置分数 $p/q$：

$$
\begin{array}{cccccc}
1/1 & 1/2 & 1/3 & 1/4 & 1/5 & \cdots \\[6pt]
2/1 & 2/2 & 2/3 & 2/4 & 2/5 & \cdots \\[6pt]
3/1 & 3/2 & 3/3 & 3/4 & 3/5 & \cdots \\[6pt]
4/1 & 4/2 & 4/3 & 4/4 & 4/5 & \cdots \\[6pt]
\vdots & \vdots & \vdots & \vdots & \vdots & \ddots
\end{array}
$$

沿对角线遍历表格，并且只保留满足 $\gcd(p, q) = 1$ 的 $p/q$，每个正有理数恰好出现一次。将每个正有理数与其负数交错排列，并把 $0$ 放在开头，就得到 $\mathbb{Q}$ 的一个枚举。

因此 $|\mathbb{Q}| = |\mathbb{N}|$，而 $\mathbb{R}$ 是不可数的。稠密性与基数回答的是不同问题。每个非空实区间都含有有理数，但 $\mathbb{Q}$ 的任何枚举都不可能穷尽 $\mathbb{R}$。事实上，[无理数](../irrational-numbers/)的集合是不可数的。

## 在实数轴上的位置

在实数轴上，有理点正好是坐标形如 $p/q$ 的点，其中 $p, q \in \mathbb{Z}$ 且 $q \neq 0$。每个非空区间都含有无穷多个这样的点。其余点的坐标都是无理数。

$\mathbb{Q}$ 和 $\mathbb{R}$ 都是有序域，但 $\mathbb{Q}$ 不满足[完备性公理](../supremum-and-infimum/)。考虑集合：

$$
S = \{\ q \in \mathbb{Q} \mid q^2 < 2\ \}
$$

集合 $S$ 非空，因为 $1 \in S$，并且它以上界 $2$ 为界。假设 $u \in \mathbb{Q}$ 是它的最小上界。那么 $1 \leq u \leq 2$。对于这个 $u$，下面的数是有理数：

$$
v = \frac{2(u + 1)}{u + 2}
$$

我们有：

$$
v - u = \frac{2 - u^2}{u + 2}, \qquad v^2 - 2 = \frac{2(u^2 - 2)}{(u + 2)^2}
$$

如果 $u^2 < 2$，则 $v > u$ 且 $v \in S$，这与 $u$ 是上界矛盾。如果 $u^2 > 2$，则 $0 < v < u$ 且 $v^2 > 2$。$S$ 中每个负元素都小于 $v$；对于每个非负的 $q \in S$，都有 $q^2 < 2 < v^2$，所以 $q < v$。因此 $v$ 是一个小于 $u$ 的上界，这与 $u$ 的最小性矛盾。剩下的等式 $u^2 = 2$ 会推出 $u = \sqrt{2}$，而这不是有理数，是[无理数](../irrational-numbers/)。所以 $S$ 在 $\mathbb{Q}$ 中没有最小上界，而它在 $\mathbb{R}$ 中的最小上界是 $\sqrt{2}$。
