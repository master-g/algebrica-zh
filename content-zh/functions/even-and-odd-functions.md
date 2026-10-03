---
title: 偶函数与奇函数
title_en: Even and Odd Functions
source: https://algebrica.org/even-and-odd-functions/
license: CC BY-NC 4.0
tags:
  - even-function
  - function-parity
  - function-symmetry
  - odd-function
translation:
  status: current
  source_hash: 1326561acd487341db462dc40d7a0d9a8ef0d356219781fb4f81e5ac8cff61a6
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---

## 偶函数

一个[函数](../functions/)可以关于坐标轴对称。关于 $y$ 轴对称时，它是偶函数；关于原点对称时，它是奇函数；否则既非偶函数也非奇函数。设有函数 $f(x): \mathbb{R} \rightarrow \mathbb{R}$，令 $D \subseteq \mathbb{R}$ 为其[定义域](../determining-the-domain-of-a-function/)，并假设定义域关于原点对称。若满足下列条件，则函数 $f$ 为偶函数：

$$
f(-x) = f(x) \quad \forall \ x \in D
$$

![图 1](/assets/functions/svg/even-and-odd-functions-1.zh.svg)

如图所示，函数 $f(x) = x^2$ 是一条关于 $y$ 轴对称的[抛物线](../parabola/)。更一般地，形如 $f(x) = x^4$、$x^6$ 或 $x^{2n}$ 的函数，其中指数为偶数，都是偶函数的例子。另一个偶函数是[余弦函数](../cosine-function/)。

![图 2](/assets/functions/svg/even-and-odd-functions-2.zh.svg)

它以 $2\pi$ 为周期，图像关于 $y$ 轴对称。我们可以直接验证：

$$\cos(\pi) = \cos(-\pi) = -1$$

另一个例子是[绝对值函数](../absolute-value-function/)，因为对每个实数 $x$ 都有 $|-x| = |x|$。

考虑[幂函数](../power-function/)族 $f(x) = x^{n}$，其中 $n \in \mathbb{N}$。函数的奇偶性完全由指数决定：当 $n$ 为偶数[整数](../integers/)时，函数为偶函数；当 $n$ 为奇数时，函数为奇函数。

## 偶函数的定积分

偶性可以简化对称区间上的[定积分](../definite-integrals/)计算。设 $f(x)$ [连续](../continuous-functions/)且为偶函数，因此其图像关于 $y$ 轴对称。

在 $[-a, a]$ 形式的区间上，这种对称性给出恒等式：

$$
\int_{-a}^{a} f(x) \ dx = 2\int_0^a f(x) \ dx
$$

![图 3](/assets/functions/svg/even-and-odd-functions-5.zh.svg)

从 $-a$ 到 $a$ 的曲线下总面积是从 $0$ 到 $a$ 的两倍，因为图像在 $x$ 轴负侧的部分是正侧部分的镜像，对积分的贡献相同。

## 奇函数

设有函数 $f(x): \mathbb{R} \rightarrow \mathbb{R}$，令 $D \subseteq \mathbb{R}$ 为其定义域，并再次假设定义域关于原点对称。若满足下列条件，则函数 $f$ 为奇函数：

$$
f(-x) = -f(x) \quad \forall \ x \in D
$$

![图 4](/assets/functions/svg/even-and-odd-functions-3.zh.svg)

如图所示，函数 $f(x) = x^3$ 关于原点对称。形如 $f(x) = x^3$、$x^5$ 或 $x^{2n+1}$ 的函数，其中指数为奇数，都是奇函数的例子。

![图 5](/assets/functions/svg/even-and-odd-functions-4.zh.svg)

另一个奇函数是[正弦函数](../sine-function/)。它以 $2\pi$ 为周期，图像关于原点对称。我们可以直接验证：

$$
\sin(-\pi) = -\sin(\pi) = 0
$$

## 奇函数的定积分

对于奇函数，$[-a, 0]$ 上的面积与 $[0, a]$ 上的面积大小相等、符号相反。因此，对称区间上的定积分为零：

$$
\int_{-a}^{a} f(x) \ dx = 0
$$

![图 6](/assets/functions/svg/even-and-odd-functions-6.zh.svg)

如果改为测量 $[-a, a]$ 上函数 $f(x)$ 的图像与 $x$ 轴围成的几何面积，就要对绝对值积分，此时两半部分相加而不是相互抵消：

$$
S = \int_{0}^{a} |f(x)| \ dx
$$

## 同时为偶函数和奇函数的唯一函数

只有零函数 $f(x) = 0$ 同时是偶函数和奇函数。如果一个函数既是偶函数又是奇函数，它就必须满足：

+ $f(-x) = f(x)$，因为它是偶函数。
+ $f(-x) = -f(x)$，因为它是奇函数。

合并这两个恒等式得到 $f(x) = -f(x)$，因此 $2f(x) = 0$，并且对所有 $x$ 都有 $f(x) = 0$。

## 性质

函数的奇偶性与代数运算之间存在可预测的关系。下文中，$f$ 和 $g$ 始终表示定义在关于原点对称的定义域上的函数。

两个偶函数的和是偶函数，两个奇函数的和是奇函数。这直接由定义恒等式推出：如果 $f$ 和 $g$ 都是偶函数，逐项代入即可得到 $(f+g)(-x) = (f+g)(x)$；奇函数的情形只需在同样计算中保留符号变化。例如，$x^2 + \cos x$ 是偶函数，而 $x^3 + \sin x$ 是奇函数。

函数乘以常数会保持其奇偶性，因为常数因子在反射 $x \mapsto -x$ 下不变。因此 $3x^2$ 仍是偶函数，而 $5x^3$ 仍是奇函数。

两个具有相同奇偶性的函数的积是偶函数，因为两个符号变化会相互抵消。如果 $f$ 和 $g$ 都是奇函数，那么 $(fg)(-x) = \bigl(-f(x)\bigr)\bigl(-g(x)\bigr) = f(x)g(x)$。因此 $x^2 \cos x$（偶函数乘偶函数）和 $x^3 \sin x$（奇函数乘奇函数）都是偶函数。当两个因子的奇偶性相反时，会保留一次符号变化，乘积为奇函数；例如 $x^2 \sin x$ 是奇函数。

求导会反转奇偶性：[导数](../derivatives/)为偶函数的函数，其导数是奇函数；奇函数的导数是偶函数。对恒等式 $f(-x) = f(x)$ 使用[链式法则](../chain-rule/)得到 $-f'(-x) = f'(x)$，所以 $f'$ 是奇函数；从 $f(-x) = -f(x)$ 出发进行类似计算，则得到偶函数的导数。初等例子清楚地展示了这一点：$\frac{d}{dx}x^2 = 2x$ 把偶函数变成奇函数，而 $\frac{d}{dx}x^3 = 3x^2$ 把奇函数变成偶函数。

[复合](../composite-functions/)遵循主要取决于内函数的规则。当内函数为偶函数时，无论外函数如何，复合函数都是偶函数，因为只要 $g(-x) = g(x)$，就有 $f(g(-x)) = f(g(x))$。当内函数为奇函数时，复合函数继承外函数的奇偶性：若 $g$ 为奇函数，则 $f(g(-x)) = f(-g(x))$；当 $f$ 为偶函数时它等于 $f(g(x))$，当 $f$ 为奇函数时它等于 $-f(g(x))$。例如，$\cos(x^3)$ 是偶函数，$\sin(x^3)$ 是奇函数，而 $\cos(\sin x)$ 是偶函数。

## 分解为偶部与奇部

大多数函数既非偶函数也非奇函数，但定义在关于原点对称定义域上的任意函数，都可以分解为偶函数部分与奇函数部分。给定这样的函数 $f$，定义：

$$
\begin{align}
f_{\mathrm{e}}(x) &= \frac{f(x) + f(-x)}{2} \\[6pt]
f_{\mathrm{o}}(x) &= \frac{f(x) - f(-x)}{2}
\end{align}
$$

直接代入 $-x$ 可以看出 $f_{\mathrm{e}}$ 是偶函数、$f_{\mathrm{o}}$ 是奇函数；而将两个表达式相加，就得到 $f$：

$$
f(x) = f_{\mathrm{e}}(x) + f_{\mathrm{o}}(x)
$$

这种分解是唯一的。设 $f = g + h$，其中 $g$ 为偶函数、$h$ 为奇函数。在 $-x$ 处取值可得 $f(-x) = g(x) - h(x)$；解关于 $g$ 和 $h$ 的两个方程，会恰好重新得到上面的公式。因此，函数的偶部与奇部是唯一确定的。

指数函数是标准例子。它的偶部与奇部是[双曲余弦](../hyperbolic-sine-and-cosine/)和[双曲正弦](../hyperbolic-sine-function/)：

$$
e^x = \underbrace{\frac{e^x + e^{-x}}{2}}_{\cosh x} + \underbrace{\frac{e^x - e^{-x}}{2}}_{\sinh x}
$$

这里 $\cosh x$ 是偶函数，$\sinh x$ 是奇函数，而它们的和恢复了 $e^x$。
