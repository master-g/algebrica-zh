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
  source_hash: fbd4c3be0ba37104e294e225a948328f41388fa5817c12bed2abb54168c04fa5
  translator: claude
  updated: "2026-10-14T00:00:00.000Z"
---
## 符号函数的引入

符号函数是一个不连续函数，它把每个[实数](../real-numbers/)对应到它的符号，而不考虑它的[绝对值](../absolute-value/)，并由下列关系[分段定义](../piecewise-functions/)：

$$ \tag{1}
y = \mathrm{sgn}(x) =
\begin{cases}
-1 & x < 0 \\[6pt]
0 & x = 0 \\[6pt]
1 & x > 0
\end{cases}
\quad \forall \ x \in \mathbb{R}
$$

例如，把 $(1)$ 应用于几个实数，得到：

$$
\begin{align}
\mathrm{sgn}(-7) &= -1 \\[6pt]
\mathrm{sgn}(0) &= 0 \\[6pt]
\mathrm{sgn}(4) &= 1
\end{align}
$$

$(1)$ 的图像由两条水平射线和一个孤立点组成。第一条射线位于直线 $y = -1$ 上，包含所有 $x < 0$ 的点；第二条位于直线 $y = 1$ 上，包含所有 $x > 0$ 的点。原点 $(0, 0)$ 是那个孤立点。

![图 1](/assets/functions/svg/sign-function-1.zh.svg)

从图像可以看出，符号函数是[奇函数](../even-and-odd-functions/)，因为对每个 $x \in \mathbb{R}$，它都满足恒等式：

$$
\mathrm{sgn}(-x) = -\mathrm{sgn}(x)
$$

## 性质与极限

符号函数的主要性质由 $(1)$ 得出，列举如下。

+ [定义域](../determining-the-domain-of-a-function/)：$\mathbb{R}$
+ [值域](../functions/)：$\{-1,\ 0,\ 1\}$
+ 函数是奇函数，因为 $\mathrm{sgn}(-x) = -\mathrm{sgn}(x)$。
+ 函数有唯一的零点 $x = 0$。
+ 函数在 $(-\infty, 0)$ 和 $(0, +\infty)$ 上都是常数，又因为它的取值依次为 $-1$、$0$ 和 $1$，所以它在 $\mathbb{R}$ 上[单调不减](../increasing-and-decreasing-functions/)。
+ 函数在 $x = 0$ 处有一个[间断点](../discontinuities-of-real-functions/)，在其他每一点都[连续](../continuous-functions/)。
+ 函数在 $x = 0$ 处不可导，但在其他每一点都可导，且导数为零。

符号函数是积性的，即乘积的符号等于各因子符号的乘积。形式上，对每个 $x, y \in \mathbb{R}$，下面的恒等式成立：

$$\mathrm{sgn}(xy) = \mathrm{sgn}(x)\mathrm{sgn}(y) \tag{2}$$

等式 $(2)$ 表达的是乘法的符号法则。若两个因子都不为零且同号，乘积为正，两边都等于 $1$。若两个因子异号，乘积为负，两边都等于 $-1$。若至少有一个因子为零，乘积也为零，两边都等于 $0$。至于极限，由于符号函数在 $x < 0$ 时等于 $-1$，在 $x > 0$ 时等于 $1$，它在原点处的[单侧极限](../limits/)为：

$$
\begin{align}
\lim_{x \to 0^-} \mathrm{sgn}(x) &= -1 \\[6pt]
\lim_{x \to 0^+} \mathrm{sgn}(x) &= 1
\end{align}
$$

如果函数在 $x \to 0$ 时有极限 $L$，那么两个单侧极限也都必须等于 $L$。由[极限的唯一性定理](../theorems-on-limits/)，就会同时有 $L = -1$ 和 $L = 1$，这是不可能的，所以下面的极限不存在：

$$\lim_{x \to 0} \mathrm{sgn}(x)$$

当 $x$ 趋于 $\pm \infty$ 时，符号函数保持常数：

$$
\begin{align}
\lim_{x \to -\infty} \mathrm{sgn}(x) &= -1 \\[6pt]
\lim_{x \to +\infty} \mathrm{sgn}(x) &= 1
\end{align}
$$

这些结果来自这样一个事实：对每个 $x < 0$ 有 $\mathrm{sgn}(x) = -1$，对每个 $x > 0$ 有 $\mathrm{sgn}(x) = 1$。因此，当 $x$ 沿任一半直线远离零时，函数值保持不变。

## 导数与积分

正如讨论性质时所见，符号函数在 $x \neq 0$ 时[导数](../derivatives/)为零：

$$
\frac{d}{dx} \mathrm{sgn}(x) = 0
$$

在 $x = 0$ 处导数不存在，因为函数在该点不连续。从左向右穿过原点时，函数从 $-1$ 变为 $1$，跳跃的大小为 $2$，即 $1 - (-1)$。在超出本文范围的更深入讨论中，分布理论推广了导数的概念，使这个跳跃可以用一个称为狄拉克 δ 函数的量 $\delta(x)$ 来表示。就本文而言，只需指出符号函数在分布意义下的导数为：

$$
\frac{d}{dx} \mathrm{sgn}(x) = 2\delta(x)
$$

在两个[区间](../intervals/) $(-\infty, 0)$ 和 $(0, +\infty)$ 的每一个上，符号函数的[不定积分](../indefinite-integrals/)为：

$$
\int \mathrm{sgn}(x) \ dx = |x| + c
$$

常数 $c$ 在两个区间上可以分别独立选取。这个结果与下面的事实一致：在 $|x|$ 可导的每一点，$|x|$ 的导数都等于 $\mathrm{sgn}(x)$。

## 与绝对值函数和赫维赛德阶跃函数的关系

符号函数与[绝对值](../absolute-value-function/)之间有直接的代数关系。对每个 $x \neq 0$，下面的恒等式成立：

$$
\mathrm{sgn}(x) = \frac{x}{|x|} \tag{3}
$$

等式 $(3)$ 与 $(1)$ 中符号函数的定义一致。事实上，当 $x > 0$ 时，比值等于 $1$；当 $x < 0$ 时，比值为 $-1$；在 $x = 0$ 处，比值无定义，按约定取 $\mathrm{sgn}(0) = 0$。由等式 $(3)$ 还可以推出，绝对值可以通过下面的关系用符号函数表示。该关系对每个 $x \in \mathbb{R}$ 都成立，包括 $x = 0$，此时两边都为零：

$$
|x| = x \cdot \mathrm{sgn}(x) \tag{4}
$$

由 $(4)$ 还可以得到另外两个恒等式。第一个把每个实数表示为它的绝对值与符号的乘积：

$$
x = |x| \cdot \mathrm{sgn}(x) \tag{5}
$$

第二个利用对每个 $x \in \mathbb{R}$ 都成立的等式 $|x| = \sqrt{x^2}$，给出 $x \neq 0$ 时符号函数的另一种表达式：

$$
\mathrm{sgn}(x) = \frac{x}{\sqrt{x^2}} \tag{6}
$$
- - -

另一个基本的代数关系把符号函数与[赫维赛德阶跃函数](../heaviside-function/) $H(x)$ 联系起来，后者定义为：

$$ \tag{7}
H(x) =
\begin{cases}
0 & x < 0 \\[6pt]
\dfrac{1}{2} & x = 0 \\[8pt]
1 & x > 0
\end{cases}
$$

$(7)$ 的图像如下图所示，可以看出它与符号函数的图像相似：

![图 2](/assets/functions/svg/sign-function-2.zh.svg)

事实上，这两个函数通过下面的[变换](../transformations-of-functions/)相联系：

$$
\mathrm{sgn}(x) = 2H(x) - 1 \tag{8}
$$

等价地，由 $(8)$ 可知，赫维赛德函数可以通过下面的变换从符号函数得到：

$$
H(x) = \frac{1 + \mathrm{sgn}(x)}{2}
$$
