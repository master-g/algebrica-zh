---
title: 复合函数
title_en: Composite Functions
source: https://algebrica.org/composite-functions/
license: CC BY-NC 4.0
tags:
  - domain
  - function-composition
  - functions
  - identity-function
  - inverse-function
translation:
  status: current
  source_hash: 0d368376a48e15c0450be7bd4a5f63317d064de282898a2626c4fffe649d0b4b
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 复合的定义

给定两个[函数](../functions/) $f$ 和 $g$，先应用 $f$、再应用 $g$ 所得的函数称为它们的复合。它记作 $g \circ f$，定义为：

$$
(g \circ f)(x) = g(f(x))
$$

符号 $\circ$ 读作“之后”，因此在 $g \circ f$ 中，写在右侧的函数先作用。这个顺序来自 $g(f(x))$ 的嵌套结构，也是常见错误来源。

下图表示复合。$A$ 中的输入 $x$ 先由 $f$ 映射到 $B$ 中的 $f(x)$，再由 $g$ 映射到 $C$ 中的 $g(f(x))$。外侧弧线对应 $g \circ f$。

![图 1](/assets/functions/svg/composite-functions-1.zh.svg)

图中的两个函数为：

$$
\begin{align}
f &\colon A \rightarrow B \\[6pt]
g &\colon B \rightarrow C
\end{align}
$$

对每个 $x \in A$，都有 $f(x) \in B$，而 $B$ 是 $g$ 的定义域，因此对每个 $x \in A$，$g(f(x))$ 都有定义。所以 $g \circ f$ 是从 $A$ 到 $C$ 的函数：

$$
g \circ f \colon A \rightarrow C, \qquad x \mapsto g(f(x))
$$

包含关系 $f(A) \subseteq B$ 使复合在整个 $A$ 上定义良好。当函数仅由公式指定时，$g$ 的定义域未必包含 $f$ 的每个取值。复合仅对那些经 $f$ 映射后属于 $\mathrm{dom}(g)$ 的输入有定义。

## 复合函数的定义域

要使 $g(f(x))$ 有定义，必须满足两个条件。点 $x$ 必须属于 $f$ 的定义域，值 $f(x)$ 必须属于 $g$ 的定义域。复合的[定义域](../determining-the-domain-of-a-function/)是同时满足这两个条件的点集：

$$
\mathrm{dom}(g \circ f) = \{\ x \in \mathrm{dom}(f) \mid f(x) \in \mathrm{dom}(g)\ \}
$$

第二个条件使复合区别于函数之间的其他运算。和与积定义在两个定义域的交集上；商还需从该交集中去掉分母的零点。对于复合，外函数 $g$ 对输入的每个条件都会转化为对 $f(x)$ 的条件。计算分三步：

+ 由内函数的表达式确定 $\mathrm{dom}(f)$。
+ 写出定义 $\mathrm{dom}(g)$ 的条件，并在每个条件中用 $f(x)$ 替换 $g$ 的变量。
+ 解出这些条件，并与 $\mathrm{dom}(f)$ 取交集。

第二步完成代入，因为外函数的条件施加在 $f(x)$ 上，而非直接施加在 $x$ 上。外层对数要求其自变量 $f(x)$ 为正；外层平方根要求 $f(x) \ge 0$；外层分母要求 $f(x) \neq 0$。

> 在确定定义域之前化简 $g(f(x))$ 的表达式，可能得到错误结果。令 $f(x) = \sqrt{x}$、$g(t) = t^2$，则复合的公式为 $(g \circ f)(x) = x$，但内层平方根要求 $x \ge 0$。因此定义域为 $[0, +\infty)$，而非 $\mathbb{R}$。代数化简不会改变复合的定义域。

## 例 1

按两个顺序复合下列函数：

$$
\begin{align}
f(x) &= x - 3 \\[6pt]
g(x) &= \sqrt{x}
\end{align}
$$

第一个函数是定义在整个 $\mathbb{R}$ 上的多项式，第二个函数是只对非负自变量有定义的[偶次根式](../irrational-functions/)：

$$
\begin{align}
\mathrm{dom}(f) &= \mathbb{R} \\[6pt]
\mathrm{dom}(g) &= [0, +\infty)
\end{align}
$$

对于 $g \circ f$，内函数是 $f$，因此把 $x - 3$ 代入 $g$：

$$
(g \circ f)(x) = g(x - 3) = \sqrt{x - 3}
$$

每个实数都属于 $\mathrm{dom}(f)$，所以第一个条件不排除任何点。限制来自 $f(x) \in \mathrm{dom}(g)$：

$$
x - 3 \ge 0 \quad \rightarrow \quad x \ge 3
$$

$g \circ f$ 的定义域是[区间](../intervals/) $[3, +\infty)$，它是内函数定义域的真子集。按相反顺序复合得到：

$$
(f \circ g)(x) = f(\sqrt{x}) = \sqrt{x} - 3
$$

平方根是内函数，因此第一个条件要求 $x \ge 0$；外函数定义在整个 $\mathbb{R}$ 上，不增加限制。$f \circ g$ 的定义域为 $[0, +\infty)$。

两个复合的公式和定义域均不同。交换顺序会改变复合，因此复合不满足交换律。

## 例 2

两个函数的定义域都有限制：

$$
\begin{align}
f(x) &= \frac{x + 1}{x - 2} \\[6pt]
g(x) &= \ln x
\end{align}
$$

[有理函数](../rational-functions/) $f$ 在 $x \neq 2$ 时有定义，[对数函数](../logarithmic-function/)只对严格正的自变量有定义。先复合 $f$ 再复合 $g$，得：

$$
(g \circ f)(x) = \ln \frac{x + 1}{x - 2}
$$

外函数的定义域条件施加在该商上，因此商必须严格为正：

$$
\frac{x + 1}{x - 2} > 0
$$

分子在 $x = -1$ 时为零，分母在 $x = 2$ 时为零。[符号分析](../sign-analysis-in-inequalities/)表明，分子与分母同号时商为正，即 $x < -1$ 或 $x > 2$。点 $x = 2$ 不属于该集合，因此定义域为：

$$
\mathrm{dom}(g \circ f) = (-\infty, -1) \cup (2, +\infty)
$$

按另一顺序复合，把 $\ln x$ 代入该商：

$$
(f \circ g)(x) = \frac{\ln x + 1}{\ln x - 2}
$$

内层对数要求 $x > 0$，外函数要求其自变量不等于 $2$，即 $\ln x \neq 2$，也就是 $x \neq e^2$。定义域为：

$$
\mathrm{dom}(f \circ g) = (0, e^2) \cup (e^2, +\infty)
$$

$f$ 定义域中的限制 $t \neq 2$，在 $f$ 作为外函数时转化为 $\ln x \neq 2$。一般而言，外函数的定义域条件施加在内函数的值上。

## 结合律与复合顺序

三个函数可以按两种方式分组复合，并得到相同结果。对左侧分组应用两次定义：

$$
((h \circ g) \circ f)(x) = (h \circ g)(f(x)) = h(g(f(x)))
$$

对右侧分组应用两次定义：

$$
(h \circ (g \circ f))(x) = h((g \circ f)(x)) = h(g(f(x)))
$$

当 $x \in \mathrm{dom}(f)$、$f(x) \in \mathrm{dom}(g)$ 且 $g(f(x)) \in \mathrm{dom}(h)$ 时，两个表达式都有定义。在这个共同定义域上，它们的值相等，因此函数相等：

$$
(h \circ g) \circ f = h \circ (g \circ f)
$$

该函数可以不加括号地写成 $h \circ g \circ f$。

- - -

结合律涉及分组，而非顺序。复合不满足交换律，因为例 1 中的两个复合具有不同公式：

$$
\sqrt{x - 3} \neq \sqrt{x} - 3
$$

等式 $g \circ f = f \circ g$ 一般不成立，但某些函数对可以交换。两个平移 $f(x) = x + a$ 和 $g(x) = x + b$ 满足 $f(g(x)) = g(f(x)) = x + a + b$，每个自映射也与其各次迭代交换。因此，交换性必须针对每个函数对单独检查。

## 将函数拆解为简单函数的复合

链式法则和换元积分经常要求把函数写成较简单函数的复合。要找出这种拆解，可以按求值顺序列出运算。第一个运算给出最内层函数，最后一个运算给出最外层函数。考虑：

$$
F(x) = \sqrt{\ln(x^2 + 1)}
$$

计算 $F$ 时，先平方并加一，再对结果取对数，最后取平方根。这三个步骤定义三个函数：

$$
\begin{align}
h(x) &= x^2 + 1 \\[6pt]
g(t) &= \ln t \\[6pt]
f(u) &= \sqrt{u}
\end{align}
$$

复合这些函数得到 $f(g(h(x))) = \sqrt{\ln(x^2 + 1)}$，因此 $F = f \circ g \circ h$。对每个实数 $x$，对数的自变量 $x^2 + 1$ 都为正。由于 $x^2 + 1 \ge 1$，有 $\ln(x^2 + 1) \ge 0$，因此平方根有定义。所以 $\mathrm{dom}(F) = \mathbb{R}$。

拆解并不唯一。把最后两步合并为函数 $\tilde{g}(t) = \sqrt{\ln t}$，可得 $F = \tilde{g} \circ h$；与恒等函数复合还可得到其他形式。求导或积分时，应按照[链式法则](../chain-rule/)和[换元积分](../integration-by-substitution/)的要求，选择具有已知导数或反导数的组成函数。

## 复合函数的单调性与奇偶性

复合函数的单调性取决于组成函数保持还是反转顺序。设 $f$ 在区间 $I$ 上严格单调，$g$ 在包含 $f(I)$ 的集合上严格单调。对 $I$ 中的 $x_1 < x_2$，$f$ 会保持或反转顺序，$g$ 对所得值也会如此。如果 $f$ 与 $g$ 同为递增或同为递减，则复合严格递增；如果一个递增、另一个递减，则复合严格递减。例如，在 $I = (0, +\infty)$ 上，$f(x) = x^3$ [严格递增](../increasing-and-decreasing-functions/)，像为 $(0, +\infty)$。函数 $g(t) = 1/t$ 在该像上严格递减。因此，$g(f(x)) = 1/x^3$ 在 $(0, +\infty)$ 上严格递减。

- - -

设复合的定义域关于原点对称。如果内函数 $f$ 是[偶函数](../even-and-odd-functions/)，则 $g \circ f$ 也是偶函数，因为 $f(-x) = f(x)$ 蕴含 $g(f(-x)) = g(f(x))$。这个结论不要求 $g$ 是偶函数或奇函数；尽管指数函数既非偶函数也非奇函数，$e^{-x^2}$ 仍是偶函数。如果 $f$ 是奇函数，则偶的外函数给出偶复合，奇的外函数给出奇复合。因此，$\sin^2 x$ 是偶函数，因为平方函数为偶函数；$\arctan(\sin x)$ 是奇函数，因为反正切为奇函数。

## 单射性、满射性与有界性

设 $f \colon A \rightarrow B$ 且 $g \colon B \rightarrow C$。如果 $f$ 和 $g$ 都是单射，则 $g(f(x_1)) = g(f(x_2))$ 蕴含 $f(x_1) = f(x_2)$，进而有 $x_1 = x_2$，所以 $g \circ f$ 是单射。如果两个函数都是满射，则对每个 $c \in C$，存在 $b \in B$ 使 $g(b) = c$，并存在 $a \in A$ 使 $f(a) = b$，所以 $g \circ f$ 是满射。反过来，如果 $g \circ f$ 是单射，则 $f$ 是单射，但 $g$ 未必是；如果 $g \circ f$ 是满射，则 $g$ 是满射，但 $f$ 未必是。

缺失的逆命题并不成立。令 $f \colon [0, +\infty) \rightarrow \mathbb{R}$ 为 $f(x) = x$，令 $g \colon \mathbb{R} \rightarrow [0, +\infty)$ 为 $g(t) = t^2$。复合 $g \circ f$ 是 $x \mapsto x^2$，它在 $[0, +\infty)$ 上是单射，但 $g$ 在 $\mathbb{R}$ 上不是单射。对于满射，令 $f \colon \mathbb{R} \rightarrow \mathbb{R}$ 为 $f(x) = x^2$，并使用同一个 $g$。复合 $(g \circ f)(x) = x^4$ 满射到 $[0, +\infty)$，但 $f$ 不满射到 $\mathbb{R}$。

因此，两个双射的复合仍是双射。一个集合到自身的所有双射在复合下构成该集合的[对称群](../symmetric-group/)。这三个性质详见[单射、满射与双射函数](../injective-surjective-and-bijective-functions/)。

- - -

如果外函数 $g$ 有界，则对任意内函数 $f$，$g \circ f$ 都有界，因为复合的每个值都是 $g$ 的值。例如，$\sin(e^x)$ 始终介于 $-1$ 与 $1$ 之间。相反，$f$ 有界并不蕴含 $g \circ f$ 有界。函数 $f(x) = \frac{1}{1 + x^2}$ 的像为 $(0, 1]$，将它与 $g(t) = 1/t$ 复合得到 $g(f(x)) = 1 + x^2$，这是无界函数。

## 复合函数的连续性与可导性

两个[连续函数](../continuous-functions/)的复合是连续函数。如果 $f$ 在 $x_0$ 处连续，$g$ 在 $f(x_0)$ 处连续，则 $g \circ f$ 在 $x_0$ 处连续。复合保持[一致连续性](../uniform-continuity/)。给定 $\varepsilon > 0$，$g$ 的一致连续性给出 $\eta > 0$，使 $|u - v| < \eta$ 蕴含 $|g(u) - g(v)| < \varepsilon$。随后，$f$ 的一致连续性给出 $\delta > 0$，使 $|x - y| < \delta$ 蕴含 $|f(x) - f(y)| < \eta$。因此，同一个 $\delta$ 对定义域上的 $g \circ f$ 有效。

> 如果 $\lim_{x \to x_0} f(x)$ 存在，且外函数在该极限处连续，则[极限](../limits/)恒等式 $\lim_{x \to x_0} g(f(x)) = g\left(\lim_{x \to x_0} f(x)\right)$ 成立。没有连续性时，该恒等式未必成立。例如，令 $f(x) = x$，并定义 $g(t) = 1$（当 $t \neq 0$）和 $g(0) = 0$。此时 $\lim_{x \to 0} g(f(x)) = 1$，而 $g\left(\lim_{x \to 0} f(x)\right) = g(0) = 0$。这里 $g$ 在 $0$ 处[不连续](../discontinuities-of-real-functions/)。

如果 $f$ 在 $x$ 处[可导](../derivatives/)，且 $g$ 在 $f(x)$ 处可导，则[链式法则](../chain-rule/)给出：

$$
D[g(f(x))] = g'(f(x))f'(x)
$$

> 对于函数 $F(x) = \sqrt{\ln(x^2 + 1)}$，外层平方根在 $0$ 处不可导，并且在 $x = 0$ 时 $\ln(x^2 + 1) = 0$。因此，链式法则不能判断 $F$ 在原点是否可导。由于 $F(0) = 0$ 且 $\lim_{x \to 0} \frac{\ln(1 + x^2)}{x^2} = 1$，有 $\lim_{x \to 0} \frac{F(x)}{|x|} = 1$。$F$ 在原点的差商从右侧趋于 $1$，从左侧趋于 $-1$。所以 $F$ 在原点[不可导](../points-of-non-differentiability/)，其图像在那里有尖角。

## 与逆函数复合

当 $f$ 存在[逆函数](../inverse-function/)时，复合 $f^{-1} \circ f$ 与 $f \circ f^{-1}$ 分别是不同集合上的恒等函数：

$$
\begin{align}
(f^{-1} \circ f)(x) &= x \\[6pt]
(f \circ f^{-1})(y) &= y
\end{align}
$$

第一个恒等式对 $f$ 定义域中的每个 $x$ 成立，第二个恒等式对其像中的每个 $y$ 成立。可逆性要求 $f$ 为单射，并满射到选定陪域。非单射函数可以有可逆限制，此时两个恒等式在限制后的集合上成立。

复合的逆函数按相反顺序排列组成函数：

$$
(g \circ f)^{-1} = f^{-1} \circ g^{-1}
$$

平方函数 $f \colon [0, +\infty) \rightarrow [0, +\infty)$ 是双射，其逆函数为平方根。复合 $f^{-1} \circ f$ 满足：

$$
\sqrt{x^2} = |x| = x, \qquad x \ge 0
$$

如果平方函数定义在整个 $\mathbb{R}$ 上，先应用平方函数、再应用平方根会得到 $\sqrt{x^2} = |x|$，它不是恒等函数。另一顺序 $(\sqrt{x})^2 = x$ 的定义域为 $[0, +\infty)$，因为平方根是内函数。

## 与分段函数复合

如果外函数按[分段形式](../piecewise-functions/)定义，则 $g(f(x))$ 使用哪个分支由 $f(x)$ 的值决定。因此，$g$ 的每个分支条件都必须施加在 $f(x)$ 上。考虑外函数：

$$
g(t) =
\begin{cases}
1 - t & t < 0 \\[6pt]
1 + t^2 & t \ge 0
\end{cases}
$$

令内函数为 $f(x) = x^2 - 1$。分支由 $f(x)$ 的符号决定，因此条件 $t < 0$ 转化为 $x^2 - 1 < 0$，在 $-1 < x < 1$ 时成立；条件 $t \ge 0$ 转化为 $x \le -1$ 或 $x \ge 1$。在中间区间上，外函数使用第一分支：

$$
(g \circ f)(x) = 1 - (x^2 - 1) = 2 - x^2
$$

在另外两个区间上，它使用第二分支：

$$
(g \circ f)(x) = 1 + (x^2 - 1)^2
$$

合并三段，复合函数为：

$$
(g \circ f)(x) =
\begin{cases}
1 + (x^2 - 1)^2 & x \le -1 \\[6pt]
2 - x^2 & -1 < x < 1 \\[6pt]
1 + (x^2 - 1)^2 & x \ge 1
\end{cases}
$$

$g$ 的连接值 $t = 0$ 在 $f$ 下的原像为 $-1$ 和 $1$，因此复合有两个连接点。$g \circ f$ 的分支数取决于 $g$ 的连接点在 $f$ 下的原像，并且可能多于 $g$ 的分支数。

> 在 $x = \pm 1$ 处，两个分支公式都连续且值为 $1$，因此复合在那里连续。如果 $g$ 在 $0$ 处有跳跃，则在这个例子中，$g \circ f$ 会在 $x = -1$ 和 $x = 1$ 处跳跃，因为 $f$ 连续，并且在每个点的两侧以相反符号趋近 $0$。相反，如果连续内函数接触某个连接值但没有穿过它，则两侧使用同一分支，外函数的跳跃未必会在复合中产生跳跃。
