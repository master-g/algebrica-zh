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
  source_hash: 60e5a7b4ec4fd774a28bc5d59d12fbfff13188875085b27178d4aa2bab9ff7c0
  translator: claude
  updated: "2026-10-08T00:00:00.000Z"
---

## 计算含不定式的极限

洛必达法则是一种非常有用的方法，它使我们能够轻松地计算某些含有 $0/0$ 或 $\infty/\infty$ 型[不定式](../indeterminate-forms/)的[极限](../limits/)。通俗地说，在一定条件下，这个公式背后的定理指出，两个函数之商的极限等于它们各自[导数](../derivatives/)之商的极限。在某些情形下，这一步能消去不定式，使我们可以通过直接代入或少量代数变形求出极限。要记住，这种变换并不总能简化计算，因为导数之商本身也可能给出不定式。在这种情况下，如果定理的假设仍然成立，可以再次应用该法则，或者改用别的方法。

为了说明这个定理，考虑两个[函数](../functions/) $f$ 和 $g$，它们定义在包含 $x_0$ 的一个[开邻域](../topology-of-the-real-line/) $I$ 上，$x_0$ 本身可能除外，并考虑它们的商的极限：

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} \tag{1}$$

把 $x_0$ 代入 $(1)$ 中的商，会得到下列不定式之一，它不能告诉我们极限的值，也不能说明极限是否存在：

$$\frac{0}{0} \quad \frac{\infty}{\infty}$$

假设对 $(1)$ 成立下列条件：

+ $f$ 和 $g$ 在 $I$ 中除 $x_0$ 以外的每一点都可导。
+ 对每个满足 $x \neq x_0$ 的 $x \in I$，导数 $g'(x)$ 都不为零。
+ 在 $0/0$ 情形下，有 $\displaystyle \lim_{x \to x_0} f(x) = \lim_{x \to x_0} g(x) = 0$；在 $\infty/\infty$ 情形下，当 $x \to x_0$ 时每个函数都趋于 $+\infty$ 或 $-\infty$。
+ $f$ 和 $g$ 的导数之商的下列极限存在，有限或无穷均可：

$$\lim_{x \to x_0} \frac{f'(x)}{g'(x)} \tag{2}$$

在这些假设下，函数之商的极限也存在，并且下面的等式成立：

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)} \tag{3}$$

注意，在 $(3)$ 中分子和分母是分别求导的，因此不能使用[商的求导法则](../differentiation-rules/)。

- - -

一个重要的考虑是导数之商的极限是否存在。如果这个极限不存在，定理对 $(1)$ 中的原极限不给出任何结论。例如，考虑函数 $f(x) = x + \sin x$ 和 $g(x) = x$。当 $x$ 趋于 $\infty$ 时，它们的商趋于一，因为：

$$\lim_{x \to +\infty} \frac{f(x)}{g(x)} = \lim_{x \to +\infty} \left(1 + \frac{\sin x}{x}\right) = 1$$

如果改为对分子和分母求导，会发现它们的导数之商是 $1 + \cos x$，这是一个在无穷远处没有极限的振荡表达式。因此可以得出结论：在定理的其他假设下，导数之商的极限存在，是函数之商的极限存在的充分条件，但不是必要条件。

## $0/0$ 情形的证明

现在证明当 $(1)$ 中的极限给出不定式 $0/0$ 时的法则 $(3)$。由于 $f(x)$ 和 $g(x)$ 都趋于零，可以把每个函数的极限值指定为它的函数值，从而把它们连续地延拓到 $x_0$：

$$f(x_0) = g(x_0) = 0\tag{4}$$

固定满足 $x > x_0$ 的 $x \in I$。此时分母不为零。事实上，假如它为零，$g$ 在 $[x_0, x]$ 的两个端点处就取相同的值。由于它在闭区间上[连续](../continuous-functions/)、在其内部可导，[罗尔定理](../rolle-theorem/)将推出它的导数在某个内点处为零。这与 $g'$ 在 $I$ 中除 $x_0$ 以外的每一点都不为零的假设矛盾。因此可以断定 $g(x) \neq 0$，并在 $[x_0, x]$ 上应用[柯西定理](../cauchy-theorem/)，得到一点 $c \in (x_0, x)$，使下面的等式成立：

$$\frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{f'(c)}{g'(c)} \tag{5}$$

由于 $(4)$ 成立，$(5)$ 变为：

$$\frac{f(x)}{g(x)} = \frac{f'(c)}{g'(c)}$$

对每个 $x > x_0$，柯西定理保证存在一点，记作 $c(x)$，满足：

$$x_0 < c(x) < x \tag{6}$$

从 $(6)$ 的三项中都减去 $x_0$，得到：

$$0 < c(x) - x_0 < x - x_0$$

对于右极限，距离 $x - x_0$ 趋于零，所以距离 $c(x) - x_0$ 也必须趋于零。由[夹逼定理](../squeeze-theorem/)可得：

$$\lim_{x \to x_0^+} c(x) = x_0$$

对于左极限，我们在 $[x, x_0]$ 上应用柯西定理，此时点 $c(x)$ 满足：

$$x < c(x) < x_0$$

用 $x_0$ 减去每一项并重新排列不等式，得到：

$$0 < x_0 - c(x) < x_0 - x$$

当 $x$ 从左侧趋近 $x_0$ 时，距离 $x_0 - x$ 趋于零，所以距离 $x_0 - c(x)$ 也趋于零。夹逼定理给出：

$$\lim_{x \to x_0^-} c(x) = x_0$$

这样就证明了无论 $x$ 从哪一侧趋近，$c(x)$ 都趋于 $x_0$；现在可以使用 $(2)$ 中的极限存在这一假设，把它的值（有限或无穷）记作 $L$：

$$\lim_{x \to x_0} \frac{f'(x)}{g'(x)} = L$$

由于 $c(x) \to x_0$ 且 $c(x) \neq x_0$，可以写出：

$$\lim_{x \to x_0} \frac{f'(c(x))}{g'(c(x))} = L$$

回到由柯西定理得到的等式 $(5)$。根据 $(4)$，两个函数在 $x_0$ 处的值为零，因此把中间点记作 $c(x)$，就有：

$$\frac{f(x)}{g(x)} = \frac{f'(c(x))}{g'(c(x))}$$

我们刚刚证明了右边的商趋于 $L$。由于两个商相等，左边的商也趋于 $L$，所以：

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = L$$

把 $L$ 换成 $(2)$ 中的极限，恰好得到我们要对 $0/0$ 情形证明的公式 $(3)$：

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}$$

## $\infty/\infty$ 情形的证明

现在证明当 $(1)$ 给出不定式 $\infty/\infty$ 时的定理。此时我们按如下方式进行。假设 $(2)$ 中的极限是一个实数 $L$。给定 $\varepsilon > 0$，由极限的定义可以选取 $\delta > 0$，使得：

$$
\left| \frac{f'(t)}{g'(t)} - L \right| < \frac{\varepsilon}{2} \quad \forall \ t \in (x_0, x_0 + \delta)
$$

固定一点 $y \in (x_0, x_0 + \delta)$，并考虑满足 $x_0 < x < y$ 的 $x$。由[柯西定理](../cauchy-theorem/)，存在一点 $c \in (x, y)$，使下面的等式成立：

$$
\frac{f(x) - f(y)}{g(x) - g(y)} = \frac{f'(c)}{g'(c)} \tag{7}
$$

当 $x$ 充分接近 $x_0$ 时，$f(x)$ 和 $g(x)$ 都不为零，可以把 $(7)$ 改写如下：

$$
\frac{f(x)}{g(x)} \cdot \frac{1 - f(y)/f(x)}{1 - g(y)/g(x)} = \frac{f'(c)}{g'(c)}
$$

现在令：

$$
\begin{align}
A(x) &= \frac{1 - f(y)/f(x)}{1 - g(y)/g(x)} \\[6pt]
R(x) &= \frac{f'(c)}{g'(c)}
\end{align}
$$

于是等式 $(7)$ 变为：

$$\frac{f(x)}{g(x)} = \frac{R(x)}{A(x)} \tag{8}$$

由于 $c$ 位于所选的邻域内，对导数之商的初始估计同样适用于 $R(x)$。此外，[三角不等式](../absolute-value/)给出一个上界，因此可以写出：

$$
\begin{align}
|R(x) - L| &< \frac{\varepsilon}{2} \\[6pt]
|R(x)| &\leq |L| + |R(x) - L| < |L| + \frac{\varepsilon}{2}
\end{align}
$$

由于 $|R(x)|$ 有界而 $1/A(x) - 1$ 趋于零，当 $x$ 从右侧充分接近 $x_0$ 时有：

$$|R(x)|\left|\frac{1}{A(x)} - 1\right| < \frac{\varepsilon}{2}$$

利用 $(8)$，得到：

$$
\begin{align}
\left|\frac{f(x)}{g(x)} - L\right|
&= \left|R(x)\left(\frac{1}{A(x)} - 1\right) + R(x) - L\right| \\[6pt]
&\leq |R(x)|\left|\frac{1}{A(x)} - 1\right| + |R(x) - L| \\[6pt]
&< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
\end{align}
$$

这个估计表明，只要 $x$ 从右侧充分接近 $x_0$，函数之商就可以任意接近 $L$。由于 $L$ 是导数之商的极限，我们就证明了：

$$\lim_{x \to x_0^+} \frac{f(x)}{g(x)} = \lim_{x \to x_0^+} \frac{f'(x)}{g'(x)} = L$$

这就完成了 $L$ 有限、取右极限时 $\infty/\infty$ 型法则的证明。

> 这样我们就在 $L$ 是有限实数时证明了结论。同样的做法可以改用于 $L = +\infty$：只需证明当 $x$ 充分接近 $x_0$ 时，函数之商超过任意预先给定的正数。$L = -\infty$ 的情形可通过改变 $f$ 的符号得到，左极限和无穷远处的极限也可作类似的调整来处理。

## 例题

下面的例题说明如何用洛必达法则计算含不定式的极限。作为第一个例子，考虑[标准三角极限](../remarkable-limits/)：

$$\lim_{x \to 0} \frac{\sin x}{x}$$

直接代入表明分子和分母都趋于零，得到不定式 $0/0$。首先检验洛必达法则是否适用。分子和分母中的函数在零的一个邻域内可导，分母的导数等于 $1$（所以不为零）。导数之商是 $\cos x$，它趋于 $1$。这样就验证了全部假设，可以应用法则得到：

$$
\begin{align}
\lim_{x \to 0} \frac{\sin x}{x}
&= \lim_{x \to 0} \frac{(\sin x)'}{(x)'} \\[6pt]
&= \lim_{x \to 0} \frac{\cos x}{1} \\[6pt]
&= 1
\end{align}
$$

- - -

现在考虑给出不定式 $\infty - \infty$ 的函数之差。可以把这个差改写成单个商，把它化为法则适用的形式之一。我们用下面的极限来说明：

$$\lim_{x \to 0} \left(\frac{1}{\sin x} - \frac{2}{x}\right)$$

可以把待求极限的表达式改写为：

$$\frac{1}{\sin x} - \frac{2}{x} = \frac{x - 2\sin x}{x \sin x}$$

新的商给出 $0/0$ 型。分子和分母在零附近可导，它们的导数之商为：

$$\frac{1 - 2\cos x}{\sin x + x\cos x}$$

当 $0 < |x| < \pi/2$ 时，$\sin x$ 和 $x\cos x$ 两项同号，所以它们的和不为零，关于分母导数的假设得到满足。分子趋于 $-1$，而分母趋于零，因此：

$$
\lim_{x \to 0^+} \frac{1 - 2\cos x}{\sin x + x\cos x} = -\infty
$$

$$
\lim_{x \to 0^-} \frac{1 - 2\cos x}{\sin x + x\cos x} = +\infty
$$

于是可以对每个单侧极限应用洛必达法则，得到：

$$
\lim_{x \to 0^+} \left(\frac{1}{\sin x} - \frac{2}{x}\right) = -\infty
$$

$$
\lim_{x \to 0^-} \left(\frac{1}{\sin x} - \frac{2}{x}\right) = +\infty
$$

两个单侧极限不同，所以双侧极限不存在。

- - -

下面考虑一个把代数变形与洛必达法则所用的变换作比较的例子。考虑下面的极限：

$$\lim_{x \to 1} \frac{\sqrt{x} - 1}{x^2 - 1} \tag{9}$$

直接代入得到 $0/0$ 型。我们先尝试用代数方法，通过[分解分母](../notable-products/)来解决。可以把 $(9)$ 改写为：

$$
\begin{align}
\lim_{x \to 1} \frac{\sqrt{x} - 1}{x^2 - 1}
&= \lim_{x \to 1} \frac{\sqrt{x} - 1}{(x + 1)(x - 1)} \\[6pt]
&= \lim_{x \to 1} \frac{\sqrt{x} - 1}{(x + 1)(\sqrt{x} - 1)(\sqrt{x} + 1)} \\[6pt]
&= \lim_{x \to 1} \frac{1}{(x + 1)(\sqrt{x} + 1)} \\[6pt]
&= \frac{1}{(1 + 1)(1 + 1)} = \frac{1}{4}
\end{align}
$$

在这个例子中，用洛必达法则计算更短。为了检验定理的假设成立，注意：

+ 函数 $f(x) = \sqrt{x} - 1$ 和 $g(x) = x^2 - 1$ 在 $x > 0$ 时可导
+ $g'(x) = 2x$ 在 $1$ 的一个邻域内不为零。
+ 导数之商是 $1/(4x\sqrt{x})$，它在 $1$ 处连续，极限为 $1/4$。

因此假设得到满足，我们应用 $(3)$ 一步求出极限：

$$
\begin{align}
\lim_{x \to 1} \frac{\sqrt{x} - 1}{x^2 - 1}
&= \lim_{x \to 1} \frac{\dfrac{1}{2\sqrt{x}}}{2x} \\[6pt]
&= \lim_{x \to 1} \frac{1}{4x\sqrt{x}} = \frac{1}{4}
\end{align}
$$

- - -

现在考虑下面的极限：

$$\lim_{x \to 0^+} x \ln x$$

这个乘积给出不定式 $0 \cdot (-\infty)$，可以把它化为 $\infty/\infty$ 型以便应用洛必达法则：

$$\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{\dfrac{1}{x}}$$

在这种形式下，直接代入得到趋于 $-\infty$ 的分子和趋于 $+\infty$ 的分母。检验定理的假设，可知两个函数在 $x > 0$ 时都可导，分母的导数是 $-1/x^2$，不为零。导数之商是 $-x$，趋于零，于是应用法则求出极限：

$$
\begin{align}
\lim_{x \to 0^+} \frac{\ln x}{\dfrac{1}{x}}
&= \lim_{x \to 0^+} \frac{(\ln x)'}{\left(\dfrac{1}{x}\right)'} \\[6pt]
&= \lim_{x \to 0^+} \frac{\dfrac{1}{x}}{-\dfrac{1}{x^2}} \\[6pt]
&= \lim_{x \to 0^+} (-x) = 0
\end{align}
$$

## 指数型不定式

洛必达法则还可以用来处理下列指数型不定式：

$$0^0 \qquad \infty^0 \qquad 1^\infty$$

目标是像上一个例子那样，把这些表达式化为 $0/0$ 或 $\infty/\infty$ 型。例如，考虑由下面的指数表达式描述的典型情形：

$$y = f(x)^{g(x)} \tag{10}$$

假设在所考虑的邻域内 $f(x) > 0$，可以取[对数](../logarithms/)，把 $(10)$ 改写如下：

$$\ln y = g(x)\ln f(x) \tag{11}$$

如果在同一邻域内还有 $g(x) \neq 0$，就可以把 $(11)$ 改写成一个可以应用洛必达法则的商：

$$\ln y = g(x)\ln f(x) = \frac{\ln f(x)}{\dfrac{1}{g(x)}} \tag{12}$$

至此，如果假设成立，我们对 $(12)$ 应用洛必达法则来计算 $L = \lim \ln y$。如果 $L$ 有限，由[指数函数](../exponential-function/)的连续性得：

$$\lim f(x)^{g(x)} = e^L \tag{13}$$

例如，考虑：

$$\lim_{x \to 0^+} x^x$$

底数和指数都趋于零，所以得到不定式 $0^0$。令 $y = x^x$，则 $\ln y = x\ln x$。在上一节中，我们已经证明：

$$\lim_{x \to 0^+} x\ln x = 0$$

应用指数函数，由 $(13)$ 得到极限：

$$\lim_{x \to 0^+} x^x = e^0 = 1$$
