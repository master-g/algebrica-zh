---
title: 正切与余切
title_en: Tangent and Cotangent
source: https://algebrica.org/tangent-and-cotangent/
license: CC BY-NC 4.0
tags:
  - cotangent
  - tangent
  - trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 4cc0dfbd2bf3aed3c82f1dc293472727d7ef8773921f485ce12fbe3711b61826
  translator: omp
  updated: "2026-07-24T15:49:26.064Z"
---
## 引言

正切与余切是由[正弦与余弦](../sine-and-cosine/)导出的两个三角比。给定一个有向角 $\theta$，正切定义为 $\theta$ 的正弦与余弦之比，余切定义为余弦与正弦之比。在正弦、余弦均非零的共同定义域上，二者互为倒数：

$$
\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)} \qquad \cot(\theta) = \frac{\cos(\theta)}{\sin(\theta)}
$$

二者在[单位圆](../unit-circle/)上都有精确的几何解释，表现为与角终边相关的有向线段长度。与对每个实数都有定义的正弦和余弦不同，正切和余切并非处处有定义：余弦为零处正切无定义，正弦为零处余切无定义。

## 正切

**定义 1。** 考虑以原点 $\text{O} = (0,0)$ 为圆心、半径为 1 的单位圆。设 $\theta$ 是处于[标准位置](../angles-and-angular-measure/)的一个角，记 $\text{P}$ 为 $\theta$ 的终边与圆的交点。

+ 点 $\text{S} = (1, 0)$ 是圆与直线 $x = 1$ 的交点。过点 $\text{S}$ 且与 $x$ 轴垂直的直线在点 $\text{S}$ 处与[单位圆](../unit-circle/)相切，称为竖直切线。
+ 当该角的余弦非零时，过点 $\text{O}$ 与 $\text{P}$ 的直线与上述竖直切线交于点 $\text{T}=(1,\tan\theta)$。
+ 线段 $\overline{ST}$ 的有向长度（取向上为正）定义为 $\theta$ 的正切：

$$
\tan(\theta) = \overline{ST}
$$

![正切的几何构造：竖直切线上的有向线段](/assets/trigonometry/svg/tangent-and-cotangent-1.zh.svg)

由定义可知，作为三角函数的正切是一个表示比值的数值，而几何上的切线是一条直线，二者不应混淆：正切刻画的是一个角的[正弦与余弦](../sine-and-cosine/)之间的关系，而切线则是与圆恰有一个公共点的直线。

在第一象限中，三角形 $\text{OST}$ 与 $\text{ORP}$ 由构造相似。其对应边成比例给出：

$$
\frac{\overline{ST}}{\overline{OS}} = \frac{\overline{RP}}{\overline{OR}}
$$

![第一象限中相似三角形 OST 与 ORP 的比例关系](/assets/trigonometry/svg/tangent-and-cotangent-2.zh.svg)

由[正弦与余弦](../sine-and-cosine/)的定义有 $\overline{RP} = \sin(\theta)$、$\overline{OR} = \cos(\theta)$，从而：

$$
\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)}
$$

由于正弦、余弦本身由有向坐标定义，上述比值对一切余弦非零的角均成立。而余弦在 $\theta = \dfrac{\pi}{2} + k\pi$（对一切 $k \in \mathbb{Z}$）处为零，故正切在这些值处无定义：

$$
\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)} \qquad \theta \neq \frac{\pi}{2} + k\pi \quad k \in \mathbb{Z}
$$

## 正切的常见值

下列各式给出 $\tan(x)$ 在常见角（以弧度计）处的取值。

$$
\begin{align}
x &= -\pi/3  &\quad& \tan(-\pi/3) = -\sqrt{3} \\[6pt]
x &= -\pi/4  &\quad& \tan(-\pi/4) = -1 \\[6pt]
x &= -\pi/6  &\quad& \tan(-\pi/6) = -1/\sqrt{3} \\[6pt]
x &= 0       &\quad& \tan(0) = 0 \\[6pt]
x &= \pi/6   &\quad& \tan(\pi/6) = 1/\sqrt{3} \\[6pt]
x &= \pi/4   &\quad& \tan(\pi/4) = 1 \\[6pt]
x &= \pi/3   &\quad& \tan(\pi/3) = \sqrt{3}
\end{align}
$$

## 正切的三角恒等式

正切所满足的恒等式直接来源于其作为正弦与余弦之比的定义。下列各关系均可由正弦、余弦的相应恒等式相除得到，它们共同刻画了正切在和差、倍角与半角变换下的行为。最后两个关系分别通过勾股恒等式将正切与正割联系起来，通过倒数关系将正切与余切联系起来。需注意，下列每个恒等式仅在其两端均有定义且分母非零时成立：

$$
\begin{align}
&\tan(x+y) = \frac{\tan(x) + \tan(y)}{1 - \tan(x)\tan(y)} \\[6pt]
&\tan(x-y) = \frac{\tan(x) - \tan(y)}{1 + \tan(x)\tan(y)} \\[6pt]
&\tan(2x) = \frac{2\tan(x)}{1 - \tan^{2}(x)} \\[6pt]
&\tan\left(\frac{x}{2}\right) = \frac{\sin x}{1 + \cos x} = \frac{1 - \cos x}{\sin x} \\[6pt]
&1 + \tan^{2}(x) = \sec^{2}(x) \\[12pt]
&\tan(x)\cot(x) = 1
\end{align}
$$

> 这些恒等式描述了正切在角的加法、减法、倍角、半角及倒数关系下的行为，是对正弦、余弦恒等式的补充，在化简表达式或变换三角方程时尤为有用。完整汇总参见[三角恒等式](../trigonometric-identities/)条目。

## 余切

**定义 2。** 对给定的有向角，当其正弦非零时，定义 $\cot(\theta)$ 为该角的余切，即余弦与正弦之比。在正弦与余弦均非零时，余切与正切互为倒数。几何上，令 $\text{Z}=(0,1)$；当 $\sin\theta\ne0$ 时，直线 $\text{OP}$ 与单位圆在 $\text{Z}$ 处的水平切线 $y=1$ 交于 $\text{V}=(\cot\theta,1)$。规定向右为正，则从 $\text{Z}$ 到 $\text{V}$ 的有向水平长度等于余切。在正弦与余弦均非零的共同定义域上，可将这些关系连写为：

$$
\cot(\theta) = \frac{1}{\tan(\theta)} = \frac{\cos(\theta)}{\sin(\theta)} = \overline{ZV}
$$

当 $\cos\theta=0$ 时，余切仍由 $\cos\theta/\sin\theta$ 定义且等于 $0$，但此时正切无定义，所以上式中的倒数形式不适用。

![余切的几何构造：水平切线上的有向线段](/assets/trigonometry/svg/tangent-and-cotangent-3.zh.svg)

由于正弦在 $\theta = k\pi$（对一切 $k \in \mathbb{Z}$）处为零，故余切在这些值处无定义：

$$
\cot(\theta) = \frac{\cos(\theta)}{\sin(\theta)} \qquad \theta \neq k\pi \quad k \in \mathbb{Z}
$$

## 余切的三角恒等式

在正弦与余弦均非零的共同定义域上，余切与正切互为倒数，因此余切所满足的恒等式与上文相应，只是分子与分母的角色互换。下列关系分别给出两角和、两角差、倍角、半角的余切，最后一个恒等式通过勾股关系将余切与余割联系起来。同样地，下列恒等式仅在其两端均有定义且分母非零时成立：

$$
\begin{align}
&\cot(x+y) = \frac{\cot(x)\cot(y) - 1}{\cot(x) + \cot(y)} \\[6pt]
&\cot(x-y) = \frac{\cot(x)\cot(y) + 1}{\cot(y) - \cot(x)} \\[6pt]
&\cot(2x) = \frac{\cot^{2}(x) - 1}{2\cot(x)} \\[6pt]
&\cot\left(\frac{x}{2}\right) = \frac{1 + \cos x}{\sin x} \\[12pt]
&1 + \cot^{2}(x) = \csc^{2}(x)
\end{align}
$$

> 这些恒等式描述了余切在角的加法、减法、倍角、半角及倒数关系下的行为。

## 正切与余切函数

[正切函数](../tangent-function/) $f(x) = \tan(x)$ 把每个实数 $x$（视为以弧度表示的角）映射到其正切值。其图像是周期为 $\pi$ 的曲线，在 $\pi$ 的每个整数倍处与横轴相交，并在余弦为零的 $x = \pi/2 + k\pi$（$k \in \mathbb{Z}$）处出现竖直[渐近线](../asymptotes/)。$\tan(x)$ 的[定义域](../determining-the-domain-of-a-function/)由除去这些值之外的所有[实数](../types-of-numbers/)构成，其值域为整个实数轴。

![正切函数图像](/assets/trigonometry/svg/tangent-and-cotangent-4.zh.svg)

+ 定义域：$\left\{ x \in \mathbb{R} : x \neq \frac{\pi}{2} + k\pi \text{ 对所有 } k \in \mathbb{Z} \right\}$
+ 值域：$y \in \mathbb{R}$
+ 周期性：最小正周期为 $\pi$
+ 奇偶性：[奇函数](../even-and-odd-functions/)，$\tan(-x) = -\tan(x)$

[余切函数](../cotangent-function/) $f(x) = \cot(x)$ 把每个实数 $x$（视为以弧度表示的角）映射到其余切值。其图像是周期为 $\pi$ 的曲线，在正弦为零的 $x = k\pi$（$k \in \mathbb{Z}$）处出现竖直渐近线。定义域排除这些点，值域为整个实数轴。

![余切函数图像](/assets/trigonometry/svg/tangent-and-cotangent-5.zh.svg)

+ 定义域：$\left\{ x \in \mathbb{R} : x \neq k\pi \text{ 对所有 } k \in \mathbb{Z} \right\}$
+ 值域：$y \in \mathbb{R}$
+ 周期性：最小正周期为 $\pi$
+ 奇偶性：[奇函数](../even-and-odd-functions/)，$\cot(-x) = -\cot(x)$

> [正切函数](../tangent-function/)与[余切函数](../cotangent-function/)的详细讨论，包括常见值、极限、导数与积分，将在各自条目中给出。

## 复数情形下的正切与余切

在[复数](../complex-numbers/)理论中，正切与余切源于[复数的三角形式](../complex-numbers-trigonometric-form/)。任一非零复数 $z = a + bi$ 可写为：

$$
z = r(\cos\theta + i\sin\theta)
$$

其中 $r = \sqrt{a^2+b^2}$ 为模，$\theta$ 为辐角。在此表示下，辐角的正切满足：

$$
\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)} = \frac{b/r}{a/r} = \frac{b}{a}
$$

即当实部 $a\ne0$ 时，复数辐角的正切等于虚部与实部之比；相应地，当虚部 $b\ne0$ 时，$\cot\theta=a/b$。这些比值不能唯一确定象限。完整辐角应写作 $\theta=\arg z$，可用 $\operatorname{atan2}(b,a)$ 选取一个代表值，而所有辐角相差 $2\pi$ 的整数倍。

通过[指数形式](../complex-numbers-exponential-form/)可揭示更深层联系。由欧拉公式：

$$
e^{i\theta} = \cos\theta + i\sin\theta
$$

可将正切完全用复指数表示：

$$
\tan(\theta) = \frac{\sin\theta}{\cos\theta} = \frac{e^{i\theta} - e^{-i\theta}}{i(e^{i\theta} + e^{-i\theta})}
$$

该表达式与[双曲正切](../hyperbolic-tangent-and-cotangent/)（定义为 $\tanh(x) = (e^x - e^{-x})/(e^x + e^{-x})$）的结构相对应，并表明二者通过代换 $x \to i\theta$ 相联系：

$$
\tan(\theta) = -i\tanh(i\theta)
$$

该恒等式反映了圆三角学与双曲三角学的深层统一——二者均源于复数域上的同一指数框架。上述恒等式仅在等式两边均有定义、相关分母均非零时成立。

## 魏尔斯特拉斯代换

正切的半角公式是[积分学](../definite-integrals/)中最有用的技巧之一——[魏尔斯特拉斯代换](../the-weierstrass-substitution/)的出发点。该代换定义为：

$$
t = \tan\!\left(\frac{x}{2}\right)
$$

由此可将正弦和余弦表示为 $t$ 的有理函数：

$$
\begin{align}
\sin x &= \frac{2t}{1+t^{2}} \\[6pt]
\cos x &= \frac{1-t^{2}}{1+t^{2}}
\end{align}
$$

微分相应地变换为：

$$
dx = \frac{2 \ dt}{1+t^{2}}
$$

对于被积函数是 $\sin x$ 与 $\cos x$ 的有理函数的积分，该代换会将其转化为关于单一变量 $t$ 的有理函数积分，后者可通过[部分分式分解](../partial-fraction-decomposition/)求值。半角恒等式由此将三角函数积分与有理函数积分联系起来。需要注意的是，魏尔斯特拉斯代换 $t=\tan(x/2)$ 在 $x=(2k+1)\pi$ 处无定义，应在不含这些点的区间上使用，必要时分段积分。
