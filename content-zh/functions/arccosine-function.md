---
title: 反余弦函数
title_en: Arccosine Function
source: https://algebrica.org/arccosine-function/
license: CC BY-NC 4.0
tags:
  - arccosine
  - derivatives
  - inverse-trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 7c331bb4d6d8b1de28beca454e02c6baaa28707164a2428daa32e828e641ae5a
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---

## 引言

条目[反正弦与反余弦](../arcsine-and-arccosine/)把反余弦定义为余弦等于给定值的角。这里的反余弦是实变量的实[函数](../functions/)。

[余弦](../cosine-function/)是周期函数，所以它取 $[-1, 1]$ 中每个值无穷多次，在整个 $\mathbb{R}$ 上没有反函数。限制在区间 $[0, \pi]$ 上时，它连续且严格递减，并把这个区间映满 $[-1, 1]$。限制后的余弦是双射，它的[反函数](../inverse-function/)就是反余弦：

$$\arccos : [-1, 1] \to [0, \pi]$$

函数 $f(x) = \arccos(x)$ 给每个 $x \in [-1, 1]$ 指定 $[0, \pi]$ 中余弦等于 $x$ 的唯一的角，角以[弧度](../angles-and-angular-measure/)度量。它的图像是限制后的余弦分支关于直线 $y = x$ 的反射。

![图 1](/assets/functions/svg/arccosine-function-1.zh.svg)

两种复合在不同的集合上与恒等函数一致。先取反余弦再取余弦，对每个 $x \in [-1, 1]$ 都得到 $x$；而先取余弦再取反余弦，只有当 $\theta$ 落在限制区间内时才得到 $\theta$：

$$
\begin{align}
\cos(\arccos(x)) &= x \quad \forall x \in [-1, 1] \\[6pt]
\arccos(\cos(\theta)) &= \theta \quad \iff \quad \theta \in [0, \pi]
\end{align}
$$

> 在这个区间之外，反余弦给出 $[0, \pi]$ 中与 $\theta$ 余弦相同的角。当 $\theta = -\frac{\pi}{3}$ 时，余弦等于 $\frac{1}{2}$，所以 $\arccos(\cos(-\pi/3)) = \frac{\pi}{3}$。

## 性质

作为限制后的余弦的反函数，反余弦具有下列性质。

+ [定义域](../determining-the-domain-of-a-function/)：$x \in [-1, 1]$
+ 值域：$0 \leq y \leq \pi$
+ 周期性：反余弦不是周期函数。
+ 奇偶性：既不是[偶函数也不是奇函数](../even-and-odd-functions/)，满足 $\arccos(-x) = \pi - \arccos(x)$
+ 单调性：在整个定义域上严格[递减](../increasing-and-decreasing-functions/)
+ 零点：$x = 1$，定义域中函数为零的唯一的点
+ [最大值点和最小值点](../maximum-minimum-and-inflection-points/)：最大值 $\pi$ 在 $x = -1$ 处取到，最小值 $0$ 在 $x = 1$ 处取到。

反余弦有界，它的最小值和最大值在定义域的端点处取到。关系 $\arccos(-x) = \pi - \arccos(x)$ 使图像关于点 $\left(0, \frac{\pi}{2}\right)$ 对称。对每个 $x \in [-1, 1]$，反余弦与[反正弦](../arcsine-function/)满足恒等式：

$$\arcsin(x) + \arccos(x) = \frac{\pi}{2}$$

由于正弦在 $[0, \pi]$ 上非负，[勾股恒等式](../pythagorean-identity/)给出角 $\arccos(x)$ 的正弦和正切的代数表达式：

$$
\begin{align}
\sin(\arccos(x)) &= \sqrt{1 - x^2} \\[6pt]
\tan(\arccos(x)) &= \frac{\sqrt{1 - x^2}}{x}
\end{align}
$$

第一个恒等式对每个 $x \in [-1, 1]$ 成立，而第二个对满足 $x \neq 0$ 的 $x \in [-1, 1]$ 成立，因为 $\tan(\arccos(0)) = \tan\left(\frac{\pi}{2}\right)$ 没有定义。

反余弦还可以用[复对数](../complex-logarithm/)表示。对 $x \in [-1, 1]$，令 $w = \arccos(x)$ 和 $u = e^{iw}$。[欧拉公式](../eulers-formula/)把 $\cos(w) = x$ 变为二次方程 $u^2 - 2xu + 1 = 0$。由于 $\sin(w) \geq 0$，相应的根是 $u = x + i\sqrt{1 - x^2} = e^{i\arccos(x)}$。取复对数的主值，得到：

$$\arccos(x) = -i\mathrm{Log}\left(x + i\sqrt{1 - x^2}\right)$$

这里 $\mathrm{Log}$ 是复对数的主值，定义为 $\mathrm{Log}(z) = \ln|z| + i\mathrm{Arg}(z)$，其中 $\mathrm{Arg}(z) \in (-\pi, \pi]$。对 $w \in [0, \pi]$，$e^{iw}$ 的辐角主值是 $w$，包括 $w = \pi$ 的情形。因此公式对 $x = -1$ 也成立，此时 $\mathrm{Log}(-1) = i\pi$。

## 反余弦函数的极限、导数与积分

反余弦在 $[-1, 1]$ 上[连续](../continuous-functions/)，因为它是余弦的连续、严格单调的限制的反函数。为了确定它在原点附近的行为，令 $y = \frac{\pi}{2} - \arccos(x)$。那么当 $x \to 0$ 时 $y \to 0$，并且 $x = \sin(y)$。因此下面的商等于 $-y/\sin(y)$，由标准极限 $\sin(y)/y \to 1$ 得到：

$$\lim_{x \to 0} \frac{\arccos(x) - \frac{\pi}{2}}{x} = -1$$

于是直线 $y = \frac{\pi}{2} - x$ 是反余弦的图像在原点附近的一阶近似。

这个函数在开区间 $(-1, 1)$ 上可导。它的[导数](../derivatives/)由[反函数的求导法则](../derivative-of-the-inverse-function/)得到。对 $x \in (-1, 1)$，令 $y = \arccos(x)$。那么 $y \in (0, \pi)$ 且 $\cos(y) = x$。把这个恒等式对 $x$ 求导，得到 $-\sin(y)y' = 1$。由于正弦在这个区间上为正，$\sin(y) = \sqrt{1 - \cos^2(y)} = \sqrt{1 - x^2}$，导数为：

$$\frac{d}{dx}\arccos(x) = -\frac{1}{\sqrt{1 - x^2}}$$

这个导数是代数函数，尽管反余弦不是。它是反正弦的导数的相反数，这正是恒等式 $\arcsin(x) + \arccos(x) = \frac{\pi}{2}$ 所要求的。当 $x$ 从定义域内部趋近任何一个端点时，导数趋于 $-\infty$：

$$\lim_{x \to 1^-} -\frac{1}{\sqrt{1 - x^2}} = -\infty \qquad \lim_{x \to -1^+} -\frac{1}{\sqrt{1 - x^2}} = -\infty$$

因此，图像在点 $(1, 0)$ 和 $(-1, \pi)$ 处有单侧的竖直切线。余弦在 $x = 0$ 和 $x = \pi$ 处有水平切线，关于直线 $y = x$ 的反射把它们变成竖直切线。

![图 2](/assets/trigonometry/svg/arcsine-and-arccosine-4.zh.svg)

[不定积分](../indefinite-integrals/)用[分部积分法](../integration-by-parts/)计算，对反余弦求导，对常数因子 $1$ 积分：

$$\int \arccos(x) \ dx = x\arccos(x) + \int \frac{x}{\sqrt{1 - x^2}} \ dx$$

由于分子等于 $1 - x^2$ 的导数的 $-\dfrac{1}{2}$ 倍，换元 $u = 1 - x^2$ 把剩下的积分化为幂函数的积分。原函数为：

$$\int \arccos(x) \ dx = x\arccos(x) - \sqrt{1 - x^2} + c$$

反余弦不是奇函数，但它的点对称性决定了整个定义域上的[定积分](../definite-integrals/)。$x$ 和 $-x$ 处的值之和为 $\pi$，平均值为 $\dfrac{\pi}{2}$，所以面积等于底为 $2$、高为 $\dfrac{\pi}{2}$ 的矩形的面积。在定义域的正半部分上，计算原函数的值得到 $1$：

$$\int_{-1}^{1} \arccos(x) \ dx = \pi \qquad \int_0^1 \arccos(x) \ dx = 1$$

## 单调性与凹凸性

导数 $-\dfrac{1}{\sqrt{1 - x^2}}$ 在 $(-1, 1)$ 的每一点都为负，所以反余弦在整个定义域上严格递减，没有驻点。它的最大值是 $\pi$，最小值是 $0$。二者都在端点处取到，函数在端点处连续但不可导。

[凹凸性](../convexity-and-concavity-of-functions/)由二阶导数决定：

$$\frac{d^2}{dx^2}\arccos(x) = -\frac{x}{\left(1 - x^2\right)^{3/2}}$$

分母在 $(-1, 1)$ 上为正，所以二阶导数与 $-x$ 同号。图像在 $(-1, 0)$ 上是凸的，在 $(0, 1)$ 上是凹的。点 $\left(0, \frac{\pi}{2}\right)$ 是[拐点](../maximum-minimum-and-inflection-points/)，因为二阶导数在 $x = 0$ 处为零并在那里变号。图像在该点的切线是直线 $y = \frac{\pi}{2} - x$。

## 麦克劳林级数

反余弦的麦克劳林级数由它的导数得到。当 $|t| < 1$ 时，导数有二项展开式：

$$-\frac{1}{\sqrt{1 - t^2}} = -\sum_{n=0}^{\infty} \frac{1}{4^n}\binom{2n}{n}t^{2n}$$

这里 $\binom{2n}{n}$ 是 $n$ 阶中心[二项式系数](../binomial-coefficient/)。

[幂级数](../power-series/)在其收敛区间内可以逐项积分。从 $0$ 到 $x$ 积分，并利用 $\arccos(0) = \dfrac{\pi}{2}$，得到下面的幂级数，它的收敛半径为 $1$：

$$\arccos(x) = \frac{\pi}{2} - \sum_{n=0}^{\infty} \frac{1}{4^n}\binom{2n}{n}\frac{x^{2n+1}}{2n+1} = \frac{\pi}{2} - x - \frac{x^3}{6} - \frac{3x^5}{40} - \frac{5x^7}{112} - \cdots$$

除常数项外只出现奇次幂，因为 $\arccos(x) - \dfrac{\pi}{2}$ 是奇函数。常数项之后的每个系数都为负，这与函数严格递减相符。保留前两项，就得到小 $x$ 时的近似 $\arccos(x) \approx \dfrac{\pi}{2} - x$。

在 $x = 1$ 处，通项渐近于 $\dfrac{1}{2\sqrt{\pi}n^{3/2}}$，所以级数绝对收敛。阿贝尔定理使我们可以在幂级数恒等式中取 $x \to 1^-$ 的极限。由于 $\arccos(1) = 0$，从常数项中减去的那个正项级数的和为 $\dfrac{\pi}{2}$：

$$\sum_{n=0}^{\infty} \frac{1}{4^n}\binom{2n}{n}\frac{1}{2n+1} = \frac{\pi}{2}$$

这个渐近估计还表明级数在 $x = 1$ 处收敛很慢。当 $|x|$ 明显小于 $1$ 时，$x$ 的幂衰减很快，取几项就能得到 $\arccos(x)$ 的精确值。
