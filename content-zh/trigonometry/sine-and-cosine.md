---
title: 正弦与余弦
title_en: Sine and Cosine
source: https://algebrica.org/sine-and-cosine/
license: CC BY-NC 4.0
tags:
  - cosine
  - sine
  - trigonometric-functions
  - trigonometry
  - unit-circle
translation:
  status: current
  source_hash: b8fe9198d1c66f1aabc5efcecc6165a8ec50751d2ba906eb5e581ea8edf0fdae
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

正弦与余弦是两个最基本的三角函数。给定一个[有向角](../angles-and-angular-measure/) $\theta$，在[单位圆](../unit-circle/)上以点 $P$ 表示，$\theta$ 的正弦与余弦分别定义为 $P$ 的 $y$ 坐标和 $x$ 坐标。单位圆是以原点为圆心、半径为 $1$ 的[圆](../circumference/)，其[方程](../equations/)为：

$$
x^2+y^2=1
$$

有向角按逆时针方向旋转时取正值，按顺时针方向旋转时取负值。所有相差 $2\pi$ 的整数倍的角在单位圆上对应同一点，因而可表示为 $\theta+2k\pi$，其中 $k \in \mathbb{Z}$。

- - -

**定义 1。** 考虑有向角 $\theta$ 及[单位圆](../unit-circle/)上与 $\theta$ 对应的点 $P$。$\theta$ 的正弦定义为 $P$ 的 $y$ 坐标。它等于内接于单位圆的直角三角形中直角边 $\overline{OQ}$ 与斜边 $\overline{OP}$ 的比值；由于 $\overline{OP} = 1$，可得：

$$
\sin(\theta) = \frac{\overline{OQ}}{\overline{OP}} = \frac{\overline{OQ}}{1} = y_P
$$

![单位圆上点的正弦几何意义](/assets/trigonometry/svg/sine-and-cosine-1.zh.svg)

**定义 2。** 类似地，$\theta$ 的余弦定义为 $P$ 的 $x$ 坐标。它等于直角边 $\overline{OR}$ 与斜边 $\overline{OP}$ 的比值，因此：

$$
\cos(\theta) = \frac{\overline{OR}}{\overline{OP}} = \frac{\overline{OR}}{1} = x_P
$$

![单位圆上点的余弦几何意义](/assets/trigonometry/svg/sine-and-cosine-2.zh.svg)

> 因此，一个角的正弦与余弦就是点 $P$ 在坐标轴上的有向投影长度：正弦对应 $y$ 轴方向，余弦对应 $x$ 轴方向。

## 通过圆扇形面积定义

前面的几何描述将正弦和余弦作为单位圆上某点的坐标来引入，但它依赖于弧长的直观概念，而弧长本身尚未脱离三角函数独立定义。基于积分学的严格处理通过相应圆扇形的面积来度量有向角，从而避免了这种逻辑循环——该面积是一个可以直接通过[定积分](../definite-integrals/)计算的量。

这一构造从 $\pi$ 的解析定义出发，将其取为单位圆上半部分所围面积的两倍：

$$
\pi := 2\int_{-1}^{1}\sqrt{1-x^2} \ dx
$$

在此表述中，$\pi$ 被视为一个由定积分确定的实数，完全不涉及曲线的长度。

- - -

**定义 3。** 对 $-1 \leq x \leq 1$，设 $A(x)$ 表示由水平轴、连接原点与点 $(x, \sqrt{1-x^2})$ 的半射线，以及连接该点和 $(1, 0)$ 的单位圆弧所围成的圆扇形面积。面积 $A(x)$ 分解为一个直角三角形面积与位于上半圆下方区域的面积之和：

$$
A(x) = \frac{x\sqrt{1-x^2}}{2} + \int_x^1 \sqrt{1-t^2} \ dt
$$

![单位圆上的圆扇形示意图](/assets/trigonometry/svg/sine-and-cosine-5.zh.svg)

函数 $A$ 在 $[-1, 1]$ 上[连续](../continuous-functions/)，并从 $A(-1) = \pi/2$ 单调递减至 $A(1) = 0$。当 $-1 < x < 1$ 时，由[微积分基本定理](../fundamental-theorem-of-calculus/)可得导数：

$$
A'(x) = -\frac{1}{2\sqrt{1-x^2}}
$$

负号表明 $A$ 在其定义域内部严格递减。

- - -

余弦和正弦函数在区间 $[0, \pi]$ 上定义为单位圆上唯一确定的点的坐标，该点所界定的扇形面积为 $\theta/2$。对 $0 \leq \theta \leq \pi$，$\theta$ 的余弦是 $[-1, 1]$ 中满足以下条件的唯一值：

$$
A(\cos\theta) = \frac{\theta}{2}
$$

$\theta$ 的正弦则由下式定义：

$$
\sin\theta = \sqrt{1 - \cos^2\theta}
$$

由 $A$ 在 $[-1, 1]$ 上的连续性，以及将[介值定理](../intermediate-value-theorem/)应用于它在 $0$ 与 $\pi/2$ 之间取得的值，可保证 $\cos\theta$ 的存在性与唯一性。[基本三角恒等式](../pythagorean-identity/) $\sin^2\theta + \cos^2\theta = 1$ 由构造成立。

- - -

将 $\sin$ 和 $\cos$ 从 $[0, \pi]$ 延拓到整个实数轴分两步进行。对 $\pi \leq \theta \leq 2\pi$，其值由对称反射得到：

$$
\begin{align}
\sin\theta &= -\sin(2\pi - \theta) \\[6pt]
\cos\theta &= \cos(2\pi - \theta)
\end{align}
$$

对任意实数 $\theta$，写成 $\theta = 2k\pi + \theta'$，其中 $k \in \mathbb{Z}$ 且 $\theta' \in [0, 2\pi]$，并令：

$$
\begin{align}
\sin\theta &= \sin\theta' \\[6pt]
\cos\theta &= \cos\theta'
\end{align}
$$

此过程所定义的函数在整个 $\mathbb{R}$ 上有定义，且以 $2\pi$ 为周期，与前文给出的几何描述完全一致。

> 在此解析框架中，[导数](../derivatives/) $\sin'(\theta) = \cos\theta$ 和 $\cos'(\theta) = -\sin\theta$ 并非公设，而是作为定理推导得出。其推导方式是将 $\cos$ 视为函数 $B(x) = 2A(x)$ 的反函数，并应用[反函数](../inverse-functions/)的求导法则。

## 基本三角恒等式

正弦和余弦的值满足一个称为[基本三角恒等式](../pythagorean-identity/)的性质：

$$ \sin^2\theta + \cos^2\theta = 1 $$

从几何上看，这个恒等式表示将[勾股定理](../pythagorean-theorem/)应用于内接在单位圆中的三角形 $OPR$，其中 $\overline{PR}$ 和 $\overline{OR}$ 对应两条直角边，$\overline{OP}$ 是长度为 1 的斜边。

## 三角恒等式

涉及正弦与余弦的最常见恒等式分为两类：倍角公式将 $\sin(2x)$ 与 $\cos(2x)$ 用 $\sin x$ 与 $\cos x$ 表示；加法公式则将 $\sin(x+y)$ 与 $\cos(x+y)$ 分解为这两个函数分别在 $x$ 与 $y$ 处取值的乘积。

$$
\begin{align}
&\sin(2x) = 2\sin(x)\cos(x) \\[6pt]
&\cos(2x) = \cos^{2}(x) - \sin^{2}(x) \\[6pt]
&\cos(2x) = 1 - 2\sin^{2}(x) \\[6pt]
&\cos(2x) = 2\cos^{2}(x) - 1 \\[6pt]
&\sin(x+y) = \sin(x)\cos(y) + \cos(x)\sin(y) \\[6pt]
&\cos(x+y) = \cos(x)\cos(y) - \sin(x)\sin(y)
\end{align}
$$

> 这些恒等式刻画了正弦与余弦之间的本质联系。它们直接源于单位圆的几何性质，是众多三角变换的基础。如需更全面的概览，请参阅[三角恒等式](../trigonometric-identities/)的完整汇总。

- - -

例如，从正弦与余弦的加法公式出发，我们要证明 $\cos(3x) = 4\cos^3(x) - 3\cos(x)$，并得到 $\sin(3x)$ 仅用 $\sin(x)$ 表示的类似表达式。

记 $3x = 2x + x$，运用余弦的加法公式，可得：

$$
\cos(3x) = \cos(2x)\cos(x) - \sin(2x)\sin(x)
$$

为得到仅含 $\cos(x)$ 的公式，将倍角项替换为 $\cos(2x) = 2\cos^2(x) - 1$ 与 $\sin(2x) = 2\sin(x)\cos(x)$，再展开乘积：

$$
\cos(3x) = 2\cos^3(x) - \cos(x) - 2\sin^2(x)\cos(x)
$$

利用[基本三角恒等式](../pythagorean-identity/) $\sin^2(x) = 1 - \cos^2(x)$ 消去剩余的 $\sin^2(x)$，合并同类项后得到：

$$
\cos(3x) = 4\cos^3(x) - 3\cos(x)
$$

同样的策略适用于 $\sin(3x)$。正弦的加法公式给出：

$$
\sin(3x) = \sin(2x)\cos(x) + \cos(2x)\sin(x)
$$

这次适用的倍角恒等式变体为 $\cos(2x) = 1 - 2\sin^2(x)$，其中已含 $\sin^2(x)$。将它连同 $\sin(2x) = 2\sin(x)\cos(x)$ 一并代入并展开，得到：

$$
\sin(3x) = 2\sin(x)\cos^2(x) + \sin(x) - 2\sin^3(x)
$$

再利用 $\cos^2(x) = 1 - \sin^2(x)$ 消去最后剩余的余弦项并化简，便得到类似的恒等式：

$$
\sin(3x) = 3\sin(x) - 4\sin^3(x)
$$

## 周期性

正弦与余弦的取值介于 $-1$ 与 $1$ 之间，因为线段 $\overline{OR}$ 与 $\overline{PR}$ 的长度不能超过半径，而半径等于 1。

将 $\theta$ 加上任意[整数](../integers/)倍的周角，正弦与余弦的值保持不变，因为点 $P$ 会回到单位圆上的同一位置。由此可知，正弦与余弦是以 $2 \pi$ 为周期的[函数](../functions/)：

$$
\begin{align}
\sin\theta &= \sin(\theta + 2\pi k) \quad k \in \mathbb{Z} \\[6pt]
\cos\theta &= \cos(\theta + 2\pi k) \quad k \in \mathbb{Z}
\end{align}
$$

这意味着这两个函数每隔 $2 \pi$ 便重复一次取值，体现了圆周运动的循环本质。

## 正切与余切

一个角 $\theta$ 的正弦与余弦之比，当余弦值非零时，等于该角的[正切](../tangent-and-cotangent/)：

$$
\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)}
$$

一个角 $\theta$ 的余弦与正弦之比，当正弦值非零时，等于该角的[余切](../tangent-and-cotangent/)：

$$
\cot(\theta) = \frac{\cos(\theta)}{\sin(\theta)}
$$

## 常见值

下列公式汇总了正弦在常见角处的取值，其中各角均以弧度表示。

$$
\begin{align}
x &= -\pi/2  &\quad& \sin(-\pi/2) = -1 \\[6pt]
x &= -\pi/3  &\quad& \sin(-\pi/3) = -\sqrt{3}/2 \\[6pt]
x &= -\pi/4  &\quad& \sin(-\pi/4) = -\sqrt{2}/2 \\[6pt]
x &= -\pi/6  &\quad& \sin(-\pi/6) = -1/2 \\[6pt]
x &= 0       &\quad& \sin(0) = 0 \\[6pt]
x &= \pi/6   &\quad& \sin(\pi/6) = 1/2 \\[6pt]
x &= \pi/4   &\quad& \sin(\pi/4) = \sqrt{2}/2 \\[6pt]
x &= \pi/3   &\quad& \sin(\pi/3) = \sqrt{3}/2 \\[6pt]
x &= \pi/2   &\quad& \sin(\pi/2) = 1
\end{align}
$$

下列公式汇总了余弦在常见角处的取值，其中各角均以弧度表示。

$$
\begin{align}
x &= -\pi/2  &\quad& \cos(-\pi/2) = 0 \\[6pt]
x &= -\pi/3  &\quad& \cos(-\pi/3) = 1/2 \\[6pt]
x &= -\pi/4  &\quad& \cos(-\pi/4) = \sqrt{2}/2 \\[6pt]
x &= -\pi/6  &\quad& \cos(-\pi/6) = \sqrt{3}/2 \\[6pt]
x &= 0       &\quad& \cos(0) = 1 \\[6pt]
x &= \pi/6   &\quad& \cos(\pi/6) = \sqrt{3}/2 \\[6pt]
x &= \pi/4   &\quad& \cos(\pi/4) = \sqrt{2}/2 \\[6pt]
x &= \pi/3   &\quad& \cos(\pi/3) = 1/2 \\[6pt]
x &= \pi/2   &\quad& \cos(\pi/2) = 0
\end{align}
$$

## 正弦与余弦函数

[正弦函数](../sine-function/) $f(x) = \sin(x)$ 将每个用弧度表示的角 $x$ 映射到相应的正弦值。其图像是一条周期波形，周期为 $2 \pi$，振幅为 1，在 -1 与 1 之间振荡。函数 $f(x) = \sin x$ 的[定义域](../determining-the-domain-of-a-function/)包含所有实数，但其值域为 $-1 \leq \sin(x) \leq 1$。

![正弦函数图像](/assets/trigonometry/svg/sine-and-cosine-3.zh.svg)

+ 定义域：$x \in \mathbb{R}$
+ 值域：$y \in \mathbb{R} : -1 \leq y \leq 1$
+ 周期性：关于 $x$ 的周期函数，周期为 $2 \pi$
+ 奇偶性：[奇函数](../even-and-odd-functions/)，$\sin(-x) = -\sin(x)$

- - -

[余弦函数](../cosine-function/) $f(x) = \cos(x)$ 将每个用弧度表示的角 $x$ 映射到相应的余弦值。其图像是一条周期波形，周期为 $2 \pi$，振幅为 1，在 -1 与 1 之间振荡。函数 $f(x) = \cos x$ 的定义域包含所有实数，但其值域为 $-1 \leq \cos(x) \leq 1$。

![余弦函数图像](/assets/trigonometry/svg/sine-and-cosine-4.zh.svg)

+ 定义域：$x \in \mathbb{R}$
+ 值域：$y \in \mathbb{R} : -1 \leq y \leq 1$
+ 周期性：关于 $x$ 的周期函数，周期为 $2\pi$
+ 奇偶性：[偶函数](../even-and-odd-functions/)，$\cos(-x) = \cos(x)$

> 有关[正弦函数](../sine-function/)和[余弦函数](../cosine-function/)的详细讨论，包括特殊值、极限、导数和积分，参见各自的词条。

## 双曲情形中的正弦与余弦

在圆的情形中，角 $\theta$ 的正弦与余弦由半径为 $1$ 的[单位圆](../unit-circle/)确定，圆周上的点给出坐标 $(\cos\theta, \sin\theta)$。双曲情形中也有一个密切相关的构造，其参考曲线为等轴[双曲线](../hyperbola/)：

$$
x^{2} - y^{2} = 1
$$

与用圆扇形确定角的做法相对应，这里用双曲扇形的面积确定参数 $x$。与该面积对应的双曲线上的点具有如下坐标：

$$
\begin{align}
\cosh(x) &= \frac{e^{x} + e^{-x}}{2} \\[6pt]
\sinh(x) &= \frac{e^{x} - e^{-x}}{2}
\end{align}
$$

这些表达式与圆的情形相对应，但源于不同的几何框架。正如 $\cos\theta$ 和 $\sin\theta$ 描述单位圆上点的位置如何随角变化，[双曲正弦与双曲余弦](../hyperbolic-sine-and-cosine/)（$\sinh(x), \cosh(x)$）描述双曲线上的点如何随参数变化。

## 复数的三角结构

正弦和余弦也是[复数的三角形式](../complex-numbers-trigonometric-form/)的基本构成要素。任意复数 $z = a + bi$ 均可写成：

$$z = r(\cos\theta + i\sin\theta)$$

其中 $r = \sqrt{a^2 + b^2}$ 是模，$\theta = \arctan(b/a)$ 是辐角。在这种表示中，正弦和余弦不再描述圆上的点，而是描述平面中[复数](../complex-numbers-introduction/)的方向与大小。

## 在积分中的应用

正弦和余弦的恒等式与性质并不局限于三角学。它们在[积分](../indefinite-integrals/)中成为不可或缺的工具，特别是在被称为[三角代换](../trigonometric-substitution-for-integrals/)的方法中，形如下式的表达式：

$$
\begin{align}
\sqrt{a^2 - x^2} \\[6pt]
\sqrt{x^2 + a^2} \\[6pt]
\sqrt{x^2 - a^2}
\end{align}
$$

将变量 $x$ 替换为适当的三角函数即可化简这些表达式。这一方法之所以有效，正是因为正弦和余弦的勾股恒等式会把根号下的表达式变成完全平方，从而完全消去根号。

## 正弦与余弦的正交性

除了在单位圆上的几何意义之外，正弦和余弦还具有更深层的分析性质，这一性质在考察整个周期时才会显现。在一个完整的对称区间上积分时，不同频率的三角函数彼此独立。这种现象称为正交性。更精确地说，对于任意整数 $n$ 和 $m$，在区间 $[-\pi, \pi]$ 上成立如下关系：

$$
\begin{aligned}
\int_{-\pi}^{\pi} \sin(nx)\cos(mx) \ dx &= 0 \\[6pt]
\int_{-\pi}^{\pi} \cos(nx)\cos(mx) \ dx &=
\begin{cases}
\pi & n = m \neq 0 \\
0 & n \ne m
\end{cases} \\[6pt]
\int_{-\pi}^{\pi} \sin(nx)\sin(mx) \ dx &=
\begin{cases}
\pi & n = m \\
0 & n \ne m
\end{cases}
\end{aligned}
$$

这些恒等式表达了这样的事实：不同频率的三角波在 $[-\pi,\pi]$ 上通过积分取平均时不会重叠。换言之，在一个完整周期上用不同频率进行检验时，一个频率的贡献会消失。这类似于欧几里得几何中[向量](../vectors/)的正交性：两个向量的点积为零时，它们相互正交。对 $[-\pi,\pi]$ 上的连续函数，相应的[内积](../inner-product-spaces/)为

$$
\langle f, g \rangle =
\int_{-\pi}^{\pi} f(x)g(x) \ dx
$$

当该积分为零时，就称这些函数在这个函数空间中正交。

> 这一性质表明正弦和余弦构成了一个结构上相互独立的振荡系统。正因为存在这种正交性，我们才能从周期函数中分离出各个谐波分量；这一思想在[傅里叶级数](../fourier-series/)理论中得到了系统发展。
