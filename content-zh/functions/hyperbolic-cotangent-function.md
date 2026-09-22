---
title: 双曲余切函数
title_en: Hyperbolic Cotangent Function
source: https://algebrica.org/hyperbolic-cotangent-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - exponential-function
  - hyperbolic-cotangent
  - hyperbolic-functions
translation:
  status: current
  source_hash: 1a7a047e4857f52439d860b3b6d50db9d8d38680a10678036f7293a2c3c42839
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 引言

本条目把双曲余切作为实[函数](../functions/)处理。它由等轴[双曲线](../hyperbola/)上一点的坐标给出的几何构造，见[双曲正切与双曲余切](../hyperbolic-tangent-and-cotangent/)。

对实数 $x \neq 0$，双曲余切定义为[双曲余弦](../hyperbolic-cosine-function/)与[双曲正弦](../hyperbolic-sine-function/)之比：

$$\coth(x) = \frac{\cosh(x)}{\sinh(x)} = \frac{e^x + e^{-x}}{e^x - e^{-x}}$$

双曲正弦仅在原点为零，因此 $\coth(x)$ 对每个 $x \neq 0$ 都有定义。函数的值域为 $(-\infty, -1) \cup (1, +\infty)$。它的图像关于原点对称，由竖直渐近线 $x=0$ 分成两条分支。两条分支都严格递减：$(-\infty,0)$ 上的分支以 $y=-1$ 为水平渐近线，$(0,+\infty)$ 上的分支以 $y=1$ 为水平渐近线。

![图 1](/assets/functions/svg/hyperbolic-cotangent-function-1.zh.svg)

分子分母同乘 $e^x$ 并利用 $e^{2x}+1=(e^{2x}-1)+2$，得双曲余切的另一种形式：

$$\coth(x) = \frac{e^{2x} + 1}{e^{2x} - 1} = 1 + \frac{2}{e^{2x} - 1}$$

项 $2/(e^{2x}-1)$ 在每条半直线上严格递减，在 $x\gt 0$ 时为正，在 $x\lt 0$ 时小于 $-2$。因此 $x$ 为正时 $\coth(x)\gt 1$，$x$ 为负时 $\coth(x)\lt -1$，且 $\coth$ 在每条半直线上严格递减。

## 性质

+ [定义域](../determining-the-domain-of-a-function/)：$x \in \mathbb{R}$，且 $x \neq 0$
+ 值域：$y \lt -1$ 或 $y \gt 1$
+ 周期性：不是周期函数
+ 奇偶性：[奇函数](../even-and-odd-functions/)，且 $\coth(-x) = -\coth(x)$
+ 单调性：在 $(-\infty, 0)$ 与 $(0, +\infty)$ 上严格[递减](../increasing-and-decreasing-functions/)
+ 符号：在 $(-\infty, 0)$ 上为负，在 $(0, +\infty)$ 上为正
+ 零点：无
+ [最大值点与最小值点](../maximum-minimum-and-inflection-points/)：无；负分支的上确界为 $-1$，正分支的下确界为 $1$，都取不到。

把[双曲恒等式](../hyperbolic-identities/) $\cosh^2(x)-\sinh^2(x)=1$ 除以 $\sinh^2(x)$，得：

$$\coth^2(x) - 1 = \frac{1}{\sinh^2(x)}$$

右边为正，因此 $|\coth(x)|\gt 1$。对 $x\gt 0$（此时 $\sinh(x)\gt 0$），同一恒等式可用双曲余切表示双曲正弦与双曲余弦：

$$
\begin{align}
\sinh(x) &= \frac{1}{\sqrt{\coth^2(x) - 1}} \\[6pt]
\cosh(x) &= \frac{\coth(x)}{\sqrt{\coth^2(x) - 1}}
\end{align}
$$

对 $x\lt 0$，两个公式右边都要添上负号。

[双曲正切](../hyperbolic-tangent-function/)满足的不等式 $|\tanh(x)|\leq |x|$ 在 $x\neq 0$ 时是严格的。取倒数得：

$$|\coth(x)| \gt \frac{1}{|x|}$$

## 双曲余切函数的极限、导数与积分

原点附近的行为由[极限](../remarkable-limits/) $\lim_{x\to 0}\sinh(x)/x=1$ 与如下因式分解决定：

$$x\coth(x) = \frac{x}{\sinh(x)}\cdot\cosh(x)$$

当 $x$ 趋于零时，两个因子都趋于 $1$，因此它们的积的极限为 $1$：

$$\lim_{x \to 0} x\coth(x) = 1$$

因此当 $x\to 0$ 时 $\coth(x)\sim 1/x$；类似地，$\cot(x)\sim 1/x$。在原点两侧，双曲正弦带着 $x$ 的符号趋于零，而双曲余弦趋于 $1$：

$$
\begin{align}
\lim_{x \to 0^+} \coth(x) &= +\infty \\[6pt]
\lim_{x \to 0^-} \coth(x) &= -\infty
\end{align}
$$

直线 $x=0$ 是竖直[渐近线](../asymptotes/)。当 $x\to +\infty$ 时 $e^{2x}\to +\infty$；当 $x\to -\infty$ 时 $e^{2x}\to 0$。把这些极限代入 $\coth(x)=1+2/(e^{2x}-1)$，得：

$$
\begin{align}
\lim_{x \to +\infty} \coth(x) &= 1 \\[6pt]
\lim_{x \to -\infty} \coth(x) &= -1
\end{align}
$$

直线 $y=1$ 与 $y=-1$ 是水平渐近线。当 $x\to +\infty$ 时，差 $\coth(x)-1$ 渐近于 $2e^{-2x}$：

$$\lim_{x \to +\infty} e^{2x}\left(\coth(x) - 1\right) = 2$$

- - -

函数 $\sinh(x)$ 与 $\cosh(x)$ 可导，且 $\sinh(x)$ 仅在原点为零，因此 $\coth(x)$ 在其定义域上[连续](../continuous-functions/)且可导。由商的求导法则与恒等式 $\cosh^2(x)-\sinh^2(x)=1$，有：

$$\frac{d}{dx}\coth(x) = \frac{\sinh^2(x) - \cosh^2(x)}{\sinh^2(x)} = -\frac{1}{\sinh^2(x)}$$

由恒等式 $1/\sinh^2(x)=\coth^2(x)-1$，得[导数](../derivatives/)的等价形式：

$$\frac{d}{dx}\coth(x) = 1 - \coth^2(x)$$

再求导一次并利用 $\coth'(x)=1-\coth^2(x)$，得：

$$\frac{d^2}{dx^2}\coth(x) = -2\coth(x)\left(1 - \coth^2(x)\right) = \frac{2\cosh(x)}{\sinh^3(x)}$$

一阶导数是 $\coth(x)$ 的多项式。若 $\coth^{(n)}(x)=P(\coth(x))$（$P$ 为多项式），则由链式法则得 $\coth^{(n+1)}(x)=P'(\coth(x))(1-\coth^2(x))$。由归纳法，$\coth$ 的每个[高阶导数](../higher-order-derivatives/)都是 $\coth(x)$ 的多项式。

> 双曲正切与双曲余切的每条分支都解同一个[微分方程](../differential-equations/) $y'=1-y^2$。双曲正切的取值在 $(-1,1)$ 内，双曲余切的取值在 $[-1,1]$ 之外。圆余切则解 $y'=-1-y^2$。

- - -

在定义域的两个区间中的每一个上，$\dfrac{d}{dx}\ln|\sinh(x)|=\coth(x)$，因此[不定积分](../indefinite-integrals/)为：

$$\int \coth(x) \ dx = \ln|\sinh(x)| + c$$

与双曲正切不同，双曲余切在含原点的区间上的反常积分不收敛。它在零附近的表现如同 $1/x$，因此对 $a\gt 0$，[定积分](../definite-integrals/)发散：

$$\int_{0}^{a} \coth(x) \ dx = +\infty$$

由 $\coth'(x)=-1/\sinh^2(x)$，还有：

$$\int \frac{1}{\sinh^2(x)} \ dx = -\coth(x) + c$$

> 对 $(1,+\infty)$ 上涉及 $x^2-1$ 的幂的积分，作[换元](../integration-by-substitution/) $x=\coth(t)$（$t\gt 0$），得 $x^2-1=1/\sinh^2(t)$ 与 $dx=-dt/\sinh^2(t)$。

## 单调性与凸性

导数 $-1/\sinh^2(x)$ 在定义域上为负，因此双曲余切在每条分支上严格递减，且没有驻点。由于定义域不是一个区间，这并不意味着函数在整个定义域上递减：事实上 $\coth(-1)\lt 0\lt \coth(1)$。导数在原点附近无界，在 $\pm\infty$ 处趋于 $0$。由于可导的 Lipschitz 函数导数有界，双曲余切在其定义域上不是 Lipschitz 函数。

二阶导数 $2\cosh(x)/\sinh^3(x)$ 与 $x$ 同号，因此图像在 $(-\infty,0)$ 上严格凹，在 $(0,+\infty)$ 上严格[凸](../convexity-and-concavity-of-functions/)。原点不在定义域内，因此从凹到凸的变化不产生[拐点](../maximum-minimum-and-inflection-points/)。

## 逆函数

每条分支都严格递减，且两条分支的值域 $(-\infty,-1)$ 与 $(1,+\infty)$ 不相交，因此双曲余切在整个定义域上是单射。圆[余切](../cotangent-function/)在其定义域上不是单射，因为周期 $\pi$ 使相同的值在不同分支上重复出现。因此双曲余切是从 $\mathbb{R}\setminus\{0\}$ 到 $(-\infty,-1)\cup(1,+\infty)$ 的[双射](../injective-surjective-and-bijective-functions/)，其[逆函数](../inverse-function/)记作：

$$\mathrm{arcoth} : (-\infty, -1) \cup (1, +\infty) \to \mathbb{R}\setminus\{0\}$$

令 $t=e^{2y}$，方程 $x=\coth(y)$ 变为关于 $t$ 的线性方程：

$$x = \frac{t + 1}{t - 1}$$

去分母后得 $t(x-1)=1+x$。由于在定义域上 $|x|\gt 1$，可以解出 $t$：

$$t = \frac{x + 1}{x - 1}$$

对 $|x|\gt 1$，分子分母同号，因此右边为正，可以取对数。两边取自然对数并除以 $2$，得：

$$\mathrm{arcoth}(x) = \frac{1}{2}\ln\left(\frac{x + 1}{x - 1}\right)$$

对 $|x|\gt 1$，设 $y=\mathrm{arcoth}(x)$。由[逆函数的导数](../derivative-of-the-inverse-function/)得 $\mathrm{arcoth}'(x)=1/\coth'(y)$。由于 $1-\coth^2(y)=1-x^2$，得到：

$$\frac{d}{dx}\mathrm{arcoth}(x) = \frac{1}{1 - x^2}$$

由对数公式，当 $x\to 1^+$ 时 $\mathrm{arcoth}(x)\to +\infty$，当 $x\to -1^-$ 时 $\mathrm{arcoth}(x)\to -\infty$。因此直线 $x=1$ 与 $x=-1$ 是 $\mathrm{arcoth}$ 的竖直渐近线，它们是 $\coth$ 的水平渐近线关于 $y=x$ 的反射。当 $x\to\pm\infty$ 时 $\mathrm{arcoth}(x)\to 0$，因此直线 $y=0$ 是水平渐近线，即竖直渐近线 $x=0$ 的反射。

$\mathrm{arcoth}$ 与 $\mathrm{artanh}$ 的导数都是 $1/(1-x^2)$，定义域分别为 $|x|\gt 1$ 与 $|x|\lt 1$。在由 $\pm 1$ 决定的三个区间中的每一个上，$\dfrac{1}{1-x^2}$ 的原函数为：

$$\int \frac{1}{1 - x^2} \ dx = \frac{1}{2}\ln\left|\frac{1 + x}{1 - x}\right| + c$$

## 洛朗级数

双曲余切在原点有极点，因此没有麦克劳林级数。乘积 $x\coth(x)$ 可以延拓为在原点解析的偶函数，并在原点取值为 $1$。把它的麦克劳林级数除以 $x$，得到在原点的去心邻域内有效的展开：

$$\coth(x) = \frac{1}{x} + \frac{x}{3} - \frac{x^3}{45} + \frac{2x^5}{945} - \cdots$$

伯努利数 $B_n$ 由 $t/(e^t-1)=\sum_{n=0}^{\infty}B_nt^n/n!$ 定义。用这些数表示的 $\coth$ 的洛朗展开为：

$$\coth(x) = \sum_{n=0}^{\infty} \frac{2^{2n}B_{2n}}{(2n)!} \ x^{2n-1}$$

对复延拓 $\coth(z)$，原点以外的奇点是 $\sinh(z)$ 的零点 $z=ik\pi$（$k\in\mathbb{Z}\setminus\{0\}$）。离原点最近的是 $\pm i\pi$，因此上述实展开式适用于：

$$0 \lt |x| \lt \pi$$

由关系式 $\cosh^2(x)+\sinh^2(x)=\cosh(2x)$ 与 $2\sinh(x)\cosh(x)=\sinh(2x)$ 可得恒等式 $\tanh(x)+\coth(x)=2\coth(2x)$。把 $\coth$ 的洛朗级数代入 $\tanh(x)=2\coth(2x)-\coth(x)$，$x^{2n-1}$ 的系数乘以 $2^{2n}-1$，从而得到[双曲正切](../hyperbolic-tangent-function/)的[泰勒级数](../taylor-series/)：

$$\tanh(x) = \sum_{n=1}^{\infty} \frac{2^{2n}\left(2^{2n} - 1\right)B_{2n}}{(2n)!} \ x^{2n-1}$$

$n=0$ 的项相互抵消，因此原点处的极点消失。由于 $\tanh(z)=\sinh(z)/\cosh(z)$，且 $\cosh(z)$ 最靠近原点的零点是 $\pm i\pi/2$，收敛半径为 $\pi/2$。由恒等式 $\sinh(ix)=i\sin(x)$ 与 $\cosh(ix)=\cos(x)$ 得 $\coth(ix)=-i\cot(x)$。在该恒等式中把 $x$ 换成 $ix$ 并利用奇函数性质，得 $\cot(ix)=-i\coth(x)$。
