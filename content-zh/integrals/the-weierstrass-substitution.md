---
title: 魏尔斯特拉斯换元
title_en: The Weierstrass Substitution
source: https://algebrica.org/the-weierstrass-substitution/
license: CC BY-NC 4.0
tags:
  - arctangent
  - half-angle-substitution
  - indefinite-integral
  - integration-by-substitution
  - partial-fractions
  - rational-functions
  - trigonometric-identities
  - trigonometric-integrals
  - weierstrass-substitution
translation:
  status: current
  source_hash: 29e0d4e609ab1b85f79c8cf32afa3a8db1c51499c71d636c3d71ee87977e371c
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 要处理的积分类型

初等微积分中遇到的许多积分都包含一个[有理函数](../rational-functions/)，其变量本身又是正弦和余弦的某种组合。例如：

$$\frac{1}{1 + \sin x} \qquad \frac{1}{5 - 3\cos x} \qquad \frac{1}{\sin x + \cos x}$$

这些表达式具有共同的结构：分子和分母都是关于 $\sin x$ 与 $\cos x$ 的[多项式](../polynomials/)。[三角积分](../integral-of-trigonometric-functions/)所使用的降幂恒等式，或从其余部分中分离出一个因子的做法，并不能为这类被积函数提供统一的方法。我们需要的是一次统一的变量代换，把 $\sin x$ 与 $\cos x$ 的每个有理表达式都转化为新变量的普通有理函数；这样问题就归结为[有理函数的积分](../integral-of-rational-functions/)，再用多项式除法和[部分分式分解](../partial-fraction-decomposition/)处理。

实现这一点的换元建立在半角 $x/2$ 上，并在一步之内利用了联系[正切](../tangent-and-cotangent/)、[正弦和余弦](../sine-and-cosine/)的代数恒等式。

## 换元 $t = \tan(x/2)$

通过下面的等式引入新变量：

$$t = \tan\left(\frac{x}{2}\right) \tag{1}$$

暂时将[角](../angles-and-angular-measure/) $x$ 限制在开[区间](../intervals/) $(-\pi, \pi)$ 内，这样 $\tan(x/2)$ 有定义，并且映射 $x \mapsto t$ 是到整个实数轴的双射。通过逆关系 $x = 2\arctan t$ 可以恢复原变量；当结果需要重新用 $x$ 表示时，就会用到[反正切](../arctangent-and-arccotangent/)函数。

这个换元的力量在于，$\sin x$、$\cos x$ 和微分 $dx$ 都可以写成 $t$ 的有理闭式表达式。推导这些表达式需要使用二倍角恒等式以及[勾股恒等式](../pythagorean-identity/) $\sin^2\theta + \cos^2\theta = 1$。

## 把正弦、余弦与微分表示为有理式

出发点是正弦的[二倍角恒等式](../trigonometric-identities/)：

$$\sin x = 2\sin\left(\frac{x}{2}\right)\cos\left(\frac{x}{2}\right)$$

将右端写成 $2\tan(x/2)\cos^2(x/2)$，并使用恒等式 $\cos^2(x/2) = 1/(1 + \tan^2(x/2))$，即可得到正弦的形式：

$$\sin x = \frac{2t}{1 + t^2} \tag{2}$$

余弦的二倍角恒等式为 $\cos x = \cos^2(x/2) - \sin^2(x/2)$。将分子和分母同时除以 $\cos^2(x/2)$；根据勾股恒等式，除后的分母等于 $1$，于是得到：

$$\cos x = \frac{1 - t^2}{1 + t^2} \tag{3}$$

对关系 $t = \tan(x/2)$ 关于 $x$ 求导，可以计算微分：

$$\frac{dt}{dx} = \frac{1}{2}\sec^2\left(\frac{x}{2}\right) = \frac{1}{2}\left(1 + \tan^2\left(\frac{x}{2}\right)\right) = \frac{1 + t^2}{2}$$

解出 $dx$，得到第三个基本恒等式：

$$dx = \frac{2}{1 + t^2} \ dt \tag{4}$$

公式 $(2)$、$(3)$ 和 $(4)$ 是这一方法的三把钥匙。将它们代入 $\sin x$ 与 $\cos x$ 的任意有理表达式，就会得到 $t$ 的有理表达式；随后可以使用有理函数积分的方法：多项式除法、部分分式分解，以及初等基本块的积分。

> 微分引入的因子 $2/(1+t^2)$，正是 $\arctan$ 导数中出现的因子。这一巧合反映了两个变量之间的逆关系 $x = 2\arctan t$。每个公式中都出现 $1 + t^2$，正是这一联系的直接结果。

## 例 1

考虑积分：

$$\int \frac{dx}{1 + \sin x}$$

应用换元并使用恒等式 $(2)$，分母变为：

$$
\begin{align}
1 + \sin x &= 1 + \frac{2t}{1+t^2} \\[6pt]
           &= \frac{1 + t^2 + 2t}{1+t^2} \\[6pt]
           &= \frac{(1+t)^2}{1+t^2}
\end{align}
$$

将这个表达式与微分 $(4)$ 合并，被积函数化为：

$$
\begin{align}
\frac{1}{1+\sin x} \ dx &= \frac{1+t^2}{(1+t)^2} \cdot \frac{2}{1+t^2} \ dt \\[6pt]
                       &= \frac{2}{(1+t)^2} \ dt
\end{align}
$$

因子 $1 + t^2$ 恰好约去，剩下的只是关于 $t$ 的积分，其[反导数](../indefinite-integrals/)可以直接得到：

$$\int \frac{2}{(1+t)^2} \ dt = -\frac{2}{1+t} + c$$

利用恒等式 $t = \tan(x/2)$ 换回原变量，最终答案为：

$$\int \frac{dx}{1 + \sin x} = -\frac{2}{1 + \tan(x/2)} + c$$

> 通过直接求导可以检查这个结果；经过简短计算后，会恢复原来的被积函数。

## 例 2

考虑积分：

$$\int \frac{dx}{5 - 3\cos x}$$

使用恒等式 $(3)$，分母变为：

$$
\begin{align}
5 - 3\cos x &= 5 - 3 \cdot \frac{1 - t^2}{1+t^2} \\[6pt]
            &= \frac{5(1+t^2) - 3(1-t^2)}{1+t^2} \\[6pt]
            &= \frac{2 + 8t^2}{1+t^2} \\[6pt]
            &= \frac{2(1 + 4t^2)}{1+t^2}
\end{align}
$$

将这个结果与微分 $(4)$ 合并，被积函数大幅简化：

$$
\begin{align}
\frac{1}{5-3\cos x} \ dx &= \frac{1+t^2}{2(1+4t^2)} \cdot \frac{2}{1+t^2} \ dt \\[6pt]
                        &= \frac{dt}{1 + 4t^2}
\end{align}
$$

再次约去 $1 + t^2$ 是关键步骤。剩余积分具有标准的反正切形式，因为 $1 + 4t^2 = 1 + (2t)^2$。令 $u = 2t$，于是 $du = 2 \ dt$，积分变为：

$$
\begin{align}
\int \frac{dt}{1 + 4t^2} &= \frac{1}{2}\int \frac{du}{1 + u^2} \\[6pt]
                        &= \frac{1}{2}\arctan u + c \\[6pt]
                        &= \frac{1}{2}\arctan(2t) + c
\end{align}
$$

换回变量 $x$，反导数为：

$$\int \frac{dx}{5 - 3\cos x} = \frac{1}{2}\arctan(2\tan(x/2)) + c$$

> 这个方法呈现出一个典型模式：换元后，被积函数变成关于 $t$ 的有理函数，结果则是反正切和对数的组合；它们正是有理函数积分的基本构件。

## 例 3

考虑积分：

$$\int \frac{dx}{2 + \sin x}$$

对分母应用换元，得到：

$$
\begin{align}
2 + \sin x &= 2 + \frac{2t}{1+t^2} \\[6pt]
           &= \frac{2(1+t^2) + 2t}{1+t^2} \\[6pt]
           &= \frac{2(t^2 + t + 1)}{1+t^2}
\end{align}
$$

因此，被积函数变为：

$$
\begin{align}
\frac{1}{2+\sin x} \ dx &= \frac{1+t^2}{2(t^2+t+1)} \cdot \frac{2}{1+t^2} \ dt \\[6pt]
                       &= \frac{dt}{t^2+t+1}
\end{align}
$$

对分母配方：

$$t^2 + t + 1 = \left(t + \frac{1}{2}\right)^2 + \frac{3}{4}$$

现在积分具有以下形式：

$$\int \frac{dt}{\left(t+\frac{1}{2}\right)^2 + \frac{3}{4}}$$

这与标准模式 $\int du/(u^2 + a^2)$ 相符，其中 $u = t + 1/2$，$a = \sqrt{3}/2$。使用这一形式的标准反导数，得到：

$$\int \frac{dt}{t^2+t+1} = \frac{2}{\sqrt{3}}\arctan\left(\frac{2t+1}{\sqrt{3}}\right) + c$$

代回 $t = \tan(x/2)$，得到最终表达式：

$$\int \frac{dx}{2+\sin x} = \frac{2}{\sqrt{3}}\arctan\left(\frac{2\tan(x/2)+1}{\sqrt{3}}\right) + c$$

> 这三个例子展示了该方法的典型行为。换元后，积分变成关于 $t$ 的有理函数，而反导数总是由新变量中的有理函数、反正切和对数组成，最后再通过恒等式 $t = \tan(x/2)$ 换回原变量。

## 定义域条件

换元 $t = \tan(x/2)$ 在所有满足 $x/2 \neq \pi/2 + k\pi$ 的 $x$ 上有定义，也就是 $x \notin \pi + 2\pi\mathbb{Z}$。映射 $x \mapsto t$ 将每个开区间 $((2k-1)\pi, (2k+1)\pi)$ 光滑双射到整个实数轴。当目标是求[不定积分](../indefinite-integrals/)时，上述公式在每个这样的区间内有效，并且不同区间上的积分常数可能取不同的值。

对于端点属于不同基本区间的[定积分](../definite-integrals/)，情况会更微妙。此时必须在积分[定义域](../determining-the-domain-of-a-function/)中换元有定义的每个部分上分别应用换元，最后再将各部分的贡献合并。在形如 $x = (2k+1)\pi$ 的点上换元没有定义；跨过这样的点直接机械地应用换元会导致错误结果。

> 还要注意方向。逆映射 $x = 2\arctan t$ 将实数轴映到开区间 $(-\pi, \pi)$，因此通过 $\arctan(\cdots\tan(x/2)\cdots)$ 表示的任意反导数，在每个开区间内连续，却会在 $x = (2k+1)\pi$ 处发生 $2\pi$ 的跳跃。每当需要一个全局连续的原函数时，都必须在每个区间上重新定义积分常数。

## 何时应优先采用其他技巧

魏尔斯特拉斯换元对关于正弦和余弦的有理被积函数总是有效，但并不总是最高效的路径。当被积函数只含有 $\sin x$ 与 $\cos x$ 的偶次幂，或可以通过恒等式 $\sin^2 x = (1 - \cos 2x)/2$ 和 $\cos^2 x = (1 + \cos 2x)/2$ 重新整理时，半角换元会引入不必要的代数复杂性。同样地，当被积函数具有 $R(\sin x)\cos x$ 或 $R(\cos x)\sin x$ 的形式时，直接使用[换元](../integration-by-substitution/) $u = \sin x$ 或 $u = \cos x$ 会快得多，因为它们完全绕过了有理化步骤。

因此，实际的指导原则是：当被积函数确实是 $\sin x$ 和 $\cos x$ 的有理函数，并且无法通过明显的[三角恒等式](../trigonometric-identities/)或直接换元得到简化时，魏尔斯特拉斯换元就是合适的工具。在其他情况下，更简单的技巧可以带来更短、更清晰的计算。

---
