---
title: 绝对值函数
title_en: Absolute Value Function
source: https://algebrica.org/absolute-value-function/
license: CC BY-NC 4.0
tags:
  - absolute-value
  - continuity
  - corner-point
  - even-function
  - graph-transformation
  - non-differentiability
  - sign-function
translation:
  status: current
  source_hash: 797fc9bbefa0edfc73d5fdc1d3be65e71ce260beec9cf494cae52d17485205be
  translator: claude
  updated: "2026-10-14T00:00:00.000Z"
---
## 定义

在讨论绝对值函数之前，先简要回顾[实数](../real-numbers/) $x$ 的[绝对值](../absolute-value/)这一概念。它记作 $|x|$，按 $x$ 的符号定义如下：

$$ \tag{1}
|x| =
\begin{cases}
+x & x \geq 0 \\[6pt]
-x & x < 0
\end{cases}
\quad \forall \ x \in \mathbb{R}
$$

换句话说，实数 $x$ 的绝对值表示它在实数轴上到零的距离，因此总是非负的。例如在下图中，点 $-1$ 和 $2$ 到零的距离分别为 $1$ 个单位和 $2$ 个单位，所以 $|-1| = 1$，$|2| = 2$。

![图 1](/assets/numbers/svg/real-numbers-1.zh.svg)

更一般地，两点 $x$ 与 $a$ 之间的距离由 $|x - a|$ 给出，并且下面的等式成立：

$$|x-a| = |a-x| \tag{2}$$

由 $(2)$，因为 $a - x = -(x - a)$，所以还有：

$$|a - x| = |-(x - a)| = |x - a|$$


有了这些准备，就可以引入绝对值函数。它把每个实数 $x$ 对应到它的绝对值 $|x|$，并与 $(1)$ 一致，[分段](../piecewise-functions/)定义为：

$$ \tag{3}
y = |x| =
\begin{cases}
+x & x \geq 0 \\[6pt]
-x & x < 0
\end{cases}
$$

![图 2](/assets/numbers/svg/absolute-value-1.zh.svg)

它的图像由两条在[笛卡尔坐标平面](../the-cartesian-coordinate-plane/)原点相接的半直线组成，并关于纵轴对称，因此函数是[偶函数](../even-and-odd-functions/)，满足恒等式：

$$|{-x}| = |x| \quad \forall \ x \in \mathbb{R}$$

## 性质

由 $(3)$ 可以得到绝对值函数的主要性质，列举如下。

+ [定义域](../determining-the-domain-of-a-function/)：$\mathbb{R}$
+ [值域](../functions/)：$\mathbb{R}^+_0$
+ 就[单调性](../increasing-and-decreasing-functions/)而言，函数在 $(-\infty, 0]$ 上递减，在 $[0, +\infty)$ 上递增。
+ 函数是偶函数，因为 $|{-x}| = |x|$。
+ 函数在整个实数轴 $\mathbb{R}$ 上[连续](../continuous-functions/)。
+ 函数除 $x = 0$ 外在每一点都可导，该点是一个[尖点](../points-of-non-differentiability/)。
+ 函数在 $x = 0$ 处取得[绝对最小值](../maximum-minimum-and-inflection-points/)，此时 $|x| = 0$，且没有最大值。
+ 在定义域端点处的极限为：

$$
\begin{align}
\lim_{x \to -\infty} |x| &= +\infty \\[6pt]
\lim_{x \to +\infty} |x| &= +\infty
\end{align}
$$

函数的绝对值的图像可以通过一种[变换](../transformations-of-functions/)得到：把原图像中位于 $x$ 轴下方的部分关于该轴翻折。例如，考虑由下面方程定义的[抛物线](../parabola/)的图像：

$$y = x^2 - 1 \tag{4}$$

![图 3](/assets/functions/svg/absolute-value-function-1.zh.svg)

通过[研究函数的符号](../sign-analysis-in-inequalities/)可以验证，$(4)$ 在 $-1$ 与 $1$ 之间的区间内为负，也就是下面的[不等式](../quadratic-inequalities/)成立时：

$$x^2 - 1 < 0$$
现在对 $(4)$ 施加一个变换，使下式成立：

$$f(x) = |x^2 - 1|$$

要画出这个函数，保留图像中函数值大于或等于零的部分不变，而把负值部分，也就是恰好位于 $-1$ 与 $1$ 之间区间内的部分翻折，得到：

![图 4](/assets/functions/svg/absolute-value-function-2.zh.svg)


## 绝对值函数的极限、导数与积分

下面考察绝对值函数在计算[极限](../limits/)以及微积分中常用的几个方面。先看一个涉及绝对值函数的标准极限：

$$\lim_{x \to 0} \frac{|x|}{x} \tag{5}$$

极限存在要求左极限与右极限相等。但在这里，两个单侧极限不同，所以极限不存在：

$$
\begin{align}
\lim_{x \to 0^-} \frac{|x|}{x} &= -1 \\[6pt]
\lim_{x \to 0^+} \frac{|x|}{x} &= 1
\end{align}
$$

因此，由于[差商](../difference-quotient/)的两个单侧极限不同，$|x|$ 在 $x = 0$ 处不可导。至于[导数](../derivatives/)，对绝对值函数的每个分支分别求导，就得到其导数的分段表达式：

$$
\frac{d}{dx} |x| =
\begin{cases}
1 & x > 0 \\[6pt]
-1 & x < 0
\end{cases}
$$

前面已经看到 $x=0$ 处的极限不存在，因此导数在 $x = 0$ 处不存在，因为函数在该点有一个尖点。绝对值函数的[不定积分](../indefinite-integrals/)为：

$$\int |x| \ dx = \frac{x^2 \cdot \mathrm{sgn}(x)}{2} + c \tag{6}$$

$(6)$ 中出现的[符号函数](../sign-function/)使原函数的两个分支可以合写成一个表达式，它的定义为：

$$
\mathrm{sgn}(x) =
\begin{cases}
-1 & x < 0 \\[6pt]
0 & x = 0 \\[6pt]
1 & x > 0
\end{cases}
$$
