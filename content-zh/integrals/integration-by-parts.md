---
title: 分部积分
title_en: Integration by Parts
source: https://algebrica.org/integration-by-parts/
license: CC BY-NC 4.0
tags:
  - antiderivative
  - definite-integral
  - indefinite-integral
  - integration
  - integration-by-parts
  - liate-rule
  - product-rule
  - trigonometric-integrals
translation:
  status: current
  source_hash: cfff8f2b248d3b3fa5635c7d72a2020881625874aa754cb69a2dcf8467aae32a
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 分部积分法

分部积分法通过把一个因子的导数转移到另一个因子上，重写两个[函数](../functions/)乘积的积分。对于[不定积分](../indefinite-integrals/)，公式为：

$$\int f(x)g'(x) \ dx = f(x)g(x) - \int f'(x)g(x) \ dx + c$$

对于[定积分](../definite-integrals/)，公式为：

$$\int_a^b f(x)g'(x) \ dx = [f(x)g(x)]_a^b - \int_a^b f'(x)g(x) \ dx$$

括号 $[f(x)g(x)]_a^b = f(b)g(b) - f(a)g(a)$ 表示边界项，必须明确计算。在这两种情形中，都假设 $f$ 和 $g$ 在积分所在的[区间](../intervals/)上连续可导。选择对哪个因子求导，决定了剩余积分是否比原积分更简单。

> 这个公式可以多次应用。每次应用都会产生一个新的乘积项和一个新的积分，因此在下一次应用前应先化简符号。

## 公式的推导

分部积分公式是[乘积法则](../differentiation-rules/)的重新排列：

$$\frac{d}{dx}(f(x)g(x)) = f'(x)g(x) + f(x)g'(x)$$

对两边关于 $x$ 积分，得到：

$$\int \frac{d}{dx}(f(x)g(x)) \ dx = \int f'(x)g(x) \ dx + \int f(x)g'(x) \ dx$$

左端以 $f(x)g(x)$ 为一个原函数。分别从每个原函数族中取一个代表，得到：

$$f(x)g(x) = \int f'(x)g(x) \ dx + \int f(x)g'(x) \ dx$$

解出第二个积分，便得到分部积分公式：

$$\int f(x)g'(x) \ dx = f(x)g(x) - \int f'(x)g(x) \ dx + c$$

令 $u = f(x)$ 且 $dv = g'(x) \ dx$，公式为：

$$\int u \ dv = uv - \int v \ du$$

> 当求导使一个因子变得更简单，而另一个因子具有初等原函数时，新积分会更简单。否则，就需要更换变量分配或使用其他积分方法。

## 几何解释

由乘积法则推导公式已经足以完成证明。本节的目的是把各项解释为平面中的[面积](../finding-areas-by-integration/)，从而让公式更直观、更具体。这种解释所需的假设比公式本身更强。设 $a < b$，并假设实值函数 $u,v\colon [a,b] \to \mathbb{R}$ 连续可导、[严格递增](../increasing-and-decreasing-functions/)，且满足 $u(a) = v(a) = 0$。这些条件意味着 $u$ 和 $v$ 在 $[a,b]$ 上非负。本节中，微分记号表示相应的关于 $x$ 的积分：

$$
\begin{align}
\int_a^b u \ dv &= \int_a^b u(x)v'(x) \ dx \\[6pt]
\int_a^b v \ du &= \int_a^b v(x)u'(x) \ dx
\end{align}
$$

参数曲线 $x \mapsto (v(x),u(x))$ 将 $(0,0)$ 与 $(v(b),u(b))$ 连接起来。由于两个函数都严格递增，它们各自在自己的像集上都有[反函数](../inverse-function/)。因此，无论把 $u$ 还是 $v$ 作为自变量，这条曲线都是一个递增函数的图像。它将矩形 $[0,v(b)] \times [0,u(b)]$ 分成两个区域。

![图 1](/assets/integrals/svg/integration-by-parts-1.zh.svg)

竖直切片给出下方区域的面积：

$$A_1 = \int_0^{v(b)} u(v^{-1}(t)) \ dt = \int_a^b u(x)v'(x) \ dx = \int_a^b u \ dv$$

水平切片给出左上区域的面积：

$$A_2 = \int_0^{u(b)} v(u^{-1}(s)) \ ds = \int_a^b v(x)u'(x) \ dx = \int_a^b v \ du$$

两个区域的内部互不相交，并且填满了面积为 $u(b)v(b)$ 的矩形。因此，它们的面积满足：

$$\int_a^b u \ dv + \int_a^b v \ du = u(b)v(b)$$

重新排列这个等式，得到：

$$\int_a^b u \ dv = u(b)v(b) - \int_a^b v \ du$$

由于 $u(a)v(a) = 0$，乘积 $u(b)v(b)$ 就是边界项 $[uv]_a^b$。在相同的可微性与严格单调性假设下，只要 $u(a),v(a) \geq 0$，非零初始值也有相同的解释。对 $t \in \{a,b\}$，定义 $R_t = [0,v(t)] \times [0,u(t)]$。严格单调性给出 $R_a \subset R_b$，而 $R_b \setminus R_a$ 的面积为：

$$u(b)v(b) - u(a)v(a) = [uv]_a^b$$

从 $(v(a),u(a))$ 到 $(v(b),u(b))$ 的曲线段将这个差集分成面积分别为 $\int_a^b u \ dv$ 和 $\int_a^b v \ du$ 的两个区域。由此得到带有完整边界项的定积分分部积分公式。

> 单调性与非负性是把这种解释视为普通面积所需的假设，并不是分部积分公式的必要条件。如果 $u$ 或 $v$ 改变符号或方向，平面区域就不再对应两个互不相交的无符号面积。对于任意实值函数 $u,v \in C^1([a,b])$，这些积分是带符号的量，而公式仍然由乘积法则推出。

## 如何选择 $u$ 和 $dv$

新的积分 $\int v \ du$ 应当比原积分更简单。选择 $u$ 和 $dv$ 时，可以遵循两个条件：

+ 选择求导后会变得更简单的因子作为 $u$。
+ 选择剩下的因子作为 $dv$，使得可以直接计算 $v = \int dv$。

- - -

LIATE 启发式为选择 $u$ 提供了如下初始顺序：

+ 对数函数
+ 反三角函数
+ 代数表达式
+ 三角函数
+ 指数函数

[对数函数](../logarithmic-function/)和反三角函数的导数通常比原函数更简单，因此这些因子常被选作 $u$。[指数函数](../exponential-function/) $e^{kx}$（其中 $k \neq 0$ 为常数）的原函数是 $e^{kx}/k$，所以它通常被分配给 $dv$。

> LIATE 是启发式方法，而不是定理。如果按它建议的分配得到更难的积分，应改用另一种分配或其他方法。

## 最常见的错误

在应用分部积分时，有四类错误反复出现。

不合适的分配可能会使 $dv$ 没有初等原函数，或者使剩余积分 $\int v \ du$ 比原积分更难。在这两种情况下，都应更换分配方式。

在定积分公式中，必须明确计算边界项 $[uv]_a^b$。如果省略它，除非边界项为零，否则等式不成立。

$\sin(x)$ 和 $\cos(x)$ 的导数会在循环应用中引入交替符号。代入公式前先写出 $du$，确保每个负号都保持明确。

在不定积分情形中，结果必须包含一个积分常数 $c$。中间原函数中的常数都会吸收到这个常数中，因此可以在最后一次代数化简后再加上 $c$。

## 例 1

考虑定义在包含于 $(0,\infty)$ 的区间上的积分：

$$\int x^2\ln(x) \ dx$$

被积函数含有对数因子和 $x$ 的一个[幂](../powers/)。对 $\ln(x)$ 求导得到 $1/x$，而 $x^2$ 有初等原函数。令 $f(x) = \ln(x)$ 且 $g'(x) = x^2$：

$$f(x) = \ln(x) \quad \rightarrow \quad f'(x) = \frac{1}{x}$$

$$g'(x) = x^2 \quad \rightarrow \quad g(x) = \frac{x^3}{3}$$

代入公式：

$$
\begin{align}
\int x^2\ln(x) \ dx &= \frac{x^3}{3}\ln(x) - \int \frac{x^3}{3x} \ dx + c \\[6pt]
                     &= \frac{x^3}{3}\ln(x) - \int \frac{x^2}{3} \ dx + c
\end{align}
$$

剩余积分的幂法则原函数为 $x^3/9$。因此，原函数为：

$$\frac{x^3}{3}\ln(x) - \frac{x^3}{9} + c$$

提出 $x^3/3$ 后，结果为：

$$\int x^2\ln(x) \ dx = \frac{x^3}{3}\left(\ln(x) - \frac{1}{3}\right) + c$$

## 例 2

再次应用分部积分可能会重新得到原积分。此时，该积分满足一个代数方程。考虑：

$$\int e^x\sin(x) \ dx$$

记这个积分为 $I$：

$$I = \int e^x\sin(x) \ dx$$

由于指数因子 $e^x$ 的原函数是 $e^x$，而 $\sin(x)$ 的导数是 $\cos(x)$，令 $u = \sin(x)$ 且 $dv = e^x \ dx$。导数与原函数分别为：

$$du = \cos(x) \ dx \qquad v = e^x$$

代入公式：

$$I = e^x\sin(x) - \int e^x\cos(x) \ dx$$

新的积分仍然含有 $e^x$ 与一个[三角函数](../sine-and-cosine/)的乘积。需要再次应用分部积分。定义：

$$J = \int e^x\cos(x) \ dx$$

在这个积分中令 $u = \cos(x)$ 且 $dv = e^x \ dx$。导数与原函数分别为：

$$du = -\sin(x) \ dx \qquad v = e^x$$

代入公式：

$$J = e^x\cos(x) + \int e^x\sin(x) \ dx = e^x\cos(x) + I$$

原积分 $I$ 再次出现。将其代入关于 $I$ 的方程：

$$I = e^x\sin(x) - (e^x\cos(x) + I)$$

在等式两边加上 $I$，得到：

$$2I = e^x\sin(x) - e^x\cos(x)$$

由于 $I$ 的系数是 $2$，将等式两边除以 $2$，并加上积分常数：

$$I = \frac{e^x}{2}(\sin(x) - \cos(x)) + c$$

> 如果原积分以非零的净系数重新出现，结果就是关于 $I$ 的[线性方程](../linear-equations/)。它的解由积分常数确定到相差一个常数。

## 例 3

考虑[反常定积分](../improper-integrals/)：

$$\int_0^1 x\ln(x) \ dx$$

对于 $\varepsilon \in (0,1)$，被积函数在 $[\varepsilon,1]$ 上[连续](../continuous-functions/)。对 $\ln(x)$ 求导得到 $1/x$，而 $x$ 有初等原函数。令 $f(x) = \ln(x)$ 且 $g'(x) = x$：

$$f(x) = \ln(x) \quad \rightarrow \quad f'(x) = \frac{1}{x}$$

$$g'(x) = x \quad \rightarrow \quad g(x) = \frac{x^2}{2}$$

在 $[\varepsilon,1]$ 上应用定积分公式，得到：

$$
\begin{align}
\int_\varepsilon^1 x\ln(x) \ dx &= \left[\frac{x^2}{2}\ln(x)\right]_\varepsilon^1 - \int_\varepsilon^1 \frac{x^2}{2x} \ dx \\[6pt]
                                  &= \left[\frac{x^2}{2}\ln(x)\right]_\varepsilon^1 - \frac{1}{2}\int_\varepsilon^1 x \ dx
\end{align}
$$

反常积分是 $\varepsilon \to 0^+$ 时的极限。由于 $\ln(1) = 0$ 且 $\varepsilon^2\ln(\varepsilon) \to 0$，边界项的极限为：

$$\lim_{\varepsilon \to 0^+}\left[\frac{x^2}{2}\ln(x)\right]_\varepsilon^1 = 0$$

幂法则给出剩余积分的极限：

$$\lim_{\varepsilon \to 0^+}\frac{1}{2}\int_\varepsilon^1 x \ dx = \frac{1}{4}$$

因此：

$$\int_0^1 x\ln(x) \ dx = -\frac{1}{4}$$

> [极限](../limits/) $\lim_{x \to 0^+} x^2\ln(x) = 0$ 可以直接由换元 $x = e^{-t}$ 得到。当 $x \to 0^+$ 时，$t \to \infty$，且 $x^2\ln(x) = -te^{-2t} \to 0$。

## 决策流程

对于含有两个因子乘积的积分，可以按以下流程处理。

+ 将被积函数识别为乘积 $u(x)v'(x)$。如果看不出有用的乘积，先尝试展开、因式分解、[三角恒等式](../trigonometric-identities/)或[部分分式](../partial-fraction-decomposition/)，然后重新判断是否适合使用分部积分。
+ 使用 LIATE 作为选择 $u$ 和 $dv$ 的初步指导。确认求导后 $u$ 会变得更简单，并且可以直接计算 $v = \int dv$。
+ 计算 $du = u'(x) \ dx$ 和 $v = \int dv$。
+ 应用紧凑公式：

$$\int u \ dv = uv - \int v \ du$$

+ 检查新积分 $\int v \ du$。有三种可能的结果：

第一种结果是新积分比原积分更难。此时，返回到 $u$ 和 $dv$ 的选择，尝试另一种分配。如果没有任何分配能得到更简单的积分，就使用其他方法。

第二种结果是原积分重新出现，可能需要再次应用公式。把积分的所有项收集到等式一侧，就得到一个线性方程。当积分所得的系数非零时，该方程可解。

第三种结果是新积分有标准原函数，或需要再次应用分部积分。在定积分情形中，计算边界项 $[uv]_a^b = u(b)v(b) - u(a)v(a)$ 和剩余的定积分。在不定积分情形中，计算剩余积分，并在最后一次代数化简后加上一个积分常数 $c$。

> 当被积函数是关于 $\sin(x)$ 和 $\cos(x)$ 的有理式，而不是适合分部积分的乘积时，[魏尔斯特拉斯换元](../the-weierstrass-substitution/)或 $u = \sin(x)$、$u = \cos(x)$ 这样的[直接换元](../integration-by-substitution/)可能会得到一个[有理函数的积分](../integral-of-rational-functions/)。
