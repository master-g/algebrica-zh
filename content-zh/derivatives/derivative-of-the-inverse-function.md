---
title: 逆函数的导数
title_en: Derivative of the Inverse Function
source: https://algebrica.org/derivative-of-the-inverse-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - differentiability
  - inverse-function
  - inverse-trigonometric-functions
  - vertical-tangent
translation:
  status: current
  source_hash: c80ac6ef44006d4b16ce78607555890bb2014a191129151c16e49a3a8d391aa4
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 引言

可逆函数 $f$ 与其[逆函数](../inverse-function/) $f^{-1}$ 是同一对应关系的两个相反方向的读法，它们的图像关于直线 $y = x$ 对称。反射交换水平方向与竖直方向，因此斜率为 $m$ 的直线变为斜率为 $1/m$ 的直线。由于[导数](../derivatives/)就是切线的斜率，$f^{-1}$ 在某点的导数等于 $f$ 在反射点处导数的倒数。

![IMG. 1](/assets/derivatives/svg/derivative-of-the-inverse-function-1.svg)

写作 $y_0 = f(x_0)$。反射交换的两个点分别是 $f$ 图像上的 $(x_0, y_0)$ 和 $f^{-1}$ 图像上的 $(y_0, x_0)$，两条切线斜率之间的关系为：

$$\bigl(f^{-1}\bigr)'(y_0) = \frac{1}{f'(x_0)}$$

同一图像还说明了公式必须排除的情形。斜率为 $0$ 的水平切线反射为竖直直线，而可微函数没有竖直切线，因此在 $f'$ 为零的点的像处，逆函数不可能可微。

## 链式法则给出的结论

$f$ 与其逆函数的[复合](../composite-functions/)是恒等函数，因此对 $f^{-1}$ 定义域中的每个 $y$ 都有：

$$f\bigl(f^{-1}(y)\bigr) = y$$

假设 $f^{-1}$ 在 $y$ 处可微。左侧于是也在 $y$ 处可微。对两边求导，并在左侧使用[链式法则](../chain-rule/)，得到：

$$f'\bigl(f^{-1}(y)\bigr) \cdot \bigl(f^{-1}\bigr)'(y) = 1$$

由这个恒等式可以得到两个结论。当 $f'\bigl(f^{-1}(y)\bigr) \neq 0$ 时，可以除以该因子，得到上面给出的公式，而且没有其他可能的值。当 $f'\bigl(f^{-1}(y)\bigr) = 0$ 时，恒等式变成 $0 = 1$，所以开头的假设是错误的，$f^{-1}$ 在 $y$ 处不可微。

这个论证说明了导数必须等于什么，以及逆函数在哪些点不可能可微；但它没有证明 $f^{-1}$ 在任何地方都可微，因为正是可微性使我们能够应用链式法则。下一节将在关于 $f$ 的假设下，从定义出发证明可微性。

## 定理与证明

设 $f$ 在区间 $I$ 上连续且单射，$x_0 \in I$，并假设 $f$ 在 $x_0$ 处可微且 $f'(x_0) \neq 0$。那么 $f^{-1}$ 在 $y_0 = f(x_0)$ 处可微，且其导数为：

$$\bigl(f^{-1}\bigr)'(y_0) = \frac{1}{f'\bigl(f^{-1}(y_0)\bigr)} = \frac{1}{f'(x_0)}$$

证明使用连续单射函数在区间上的两个性质，这两个性质都是[介值定理](../intermediate-value-theorem/)的结果。像 $J = f(I)$ 仍是一个区间，而逆函数 $f^{-1} : J \to I$ 在 $J$ 上[连续](../continuous-functions/)。

取 $y \in J$ 且 $y \neq y_0$，令 $x = f^{-1}(y)$。由单射性 $x \neq x_0$，从而 $f(x) \neq f(x_0)$。由于 $y - y_0 = f(x) - f(x_0)$ 且 $f^{-1}(y) - f^{-1}(y_0) = x - x_0$，$f^{-1}$ 在 $y_0$ 处的[差商](../difference-quotient/)是 $f$ 在 $x_0$ 处差商的倒数：

$$\frac{f^{-1}(y) - f^{-1}(y_0)}{y - y_0} = \frac{x - x_0}{f(x) - f(x_0)}$$

右侧只通过 $x = f^{-1}(y)$ 依赖于 $y$，这提示我们把它看成只关于 $x$ 的函数。对于 $x \in I$ 且 $x \neq x_0$，定义：

$$\Phi(x) = \frac{x - x_0}{f(x) - f(x_0)} = \left(\frac{f(x) - f(x_0)}{x - x_0}\right)^{-1}$$

在这个集合上，$f(x) - f(x_0)$ 从不为零，所以 $\Phi$ 在 $I$ 中除 $x_0$ 外的每一点都有定义，而上面的恒等式变为：

$$\frac{f^{-1}(y) - f^{-1}(y_0)}{y - y_0} = \Phi\bigl(f^{-1}(y)\bigr)$$

$f$ 的差商当 $x \to x_0$ 时趋于 $f'(x_0)$，而这个极限不为零。[极限的运算法则](../algebra-of-limits/)适用于它的倒数：

$$\lim_{x \to x_0} \Phi(x) = \frac{1}{f'(x_0)}$$

接下来要把 $\Phi$ 在 $x_0$ 处的极限转化为复合函数 $\Phi \circ f^{-1}$ 在 $y_0$ 处的极限。代入是合理的，理由有两个。逆函数在 $y_0$ 处连续，所以当 $y \to y_0$ 时 $f^{-1}(y) \to x_0$；逆函数是单射，所以对每个 $y \neq y_0$ 都有 $f^{-1}(y) \neq x_0$。根据[复合函数极限定理](../theorems-on-limits/)：

$$\lim_{y \to y_0} \frac{f^{-1}(y) - f^{-1}(y_0)}{y - y_0} = \lim_{y \to y_0} \Phi\bigl(f^{-1}(y)\bigr) = \lim_{x \to x_0} \Phi(x) = \frac{1}{f'(x_0)}$$

$f^{-1}$ 在 $y_0$ 处的差商具有有限极限，这正是它在 $y_0$ 处可微的定义，而该极限就是所述值。

> 单射性被使用了两次，而且原因不同。它保证 $f(x) - f(x_0)$ 不为零，使 $\Phi$ 在 $x_0$ 的整个去心邻域上有定义；同时它保证 $f^{-1}(y)$ 不等于 $x_0$，使复合函数的自变量落在计算 $\Phi$ 极限的集合中。没有第二个条件，就无法从 $\Phi$ 的极限推出 $\Phi \circ f^{-1}$ 的极限。

在下面的应用中，逆函数的自变量按惯例写作 $x$，把它看成定义在自身定义域上的函数，因此公式写成：

$$\bigl(f^{-1}\bigr)'(x) = \frac{1}{f'\bigl(f^{-1}(x)\bigr)}$$

## 逆函数不可微的情形

不能去掉 $f'(x_0) \neq 0$ 这一假设。一个函数可以在整个 $\mathbb{R}$ 上连续、单射且可微，但其逆函数仍可能在某一点不可微。考虑：

$$f(x) = x^3$$

其导数 $f'(x) = 3x^2$ 除原点外处处为正，在原点处为零；并且 $f$ 在 $\mathbb{R}$ 上[严格递增](../increasing-and-decreasing-functions/)，所以它是从 $\mathbb{R}$ 到自身的双射，逆函数为 $f^{-1}(x) = \sqrt[3]{x}$。在原点处，立方根的差商发散：

$$\lim_{h \to 0} \frac{\sqrt[3]{h} - \sqrt[3]{0}}{h} = \lim_{h \to 0} \frac{1}{h^{2/3}} = +\infty$$

因此立方根在 $0$ 处不可微，其图像在那里有一条[竖直切线](../points-of-non-differentiability/)，正是 $f$ 在原点处水平切线的反射。可逆性没有受到影响，因为 $f$ 仍是双射；失去的只是 $f^{-1}$ 在这一个点处的可微性。

## 莱布尼兹记号中的公式

令 $y = f(x)$ 且 $x = f^{-1}(y)$。$f$ 的导数写作 $dy/dx$，而 $f^{-1}$ 的导数写作 $dx/dy$，所以定理说明二者互为倒数：

$$\frac{dx}{dy} = \frac{1}{\ \dfrac{dy}{dx}\ }$$

这个记号很容易记忆，因为两个分数看起来互为倒数；但它没有显示等式成立所需的两个条件。导数在对应点计算：$dy/dx$ 在 $x_0$ 处计算，$dx/dy$ 在 $y_0 = f(x_0)$ 处计算，并且分式要求 $dy/dx \neq 0$。

## 对数函数作为指数函数的逆

[指数函数](../exponential-function/) $f(t) = e^t$ 在 $\mathbb{R}$ 上严格递增，导数 $f'(t) = e^t$ 在每一点都为正，并且它把 $\mathbb{R}$ 映射到 $(0, +\infty)$ 上。该定理适用于每个 $t$，而逆函数就是自然[对数函数](../logarithmic-function/)，定义域为 $x > 0$。将 $f^{-1}(x) = \ln(x)$ 代入公式：

$$
\begin{align}
D[\ln(x)] &= \frac{1}{f'(\ln(x))} \\[6pt]
&= \frac{1}{e^{\ln(x)}} \\[6pt]
&= \frac{1}{x}
\end{align}
$$

对底数 $a > 0$ 且 $a \neq 1$ 做同样的计算，从 $f(t) = a^t$ 和 $f'(t) = a^t\ln(a)$ 开始，后者永不为零。对于 $x > 0$，可得到以 $a$ 为底的对数函数的导数：

$$D[\log_a(x)] = \frac{1}{a^{\log_a(x)}\ln(a)} = \frac{1}{x\ln(a)}$$

## 反三角函数的导数

[正弦函数](../sine-function/)在 $\mathbb{R}$ 上不是单射，而[反正弦函数](../arcsine-and-arccosine/)按定义是它在 $[-\pi/2, \pi/2]$ 上的限制的逆函数，在这个区间上正弦严格递增。在该区间内，导数 $\cos(t)$ 除两个端点外均为正，因此对 $x \in (-1, 1)$ 可应用该定理。令 $t = \arcsin(x)$，[勾股恒等式](../pythagorean-identity/)给出 $\cos(t) = \sqrt{1 - \sin^2(t)}$；由于 $t$ 落在余弦为正的区间内，应取正根：

$$
\begin{align}
D[\arcsin(x)] &= \frac{1}{\cos(\arcsin(x))} \\[6pt]
&= \frac{1}{\sqrt{1 - \sin^2(\arcsin(x))}} \\[6pt]
&= \frac{1}{\sqrt{1 - x^2}}
\end{align}
$$

在 $x = \pm 1$ 时，对应的点为 $t = \pm\pi/2$，此处正弦的导数为零。因此，反正弦函数在其定义域的端点处不可微，并且其图像在那里有竖直切线。

反余弦函数是[余弦函数](../cosine-function/)在 $[0, \pi]$ 上的限制的逆函数，其导数 $-\sin(t)$ 在内部为负。令 $t = \arccos(x)$，并利用 $\sin(t) = \sqrt{1 - \cos^2(t)} = \sqrt{1 - x^2}$，同样的代入得到：

$$D[\arccos(x)] = \frac{1}{-\sin(\arccos(x))} = -\frac{1}{\sqrt{1 - x^2}}$$

- - -

[反正切函数](../arctangent-and-arccotangent/)是[正切函数](../tangent-function/)在 $(-\pi/2, \pi/2)$ 上的限制的逆函数；在这个区间内正切严格递增，并且取遍所有实数。它的导数为 $1 + \tan^2(t)$，至少为 $1$，因而永不为零，所以反正切函数在整个 $\mathbb{R}$ 上可微。令 $t = \arctan(x)$ 且 $\tan(t) = x$，结果中不再有三角函数或平方根：

$$D[\arctan(x)] = \frac{1}{1 + \tan^2(\arctan(x))} = \frac{1}{1 + x^2}$$

[余切函数](../cotangent-function/)在 $(0, \pi)$ 上的限制的导数为 $-\bigl(1 + \cot^2(t)\bigr)$，同样的代入得到反余切函数的导数：

$$D[\mathrm{arccot}(x)] = -\frac{1}{1 + x^2}$$

> $\arcsin$ 与 $\arccos$、$\arctan$ 与 $\mathrm{arccot}$ 这两对函数的导数仅相差一个符号。恒等式 $\arcsin(x) + \arccos(x) = \pi/2$ 和 $\arctan(x) + \mathrm{arccot}(x) = \pi/2$ 解释了这一点，因为两个函数的和为常数时，它们的导数互为相反数。

## 没有显式公式的逆函数

该公式需要被考察点处 $f^{-1}$ 的函数值，而不需要 $f^{-1}$ 的表达式。因此，即使逆函数没有闭式表达式，也可以计算其导数。考虑：

$$f(x) = x + e^x$$

其导数 $f'(x) = 1 + e^x$ 在每一点都大于 $1$，所以 $f$ 在 $\mathbb{R}$ 上严格递增且为单射。该函数连续，并且在上方和下方都无界，因此其像是整个 $\mathbb{R}$，而 $f^{-1}$ 定义在 $\mathbb{R}$ 上。方程 $x + e^x = y$ 同时含有线性项和指数项，其关于 $x$ 的解不能用初等函数表示。

仍然需要确定要计算逆函数的哪个点；在这里直接观察即可。从 $f(0) = 0 + e^0 = 1$ 可知 $f^{-1}(1) = 0$，所以逆函数在 $y = 1$ 处的导数为：

$$\bigl(f^{-1}\bigr)'(1) = \frac{1}{f'(0)} = \frac{1}{1 + e^0} = \frac{1}{2}$$

任何已知原像的点都可以用同样的方式处理。由 $f(1) = 1 + e$ 得到 $f^{-1}(1 + e) = 1$，并且：

$$\bigl(f^{-1}\bigr)'(1 + e) = \frac{1}{f'(1)} = \frac{1}{1 + e}$$

这两个值分别给出了逆函数 $f^{-1}$ 的图像在对应点处切线的斜率。在 $y = 1$ 附近，逆函数可由经过 $(1, 0)$、斜率为 $1/2$ 的[切线近似](../differential-of-a-function/)，其方程为 $x = (y - 1)/2$。
