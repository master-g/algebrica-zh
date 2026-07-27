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
  source_hash: df378bb20023ffa091277fbb1953b5cf142f16c3b1d032e80ba677ed01af30ec
  translator: omp
  updated: "2026-07-24T15:30:48.065Z"
---
## 定义

正弦与余弦是两个最基本的三角函数。给定一个[有向角](../angles-and-angular-measure/) $\theta$，在[单位圆](../unit-circle/)上以点 $P$ 表示，$\theta$ 的正弦与余弦分别定义为 $P$ 的 $y$ 坐标和 $x$ 坐标。单位圆是以原点为圆心、半径为 $1$ 的[圆](../circumference/)，其[方程](../equations/)为：

$$
x^2+y^2=1
$$

有向角按逆时针方向旋转时取正值，按顺时针方向旋转时取负值。所有相差 $2\pi$ 的整数倍的角在单位圆上对应同一点，因而可表示为 $\theta+2k\pi$，其中 $k \in \mathbb{Z}$。

- - -

**定义 1。** 考虑有向角 $\theta$ 及其在[单位圆](../unit-circle/)上对应的点 $P$，并设 $Q$ 为 $P$ 在 $y$ 轴上的垂足。$\theta$ 的正弦定义为 $P$ 的 $y$ 坐标。在第一象限中，该值等于直角三角形 $OQP$ 的直角边 $\overline{OQ}$ 与斜边 $\overline{OP}$ 之比；由于 $\overline{OP} = 1$，可得：

$$
\sin(\theta) = \frac{\overline{OQ}}{\overline{OP}} = \frac{\overline{OQ}}{1} = y_P
$$

![单位圆上点的正弦几何意义](/assets/trigonometry/svg/sine-and-cosine-1.zh.svg)

**定义 2。** 同理，设 $R$ 为 $P$ 在 $x$ 轴上的垂足，则 $\theta$ 的余弦定义为 $P$ 的 $x$ 坐标。在第一象限中，该值等于直角三角形 $ORP$ 的直角边 $\overline{OR}$ 与斜边 $\overline{OP}$ 之比，故有：

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

**定义 3。** 对 $-1 \leq x \leq 1$，设 $A(x)$ 为一个圆扇形的面积，该扇形以水平轴、从原点到点 $(x, \sqrt{1-x^2})$ 的射线以及单位圆上从该点到 $(1, 0)$ 的弧为边界。面积 $A(x)$ 可分解为一个直角三角形项与位于圆上半部分下方的一个区域的面积之和。注意，当自变量为负时，三角形项为有向面积；自变量非负时，该分解即为两个普通面积之和，而分解公式在整个定义区间上均成立：

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

函数 $A$ 在 $[-1,1]$ 上连续且严格递减，并满足 $A(-1)=\pi/2$、$A(1)=0$。因此，对每个 $\theta/2\in[0,\pi/2]$，介值定理保证相应的 $\cos\theta\in[-1,1]$ 存在，严格单调性保证它唯一。[基本三角恒等式](../pythagorean-identity/) $\sin^2\theta + \cos^2\theta = 1$ 由构造直接成立。

- - -

将 $\sin$ 和 $\cos$ 从 $[0, \pi]$ 延拓到整个实数轴分两步进行。对 $\pi \leq \theta \leq 2\pi$，其值由对称反射得到：

$$
\begin{align}
\sin\theta &= -\sin(2\pi - \theta) \\[6pt]
\cos\theta &= \cos(2\pi - \theta)
\end{align}
$$

对任意实数 $\theta$，可唯一地写成 $\theta = 2k\pi + \theta'$，其中 $k \in \mathbb{Z}$ 且 $\theta' \in [0, 2\pi)$，并令：

$$
\begin{align}
\sin\theta &= \sin\theta' \\[6pt]
\cos\theta &= \cos\theta'
\end{align}
$$

此过程所定义的函数在整个 $\mathbb{R}$ 上有定义，且以 $2\pi$ 为周期，与前文给出的几何描述完全一致。

> 在此解析框架中，[导数](../derivatives/) $\sin'(\theta) = \cos\theta$ 和 $\cos'(\theta) = -\sin\theta$ 并非公设，而是作为定理推导得出。其推导方式是将 $\cos$ 视为函数 $B(x) = 2A(x)$ 的反函数，并应用[反函数](../inverse-function/)的求导法则。

## 基本三角恒等式

正弦和余弦的值满足一个称为[基本三角恒等式](../pythagorean-identity/)的性质：

$$ \sin^2\theta + \cos^2\theta = 1 $$

从几何上看，当终边不落在坐标轴上时，可将[勾股定理](../pythagorean-theorem/)应用于与单位圆相关的直角三角形 $OPR$：两条直角边的长度分别为 $|\sin\theta|$ 和 $|\cos\theta|$，斜边 $\overline{OP}$ 的长度为 $1$。终边落在坐标轴上的退化情形也可直接验证。

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

正弦与余弦的取值介于 $-1$ 与 $1$ 之间，因为单位圆上点 $P$ 的横、纵坐标绝对值都不超过半径 $1$。

将 $\theta$ 加上任意[整数](../integers/)倍的周角 $2\pi$，正弦与余弦的值保持不变，因为点 $P$ 会回到单位圆上的同一位置。由此可知，正弦与余弦是以 $2 \pi$ 为周期的[函数](../functions/)：

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

[正弦函数](../sine-function/) $f(x) = \sin(x)$ 把每个实数 $x$（视为以弧度表示的角）映射到对应的正弦值。其图像是一条周期波形，周期为 $2 \pi$，振幅为 1，在 $-1$ 与 $1$ 之间振荡。函数 $f(x) = \sin x$ 的[定义域](../determining-the-domain-of-a-function/)为全体实数，值域为 $[-1,1]$。

![正弦函数图像](/assets/trigonometry/svg/sine-and-cosine-3.zh.svg)

+ 定义域：$x \in \mathbb{R}$
+ 值域：$y \in [-1,1]$
+ 周期性：最小正周期为 $2 \pi$
+ 奇偶性：[奇函数](../even-and-odd-functions/)，$\sin(-x) = -\sin(x)$

- - -

[余弦函数](../cosine-function/) $f(x) = \cos(x)$ 把每个实数 $x$（视为以弧度表示的角）映射到对应的余弦值。其图像是一条周期波形，周期为 $2 \pi$，振幅为 1，在 $-1$ 与 $1$ 之间振荡。函数 $f(x) = \cos x$ 的定义域为全体实数，值域为 $[-1,1]$。

![余弦函数图像](/assets/trigonometry/svg/sine-and-cosine-4.zh.svg)

+ 定义域：$x \in \mathbb{R}$
+ 值域：$y \in [-1,1]$
+ 周期性：最小正周期为 $2\pi$
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

正弦和余弦也是[复数三角形式](../complex-numbers-trigonometric-form/)的基本构成要素。任意非零复数 $z = a + bi$ 均可写成：

$$z = r(\cos\theta + i\sin\theta)$$

其中 $r = \sqrt{a^2 + b^2}=|z|$ 为模，$\theta=\arg z$ 为复数的辐角；可用 $\operatorname{atan2}(b,a)$ 选取一个代表值，而所有辐角相差 $2\pi$ 的整数倍。在这种表示中，$r$ 给出[复数](../complex-numbers/)的大小，$\cos\theta$ 与 $\sin\theta$ 给出其方向分量。

## 在积分中的应用

正弦和余弦的恒等式与性质并不局限于三角学。它们在[积分](../indefinite-integrals/)中成为不可或缺的工具，特别是在被称为[三角代换](../trigonometric-substitution-for-integrals/)的方法中，形如下式的表达式：

$$
\begin{align}
\sqrt{a^2 - x^2} \\[6pt]
\sqrt{x^2 + a^2} \\[6pt]
\sqrt{x^2 - a^2}
\end{align}
$$

可通过将变量 $x$ 替换为适当的三角函数来化简。设 $a>0$：对上述三类根式，常分别取 $x=a\sin\theta$ 且 $\theta\in[-\pi/2,\pi/2]$、取 $x=a\tan\theta$ 且 $\theta\in(-\pi/2,\pi/2)$，或取 $x=a\sec\theta$ 并按积分区间选择使 $\tan\theta$ 符号固定的分支。三角函数之间的勾股型恒等式会把根号内化为平方，但开方后一般得到绝对值；上述区间或分支限制用于确定其符号，从而正确去除根号。

## 正弦与余弦的正交性

除了在单位圆上的几何意义之外，正弦和余弦还具有更深层的分析性质，这一性质在考察整个周期时才会显现。在 $[-\pi,\pi]$ 这样覆盖完整周期的对称区间上积分时，正弦与余弦函数族呈现出正交性。更精确地说，对于任意正整数 $n$ 和 $m$，在区间 $[-\pi, \pi]$ 上成立如下关系：

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

这些恒等式表明，正弦与余弦函数族中不同基函数的内积为零，因而彼此正交。这与欧几里得几何中[向量](../vectors/)的正交性相似：两个向量的点积为零时，它们相互正交。在函数空间中，相应的内积定义为

$$
\langle f, g \rangle =
\int_{-\pi}^{\pi} f(x)g(x) \ dx
$$

当该积分为零时，就称函数 $f$ 与 $g$ 正交。

> 借助这种正交性，可以通过内积从周期函数中提取各个谐波分量；这一方法在[傅里叶级数](../fourier-series/)理论中得到系统发展。
