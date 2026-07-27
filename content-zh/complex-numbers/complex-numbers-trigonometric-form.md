---
title: 复数的三角形式
title_en: Complex Numbers in Trigonometric Form
source: https://algebrica.org/complex-numbers-trigonometric-form/
license: CC BY-NC 4.0
tags:
  - complex-argument
  - complex-conjugate
  - complex-modulus
  - complex-numbers
  - principal-argument
  - trigonometric-form
translation:
  status: current
  source_hash: a52dec473fa813570f05fe348fa533aba182c900ce6c4229d34f614253a87b53
  translator: omp
  updated: "2026-07-23T09:56:51.524Z"
---
## 定义

代数形式 $z = a + bi$ 通过实部和虚部来表示一个[复数](../complex-numbers-introduction/)。每个非零复数也可以用两个几何量来描述：它在复平面中到原点的距离，以及它相对于正实轴的角位置。由此得到复数的三角形式（或极坐标形式）：

$$z = r(\cos\theta + i\sin\theta)$$

+ $r = |z| = \sqrt{a^2 + b^2}$ 是[模](../complex-numbers-introduction/)，表示 $z$ 在复平面中到原点的距离。
+ $\theta = \arg(z)$ 是辐角，即正实轴与表示 $z$ 的[向量](../vectors/)之间以[弧度计的角度](../angles-and-angular-measure/)。

![IMG. 1](/assets/complex-numbers/svg/complex-numbers-trigonometric-form-1.svg)

> 从几何上看，$r$ 是由 $z$ 的实部和虚部所确定的直角三角形的斜边。根据[勾股定理](../pythagorean-theorem/)，$r = \sqrt{a^2 + b^2}$

- - -

由于点 $z = (a, b)$ 位于复平面中距原点距离为 $r$ 处，而 $\theta$ 是它与正实轴所成的角，因此实部和虚部可以通过直角三角形中[正弦和余弦](../sine-and-cosine/)的定义来表达。投影到两条坐标轴上的结果由这些三角关系给出：

$$\overline{OA} = \overline{OP} \cdot \cos(\theta) = r\cos(\theta)$$

$$\overline{OB} = \overline{OP} \cdot \sin(\theta) = r\sin(\theta)$$

即 $a = r\cos(\theta)$ 和 $b = r\sin(\theta)$。将它们代入复数的代数形式，便得到其三角表示：

$$
\begin{align}
z = (a, b) &= a + ib \\[6pt]
           &= r\cos(\theta) + ir\sin(\theta) \\[6pt]
           &= r[\cos(\theta) + i\sin(\theta)]
\end{align}
$$

三角形式与复数的[指数形式](../complex-numbers-exponential-form/)密切相关。根据[欧拉公式](../eulers-formula/)，恒等式 $e^{i\theta} = \cos(\theta) + i\sin(\theta)$ 表明这两种表示是等价的，因此同一个复数可以等价地写作：

$$z = re^{i\theta}$$

- - -

三角形式下，复数 $z$ 的[共轭复数](../complex-numbers/) $\overline{z}$ 可通过将 $\theta$ 替换为 $-\theta$ 得到，这在几何上对应于将 $z$ 关于实轴反射。由于[余弦](../cosine-function/)是偶函数，而[正弦](../sine-function/)是奇函数，故得：

$$\overline{z} = r(\cos\theta - i\sin\theta)$$

将同样的奇偶性论证通过[欧拉公式](../eulers-formula/)推广到指数表示中，便得到指数形式下共轭的对应恒等式 $\overline{z} = re^{-i\theta}$。

## 运算

给定两个三角形式的复数：

$$z_1 = r_1[\cos(\theta_1) + i\sin(\theta_1)]$$

$$z_2 = r_2[\cos(\theta_2) + i\sin(\theta_2)]$$

它们的积是另一个复数，其模等于模的乘积，辐角等于辐角的和。乘法公式如下。

$$z_1 z_2 = r_1 r_2[\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)]$$

在几何上，[两个复数相乘](../complex-number-operations/)后，所得复数到原点的距离等于两者模的乘积，方向则转过两者辐角之和。也就是说，复数乘法在一次运算中同时完成伸缩与旋转。

> 这一解释可通过[棣莫弗定理](../de-moivre-theorem/)推广到整数幂；在[指数形式](../complex-numbers-exponential-form/)下，其代数意义也更加直观：规则 $e^{i\theta_1} \cdot e^{i\theta_2} = e^{i(\theta_1 + \theta_2)}$ 将乘法归结为辐角相加。

- - -

当 $z_2 \neq 0$ 时，三角形式下两个复数的商遵循对称规则：结果的模等于两者模之比，辐角等于两者辐角之差。

$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\left[\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)\right]$$

- - -

加法没有同样简洁的公式。最直接的方法是将两个数都转换为代数形式，分别相加实部和虚部，然后再根据需要将结果转换回三角形式。和的实部和虚部如下。

$$x = r_1\cos\theta_1 + r_2\cos\theta_2$$

$$y = r_1\sin\theta_1 + r_2\sin\theta_2$$

于是和 $z_1 + z_2$ 用代数形式表示为 $x + iy$。为了还原三角形式，需要计算结果的模和辐角。模由下式给出。

$$r = \sqrt{x^2 + y^2}$$

辐角需要注意点 $(x, y)$ 在复平面中所处的象限。当 $x > 0$ 时，有如下结论。

$$\theta = \arctan\left(\frac{y}{x}\right)$$

当 $x < 0$ 时，须根据 $y$ 的符号施加 $\pm\pi$ 的修正；当 $x = 0$ 时，辐角为 $\pm\pi/2$，其正负取决于 $y$ 的符号。

## 模与辐角

复数的模 $r$ 是该复数在复平面中到原点的距离。将[勾股定理](../pythagorean-theorem/)应用于实部和虚部即可计算出模，其值始终非负。

$$r = |z| = \sqrt{a^2 + b^2} \geq 0$$

由于模度量的是几何长度，故其不可能为负。当 $r = 0$ 时，唯一满足此条件的复数为 $z = 0$，对应于复平面的原点。此时不存在方向分量，辐角 $\theta$ 无定义。对于每个非零复数，模严格为正，即 $r > 0$。

- - -

复数的辐角 $\theta$ 描述其在复平面中的角位置，以弧度为单位，从正实轴开始度量。与唯一确定的模不同，辐角并不唯一：相差[整数](../integers/)倍 $2\pi$ 的两个角描述同一方向，从而对应同一复数。更精确地说，对任意 $k \in \mathbb{Z}$，角 $\theta$ 与 $\theta + 2k\pi$ 对应复平面中的同一点。这通常写成如下紧凑形式：

$$\arg(z) = \theta + 2k\pi, \quad k \in \mathbb{Z}$$

为得到唯一代表元，通常从上述辐角中选取落在下列区间内的唯一值，称为主辐角，记作 $\mathrm{Arg}(z)$。

$$-\pi < \theta \leq \pi$$

在此约定下，角度自正实轴逆时针度量，负值对应于其下方的方向。另一种在工程和应用数学中常见的约定，将辐角限制在下列区间内。

$$0 \leq \theta < 2\pi$$

此时所有辐角均取非负值。两种约定同样有效，选用何种取决于具体场合。无论采用哪种约定，$z = 0$ 的辐角始终无定义，因为原点不携带任何方向信息。

## 如何将复数表示为三角形式

该过程由三步组成，应用于代数形式给出的复数 $z = a + bi$。

首先，用下列公式计算 $z$ 的模。

$$r = \sqrt{a^2 + b^2}$$

接着，通过确定点 $(a, b)$ 在复平面中所处的象限来确定辐角 $\theta$。

+ 当 $a > 0$ 时，辐角由 $\theta = \arctan(b/a)$ 给出。
+ 当 $a < 0$ 时，须根据 $b$ 的符号加上 $\pm\pi$ 的修正。
+ 当 $a = 0$ 时，若 $b > 0$ 则辐角为 $\pi/2$，若 $b < 0$ 则辐角为 $-\pi/2$。

最后，将 $r$ 和 $\theta$ 代入三角形式。

$$z = r(\cos\theta + i\sin\theta)$$

## 示例

考虑复数 $z = 1 + i$ 及其向三角形式的转换。模直接按定义计算。由于 $a = 1$ 且 $b = 1$，可得如下结果：

$$r = \sqrt{a^2 + b^2} = \sqrt{1^2 + 1^2} = \sqrt{2}$$

为确定辐角，注意点 $(1, 1)$ 位于复平面的第一象限，两个分量均为正。由于 $a > 0$，辐角由比值 $b/a$ 的反正切给出。代入数值，可得如下结果：

$$\theta = \arctan\left(\frac{b}{a}\right) = \arctan\left(\frac{1}{1}\right) = \arctan(1) = \frac{\pi}{4}$$

这一结果与几何上的情形一致：复数 $1 + i$ 位于第一象限的角平分线上，与正实轴的夹角为 $\pi/4$ 弧度。

将 $r = \sqrt{2}$ 和 $\theta = \dfrac{\pi}{4}$ 代入三角形式，得到最终结果。复数 $1 + i$ 的三角形式如下。

$$z = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right)$$
