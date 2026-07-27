---
title: 棣莫弗定理
title_en: De Moivre's Theorem
source: https://algebrica.org/de-moivre-theorem/
license: CC BY-NC 4.0
tags:
  - binomial-theorem
  - complex-argument
  - complex-modulus
  - complex-numbers
  - complex-powers
  - de-moivre-theorem
  - exponential-form
  - mathematical-induction
  - roots-of-unity
  - trigonometric-form
  - trigonometric-identities
translation:
  status: current
  source_hash: 07a54cca260f9c83df962f4f52ad6d0816b4c5d936b3f8f96d023fca032e1a49
  translator: omp
  updated: "2026-07-23T10:49:43.954Z"
---
## 动机

要计算复数的幂，最直接的方法是从其[代数形式](../complex-numbers-introduction/)出发，逐项展开表达式。对于 $z = a + ib$，平方得到：

$$
\begin{align}
z^2 &= (a + ib)^2 \\[6pt]
    &= a^2 + i2ab - b^2
\end{align}
$$

该方法对任意整数指数都成立，但随着 $n$ 增大，运算会越来越繁琐。$(a+ib)^n$ 的[二项式展开](../binomial-theorem/)所产生的项数随 $n$ 增长，而将结果分离为实部和虚部需要反复应用恒等式 $i^2 = -1$。超过三次或四次幂后，直接展开便不再实用。棣莫弗定理提供了一种基于 $z$ 的[三角形式](../complex-numbers-trigonometric-form/)的方法，可以完全绕过这些运算。

## 陈述与指数形式改写

考虑复数 $z$ 的整数次幂 $n \in \mathbb{Z}$，即表达式：

$$z^n \qquad n \in \mathbb{Z}$$

将 $z$ 写成三角形式，得到：

$$z = r(\cos\theta + i\sin\theta)$$

对正[整数](../integers/) $n$，幂 $z^n$ 通过将模取 $n$ 次幂、辐角乘以 $n$ 而得。结果是一个三角形式的新复数：

$$z^n = r^n(\cos(n\theta) + i\sin(n\theta))$$

该恒等式对正整数 $n$ 适用于任意复数 $z$；当 $n \leq 0$ 时，必须要求 $z \neq 0$。若 $n = p/q$ 是既约有理数，且 $q > 0$、$z \neq 0$，同一表达式仍然有意义，但右端只给出 $z^{p/q}$ 的 $q$ 个不同值中的一个。将 $\theta$ 替换为 $\theta + 2k\pi$，其中 $k = 0, 1, \ldots, q-1$，即可得到全部取值。

- - -

三角形式有等价的指数形式改写。由[欧拉公式](../eulers-formula/)，恒等式

$$e^{i\theta} = \cos\theta + i\sin\theta$$

给出 $z$ 的指数表示：

$$z = re^{i\theta}$$

在此形式下，棣莫弗定理归结为通常幂运算规则的直接应用。将两端取整数次幂 $n$，得到：

$$z^n = (re^{i\theta})^n = r^n e^{in\theta}$$

模取 $n$ 次幂，辐角乘以 $n$，无需代数展开或三角运算。

## 归纳法证明

棣莫弗定理断言：对每个正整数 $n$ 与每个复数 $z = r(\cos\theta + i\sin\theta)$，下列恒等式成立。

$$z^n = r^n(\cos(n\theta) + i\sin(n\theta))$$

该公式通过对 $n$ 进行[归纳](../principle-of-mathematical-induction/)来证明。论证分为两部分：

+ 验证基础情形
+ 证明若在第 $n$ 步成立，则可推出在第 $n+1$ 步也成立

- - -

对于基础情形，令 $n = 1$ 便将公式化为 $z = r(\cos\theta + i\sin\theta)$，这按定义正是 $z$ 的三角形式。对于归纳步骤，假设公式对某个整数 $n \geq 1$ 成立：

$$z^n = r^n(\cos(n\theta) + i\sin(n\theta))$$

将两边同乘 $z = r(\cos\theta + i\sin\theta)$ 并展开乘积，得到：

$$z^{n+1} = r^{n+1}\bigl[(\cos(n\theta)\cos\theta - \sin(n\theta)\sin\theta) + i(\sin(n\theta)\cos\theta + \cos(n\theta)\sin\theta)\bigr]$$

方括号中的两个表达式分别是[余弦与正弦](../sine-and-cosine/)的加法公式。应用这些[三角恒等式](../trigonometric-identities/)将它们合并为单一的余弦项与正弦项，得到：

$$z^{n+1} = r^{n+1}(\cos((n+1)\theta) + i\sin((n+1)\theta))$$

于是恒等式在第 $n+1$ 步成立，正整数情形的归纳证明至此完成。当 $z \neq 0$ 且指数为零时，两边都等于 $1$。向负整数的推广可由公式 $z^{-n} = 1/z^n$ 结合恒等式 $1/(\cos\alpha + i\sin\alpha) = \cos(-\alpha) + i\sin(-\alpha)$ 得到，后者是余弦与正弦奇偶性的直接推论；此时同样要求 $z \neq 0$。

- - -

作为第一个例子，将复数 $z = re^{i\theta}$ 平方，得到：

$$z^2 = (re^{i\theta})^2 = r^2 e^{i2\theta}$$

![图 2](/assets/complex-numbers/svg/complex-numbers-exponential-form-1.svg)

结果是一个模为 $r^2$、辐角为 $2\theta$ 的复数。从几何上看，表示 $z$ 的[向量](../vectors/)在长度上被拉伸 $r$ 倍，并在复平面上旋转到原角度的两倍。

- - -

考虑复数 $z = 2 + 2i$，并计算 $z^4$。$z$ 的模由其定义直接求得：

$$|z| = \sqrt{2^2 + 2^2} = \sqrt{8} = 2\sqrt{2}$$

> 复数的模是它在复平面上到原点的距离，可对其实部和虚部应用[勾股定理](../pythagorean-theorem/)来计算。

- - -

$z$ 的辐角由虚部与实部之比的反正切值确定：

$$\theta = \arg(z) = \arctan\left(\frac{2}{2}\right) = \frac{\pi}{4}$$

> 由于实部与虚部相等且均为正，$z$ 落在第一象限的角平分线上，辐角恰为 $45^\circ$，即 $\pi/4$ 弧度。

- - -

将 $z$ 写成指数形式，得到：

$$z = 2\sqrt{2}e^{i\frac{\pi}{4}}$$

应用棣莫弗定理计算 $z^4$，得到：

$$z^4 = (2\sqrt{2})^4 \cdot e^{i \cdot 4 \cdot \frac{\pi}{4}} = (2\sqrt{2})^4 \cdot e^{i\pi}$$

模借助[幂](../powers/)的运算法则化简：

$$(2\sqrt{2})^4 = (2^1 \cdot 2^{1/2})^4 = (2^{3/2})^4 = 2^6 = 64$$

- - -

由在 $\theta = \pi$ 处取值的[欧拉公式](../eulers-formula/)可得 $e^{i\pi} = -1$，于是四次幂为：

$$z^4 = 64 \cdot (-1) = -64$$

> 同一结果也可用[二项式定理](../binomial-theorem/)将 $(2 + 2i)^4$ 作代数展开再化简来验证。

因此 $z = 2 + 2i$ 的四次幂是实数 $-64$。

## 推导三角恒等式

棣莫弗定理的一个实际应用是推导倍[角](../angles-and-angular-measure/)的[正弦与余弦](../sine-and-cosine/)的显式公式。其方法是用[二项式定理](../binomial-theorem/)展开定理的左端，再将结果分为实部和虚部。

对 $n = 3$，定理给出：

$$(\cos\theta + i\sin\theta)^3 = \cos(3\theta) + i\sin(3\theta)$$

用二项式公式展开左端得到四项：

$$(\cos\theta + i\sin\theta)^3 = \cos^3\theta + 3i\cos^2\theta\sin\theta + 3i^2\cos\theta\sin^2\theta + i^3\sin^3\theta$$

利用恒等式 $i^2 = -1$ 和 $i^3 = -i$，该表达式化简为一个实部和一个虚部：

$$= (\cos^3\theta - 3\cos\theta\sin^2\theta) + i(3\cos^2\theta\sin\theta - \sin^3\theta)$$

将实部和虚部分别与定理右端相等，得到三倍角公式：

$$\cos(3\theta) = \cos^3\theta - 3\cos\theta\sin^2\theta$$

$$\sin(3\theta) = 3\cos^2\theta\sin\theta - \sin^3\theta$$

两者都由一次二项式展开直接得出，无需反复使用和角的[三角恒等式](../trigonometric-identities/)。该方法可推广到任意正整数 $n$：$(\cos\theta + i\sin\theta)^n$ 的二项式展开的实部总是 $\cos(n\theta)$，虚部总是 $\sin(n\theta)$。

## 用棣莫弗定理求复数根

棣莫弗定理也可用于求一个复数的 $n$ 次根。考虑方程：

$$z^n = w$$

其中 $w \in \mathbb{C}$ 且 $w \neq 0$。未知数是其 $n$ 次幂等于 $w$ 的复数 $z$。由于复数的辐角只在模 $2\pi$ 的意义下确定，数 $w$ 写成指数形式为：

$$w = re^{i(\theta + 2k\pi)} \qquad k \in \mathbb{Z}$$

对方程 $z^n = w$ 应用棣莫弗定理并对两边取 $n$ 次根，得到 $w$ 的 $n$ 次根的一般公式：

$$z_k = \sqrt[n]{r}\cdot e^{i\left(\frac{\theta + 2k\pi}{n}\right)} \qquad k = 0, 1, \ldots, n-1$$

$z_0, z_1, \ldots, z_{n-1}$ 这组值恰为 $n$ 个不同的复数根。它们位于以原点为圆心、半径为 $\sqrt[n]{r}$ 的[圆](../circumference/)上，相邻两根之间的角度间隔为 $2\pi/n$。从几何上看，这些根是该圆内接正 $n$ 边形的顶点。当 $w = 1$ 时，得到[单位根](../roots-of-unity/)，将在下一个例子中详细讨论。

## 例 1

考虑方程：

$$z^3 = 1$$

实数解 $z = 1$ 立即可得，但在 $\mathbb{C}$ 中该方程有三个不同的解，在[单位圆](../unit-circle/)上等距分布。

![图 1](/assets/complex-numbers/svg/roots-of-unity-1.svg)

由于 $1$ 的辐角只在模 $2\pi$ 的意义下确定，该数写成指数形式为：

$$1 = e^{i \cdot 2k\pi} \qquad k \in \mathbb{Z}$$

用 $r = 1$ 和 $\theta = 0$ 代入一般根公式，得到：

$$z_k = \sqrt[3]{1}\cdot e^{i\left(\frac{2k\pi}{3}\right)} = e^{i \cdot \frac{2k\pi}{3}} \qquad k = 0, 1, 2$$

通过[欧拉公式](../eulers-formula/)将三个根具体算出，得到：

$$
\begin{align}
z_0 &= e^{i \cdot 0} = \cos(0) + i\sin(0) = 1 \\[6pt]
z_1 &= e^{i \cdot \frac{2\pi}{3}} = \cos\left(\frac{2\pi}{3}\right) + i\sin\left(\frac{2\pi}{3}\right) = -\frac{1}{2} + i\frac{\sqrt{3}}{2} \\[6pt]
z_2 &= e^{i \cdot \frac{4\pi}{3}} = \cos\left(\frac{4\pi}{3}\right) + i\sin\left(\frac{4\pi}{3}\right) = -\frac{1}{2} - i\frac{\sqrt{3}}{2}
\end{align}
$$

这就是三个三次[单位根](../roots-of-unity/)，在复平面上排列为单位圆内接等边三角形的三个顶点。
