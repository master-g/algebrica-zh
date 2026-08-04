---
title: 指数函数
title_en: Exponential Function
source: https://algebrica.org/exponential-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - exponential-function
  - hyperbolic-functions
  - logarithms
translation:
  status: current
  source_hash: d1b19a0d24e345d77e5ce983a96d6cc623fd1e0e0be1a6fd85658fe8428d216e
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 引言

指数函数是形如

$$f(x) = a^x, \quad a \in \mathbb{R}^+, \quad a \neq 1$$

的[函数](../functions/)。对于任意底数 $a > 0$，指数函数 $y = a^x$ 的图像总与 y 轴交于点 $(0, 1)$，因为 $a^0 = 1$。它完全位于 x 轴上方，因为对所有 $x \in \mathbb{R}$ 都有 $a^x > 0$；它从不与 x 轴相交，所以对任何实数 $x$ 都有 $a^x \neq 0$。函数的行为取决于底数 $a$ 的取值，可以分为三种情形。

## 指数律

适用于[整数](../integers/) [幂](../powers/)的法则，只要底数为正，就可以推广到任意实指数。对于所有[实数](../real-numbers/) $x$、$y$ 以及底数 $a, b > 0$：

$$
\begin{align}
a^{x+y} &= a^x a^y \\[6pt]
(a^x)^y &= a^{xy} \\[6pt]
(ab)^x &= a^x b^x
\end{align}
$$

第一条恒等式是指数函数的函数方程，因为它把指数上的加法转化为函数值的乘法。结合 $a^0 = 1$，它可以确定负指数的值。令 $y = -x$，得到 $a^x a^{-x} = a^0 = 1$，因此：

$$a^{-x} = \frac{1}{a^x}$$

负指数会将对应的正幂取倒数，这与 $a^x$ 对每个实数 $x$ 始终为正的事实一致。

## $a$ 大于 1 时的性质

当 $a > 1$ 时，指数函数 $y = a^x$ 在 $\mathbb{R}$ 上[严格递增](../increasing-and-decreasing-functions/)。

![图 1](/assets/functions/svg/exponential-function-1.zh.svg)

+ [定义域](../determining-the-domain-of-a-function/)：$\mathbb{R}$
+ 值域：$\mathbb{R}^+$
+ 单调性：函数在 $\mathbb{R}$ 上严格递增
+ 函数从 $\mathbb{R}$ 到 $\mathbb{R}^+$ 是双射
+ 函数在 $\mathbb{R}$ 上[连续](../continuous-functions/)且可导
+ 函数没有[最大值或最小值](../maximum-minimum-and-inflection-points/)

当 $x$ 趋近于定义域的两个端点时，极限为：

$$
\begin{align}
\lim_{x \to -\infty} a^x &= 0^+ \\[6pt]
\lim_{x \to +\infty} a^x &= +\infty
\end{align}
$$

> 当 $a > 1$ 时，指数函数在 $x \to +\infty$ 时无限增长，在 $x \to -\infty$ 时从上方趋近于零。$x$ 每增加一个单位，函数值就乘以固定因子 $a$。

## $a$ 介于 0 和 1 之间时的性质

当 $0 < a < 1$ 时，指数函数 $y = a^x$ 在 $\mathbb{R}$ 上严格递减。

![图 2](/assets/functions/svg/exponential-function-2.zh.svg)

+ 定义域：$\mathbb{R}$
+ 值域：$\mathbb{R}^+$
+ 单调性：函数在 $\mathbb{R}$ 上严格递减
+ 函数从 $\mathbb{R}$ 到 $\mathbb{R}^+$ 是双射
+ 函数在 $\mathbb{R}$ 上连续且可导
+ 函数没有最大值或最小值

当 $x$ 趋近于定义域的两个端点时，极限为：

$$
\begin{align}
\lim_{x \to -\infty} a^x &= +\infty \\[6pt]
\lim_{x \to +\infty} a^x &= 0^+
\end{align}
$$

> 当 $0 < a < 1$ 时，指数函数在 $x \to -\infty$ 时无限增大，在 $x \to +\infty$ 时从上方趋近于零。$x$ 每增加一个单位，函数值就乘以固定因子 $a$，而这个因子小于 1。

## $a$ 等于 1 时的性质

当 $a = 1$ 时，指数函数退化为常函数 $y = 1^x = 1$，因此不包含在标准定义中。它的图像是高度为 $y = 1$ 的水平直线。

![图 3](/assets/functions/svg/exponential-function-3.zh.svg)

+ 定义域：$\mathbb{R}$
+ 值域：$\{1\}$
+ 单调性：函数在 $\mathbb{R}$ 上为常数
+ 函数在 $\mathbb{R}$ 上连续且可导

## 与对数函数的联系

指数函数 $y = a^x$ 是[对数函数](../logarithmic-function/) $y = \log_a(x)$ 的[反函数](../inverse-function/)，前提是 $a > 0$ 且 $a \neq 1$。这种反函数关系意味着：

$$a^{\log_a(x)} = x, \qquad \log_a(a^x) = x$$

当底数 $a$ 等于[欧拉数](../euler-number-limit-sequence/) $e \approx 2.71828$ 时，该函数就是自然指数函数：

$$f(x) = e^x$$

## 指数增长与衰减

自然指数函数由一个微分方程和一个初始条件刻画。它是在每一点变化率都等于自身、且原点处取值为一的唯一函数：

$$f'(x) = f(x), \qquad f(0) = 1$$

更一般地，变化速率与当前大小成正比的量满足 $f'(t) = k f(t)$，这个方程的解恰好是函数：

$$f(t) = C e^{kt}$$

这里 $k$ 是变化率的比例常数，$C = f(0)$ 是初始时刻 $t = 0$ 的取值。$k$ 的符号决定变化行为。当 $k > 0$ 时，该量增长，在每个固定时长内乘以固定因子；当 $k < 0$ 时，该量衰减并趋向于零。等时间间隔内数量翻倍的人口，以及等时间内质量按固定比例减少的放射性样本，都遵循这一规律。

对于衰减量，半衰期是使其变为原来一半所需的时间 $t_{1/2}$。对 $C e^{k t_{1/2}} = \tfrac{1}{2} C$ 两边取[自然对数](../logarithms/)，可得：

$$t_{1/2} = -\frac{\ln 2}{k}$$

常数 $C$ 会约去，因此半衰期与初始量无关。对于增长量，同样的计算给出翻倍时间 $\ln 2 / k$。

同样的 $e^{-\lambda t}$ 衰减描述了[指数分布](../exponential-distribution/)，它刻画了以恒定速率 $\lambda > 0$ 独立发生的事件之间的等待时间。

## 广义指数函数

当底数或指数被 $x$ 的函数替代时，会出现以下三种情形。

+ 若函数形如 $y = [f(x)]^{g(x)}$，则它在 $f(x) > 0$ 且 $g(x)$ 有定义的点上有定义。
+ 若函数形如 $y = a^{f(x)}$，其中 $a > 0$ 且 $a \neq 1$，则只要 $f(x)$ 有定义，函数就有定义。
+ 若函数形如 $y = [f(x)]^a$，则定义域条件取决于指数的符号：当 $a \in \mathbb{R}^+$ 时，函数在 $f(x) \geq 0$ 处有定义；当 $a \in \mathbb{R}^-$ 时，函数要求 $f(x) > 0$。

## 极限、导数与积分

与自然指数函数相关的[重要极限](../remarkable-limits/)是：

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

这个极限说明 $e^x$ 在原点处的导数等于一，与 $\frac{d}{dx} e^x = e^x$ 一致。对于一般底数 $a > 0$ 且 $a \neq 1$，对应的极限是：

$$\lim_{x \to 0} \frac{a^x - 1}{x} = \ln(a)$$

指数函数的[导数](../derivatives/)可直接由上述极限得到。对 $a^x$ 关于 $x$ 求导，得到：

$$\frac{d}{dx} a^x = a^x \ln(a)$$

$$\frac{d}{dx} e^x = e^x$$

再求一次导数可知，对每个允许的底数，指数函数都是[凸函数](../convexity-and-concavity-of-functions/)。二阶导数为：

$$\frac{d^2}{dx^2} a^x = a^x (\ln a)^2$$

由于当 $a \neq 1$ 时 $a^x > 0$ 且 $(\ln a)^2 > 0$，二阶导数对每个 $x \in \mathbb{R}$ 都保持为正。因此无论函数递增还是递减，图像始终向上弯曲。

指数函数的[积分](../integral-of-the-exponential-function/)可以通过反向使用上述求导公式得到：

$$\int a^x \ dx = \frac{a^x}{\ln(a)} + c$$

$$\int e^x \ dx = e^x + c$$

## 渐近增长

指数函数的增长速度快于任何[多项式](../polynomial-function/)或幂函数，但慢于[阶乘](../factorial/)。对于任意 $a > 1$ 和 $k > 0$：

$$\lim_{x \to +\infty} \frac{x^k}{a^x} = 0 \qquad \lim_{x \to +\infty} \frac{a^x}{x!} = 0$$

这建立了 $x \to +\infty$ 时的增长阶层：

$$\log x \ll x^k \ll a^x \ll x!$$

下面的表格以 $a = 2$ 为例说明这一阶层。

| $x$ | $\log_2 x$ | $x^2$ | $2^x$ | $x!$ |
|:---------:|:----------------:|:-----------:|:----------:|:----------:|
| 1  | 0   | 1    | 2       | 1           |
| 2  | 1   | 4    | 4       | 2           |
| 4  | 2   | 16   | 16      | 24          |
| 8  | 3   | 64   | 256     | 40,320       |
| 16 | 4   | 256  | 65,536   | 2.09 × 10¹³ |
| 32 | 5   | 1024 | 4.29 × 10⁹ | 2.63 × 10³⁵ |

> 增长阶层 $\log x \ll x^k \ll a^x \ll x!$ 出现在[渐近](../asymptotes/)分析以及计算机科学中[算法复杂度](../big-o-notation/)的分类里，此时用这些增长率衡量时间和空间需求。

## 由指数函数导出的双曲函数

结合 $e^x$ 与 $e^{-x}$ 可以得到双曲函数，它们出现在分析和几何中。三个主要函数是[双曲正弦与双曲余弦](../hyperbolic-sine-and-cosine/)以及[双曲正切](../hyperbolic-tangent-and-cotangent/)，定义如下：

$$\cosh(x) = \frac{e^{x} + e^{-x}}{2} \quad x \in \mathbb{R}$$

$$\sinh(x) = \frac{e^{x} - e^{-x}}{2} \quad x \in \mathbb{R}$$

$$\tanh(x) = \frac{\sinh(x)}{\cosh(x)} \quad x \in \mathbb{R} \quad \tanh(x) \in (-1, 1)$$

由于双曲函数通过指数函数定义，它们在 $\mathbb{R}$ 上光滑且可导。与无界增长的 $\sinh(x)$ 和 $\cosh(x)$ 不同，函数 $\tanh(x)$ 是有界的；后两者在 $x \to \pm\infty$ 时会无限增长。

> 双曲函数的定义与[三角函数](../sine-and-cosine/)的定义相似，区别在于 $\cosh$ 和 $\sinh$ 参数化的是单位[双曲线](../hyperbola/) $x^2 - y^2 = 1$，而不是[单位圆](../unit-circle/) $x^2 + y^2 = 1$。
