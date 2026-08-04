---
title: 柯西定理
title_en: Cauchy's Theorem
source: https://algebrica.org/cauchy-theorem/
license: CC BY-NC 4.0
tags:
  - cauchy-theorem
  - derivatives
  - differential-calculus-theorems
  - mean-value-theorem
translation:
  status: current
  source_hash: 277a735f68867b792f5ad50a59c6980d821cdbbc5272128af0689f5c8e4a148a
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 定理陈述

柯西定理将闭区间上两个可导函数的变化，与某个合适内点处的导数之比联系起来。它将[拉格朗日定理](../lagrange-theorem/)推广到一对函数，并且是证明[洛必达法则](../hopital-rule/)的分析基础。

设 $f(x)$ 和 $g(x)$ 是定义在 $[a, b]$ 上的两个实值[函数](../functions/)。假设：

+ $f(x)$ 和 $g(x)$ 在闭[区间](../intervals/) $[a, b]$ 上[连续](../continuous-functions/)。
+ $f(x)$ 和 $g(x)$ 在开区间 $(a, b)$ 上可导。
+ 对每个 $x \in (a, b)$ 都有 $g'(x) \neq 0$。

那么，至少存在一个点 $c \in (a, b)$，使得：

$$\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$$

换句话说，两个函数在区间 $[a, b]$ 上的增量之比，与它们在某个内点处的[导数](../derivatives/)之比相等。

> 在 $(a, b)$ 上满足 $g'(x) \neq 0$，通过对 $g$ 应用[罗尔定理](../rolle-theorem/)，可以保证 $g(b) \neq g(a)$，从而右侧分母不为零。最后一节将详细讨论这一点。

- - -
取 $g(x) = x$，柯西定理就退化为[拉格朗日定理](../lagrange-theorem/)。此时 $g'(x) = 1$ 且 $g(b) - g(a) = b - a$，结论变成熟悉的形式：

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

因此，拉格朗日定理是柯西定理的特殊情形，即其中一个函数取为恒等函数。

## 几何解释

当把参数对 $(g(t), f(t))$ 看作平面上的参数曲线，并令 $t$ 在 $[a, b]$ 内变化时，柯西定理具有清晰的几何意义。连接曲线端点 $(g(a), f(a))$ 和 $(g(b), f(b))$ 的弦，其斜率为：

$$\frac{f(b) - f(a)}{g(b) - g(a)}$$

参数为 $t = c$ 处的曲线切线斜率为 $f'(c)/g'(c)$。因此，柯西定理断言，至少存在一个内点参数 $c$，使该点处的切线平行于连接曲线端点的弦。当 $g(t) = t$ 时，曲线与 $f$ 的图像重合，此时结论就退化为拉格朗日定理的几何内容。

## 证明

为了证明定理，引入依赖实参数 $\lambda$ 的辅助函数：

$$\varphi(x) = f(x) - \lambda g(x)$$

选择参数 $\lambda$，使 $\varphi$ 在区间两个端点处的值相等。条件 $\varphi(a) = \varphi(b)$ 导出：

$$\lambda = \frac{f(b) - f(a)}{g(b) - g(a)}$$

由于假设在 $(a, b)$ 上有 $g'(x) \neq 0$，排除了 $g(b) = g(a)$ 的情形，因此分母不为零；最后一节将讨论这一点。

- - -
函数 $\varphi(x)$ 在 $[a, b]$ 上连续、在 $(a, b)$ 上可导，因为它是 $f$ 和 $g$ 的[线性组合](../linear-combinations/)，而根据假设二者都具有这些正则性。此外，由于 $\lambda$ 的选取方式，$\varphi(a) = \varphi(b)$。因此，[罗尔定理](../rolle-theorem/)的假设得到满足，至少存在一个点 $c \in (a, b)$，使得 $\varphi'(c) = 0$。计算 $\varphi$ 的导数并在 $c$ 处取值，得到：

$$\varphi'(x) = f'(x) - \lambda g'(x)$$

$$f'(c) = \lambda g'(c)$$

- - -
将 $\lambda$ 的值代入上一个等式，得到：

$$f'(c) = \frac{f(b) - f(a)}{g(b) - g(a)} g'(c)$$

根据假设，$g'(c) \neq 0$，两边除以 $g'(c)$，得到：

$$\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$$

这就是定理的结论。

## 例 1

验证函数

$$f(x) = 2x^2 - 4x + 2 \qquad g(x) = x^2$$

在区间 $[1, 3]$ 上满足柯西定理的假设，并确定定理陈述所预言的相应 $c$ 值。

这两个函数都是[多项式](../polynomials/)，因此对每个 $x \in \mathbb{R}$ 都连续且可导。分母函数的导数为 $g'(x) = 2x$，在 $[1, 3]$ 上不为零。因此，定理的假设都得到满足。

- - -
定理保证至少存在一个点 $c \in (1, 3)$，使得：

$$\frac{f'(c)}{g'(c)} = \frac{f(3) - f(1)}{g(3) - g(1)}$$

先计算端点处 $f$ 和 $g$ 的值：

$$f(1) = 2 - 4 + 2 = 0 \qquad f(3) = 18 - 12 + 2 = 8$$

$$g(1) = 1 \qquad g(3) = 9$$

因此，增量之比为：

$$\frac{f(3) - f(1)}{g(3) - g(1)} = \frac{8 - 0}{9 - 1} = 1$$

- - -
计算导数，得到 $f'(x) = 4x - 4$ 和 $g'(x) = 2x$，因此：

$$\frac{f'(c)}{g'(c)} = \frac{4c - 4}{2c}$$

令两个比值相等，确定 $c$ 的方程为：

$$
\begin{align}
\frac{4c - 4}{2c} &= 1 \\[6pt]
4c - 4 &= 2c \\[6pt]
2c &= 4 \\[6pt]
c &= 2
\end{align}
$$

由于 $c = 2 \in (1, 3)$，定理得到验证，且 $c = 2$ 正是它预言的内点。

## 关于假设 $g'(x) \neq 0$ 的说明

在 $(a, b)$ 上的假设 $g'(x) \neq 0$，在定理陈述和证明中都具有明确作用。考虑 $g(b) = g(a)$ 的情形。此时比值

$$\frac{f(b) - f(a)}{g(b) - g(a)}$$

的分母为零，表达式无定义。同理，无法引入常数

$$\lambda = \frac{f(b) - f(a)}{g(b) - g(a)}$$

证明中使用的辅助函数

$$\varphi(x) = f(x) - \lambda g(x)$$

也不再有定义。

然而，在柯西定理的假设下，这种情形不会发生。反设 $g(a) = g(b)$。由于 $g$ 在 $[a, b]$ 上连续、在 $(a, b)$ 上可导，对 $g$ 应用[罗尔定理](../rolle-theorem/)会得到一个点 $\xi \in (a, b)$，使得 $g'(\xi) = 0$，这与开区间上假设 $g'(x) \neq 0$ 矛盾。因此 $g(b) \neq g(a)$，定义 $\lambda$ 的比值是良定义的，证明得以完成。

> 上述证明使用了[罗尔定理](../rolle-theorem/)，而[拉格朗日定理](../lagrange-theorem/)是它在 $g(x) = x$ 时的特殊情形。[费马定理](../fermat-theorem/)和[魏尔斯特拉斯定理](../weierstrass-theorem/)提供了罗尔定理所依赖的存在性结论。
