---
title: 递增、递减与单调函数
title_en: Increasing, Decreasing and Monotonic Functions
source: https://algebrica.org/increasing-and-decreasing-functions/
license: CC BY-NC 4.0
tags:
  - decreasing-function
  - increasing-function
  - monotonic-function
  - strict-monotonicity
translation:
  status: current
  source_hash: c98bd17493c0f71ed074cce7a90d20ffee5e601a7929b0d31f1a277ecd1762a8
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 引言

根据输出值随输入增大而变化的方式，可以将[函数](../functions/)分为递增函数、递减函数或单调函数。

- - -

**定义 1。** 设 $y = f(x)$ 是定义在[定义域](../determining-the-domain-of-a-function/) $X \subseteq \mathbb{R}$ 上的函数。如果对区间 $I \subseteq X$ 中任意两个满足 $x_1 < x_2$ 的值 $x_1, x_2 \in I$，都有：

$$
f(x_1) < f(x_2)
$$

![图 1](/assets/functions/svg/increasing-and-decreasing-functions-1.zh.svg)

当输入 $x$ 在[区间](../intervals/) $I$ 内增大时，输出 $f(x)$ 也严格增大，中间没有平坦或下降的部分。

- - -

**定义 2。** 设 $y = f(x)$ 是定义在定义域 $X \subseteq \mathbb{R}$ 上的函数。如果对区间 $I \subseteq X$ 中任意两个满足 $x_1 < x_2$ 的值 $x_1, x_2 \in I$，都有：

$$
f(x_1) > f(x_2)
$$

![图 2](/assets/functions/svg/increasing-and-decreasing-functions-2.zh.svg)

当输入 $x$ 在区间 $I$ 内增大时，输出 $f(x)$ 严格减小，中间没有平坦或上升的部分。

- - -

定义域为 $X \subseteq \mathbb{R}$ 的函数，如果在区间 $I \subseteq X$ 上始终严格递增或始终严格递减，且没有改变方向或平坦部分，就称为区间 $I$ 上的严格单调函数。

概括来说，设 $X \subseteq \mathbb{R}$，并取 $x_1, x_2 \in X$ 且 $x_1 < x_2$。函数 $f : X \to \mathbb{R}$ 称为：

[class="table-1"]
|  | |
|------|------|
| 递增 | $f(x_1) \leq f(x_2)$ |
| 严格递增 | $f(x_1) < f(x_2)$ |
| 递减 | $f(x_1) \geq f(x_2)$ |
| 严格递减 | $f(x_1) > f(x_2)$ |
| （严格）单调 | 严格递增或严格递减 |
[/class]

## 导数与单调行为

[导数](../derivatives/)描述函数图像的形状。特别是，一阶导数 $f'(x)$ 确定 $f(x)$ 递增和递减的区间。设函数 $y = f(x)$ 在区间 $I$ 上[连续](../continuous-functions/)，并且在 $I$ 的内部点处可导：

+ 如果对 $I$ 的每个内部点 $x$ 都有 $f'(x) > 0$，则 $f(x)$ 在 $I$ 上严格递增。
+ 如果对 $I$ 的每个内部点 $x$ 都有 $f'(x) < 0$，则 $f(x)$ 在 $I$ 上严格递减。
+ 如果对 $I$ 的每个内部点 $x$ 都有 $f'(x) = 0$，则 $f(x)$ 在 $I$ 上为常数。

应用于位置函数 $s(t)$ 时，这一判据说明，正的[速度](../velocity/)会使位置随时间增加，而负速度会使位置随时间减少。

> 导数非负已经足以给出广义意义下的单调性，因为 $f'(x) \geq 0$ 在 $I$ 的内部意味着 $f$ 递增。严格单调性允许导数在孤立点处为零；例如 $f(x) = x^3$ 在 $x = 0$ 处有 $f'(0) = 0$，但函数仍严格递增。

- - -

为了证明这些性质，我们使用[拉格朗日定理](../lagrange-theorem/)。取区间 $I$ 中的两个点 $a, b \in I$，满足 $a < b$，并考虑开区间 $(a, b)$ 中的一点 $c$。根据拉格朗日定理，存在这样的 $c$，使得：

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

![图 3](/assets/functions/svg/increasing-and-decreasing-functions-3.zh.svg)

由于 $b - a > 0$ 且 $f'(c) > 0$，可知 $f(b) - f(a) > 0$，从而 $f(b) > f(a)$。由于 $a$ 和 $b$ 是 $I$ 中任意的点，函数在 $I$ 上递增。

相反地，由于 $b - a > 0$ 且 $f'(c) < 0$，可知 $f(b) - f(a) < 0$，从而 $f(b) < f(a)$。同样，$a$ 和 $b$ 是任意点，因此函数在 $I$ 上递减。

## 例 1

考虑函数：

$$f(x) = \frac{x^4}{4} - \frac{x^2}{2}$$

先计算其导数 $f'(x) = x(x^2 - 1)$。为了找出导数为正的区间，我们研究每个因子的符号：

$$x > 0$$
$$x^2 - 1 > 0 \implies x < -1 \lor x > 1$$

将两个因子的符号相乘，可以得到导数为正的区间：

[class="table-sign"]

|               |     | $-1$ | $0$ | $1$ |
| :-----------: | :-: | :--: | :-: | :-: |
|    $x > 0$    | $-$ | $-$  | $+$ | $+$ |
| $x^2 - 1 > 0$ | $+$ | $-$  | $-$ | $+$ |
|    $f'(x)$    | $-$ | $+$  | $-$ | $+$ |
[/class]

因此，导数 $x(x^2 - 1)$ 在 $x \in (-1,0) \cup (1,+\infty)$ 时为正。

> 如本例所示，对乘积进行[符号分析](../sign-analysis-in-inequalities/)时，要研究每个因子的符号，再通过相乘确定每个区间上的整体符号。

- - -

根据单调性的定义读取导数符号：在 $f'(x) > 0$ 的区间 $(-1, 0)$ 和 $(1, +\infty)$ 上，$f$ 严格递增；在 $f'(x) < 0$ 的区间 $(-\infty, -1)$ 和 $(0, 1)$ 上，$f$ 严格递减。

> 函数并不在作为单个集合的并集 $(-1, 0) \cup (1, +\infty)$ 上递增。必须分别在每个区间上读取单调性，因为比较 $(-1, 0)$ 中的点与 $(1, +\infty)$ 中的点时，会跨过位于两者之间的递减区间 $(0, 1)$。

## 严格单调性与单射

严格单调函数是[单射](../injective-surjective-and-bijective-functions/)。设 $f$ 在 $I$ 上严格递增，并取 $I$ 中两个不同的点 $x_1, x_2$。两种顺序中必有一种成立，即 $x_1 < x_2$ 或 $x_2 < x_1$；无论哪种情况，严格单调性都会把输入之间的严格不等式转化为输出之间的严格不等式，因此 $f(x_1) \neq f(x_2)$。严格递减函数同理。

因此，严格单调函数在其像集上存在[逆函数](../inverse-function/)，且逆函数保持相同的单调方向。

> 广义单调性不足以保证单射。满足 $f(x_1) \leq f(x_2)$ 的递增函数可能在某个子区间上保持常值，从而在无穷多个点取得同一个值。

## 单调函数的单侧极限

单调性对函数的局部行为施加了足够强的约束，使函数在每个内部点都存在左右两个[极限](../limits/)，即使函数在该点不连续。

**定义 3。** 设 $f$ 在开[区间](../intervals/) $(a, b)$ 上递增。对每个 $x_0 \in (a, b)$，两个单侧极限都存在并满足：

$$
\sup_{a < t < x_0} f(t) = f(x_0^-) \leq f(x_0) \leq f(x_0^+) = \inf_{x_0 < t < b} f(t)
$$

为了证明左极限的结论，考虑数值集合 $\{\ f(t) \mid a < t < x_0 \ \}$。由于 $f$ 递增，该集合的每个元素都被 $f(x_0)$ 从上方界定，因此集合存在上确界：

$$
A := \sup_{a < t < x_0} f(t)
$$

取 $\varepsilon > 0$。根据上确界的定义，存在 $t_0 \in (a, x_0)$，使得 $f(t_0) > A - \varepsilon$。对每个 $t \in [t_0, x_0)$，单调性给出：

$$
A - \varepsilon < f(t_0) \leq f(t) \leq A
$$

这些不等式说明当 $t \to x_0^-$ 时，$f(t)$ 趋近于 $A$，所以 $f(x_0^-) = A$。证明 $f(x_0^+) = \inf_{x_0 < t < b} f(t)$ 的方法是对称的；中心不等式 $f(x_0^-) \leq f(x_0) \leq f(x_0^+)$ 则来自 $t < x_0 < s$ 时的 $f(t) \leq f(x_0) \leq f(s)$。对于递减函数，只需把同样的结果应用于递增函数 $-f$。

- - -

递增函数的单侧极限在不同点之间不能交叠。设 $x, y \in (a, b)$ 且 $x < y$，并任取 $z \in (x, y)$。对这两个点使用上面的刻画：

$$
f(x^+) = \inf_{x < t < b} f(t) \leq f(z) \leq \sup_{a < t < y} f(t) = f(y^-)
$$

从 $x$ 的右侧趋近得到的值，永远不会超过任意后续点 $y$ 的左侧极限。

## 单调函数的间断点

在内部点 $x_0$ 处，递增函数的两个单侧极限都是有限的，并按 $f(x_0^-) \leq f(x_0) \leq f(x_0^+)$ 排序。只有当外侧两项不相等时，$x_0$ 处才不连续，因此单调函数唯一可能出现的[间断点](../discontinuities-of-real-functions/)是跳跃间断；非负量

$$
f(x_0^+) - f(x_0^-)
$$

衡量其大小。可去间断被排除在外，因为 $f(x_0^-) = f(x_0^+)$ 会迫使它们与 $f(x_0)$ 相等，从而得到连续性。单调函数不会出现单侧极限不存在的间断点。

单调函数的间断点集合至多可数。设 $f$ 在 $(a, b)$ 上递增。在每个间断点 $x$ 处，都有 $f(x^-) < f(x^+)$，所以开区间 $(f(x^-), f(x^+))$ 非空，并包含一个有理数 $r_x$。如果 $x < y$ 是两个间断点，界 $f(x^+) \leq f(y^-)$ 使区间 $(f(x^-), f(x^+))$ 与 $(f(y^-), f(y^+))$ 不相交，因此 $r_x \neq r_y$。映射 $x \mapsto r_x$ 将间断点集合单射到 $\mathbb{Q}$ 中，而任何可以单射到 $\mathbb{Q}$ 的集合至多可数。

[向下取整函数](../floor-and-ceiling-functions/)说明该上界可以达到。它单调不减，并且在每个整数处都有跳跃。

> 单调函数的间断点不一定是孤立的。给定任意可数集 $E \subseteq (a, b)$，即使是 $\mathbb{Q} \cap (a, b)$ 这样的稠密集，也可以构造一个恰好在 $E$ 的点处不连续、在其他地方处处连续的递增函数。
