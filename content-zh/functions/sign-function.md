---
title: 符号函数
title_en: Sign Function
source: https://algebrica.org/sign-function/
license: CC BY-NC 4.0
tags:
  - absolute-value
  - functions
  - heaviside-function
  - odd-function
  - sign-function
translation:
  status: current
  source_hash: 9a9b6a14d0ba2a6d262152fed955ab53f1ed1665d8c4b744636e4d63a971dc5e
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 符号函数的引入

符号函数把每个实数对应到它的符号，而忽略其大小。函数定义如下：

$$
\mathrm{sgn}(x) =
\begin{cases}
-1 & x < 0 \\[6pt]
0 & x = 0 \\[6pt]
1 & x > 0
\end{cases}
\quad \forall \ x \in \mathbb{R}
$$

应用这个定义可得：

$$
\mathrm{sgn}(-7) = -1 \qquad \mathrm{sgn}(0) = 0 \qquad \mathrm{sgn}(4) = 1
$$

- - -

函数 $y = \mathrm{sgn}(x)$ 的图像由两条水平射线和一个孤立点组成。$y = -1$ 上的射线覆盖所有 $x < 0$，$y = 1$ 上的射线覆盖所有 $x > 0$，原点 $(0, 0)$ 处的孤立点位于 $y = 0$ 上。两条射线趋近于 y 轴，但不会与之相交。

![图 1](/assets/functions/svg/sign-function-1.zh.svg)

符号函数是[奇函数](../even-and-odd-functions/)，因为它满足恒等式：

$$
\mathrm{sgn}(-x) = -\mathrm{sgn}(x) \quad \forall \ x \in \mathbb{R}
$$

符号函数是最简单的不连续函数例子之一。

## 性质

+ [定义域](../determining-the-domain-of-a-function/)：$\mathbb{R}$。
+ 值域：$\{-1,\ 0,\ 1\}$。
+ 函数是[奇函数](../even-and-odd-functions/)，因为 $\mathrm{sgn}(-x) = -\mathrm{sgn}(x)$。
+ 函数恰有一个根 $x = 0$，因为只有当 $x = 0$ 时 $\mathrm{sgn}(x) = 0$。
+ 函数在 $(-\infty, 0)$ 和 $(0, +\infty)$ 上都是常数，因此在两段上都不会递减，从而在 $\mathbb{R}$ 上[非递减](../increasing-and-decreasing-functions/)。
+ 函数在 $x = 0$ 处有[跳跃间断](../discontinuities-of-real-functions/)，在其他地方[连续](../continuous-functions/)。
+ 函数在 $x = 0$ 处不可导；在其他每一点都可导，且[导数](../derivatives/)为零。
+ 函数具有乘法性，因为对所有 $x, y \in \mathbb{R}$ 都有 $\mathrm{sgn}(xy) = \mathrm{sgn}(x)\mathrm{sgn}(y)$。限制在 $\mathbb{R} \setminus \{0\}$ 上时，它是从乘法群 $(\mathbb{R}^*, \cdot)$ 到 $\{-1, 1\}$ 上的满同态。

原点处的两个单侧极限为：

$$
\begin{align}
\lim_{x \to 0^-} \mathrm{sgn}(x) &= -1 \\[6pt]
\lim_{x \to 0^+} \mathrm{sgn}(x) &= 1
\end{align}
$$

由于两个单侧极限不同，双侧极限不存在：

$$\lim_{x \to 0} \mathrm{sgn}(x)$$

## 无穷远处的极限

当 $x$ 沿任一方向远离原点时，符号函数保持常值：

$$
\begin{align}
\lim_{x \to -\infty} \mathrm{sgn}(x) &= -1 \\[6pt]
\lim_{x \to +\infty} \mathrm{sgn}(x) &= 1
\end{align}
$$

这是因为对所有 $x < 0$ 都有 $\mathrm{sgn}(x) = -1$，对所有 $x > 0$ 都有 $\mathrm{sgn}(x) = 1$；因此，当 $x$ 进一步远离零时，函数值不会改变。

## 导数与积分

在符号函数为常数的两条开半轴上，它的[导数](../derivatives/)为零：

$$
\frac{d}{dx} \mathrm{sgn}(x) = 0 \quad x \neq 0
$$

在 $x = 0$ 处，由于函数在那里不连续，导数不存在。然而，在分布的意义下，符号函数的导数为：

$$
\frac{d}{dx} \mathrm{sgn}(x) = 2\delta(x)
$$

$\delta(x)$ 是狄拉克 δ，是一种广义函数，除了原点外处处为零，并且在整个实轴上的总积分等于一。

> 狄拉克 δ 可以想象为集中在一个点上的单位面积尖峰。

这个分布恒等式记录了原点处幅度为 $2$ 的跳跃，因为：

$$
\begin{align}
\lim_{x \to 0^-} \mathrm{sgn}(x) &= -1 \\[6pt]
\lim_{x \to 0^+} \mathrm{sgn}(x) &= 1
\end{align}
$$

从 $-1$ 跳到 $1$ 产生了因子 $2$，这就是狄拉克 δ 前的系数来源。

- - -

符号函数的[不定积分](../indefinite-integrals/)在避开原点计算时，得到[绝对值](../absolute-value-function/)：

$$
\int \mathrm{sgn}(x) \ dx = |x| + c
$$

这与 $|x|$ 的导数在其可导的每一点都等于 $\mathrm{sgn}(x)$ 一致。

## 与绝对值函数的关系

符号函数与[绝对值](../absolute-value-function/)之间有直接的代数关系。对于任意 $x \neq 0$，恒等式成立：

$$
\mathrm{sgn}(x) = \frac{x}{|x|}
$$

这与定义一致：当 $x > 0$ 时，$x/|x| = x/x = 1$；当 $x < 0$ 时，$x/|x| = x/(-x) = -1$。该公式在 $x = 0$ 处无定义，因此按约定单独赋值 $\mathrm{sgn}(0) = 0$。

反过来，绝对值可以用符号函数写成：

$$
|x| = x \cdot \mathrm{sgn}(x)
$$

这个恒等式对所有 $x \in \mathbb{R}$ 成立，包括 $x = 0$ 的情形，此时等式两边都为零。

- - -

由这一关系还可得到两个恒等式。第一个把任意实数写成其大小与符号的乘积：

$$
x = |x| \cdot \mathrm{sgn}(x)
$$

第二个使用对所有 $x \in \mathbb{R}$ 都成立的等式 $|x| = \sqrt{x^2}$，给出 $x \neq 0$ 时符号函数的另一种表示：

$$
\mathrm{sgn}(x) = \frac{x}{\sqrt{x^2}}
$$

## 与 Heaviside 阶跃函数的关系

[Heaviside 阶跃函数](../heaviside-function/) $H(x)$ 定义为：

$$
H(x) =
\begin{cases}
0 & x < 0 \\[6pt]
\dfrac{1}{2} & x = 0 \\[8pt]
1 & x > 0
\end{cases}
$$

![图 2](/assets/functions/svg/sign-function-2.zh.svg)

符号函数与 Heaviside 阶跃函数之间通过线性变换相关联：

$$
\mathrm{sgn}(x) = 2H(x) - 1
$$

等价地：

$$
H(x) = \frac{1 + \mathrm{sgn}(x)}{2}
$$

Heaviside 函数把 $(-\infty, 0)$ 映射到 $0$，把 $(0, +\infty)$ 映射到 $1$，因此可以看作符号函数平移并缩放后的形式。
