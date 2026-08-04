---
title: 极限定理
title_en: Theorems on Limits
source: https://algebrica.org/theorems-on-limits/
license: CC BY-NC 4.0
tags:
  - comparison-theorem
  - limits
  - sign-permanence
  - squeeze-theorem
  - uniqueness-theorem
translation:
  status: current
  source_hash: eea6a666c2a636000637174b66b208360ad16a8f173e597ab6cc5685119dd37a
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 极限的唯一性

**定理 1。** 如果 $x \to x_0$ 时 $f(x)$ 的[极限](../limits/)存在，那么它是唯一的。一般而言，这说明当 $x$ 趋近同一点时，没有任何[函数](../functions/)能够趋近两个不同的值，无论这些值是有限的还是无穷的：

$$\lim_{x \to x_0} f(x) = \ell_1 \qquad \lim_{x \to x_0} f(x) = \ell_2 \implies \ell_1 = \ell_2$$

这一结果对 $\ell_1, \ell_2 \in \overline{\mathbb{R}}$ 都成立，也就是说，包括一个或两个预期极限为无穷值的情形。

- - -

有限情形的证明采用反证法。假设同一个函数 $f(x)$ 在 $x \to x_0$ 时有两个不同的有限极限 $\ell_1 \neq \ell_2$。两个值之间的半距离为：

$$\varepsilon = \frac{|\ell_1 - \ell_2|}{2}$$

它严格为正。对 $\ell_1$ 应用极限定义并取这个容许误差，存在 $\delta_1 > 0$，使得对所有满足 $0 < |x - x_0| < \delta_1$ 的 $x$，都有：

$$|f(x) - \ell_1| < \varepsilon$$

对 $\ell_2$ 应用同一定义，得到 $\delta_2 > 0$，使得对所有满足 $0 < |x - x_0| < \delta_2$ 的 $x$，都有：

$$|f(x) - \ell_2| < \varepsilon$$

令 $\delta = \min(\delta_1, \delta_2)$。对于满足 $0 < |x - x_0| < \delta$ 的每个 $x$，两个不等式同时成立，于是三角不等式给出：

$$|\ell_1 - \ell_2| = |(\ell_1 - f(x)) + (f(x) - \ell_2)| \leq |f(x) - \ell_1| + |f(x) - \ell_2| < 2\varepsilon = |\ell_1 - \ell_2|$$

这一连串估计产生了严格不等式 $|\ell_1 - \ell_2| < |\ell_1 - \ell_2|$，这是不可能的。因此必须否定 $\ell_1 \neq \ell_2$ 的假设，两个极限相等。

> 将 $\varepsilon$ 邻域替换为 $\pm\infty$ 的适当邻域后，论证可以推广到无穷情形。如果一个预期极限为有限值而另一个为 $+\infty$，就可以在扩展实数集 $\overline{\mathbb{R}}$ 中选取不相交的两个邻域，函数在 $x$ 接近 $x_0$ 时不可能同时属于二者。$+\infty$ 与 $-\infty$ 同样有不相交的邻域，因此也会产生相同的矛盾。

## 局部有界性

**定理 2。** 如果函数在 $x_0$ 处存在有限极限，那么它在 $x_0$ 的某个邻域内有界。这个定理把“聚集在实数 $\ell$ 附近的函数值不可能任意远离它”的直觉变成了定量结论：

$$\lim_{x \to x_0} f(x) = \ell \in \mathbb{R} \implies \exists\ M > 0,\ \exists\ \delta > 0\; \forall x\; \bigl(0 < |x - x_0| < \delta \implies |f(x)| \leq M\bigr)$$

极限有限这一假设至关重要。函数 $f(x) = 1/x$ 在 $x \to 0^+$ 时的极限为 $+\infty$，并且在零的每个右邻域内都无界。

- - -

证明只需将极限定义中的 $\varepsilon$ 取为 $1$。存在 $\delta > 0$，使得对所有满足 $0 < |x - x_0| < \delta$ 的 $x$，都有：

$$|f(x) - \ell| < 1$$

逆三角不等式给出：

$$|f(x)| = |(f(x) - \ell) + \ell| \leq |f(x) - \ell| + |\ell| < 1 + |\ell|$$

取 $M = |\ell| + 1$，即可在去心邻域 $0 < |x - x_0| < \delta$ 上得到所需的界。$\varepsilon$ 的具体值除了产生一个有限且明确的常数外没有其他作用；任何其他正的 $\varepsilon$ 都会给出形如 $|\ell| + \varepsilon$ 的界。

## 符号保持

**定理 3。** 如果函数 $f(x)$ 在 $x_0$ 处的极限严格为正，那么它在 $x_0$ 的某个去心邻域内也[严格为正](../increasing-and-decreasing-functions/)。把“正”处处替换为“负”，可得到对称的结论。用符号表示，若 $\ell > 0$，则：

$$\lim_{x \to x_0} f(x) = \ell \implies \exists\ \delta > 0\; \forall x\; \bigl(0 < |x - x_0| < \delta \implies f(x) > 0\bigr)$$

不能把假设 $\ell > 0$ 弱化为 $\ell \geq 0$。如果 $\ell = 0$，函数可能在任意接近 $x_0$ 的地方变号，例如在 $x_0 = 0$ 处的函数 $f(x) = x\sin(1/x)$。趋于零的极限本身无法提供局部符号的信息。

- - -

证明利用 $\ell$ 的严格正性，选取一个能使 $f(x)$ 保持在零以上的容许误差。令：

$$\varepsilon = \frac{\ell}{2} > 0$$

根据极限定义，存在 $\delta > 0$，使得对所有满足 $0 < |x - x_0| < \delta$ 的 $x$，都有：

$$|f(x) - \ell| < \frac{\ell}{2} \quad \implies \quad \frac{\ell}{2} < f(x) < \frac{3\ell}{2}$$

下界 $f(x) > \ell/2 > 0$ 证明了结论。$\ell < 0$ 的情形可以对函数 $-f$ 应用同样的论证，因为该函数的极限为 $-\ell > 0$。

> 如果 $f$ 在 $x_0$ 处连续且 $f(x_0) \neq 0$，还可以得到一个常用的加强结论：$f$ 在包含点 $x_0$ 的整个邻域内保持符号不变。微积分中最常引用的正是这种形式，因为连续函数提供了它的自然应用范围。

## 比较定理

**定理 4。** 设 $f$ 和 $g$ 在 $x_0$ 的某个邻域内有定义，并且满足：

$$f(x) \leq g(x)$$

对邻域内除 $x_0$ 本身外的每个 $x$ 都成立。如果 $x \to x_0$ 时两个极限都存在，则比较定理断言，极限运算会保留这个不等式：

$$\lim_{x \to x_0} f(x) \leq \lim_{x \to x_0} g(x)$$

这个陈述提供了一个基本工具，可以把两个函数的逐点信息转化为它们极限值之间的关系。

- - -

证明采用反证法。记两个极限为 $\ell_f$ 和 $\ell_g$，并假设 $\ell_f > \ell_g$。正数：

$$\varepsilon = \frac{\ell_f - \ell_g}{2}$$

把两个预期极限隔离在互不相交的 $\varepsilon$ 邻域内。根据极限定义，存在 $\delta > 0$，使得对所有满足 $0 < |x - x_0| < \delta$ 的 $x$，两个不等式：

$$|f(x) - \ell_f| < \varepsilon \qquad |g(x) - \ell_g| < \varepsilon$$

都成立。由第一个不等式：

$$f(x) > \ell_f - \varepsilon = \frac{\ell_f + \ell_g}{2}$$

由第二个不等式：

$$g(x) < \ell_g + \varepsilon = \frac{\ell_f + \ell_g}{2}$$

结合这两个估计，得到在半径为 $\delta$ 的去心邻域内 $g(x) < f(x)$，这与假设 $f \leq g$ 直接矛盾。因此，假设 $\ell_f > \ell_g$ 不能成立。

## 将不等式取极限

当 $f$ 与 $g$ 之间的逐点关系是严格不等式而非非严格不等式时，比较定理可以表述得更精确。假设：

$$f(x) < g(x)$$

对 $x_0$ 的去心邻域内每个 $x$ 都成立。关于极限，能够得到的最强结论是非严格[不等式](../inequalities/)：

$$\lim_{x \to x_0} f(x) \leq \lim_{x \to x_0} g(x)$$

严格不等式不会在取极限时保持不变。一个标准反例是：

$$f(x) = -|x| \qquad g(x) = |x|$$

尽管对每个 $x \neq 0$ 都有严格不等式 $f(x) < g(x)$，但当 $x \to 0$ 时两个函数都趋于零，因此两个极限相等，严格不等式退化成等式。

同样的注意事项也适用于函数与常数之间的不等式。如果在 $x_0$ 的去心邻域内有 $f(x) \geq c$ 且极限存在，比较定理给出 $\lim f \geq c$；但一般不能把严格不等式 $f(x) > c$ 推广为 $\lim f > c$。取 $g$ 为常值函数 $c$，即可从一般陈述恢复常数情形。

## 与夹逼定理的联系

当两个极限都已知存在时，比较定理会给出它们之间的不等式。[夹逼定理](../squeeze-theorem/)处理相反的情形：中心函数的极限是否存在本身就是结论。如果两个函数 $g$ 和 $h$ 把第三个函数 $f$ 夹在中间：

$$g(x) \leq f(x) \leq h(x)$$

在 $x_0$ 的某个邻域内成立，并且两个界函数在 $x_0$ 处具有相同的极限 $\ell$，那么 $f$ 在 $x_0$ 处的极限存在，且等于 $\ell$。夹逼定理可以看作比较定理的加强版：先验的三函数夹逼关系同时给出了中心函数极限的存在性和值。

> 离散版本适用于[数列](../sequences/)，在意大利传统中称为“两名警察定理”。如果从某个下标开始有 $a_n \leq b_n \leq c_n$，且 $a_n \to \ell$、$c_n \to \ell$，那么 $b_n \to \ell$。离散表述是证明[收敛与发散数列](../convergent-and-divergent-sequences/)相关结论时最常使用的形式。

## 结论

极限代数运算的规则在[极限的代数](../algebra-of-limits/)页面中展开，其中唯一性定理和局部有界性定理被隐含地用于商法则与复合规则的论证。

极限与不等式的相互作用广泛用于[夹逼定理](../squeeze-theorem/)以及[未定式](../indeterminate-forms/)的分析。

唯一性定理在刻画单侧极限和不连续性中的作用，见[极限](../limits/)页面。

比较原理与夹逼原理的离散对应形式，见[数列](../sequences/)以及[收敛与发散数列](../convergent-and-divergent-sequences/)页面。
