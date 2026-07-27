---
title: 三角恒等式
title_en: Trigonometric Identities
source: https://algebrica.org/trigonometric-identities/
license: CC BY-NC 4.0
tags:
  - trigonometric-identities
  - trigonometry
translation:
  status: current
  source_hash: 6bc43737a3b59770f9d9b36af46454af8dfef7c8baa2a32faa79b7befdf571b5
  translator: omp
  updated: "2026-07-25T06:08:45.469Z"
---
## 引言

三角恒等式是涉及三角函数的方程，它对变量的所有允许取值都成立。与针对特定[角](../angles-and-angular-measure/)集合求解的三角方程不同，恒等式是在所涉函数的共同定义域上成立的等式。

对恒等式的研究整理了把[正弦与余弦](../sine-and-cosine/)、[正切与余切](../tangent-and-cotangent/)联系起来的代数关系，并为把三角表达式化为更易求值、[求导](../derivatives/)、[积分](../indefinite-integrals/)或作几何解释的等价形式提供了所需工具。

下面给出的恒等式按所执行的变换类型分为若干族。有些用原始角表示变换后的角的[函数](../functions/)，另一些把积化为和或把和化为积，还有一些把一般角归约为参数变量。

每一族在求解[三角方程](../trigonometric-equations/)、化简表达式以及在更广泛的微积分工具中，都发挥着独特作用。

## 基本恒等式

在考察联系不同角三角函数的变换之前，先回顾在同一角处把六个三角函数联系起来的基本恒等式是有益的。这些恒等式直接来自[单位圆](../unit-circle/)上的定义和[毕达哥拉斯定理](../pythagorean-theorem/)，构成了后续一切恒等式赖以建立的代数基础。[毕达哥拉斯恒等式](../pythagorean-identity/)表达了这样的约束：单位圆上任意一点的坐标都满足圆本身的方程：

$$
\sin^2(\theta) + \cos^2(\theta) = 1
$$

在 $\cos(\theta) \neq 0$ 的条件下，将该恒等式两边除以 $\cos^2(\theta)$，得到涉及正切和[正割](../secant-and-cosecant/)的相应恒等式：

$$
1 + \tan^2(\theta) = \sec^2(\theta)
$$

类似地，在 $\sin(\theta) \neq 0$ 的假设下除以 $\sin^2(\theta)$，得到涉及余切和余割的恒等式：

$$
1 + \cot^2(\theta) = \csc^2(\theta)
$$

商数恒等式把正切和余切与正弦和余弦之商联系起来。它们直接由这四个函数在单位圆上的定义推出：

$$
\begin{align}
&\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)} \\[6pt]
&\cot(\theta) = \frac{\cos(\theta)}{\sin(\theta)}
\end{align}
$$

> 第一个恒等式在 $\cos(\theta) \neq 0$ 时成立，第二个在 $\sin(\theta) \neq 0$ 时成立。毕达哥拉斯恒等式与商数恒等式合起来，足以把任何三角表达式仅用正弦和余弦重新表示，这种归约通常是化简更复杂公式的第一步。

## 参考角与反射

[参考角](../identities-using-reference-angles/)法，有时也称反射法，是一族恒等式，它能把非锐角的三角函数用笛卡尔平面第一象限中的相应锐角表示出来。任何三角函数，不论是[正弦](../sine-and-cosine/)、[余弦](../sine-and-cosine/)、[正切](../tangent-and-cotangent/)还是[余切](../tangent-and-cotangent/)，当其自变量形如：

$$
\frac{\pi}{2} \pm \alpha, \quad \pi \pm \alpha, \quad \frac{3\pi}{2} \pm \alpha, \quad 2\pi - \alpha
$$

都可以改写为锐角 $\alpha$ 的函数，符号的正负由角所在象限确定。考虑角：

$$
\frac{\pi}{2} + \alpha
$$

在笛卡尔坐标中，此角位于第二象限。

![图 1](/assets/trigonometry/svg/trigonometric-identities-1.zh.svg)

对[单位圆](../unit-circle/)上对应点作直接的几何分析，得到以下两个恒等式：

$$
\begin{align}
&\sin\left(\frac{\pi}{2} + \alpha\right) = \cos\alpha \\[6pt]
&\cos\left(\frac{\pi}{2} + \alpha\right) = -\sin\alpha
\end{align}
$$

第一象限中与 $\alpha$ 的正弦相关联的竖直段的长度，等于第二象限中与 $\frac{\pi}{2} + \alpha$ 的余弦相关联的水平段的长度（即相应余弦绝对值的大小）；而第二象限中余弦取负值，因为该象限位于竖轴左侧。对上面列出的每种形式的角施以同样步骤，可得完整的归约公式表，详见[归约公式与参考角](../reduction-formulas-and-reference-angles/)页面。

## 和差公式

和差公式把两个角的和或差的三角函数表示为各角三角函数的组合。对于正弦和余弦，下列恒等式成立：

$$
\begin{align}
&\sin(a + b) = \sin(a)\cos(b) + \cos(a)\sin(b) \\[6pt]
&\sin(a - b) = \sin(a)\cos(b) - \cos(a)\sin(b) \\[6pt]
&\cos(a + b) = \cos(a)\cos(b) - \sin(a)\sin(b) \\[6pt]
&\cos(a - b) = \cos(a)\cos(b) + \sin(a)\sin(b)
\end{align}
$$

正切和余切的相应恒等式由相应正弦和余弦公式取商得到，前提是分母不为零，且公式中出现的各正切或余切项本身有定义：

$$
\begin{align}
&\tan(a + b) = \frac{\tan(a) + \tan(b)}{1 - \tan(a)\tan(b)} \\[6pt]
&\tan(a - b) = \frac{\tan(a) - \tan(b)}{1 + \tan(a)\tan(b)} \\[6pt]
&\cot(a + b) = \frac{\cot(a)\cot(b) - 1}{\cot(a) + \cot(b)} \\[6pt]
&\cot(a - b) = \frac{\cot(a)\cot(b) + 1}{\cot(b) - \cot(a)}
\end{align}
$$

> 这些恒等式构成了整个三角恒等式体系的骨干。倍角公式、半角公式以及和差化积公式都是通过适当的代换或代数运算从它们推出的。

## 倍角公式

倍角公式用角 $\theta$ 的三角函数表示角 $2\theta$ 的三角函数。对于正弦和余弦，下列恒等式成立：

$$
\begin{align}
&\sin(2\theta) = 2\sin(\theta)\cos(\theta) \\[6pt]
&\cos(2\theta) = \cos^2(\theta) - \sin^2(\theta)
\end{align}
$$

余弦倍角公式通过应用[毕达哥拉斯恒等式](../pythagorean-identity/) $\sin^2\theta + \cos^2\theta = 1$，可得到两个等价形式：

$$
\begin{align}
&\cos(2\theta) = 1 - 2\sin^2(\theta) \\[6pt]
&\cos(2\theta) = 2\cos^2(\theta) - 1
\end{align}
$$

正切和余切的相应恒等式为（仅在两边及分母都有定义时成立）：

$$
\begin{align}
&\tan(2\theta) = \frac{2\tan(\theta)}{1 - \tan^2(\theta)} \\[6pt]
&\cot(2\theta) = \frac{\cot^2(\theta) - 1}{2\cot(\theta)}
\end{align}
$$

正弦倍角公式的推导从正弦的和角公式出发：

$$
\sin(a + b) = \sin(a)\cos(b) + \cos(a)\sin(b)
$$

令 $a = b = \theta$，左边变为 $\sin(2\theta)$，右边化为两个相同的项：

$$
\sin(2\theta) = \sin(\theta)\cos(\theta) + \cos(\theta)\sin(\theta)
$$

合并右边两个相同的项，得到最终结果：

$$
\sin(2\theta) = 2\sin(\theta)\cos(\theta)
$$

对余弦的和角公式施以同样的推理，并令 $a = b = \theta$，即得余弦的倍角公式。

## 例

考虑[积分](../indefinite-integrals/)：

$$
\int \frac{1 - \cos(2\theta)}{2}\ d\theta
$$

被积函数含有一个倍角的余弦，使直接计算变得棘手。倍角恒等式 $\cos(2\theta) = 1 - 2\sin^2(\theta)$ 把分子改写为：

$$
1 - \cos(2\theta) = 1 - \left(1 - 2\sin^2(\theta)\right) = 2\sin^2(\theta)
$$

将此结果代入原式，被积函数化为正弦的单一[幂](../powers/)：

$$
\int \frac{2\sin^2(\theta)}{2}\ d\theta = \int \sin^2(\theta)\ d\theta
$$

该恒等式把问题归约为 $\sin^2(\theta)$ 的积分，这是一个标准形式。现在可以反向使用同一倍角恒等式，把平方项线性化，写为：

$$\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$$

积分变得初等：

$$\int \sin^2(\theta)\ d\theta = \frac{\theta}{2} - \frac{\sin(2\theta)}{4} + C$$

> 这个积分乍看似乎需要某种非平凡的技巧，但通过一个三角恒等式，它已被化为若干初等原函数之和。

## 三倍角公式

三倍角公式将倍角恒等式的构造推广到角度变为三倍的情形。它把角 $3\theta$ 的三角函数表示为 $\theta$ 相应函数的[多项式](../polynomials/)表达式。对于正弦与余弦，恒等式为：

$$
\begin{align}
&\sin(3\theta) = 3\sin(\theta) - 4\sin^3(\theta) \\[6pt]
&\cos(3\theta) = 4\cos^3(\theta) - 3\cos(\theta)
\end{align}
$$

正切对应的恒等式取有理形式（仅在等式两边及分母均有定义时成立）：

$$
\tan(3\theta) = \frac{3\tan(\theta) - \tan^3(\theta)}{1 - 3\tan^2(\theta)}
$$

推导建立在分解 $3\theta = 2\theta + \theta$ 以及反复应用和角恒等式的基础上。正弦和角公式给出：

$$
\sin(3\theta) = \sin(2\theta)\cos(\theta) + \cos(2\theta)\sin(\theta)
$$

代入倍角表达式 $\sin(2\theta) = 2\sin(\theta)\cos(\theta)$ 与 $\cos(2\theta) = 1 - 2\sin^2(\theta)$，得到：

$$
\sin(3\theta) = 2\sin(\theta)\cos^2(\theta) + \sin(\theta) - 2\sin^3(\theta)
$$

勾股恒等式允许把 $\cos^2(\theta)$ 替换为 $1 - \sin^2(\theta)$，整理所得各项便得到最终的多项式形式 $3\sin(\theta) - 4\sin^3(\theta)$。对 $\cos(3\theta) = \cos(2\theta + \theta)$ 实施相同步骤可得余弦恒等式；以余弦展开式去除正弦展开式，并把所得商改写为 $\tan(\theta)$ 的有理函数，即得正切恒等式。

> 三倍角公式是更一般规律中最简单的非平凡实例：$n\theta$ 的正弦与余弦可以表示为 $\sin(\theta)$ 与 $\cos(\theta)$ 的多项式；正切与余切一般只能表示为相应函数的有理式，并须受定义域限制。当 $n = 3$ 时，多项式形式尤为紧凑，由此可给出某些不可约三次方程的三角解法，以及三角函数在 $\frac{\pi}{5}$、$\frac{\pi}{9}$ 等角度处的精确值。

## 半角公式

半角公式用 $\theta$ 的三角函数来表示 $\frac{\theta}{2}$ 的三角函数。对于正弦与余弦，下列恒等式成立：

$$
\begin{align}
&\sin\left(\frac{\theta}{2}\right) = \pm\sqrt{\frac{1 - \cos(\theta)}{2}} \\[6pt]
&\cos\left(\frac{\theta}{2}\right) = \pm\sqrt{\frac{1 + \cos(\theta)}{2}}
\end{align}
$$

右端的正负号由半角 $\frac{\theta}{2}$ 所在象限决定，必须依据该角在[单位圆](../unit-circle/)上的几何位置来选取。

正切与余切的半角公式既可写成根式形式，也可写成有理形式。有理形式通常更受青睐，因为它避免了符号上的歧义：

$$
\begin{align}
&\tan\left(\frac{\theta}{2}\right) = \frac{\sin(\theta)}{1 + \cos(\theta)} = \frac{1 - \cos(\theta)}{\sin(\theta)} \\[6pt]
&\cot\left(\frac{\theta}{2}\right) = \frac{1 + \cos(\theta)}{\sin(\theta)} = \frac{\sin(\theta)}{1 - \cos(\theta)}
\end{align}
$$

需要注意的是，这两个有理形式并非在所有点同时有定义：每个等式仅在其分母非零且两边均有定义时才能使用；某一种形式在另一种形式有效时，可能出现 0/0 的不定形式。

> 半角公式的推导源自余弦倍角恒等式的两种等价形式。令 $\cos(\theta) = 1 - 2\sin^2(\theta/2)$ 并解出 $\sin(\theta/2)$，即得正弦的半角公式；对 $\cos(\theta) = 2\cos^2(\theta/2) - 1$ 作类似处理则得到余弦的半角公式。

## 参数公式

参数公式用单一辅助变量表示角 $\theta$ 的三角函数：

$$
t = \tan\left(\frac{\theta}{2}\right)
$$

利用这一代换，正弦与余弦取有理形式：

$$
\begin{align}
&\sin(\theta) = \frac{2t}{1 + t^2} \\[6pt]
&\cos(\theta) = \frac{1 - t^2}{1 + t^2}
\end{align}
$$

正切与余切的对应表达式为：

$$
\begin{align}
&\tan(\theta) = \frac{2t}{1 - t^2} \\[6pt]
&\cot(\theta) = \frac{1 - t^2}{2t}
\end{align}
$$

这一代换在 $\theta \neq \pi + 2k\pi$ 且 $k \in \mathbb{Z}$ 时有效；被排除的 $\theta = \pi + 2k\pi$ 会使半角的正切无定义。需要特别指出，各公式仅在共同定义域内成立：令 $t=\tan(\theta/2)$ 本身要求 $\theta\neq\pi+2k\pi$；$\tan\theta=2t/(1-t^2)$ 还要求 $t^2\neq1$；$\cot\theta=(1-t^2)/(2t)$ 还要求 $t\neq0$。参数公式的实用价值在于，它能把三角表达式化为单一代数变量的有理函数；通过 Weierstrass 代换（半角代换）对正弦和余弦的有理函数进行积分时，这一性质被广泛利用。

## 积化和差公式

积化和差公式（韦尔纳公式）把两个三角函数的乘积转化为三角函数的和或差。三个恒等式为：

$$
\begin{align}
&\sin(\alpha)\sin(\beta) = \frac{1}{2}[\cos(\alpha - \beta) - \cos(\alpha + \beta)] \\[6pt]
&\cos(\alpha)\cos(\beta) = \frac{1}{2}[\cos(\alpha + \beta) + \cos(\alpha - \beta)] \\[6pt]
&\sin(\alpha)\cos(\beta) = \frac{1}{2}[\sin(\alpha + \beta) + \sin(\alpha - \beta)]
\end{align}
$$

每个恒等式都由适当的一对和角与差角公式相加或相减得到。例如，把 $\cos(\alpha - \beta)$ 与 $\cos(\alpha + \beta)$ 的展开式相加，可消去正弦项，留下两倍的乘积 $\cos(\alpha)\cos(\beta)$，由此即得第二个恒等式。这些公式在三角函数乘积的积分以及物理学中波的干涉分析中尤其有用：两个正弦信号的乘积可自然地分解为和频与差频分量。

## 和差化积公式

和差化积公式实施与积化和差公式相反的变换：它把正弦或余弦的和或差改写为三角函数的乘积。四个恒等式为：

$$
\begin{align}
&\sin(p) + \sin(q) = 2\sin\left(\frac{p+q}{2}\right)\cos\left(\frac{p-q}{2}\right) \\[6pt]
&\sin(p) - \sin(q) = 2\cos\left(\frac{p+q}{2}\right)\sin\left(\frac{p-q}{2}\right) \\[6pt]
&\cos(p) + \cos(q) = 2\cos\left(\frac{p+q}{2}\right)\cos\left(\frac{p-q}{2}\right) \\[6pt]
&\cos(p) - \cos(q) = -2\sin\left(\frac{p+q}{2}\right)\sin\left(\frac{p-q}{2}\right)
\end{align}
$$

这些恒等式由积化和差公式通过如下代换推出：

$$
\alpha = \frac{p+q}{2},\quad \beta = \frac{p-q}{2}
$$

从而 $p = \alpha + \beta$ 与 $q = \alpha - \beta$。将这些值代入积化和差恒等式并把两边同乘以 2，即得和差化积公式。其名称源自希腊语中「加法」与「减法」的词汇，反映出它们在对数发明之前的天文学中所起的历史作用：当时它们被用来把乘法转化为加法，从而简化数值计算。

## 正弦与余弦的线性组合

具有相同辐角的正弦与余弦的[线性组合](../linear-combinations/)可以重写为具有相移和调整后振幅的单个正弦波。给定两个实系数 $a$ 和 $b$（不同时为零），以下恒等式对所有 $\theta$ 成立：

$$
a\sin(\theta) + b\cos(\theta) = R\sin(\theta + \varphi)
$$

振幅 $R$ 和相位 $\varphi$ 由以下关系确定：

$$
R = \sqrt{a^2 + b^2}, \quad \cos(\varphi) = \frac{a}{R}, \quad \sin(\varphi) = \frac{b}{R}
$$

推导从正弦的和公式出发。展开右端得到：

$$
R\sin(\theta + \varphi) = R\cos(\varphi)\sin(\theta) + R\sin(\varphi)\cos(\theta)
$$

将 $\sin(\theta)$ 与 $\cos(\theta)$ 的系数与原线性组合的系数匹配，得到方程组 $R\cos(\varphi) = a$ 与 $R\sin(\varphi) = b$。将两个方程平方后相加即可分离出振幅 $R = \sqrt{a^2 + b^2}$，而第二个与第一个之比确定了相位 $\varphi$（至多差一个象限），象限由 $a$ 与 $b$ 各自的符号决定。

用单个余弦表示的等价形式有时更为方便：

$$
a\sin(\theta) + b\cos(\theta) = R\cos(\theta - \psi)
$$

在这种形式下，相位满足 $\cos(\psi) = b/R$ 与 $\sin(\psi) = a/R$。两种表示携带相同的信息，区别仅在于参考函数的选择以及所得相位的位置。

这一恒等式的实用价值有两方面。由于正弦函数介于 $-1$ 与 $1$ 之间，表达式 $a\sin(\theta) + b\cos(\theta)$ 在满足 $\sin(\theta + \varphi) = 1$ 的角度处取得最大值 $\sqrt{a^2 + b^2}$，在满足 $\sin(\theta + \varphi) = -1$ 的角度处取得最小值 $-\sqrt{a^2 + b^2}$。形如 $a\sin(\theta) + b\cos(\theta) = c$ 的三角方程通过这一恒等式可化为初等方程：

$$
\sin(\theta + \varphi) = \frac{c}{R}
$$

只要 $|c| \leq R$ 成立，此辅助方程就存在解，而原方程继承相同的可解性条件。这一构造也是将谐振动表示为两个垂直分量之合的基础，这种描述贯穿于振动系统和交流信号的分析中。

> 该构造无需修改即可推广到具有共同辐角的任意正弦与余弦线性组合。当三角辐角不同时，该恒等式不再适用，相应的变换应属于积化和差公式（韦尔纳公式）或和差化积公式族。
