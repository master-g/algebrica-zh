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
  source_hash: c9b804c73ddeca0b08be518a804bcaf7fc01e10fe6497fa0a0679bf1c802bc16
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 分部积分法

与[换元积分法](../integration-by-substitution/)一样，分部积分法是把不那么容易的积分化为更简单形式的最有用的技巧之一：通过一系列变形，把求导从一个因子转移到另一个因子上，使新积分的原函数比原积分的原函数更容易求出。这种方法一般适用于下面形式的积分：

$$\int f(x)g'(x) \ dx $$

经过适当的变形，这些积分可以写成：

$$\int u \ dv = uv - \int v \ du \tag{1}$$

一般说来，这种方法不如换元法那么直接，因为难点恰恰在于恰当地选取 $u$ 和 $dv$，使所得的积分更简单。下面的积分是这种方法的典型应用：

$$\int x e^x\,dx$$

令 $u=x$ 和 $dv=e^x\,dx$，就有 $du=dx$ 和 $v=e^x$，这个积分可以改写。应用 $(1)$，得到：

$$\begin{aligned}  \int xe^x\,dx &= xe^x-\int e^x\,dx \\[6pt] &= xe^x-e^x+C \\[12pt]  &= e^x(x-1)+C \end{aligned}$$

对于[不定积分](../indefinite-integrals/)，公式为：

$$\int f(x)g'(x) \ dx = f(x)g(x) - \int f'(x)g(x) \ dx + c \tag{2}$$

对于[定积分](../definite-integrals/)，不出所料，必须把积分限考虑进去。

$$\int_a^b f(x)g'(x) \ dx = [f(x)g(x)]_a^b - \int_a^b f'(x)g(x) \ dx \tag{3}$$

这种方法可以多次使用，目的是每次迭代都得到更简单的积分；在有用且可行的时候，还可以与换元法交替使用。

- - -

公式 $(1)$ 由求导的[乘积法则](../differentiation-rules/)推导而来。我们从下式出发：

$$\frac{d}{dx}(f(x)g(x)) = f'(x)g(x) + f(x)g'(x)$$

两边对 $x$ 积分，得到：

$$\int \frac{d}{dx}(f(x)g(x)) \ dx = \int f'(x)g(x) \ dx + \int f(x)g'(x) \ dx \tag{4}$$

左边被积函数的一个原函数就是 $f(x)g(x)$，所以可以把上式改写为：

$$f(x)g(x) = \int f'(x)g(x) \ dx + \int f(x)g'(x) \ dx$$

把各项从等号的一边移到另一边，就得到分部积分公式：

$$\int f(x)g'(x) \ dx = f(x)g(x) - \int f'(x)g(x) \ dx + c$$

最后，令 $u = f(x)$ 和 $dv = g'(x) \ dx$，公式恰好变为 $(1)$：

$$\int u \ dv = uv - \int v \ du$$

应用这种方法时，必须始终检查所得的积分是否确实比原积分简单。一般说来，当求导使其中一个因子变简单，而另一个因子有初等原函数时，就是这种情况。否则，我们可能得到一个更复杂的积分而不是简化计算，所走的路径多半不是最有效的。无论如何，与换元积分法一样，有了经验之后，找到使积分容易计算的有效代换几乎会成为本能。

## 几何解释

我们通常倾向于先验地接受数学理论中给出的结果，从某些方面看这是好事。这说明我们真心信任前人，但也证明我们每个人与生俱来的自我保护本能在起作用。否则，我们中的大多数人恐怕都会发疯。

不过，有些内容值得更深入地探讨，因为传统课程有时略去它们，而它们却能让某些公式变得直观而具体。分部积分公式的几何解释就是这样，它把公式中的各项解释为[平面上的面积](../finding-areas-by-integration/)。

考虑满足 $a < b$ 的两点 $a$ 和 $b$，设 $u,v\colon [a,b] \to \mathbb{R}$ 是[实值函数](../functions/)，连续可导、[严格递增](../increasing-and-decreasing-functions/)，并且 $u(a) = v(a) = 0$，于是 $u$ 和 $v$ 在整个 $[a,b]$ 上非负。可以写出：

$$
\begin{align}
\int_a^b u \ dv &= \int_a^b u(x)v'(x) \ dx \\[6pt]
\int_a^b v \ du &= \int_a^b v(x)u'(x) \ dx
\end{align}
$$

参数曲线 $x \mapsto (v(x),u(x))$ 把原点与点 $(v(b),u(b))$ 连接起来，并把矩形 $[0,v(b)] \times [0,u(b)]$ 分成两个区域。

![图 1](/assets/integrals/svg/integration-by-parts-1.zh.svg)

下方区域的面积由下面的积分给出：

$$A_1 = \int_0^{v(b)} u(v^{-1}(t)) \ dt = \int_a^b u(x)v'(x) \ dx = \int_a^b u \ dv$$

而上方区域的面积为：

$$A_2 = \int_0^{u(b)} v(u^{-1}(s)) \ ds = \int_a^b v(x)u'(x) \ dx = \int_a^b v \ du$$

由于两个区域填满了矩形，有：

$$\int_a^b u \ dv + \int_a^b v \ du = u(b)v(b)$$

把这个等式移项，得到：

$$\int_a^b u \ dv = u(b)v(b) - \int_a^b v \ du \tag{5}$$

由于 $u(a)=v(a)=0$，有：

$$[uv]_a^b=u(b)v(b)$$

因此等式 $(5)$ 恰好就是上面见过的分部积分公式：

$$\int_a^b u \ dv = [uv]_a^b - \int_a^b v \ du$$

> 函数严格递增且非负的假设，使两个积分可以解释为不带符号的几何面积，但对一般公式的成立并不是必要的。事实上，如果 $u$ 或 $v$ 变号或者不递增，这个构造一般就不再给出面积分别等于两个积分的两个分离区域。

## 如何选择 $u$ 和 $dv$

到目前为止我们已经几次说过，要让这种方法真正有用，应用之后所得的积分必须比原积分简单。但怎样选取 $u$ 和 $dv$，才能真正达到我们的目的？原则上，可以找出两条选取的途径：

+ 取 $u$ 为求导后变得更简单的因子。
+ 取 $dv$ 为剩下的因子，使 $v = \int dv$ 可以直接算出。

LIATE 经验法则给出了尝试 $u$ 的各种选择的顺序。这个顺序是：

+ 对数函数
+ 反三角函数
+ 代数函数
+ 三角函数
+ [指数函数](../exponential-function/)

不过要小心，因为这条规则并不总是有用。一般说来，常把[对数](../logarithmic-function/)因子或反三角函数选作 $u$，因为求导往往使它的形式变简单。但如果这样选产生了更难的积分，就必须换一种方式处理问题，作别的代换或使用别的方法。很遗憾，积分的本性就是如此；好消息是，它们需要的更多是练习而不是直觉，经常练习之后，代换会来得既快又自然。

- - -

在分部积分法的应用中，有些相当典型的错误反复出现，最常见的是选取的因子使原积分变得更复杂而不是更简单。

在不定积分的情形，结果中必须始终出现积分常数。中间各个原函数产生的常数可以并入这个常数，所以可以在最后的代数化简之后只加一个 $c$。

对于定积分，边界项 $[uv]_a^b$ 必须明确算出，这一步常被忽略。如果略去它，等式 $(3)$ 只在边界项为零时成立（这个条件不能想当然）。

把三角函数选作 $u$ 时，必须仔细计算微分 $du$。$\sin(x)$ 的导数是 $\cos(x)$，而 $\cos(x)$ 的导数是 $-\sin(x)$，这使逐次求导时符号必然交替。在应用公式之前明确写出 $du$，可以避免符号错误。


## 例 1

现在通过几个例子把这种方法付诸实践。先考虑下面的积分：

$$\int x^2\ln(x) \ dx$$

被积函数含有[幂](../powers/)与对数的乘积。两个因子都有初等原函数，选择相当简单。令：

$$f(x) = \ln(x) \quad \rightarrow \quad f'(x) = \frac{1}{x}$$

$$g'(x) = x^2 \quad \rightarrow \quad g(x) = \frac{x^3}{3}$$

应用公式 $(2)$，得到：

$$
\begin{align}
\int x^2\ln(x) \ dx &= \frac{x^3}{3}\ln(x) - \int \frac{x^3}{3x} \ dx + c \\[6pt]
                     &= \frac{x^3}{3}\ln(x) - \int \frac{x^2}{3} \ dx + c\\[6pt]
                     & = \frac{x^3}{3}\ln(x) - \frac{x^3}{9} + c
\end{align}
$$

现在只需提出公因式，就得到：

$$\frac{x^3}{3}\left(\ln(x) - \frac{1}{3}\right) + c$$

## 例 2

再举一个例子，说明第二次应用分部积分法怎样回到原积分。例如，考虑下面的积分：

$$\int e^x\sin(x) \ dx$$

把这个积分记为 $I$。由于因子 $e^x$ 的一个原函数是 $e^x$，而 $\sin(x)$ 的导数是 $\cos(x)$，选取 $u = \sin(x)$ 和 $dv = e^x \ dx$。计算导数和原函数，得到：

$$du = \cos(x) \ dx \qquad v = e^x$$

利用公式 $(2)$，写出：

$$I = e^x\sin(x) - \int e^x\cos(x) \ dx$$

注意，新积分仍然含有 $e^x$ 与一个[三角函数](../sine-and-cosine/)的乘积，所以必须第二次应用分部积分法，为此定义：

$$J = \int e^x\cos(x) \ dx$$

选取 $u = \cos(x)$ 和 $dv = e^x \ dx$，计算导数和原函数：

$$du = -\sin(x) \ dx \qquad v = e^x$$

再次利用公式 $(2)$，写出：

$$J = e^x\cos(x) + \int e^x\sin(x) \ dx = e^x\cos(x) + I$$

原积分 $I$ 又出现了。把 $J$ 的表达式代入 $I$ 的等式，得到：

$$I = e^x\sin(x) - (e^x\cos(x) + I)$$

两边同时加上 $I$，得到：

$$2I = e^x\sin(x) - e^x\cos(x)$$

因此：

$$I = \frac{e^x}{2}(\sin(x) - \cos(x)) + c$$

## 例 3

现在考虑下面的[反常积分](../improper-integrals/)：

$$\int_0^1 \ln(x) \ dx$$

可以把被积函数看作对数与恒等于 1 的常数函数的乘积。对 $\ln(x)$ 求导就得到 $1/x$，而常数函数 $1$ 的一个原函数是 $x$。因此作如下代换：

$$f(x) = \ln(x) \quad \rightarrow \quad f'(x) = \frac{1}{x}$$

$$g'(x) = 1 \quad \rightarrow \quad g(x) = x$$

为了排除奇异端点 $0$，取 $\varepsilon \in (0,1)$，在[区间](../intervals/) $[\varepsilon,1]$ 上应用公式 $(3)$：

$$
\begin{align}
\int_\varepsilon^1 \ln(x) \ dx &= [x\ln(x)]_\varepsilon^1 - \int_\varepsilon^1 \frac{x}{x} \ dx \\[6pt]
                                  &= [x\ln(x)]_\varepsilon^1 - \int_\varepsilon^1 1 \ dx
\end{align}
$$

我们知道，反常积分是 $\varepsilon \to 0^+$ 时的[极限](../limits/)。由于 $\ln(1) = 0$ 且 $\varepsilon\ln(\varepsilon) \to 0$，第一项的极限为：

$$\lim_{\varepsilon \to 0^+}[x\ln(x)]_\varepsilon^1 = 0$$

而积分的极限为：

$$\lim_{\varepsilon \to 0^+}\int_\varepsilon^1 1 \ dx = 1$$

因此得到：

$$\int_0^1 \ln(x) \ dx = -1$$


## 选择步骤

到目前为止我们看到，当被积函数是两个因子的乘积时，可以使用下面的分部积分步骤，按如下说明应用。

首先把被积函数看成乘积 $u(x)v'(x)$。如果乍看之下没有明显的乘积，可以尝试对原积分作变形，例如因式分解、利用[三角恒等式](../trigonometric-identities/)，或借助[部分分式分解](../partial-fraction-decomposition/)，然后重新判断分部积分法是否适用。

把积分化为适合这种方法的因子乘积之后，用 LIATE 法则作为选取 $u$ 和 $dv$ 的初步指引。首要的标准是检查求导是否使因子 $u$ 变简单，以及 $v = \int dv$ 能否直接算出。当进一步应用会重新得到原积分或得出递推公式时，第一个条件并非必需。

然后计算 $du = u'(x) \ dx$ 和 $v = \int dv$，并应用公式 $(1)$。这时考察新积分 $\int v \ du$，可能出现以下几种情形。

+ 新积分比原积分更难。这时回到 $u$ 和 $dv$ 的选取，尝试另一种选择。如果没有任何选择能简化计算或与原积分产生有用的关系，就必须使用别的方法。

+ 原积分重新出现，如例 2 那样，可能是在再次应用公式之后。把积分的所有出现都移到一边，得到一个[一次方程](../linear-equations/)，当积分的系数不为零时可以解出。

+ 最后，新积分的被积函数有已知的原函数，或者新积分需要再次应用分部积分法。在定积分的情形，计算边界项 $[uv]_a^b = u(b)v(b) - u(a)v(a)$ 和剩下的定积分。在不定积分的情形，计算剩下的积分，并在最后的代数化简之后加上一个积分常数 $c$。

注意：当被积函数是 $\sin(x)$ 和 $\cos(x)$ 的有理表达式时，[魏尔斯特拉斯换元](../the-weierstrass-substitution/)或者 $u = \sin(x)$、$u = \cos(x)$ 这样的[直接换元](../integration-by-substitution/)可以把它化为[有理函数的积分](../integral-of-rational-functions/)。

最后，对于某些以整数指数为参数的积分族，分部积分法给出同一族中下标更低的积分，所得的关系就是[递推公式](../reduction-formulas/)，反复应用直到到达基本情形为止。
