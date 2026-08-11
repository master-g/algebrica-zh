---
title: 微积分基本定理
title_en: Fundamental Theorem of Calculus
source: https://algebrica.org/fundamental-theorem-of-calculus/
license: CC BY-NC 4.0
tags:
  - accumulation-function
  - antiderivative
  - average-value
  - change-of-variable
  - continuous-functions
  - definite-integral
  - derivatives
  - differentiation
  - extreme-value-theorem
  - fundamental-theorem-of-calculus
  - indefinite-integral
  - integration
  - leibniz-rule
  - mean-value-theorem
translation:
  status: current
  source_hash: 8e0847d0f763ba4f701fc9d42041dfa00f7630eb47aec9a2997a4a49fb78989f
  translator: codex
  updated: "2026-08-11T00:00:00.000Z"
---
## 引言

微积分基本定理建立了[求导](../derivatives/)与[积分](../indefinite-integrals/)之间的联系。求导描述瞬时变化，而积分度量累积量。在适当的正则性假设下，这两个运算互为逆运算。定理包含两个部分：

+ 微积分基本定理第一部分
+ 微积分基本定理第二部分

> 微积分基本定理第一部分指出，闭区间上的每个连续函数都有一个由积分定义的反导数。第二部分指出，[定积分](../definite-integrals/)等于任意反导数在两个端点处的值之差。

## 连续被积函数的界

第一部分的证明使用了一个估计，它对闭有界区间上的任意连续被积函数都成立。设 $f$ 在 $[a,b]$ 上连续，并且 $a<b$。根据[魏尔斯特拉斯定理](../weierstrass-theorem/)，$f$ 存在最小值和最大值，分别在 $t_m,t_M\in[a,b]$ 处取得。将这两个极值记为：

$$m = f(t_m) \qquad M = f(t_M)$$

$f$ 在区间上的每个值都位于这两个数之间，所以对每个 $t\in[a,b]$ 都有 $m\leq f(t)\leq M$。对常值函数 $m$ 和 $M$ 应用[定积分](../definite-integrals/)的比较性质，得到：

$$m(b - a) \leq \int_a^b f(t) \ dt \leq M(b - a)$$

当 $f$ 非负时，外侧两个量是以 $[a,b]$ 为底边的矩形面积。高为 $m$ 的矩形包含在函数图像与横轴之间的区域内，而该区域包含在高为 $M$ 的矩形内。下图说明了这种情况。

![图 1](/assets/integrals/svg/fundamental-theorem-of-calculus-1.zh.svg)

> 两个矩形的高度都是 $f$ 在 $[a,b]$ 内取得的值。图中最小值和最大值都在区间内部取得，但任一极值也可能在端点取得。

- - -

有界的[黎曼可积](../riemann-integrability-criteria/)函数也满足同一不等式，只需把 $m$ 和 $M$ 分别换成 $f$ 在区间上的[下确界和上确界](../supremum-and-infimum/)。如果 $f$ 在闭有界区间上连续，它会取得两个极值。这个事实有两个推论。

第一个推论涉及积分的符号。如果对每个 $t\in[a,b]$ 都有 $f(t)>0$，则 $m$ 是 $f$ 的一个函数值，因而为正，所以：

$$0 < m(b - a) \leq \int_a^b f(t) \ dt$$

正函数的下确界未必为正。在 $[0,1]$ 上定义 $g(0)=1$，并在 $t>0$ 时定义 $g(t)=t$。这个函数为正且黎曼可积，但下确界为 $0$，所以下界只能说明积分非负。闭区间 $[a,b]$ 上的连续正函数具有正的最小值，因此上面的不等式严格成立。对称地，如果 $f(t)<0$ 在 $[a,b]$ 上处处成立，则 $M<0$，积分为负。处处为正或处处为负的连续被积函数，其积分具有相同的符号。

第二个推论涉及 $f$ 的平均值。把估计式除以 $b-a>0$，得到：

$$m \leq \frac{1}{b - a} \int_a^b f(t) \ dt \leq M$$

中间的量是 $f$ 在 $[a,b]$ 上的平均值。因为该平均值位于 $m$ 和 $M$ 之间，对端点为 $t_m$ 和 $t_M$ 的区间上的 $f$ 应用[介值定理](../intermediate-value-theorem/)，可得一点 $c$，使 $f(c)$ 等于该平均值：

$$\int_a^b f(t) \ dt = f(c)(b - a)$$

这个恒等式称为积分中值定理。$t_m$ 和 $t_M$ 都属于 $[a,b]$，因此 $c$ 也属于 $[a,b]$。

> 总能在开区间 $(a,b)$ 中选取这样的点。假设平均值等于 $M$。函数 $M-f$ 连续、非负，并且在 $[a,b]$ 上的积分为零。如果它在某一点为正，就会在一个子区间上处处为正，上面的严格估计会推出其积分为正。因此，$f$ 在 $[a,b]$ 上是常值函数，每个内点都满足该恒等式。平均值等于最小值的情形与此对称。

## 微积分基本定理第一部分

设 $f$ 在[闭区间](../intervals/) $[a, b]$ 上[连续](../continuous-functions/)。对 $x \in [a, b]$，定义：

$$F(x) = \int_a^x f(t) \ dt$$

函数 $F$ 在 $[a, b]$ 上连续，在 $(a, b)$ 上可导，并且满足：

$$F'(x) = f(x)$$

在 $a$ 和 $b$ 处，同一恒等式分别对右导数和左导数成立。为证明连续性，令 $K=\max\{|m|,|M|\}$，其中 $m$ 和 $M$ 是上一节的两个极值，于是 $|f(t)|\leq K$ 在 $[a,b]$ 上成立。对任意 $x,y\in[a,b]$，定积分的标准估计给出：

$$|F(y) - F(x)| = \left|\int_x^y f(t) \ dt\right| \leq K|y - x|$$

因此 $F$ 在 $[a, b]$ 上是[利普希茨连续](../uniform-continuity/)的。为证明导数恒等式，固定 $x \in (a, b)$，并对满足 $h \neq 0$ 且 $x + h \in [a, b]$ 的情形考虑[差商](../difference-quotient/)：

$$\frac{F(x + h) - F(x)}{h} = \frac{1}{h} \left( \int_a^{x + h} f(t) \ dt - \int_a^x f(t) \ dt \right)$$

[定积分](../definite-integrals/)在相邻区间上满足可加性：

$$\int_a^b f(t) \ dt + \int_b^c f(t) \ dt = \int_a^c f(t) \ dt$$

因此差商为：

$$\frac{F(x + h) - F(x)}{h} = \frac{1}{h} \int_x^{x + h} f(t) \ dt$$

上面证明的积分中值定理给出一点 $c_h$，它位于 $x$ 与 $x+h$ 之间，使得：

$$\int_x^{x + h} f(t) \ dt = f(c_h) h$$

因此差商为：

$$\frac{F(x + h) - F(x)}{h} = f(c_h)$$

因为 $c_h$ 位于 $x$ 与 $x+h$ 之间，所以当 $h\to0$ 时，$c_h\to x$。由 $f$ 的连续性可得：

$$\lim_{h \to 0} \frac{F(x + h) - F(x)}{h} = f(x)$$

因此 $F'(x) = f(x)$。可以将满足 $d \in [a, b]$ 的任意固定点作为基点。定义：

$$F_d(x) = \int_d^x f(t) \ dt$$

由于 $F_d$ 与 $F$ 相差常数 $-F(d)$，它们具有相同的导数。当 $d=a$ 时，这就是原来的累积函数 $F$。

$F(x)$ 的值是从 $a$ 到 $x$ 累积的[有向面积](../finding-areas-by-integration/)。它的导数是该面积的变化率。当 $f(x) > 0$ 时，面积增加；当 $f(x) < 0$ 时，面积减少。

![图 2](/assets/integrals/svg/fundamental-theorem-of-calculus-2.zh.svg)

> 阴影部分的有向面积是 $F(x)$。当 $f$ 为正时它增加，当 $f$ 为负时它减少。

## 积分上下限为变量的推广

上面的定理处理的是固定的积分下限和可变的积分上限 $x$。现在设 $a$ 和 $b$ 是可导函数，且 $f$ 在一个包含它们值域的[区间](../intervals/)上连续。定义：

$$\Phi(x) = \int_{a(x)}^{b(x)} f(t) \ dt$$

$\Phi$ 的导数为：

$$\Phi'(x) = f(b(x)) b'(x) - f(a(x)) a'(x)$$

这个恒等式是对积分号下函数求导的莱布尼茨法则的最简单形式。如果 $a(x) = a$ 为常数且 $b(x) = x$，公式变为 $\Phi'(x) = f(x)$，原因是 $a'(x) = 0$ 且 $b'(x) = 1$。这就是微积分基本定理第一部分。为证明该公式，固定一个常数 $c$，它属于 $f$ 的定义域，并利用相邻区间上的可加性：

$$\int_{a(x)}^{b(x)} f(t) \ dt = \int_c^{b(x)} f(t) \ dt - \int_c^{a(x)} f(t) \ dt$$

定义辅助函数：

$$F(u) = \int_c^u f(t) \ dt$$

由微积分基本定理第一部分，$F'(u) = f(u)$。根据 $F$ 的定义：

$$\Phi(x) = F(b(x)) - F(a(x))$$

由[链式法则](../chain-rule/)可得：

$$\Phi'(x) = F'(b(x)) b'(x) - F'(a(x)) a'(x) = f(b(x)) b'(x) - f(a(x)) a'(x)$$

这就证明了该公式。例如，考虑：

$$\Phi(x) = \int_{x}^{x^2} \sin(t^2) \ dt$$

被积函数是[正弦函数](../sine-function/)与 $t^2$ 的复合，因此在 $\mathbb{R}$ 上连续。两个积分限都可导。下限 $a(x) = x$ 的导数为 $a'(x) = 1$，上限 $b(x) = x^2$ 的导数为 $b'(x) = 2x$。由莱布尼茨法则：

$$\Phi'(x) = \sin\!\left((x^2)^2\right) \cdot 2x - \sin(x^2) \cdot 1 = 2x \sin(x^4) - \sin(x^2)$$

被积函数 $\sin(t^2)$ 没有[初等反导数](../integration-strategies/)，但莱布尼茨法则仍然给出了该积分的闭式导数。

> 第一项来自移动的上限，第二项来自移动的下限。它们的符号由积分的方向决定。

## 微积分基本定理第二部分

设 $f$ 在 $[a,b]$ 上连续，并设 $F$ 在 $[a,b]$ 上连续、在 $(a,b)$ 上可导，且对每个 $x\in(a,b)$ 都满足 $F'(x)=f(x)$。那么端点公式为：

$$\int_a^b f(x) \ dx = F(b) - F(a)$$

第二部分指出，定积分就是反导数在该区间上的变化量。定义：

$$G(x) = \int_a^x f(t) \ dt$$

由微积分基本定理第一部分，$G'(x) = f(x)$。由于 $F$ 和 $G$ 的导数相同，[拉格朗日定理](../lagrange-theorem/)表明它们的差是常数：

$$F(x) = G(x) + c$$

令 $x = a$，得到：

$$F(a) = G(a) + c$$

由于 $G(a) = 0$，常数为 $c = F(a)$，因此：

$$G(x) = F(x) - F(a)$$

令 $x = b$，该恒等式变为：

$$\int_a^b f(x) \ dx = G(b) = F(b) - F(a)$$

对于连续函数 $f$，定积分也是其图像与水平轴之间的[净有向面积](../finding-areas-by-integration/)。根据定理，这个面积就是 $F(b) - F(a)$，其中 $F$ 是任意反导数。

[换元公式](../integration-by-substitution/)是该定理的直接推论。设 $g$ 在 $[\alpha, \beta]$ 上连续可导，且 $f$ 在一个包含 $g([\alpha, \beta])$ 的区间上连续。微积分基本定理的两个部分与链式法则给出：

$$\int_{\alpha}^{\beta} f(g(x))g'(x) \ dx = \int_{g(\alpha)}^{g(\beta)} f(u) \ du$$

这里不需要对 $g$ 作[单调性](../increasing-and-decreasing-functions/)假设。若 $H(y)=\int_{g(\alpha)}^y f(u)\,du$，则[复合函数](../composite-functions/)满足 $(H\circ g)'(x)=f(g(x))g'(x)$。对 $H\circ g$ 应用微积分基本定理第二部分，即可证明该公式。

把端点公式应用于乘积求导法则，可以得到[分部积分法](../integration-by-parts/)。

## 连续性之外

$f$ 的连续性足以保证上面两个部分成立。当 $f$ 只有黎曼可积性时，累积函数具有其中一些性质，但并非全部。

设 $f$ 为[黎曼可积](../riemann-integrability-criteria/)函数，定义在 $[a, b]$ 上，并定义累积函数：

$$F(x) = \int_a^x f(t) \ dt$$

函数 $F$ 对每个 $x\in[a,b]$ 都有定义。黎曼可积函数有界，因此 $|f|$ 在 $[a,b]$ 上有一个上界 $K$。这里 $f$ 未必取得最小值或最大值。对满足 $u<v$ 的 $u,v\in[a,b]$，定积分的标准估计给出：

$$|F(v) - F(u)| = \left| \int_{u}^{v} f(t) \ dt \right| \leq K (v - u)$$

由对称性，带 $|v-u|$ 的同一估计也成立。因此 $F$ 在 $[a,b]$ 上是利普希茨连续的，利普希茨常数为 $K$，从而特别连续。

可导性取决于 $f$ 的局部行为。固定一点 $x_0\in(a,b)$，假设 $f$ 在该点连续，并令 $\varepsilon>0$。由 $f$ 在 $x_0$ 处连续，可选取 $\delta>0$，使得当 $|t-x_0|<\delta$ 时，下面的不等式成立：

$$|f(t) - f(x_0)| < \varepsilon$$

如果 $0<|h|<\delta$ 且 $x_0+h\in[a,b]$，那么：

$$
\begin{align}
\left|\frac{F(x_0 + h) - F(x_0)}{h} - f(x_0)\right|
&= \left|\frac{1}{h}\int_{x_0}^{x_0 + h} (f(t) - f(x_0)) \ dt\right| \\[6pt]
&\leq \frac{1}{|h|}\int_{\min\{x_0,x_0+h\}}^{\max\{x_0,x_0+h\}} |f(t) - f(x_0)| \ dt \\[6pt]
&< \varepsilon
\end{align}
$$

因此 $F'(x_0) = f(x_0)$。这个证明只要求在 $x_0$ 处连续，而上文使用的积分中值定理则要求整个积分区间连续。当 $x_0$ 是端点时，同样的论证给出相应的单侧导数。在函数 $f$ 的[间断点](../discontinuities-of-real-functions/)处，$F$ 的差商未必收敛，因此可导性可能失效。

考虑 $[-1, 1]$ 上的[符号函数](../sign-function/)：

$$
f(t) = \begin{cases} -1 & t < 0 \\[6pt] 0 & t = 0 \\[6pt] 1 & t > 0 \end{cases}
$$

函数 $f$ 在 $[-1,1]$ 上黎曼可积，因为它有界且只有一个间断点。以 $-1$ 为基点，当 $x\in[-1,0)$ 时，整个积分区间上的被积函数都是 $-1$，因此：

$$F(x) = \int_{-1}^{x} (-1) \ dt = -x - 1$$

当 $x \in [0, 1]$ 时，积分区间跨过 $0$，由可加性：

$$F(x) = \int_{-1}^{0} (-1) \ dt + \int_{0}^{x} 1 \ dt = -1 + x$$

两个表达式都给出 $F(0) = -1$，所以在 $[-1, 1]$ 上 $F(x) = |x| - 1$。这就是向下平移 $1$ 个单位的[绝对值函数](../absolute-value-function/)。函数 $F$ 在该区间上连续。当 $x \neq 0$ 时，它的导数存在且等于 $f(x)$。在原点处，左导数为 $-1$，右导数为 $1$，因此 $F$ 在 $f$ 的唯一间断点处有一个[不可导点](../points-of-non-differentiability/)。

被积函数的间断并不总会使累积函数不可导。考虑函数：

$$
g(t) = \begin{cases} 1 & t = 0 \\[6pt] 0 & t \neq 0 \end{cases}
$$

函数 $g$ 在 $[-1, 1]$ 上黎曼可积，而且单点处的取值不影响积分。因此 $G(x) = \int_{-1}^x g(t) \ dt$ 恒等于零。尽管 $g$ 在 $0$ 处不连续且 $G'(0) \neq g(0)$，导数 $G'(0)$ 仍然存在并等于 $0$。一点处的连续性足以保证导数恒等式，但不是累积函数可导的必要条件。

对于端点公式，如果已知反导数，则可以用黎曼可积性替代 $f$ 的连续性。设 $f$ 在 $[a, b]$ 上黎曼可积。假设 $F$ 在 $[a, b]$ 上连续、在 $(a, b)$ 上可导，并且对每个 $x \in (a, b)$ 都满足 $F'(x) = f(x)$。那么：

$$\int_a^b f(x) \ dx = F(b) - F(a)$$

为证明该公式，取 $[a, b]$ 的一个划分 $P = \{x_0, x_1, \ldots, x_n\}$。在每个子区间 $[x_{i-1}, x_i]$ 上，中值定理给出一个点 $c_i \in (x_{i-1}, x_i)$，使得：

$$F(x_i) - F(x_{i-1}) = F'(c_i)(x_i - x_{i-1}) = f(c_i)(x_i - x_{i-1})$$

令 $m_i$ 和 $M_i$ 分别为 $f$ 在 $[x_{i-1}, x_i]$ 上的[下确界和上确界](../supremum-and-infimum/)。由于 $m_i \leq f(c_i) \leq M_i$ 且 $\Delta x_i = x_i - x_{i-1} > 0$，有：

$$m_i\Delta x_i \leq F(x_i) - F(x_{i-1}) \leq M_i\Delta x_i$$

将这些不等式对整个划分求和，中间项会发生裂项相消：

$$\sum_{i=1}^n m_i\Delta x_i \leq F(b) - F(a) \leq \sum_{i=1}^n M_i\Delta x_i$$

左端和右端的表达式分别是 $f$ 的[下和与上和](../riemann-integrability-criteria/)。由于 $f$ 黎曼可积，其下和的上确界与上和的下确界都等于 $\int_a^b f(x) \ dx$。中间项必定具有相同的值。

当 $F$ 只在有限个点不可导时，只要 $F$ 连续且在其他每一点满足 $f = F'$，结论仍然成立。证明时将 $[a, b]$ 按这些例外点分割，并对每个子区间应用该公式。将所得恒等式相加时，内部端点处的值会抵消。对 $f$ 在例外点处的赋值不会改变其黎曼积分。

> 如果 $f$ 属于 $C^k$ 类，对 $F'=f$ [反复求导](../higher-order-derivatives/)可见，累积函数 $F$ 属于 $C^{k+1}$ 类。

## 例 1

对 $f(x) = 3x^2$，计算：

$$\int_0^1 3x^2 \ dx$$

$3x^2$ 的一个反导数是 $F(x) = x^3$。由微积分基本定理第二部分：

$$\int_0^1 3x^2 \ dx = F(1) - F(0) = 1^3 - 0^3 = 1$$

因此，曲线 $3x^2$ 在 $[0, 1]$ 上方的面积为 $1$。

对[对数函数](../logarithmic-function/)，考虑累积函数：

$$H(x) = \int_1^x \ln t \ dt$$

由于退化区间上的积分为零，$H(1)$ 的值为 $0$。因为 $\ln t$ 在 $t > 0$ 时连续，函数 $H$ 对 $x > 0$ 有定义。微积分基本定理第一部分给出：

$$H'(x) = \ln x$$

因此 $H$ 是 $(0, +\infty)$ 上 $\ln x$ 的一个反导数，并且 $H(1) = 0$。

## 例 2

计算导数：

$$\frac{d}{dx} \int_1^x e^{-t^2} \ dt$$

被积函数 $f(t) = e^{-t^2}$ 是[指数函数](../exponential-function/)与 $-t^2$ 的复合，因此在 $\mathbb{R}$ 上连续。积分下限为常数，上限为 $x$。微积分基本定理第一部分给出：

$$\frac{d}{dx} \int_1^x e^{-t^2} \ dt = e^{-x^2}$$

> 这里不需要初等反导数。函数 $e^{-t^2}$ 没有初等反导数，但上面的导数是显式的。对该函数的固定定积分可能需要[数值积分](../numerical-integration/)或特殊函数。

## 无穷小表述

前面的论证使用了[艾普西隆-德尔塔极限](../limits/)。非标准分析在超实数域中表述相同内容。超实数域是包含 $\mathbb{R}$ 作为[真子域](../fields/)的有序域。无穷小量 $\varepsilon$ 对每个正实数 $r$ 都满足 $|\varepsilon|<r$，每个非零无穷小量的倒数都是无穷大。这里需要三个概念。两个超实数之差为无穷小量时，称二者无限接近。每个有限超实数 $z$ 都无限接近唯一的实数，该实数称为该数的标准部分，记为 $\mathrm{st}(z)$。转移原理指出，关于实数的[一阶命题](../first-order-logic/)成立，当且仅当其转移后的对应命题在超实数域中成立。

在这种表述中，设 $x$ 为实数内点，$\Delta x$ 为非零无穷小量。实函数及其自然超实数扩张使用同一个符号。如果差商有限，并且其标准部分与 $\Delta x$ 的选择无关，则该标准部分就是导数：

$$F'(x) = \mathrm{st}\!\left(\frac{F(x + \Delta x) - F(x)}{\Delta x}\right)$$

根据转移原理，连续被积函数的界也适用于端点为 $x$ 和 $x+\Delta x$ 的区间。当 $\Delta x>0$ 时，令 $m$ 和 $M$ 为 $f$ 在该区间上的两个极值。所得不等式为：

$$m\Delta x \leq F(x + \Delta x) - F(x) \leq M\Delta x$$

除以 $\Delta x$ 后，差商位于 $m$ 和 $M$ 之间。因为 $f$ 在 $x$ 处连续，这两个极值都无限接近 $f(x)$。因此，差商无限接近 $f(x)$，其标准部分就是 $f(x)$。当 $\Delta x<0$ 时，交换端点后得到相同结论。这就是第二节使用的估计，其中以标准部分映射替代了极限 $h\to0$。

两种表述使用不同的语言，但对实函数给出相同结论。无穷小表述用无限接近和标准部分映射替代艾普西隆-德尔塔估计。

> 亚伯拉罕·鲁滨逊发展了非标准分析，并在 1966 年由 North-Holland 出版的《Non-Standard Analysis》中系统阐述。H. Jerome Keisler 的一年级教材[Elementary Calculus: An Infinitesimal Approach](https://people.math.wisc.edu/~hkeisler/calc.html)采用这种表述；其 1986 年第二版在第 4.2 节讨论微积分基本定理。
