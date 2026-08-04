---
title: 不定积分
title_en: Indefinite Integrals
source: https://algebrica.org/indefinite-integrals/
license: CC BY-NC 4.0
tags:
  - antiderivative
  - definite-integral
  - fundamental-theorem-of-calculus
  - indefinite-integral
  - integration
  - integration-rules
  - linearity
  - power-rule
  - primitive
translation:
  status: current
  source_hash: 5e03093096bdbf69f75d4552b2f2e337de5c38e7d603f39cb71728699728060b
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 原函数

按照定义，求导为每个函数赋予唯一的[导数](../derivatives/)。逆问题则是：给定函数 $f(x)$，是否存在某个函数 $F(x)$，使其导数恰好等于 $f(x)$？这样的函数称为 $f$ 的原函数（或反导数）。

**定义 1。** 当 $F$ 在闭[区间](../intervals/) $[a, b]$ 上处处可导，并满足以下恒等式时，称 $F(x)$ 是 $f(x)$ 在 $[a, b]$ 上的原函数：

$$F'(x) = f(x) \qquad \forall x \in [a, b]$$

并非每个函数在给定区间上都有原函数。[连续性](../continuous-functions/)是一个充分条件：每个在闭区间 $[a, b]$ 上连续的函数都在那里拥有原函数。反之一般不成立。例如，当 $f(x) = 3x^2$ 时，$F(x) = x^3$ 是一个原函数，因为：

$$\frac{d}{dx} x^3 = 3x^2$$

- - -

与导数不同，原函数并不唯一。由于任意常数的导数都是零，$x^3$、$x^3 + 5$ 和 $x^3 - \frac{1}{2}$ 都是 $3x^2$ 的原函数。更一般地，如果 $F(x)$ 是 $f(x)$ 的一个原函数，那么对任意 $c \in \mathbb{R}$，$F(x) + c$ 也是原函数，因为：

$$\frac{d}{dx}[F(x) + c] = F'(x) = f(x)$$

反过来，同一个函数的任意两个原函数只相差一个常数。如果 $F_1(x)$ 和 $F_2(x)$ 都是 $f(x)$ 的原函数，那么它们的差的导数为零：

$$\frac{d}{dx}[F_1(x) - F_2(x)] = F_1'(x) - F_2'(x) = f(x) - f(x) = 0$$

这迫使 $F_1(x) - F_2(x) = c$，其中 $c \in \mathbb{R}$ 为某个常数。

## 什么是不定积分

**定义 2。** 函数 $f(x)$ 的不定积分，是它的所有原函数构成的集合。由于任意两个原函数只相差一个常数，整个函数族可以写成 $F(x) + c$（其中 $c \in \mathbb{R}$），并用下列符号表示：

$$\int f(x) \ dx = F(x) + c \qquad c \in \mathbb{R}$$

由此定义直接得到恒等式：

$$\frac{d}{dx}\left[\int f(x) \ dx\right] = f(x)$$

对不定积分求导会返回原函数。求导与积分之间精确的形式联系，包括它与定积分的对应关系，是[微积分基本定理](../fundamental-theorem-of-calculus/)的内容。

- - -

求 $f(x) = 3x$ 的原函数，且其图像经过点 $(2, 1)$。通过积分得到一般原函数：

$$F(x) = \int 3x \ dx = \frac{3}{2}x^2 + c$$

为了确定常数，施加条件 $F(2) = 1$：

$$
\begin{align}
\frac{3}{2}(2)^2 + c &= 1 \\[6pt]
6 + c &= 1 \\[6pt]
c &= -5
\end{align}
$$

满足给定条件的唯一原函数为：

$$F(x) = \frac{3}{2}x^2 - 5$$

## 线性性质

不定积分是一个线性算子。可积函数之和的积分等于各函数积分之和：

$$\int [f(x) + g(x)] \ dx = \int f(x) \ dx + \int g(x) \ dx \tag{1}$$

常数因子可以移到积分号外：

$$\int k f(x) \ dx = k \int f(x) \ dx \qquad \forall k \in \mathbb{R} \tag{2}$$

这两个性质使不定积分成为可积函数空间上的[线性映射](../linear-maps/)，并将线性组合的积分计算化为各个项的积分计算。

- - -

计算 $f(x) = 3x^2 + 2x$ 的积分。应用性质 $(1)$，积分拆分为两项，而每一项都可以使用幂法则：

$$\int (3x^2 + 2x) \ dx = \int 3x^2 \ dx + \int 2x \ dx$$

每一项产生的两个积分常数可以合并为一个任意常数，结果为：

$$\int (3x^2 + 2x) \ dx = x^3 + x^2 + c \qquad c \in \mathbb{R}$$

- - -

计算 $f(x) = 5\sin(x)$ 的积分。应用性质 $(2)$，把常数因子移到积分号外：

$$\int 5\sin(x) \ dx = 5 \int \sin(x) \ dx$$

$\sin(x)$ 的积分为 $-\cos(x)$，因此：

$$\int 5\sin(x) \ dx = -5\cos(x) + c \qquad c \in \mathbb{R}$$

## 幂函数的积分

对于每个实指数 $a \neq -1$，[幂函数](../powers/) $x^a$ 的积分为：

$$\int x^a \ dx = \frac{x^{a+1}}{a+1} + c$$

当 $a = -1$ 时，分母为零，需要单独处理；这将在对数积分一节中讨论。

- - -

计算下列积分：

$$\int (3x^4 + 5x^2) \ dx$$

应用线性性质，把常数因子移到积分号外，并对每一项应用幂法则：

$$\int (3x^4 + 5x^2) \ dx = 3 \int x^4 \ dx + 5 \int x^2 \ dx = 3 \cdot \frac{x^5}{5} + 5 \cdot \frac{x^3}{3} + c$$

结果为：

$$\int (3x^4 + 5x^2) \ dx = \frac{3}{5}x^5 + \frac{5}{3}x^3 + c \qquad c \in \mathbb{R}$$
- - -

计算下列积分：

$$\int \left(4x^3 - \frac{3}{\sqrt{x}} + 2\cos x\right) dx$$

应用线性性质，积分拆分为三项：

$$\int 4x^3 \ dx - \int 3x^{-1/2} \ dx + \int 2\cos x \ dx$$

第一项直接使用幂法则：$\int 4x^3 \ dx = x^4$。对于第二项，将 $1/\sqrt{x}$ 改写为 $x^{-1/2}$，再取 $a = -1/2$ 应用幂法则，得到 $\int 3x^{-1/2} \ dx = 6\sqrt{x}$。第三项使用余弦的标准积分：$\int 2\cos x \ dx = 2\sin x$。合并三项：

$$\int \left(4x^3 - \frac{3}{\sqrt{x}} + 2\cos x\right) dx = x^4 - 6\sqrt{x} + 2\sin x + c$$

> 逐项对 $x^4 - 6\sqrt{x} + 2\sin x + c$ 求导，即可验证结果会返回原被积函数。

## 对数积分

当 $a = -1$ 时，幂法则公式产生零分母，因而不适用。此时的积分由[自然对数](../logarithms/)和[绝对值](../absolute-value/)给出：

$$\int \frac{1}{x} \ dx = \ln |x| + c$$

这个恒等式来自 $\frac{d}{dx} \ln |x| = \frac{1}{x}$，它对每个 $x \neq 0$ 都成立。绝对值是必要的，因为 $\ln$ 只对正数自变量有定义，而 $1/x$ 在 $(-\infty, 0)$ 和 $(0, +\infty)$ 上都有定义。

> 恒等式 $\int \frac{1}{x} \ dx = \ln|x| + c$ 分别在 $(-\infty, 0)$ 和 $(0, +\infty)$ 上成立。在每个区间上，任意常数可以取不同的值，因此 $1/x$ 在其完整定义域上的最一般反导数，不是只含一个常数的单一表达式 $\ln|x| + c$，而是在两个连通分支上各自带有独立常数的分段函数族。

## 基本积分法则

这里汇总的四条法则是所有初等积分过程的基础。线性性质将线性组合的积分化为更简单积分之和，幂法则覆盖除 $-1$ 之外的所有实指数，而对数情形填补了例外留下的空缺。

[class="table-1"]

|                  |                                                               |
| ---------------- | ------------------------------------------------------------- |
| 线性性        | $$\int (f(x) + g(x)) \ dx = \int f(x) \ dx + \int g(x) \ dx$$ |
| 线性性        | $$\int k f(x) \ dx = k \int f(x) \ dx$$                       |
| 幂法则       | $$\int x^a \ dx = \dfrac{x^{a+1}}{a+1} + c \quad a \neq -1$$  |
| 对数情形 | $$\int \dfrac{1}{x} \ dx = \ln \lvert x \rvert + c$$          |
[/class]

## 常用积分

下面汇总微积分中最常用的基本不定积分恒等式。对每一个结果，对右端求导即可验证并恢复原被积函数。

[class="table-1 -right"]

|                                                     |                                                             |
| --------------------------------------------------- | ----------------------------------------------------------- |
| $$\int \frac{1}{x} \ dx = \ln \lvert x \lvert + c$$ | [更多](../integral-of-rational-functions/)       |
| $$\int a^x \ dx = \frac{1}{\ln a} \cdot a^x + c$$   | [更多](../integral-of-the-exponential-function/) |
| $$\int \sin x \ dx = -\cos x + c$$                  | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \cos x \ dx = \sin x + c$$                   | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \frac{1}{\sin^2 x} \ dx = -\cot x + c$$      | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \frac{1}{\cos^2 x} \ dx = \tan x + c$$       | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \sec^2 x \ dx = \tan x + c$$                 | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \sec x \tan x \ dx = \sec x + c$$            | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \csc^2 x \ dx = -\cot x + c$$                | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \csc x \cot x \ dx = -\csc x + c$$           | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \frac{dx}{1 + x^2} = \arctan x + c$$         | —                                                           |
| $$\int \frac{dx}{\sqrt{1 - x^2}} = \arcsin x + c$$  | —                                                           |

[/class]

> 上述恒等式在被积函数有定义且连续的任意区间上成立。当被积函数没有初等反导数，或不能直接应用这些法则时，标准做法是通过[换元积分](../integration-by-substitution/)进行变量替换，或使用[分部积分](../integration-by-parts/)。在两个端点之间计算不定积分，会得到一个[定积分](../definite-integrals/)，并计算相应的有向面积。
