---
title: 积分策略
title_en: Integration Strategies
source: https://algebrica.org/integration-strategies/
license: CC BY-NC 4.0
tags:
  - antiderivative
  - indefinite-integral
  - integration
  - integration-by-parts
  - integration-by-substitution
  - integration-rules
  - linearity
  - power-rule
  - standard-integrals
translation:
  status: current
  source_hash: 30963e0fedc87f823788d9268838d3d412e70eef16d19f8e9448a969b5e0b49b
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 识别被积函数的形式

起初，积分往往显得比求导更难。记号不熟悉，定义用到划分上的和的[极限](../limits/)，而且一道题通常在开始计算之前就要作出选择。不过，微积分课程中的大多数积分，用到的只是一张不长的原函数表、几种一般方法，以及识别被积函数形式的能力。

在这个层次上，求导有固定的步骤。对于由可导的成分构成的初等[函数](../functions/)，和、积、商与[复合](../composite-functions/)的法则在有限步内给出它的导数。积分没有相应的步骤。特别地，乘积或商的原函数不能直接由它的因子的原函数得到。被积函数的形式决定了哪种改写或方法合适。

同一个被积函数可以用换元、分部积分或代数改写来计算，所得计算的长度可能相差很大。好的选择使下一个积分更简单。差的选择可能使它更长，或者引起不会终止的重复。例如，对 $\int xe^x \ dx$ 应用分部积分，如果对指数函数求导、对幂积分，就得到：

$$\int xe^x \ dx = \frac{x^2}{2}e^x - \int \frac{x^2}{2}e^x \ dx$$

重复这种选择，每一步都使代数因子的次数升高。取 $u=x$ 和 $dv=e^x \ dx$ 时，求导降低多项式因子的次数，应用一次就得到原函数。换元也要通过同样的检验：只有当新的被积函数比原来的简单时才算通过。

在标准微积分课程讨论的各类积分中，一旦认出了被积函数的形式，计算基本上是机械的。即使是复杂的被积函数，通常也能化为有限的一串代数改写和标准技巧。需要经验的地方主要在于选择一条短的路线，以及在换元或分部积分使表达式更复杂时放弃它。

记忆是这个过程的一部分。基本的原函数以及一小组代数恒等式和三角恒等式必须记住。当这些公式能立刻想起来时，复杂的被积函数就可以拆成熟悉的部分。如果每个公式都要推导或查阅，其中的模式就更难看出来。

求导可以检验每一个提出的原函数。如果导数是原来的被积函数，计算就是正确的，不论这个原函数是怎样找到的。

在整个页面中，每个公式都理解为在一个连通的[区间](../intervals/)上成立，在这个区间上所涉及的所有表达式都有定义。

## 基本原函数

一张简短的基本原函数表是更长的计算的出发点。最简单的情形是零函数的积分：

$$\int 0 \ dx = c$$

由[拉格朗日定理](../lagrange-theorem/)，在区间上导数为零的函数是常数。因此零函数的原函数恰好是各个常值函数。对于恒等于 $1$ 的常值函数，被积函数常常省略不写：

$$\int 1 \ dx = \int dx = x + c$$

这个恒等式成立，是因为 $\frac{d}{dx}x=1$。

- - -

幂函数的积分公式对除 $-1$ 以外的每个实指数成立，在幂有定义的每个区间上都成立：

$$\int x^n \ dx = \frac{x^{n+1}}{n+1} + c \qquad n \neq -1$$

对右边求导可以确认它：

$$\frac{d}{dx}\left(\frac{x^{n+1}}{n+1}\right) = \frac{(n+1)x^{n}}{n+1} = x^{n}$$

指数 $n=-1$ 被排除，因为它使分母为零。它的原函数是对数：

$$\int \frac{1}{x} \ dx = \ln|x| + c$$

出现[绝对值](../absolute-value/)，是因为 $1/x$ 在 $(-\infty,0)$ 和 $(0,+\infty)$ 上都有定义，而[对数函数](../logarithmic-function/)只接受正的自变量。

- - -

下表包含最常用的公式。每一个都是把[导数](../derivatives/)表中的一项反过来读。

[class="table-1"]

|                     |                                                                        |
| ------------------- | ---------------------------------------------------------------------- |
| 零函数       | $$\int 0 \ dx = c$$                                                    |
| 常数            | $$\int dx = x + c$$                                                    |
| 幂函数          | $$\int x^n \ dx = \dfrac{x^{n+1}}{n+1} + c \quad n \neq -1$$           |
| 对数的情形    | $$\int \dfrac{1}{x} \ dx = \ln \lvert x \rvert + c$$                   |
| 自然指数函数 | $$\int e^x \ dx = e^x + c$$                                            |
| 一般指数函数 | $$\int a^x \ dx = \dfrac{a^x}{\ln a} + c \quad a > 0, \ a \neq 1$$     |
| 正弦                | $$\int \sin x \ dx = -\cos x + c$$                                     |
| 余弦              | $$\int \cos x \ dx = \sin x + c$$                                      |
| 正割的平方      | $$\int \dfrac{1}{\cos^2 x} \ dx = \tan x + c$$                         |
| 余割的平方    | $$\int \dfrac{1}{\sin^2 x} \ dx = -\cot x + c$$                        |
| 反正切          | $$\int \dfrac{1}{1 + x^2} \ dx = \arctan x + c$$                       |
| 反正弦             | $$\int \dfrac{1}{\sqrt{1 - x^2}} \ dx = \arcsin x + c$$                |
| [双曲正弦](../hyperbolic-sine-function/) | $$\int \sinh x \ dx = \cosh x + c$$                                    |
| 双曲余弦   | $$\int \cosh x \ dx = \sinh x + c$$                                    |

[/class]

> [不定积分](../indefinite-integrals/)页面有完整的列表和每一项的推导。其余的圆函数和双曲函数在[三角函数的积分](../integral-of-trigonometric-functions/)中讨论，指数函数的各种情形在[指数函数的积分](../integral-of-the-exponential-function/)中讨论。

## 积分的线性性质

如果 $F'=f$ 且 $G'=g$，那么在相差任意加法常数的意义下，积分是线性的：

$$\int [\alpha f(x) + \beta g(x)] \ dx = \alpha F(x) + \beta G(x) + c \qquad \alpha, \beta \in \mathbb{R}$$

这个公式是把求导的线性性质反过来读。它把一个和拆成若干项，每一项可以单独与基本原函数表对照。

对于下面的被积函数，线性性质拆出三个标准的项：

$$\int \left(6x^5 - 4\sqrt[3]{x} + \frac{7}{x}\right) \ dx$$

$$
\begin{align}
\int \left(6x^5 - 4\sqrt[3]{x} + \frac{7}{x}\right) \ dx &= 6\int x^5 \ dx - 4\int x^{1/3} \ dx + 7\int \frac{dx}{x} \\[6pt]
&= 6 \cdot \frac{x^6}{6} - 4 \cdot \frac{x^{4/3}}{4/3} + 7\ln|x| + c \\[6pt]
&= x^6 - 3x^{4/3} + 7\ln|x| + c
\end{align}
$$

因此原函数是 $x^6-3x^{4/3}+7\ln|x|+c$。

- - -

线性性质适用于和，但对乘积或商没有对应的性质。为了看出对乘积不成立，取 $f(x)=g(x)=x$。它们的乘积的积分是：

$$\int x^2 \ dx = \frac{x^3}{3} + c$$

$f$ 的一个原函数与 $g$ 的一个原函数的乘积是：

$$\frac{x^2}{2} \cdot \frac{x^2}{2} = \frac{x^4}{4}$$

第二个表达式的导数是 $x^3$，而不是 $x^2$。可见乘积的积分不是积分的乘积。对商也有同样的问题。乘积可能需要[分部积分法](../integration-by-parts/)或换元，而商可能需要代数改写或[部分分式分解](../partial-fraction-decomposition/)。

- - -

代数化简常常把被积函数变成标准项的和。这里只需展开平方：

$$\int \frac{(x+1)^2}{x} \ dx$$

$$
\begin{align}
\int \frac{(x+1)^2}{x} \ dx &= \int \frac{x^2 + 2x + 1}{x} \ dx \\[6pt]
&= \int \left(x + 2 + \frac{1}{x}\right) \ dx \\[6pt]
&= \frac{x^2}{2} + 2x + \ln|x| + c
\end{align}
$$

原函数是 $\frac{x^2}{2}+2x+\ln|x|+c$。

下一个积分只需要逐项相除：

$$\int \frac{2x^4 - 3}{x^2} \ dx$$

$$
\begin{align}
\int \frac{2x^4 - 3}{x^2} \ dx &= \int \left(2x^2 - 3x^{-2}\right) \ dx \\[6pt]
&= \frac{2x^3}{3} + 3x^{-1} + c \\[6pt]
&= \frac{2x^3}{3} + \frac{3}{x} + c
\end{align}
$$

原函数是 $\frac{2x^3}{3}+\frac{3}{x}+c$。

> 这种改写是普通的代数运算，只要它能把被积函数化为标准项，就应当先做，然后再选择积分方法。

## 复合幂函数的积分公式

幂函数的积分公式可以推广到可导函数的幂乘以它的导数的情形：

$$\int [f(x)]^n f'(x) \ dx = \frac{[f(x)]^{n+1}}{n+1} + c \qquad n \neq -1$$

由[链式法则](../chain-rule/)可知右边的导数就是被积函数。当 $f(x)$ 的幂与 $f'(x)$ 一起出现时，公式适用，其中可以相差一个非零常数因子。

取 $f(x)=x^2+1$，因子 $x$ 是 $f'(x)$ 的一半：

$$\int x(x^2+1)^5 \ dx$$

$$
\begin{align}
\int x(x^2+1)^5 \ dx &= \frac{1}{2}\int (x^2+1)^5 \cdot 2x \ dx \\[6pt]
&= \frac{1}{2} \cdot \frac{(x^2+1)^6}{6} + c \\[6pt]
&= \frac{(x^2+1)^6}{12} + c
\end{align}
$$

因子 $1/2$ 抵消了 $x^2+1$ 的导数，所以原函数是 $\frac{(x^2+1)^6}{12}+c$。

- - -

负指数和分数指数不需要新的规则。取 $f(x)=x^3+8$ 和 $n=-1/2$，有：

$$\int \frac{x^2}{\sqrt{x^3+8}} \ dx$$

$$
\begin{align}
\int \frac{x^2}{\sqrt{x^3+8}} \ dx &= \frac{1}{3}\int (x^3+8)^{-1/2} \cdot 3x^2 \ dx \\[6pt]
&= \frac{1}{3} \cdot \frac{(x^3+8)^{1/2}}{1/2} + c \\[6pt]
&= \frac{2}{3}\sqrt{x^3+8} + c
\end{align}
$$

原函数是 $\frac{2}{3}\sqrt{x^3+8}+c$。

- - -

内层函数也可以是三角函数。由于 $(\sin x)'=\cos x$，有：

$$\int \sin^3 x \cos x \ dx$$

$$
\begin{align}
\int \sin^3 x \cos x \ dx &= \int (\sin x)^3 (\sin x)' \ dx \\[6pt]
&= \frac{\sin^4 x}{4} + c
\end{align}
$$

原函数是 $\frac{\sin^4 x}{4}+c$。

## 对数导数

对于被排除的指数 $n=-1$，复合公式是对数形式的。它的分子是分母的导数：

$$\int \frac{f'(x)}{f(x)} \ dx = \ln|f(x)| + c$$

这是把链式法则应用于 $\ln|f(x)|$。$f'(x)$ 的常数倍可以用线性性质调整。

> 要直接应用这个公式，分子必须是 $f'(x)$，至多相差一个非零常数因子。一般说来，$1/f(x)$ 的积分并不是 $\ln|f(x)|$。一次的分母导数是常数，所以 $\int \frac{dx}{ax+b}$ 有对数形式的原函数。与此不同，$\int \frac{dx}{x^2+1}$ 的原函数是反正切。

- - -

对于一次的分母，公式为：

$$\int \frac{dx}{ax+b} = \frac{1}{a}\ln|ax+b| + c \qquad a \neq 0$$

因子 $1/a$ 抵消了分母的导数 $a$。对于分母 $2x+7$，系数是 $1/2$：

$$\int \frac{dx}{2x+7}$$

$$
\begin{align}
\int \frac{dx}{2x+7} &= \frac{1}{2}\int \frac{2 \ dx}{2x+7} \\[6pt]
&= \frac{1}{2}\ln|2x+7| + c
\end{align}
$$

于是原函数是 $\frac{1}{2}\ln|2x+7|+c$。

- - -

三角函数的商常常具有对数形式，因为分母的导数已经出现在分子中。由于 $(\cos x)'=-\sin x$，[正切函数](../tangent-function/)需要一个负号：

$$\int \tan x \ dx$$

$$
\begin{align}
\int \tan x \ dx &= \int \frac{\sin x}{\cos x} \ dx \\[6pt]
&= -\int \frac{-\sin x}{\cos x} \ dx \\[6pt]
&= -\ln|\cos x| + c
\end{align}
$$

由对数形式得到 $\int \tan x \ dx=-\ln|\cos x|+c$。

- - -

对于 $f(x)=1+\sin x$，分子恰好是 $f'(x)$：

$$\int \frac{\cos x}{1 + \sin x} \ dx$$

$$
\begin{align}
\int \frac{\cos x}{1 + \sin x} \ dx &= \int \frac{(1 + \sin x)'}{1 + \sin x} \ dx \\[6pt]
&= \ln|1 + \sin x| + c
\end{align}
$$

原函数是 $\ln|1+\sin x|+c$。

- - -

代数改写或三角改写可能使对数形式显现出来。把分子和分母同除以 $\cos^2 x$，分子中就出现 $\tan x$ 的导数：

$$\int \frac{dx}{\sin x \cos x}$$

$$
\begin{align}
\int \frac{dx}{\sin x \cos x} &= \int \frac{1/\cos^2 x}{\sin x \cos x / \cos^2 x} \ dx \\[6pt]
&= \int \frac{1/\cos^2 x}{\tan x} \ dx \\[6pt]
&= \int \frac{(\tan x)'}{\tan x} \ dx \\[12pt]
&= \ln|\tan x| + c
\end{align}
$$

因此，在被积函数有定义的每个区间上，原函数是 $\ln|\tan x|+c$。

## 复合函数的原函数

复合幂函数的积分公式和对数导数都来自[链式法则](../chain-rule/)。更一般地，如果 $F'=g$，那么：

$$\int g(f(x))f'(x) \ dx=F(f(x))+c$$

每个基本原函数都有一个复合形式，其中内层函数的导数也出现。当这种形式一眼可见时，不需要临时变量。

[class="table-1"]

|             |                                                                                       |
| ----------- | ------------------------------------------------------------------------------------- |
| 幂       | $$\int [f(x)]^n f'(x) \ dx = \dfrac{[f(x)]^{n+1}}{n+1} + c \quad n \neq -1$$           |
| 对数   | $$\int \dfrac{f'(x)}{f(x)} \ dx = \ln \lvert f(x) \rvert + c$$                         |
| 指数函数 | $$\int e^{f(x)} f'(x) \ dx = e^{f(x)} + c$$                                            |
| 正弦        | $$\int \sin(f(x))f'(x) \ dx = -\cos(f(x)) + c$$                                          |
| 余弦      | $$\int \cos(f(x))f'(x) \ dx = \sin(f(x)) + c$$                                           |
| 反正切  | $$\int \dfrac{f'(x)}{1 + [f(x)]^2} \ dx = \arctan f(x) + c$$                           |
| 反正弦     | $$\int \dfrac{f'(x)}{\sqrt{1 - [f(x)]^2}} \ dx = \arcsin f(x) + c$$                    |

[/class]

对于内层函数 $\arctan x$，导数 $1/(1+x^2)$ 已经出现：

$$\int \frac{e^{\arctan x}}{1+x^2} \ dx$$

$$
\begin{align}
\int \frac{e^{\arctan x}}{1+x^2} \ dx &= \int e^{\arctan x}(\arctan x)' \ dx \\[6pt]
&= e^{\arctan x} + c
\end{align}
$$

由于 $(\arctan x)'=1/(1+x^2)$，原函数是 $e^{\arctan x}+c$。

## 换元

[换元积分法](../integration-by-substitution/)把内层函数换成一个新变量，并用这个变量改写积分：

$$\int f(g(x)) g'(x) \ dx = \int f(u) \ du \qquad u = g(x), \quad du = g'(x) \ dx$$

这个方法有四步。选取 $u=g(x)$，计算 $du=g'(x) \ dx$，把积分的每一部分都用 $u$ 改写，再把 $g(x)$ 代回原函数。复合幂函数的积分公式和对数导数是新被积函数为幂或倒数的特殊情形。

如果内层函数是一次的，$F$ 是 $f$ 的一个原函数，那么：

$$\int f(ax+b) \ dx = \frac{1}{a}F(ax+b) + c \qquad a \neq 0$$

因此表中的每一项都有自变量为一次式的版本，它的系数是 $1/a$。

> 换元应当使被积函数更简单。如果新的表达式更长，或者两个变量都留了下来而它们之间没有简单的关系，就换一种换元或方法。

- - -

换元不一定要通过约分消去 $x$ 的每次出现。如果能从 $u=g(x)$ 中解出 $x$，$x$ 剩下的各次出现就可以用 $u$ 表示。取 $u=x+4$，还有 $x=u-4$：

$$\int \frac{x}{\sqrt{x+4}} \ dx$$

$$u = x + 4 \qquad x = u - 4 \qquad dx = du$$

$$
\begin{align}
\int \frac{x}{\sqrt{x+4}} \ dx &= \int \frac{u-4}{\sqrt{u}} \ du \\[6pt]
&= \int \left(u^{1/2} - 4u^{-1/2}\right) \ du \\[6pt]
&= \frac{2}{3}u^{3/2} - 8u^{1/2} + c \\[6pt]
&= \frac{2}{3}(x+4)^{3/2} - 8\sqrt{x+4} + c
\end{align}
$$

代回最后的表达式，得到 $\frac{2}{3}(x+4)^{3/2}-8\sqrt{x+4}+c$。

- - -

取 $u=e^x$，下面被积函数中的[指数函数](../exponential-function/)就变成[有理函数](../rational-functions/)：

$$\int \frac{dx}{e^x + 1}$$

$$u = e^x \qquad du = e^x \ dx \qquad dx = \frac{du}{u}$$

$$
\begin{align}
\int \frac{dx}{e^x + 1} &= \int \frac{du}{u(u+1)} \\[6pt]
&= \int \left(\frac{1}{u} - \frac{1}{u+1}\right) \ du \\[6pt]
&= \ln|u| - \ln|u+1| + c \\[6pt]
&= x - \ln(e^x + 1) + c
\end{align}
$$

所得的原函数是 $x-\ln(e^x+1)+c$。

> 把 $\frac{1}{u(u+1)}$ 分解为两个更简单的分式，就是[部分分式分解](../partial-fraction-decomposition/)，它是[有理函数积分](../integral-of-rational-functions/)的一般方法。由于 $e^x>0$ 且 $e^x+1>0$，最后一行没有绝对值。

- - -

对于含有 $\sqrt{x}$ 的被积函数，取 $u=\sqrt{x}$ 可以消去根式：

$$\int \frac{dx}{\sqrt{x}(1+x)}$$

$$u = \sqrt{x} \qquad x = u^2 \qquad dx = 2u \ du$$

$$
\begin{align}
\int \frac{dx}{\sqrt{x}(1+x)} &= \int \frac{2u \ du}{u(1+u^2)} \\[6pt]
&= 2\int \frac{du}{1+u^2} \\[6pt]
&= 2\arctan u + c \\[6pt]
&= 2\arctan \sqrt{x} + c
\end{align}
$$

这个换元给出原函数 $2\arctan\sqrt{x}+c$。

- - -

对于下表中的每一类，所标出的换元把被积函数变成有理函数。然后用除法和[部分分式分解](../partial-fraction-decomposition/)得到初等原函数。这里 $R$ 表示关于其自变量的有理表达式。根指数都是正整数。在第二行中，$\alpha\delta-\beta\gamma\neq0$；在指数函数那一行中，$a\neq0$。

[class="table-1"]

|                                                       |                                                              |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| $$\int R\left(x, \sqrt[n_1]{x}, \ldots, \sqrt[n_r]{x}\right) \ dx$$ | $$x = t^{\mu}, \quad \mu = \mathrm{lcm}(n_1, \ldots, n_r)$$ |
| $$\int R\left(x, \sqrt[n]{\frac{\alpha x + \beta}{\gamma x + \delta}}\right) \ dx$$ | $$\frac{\alpha x + \beta}{\gamma x + \delta} = t^n$$ |
| $$\int R\left(e^{ax}\right) \ dx$$                  | $$t = e^{ax}$$                                               |
| $$\int R(\cos x)\sin x \ dx$$                         | $$t = \cos x$$                                               |
| $$\int R(\sin x)\cos x \ dx$$                         | $$t = \sin x$$                                               |
| $$\int R\left(\sin^2 x, \cos^2 x, \tan x\right) \ dx$$ | $$t = \tan x$$                                              |
| $$\int R(\sin x, \cos x) \ dx$$                       | $$t = \tan\frac{x}{2}$$                                      |

[/class]

最后两行的适用范围不同。[魏尔斯特拉斯换元](../the-weierstrass-substitution/) $t=\tan\frac{x}{2}$ 把关于 $\sin x$ 和 $\cos x$ 的每个有理表达式都有理化，但可能产生高次的分母。当正弦和余弦只以偶次幂或通过正切出现时，$t=\tan x$ 给出次数更低的有理函数。所需的恒等式是：

$$\sin^2 x = \frac{t^2}{1+t^2} \qquad \cos^2 x = \frac{1}{1+t^2} \qquad dx = \frac{dt}{1+t^2}$$

它们把下面的积分化为有理函数的积分：

$$\int \frac{dx}{1+\sin^2 x}$$

$$
\begin{align}
\int \frac{dx}{1+\sin^2 x} &= \int \frac{1}{1 + \frac{t^2}{1+t^2}} \cdot \frac{dt}{1+t^2} \\[6pt]
&= \int \frac{dt}{1+2t^2} \\[6pt]
&= \frac{1}{\sqrt{2}}\arctan\left(\sqrt{2}t\right) + c \\[6pt]
&= \frac{1}{\sqrt{2}}\arctan\left(\sqrt{2}\tan x\right) + c
\end{align}
$$

在 $\tan x$ 连续的每个区间上，原函数是：

$$\frac{1}{\sqrt{2}}\arctan(\sqrt{2}\tan x)+c.$$

> 最后这个公式是局部的，因为 $\tan x$ 在 $x=\frac{\pi}{2}+k\pi$（$k\in\mathbb{Z}$）处没有定义。原被积函数在这些点处有定义，所以必须选取相邻区间上的常数，使各个局部的原函数越过这些点时衔接起来。对于含有 $\sqrt{ax^2+bx+c}$ 的被积函数，欧拉换元给出有理形式，而[三角换元](../trigonometric-substitution-for-integrals/)往往更简单。

## 分部积分

当乘积没有明显的复合导数形式时，[分部积分法](../integration-by-parts/)往往合适。它的公式把导数从一个因子转移到另一个因子上：

$$\int f(x)g'(x) \ dx = f(x)g(x) - \int f'(x)g(x) \ dx + c$$

用紧凑的记号，令 $u=f(x)$ 和 $dv=g'(x) \ dx$：

$$\int u \ dv = uv - \int v \ du + c$$

这个公式是[乘积法则](../differentiation-rules/)的变形。选作 $u$ 的因子求导后应当变得更简单，选作 $dv$ 的因子应当有已知的原函数。专页中讨论的 LIATE 顺序是选取 $u$ 的经验法则。它依次优先考虑对数、反三角、代数、三角和指数因子。

- - -

只有一个因子的被积函数也是与常数 $1$ 的乘积。对于 $\arctan x$，取 $u=\arctan x$ 和 $dv=dx$：

$$\int \arctan x \ dx$$

$$u = \arctan x \qquad du = \frac{dx}{1+x^2} \qquad dv = dx \qquad v = x$$

$$
\begin{align}
\int \arctan x \ dx &= x\arctan x - \int \frac{x}{1+x^2} \ dx \\[6pt]
&= x\arctan x - \frac{1}{2}\int \frac{2x}{1+x^2} \ dx \\[6pt]
&= x\arctan x - \frac{1}{2}\ln(1+x^2) + c
\end{align}
$$

原函数是 $x\arctan x-\frac{1}{2}\ln(1+x^2)+c$。

> 选取 $dv=dx$ 的做法也适用于 $\ln x$ 和其他反三角函数。最后的对数没有绝对值，因为对每个实数 $x$ 都有 $1+x^2>0$。

- - -

有些积分需要先换元再分部积分。这里换元消去自变量中的平方根，分部积分处理所得的乘积：

$$\int \sin\sqrt{x} \ dx$$

$$t = \sqrt{x} \qquad x = t^2 \qquad dx = 2t \ dt$$

$$
\begin{align}
\int \sin\sqrt{x} \ dx &= 2\int t\sin t \ dt \\[6pt]
&= 2\left(-t\cos t + \int \cos t \ dt\right) \\[6pt]
&= 2\left(-t\cos t + \sin t\right) + c \\[12pt]
&= 2\sin\sqrt{x} - 2\sqrt{x}\cos\sqrt{x} + c
\end{align}
$$

把 $t$ 换成 $\sqrt{x}$ 之后，原函数是 $2\sin\sqrt{x}-2\sqrt{x}\cos\sqrt{x}+c$。

> 在第二行中，$u=t$，$dv=\sin t \ dt$，所以 $du=dt$，$v=-\cos t$。剩下的积分是基本原函数。

- - -

对于多项式与指数函数、正弦或余弦的乘积，反复的分部积分可以记录在一张表里。对多项式求导直到它变为零，对另一个因子反复积分，并把各个乘积按交错的符号组合起来。对于 $\int x^3e^x \ dx$，这张表是：

| 符号 | $x^3$ 的导数 | $e^x$ 的原函数 |
| ---- | ------------------- | ----------------------- |
| $+$  | $x^3$               | $e^x$                   |
| $-$  | $3x^2$              | $e^x$                   |
| $+$  | $6x$                | $e^x$                   |
| $-$  | $6$                 | $e^x$                   |

下一个导数是 $0$，所以列表的过程在含有 $6$ 的那一行之后停止。把四行组合起来，得到：

$$\int x^3e^x \ dx=e^x(x^3-3x^2+6x-6)+c$$

这张表是四次分部积分的简写。对于 $J_n=\int x^ne^{ax} \ dx$（$n\geq1$ 是整数），同样的计算有[递推公式](../reduction-formulas/)：

$$J_n=\frac{x^ne^{ax}}{a}-\frac{n}{a}J_{n-1}+c \qquad a\neq0$$

每应用一次，多项式的次数就降低一，所以这个过程在 $J_0$ 处结束。

- - -

当导数循环出现时，反复的分部积分会回到原积分。暂时略去任意常数，令 $I$ 等于这个积分：

$$I=\int e^x\cos x \ dx$$

应用两次就回到原积分：

$$
\begin{align}
I &= e^x\sin x-\int e^x\sin x \ dx \\[6pt]
  &= e^x\sin x+e^x\cos x-I
\end{align}
$$

把 $I$ 的两次出现合并，并恢复任意常数，得到：

$$I=\frac{e^x(\sin x+\cos x)}{2}+c$$

只要反复求导会回到原来的因子，这种循环的计算就行得通。把积分的各次出现合并到一边之后，它们的总系数必须不为零。如果它们相互抵消，计算给出的是一个恒等式，而不是原函数。

## 二次分母

经过[多项式除法](../polynomial-division/)，分母为二次式的有理函数的分子次数至多为一。把这个分子写成分母的导数的倍数加上一个常数。第一部分给出一个对数项。对于常数部分，把分母写成 $ax^2+bx+c$，其中 $a\neq0$。它的判别式 $\Delta=b^2-4ac$ 决定了原函数。由于把分子和分母同乘以 $-1$ 不改变分式，可以假设 $a>0$。不同的[实根](../roots-of-a-polynomial/)给出对数，重根给出负幂，没有实根的二次式给出反正切。

当 $\Delta>0$ 时，分母有两个不同的一次因式，[部分分式分解](../partial-fraction-decomposition/)给出两个对数项。对于分母 $x^2-x-6=(x-3)(x+2)$，有：

$$\int \frac{x+5}{x^2-x-6} \ dx$$

$$\frac{x+5}{(x-3)(x+2)} = \frac{A}{x-3} + \frac{B}{x+2} \qquad A = \frac{8}{5}, \quad B = -\frac{3}{5}$$

$$
\begin{align}
\int \frac{x+5}{x^2-x-6} \ dx &= \frac{8}{5}\int \frac{dx}{x-3} - \frac{3}{5}\int \frac{dx}{x+2} \\[6pt]
&= \frac{8}{5}\ln|x-3| - \frac{3}{5}\ln|x+2| + c
\end{align}
$$

原函数是 $\frac{8}{5}\ln|x-3|-\frac{3}{5}\ln|x+2|+c$。

- - -

当 $\Delta=0$ 时，分母具有 $a(x-x_0)^2$ 的形式。换元 $u=x-x_0$ 把分式拆成一项 $\alpha/u$ 和一项 $\beta/u^2$。对于分母 $(x+3)^2$，令 $u=x+3$：

$$\int \frac{2x+5}{x^2+6x+9} \ dx$$

$$u = x+3 \qquad x = u-3 \qquad dx = du$$

$$
\begin{align}
\int \frac{2x+5}{x^2+6x+9} \ dx &= \int \frac{2u-1}{u^2} \ du \\[6pt]
&= 2\int \frac{du}{u} - \int u^{-2} \ du \\[6pt]
&= 2\ln|u| + \frac{1}{u} + c \\[6pt]
&= 2\ln|x+3| + \frac{1}{x+3} + c
\end{align}
$$

两项合起来给出 $2\ln|x+3|+\frac{1}{x+3}+c$。

- - -

当 $\Delta<0$ 时，分母没有实的一次因式。[配方](../completing-the-square/)得到一个平方的正数倍加上一个正常数，它的倒数以[反正切](../arctangent-and-arccotangent/)为原函数。对于 $x^2+4x+13$，配方的结果是 $(x+2)^2+9$：

$$\int \frac{dx}{x^2+4x+13}$$

$$
\begin{align}
\int \frac{dx}{x^2+4x+13} &= \int \frac{dx}{(x+2)^2 + 9} \\[6pt]
&= \frac{1}{9}\int \frac{dx}{\left(\frac{x+2}{3}\right)^2 + 1} \\[6pt]
&= \frac{1}{9} \cdot 3\int \frac{du}{u^2+1} \qquad u = \frac{x+2}{3} \\[6pt]
&= \frac{1}{3}\arctan\frac{x+2}{3} + c
\end{align}
$$

原函数是 $\frac{1}{3}\arctan\frac{x+2}{3}+c$。

- - -

对于一次的分子，把它分解为分母的导数的倍数和一个常数。对于分母 $x^2+2x+5$，写出 $x=\frac{1}{2}(2x+2)-1$：

$$\int \frac{x}{x^2+2x+5} \ dx$$

$$(x^2+2x+5)' = 2x+2 \qquad x = \frac{1}{2}(2x+2) - 1$$

$$
\begin{align}
\int \frac{x}{x^2+2x+5} \ dx &= \frac{1}{2}\int \frac{2x+2}{x^2+2x+5} \ dx - \int \frac{dx}{(x+1)^2+4} \\[6pt]
&= \frac{1}{2}\ln(x^2+2x+5) - \frac{1}{2}\arctan\frac{x+1}{2} + c
\end{align}
$$

原函数是 $\frac{1}{2}\ln(x^2+2x+5)-\frac{1}{2}\arctan\frac{x+1}{2}+c$。

> 对数没有绝对值，因为满足 $\Delta<0$ 且首项系数为正的二次式对每个实数 $x$ 都为正。同样的分解适用于任何一次的分子。对照首项就确定了对数的系数，剩下的分子是常数。

- - -

配方之后，平方根下的二次式化为下列形式之一：

$$
\begin{align}
\int \frac{dx}{\sqrt{a^2-x^2}} &= \arcsin\frac{x}{a} + c \qquad a>0 \\[6pt]
\int \frac{dx}{\sqrt{x^2+k}} &= \ln\left|x + \sqrt{x^2+k}\right| + c \qquad k\neq 0
\end{align}
$$

这些公式在被积函数有定义的每个区间上成立。

对于 $5-4x-x^2=9-(x+2)^2$，适用第一个公式：

$$\int \frac{dx}{\sqrt{5-4x-x^2}}$$

$$
\begin{align}
\int \frac{dx}{\sqrt{5-4x-x^2}} &= \int \frac{dx}{\sqrt{9-(x+2)^2}} \\[6pt]
&= \arcsin\frac{x+2}{3} + c
\end{align}
$$

原函数是 $\arcsin\frac{x+2}{3}+c$。

> 这种根式上的一次分子有同样的分解。被开方式 $g(x)$ 的导数的倍数给出一项 $\int [g(x)]^{-1/2}g'(x) \ dx$，而剩下的分子是常数。如果这个分解不够用，[三角换元](../trigonometric-substitution-for-integrals/)是一种系统的方法。

## 代数化简与三角化简

其余的例子需要先作代数改写或三角改写，才会出现标准的原函数。

如果有理被积函数的分子次数不低于分母的次数，[多项式除法](../polynomial-division/)给出一个多项式和一个真分式。这里加上再减去 $1$ 就直接完成了除法：

$$\int \frac{x^2}{x^2+1} \ dx$$

$$
\begin{align}
\int \frac{x^2}{x^2+1} \ dx &= \int \frac{x^2 + 1 - 1}{x^2+1} \ dx \\[6pt]
&= \int \left(1 - \frac{1}{x^2+1}\right) \ dx \\[6pt]
&= x - \arctan x + c
\end{align}
$$

这个分解给出原函数 $x-\arctan x+c$。

- - -

把分子和分母同乘以共轭式，得到的表达式可能可以用[勾股恒等式](../pythagorean-identity/)化简。对于分母 $1+\sin x$，使用共轭式 $1-\sin x$：

$$\int \frac{dx}{1+\sin x}$$

$$
\begin{align}
\int \frac{dx}{1+\sin x} &= \int \frac{1-\sin x}{(1+\sin x)(1-\sin x)} \ dx \\[6pt]
&= \int \frac{1-\sin x}{1-\sin^2 x} \ dx \\[6pt]
&= \int \frac{1-\sin x}{\cos^2 x} \ dx \\[6pt]
&= \int \frac{dx}{\cos^2 x} - \int \frac{\sin x}{\cos^2 x} \ dx \\[6pt]
&= \tan x - \frac{1}{\cos x} + c \\[6pt]
&= -\frac{\cos x}{1+\sin x} + c
\end{align}
$$

在被积函数有定义的每个区间上，原函数是 $-\frac{\cos x}{1+\sin x}+c$。中间的改写假设 $\cos x\neq 0$，但最后的表达式可以延拓到 $\sin x=1$ 的那些点处。

> 第四行中的第一个积分是 $\tan x$。第二个使用复合幂函数的积分公式，其中 $f(x)=\cos x$，$n=-2$，因为 $\int (\cos x)^{-2}\sin x \ dx=-\int (\cos x)^{-2}(\cos x)' \ dx=(\cos x)^{-1}$。对于 $\sec x$，把分子和分母同乘以 $\sec x+\tan x$，得到 $\int \sec x \ dx=\ln|\sec x+\tan x|+c$。

- - -

共轭式还可以消去分母中根式的和或差。下面的分母与它的共轭式的乘积等于 $1$：

$$\left(\sqrt{x+1}+\sqrt{x}\right)\left(\sqrt{x+1}-\sqrt{x}\right)=1$$

因此乘以共轭式就消去了分母：

$$
\begin{align}
\int\frac{dx}{\sqrt{x+1}+\sqrt{x}} &= \int\left(\sqrt{x+1}-\sqrt{x}\right) \ dx \\[6pt]
&= \frac{2}{3}(x+1)^{3/2}-\frac{2}{3}x^{3/2}+c
\end{align}
$$

这个公式对 $x\geq0$ 成立，这是被积函数的实定义域。

- - -

对于正弦或余弦的奇次幂，分出一个因子，并用 $\sin^2 x+\cos^2 x=1$ 改写剩下的偶次幂。对于 $\sin^3 x$，这样得到：

$$\int \sin^3 x \ dx$$

$$
\begin{align}
\int \sin^3 x \ dx &= \int (1-\cos^2 x)\sin x \ dx \\[6pt]
&= \int \sin x \ dx - \int \cos^2 x \sin x \ dx \\[6pt]
&= -\cos x + \frac{\cos^3 x}{3} + c
\end{align}
$$

原函数是 $-\cos x+\frac{\cos^3 x}{3}+c$。

[积化和差公式](../trigonometric-identities/)把角不同的正弦与余弦的乘积变成和。把 $\sin(\alpha)\cos(\beta)=\frac{1}{2}[\sin(\alpha+\beta)+\sin(\alpha-\beta)]$ 应用于 $\sin 3x\cos x$，得到：

$$\int \sin 3x \cos x \ dx$$

$$
\begin{align}
\int \sin 3x \cos x \ dx &= \frac{1}{2}\int \left(\sin 4x + \sin 2x\right) \ dx \\[6pt]
&= -\frac{\cos 4x}{8} - \frac{\cos 2x}{4} + c
\end{align}
$$

所得的两个正弦积分给出 $-\frac{\cos 4x}{8}-\frac{\cos 2x}{4}+c$。

- - -

对于单个正弦或余弦的偶次幂，勾股恒等式不能降低指数。降幂公式 $\cos^2 x=\frac{1+\cos 2x}{2}$ 给出：

$$
\begin{align}
\int \cos^2 x \ dx &= \frac{1}{2}\int (1 + \cos 2x) \ dx \\[6pt]
&= \frac{x}{2} + \frac{\sin 2x}{4} + c
\end{align}
$$

于是 $\int \cos^2 x \ dx=\frac{x}{2}+\frac{\sin 2x}{4}+c$。

上面的降幂恒等式直接处理平方。对于任意的整数指数 $n\geq2$，分部积分给出递推公式：

$$
\begin{align}
\int\sin^n x \ dx &= -\frac{\sin^{n-1}x\cos x}{n}+\frac{n-1}{n}\int\sin^{n-2}x \ dx+c \\[6pt]
\int\cos^n x \ dx &= \frac{\sin x\cos^{n-1}x}{n}+\frac{n-1}{n}\int\cos^{n-2}x \ dx+c
\end{align}
$$

每个递推式把指数降低二。当 $n$ 是偶数时，它以 $1$ 的积分结束；当 $n$ 是奇数时，它以 $\sin x$ 或 $\cos x$ 的积分结束。

- - -

对于乘积 $\tan^m x\sec^n x$（$m$ 和 $n$ 是非负整数），指数的奇偶性决定换元。如果 $n$ 是正偶数，留出一个因子 $\sec^2 x \ dx$，用 $\sec^2x=1+\tan^2x$ 改写剩下的正割幂，并令 $u=\tan x$。如果 $m$ 是奇数且 $n$ 为正，留出 $\sec x\tan x \ dx$，用 $\tan^2x=\sec^2x-1$ 改写剩下的正切幂，并令 $u=\sec x$。例如：

$$
\begin{align}
\int\tan^3x\sec x \ dx &= \int\tan^2x(\tan x\sec x) \ dx \\[6pt]
&= \int(u^2-1) \ du \qquad u=\sec x \\[6pt]
&= \frac{\sec^3x}{3}-\sec x+c
\end{align}
$$

余切和余割的幂的相应法则由 $\csc^2x=1+\cot^2x$、$(\cot x)'=-\csc^2x$ 和 $(\csc x)'=-\csc x\cot x$ 得出。

- - -

由于 $(e^xf(x))'=e^x[f(x)+f'(x)]$，由乘积法则得到：

$$\int e^x[f(x) + f'(x)] \ dx = e^x f(x) + c$$

取 $f(x)=\ln x$，这个恒等式变为：

$$\int e^x\left(\ln x + \frac{1}{x}\right) \ dx$$

$$
\begin{align}
\int e^x\left(\ln x + \frac{1}{x}\right) \ dx &= \int \left[e^x\ln x + e^x(\ln x)'\right] \ dx \\[6pt]
&= \int \left(e^x\ln x\right)' \ dx \\[6pt]
&= e^x\ln x + c
\end{align}
$$

原函数是 $e^x\ln x+c$。

当被积函数是 $e^{ax}P(x)$（$a\neq0$，$P$ 是非零多项式）时，它的原函数具有 $e^{ax}Q(x)$ 的形式，其中 $Q$ 与 $P$ 的次数相同。这个表达式的导数是：

$$\left(e^{ax}Q(x)\right)'=e^{ax}\left[Q'(x)+aQ(x)\right]$$

因此 $Q$ 的系数由多项式方程 $Q'+aQ=P$ 确定。考虑积分：

$$\int e^x(x^2+1) \ dx$$

令 $Q(x)=Ax^2+Bx+C$。它的导数给出：

$$Q+Q'=Ax^2+(B+2A)x+(C+B)$$

与 $x^2+1$ 比较，得到 $A=1$、$B=-2$ 和 $C=3$。原函数是：

$$\int e^x(x^2+1) \ dx=e^x(x^2-2x+3)+c$$

这种待定系数法与反复分部积分给出同样的结果，而不必写出中间的积分。

由商的求导法则得到类似的恒等式：

$$\int \frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2} \ dx=\frac{f(x)}{g(x)}+c$$

- - -

对于含有[绝对值](../absolute-value/)的被积函数，绝对值的零点把区间分成符号固定的若干部分。于是由[分段定义](../piecewise-functions/)可以在每一部分上分别去掉绝对值。例如，当 $x\leq1$ 时 $|x-1|=1-x$，当 $x\geq1$ 时 $|x-1|=x-1$，所以：

$$
\begin{align}
\int_{-1}^{2}|x-1| \ dx &= \int_{-1}^{1}(1-x) \ dx+\int_{1}^{2}(x-1) \ dx \\[6pt]
&= 2+\frac{1}{2} \\[6pt]
&= \frac{5}{2}
\end{align}
$$

拆分点是绝对值号内各表达式的零点；有多个因子时，必须先把所有这些零点排好顺序，再拆分积分。

- - -

对于[定积分](../definite-integrals/)，对称性可能不需要原函数就确定积分的值。[奇函数](../even-and-odd-functions/)在关于原点对称的区间上的积分为零。例如：

$$\int_{-1}^{1} \frac{x^3\cos x}{1+x^2} \ dx = 0$$

分子是奇函数，分母是偶函数，所以被积函数是奇函数。对于偶的被积函数，$[-1,1]$ 上的积分是 $[0,1]$ 上积分的两倍。

- - -

对于 $[a,b]$ 上的可积函数 $f$，换元 $x=a+b-t$ 把端点对调，在给积分变量改名之后得到：

$$
\begin{align}
\int_a^b f(x) \ dx &= \int_a^b f(a+b-x) \ dx \\[6pt]
&= \frac{1}{2}\int_a^b\left[f(x)+f(a+b-x)\right] \ dx
\end{align}
$$

当两项相加后可以化简时，第二行中的平均就很有用。例如，定义积分：

$$I=\int_0^1\frac{x}{x^2+(1-x)^2} \ dx$$

关于 $x=1/2$ 的反射把分子 $x$ 换成 $1-x$，而分母不变。把两种形式相加，得到：

$$
\begin{align}
2I &= \int_0^1\frac{dx}{x^2+(1-x)^2} \\[6pt]
   &= \left[\arctan(2x-1)\right]_0^1 \\[6pt]
   &= \frac{\pi}{2}
\end{align}
$$

因此 $I=\pi/4$。

- - -

对于 $(0,+\infty)$ 上的[反常积分](../improper-integrals/)，倒数换元 $x=1/t$ 满足 $dx=-dt/t^2$，并把端点对调。恢复端点的顺序，只要积分收敛，就得到：

$$\int_0^{+\infty}f(x) \ dx=\int_0^{+\infty}\frac{f(1/x)}{x^2} \ dx$$

当 $f(1/x)/x^2$ 等于 $f(x)$ 或 $-f(x)$，或者两个表达式的和更简单时，这个恒等式很有用。考虑绝对收敛的积分：

$$I=\int_0^{+\infty}\frac{\ln x}{1+x^2} \ dx$$

倒数换元给出：

$$
\begin{align}
I &= \int_0^{+\infty}\frac{\ln(1/x)}{1+1/x^2}\frac{dx}{x^2} \\[6pt]
  &= -\int_0^{+\infty}\frac{\ln x}{1+x^2} \ dx \\[12pt]
  &= -I
\end{align}
$$

这个积分绝对收敛，所以由 $I=-I$ 得到 $I=0$。

- - -

对称性还可以用来比较一对定积分。如果两个积分相等，并且它们的和是初等的，那么每一个都是和的一半。由换元 $x=t+\frac{\pi}{2}$ 和周期性得到：

$$\int_{0}^{2\pi} \sin^2 x \ dx = \int_{0}^{2\pi} \cos^2 x \ dx$$

它们的和由勾股恒等式确定：

$$\int_{0}^{2\pi} \left(\sin^2 x + \cos^2 x\right) \ dx = \int_{0}^{2\pi} dx = 2\pi$$

两个相等的积分之和为 $2\pi$，所以每一个都等于 $\pi$。在两个积分不相等的区间上，降幂公式分别给出它们的值。

## 选择积分方法

对于不熟悉的被积函数，按顺序作下面这些检查。如果被积函数已经符合后面的某种情形，就从那种情形开始。

+ 化简被积函数。当展开乘积和平方能露出标准项时就展开，作多项式除法，拆分分式，应用[三角恒等式](../trigonometric-identities/)，把根式写成幂，当共轭式能消去根式或化简分母时使用共轭式。对于绝对值，在其自变量变号的每一点处拆分区间。
+ 查表。如果被积函数是表中的一项，自变量可以是一次式 $\alpha x+\beta$（$\alpha\neq0$），就直接写出答案并除以 $\alpha$。
+ 寻找内层函数连同它的导数。复合形式包括 $f$ 的幂乘以 $f'$、商 $f'/f$，以及指数函数和三角函数的类似形式。缺少的常数因子由线性性质补上。
+ 尝试换元。常见的选择是复合函数的自变量、根号下的表达式和分式的分母。所得的积分应当完全用新变量表示，并且比原来的简单。
+ 对于有理的被积函数，如果分子次数不低于分母次数，就先作除法。分母为二次式时，计算 $\Delta$ 并按相应的情形处理；分母次数更高时，把它因式分解，并应用[部分分式分解](../partial-fraction-decomposition/)。
+ 对于正弦和余弦的幂，先利用奇偶性，指数仍然很高时使用递推公式。对于正切与正割的乘积，正割的指数为偶数时留出 $\sec^2x \ dx$，正切的指数为奇数且有正割因子时留出 $\sec x\tan x \ dx$。
+ 对于不同类型的因子的乘积，应用[分部积分法](../integration-by-parts/)，按 LIATE 经验法则选取 $u$。当多项式被反复求导时使用列表形式。如果原积分重新出现，就合并它的各次出现，并解所得的一次方程。
+ 对于 $\ln x$ 或反三角函数这样的单个因子，取 $dv=dx$ 作分部积分。
+ 对于被积函数 $e^{ax}P(x)$（$a\neq0$，$P$ 是非零多项式），寻找多项式次数相同的原函数 $e^{ax}Q(x)$，并由 $Q'+aQ=P$ 确定系数。
+ 对于形如 $\sqrt{a^2-x^2}$、$\sqrt{a^2+x^2}$ 或 $\sqrt{x^2-a^2}$ 的根式，使用[三角换元](../trigonometric-substitution-for-integrals/)。对于有理化换元表中的其他各类，使用相应的换元，再对所得的有理函数积分。
+ 对于定积分，在求原函数之前先检验奇偶性、关于中点的反射和周期性。在 $(0,+\infty)$ 上，还要检验倒数换元 $x=1/t$。
+ 对结果求导。这项检查能发现符号错误、系数错误和用错的法则。

## 非初等原函数

初等函数不一定有初等的原函数。在这种情形下，由代数函数、指数函数、对数函数、三角函数、反三角函数及其复合构成的任何有限表达式，都没有所要求的导数。三个标准的例子是：

$$\int e^{-x^2} \ dx \qquad \int \frac{\sin x}{x} \ dx \qquad \int \frac{dx}{\ln x}$$

每个被积函数都在适当的区间上[连续](../continuous-functions/)，所以[微积分基本定理](../fundamental-theorem-of-calculus/)把一个原函数定义为积分函数。障碍在于初等的闭式。刘维尔关于有限形式积分的定理刻画了这种原函数可能具有的形式。

> 切比雪夫定理对一类积分给出了完整的判别标准。二项式微分 $\int x^q(a+bx^r)^s \ dx$（其中 $q$、$r$ 和 $s$ 是有理数，$a,b,r\neq 0$）有初等原函数，当且仅当 $s$、$\frac{q+1}{r}$ 和 $s+\frac{q+1}{r}$ 中至少有一个是整数。当其中一个数是整数时，一个换元把积分化为有理函数的积分。否则，原函数不是初等的。

- - -

即使没有初等原函数，定积分也可能存在，并且有可以算出的值。[数值积分](../numerical-integration/)给出近似值，[幂级数](../power-series/)可以逐项积分，而辅助参数有时能给出精确值。

对于正弦积分，把被积函数乘以 $e^{-bx}$，并定义积分族：

$$I(b) = \int_{0}^{+\infty} \frac{\sin x}{x}e^{-bx} \ dx \qquad b > 0$$

对 $b$ 求[偏导数](../partial-derivatives/)消去了因子 $1/x$，剩下的积分是初等的：

$$
\begin{align}
I'(b) &= \int_{0}^{+\infty} \frac{\partial}{\partial b}\left(\frac{\sin x}{x}e^{-bx}\right) \ dx \\[6pt]
&= -\int_{0}^{+\infty} e^{-bx}\sin x \ dx \\[6pt]
&= -\frac{1}{b^2+1}
\end{align}
$$

对 $b$ 积分得到 $I(b)=-\arctan b+k$。由于在 $(0,+\infty)$ 上 $|\sin x|\leq x$，估计 $|I(b)|\leq\int_{0}^{+\infty}e^{-bx} \ dx=1/b$ 成立。因此当 $b\to+\infty$ 时 $I(b)\to 0$，于是 $k=\frac{\pi}{2}$。再取 $b\to 0^+$ 的极限，得到：

$$\int_{0}^{+\infty} \frac{\sin x}{x} \ dx = \lim_{b \to 0^+} \left(\frac{\pi}{2} - \arctan b\right) = \frac{\pi}{2}$$

这两步运算都需要论证。在每条半直线 $b\geq b_0>0$ 上，对 $b$ 的导数被可积函数 $e^{-b_0x}$ 控制。对于极限 $b\to 0^+$，控制收敛定理在每个有限区间上适用。在剩下的尾部，[狄利克雷估计](../convergence-tests-for-improper-integrals/)对 $b\geq 0$ 是一致的，由此得到在 $b=0$ 处的连续性。$b=0$ 处的积分只是条件收敛的。

因子 $e^{-bx}$ 之所以管用，是因为对 $b$ 求导消去了 $1/x$，而指数衰减在 $b>0$ 时控制住了反常积分。参数方法需要一个导数比原被积函数更简单的积分族，所以它不如前面的各种策略那样有章可循。
