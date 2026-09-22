---
title: 双曲正切函数
title_en: Hyperbolic Tangent Function
source: https://algebrica.org/hyperbolic-tangent-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - exponential-function
  - hyperbolic-functions
  - hyperbolic-tangent
translation:
  status: current
  source_hash: 6be9de4fa5e785523c3c25de86fccd132f0ea70b57bb7cdeb85c1e403f04a58b
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 引言

本条目把双曲正切作为实[函数](../functions/)处理。它由等轴[双曲线](../hyperbola/)上一点的坐标给出的几何构造，见[双曲正切与双曲余切](../hyperbolic-tangent-and-cotangent/)。

对实数 $x$，双曲正切定义为[双曲正弦](../hyperbolic-sine-function/)与[双曲余弦](../hyperbolic-cosine-function/)之比：

$$\tanh(x) = \frac{\sinh(x)}{\cosh(x)} = \frac{e^x - e^{-x}}{e^x + e^{-x}}$$

由于对每个 $x \in \mathbb{R}$ 都有 $\cosh(x) \geq 1$，分母恒为正，因此 $\tanh(x)$ 对一切 $x \in \mathbb{R}$ 都有定义。函数的值域为 $(-1, 1)$，图像关于原点对称，在 $(0, 0)$ 处的切线为 $y = x$，且在水平渐近线 $y = -1$ 与 $y = 1$ 之间严格递增。

![图 1](/assets/functions/svg/hyperbolic-tangent-function-1.zh.svg)

分子分母同乘 $e^x$ 并利用 $e^{2x}-1=(e^{2x}+1)-2$，得双曲正切的另一种形式：

$$\tanh(x) = \frac{e^{2x} - 1}{e^{2x} + 1} = 1 - \frac{2}{e^{2x} + 1}$$

项 $2/(e^{2x}+1)$ 为正且在 $\mathbb{R}$ 上严格递减。因此对每个实数 $x$ 都有 $\tanh(x)\lt 1$，且 $\tanh$ 严格递增。

## 性质

该函数具有以下性质。

+ [定义域](../determining-the-domain-of-a-function/)：$x \in \mathbb{R}$
+ 值域：$-1 \lt y \lt 1$
+ 周期性：不是周期函数
+ 奇偶性：[奇函数](../even-and-odd-functions/)，且 $\tanh(-x) = -\tanh(x)$
+ 单调性：在 $\mathbb{R}$ 上严格[递增](../increasing-and-decreasing-functions/)
+ 符号：在 $(-\infty, 0)$ 上为负，在 $x = 0$ 处为零，在 $(0, +\infty)$ 上为正
+ 零点：$x = 0$
+ [最大值点与最小值点](../maximum-minimum-and-inflection-points/)：没有，且界 $-1$ 与 $1$ 都取不到

把[双曲恒等式](../hyperbolic-identities/) $\cosh^2(x)-\sinh^2(x)=1$ 除以 $\cosh^2(x)$，得：

$$1 - \tanh^2(x) = \frac{1}{\cosh^2(x)}$$

左边为正，因此 $|\tanh(x)|\lt 1$。由于 $\cosh(x)\gt 0$，同一恒等式可用双曲正切表示双曲余弦与双曲正弦：

$$
\begin{align}
\cosh(x) &= \frac{1}{\sqrt{1 - \tanh^2(x)}} \\[6pt]
\sinh(x) &= \frac{\tanh(x)}{\sqrt{1 - \tanh^2(x)}}
\end{align}
$$

## 双曲正切函数的极限、导数与积分

双曲正弦的[重要极限](../remarkable-limits/)给出原点附近的行为，因为该商可以分解为：

$$\frac{\tanh(x)}{x} = \frac{\sinh(x)}{x}\cdot\frac{1}{\cosh(x)}$$

当 $x$ 趋于零时，第一个因子趋于 $1$，第二个也趋于 $1$，因此它们的积的极限为 $1$：

$$\lim_{x \to 0} \frac{\tanh(x)}{x} = 1$$

上述极限表明当 $x\to 0$ 时 $\tanh(x)\sim x$；类似地，$\tan(x)\sim x$。当 $x\to +\infty$ 时 $e^{2x}\to +\infty$，而当 $x\to -\infty$ 时 $e^{2x}\to 0$。把这些极限代入 $\tanh(x)=1-2/(e^{2x}+1)$，得：

$$
\begin{align}
\lim_{x \to +\infty} \tanh(x) &= 1 \\[6pt]
\lim_{x \to -\infty} \tanh(x) &= -1
\end{align}
$$

直线 $y=1$ 与 $y=-1$ 是水平[渐近线](../asymptotes/)，而由于函数在 $\mathbb{R}$ 上连续，图像没有竖直渐近线。当 $x\to +\infty$ 时，差 $1-\tanh(x)$ 渐近于 $2e^{-2x}$：

$$\lim_{x \to +\infty} e^{2x}\left(1 - \tanh(x)\right) = 2$$

- - -

函数 $\sinh(x)$ 与 $\cosh(x)$ 可导，且 $\cosh(x)$ 永不为零，因此 $\tanh(x)$ 在 $\mathbb{R}$ 上[连续](../continuous-functions/)且可导。由商的求导法则与恒等式 $\cosh^2(x)-\sinh^2(x)=1$，有：

$$\frac{d}{dx}\tanh(x) = \frac{\cosh^2(x) - \sinh^2(x)}{\cosh^2(x)} = \frac{1}{\cosh^2(x)}$$

由恒等式 $1/\cosh^2(x)=1-\tanh^2(x)$，得[导数](../derivatives/)的等价形式：

$$\frac{d}{dx}\tanh(x) = 1 - \tanh^2(x)$$

再求导一次并利用 $\tanh'(x)=1-\tanh^2(x)$，得：

$$\frac{d^2}{dx^2}\tanh(x) = -2\tanh(x)\left(1 - \tanh^2(x)\right)$$

$\tanh$ 的每个[高阶导数](../higher-order-derivatives/)都是 $\tanh(x)$ 的多项式。若 $\tanh^{(n)}(x)=P(\tanh(x))$（$P$ 为多项式），则由链式法则得 $\tanh^{(n+1)}(x)=P'(\tanh(x))(1-\tanh^2(x))$，它仍是 $\tanh(x)$ 的多项式。

> 双曲正切是[微分方程](../differential-equations/) $y'=1-y^2$ 满足 $y(0)=0$ 的唯一解。圆正切在同样初始条件下解 $y'=1+y^2$。

- - -

双曲正切的[不定积分](../indefinite-integrals/)为：

$$\int \tanh(x) \ dx = \ln\left(\cosh(x)\right) + c$$

由于函数是奇函数，它在关于原点对称的区间上的[定积分](../definite-integrals/)为零：

$$\int_{-a}^{a} \tanh(x) \ dx = 0$$

由 $\tanh'(x)=1/\cosh^2(x)$，还有：

$$\int \frac{1}{\cosh^2(x)} \ dx = \tanh(x) + c$$

> 对 $(-1,1)$ 上涉及 $1-x^2$ 的幂的积分，作[换元](../integration-by-substitution/) $x=\tanh(t)$，得 $1-x^2=1/\cosh^2(t)$ 与 $dx=dt/\cosh^2(t)$。

## 单调性与凸性

导数 $1/\cosh^2(x)$ 在 $\mathbb{R}$ 上为正，因此双曲正切严格递增，且没有驻点。由于 $\cosh(x)\geq 1$ 且等式仅在 $x=0$ 处成立，有 $\tanh'(x)\leq 1$，等式仅在原点成立。该处的切线是 $y=x$。由[中值定理](../lagrange-theorem/)，$\tanh$ 因此满足：

$$|\tanh(a) - \tanh(b)| \leq |a - b|$$

二阶导数 $-2\tanh(x)/\cosh^2(x)$ 的符号与 $\tanh(x)$ 相反，因此图像在 $(-\infty,0)$ 上严格[凸](../convexity-and-concavity-of-functions/)，在 $(0,+\infty)$ 上严格凹。原点是[拐点](../maximum-minimum-and-inflection-points/)，该处二阶导数为零且变号。对 $x\gt 0$，由凹性得 $\tanh(x)\leq x$，再由奇函数性质把该界推广到整个实数轴。在前面不等式中令 $b=0$ 可得同一结论：

$$|\tanh(x)| \leq |x|$$

## 逆函数

由于双曲正切连续且严格递增，值域为 $(-1,1)$，它是从 $\mathbb{R}$ 到 $(-1,1)$ 的[双射](../injective-surjective-and-bijective-functions/)。它的[逆函数](../inverse-function/)记作：

$$\mathrm{artanh} : (-1, 1) \to \mathbb{R}$$

令 $t=e^{2y}$，方程 $x=\tanh(y)$ 变为关于 $t$ 的线性方程：

$$x = \frac{t - 1}{t + 1}$$

去分母后得 $t(x-1)=-1-x$。由于在 $(-1,1)$ 上 $x\neq 1$，可以解出 $t$：

$$t = \frac{1 + x}{1 - x}$$

对 $-1\lt x\lt 1$，右边为正，可以取对数。两边取自然对数并除以 $2$，得：

$$\mathrm{artanh}(x) = \frac{1}{2}\ln\left(\frac{1 + x}{1 - x}\right)$$

对 $|x|\lt 1$，设 $y=\mathrm{artanh}(x)$。由[逆函数的导数](../derivative-of-the-inverse-function/)得 $\mathrm{artanh}'(x)=1/\tanh'(y)$。由于 $1-\tanh^2(y)=1-x^2$，得到：

$$\frac{d}{dx}\mathrm{artanh}(x) = \frac{1}{1 - x^2}$$

由对数公式，当 $x\to 1^-$ 时 $\mathrm{artanh}(x)\to +\infty$，当 $x\to -1^+$ 时 $\mathrm{artanh}(x)\to -\infty$。导数在两个端点处都趋于 $+\infty$。因此直线 $x=1$ 与 $x=-1$ 是 $\mathrm{artanh}$ 的竖直渐近线。它们是 $\tanh$ 的水平渐近线关于 $y=x$ 的反射。在 $(-1,1)$ 上，$\dfrac{1}{1-x^2}$ 的原函数为：

$$\int \frac{1}{1 - x^2} \ dx = \frac{1}{2}\ln\left(\frac{1 + x}{1 - x}\right) + c$$

## 麦克劳林级数

麦克劳林级数由微分方程 $y'=1-y^2$（$y(0)=0$）得到。由于 $\tanh$ 是奇函数，它的偶次项系数为零。把级数代入方程，可以逐个确定其余系数：

$$\tanh(x) = x - \frac{x^3}{3} + \frac{2x^5}{15} - \frac{17x^7}{315} + \cdots$$

在原点附近，第一项给出线性逼近 $y=x$。伯努利数 $B_n$ 由 $t/(e^t-1)=\sum_{n=0}^{\infty}B_nt^n/n!$ 定义。用这些数表示，一般级数为：

$$\tanh(x) = \sum_{n=1}^{\infty} \frac{2^{2n}\left(2^{2n} - 1\right)B_{2n}}{(2n)!} \ x^{2n-1}$$

与双曲正弦、双曲余弦的级数不同，这个[幂级数](../power-series/)的收敛半径有限。[复平面](../complex-numbers/)上泰勒级数的收敛半径，等于中心到函数最近奇点的距离。对 $\tanh(z)$，最近的奇点是 $\cosh(z)$ 的零点 $z=\pm i\pi/2$，因此级数对下式收敛：

$$|x| \lt \frac{\pi}{2}$$

由于 $\sinh(ix)=i\sin(x)$ 且 $\cosh(ix)=\cos(x)$，有 $\tanh(ix)=i\tan(x)$。该恒等式解释了为什么圆正切的[泰勒级数](../taylor-series/)的系数具有相同的绝对值且都为正。在该恒等式中把 $x$ 换成 $ix$ 并利用奇函数性质，得 $\tan(ix)=i\tanh(x)$。
