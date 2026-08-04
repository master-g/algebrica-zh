---
title: 换元积分
title_en: Integration by Substitution
source: https://algebrica.org/integration-by-substitution/
license: CC BY-NC 4.0
tags:
  - antiderivative
  - chain-rule
  - change-of-variable
  - composite-functions
  - definite-integral
  - indefinite-integral
  - integration
  - integration-by-substitution
  - trigonometric-substitution
translation:
  status: current
  source_hash: bc5258dde9d452d4cad34f38d08c359b10407e8eee22319559f211b55b7aa0b3
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 换元如何简化积分

换元积分是一种通过改变变量来简化[积分](../indefinite-integrals/)的技巧。当积分不容易直接计算时，这种方法可以将函数 $f(x)$ 的积分改写为关于新变量 $u$ 的积分，通常会得到简单得多的计算：

$$\int f(g(x)) g'(x) \ dx = \int f(u) \ du$$

具体步骤如下：

+ 通过定义 $u = g(x)$ 引入变量替换，其中 $g(x)$ 是适当选取的函数。
+ 计算微分变换，即 $du = g'(x) \ dx$。
+ 将积分改写为关于 $u$ 的形式，并相应地替换 $x$ 和 $dx$，使所得表达式更容易处理。
+ 计算出关于 $u$ 的积分后，换回原变量 $x$，将最终结果写回原来的形式。

> 换元积分是[链式法则](../the-derivative-of-a-composite-function/)的逆过程；认识到这一联系，有助于判断何时以及如何应用该技巧。

- - -

换元法直接来自[导数](../derivatives/)的链式法则。如果 $F(x) = H(g(x))$，那么根据链式法则：

$$F'(x) = H'(g(x)) g'(x)$$

因此，只要被积函数具有 $H'(g(x)) g'(x)$ 的形式，它就是复合函数 $H(g(x))$ 的导数。换元积分通过引入 $u = g(x)$ 简单地逆转这一过程，将积分化为：

$$\int H'(u) \ du = H(u) + c$$

## 识别何时使用换元

在进入具体例子之前，先理解换元何时可能有效会很有帮助。当被积函数包含[复合函数](../composite-functions/)时，使用这种技巧最为自然。很多积分具有如下的一般形式：

$$f(g(x)) g'(x)$$

或者只与它相差一个常数因子。当出现这种模式时，选取 $u = g(x)$ 可以将复合结构化为单个变量，从而简化表达式。一个常见信号是出现 $(ax + b)^n$、$\sqrt{ax + b}$、$\ln(ax + b)$ 或 $e^{ax + b}$ 这样的表达式。在这些情形中，内部的线性函数 $ax + b$ 是自然的换元候选。同样地，对于如下形式的有理表达式：

$$\frac{g'(x)}{g(x)}$$

分母的导数提示我们选取换元 $u = g(x)$。

> 实际应用中的关键，是寻找一个内部表达式，使它的导数也在被积函数的其他位置出现，完全相同或只相差一个乘法常数。当存在这种关系时，换元通常能将积分变成更简单的形式。

## 换元模式

这些积分呈现出反复出现的结构模式；适当的换元可以将被积函数化为更简单的表达式，从而更直接地完成积分：

[class="table-1"]

|                                  |              |
| -------------------------------- | ------------ |
| $$\int f(g(x)) g'(x) \ dx$$      | $$u = g(x)$$ |
| $$\int (ax + b)^n \ dx$$         | $$u = ax + b$$ |
| $$\int e^{ax + b} \ dx$$         | $$u = ax + b$$ |
| $$\int \ln(ax + b) \ dx$$        | $$u = ax + b$$ |
| $$\int \dfrac{g'(x)}{g(x)} \ dx$$ | $$u = g(x)$$ |

[/class]

## 例 1

考虑如下积分：

$$\int (2x + 1)^3 \ dx$$

令 $u = 2x + 1$，这样可以简化幂运算。对等式两边关于 $x$ 求导：

$$du = 2 \ dx$$

解出 $dx$：

$$dx = \frac{du}{2}$$

- - -

将积分完全改写为关于 $u$ 的形式：

$$\int u^3 \cdot \frac{du}{2} = \frac{1}{2} \int u^3 \ du$$

关于 $u$ 的积分可以使用幂法则。计算得：

$$\frac{1}{2} \cdot \frac{u^4}{4} + c = \frac{1}{8} u^4 + c$$

代回 $u = 2x + 1$：

$$\int (2x + 1)^3 \ dx = \frac{1}{8} (2x + 1)^4 + c$$

## 例 2

计算如下积分：

$$\int \frac{1}{3x - 5} \ dx$$

令 $u = 3x - 5$，这样可以简化分母。对等式两边关于 $x$ 求导：

$$du = 3 \ dx$$

解出 $dx$：

$$dx = \frac{du}{3}$$

- - -

将积分完全改写为关于 $u$ 的形式：

$$\int \frac{1}{u} \cdot \frac{du}{3} = \frac{1}{3} \int \frac{du}{u}$$

关于 $u$ 的积分属于对数情形。计算得：

$$\frac{1}{3} \ln |u| + c$$

代回 $u = 3x - 5$：

$$\int \frac{1}{3x - 5} \ dx = \frac{1}{3} \ln |3x - 5| + c$$

> 换元积分是一种有效的技巧，但选择正确的换元需要练习，也需要能够识别被积函数的结构。

## 例 3

计算如下积分：

$$\int x \sin(x^2) \ dx$$

这里的换元不那么直接，因为被积函数不像前两个例子那样直接符合标准模式。令 $u = x^2$，这样可以简化正弦函数的自变量。对等式两边关于 $x$ 求导：

$$du = 2x \ dx$$

解出 $dx$：

$$dx = \frac{du}{2x}$$

- - -

将所有内容改写为关于 $u$ 的形式后，原被积函数中的因子 $x$ 与 $dx$ 分母中的 $x$ 抵消：

$$\int x \sin(u) \cdot \frac{du}{2x} = \frac{1}{2} \int \sin(u) \ du$$

关于 $u$ 的积分是标准积分：

$$\int \sin u \ du = -\cos u$$

因此：

$$\frac{1}{2} (-\cos u) + c = -\frac{1}{2} \cos u + c$$

代回 $u = x^2$：

$$\int x \sin(x^2) \ dx = -\frac{1}{2} \cos(x^2) + c$$

## 例 4

计算如下积分：

$$\int \cos x \sqrt{\sin x} \ dx$$

令 $u = \sin x$，这样可以简化平方根。对等式两边关于 $x$ 求导：

$$du = \cos x \ dx$$

被积函数中出现了因子 $\cos x \ dx$，可以直接用 $du$ 替换。

- - -

代入 $u = \sin x$ 和 $du = \cos x \ dx$：

$$\int \sqrt{u} \ du = \int u^{1/2} \ du$$

应用幂法则：

$$\int u^{1/2} \ du = \frac{u^{3/2}}{3/2} = \frac{2}{3} u^{3/2} + c$$

代回 $u = \sin x$：

$$\int \cos x \sqrt{\sin x} \ dx = \frac{2}{3} (\sin x)^{3/2} + c$$

## 三角换元

当积分涉及[多项式](../polynomials/)、[有理函数](../rational-functions/)或代数表达式，且可以利用[三角恒等式](../pythagorean-identity/)化简时，可以使用三角换元：

$$\sin^2 x + \cos^2 x = 1$$

它还可以改写为以下形式：

$$
\begin{align}
\cos^2 x &= 1 - \sin^2 x \\[6pt]
\sec^2 x &= 1 + \tan^2 x \\[6pt]
\tan^2 x &= \sec^2 x - 1
\end{align}
$$

换元的选择取决于根式下表达式的形式：

+ 当被积函数包含 $1 - x^2$ 时，使用 $x = \sin u$。
+ 当被积函数包含 $1 + x^2$ 时，使用 $x = \tan u$。
+ 当被积函数包含 $x^2 - 1$ 时，使用 $x = \sec u$。

> 关于三角换元的完整讨论，包括几何依据和完整的例题，见专门介绍[积分的三角换元](../trigonometric-substitution-for-integrals/)的页面。

## 例 5

计算如下积分：

$$\int \frac{1}{\sqrt{9 - x^2}} \ dx$$

对于 $a^2 - x^2$ 形式的表达式，自然的换元是：

$$x = 3\sin u$$

对等式两边求导：

$$dx = 3\cos u \ du$$

- - -

将 $x = 3\sin u$ 代入分母：

$$\sqrt{9 - x^2} = \sqrt{9 - 9\sin^2 u} = \sqrt{9(1 - \sin^2 u)}$$

由于 $\sin^2 u + \cos^2 u = 1$：

$$\sqrt{9(1 - \sin^2 u)} = \sqrt{9\cos^2 u} = 3\cos u$$

积分变为：

$$\int \frac{3\cos u \ du}{3\cos u} = \int du = u + c$$

> 这一步假设 $\cos u \geq 0$。这是成立的，因为换元 $x = 3\sin u$ 蕴含 $u \in [-\pi/2, \pi/2]$。

- - -

由换元 $x = 3\sin u$，通过[反正弦](../arcsine-and-arccosine/)函数解出 $u$：

$$u = \arcsin\left(\frac{x}{3}\right)$$

因此最终结果为：

$$\int \frac{1}{\sqrt{9 - x^2}} \ dx = \arcsin\left(\frac{x}{3}\right) + c$$

## 定积分的换元法则

使用换元计算[定积分](../definite-integrals/)时，必须调整积分上下限，以反映新变量。如果不改变上下限，结果就会错误。给定换元 $u = g(x)$：

$$\int_{a}^{b} f(g(x)) g'(x) \ dx = \int_{g(a)}^{g(b)} f(u) \ du$$

- - -

计算如下定积分：

$$\int_{0}^{1} x\cos(x^2) \ dx$$

使用换元 $u = x^2$：

$$du = 2x \ dx \qquad dx = \frac{du}{2x}$$

必须更新积分上下限。当 $x = 0$ 时，$u = 0$；当 $x = 1$ 时，$u = 1$。在这个例子中，变换后的上下限与原上下限重合，但一般并不一定如此。积分变为：

$$\int_{0}^{1} x\cos(x^2) \ dx = \int_{0}^{1} \cos u \cdot \frac{du}{2} = \frac{1}{2}\int_{0}^{1} \cos u \ du$$

计算得：

$$\frac{1}{2}\Bigl[\sin u\Bigr]_{0}^{1} = \frac{1}{2}(\sin 1 - \sin 0) = \frac{\sin 1}{2}$$

## 决策流程

下面的分步流程总结了如何对一般积分应用换元积分。

+ 识别被积函数的结构。当它符合标准形式（幂函数、指数函数、对数函数或三角函数）时，直接使用[不定积分](../indefinite-integrals/)页面汇总的相应公式积分。
+ 当被积函数包含 $a^2 - x^2$、$a^2 + x^2$ 或 $x^2 - a^2$ 形式的根式表达式时，应用相应的三角换元：分别取 $x = a\sin u$、$x = a\tan u$ 或 $x = a\sec u$。[积分的三角换元](../trigonometric-substitution-for-integrals/)页面给出了详细处理。
+ 当被积函数具有 $f(g(x)) g'(x)$ 的形式时，令 $u = g(x)$，计算 $du = g'(x) \ dx$，将积分完全改写为关于 $u$ 的形式，并使用适当的标准公式积分。
+ 对于定积分，计算前将积分上下限更新为 $g(a)$ 和 $g(b)$，这样就不需要代回原变量。
+ 对于不定积分，代回 $u = g(x)$，将反导数写成关于原变量的形式。
+ 当被积函数是两个不符合换元模式的函数之积时，[分部积分](../integration-by-parts/)通常是适当的替代方法。对于 $\sin x$ 和 $\cos x$ 的有理函数，[魏尔斯特拉斯换元](../weierstrass-substitution/)提供了一条系统路径。
