---
title: 余切函数
title_en: Cotangent Function
source: https://algebrica.org/cotangent-function/
license: CC BY-NC 4.0
tags:
  - cotangent
  - derivatives
  - trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: bf87c529573f08efcab630313aefe6a6b4a09222c69981749e3a8b6d9532369e
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 引言

> 由[单位圆](../unit-circle/)构造余切的几何过程见[正切与余切](../tangent-and-cotangent/)。本节把余切视为实变量的实值[函数](../functions/)。

余切函数 $f(x) = \cot(x)$ 把每个角 $x$ 映射为其对应的[余切](../tangent-and-cotangent/)值，其中角度用[弧度](../angles-and-angular-measure/)来度量。它的图像是一条周期为 $\pi$ 的周期曲线，并且在正弦函数关于 $x$ 的值为零的位置具有竖直[渐近线](../asymptotes/)，即在 $x = k\pi$ 且 $k \in \mathbb{Z}$ 时出现。函数的[定义域](../determining-the-domain-of-a-function/)是除去这些点的所有实数，值域为整个 $\mathbb{R}$。

![图 1](/assets/trigonometry/svg/tangent-and-cotangent-5.zh.svg)

余切是[余弦与正弦](../sine-and-cosine/)的比值，因此当正弦趋近于零时，余切发散；当余弦为零时，余切与横轴相交：

$$\cot(x) = \frac{\cos(x)}{\sin(x)}$$

在区间 $(0, \pi)$ 上，曲线从 $x = 0$ 附近的 $+\infty$ 下降到 $x = \pi$ 附近的 $-\infty$，并在 $x = \pi/2$ 处穿过零点。

## 性质

以下余切函数的性质都可以由它作为余弦与正弦之比的定义推出。

+ [定义域](../determining-the-domain-of-a-function/)：$\{\ x \in \mathbb{R} \mid x \neq k\pi \ \forall k \in \mathbb{Z} \ \}$
+ 值域：$y \in \mathbb{R}$
+ 周期性：关于 $x$ 的周期函数，周期为 $\pi$
+ 奇偶性：[奇函数](../even-and-odd-functions/)，满足 $\cot(-x) = -\cot(x)$
+ 单调性：在每个区间 $\left(k\pi, \pi + k\pi\right)$ 上递减，其中 $k \in \mathbb{Z}$
+ 根：$x = \frac{\pi}{2} + n\pi$，其中 $n \in \mathbb{Z}$
+ 所有根都不是[整数](../integers/)，因为对每个 $n \in \mathbb{Z}$，$\frac{\pi}{2} + n\pi$ 都是[无理数](../irrational-numbers/)。

## 余切函数的极限、导数与积分

一个[重要极限](../remarkable-limits/)描述了余切函数在原点邻域内的行为：

$$\lim_{x \to 0} x\cot(x) = 1$$

原点处渐近线附近的行为由单侧极限描述。当 $x$ 从右侧趋近于 $0$ 时，正弦为正并趋于零，而余弦趋近于 $1$，因此函数无界增大：

$$\lim_{x \to 0^+} \cot(x) = +\infty$$

而从左侧趋近时，正弦为负，函数值发散到负无穷：

$$\lim_{x \to 0^-} \cot(x) = -\infty$$

函数在其定义域上[连续](../continuous-functions/)且可导。它的[导数](../derivatives/)为：

$$\frac{d}{dx}\cot(x) = -\csc^2(x)$$

它的[不定积分](../indefinite-integrals/)为：

$$\int \cot(x) \ dx = \ln|\sin(x)| + c$$

> 关于三角函数积分，以及更复杂情形所需的变换与换元技巧，详见[三角函数的积分](../integral-of-trigonometric-functions/)。

余切函数还可以用[虚数](../complex-numbers/)表示。令 $e^{ix}$ 表示底数为 $e$ 的[指数函数](../exponential-function/)，令 $i$ 表示虚数单位，则由[欧拉公式](../eulers-formula/)可得：

$$\cot(x) = \frac{i\left(e^{ix} + e^{-ix}\right)}{e^{ix} - e^{-ix}}$$

## 反函数

在整个定义域上，余切不是单射，因为周期 $\pi$ 使它在每个分支上重复取遍相同的值。将定义域限制在开区间 $\left(0, \pi\right)$ 后，余切函数连续且严格递减，是到 $\mathbb{R}$ 的双射，并且存在[反函数](../inverse-function)，即[反余切](../arctangent-and-arccotangent/)：

$$\mathrm{arccot} : \mathbb{R} \to \left(0, \pi\right)$$

在这个受限定义域上，$\mathrm{arccot}(\cot(x)) = x$，且对每个实数 $y$ 都有 $\cot(\mathrm{arccot}(y)) = y$。
