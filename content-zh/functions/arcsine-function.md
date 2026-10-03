---
title: 反正弦函数
title_en: Arcsine Function
source: https://algebrica.org/arcsine-function/
license: CC BY-NC 4.0
tags:
  - arcsine
  - derivatives
  - inverse-trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 0ec7991f2b8ee91538f7975ba7b3f6812b9112dadfc6721d44ca8b4a4415ed2a
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---

## 引言

条目[反正弦与反余弦](../arcsine-and-arccosine/)把反正弦定义为与给定正弦值相对应的角。这里的反正弦是实变量的实[函数](../functions/)。

[正弦](../sine-function/)是周期函数，所以它取 $[-1, 1]$ 中每个值无穷多次，在整个 $\mathbb{R}$ 上没有反函数。限制在区间 $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ 上时，它连续且严格递增，并把这个区间映满 $[-1, 1]$。限制后的正弦是双射，它的[反函数](../inverse-function/)就是反正弦：

$$\arcsin : [-1, 1] \to \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$$

函数 $f(x) = \arcsin(x)$ 给每个 $x \in [-1, 1]$ 指定 $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ 中正弦等于 $x$ 的唯一的角，角以[弧度](../angles-and-angular-measure/)度量。它的图像是限制后的正弦分支关于直线 $y = x$ 的反射。

![图 1](/assets/functions/svg/arcsine-function-1.zh.svg)

两种复合在不同的范围内还原自变量。先取反正弦再取正弦，对每个 $x \in [-1, 1]$ 都还原自变量；而先取正弦再取反正弦，只有当 $\theta$ 落在限制区间内时才得到 $\theta$：

$$
\begin{align}
\sin(\arcsin(x)) &= x \quad \forall x \in [-1, 1] \\[6pt]
\arcsin(\sin(\theta)) &= \theta \quad \iff \quad \theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]
\end{align}
$$

> 在这个区间之外，反正弦给出 $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ 中与 $\theta$ 正弦相同的角。当 $\theta = \frac{3\pi}{4}$ 时，正弦等于 $\frac{\sqrt{2}}{2}$，所以 $\arcsin(\sin(3\pi/4)) = \frac{\pi}{4}$。

## 性质

作为限制后的正弦的反函数，反正弦具有下列性质。

+ [定义域](../determining-the-domain-of-a-function/)：$x \in [-1, 1]$
+ 值域：$-\dfrac{\pi}{2} \leq y \leq \dfrac{\pi}{2}$
+ 周期性：反正弦不是周期函数。
+ 奇偶性：[奇函数](../even-and-odd-functions/)，满足 $\arcsin(-x) = -\arcsin(x)$
+ 单调性：在整个定义域上严格[递增](../increasing-and-decreasing-functions/)
+ 零点：$x = 0$，定义域中函数为零的唯一的点
+ [最大值点和最小值点](../maximum-minimum-and-inflection-points/)：最大值 $\dfrac{\pi}{2}$ 在 $x = 1$ 处取到，最小值 $-\dfrac{\pi}{2}$ 在 $x = -1$ 处取到。

反正弦有界，它的最小值和最大值在定义域的端点处取到，而不是在内部的驻点处取到。对每个 $x \in [-1, 1]$，反正弦与[反余弦](../arccosine-function/)满足恒等式：

$$\arcsin(x) + \arccos(x) = \frac{\pi}{2}$$

由于余弦在 $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ 上非负，[勾股恒等式](../pythagorean-identity/)把角 $\arcsin(x)$ 的三角函数表示成代数形式：

$$
\begin{align}
\cos(\arcsin(x)) &= \sqrt{1 - x^2} \\[6pt]
\tan(\arcsin(x)) &= \frac{x}{\sqrt{1 - x^2}}
\end{align}
$$

第一个恒等式对每个 $x \in [-1, 1]$ 成立，而第二个对 $x \in (-1, 1)$ 成立，此时分母不为零。

反正弦还可以用复[对数](../logarithmic-function/)表示。对 $x \in [-1, 1]$，令 $w = \arcsin(x)$ 和 $u = e^{iw}$。[欧拉公式](../eulers-formula/)把 $\sin(w) = x$ 变为二次方程 $u^2 - 2ixu - 1 = 0$。由于 $\cos(w) \geq 0$，相应的根是 $u = \sqrt{1 - x^2} + ix = e^{i\arcsin(x)}$。取复对数的主值，得到：

$$\arcsin(x) = -i\ln\left(ix + \sqrt{1 - x^2}\right)$$

这里 $\ln$ 表示主值分支。

## 反正弦函数的极限、导数与积分

在原点附近，反正弦曲线和正弦曲线都以直线 $y = x$ 为一阶近似。对于反正弦，令 $y = \arcsin(x)$。那么 $x = \sin(y)$，且当 $x \to 0$ 时 $y \to 0$，所以由标准极限 $\sin(y)/y \to 1$ 得到：

$$\lim_{x \to 0} \frac{\arcsin(x)}{x} = 1$$

这个函数在 $[-1, 1]$ 上[连续](../continuous-functions/)，在开区间 $(-1, 1)$ 上可导。它的[导数](../derivatives/)由[反函数的求导法则](../derivative-of-the-inverse-function/)得到。对 $x \in (-1, 1)$，令 $y = \arcsin(x)$。那么 $y \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ 且 $\sin(y) = x$。把这个恒等式对 $x$ 求导，得到 $\cos(y)y' = 1$。由于余弦在这个区间上为正，$\cos(y) = \sqrt{1 - \sin^2(y)} = \sqrt{1 - x^2}$，导数为：

$$\frac{d}{dx}\arcsin(x) = \frac{1}{\sqrt{1 - x^2}}$$

这个导数是代数函数，尽管反正弦不是。当 $x$ 从定义域内部趋近任何一个端点时，导数趋于 $+\infty$：

$$\lim_{x \to 1^-} \frac{1}{\sqrt{1 - x^2}} = +\infty \qquad \lim_{x \to -1^+} \frac{1}{\sqrt{1 - x^2}} = +\infty$$

因此，图像以竖直切线到达点 $\left(1, \frac{\pi}{2}\right)$ 和 $\left(-1, -\frac{\pi}{2}\right)$。正弦在 $x = \pm\frac{\pi}{2}$ 处有水平切线，关于直线 $y = x$ 的反射把它们变成竖直切线。

![图 2](/assets/trigonometry/svg/arcsine-and-arccosine-3.zh.svg)

[不定积分](../indefinite-integrals/)用[分部积分法](../integration-by-parts/)计算，对反正弦求导，对常数因子 $1$ 积分：

$$\int \arcsin(x) \ dx = x\arcsin(x) - \int \frac{x}{\sqrt{1 - x^2}} \ dx$$

剩下的积分是初等的。由于分子等于 $1 - x^2$ 的导数的 $-\dfrac{1}{2}$ 倍，换元 $u = 1 - x^2$ 把它化为幂函数的积分。结果为：

$$\int \arcsin(x) \ dx = x\arcsin(x) + \sqrt{1 - x^2} + c$$

在对称区间上，[定积分](../definite-integrals/)为零，因为反正弦是奇函数。在定义域的正半部分上，由原函数得到：

$$\int_0^1 \arcsin(x) \ dx = \frac{\pi}{2} - 1$$

## 单调性与凹凸性

导数 $\dfrac{1}{\sqrt{1 - x^2}}$ 在 $(-1, 1)$ 的每一点都为正，所以反正弦在整个定义域上严格递增，没有驻点。它的最小值是 $-\dfrac{\pi}{2}$，最大值是 $\dfrac{\pi}{2}$。二者都在端点处取到，函数在端点处连续但不可导。

[凹凸性](../convexity-and-concavity-of-functions/)由二阶导数决定：

$$\frac{d^2}{dx^2}\arcsin(x) = \frac{x}{\left(1 - x^2\right)^{3/2}}$$

分母在 $(-1, 1)$ 上为正，所以二阶导数与 $x$ 同号。图像在 $(-1, 0)$ 上是凹的，在 $(0, 1)$ 上是凸的。原点是[拐点](../maximum-minimum-and-inflection-points/)，因为二阶导数在 $x = 0$ 处为零并在那里变号。它在该点的切线是直线 $y = x$。

## 麦克劳林级数

反正弦的麦克劳林级数由它的导数得到。当 $|t| < 1$ 时，导数有二项展开式：

$$\frac{1}{\sqrt{1 - t^2}} = \sum_{n=0}^{\infty} \frac{1}{4^n}\binom{2n}{n}t^{2n}$$

这里 $\binom{2n}{n}$ 是 $n$ 阶中心[二项式系数](../binomial-coefficient/)。

[幂级数](../power-series/)在其收敛区间内可以逐项积分。从 $0$ 到 $x$ 积分，并利用 $\arcsin(0) = 0$，得到收敛半径为 $1$ 的幂级数：

$$\arcsin(x) = \sum_{n=0}^{\infty} \frac{1}{4^n}\binom{2n}{n}\frac{x^{2n+1}}{2n+1} = x + \frac{x^3}{6} + \frac{3x^5}{40} + \frac{5x^7}{112} + \cdots$$

只出现奇次幂，因为反正弦是奇函数。系数全为正，这与[正弦级数](../sine-function/)符号交替的系数不同。只保留第一项，就得到小 $x$ 时的近似 $\arcsin(x) \approx x$。把级数除以 $x$ 并令 $x \to 0$，得到 $\dfrac{\arcsin(x)}{x} \to 1$。

在 $x = 1$ 处级数仍然收敛，它的和就是函数在该点的值：

$$\sum_{n=0}^{\infty} \frac{1}{4^n}\binom{2n}{n}\frac{1}{2n+1} = \frac{\pi}{2}$$

随着 $n$ 增大，通项的行为类似于 $\dfrac{1}{2\sqrt{\pi}n^{3/2}}$，所以级数在 $x = 1$ 处收敛很慢，用来计算 $\pi$ 效率不高。当 $|x|$ 明显小于 $1$ 时，$x$ 的幂衰减很快，取几项就能得到 $\arcsin(x)$ 的精确值。
