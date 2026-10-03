---
title: 极限
title_en: Limits
source: https://algebrica.org/limits/
license: CC BY-NC 4.0
tags:
  - asymptotes
  - continuous-functions
  - epsilon-delta-definition
  - indeterminate-forms
  - limits
  - neighbourhood
translation:
  status: current
  source_hash: 05a315c82b91cb74814da64b4b7c05bbac4b0f512d13108892c17e5343e63ff1
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 引言与定义

极限是数学分析的基础，因为它使我们能够研究当自变量的取值任意接近某个给定值时函数的行为。在给出定义之前，考虑一个[函数](../functions/) $f(x)$，以及由所有充分接近 $x$ 的点组成的[区间](../intervals/)，它称为 $x$ 的[邻域](../topology-of-the-real-line/)。更具体地说，给定[实数轴](../real-numbers/)上的一点 $x$ 以及两点 $x - \delta$ 和 $x + \delta$，我们把 $x$ 的对称邻域定义为开区间 $(x - \delta, x + \delta)$，其中 $\delta > 0$。


![图 1](/assets/limits/svg/limits-1.zh.svg)

邻域使我们能够通过描述 $f(x)$ 在给定点附近的局部行为来定义极限。如图所示，邻域越小，区间 $(x - \delta, x + \delta)$ 就越窄，其中的点也就越接近 $x$。

为了给出极限的严格定义，再次考虑函数 $f(x)$，我们希望研究它在 $x$ 趋近于点 $x_0$ 时的行为。我们说，当 $x$ 趋于 $x_0$ 时，函数 $f(x)$ 以 $\ell$ 为极限，记作：

$$\lim_{x \to x_0} f(x) = \ell \tag{1}$$

式 (1) 表明，只要取 $x$ 充分接近 $x_0$ 且不同于 $x_0$，就可以使 $f(x)$ 的值任意接近 $\ell$。为此，我们固定一个容差 $\varepsilon > 0$，它规定我们希望 $f(x)$ 的值与 $\ell$ 接近到什么程度。式 (1) 要求，对 $\varepsilon > 0$ 的每一种选取，都存在一个数 $\delta > 0$，它能保证[定义域](../determining-the-domain-of-a-function/)中所有满足下列条件的点 $x$ 都达到这种接近程度：

$$0 < |x - x_0| < \delta\tag{3}$$

(3) 中的不等式 $|x - x_0| < \delta$ 要求 $x$ 与 $x_0$ 的距离小于 $\delta$，而 $0 < |x - x_0|$ 则排除了点 $x = x_0$。$\delta$ 的选取必须保证 $f(x)$ 与 $\ell$ 之间的距离小于容差，所以下面的不等式必须成立：

$$|f(x) - \ell| < \varepsilon\tag{4}$$

下面的例子说明如何根据 $\varepsilon$ 选取 $\delta$。取函数 $f(x) = 2x$，并计算它在 $x$ 趋于 $3$ 时的极限，该极限为 $6$。可以写出：

$$|f(x) - 6| = |2x - 6| = 2|x - 3| \tag{5}$$

如果希望 $f(x)$ 与 $6$ 的距离在 $0.01$ 以内，只需要求 $x$ 与 $3$ 的距离在 $0.005$ 以内，因为 $(5)$ 表明距离 $|f(x) - 6|$ 是距离 $|x - 3|$ 的两倍。事实上，如果 $|x - 3| < 0.005$，就得到：

$$|f(x) - 6| = 2|x - 3| < 2 \cdot 0.005 = 0.01$$

这样，我们选取了 $\varepsilon = 0.01$，并找到了 $\delta = 0.005$。在这个例子中，要求 $f(x)$ 与 $6$ 的距离在 $0.01$ 以内，等价于要求它的值落在 $6$ 的邻域 $(5.99, 6.01)$ 内。减小容差，就可以使这样的邻域任意小。我们已经看到，对区间 $(2.995, 3.005)$（它是 $3$ 的一个邻域）中除 $x = 3$ 以外的所有 $x$，条件都成立，这正是 $(3)$ 所要求的。对每个 $\varepsilon > 0$，取 $\delta = \varepsilon/2$ 就能保证 (4)，从而确认极限为 $6$。

- - -

我们已经看到，$(1)$ 适用于 $x$ 趋于 $x_0$ 的情形，但同样的定义也可以用于 $x$ 从右侧或从左侧趋近 $x_0$ 的情形。它们分别称为右极限和左极限，记法如下：

$$ \tag{6}
\begin{align}
&\lim_{x \to x_0^+} f(x) \\[6pt]
&\lim_{x \to x_0^-} f(x)
\end{align}
$$

在第一种情形中，$x$ 通过接近且大于 $x_0$ 的值趋近 $x_0$，而在第二种情形中，它通过较小的值趋近。当这两个极限存在且有限，但取不同的值 $\ell_1 \neq \ell_2$ 时，有：

$$ \tag{7}
\begin{cases}
\lim\limits_{x \to x_0^-} f(x) = \ell_1 \in \mathbb{R} \\[6pt]
\lim\limits_{x \to x_0^+} f(x) = \ell_2 \in \mathbb{R}
\end{cases} \implies \nexists \lim\limits_{x \to x_0} f(x)
$$

在这种情形下，存在两个不同的单侧极限，但不限制趋近方向时，$x$ 趋于 $x_0$ 的极限不存在。

## 极限的唯一性定理

命题 (7) 由[极限的唯一性定理](../theorems-on-limits/)得出，该定理指出，函数的极限如果存在，就是唯一的。例如，如果 $x \to x_0$ 时的极限为 $\ell$，那么右极限和左极限也必须等于 $\ell$。我们用反证法证明这个定理，从下列假设出发：

+ $x_0$ 是定义域的[聚点](../topology-of-the-real-line/)，所以 $x_0$ 的每个邻域都至少包含定义域中一个不同于 $x_0$ 的点。
+ 存在两个极限 $\ell_1$ 和 $\ell_2$，且 $\ell_1 \lt \ell_2$。

我们选取下面的容差：

$$\varepsilon = \frac{\ell_2 - \ell_1}{2} > 0$$

由于假设函数同时趋于 $\ell_1$ 和 $\ell_2$，条件 $(3)$ 给出一个数 $\delta_1 > 0$，使得对定义域中所有满足 $0 < |x - x_0| < \delta_1$ 的 $x$，都有 $|f(x) - \ell_1| < \varepsilon$，如 $(4)$ 所示。这就要求 $f(x)$ 小于 $\ell_1 + \varepsilon$，即两个值的中点。

同样的论证适用于极限 $\ell_2$。此时有一个距离 $\delta_2 > 0$，使得 $0 < |x - x_0| < \delta_2$ 蕴含 $|f(x) - \ell_2| < \varepsilon$。这就要求 $f(x)$ 大于 $\ell_2 - \varepsilon$，而它是同一个中点。

现在在定义域中选取一点 $x$，它与 $x_0$ 的距离为正，并满足下列条件：

$$0 < |x - x_0| < \min\{\delta_1, \delta_2\}$$

由 $(4)$，对这个 $x$ 下面两个不等式必须同时成立：

$$
\begin{align}
f(x) &< \ell_1 + \varepsilon = \frac{\ell_1 + \ell_2}{2} \\[6pt]
f(x) &> \ell_2 - \varepsilon = \frac{\ell_1 + \ell_2}{2}
\end{align}
$$

这就导致矛盾。例如，如果 $\ell_1 = 2$、$\ell_2 = 4$，所选的容差为 $\varepsilon = (4 - 2)/2 = 1$。两个条件变为：

$$
\begin{align}
f(x) &< 2 + 1 = 3 \\[6pt]
f(x) &> 4 - 1 = 3
\end{align}
$$

于是同一个值 $f(x)$ 必须既小于 $3$ 又大于 $3$，这是不可能的。因此，两个极限 $\ell_1$ 和 $\ell_2$ 不同的假设不可能成立，这就在有限的情形下证明了定理。

接下来，假设同时存在一个有限极限 $\ell$ 和一个无穷极限。如果 $f(x)$ 趋于 $\ell$，取 $\varepsilon = 1$，就对定义域中每个充分接近 $x_0$ 且不同于 $x_0$ 的 $x$ 得到下面的不等式：

$$\ell - 1 < f(x) < \ell + 1 \tag{8}$$

如果函数同时还趋于 $\pm\infty$，那么在充分接近 $x_0$ 处就会有 $f(x) > \ell + 1$ 或 $f(x) < \ell - 1$，这与 $(8)$ 矛盾。

最后，假设两个极限分别是 $+\infty$ 和 $-\infty$。极限为 $+ \infty$ 要求当 $x$ 充分接近 $x_0$ 且不同于 $x_0$ 时 $f(x) > 1$，而极限为 $- \infty$ 则要求 $f(x) < -1$。这同样导致矛盾。

因此，以上各种情形表明，如果函数在 $x \to x_0$ 时的极限存在，无论有限还是无穷，它的值都是唯一的，正如定理所断言的那样。

## 渐近线

一般来说，极限中的变量 $x$ 可以趋近实数 $x_0$ 或 $\pm \infty$，而极限的值可以是有限的或无穷的。当 $x$ 趋近有限点时，可能的情形是：

$$
\begin{align}
\lim_{x \to x_0} f(x) &= \ell \\[6pt]
\lim_{x \to x_0} f(x) &= \pm \infty
\end{align}
$$

当 $x$ 趋于 $\pm \infty$ 时，可能的情形是：

$$
\begin{align}
\lim_{x \to \pm \infty} f(x) &= \ell \\[6pt]
\lim_{x \to \pm \infty} f(x) &= \pm \infty
\end{align}
$$


当 $x$ 趋近 $x_0$ 时 $f(x)$ 趋于 $\pm \infty$，函数在该点附近的行为就确定了一条方程为 $x = x_0$ 的竖直渐近线。渐近线是一条直线：当 $x$ 或 $f(x)$ 无界地增大或减小时，函数图像趋近于它。随着图像在[坐标平面](../the-cartesian-coordinate-plane/)上向无穷远处延伸，曲线与渐近线之间的距离趋于零。


![图 2](/assets/limits/svg/limits-2.zh.svg)


有时，如图中的例子所示，右极限和左极限以相反的符号发散：

$$
\begin{align}
\lim_{x \to x_0^+} f(x) &= -\infty \\[6pt]
\lim_{x \to x_0^-} f(x) &= +\infty
\end{align}
$$


当 $x$ 趋于 $+\infty$ 或 $-\infty$ 时 $f(x)$ 趋于有限值 $L$，直线 $y = L$ 就是函数在相应方向上的水平渐近线。


![图 3](/assets/limits/svg/limits-3.zh.svg)


当两个无穷远处的极限都等于 $L$ 时，同一条直线在两个方向上都是水平渐近线：

$$
\begin{align}
\lim_{x \to +\infty} f(x) &= L \\[6pt]
\lim_{x \to -\infty} f(x) &= L
\end{align}
$$

斜渐近线也可能出现。它们是方程为 $y = mx + q$ 的直线，其中 $m \neq 0$，使得当 $x \to +\infty$ 或 $x \to -\infty$ 时图像与直线之间的距离趋于零。专门的词条系统介绍了[水平、竖直和斜渐近线](../asymptotes/)。

## 性质

极限满足若干[代数性质](../algebra-of-limits/)，专门的词条结合例题对它们作了详细讨论。这里概述基本运算的性质，它们在解题时可以简化计算。

常数与函数之积的极限，等于该常数与函数极限之积：

$$\lim_{x \to x_0} c f(x)  = c \lim_{x \to x_0} f(x) = c \cdot \ell \tag{9}$$

两个函数之和的极限，等于它们的极限之和：

$$\lim_{x \to x_0} \big( f(x) + g(x) \big) = \lim_{x \to x_0} f(x) + \lim_{x \to x_0} g(x) = \ell_1 + \ell_2\tag{10}$$

性质 $(10)$ 在处理[多项式](../polynomials/)、[正弦和余弦](../sine-and-cosine/)等三角函数，以及其他极限可以化为两个极限之和的常见初等表达式时特别有用。

另一条性质涉及两个函数之积的极限，它等于它们的极限之积：

$$\lim\limits_{x \to x_0} \big( f(x) g(x) \big) = \lim\limits_{x \to x_0} f(x) \cdot \lim\limits_{x \to x_0} g(x) = \ell_1 \cdot \ell_2 \tag{11}$$

最后，两个函数之商的极限，等于它们的极限之商：

$$\lim\limits_{x \to x_0} \left( \frac{f(x)}{g(x)} \right) = \frac{\lim\limits_{x \to x_0} f(x)}{\lim\limits_{x \to x_0} g(x)} = \frac{\ell_1}{\ell_2} \tag{12}$$

上述所有性质在所涉及的极限存在且有限时成立，对于商的情形，还要求分母的极限不为零。不过在实际计算中，把函数换成它们的极限，可能得到无法确定极限值的表达式，例如下面这些情形：

$$\frac{0}{0} \qquad \frac{\infty}{\infty} \qquad \infty - \infty$$

这些表达式称为[未定式](../indeterminate-forms/)。处理它们需要专门的技巧，例如因式分解、渐近比较、[洛必达法则](../hopital-rule/)、[泰勒展开](../taylor-series/)和[小 o 记号](../little-o-notation/)。最著名的例子之一是下面的极限：

$$\lim_{x \to 0} \frac{\sin x}{x} \tag{13}$$

把 $x = 0$ 直接代入 $(13)$ 中的表达式，得到未定式 $0/0$，它没有定义，而且由于分母的极限为零，不能应用极限的商法则。$(13)$ 中的极限是一个[重要极限](../remarkable-limits/)，其值为 $1$。未定式和重要极限分别在两个单独的词条中讨论。

## 初等函数的极限

在本站关于函数的部分，每一类函数都有一节专门讨论它的基本极限和重要极限。最常见的极限概述如下：

对于常数函数 $f(x) = k$（$k \in \mathbb{R}$），有：

$$
\begin{align}
\lim_{x \to -\infty} k &= k \\[6pt]
\lim_{x \to +\infty} k &= k
\end{align}
$$

对于恒等函数 $f(x) = x$，有：

$$
\begin{align}
\lim_{x \to -\infty} x &= -\infty \\[6pt]
\lim_{x \to +\infty} x &= +\infty
\end{align}
$$

对于底数 $a > 1$ 的[指数函数](../exponential-function/)，有：

$$
\begin{align}
\lim_{x \to -\infty} a^x &= 0 \\[6pt]
\lim_{x \to +\infty} a^x &= +\infty
\end{align}
$$

对于底数 $0 < a < 1$ 的指数函数，有：

$$
\begin{align}
\lim_{x \to -\infty} a^x &= +\infty \\[6pt]
\lim_{x \to +\infty} a^x &= 0
\end{align}
$$

对于[幂函数](../power-function/) $f(x) = x^n$，我们区分两种情形。第一种是正偶数指数 $n \in \mathbb{N}$，此时有：

$$
\begin{align}
\lim_{x \to -\infty} x^n &= +\infty \\[6pt]
\lim_{x \to +\infty} x^n &= +\infty
\end{align}
$$

当指数为奇数时，有：

$$
\begin{align}
\lim_{x \to -\infty} x^n &= -\infty \\[6pt]
\lim_{x \to +\infty} x^n &= +\infty
\end{align}
$$

对于[根式函数](../radicals/) $f(x) = \sqrt[n]{x}$，同样区分两种情形。第一种是偶数根指数，此时有：

$$\lim_{x \to +\infty} \sqrt[n]{x} = +\infty$$

对于奇数根指数，有：

$$
\begin{align}
\lim_{x \to -\infty} \sqrt[n]{x} &= -\infty \\[6pt]
\lim_{x \to +\infty} \sqrt[n]{x} &= +\infty
\end{align}
$$

对于底数 $a > 1$ 的[对数函数](../logarithmic-function/)，有：

$$
\begin{align}
\lim_{x \to 0^+} \log_a x &= -\infty \\[6pt]
\lim_{x \to +\infty} \log_a x &= +\infty
\end{align}
$$

当底数满足 $0 < a < 1$ 时，有：

$$
\begin{align}
\lim_{x \to 0^+} \log_a x &= +\infty \\[6pt]
\lim_{x \to +\infty} \log_a x &= -\infty
\end{align}
$$

对于[绝对值函数](../absolute-value-function/) $f(x) = |x|$，有：

$$
\begin{align}
\lim_{x \to -\infty} |x| &= +\infty \\[6pt]
\lim_{x \to +\infty} |x| &= +\infty
\end{align}
$$

最后，对于[符号函数](../sign-function/) $\mathrm{sgn}(x)$，有：

$$
\begin{align}
\lim_{x \to -\infty} \mathrm{sgn}(x) &= -1 \\[6pt]
\lim_{x \to +\infty} \mathrm{sgn}(x) &= 1
\end{align}
$$
