---
title: 积分中值定理
title_en: Mean Value Theorem for Integrals
source: https://algebrica.org/mean-value-theorem-for-integrals/
license: CC BY-NC 4.0
tags:
  - average-value
  - continuous-functions
  - darboux-theorem
  - definite-integral
  - fundamental-theorem-of-calculus
  - integration
  - intermediate-value-theorem
  - mean-value-theorem
  - weierstrass-theorem
translation:
  status: current
  source_hash: 095c32c8443f775a2d9333583ff934ec3e8231eb0b6473398651a37c9cb39ba1
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 定理陈述

积分中值定理相当简单，甚至不必考察它的严格陈述和证明，凭直觉就能理解。考虑一个在给定区间上有定义且连续的[函数的图像](../analyzing-the-graphs-of-functions/)。函数的平均值介于它的最小值和最大值之间，由连续性，函数至少取到它一次。如果把位于这个值处的水平线看作一道门槛，那么图像在线上方的部分与这条线之间的面积，就和图像在线下方的部分所对应的面积相抵。因此，当函数非负时，它在这个区间上的积分就是一个矩形的面积，矩形的底是所选的区间，高是平均值。从一开始就要记住，这个定理的主要用途是在[微积分第一基本定理](../fundamental-theorem-of-calculus/)的证明中，在那里它把累积函数的差商变为被积函数的一个值。

现在给出严格的陈述。设 $f$ 是有界闭[区间](../intervals/) $[a, b]$ 上的[连续函数](../continuous-functions/)，其中 $a < b$。那么存在一点 $c \in [a, b]$，使得：

$$\int_a^b f(x) \ dx = f(c)(b - a) \tag{1}$$

实际上，$f$ 在这个区间上的[定积分](../definite-integrals/)等于常值函数 $f(c)$ 在同一区间上的积分，区间的长度在公式中由差 $(b-a)$ 表示。当 $f$ 非负时，恒等式 $(1)$ 表明，[图像与横轴之间的区域](../finding-areas-by-integration/)的面积与底为 $b - a$、高为 $f(c)$ 的矩形相同。这个恒等式也可以写成：

$$\int_a^b (f(x) - f(c)) \ dx = 0 \tag{2}$$

第二个恒等式描述了下图中各阴影面积之间的关系。在区间 $[a, b]$ 上，$f$ 的图像位于直线 $y = f(c)$ 上方的部分与这条直线之间的面积，等于图像位于直线下方的部分所对应的面积。在图中，$M = f(x_M)$ 是 $f$ 在区间上的最大值，$m = f(x_m)$ 是它的最小值。下一节会看到，这两个值在定理的证明中要用到。

![一条连续的图像，在其平均值处的水平线上方和下方的总面积相等](/assets/integrals/svg/mean-value-theorem-for-integrals-1.zh.svg)

> 请记住，连续性是定理对 $f$ 的唯一假设。不要求[可导性](../derivatives/)，即使 $f$ 在 $(a, b)$ 内处处不可导，结论仍然成立。

## 证明

定理的证明也相当简单。我们知道，有界闭区间上的连续函数是黎曼可积的。由[魏尔斯特拉斯定理](../weierstrass-theorem/)，$f$ 还在 $[a, b]$ 上取到[最小值和最大值](../maximum-minimum-and-inflection-points/)，分别在点 $x_m$ 和 $x_M$ 处取到：

$$m = f(x_m) \qquad M = f(x_M)$$

$f$ 的每个值都介于这两个数之间，所以对每个 $x \in [a, b]$ 都有 $m \leq f(x) \leq M$。把定积分的比较性质应用于常值函数 $m$ 和 $M$，得到：

$$m(b - a) \leq \int_a^b f(x) \ dx \leq M(b - a)$$

除以 $b - a$，得到：

$$m \leq \frac{1}{b - a} \int_a^b f(x) \ dx \leq M \tag{3} $$

用 $\mu$ 表示中间一项。那么：

$$f(x_m) \le \mu \le f(x_M)$$

由[介值定理](../intermediate-value-theorem/)，在以 $x_m$ 和 $x_M$ 为端点的闭区间内存在一点 $c$，使得 $f(c) = \mu$。由于 $x_m$ 和 $x_M$ 都属于 $[a, b]$，$c$ 也是如此。把 $f(c) = \mu$ 乘以 $b - a$，就得到恒等式 $(1)$。

> 除了黎曼可积性之外，证明还用到连续性的两个推论：最值 $m$ 和 $M$ 是函数的值，并且函数取到它们之间的每个值。

- - -

点 $c$ 还可以在开区间 $(a, b)$ 内选取。假设 $m < \mu < M$。那么 $f(x_m) \neq \mu$ 且 $f(x_M) \neq \mu$，所以介值定理给出的点 $c$ 严格位于 $x_m$ 和 $x_M$ 之间。这两个点都属于 $[a, b]$，因此 $c \in (a, b)$。

再假设 $\mu = M$。函数 $M - f$ 在 $[a, b]$ 上连续且非负，它的积分为零，因为：

$$\int_a^b (M - f(x)) \ dx = M(b - a) - \mu(b - a) = 0 \tag{4}$$

如果 $M - f$ 在某点 $x_0$ 处为正，由连续性会得到一个长度 $\ell$ 为正的子区间 $J \subseteq [a, b]$，在其上：

$$M - f(x) \geq \frac{1}{2}(M - f(x_0))$$

由此可得：

$$\int_a^b (M - f(x)) \ dx \geq \int_J (M - f(x)) \ dx \geq \frac{M - f(x_0)}{2} \ell > 0$$

这与 $(4)$ 中的积分为零相矛盾。于是 $f$ 是常数，等于 $M$，每个内点都满足 $f(c) = \mu$（$\mu = m$ 的情形是对称的）。

## 函数的平均值

对于在 $[a, b]$ 上[黎曼可积](../riemann-integrability-criteria/)的函数 $f$，$(3)$ 中的中间一项是 $f$ 在区间上的平均值，也称为积分平均：

$$\mu = \frac{1}{b - a} \int_a^b f(x) \ dx$$

这个定义通过[黎曼和](../definite-integrals/)的极限，把统计学中[算术平均](../arithmetic-mean/)的概念推广到连续变量的函数。假设把区间 $[a, b]$ 分成 $n$ 个等长的子区间，长度为 $\Delta x = (b - a)/n$，并在每个子区间的右端点 $x_k = a + k \Delta x$ 处对 $f$ 取样。由于 $\Delta x/(b - a) = 1/n$，这 $n$ 个取样值的算术平均可以改写为：

$$\frac{1}{n} \sum_{k=1}^{n} f(x_k) = \frac{1}{b - a} \sum_{k=1}^{n} f(x_k) \Delta x$$

右边的表达式是 $f$ 在 $[a, b]$ 上的一个黎曼和除以区间的长度；当 $n \to \infty$ 时，这个表达式收敛到 $\mu$。因此，平均值是在越来越细的划分上取样所得算术平均的极限。

举一个具体的例子，如果 $v(t)$ 是沿直线运动的点的[速度](../velocity/)，$t_1 < t_2$ 是两个不同的时刻，那么 $v$ 在 $[t_1, t_2]$ 上的积分就是这段时间内的位移。这段时间内的平均速度为：

$$\mu = \frac{1}{t_2 - t_1} \int_{t_1}^{t_2} v(t) \ dt$$

这个值就是在相同时间内产生相同位移的恒定速度。当速度连续时，存在一个时刻 $c \in [t_1, t_2]$，使得 $v(c) = \mu$。

## 术语上的说明

为了避免混淆，要记得积分中值定理与另一个中值定理很不相同，后者也称为[拉格朗日定理](../lagrange-theorem/)。如果 $f$ 在 $[a, b]$ 上连续、在 $(a, b)$ 上可导，后者给出一点 $c \in (a, b)$，在该点处导数等于由区间端点确定的[差商](../difference-quotient/)：

$$f'(c) = \frac{f(b) - f(a)}{b - a} \tag{5}$$

与此不同，正如刚才看到的，积分中值定理指出，被积函数在所考虑区间的某一点处等于它的平均值：

$$f(c) = \frac{1}{b - a} \int_a^b f(x) \ dx$$

虽然两个定理的假设和结论不同，[微积分基本定理](../fundamental-theorem-of-calculus/)却在它们之间建立了联系。具体地说，微积分第二基本定理指出，如果 $f$ 在 $[a, b]$ 上连续，$F$ 是 $f$ 的任意一个[原函数](../indefinite-integrals/)，那么 $[a, b]$ 上的定积分为：

$$\int_a^b f(x) \ dx = F(b) - F(a)$$

于是恒等式 $(5)$ 变为：

$$F(b) - F(a) = F'(c)(b - a)$$

这就是应用于 $F$ 的拉格朗日定理。反过来，把拉格朗日定理应用于连续函数 $f$ 的原函数，就得到积分中值定理。重要的是要记住，对于导数连续的函数 $F$，这两个定理是等价的。

## 没有连续性时会怎样

许多关于函数的定理都假设连续性，它们的结论依赖于这个假设。对于有界的[黎曼可积](../riemann-integrability-criteria/)函数，同样的不等式成立，只是[下确界和上确界](../supremum-and-infimum/)代替了[最小值和最大值](../maximum-minimum-and-inflection-points/)。因此关系 $(3)$ 可以改写为：

$$\inf_{[a, b]} f \leq \frac{1}{b - a} \int_a^b f(x) \ dx \leq \sup_{[a, b]} f$$

在这种情形下，平均值仍然有定义，并且介于这两个界之间；但与前面看到的不同，函数不一定取到它。考虑区间 $[0, 2]$ 上的下列[阶梯函数](../heaviside-function/)：

$$
f(x) = \begin{cases} 0 & 0 \leq x < 1 \\[6pt] 1 & 1 \leq x \leq 2 \end{cases}
$$

函数 $f$ 有界且只有一个[间断点](../discontinuities-of-real-functions/)，所以它是黎曼可积的，它在 $[0, 2]$ 上的积分等于 $1$（很简单的计算就足以验证）。因此平均值是 $1/2$，但可以看到，函数从不取这个值，因为它的[值域](../functions/)是 $\{\ 0, 1 \ \}$。可见有界性和黎曼可积性不足以保证结论成立。


> 定理的证明适用于每个取到最值并具有介值性质的黎曼可积函数。[达布定理](../darboux-theorem/)表明，后一个性质可以在没有连续性的情况下成立，因为每个导函数都具有介值性质，即使导函数不连续也是如此。

## 加权形式

积分中值定理还有一种形式，其中 $f$ 的值是按一个权来平均的。设 $f$ 在 $[a, b]$ 上连续，$g$ 在同一区间上黎曼可积且非负。在这些条件下，存在 $c \in [a, b]$，使得：

$$\int_a^b f(x) g(x) \ dx = f(c) \int_a^b g(x) \ dx \tag{6}$$

如果 $g(x) = 1$，就得到恒等式 $(1)$，而证明也按同样的两步进行。把不等式 $m \leq f(x) \leq M$ 乘以 $g(x)$，得到：

$$m g(x) \leq f(x) g(x) \leq M g(x)$$

乘积 $fg$ 黎曼可积，对三项积分，得到：

$$m \int_a^b g(x) \ dx \leq \int_a^b f(x) g(x) \ dx \leq M \int_a^b g(x) \ dx \tag{7}$$

令 $G = \int_a^b g(x) \ dx$，并考虑以下情形：

+ 如果 $G = 0$，由 $(7)$ 可知乘积 $fg$ 的积分为零，因此恒等式 $(6)$ 对任意选取的 $c$ 都成立；
+ 如果 $G > 0$，把 $(7)$ 除以 $G$ 可知 $\frac{1}{G} \int_a^b f(x) g(x) \ dx$ 介于 $m$ 和 $M$ 之间，介值定理给出一点 $c$，使得：

$$f(c) = \frac{1}{G} \int_a^b f(x) g(x) \ dx$$

定理是对非负的权证明的，但当 $g$ 在整个区间上非正时，同样的结论成立。在这种情形下，函数 $-g$ 非负，所以它满足已经证明的情形的假设。

- - -

恒等式 $(6)$ 是积分第一中值定理的陈述。在第二种形式中，假设 $g$ [单调](../increasing-and-decreasing-functions/)而不是符号不变，$f$ 只需黎曼可积。在这些假设下，存在 $\xi \in [a, b]$，使得：

$$\int_a^b f(x) g(x) \ dx = g(a) \int_a^{\xi} f(x) \ dx + g(b) \int_{\xi}^b f(x) \ dx$$

这种形式用于证明被积函数振荡的[反常积分](../improper-integrals/)收敛性的[狄利克雷判别法和阿贝尔判别法](../convergence-tests-for-improper-integrals/)。

## 几个例子

考虑一个实际例子，计算[平方根函数](../irrational-functions/)的平均值，并找出取到这个值的点。我们有：

$$\int_0^9 \sqrt{x} \ dx = \left[ \frac{2}{3} x^{3/2} \right]_0^9 = \frac{2}{3} \cdot 27 = 18$$

区间的长度为 $9$，所以平均值为：

$$\mu = \frac{1}{9} \int_0^9 \sqrt{x} \ dx = \frac{18}{9} = 2$$

为了找出这个点，解 $f(c) = \mu$，即 $\sqrt{c} = 2$，得到 $c = 4$，它位于区间 $(0, 9)$ 的内部。

点 $c = 4$ 位于区间中点 $4.5$ 的左侧。由于当 $x \in (4, 9]$ 时 $\sqrt{x} > 2$，函数在长度为 $5$ 的区间上高于它的平均值，这超过了 $[0, 9]$ 长度的一半。

- - -

正如理论部分所看到的，定理保证点 $c$ 存在，但不保证它唯一。例如，考虑下面的积分：

$$\int_0^{\pi} \sin x \ dx = \left[ -\cos x \right]_0^{\pi} = -\cos \pi + \cos 0 = 1 + 1 = 2$$

区间的长度为 $\pi$，所以平均值为：

$$\mu = \frac{2}{\pi} \approx 0.6366$$

符合条件的点是 $\sin c = 2/\pi$ 在 $[0, \pi]$ 上的解。在这个区间上，由于[正弦函数](../sine-function/)是周期函数，它取 $(0, 1)$ 中每个值恰好两次，取值的两点关于 $\pi/2$ 对称，所以两个解可以用[反正弦函数](../arcsine-function/)表示：

$$c_1 = \arcsin \frac{2}{\pi} \approx 0.690$$

$$c_2 = \pi - \arcsin \frac{2}{\pi} \approx 2.451$$


因此要记住，符合条件的点 $c$ 的集合可能只有一个点，可能是有限集，在 $f$ 为常数时也可能是整个区间。

- - -

最后再看一个例子，其中加权形式同时改变了平均值和取到它的点。取[幂函数](../power-function/) $f(x) = x^2$，权为 $g(x) = x$，区间为 $[0, 2]$。函数 $f$ 连续，$g$ 在区间上非负，所以定理的假设得到满足。两个积分为：

$$\int_0^2 x^2 \cdot x \ dx = \left[ \frac{x^4}{4} \right]_0^2 = 4$$

$$\int_0^2 x \ dx = \left[ \frac{x^2}{2} \right]_0^2 = 2$$

$f$ 的加权平均是第一个积分除以第二个积分的商，即 $4/2 = 2$。令 $f(c) = 2$ 得到 $c^2 = 2$，它的解是 $\pm \sqrt{2}$。只有正的解属于这个区间，所以：

$$c = \sqrt{2} \approx 1.414$$

作为比较，同一函数在同一区间上的不加权平均为：

$$\frac{1}{2} \int_0^2 x^2 \ dx = \frac{1}{2} \cdot \frac{8}{3} = \frac{4}{3}$$

这个值在 $c^2 = 4/3$ 处取到，即 $c = 2/\sqrt{3} \approx 1.155$。有了权 $x$，区间右半部分的权重比左半部分更大，而 $f$ 在那里更大，所以加权平均超过不加权平均，取到它的点向右移动。
