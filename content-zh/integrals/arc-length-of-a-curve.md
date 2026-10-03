---
title: 曲线的弧长
title_en: Arc Length of a Curve
source: https://algebrica.org/arc-length-of-a-curve/
license: CC BY-NC 4.0
tags:
  - arc-length
  - cartesian-coordinates
  - definite-integral
  - derivatives
  - integration
  - mean-value-theorem
  - parametric-curves
  - rectifiable-curves
  - riemann-integral
translation:
  status: current
  source_hash: e607236425d696aff5d57884022f822c0271b72e475b61233e99df8a71ee6c3b
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 从直线段到曲线弧

要确定平面上连接两个不同的点 $A$ 和 $B$ 的线段的长度，我们使用欧几里得距离公式：

$$
d(A,B)=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} \tag{1}
$$

这个公式简单而且相当直观，它用到两点的 $x$ 坐标之差和 $y$ 坐标之差，这些差沿坐标轴度量；公式直接适用于线段，而线段不过是直线上的一段。当要度量的不是线段而是曲线的长度时，情况就变得复杂一些，因为曲线通常不沿直线延伸，形状也可能更多样。

在这种情形下，我们采用的构造与定义[定积分](../definite-integrals/)所用的步骤相同：用长度容易度量的线段来近似曲线，然后取[极限](../limits/)。例如，考虑在闭区间 $[a, b]$ 上[连续](../continuous-functions/)、可导且导数连续的函数 $f(x)$。我们的目标是度量 $x$ 坐标为 $a$ 和 $b$ 的两点之间的弧，给它指定一个实数作为它的长度。首先在曲线上内接一条折线，然后计算折线的长度，再不断增加分点，使分点沿 $x$ 轴的间距趋于零，逐步改进近似。

严格地说，设 $P = \{\ x_0, x_1, \dots, x_n \ \}$ 是区间 $[a, b]$ 的一个[划分](../riemann-integrability-criteria/)，满足：

$$a = x_0 < x_1 < \cdots < x_n = b$$

我们这样构造折线：把划分的每个点与函数图像上的点 $(x_k, f(x_k))$ 对应起来。用线段依次连接所得的点，就得到一条内接于曲线的折线，它的总长度是相邻两点之间欧几里得距离的和。因此，下标为 $k$ 的那条线段的长度可以由下面的欧几里得距离公式得到，它是 $(1)$ 的一个特例：

$$\ell_k = \sqrt{(x_k - x_{k-1})^2 + (f(x_k) - f(x_{k-1}))^2} \tag{2}$$

![图 1](/assets/integrals/svg/arc-length-of-a-curve-1.zh.svg)


由于 $f$ 在 $[x_{k-1}, x_k]$ 上可导，[中值定理](../lagrange-theorem/)保证在开区间 $(x_{k-1}, x_k)$ 内存在一点 $\xi_k$，使得：

$$f(x_k) - f(x_{k-1}) = f'(\xi_k)(x_k - x_{k-1})$$

把这个恒等式代入 $(2)$，并提出因子 $(x_k - x_{k-1})^2$，得到：

$$\ell_k = \sqrt{1 + [f'(\xi_k)]^2}(x_k - x_{k-1})$$

因此，内接于曲线的折线的总长度是函数 $\sqrt{1 + [f'(x)]^2}$ 对于划分 $P$ 的一个黎曼和；当划分的细度趋于零时，这个和收敛到一个定积分。

## 直角坐标形式的弧长

刚才描述的构造引出了[笛卡尔平面](../the-cartesian-coordinate-plane/)中以函数图像表示的曲线的长度定义。考虑在闭[区间](../intervals/) $[a, b]$ 上具有连续[导数](../derivatives/)的函数 $f$。$f$ 的图像从 $x = a$ 到 $x = b$ 的弧长由下面的定积分定义：

$$L = \int_a^b \sqrt{1 + [f'(x)]^2} \ dx \tag{3}$$

$f'$ 在 $[a, b]$ 上的连续性保证了被积函数连续，从而黎曼可积。导数有界但不连续的函数，其图像仍然可能有确定的长度。在这种情形下，刚才给出的初等证明不能直接适用，讨论需要可求长曲线这一更一般的框架。

表达式 $\sqrt{1 + [f'(x)]^2} \ dx$ 称为弧长元素，记为 $ds$。它表示与自变量的无穷小增量 $dx$ 相对应的曲线的无穷小长度，并满足下面的恒等式：
$$ds^2 = dx^2 + dy^2 \tag{4}$$
仔细观察 $(4)$ 可以看出，这是把[勾股定理](../pythagorean-theorem/)应用于直角边为 $dx$ 和 $dy = f'(x) \ dx$ 的直角三角形。

- - -

作为一个实际例子，我们计算函数 $f(x) = x^2$ 在区间 $[0, 1]$ 上描出的[抛物线弧](../parabola/)的长度。为此应用 $(3)$，先求 $f$ 的导数，得到：

$$f'(x) = 2x$$

代入公式 $(3)$，弧长可以表示为：

$$L = \int_0^1 \sqrt{1 + 4x^2} \ dx$$

这是一个代数函数的积分，其中含有形如 $\sqrt{1 + (2x)^2}$ 的平方根，通常用[换元](../integration-by-substitution/) $2x = \sinh t$ 来计算。相应的[微分关系](../differential-of-a-function/)为 $2 \ dx = \cosh t \ dt$，由此得到：

$$dx = \frac{1}{2}\cosh t \ dt$$

利用[双曲恒等式](../hyperbolic-identities/) $1 + \sinh^2 t = \cosh^2 t$，可以把根式化简为 $\cosh t$，得到：

$$L = \int_0^{\mathrm{arsinh} 2} \cosh t \cdot \frac{1}{2}\cosh t \ dt = \frac{1}{2}\int_0^{\mathrm{arsinh} 2} \cosh^2 t \ dt$$

应用恒等式 $\cosh^2 t = \tfrac{1}{2}(1 + \cosh 2t)$，得到[原函数](../indefinite-integrals/)：

$$\int \cosh^2 t \ dt = \frac{1}{2}t + \frac{1}{4}\sinh 2t + c$$

在积分限处求值，并利用 $\sinh 2t = 2\sinh t \cosh t$ 以及关系 $\sinh(\mathrm{arsinh} 2) = 2$ 和 $\cosh(\mathrm{arsinh} 2) = \sqrt{5}$，就得到原点与点 $(1, 1)$ 之间抛物线弧的长度：

$$L = \frac{1}{4}\mathrm{arsinh} 2 + \frac{\sqrt{5}}{2}$$

## 参数形式的弧长

接下来考虑一种常见的情形，涉及圆、[椭圆](../ellipse/)和螺线这样的曲线；它们不能表示为单个函数的图像，因为同一个 $x$ 值可能对应不止一个 $y$ 值。对这些曲线，通常引入一个辅助变量，把动点的两个坐标表示为这个参数的函数。这就是曲线的参数表示；下面会看到，当参数取为 $x$ 坐标时，它与直角坐标表示一致。例如，考虑由闭区间内的参数 $t$ 描述的平面曲线：

$$\begin{cases} x = x(t) \\[6pt] y = y(t) \end{cases} \quad t \in [\alpha, \beta]$$

假设函数 $x(t)$ 和 $y(t)$ 在区间 $[\alpha, \beta]$ 上连续可导。把上面描述的折线构造应用于参数区间的一个划分，就得到连接两个相邻参数值 $t_{k-1}$ 和 $t_k$ 所对应的点的弦，由 $(1)$，它的长度为：

$$\ell_k = \sqrt{[x(t_k) - x(t_{k-1})]^2 + [y(t_k) - y(t_{k-1})]^2}$$

对 $x$ 和 $y$ 应用中值定理，并在划分的细度趋于零时取极限，就得到参数形式的弧长公式：

$$L = \int_\alpha^\beta \sqrt{[x'(t)]^2 + [y'(t)]^2} \ dt \tag{5}$$

> 回顾一下，一条曲线一般有许多不同的参数化，但只要参数化是正则的并且是[单射](../injective-surjective-and-bijective-functions/)，它的弧长就只取决于所经过部分的几何像。

- - -

我们说过，取参数 $t = x$ 时，直角坐标公式是参数公式的特例。在这种情形下，参数化化为：

$$\begin{cases} x(t) = t \\[6pt] y(t) = f(t) \end{cases}$$

于是有 $x'(t) = 1$ 和 $y'(t) = f'(t)$。把这些表达式代入公式 $(5)$ 就得到公式 $(3)$。可见参数表示更一般，在直角坐标形式不能直接使用的情形中很有用。

- - -

再举一个例子，我们计算圆心在原点、半径为 $r$ 的[圆](../circumference/)的周长，这次使用参数表示：

$$\begin{cases} x(t) = r\cos t \\[6pt] y(t) = r\sin t \end{cases} \quad t \in [0, 2\pi]$$

先计算参数函数的导数：

$$x'(t) = -r\sin t \qquad y'(t) = r\cos t$$

代入参数形式的弧长公式，并利用[基本三角恒等式](../pythagorean-identity/) $\sin^2 t + \cos^2 t = 1$，被积函数变为：

$$\sqrt{[x'(t)]^2 + [y'(t)]^2} = \sqrt{r^2\sin^2 t + r^2\cos^2 t} = r$$

于是在区间 $[0, 2\pi]$ 上得到下面的积分：

$$L = \int_0^{2\pi} r \ dt = 2\pi r$$

这样就证明了圆的周长为 $2\pi r$。

- - -

接下来，考虑半径为 $r$ 的圆沿一条直线无滑动地滚动时，圆上一点生成的摆线。摆线一拱的标准参数化为：

$$\begin{cases} x(t) = r(t - \sin t) \\[6pt] y(t) = r(1 - \cos t) \end{cases} \quad t \in [0, 2\pi]$$

计算各参数分量的导数：

$$x'(t) = r(1 - \cos t) \qquad y'(t) = r\sin t$$

把这两个分量的平方相加，并利用[恒等式](../trigonometric-identities/) $1 - \cos t = 2\sin^2(t/2)$ 和 $\sin t = 2\sin(t/2)\cos(t/2)$，得到：

$$
\begin{align}
[x'(t)]^2 + [y'(t)]^2 &= r^2(1 - \cos t)^2 + r^2\sin^2 t \\[6pt]
                      &= 2r^2(1 - \cos t)
\end{align}
$$

应用半角恒等式，表达式变为 $4r^2\sin^2(t/2)$，它的平方根是 $2r |\sin(t/2)|$。由于在积分区间上 $t/2 \in [0, \pi]$，正弦非负，可以去掉[绝对值](../absolute-value/)。因此弧长积分化为：

$$L = \int_0^{2\pi} 2r\sin(t/2) \ dt$$

$\sin(t/2)$ 的一个原函数是 $-2\cos(t/2)$，在积分限处求值，就得到摆线一拱的长度为 $8r$：

$$
\begin{align}
L &= 2r\bigl[-2\cos(t/2)\bigr]_0^{2\pi} \\[6pt]
  &= 2r(-2\cos\pi + 2\cos 0) \\[6pt]
  &= 2r(2 + 2) \\[6pt]
  &= 8r
\end{align}
$$

## 简要小结与适用范围

我们介绍了怎样用直角坐标形式和参数形式计算弧长。需要记住的公式是：

[class="table-1"]

|                                             |                                                             |
| ------------------------------------------- | ----------------------------------------------------------- |
| $y = f(x)$，其中 $x \in [a, b]$              | $$L = \int_a^b \sqrt{1 + [f'(x)]^2} \ dx$$                  |
| $(x(t), y(t))$，其中 $t \in [\alpha, \beta]$ | $$L = \int_\alpha^\beta \sqrt{[x'(t)]^2 + [y'(t)]^2} \ dt$$ |

[/class]

到目前为止给出的公式都假设所涉及的导数在整个积分区间上存在且连续。当这种正则性在孤立点处不成立时，积分往往可以理解为[反常积分](../improper-integrals/)，弧长仍然可能有限。不过，也存在长度无穷的连续曲线，初等公式对它们不适用；这时要转向可求长曲线的一般理论（超出了本文的范围），其中长度直接定义为所有内接折线长度的[上确界](../supremum-and-infimum/)。

简单提一下，当这个上确界有限时，称曲线是可求长的。一般地，有界闭区间上连续可导的曲线都是可求长的，在这些情形中上确界与用积分公式算出的值一致。

可求长曲线类比 $C^1$ 类曲线（即一阶导数连续的曲线）更广，它为长度概念的一般表述提供了基础。

最后，回顾一下，当弧长积分无法求出闭式时，仍然可以用[数值积分](../numerical-integration/)来近似它的值。
