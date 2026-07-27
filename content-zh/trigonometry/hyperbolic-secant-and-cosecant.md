---
title: 双曲正割与双曲余割
title_en: Hyperbolic Secant and Cosecant
source: https://algebrica.org/hyperbolic-secant-and-cosecant/
license: CC BY-NC 4.0
tags:
  - hyperbolic-cosecant
  - hyperbolic-functions
  - hyperbolic-secant
  - trigonometry
translation:
  status: current
  source_hash: e6ab2dcc813d57b725f20eba8a918fcc7ba3b2ee801f42af5ceb3b32f4eea44f
  translator: omp
  updated: "2026-07-25T04:16:28.623Z"
---
## 双曲正割

双曲正割由[双曲余弦](../hyperbolic-sine-and-cosine/)导出，其方式恰与圆[正割](../secant-and-cosecant/)由圆余弦导出相同。给定等轴[双曲线](../hyperbola/)的右支：

$$
X^{2} - Y^{2} = 1
$$

以及与面积为 $x/2$ 的有符号双曲扇形相关联的点 $P(\cosh(x), \sinh(x))$，$x$ 的双曲正割定义为 $P$ 横坐标的倒数：

$$
\mathrm{sech}(x) := \frac{1}{\cosh(x)}
$$

由于对每个实数 $x$ 都有 $\cosh(x) \geq 1$，分母永不为零，故双曲正割在整个实数轴上有定义。因此 $\mathrm{sech}(x)$ 的值限制在区间 $(0, 1]$ 内，并在 $x = 0$ 处取得最大值，此时 $\cosh(0) = 1$。

![图 1](/assets/trigonometry/svg/hyperbolic-sine-and-cosine-1.zh.svg)

从几何角度看，倒数 $1/\cosh(x)$ 度量的是双曲线的单位半径与 $P$ 横坐标之间的比例。当双曲参数 $x$ 的绝对值增大时，点 $P$ 远离 $Y$ 轴，$\cosh(x)$ 呈指数增长，因此双曲正割从上方趋于零但永不达到零。

> 本节从几何角度考察双曲正割。关于该函数的分析性质，包括定义域、对称性、极限、导数与积分，请参阅[双曲正割函数](../hyperbolic-secant-function/)的专门条目。

## 双曲正割的常用值

下面列出 $\mathrm{sech}(x)$ 在若干选定自变量处的一些常用值，它们在涉及双曲函数的各类应用中很有用：

$$
\begin{align}
x &= 0      && \mathrm{sech}(x) = 1 \\[6pt]
x &= \ln 2  && \mathrm{sech}(x) = \tfrac{4}{5} \\[6pt]
x &= \ln 3  && \mathrm{sech}(x) = \tfrac{3}{5} \\[6pt]
x &= 1      && \mathrm{sech}(x) = \tfrac{2}{e + e^{-1}} \\[6pt]
x &\to \pm\infty && \mathrm{sech}(x) \to 0
\end{align}
$$

## 双曲正割的双曲恒等式

支配双曲正割的恒等式源于其作为双曲余弦倒数的定义。将基本双曲恒等式 $\cosh^{2}(x) - \sinh^{2}(x) = 1$ 除以 $\cosh^{2}(x)$，便得到联系双曲正割与双曲正切的关系，而余弦的偶对称性直接传递到正割。下面汇集的关系概括了这些联系以及计算中最常遇到的代数形式。

$$
\begin{align}
&\mathrm{sech}(x) = \frac{1}{\cosh(x)} \\[6pt]
&1 - \tanh^{2}(x) = \mathrm{sech}^{2}(x) \\[10pt]
&\mathrm{sech}(-x) = \mathrm{sech}(x) \\[6pt]
&\mathrm{sech}(x)\tanh(x) = \frac{\sinh(x)}{\cosh^{2}(x)} \\[6pt]
&\mathrm{sech}^{2}(x) + \tanh^{2}(x) = 1
\end{align}
$$

> 这些公式汇集了涉及双曲正割的最有用的恒等式，包括倒数定义、由基本双曲关系继承而来的恒等式、对称性质以及常见的代数变换。如需更全面的概览，请参阅[双曲恒等式](../hyperbolic-identities/)的完整汇编。

## 双曲余割

与上面的构造平行，双曲余割定义为双曲正弦的倒数。再次从等轴双曲线右支上的点 $P(\cosh(x), \sinh(x))$ 出发，$x$ 的双曲余割是 $P$ 纵坐标的倒数：

$$
\mathrm{csch}(x) := \frac{1}{\sinh(x)}
$$

由于 $\sinh(x)$ 在 $x = 0$ 处为零，双曲余割在整个实数轴上有定义，但原点除外（$x \neq 0$）。在其定义域上，该函数取遍每一个非零实数值，因为 $\sinh(x)$ 是从 $\mathbb{R} \setminus \{0\}$ 到 $\mathbb{R} \setminus \{0\}$ 的双射。

几何上，倒数 $1/\sinh(x)$ 将双曲线的单位半径与 $P$ 的纵坐标相比较。当 $|x|$ 变大时，点 $P$ 远离 $X$ 轴，$|\sinh(x)|$ 呈指数增长，因此双曲余割趋于零。在 $x = 0$ 附近，纵坐标趋于零，双曲余割无界。

> 本节从几何角度考察双曲余割。关于该函数的分析性质，包括定义域、对称性、极限、导数与积分，请参阅[双曲余割函数](../hyperbolic-cosecant-function/)的专门条目。

## 几何解释

两个定义都建立在同一个几何对象之上：等轴双曲线右支上的点 $P(\cosh(x), \sinh(x))$，其横、纵坐标编码了[双曲余弦与双曲正弦](../hyperbolic-sine-and-cosine/)。双曲正割与双曲余割通过取这些坐标的倒数而读出，这与圆的情形高度平行——在那里圆[正割与余割](../secant-and-cosecant/)是余弦与正弦的倒数。

这一共同起源也使两个函数的不对称行为变得一目了然。随着 $|x|$ 增大，$\cosh(x)$ 与 $|\sinh(x)|$ 都呈指数增长，因此 $\mathrm{sech}(x)$ 和 $\mathrm{csch}(x)$ 都趋于零。然而在原点附近，两个函数截然不同：$\cosh(0) = 1$ 使 $\mathrm{sech}(x)$ 有上界 $1$，而 $\sinh(0) = 0$ 迫使 $\mathrm{csch}(x)$ 发散。

## 双曲余割的常用值

以下列出 $\mathrm{csch}(x)$ 在若干典型自变量处的常用取值，在涉及双曲函数的各类应用中颇为有用：

$$
\begin{align}
x &= 0      && \nexists\,\mathrm{csch}(x) \\[6pt]
x &= \ln 2  && \mathrm{csch}(x) = \tfrac{4}{3} \\[6pt]
x &= \ln 3  && \mathrm{csch}(x) = \tfrac{3}{4} \\[6pt]
x &= 1      && \mathrm{csch}(x) = \tfrac{2}{e - e^{-1}} \\[6pt]
x &\to \pm\infty && \mathrm{csch}(x) \to 0
\end{align}
$$

## 双曲余割的双曲恒等式

涉及双曲余割的恒等式，其由来与该函数作为双曲正弦倒数的定义相同。将基本双曲恒等式 $\cosh^{2}(x) - \sinh^{2}(x) = 1$ 两边除以 $\sinh^{2}(x)$（在 $x \neq 0$ 时），便得到把双曲余割与双曲余切联系起来的关系式；而正弦的奇对称性则通过符号的改变传递到余割。下面列出这些性质以及实践中反复出现的代数形式。

$$
\begin{align}
&\mathrm{csch}(x) = \frac{1}{\sinh(x)} \\[6pt]
&\coth^{2}(x) - 1 = \mathrm{csch}^{2}(x) \\[8pt]
&\mathrm{csch}(-x) = -\mathrm{csch}(x) \\[6pt]
&\mathrm{csch}(x)\coth(x) = \frac{\cosh(x)}{\sinh^{2}(x)} \\[6pt]
&\coth^{2}(x) - \mathrm{csch}^{2}(x) = 1
\end{align}
$$

> 上述公式汇集了涉及双曲余割的最常用恒等式，包括倒数定义、由基本双曲关系衍生出的恒等式、对称性质，以及常见的代数变换。如需更全面的概览，可参阅完整的[双曲恒等式](../hyperbolic-identities/)合集。

## 双曲正割的解析表达式

借助 [双曲余弦](../hyperbolic-sine-and-cosine/) 以 [指数函数](../exponential-function/) 表示的解析式，双曲正割可以写成由 $e^{x}$ 与 $e^{-x}$ 表达的闭式。将

$$
\cosh(x) = \frac{e^{x} + e^{-x}}{2}
$$

代入定义 $\mathrm{sech}(x) = 1/\cosh(x)$，并将所得分式取倒数，便得到：

$$
\mathrm{sech}(x) = \frac{2}{e^{x} + e^{-x}}
$$

将分子和分母同乘以 $e^{x}$，可得一等价形式，它在 $\pm\infty$ 处的行为更加清晰：

$$
\mathrm{sech}(x) = \frac{2e^{x}}{e^{2x} + 1}
$$

从这一表达式可直接读出：当 $x \to \pm\infty$ 时 $\mathrm{sech}(x) \to 0$；而 $\mathrm{sech}(0) = 1$ 的值则可通过直接代入得到。

## 双曲余割的解析表达式

双曲余割解析表达式的推导过程与此相同。将

$$
\sinh(x) = \frac{e^{x} - e^{-x}}{2}
$$

代入定义 $\mathrm{csch}(x) = 1/\sinh(x)$，便得到：

$$
\mathrm{csch}(x) = \frac{2}{e^{x} - e^{-x}}
$$

将分子和分母同乘以 $e^{x}$，得到等价的紧凑形式：

$$
\mathrm{csch}(x) = \frac{2e^{x}}{e^{2x} - 1}
$$

这一表达式表明：当 $x \to \pm\infty$ 时函数趋于零；而在分母为零的 $x = 0$ 处函数发散。$\mathrm{csch}(x)$ 的符号与 $x$ 的符号一致，这与从双曲正弦继承的奇性相符。

## 双曲正割与双曲余割函数

[双曲正割函数](../hyperbolic-secant-function/) $f(x) = \mathrm{sech}(x)$ 为每个实数 $x$ 赋值 $1/\cosh(x)$。其图像是一条钟形曲线，处处为正，在原点处取得最大值 $1$，并在两个方向上都有水平[渐近线](../asymptotes/) $y = 0$。$\mathrm{sech}(x)$ 的[定义域](../determining-the-domain-of-a-function/)是整个实数轴，其值域为区间 $(0, 1]$。

+ 定义域：$x \in \mathbb{R}$
+ 值域：$y \in (0, 1]$
+ 周期性：非周期
+ 奇偶性：[偶](../even-and-odd-functions/)，$\mathrm{sech}(-x) = \mathrm{sech}(x)$
+ 水平渐近线：当 $x \to \pm\infty$ 时 $y = 0$

[双曲余割函数](../hyperbolic-cosecant-function/) $f(x) = \mathrm{csch}(x)$ 为每个满足 $x \neq 0$ 的实数 $x$ 赋值 $1/\sinh(x)$。其图像由原点处的竖直渐近线分隔为两支：在 $x > 0$ 上，当 $x$ 从 $0^+$ 增大到 $+\infty$ 时，函数值从 $+\infty$ 严格递减至 $0^+$；在 $x < 0$ 上，当 $x$ 从 $-\infty$ 增大到 $0^-$ 时，函数值从 $0^-$ 严格递减至 $-\infty$。$\mathrm{csch}(x)$ 的定义域是所有非零实数的集合，其值域为 $\mathbb{R} \setminus \{0\}$。

+ 定义域：$x \in \mathbb{R},\; x \neq 0$
+ 值域：$y \in \mathbb{R},\; y \neq 0$
+ 周期性：非周期
+ 奇偶性：[奇](../even-and-odd-functions/)，$\mathrm{csch}(-x) = -\mathrm{csch}(x)$
+ 竖直渐近线：$x = 0$
+ 水平渐近线：当 $x \to \pm\infty$ 时 $y = 0$

## 与圆正割和圆余割的关系

圆[正割和余割](../secant-and-cosecant/)定义为圆余弦和圆正弦的倒数，而后者又源于[单位圆](../unit-circle/)的几何。完全类比地，双曲正割和双曲余割是双曲余弦和双曲正弦的倒数，而后者源于等轴双曲线的几何。

在两种情形中，底层点的坐标满足曲线定义方程这一约束，会传递为倒函数对应的恒等式。

然而，两种情形之间存在根本差异：圆正割和圆余割以 $2\pi$ 为周期，并在有定义处满足 $|\sec(\theta)| \geq 1$ 和 $|\csc(\theta)| \geq 1$；而双曲正割被 $1$ 界住，并在无穷远处趋于零，双曲余割在原点附近无界，并在无穷远处趋于零。

单位圆的界使圆的倒数函数远离零，但在双曲情形中没有对应物，因为双曲线的右支无限延伸。

> 圆的倒数函数与双曲的倒数函数都编码了同一个几何思想：每一个都度量曲线上一点某坐标的倒数，一个在单位圆上，另一个在等轴双曲线上。圆函数周期性重复并具有极点，而双曲正割和双曲余割非周期并在无穷远处单调趋于零——这种对比是区分圆函数族与双曲函数族的反复出现的主题之一。
