---
title: 复数的指数形式
title_en: Complex Numbers in Exponential Form
source: https://algebrica.org/complex-numbers-exponential-form/
license: CC BY-NC 4.0
tags:
  - complex-argument
  - complex-conjugate
  - complex-exponential
  - complex-modulus
  - complex-numbers
  - de-moivre-theorem
  - euler-formula
  - exponential-form
  - principal-argument
  - roots-of-unity
translation:
  status: current
  source_hash: 713ee97ec6158a5a5598f9ffe9b7fe0029a940647f31d048c50a3aaef95be13f
  translator: omp
  updated: "2026-07-23T10:32:43.065Z"
---
## 引言

[代数形式](../complex-numbers-introduction/) $z = a + bi$ 是复数最为人熟知的表示，但在处理乘法、幂和根时并不方便。另一种与代数形式等价、且特别适合这些运算的表示，就是指数形式：

$$z = re^{i\theta}$$

该表达式中的两个量具有直接的几何含义：

+ $r = |z| = \sqrt{a^2 + b^2}$ 是[模](../complex-numbers-introduction/)，表示 $z$ 在复平面中到原点的距离。
+ $\theta = \arg(z)$ 是辐角，即正实轴与表示 $z$ 的[向量](../vectors/)之间的夹角，其大小以[弧度](../angles-and-angular-measure/)为单位给出。

![图 1](/assets/complex-numbers/svg/complex-numbers-trigonometric-form-1.svg)

$r$ 与 $\theta$ 仍保持其在复数的[三角形式](../complex-numbers-trigonometric-form/)中所具有的含义。

> 与 $z$ 对应的点 $P$ 既可用其直角坐标 $(a, b)$ 描述，也可用其极坐标 $(r, \theta)$ 描述。这种二重性正是复数的代数描述与几何描述之间的桥梁。

- - -

方程 $z = re^{i\theta}$ 是[欧拉公式](../eulers-formula/)的直接推论：

$$e^{i\theta} = \cos\theta + i\sin\theta$$

两边同乘 $r$ 即可看出，指数表示与[三角形式](../complex-numbers-trigonometric-form/)一致：

$$z = r(\cos\theta + i\sin\theta)$$

欧拉公式本身可以通过将 $e^{ix}$、$\cos x$、$\sin x$ 展开为[泰勒级数](../taylor-series/)，并注意到 $e^{ix}$ 的级数分成实部与虚部而得到证明：

$$e^{ix} = \sum_{n=0}^{\infty} \frac{(ix)^n}{n!} = \cos x + i\sin x$$

> 该公式中出现的欧拉数 $e$ 是分析学中的一个基本常数。它作为数列极限的起源，在[欧拉数](../euler-number-limit-sequence/)词条中有所讨论。

- - -

给定复数 $z = a + bi$，其共轭复数定义为：

$$\overline{z} = a - bi$$

在指数形式下，$z = re^{i\theta}$ 的共轭复数可通过将辐角取相反数得到：

$$\overline{z} = re^{-i\theta}$$

在几何上，这对应于将 $z$ 关于复平面的实轴作反射。

## 如何将复数表示为指数形式

给定复数 $z = a + bi$，将其化为指数形式分三步进行。

+ 按定义计算 $z$ 的模：

$$r = \sqrt{a^2 + b^2}$$

+ 确定辐角 $\theta$，即表示 $z$ 的[向量](../vectors/)与正实轴所成的角。当 $a > 0$ 时，辐角可由反正切公式直接求得：

$$\theta = \arctan\left(\frac{b}{a}\right)$$

当 $a \leq 0$ 时，必须根据 $z$ 在复平面中所在的象限来选取 $\theta$ 的正确值。

+ 将 $r$ 和 $\theta$ 代入指数表示：

$$z = re^{i\theta}$$

- - -

复数的辐角并非唯一确定。若 $\theta$ 是 $z$ 的一个辐角，则对任意整数 $k$，$\theta + 2k\pi$ 也是其辐角，且有：

$$z = re^{i(\theta + 2k\pi)} \qquad k \in \mathbb{Z}$$

因此，指数表示中的辐角只在模 $2\pi$ 的意义下确定。为消除这种不确定性，通常约定选取主辐角，记作 $\mathrm{Arg}(z)$，它满足：

$$-\pi < \mathrm{Arg}(z) \leq \pi$$

除特别说明外，辐角 $\theta$ 均理解为主辐角。

## 例 1

考虑复数 $z = 2 + 3i$，将其化为指数形式。直接按定义计算其模。由 $a = 2$ 和 $b = 3$，得：

$$
\begin{align}
r = |z| &= \sqrt{a^2 + b^2} \\[6pt]
        &= \sqrt{2^2 + 3^2} \\[6pt]
        &= \sqrt{4 + 9} \\[6pt]
        &= \sqrt{13}
\end{align}
$$

辐角 $\theta$ 是表示 $z$ 的向量与实轴正方向之间的夹角。由于 $a = 2 > 0$，该复数位于第一象限，可以直接使用反正切公式：

$$\theta = \arctan\left(\frac{b}{a}\right) = \arctan\left(\frac{3}{2}\right) \approx 0.98 \text{ rad}$$

将 $r = \sqrt{13}$ 和 $\theta \approx 0.98$ 代入指数形式，得：

$$z = \sqrt{13}e^{i\cdot 0.98}$$

## 例 2

考虑复数 $z = -1 + i$，将其化为指数形式。模同样直接按定义计算。由 $a = -1$ 和 $b = 1$，得：

$$
\begin{align}
r = |z| &= \sqrt{(-1)^2 + 1^2} \\[6pt]
        &= \sqrt{1 + 1} \\[6pt]
        &= \sqrt{2}
\end{align}
$$

辐角的确定需要更加小心。由于 $a = -1 < 0$ 和 $b = 1 > 0$，该复数位于第二象限。若单独使用反正切公式，会得到：

$$\arctan\left(\frac{b}{a}\right) = \arctan\left(\frac{1}{-1}\right) = \arctan(-1) = -\frac{\pi}{4}$$

该值对应第四象限，因此不是 $z$ 的正确辐角。为修正反正切值所在的象限，需要加上 $\pi$：

$$\theta = -\frac{\pi}{4} + \pi = \frac{3\pi}{4}$$

将 $r = \sqrt{2}$ 和 $\theta = \dfrac{3\pi}{4}$ 代入指数形式，得：

$$z = \sqrt{2}e^{i\frac{3\pi}{4}}$$

## 指数形式的性质

指数形式的主要优点之一是使复数的乘法、除法和幂运算变得简洁。给定两个复数 $z_1 = r_1 e^{i\theta_1}$ 和 $z_2 = r_2 e^{i\theta_2}$，其乘积的模等于模的乘积，辐角等于辐角的和：

$$z_1 z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)}$$

举一个具体的例子，考虑 $z_1 = 2e^{i\pi/3}$ 和 $z_2 = 3e^{i\pi/6}$。其乘积为：

$$z_1 z_2 = 2 \cdot 3 \cdot e^{i(\pi/3 + \pi/6)} = 6e^{i\pi/2}$$

乘积的模为 $6$，辐角为 $\pi/2$，对应复平面中的正虚轴方向。

- - -

类似地，当 $z_2 \neq 0$ 时，商的模等于模的商，辐角等于辐角的差：

$$\frac{z_1}{z_2} = \frac{r_1}{r_2}e^{i(\theta_1 - \theta_2)}$$

这两种运算都可视为复平面中的伸缩与旋转：乘法使模相乘、辐角相加，除法使模相除、辐角相减。整数[幂](../powers/)的运算同样高效。对于任意整数 $n$，幂运算的基本规则给出：

$$z^n = (re^{i\theta})^n = r^n e^{in\theta}$$

模变为原来的 $n$ 次幂，辐角乘以 $n$。将[欧拉公式](../eulers-formula/)应用于 $e^{in\theta}$，该恒等式等价于[棣莫弗定理](../de-moivre-theorem/)：

$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$$

例如，将 $z = re^{i\theta}$ 平方得：

$$z^2 = r^2 e^{i2\theta}$$

![图 2](/assets/complex-numbers/svg/complex-numbers-exponential-form-1.svg)

所得复数的模为 $r^2$，辐角为 $2\theta$。从几何上看，表示 $z$ 的向量在长度上伸缩了 $r$ 倍，并旋转到原角度的两倍处。

## 根的指数形式

指数形式为计算复数的 $n$ 次根提供了自然的框架。给定非零复数 $z = re^{i\theta}$ 和整数 $n \geq 1$，方程 $w^n = z$ 在 $\mathbb{C}$ 中恰有 $n$ 个不同的解，分别为：

$$w_k = \sqrt[n]{r}e^{i(\theta + 2k\pi)/n} \qquad k = 0, 1, \ldots, n-1$$

每个根的模为 $\sqrt[n]{r}$，辐角之间均匀相隔 $2\pi/n$。从几何上看，这 $n$ 个根对应于内接于以原点为圆心、半径为 $\sqrt[n]{r}$ 的[圆](../circumference/)的正多边形的顶点。当 $r = 1$ 且 $\theta = 0$ 时，便得到[单位根](../roots-of-unity/)，其顶点落在单位圆上。

- - -

作为示例，考虑 $z = 8$ 的立方根。写出 $z = 8e^{i\cdot 0}$，可得 $r = 8$ 和 $\theta = 0$，因此三个根为：

$$w_k = \sqrt[3]{8}e^{i\cdot 2k\pi/3} = 2e^{i\cdot 2k\pi/3} \qquad k = 0, 1, 2$$

通过[欧拉公式](../eulers-formula/)逐一算出每个根，得到如下结果。

$$
\begin{align}
w_0 &= 2e^{i\cdot 0} = 2 \\[6pt]
w_1 &= 2e^{i\cdot 2\pi/3} = 2\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -1 + i\sqrt{3} \\[6pt]
w_2 &= 2e^{i\cdot 4\pi/3} = 2\left(-\frac{1}{2} - i\frac{\sqrt{3}}{2}\right) = -1 - i\sqrt{3}
\end{align}
$$

> 三个根的模均为 $2$，彼此之间相隔 $2\pi/3$ 的角度，在复平面中对应内接于以原点为圆心、半径为 $2$ 的圆的正三角形的三个顶点。
