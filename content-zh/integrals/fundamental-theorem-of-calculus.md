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
  source_hash: 248506b22981c448080e75586c2e6502064fa305de6a7036e9c24f03adaf21b2
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---

## 永不褪色的记忆

我手头没有官方统计数据来支持下面要说的话，但我敢说，凡是学过理科的人，有两个定理会永远留在脑海里。第一个是[勾股定理](../pythagorean-theorem/)，从小就像念经一样背诵，直到它不可磨灭地沉淀在新皮层里，据信长期记忆就储存在那里。两条直角边上所作正方形的面积之和，等于斜边上所作正方形的面积。简短、简单，甚至不需要公式就能理解。在意大利的学校体系中，它大约在十二岁时出现，只被当作求解[直角三角形](../right-triangle-trigonometry/)的工具来介绍。要等到中学（对幸运的人而言），更多时候是等到大学，才能领会它真正的威力和众多的应用。

第二个定理通常要晚得多才遇到，大约在十八岁。我说的是微积分基本定理，它是数学分析的奠基性结果之一。简单地说，它把[求导](../derivatives/)和[积分](../indefinite-integrals/)联系起来，使二者在适当的假设下互为逆运算。

较真地说，这个定理有两个陈述，称为微积分第一基本定理和第二基本定理。第一个定理说，闭区间上的每个连续函数都有原函数。第二个定理指出，函数的定积分等于它的任意一个原函数在两个端点处的值之差。

## 引入估计式

不过，在介绍定理之前，需要先岔开来谈一谈它的证明所需的一个预备结果，这个结果依赖于被积函数在有界闭区间上连续时成立的一个估计。考虑在 $[a, b]$ 上连续的函数 $f$，其中 $a < b$。由[最值定理](../weierstrass-theorem/)，$f$ 在点 $t_m, t_M \in [a, b]$ 处取到最小值和最大值。把这两个值记为：

$$m = f(t_m) \qquad M = f(t_M)$$

因此 $f$ 在区间上的每个值都介于这两个数之间，即对每个 $t \in [a, b]$ 都有 $m \leq f(t) \leq M$。应用[定积分](../definite-integrals/)的比较性质，得到下面的关系：

$$m(b - a) \leq \int_a^b f(t) \ dt \leq M(b - a) \tag{1}$$

当 $f$ 非负时，由于 $f(t)$ 从不低于 $m$、也从不高于 $M$，它的积分必定介于底为 $b-a$、高分别为 $m$ 和 $M$ 的两个矩形的面积之间。在图中，高为 $m$ 的矩形包含在图像与横轴之间的区域内，而这个区域又包含在高为 $M$ 的矩形内。

![图 1](/assets/integrals/svg/fundamental-theorem-of-calculus-1.zh.svg)


> 两个矩形的高分别是 $f$ 的最小值和最大值，在点 $t_m,t_M \in [a,b]$ 处取到。图中这两个点都在区间内部，但其中任何一个都可能与端点重合。

- - -

现在再往前一步，考虑有界的[黎曼可积](../riemann-integrability-criteria/)函数。这样的函数满足不等式 $(1)$，只是其中的 $m$ 和 $M$ 换成 $f$ 在区间上的[下确界和上确界](../supremum-and-infimum/)。连续性有两个推论。

第一个推论涉及积分的符号：如果对每个 $t \in [a, b]$ 都有 $f(t) > 0$，那么 $m$ 是 $f$ 的一个值，因而必定为正。于是：

$$0 < m(b - a) \leq \int_a^b f(t) \ dt \tag{2}$$

第二个推论涉及 $f$ 的平均值。把 $(1)$ 除以 $b - a > 0$，得到：

$$m \leq \frac{1}{b - a} \int_a^b f(t) \ dt \leq M$$

中间的量是 $f$ 在 $[a, b]$ 上的平均值。由于这个平均值介于 $m$ 和 $M$ 之间，在以 $t_m$ 和 $t_M$ 为端点的区间上对 $f$ 应用[介值定理](../intermediate-value-theorem/)，得到一点 $c$，使 $f(c)$ 恰好等于平均值：

$$\int_a^b f(t) \ dt = f(c)(b - a)$$

这个恒等式也称为[积分中值定理](../mean-value-theorem-for-integrals/)。在第一定理的证明中要用到它，把累积函数的差商改写为 $f$ 的一个值，并证明它的导数确实是被积函数。

## 微积分第一基本定理

现在来到第一定理的核心。考虑在[闭区间](../intervals/) $[a, b]$ 上[连续](../continuous-functions/)的函数 $f$。对 $x \in [a, b]$，把累积函数 $F$ 定义为：

$$F(x) = \int_a^x f(t) \ dt$$

函数 $F$ 在 $[a, b]$ 上连续，在 $(a, b)$ 上可导，并且满足：

$$F'(x) = f(x)$$

在 $a$ 处和 $b$ 处，同一个恒等式分别对右导数和左导数成立。下面给出证明，它并不平凡，但也并非高不可攀。首先，为了证明连续性，令 $K = \max\{|m|, |M|\}$，其中 $m$ 和 $M$ 是上一节引入的最值。这样在 $[a, b]$ 上就有 $|f(t)| \leq K$。由于在 $[a, b]$ 上 $-K \leq f(t) \leq K$，把不等式 $(1)$ 应用于以 $x$ 和 $y$ 为端点的区间，对每个 $x,y\in[a,b]$ 得到：

$$|F(y) - F(x)| = \left|\int_x^y f(t) \ dt\right| \leq K|y - x| \tag{3}$$

所以 $F$ 在 $[a, b]$ 上以常数 $K$ [利普希茨连续](../uniform-continuity/)，也就是说，$F$ 在两点处的值之差从不超过这两点间距离的 $K$ 倍。为了证明关于导数的恒等式，现在固定 $x \in (a, b)$，对满足 $x + h \in [a, b]$ 的 $h \neq 0$ 考虑[差商](../difference-quotient/)：

$$\frac{F(x + h) - F(x)}{h} = \frac{1}{h} \left( \int_a^{x + h} f(t) \ dt - \int_a^x f(t) \ dt \right)$$

[定积分](../definite-integrals/)对相邻区间具有可加性，所以可以写出：

$$\int_a^b f(t) \ dt + \int_b^c f(t) \ dt = \int_a^c f(t) \ dt$$

因此差商变为：

$$\frac{F(x + h) - F(x)}{h} = \frac{1}{h} \int_x^{x + h} f(t) \ dt$$

上面给出的积分中值定理（它的用处就在这里）给出 $x$ 与 $x + h$ 之间的一点 $c_h$，使得：

$$\int_x^{x + h} f(t) \ dt = f(c_h) h$$

于是差商为：

$$\frac{F(x + h) - F(x)}{h} = f(c_h)$$

由于 $c_h$ 介于 $x$ 与 $x + h$ 之间，当 $h \to 0$ 时它趋于 $x$。由 $f$ 的连续性得到：

$$\lim_{h \to 0} \frac{F(x + h) - F(x)}{h} = f(x)$$

所以 $F'(x) = f(x)$。任何固定的点 $d \in [a, b]$ 都可以用作基点。定义：

$$F_d(x) = \int_d^x f(t) \ dt$$

由可加性，$F_d(x)=F(x)-F(d)$。由于 $F(d)$ 关于 $x$ 是常数，函数 $F_d$ 和 $F$ 有相同的导数。当 $d=a$ 时，就回到前面定义的累积函数 $F$。

回想积分的定义，值 $F(x)$ 是从 $a$ 到 $x$ 累积的[有向面积](../finding-areas-by-integration/)。而它的导数是这个面积变化的速率。当 $f(x) > 0$ 时面积增大，当 $f(x) < 0$ 时面积减小。

![图 2](/assets/integrals/svg/fundamental-theorem-of-calculus-2.zh.svg)


> 在上图中，阴影部分的有向面积就是我们的 $F(x)$，它在 $f$ 为正的地方增大，在 $f$ 为负的地方减小。


## 推广到变限积分

我们刚才看到，在前面的定理中，下限是常数，上限由变量 $x$ 给出。现在假设 $a$ 和 $b$ 是可导函数，$f$ 在包含它们值域的某个[区间](../intervals/)上连续。这个话题通常在更高阶的分析课程中讲授，但仍然值得在这里介绍。定义：

$$\Phi(x) = \int_{a(x)}^{b(x)} f(t) \ dt$$

$\Phi$ 的导数为：

$$\Phi'(x) = f(b(x)) b'(x) - f(a(x)) a'(x) \tag{4}$$

这个恒等式是积分号下求导的莱布尼茨法则的最简单形式。如果 $a(x) = a$ 是常数且 $b(x) = x$，由于 $a'(x) = 0$ 和 $b'(x) = 1$，公式变为 $\Phi'(x) = f(x)$，回到第一基本定理。为了证明这个公式，在 $f$ 的定义域内固定一个常数 $c$，并利用相邻区间上的可加性：

$$\int_{a(x)}^{b(x)} f(t) \ dt = \int_c^{b(x)} f(t) \ dt - \int_c^{a(x)} f(t) \ dt$$

现在用下面的表达式定义辅助函数 $F(u)$：

$$F(u) = \int_c^u f(t) \ dt$$

由第一基本定理，必有 $F'(u) = f(u)$。由 $F$ 的定义可知：

$$\Phi(x) = F(b(x)) - F(a(x))$$

由[链式法则](../chain-rule/)得到：

$$
\begin{align}
\Phi'(x) &= F'(b(x))b'(x) - F'(a(x))a'(x) \\[6pt]
         &= f(b(x))b'(x) - f(a(x))a'(x)
\end{align}
$$

这就证明了公式 $(4)$。为了把其中的机制看得更清楚，考虑例如：

$$\Phi(x) = \int_{x}^{x^2} \sin(t^2) \ dt$$

被积函数 $\sin(t^2)$ 在 $\mathbb{R}$ 上连续，因为它是[正弦函数](../sine-function/)与多项式 $t^2$ 的[复合](../composite-functions/)。两个积分限都可导。下限 $a(x) = x$ 的导数为 $a'(x) = 1$，上限 $b(x) = x^2$ 的导数为 $b'(x) = 2x$。由莱布尼茨法则得到：

$$
\begin{align}
\Phi'(x) &= \sin\!\left((x^2)^2\right) \cdot 2x - \sin(x^2) \cdot 1 \\[6pt]
         &= 2x \sin(x^4) - \sin(x^2)
\end{align}
$$

被积函数 $\sin(t^2)$ 没有[初等原函数](../integration-strategies/)，但莱布尼茨法则给出了积分的导数的闭式。

## 微积分第二基本定理

现在转到第二定理，考虑在 $[a, b]$ 上连续的函数 $f$，并假设它的原函数 $F$ 在 $[a, b]$ 上连续，在 $(a, b)$ 上可导，且对每个 $x \in (a, b)$ 满足 $F'(x) = f(x)$。在这种情形下：

$$\int_a^b f(x) \ dx = F(b) - F(a)$$

如开头所说，第二个陈述表明，定积分是任意一个原函数在积分区间上的变化量。现在定义一个新函数 $G(x)$：

$$G(x) = \int_a^x f(t) \ dt$$

由第一基本定理，$G'(x) = f(x)$。由于 $F$ 和 $G$ 有相同的导数，[中值定理](../lagrange-theorem/)蕴含它们的差是常数：

$$F(x) = G(x) + c$$

在 $x = a$ 处求值，得到：

$$F(a) = G(a) + c$$

由于 $G(a) = 0$，常数为 $c = F(a)$，因此：

$$G(x) = F(x) - F(a)$$

当 $x = b$ 时，这个恒等式变为：

$$\int_a^b f(x) \ dx = G(b) = F(b) - F(a)$$

所以，对连续函数 $f$，定积分是其图像与横轴之间的[净有向面积](../finding-areas-by-integration/)。由这个定理，该面积就是任意一个原函数 $F$ 的变化量 $F(b) - F(a)$。

## 关于连续性的说明

$f$ 的连续性是上面两个陈述的充分条件。当 $f$ 只是黎曼可积时，累积函数保留其中一部分性质，但不是全部。

例如，设 $f$ 在 $[a, b]$ 上[黎曼可积](../riemann-integrability-criteria/)，并定义累积函数：

$$F(x) = \int_a^x f(t) \ dt$$

函数 $F$ 对每个 $x \in [a, b]$ 有定义。黎曼可积函数是有界的，所以 $|f|$ 在 $[a, b]$ 上有上界 $K$。这里 $f$ 不必有最小值或最大值。对满足 $u < v$ 的 $u, v \in [a, b]$，把估计式 $(3)$ 应用于区间 $[u, v]$，得到：

$$|F(v) - F(u)| = \left| \int_{u}^{v} f(t) \ dt \right| \leq K (v - u)$$

由对称性，同样的估计对 $|v - u|$ 成立。所以 $F$ 在 $[a, b]$ 上利普希茨连续，利普希茨常数为 $K$，特别地它是连续的。可导性取决于 $f$ 的局部性质。固定一点 $x_0 \in (a, b)$，$f$ 在该点连续，并设 $\varepsilon > 0$。由于 $f$ 在 $x_0$ 处连续，可以取 $\delta > 0$，使得只要 $|t - x_0| < \delta$，下面的不等式就成立：

$$|f(t) - f(x_0)| < \varepsilon$$

如果 $0 < |h| < \delta$ 且 $x_0 + h \in [a, b]$，那么：

$$
\begin{align}
\left|\frac{F(x_0 + h) - F(x_0)}{h} - f(x_0)\right|
&= \left|\frac{1}{h}\int_{x_0}^{x_0 + h} (f(t) - f(x_0)) \ dt\right| \\[6pt]
&\leq \frac{1}{|h|}\int_{\min\{x_0,x_0+h\}}^{\max\{x_0,x_0+h\}} |f(t) - f(x_0)| \ dt \\[6pt]
&< \varepsilon
\end{align}
$$

所以 $F'(x_0) = f(x_0)$。这个证明只要求在 $x_0$ 处连续，而上面用到的积分中值定理要求在整个积分区间上连续。当 $x_0$ 是端点时，同样的推理给出导数。在 $f$ 的[间断点](../discontinuities-of-real-functions/)处，$F$ 的差商可能不收敛，可导性可能丧失。

例如，考虑 $[-1, 1]$ 上的[符号函数](../sign-function/)：

$$
f(t) = \begin{cases} -1 & t < 0 \\[6pt] 0 & t = 0 \\[6pt] 1 & t > 0 \end{cases}
$$

函数 $f$ 在 $[-1, 1]$ 上黎曼可积，因为它有界且只有一个间断点。取 $-1$ 为基点，当 $x \in [-1, 0)$ 时，被积函数在整个积分区间上等于 $-1$，所以：

$$F(x) = \int_{-1}^{x} (-1) \ dt = -x - 1$$

当 $x \in [0, 1]$ 时，积分区间跨过 $0$，所以由可加性得到：

$$F(x) = \int_{-1}^{0} (-1) \ dt + \int_{0}^{x} 1 \ dt = -1 + x$$

两个表达式都给出 $F(0) = -1$，所以在 $[-1, 1]$ 上 $F(x) = |x| - 1$。这是向下平移 $1$ 的[绝对值函数](../absolute-value-function/)。函数 $F$ 在这个区间上连续。当 $x \neq 0$ 时，它的导数存在并且等于 $f(x)$。在原点处，左导数为 $-1$，右导数为 $1$，所以 $F$ 恰好在 $f$ 唯一的间断点处有一个[不可导点](../points-of-non-differentiability/)。

这个定理还有进一步的推广和应用，超出了本文的范围。

## 例 1

现在把微积分基本定理应用于两个具体情形：先由已知的原函数计算定积分，再由累积函数构造原函数。作为例子，计算下面这个简单的积分：

$$\int_0^1 3x^2 \ dx$$

$3x^2$ 的一个原函数是 $F(x) = x^3$。由第二基本定理：

$$\int_0^1 3x^2 \ dx = F(1) - F(0) = 1^3 - 0^3 = 1$$

所以曲线 $3x^2$ 在 $[0, 1]$ 上方的面积为 $1$。

- - -

现在考虑[对数函数](../logarithmic-function/)，计算：

$$H(x) = \int_1^x \ln t \ dt$$

值 $H(1)$ 为 $0$，因为退化区间上的积分为零。由于 $\ln t$ 在 $t > 0$ 时连续，函数 $H$ 对 $x > 0$ 有定义。由第一基本定理得到：

$$H'(x) = \ln x$$

所以 $H$ 是 $\ln x$ 在 $(0, +\infty)$ 上满足 $H(1) = 0$ 的原函数。

## 例 2

现在考虑一个没有初等原函数的被积函数。第一基本定理仍然使我们能够计算相应累积函数的导数：

$$\frac{d}{dx} \int_1^x e^{-t^2} \ dt$$

被积函数 $f(t) = e^{-t^2}$ 是[指数函数](../exponential-function/)与 $-t^2$ 的复合，所以它在 $\mathbb{R}$ 上连续。下限是常数，上限是 $x$。由第一基本定理得到：

$$\frac{d}{dx} \int_1^x e^{-t^2} \ dt = e^{-x^2}$$

这里不需要初等原函数（$e^{-t^2}$ 也没有初等原函数），而上面写出的导数是显式的。这个函数的定积分可以[用数值方法](../numerical-integration/)近似，或者通过[误差函数](../gaussian-function/) $\mathrm{erf}$ 表示，后者定义为：

$$\mathrm{erf}(x) = \frac{2}{\sqrt{\pi}}\int_0^x e^{-t^2} \ dt$$

## 无穷小表述

对于想进一步了解的读者，微积分基本定理在非标准分析中还有一种无穷小表述。设 $x$ 是定义域内部的一个实点，并用同样的符号表示 $F$ 和 $f$ 到超实数的自然延拓。如果对每个使 $x+\Delta x$ 在定义域内的非零无穷小 $\Delta x$，差商都有限，并且它的标准部分不依赖于 $\Delta x$，那么 $F$ 在 $x$ 处可导，并且：

$$F'(x) = \mathrm{st}\!\left(\frac{F(x + \Delta x) - F(x)}{\Delta x}\right)$$

由转换原理，当 $\Delta x > 0$，且 $m$ 和 $M$ 是 $f$ 在以 $x$ 和 $x+\Delta x$ 为端点的区间上的最小值和最大值时，估计式 $(1)$ 变为：

$$m\Delta x \leq F(x + \Delta x) - F(x) \leq M\Delta x$$

除以 $\Delta x$ 之后，差商介于 $m$ 和 $M$ 之间，而由 $f$ 的连续性，这两个值都无限接近 $f(x)$。当 $\Delta x < 0$ 时，把积分的端点对调即可得到同样的结论。因此，对每个非零无穷小 $\Delta x$，差商的标准部分都是 $f(x)$，由此得到 $F'(x) = f(x)$。

>  有兴趣的读者可以参考以这种表述为基础的教材：H. Jerome Keisler 的[Elementary Calculus: An Infinitesimal Approach](https://people.math.wisc.edu/~hkeisler/calc.html)，其 1986 年第二版在 4.2 节讨论基本定理。
