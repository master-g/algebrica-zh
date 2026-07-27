---
title: 对数
title_en: Logarithms
source: https://algebrica.org/logarithms/
license: CC BY-NC 4.0
tags:
  - change-of-base
  - exponential-inverse
  - logarithmic-function
  - logarithmic-properties
  - logarithms
translation:
  status: current
  source_hash: 851eb092323c6caa2edb05a3beaf16989e6ba0e61ae3b75eb20a85c92528cf8d
  translator: omp
  updated: "2026-07-23T08:54:54.245Z"
---
## 定义

若 $a$ 和 $b$ 为正[实数](../properties-of-real-numbers/)，且 $a \neq 1$，则以 $a$ 为底数的 $b$ 的对数，记为 $\log_a(b)$，定义为满足 $a^c = b$ 的实数 $c$。

$$\log_a{b} = c \iff a^c = b$$

需满足以下条件：

$$a>0 \quad a \neq 1 \quad b > 0$$

例如，$\log_2 8 = 3 \to 2^3 = 8$。一个数的对数就是使给定底数的某次幂等于该数的指数。因此，对数是[乘方](../exponential-function/)的逆运算。

+ $a$ 是对数的底数。
+ $b$ 是对数的真数。

条件 $a \neq 1$ 是必要的。当 $a = 1$ 时，指数式 $a^x$ 对每个 $x \in \mathbb{R}$ 都等于 $1^x = 1$。此时指数函数为常数函数，因此不[可逆](../inverse-function/)。由于对数是乘方的逆运算，当底数等于 $1$ 时无法定义对数。因此，对数的底数必须满足 $a > 0$ 和 $a \neq 1$。

## 基本恒等式

理解对数需要回顾[幂](../powers/)的概念，因为这两个数学概念密切相关。以下恒等式直接源于对数是乘方的逆运算这一事实：

$$a^0 = 1 \Rightarrow \log_a 1 = 0$$

$$a^1 = a \Rightarrow \log_a a = 1$$

由于指数函数始终为正，因此无法定义负数的对数。严格地说，不存在数 $c \in \mathbb{R}$ 使得 $a^c < 0$。

+ 以 $e$ 为底的对数称为自然对数或纳皮尔对数，通常记为 $\ln a$ 而不明确标出底数，其中 $e \approx 2.71828$ 为[欧拉数](../euler-number-limit-sequence/)，即自然指数函数 $e^x$ 的底数。

+ 以 $10$ 为底的对数称为常用对数，通常记为 $\text{Log} a$ 而不标出底数。

> 以 10 为底的对数在处理极大或极小的数时尤其有用，因为它能压缩数值尺度，使数值更易于解释和比较。

## 对数函数

如前所述，[对数函数](../logarithmic-function/)是指数函数的[反函数](../inverse-function/)。因此，其[定义域](../determining-the-domain-of-a-function/)和值域与[指数函数](../exponential-function/)的定义域和值域互换。对数函数通常写成以下形式：

$$
\log_a : (0,+\infty) \to \mathbb{R}, \quad a > 0 \quad a \neq 1
$$

定义域为 $x \in \mathbb{R}^+$，值域为 $\mathbb{R}$。该函数在 $(0,+\infty)$ 上[连续](../continuous-functions/)且[可导](../derivatives/)。

![IMG. 1](/assets/powers-radicals-logarithms/svg/logarithms-1.svg)

上图展示了对数函数的单调行为和渐近性质。当 $a > 1$ 时，函数 $f(x) = \log_a x$ 在 $(0,+\infty)$ 上严格递增。它在 $x = 0$ 处有一条垂直[渐近线](../asymptotes/)，其极限为：

$$
\begin{align}
\lim_{x \to 0^+} \log_a x &= -\infty \\[6pt]
\lim_{x \to +\infty} \log_a x &= +\infty
\end{align}
$$

当 $0 < a < 1$ 时，函数在 $(0,+\infty)$ 上严格递减。

![IMG. 2](/assets/powers-radicals-logarithms/svg/logarithms-2.svg)

直线 $x = 0$ 同样是垂直渐近线，但极限行为相反：

$$
\begin{align}
\lim_{x \to 0^+} \log_a x &= +\infty \\[6pt]
\lim_{x \to +\infty} \log_a x &= -\infty
\end{align}
$$

> 对数函数被广泛应用于众多学科，例如在计算机科学中，它是分析算法复杂度的基础。[二分查找](../logarithmic-function/)等算法具有对数时间复杂度，因此即使输入规模增大，其性能仍保持高效。

## 性质

以下恒等式描述了如何处理对数表达式。每条性质都附有关于底数和真数的条件，以确保这些表达式在[实数](../properties-of-real-numbers/)中有明确定义。在所有情况下，底数都必须满足 $a > 0$ 和 $a \neq 1$，并且每个作为对数真数的量都必须严格为正。

由于对数被定义为指数函数的反函数，以下恒等式成立：

$$
\begin{align}
a^{\log_a x} &= x \qquad \forall x \in (0,+\infty) \\[6pt]
\log_a(a^x) &= x \qquad \forall x \in \mathbb{R}
\end{align}
$$

这两个恒等式表达了这样一个事实：以 $a$ 为底数的幂运算与以 $a$ 为底的对数在各自的[定义域](../determining-the-domain-of-a-function/)内互为反函数。

- - -

对于 $x, y > 0$，积的对数等于各因子对数之和：

$$
\log_a(xy) = \log_a x + \log_a y
$$

这就是积的对数律。它将乘法关系转化为加法关系，可直接由相应的指数律推出。

- - -

对于 $x, y > 0$，商的对数等于分子的对数减去分母的对数：

$$
\log_a{\frac{x}{y}} = \log_a x - \log_a y
$$

这就是商的对数律。作为特例，令 $x = 1$ 可得：

$$
\log_a{\frac{1}{y}} = -\log_a y
$$

因此，倒数 $1/y$ 的对数等于 $y$ 的对数的相反数。量 $-\log_a y$ 称为 $y$ 的余对数，记为：

$$
\text{colog}_a y = -\log_a y = \log_a{\frac{1}{y}}
$$

- - -

对于 $x > 0$ 和 $n \in \mathbb{R}$，[幂](../powers/)的对数等于指数与底数的对数之积：

$$
\log_a x^n = n \cdot \log_a x
$$

这称为幂运算律。它可由指数的性质推出。对于正整数 $n$，表达式 $x^n$ 是将 $x$ 自乘 $n$ 次所得，该恒等式随后由连续性推广到一切实指数。

- - -

对于 $b > 0$ 和 $n \in \mathbb{N}$（满足 $n \ge 1$），[根式](../radicals/)的对数等于被开方数的对数除以根指数：

$$
\log_a\sqrt[n]{b} = \frac{1}{n}\log_a b
$$

该恒等式是幂运算律的直接推论，因为 $\sqrt[n]{b} = b^{1/n}$。

- - -

对于 $a, p > 0$（满足 $a, p \neq 1$ 和 $b > 0$），以 $a$ 为底的对数可以表示为以同一底数 $p$ 取的两个对数之商：

$$
\log_a b = \frac{\log_p b}{\log_p a}
$$

这就是换底公式。当你只能计算某一特定底数的对数时，例如自然对数或常用（以 10 为底的）对数，它尤为有用。

## 自然对数的基本不等式

涉及自然对数 $\ln$ 的一个基本不等式为：

$$
\ln x \le x - 1 \qquad \forall \ x > 0
$$

当且仅当 $x = 1$ 时等号成立。该结果直接来源于函数 $\ln x$ 在区间 $(0,+\infty)$ 上为凹函数这一事实。

![IMG. 3](/assets/powers-radicals-logarithms/svg/logarithms-3.svg)

事实上，其二阶导数具有如下形式，这表明 $\ln x$ 在 $(0,+\infty)$ 上是严格凹的：

$$
(\ln x)^{\prime\prime} = -\frac{1}{x^2} < 0 \qquad \forall \ x > 0
$$

对于任何凹函数，其图像均位于每条切线之下。特别地，考虑在 $x = 1$ 处的切线，其中：

$$
\ln 1 = 0 \quad \text{且} \quad (\ln x)' \big|_{x=1} = 1
$$

该切线的方程为：

$$
y = x - 1
$$

因此，不等式 $\ln x \le x - 1$ 表达了几何事实：曲线 $y = \ln x$ 始终不超过其在 $x = 1$ 处的切线，且仅在 $x = 1$ 处与之相切。

## 对数与代数结构

对数将两个不同的代数系统联系起来。在正实数组成的[集合](../sets/) $(0,+\infty)$ 上，乘法是基本运算，而在 $\mathbb{R}$ 上则是加法。对数通过将乘法关系转化为加法关系来连接这两个系统。例如，考虑如下乘积：

$$
x^3 y^2
$$

取对数可得：

$$
\log_a(x^3 y^2) = 3\log_a x + 2\log_a y
$$

这一过程将由乘积和幂所刻画的乘法结构，转化为由求和与标量倍数所刻画的加法结构。从这个意义上说，对数是从乘法群 $(0,+\infty)$ 到加法群 $\mathbb{R}$ 的同态，它在改变运算的同时保持了底层的结构。标准的对数运算法则给出了这一变换的精确代数形式。

> [同态](../homomorphisms-and-isomorphisms/)是两个代数结构之间保持运算的函数，即 $\varphi(x \star y) = \varphi(x) \circ \varphi(y)$。其中 $\star$ 和 $\circ$ 表示两个代数结构的运算，例如加法或乘法。

## 示例 1

利用对数的性质化简如下对数表达式：

$$
\log_a \left( \frac{x^3 \cdot y}{z^2} \right)
$$

首先，应用商的法则，即商的对数等于分子的对数减去分母的对数：

$$
\log_a \left( \frac{x^3 \cdot y}{z^2} \right) = \log_a(x^3 \cdot y) - \log_a(z^2)
$$

接下来，利用积的法则，即乘积的对数等于各因子对数之和：

$$
\log_a(x^3 \cdot y) = \log_a(x^3) + \log_a(y)
$$

于是，表达式变为：

$$
\log_a \left( \frac{x^3 \cdot y}{z^2} \right) = \log_a(x^3) + \log_a(y) - \log_a(z^2)
$$

最后，应用幂运算律，即幂的对数等于指数乘以底数的对数：

$$
\log_a(x^3) = 3 \log_a(x) \quad \text{且} \quad \log_a(z^2) = 2 \log_a(z)
$$

将上述结果代入表达式，得到：

$$
\log_a \left( \frac{x^3 \cdot y}{z^2} \right) = 3 \log_a(x) + \log_a(y) - 2 \log_a(z)
$$

## 对数的换底

任何以 $a$ 为底数的对数都可以改写为以另一个公共底数的对数之商。更确切地说，以 $a$ 为底数、真数为 $b$ 的对数，可以用任意其他底数 $p$ 表示如下：

$$\log_a b = \frac{\log_p b}{\log_p a}$$

> 换底公式之所以有用，是因为它允许我们将计算器或软件可能不直接支持的底数的对数，转换为更方便的底数（例如 10 或 $e$）的对数来计算。

- - -

下面通过一个简单的例子来说明对数的换底公式。根据定义，以 $a$ 为底数、真数为 $x$ 的对数，记作 $\log_a(x)$，是使 $a$ 的该次幂等于 $x$ 的那个指数。换底公式可表示为：

$$\log_a(x) = \frac{\log_b(x)}{\log_b(a)}$$

考虑代换 $y = \log_a(x)$，根据对数的定义，这意味着 $a^y = x$。我们有：

$$\log_b(a^y) = \log_b(x)$$

对两边应用对数的幂运算律，得到：

$$y \cdot \log_b(a) = \log_b(x)$$

将两边同时除以 $\log_b(a)$，得到：

$$y = \frac{\log_b(x)}{\log_b(a)}$$

由于 $y = \log_a(x)$，因此我们证明了：

$$\log_a(x) = \frac{\log_b(x)}{\log_b(a)}$$

## 对数方程

[对数方程](../logarithmic-equations/)是变量出现在对数内部的方程。求解这些[方程](../equations/)需要运用对数的性质，这些性质对于解出变量并确定其值至关重要。典型的对数方程具有如下形式：

$$\log_a f(x) = g(x)$$

+ $a$，对数的底数，必须满足条件 $a > 0, a \neq 1$。

+ $f(x)$ 是对数的真数，必须严格为正，即 $f(x) > 0$，因为对数仅对正实数有定义。

## 自然对数

从分析的角度看，自然对数可以不依赖于幂运算、借助[定积分](../definite-integrals/)来定义。对于每个实数 $x > 0$，自然对数由下式给出：

$$
\ln x = \int_1^x \frac{1}{t} \ dt
$$

这一定义保证了 $\ln x$ 对所有正实数都有良好定义，因为函数 $1/t$ 在 $(0,+\infty)$ 上连续。根据[微积分基本定理](../fundamental-theorem-of-calculus/)，自然对数是可导的，且满足：

$$
(\ln x)' = \frac{1}{x} \qquad x>0
$$

此外，自然对数是[严格递增](../increasing-and-decreasing-functions/)的，因为它的[导数](../derivatives/)在 $(0,+\infty)$ 上为正。它同时也是凹函数，因为：

$$
(\ln x)^{\prime\prime}= -\frac{1}{x^2} < 0
$$

- - -

指数函数 $e^x$ 定义为自然对数函数 $\ln x$ 的反函数。一旦确立了 $\ln x$，以任意底数 $a>0$（$a\neq 1$）的对数便由下式定义：

$$
\log_a x = \frac{\ln x}{\ln a}
$$

这一构造为对数提供了严格的分析基础，并解释了它们的连续性、可导性以及结构性质。

## 自然对数的级数展开

自然对数的[积分](../definite-integrals/)定义直接导出了它的幂级数表示。从恒等式：

$$
\ln(1+x) = \int_0^x \frac{1}{1+t} \ dt
$$

出发，被积函数可以展开为[几何级数](../geometric-series/)。对于 $|t| < 1$，有：

$$
\frac{1}{1+t} = \sum_{n=0}^{\infty} (-1)^n \ t^n = 1-t+t^2-t^3+\cdots
$$

该[级数](../series/)在 $(-1,1)$ 的每个闭[子区间](../intervals/)上一致收敛，由此可以逐项积分。从 $0$ 到 $x$ 积分，得到：

$$
\ln(1+x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{n+1} \ x^{n+1} = x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots
$$

所得级数在 $-1 < x \le 1$ 时收敛。端点 $x = -1$ 被排除在外，因为此时级数（除去符号外）退化为[调和级数](../harmonic-series/)，从而发散。在 $x = 1$ 处，级数由交错级数判别法判定收敛，给出恒等式：

$$
\ln 2 = 1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\cdots
$$

该级数给出了计算自然对数的一种方法，并阐明了它的局部行为。将展开式在第一项后截断，得到线性近似：

$$
\ln(1+x) \approx x \qquad \text{当 } x \to 0
$$

其误差为 $x^2$ 阶。在分析上，这等价于下述命题：

$$
\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1
$$

这一命题常出现在涉及[极限](../limits/)、[导数](../derivatives/)以及微小扰动分析等的计算中。同样的思想也是自然对数在连续复利、近似微小百分比变化以及对乘积型现象进行局部线性化等方面得以应用的基础。

当 $x$ 接近 $1$ 时，$\ln(1+x)$ 的级数收敛得很慢，使得它不适合用于直接数值计算诸如 $\ln 2$ 之类的值。将 $\ln(1+y)$ 与 $\ln(1-y)$ 的级数加以组合所得到的变换收敛要快得多：

$$\ln\frac{1+y}{1-y} = 2\left(y+\frac{y^3}{3}+\frac{y^5}{5}+\cdots\right)$$

它构成了高效计算对数的算法的基础。

## 对数微分法

形如 $y = f(x)^{g(x)}$ 的函数，其底数和指数都依赖于变量，一般无法直接套用幂运算律或指数法则来求导。处理这类表达式的标准技巧是对数微分法。该方法是对方程两边取自然对数，然后进行隐式求导。

对 $y = f(x)^{g(x)}$ 取自然对数，并利用对数的幂运算律，得到：

$$
\ln y = g(x) \ \ln f(x)
$$

对两边关于 $x$ 求导，左端运用链式法则，右端运用乘积法则，得到：

$$
\frac{y'}{y} = g'(x) \ \ln f(x)+g(x) \ \frac{f'(x)}{f(x)}
$$

解出 $y'$ 并将 $y$ 的原表达式代入，便得到显式导数：

$$
y' = f(x)^{g(x)}\left[g'(x) \ \ln f(x)+g(x) \ \frac{f'(x)}{f(x)}\right]
$$

该技巧要求在所讨论的区间上满足条件 $f(x) > 0$，以保证对数有良好定义。作为一个具体例子，考虑 $y = x^x$ 在 $x > 0$ 时的导数。对两边取自然对数，得到：

$$
\ln y = x \ln x
$$

对两边关于 $x$ 求导，左端由[链式法则](../the-derivative-of-a-composite-function/)变为 $y'/y$，而右端则用乘积法则来计算：

$$
\frac{y'}{y} = \ln x+x \cdot \frac{1}{x} = \ln x+1
$$

两边乘以 $y = x^x$ 即得结果：

$$
\frac{d}{dx} \ x^x = x^x \ (\ln x+1)
$$

同一方法适用于变量同时出现在底数和指数中的任何表达式。每当函数可表示为若干因子的乘积时，这一方法也是一种便利工具，因为对数将乘积转化为求和，从而简化求导。

## 用对数证明 AM-GM 不等式

一组有限个正实数的[算术平均数](../arithmetic-mean/)与[几何平均数](../geometric-mean/)满足一个基本不等式：算术平均数始终大于或等于几何平均数。对于正实数 $x_1, x_2, \ldots, x_n$，这可以写成：

$$
\frac{x_1 + x_2 + \cdots + x_n}{n} \geq \left( x_1 x_2 \cdots x_n \right)^{\frac{1}{n}}
$$

等号成立当且仅当 $x_1 = x_2 = \cdots = x_n$。关键观察在于 $\ln$ 在 $(0,+\infty)$ 上是严格凹函数，因为其二阶导数对所有 $x > 0$ 都满足 $(\ln x)'' = -1/x^2 < 0$。由于 $\ln$ 是凹的，詹森不等式（Jensen 不等式）表明，对任意正实数 $x_1, \ldots, x_n$ 有：

$$
\frac{1}{n} \sum_{i=1}^{n} \ln x_i \leq \ln \left( \frac{1}{n} \sum_{i=1}^{n} x_i \right)
$$

左端是 $\ln x_1, \ldots, \ln x_n$ 的算术平均数，根据[几何平均数](../geometric-mean/)的对数形式，它等于 $\ln M_g$。右端是 $\ln M_a$，其中 $M_a$ 表示[算术平均数](../arithmetic-mean/)。因此该不等式变为：

$$
\ln M_g \leq \ln M_a
$$

由于 $\ln$ 是严格递增的，这等价于 $M_g \leq M_a$，即恰好是 AM-GM 不等式。等号成立当且仅当所有变量都相等，即 $x_1 = x_2 = \cdots = x_n$。

> 这一证明凸显了对数的结构性作用。它将 $M_g$ 的乘法结构映射为 $M_a$ 的加法结构，从而把两种不同类型均值之间的比较归结为 $\ln$ 的一个解析性质。
