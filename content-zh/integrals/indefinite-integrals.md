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
  source_hash: 22e3e2b89bdd478347fcba22ea4bff9da3d025b3409ab684b05c7b8c71fe5bbb
  translator: codex
  updated: "2026-08-11T00:00:00.000Z"
---
## 原函数

每个可导函数都有唯一的[导数](../derivatives/)。逆问题是判断给定函数 $f$ 是否为某个函数 $F$ 的导数。任意这样的 $F$ 都称为 $f$ 的原函数（或反导数）。设 $I$ 为开[区间](../intervals/)。如果可导函数 $F\colon I\to\mathbb{R}$ 满足：

$$F'(x) = f(x) \qquad \forall x \in I$$

则称它是 $f\colon I\to\mathbb{R}$ 的原函数。

并非每个函数在给定区间上都有原函数。[连续性](../continuous-functions/)是充分条件：开区间 $I$ 上的每个连续函数在 $I$ 上都有原函数。例如，$F(x)=x^3$ 是 $f(x)=3x^2$ 的原函数，因为：

$$\frac{d}{dx} x^3 = 3x^2$$

函数存在原函数并不要求它连续。下面的函数在 $\mathbb{R}$ 上可导：

$$
F(x) :=
\begin{cases}
x^2\sin(1/x) & x \neq 0 \\[6pt]
0 & x = 0
\end{cases}
$$

当 $x\neq0$ 时，其导数为 $F'(x)=2x\sin(1/x)-\cos(1/x)$。在原点处，导数为：

$$F'(0) = \lim_{h \to 0}\frac{h^2\sin(1/h)}{h} = \lim_{h \to 0}h\sin(1/h) = 0$$

因此，令 $f:=F'$，则 $F$ 是 $f$ 在 $\mathbb{R}$ 上的原函数；但 $f$ 在 $0$ 处不连续，因为当 $x\to0$ 时，$\cos(1/x)$ 不存在极限。

根据[达布定理](../darboux-theorem/)，每个导数都具有介值性质。因此，具有跳跃间断点的函数，例如[赫维赛德阶跃函数](../heaviside-function/)，在任何包含该间断点的开区间上都没有原函数。

- - -

与导数不同，原函数并不唯一。由于任意常数的导数都是零，$x^3$、$x^3+5$ 和 $x^3-\frac12$ 都是 $3x^2$ 的原函数。更一般地，如果 $F(x)$ 是 $f(x)$ 在区间 $I$ 上的一个原函数，那么对任意 $c\in\mathbb{R}$，$F(x)+c$ 也是原函数，因为：

$$\frac{d}{dx}[F(x) + c] = F'(x) = f(x)$$

反过来，同一函数在一个区间上的任意两个原函数只相差一个常数。如果 $F_1(x)$ 和 $F_2(x)$ 都是 $f(x)$ 在 $I$ 上的原函数，那么它们的差的导数为零：

$$\frac{d}{dx}[F_1(x) - F_2(x)] = F_1'(x) - F_2'(x) = f(x) - f(x) = 0$$

根据[拉格朗日定理](../lagrange-theorem/)，区间上导数为零的函数是常值函数。因此 $F_1(x)-F_2(x)=c$，其中 $c\in\mathbb{R}$。

## 什么是不定积分

设 $f$ 在开区间 $I$ 上有原函数 $F$。$f$ 在 $I$ 上的不定积分是它的所有原函数组成的族。这个函数族具有形式 $F(x)+c$，其中 $c\in\mathbb{R}$，记为：

$$\int f(x) \ dx = F(x) + c \qquad c \in \mathbb{R}$$

这个函数族中的每个函数的导数都是 $f$：

$$\frac{d}{dx}[F(x) + c] = f(x)$$

等价地，$F'$ 的积分是函数族 $F+c$：

$$\int F'(x) \ dx = F(x) + c \qquad c \in \mathbb{R}$$

[微积分基本定理](../fundamental-theorem-of-calculus/)把原函数与定积分联系起来。

- - -

求 $f(x)=3x$ 的原函数，且其图像经过点 $(2,1)$。每个原函数都具有形式：

$$F(x) = \int 3x \ dx = \frac{3}{2}x^2 + c$$

因为图像经过 $(2,1)$，常数必须满足 $F(2)=1$：

$$
\begin{align}
\frac{3}{2}(2)^2 + c &= 1 \\[6pt]
6 + c &= 1 \\[6pt]
c &= -5
\end{align}
$$

满足给定条件的唯一原函数为：

$$F(x) = \frac{3}{2}x^2 - 5$$

更一般地，设 $F_0$ 是 $f$ 在开区间 $I$ 上的一个原函数，并取 $x_0\in I$ 和 $y_0\in\mathbb{R}$。每个原函数都具有形式 $F_0+c$。条件 $F(x_0)=y_0$ 等价于 $c=y_0-F_0(x_0)$，所以恰有一个原函数具有指定值：

$$F(x) = F_0(x) + y_0 - F_0(x_0)$$

函数 $F_0+c$ 的图像都是 $F_0$ 图像的竖直平移。其中恰有一条图像经过指定点 $(x_0,y_0)$。

## 线性性质

设 $f$ 和 $g$ 在同一区间上的原函数分别为 $F$ 和 $G$。因为 $(F+G)'=f+g$，$f+g$ 的每个原函数都具有形式 $F+G+c$：

$$\int [f(x) + g(x)] \ dx = F(x) + G(x) + c \qquad c \in \mathbb{R} \tag{1}$$

对每个 $k\in\mathbb{R}$，恒等式 $(kF)'=kf$ 表明，$kf$ 的每个原函数都具有形式 $kF+c$：

$$\int kf(x) \ dx = kF(x) + c \qquad k, c \in \mathbb{R} \tag{2}$$

这些公式是不定积分的线性运算律。它们把线性组合的积分化为各项原函数的组合。

- - -

计算 $f(x) = 3x^2 + 2x$ 的积分。根据线性运算律，积分拆分为两项，而每一项都可以使用幂函数积分公式：

$$\int (3x^2 + 2x) \ dx = \int 3x^2 \ dx + \int 2x \ dx$$

两项的积分常数分别为 $c_1$ 和 $c_2$，两者之和仍是任意常数 $c$。因此：

$$\int (3x^2 + 2x) \ dx = x^3 + x^2 + c \qquad c \in \mathbb{R}$$

- - -

计算 $f(x)=5\sin(x)$ 的积分。因为 $5$ 是常数，性质 $(2)$ 给出：

$$\int 5\sin(x) \ dx = 5 \int \sin(x) \ dx$$

$\sin(x)$ 的一个原函数是 $-\cos(x)$，因此：

$$\int 5\sin(x) \ dx = -5\cos(x) + c \qquad c \in \mathbb{R}$$

## 幂函数的积分

对每个实指数 $a\neq-1$，[幂函数](../power-function/) $x^a$ 在 $(0,+\infty)$ 上的不定积分为：

$$\int x^a \ dx = \frac{x^{a+1}}{a+1} + c$$

当 $a=-1$ 时，分母为零，所以公式无定义。此时原函数是对数函数，需要使用单独公式。计算下列积分：

$$\int (3x^4 + 5x^2) \ dx$$

线性运算律与幂函数积分公式给出：

$$\int (3x^4 + 5x^2) \ dx = 3 \int x^4 \ dx + 5 \int x^2 \ dx = 3 \cdot \frac{x^5}{5} + 5 \cdot \frac{x^3}{3} + c$$

因此，积分为：

$$\int (3x^4 + 5x^2) \ dx = \frac{3}{5}x^5 + \frac{5}{3}x^3 + c \qquad c \in \mathbb{R}$$
- - -

对 $x>0$，计算下列积分：

$$\int \left(4x^3 - \frac{3}{\sqrt{x}} + 2\cos x\right) \ dx$$

应用线性性质，积分拆分为三项：

$$\int 4x^3 \ dx - \int 3x^{-1/2} \ dx + \int 2\cos x \ dx$$

由幂函数积分公式，$x^4$ 是 $4x^3$ 的原函数。当 $x>0$ 时，$1/\sqrt{x}=x^{-1/2}$，所以 $6\sqrt{x}$ 是 $3x^{-1/2}$ 的原函数。最后，$2\sin x$ 是 $2\cos x$ 的原函数。按符号组合三项：

$$\int \left(4x^3 - \frac{3}{\sqrt{x}} + 2\cos x\right) \ dx = x^4 - 6\sqrt{x} + 2\sin x + c$$

> 逐项对 $x^4 - 6\sqrt{x} + 2\sin x + c$ 求导，即可验证结果会返回原被积函数。

## 对数积分

当 $a=-1$ 时，幂函数积分公式的分母为零。在 $\mathbb{R}\setminus\{0\}$ 所含的每个开区间上，相应积分由[自然对数](../logarithms/)和[绝对值](../absolute-value/)给出：

$$\int \frac{1}{x} \ dx = \ln |x| + c$$

函数 $\ln|x|$ 对每个 $x\neq0$ 的导数都是 $1/x$。绝对值是必要的，因为 $\ln x$ 只在 $x>0$ 时有定义，而 $1/x$ 在 $x<0$ 时也有定义。

> 恒等式 $\int \frac{1}{x} \ dx = \ln|x| + c$ 分别在 $(-\infty, 0)$ 和 $(0, +\infty)$ 上成立。在每个区间上，任意常数可以取不同的值，因此 $1/x$ 在其完整定义域上的最一般反导数，不是只含一个常数的单一表达式 $\ln|x| + c$，而是在两个连通分支上各自带有独立常数的分段函数族。

## 基本积分法则

下表列出两个线性恒等式、$a\neq-1$ 时的幂函数积分公式，以及 $a=-1$ 时的对数情形。

[class="table-1"]

|                  |                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| 线性性           | $$\int (f(x) + g(x)) \ dx = F(x) + G(x) + c \qquad F'=f,\quad G'=g,\quad c \in \mathbb{R}$$ |
| 线性性           | $$\int kf(x) \ dx = kF(x) + c \qquad F'=f,\quad k,c \in \mathbb{R}$$                         |
| 幂函数积分公式   | $$\int x^a \ dx = \dfrac{x^{a+1}}{a+1} + c \qquad a \in \mathbb{R}\setminus\{-1\},\quad x > 0$$ |
| 对数情形         | $$\int \dfrac{1}{x} \ dx = \ln \lvert x \rvert + c$$                                          |
[/class]

## 常用积分

下表列出基本不定积分。每个右端的导数都是对应的被积函数。

[class="table-1 -right"]

|                                                     |                                                             |
| --------------------------------------------------- | ----------------------------------------------------------- |
| $$\int \frac{1}{x} \ dx = \ln \lvert x \lvert + c$$ | [更多](../integral-of-rational-functions/)       |
| $$\int a^x \ dx = \frac{a^x}{\ln a} + c \qquad a > 0,\quad a \neq 1$$ | [更多](../integral-of-the-exponential-function/) |
| $$\int \sin x \ dx = -\cos x + c$$                  | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \cos x \ dx = \sin x + c$$                   | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \frac{1}{\sin^2 x} \ dx = -\cot x + c$$      | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \frac{1}{\cos^2 x} \ dx = \tan x + c$$       | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \sec^2 x \ dx = \tan x + c$$                 | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \sec x \tan x \ dx = \sec x + c$$            | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \csc^2 x \ dx = -\cot x + c$$                | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \csc x \cot x \ dx = -\csc x + c$$           | [更多](../integral-of-trigonometric-functions/)  |
| $$\int \frac{1}{1 + x^2} \ dx = \arctan x + c$$     |                                                             |
| $$\int \frac{1}{\sqrt{1 - x^2}} \ dx = \arcsin x + c$$ |                                                          |

[/class]

[积分策略](../integration-strategies/)条目分析常见被积函数的结构，并说明如何在直接积分、换元积分、分部积分以及代数或三角化简之间选择。

> 上述恒等式在被积函数有定义且连续的任意区间上成立。[换元积分](../integration-by-substitution/)和[分部积分](../integration-by-parts/)适用于表外的一些积分，但两种方法都不能保证得到初等原函数。如果 $f$ 在 $[a,b]$ 上连续，$F$ 在 $[a,b]$ 上连续，并且对每个 $x\in(a,b)$ 都有 $F'(x)=f(x)$，则微积分基本定理给出 $\int_a^b f(x)\,dx=F(b)-F(a)$。这个[定积分](../definite-integrals/)是 $f$ 的图像与 $x$ 轴在 $[a,b]$ 上围成的净有向面积。
