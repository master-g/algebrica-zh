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
  source_hash: ddeb0c13c59d1682efb642e0a577f99f64f6a8138053924e603d76cf22da765e
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 换元如何简化积分

换元积分通过改变积分变量来简化[积分](../indefinite-integrals/)。如果 $F' = f$，换元 $u = g(x)$ 给出：

$$\int f(g(x))g'(x) \ dx = F(g(x)) + c$$

该过程包含四步：

+ 令 $u = g(x)$，根据被积函数的结构选择 $g(x)$。
+ 求导得到 $du = g'(x) \ dx$。
+ 将每个因子和微分都改写为关于 $u$ 的形式。
+ 关于 $u$ 积分。对于不定积分，将 $u$ 换回 $g(x)$；对于定积分，使用以 $u$ 表示的上下限。

> 换元积分是[链式法则](../the-derivative-of-a-composite-function/)的逆过程。内函数及其导数决定变量替换。

- - -

换元法则来自[导数](../derivatives/)的链式法则。如果 $F(x) = H(g(x))$，链式法则给出：

$$F'(x) = H'(g(x)) g'(x)$$

因此，形如 $H'(g(x))g'(x)$ 的被积函数是复合函数 $H(g(x))$ 的导数。令 $u = g(x)$，其反导数为：

$$\int H'(u) \ du = H(u) + c$$

## 识别何时使用换元

当被积函数包含[复合函数](../composite-functions/)，并且还包含与其内函数导数成比例的因子时，换元很有用。基本模式为：

$$f(g(x)) g'(x)$$

被积函数可以只与该模式相差一个常数因子。换元 $u = g(x)$ 用 $u$ 替换 $g(x)$，并用 $du$ 替换 $g'(x) \ dx$。$(ax + b)^n$、$\sqrt{ax + b}$、$\ln(ax + b)$ 和 $e^{ax + b}$ 等表达式提示将内部线性函数 $ax + b$ 作为新变量。有理表达式可能具有如下形式：

$$\frac{g'(x)}{g(x)}$$

如果分子只与 $g'(x)$ 相差常数因子，就令 $u = g(x)$。

> 选择一个内表达式，使其导数在被积函数的其他位置出现，完全相同或只相差非零常数因子。完整换元后，变换所得积分中不再出现原变量。

## 换元模式

下表列出常见被积函数模式及对应的适当换元：

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

令 $u = 2x + 1$，将三次表达式替换为 $u^3$。求导得：

$$du = 2 \ dx$$

该关系等价于：

$$dx = \frac{du}{2}$$

换元后的积分为：

$$\int \frac{u^3}{2} \ du = \frac{1}{2}\int u^3 \ du$$

幂法则给出：

$$\frac{1}{2}\left(\frac{u^4}{4}\right) + c = \frac{u^4}{8} + c$$

用 $2x + 1$ 替换 $u$，得：

$$\int (2x + 1)^3 \ dx = \frac{1}{8}(2x + 1)^4 + c$$

## 例 2

计算如下积分：

$$\int \frac{1}{3x - 5} \ dx$$

令 $u = 3x - 5$，将分母替换为 $u$。求导得：

$$du = 3 \ dx$$

该关系等价于：

$$dx = \frac{du}{3}$$

换元后的积分为：

$$\int \frac{1}{3u} \ du = \frac{1}{3}\int \frac{du}{u}$$

对数公式给出：

$$\frac{1}{3}\ln|u| + c$$

用 $3x - 5$ 替换 $u$，得：

$$\int \frac{1}{3x - 5} \ dx = \frac{1}{3}\ln|3x - 5| + c$$

## 例 3

计算如下积分：

$$\int x \sin(x^2) \ dx$$

内表达式 $x^2$ 的导数为 $2x$，因此被积函数包含其微分的一半。令 $u = x^2$，则：

$$du = 2x \ dx \qquad x \ dx = \frac{1}{2} \ du$$

换元得到：

$$\int x\sin(x^2) \ dx = \frac{1}{2}\int \sin u \ du$$

变换后的反导数为：

$$\frac{1}{2}\int \sin u \ du = -\frac{1}{2}\cos u + c$$

用 $x^2$ 替换 $u$，得：

$$\int x\sin(x^2) \ dx = -\frac{1}{2}\cos(x^2) + c$$

## 例 4

在 $\sin x > 0$ 的开区间上，计算如下积分：

$$\int \cos x \sqrt{\sin x} \ dx$$

换元 $u = \sin x$ 将根式替换为 $\sqrt{u}$。其微分为：

$$du = \cos x \ dx$$

换元后的积分为：

$$\int \sqrt{u} \ du = \int u^{1/2} \ du$$

幂法则给出：

$$\int u^{1/2} \ du = \frac{u^{3/2}}{3/2} = \frac{2}{3} u^{3/2} + c$$

用 $\sin x$ 替换 $u$，得：

$$\int \cos x\sqrt{\sin x} \ dx = \frac{2}{3}(\sin x)^{3/2} + c$$

## 三角换元

对于含有 $a^2 - x^2$、$a^2 + x^2$ 或 $x^2 - a^2$ 的根式，且 $a > 0$ 时，三角换元很有用。相关公式来自[三角恒等式](../pythagorean-identity/)：

$$\sin^2 x + \cos^2 x = 1$$

该恒等式具有以下等价形式：

$$
\begin{align}
\cos^2 x &= 1 - \sin^2 x \\[6pt]
\sec^2 x &= 1 + \tan^2 x \\[6pt]
\tan^2 x &= \sec^2 x - 1
\end{align}
$$

对于 $a > 0$，标准换元取决于根式下的表达式：

+ 对于 $a^2 - x^2$，令 $x = a\sin u$。
+ 对于 $a^2 + x^2$，令 $x = a\tan u$。
+ 对于 $x^2 - a^2$，令 $x = a\sec u$。

> [积分的三角换元](../trigonometric-substitution-for-integrals/)页面介绍几何依据并给出完整例题。

## 例 5

计算如下积分：

$$\int \frac{1}{\sqrt{9 - x^2}} \ dx$$

对于 $|x| < 3$，选择 $u \in (-\pi/2, \pi/2)$ 并令：

$$x = 3\sin u$$

微分为：

$$dx = 3\cos u \ du$$

换元后的分母为：

$$\sqrt{9 - x^2} = \sqrt{9 - 9\sin^2 u} = \sqrt{9(1 - \sin^2 u)}$$

在所选区间上 $\cos u > 0$。恒等式 $\sin^2 u + \cos^2 u = 1$ 给出：

$$\sqrt{9(1 - \sin^2 u)} = \sqrt{9\cos^2 u} = 3\lvert\cos u\rvert = 3\cos u$$

积分变为：

$$\int \frac{3\cos u \ du}{3\cos u} = \int \ du = u + c$$

由于 $u$ 位于[反正弦函数](../arcsine-function/)的主值区间，方程 $x = 3\sin u$ 蕴含：

$$u = \arcsin\left(\frac{x}{3}\right)$$

原变量下的反导数为：

$$\int \frac{1}{\sqrt{9 - x^2}} \ dx = \arcsin\left(\frac{x}{3}\right) + c$$

## 定积分的换元法则

如果在 $u$ 中计算变换后的[定积分](../definite-integrals/)，上下限必须是 $u$ 的取值。另一种方法是先在 $u$ 中求反导数，再把 $u$ 换回 $g(x)$，然后使用 $x$ 的原上下限。设 $g$ 在 $[a,b]$ 上连续可导，并且 $f$ 在包含 $g([a,b])$ 的区间上连续。在这些假设下，换元法则为：

$$\int_a^b f(g(x))g'(x) \ dx = \int_{g(a)}^{g(b)} f(u) \ du$$

- - -

计算如下定积分：

$$\int_{0}^{1} x\cos(x^2) \ dx$$

令 $u = x^2$，则：

$$du = 2x \ dx \qquad x \ dx = \frac{1}{2} \ du$$

变换后的端点为 $u(0) = 0$ 和 $u(1) = 1$。这里它们与原上下限在数值上相同。积分为：

$$\int_0^1 x\cos(x^2) \ dx = \frac{1}{2}\int_0^1 \cos u \ du$$

[微积分基本定理](../fundamental-theorem-of-calculus/)给出：

$$\frac{1}{2}\Bigl[\sin u\Bigr]_{0}^{1} = \frac{1}{2}(\sin 1 - \sin 0) = \frac{\sin 1}{2}$$

## 决策流程

以下步骤说明何时应用换元，以及如何完成换元。

+ 识别被积函数的结构。当它符合标准形式（幂函数、指数函数、对数函数或三角函数）时，使用[不定积分](../indefinite-integrals/)中的相应公式。
+ 检查直接换元后，如果根式含有 $a^2 - x^2$、$a^2 + x^2$ 或 $x^2 - a^2$，其中 $a > 0$，则考虑三角换元。标准选择分别为 $x = a\sin u$、$x = a\tan u$ 和 $x = a\sec u$。[积分的三角换元](../trigonometric-substitution-for-integrals/)页面给出完整步骤。
+ 当被积函数具有 $f(g(x))g'(x)$ 的形式时，令 $u = g(x)$，计算 $du = g'(x) \ dx$，将积分完全改写为关于 $u$ 的形式，并使用对应的标准公式。
+ 对于在 $u$ 中计算的定积分，将原上下限替换为 $g(a)$ 和 $g(b)$。如果先在 $x$ 中表示反导数，则保留原上下限。
+ 对于不定积分，用 $g(x)$ 替换 $u$，将反导数表示为关于 $x$ 的形式。
+ 对于两个函数的乘积，当求导会简化一个因子，而另一个因子的反导数容易计算时，可使用[分部积分](../integration-by-parts/)。[魏尔斯特拉斯换元](../weierstrass-substitution/)把 $\sin x$ 和 $\cos x$ 的每个有理函数转化为新变量的有理函数。

## 更多完整例题

下表按难度递增列出积分。每个解答前的句子指出被积函数中提示换元的特征。后面的例题还会变换上下限、改写代数因子或使用三角换元。

[class="table-1"]

|                                             |
| :------------------------------------------ |
| $\int \dfrac{dt}{(1 - 6t)^4}$               |
| $\int x^3(2 + x^4)^5 \ dx$                  |
| $\int \cos^3\theta\sin\theta \ d\theta$     |
| $\int \dfrac{2^{\ln x}}{x} \ dx$            |
| $\int_0^{\ln 4} \dfrac{e^t}{1 + 2e^t} \ dt$ |
| $\int_{\pi/4}^{\pi/3} \csc^2(5x) \ dx$      |
| $\int \dfrac{9x^3}{\sqrt{1 + x^2}} \ dx$    |
| $\int_0^1 \sqrt{4 - x^2} \ dx$              |
[/class]

分母是线性表达式 $1 - 6t$ 的幂，而该表达式的导数是常数。

$$u = 1 - 6t \qquad du = -6 \ dt$$

$$
\begin{align}
\int \frac{dt}{(1 - 6t)^4} &= -\frac{1}{6} \int u^{-4} \ du \\[6pt]
&= \frac{1}{18}u^{-3} + c \\[6pt]
&= \frac{1}{18(1 - 6t)^3} + c
\end{align}
$$

- - -

因子 $x^3$ 与内表达式 $2 + x^4$ 的导数成比例。

$$u = 2 + x^4 \qquad du = 4x^3 \ dx$$

$$
\begin{align}
\int x^3(2 + x^4)^5 \ dx &= \frac{1}{4} \int u^5 \ du \\[6pt]
&= \frac{u^6}{24} + c \\[6pt]
&= \frac{(2 + x^4)^6}{24} + c
\end{align}
$$

- - -

因子 $\sin\theta$ 是 $\cos\theta$ 的负导数。

$$u = \cos\theta \qquad du = -\sin\theta \ d\theta$$

$$
\begin{align}
\int \cos^3\theta\sin\theta \ d\theta &= -\int u^3 \ du \\[6pt]
&= -\frac{u^4}{4} + c \\[6pt]
&= -\frac{\cos^4\theta}{4} + c
\end{align}
$$

- - -

当 $x > 0$ 时，指数 $\ln x$ 的导数为 $1/x$，即被积函数中的另一个因子。

$$u = \ln x \qquad du = \frac{1}{x} \ dx$$

$$
\begin{align}
\int \frac{2^{\ln x}}{x} \ dx &= \int 2^u \ du \\[6pt]
&= \frac{2^u}{\ln 2} + c \\[6pt]
&= \frac{2^{\ln x}}{\ln 2} + c
\end{align}
$$

- - -

分母 $1 + 2e^t$ 的导数为 $2e^t$，是分子的两倍。变量和上下限一起变换。

$$u = 1 + 2e^t \qquad du = 2e^t \ dt$$

$$t = 0 \Longrightarrow u = 3 \qquad t = \ln 4 \Longrightarrow u = 9$$

$$
\begin{align}
\int_0^{\ln 4} \frac{e^t}{1 + 2e^t} \ dt &= \frac{1}{2} \int_3^9 \frac{1}{u} \ du \\[6pt]
&= \frac{1}{2}\Bigl[\ln u\Bigr]_3^9 \\[6pt]
&= \frac{1}{2}\ln 3
\end{align}
$$

- - -

线性自变量 $5x$ 的导数为常数。在积分 $\csc^2u$ 前先变换上下限。

$$u = 5x \qquad du = 5 \ dx$$

$$x = \frac{\pi}{4} \Longrightarrow u = \frac{5\pi}{4} \qquad x = \frac{\pi}{3} \Longrightarrow u = \frac{5\pi}{3}$$

$$
\begin{align}
\int_{\pi/4}^{\pi/3} \csc^2(5x) \ dx &= \frac{1}{5} \int_{5\pi/4}^{5\pi/3} \csc^2u \ du \\[6pt]
&= -\frac{1}{5}\Bigl[\cot u\Bigr]_{5\pi/4}^{5\pi/3} \\[6pt]
&= \frac{1}{5}\left[\cot\left(\frac{5\pi}{4}\right) - \cot\left(\frac{5\pi}{3}\right)\right] \\[6pt]
&= \frac{1}{5}\left(1 + \frac{\sqrt{3}}{3}\right)
\end{align}
$$

- - -

表达式 $1 + x^2$ 的导数为 $2x$。换元 $u = 1 + x^2$ 后，剩余因子为 $x^2 = u - 1$。

$$u = 1 + x^2 \qquad du = 2x \ dx \qquad x^2 = u - 1$$

$$
\begin{align}
\int \frac{9x^3}{\sqrt{1 + x^2}} \ dx &= \frac{9}{2} \int \frac{u - 1}{\sqrt{u}} \ du \\[6pt]
&= \frac{9}{2} \int \left(u^{1/2} - u^{-1/2}\right) \ du \\[6pt]
&= 3u^{3/2} - 9u^{1/2} + c \\[6pt]
&= 3(x^2 - 2)\sqrt{1 + x^2} + c
\end{align}
$$

- - -

根式具有 $\sqrt{a^2 - x^2}$ 的形式，因此令 $x = 2\sin\theta$。变换后的区间为 $[0, \pi/6]$，在该区间上 $\cos\theta \geq 0$。

$$x = 2\sin\theta \qquad dx = 2\cos\theta \ d\theta$$

$$x = 0 \Longrightarrow \theta = 0 \qquad x = 1 \Longrightarrow \theta = \frac{\pi}{6}$$

$$\sqrt{4 - x^2} = \sqrt{4 - 4\sin^2\theta} = \sqrt{4\cos^2\theta} = 2\cos\theta$$

$$
\begin{align}
\int_0^1 \sqrt{4 - x^2} \ dx &= 4 \int_0^{\pi/6} \cos^2\theta \ d\theta \\[6pt]
&= 2 \int_0^{\pi/6} \left(1 + \cos(2\theta)\right) \ d\theta \\[6pt]
&= \Bigl[2\theta + \sin(2\theta)\Bigr]_0^{\pi/6} \\[6pt]
&= \frac{\pi}{3} + \frac{\sqrt{3}}{2}
\end{align}
$$
