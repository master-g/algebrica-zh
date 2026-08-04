---
title: 余弦函数
title_en: Cosine Function
source: https://algebrica.org/cosine-function/
license: CC BY-NC 4.0
tags:
  - cosine
  - derivatives
  - trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 0f6f9b43be9c45a0e1202f0ef79ac5ec96db94e13dcff5cadba02d43b5df5dc9
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 引言

由[单位圆](../unit-circle/)构造余弦的几何过程见[正弦与余弦](../sine-and-cosine/)。本节把余弦视为实变量的实值[函数](../functions/)。

余弦函数 $f(x) = \cos(x)$ 把每个角 $x$ 映射为其对应的[余弦](../sine-and-cosine/)值，其中角度用[弧度](../angles-and-angular-measure/)来度量。它的图像是一条周期为 $2\pi$、振幅为 $1$ 的周期波，在 $-1$ 与 $1$ 之间振荡。函数的[定义域](../determining-the-domain-of-a-function/)包含所有实数，值域是[区间](../intervals/) $[-1, 1]$。

![图 1](/assets/trigonometry/svg/sine-and-cosine-4.zh.svg)

余弦函数与[正弦函数](../sine-function/)一起描述周期现象。在简单的[简谐运动](../simple-harmonic-motion/)中，弹簧上物体或摆的位移随时间呈余弦变化，而作为其二阶导数的[加速度](../acceleration/)再次呈现符号相反的余弦变化。

## 性质

以下余弦函数的性质都可以由它在单位圆上的定义推出。

+ [定义域](../determining-the-domain-of-a-function/)：$x \in \mathbb{R}$
+ 值域：$-1 \leq y \leq 1$
+ 周期性：关于 $x$ 的周期函数，周期为 $2\pi$
+ 奇偶性：[偶函数](../even-and-odd-functions/)，满足 $\cos(-x) = \cos(x)$
+ 单调性：在 $\sin(x) > 0$ 的位置递减，在 $\sin(x) < 0$ 的位置递增；这些区间交替出现，长度均为 $\pi$。
+ 根：$x = \dfrac{\pi}{2} + n\pi$，其中 $n \in \mathbb{Z}$
+ 所有根都不是[整数](../integers/)，因为对每个 $n \in \mathbb{Z}$，$\dfrac{\pi}{2} + n\pi$ 都是[无理数](../irrational-numbers/)。
+ [最大值点和最小值点](../maximum-minimum-and-inflection-points/)：在 $x = 2k\pi$ 处取得最大值 $1$，在 $x = \pi + 2k\pi$ 处取得最小值 $-1$，其中 $k \in \mathbb{Z}$。

## 余弦函数的极限、导数与积分

余弦函数的一个[重要极限](../remarkable-limits/)是：

$$\lim_{x \to 0} \frac{1 - \cos(x)}{x} = 0$$

在原点附近，差值 $1 - \cos(x)$ 比 $x$ 更快趋于零，因此比值趋于零。

函数 $\cos(x)$ 对每个实数 $x$ 都[连续](../continuous-functions/)且可导。它的[导数](../derivatives/)为：

$$\frac{d}{dx}\cos(x) = -\sin(x)$$

连续求导时，经过四次求导后函数回到自身：

$$
\begin{align}
\frac{d^2}{dx^2}\cos(x) &= -\cos(x) \\[6pt]
\frac{d^3}{dx^3}\cos(x) &= \sin(x) \\[6pt]
\frac{d^4}{dx^4}\cos(x) &= \cos(x)
\end{align}
$$

导数以四阶为周期重复，因此第 $n$ 阶导数可以写成闭式：

$$\frac{d^n}{dx^n}\cos(x) = \cos\left(x + \frac{n\pi}{2}\right)$$

由于 $\sin(x)$ 的导数是 $\cos(x)$，余弦函数的[不定积分](../indefinite-integrals/)为：

$$\int \cos(x) \ dx = \sin(x) + c$$

> 关于三角函数积分，以及更复杂情形所需的变换与换元技巧，详见[三角函数的积分](../integral-of-trigonometric-functions/)。

余弦函数还可以用[虚数](../complex-numbers/)表示。令 $e^{ix}$ 表示底数为 $e$ 的[指数函数](../exponential-function/)，令 $i$ 表示虚数单位，则由[欧拉公式](../eulers-formula/)可得：

$$\cos(x) = \frac{e^{ix} + e^{-ix}}{2}$$

## 麦克劳林级数

函数的麦克劳林级数是以原点为中心的[泰勒级数](../taylor-series/)，也是一种[幂级数](../power-series/)。它的部分和可以在 $x = 0$ 附近逼近函数。对于余弦函数，该级数对每个[实数](../real-numbers/)都收敛：

$$\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$$

这里只出现偶次幂，这与余弦函数是偶函数相符。保留前两项可得小 $x$ 时的近似 $\cos(x) \approx 1 - \dfrac{x^2}{2}$。此时差值 $1 - \cos(x)$ 接近 $\dfrac{x^2}{2}$，从而恢复 $x \to 0$ 时的极限 $\dfrac{1 - \cos(x)}{x} \to 0$。
