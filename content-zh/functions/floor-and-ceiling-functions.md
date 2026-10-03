---
title: 下取整函数与上取整函数
title_en: Floor and Ceiling Functions
source: https://algebrica.org/floor-and-ceiling-functions/
license: CC BY-NC 4.0
tags:
  - base-representation
  - ceiling-function
  - division-with-remainder
  - floor-function
  - fractional-part
  - functions
  - integer-part
  - jump-discontinuity
  - legendre-formula
  - modulo-operator
  - rounding
  - step-function
translation:
  status: current
  source_hash: bd37343e7cf1c1c1787b3c197c1683a36e3af5235210d3c89e2f8effd38fdae5
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 向下取整与向上取整

对每个实数 $x$，$x$ 的下取整是不超过 $x$ 的最大整数，$x$ 的上取整是不小于 $x$ 的最小整数。这两种取法定义了从 $\mathbb{R}$ 到 $\mathbb{Z}$ 的两个[函数](../functions/)：

$$
\lfloor x \rfloor = \max\{\ n \in \mathbb{Z} \mid n \le x \ \} \qquad \lceil x \rceil = \min\{\ n \in \mathbb{Z} \mid x \le n \ \}
$$

两个最值都存在。由 $\mathbb{R}$ 的[阿基米德性质](../real-numbers/)，有一个整数在 $x$ 之上，也有一个整数在 $x$ 之下，所以两个集合都非空。第一个集合有上界，第二个集合有下界。有上界的非空整数集有最大元，有下界的非空整数集有最小元。

下面的不等式刻画了每个函数返回的整数。对整数 $n$，有：

$$
\lfloor x \rfloor = n \iff n \le x < n + 1
$$

$$
\lceil x \rceil = n \iff n - 1 < x \le n
$$

由第一个等价关系，$\lfloor x \rfloor$ 是含有 $x$ 的唯一[区间](../intervals/) $[n, n+1)$ 的左端点。由第二个等价关系，$\lceil x \rceil$ 是含有 $x$ 的唯一区间 $(n-1, n]$ 的右端点。把它们应用于几个数，得到：

$$
\lfloor 3.7 \rfloor = 3 \qquad \lfloor 4 \rfloor = 4 \qquad \lfloor \pi \rfloor = 3 \qquad \lfloor -3.7 \rfloor = -4
$$

$$
\lceil 3.7 \rceil = 4 \qquad \lceil 4 \rceil = 4 \qquad \lceil \pi \rceil = 4 \qquad \lceil -3.7 \rceil = -3
$$

对于负的自变量，向下取整意味着沿实数轴向左移动，因而是远离原点。由于 $-4 \le -3.7 < -3$，不超过 $-3.7$ 的最大整数是 $-4$。而去掉小数点后面的数字得到的是 $-3$，那是 $-3.7$ 的上取整。

在[整数](../integers/)上，这两个函数都是恒等函数，因为对每个 $n \in \mathbb{Z}$ 都有 $n \le n < n+1$ 和 $n - 1 < n \le n$。因此它们共同的值域是整个 $\mathbb{Z}$，并且两个函数都不是单射，因为长度为 $1$ 的区间被送到同一个整数。

- - -

$y = \lfloor x \rfloor$ 的图像是一段阶梯，每一级的宽和高都是一个单位。下取整函数是[分段函数](../piecewise-functions/)，在每个区间 $[n, n+1)$ 上是常数，值为 $n$。它的图像由可数多条水平线段组成，每条线段含有左端点而不含右端点。

![图 1](/assets/functions/svg/floor-and-ceiling-functions-1.zh.svg)

$y = \lceil x \rceil$ 的图像有同样的阶梯形状，只是端点的取舍相反。在 $(n-1, n]$ 上，上取整函数是常数，值为 $n$，每条线段含有右端点而不含左端点。

![图 2](/assets/functions/svg/floor-and-ceiling-functions-2.zh.svg)

## 小数部分与四舍五入到最近的整数

$x$ 的小数部分是 $x$ 与它的下取整之差：

$$
\{x\} = x - \lfloor x \rfloor
$$

从 $\lfloor x \rfloor \le x < \lfloor x \rfloor + 1$ 的三项中减去 $\lfloor x \rfloor$，得到小数部分的取值范围：

$$
0 \le \{x\} < 1
$$

因此每个实数都有分解式 $x=\lfloor x\rfloor+\{x\}$，分成一个整数和一个 $[0, 1)$ 中的数。这个分解是唯一的。如果 $x = m + s = m' + s'$，其中 $m, m' \in \mathbb{Z}$ 且 $s, s' \in [0, 1)$，那么 $m - m' = s' - s$ 是严格介于 $-1$ 和 $1$ 之间的整数，因此 $m = m'$ 且 $s = s'$。

> 记号 $\{x\}$ 也用来表示只含 $x$ 的单元素集。这里 $x \bmod 1$ 表示与小数部分相同的量，带余除法一节会说明这一点。

- - -

小数部分恰好在整数处为零，并且周期为 $1$，因为对每个实数 $x$ 都有 $\{x+1\}=\{x\}$。它的图像是锯齿形的，由恒等函数减去下取整的阶梯得到。

![图 3](/assets/functions/svg/floor-and-ceiling-functions-3.zh.svg)

去掉小数点后面的数字定义的是向零截断，它在 $\mathbb{R}$ 上与下取整和上取整都不同。它在 $x \ge 0$ 时等于下取整，在 $x < 0$ 时等于上取整，所以可以用[符号函数](../sign-function/)写成 $\mathrm{sgn}(x)\lfloor|x|\rfloor$。丢弃小数部分的实数到整数的转换用的就是这种运算。

- - -

对平移后的自变量取一次下取整，就得到到最近整数的舍入。对实数 $x$ 和整数 $n$，有：

$$
\left\lfloor x + \frac{1}{2} \right\rfloor = n \iff n \le x + \frac{1}{2} < n + 1 \iff n - \frac{1}{2} \le x < n + \frac{1}{2}
$$

返回值 $n$，恰好当 $x$ 落在以 $n$ 为中心、半径为 $1/2$ 的左闭右开区间内。因此 $\lfloor x+1/2\rfloor$ 是离 $x$ 最近的整数，而恰好位于两个整数正中间的数被送到其中较大的那个。与之配对的表达式 $\lceil x-1/2\rceil$ 满足 $n - 1/2 < x \le n + 1/2$，在平局时取较小的整数。两种约定在 $x = 5/2$ 处不同：

$$
\left\lfloor \frac{5}{2} + \frac{1}{2} \right\rfloor = 3 \qquad \left\lceil \frac{5}{2} - \frac{1}{2} \right\rceil = 2
$$

两个整数到 $5/2$ 的距离都是 $1/2$，所以平局是由公式的选择决定的，而不是由远近决定的。

## 反射与平移

改变自变量的符号会使这两个函数互换。对每个实数 $x$，有：

$$
\lfloor -x \rfloor = -\lceil x \rceil \qquad \lceil -x \rceil = -\lfloor x \rfloor
$$

为了证明第一个恒等式，令 $n=\lceil x\rceil$，于是 $n - 1 < x \le n$。乘以 $-1$ 使两个不等号都反向，得到 $-n \le -x < -n + 1$，这正是刻画 $-x$ 的下取整的不等式。因此 $\lfloor -x\rfloor=-n=-\lceil x\rceil$。在刚证明的恒等式中把 $x$ 换成 $-x$，就得到第二个恒等式。从几何上看，绕原点旋转半周把下取整的阶梯变成上取整的阶梯。

当 $x$ 是整数时，下取整和上取整相等，否则相差 $1$：

$$
\lceil x \rceil - \lfloor x \rfloor =
\begin{cases}
0 & x \in \mathbb{Z} \\[6pt]
1 & x \notin \mathbb{Z}
\end{cases}
$$

当 $x \in \mathbb{Z}$ 时，两个函数都返回 $x$。当 $x \notin \mathbb{Z}$ 时，不等式 $\lfloor x \rfloor \le x$ 是严格的，所以 $\lfloor x\rfloor<x<\lfloor x\rfloor+1$。这时整数 $\lfloor x \rfloor + 1$ 在 $x$ 之上，而每个更小的整数至多为 $\lfloor x \rfloor$，因而在 $x$ 之下。所以在 $x$ 之上的最小整数是 $\lfloor x \rfloor + 1$。

- - -

给自变量加上一个整数，两个函数的值都加上同一个整数。对每个实数 $x$ 和每个整数 $k$，有：

$$
\lfloor x + k \rfloor = \lfloor x \rfloor + k \qquad \lceil x + k \rceil = \lceil x \rceil + k
$$

给 $\lfloor x \rfloor \le x < \lfloor x \rfloor + 1$ 的三项加上 $k$，得到 $\lfloor x\rfloor+k\le x+k<\lfloor x\rfloor+k+1$，整数 $\lfloor x \rfloor + k$ 满足刻画 $\lfloor x + k \rfloor$ 的不等式。上取整的论证完全相同。这把上面提到的周期性推广到每个整数平移，因为 $\{x+k\}=\{x\}$。

条件 $k \in \mathbb{Z}$ 是必要的。对任意的实数 $x$ 和 $y$，和的下取整不一定等于下取整的和。当 $x = y = 1/2$ 时，和 $\lfloor x \rfloor + \lfloor y \rfloor$ 等于 $0$，而 $\lfloor x+y\rfloor=1$。写出 $x=\lfloor x\rfloor+\{x\}$ 和 $y=\lfloor y\rfloor+\{y\}$，并利用平移法则，得到：

$$
\lfloor x + y \rfloor = \lfloor x \rfloor + \lfloor y \rfloor + \lfloor \{x\} + \{y\} \rfloor
$$

两个小数部分都在 $[0, 1)$ 内，所以它们的和在 $[0, 2)$ 内，和的下取整是 $0$ 或 $1$。于是和的下取整至多比下取整的和大一个单位：

$$
\lfloor x \rfloor + \lfloor y \rfloor \le \lfloor x + y \rfloor \le \lfloor x \rfloor + \lfloor y \rfloor + 1
$$

## 把下取整或上取整与整数比较

把下取整或上取整与整数比较时，有时可以去掉取整而不改变不等式的真假。下面四条法则对每个实数 $x$ 和每个整数 $n$ 成立：

$$
\begin{align}
\lfloor x \rfloor < n &\iff x < n \\[6pt]
n \le \lfloor x \rfloor &\iff n \le x \\[6pt]
n < \lceil x \rceil &\iff n < x \\[6pt]
\lceil x \rceil \le n &\iff x \le n
\end{align}
$$

第二条法则由下取整作为最大元的定义得出。如果 $n \le \lfloor x \rfloor$，那么 $n\le\lfloor x\rfloor\le x$。反过来，如果 $n \le x$，那么整数 $n$ 属于不超过 $x$ 的整数的集合，这个集合的最大元是 $\lfloor x \rfloor$，所以 $n \le \lfloor x \rfloor$。第一条法则是第二条的逆否命题，因为 $n \le t$ 的否定是 $t < n$。对于第三条法则，利用 $\lceil x\rceil=-\lfloor-x\rfloor$，并把第一条法则应用于 $-x$ 和 $-n$：

$$
n < \lceil x \rceil \iff n < -\lfloor -x \rfloor \iff \lfloor -x \rfloor < -n \iff -x < -n \iff n < x
$$

第四条法则是第三条的逆否命题。

- - -

其余四种组合是不成立的。值 $x = 3/2$ 就否定了它们全部：

+ $\lfloor 3/2\rfloor\le1$ 成立，而 $3/2 \le 1$ 不成立。
+ $1 < 3/2$ 成立，而 $1<\lfloor3/2\rfloor$ 不成立。
+ $2\le\lceil3/2\rceil$ 成立，而 $2 \le 3/2$ 不成立。
+ $3/2 < 2$ 成立，而 $\lceil3/2\rceil<2$ 不成立。

成立的法则是这样一些：下取整被严格地从上方界住或不严格地从下方界住，上取整被严格地从下方界住或不严格地从上方界住。每个反例都来自严格介于两个整数之间的 $x$ 值，在那里下取整和上取整不同。因此，在从不等式中去掉下取整或上取整之前，必须检查方向。

## 单调性、跳跃、求导与积分

两个函数都不是严格递增的，因为每个函数都在长度为 $1$ 的区间上为常数，但两个都是[不减的](../increasing-and-decreasing-functions/)。如果 $x \le y$，那么 $\lfloor x\rfloor\le x\le y$，把第二条比较法则应用于整数 $\lfloor x \rfloor$，得到 $\lfloor x \rfloor \le \lfloor y \rfloor$。类似地，$x\le y\le\lceil y\rceil$，把第四条法则应用于整数 $\lceil y\rceil$，得到 $\lceil x\rceil\le\lceil y\rceil$。

在整数 $n$ 处的性质由相邻区间上的常值性得出。在 $n$ 的左侧，下取整取值 $n-1$，在右侧取值 $n$，而在 $n$ 处的值就是 $n$ 本身：

$$
\begin{align}
\lim_{x \to n^-} \lfloor x \rfloor &= n - 1 \\[6pt]
\lim_{x \to n^+} \lfloor x \rfloor &= n = \lfloor n \rfloor
\end{align}
$$

两个单侧极限不同，所以每个整数都是下取整函数的[跳跃间断点](../discontinuities-of-real-functions/)。每个跳跃的大小为 $1$。整数处的值与右极限一致，所以下取整函数在那里右[连续](../continuous-functions/)。上取整函数在每个整数处有大小为 $1$ 的跳跃，单侧极限是 $n$ 和 $n+1$，它的值与左极限一致。在非整数点处，两个函数都是局部常数，因而连续。

间断点的集合是 $\mathbb{Z}$，它是[可数无限的](../cardinality-and-countable-sets/)。区间上的单调函数至多有可数多个间断点，下取整函数表明这个界是可以达到的。[符号函数](../sign-function/)在一个点处不连续，下取整函数在可数多个点处不连续，[狄利克雷函数](../dirichlet-function/)在每个点处都不连续。

- - -

在每个开区间 $(n, n+1)$ 上，下取整函数是常数，所以它在那里可导，[导数](../derivatives/)为零。在整数处它没有导数，因为在一点可导要求在该点连续。

在每个有界闭区间上，下取整函数有界且只有有限个间断点，所以它[黎曼可积](../riemann-integrability-criteria/)。在 $[0, m]$ 上（$m$ 为正整数），$[k, k+1)$ 上那一级阶梯的贡献是 $k$，把这个等差数列求和，得到：

$$
\int_0^m \lfloor x \rfloor \ dx = \sum_{k=0}^{m-1} k = \frac{m(m-1)}{2}
$$

## 带余除法

设 $a$ 是整数，$d$ 是正整数。$a$ 除以 $d$ 的欧几里得除法的商 $q$ 和余数 $r$ 是：

$$
q = \left\lfloor \frac{a}{d} \right\rfloor \qquad r = a - d \left\lfloor \frac{a}{d} \right\rfloor
$$

等式 $a = qd + r$ 按照构造成立。$r$ 的界由 $q \le a/d < q+1$ 得出。乘以正数 $d$ 保持不等号的方向，得到 $qd \le a < qd + d$。减去 $qd$ 得到 $0 \le r < d$，所以 $q$ 和 $r$ 就是[带余除法](../integers/)给出的商和余数。于是[取模运算符](../modulo-operator/)为：

$$
a \bmod d = a - d \left\lfloor \frac{a}{d} \right\rfloor
$$

右边对实数被除数和正实数除数都有定义。当 $d = 1$ 时它就是小数部分，这解释了 $\{x\}$ 的另一种记号 $x \bmod 1$。如果商是向零截断的，余数要么为零，要么与被除数同号。于是 $-7$ 除以 $5$，按下取整的约定余数是 $3$，按截断的约定余数是 $-2$。

- - -

下取整和上取整还把一个整数分成几乎相等的两半。对每个整数 $n$，有：

$$
n = \left\lfloor \frac{n}{2} \right\rfloor + \left\lceil \frac{n}{2} \right\rceil
$$

由反射恒等式得到 $\lceil n/2\rceil=-\lfloor-n/2\rfloor$，而 $-n/2 = n/2 - n$。由于 $n$ 是整数，由平移法则得到：

$$
\left\lceil \frac{n}{2} \right\rceil = -\left\lfloor \frac{n}{2} - n \right\rfloor = -\left( \left\lfloor \frac{n}{2} \right\rfloor - n \right) = n - \left\lfloor \frac{n}{2} \right\rfloor
$$

当 $n$ 是奇数时两半相差 $1$，当 $n$ 是偶数时两半相等。当 $n \ge 0$ 时，有序对 $(\lfloor n/2\rfloor, \lceil n/2\rceil)$ 是满足 $a + b = n$ 和 $0 \le b - a \le 1$ 的唯一的非负整数对 $(a, b)$。

整数之商的上取整也可以用下取整表示。对整数 $n$ 和正整数 $m$，有：

$$
\left\lceil \frac{n}{m} \right\rceil = \left\lfloor \frac{n + m - 1}{m} \right\rfloor
$$

写出 $n = qm + r$，其中 $0 \le r < m$，并在两边使用平移法则，这样就去掉了整数 $q$。左边变为 $q + \lceil r/m\rceil$，右边变为 $q+\lfloor(r+m-1)/m\rfloor$。当 $r = 0$ 时，加上的两项是 $\lceil 0 \rceil = 0$ 和 $\lfloor (m-1)/m \rfloor = 0$。当 $1 \le r < m$ 时，商 $r/m$ 严格介于 $0$ 和 $1$ 之间，所以它的上取整是 $1$；数 $(r+m-1)/m$ 在 $[1, 2)$ 内，所以它的下取整也是 $1$。

## 数倍数与识别因数

设 $x$ 是非负实数，$k$ 是正整数。不超过 $x$ 的 $k$ 的正倍数的个数是：

$$
\left\lfloor \frac{x}{k} \right\rfloor
$$

正整数 $m$ 满足 $mk \le x$，当且仅当 $m \le x/k$，而由第二条比较法则得到 $m \le \lfloor x/k \rfloor$。于是所说的正倍数就是满足 $1 \le m \le \lfloor x/k\rfloor$ 的数 $mk$，所以它们的个数是 $\lfloor x/k \rfloor$。例如，$7 \cdot 12 = 84 \le 95 < 96 = 8 \cdot 12$，所以不超过 $95$ 的 $12$ 的正倍数恰好有七个。

到 $n$ 为止的个数与到 $n-1$ 为止的个数之差，表明 $n$ 是不是 $k$ 的倍数。对正整数 $k$ 和 $n$，考虑差：

$$
\left\lfloor \frac{n}{k} \right\rfloor - \left\lfloor \frac{n-1}{k} \right\rfloor
$$

当 $k$ 整除 $n$ 时它等于 $1$，否则等于 $0$，因为两个范围 $1, \dots, n$ 和 $1, \dots, n-1$ 只相差一个整数 $n$。把这个差对 $k$ 求和，就数出了 $n$ 在所考虑范围内的因数：

$$
D(n) = \sum_{k=2}^{\lfloor \sqrt{n} \rfloor} \left( \left\lfloor \frac{n}{k} \right\rfloor - \left\lfloor \frac{n-1}{k} \right\rfloor \right)
$$

合数 $n \ge 2$ 有分解式 $n = k\ell$，其中 $1 < k \le \ell$。较小的因数满足 $k^2 \le n$，因此落在范围 $2 \le k \le \sqrt{n}$ 内。素数在这个范围内没有因数，所以对 $n \ge 2$，整数 $n$ 是素数当且仅当 $D(n) = 0$。这个公式是把试除法写成了求和的形式，仍然需要大约 $\sqrt{n}$ 次除法。

## 数出以 b 为底的整数的位数

把正整数 $n$ 写成以 $b$ 为底的形式（$b$ 是大于 $1$ 的整数），它有如下形式的展开式：

$$
n = \sum_{k=0}^{d-1} a_k b^k
$$

各位数字 $a_k$ 是范围 $0 \le a_k < b$ 内的整数，最高位数字 $a_{d-1}$ 不为零。对最高位数字的条件说的是 $n$ 恰好有 $d$ 位，它等价于一对界。最小的 $d$ 位数是 $b^{d-1}$，它的最高位数字是 $1$，其余各位都等于零。最大的是 $b^d - 1$，它的每一位都等于 $b-1$。因此：

$$
b^{d-1} \le n < b^d
$$

以 $b$ 为底的[对数](../logarithms/)是递增的，所以取对数保持不等号的方向，得到 $d-1\le\log_b n<d$。由于 $d-1$ 是整数，它就是 $\log_b n$ 的下取整。因此：

$$
d = \lfloor \log_b n \rfloor + 1
$$

由于 $b^{d-1}$、$n$ 和 $b^d$ 都是整数，这对界等价于 $b^{d-1}<n+1\le b^d$。取对数得到 $d-1<\log_b(n+1)\le d$，所以位数还可以写成：

$$
d = \lceil \log_b (n+1) \rceil
$$

对数内加一这个平移不能去掉。当 $n = 100$、$b = 10$ 时，表达式 $\lceil\log_{10}100\rceil$ 返回 $2$，而正确的位数是 $3$。这种偏差恰好出现在底数的幂处。

> 当 $n = 45$、$b = 2$ 时，$\log_2 45 = 5.4918\ldots$，因此 $d = 6$。二进制表示 $101101_2$ 证实了这个位数，因为 $32 + 8 + 4 + 1 = 45$。

## 函数内外的取整

当函数值也取整时，对自变量的取整有时可以去掉。如果 $x \in I$ 蕴含 $\lfloor x \rfloor \in I$，就说区间 $I \subseteq \mathbb{R}$ 在下取整下封闭。

设 $f: I \to \mathbb{R}$ 连续且严格递增，并假设对每个 $x \in I$，$f(x) \in \mathbb{Z}$ 蕴含 $x \in \mathbb{Z}$。那么对每个 $x \in I$：

$$
\lfloor f(x) \rfloor = \lfloor f(\lfloor x \rfloor) \rfloor
$$

令 $m = \lfloor x \rfloor$。如果 $x = m$，恒等式显然成立，所以假设 $m < x < m + 1$。由严格递增得到 $f(m) < f(x)$，而由假设可知 $f(x)$ 不是整数。没有整数能严格介于 $f(m)$ 和 $f(x)$ 之间。事实上，如果 $q \in \mathbb{Z}$ 满足 $f(m) < q < f(x)$，[介值定理](../intermediate-value-theorem/)就会给出一点 $y \in (m, x)$，使得 $f(y) = q$。于是由假设 $y$ 是整数，然而 $(m, x) \subset (m, m + 1)$ 不含整数。

设 $r = \lfloor f(x)\rfloor$。由于 $f(x)$ 不是整数，$r < f(x)$。如果 $f(m) < r$，那么 $r$ 就是严格介于 $f(m)$ 和 $f(x)$ 之间的整数，这不可能。因此 $r \le f(m)$，从而 $r \le \lfloor f(m)\rfloor$。另一方面，由 $f(m) < f(x)$ 和下取整的单调性得到 $\lfloor f(m)\rfloor \le r$。两个不等式合起来给出 $\lfloor f(m)\rfloor = r = \lfloor f(x)\rfloor$。

如果 $I$ 在上取整下封闭，同样的论证给出 $\lceil f(x)\rceil=\lceil f(\lceil x\rceil)\rceil$。在上面的连续性和整数值假设下，严格递减的 $f$ 在 $I$ 对下取整封闭时满足 $\lceil f(x)\rceil=\lceil f(\lfloor x\rfloor)\rceil$，在 $I$ 对上取整封闭时满足 $\lfloor f(x)\rfloor=\lfloor f(\lceil x\rceil)\rfloor$。

- - -

下面各个应用中的函数都连续且严格递增，每个定义域都在下取整下封闭。剩下要验证的是 $f$ 只在整数自变量处取整数值。设 $m$ 和 $n$ 是正整数，$b>1$ 是整数。三个恒等式分别对 $x \in \mathbb{R}$、$x \ge 0$ 和 $x \ge 1$ 成立：

$$
\begin{align}
\left\lfloor \frac{\lfloor x \rfloor}{n} \right\rfloor &= \left\lfloor \frac{x}{n} \right\rfloor \\[6pt]
\left\lfloor \sqrt[m]{\lfloor x \rfloor} \right\rfloor &= \left\lfloor \sqrt[m]{x} \right\rfloor \\[6pt]
\lfloor \log_b \lfloor x \rfloor \rfloor &= \lfloor \log_b x \rfloor
\end{align}
$$

对于第一个恒等式，$f(x) = x/n$，定义在 $\mathbb{R}$ 上。如果 $x/n$ 是整数，那么 $x$ 是 $n$ 的倍数，因而是整数。对于第二个，$f(x) = x^{1/m}$，定义在 $[0, +\infty)$ 上。如果对某个整数 $k$ 有 $\sqrt[m]{x}=k$，那么 $x = k^m$。对于第三个，$f(x) = \log_b x$，定义在 $[1, +\infty)$ 上。如果对某个整数 $k$ 有 $\log_b x = k$，那么 $k \ge 0$ 且 $x = b^k$。于是每个函数都只在整数自变量处取整数值。

对于非负整数 $x$，一次去掉一位十进制数字连做两次，与一次去掉两位，结果相同：

$$
\left\lfloor \frac{\lfloor x/10 \rfloor}{10} \right\rfloor = \left\lfloor \frac{x}{100} \right\rfloor
$$

- - -

对每个正整数 $n$ 和每个实数 $x$，$nx$ 的下取整是若干平移后的下取整之和：

$$
\lfloor nx \rfloor = \sum_{k=0}^{n-1} \left\lfloor x + \frac{k}{n} \right\rfloor
$$

设 $g(x)$ 是右边与左边之差。把 $x$ 换成 $x + 1/n$ 使和中的下标平移。项 $\lfloor x \rfloor$ 被去掉，而加入了 $\lfloor x+1\rfloor=\lfloor x\rfloor+1$，所以右边增加 $1$。左边变为 $\lfloor nx+1\rfloor=\lfloor nx\rfloor+1$，也增加 $1$。因此 $g$ 的周期是 $1/n$。当 $0 \le x < 1/n$ 时，每个满足 $0 \le k \le n-1$ 的自变量 $x + k/n$ 都在 $[0, 1)$ 内，$nx$ 也在 $[0, 1)$ 内，所以所有的下取整都为零，$g(x) = 0$。由周期性，这个结论对每个实数成立。

$n = 2$ 的情形是 $\lfloor 2x\rfloor=\lfloor x\rfloor+\lfloor x+1/2\rfloor$。由单调性和平移法则，第二项满足 $\lfloor x\rfloor\le\lfloor x+1/2\rfloor\le\lfloor x+1\rfloor=\lfloor x\rfloor+1$，所以两倍自变量的下取整满足：

$$
2 \lfloor x \rfloor \le \lfloor 2x \rfloor \le 2 \lfloor x \rfloor + 1
$$

## 素数在阶乘中的指数

对于素数 $p$ 和正整数 $m$，用 $v_p(m)$ 表示 $p$ 在 $m$ 的分解中的指数，即 $p^{v_p(m)}$ 整除 $m$ 而 $p^{v_p(m)+1}$ 不整除它。对每个正整数 $n$，$p$ 在[阶乘](../factorial/) $n!$ 中的指数是若干下取整之和：

$$
v_p(n!) = \sum_{k \ge 1} \left\lfloor \frac{n}{p^k} \right\rfloor
$$

一旦 $p^k > n$，各项就为零，所以这个和是有限的；它的非零项是满足 $1 \le k \le \lfloor \log_p n \rfloor$ 的那些项。为了证明这个公式，注意 $p^k$ 整除 $m$ 恰好对 $k=1,\dots,v_p(m)$ 成立。于是 $v_p(m)$ 是使 $p^k$ 整除 $m$ 的正整数 $k$ 的个数。$p$ 在 $n!$ 中的指数是它的各个因数的指数之和。数出满足 $1 \le m \le n$ 和 $p^k \mid m$ 的数对 $(m, k)$，先按 $m$ 数再按 $k$ 数，得到同一个总数。对有限集 $S$，用 $\#S$ 表示它的元素个数。这个双重计数为：

$$
\begin{align}
v_p(n!) &= \sum_{m=1}^{n} v_p(m) \\[6pt]
&= \sum_{k \ge 1} \#\{\ 1 \le m \le n \mid p^k \mid m \ \} \\[6pt]
&= \sum_{k \ge 1} \left\lfloor \frac{n}{p^k} \right\rfloor
\end{align}
$$

最后一个等号就是上面建立的倍数个数公式，应用于除数 $p^k$。

- - -

$n!$ 的十进制展开式末尾零的个数是 $10$ 在 $n!$ 中的指数，它等于 $2$ 的指数和 $5$ 的指数中较小的那个。对每个 $k \ge 1$，由不等式 $2^k \le 5^k$ 得到 $\lfloor n/2^k\rfloor\ge\lfloor n/5^k\rfloor$，所以 $v_2(n!)\ge v_5(n!)$。于是 $5$ 的指数决定了末尾零的个数。当 $n = 750$ 时：

$$
\begin{align}
v_5(750!)
&= \left\lfloor \frac{750}{5} \right\rfloor + \left\lfloor \frac{750}{25} \right\rfloor + \left\lfloor \frac{750}{125} \right\rfloor + \left\lfloor \frac{750}{625} \right\rfloor \\[6pt]
&= 150 + 30 + 6 + 1 \\[6pt]
&= 187
\end{align}
$$

$p = 2$ 的相应的和是 $743>187$，所以 $750!$ 的末尾恰好有 $187$ 个零。赋值 $v_p(n!)$ 还可以用以 $p$ 为底的表示写成闭式。写出 $n = \sum_{i=0}^r a_i p^i$，其中 $0 \le a_i < p$，并设 $s_p(n) = \sum_{i=0}^r a_i$ 是各位数字之和。在下取整公式中交换求和顺序，得到：

$$
\begin{align}
v_p(n!) &= \sum_{i=1}^r a_i (1 + p + \cdots + p^{i-1}) \\[6pt]
&= \sum_{i=1}^r a_i \frac{p^i - 1}{p - 1} \\[6pt]
&= \frac{n - s_p(n)}{p - 1}
\end{align}
$$

当 $n = 750$、$p = 5$ 时，表示是 $11000_5$，它的数字和是 $2$，公式返回 $(750-2)/4 = 187$，与上面下取整之和的值相同。

> 关于下取整函数和上取整函数的详细讨论，推荐 Andreas Klappenecker 和 Hyunyoung Lee 的 Discrete Structures 一书。该书列于[参考书目](../bibliography/)。
