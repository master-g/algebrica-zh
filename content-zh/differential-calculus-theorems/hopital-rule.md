---
title: 洛必达法则
title_en: L'Hopital's Rule
source: https://algebrica.org/hopital-rule/
license: CC BY-NC 4.0
tags:
  - derivatives
  - differential-calculus-theorems
  - hopital-rule
  - indeterminate-forms
  - limits
translation:
  status: current
  source_hash: 57a3caf0762253a8002c660d2bcb7f5a4884eee9235730c1042244bb434e5bda
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 定理陈述

洛必达法则是一种计算某些[极限](../limits/)的方法，这些极限会产生[不定式](../indeterminate-forms/)。该定理通过使用两个函数的[导数](../derivatives/)，为解决函数商的极限所表现出的不定行为提供判据。所谓不定式，是指下列类型的表达式：

$$\frac{0}{0} \qquad \frac{\infty}{\infty}$$

这些表达式使极限无法直接求值，因为它们描述的情形是：基本极限定理不足以确定结果，还需要额外的分析技巧。

设 $f(x)$ 和 $g(x)$ 是定义在点 $x_0$ 的去心邻域 $I$ 上的两个[函数](../functions/)。假设满足以下条件：

+ $f(x)$ 和 $g(x)$ 在 $I$ 上可导，但在 $x_0$ 处可以不可导。
+ 对 $x \in I$ 且 $x \neq x_0$ 的每个点，都有 $g'(x) \neq 0$。
+ $\displaystyle \lim_{x \to x_0} f(x) = \lim_{x \to x_0} g(x) = 0$。
+ 下列极限存在，且可以是有限值或无穷值：

$$\lim_{x \to x_0} \frac{f'(x)}{g'(x)}$$

在这些假设下，原极限也存在，并且等于导数之比的极限：

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}$$

> 简单来说，当两个函数的商呈现 $0/0$ 这种不定式时，只要导数之比的极限存在，就可以通过计算该极限来确定原商的极限。

- - -
对于 $\infty/\infty$ 这种不定式，法则以类似方式适用。设当 $x \to x_0$ 时，$f(x) \to \pm\infty$ 且 $g(x) \to \pm\infty$，并且可导性与 $g'(x)$ 相关的其余条件都满足。如果导数之比的极限存在，那么原极限等于这个值：

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}$$

当 $x_0$ 替换为 $+\infty$ 或 $-\infty$ 时，法则仍然成立，陈述形式不变。此时，可导性与 $g'$ 的假设施加在 $(M, +\infty)$ 或 $(-\infty, M)$ 这样的半轴上，并据此计算极限。

> 当导数之比的极限不存在时，法则的结论会失效。一个经典反例是 $x \to +\infty$ 时取 $f(x) = x + \sin x$、$g(x) = x$：原商趋于 $1$，但导数之比 $1 + \cos x$ 没有极限。因此，在应用定理前，必须确认导数之比的极限确实存在。

## 证明

先证明 $0/0$ 情形。$\infty/\infty$ 情形可以用类似方式处理，只需进行高等微积分中常见的调整。我们处理右极限 $x \to x_0^+$；$x \to x_0^-$ 的情形是对称的，双侧极限则由二者结合得到。

由于 $\displaystyle \lim_{x \to x_0} f(x) = \lim_{x \to x_0} g(x) = 0$，将两个函数延拓到 $x_0$，令 $f(x_0) = g(x_0) = 0$。经过延拓后，$f$ 和 $g$ 在 $I$ 上连续，在 $I \setminus \{x_0\}$ 上可导，并且 $g'(x) \neq 0$。

固定 $x \in I$ 且 $x > x_0$ 的任意点。对 $f$ 和 $g$ 在闭区间 $[x_0, x]$ 上应用[柯西定理](../cauchy-theorem/)，可得存在点 $c \in (x_0, x)$，使得：

$$\frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{f'(c)}{g'(c)}$$

利用 $f(x_0) = g(x_0) = 0$，该等式化简为：

$$\frac{f(x)}{g(x)} = \frac{f'(c)}{g'(c)}$$

此时点 $c$ 并未固定，而是依赖于 $x$。更准确地说，对于每个 $x \neq x_0$，柯西定理保证存在点 $c = c(x)$，使得：

$$x_0 < c(x) < x \quad (x > x_0)$$

$$x < c(x) < x_0 \quad (x < x_0)$$

以右极限为例，令 $x \to x_0^+$。于是 $0 < c(x) - x_0 < x - x_0$，由于 $x - x_0 \to 0$，根据[夹逼定理](../squeeze-theorem/)，可知 $c(x) - x_0 \to 0$，从而 $c(x) \to x_0$。左极限的论证类似。

根据假设，下列极限存在，且可以是有限值或无穷值：

$$L = \lim_{t \to x_0} \frac{f'(t)}{g'(t)}$$

由于当 $x \to x_0$ 时 $c(x) \to x_0$，并且对 $x \in I$ 中的每个 $x \neq x_0$ 都有 $c(x) \neq x_0$，根据极限的复合得到：

$$\lim_{x \to x_0} \frac{f'(c(x))}{g'(c(x))} = L$$

结合上面建立的等式 $f(x)/g(x) = f'(c(x))/g'(c(x))$，得到：

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = L = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}$$

这正是要证明的结论。注意，论证不要求导数在 $x_0$ 处连续。定理中假设 $f'/g'$ 在 $x_0$ 处的极限存在，这一点本身就足以通过极限复合保证结论成立。

## $\infty/\infty$ 情形的证明

$\infty/\infty$ 情形需要稍微不同的构造，因为无法使用令 $f(x_0) = g(x_0) = 0$ 的技巧。我们处理右极限 $x \to x_0^+$，并令 $f(x), g(x) \to +\infty$；其他情形可以通过对称性或改变符号得到。

假设 $f'/g'$ 的极限存在且有限，等于 $L$。固定 $\varepsilon > 0$。根据极限的定义，存在邻域 $(x_0, x_0 + \delta)$，使得：

$$
\left| \frac{f'(t)}{g'(t)} - L \right| < \frac{\varepsilon}{2} \quad \forall t \in (x_0, x_0 + \delta)
$$

固定点 $y \in (x_0, x_0 + \delta)$，并考虑满足 $x_0 < x < y$ 的辅助区间 $[x, y]$。根据对 $f$ 和 $g$ 在 $[x, y]$ 上应用的[柯西定理](../cauchy-theorem/)，存在点 $c \in (x, y)$，使得：

$$
\frac{f(x) - f(y)}{g(x) - g(y)} = \frac{f'(c)}{g'(c)}
$$

点 $c$ 位于 $(x_0, x_0 + \delta)$ 内，因此右侧与 $L$ 的距离小于 $\varepsilon/2$。将左侧改写为包含 $f(x)/g(x)$ 的商：

$$
\frac{f(x)}{g(x)} \cdot \frac{1 - f(y)/f(x)}{1 - g(y)/g(x)} = \frac{f'(c)}{g'(c)}
$$

由于当 $x \to x_0^+$ 时 $f(x), g(x) \to +\infty$，比值 $f(y)/f(x)$ 和 $g(y)/g(x)$ 趋于零，因此左侧的修正因子趋于 $1$。当 $x$ 足够接近 $x_0$ 时，$f(x)/g(x)$ 与 $f'(c)/g'(c)$ 的绝对差小于 $\varepsilon/2$。结合这两个界：

$$
\left| \frac{f(x)}{g(x)} - L \right| < \varepsilon
$$

对足够受限的 $x_0$ 右邻域内每个 $x$ 都成立。由于 $\varepsilon$ 任意，这就证明了 $f(x)/g(x) \to L$。

- - -
对于 $L = +\infty$，用类似方法处理，只需将双侧界替换为 $f'(t)/g'(t) > N$ 的不等式；$L = -\infty$ 的情形由对称性得到。同样的论证也适用于 $x \to +\infty$ 和 $x \to -\infty$ 时的极限，此时邻域 $(x_0, x_0 + \delta)$ 的作用由 $(M, +\infty)$ 这样的半轴承担。

> $\infty/\infty$ 情形的技术核心，是通过代数变形提取 $f(x)/g(x)$，并将趋于 $1$ 的剩余因子视为扰动。假设 $g'(x) \neq 0$ 以及极限 $\lim f'/g'$ 存在，与 $0/0$ 情形相同，并在论证的相同位置发挥作用。

## 例 1

计算下列涉及[正弦函数](../sine-function/)的极限：

$$\lim_{x \to 0} \frac{\sin x}{x}$$

乍看之下，这个表达式会产生不定式。事实上，代入 $x = 0$ 可得：

$$\frac{\sin 0}{0} = \frac{0}{0}$$

$\sin x$ 和 $x$ 满足洛必达法则的假设，因此可以用导数之比的极限替换商的极限：

$$\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{(\sin x)'}{(x)'} = \lim_{x \to 0} \frac{\cos x}{1}$$

> 定理的假设得到满足：$\sin x$ 和 $x$ 在 $x_0 = 0$ 处是[连续函数](../continuous-functions/)，且 $\sin(0) = 0$、$x\big|_{x=0} = 0$。两个函数在包含 $0$ 的任意开区间上都可导，并且分母的导数 $g'(x) = 1$ 永不为零。

- - -
剩下的表达式已不再是不定式。计算 $0$ 处的余弦值得到：

$$\lim_{x \to 0} \frac{\cos x}{1} = \frac{\cos(0)}{1} = 1$$

因此可以得出：

$$\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = 1$$

## 例 2

现在考虑一个更复杂的情形：表达式产生 $-\infty + \infty$ 类型的不定式。在这种情况下，建议将两个函数之差改写为乘积或商，使表达式回到洛必达法则适用的标准形式，即：

$$\frac{0}{0} \quad \lor \quad \frac{\infty}{\infty}$$

- - -
考虑下列极限：

$$\lim_{x \to 0} \left(\frac{1}{\sin x} - \frac{2}{x}\right)$$

该极限产生 $-\infty + \infty$ 类型的不定式。为了应用洛必达法则，先将其改写为一个分式，得到 $0/0$ 类型的不定式：

$$\lim_{x \to 0} \left(\frac{1}{\sin x} - \frac{2}{x}\right) = \lim_{x \to 0} \frac{x - 2\sin x}{x \sin x}$$

> 应用法则前，始终必须确认改写后的表达式满足定理的条件。

- - -
计算分子和分母的导数，得到：

$$\lim_{x \to 0} \frac{1 - 2\cos x}{\sin x + x \cos x}$$

在得到的表达式中代入 $x = 0$，结果为 $-1/0$，这说明极限发散。因此：

$$\lim_{x \to 0} \frac{1 - 2\cos x}{\sin x + x \cos x} = -\infty$$

> 如果应用洛必达法则后得到的商仍然呈现[不定式](../indeterminate-forms/)，只要每一步都满足定理条件，就可以重复应用法则。每次迭代都必须确认新的分子和分母分别趋于 $0$ 或 $\pm\infty$。

## 不定乘积

上一例说明的原则同样适用于 $0 \cdot \infty$ 类型的不定式，它们来自两个函数 $f(x) \cdot g(x)$ 的乘积。要将表达式改写为适合洛必达法则的形式，只需将乘积表示为商：

$$f(x) \cdot g(x) = \frac{f(x)}{\dfrac{1}{g(x)}} \quad \lor \quad f(x) \cdot g(x) = \frac{g(x)}{\dfrac{1}{f(x)}}$$

- - -
例如，考虑下列极限：

$$\lim_{x \to 0^+} x \ln x$$

这是 $0 \cdot (-\infty)$ 类型的不定式。可以将乘积改写为商：

$$\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{\dfrac{1}{x}}$$

所得表达式现在是 $\infty/\infty$ 类型的不定式，适合应用洛必达法则：

$$\lim_{x \to 0^+} \frac{\ln x}{\dfrac{1}{x}} = \lim_{x \to 0^+} \frac{(\ln x)'}{\left(\dfrac{1}{x}\right)'} = \lim_{x \to 0^+} \frac{\dfrac{1}{x}}{-\dfrac{1}{x^2}} = \lim_{x \to 0^+} (-x) = 0$$

## 指数型不定式

另一类可以通过洛必达法则处理的不定式，是下列指数形式：

$$0^0 \qquad \infty^0 \qquad 1^\infty$$

当底数和指数趋于某些特定值、使幂无法直接求值时，就会从形如 $f(x)^{g(x)}$ 的表达式极限中产生这些形式。标准方法是对表达式取自然对数，将幂转换为乘积，再用上文讨论的方法处理。

令 $y = f(x)^{g(x)}$。取[对数](../logarithms/)得到：

$$\ln y = g(x) \ln f(x)$$

将乘积 $g(x) \ln f(x)$ 改写为商并应用洛必达法则，可以计算 $\ln y$ 的极限。得到 $L = \lim \ln y$ 后，原表达式的极限通过取指数得到：

$$\lim f(x)^{g(x)} = e^{L}$$

作为例子，考虑极限：

$$\lim_{x \to 0^+} x^x$$

该表达式表示 $0^0$ 类型的不定式。令 $y = x^x$ 并取对数，得到 $\ln y = x \ln x$，相应的极限已在上一节计算：

$$\lim_{x \to 0^+} x \ln x = 0$$

因此，原表达式的极限为：

$$\lim_{x \to 0^+} x^x = e^{0} = 1$$

> 除了计算普通极限，洛必达法则还是分析被积函数在无穷远处或奇异点附近渐近行为的标准工具，因此也是[反常积分](../improper-integrals/)收敛性分析的自然入口。

> 洛必达法则建立在[柯西定理](../cauchy-theorem/)之上，而柯西定理本身是[拉格朗日定理](../lagrange-theorem/)的改进，最终又源自[罗尔定理](../rolle-theorem/)。支撑这一链条的存在性定理，是用于确定驻点位置的[费马定理](../fermat-theorem/)，以及保证闭区间上取得极值的[魏尔斯特拉斯定理](../weierstrass-theorem/)。
