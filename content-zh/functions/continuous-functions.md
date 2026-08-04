---
title: 连续函数
title_en: Continuous Functions
source: https://algebrica.org/continuous-functions/
license: CC BY-NC 4.0
tags:
  - continuity
  - discontinuity
  - limits
  - one-sided-limits
  - uniform-continuity
translation:
  status: current
  source_hash: 29b2851dfeffb8280694c18de3dedc1d87c08387ed414c4104cffa9d4a60c755
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 点处的连续函数

我们利用[函数](../functions/)的连续性来判断它在某个点附近的行为是否可预测，不会出现跳跃、空洞或突变。形式化地说，函数 $y = f(x)$ 在点 $x_0$ 处连续，如果下面的[极限](../limits/)成立：

$$
\lim_{x \to x_0} f(x) = f(x_0)
$$

这意味着当 $x$ 趋近 $x_0$ 时，函数的极限存在且有限，并且等于函数在 $x_0$ 处的值。例如，函数 $f(x) = \sin(x)$ 在整个 $\mathbb{R}$ 上连续。对每个 $x_0 \in \mathbb{R}$，当 $x \to x_0$ 时 $\sin(x)$ 的极限存在且有限，并满足 $\lim_{x \to x_0} \sin(x) = \sin(x_0)$。

![图 1](/assets/functions/svg/continuous-functions-1.zh.svg)

以 $x_0 = \frac{\pi}{2}$ 为具体例子。我们有：

$$\lim_{x \to \frac{\pi}{2}} \sin(x) = \sin\!\left(\frac{\pi}{2}\right) = 1$$

[正弦函数](../sine-function/)的连续性条件在 $x_0$ 处得到满足；同样的推理可以推广到定义域中的所有其他点。

- - -

点处的连续性也可以用单侧极限来表示。该点处的右极限和左极限必须存在、有限，并且都等于函数值。对一般点 $x_0$，可以写成：

$$
\lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) = f(x_0)
$$

这个条件保证函数图像在点 $x_0$ 处没有断裂或间断。

> 这一性质在函数 $f(x) = \sin(x)$ 的图像中很明显。对每个点 $x_0$，曲线从左侧和右侧趋近同一个值，而这个值与 $f(x_0)$ 相同。图像沿整条实轴形成连续、不间断的路径，单侧极限与函数值彼此一致。

## 例 1

考虑[多项式函数](../polynomial-function/)：

$$
f(x) = 3x + 1
$$

我们验证该函数在点 $x_0 = 2$ 处是否连续。先计算函数在 $2$ 附近的极限：

$$
\lim_{x \to 2} f(x) = \lim_{x \to 2} (3x + 1) = 3 \cdot 2 + 1 = 7
$$

接着直接计算该点处的函数值：

$$
f(2) = 3 \cdot 2 + 1 = 7
$$

由于该函数是一阶[多项式](../polynomials/)，它的图像是一条直线。

![图 2](/assets/functions/svg/continuous-functions-2.zh.svg)

极限存在且有限，并与该点处的函数值一致。因此我们得到：

$$
\lim_{x \to 2} f(x) = f(2) = 7
$$

这证实函数 $f(x) = 3x + 1$ 在 $x = 2$ 处连续。

> 这个推理可以推广到高次多项式函数。例如，二次函数 $f(x) = x^2$ 的图像是[抛物线](../parabola/)，并且对每个 $x_0 \in \mathbb{R}$，极限都存在且有限，并满足 $\lim_{x \to x_0} x^2 = x_0^2 = f(x_0)$。

## 区间上的连续函数

当我们考虑一个区间而不是单个点时，如果函数 $y = f(x)$ 在闭有界区间 $[a, b]$ 上满足以下条件，就称其在该区间上连续：

$$
\lim_{x \to x_0} f(x) = f(x_0) \quad \forall \ x_0 \in (a, b)
$$

与点处的连续性一样，闭区间上的连续性可以用区间端点处的单侧极限表示。具体而言，函数必须满足：

$$
\begin{align}
\lim_{x \to a^+} f(x) &= f(a) \\[6pt]
\lim_{x \to b^-} f(x) &= f(b)
\end{align}
$$

例如，定义在区间 $[0, 4]$ 上的函数 $f(x) = \sqrt{x}$ 在每个内部点处连续，因为平方根函数在 $(0, +\infty)$ 上连续。

![图 3](/assets/functions/svg/continuous-functions-3.zh.svg)

在左端点和右端点处，单侧连续性条件分别满足：

$$
\begin{align}
\lim_{x \to 0^+} \sqrt{x} &= 0 = f(0) \\[6pt]
\lim_{x \to 4^-} \sqrt{x} &= 2 = f(4)
\end{align}
$$

因此，连续性的三个条件全部满足，$f(x) = \sqrt{x}$ 在 $[0, 4]$ 上连续。

## 在定义域上连续的函数

下列函数在各自的[定义域](../determining-the-domain-of-a-function/)上连续：

+ 形如 $P(x) = a_0 + a_1 x + \cdots + a_n x^n$ 的[多项式函数](../polynomial-function/)。
+ [有理函数](../rational-functions/)，只要分母不为零。
+ [指数函数](../exponential-function/) $a^x$。
+ [对数函数](../logarithmic-function/) $\log_a x$。
+ [绝对值函数](../absolute-value-function/) $|x|$。
+ [正弦和余弦函数](../sine-and-cosine/) $\sin x$ 与 $\cos x$，以及[正切函数](../tangent-and-cotangent/) $\tan x$，还有它们的逆函数。

## 间断点

函数在某个点不连续，就称它在该点有[间断点](../discontinuities-of-real-functions/)。当连续性的某个条件不满足时，就会出现间断。这可能是因为函数在该点无定义、极限不存在，或者极限存在但与函数值不同。间断点分为三种互斥类型：

+ 当函数极限存在且有限，但函数在该点无定义，或函数值不等于极限时，称为可去间断。
+ 当左极限和右极限都存在且有限，但两者不相等时，称为跳跃间断。
+ 当至少一个单侧极限为无穷时，称为无穷间断；此时函数在该点附近发散，而不是趋近有限值。

> 一个点不能同时表现出一种以上的间断类型。

- - -

考虑一个不连续的简单函数，即[符号函数](../sign-function/) $\mathrm{sign}(x)$。它定义为：

$$
\mathrm{sign}(x) =
\begin{cases}
-1 & x < 0 \\[6pt]
\phantom{-}0 & x = 0 \\[6pt]
\phantom{-}1 & x > 0
\end{cases}
$$

该函数在 $x = 0$ 处不连续。要使函数在某点连续，左侧极限和右侧极限必须存在，并且都等于该点处的函数值。我们考察这些极限：

+ 当 $x \to 0^-$ 时，函数趋近 $-1$。
+ 当 $x \to 0^+$ 时，函数趋近 $1$。

两个单侧极限为：

$$
\begin{align}
\lim_{x \to 0^-} \mathrm{sign}(x) &= -1 \\[6pt]
\lim_{x \to 0^+} \mathrm{sign}(x) &= 1
\end{align}
$$

由于两个单侧极限不相等，当 $x \to 0$ 时整体极限不存在。虽然函数在 $x = 0$ 处有定义，但函数值不等于极限。因此，函数在 $x = 0$ 处不连续，尽管它在 $\mathbb{R} \setminus \{0\}$ 上处处连续。

## 性质

两个连续函数的和或差仍然连续。设 $f$ 与 $g$ 是从 $\mathbb{R}$ 到 $\mathbb{R}$ 的函数，$x_0$ 属于 $\mathrm{Dom}(f)$ 和 $\mathrm{Dom}(g)$，且两个函数都在此处连续。那么函数 $f + g$ 以及 $f - g$ 在点 $x_0$ 处连续。形式化地说，如果 $f$ 与 $g$ 都在 $x_0$ 处连续：

$$
\begin{align}
\lim_{x \to x_0} f(x) &= f(x_0) \\[6pt]
\lim_{x \to x_0} g(x) &= g(x_0)
\end{align}
$$

那么和函数 $f + g$ 也在 $x_0$ 处连续，即：

$$
\lim_{x \to x_0} [f(x) + g(x)] = f(x_0) + g(x_0)
$$

- - -

两个连续函数的乘积仍然连续。设 $f, g : \mathbb{R} \to \mathbb{R}$，并令 $x_0 \in \mathrm{Dom}(f) \cap \mathrm{Dom}(g)$ 是两个函数都连续的点。那么乘积函数 $f \cdot g$ 在 $x_0$ 处连续。形式化地说，如果：

$$
\begin{align}
\lim_{x \to x_0} f(x) &= f(x_0) \\[6pt]
\lim_{x \to x_0} g(x) &= g(x_0)
\end{align}
$$

那么：

$$
\lim_{x \to x_0} [f(x) \cdot g(x)] = f(x_0) \cdot g(x_0)
$$

- - -

两个连续函数的商仍然连续，前提是分母不为零。设 $f, g : \mathbb{R} \to \mathbb{R}$，并令 $x_0 \in \mathrm{Dom}(f) \cap \mathrm{Dom}(g)$ 是两个函数都连续的点，且 $g(x_0) \ne 0$。那么商函数 $f/g$ 在 $x_0$ 处连续。形式化地说，如果：

$$
\begin{align}
\lim_{x \to x_0} f(x) &= f(x_0) \\[6pt]
\lim_{x \to x_0} g(x) &= g(x_0) \\[6pt]
g(x_0) &\ne 0
\end{align}
$$

那么：

$$
\lim_{x \to x_0} \left[ \frac{f(x)}{g(x)} \right] = \frac{f(x_0)}{g(x_0)}
$$

- - -

连续函数的[复合](../composite-functions/)仍然连续。设 $f, g : \mathbb{R} \to \mathbb{R}$，令 $x_0 \in \mathrm{Dom}(f)$，且 $f$ 在 $x_0$ 处连续。假设 $g$ 在 $y_0 = f(x_0)$ 处连续。那么复合函数 $g \circ f$ 在 $x_0$ 处连续，即：

$$
\lim_{x \to x_0} [g(f(x))] = g\left( \lim_{x \to x_0} f(x) \right) = g(f(x_0))
$$

- - -

如果函数 $f$ 在区间 $I \subset \mathbb{R}$ 上连续且[严格单调](../increasing-and-decreasing-functions/)，那么它在 $I$ 上可逆，并且其[逆函数](../inverse-function/) $f^{-1}$ 在 $f(I)$ 上仍然连续。等价地，对任意 $y_0 = f(x_0)$，都有：

$$
\lim_{y \to y_0} f^{-1}(y) = x_0
$$

严格单调性保证函数不会改变方向，因此相邻的不同输入不会映射到同一个输出。没有单调性时，仅凭连续性不足以保证逆函数连续。

## 从连续性到一致连续性

连续性是一个局部性质。对每个点 $x_0$ 以及每个 $\varepsilon > 0$，都存在一个 $\delta > 0$，它可以依赖于 $x_0$，使得：

$$|x - x_0| < \delta \to |f(x) - f(x_0)| < \varepsilon$$

$\delta$ 的值可能随点变化。在函数增长很快的区域，通常需要更小的 $\delta$。

[一致连续性](../uniform-continuity/)通过施加单一的全局约束来扩展这一概念。如果对每个 $\varepsilon > 0$ 都存在 $\delta > 0$，使得：

$$|x - y| < \delta \;\Rightarrow\; |f(x) - f(y)| < \varepsilon \quad \forall \ x, y \in A$$

则称函数 $f : A \to \mathbb{R}$ 在 $A$ 上一致连续。在这一语境中，$\delta$ 只取决于 $\varepsilon$，而与定义域中的具体点无关。一般而言：

+ 连续性不蕴含一致连续性。
+ 一致连续性蕴含连续性。

例如，函数 $f(x) = x^2$ 在 $\mathbb{R}$ 上连续，但在 $\mathbb{R}$ 上不一致连续，因为不存在单一的 $\delta$ 能够控制它在整条实轴上的增长。
