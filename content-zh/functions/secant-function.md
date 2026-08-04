---
title: 正割函数
title_en: Secant Function
source: https://algebrica.org/secant-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - secant
  - trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 6792d2c3750c8757dd862b9ea2f350a5b28f90079896a5e73d7798b4a896d931
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 引言

> 由[单位圆](../unit-circle/)构造正割的几何过程见[正割与余割](../secant-and-cosecant/)。本节把正割视为实变量的实值[函数](../functions/)。

正割函数 $f(x) = \sec(x)$ 把每个角 $x$ 映射为其[余弦](../cosine-function/)值的倒数，其中角度用[弧度](../angles-and-angular-measure/)来度量，并且在 $\cos(x) \neq 0$ 的位置有定义。它的图像是一条周期为 $2\pi$ 的周期曲线，并且在余弦函数关于 $x$ 的值为零的位置具有竖直[渐近线](../asymptotes/)，即在 $x = \pi/2 + k\pi$ 且 $k \in \mathbb{Z}$ 时出现。函数的[定义域](../determining-the-domain-of-a-function/)是除去这些点的所有实数，值域为 $(-\infty, -1] \cup [1, +\infty)$

![图 1](/assets/trigonometry/svg/secant-and-cosecant-3.zh.svg)

正割是余弦的倒数，因此当余弦接近 $\pm 1$ 时，正割保持有界；当余弦趋近于零时，正割无界增大：

$$\sec(x) = \frac{1}{\cos(x)}$$

由于余弦的绝对值不会超过 $1$，其倒数不会落在 $-1$ 与 $1$ 之间；在趋向相邻渐近线之前，每个分支都会在余弦等于 $\pm 1$ 的位置取得唯一的极值 $1$ 或 $-1$。

## 性质

以下正割函数的性质都可以由它作为余弦倒数的定义推出。

+ [定义域](../determining-the-domain-of-a-function/)：$\{\ x \in \mathbb{R} \mid x \neq \frac{\pi}{2} + k\pi \ \forall k \in \mathbb{Z} \ \}$
+ 值域：$y \in (-\infty, -1] \cup [1, +\infty)$
+ 周期性：关于 $x$ 的周期函数，周期为 $2\pi$
+ 奇偶性：[偶函数](../even-and-odd-functions/)，满足 $\sec(-x) = \sec(x)$
+ 图像在 $x = \frac{\pi}{2} + k\pi$ 处具有竖直[渐近线](../asymptotes/)，其中 $k \in \mathbb{Z}$

## 与正切函数的关系

正割与[正切函数](../tangent-function/)通过[勾股恒等式](../pythagorean-identity/)联系在一起。将 $\sin^2(x) + \cos^2(x) = 1$ 两边除以 $\cos^2(x)$，再使用倒数定义，可得：

$$\sec^2(x) = 1 + \tan^2(x)$$

这两个函数具有相同的竖直渐近线，且正割与正切同步增大。

## 正割函数的极限、导数与积分

在原点附近，余弦取得最大值，因此正割取得最小的正值：

$$\lim_{x \to 0} \sec(x) = 1$$

第一个竖直渐近线附近的行为由单侧极限描述。当 $x$ 从左侧趋近于 $\pi/2$ 时，余弦为正并趋于零，因此函数无界增大：

$$\lim_{x \to \frac{\pi}{2}^-} \sec(x) = +\infty$$

而从右侧趋近时，余弦为负，函数值发散到负无穷：

$$\lim_{x \to \frac{\pi}{2}^+} \sec(x) = -\infty$$

函数在其定义域上[连续](../continuous-functions/)且可导。它的[导数](../derivatives/)为：

$$\frac{d}{dx}\sec(x) = \sec(x)\tan(x)$$

它的[不定积分](../indefinite-integrals/)为：

$$\int \sec(x) \ dx = \ln\left|\sec(x) + \tan(x)\right| + c$$

> 关于三角函数积分，以及更复杂情形所需的变换与换元技巧，详见[三角函数的积分](../integral-of-trigonometric-functions/)。

正割函数还可以用[虚数](../complex-numbers/)表示。令 $e^{ix}$ 表示底数为 $e$ 的[指数函数](../exponential-function/)，令 $i$ 表示虚数单位，则由[欧拉公式](../eulers-formula/)可得：

$$\sec(x) = \frac{2}{e^{ix} + e^{-ix}}$$
