---
title: 逆函数
title_en: Inverse Function
source: https://algebrica.org/inverse-function/
license: CC BY-NC 4.0
tags:
  - bijective-function
  - identity-function
  - inverse-function
  - inverse-function-theorem
translation:
  status: current
  source_hash: a6b62f5e8852a8a50b24db8221a97a2b17001c0f366356c7aa673e4b67e940d7
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 逆函数的定义

在[函数](../functions/)的介绍中，我们看到函数 $f: X \to Y$ 是双射的，当且仅当它既是单射又是满射；也就是说，对每个 $y \in Y$，都存在唯一的 $x \in X$，使得 $f(x) = y$。

+ $X$ 是[定义域](../determining-the-domain-of-a-function/)。
+ $Y$ 是陪域。
+ 如果对任意 $x_1, x_2 \in X$ 且 $x_1 \ne x_2$，都有 $f(x_1) \ne f(x_2)$，则函数是单射。等价地，对每个 $y \in Y$，至多存在一个 $x \in X$，使得 $f(x) = y$。
+ 如果对每个 $y \in Y$，至少存在一个 $x \in X$，使得 $f(x) = y$，则函数是满射。

单射性可以直接从图像上理解。当且仅当没有任何水平线与函数图像相交超过一次时，函数才是单射。若水平线 $y = c$ 与图像在两个不同点相交，就会产生两个具有相同像 $c$ 的输入，这与单射性矛盾。

- - -

函数 $f : X \to Y$ 是双射，当且仅当存在函数 $g : Y \to X$，使得：

+ $(g \circ f)(x) = g(f(x)) = x$ 对每个 $x \in X$ 成立。
+ $(f \circ g)(y) = f(g(y)) = y$ 对每个 $y \in Y$ 成立。

此时函数 $g$ 是唯一的，称为 $f$ 的逆函数，记作：

$$f^{-1} = g$$

> 表达式 $(g \circ f)(x) = g(f(x))$ 就是[复合函数](../composite-functions/)，它先将 $f$ 作用于 $x$，再将 $g$ 作用于所得结果。

## 通过限制定义域使函数可逆

考虑定义在 $\mathbb{R}$ 上的函数 $f(x) = x^2$。这是一个二次函数，由笛卡尔平面原点处顶点的[抛物线](../parabola/)表示。在完整定义域 $\mathbb{R}$ 上，该函数不可逆，因为它不是单射：不同输入可能产生相同输出，例如 $f(-2) = f(2)$。

如果将定义域限制为 $[0, +\infty)$，函数就变成双射，因而可逆。此时逆函数为：

$$
f(x) = x^2 \rightarrow f^{-1}(x) = \sqrt{x} \quad (x \geq 0)
$$

![图 1](/assets/functions/svg/inverse-function-1.zh.svg)

函数图像与其逆函数图像关于直线 $y = x$ 对称；这条直线是笛卡尔平面第一、第三象限的角平分线。

同样的对称性表明，逆函数保持变化方向。将递增图像关于直线 $y = x$ 反射后，得到的仍是递增图像。因此，递增函数的逆函数仍然递增，递减函数的逆函数仍然递减。

如果函数 $f$ 与其逆函数 $f^{-1}$[复合](../composite-functions/)，结果就是恒等函数，即把集合中的每个元素映射到自身：

$$
f(f^{-1}(x)) = f^{-1}(f(x)) = x
$$

再次交换输入与输出的对应关系，就会恢复原函数。$f^{-1}$ 的逆函数仍然是 $f$，因此：

$$
\bigl(f^{-1}\bigr)^{-1} = f
$$

这个等式也说明 $f^{-1}$ 本身是双射，因为它拥有逆函数。

## 如何求一般函数的逆函数

+ 检查函数是否为双射，或者限制其定义域使它成为双射。
+ 用 $y$ 替换 $f(x)$，从而处理方程 $y = f(x)$。
+ 交换变量 $x$ 与 $y$，写成 $x = f(y)$。这体现了对输入与输出求逆的思想。
+ 解出 $y$，将其显式地隔离出来。
+ 将结果改写为 $f^{-1}(x) = \ldots$，使用 $x$ 作为逆函数的输入变量。

## 例子

我们要找出函数 $f(x) = \dfrac{2x - 1}{x + 3}$ 的逆函数。

> 函数 $f$ 在其定义域 $\mathbb{R} \setminus \{-3\}$ 上是双射，因为它是[严格递增](../increasing-and-decreasing-functions/)的，其[导数](../derivatives/)始终为正。这保证了 $f$ 是单射；又因为 $f$ 的像覆盖除了一个点以外的所有实数，所以它对自己的陪域也是满射。

- - -

将函数写成方程：

$$
y = \dfrac{2x - 1}{x + 3}
$$

交换 $x$ 与 $y$：

$$
x = \dfrac{2y - 1}{y + 3}
$$

解出 $y$。等式两边乘以 $y + 3$：

$$
x(y + 3) = 2y - 1
$$

展开左侧：

$$
xy + 3x = 2y - 1
$$

将含 $y$ 的项移到一边，并提取 $y$：

$$
\begin{align}
xy - 2y &= -1 - 3x \\[6pt]
y(x - 2) &= -1 - 3x
\end{align}
$$

除以 $x - 2$，解得 $y$：

$$
y = \dfrac{-1 - 3x}{x - 2}
$$

因此，逆函数为：

$$
f^{-1}(x) = \dfrac{-1 - 3x}{x - 2}
$$

## 逆函数定理

基础分析中的一个有用结果是一维逆函数定理。它的内容很直观：在区间上行为规整的函数可以顺利求逆。设函数 $f$ 在区间 $I$ 上[连续](../continuous-functions/)且可导，并且其[导数](../derivatives/)永不为零：

$$
f'(x) \neq 0 \quad \forall \, x \in I
$$

在 $I$ 上保持固定符号的导数使函数[严格单调](../increasing-and-decreasing-functions/)，而严格单调性使 $f$ 成为单射。因此，逆函数 $f^{-1}$ 存在于 $f(I)$ 上，并且连续且可导。其导数满足：

$$
\bigl(f^{-1}\bigr)'(y) = \frac{1}{f'\!\bigl(f^{-1}(y)\bigr)}
$$

这个关系式来自对恒等式 $f\bigl(f^{-1}(y)\bigr) = y$ 求导。对左侧应用[链式法则](../chain-rule/)，得到：

$$
f'\!\bigl(f^{-1}(y)\bigr) \cdot \bigl(f^{-1}\bigr)'(y) = 1
$$

解出 $\bigl(f^{-1}\bigr)'(y)$，就得到上面的公式。这个计算预先假设 $f^{-1}$ 可导，而假设 $f' \neq 0$ 正是保证这一性质的条件。

根据定义得到的证明和更多例子见[逆函数的导数](../derivative-of-the-inverse-function/)。

不能删除假设 $f' \neq 0$。当 $f'\bigl(f^{-1}(a)\bigr) = 0$ 时，上面的恒等式会迫使 $0 \cdot \bigl(f^{-1}\bigr)'(a) = 1$，因此 $f^{-1}$ 在 $a$ 处不可导。函数 $f(x) = x^3$ 说明了这一点。它的逆函数是 $f^{-1}(x) = \sqrt[3]{x}$，且 $f'(0) = 0$，所以立方根函数在原点不可导；在那里它的图像有一条竖直切线，尽管 $f$ 在整个 $\mathbb{R}$ 上都可导。
