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
  source_hash: 61c34c76b52bf6690eea4e6f969130d2e2f11785d9046c5def79d25a15a572d5
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 化简积分

在实际问题中，我们经常遇到无法立即算出或一眼看出结果的积分。要把它们改写成更容易处理的形式，必须进行一系列变形。起初，找到正确的步骤顺序需要一些试错，但有了经验之后，我们会足够熟练，即使对乍看非常复杂的积分，也能一眼认出简化计算的策略。正如我在这个主题的各个条目中多次指出的，积分，至少是大学低年级遇到的那些积分，可以用相当机械的步骤算出，并不需要超常的抽象能力。它们首先需要的是大量练习，以及对标准原函数、其代数性质和主要积分方法的透彻掌握。

换元积分法（我们马上就要详细考察它）相当简单，因为它是链式法则的逆用。简单地说，这种方法通过适当的变量代换来化简原积分，一般适用于如下形式的积分：

$$\int f(g(x))g'(x) \ dx \tag{1}$$

假设 $F$ 是 $f$ 的一个原函数，即 $F' = f$。利用换元 $u = g(x)$，积分变为：

$$\int f(g(x))g'(x) \ dx = \int f(u) \ du = F(u) + c = F(g(x)) + c$$

这个过程可以整理为四个基本步骤：

+ 首先，令 $u = g(x)$，根据原积分的结构选取 $g(x)$。
+ 接着，对所选的函数求导，得到 $du = g'(x) \ dx$。
+ 这时，把所有因子和微分都用 $u$ 改写。
+ 最后，对 $u$ 积分；对于不定积分，再把 $u$ 换回 $g(x)$。

> 对于定积分，记得使用用 $u$ 重新表示的原积分限，后面专门讨论这种情形的一节会作说明。

- - -

如上所述，换元法来自导数的链式法则。对复合函数 $F(g(x))$ 应用链式法则，得到：

$$\frac{d}{dx}F(g(x)) = F'(g(x))g'(x) = f(g(x))g'(x)$$

因此被积函数 $f(g(x))g'(x)$ 是 $F(g(x))$ 的导数。令 $u = g(x)$，得到：

$$\int f(u) \ du = F(u) + c$$

把 $u$ 换回 $g(x)$，得到 $F(g(x)) + c$，与原公式一致。

- - -

怎样判断一个换元是否真正有用？要应用这种方法，必须认出 $(1)$ 中的模式，即被积函数中有一个[复合函数](../composite-functions/)，同时有一个与其内层函数的导数成比例的因子。

找出一个可能的内层函数 $g(x)$ 之后，计算 $g'(x)$，并把这个导数与被积函数中其余的因子作比较。因子 $g'(x)$ 不必原样出现；只要其中一个因子是它的非零常数倍就够了。常数提到积分号外，而换元 $u = g(x)$ 把 $g'(x) \ dx$ 变为 $du$。

例如，考虑下面几类表达式：

$$(ax + b)^n \quad \quad \sqrt{ax + b}$$
$$\ln(ax + b) \quad \quad e^{ax + b}$$

在所有这些情形中，内层函数都是：

$$g(x) = ax + b$$

它的导数就是 $g'(x) = a$。由于这个导数是常数，即使因子 $a$ 没有明确出现在被积函数中，也可以应用换元 $u = ax + b$。事实上，当 $a \neq 0$ 时，由关系 $du = a \ dx$ 得到 $dx = \frac{1}{a} \ du$。

同样的判别标准适用于如下形式的有理表达式，其中内层函数在分母，它的导数在分子：

$$\frac{g'(x)}{g(x)}$$

如果分子与 $g'(x)$ 只相差一个非零常数因子，就令 $u = g(x)$。

- - -

下表总结了到目前为止讨论的常见模式和相应的换元：

[class="table-1"]

|                                  |              |
| -------------------------------- | ------------ |
| $$\int f(g(x))g'(x) \ dx$$       | $$u = g(x)$$ |
| $$\int (ax + b)^n \ dx$$         | $$u = ax + b$$ |
| $$\int e^{ax + b} \ dx$$         | $$u = ax + b$$ |
| $$\int \ln(ax + b) \ dx$$        | $$u = ax + b$$ |
| $$\int \dfrac{g'(x)}{g(x)} \ dx$$ | $$u = g(x)$$ |

[/class]

从表中可以看出，出现的情形只有少数几种，稍加练习就能立刻认出它们。

## 例题

下面给出几个具体例子，说明这种方法在实际中如何运用。首先，考虑下面的积分：

$$\int (2x + 1)^3 \ dx$$

这个积分具有 $(ax+b)^n$ 的形式，所以只需令 $u = 2x + 1$，把三次表达式换成 $u^3$。对换元式求导得到 $du = 2 \ dx$，于是：

$$dx = \frac{du}{2}$$
因此变换后的积分为：

$$\int \frac{u^3}{2} \ du = \frac{1}{2}\int u^3 \ du$$

可以看到，积分已经化为初等形式，由幂函数的积分公式得到：

$$\frac{1}{2}\left(\frac{u^4}{4}\right) + c = \frac{u^4}{8} + c$$

不过，一定要记得把 $u$ 换回去，回到原变量。在这里，得到：

$$\int (2x + 1)^3 \ dx = \frac{1}{8}(2x + 1)^4 + c$$

- - -

现在考虑一个被积函数为有理式的例子：

$$\int \frac{1}{3x - 5} \ dx$$

如上所述，在这种情形下只需令 $u = 3x - 5$，求导得到 $du = 3 \ dx$。因此可以写出：

$$dx = \frac{du}{3}$$

变换后的积分变为：

$$\int \frac{1}{3u} \ du = \frac{1}{3}\int \frac{du}{u}$$

这是标准的对数积分，得到：

$$\frac{1}{3}\ln|u| + c$$

把 $u$ 换回 $3x - 5$，得到：

$$\int \frac{1}{3x - 5} \ dx = \frac{1}{3}\ln|3x - 5| + c$$

- - -

现在计算下面的积分：

$$\int x \sin(x^2) \ dx$$

内层表达式 $x^2$ 的导数是 $2x$。令 $u = x^2$，得到 $du = 2x \ dx$，于是：

$$\qquad x \ dx = \frac{1}{2} \ du$$

换元后得到：

$$\int x\sin(x^2) \ dx = \frac{1}{2}\int \sin u \ du$$

关于新变量的原函数为：

$$\frac{1}{2}\int \sin u \ du = -\frac{1}{2}\cos u + c$$

把 $u$ 换成 $x^2$，得到：

$$\int x\sin(x^2) \ dx = -\frac{1}{2}\cos(x^2) + c$$

- - -

最后，考虑下面的积分：

$$\int \cos x \sqrt{\sin x} \ dx$$

在这种情形下，令 $u = \sin x$，使根式变为 $\sqrt{u}$。于是新变量的微分为 $du = \cos x \ dx$，积分变为：

$$\int \sqrt{u} \ du = \int u^{1/2} \ du$$

这也是一个初等积分，同样由幂函数的积分公式得到：

$$\int u^{1/2} \ du = \frac{u^{3/2}}{3/2} = \frac{2}{3} u^{3/2} + c$$

把 $u$ 换成 $\sin x$，得到：

$$\int \cos x\sqrt{\sin x} \ dx = \frac{2}{3}(\sin x)^{3/2} + c$$

## 三角换元

除了上面考虑的换元之外，有时还需要使用三角换元。当积分含有形如 $a^2 - x^2$、$a^2 + x^2$ 和 $x^2 - a^2$ 的二次表达式的根式时，三角换元特别有用。

三角换元借助[勾股恒等式](../pythagorean-identity/)改写被开方式，使这些表达式变得容易处理：

$$\sin^2 x + \cos^2 x = 1$$

这个恒等式可以改写成下列等价形式：

$$
\begin{align}
\cos^2 x &= 1 - \sin^2 x \\[6pt]
\sec^2 x &= 1 + \tan^2 x \\[6pt]
\tan^2 x &= \sec^2 x - 1
\end{align}
$$

当 $a > 0$ 时，换元取决于根号下的表达式。每种换元都必须在这样的区间上使用：所选的三角函数在其上可逆，并且所得的每个因子符号固定。对于 $\sqrt{x^2 - a^2}$ 的情形，分支 $x \geq a$ 和 $x \leq -a$ 必须分别处理。区间的选取和绝对值的处理在[积分的三角换元](../trigonometric-substitution-for-integrals/)条目中说明。标准的换元总结如下：

[class="table-1"]

|                         |                  |
| ----------------------- | ---------------- |
| $$\sqrt{a^2 - x^2}$$   | $$x = a\sin u$$ |
| $$\sqrt{a^2 + x^2}$$   | $$x = a\tan u$$ |
| $$\sqrt{x^2 - a^2}$$   | $$x = a\sec u$$ |

[/class]

- - -

作为例子，计算下面的不定积分：

$$\int \frac{1}{\sqrt{9 - x^2}} \ dx$$

当 $|x| < 3$ 时，取 $u \in (-\pi/2, \pi/2)$，并令 $x = 3\sin u$。微分变为：

$$dx = 3\cos u \ du$$

换元之后，分母变为：

$$\sqrt{9 - x^2} = \sqrt{9 - 9\sin^2 u} = \sqrt{9(1 - \sin^2 u)}$$

在所选的区间上，$\cos u > 0$。由恒等式 $\sin^2 u + \cos^2 u = 1$ 得到：

$$\sqrt{9(1 - \sin^2 u)} = \sqrt{9\cos^2 u} = 3\lvert\cos u\rvert = 3\cos u$$

因此积分变为：

$$\int \frac{3\cos u \ du}{3\cos u} = \int \ du = u + c$$

由于 $u$ 落在[反正弦函数](../arcsine-function/)的主值范围内，等式 $x = 3\sin u$ 蕴含：

$$u = \arcsin\left(\frac{x}{3}\right)$$

因此用原变量表示的原函数为：

$$\int \frac{1}{\sqrt{9 - x^2}} \ dx = \arcsin\left(\frac{x}{3}\right) + c$$

## 定积分的换元法则

到目前为止，我们只考虑了不定积分。计算定积分时，还必须按所用的换元变换积分限。另一种做法是，求出关于 $u$ 的原函数，把 $u$ 换成 $g(x)$，再使用关于 $x$ 的原积分限。假设 $g$ 在 $[a,b]$ 上连续可导，$f$ 在包含 $g([a,b])$ 的某个区间上连续。在这些假设下，换元法则与 $(1)$ 类似，只是明确写出了积分限：

$$\int_a^b f(g(x))g'(x) \ dx = \int_{g(a)}^{g(b)} f(u) \ du$$

作为一个具体例子，计算下面的定积分：

$$\int_{2}^{3} x\cos(x^2) \ dx$$

令 $u = x^2$。两个微分之间的关系为：

$$du = 2x \ dx \qquad x \ dx = \frac{1}{2} \ du$$

用同一个换元变换积分限：

$$x = 2 \Longrightarrow u = 4 \qquad x = 3 \Longrightarrow u = 9$$

因此关于新变量的积分为：

$$\int_2^3 x\cos(x^2) \ dx = \frac{1}{2}\int_4^9 \cos u \ du$$

由[微积分基本定理](../fundamental-theorem-of-calculus/)得到：

$$\frac{1}{2}\Bigl[\sin u\Bigr]_{4}^{9} = \frac{1}{2}(\sin 9 - \sin 4)$$

于是积分的值为 $\frac{1}{2}(\sin 9 - \sin 4)$。

- - -

当被积函数是 $\sin x$ 和 $\cos x$ 的有理函数，且无法用三角恒等式或直接换元化简时，可以使用[魏尔斯特拉斯换元](../the-weierstrass-substitution/)。

## 更多完整例题

下表按难度递增的顺序列出各个积分。每个解答之前有一句话，指出被积函数中提示该换元的特征。在后面的例子中，解答还会变换积分限、改写代数因子，或使用三角换元。

[class="table-1"]

|                                                        |
| :----------------------------------------------------- |
| $$1 \quad \int \dfrac{dt}{(1 - 6t)^4}$$                |
| $$2. \quad \int x^3(2 + x^4)^5 \ dx$$                  |
| $$3. \quad \int \cos^3\theta\sin\theta \ d\theta$$     |
| $$4. \int \dfrac{2^{\ln x}}{x} \ dx$$                  |
| $$5. \quad \int_0^{\ln 4} \dfrac{e^t}{1 + 2e^t} \ dt$$ |
| $$6. \quad \int_{\pi/4}^{\pi/3} \csc^2(5x) \ dx$$      |
| $$7. \quad \int \dfrac{9x^3}{\sqrt{1 + x^2}} \ dx$$    |
| $$8. \quad \int_0^1 \sqrt{4 - x^2} \ dx$$              |
[/class]

从第一个积分开始。分母是一次表达式 $1 - 6t$ 的幂，它的导数是常数。令 $u = 1 - 6t$，于是 $du = -6 \ dt$。因此可以把积分改写为：

$$
\begin{align}
\int \frac{dt}{(1 - 6t)^4} &= -\frac{1}{6} \int u^{-4} \ du \\[6pt]
&= \frac{1}{18}u^{-3} + c \\[6pt]
&= \frac{1}{18(1 - 6t)^3} + c
\end{align}
$$

- - -

在第二个积分中，因子 $x^3$ 与内层表达式 $2 + x^4$ 的导数成比例。代入 $u = 2 + x^4$，得到 $du = 4x^3 \ dx$。因此积分可以改写为：

$$
\begin{align}
\int x^3(2 + x^4)^5 \ dx &= \frac{1}{4} \int u^5 \ du \\[6pt]
&= \frac{u^6}{24} + c \\[6pt]
&= \frac{(2 + x^4)^6}{24} + c
\end{align}
$$

- - -

对于第三个积分，注意因子 $\sin\theta$ 是 $\cos\theta$ 的导数的相反数。代入 $u = \cos\theta$，于是 $du = -\sin\theta \ d\theta$。变换后的积分变为：

$$
\begin{align}
\int \cos^3\theta\sin\theta \ d\theta &= -\int u^3 \ du \\[6pt]
&= -\frac{u^4}{4} + c \\[6pt]
&= -\frac{\cos^4\theta}{4} + c
\end{align}
$$

- - -

在第四个积分中，指数 $\ln x$ 的导数是 $1/x$，正是被积函数中的另一个因子。因此代入 $u = \ln x$，于是 $du = 1/x \ dx$。积分可以改写为：

$$
\begin{align}
\int \frac{2^{\ln x}}{x} \ dx &= \int 2^u \ du \\[6pt]
&= \frac{2^u}{\ln 2} + c \\[6pt]
&= \frac{2^{\ln x}}{\ln 2} + c
\end{align}
$$

- - -

现在考虑第五个积分。分母 $1 + 2e^t$ 的导数是 $2e^t$，是分子的两倍。由于这是定积分，除了变量之外还必须变换积分限。使用下面的换元：

$$u = 1 + 2e^t \qquad du = 2e^t \ dt$$

$$t = 0 \Longrightarrow u = 3 \qquad t = \ln 4 \Longrightarrow u = 9$$

因此积分可以改写为：

$$
\begin{align}
\int_0^{\ln 4} \frac{e^t}{1 + 2e^t} \ dt &= \frac{1}{2} \int_3^9 \frac{1}{u} \ du \\[6pt]
&= \frac{1}{2}\Bigl[\ln u\Bigr]_3^9 \\[6pt]
&= \frac{1}{2}\ln 3
\end{align}
$$

- - -

对于第六个积分，注意余割的自变量 $5x$ 的导数是常数。因此作下面的换元：

$$u = 5x \qquad du = 5 \ dx$$

$$x = \frac{\pi}{4} \Longrightarrow u = \frac{5\pi}{4} \qquad x = \frac{\pi}{3} \Longrightarrow u = \frac{5\pi}{3}$$

现在可以改写积分，并用变换后的积分限计算：

$$
\begin{align}
\int_{\pi/4}^{\pi/3} \csc^2(5x) \ dx &= \frac{1}{5} \int_{5\pi/4}^{5\pi/3} \csc^2u \ du \\[6pt]
&= -\frac{1}{5}\Bigl[\cot u\Bigr]_{5\pi/4}^{5\pi/3} \\[6pt]
&= \frac{1}{5}\left[\cot\left(\frac{5\pi}{4}\right) - \cot\left(\frac{5\pi}{3}\right)\right] \\[6pt]
&= \frac{1}{5}\left(1 + \frac{\sqrt{3}}{3}\right)
\end{align}
$$

- - -

在例 $7$ 中，根号下的表达式 $1 + x^2$ 的导数是 $2x$。作换元 $u = 1 + x^2$ 之后，剩下的因子是 $x^2 = u - 1$。

$$u = 1 + x^2 \qquad du = 2x \ dx \qquad x^2 = u - 1$$

因此积分变为：

$$
\begin{align}
\int \frac{9x^3}{\sqrt{1 + x^2}} \ dx &= \frac{9}{2} \int \frac{u - 1}{\sqrt{u}} \ du \\[6pt]
&= \frac{9}{2} \int \left(u^{1/2} - u^{-1/2}\right) \ du \\[6pt]
&= 3u^{3/2} - 9u^{1/2} + c \\[6pt]
&= 3(x^2 - 2)\sqrt{1 + x^2} + c
\end{align}
$$

- - -

最后一种情形中，根式具有 $\sqrt{a^2 - x^2}$ 的形式，所以令 $x = 2\sin\theta$，同时变换积分限。换元给出：

$$x = 2\sin\theta \qquad dx = 2\cos\theta \ d\theta$$

$$x = 0 \Longrightarrow \theta = 0 \qquad x = 1 \Longrightarrow \theta = \frac{\pi}{6}$$

$$\sqrt{4 - x^2} = \sqrt{4 - 4\sin^2\theta} = \sqrt{4\cos^2\theta} = 2\cos\theta$$

因此积分变为：

$$
\begin{align}
\int_0^1 \sqrt{4 - x^2} \ dx &= 4 \int_0^{\pi/6} \cos^2\theta \ d\theta \\[6pt]
&= 2 \int_0^{\pi/6} \left(1 + \cos(2\theta)\right) \ d\theta \\[6pt]
&= \Bigl[2\theta + \sin(2\theta)\Bigr]_0^{\pi/6} \\[6pt]
&= \frac{\pi}{3} + \frac{\sqrt{3}}{2}
\end{align}
$$
