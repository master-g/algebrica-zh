---
title: 正切函数
title_en: Tangent Function
source: https://algebrica.org/tangent-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - tangent
  - trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 2e44a96b5b227f680e621673272d5969fad4faecf7c85a7a97d99e239dd35dd7
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 引言

> 由[单位圆](../unit-circle/)构造正切的几何过程见[正切与余切](../tangent-and-cotangent/)。本节把正切视为实变量的实值[函数](../functions/)。

正切函数 $f(x) = \tan(x)$ 把每个角 $x$ 映射为其对应的[正切](../tangent-and-cotangent/)值，其中角度用[弧度](../angles-and-angular-measure/)来度量。它的图像是一条周期为 $\pi$ 的周期曲线，并且在余弦函数关于 $x$ 的值为零的位置具有竖直[渐近线](../asymptotes/)，即在 $x = \pi/2 + k\pi$ 且 $k \in \mathbb{Z}$ 时出现。函数的[定义域](../determining-the-domain-of-a-function/)是除去这些点的所有实数，值域为整个 $\mathbb{R}$。

![图 1](/assets/trigonometry/svg/tangent-and-cotangent-4.zh.svg)

正切是[正弦与余弦](../sine-and-cosine/)的比值，因此当两者都平滑变化时，正切变化缓慢；而当余弦趋近于零时，正切则无界增大或减小：

$$\tan(x) = \frac{\sin(x)}{\cos(x)}$$

在原点附近，曲线几乎是一条直线；当 $x$ 较小时，$\tan(x)$ 接近 $x$，而当 $x$ 趋近于第一个间断点时，曲线变得越来越陡。

## 性质

以下正切函数的性质都可以由它作为正弦与余弦之比的定义推出。

+ [定义域](../determining-the-domain-of-a-function/)：$\{\ x \in \mathbb{R} \mid x \neq \frac{\pi}{2} + k\pi \ \forall k \in \mathbb{Z} \ \}$
+ 值域：$y \in \mathbb{R}$
+ 周期性：关于 $x$ 的周期函数，周期为 $\pi$
+ 奇偶性：[奇函数](../even-and-odd-functions/)，满足 $\tan(-x) = -\tan(x)$
+ 单调性：在每个区间 $\left(-\frac{\pi}{2} + k\pi, \frac{\pi}{2} + k\pi\right)$ 上递增，其中 $k \in \mathbb{Z}$
+ 根：$x = n\pi$，其中 $n \in \mathbb{Z}$
+ 根中唯一的[整数](../integers/)值是 $x = 0$，因为对每个 $n \neq 0$，$n\pi$ 都是[无理数](../irrational-numbers/)。

## 正切函数的极限、导数与积分

一个[重要极限](../remarkable-limits/)描述了正切函数在原点邻域内的行为：

$$\lim_{x \to 0} \frac{\tan(x)}{x} = 1$$

第一个竖直渐近线附近的行为由单侧极限描述。当 $x$ 从左侧趋近于 $\pi/2$ 时，余弦为正并趋于零，因此函数无界增大：

$$\lim_{x \to \frac{\pi}{2}^-} \tan(x) = +\infty$$

而从右侧趋近时，余弦为负，函数值发散到负无穷：

$$\lim_{x \to \frac{\pi}{2}^+} \tan(x) = -\infty$$

函数在其定义域上[连续](../continuous-functions/)且可导。它的[导数](../derivatives/)为：

$$\frac{d}{dx}\tan(x) = \sec^2(x)$$

它的[不定积分](../indefinite-integrals/)为：

$$\int \tan(x) \ dx = -\ln|\cos(x)| + c$$

> 关于三角函数积分，以及更复杂情形所需的变换与换元技巧，详见[三角函数的积分](../integral-of-trigonometric-functions/)。

正切函数还可以用[虚数](../complex-numbers/)表示。令 $e^{ix}$ 表示底数为 $e$ 的[指数函数](../exponential-function/)，令 $i$ 表示虚数单位，则由[欧拉公式](../eulers-formula/)可得：

$$\tan(x) = \frac{e^{ix} - e^{-ix}}{i\left(e^{ix} + e^{-ix}\right)}$$

## 反函数

在整个定义域上，正切不是单射，因为周期 $\pi$ 使它在每个分支上重复取遍相同的值。将定义域限制在开区间 $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ 后，正切函数连续且严格递增，是到 $\mathbb{R}$ 的双射，并且存在[反函数](../inverse-function)，即[反正切](../arctangent-and-arccotangent/)：

$$\arctan : \mathbb{R} \to \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$$

在这个受限定义域上，$\arctan(\tan(x)) = x$，且对每个实数 $y$ 都有 $\tan(\arctan(y)) = y$。
