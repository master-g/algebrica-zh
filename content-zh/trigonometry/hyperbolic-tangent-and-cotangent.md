---
title: 双曲正切与双曲余切
title_en: Hyperbolic Tangent and Cotangent
source: https://algebrica.org/hyperbolic-tangent-and-cotangent/
license: CC BY-NC 4.0
tags:
  - hyperbolic-cotangent
  - hyperbolic-functions
  - hyperbolic-tangent
  - trigonometry
translation:
  status: current
  source_hash: 3d58508879fa9b64811a150b2eeccfba1b0739f579def32942f65117634f7544
  translator: omp
  updated: "2026-07-24T17:57:32.793Z"
---
## 引言

双曲正切与双曲余切由双曲正弦和双曲余弦导出，其方式与圆[正切与余切](../tangent-and-cotangent/)由圆[正弦与余弦](../sine-and-cosine/)导出完全相同。给定[双曲正弦与双曲余弦](../hyperbolic-sine-and-cosine/)，二者均是与等轴[双曲线](../hyperbola/)右支相关地引入的：

$$
X^{2} - Y^{2} = 1
$$

双曲正切定义为二者之比，条件是 $\cosh(x)$ 不为零。由于对所有实数 $x$ 都有 $\cosh(x) \geq 1$，分母恒不为零，因此双曲正切在整个实数轴上均有定义。双曲余切涉及倒数之比，需要 $\sinh(x) \neq 0$，这仅排除了 $x = 0$。

一旦双曲线上的点 $P(\cosh(x), \sinh(x))$ 被确定为与面积为 $x/2$ 的有向双曲扇形相对应的点，便可从其坐标读出双曲正切与双曲余切。双曲正切是纵坐标与横坐标之比：

$$
\tanh(x) := \frac{\sinh(x)}{\cosh(x)}
$$

![图 1](/assets/trigonometry/svg/hyperbolic-tangent-and-cotangent-1.zh.svg)

> 为使构造更直观，考虑单位双曲线 $x^2 - y^2 = 1$ 及与双曲角 $x$ 相对应的点 $P = (\cosh x, \sinh x)$。作过原点 $O$ 与 $P$ 的[直线](../lines/)，并考虑竖直线 $x = 1$。二者的交点确定点 $T$，其坐标为 $T = (1, \tanh x)$，因为直线 $OP$ 的斜率为 $\sinh x/ \cosh x = \tanh x$。因此，由 $(1,0)$ 到 $T$ 的竖直有向线段在几何上表示双曲正切的有向长度。

双曲余切是倒数之比，即横坐标除以纵坐标：

$$
\coth(x) := \frac{\cosh(x)}{\sinh(x)}
$$

![图 2](/assets/trigonometry/svg/hyperbolic-tangent-and-cotangent-2.zh.svg)

> 如上文双曲正切的情形所示，为使构造更直观，考虑单位双曲线 $x^2 - y^2 = 1$ 及与双曲角 $x$ 相对应的点 $P = (\cosh x, \sinh x)$。作过原点 $O$ 与 $P$ 的[直线](../lines/)，并考虑水平线 $y = 1$。二者的交点确定点 $S$，其坐标为 $S = (\coth x, 1)$，因为直线 $OP$ 的斜率为 $\sinh x / \cosh x = \tanh x$，其倒数给出 $\coth x = \cosh x / \sinh x$。因此，由 $(0,1)$ 到 $S$ 的水平有向线段在几何上表示双曲余切的有向长度。

在这一几何图像中，双曲正切与双曲余切度量的是双曲线上该点相对于其二坐标的某种斜率，类似于圆正切表达[单位圆](../unit-circle/)上点的斜率的方式。

## 双曲正切与双曲余切的基本恒等式

双曲正切与双曲余切满足一个直接由[基本双曲恒等式](../hyperbolic-sine-and-cosine/)推出的恒等式。从以下出发：

$$
\cosh^{2}(x) - \sinh^{2}(x) = 1
$$

两边同除以恒为正的 $\cosh^{2}(x)$，得到双曲正切的恒等式：

$$
1 - \tanh^{2}(x) = \frac{1}{\cosh^{2}(x)}
$$

类似地，对 $x \neq 0$，将基本恒等式两边同除以 $\sinh^{2}(x)$，得到双曲余切的恒等式：

$$
\coth^{2}(x) - 1 = \frac{1}{\sinh^{2}(x)}
$$

这两个恒等式记录的是双曲线方程的直接推论：点 $P$ 的坐标受约束满足 $X^{2} - Y^{2} = 1$，而除以任一坐标的平方便将此约束转化为涉及上述比函数的关系。

## 双曲恒等式

两函数的加法、减法、倍角与倒数关系汇集如下：

$$
\begin{align}
&\tanh(x+y) = \frac{\tanh(x) + \tanh(y)}{1 + \tanh(x)\tanh(y)} \\[8pt]
&\tanh(x-y) = \frac{\tanh(x) - \tanh(y)}{1 - \tanh(x)\tanh(y)} \\[8pt]
&\tanh(2x)  = \frac{2\tanh(x)}{1 + \tanh^{2}(x)} \\[6pt]
&\coth(x+y) = \frac{1 + \coth(x)\coth(y)}{\coth(x) + \coth(y)} \\[8pt]
&\coth(x-y) = \frac{\coth(x)\coth(y)-1}{\coth(y)-\coth(x)} \\[15pt]
&\tanh(x)\coth(x) = 1
\end{align}
$$

> 双曲正切与双曲余切的加减公式与其圆函数对应物高度相似，但由等轴双曲线的代数所支配。需注意，各加减公式仅在其涉及的函数与分母均有定义时才成立。最后一式表明，$\tanh$ 与 $\coth$ 在二者均有定义处互为倒数；由于双曲余切在 $0$ 处无定义，该乘积恒等式仅对 $x\neq0$ 成立。

## 双曲正切的解析表达式

利用双曲正弦和双曲余弦用[指数函数](../exponential-function/)表示的解析表达式，我们可以直接写出双曲正切。将

$$
\begin{align}
\sinh(x) &= \frac{e^{x} - e^{-x}}{2} \\[6pt]
\cosh(x) &= \frac{e^{x} + e^{-x}}{2}
\end{align}
$$

代入定义 $\tanh(x) = \sinh(x)/\cosh(x)$，并约去分子和分母中同时出现的因子 $1/2$，得到：

$$
\tanh(x) = \frac{e^{x} - e^{-x}}{e^{x} + e^{-x}}
$$

将分子和分母同乘 $e^{-x}$，可得到一个等价且通常更紧凑的形式：

$$
\tanh(x) = \frac{1 - e^{-2x}}{1 + e^{-2x}}
$$

或者等价地，同乘 $e^{x}$：

$$
\tanh(x) = \frac{e^{2x} - 1}{e^{2x} + 1}
$$

对最后一个表达式作纯代数变形，可得到又一个等价形式。将分子写作 $e^{2x} - 1 = (e^{2x} + 1) - 2$ 并拆分分式，得到：

$$
\tanh(x) = 1 - \frac{2}{e^{2x} + 1}
$$

这四个表达式彼此等价，每一个都揭示函数的不同侧面：在第一种形式中，分子和分母正是按解析方式定义的[双曲正弦和双曲余弦](../hyperbolic-sine-and-cosine/)本身。在第二和第三种形式中，$x \to +\infty$ 或 $x \to -\infty$ 时的指数增长立刻显现，由此可直接读出函数分别趋于 $1$ 和 $-1$。第四种形式将 $\tanh(x)$ 表为 $1$ 经一个随 $x$ 单调递减的严格正量平移所得的像，从而界 $\tanh(x) < 1$ 以代数恒等式而非渐近性质的形式呈现。

## 双曲余切的解析表达式

双曲余切解析表达式的推导遵循同样的模式。将 $\sinh(x)$ 和 $\cosh(x)$ 的表达式代入定义 $\coth(x) = \cosh(x)/\sinh(x)$，并再次约去公因子 $1/2$，得到：

$$
\coth(x) = \frac{e^{x} + e^{-x}}{e^{x} - e^{-x}}
$$

与前面一样，将分子和分母同乘 $e^{-x}$ 或 $e^{x}$，可得到等价形式：

$$
\coth(x) = \frac{1 + e^{-2x}}{1 - e^{-2x}} = \frac{e^{2x} + 1}{e^{2x} - 1}
$$

后面的表达式表明，对于很大的正数 $x$，函数从上方趋于 $1$；而对于很大的负数 $x$，函数从下方趋于 $-1$；两种情况下都在 $x = 0$ 处有一条竖直渐近线。

## 双曲正切与双曲余切函数

双曲正切函数 $f(x) = \tanh(x)$ 对全体实数有定义。与圆正切不同，它没有竖直[渐近线](../asymptotes/)：其图像是一条光滑的单调递增曲线，以斜率 $1$ 经过原点，并且对所有 $x$ 都保持有界。当 $x \to +\infty$ 时，函数渐近地趋近于 $1$；当 $x \to -\infty$ 时，它趋近于 $-1$，故其值域为开区间 $(-1, 1)$。

![图 3](/assets/trigonometry/svg/hyperbolic-tangent-and-cotangent-3.zh.svg)

+ 定义域：$x \in \mathbb{R}$
+ 值域：$y \in (-1, 1)$
+ 周期性：非周期
+ 奇偶性：[奇函数](../even-and-odd-functions/)，$\tanh(-x) = -\tanh(x)$
+ 水平渐近线：当 $x \to +\infty$ 时为 $y = 1$；当 $x \to -\infty$ 时为 $y = -1$

双曲余切函数 $f(x) = \coth(x)$ 对全体非零实数有定义，并在 $(-\infty,0)$ 与 $(0,+\infty)$ 上都严格递减。当 $x$ 从 $-\infty$ 增大到 $0^-$ 时，函数值从接近但小于 $-1$ 递减到 $-\infty$；当 $x$ 从 $0^+$ 增大到 $+\infty$ 时，函数值从 $+\infty$ 递减并趋近于 $1$。原点为其竖直渐近线，而直线 $y = 1$ 与 $y = -1$ 为其水平渐近线。

![图 4](/assets/trigonometry/svg/hyperbolic-tangent-and-cotangent-4.zh.svg)

+ 定义域：$x \in \mathbb{R},\; x \neq 0$
+ 值域：$y \in (-\infty, -1) \cup (1, +\infty)$
+ 周期性：非周期
+ 奇偶性：[奇函数](../even-and-odd-functions/)，$\coth(-x) = -\coth(x)$
+ 竖直渐近线：$x = 0$
+ 水平渐近线：当 $x \to +\infty$ 时为 $y = 1$；当 $x \to -\infty$ 时为 $y = -1$

## 与圆正切、圆余切的关系

圆[正切与余切](../tangent-and-cotangent/) 定义为圆正弦与圆余弦之比，而后两者源自单位圆的几何。完全类比地，双曲正切与双曲余切是双曲正弦与双曲余弦之比，后两者源自等轴双曲线的几何。在这两种情形中，约束曲线上一点坐标的恒等式，都会相应地传递为关于比值函数的恒等式。

然而两种情形之间存在一个本质差异：圆正切以 $\pi$ 为周期且无界，而双曲正切单调且介于 $-1$ 与 $1$ 之间。类似地，圆余切在 $\pi$ 的每个整数倍处都有竖直渐近线，而双曲余切仅在原点处有一条。

> 圆正切与双曲正切所衡量的，都是曲线上一点坐标之间的某种比值，一个位于单位圆上，另一个位于等轴双曲线上。这两个函数族之间结构上的平行性，是经典分析中最优美的特征之一。
