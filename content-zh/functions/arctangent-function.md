---
title: 反正切函数
title_en: Arctangent Function
source: https://algebrica.org/arctangent-function/
license: CC BY-NC 4.0
tags:
  - arctangent
  - derivatives
  - inverse-trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: aacb052300bafb216580af86013efaf38dcc1804f28ae72110bf5dc1deb0efdb
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 引言

条目[反正切与反余切](../arctangent-and-arccotangent/)在[单位圆](../unit-circle/)上定义了反正切，并列出它的常用值。本文把反正切实为实变量的实[函数](../functions/)，侧重它的分析性质以及它与[逆函数](../inverse-function/)的联系。

[正切](../tangent-function/)以 $\pi$ 为周期，因此在整个定义域上不是单射，在那里不存在反函数。在开区间 $\left(-\pi/2, \pi/2\right)$ 上，它连续、严格递增且值域为 $\mathbb{R}$，从而是双射。它在这个区间上的[逆函数](../inverse-function/)就是反正切：

$$\arctan : \mathbb{R} \to \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$$

函数 $f(x) = \arctan(x)$ 把实数 $x$ 映为 $\left(-\pi/2, \pi/2\right)$ 中正切值等于 $x$ 的唯一角，角度以[弧度](../angles-and-angular-measure/)度量。把正切的主值分支沿直线 $y = x$ 反射，即得反正切的图像。

![图 1](/assets/functions/svg/arctangent-function-1.zh.svg)

正切与反正切是主值区间与 $\mathbb{R}$ 之间的一对逆函数。因此下面的第一个复合对一切实数 $x$ 都是恒等映射。当 $\tan(\theta)$ 有定义时，当且仅当 $\theta$ 属于主值区间，第二个复合才返回 $\theta$：

$$
\begin{align}
\tan(\arctan(x)) &= x \\[6pt]
\arctan(\tan(\theta)) &= \theta \iff \theta \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)
\end{align}
$$

> 当 $\theta$ 位于主值区间之外且 $\tan(\theta)$ 有定义时，反正切返回 $\theta - k\pi$，其中 $k$ 是使 $\theta - k\pi \in \left(-\pi/2, \pi/2\right)$ 成立的唯一整数。对 $\theta = \frac{5\pi}{6}$，有 $k = 1$，所以 $\arctan(\tan(5\pi/6)) = -\frac{\pi}{6}$。

## 性质

作为限制后正切的逆函数，反正切具有以下性质。

+ [定义域](../determining-the-domain-of-a-function/)：$x \in \mathbb{R}$
+ 值域：$-\pi/2 < y < \pi/2$
+ 周期性：反正切不是周期函数。
+ 奇偶性：[奇函数](../even-and-odd-functions/)，且 $\arctan(-x) = -\arctan(x)$
+ 单调性：在整个定义域上严格[递增](../increasing-and-decreasing-functions/)
+ 零点：$x = 0$，是函数在定义域上唯一的零点
+ [最大值点与最小值点](../maximum-minimum-and-inflection-points/)：无，因为两个界都取不到

正切是奇函数，且主值区间关于原点对称，所以反正切是奇函数，其图像关于原点对称。函数有界，且对每个实数 $x$ 满足[绝对值](../absolute-value/)不等式 $\left|\arctan(x)\right| < \pi/2$。它的上确界 $\pi/2$ 与下确界 $-\pi/2$ 都在值域之外，因此反正切既没有最大值也没有最小值。

反正切可以用[复对数](../complex-logarithm/)表示为闭式。设 $w = \arctan(x)$，$u = e^{2iw}$。[欧拉公式](../eulers-formula/)把 $\tan(w) = x$ 改写为方程：

$$-i\frac{u - 1}{u + 1} = x$$

解出 $u$ 得 $u = \dfrac{1 + ix}{1 - ix}$。复数 $u$ 的模为 $1$。由于 $2w$ 落在 $(-\pi, \pi)$ 内，它就是 $u$ 的主辐角，且 $\mathrm{Log}(u) = 2iw$。代入 $u$ 的表达式得公式：

$$\arctan(x) = -\frac{i}{2}\mathrm{Log}\left(\frac{1 + ix}{1 - ix}\right)$$

这里 $\mathrm{Log}$ 是 $\mathbb{C} \setminus (-\infty, 0]$ 上的主值对数，由 $\mathrm{Log}(z) = \ln|z| + i\mathrm{Arg}(z)$ 定义，其中 $\mathrm{Arg}(z) \in (-\pi, \pi)$。对实数 $x$，该分式永远不会落在支割线上。

## 极限与水平渐近线

当自变量从左侧趋近 $\pi/2$ 时正切趋于 $+\infty$，从右侧趋近 $-\pi/2$ 时趋于 $-\infty$。由逆函数关系可得在无穷远处的相应极限：

$$
\begin{align}
\lim_{x \to +\infty} \arctan(x) &= \frac{\pi}{2} \\[6pt]
\lim_{x \to -\infty} \arctan(x) &= -\frac{\pi}{2}
\end{align}
$$

直线 $y = \pi/2$ 与 $y = -\pi/2$ 是图像的[水平渐近线](../asymptotes/)。它们是正切的竖直渐近线沿直线 $y = x$ 反射的像。在原点附近，图像可由直线 $y = x$ 逼近。设 $y = \arctan(x)$，则 $x = \tan(y)$，且当 $x \to 0$ 时 $y \to 0$。由[重要极限](../remarkable-limits/) $\tan(y)/y \to 1$ 得极限：

$$\lim_{x \to 0} \frac{\arctan(x)}{x} = 1$$

同一极限也刻画了图像趋向上渐近线的方式。对 $x > 0$，[反余切函数](../arccotangent-function/)满足 $\mathrm{arccot}(x) = \arctan\left(\frac{1}{x}\right) = \pi/2 - \arctan(x)$。作换元 $t = 1/x$ 得极限：

$$\lim_{x \to +\infty} x\left(\frac{\pi}{2} - \arctan(x)\right) = 1$$

因此竖直间隙 $\pi/2 - \arctan(x)$ 在 $x \to +\infty$ 时渐近于 $1/x$。

## 反正切函数的导数与积分

反正切在 $\mathbb{R}$ 上[连续](../continuous-functions/)。限制后的正切在主值区间上的导数为 $1 + \tan^2(t) > 0$，因此[逆函数的导数](../derivative-of-the-inverse-function/)法则在每一点都适用。取定实数 $x$，设 $y = \arctan(x)$，则 $\tan(y) = x$。对该恒等式关于 $x$ 求导得 $\left(1 + \tan^2(y)\right)y' = 1$。由于 $\tan(y) = x$，[导数](../derivatives/)为：

$$\frac{d}{dx}\arctan(x) = \frac{1}{1 + x^2}$$

反正切的导数为正且至多为 $1$，等号仅在原点成立。[拉格朗日定理](../lagrange-theorem/)表明反正切是常数为 $1$ 的 Lipschitz 函数。对一切 $a, b \in \mathbb{R}$，它满足不等式：

$$\left|\arctan(a) - \arctan(b)\right| \leq |a - b|$$

Lipschitz 函数是[一致连续](../uniform-continuity/)的，因此反正切在整个实数轴上一致连续。由于反正切的导数是 $\dfrac{1}{1 + x^2}$ 且 $\arctan(0) = 0$，该函数有如下积分表示：

$$\arctan(x) = \int_0^x \frac{dt}{1 + t^2}$$

由该积分表示以及在 $\pm\infty$ 处的极限，可得[反常积分](../improper-integrals/)。相应的基本原函数也列在[常用不定积分](../indefinite-integrals/)之中：

$$\int_{-\infty}^{+\infty} \frac{dx}{1 + x^2} = \pi$$

在这个[不定积分](../indefinite-integrals/)的[分部积分](../integration-by-parts/)公式中，我们对反正切求导、对因子 $1$ 积分：

$$\int \arctan(x) \ dx = x\arctan(x) - \int \frac{x}{1 + x^2} \ dx$$

剩余被积函数的分子是分母 $1 + x^2$ 的导数的一半。令 $u = 1 + x^2$，剩余积分变为：

$$\frac{1}{2}\int \frac{1}{u} \ du$$

原函数为：

$$\int \arctan(x) \ dx = x\arctan(x) - \frac{1}{2}\ln\left(1 + x^2\right) + C$$

在关于原点对称的区间上，[定积分](../definite-integrals/)为零，因为反正切是奇函数。在单位区间上，由该原函数得：

$$\int_0^1 \arctan(x) \ dx = \frac{\pi}{4} - \frac{\ln 2}{2}$$

## 单调性与凸性

导数 $\dfrac{1}{1 + x^2}$ 处处为正，因此反正切在整个实数轴上严格递增，没有驻点，也没有局部极值。它的界取不到，因此既没有最大值也没有最小值。二阶导数的符号决定[凸性与凹性](../convexity-and-concavity-of-functions/)：

$$\frac{d^2}{dx^2}\arctan(x) = -\frac{2x}{\left(1 + x^2\right)^2}$$

由于分母为正，二阶导数与 $-x$ 同号。图像在 $(-\infty, 0)$ 上凸，在 $(0, +\infty)$ 上凹。在原点处二阶导数为零且变号，因此 $(0, 0)$ 是[拐点](../maximum-minimum-and-inflection-points/)。

## 麦克劳林级数

对 $|t| < 1$，反正切的导数有公比为 $-t^2$ 的[等比级数](../geometric-series/)展开：

$$\frac{1}{1 + t^2} = \sum_{n=0}^{\infty} (-1)^n t^{2n}$$

在收敛区间内部，[幂级数](../power-series/)可以逐项积分。在 $[0, x]$ 上积分并利用 $\arctan(0) = 0$，得 $|x| < 1$ 时的如下级数：

$$\arctan(x) = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots$$

级数只含奇次幂，且系数符号交替。截断到第一项，得 $x$ 很小时的 $\arctan(x) \approx x$。在 $x = 1$ 处，导数的级数发散，但反正切的级数由[莱布尼茨判别法](../leibniz-criterion/)收敛，因为其项的绝对值递减到零且符号交替。阿贝尔定理把它的和等同于 $\arctan(x)$ 当 $x \to 1^-$ 时的极限：

$$\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots = \frac{\pi}{4}$$

由奇偶性，级数在 $x = -1$ 处也收敛，其和为 $-\pi/4$。因此它的收敛区间是 $[-1, 1]$。由交错级数估计，第 $N$ 项之后的误差绝对值小于第一个被省略的项：

$$\dfrac{1}{2N+3}$$

若

$$\pi_N = 4\sum_{n=0}^{N}\dfrac{(-1)^n}{2n+1}$$

则

$$|\pi - \pi_N| < \dfrac{4}{2N+3}$$

该估计保证：当求和至少包含两百万项时，绝对误差低于 $10^{-6}$。反正切的加法公式给出一个恒等式，其中两个反正切实参的绝对值都小于 $1$：

$$\frac{\pi}{4} = 4\arctan\left(\frac{1}{5}\right) - \arctan\left(\frac{1}{239}\right)$$

两个级数中相继幂次的比值分别为 $1/25$ 与 $1/239^2$，因此每个级数截断到十项，就给出误差小于 $1.6 \cdot 10^{-15}$ 的 $\pi$ 近似值。
