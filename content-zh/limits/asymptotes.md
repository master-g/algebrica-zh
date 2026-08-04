---
title: 渐近线
title_en: Asymptotes
source: https://algebrica.org/asymptotes/
license: CC BY-NC 4.0
tags:
  - asymptotes
  - continuous-functions
  - limits
  - oblique-asymptote
  - rational-functions
translation:
  status: current
  source_hash: 3c4769eb1e66b66f61046e576e2560d7e331052e24f0a992e488093206bcb297
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 水平渐近线

函数的渐近线，是指其图像在变量趋于无穷或靠近间断点时可以任意接近的一条直线。[函数](../functions/)的渐近线定义完全依赖于[极限](../limits/)的概念。

设 $y = f(x)$ 是一个实值函数，定义在形如 $[a, +\infty)$、$(-\infty, b]$ 的区间上，或定义在整个 $ℝ$ 上。当下列任一条件成立时，方程为 $y = L$ 的直线就是 $f$ 的水平渐近线。这里的[方程](../equations/)为：

$$\lim_{x \to +\infty} f(x) = L \quad\lor\quad \lim_{x \to -\infty} f(x) = L$$

考虑函数：

$$y = \frac{x + 1}{x}$$

![图 1](/assets/limits/svg/asymptotes-1.zh.svg)

计算 $x \to \pm\infty$ 时的极限，可得：

$$\lim_{x \to \pm\infty} \frac{x + 1}{x} = \lim_{x \to \pm\infty} \left( 1 + \frac{1}{x} \right) = 1$$

因此，该函数具有水平渐近线 $y = 1$；当 $x \to +\infty$ 和 $x \to -\infty$ 时，图像的两支都会趋近这条直线。

## 垂直渐近线

设 $y = f(x)$ 是一个实值函数，定义在 $[a, b] \setminus \\{ x_0 \\}$ 上，其中 $x_0 \in [a, b]$。如果满足下列任一条件，方程为 $x = x_0$ 的直线就是 $f$ 的垂直渐近线：

$$\lim_{x \to x_0^-} f(x) = \pm \infty \quad\lor\quad \lim_{x \to x_0^+} f(x) = \pm \infty$$

一个标准例子是函数：

$$y = \frac{1}{x - 1}$$

![图 2](/assets/limits/svg/asymptotes-2.zh.svg)

这个有理表达式在 $x = 1$ 处无定义，因为此时分母为零。为了分析 $f(x)$ 在 $x = 1$ 附近的行为，我们计算单侧极限：

$$\lim_{x \to 1^-} \frac{1}{x - 1} = -\infty \qquad \lim_{x \to 1^+} \frac{1}{x - 1} = +\infty$$

函数从左侧趋近 $1$ 时发散到 $-\infty$，从右侧趋近时发散到 $+\infty$。因此，直线 $x = 1$ 是 $f$ 的垂直渐近线。

> [有理函数](../rational-functions/)通常会在分母为零且函数无定义的地方出现垂直渐近线。这些点属于不可去间断点，函数在此处不具备[连续性](../continuous-functions/)。

## 斜渐近线

设 $y = f(x)$ 是一个实值函数，定义在形如 $(-\infty, a]$ 或 $[a, +\infty)$ 的半无限区间上。如果满足：

$$
\begin{align}
\lim_{x \to -\infty} \big[ f(x) - (p x + q) \big] &= 0 \\[6pt]
\lim_{x \to +\infty} \big[ f(x) - (p x + q) \big] &= 0
\end{align}
$$

那么，方程为 $y = p x + q$ 的直线就是 $f$ 的斜渐近线。

当 $|x|$ 很大时，$f$ 的图像会趋近直线 $y = p x + q$。

- - -

与函数 $f(x)$ 相关的斜渐近线 $y = p x + q$，可以通过计算两个特定的极限确定。斜率 $p$ 由下式给出：

$$p = \lim_{x \to \pm\infty} \frac{f(x)}{x}$$

确定斜率后，纵向偏移量 $q$ 由下式得到：

$$q = \lim_{x \to \pm\infty} \big[ f(x) - p x \big]$$

如果这两个极限都存在且为有限值，那么直线 $y = p x + q$ 就是函数的斜渐近线。

- - -

考虑函数：

$$f(x) = \frac{x^2 + 1}{x}$$

![图 3](/assets/limits/svg/asymptotes-3.zh.svg)

为了判断这个函数在 $x \to \pm\infty$ 时是否具有斜渐近线，我们先计算 $f(x)/x$ 的极限：

$$\frac{f(x)}{x} = \frac{x^2 + 1}{x^2} = 1 + \frac{1}{x^2}$$

当 $x \to \pm\infty$ 时，项 $\dfrac{1}{x^2}$ 趋于零，因此：

$$\lim_{x \to \pm\infty} \frac{f(x)}{x} = 1$$

所以渐近线的斜率为 $p = 1$。接下来计算差值 $f(x) - p x$ 的极限：

$$f(x) - x = \frac{x^2 + 1}{x} - x = \frac{x^2 + 1 - x^2}{x} = \frac{1}{x}$$

由于当 $x \to \pm\infty$ 时 $\frac{1}{x} \to 0$，可得：

$$\lim_{x \to \pm\infty} [f(x) - x] = 0$$

因此，该函数具有斜渐近线，其方程为：

$$y = x$$

> 在这个例子中，斜渐近线经过原点，因此 $q = 0$，构成一种退化情形。一般来说，纵向偏移量 $q$ 不必为零。

## 示例 1

这里的纵向偏移量 $q$ 非零，与前面的情形不同。考虑函数：

$$f(x) = \frac{2 x^2 - x + 3}{2 x}$$

为了确定斜渐近线，先计算斜率 $p$：

$$
\begin{align}
p &= \lim_{x \to \pm\infty} \frac{f(x)}{x} \\[6pt]
  &= \lim_{x \to \pm\infty} \frac{2 x^2 - x + 3}{2 x^2} \\[6pt]
  &= 1
\end{align}
$$

接下来计算纵向偏移量 $q$：

$$
\begin{align}
q &= \lim_{x \to \pm\infty} \big( f(x) - x \big) \\[6pt]
  &= \lim_{x \to \pm\infty} \frac{2 x^2 - x + 3 - 2 x^2}{2 x} \\[6pt]
  &= \lim_{x \to \pm\infty} \frac{- x + 3}{2 x} \\[6pt]
  &= -\frac{1}{2}
\end{align}
$$

因此，斜渐近线的方程为：

$$y = x - \frac{1}{2}$$

## 渐近线的性质

由这些定义可以推出若干性质：

+ 并非每个函数都有渐近线。
+ 对于水平渐近线，可能出现多种情形：函数可能没有水平渐近线；当 $x \to +\infty$ 和 $x \to -\infty$ 时，可能趋近同一条水平直线；也可能在两个方向上分别趋近两条不同的水平直线。
+ 不同类型的渐近线可以共存。根据函数在间断点附近和无穷远处的行为，同一个函数可能同时具有水平、垂直和斜渐近线。
+ 垂直渐近线并不局限于有理函数：对数函数 $\ln x$ 在 $x = 0$ 处有一条垂直渐近线，而 $\tan x$ 有无穷多条垂直渐近线。
+ 图像可能穿过水平渐近线，而不只是趋近它；例如 $\frac{\sin x}{x}$ 在 $y = 0$ 附近会无穷多次穿过这条直线。
+ 对于[有理函数](../rational-functions/)，当分子次数恰比分母次数高一时，会出现斜渐近线。

渐近线条件 $f(x) - (p x + q) \to 0$ 可以用[小 o 记号](../little-o-notation/)写成 $f(x) = p x + q + o(1)$。[Landau 记号](../big-o-notation/)则可以更一般地比较函数的增长速率。
