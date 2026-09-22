---
title: 双曲余弦函数
title_en: Hyperbolic Cosine Function
source: https://algebrica.org/hyperbolic-cosine-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - exponential-function
  - hyperbolic-cosine
  - hyperbolic-functions
translation:
  status: current
  source_hash: 12993a4384820cd8a552dca824e9672e047cd987658db5ef9186b514401fcfc6
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 引言

双曲余弦的几何构造基于等轴[双曲线](../hyperbola/)扇形的面积，见[双曲正弦与双曲余弦](../hyperbolic-sine-and-cosine/)。对实数 $x$，双曲余弦是由[指数](../exponential-function/)公式定义的[函数](../functions/)：

$$\cosh(x) = \frac{e^x + e^{-x}}{2}$$

函数 $f(x) = \cosh(x)$ 是 $e^x$ 与 $e^{-x}$ 之和的一半。它对每个实数都有定义，值域为 $[1, +\infty)$。它的图像关于纵轴对称，且在点 $(0, 1)$ 处有水平切线。当 $x \to +\infty$ 与 $x \to -\infty$ 时函数都趋于 $+\infty$，而[圆余弦](../cosine-function/)是振荡的。对很大的正 $x$，项 $e^{-x}$ 接近零，$\cosh(x)$ 接近 $e^x/2$。由偶函数性质，对很大的负 $x$，$\cosh(x)$ 接近 $e^{-x}/2$。

![图 1](/assets/functions/svg/hyperbolic-cosine-function-1.zh.svg)

一条均匀链条悬挂在两点之间时呈悬链线形状。平移坐标轴后，悬链线的方程为 $y = a\cosh(x/a)$（$a > 0$），其顶点是链条的最低点。参数 $a$ 等于张力的水平分量除以单位长度的重量。$a$ 越大，曲线越平坦。

## 性质

该函数具有以下性质。

+ [定义域](../determining-the-domain-of-a-function/)：$x \in \mathbb{R}$
+ 值域：$y \geq 1$
+ 周期性：不是周期函数
+ 奇偶性：[偶函数](../even-and-odd-functions/)，且 $\cosh(-x) = \cosh(x)$
+ 单调性：在 $(-\infty, 0]$ 上严格[递减](../increasing-and-decreasing-functions/)，在 $[0, +\infty)$ 上严格递增
+ 符号：在 $\mathbb{R}$ 上为正
+ 零点：无
+ [最大值点与最小值点](../maximum-minimum-and-inflection-points/)：最小值 $1$ 在 $x = 0$ 处取得，函数上方无界

双曲余弦与[双曲正弦](../hyperbolic-sine-function/)满足基本双曲恒等式：

$$\cosh^2(x) - \sinh^2(x) = 1$$

由于 $\sinh(x)$ 与 $x$ 同号，从[双曲恒等式](../hyperbolic-identities/)中解出 $\sinh(x)$ 时，$x \geq 0$ 取正号，$x < 0$ 取负号：

$$\sinh(x) = \pm\sqrt{\cosh^2(x) - 1}$$

$(1, +\infty)$ 中的每个值都恰有两个原像，因此双曲余弦在 $\mathbb{R}$ 上不是[单射](../injective-surjective-and-bijective-functions/)。

## 双曲余弦函数的极限、导数与积分

指数函数的[重要极限](../remarkable-limits/)决定了函数在原点附近的行为。相关的商为：

$$\frac{\cosh(x) - 1}{x} = \frac{1}{2}\left(\frac{e^x - 1}{x} + \frac{e^{-x} - 1}{x}\right)$$

当 $x$ 趋于零时，括号内第一个商趋于 $1$，第二个趋于 $-1$。它们的半和趋于零：

$$\lim_{x \to 0} \frac{\cosh(x) - 1}{x} = 0$$

在原点附近，$\cosh(x) - 1$ 与 $\cos(x) - 1$ 都比 $x$ 更快地趋于零。由恒等式 $\cosh(x) - 1 = 2\sinh^2(x/2)$，有：

$$\frac{\cosh(x) - 1}{x^2} = \frac{1}{2}\left(\frac{\sinh(x/2)}{x/2}\right)^2$$

由于同一指数极限还给出 $\lim_{u \to 0} \sinh(u)/u = 1$，二阶极限为：

$$\lim_{x \to 0} \frac{\cosh(x) - 1}{x^2} = \frac{1}{2}$$

无穷远处的极限以及它与 $e^x/2$ 在 $+\infty$ 处的比较为：

$$
\begin{align}
\lim_{x \to +\infty} \cosh(x) &= +\infty \\[6pt]
\lim_{x \to -\infty} \cosh(x) &= +\infty \\[6pt]
\lim_{x \to +\infty} \left(\cosh(x) - \frac{e^x}{2}\right) &= 0
\end{align}
$$

在 $-\infty$ 处，由等式 $\cosh(x) - e^{-x}/2 = e^x/2 \to 0$ 可知曲线从上方逼近 $e^{-x}/2$。由于函数在 $\mathbb{R}$ 上连续，图像没有竖直[渐近线](../asymptotes/)。由于当 $x \to \pm\infty$ 时 $\dfrac{\cosh(x)}{|x|} \to +\infty$，它也没有水平或斜渐近线。

- - -

函数 $\cosh(x)$ 在 $\mathbb{R}$ 上[连续](../continuous-functions/)且可导。对指数表达式逐项求导，得它的[导数](../derivatives/)：

$$\frac{d}{dx}\cosh(x) = \frac{e^x - e^{-x}}{2} = \sinh(x)$$

再次求导回到原函数，因此导数以 2 为周期交替：

$$\frac{d^2}{dx^2}\cosh(x) = \cosh(x)$$

$n$ 的奇偶性决定[$n$ 阶导数](../higher-order-derivatives/)：

$$
\frac{d^n}{dx^n}\cosh(x) =
\begin{cases}
\cosh(x) & n = 2k \\[6pt]
\sinh(x) & n = 2k + 1
\end{cases}
$$

> 双曲余弦是[微分方程](../differential-equations/) $y'' = y$ 满足 $y(0) = 1$ 与 $y'(0) = 0$ 的唯一解。圆余弦在同样初始条件下解 $y'' = -y$。

- - -

由于 $\sinh(x)$ 的导数是 $\cosh(x)$，双曲余弦的[不定积分](../indefinite-integrals/)为：

$$\int \cosh(x) \ dx = \sinh(x) + c$$

由于函数是偶函数，它在关于原点对称的区间上的[定积分](../definite-integrals/)等于正半区间上积分的两倍：

$$\int_{-a}^{a} \cosh(x) \ dx = 2\sinh(a)$$

对在分支 $x \geq 1$ 上含 $\sqrt{x^2 - 1}$ 的积分，作[换元](../integration-by-substitution/) $x = \cosh(t)$（$t \geq 0$），得 $\sqrt{x^2 - 1} = \sinh(t)$ 与 $dx = \sinh(t) \ dt$，根式随之消失。该分支上的[三角换元](../trigonometric-substitution-for-integrals/)是 $x = \sec(t)$（$0 \leq t < \pi/2$）。

## 单调性与凸性

导数 $\sinh(x)$ 在 $x < 0$ 时为负，在 $x > 0$ 时为正，因此双曲余弦在 $(-\infty, 0]$ 上递减，在 $[0, +\infty)$ 上递增。唯一的驻点是 $(0, 1)$，该处切线是水平直线 $y = 1$，函数在此取得绝对最小值。

由于对每个实数 $x$ 都有 $\cosh''(x) = \cosh(x) > 0$，图像严格[凸](../convexity-and-concavity-of-functions/)，没有[拐点](../maximum-minimum-and-inflection-points/)，并且位于它在 $(0, 1)$ 处的切线 $y = 1$ 上方，等号仅在 $x = 0$ 处成立：

$$\cosh(x) \geq 1$$

## 逆函数

双曲余弦是偶函数，因此在 $\mathbb{R}$ 上没有反函数。在 $[0, +\infty)$ 上，它连续且严格递增，值域为 $[1, +\infty)$。这个限制是双射，其[逆函数](../inverse-function/)记作 $\mathrm{arcosh}$：

$$\mathrm{arcosh} : [1, +\infty) \to [0, +\infty)$$

令 $t = e^y$，方程 $x = \cosh(y)$ 变为 $2x = t + t^{-1}$，它等价于[二次方程](../quadratic-equations/)：

$$t^2 - 2xt + 1 = 0$$

它的根是 $t = x \pm \sqrt{x^2 - 1}$。两根之积为 $1$，因此它们互为倒数，对应 $y$ 与 $-y$ 两个值，而这两个值的双曲余弦相同。由于 $y \geq 0$ 意味着 $t \geq 1$，必须取正号。取[自然对数](../logarithms/)得：

$$\mathrm{arcosh}(x) = \ln\left(x + \sqrt{x^2 - 1}\right)$$

对 $x > 1$，由 $\sinh$ 的正性与基本双曲恒等式得 $\sinh(\mathrm{arcosh}(x)) = \sqrt{x^2 - 1}$，因此[逆函数的导数](../derivative-of-the-inverse-function/)为：

$$\frac{d}{dx}\mathrm{arcosh}(x) = \frac{1}{\sqrt{x^2 - 1}}$$

当 $x \to 1^+$ 时导数趋于 $+\infty$，因此 $\mathrm{arcosh}$ 的图像在 $(1, 0)$ 处有竖直切线。这条切线是 $\cosh$ 的图像在 $(0, 1)$ 处的水平切线关于直线 $y = x$ 的反射。在 $(1, +\infty)$ 上，$\dfrac{1}{\sqrt{x^2 - 1}}$ 的原函数为：

$$\int \frac{1}{\sqrt{x^2 - 1}} \ dx = \ln\left(x + \sqrt{x^2 - 1}\right) + c$$

## 麦克劳林级数

双曲余弦的麦克劳林级数由指数函数的级数得到。把 $e^{-x}$ 的展开式加到 $e^x$ 的展开式上，奇次幂相消，偶次幂加倍。除以 $2$，得到一个对每个[实数](../real-numbers/)都收敛的[幂级数](../power-series/)：

$$\cosh(x) = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!} = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \frac{x^6}{6!} + \cdots$$

偶次幂的系数为正。对 $x \neq 0$，每个部分和都严格小于函数值。特别地，前两项给出：

$$\cosh(x) > 1 + \frac{x^2}{2}$$

在顶点附近，前两项给出抛物线逼近 $y = 1 + x^2/2$。

圆余弦的[泰勒级数](../taylor-series/)中的交错符号，在把 $x$ 换成 $ix$ 时出现。对[复数](../complex-numbers/) $x$，每个 $2n$ 次项都乘以 $i^{2n} = (-1)^n$，因此 $\cosh(ix) = \cos(x)$。在该恒等式中把 $x$ 换成 $ix$ 并利用偶函数性质，得 $\cos(ix) = \cosh(x)$。
