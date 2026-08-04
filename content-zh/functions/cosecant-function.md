---
title: 余割函数
title_en: Cosecant Function
source: https://algebrica.org/cosecant-function/
license: CC BY-NC 4.0
tags:
  - cosecant
  - derivatives
  - trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 15ce6879f4eb3e5cb6d8e46e9f3f49ad9800c33fe8dde4370ab1babcf40b49fe
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 引言

> 由[单位圆](../unit-circle/)构造余割的几何过程见[正割与余割](../secant-and-cosecant/)。本节把余割视为实变量的实值[函数](../functions/)。

余割函数 $f(x) = \csc(x)$ 把每个角 $x$ 映射为其[正弦](../sine-function/)值的倒数，其中角度用[弧度](../angles-and-angular-measure/)来度量，并且在 $\sin(x) \neq 0$ 的位置有定义。它的图像是一条周期为 $2\pi$ 的周期曲线，并且在正弦函数关于 $x$ 的值为零的位置具有竖直[渐近线](../asymptotes/)，即在 $x = k\pi$ 且 $k \in \mathbb{Z}$ 时出现。函数的[定义域](../determining-the-domain-of-a-function/)是除去这些点的所有实数，值域为 $(-\infty, -1] \cup [1, +\infty)$

![图 1](/assets/trigonometry/svg/secant-and-cosecant-4.zh.svg)

余割是正弦的倒数，因此当正弦接近 $\pm 1$ 时，余割保持有界；当正弦趋近于零时，余割无界增大：

$$\csc(x) = \frac{1}{\sin(x)}$$

由于正弦的绝对值不会超过 $1$，其倒数不会落在 $-1$ 与 $1$ 之间；在趋向相邻渐近线之前，每个分支都会在正弦等于 $\pm 1$ 的位置取得唯一的极值 $1$ 或 $-1$。

## 性质

以下余割函数的性质都可以由它作为正弦倒数的定义推出。

+ [定义域](../determining-the-domain-of-a-function/)：$\{\ x \in \mathbb{R} \mid x \neq k\pi \ \forall k \in \mathbb{Z} \ \}$
+ 值域：$y \in (-\infty, -1] \cup [1, +\infty)$
+ 周期性：关于 $x$ 的周期函数，周期为 $2\pi$
+ 奇偶性：[奇函数](../even-and-odd-functions/)，满足 $\csc(-x) = -\csc(x)$
+ 图像在 $x = k\pi$ 处具有竖直[渐近线](../asymptotes/)，其中 $k \in \mathbb{Z}$

## 与余切函数的关系

余割与[余切函数](../tangent-function/)通过[勾股恒等式](../pythagorean-identity/)联系在一起。将 $\sin^2(x) + \cos^2(x) = 1$ 两边除以 $\sin^2(x)$，再使用倒数定义，可得：

$$\csc^2(x) = 1 + \cot^2(x)$$

这两个函数具有相同的竖直渐近线，且余割与余切同步增大。

## 余割函数的极限、导数与积分

在 $x = \pi/2$ 附近，正弦取得最大值，因此余割取得最小的正值：

$$\lim_{x \to \frac{\pi}{2}} \csc(x) = 1$$

原点处竖直渐近线附近的行为由单侧极限描述。当 $x$ 从右侧趋近于 $0$ 时，正弦为正并趋于零，因此函数无界增大：

$$\lim_{x \to 0^+} \csc(x) = +\infty$$

而从左侧趋近时，正弦为负，函数值发散到负无穷：

$$\lim_{x \to 0^-} \csc(x) = -\infty$$

函数在其定义域上[连续](../continuous-functions/)且可导。它的[导数](../derivatives/)为：

$$\frac{d}{dx}\csc(x) = -\csc(x)\cot(x)$$

它的[不定积分](../indefinite-integrals/)为：

$$\int \csc(x) \ dx = -\ln\left|\csc(x) + \cot(x)\right| + c$$

> 关于三角函数积分，以及更复杂情形所需的变换与换元技巧，详见[三角函数的积分](../integral-of-trigonometric-functions/)。

余割函数还可以用[虚数](../complex-numbers/)表示。令 $e^{ix}$ 表示底数为 $e$ 的[指数函数](../exponential-function/)，令 $i$ 表示虚数单位，则由[欧拉公式](../eulers-formula/)可得：

$$\csc(x) = \frac{2i}{e^{ix} - e^{-ix}}$$
