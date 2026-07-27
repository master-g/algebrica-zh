---
title: 正割与余割
title_en: Secant and Cosecant
source: https://algebrica.org/secant-and-cosecant/
license: CC BY-NC 4.0
tags:
  - cosecant
  - secant
  - trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: ad2489c7e72e22bd1201ccabd13853641037def00736d9b032ce2f2e50eb1d72
  translator: omp
  updated: "2026-07-24T16:24:33.007Z"
---
## 正割

考虑以原点 $\text{O} = (0,0)$ 为圆心、半径为 $1$ 的[单位圆](../unit-circle/)。设 $\theta$ 为一个处于[标准位置](../angles-and-angular-measure/)的角，并记 $\text{P}$ 为角 $\theta$ 的终边与该圆的交点。作圆在点 $\text{P}$ 处的切线；当该切线与 $x$ 轴有有限交点时，记交点为 $\text{S}$。角 $\theta$ 的正割定义为有向线段 $\overline{OS}$ 的有向长度，即点 $\text{S}$ 的横坐标 $x_S$：

$$
\sec(\theta) = \overline{OS} = x_S
$$

为了用熟悉的三角量表示这一长度，记 $\text{R}$ 为 $\text{P}$ 到 $x$ 轴的垂足。由于 $\text{OP} = 1$，且 $\text{P}$ 的水平分量为 $\cos(\theta)$，而 $\text{P}$ 处的切线与半径 $\overline{OP}$ 垂直，故在第一象限内，直角三角形 $\text{OPS}$ 与 $\text{ORP}$ 相似，由此得到下面的关系式；对于一般角，结论再由有向横坐标延拓而得：

$$
\sec(\theta) = \frac{1}{\cos(\theta)}
$$

![图 1](/assets/trigonometry/svg/secant-and-cosecant-1.zh.svg)

由于正割是[余弦](../sine-and-cosine/)的倒数，它仅在余弦不为零的角处有定义。余弦在 $\pi/2$ 的一切奇数倍处为零，故正割的定义域恰好排除这些值：

$$
\sec(\theta) = \frac{1}{\cos(\theta)}
\qquad \forall \theta \neq \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}
$$

由上述几何构造可知，正割给出 $\text{P}$ 处切线的有向横截距。由此可见，在函数有定义处恒有 $|\sec(\theta)| \geq 1$：交点 $\text{S}$ 到原点的距离 $|x_S|$ 不小于单位圆的半径，而正割本身仍为有符号的函数值。

> 本节从几何角度考察正割。关于该函数的分析性质，包括定义域、奇偶性、极限、导数与积分，请参阅[正割函数](../secant-function/)的专门条目。

## 正割的常用值

下面列出若干选定角度下 $\sec(\theta)$ 的一些常用值，它们在三角学的各类应用中常被用到：

$$
\begin{align}
\theta &= 0^\circ = 0\ \text{弧度}      && \sec(\theta) = 1 \\[6pt]
\theta &= 30^\circ = \pi/6\ \text{弧度} && \sec(\theta) = \tfrac{2\sqrt{3}}{3} \\[6pt]
\theta &= 45^\circ = \pi/4\ \text{弧度} && \sec(\theta) = \sqrt{2} \\[6pt]
\theta &= 60^\circ = \pi/3\ \text{弧度} && \sec(\theta) = 2 \\[6pt]
\theta &= 90^\circ = \pi/2\ \text{弧度} && \sec(\theta) \text{ 未定义}
\end{align}
$$

## 正割的三角恒等式

正割所满足的恒等式可由它作为余弦倒数的定义推出。将基本关系 $\sin^{2} x + \cos^{2} x = 1$ 除以 $\cos^{2} x$（在相关表达式有定义时），便得到联系正割与正切的勾股恒等式；余弦的偶性也直接传递给正割。下面汇集的关系总结了这些联系，并附上计算中最常遇到的代数形式。

$$
\begin{align}
&\sec x = \frac{1}{\cos x} \\[6pt]
&1 + \tan^{2} x = \sec^{2} x \\[10pt]
&\sec(-x) = \sec x \\[6pt]
&\sec x \tan x = \frac{\sin x}{\cos^{2} x} \\[6pt]
&\sec^{2} x - \tan^{2} x = 1
\end{align}
$$

> 这些公式汇集了涉及正割的最常用恒等式，包括倒数定义、毕达哥拉斯恒等式、对称关系以及常见的代数变换。如需更全面的概览，可参阅[三角恒等式](../trigonometric-identities/)的完整汇编。

## 余割

再次考虑同一构造：在 $\text{P}$ 处作单位圆的切线；当该切线与 $y$ 轴有有限交点时，记交点为 $\text{Q}$。角 $\theta$ 的余割定义为有向线段 $\overline{OQ}$ 的有向长度，即点 $\text{Q}$ 的纵坐标 $y_Q$：

$$
\csc(\theta) = \overline{OQ} = y_Q
$$

记 $\text{U}$ 为 $\text{P}$ 到 $y$ 轴的垂足。在第一象限内，直角三角形 $\text{OPQ}$ 与 $\text{OUP}$ 相似；对于一般角，再用有向纵坐标延拓，即得：

$$
\csc(\theta) = \frac{1}{\sin(\theta)}
$$

![图 2](/assets/trigonometry/svg/secant-and-cosecant-2.zh.svg)

由于余割是[正弦](../sine-and-cosine/)的倒数，它仅在正弦不为零的角处有定义。正弦在 $\pi$ 的一切整数倍处为零，故余割的定义域恰好排除这些值：

$$
\csc(\theta) = \frac{1}{\sin(\theta)} \qquad \forall \theta \neq k\pi, \quad k \in \mathbb{Z}
$$

与正割类似，余割给出 $\text{P}$ 处切线的有向纵截距。由此可见，在函数有定义处恒有 $|\csc(\theta)| \geq 1$：交点 $\text{Q}$ 到原点的距离 $|y_Q|$ 不小于单位圆的半径，而余割本身仍为有符号的函数值。

> 本节从几何角度考察余割。关于该函数的分析性质，包括定义域、奇偶性、极限、导数与积分，请参阅[余割函数](../cosecant-function/)的专门条目。

## 几何解释

两种定义都源于同一个几何对象：当两个有限交点都存在时，在 $\text{P}$ 处所作的[切线](../tangent-and-cotangent/)同时确定 $x$ 轴上的点 $\text{S}$ 和 $y$ 轴上的点 $\text{Q}$，一次作图便同时给出正割与余割。

这也清楚地说明两个函数的不对称行为。当 $\theta$ 的终边接近水平位置时，$\text{P}$ 处的切线接近竖直，$\text{Q}$ 沿 $y$ 轴远离原点，余割无界，而 $\text{S}$ 保持有限。当终边接近竖直位置时，切线接近水平，$\text{S}$ 沿 $x$ 轴远离原点，正割无界，而 $\text{Q}$ 保持有限。

## 余割的常用值

下面列出了一些选定角度下 $\csc(\theta)$ 的常用值，在三角学的各类应用中经常用到：

$$
\begin{align}
\theta &= 0^\circ = 0\ \text{弧度}      && \csc(\theta) \text{ 未定义} \\[6pt]
\theta &= 30^\circ = \pi/6\ \text{弧度} && \csc(\theta) = 2 \\[6pt]
\theta &= 45^\circ = \pi/4\ \text{弧度} && \csc(\theta) = \sqrt{2} \\[6pt]
\theta &= 60^\circ = \pi/3\ \text{弧度} && \csc(\theta) = \tfrac{2\sqrt{3}}{3} \\[6pt]
\theta &= 90^\circ = \pi/2\ \text{弧度} && \csc(\theta) = 1
\end{align}
$$

## 余割的三角恒等式

涉及余割的恒等式同样由其作为正弦倒数这一定义导出。将基本关系 $\sin^{2} x + \cos^{2} x = 1$ 除以 $\sin^{2} x$（在相关表达式有定义时），便得到联系余割与余切的勾股恒等式；正弦的奇性则通过变号传递给余割。下列关系式汇集了这些性质以及实践中反复出现的代数形式。

$$
\begin{align}
&\csc x = \frac{1}{\sin x} \\[6pt]
&1 + \cot^{2} x = \csc^{2} x \\[8pt]
&\csc(-x) = -\csc x \\[6pt]
&\csc x \cot x = \frac{\cos x}{\sin^{2} x} \\[6pt]
&\csc^{2} x - \cot^{2} x = 1
\end{align}
$$

> 以上公式汇集了涉及余割的最常用的恒等式，包括倒数定义、勾股恒等式、对称关系以及常见的代数变换。如需更全面的概览，可参阅完整的[三角恒等式](../trigonometric-identities/)。

## 正割函数与余割函数

[正割函数](../secant-function/) $f(x) = \sec(x)$ 将每一个以弧度度量的角 $x$ 对应到值 $1/\cos(x)$。其图像是以 $2\pi$ 为周期的曲线，在余弦为零的点 $x = \pi/2 + k\pi$（$k \in \mathbb{Z}$）处有竖直[渐近线](../asymptotes/)。$\sec(x)$ 的[定义域](../determining-the-domain-of-a-function/)由除这些点外的所有实数组成，值域为 $(-\infty, -1] \cup [1, +\infty)$。

![图 3](/assets/trigonometry/svg/secant-and-cosecant-3.zh.svg)

+ 定义域：$\{ x \in \mathbb{R} : \cos(x) \neq 0 \} = \{ x \in \mathbb{R} : x \neq \pi/2 + k\pi \text{ 对所有 } k \in \mathbb{Z} \}$
+ 值域：$y \in (-\infty, -1] \cup [1, \infty)$
+ 周期性：最小正周期为 $2\pi$
+ 奇偶性：[偶函数](../even-and-odd-functions/)，$\sec(-x) = \sec(x)$

[余割函数](../cosecant-function/) $f(x) = \csc(x)$ 将每一个以弧度度量的角 $x$ 对应到值 $1/\sin(x)$。其图像是以 $2\pi$ 为周期的曲线，在正弦为零的点 $x = k\pi$（$k \in \mathbb{Z}$）处有竖直渐近线。$\csc(x)$ 的[定义域](../determining-the-domain-of-a-function/)由除这些点外的所有实数组成，值域为 $(-\infty, -1] \cup [1, +\infty)$。

![图 4](/assets/trigonometry/svg/secant-and-cosecant-4.zh.svg)

+ 定义域：$\{ x \in \mathbb{R} : \sin(x) \neq 0 \} = \{ x \in \mathbb{R} : x \neq k\pi \text{ 对所有 } k \in \mathbb{Z} \}$
+ 值域：$y \in (-\infty, -1] \cup [1, \infty)$
+ 周期性：最小正周期为 $2\pi$
+ 奇偶性：[奇函数](../even-and-odd-functions/)，$\csc(-x) = -\csc(x)$

> 关于[正割函数](../secant-function/)和[余割函数](../cosecant-function/)的详细论述，包括特殊值、极限、导数与积分，见各自的条目。
