---
title: 反余切函数
title_en: Arccotangent Function
source: https://algebrica.org/arccotangent-function/
license: CC BY-NC 4.0
tags:
  - arccotangent
  - derivatives
  - inverse-trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 2fdc0b066f15c094fc4f643941a5489bd166288584d4f14b9ecbd93815ebad5a
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 引言

条目[反正切与反余切](../arctangent-and-arccotangent/)在单位圆上定义了反余切，并列出它的常用值。

[余切](../cotangent-function/)以 $\pi$ 为周期，因此在整个定义域上不是单射，在那里不存在反函数。在开区间 $(0, \pi)$ 上，它连续、严格递减且映满 $\mathbb{R}$，从而是双射。它在这个区间上的[逆函数](../inverse-function/)就是反余切：

$$\mathrm{arccot} : \mathbb{R} \to (0, \pi)$$

[函数](../functions/) $f(x) = \mathrm{arccot}(x)$ 把实数 $x$ 映为 $(0, \pi)$ 中余切值等于 $x$ 的唯一角，角度以[弧度](../angles-and-angular-measure/)度量。反余切的图像是限制后的余切分支沿直线 $y = x$ 的反射。

![图 1](/assets/functions/svg/arccotangent-function-1.zh.svg)

下面的第一个恒等式对一切实数 $x$ 成立。对 $\theta \in \mathbb{R} \setminus \pi\mathbb{Z}$，当且仅当 $\theta$ 落在主值区间时，第二个恒等式成立：

$$
\begin{align}
\cot(\mathrm{arccot}(x)) &= x \quad \forall x \in \mathbb{R} \\[6pt]
\mathrm{arccot}(\cot(\theta)) &= \theta \quad \iff \quad \theta \in (0, \pi)
\end{align}
$$

当 $\theta$ 位于主值区间之外且余切在 $\theta$ 处有定义时，有 $\mathrm{arccot}(\cot(\theta)) = \theta - k\pi$，其中 $k$ 是使 $\theta - k\pi \in (0, \pi)$ 成立的唯一整数。对 $\theta = -\pi/4$，该整数为 $k = -1$，且 $\mathrm{arccot}(\cot(-\pi/4)) = 3\pi/4$。

> 另一种约定定义 $\mathrm{arccot}(x) = \arctan(1/x)$（$x \neq 0$），并令 $\mathrm{arccot}(0) = \pi/2$。这样得到的函数在 $\mathbb{R} \setminus \{0\}$ 上是奇函数，但在 $0$ 处存在跳跃间断点。本文采用的分支值域为 $(0, \pi)$，在 $\mathbb{R}$ 上连续。

## 性质

作为限制后余切的逆函数，反余切具有以下性质。

+ [定义域](../determining-the-domain-of-a-function/)：$x \in \mathbb{R}$
+ 值域：$0 < y < \pi$
+ 周期性：反余切不是周期函数。
+ 奇偶性：既非奇函数也非[偶函数](../even-and-odd-functions/)，且 $\mathrm{arccot}(-x) = \pi - \mathrm{arccot}(x)$
+ 单调性：在定义域上严格[递减](../increasing-and-decreasing-functions/)
+ 零点：无，因为函数在定义域的每一点都为正
+ [最大值点与最小值点](../maximum-minimum-and-inflection-points/)：无，因为两个界都取不到

关系式 $\mathrm{arccot}(-x) = \pi - \mathrm{arccot}(x)$ 表明图像以 $\left(0, \pi/2\right)$ 为对称中心。令 $x = 0$ 得 $\mathrm{arccot}(0) = \pi/2$。

反余切可以用[复对数](../complex-logarithm/)表示为闭式。设 $w = \mathrm{arccot}(x)$，$u = e^{2i\left(w - \pi/2\right)}$。利用[欧拉公式](../eulers-formula/)，方程 $\cot(w) = x$ 变为：

$$i\frac{u - 1}{u + 1} = x$$

解出 $u$ 得 $u = (1 - ix)/(1 + ix)$。复数 $u$ 的模为 $1$。由于 $2w - \pi$ 落在 $(-\pi, \pi)$ 内，它就是 $u$ 的主辐角，且 $\mathrm{Log}(u) = 2i\left(w - \pi/2\right)$。解出 $w$ 得：

$$\mathrm{arccot}(x) = \frac{\pi}{2} - \frac{i}{2}\mathrm{Log}\left(\frac{1 - ix}{1 + ix}\right)$$

这里 $\mathrm{Log}$ 是 $\mathbb{C} \setminus (-\infty, 0]$ 上的主值对数，由 $\mathrm{Log}(z) = \ln|z| + i\mathrm{Arg}(z)$ 定义，其中 $\mathrm{Arg}(z) \in (-\pi, \pi)$。对实数 $x$，该分式永远不会落在支割线上。

## 极限与水平渐近线

当自变量从右侧趋近 $0$ 时余切趋于 $+\infty$，从左侧趋近 $\pi$ 时趋于 $-\infty$。由反函数关系可得在无穷远处的相应极限：

$$\lim_{x \to +\infty} \mathrm{arccot}(x) = 0 \qquad \lim_{x \to -\infty} \mathrm{arccot}(x) = \pi$$

$x$ 轴与直线 $y = \pi$ 是[水平渐近线](../asymptotes/)。它们是限制后余切分支的竖直渐近线 $x = 0$ 与 $x = \pi$ 沿直线 $y = x$ 的反射。由于反余切递减且有界，其[下确界与上确界](../supremum-and-infimum/)分别为 $0$ 与 $\pi$。

在原点附近，图像可由直线 $y = \pi/2 - x$ 逼近。设 $y = \pi/2 - \mathrm{arccot}(x)$，则 $x = \tan(y)$，且当 $x \to 0$ 时 $y \to 0$。由于 $\left(\mathrm{arccot}(x) - \pi/2\right)/x = -y/\tan(y)$，由[重要极限](../remarkable-limits/) $\tan(y)/y \to 1$ 得：

$$\lim_{x \to 0} \frac{\mathrm{arccot}(x) - \frac{\pi}{2}}{x} = -1$$

对 $x > 0$，设 $t = 1/x$。由于 $\mathrm{arccot}(x) = \arctan(t)$，有 $x\mathrm{arccot}(x) = \arctan(t)/t$，且当 $x \to +\infty$ 时 $t \to 0^+$：

$$\lim_{x \to +\infty} x\mathrm{arccot}(x) = 1$$

因此当 $x \to +\infty$ 时 $\mathrm{arccot}(x) \sim 1/x$。由对称关系，当 $x \to -\infty$ 时 $\pi - \mathrm{arccot}(x) \sim -1/x$。

## 反余切函数的导数与积分

反余切在 $\mathbb{R}$ 上[连续](../continuous-functions/)。由于限制后的余切可导且导数处处不为零，由[逆函数的导数](../derivative-of-the-inverse-function/)公式，反余切在每一点都可导。取定实数 $x$，设 $y = \mathrm{arccot}(x)$，则 $\cot(y) = x$。对该恒等式求导得 $-\left(1 + \cot^2(y)\right)y' = 1$，代入 $\cot(y) = x$ 得：

$$\frac{d}{dx}\mathrm{arccot}(x) = -\frac{1}{1 + x^2}$$

角 $\pi/2 - \mathrm{arccot}(x)$ 落在 $(-\pi/2, \pi/2)$ 内，且其正切为 $x$。由[反正切](../arctangent-function/)的定义，$\arctan(x) + \mathrm{arccot}(x) = \pi/2$。由于 $\left|\mathrm{arccot}'(x)\right| = 1/(1 + x^2) \leq 1$，且等号仅在原点成立，[拉格朗日定理](../lagrange-theorem/)表明反余切是常数为 $1$ 的 Lipschitz 函数：

$$\left|\mathrm{arccot}(a) - \mathrm{arccot}(b)\right| \leq |a - b| \quad \forall a, b \in \mathbb{R}$$

Lipschitz 函数是[一致连续](../uniform-continuity/)的，因此反余切在 $\mathbb{R}$ 上一致连续。

定义 $F(x) := \int_x^{+\infty} 1/(1 + t^2) \ dt$。该[反常积分](../improper-integrals/)收敛。由[微积分基本定理](../fundamental-theorem-of-calculus/)，$F'(x) = -1/(1 + x^2) = \mathrm{arccot}'(x)$，所以 $F(x) - \mathrm{arccot}(x)$ 为常数。两函数在 $x \to +\infty$ 时都趋于 $0$，故该常数为零：

$$\mathrm{arccot}(x) = \int_x^{+\infty} \frac{dt}{1 + t^2}$$

$1/(1 + t^2)$ 在 $x$ 右侧的曲线下面积就是角 $\mathrm{arccot}(x)$。令 $x \to -\infty$ 取极限，得总面积为 $\pi$。

计算[不定积分](../indefinite-integrals/)时，在[分部积分](../integration-by-parts/)公式中令 $u = \mathrm{arccot}(x)$，$dv = dx$：

$$\int \mathrm{arccot}(x) \ dx = x\mathrm{arccot}(x) + \int \frac{x}{1 + x^2} \ dx$$

在剩余的积分中，分子是分母 $1 + x^2$ 的导数的一半。作[换元](../integration-by-substitution/) $s = 1 + x^2$，积分变为 $(1/2)\int 1/s \ ds$，于是原函数为：

$$\int \mathrm{arccot}(x) \ dx = x\mathrm{arccot}(x) + \frac{1}{2}\ln\left(1 + x^2\right) + C$$

由于 $\mathrm{arccot}(-x) + \mathrm{arccot}(x) = \pi$，它在每个区间 $[-a, a]$（$a > 0$）上的平均值都是 $\pi/2$。由该原函数可得如下[定积分](../definite-integrals/)：

$$\int_{-1}^{1} \mathrm{arccot}(x) \ dx = \pi \qquad \int_0^1 \mathrm{arccot}(x) \ dx = \frac{\pi}{4} + \frac{\ln 2}{2}$$

## 单调性与凸性

导数 $-1/(1 + x^2)$ 处处为负，因此反余切在 $\mathbb{R}$ 上严格递减，且没有驻点。函数有界但取不到界，因此没有最值。

二阶导数的符号决定[凸性与凹性](../convexity-and-concavity-of-functions/)：

$$\frac{d^2}{dx^2}\mathrm{arccot}(x) = \frac{2x}{\left(1 + x^2\right)^2}$$

由于分母为正，二阶导数与 $x$ 同号。图像在 $(-\infty, 0)$ 上凹，在 $(0, +\infty)$ 上凸。二阶导数在 $x = 0$ 处为零且在该处变号，因此 $\left(0, \pi/2\right)$ 是[拐点](../maximum-minimum-and-inflection-points/)。在 $x = 0$ 处，切线为 $y = \pi/2 - x$，且 $\left|\mathrm{arccot}'(0)\right| = 1$ 是 $\left|\mathrm{arccot}'\right|$ 在 $\mathbb{R}$ 上的最大值。

## 麦克劳林级数

对 $|t| < 1$，导数有公比为 $-t^2$ 的[等比级数](../geometric-series/)展开：

$$-\frac{1}{1 + t^2} = -\sum_{n=0}^{\infty} (-1)^n t^{2n}$$

在收敛区间内部，[幂级数](../power-series/)可以逐项积分。对 $|x| < 1$，从 $0$ 到 $x$ 积分并利用 $\mathrm{arccot}(0) = \pi/2$，得[麦克劳林级数](../taylor-series/)，其收敛半径为 $1$：

$$\mathrm{arccot}(x) = \frac{\pi}{2} - \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1} = \frac{\pi}{2} - x + \frac{x^3}{3} - \frac{x^5}{5} + \cdots$$

除常数项外，级数只含奇次幂，因为 $\mathrm{arccot}(x) - \pi/2$ 是奇函数。在 $x = 1$ 处，级数由[莱布尼茨判别法](../leibniz-criterion/)收敛。由阿贝尔定理，其和为 $\lim_{x \to 1^-} \mathrm{arccot}(x) = \pi/4$。

对 $x \geq 1$，由恒等式 $\mathrm{arccot}(x) = \arctan(1/x)$ 可得 $1/x$ 的幂级数：

$$\mathrm{arccot}(x) = \frac{1}{x} - \frac{1}{3x^3} + \frac{1}{5x^5} - \frac{1}{7x^7} + \cdots$$

对 $x \geq 1$，该级数收敛，且固定截断的交错级数误差界随 $x$ 增大而减小。对 $x \leq -1$，由关系 $\mathrm{arccot}(-x) = \pi - \mathrm{arccot}(x)$ 可得相应展开：

$$\mathrm{arccot}(x) = \pi + \frac{1}{x} - \frac{1}{3x^3} + \frac{1}{5x^5} - \frac{1}{7x^7} + \cdots \quad (x \leq -1)$$
