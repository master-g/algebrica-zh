---
title: 夹逼定理
title_en: Squeeze Theorem
source: https://algebrica.org/squeeze-theorem/
license: CC BY-NC 4.0
tags:
  - bounded-functions
  - geometric-proof
  - limits
  - oscillating-functions
  - remarkable-limits
  - squeeze-theorem
translation:
  status: current
  source_hash: 2fde63012b6a61eebe33849d56a1bcac468ed65f62b6b7a7c08ed523956829ae
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 夹逼定理是什么

夹逼定理也称为夹心定理，它提供了一种确定[极限](../limits/)的方法，适用于直接求值困难，或[函数](../functions/)在某个特定点附近表现出复杂振荡行为的情形。这一定理经常用于涉及[正弦和余弦](../sine-and-cosine/)的函数，尤其是这些三角函数项以至于无法直接求极限时，例如：

$$\sin\left( \frac{1}{x} \right) \qquad \frac{\sin}{x} \qquad \cos\left( \frac{1}{x} \right)$$

在这些情形中，目标函数被夹在另外两个极限已知且相等的函数之间，因此目标极限就可以求出。

## 定理表述

**定理。** 设 $x_0 \in \mathbb{R} \cup \{ \pm\infty \}$ 是一个[极限点](../topology-of-the-real-line/)，也就是说，$x_0$ 的每个邻域都至少包含[定义域](../functions/)中一个不同于 $x_0$ 的点。设 $f$、$g$ 和 $h$ 是在 $x_0$ 的邻域 $I$ 上定义的实值函数，并假设对每个 $x \in I$，不等式

$$g(x) \leq f(x) \leq h(x)$$

成立。进一步假设，当 $x \to x_0$ 时 $g(x)$ 与 $h(x)$ 的极限都存在，并且同为 $\ell$：

$$\lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = \ell$$

在这些假设下，函数 $f(x)$ 也在 $x \to x_0$ 时存在极限，且该极限为：

$$\lim_{x \to x_0} f(x) = \ell$$

- - -

从图形上看，表示 $f(x)$ 的曲线完全位于下界 $g(x)$ 与上界 $h(x)$ 之间。由于两个界函数都趋近 $\ell$，函数 $f(x)$ 也被迫趋近同一个极限。

![图 1](/assets/limits/svg/squeeze-theorem-1.zh.svg)

这表达了定理背后的几何直觉：如果一个函数同时被两个都收敛到同一值的函数从上、下界住，那么它也必然收敛到该值。

## 夹逼定理的证明

任取 $\varepsilon > 0$。目标是证明：夹在 $g(x)$ 与 $h(x)$ 之间的函数 $f(x)$，在 $x \to x_0$ 时趋近同一个极限 $\ell$。

根据假设，$\lim_{x \to x_0} g(x) = \ell$。这意味着存在正数 $\delta_1$，使得对充分接近 $x_0$ 的每个 $x$，特别是对所有满足 $0 < |x - x_0| < \delta_1$ 的 $x$：

$$|g(x) - \ell| < \varepsilon \quad \implies \quad \ell - \varepsilon < g(x) < \ell + \varepsilon$$

同理，由于 $\lim_{x \to x_0} h(x) = \ell$，存在另一个正数 $\delta_2$，使得：

$$|h(x) - \ell| < \varepsilon \quad \implies \quad \ell - \varepsilon < h(x) < \ell + \varepsilon$$

令 $\delta = \min(\delta_1, \delta_2)$。对于所有满足 $0 < |x - x_0| < \delta$ 的 $x$，上面的两个不等式都成立。由于 $f(x)$ 被夹在 $g(x)$ 与 $h(x)$ 之间：

$$g(x) \leq f(x) \leq h(x)$$

将这一关系与 $g(x)$、$h(x)$ 的界结合起来，得到：

$$\ell - \varepsilon < f(x) < \ell + \varepsilon \quad \implies \quad |f(x) - \ell| < \varepsilon$$

由于这个不等式对每个 $\varepsilon > 0$ 都成立，我们得到：

$$\lim_{x \to x_0} f(x) = \ell$$

## 示例 1

下面的例子展示如何应用这一定理计算极限：

$$\lim_{x \to 0} x \cdot \sin\left( \frac{1}{x} \right)$$

- - -

当 $x \to 0$ 时，$\sin\left( \frac{1}{x} \right)$ 在 $-1$ 与 $1$ 之间无限振荡，因此不存在极限。不过，对于每个[实数](../real-numbers/) $x \neq 0$，都有不等式：

$$-1 \leq \sin\left( \frac{1}{x} \right) \leq 1$$

两边乘以 $x$，再利用[绝对值](../absolute-value/)使不等式关于零对称，可得：

$$-|x| \leq x \cdot \sin\left( \frac{1}{x} \right) \leq |x|$$

- - -

当 $x > 0$ 时，不等式方向保持不变；当 $x < 0$ 时，方向反转，但绝对值保证了比较关系关于零仍然对称。两个界函数 $-|x|$ 与 $|x|$ 在 $x \to 0$ 时都趋于零：

$$\lim_{x \to 0} -|x| = 0 \qquad \lim_{x \to 0} |x| = 0$$

由于 $x\sin(1/x)$ 被夹在两个都趋近零的函数之间，应用夹逼定理可得：

$$\lim_{x \to 0} x \cdot \sin\left( \frac{1}{x} \right) = 0$$

在许多问题中，当一个振荡函数乘以趋近零的 $x$ 的某个幂时，整体极限为零。其原因是振荡仍然有界，正弦和余弦就是如此，它们始终被限制在区间 $[-1, 1]$ 内。因子 $x^n$ 足够快地趋近零，从而压过振荡，使整个乘积收敛到零。

## 示例 2

求极限：

$$\lim_{x \to +\infty} \frac{\ln(3 + \sin x)}{x^3}$$

- - -

对每个实数 $x$，正弦函数都被限制在 $-1$ 与 $1$ 之间：

$$-1 \leq \sin x \leq 1$$

在各项上加 $3$，得到：

$$2 \leq 3 + \sin x \leq 4 \quad \forall x \in \mathbb{R}$$

- - -

由于[对数函数](../logarithms/)严格递增，同样的不等式链在 $\ln$ 作用下仍然保持：

$$\ln 2 \leq \ln(3 + \sin x) \leq \ln 4$$

将三项都除以 $x^3$（当 $x > 0$ 时它为正）：

$$\frac{\ln 2}{x^3} \leq \frac{\ln(3 + \sin x)}{x^3} \leq \frac{\ln 4}{x^3} \quad \forall x > 0$$

当 $x \to +\infty$ 时，两个界函数都趋于零。应用夹逼定理：

$$\lim_{x \to +\infty} \frac{\ln(3 + \sin x)}{x^3} = 0$$

## 示例 3

求极限：

$$\lim_{x \to 0} \left( x^4 \cdot \cos\left( \frac{2}{x} \right) + 2 \right)$$

我们先单独分析函数 $x^4 \cdot \cos\left( \frac{2}{x} \right)$ 的行为。对所有实数，余弦函数都被限制在 $-1$ 与 $1$ 之间：

$$-1 \leq \cos\left( \frac{2}{x} \right) \leq 1$$

三项同乘非负的 $x^4$，得到：

$$-x^4 \leq x^4 \cdot \cos\left( \frac{2}{x} \right) \leq x^4$$

- - -

当 $x \to 0$ 时，对左右两个界取极限：

$$\lim_{x \to 0} (-x^4) = 0 \qquad \lim_{x \to 0} x^4 = 0$$

根据夹逼定理：

$$\lim_{x \to 0} x^4 \cdot \cos\left( \frac{2}{x} \right) = 0$$

现在可以应用[极限的代数](../algebra-of-limits/)中的和的法则计算原表达式：

$$\lim_{x \to 0} \left( x^4 \cdot \cos\left( \frac{2}{x} \right) + 2 \right) = 0 + 2 = 2$$

## 示例 4

夹逼定理给出了三角函数基本极限的经典证明：

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

这个极限是三角函数求导的基石，也出现在标准微积分参考资料的[重要极限](../remarkable-limits/)中。下面的论证先建立 $x \to 0^+$ 时的极限，再由对称性推出 $x \to 0^-$ 的情形。

- - -

考虑 $x \in (0, \pi/2)$ 的角，以及以原点为中心的[单位圆](../unit-circle/)。记 $O$ 为圆心，$A$ 为正 $x$ 轴上的点 $(1, 0)$，$P$ 为单位圆上由角 $x$ 确定的点，其中角从 $OA$ 逆时针测量。设射线 $OP$ 延长后与过 $A$ 的竖直切线相交于 $T$。于是比较三个区域：三角形 $OAP$、由 $OA$、$OP$ 与弧 $AP$ 围成的扇形，以及三角形 $OAT$。

三角形 $OAP$ 的底边 $OA = 1$，高等于 $P$ 的纵坐标 $\sin x$，所以面积为：

$$\mathrm{Area}(OAP) = \frac{1}{2} \sin x$$

扇形半径为 $1$，圆心角为用弧度度量的[角](../angles-and-angular-measure/) $x$；记该扇形为 S，则其面积为：

$$\mathrm{Area}(\mathrm{S}) = \frac{1}{2} x$$

三角形 $OAT$ 的底边 $OA = 1$，高为 $AT = \tan x$，因为按正切的定义 $T = (1, \tan x)$。因此其面积为：

$$\mathrm{Area}(OAT) = \frac{1}{2} \tan x$$

- - -

三角形 $OAP$ 包含于扇形内，而扇形又包含于三角形 $OAT$ 内。三个面积之间相应的严格不等式链为：

$$\frac{1}{2} \sin x < \frac{1}{2} x < \frac{1}{2} \tan x$$

每项乘以 $2$ 消去公因子，得到：

$$\sin x < x < \tan x$$

由于 $x \in (0, \pi/2)$，$\sin x$ 严格为正，因此两边同除以 $\sin x$ 后不等式次序不变：

$$1 < \frac{x}{\sin x} < \frac{1}{\cos x}$$

对每一项取倒数会反转不等式方向：

$$\cos x < \frac{\sin x}{x} < 1$$

- - -

现在，函数 $\sin(x)/x$ 被限制在下界 $\cos x$ 与常数上界 $1$ 之间。两个界函数在 $x \to 0^+$ 时都存在极限：

$$\lim_{x \to 0^+} \cos x = 1 \qquad \lim_{x \to 0^+} 1 = 1$$

直接应用夹逼定理，得到右极限：

$$\lim_{x \to 0^+} \frac{\sin x}{x} = 1$$

函数 $\sin(x)/x$ 是偶函数，因为 $\sin(-x) = -\sin x$，分母也以同样方式变号，所以比值在 $x \mapsto -x$ 下保持不变。因此，$0$ 处的左极限等于右极限，从而得到双侧极限：

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

> 几何不等式 $\sin x < x < \tan x$ 在 $(0, \pi/2)$ 上成立，是上述论证的核心。同一个不等式还支撑相关三角极限的推导，例如 $\lim_{x \to 0} (1 - \cos x)/x^2 = 1/2$；后者由恒等式 $1 - \cos x = 2 \sin^2(x/2)$ 与上面的基本极限结合得到。

夹逼定理补充了[未定式](../indeterminate-forms/)相关的技巧；只要一个函数能够被两个具有公共极限的函数控制，夹逼定理往往就是最简单的路径。
