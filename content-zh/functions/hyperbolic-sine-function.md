---
title: 双曲正弦函数
title_en: Hyperbolic Sine Function
source: https://algebrica.org/hyperbolic-sine-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - exponential-function
  - hyperbolic-functions
  - hyperbolic-sine
translation:
  status: current
  source_hash: 5b46976aed04ac66eb9bfbd760afbf6b80ec4572c2ea09d334910659b565ec91
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 引言

双曲正弦的几何构造基于等轴[双曲线](../hyperbola/)扇形的面积，见[双曲正弦与双曲余弦](../hyperbolic-sine-and-cosine/)。对实数 $x$，双曲正弦是由[指数](../exponential-function/)公式定义的[函数](../functions/)：

$$\sinh(x) = \frac{e^x - e^{-x}}{2}$$

函数 $f(x) = \sinh(x)$ 是 $e^x$ 与 $e^{-x}$ 之差的一半。它对每个实数都有定义，值域为 $\mathbb{R}$。它的图像关于原点对称，且在点 $(0, 0)$ 处有切线 $y = x$。当 $x \to +\infty$ 时函数趋于 $+\infty$，当 $x \to -\infty$ 时趋于 $-\infty$，而[圆正弦](../sine-function/)是振荡的。对很大的正 $x$，项 $e^{-x}$ 接近零，$\sinh(x)$ 接近 $e^x/2$。由奇函数性质，对很大的负 $x$，$\sinh(x)$ 接近 $-e^{-x}/2$。

![图 1](/assets/functions/svg/hyperbolic-sine-function-1.zh.svg)

双曲正弦给出悬链线 $y = \cosh(x)$ 的弧长——均匀链条在自身重量下沿这条曲线悬挂。对 $a \geq 0$，从顶点到横坐标为 $a$ 的点的[弧长](../arc-length-of-a-curve/)为 $\sinh(a)$。

## 性质

该函数具有以下性质。

+ [定义域](../determining-the-domain-of-a-function/)：$x \in \mathbb{R}$
+ 值域：$y \in \mathbb{R}$
+ 周期性：不是周期函数
+ 奇偶性：[奇函数](../even-and-odd-functions/)，且 $\sinh(-x) = -\sinh(x)$
+ 单调性：在 $\mathbb{R}$ 上严格[递增](../increasing-and-decreasing-functions/)
+ 符号：在 $(-\infty, 0)$ 上为负，在 $x = 0$ 处为零，在 $(0, +\infty)$ 上为正
+ 零点：$x = 0$
+ [最大值点与最小值点](../maximum-minimum-and-inflection-points/)：没有，且函数上下都无界

双曲正弦与[双曲余弦](../hyperbolic-cosine-function/)满足基本双曲恒等式：

$$\cosh^2(x) - \sinh^2(x) = 1$$

由于 $\cosh(x)$ 对每个实数 $x$ 都为正，从[双曲恒等式](../hyperbolic-identities/)中解出 $\cosh(x)$ 得：

$$\cosh(x) = \sqrt{1 + \sinh^2(x)}$$

每个实数值都恰有一个原像，因此双曲正弦是 $\mathbb{R}$ 到 $\mathbb{R}$ 的[双射](../injective-surjective-and-bijective-functions/)。

## 双曲正弦函数的极限、导数与积分

指数函数的[重要极限](../remarkable-limits/)决定了函数在原点附近的行为。相关的商为：

$$\frac{\sinh(x)}{x} = \frac{1}{2}\left(\frac{e^x - 1}{x} + \frac{e^{-x} - 1}{-x}\right)$$

当 $x$ 趋于零时，括号内两个商都趋于 $1$。它们的半和趋于 1：

$$\lim_{x \to 0} \frac{\sinh(x)}{x} = 1$$

在原点附近，$\sinh(x)$ 与 $\sin(x)$ 都接近 $x$。无穷远处的极限以及它与 $e^x/2$ 在 $+\infty$ 处的比较为：

$$
\begin{align}
\lim_{x \to +\infty} \sinh(x) &= +\infty \\[6pt]
\lim_{x \to -\infty} \sinh(x) &= -\infty \\[6pt]
\lim_{x \to +\infty} \left(\sinh(x) - \frac{e^x}{2}\right) &= 0
\end{align}
$$

等式 $\sinh(x) - e^x/2 = -e^{-x}/2$ 表明曲线在 $+\infty$ 处从下方逼近 $e^x/2$。在 $-\infty$ 处，由等式 $\sinh(x) + e^{-x}/2 = e^x/2 \to 0$ 可知曲线从上方逼近 $-e^{-x}/2$。由于函数在 $\mathbb{R}$ 上连续，图像没有竖直[渐近线](../asymptotes/)。由于当 $x \to \pm\infty$ 时 $\dfrac{\sinh(x)}{x} \to +\infty$，它也没有水平或斜渐近线。

- - -

函数 $\sinh(x)$ 在 $\mathbb{R}$ 上[连续](../continuous-functions/)且可导。对指数表达式逐项求导，得它的[导数](../derivatives/)：

$$\frac{d}{dx}\sinh(x) = \frac{e^x + e^{-x}}{2} = \cosh(x)$$

再次求导回到原函数，因此导数以 2 为周期交替：

$$\frac{d^2}{dx^2}\sinh(x) = \sinh(x)$$

$n$ 的奇偶性决定[$n$ 阶导数](../higher-order-derivatives/)：

$$
\frac{d^n}{dx^n}\sinh(x) =
\begin{cases}
\sinh(x) & n = 2k \\[6pt]
\cosh(x) & n = 2k + 1
\end{cases}
$$

> 双曲正弦是[微分方程](../differential-equations/) $y'' = y$ 满足 $y(0) = 0$ 与 $y'(0) = 1$ 的唯一解。圆正弦在同样初始条件下解 $y'' = -y$。

- - -

双曲正弦的[不定积分](../indefinite-integrals/)为：

$$\int \sinh(x) \ dx = \cosh(x) + c$$

由于函数是奇函数，它在关于原点对称的区间上的[定积分](../definite-integrals/)为零：

$$\int_{-a}^{a} \sinh(x) \ dx = 0$$

对悬链线 $y = \cosh(x)$，导数满足 $y'(x) = \sinh(x)$，基本双曲恒等式给出 $\sqrt{1 + [y'(x)]^2} = \cosh(x)$。因此弧长公式给出 $\int_0^a \cosh(x) \ dx = \sinh(a)$（$a \geq 0$）。

对含 $\sqrt{1 + x^2}$ 的积分，作[换元](../integration-by-substitution/) $x = \sinh(t)$，得 $\sqrt{1 + x^2} = \cosh(t)$ 与 $dx = \cosh(t) \ dt$，根式随之消失。对 $\sqrt{1 - x^2}$ 的[三角换元](../trigonometric-substitution-for-integrals/)是 $x = \sin(t)$（$-\pi/2 \leq t \leq \pi/2$）。

## 单调性与凸性

导数 $\cosh(x)$ 在每一点都至少为 $1$，因此双曲正弦在 $\mathbb{R}$ 上严格递增，且没有驻点。等式仅在 $x = 0$ 处成立，该处切线是直线 $y = x$。因此最小斜率为 $1$。

由于 $\sinh''(x) = \sinh(x)$ 在 $x < 0$ 时为负、在 $x > 0$ 时为正，图像在 $(-\infty, 0)$ 上严格[凹](../convexity-and-concavity-of-functions/)，在 $(0, +\infty)$ 上严格凸。原点是[拐点](../maximum-minimum-and-inflection-points/)，该处二阶导数为零且变号。

## 逆函数

双曲正弦连续且严格递增，值域为 $\mathbb{R}$。它是 $\mathbb{R}$ 到 $\mathbb{R}$ 的双射，其[逆函数](../inverse-function/)记作：

$$\mathrm{arsinh} : \mathbb{R} \to \mathbb{R}$$

令 $t = e^y$，方程 $x = \sinh(y)$ 变为 $2x = t - t^{-1}$，它等价于[二次方程](../quadratic-equations/)：

$$t^2 - 2xt - 1 = 0$$

它的根是 $t = x \pm \sqrt{x^2 + 1}$。由于 $\sqrt{x^2 + 1} > |x|$，只有带正号的根满足 $t = e^y$，因为 $e^y$ 为正。取[自然对数](../logarithms/)得：

$$\mathrm{arsinh}(x) = \ln\left(x + \sqrt{x^2 + 1}\right)$$

对每个实数 $x$，由 $\cosh$ 的正性与基本双曲恒等式得 $\cosh(\mathrm{arsinh}(x)) = \sqrt{1 + x^2}$，因此[逆函数的导数](../derivative-of-the-inverse-function/)为：

$$\frac{d}{dx}\mathrm{arsinh}(x) = \frac{1}{\sqrt{1 + x^2}}$$

在 $\mathbb{R}$ 上，$\dfrac{1}{\sqrt{1 + x^2}}$ 的原函数为：

$$\int \frac{1}{\sqrt{1 + x^2}} \ dx = \ln\left(x + \sqrt{x^2 + 1}\right) + c$$

## 麦克劳林级数

双曲正弦的麦克劳林级数由指数函数的级数得到。从 $e^x$ 的展开式中减去 $e^{-x}$ 的展开式，偶次幂相消，奇次幂加倍。除以 $2$，得到一个对每个[实数](../real-numbers/)都收敛的[幂级数](../power-series/)：

$$\sinh(x) = \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \frac{x^7}{7!} + \cdots$$

在原点附近，第一项给出线性逼近 $y = x$。

对[复数](../complex-numbers/) $x$，把 $x$ 换成 $ix$ 会使每个 $2n + 1$ 次项乘以 $i^{2n+1} = i(-1)^n$，因此 $\sinh(ix) = i\sin(x)$。把该恒等式应用于 $ix$ 并利用奇函数性质，得 $\sin(ix) = i\sinh(x)$。
