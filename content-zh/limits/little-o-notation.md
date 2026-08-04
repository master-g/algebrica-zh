---
title: 小 o 记号
title_en: Little-o Notation
source: https://algebrica.org/little-o-notation/
license: CC BY-NC 4.0
tags:
  - asymptotic-comparison
  - big-o-notation
  - landau-symbols
  - limits
  - little-o-notation
  - taylor-series
translation:
  status: current
  source_hash: d074ad7bfe7bbb2f1da73a7c8b62b29d966ee4a2e12889e336f7e7a78ad66d48
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 什么是小 o 记号

符号 $o(x)$ 读作“$x$ 的小 o”，属于 Landau 记号家族，用来刻画函数之间的[渐近](../asymptotes/)关系。写成 $f(x) = o(x)$ 表示，当自变量趋近某个值时，$f(x)$ 相对于 $x$ 可以忽略；在[极限](../limits/)中，它的增长速率相对于 $x$ 微不足道。

设 $f, g : A \to \mathbb{R}$（或 $\mathbb{C}$）是两个[函数](../functions/)，且 $x_0$ 是 $A$ 的一个聚点。如果 $g(x)$ 在 $x_0$ 的某个邻域内不为零（至多允许在 $x_0$ 本身为零），并且满足：

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = 0$$

那么，当 $x \to x_0$ 时，就称 $f(x)$ 是 $g(x)$ 的小 o。等价地，对每个 $\varepsilon > 0$，都存在 $\delta > 0$，使得只要 $0 < |x - x_0| < \delta$，就有不等式 $|f(x)| \leq \varepsilon \cdot |g(x)|$ 成立。

> 将 $x \to x_0$ 替换为 $x \to \infty$，同样的记号也适用于无穷远处的极限。它也适用于[数列](../sequences/)，此时用整数索引 $n$ 替换连续变量 $x$，并令 $n \to \infty$。

## 示例 1

取 $f(x) = x^2$、$g(x) = x$，并令 $x \to 0$。它们的比值极限为：

$$\lim_{x \to 0} \frac{x^2}{x} = \lim_{x \to 0} x = 0$$

由于极限为零，我们写成：

$$x^2 = o(x) \quad x \to 0$$

直接比较可以说明原因。当 $x \to 0$ 时，$x$ 和 $x^2$ 都趋于零，但速率不同。在原点附近，$x^2$ 远小于 $x$：

![图 1](/assets/limits/svg/little-o-1.zh.svg)

当 $x = 0.1$ 时，平方值为 $0.01$；当 $x = 0.01$ 时，平方值为 $0.0001$；当 $x = 0.001$ 时，平方值为 $0.000001$。$x$ 每减少十倍，$x^2$ 就减少一百倍，因此比值 $x^2/x = x$ 也趋于零。

## 示例 2

小 o 记号同样适用于输入无界增大的情形。对于 $x \to \infty$ 时的 $x$ 和 $x^2$：

$$\lim_{x \to \infty} \frac{x}{x^2} = \lim_{x \to \infty} \frac{1}{x} = 0$$

由于比值趋于零：

$$x = o(x^2) \quad x \to \infty$$

对于任意两个满足 $a < b$ 的幂函数 $x^a$ 和 $x^b$，同样的关系成立：

$$x^a = o(x^b) \quad x \to \infty$$

另一个例子比较[对数函数](../logarithms/)和幂函数。由于：

$$\lim_{x \to \infty} \frac{\log x}{x} = 0$$

所以当 $x \to \infty$ 时，$\log x = o(x)$。对数增长严格受线性增长支配，这一事实贯穿于算法分析之中。

## $o(1)$ 的含义

符号 $o(1)$ 表示当 $x \to x_0$ 时趋于零的函数类。当函数 $f(x)$ 在该极限过程中相对于常数 $1$ 变得无穷小，就说它属于 $o(1)$。当且仅当满足下式时，我们写作 $f(x) = o(1)$（$x \to x_0$）：

$$\lim_{x \to x_0} \frac{f(x)}{1} = \lim_{x \to x_0} f(x) = 0$$

所有属于 $o(1)$ 的函数可以描述为：

$$o_{x_0}(1) = \\{\ f : B(x_0, \delta) \setminus \\{x_0\\} \to \mathbb{R} \mid \lim_{x \to x_0} f(x) = 0 \ \\}$$

这里的 $B(x_0, \delta)$ 是以 $x_0$ 为中心、半径为 $\delta$ 的开邻域，函数在该邻域上定义，但 $x_0$ 本身除外。属于 $o(1)$ 只要求 $f(x) \to 0$（$x \to x_0$），因此 $o_{x_0}(1)$ 恰好收集了相对于常数 $1$ 为无穷小的所有函数。

## 示例 3

利用 $\sin x$ 在零点附近的 Taylor 展开，可以得到 $\dfrac{\sin x}{x}$ 在 $x \to 0$ 时的极限：

$$\sin x = x - \frac{x^3}{6} + o(x^3) \quad x \to 0$$

两边除以 $x$：

$$\frac{\sin x}{x} = 1 - \frac{x^2}{6} + o(x^2) \quad x \to 0$$

当 $x \to 0$ 时，$\dfrac{x^2}{6}$ 和余项 $o(x^2)$ 都趋于零，因此：

$$\frac{\sin x}{x} = 1 + o(1)$$

> 由于 $o(1) \to 0$，这就恢复了 $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$，即[重要极限](../remarkable-limits/)之一。

## 性质

由定义可以立即得到一条性质。如果当 $x \to x_0$ 时 $g(x) = o(f(x))$，则两个函数的比值趋于零：

$$\lim_{x \to x_0} \frac{o(f(x))}{f(x)} = 0$$

- - -

在小 o 记号中，函数乘以非零常数不会改变其渐近行为。对于任意常数 $c \in \mathbb{R}$ 和任意函数 $g(x)$，当 $x \to x_0$ 时：

$$o(c \cdot g(x)) = o(g(x))$$

$$c \cdot o(g(x)) = o(g(x))$$

> 非零常数只会重新缩放定义小 o 的比值，因此比值的零极限不变。

- - -

小 o 项在加法下也有可预测的行为。同一个函数的两个小 o 项之和仍然是该函数的小 o 项。形式化地，当 $x \to x_0$ 时：

$$o(f(x)) + o(f(x)) = o(f(x))$$

> 根据[极限的代数](../algebra-of-limits/)，和的极限等于极限之和，因此两个都趋于零的比值相加后仍趋于零。

- - -

当小 o 项乘以一个函数时，结果是一个新的小 o 项，其渐近阶相应缩放。对于函数 $f(x)$ 和 $g(x)$，当 $x \to x_0$ 时：

$$f(x) \cdot o(g(x)) = o(f(x) g(x))$$

例如，如果 $g(x) = x$ 且 $o(g(x)) = o(x)$，那么乘以 $f(x) = x^2$ 可得：

$$x^2 \cdot o(x) = o(x^3)$$

- - -

幂也遵循同样的规律。如果当 $x \to x_0$ 时 $f(x) = o(g(x))$，那么对任意 $a > 0$，将两个函数都提升到 $a$ 次幂会保持这一关系，即当 $x \to x_0$ 时 $[f(x)]^a = o([g(x)]^a)$。例如，若 $x \to 0$ 时 $f(x) = o(x)$ 且 $a = 2$：

$$[f(x)]^2 = o(x^2)$$

- - -

小 o 记号具有传递性。如果当 $x \to x_0$ 时 $f(x) = o(g(x))$ 且 $g(x) = o(h(x))$，那么：

$$f(x) = o(h(x)) \quad x \to x_0$$

这直接来自定义：由于两个比值都趋于零，它们的乘积也趋于零，因此 $f(x)/h(x) \to 0$。例如，由于当 $x \to 0$ 时 $x^3 = o(x^2)$ 且 $x^2 = o(x)$，所以 $x^3 = o(x)$。

> 这一链式关系可以扩展到任意有限个函数组成的序列：每个函数都是下一个函数的小 o，于是第一个函数就是最后一个函数的小 o。

- - -

两个小 o 项的复合会化为单个项。如果当 $x \to x_0$ 时 $h(x) = o(g(x))$ 且 $g(x) = o(f(x))$，那么任何关于 $g$ 的小 o 函数也关于 $f$ 为小 o。紧凑地写作：

$$o(o(f(x))) = o(f(x)) \quad x \to x_0$$

这直接由传递性得到：若 $h = o(g)$ 且 $g = o(f)$，则 $h = o(f)$。例如，由于 $x \to 0$ 时 $x^2 = o(x)$，所以任何关于 $x^2$ 的 $o(x^2)$ 函数也关于 $x$ 为小 o。

## 小 o 与大 O 记号的区别

小 o 和[大 O 记号](../big-o-notation/)都是 Landau 记号家族的成员，但描述的渐近行为不同。大 O 记号用另一个函数的常数倍给出上界，而小 o 对比值施加更严格的要求，即比值在极限中趋于零。

形式上，当 $x \to x_0$ 时，如果存在常数 $M > 0$ 和 $\delta > 0$，使得只要 $0 < |x - x_0| < \delta$ 就有 $|f(x)| \leq M |g(x)|$，那么 $f(x) = O(g(x))$。

当 $x \to 0$ 时，$x^2 = o(x)$，这也意味着 $x^2 = O(x)$。然而，$x = O(x)$ 并不意味着 $x = o(x)$，因为：

$$\lim_{x \to 0} \frac{x}{x} = 1 \neq 0$$

极限没有趋于零，因此不满足小 o 条件，尽管大 O 条件成立。小 o 要求比值达到零，而大 O 只要求比值保持有界。

就集合包含关系而言，满足 $f = o(g)$ 的函数类严格包含于满足 $f = O(g)$ 的函数类之内。每个小 o 关系也是大 O 关系，但反过来不成立。

## Taylor 展开中的小 o 记号

在[渐近展开](../asymptotic-expansion/)中，小 o 记号描述了将展开截断到有限阶后的误差。它不必逐项列出所有省略项，只需一个符号就能记录余项的渐近阶。设函数 $f(x)$ 在 $x_0$ 处 $n$ 次可导，则其 $n$ 阶 Taylor 展开为：

$$f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2!}(x - x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + o\big( (x - x_0)^n \big)$$

余项 $o((x - x_0)^n)$ 表达了精确的渐近信息：当 $x \to x_0$ 时，误差比 $(x - x_0)^n$ 更快地减小，因此相对于展开中最后一个显式项可以忽略。

- - -

下面列出 $x = 0$ 附近几个带有显式小 o 余项的常见 Taylor 展开：

[class="table-1"]

|                  |                                                                       |
| ---------------- | --------------------------------------------------------------------- |
| $e^x$            | $1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + o(x^3)$                  |
| $\sin x$         | $x - \dfrac{x^3}{6} + o(x^3)$                                         |
| $\cos x$         | $1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} + o(x^4)$                       |
| $\ln(1+x)$       | $x - \dfrac{x^2}{2} + \dfrac{x^3}{3} + o(x^3)$                        |
| $(1+x)^\alpha$   | $1 + \alpha x + \dfrac{\alpha(\alpha-1)}{2} x^2 + o(x^2)$              |

[/class]

这些展开对于求解涉及[不定式](../indeterminate-forms/)的极限很有效。用 Taylor 展开替换函数后，问题就变成代数运算，其中小 o 余项在极限中消失：

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{\dfrac{x^2}{2} + o(x^2)}{x^2} = \frac{1}{2}$$

当 $x \to 0$ 时，小 o 项变得可以忽略，极限由首项系数决定。

> 小 o 余项记录的不只是被省略项的存在，它还确定误差的阶，也就是截断展开趋近 $f(x)$ 的速率（当 $x \to x_0$ 时）。
