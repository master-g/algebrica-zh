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
  source_hash: 046dcad1d408dd8f6c751bed0f19cd1ec218822106ae325fceadde809886de19
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 积分入门

积分在中学生和大学低年级学生中名声很差。学生初次接触积分时，会把它看作带有某种内在复杂性的数学对象，说得客气一点，是充满敌意的对象。
这话没错，至少部分没错。
例如，下面这个在区间 $[+\infty, -\infty]$ 上的[定积分](../definite-integrals/)称为高斯积分：

$$
\int_{-\infty}^{+\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

乍看之下，它似乎没什么可怕的，但任何试图用初等积分方法计算它的人都会一无所获。流传较广的说法是，高斯在三十岁左右解决了它，所以至少在这个年纪之前，求不出它的值是情有可原的。
另一个令人敬畏的积分是狄利克雷积分，它形式简单，却极难计算：

$$
\int_{0}^{\infty} \frac{\sin x}{x}\,dx = \frac{\pi}{2}
$$

幸运的是，我们大多数人并不角逐*菲尔兹奖*，抱负也更为平常。因此，我们在学习过程中遇到的积分，大部分是任何肯下功夫的学生都能解决的（除非不幸在途中碰上一位特别爱折磨人的教授）。

好消息是，这些积分中有很大一部分可以用机械的步骤加上一点直觉来计算，而这种直觉只能通过[大量练习](../learning-mathematics/)主要的积分法则以及能省去许多步骤的常用捷径来培养。

- - -

在接下来的段落中，我会给出积分的严格定义，特别是不定积分的定义；不定积分是本词条的主题，也是引入[定积分](../definite-integrals/)所必需的。不过，我想先做一段直观的铺垫，从求导的概念说起。后面讨论*原函数*时会看到，求导是积分的逆运算。

考虑一个简单的函数 $y=x^2$。它的图像是一条过原点的[抛物线](../parabola/)。由求导法则可知，它的导数是唯一的，等于 $y'=2x$，并且对 $x$ 的每个值，它给出图像在该点处切线的斜率。例如，当 $x=2$ 时得到 $y'(2)=2 \cdot 2 = 4$。这意味着抛物线在点 $(2,4)$ 处的切线的斜率恰好等于 $4$。

![图 1](/assets/integrals/svg/indefinite-integrals-1.zh.svg)

现在来看相反的情形：已知一个导数，例如 $y'=2x$，要求出它的原函数 $y$。既然已经看过相反方向的过程，即使手头没有任何积分法则，我们也可以通过类比断言它的原函数是 $y=x^2$。

问题在于，这个答案并不完整，因为少了一项。

函数 $y$ 只有一个导数 $y'$，而一个给定的导数却有无穷多个原函数，它们彼此相差一个常数 $c$。因此在 $y'=2x$ 的情形中，正确答案应当是 $y=x^2 + c$。原因很简单，但令人惊讶的是，有许多学生，甚至是有经验的学生，都无法立刻解释清楚。图像会让一切更明白。设想把 $y=x^2$ 的图像沿 y 轴平移，就会得到无穷多条形状相同的图像，它们对应的函数只在常数项上不同。

![图 1](/assets/integrals/svg/indefinite-integrals-2.zh.svg)

事实上，竖直平移丝毫不改变曲线的斜率。因此，函数 $y=x^2$、$y=x^2+1$、$y=x^2-3$，以及更一般地所有形如 $y=x^2+c$ 的函数，都有完全相同的导数 $y'=2x$。

正是这个简单的几何观察解释了为什么一个函数只有一个导数，而同一个函数却可以有无穷多个原函数，它们彼此都相差一个常数。

在结束这段铺垫之前，请记住下面这个基本区别：不定积分确定给定导数的原函数族，而定积分（另有专门的词条）计算曲线与 x 轴在给定区间内围成的面积。接下来的段落列出主要的原函数和积分的性质。很不幸，你必须把它们全部背下来（我是说每一个），这是正确完成后面那些更复杂积分的计算的必要条件。

最后留给你下面的费曼路径积分，它是量子力学和量子场论的基本工具之一。当然，它远远超出了我们的能力范围。

$$
\langle x_f,t_f \mid x_i,t_i\rangle
=
\int_{x(t_i)=x_i}^{x(t_f)=x_f}
\mathcal{D}x(t)\,
\exp\left(\frac{i}{\hbar}S[x(t)]\right)
$$

不过还是请记住它，哪怕只是作为对前方可能出现的东西的一个警示。


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
| 线性性           | $$\int (f(x) + g(x)) \ dx = F(x) + G(x) + c$$        |
| 线性性           | $$\int kf(x) \ dx = kF(x) + c$$                      |
| 幂函数积分公式   | $$\int x^a \ dx = \dfrac{x^{a+1}}{a+1} + c$$         |
| 对数情形         | $$\int \dfrac{1}{x} \ dx = \ln \lvert x \rvert + c$$                                          |
[/class]

## 常用积分

下表列出基本不定积分。每个右端的导数都是对应的被积函数。[反正切函数](../arctangent-function/)词条推导了反三角函数的情形及其在定积分方面的推论。

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

[积分策略](../integration-strategies/)条目分析常见被积函数的结构，并说明如何在直接积分、换元积分、分部积分以及[代数或三角化简](../reduction-formulas/)之间选择。

> 上述恒等式在被积函数有定义且连续的任意区间上成立。[换元积分](../integration-by-substitution/)和[分部积分](../integration-by-parts/)适用于表外的一些积分，但两种方法都不能保证得到初等原函数。如果 $f$ 在 $[a,b]$ 上连续，$F$ 在 $[a,b]$ 上连续，并且对每个 $x\in(a,b)$ 都有 $F'(x)=f(x)$，则微积分基本定理给出 $\int_a^b f(x)\,dx=F(b)-F(a)$。这个[定积分](../definite-integrals/)是 $f$ 的图像与 $x$ 轴在 $[a,b]$ 上围成的净有向面积。
