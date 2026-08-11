---
title: 积分的三角换元
title_en: Trigonometric Substitution for Integrals
source: https://algebrica.org/trigonometric-substitution-for-integrals/
license: CC BY-NC 4.0
tags:
  - antiderivative
  - completing-the-square
  - indefinite-integral
  - integration
  - integration-by-substitution
  - pythagorean-identity
  - right-triangle
  - trigonometric-substitution
translation:
  status: current
  source_hash: fb88dc24114c6e964848843aa6112180be7c562e0718216981b5e6e555743640
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 三角换元的原理

三角换元是计算含有二次表达式[平方根](../radicals/)的[积分](../indefinite-integrals/)的一种方法。通过三角学中的[勾股恒等式](../pythagorean-identity/)重写某些代数形式后，处理起来会容易得多。这一方法通过变量代换 $x = \phi(\theta)$，把二次根式下的表达式变成新变量中某个三角函数的平方；代换的具体形式需要经过选择。

经过适当的代数变形，初等微积分中的许多积分都可以化为以下三种标准形式，其中 $a > 0$：

$$\sqrt{a^2 - x^2} \qquad \sqrt{x^2 + a^2} \qquad \sqrt{x^2 - a^2}$$

为了使根式取实数值，变量 $x$ 必须位于相应的定义域内：

+ $\sqrt{a^2 - x^2}$ 要求 $x \in [-a, a]$。
+ $\sqrt{x^2 + a^2}$ 对每个 $x \in \mathbb{R}$ 都有定义。
+ $\sqrt{x^2 - a^2}$ 要求 $x \in (-\infty, -a] \cup [a, +\infty)$。

这些限制非常重要，因为它们不仅决定被积函数在哪里有定义，也决定换元中引入的辅助[角](../angles-and-angular-measure/) $\theta$ 的可取范围。特别地，为 $\theta$ 选择合适的[区间](../intervals/)可以确保反三角函数有定义，并且能一致地处理平方根产生的绝对值。这些表达式分别自然对应于一个勾股恒等式：

$$1 - \sin^2\theta = \cos^2\theta$$

$$1 + \tan^2\theta = \sec^2\theta$$

$$\sec^2\theta - 1 = \tan^2\theta$$

> 每种情形中的换元都经过选择，使根式内的项与这些恒等式之一的左侧相匹配，从而把根式化为不含根号的表达式。含有 $\sin x$ 和 $\cos x$ 的有理函数积分通常改用[魏尔斯特拉斯换元](../weierstrass-substitution/)，将三角表达式转化为新变量的有理函数。

- - -

实际中，根式下的表达式很少一开始就呈现三种标准形式之一。常见的预处理步骤是通过[配方法](../completing-the-square/)将一般二次式 $ax^2 + bx + c$ 重写为符合标准模式的形式。例如，$x^2 + 4x + 5$ 配方后变成 $(x + 2)^2 + 1$，这就是 $u^2 + a^2$ 的形式，其中 $u = x + 2$ 且 $a = 1$。二次式完成这种重写后，再作简单换元 $u = x + k$，就能把积分化为下面三种情形之一，随后应用适当的三角换元。

> 认识到这一步预处理往往就能决定所需的换元。当被积函数不能立即与熟悉的模式匹配时，配方重写会让正确的情形显现出来。

## 从换元到几何

从几何角度看，这些换元可以解释为[圆锥曲线](../introduction-to-conics/)的参数化。每个勾股恒等式与其所描述曲线之间的对应关系如下。

+ 恒等式 $\sin^2\theta + \cos^2\theta = 1$ 对应[单位圆](../unit-circle/)，并支撑 $\sqrt{a^2 - x^2}$ 这一情形。
+ 恒等式 $1 + \tan^2\theta = \sec^2\theta$ 和 $\sec^2\theta - 1 = \tan^2\theta$ 与[双曲线](../hyperbola/) $x^2 - y^2 = a^2$ 的几何性质有关，并支撑 $\sqrt{x^2 + a^2}$ 和 $\sqrt{x^2 - a^2}$ 这两种形式。

因此，三角换元可以理解为二次曲线的一种几何重新参数化，而不仅仅是代数工具。

## 形式 $\sqrt{a^2 - x^2}$

当被积函数含有 $\sqrt{a^2 - x^2}$ 形式的表达式时，适当的三角换元应对应勾股恒等式 $1 - \sin^2\theta = \cos^2\theta$；而该恒等式本身来自[正弦和余弦](../sine-and-cosine/)之间的基本关系。令：

$$x = a\sin\theta$$

于是根式下的代数量可以用三角[函数](../functions/)重写。对等式两边关于 $\theta$ 求导：

$$dx = a\cos\theta \ d\theta$$

将 $x = a\sin\theta$ 代入根式：

$$\sqrt{a^2 - x^2} = \sqrt{a^2 - a^2\sin^2\theta}$$

从根式内的表达式中提出 $a^2$：

$$\sqrt{a^2(1 - \sin^2\theta)}$$

利用恒等式 $1 - \sin^2\theta = \cos^2\theta$，得到：

$$\sqrt{a^2\cos^2\theta} = a\sqrt{\cos^2\theta} = a|\cos\theta|$$

为避免绝对值带来的歧义，通常将角 $\theta$ 限制在区间：

$$\theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$$

因为在这个区间上 $\cos\theta \geq 0$。在此限制下，不再需要绝对值，根式化简为：

$$\sqrt{a^2 - x^2} = a\cos\theta$$

换回原变量 $x$，由换元得到的关系可以明确写成：

$$\sin\theta = \frac{x}{a} \qquad \cos\theta = \frac{\sqrt{a^2 - x^2}}{a}$$

角可以通过[反正弦](../arcsine-function/)表示为：

$$\theta = \arcsin\left(\frac{x}{a}\right)$$

这些关系使得积分的最终结果可以完全用原变量表示。

> 几何解释通常很有帮助。如果 $\sin\theta = x/a$，那么以 $a$ 为斜边、以 $x$ 为对边、以 $\sqrt{a^2 - x^2}$ 为邻边的[直角三角形](../right-triangle-trigonometry/)就编码了相关恒等式。

$\sqrt{a^2 - x^2}$ 的标准对应关系可以总结如下：

+ 根式形式：$\sqrt{a^2 - x^2}$。
+ 换元：$x = a\sin\theta$。
+ 使用的恒等式：$1 - \sin^2\theta = \cos^2\theta$。

## 几何解释

使用三角换元时，通过直角三角形来观察 $\theta$ 与 $x$ 的关系往往很有用。直接从三角形的边读取三角函数的值，就不必显式求出 $\theta$。

![图 1](/assets/integrals/svg/trigonometric-substitution-for-integrals-1.zh.svg)

由 $x = a\sin\theta$ 可以构造一个直角三角形，其中：

+ 斜边为 $a$；
+ 对边为 $x$；
+ 邻边为 $\sqrt{a^2 - x^2}$。

由于 $\sin\theta = x/a$，可知 $\cos\theta = \sqrt{a^2 - x^2}/a$。这一几何表示使得 $\theta$ 的所有三角函数都能直接用 $x$ 重写。

> 同样的构造也适用于另外两种标准形式。对于 $\sqrt{x^2 + a^2}$，三角形的对边为 $x$，邻边为 $a$，斜边为 $\sqrt{x^2 + a^2}$；对于 $\sqrt{x^2 - a^2}$，斜边变为 $x$，邻边为 $a$，对边为 $\sqrt{x^2 - a^2}$。在每种情形中，三角形都直接由换元构造，并为代回原变量这一步提供指引。

## 例 1

计算下面的积分：

$$\int \sqrt{a^2 - x^2} \ dx \qquad (a > 0)$$

由于被积函数含有 $\sqrt{a^2 - x^2}$，引入三角换元：

$$x = a\sin\theta \qquad \theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$$

于是恒等式 $1 - \sin^2\theta = \cos^2\theta$ 适用，并且在这个区间上 $\cos\theta \geq 0$。对换元式求导：

$$dx = a\cos\theta \ d\theta$$

根式变为：

$$\sqrt{a^2 - x^2} = \sqrt{a^2 - a^2\sin^2\theta} = a\sqrt{1 - \sin^2\theta} = a\cos\theta$$

将所有内容代入积分：

$$
\begin{align}
\int \sqrt{a^2 - x^2} \ dx &= \int (a\cos\theta)(a\cos\theta \ d\theta) \\[6pt]
                          &= a^2 \int \cos^2\theta \ d\theta
\end{align}
$$

要计算 $\cos^2\theta$ 的积分，使用[二倍角恒等式](../reduction-formulas-and-reference-angles/)：

$$\cos^2\theta = \frac{1 + \cos 2\theta}{2}$$

因此：

$$a^2 \int \cos^2\theta \ d\theta = \frac{a^2}{2}\int (1 + \cos 2\theta) \ d\theta$$

逐项积分：

$$\frac{a^2}{2}\theta + \frac{a^2}{4}\sin 2\theta + c$$

换回变量 $x$，由换元 $x = a\sin\theta$ 得到：

$$\theta = \arcsin\left(\frac{x}{a}\right)$$

利用恒等式 $\sin 2\theta = 2\sin\theta\cos\theta$，以及：

$$\sin\theta = \frac{x}{a} \qquad \cos\theta = \frac{\sqrt{a^2 - x^2}}{a}$$

得到：

$$\sin 2\theta = 2 \cdot \frac{x}{a} \cdot \frac{\sqrt{a^2 - x^2}}{a} = \frac{2x\sqrt{a^2 - x^2}}{a^2}$$

代回：

$$\frac{a^2}{2}\theta + \frac{a^2}{4}\sin 2\theta = \frac{a^2}{2}\arcsin\left(\frac{x}{a}\right) + \frac{x}{2}\sqrt{a^2 - x^2}$$

结果为：

$$\int \sqrt{a^2 - x^2} \ dx = \frac{x}{2}\sqrt{a^2 - x^2} + \frac{a^2}{2}\arcsin\left(\frac{x}{a}\right) + c$$

> 这个积分先化为三角形式，通过标准恒等式求出结果，最后完全改写为原变量 $x$ 的表达式。

## 形式 $\sqrt{x^2 + a^2}$

当被积函数含有 $\sqrt{x^2 + a^2}$ 形式的表达式时，基于勾股恒等式的换元很方便：

$$1 + \tan^2\theta = \sec^2\theta$$

这个恒等式联系了[正切](../tangent-and-cotangent/)和[正割](../secant-and-cosecant/)。令 $x = a\tan\theta$，于是根式内的二次表达式可以用三角函数重写。对等式两边关于 $\theta$ 求导：

$$dx = a\sec^2\theta \ d\theta$$

将 $x = a\tan\theta$ 代入根式：

$$\sqrt{x^2 + a^2} = \sqrt{a^2\tan^2\theta + a^2}$$

从根式内的表达式中提出 $a^2$：

$$\sqrt{a^2(\tan^2\theta + 1)}$$

利用恒等式 $1 + \tan^2\theta = \sec^2\theta$，得到：

$$\sqrt{a^2\sec^2\theta} = a\sqrt{\sec^2\theta} = a|\sec\theta|$$

为了消除绝对值带来的歧义，将角 $\theta$ 限制在：

$$\theta \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$$

因为在这个区间上 $\cos\theta > 0$，从而 $\sec\theta > 0$。在此限制下，根式化简为：

$$\sqrt{x^2 + a^2} = a\sec\theta$$

换回原变量 $x$，由换元得到的关系可以明确写成：

$$\tan\theta = \frac{x}{a} \qquad \sec\theta = \frac{\sqrt{x^2 + a^2}}{a} \qquad \theta = \arctan\left(\frac{x}{a}\right)$$

> 几何解释是直接的。由关系 $\tan\theta = x/a$ 可以构造一个直角三角形，其中邻边长度为 $a$，对边长度为 $x$，而根据[勾股定理](../pythagorean-theorem/)，斜边长度为 $\sqrt{x^2 + a^2}$。这个三角形为换元提供了几何图像，也说明了为什么根式会化为三角函数。

$\sqrt{x^2 + a^2}$ 的标准对应关系可以总结如下：

+ 根式形式：$\sqrt{x^2 + a^2}$。
+ 换元：$x = a\tan\theta$。
+ 使用的恒等式：$1 + \tan^2\theta = \sec^2\theta$。

## 例 2

计算下面的积分：

$$\int \frac{dx}{\sqrt{x^2 + a^2}} \qquad (a > 0)$$

由于被积函数含有 $\sqrt{x^2 + a^2}$，引入三角换元：

$$x = a\tan\theta \qquad \theta \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$$

于是恒等式 $1 + \tan^2\theta = \sec^2\theta$ 适用，并且在这个区间上 $\sec\theta > 0$。对换元式求导：

$$dx = a\sec^2\theta \ d\theta$$

根式变为：

$$
\begin{align}
\sqrt{x^2 + a^2} &= \sqrt{a^2\tan^2\theta + a^2} \\[6pt]
                 &= a\sqrt{\tan^2\theta + 1} \\[6pt]
                 &= a\sec\theta
\end{align}
$$

将所有内容代入积分：

$$\int \frac{dx}{\sqrt{x^2 + a^2}} = \int \frac{a\sec^2\theta}{a\sec\theta} \ d\theta = \int \sec\theta \ d\theta$$

为计算 $\int \sec\theta \ d\theta$，将被积函数乘以 $(\sec\theta + \tan\theta)/(\sec\theta + \tan\theta)$：

$$
\begin{align}
\int \sec\theta \ d\theta &= \int \frac{\sec\theta(\sec\theta + \tan\theta)}{\sec\theta + \tan\theta} \ d\theta \\[6pt]
                          &= \int \frac{\sec^2\theta + \sec\theta\tan\theta}{\sec\theta + \tan\theta} \ d\theta
\end{align}
$$

令 $u = \sec\theta + \tan\theta$，则 $du = (\sec^2\theta + \sec\theta\tan\theta) \ d\theta$，所以分子正好是 $du$，积分化为：

$$\int \frac{du}{u} = \ln|u| + c = \ln|\sec\theta + \tan\theta| + c$$

换回变量 $x$，利用：

$$\tan\theta = \frac{x}{a} \qquad \sec\theta = \frac{\sqrt{x^2 + a^2}}{a}$$

得到：

$$\ln|\sec\theta + \tan\theta| + c = \ln\left|\frac{\sqrt{x^2 + a^2} + x}{a}\right| + c$$

由于 $\sqrt{x^2 + a^2} > |x|$ 对每个 $x \in \mathbb{R}$ 都成立，所以 $\sqrt{x^2 + a^2} + x$ 严格为正，可以去掉绝对值。此外：

$$\ln\left|\frac{\sqrt{x^2 + a^2} + x}{a}\right| = \ln\!\left(\sqrt{x^2 + a^2} + x\right) - \ln a$$

而 $\ln a$ 是常数，可以吸收到 $c$ 中。结果为：

$$\int \frac{dx}{\sqrt{x^2 + a^2}} = \ln\!\left(\sqrt{x^2 + a^2} + x\right) + c$$

> 这个积分先化为三角形式，再通过正割的标准变形求出，最后完全改写为原变量 $x$ 的表达式。

## 形式 $\sqrt{x^2 - a^2}$

当被积函数含有 $\sqrt{x^2 - a^2}$ 形式的表达式时，自然的换元基于勾股恒等式：

$$\sec^2\theta - 1 = \tan^2\theta$$

它等价于基本关系 $1 + \tan^2\theta = \sec^2\theta$。令：

$$x = a\sec\theta$$

于是根式内的二次表达式可以用三角函数重写。对等式两边关于 $\theta$ 求导：

$$dx = a\sec\theta\tan\theta \ d\theta$$

将 $x = a\sec\theta$ 代入根式：

$$\sqrt{x^2 - a^2} = \sqrt{a^2\sec^2\theta - a^2}$$

在根式内提出 $a^2$：

$$\sqrt{a^2(\sec^2\theta - 1)}$$

利用恒等式 $\sec^2\theta - 1 = \tan^2\theta$，得到：

$$\sqrt{a^2\tan^2\theta} = a\sqrt{\tan^2\theta} = a|\tan\theta|$$

绝对值的出现反映了 $\tan\theta$ 的符号取决于 $\theta$ 所选的定义域。在假设 $x \geq a$ 的条件下，一个方便的限制是：

$$\theta \in \left[0, \frac{\pi}{2}\right)$$

因为在这个区间上 $\sec\theta \geq 1$ 且 $\tan\theta \geq 0$。在此限制下，根式化简为：

$$\sqrt{x^2 - a^2} = a\tan\theta$$

> 当 $x \leq -a$ 时，相应的限制是 $\theta \in \left(\frac{\pi}{2}, \pi\right]$，此时 $\sec\theta \leq -1$ 且 $\tan\theta \leq 0$；在这种情形下 $|\tan\theta| = -\tan\theta$。对于大多数教材题目，假设 $x \geq a$ 并使用区间 $\left[0, \frac{\pi}{2}\right)$ 就足够了。

- - -

换回原变量 $x$，由换元得到的关系可以明确写成：

$$\sec\theta = \frac{x}{a} \qquad \tan\theta = \frac{\sqrt{x^2 - a^2}}{a}$$

等价地，角本身可以通过反三角函数表示为：

$$\theta = \operatorname{arcsec}\left(\frac{x}{a}\right)$$

这在合适的定义域上成立。不过在许多实际情形中，只要直接把 $\tan\theta$ 和 $\sec\theta$ 用 $x$ 与 $\sqrt{x^2 - a^2}$ 表示即可，无需显式求出 $\theta$。

> 几何解释直接来自关系 $\sec\theta = x/a$。可以构造一个[直角三角形](../right-triangle-trigonometry/)，其斜边长度为 $x$，邻边长度为 $a$，而根据勾股定理，对边长度为 $\sqrt{x^2 - a^2}$。这个三角形使换元的几何意义清晰可见，并且可以直接从三角形的边读出 $\sec\theta$ 和 $\tan\theta$ 的值，而无需显式求出 $\theta$。

## 例 3

计算下面的积分：

$$\int \frac{dx}{\sqrt{x^2 - a^2}} \qquad (a > 0, \ x > a)$$

由于被积函数含有 $\sqrt{x^2 - a^2}$，引入三角换元：

$$x = a\sec\theta \qquad \theta \in \left[0, \frac{\pi}{2}\right)$$

于是恒等式 $\sec^2\theta - 1 = \tan^2\theta$ 适用，并且在这个区间上 $\tan\theta \geq 0$。对换元式求导：

$$dx = a\sec\theta\tan\theta \ d\theta$$

根式变为：

$$
\begin{align}
\sqrt{x^2 - a^2} &= \sqrt{a^2\sec^2\theta - a^2} \\[6pt]
                 &= a\sqrt{\sec^2\theta - 1} \\[6pt]
                 &= a\tan\theta
\end{align}
$$

将所有内容代入积分：

$$\int \frac{dx}{\sqrt{x^2 - a^2}} = \int \frac{a\sec\theta\tan\theta}{a\tan\theta} \ d\theta = \int \sec\theta \ d\theta$$

像例 2 那样计算 $\int \sec\theta \ d\theta$：

$$\int \sec\theta \ d\theta = \ln|\sec\theta + \tan\theta| + c$$

换回变量 $x$，利用：

$$\sec\theta = \frac{x}{a} \qquad \tan\theta = \frac{\sqrt{x^2 - a^2}}{a}$$

得到：

$$\ln|\sec\theta + \tan\theta| + c = \ln\!\left|\frac{x + \sqrt{x^2 - a^2}}{a}\right| + c$$

由于 $x > a > 0$ 且 $\sqrt{x^2 - a^2} \geq 0$，所以 $x + \sqrt{x^2 - a^2}$ 严格为正，可以去掉绝对值。此外：

$$\ln\!\left(\frac{x + \sqrt{x^2 - a^2}}{a}\right) = \ln\!\left(x + \sqrt{x^2 - a^2}\right) - \ln a$$

而 $\ln a$ 是常数，可以吸收到 $c$ 中。结果为：

$$\int \frac{dx}{\sqrt{x^2 - a^2}} = \ln\!\left(x + \sqrt{x^2 - a^2}\right) + c$$

> 这个推导的结构与例 2 十分相似。在两种情形中，换元都把积分化为 $\int \sec\theta \ d\theta$；区别完全在于代回原变量这一步，其中 $\sec\theta$ 和 $\tan\theta$ 关于 $x$ 的表达式反映了两种不同根式形式的几何结构。

## 例 4

前面的例子都从已经写成三种标准形式之一的根式开始。实际中，根式下的二次式通常是一般三项式，只有在配方后才能看出应该使用的换元。考虑下面的积分：

$$\int \frac{dx}{\sqrt{x^2 + 4x + 5}}$$

根式下的表达式还不是标准形式。第一步是对二次式配方：

$$x^2 + 4x + 5 = (x + 2)^2 + 1$$

这一重写说明根式具有 $\sqrt{u^2 + a^2}$ 的形式，其中 $u = x + 2$ 且 $a = 1$。引入辅助换元：

$$u = x + 2 \qquad du = dx$$

将积分化为：

$$\int \frac{dx}{\sqrt{x^2 + 4x + 5}} = \int \frac{du}{\sqrt{u^2 + 1}}$$

右侧积分正是例 2 中处理过的标准形式，其中 $a = 1$。作三角换元 $u = \tan\theta$，其中 $\theta \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$，同样的推导给出：

$$\int \frac{du}{\sqrt{u^2 + 1}} = \ln\!\left(\sqrt{u^2 + 1} + u\right) + c$$

将 $u = x + 2$ 代回：

$$\int \frac{dx}{\sqrt{x^2 + 4x + 5}} = \ln\!\left(\sqrt{x^2 + 4x + 5} + x + 2\right) + c$$

> 决定性步骤是最初的配方，它揭示了一般二次式中隐藏的标准形式。一旦根式被重写为 $\sqrt{u^2 + a^2}$，问题就化为已经解决的情形，三角换元也可以照常进行。

## 决策流程

下面的分步流程总结了如何对含二次根式的一般积分应用三角换元。

+ 检查根式下的表达式。当二次式不是标准形式时，配方把它重写为 $u^2 \pm a^2$ 或 $a^2 - u^2$，并引入辅助换元 $u = x + k$，从而化为标准根式。
+ 识别标准形式并选择相应的三角换元：$x = a\sin\theta$ 对应 $\sqrt{a^2 - x^2}$，$x = a\tan\theta$ 对应 $\sqrt{x^2 + a^2}$，$x = a\sec\theta$ 对应 $\sqrt{x^2 - a^2}$。
+ 对换元式求导，得到 $dx$ 关于 $d\theta$ 的表达式，并应用相关的勾股恒等式，使根式在所选 $\theta$ 区间上化为单个三角函数。
+ 计算所得的三角积分。对于定积分形式，要按照[换元积分](../integration-by-substitution/)页面中的说明，根据换元更新积分上下限。
+ 对于不定积分，通过直角三角形或反三角函数代回，返回原变量 $x$。

> 当被积函数是 $x$ 的[有理函数](../rational-functions/)，而不是二次式的根式时，应使用[部分分式分解](../partial-fraction-decomposition/)以及[有理函数的积分](../integral-of-rational-functions/)页面中的技巧。对于 $\sin x$ 和 $\cos x$ 的有理函数，[魏尔斯特拉斯换元](../weierstrass-substitution/)提供了一种系统的替代方法。
