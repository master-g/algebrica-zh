---
title: 正弦函数
title_en: Sine Function
source: https://algebrica.org/sine-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - sine
  - trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 38c6f9d40704548d215c1b9d416ec56135e7bdc5838f1aa83a8bcdd98e306464
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 引言

由[单位圆](../unit-circle/)构造正弦的几何过程见[正弦与余弦](../sine-and-cosine/)。本节把正弦视为实变量的实值[函数](../functions/)。

正弦函数 $f(x) = \sin(x)$ 把每个角 $x$ 映射为其对应的[正弦](../sine-and-cosine/)值，其中角度用[弧度](../angles-and-angular-measure/)来度量。它的图像是一条周期为 $2\pi$、振幅为 $1$ 的周期波，在 $-1$ 与 $1$ 之间振荡。函数的[定义域](../determining-the-domain-of-a-function/)包含所有实数，值域是[区间](../intervals/) $[-1, 1]$。

![图 1](/assets/trigonometry/svg/sine-and-cosine-3.zh.svg)

正弦函数与[余弦函数](../cosine-function/)一起描述周期现象。在简单的[简谐运动](../simple-harmonic-motion/)中，弹簧上物体或摆的位移随时间呈正弦变化，而作为其导数的[速度](../velocity/)也呈正弦变化。

## 性质

以下正弦函数的性质都可以由它在单位圆上的定义推出。

+ [定义域](../determining-the-domain-of-a-function/)：$x \in \mathbb{R}$
+ 值域：$-1 \leq y \leq 1$
+ 周期性：关于 $x$ 的周期函数，周期为 $2\pi$
+ 奇偶性：[奇函数](../even-and-odd-functions/)，满足 $\sin(-x) = -\sin(x)$
+ 单调性：在 $\cos(x) > 0$ 的位置递增，在 $\cos(x) < 0$ 的位置递减；这些区间交替出现，长度均为 $\pi$。
+ 根：$x = n\pi$，其中 $n \in \mathbb{Z}$
+ 根中唯一的[整数](../integers/)值是 $x = 0$，因为对每个 $n \neq 0$，$n\pi$ 都是[无理数](../irrational-numbers/)。
+ [最大值点和最小值点](../maximum-minimum-and-inflection-points/)：在 $x = \dfrac{\pi}{2} + 2k\pi$ 处取得最大值 $1$，在 $x = \dfrac{3\pi}{2} + 2k\pi$ 处取得最小值 $-1$，其中 $k \in \mathbb{Z}$。

## 正弦函数的极限、导数与积分

涉及正弦函数的一个[重要极限](../remarkable-limits/)描述了它在原点邻域内的行为，并用于计算其导数。当 $x$ 趋近于零时，在都用弧度度量的前提下，$\sin(x)$ 越来越接近 $x$，因此正弦曲线在原点附近几乎无法与直线 $y = x$ 区分。这可表示为：

$$\lim_{x \to 0} \frac{\sin(x)}{x} = 1$$

函数 $\sin(x)$ 对每个实数 $x$ 都[连续](../continuous-functions/)且可导。它的[导数](../derivatives/)为：

$$\frac{d}{dx}\sin(x) = \cos(x)$$

再次求导时，每一阶导数都由前一阶导数得到；经过四次求导后，函数回到自身：

$$
\begin{align}
\frac{d^2}{dx^2}\sin(x) &= -\sin(x) \\[6pt]
\frac{d^3}{dx^3}\sin(x) &= -\cos(x) \\[6pt]
\frac{d^4}{dx^4}\sin(x) &= \sin(x)
\end{align}
$$

导数以四阶为周期重复，因此第 $n$ 阶导数可以写成闭式：

$$\frac{d^n}{dx^n}\sin(x) = \sin\left(x + \frac{n\pi}{2}\right)$$

由于 $-\cos(x)$ 的导数是 $\sin(x)$，正弦函数的[不定积分](../indefinite-integrals/)为：

$$\int \sin(x) \ dx = -\cos(x) + c$$

> 关于三角函数积分，以及更复杂情形所需的变换与换元技巧，详见[三角函数的积分](../integral-of-trigonometric-functions/)。

正弦函数还可以用[虚数](../complex-numbers/)表示。令 $e^{ix}$ 表示底数为 $e$ 的[指数函数](../exponential-function/)，令 $i$ 表示虚数单位，则由[欧拉公式](../eulers-formula/)可得：

$$\sin(x) = \frac{e^{ix} - e^{-ix}}{2i}$$

## 单调性与凸性

正弦函数在导数 $\cos(x)$ 为正时递增，为负时递减。在每个周期内，递增和递减区间分别为：

$$
\begin{align}
\uparrow \quad & \left(-\frac{\pi}{2} + 2k\pi, \frac{\pi}{2} + 2k\pi\right) \\[6pt]
\downarrow \quad & \left(\frac{\pi}{2} + 2k\pi, \frac{3\pi}{2} + 2k\pi\right)
\end{align}
$$

两种情形都满足 $k \in \mathbb{Z}$，且这些区间的端点就是最大值点和最小值点。

二阶导数决定函数的[凸性与凹性](../convexity-and-concavity-of-functions)。它是：

$$\frac{d^2}{dx^2}\sin(x) = -\sin(x)$$

当 $\sin(x) > 0$ 时，图像向下凹；当 $\sin(x) < 0$ 时，图像向上凸。这两种行为在[拐点](../maximum-minimum-and-inflection-points/) $x = n\pi$ 处交汇，其中 $n \in \mathbb{Z}$；在这些点，二阶导数为零并变号。这些点正好也是函数的根。

## 麦克劳林级数

函数的麦克劳林级数是以原点为中心的[泰勒级数](../taylor-series/)，也是一种[幂级数](../power-series/)。它的部分和可以在 $x = 0$ 附近逼近函数，并用于计算函数值以及求[极限](../limits/)和积分。对于正弦函数，该级数对每个[实数](../real-numbers/)都收敛：

$$\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$$

这里只出现奇次幂，这与正弦函数是奇函数相符。保留第一项可得小 $x$ 时的近似 $\sin(x) \approx x$，并恢复 $x \to 0$ 时的极限 $\dfrac{\sin(x)}{x} \to 1$。
