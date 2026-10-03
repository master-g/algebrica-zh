---
title: 幂函数
title_en: Power Function
source: https://algebrica.org/power-function/
license: CC BY-NC 4.0
tags:
  - domain
  - functions
  - power-functions
  - symmetry
translation:
  status: current
  source_hash: f6f1cc5ff290b211b18f90d0d6ee602fbfd52b131aac0154d77d057b7c604372
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 定义

幂函数是如下形式的[函数](../functions/)：

$$f(x) = x^a \qquad a \in \mathbb{R}$$

指数 $a$ 是固定的[实数](../real-numbers/)，变量是底数。在[指数函数](../exponential-function/) $g(x) = b^x$ 中，底数 $b > 0$ 是固定的，变量 $x$ 是指数。条件 $b \neq 1$ 排除了常数的情形。对任意实指数，[幂](../powers/)通过[自然对数](../logarithms/)和指数函数来定义：

$$x^a := e^{a\ln x} \qquad x > 0$$

不论实指数是多少，每个幂函数都在半直线 $(0, +\infty)$ 上有定义。这个定义能否延伸到 $x \leq 0$，取决于 $a$ 的值。

加上一个常数因子，就得到更一般的形式 $f(x) = kx^a$（$k \neq 0$）。它的[绝对值](../absolute-value/) $|k|$ 对纵坐标作伸缩，$k$ 为负时还把图像关于 $x$ 轴反射。定义域保持不变。

## 定义域

[定义域](../determining-the-domain-of-a-function/)取决于指数的类型。[有理](../rational-numbers/)指数必须先写成最简分数 $p/q$，因为约分后的分母决定负底数是否可以取。

[class="table-1 -right"]

| 指数 $a$                                  | 定义域                       |
| :-------------------------------------------- | :--------------------------- |
| 正整数                              | $\mathbb{R}$                 |
| 负整数                              | $\mathbb{R} \setminus \{0\}$ |
| 最简分数 $p/q$，$q$ 为奇数，$p > 0$       | $\mathbb{R}$                 |
| 最简分数 $p/q$，$q$ 为奇数，$p < 0$       | $\mathbb{R} \setminus \{0\}$ |
| 最简分数 $p/q$，$q$ 为偶数，$p > 0$      | $[0, +\infty)$               |
| 最简分数 $p/q$，$q$ 为偶数，$p < 0$      | $(0, +\infty)$               |
| [无理数](../irrational-numbers/)，$a > 0$ | $[0, +\infty)$               |
| 无理数，$a < 0$                           | $(0, +\infty)$               |
[/class]

化为最简分数这一步不能省。指数 $2/6$ 和 $1/3$ 表示同一个有理数，只有约分后的形式才给出负底数处的幂。把约分后的指数读作立方根，得到 $(-8)^{1/3} = \sqrt[3]{-8} = -2$，而把未约分的指数读作 $\sqrt[6]{(-8)^2}$ 则会得到 $2$。两种读法在 $x \geq 0$ 时一致，而负底数处实数幂的定义使用约分后的分数。[无理函数](../irrational-functions/)中讨论的[根式](../radicals/)也需要同样小心。

指数 $a = 0$ 是单独的情形。恒等式 $x^0 = 1$ 对每个 $x \neq 0$ 成立，所以幂函数在 $\mathbb{R} \setminus \{0\}$ 上化为常数 $1$，原点处的值取决于对 $0^0$ 所采用的约定。

## 偶数自然数指数

设 $f(x) = x^n$，其中 $n$ 是正偶数。定义域是 $\mathbb{R}$，值域是 $[0, +\infty)$，因为实数的偶次幂从不为负。

![图 1](/assets/functions/svg/power-function-1.zh.svg)

+ 定义域：$\mathbb{R}$
+ 值域：$[0, +\infty)$
+ 函数是[偶函数](../even-and-odd-functions/)，所以它的图像关于 $y$ 轴对称。
+ [单调性](../increasing-and-decreasing-functions/)：在 $(-\infty, 0]$ 上严格递减，在 $[0, +\infty)$ 上严格递增
+ 原点是[最小值点](../maximum-minimum-and-inflection-points/)，$f(0) = 0$。
+ 图像在 $\mathbb{R}$ 上是[凸的](../convexity-and-concavity-of-functions/)。
+ 函数在 $\mathbb{R}$ 上[连续](../continuous-functions/)且可导。

定义域两端的[极限](../limits/)相同：

$$\lim_{x \to -\infty} x^n = \lim_{x \to +\infty} x^n = +\infty$$

这一族的每条图像都经过 $(-1, 1)$、$(0, 0)$ 和 $(1, 1)$。如果 $m > n$ 都是正偶数，那么当 $0 < |x| < 1$ 时 $x^m < x^n$，而当 $|x| > 1$ 时 $x^m > x^n$。$n = 2$ 的情形是[抛物线](../parabola/) $y = x^2$。

偶次幂在 $\mathbb{R}$ 上不是单射，因为 $f(-x) = f(x)$。限制在 $[0, +\infty)$ 上，它成为到 $[0, +\infty)$ 的双射，它在那里的[反函数](../inverse-function/)是方根 $y = \sqrt[n]{x}$。

## 奇数自然数指数

设 $f(x) = x^n$，其中 $n$ 是大于一的奇数。指数 $n = 1$ 给出恒等函数 $y = x$，它的图像是第一、第三象限的角平分线。

![图 2](/assets/functions/svg/power-function-2.zh.svg)

+ 定义域：$\mathbb{R}$
+ 值域：$\mathbb{R}$
+ 函数是奇函数，所以它的图像关于原点对称。
+ 单调性：在 $\mathbb{R}$ 上严格递增
+ 函数是从 $\mathbb{R}$ 到 $\mathbb{R}$ 的双射。
+ 图像在 $(-\infty, 0]$ 上是凹的，在 $[0, +\infty)$ 上是凸的。
+ 原点是具有水平切线的拐点。

定义域两端的极限符号相反：

$$\lim_{x \to -\infty} x^n = -\infty \qquad \lim_{x \to +\infty} x^n = +\infty$$

由于 $n - 1$ 是正偶数，导数 $nx^{n-1}$ 在原点两侧都为正，在原点处为零。于是原点是[驻点](../maximum-minimum-and-inflection-points/)，但不是极值点。由于函数是从 $\mathbb{R}$ 到 $\mathbb{R}$ 的双射，它的反函数 $y = \sqrt[n]{x}$ 在整条直线上有定义，这与偶数的情形不同。

## 负整数指数

设 $f(x) = x^{-n} = 1/x^n$，其中 $n$ 是正整数。由于分母在原点处为零，定义域是 $\mathbb{R} \setminus \{0\}$。函数没有零点，因为它的分子是 $1$。

![图 3](/assets/functions/svg/power-function-3.zh.svg)

函数 $x^{-n}$ 与 $x^n$ 的奇偶性相同，因为 $(-x)^{-n} = (-1)^n x^{-n}$。当 $n$ 是偶数时，函数是偶函数，值域是 $(0, +\infty)$，两个分支都在 $x$ 轴上方。函数在 $(-\infty, 0)$ 上递增，在 $(0, +\infty)$ 上递减，两个分支都是凸的。当 $n$ 是奇数时，函数是奇函数，值域是 $\mathbb{R} \setminus \{0\}$，两个分支位于相对的象限。函数在每个分支上递减，在 $(-\infty, 0)$ 上是凹的，在 $(0, +\infty)$ 上是凸的。

> 在每个分支上递减的函数，在它不连通的定义域上未必递减。函数 $f(x) = 1/x$ 在 $(-\infty, 0)$ 和 $(0, +\infty)$ 上都递减，然而 $-1 < 1$，却有 $f(-1) = -1 < 1 = f(1)$。递减函数必须把定义域中各点之间的每个不等式都反过来，但对位于不同分支上的点，$1/x$ 并没有把这个不等式反过来。

$n = 1$ 的情形给出 $y = 1/x$，即方程为 $xy = 1$ 的等轴[双曲线](../hyperbola/)。在[有理函数](../rational-functions/)的研究中，它是单极点的基本模型。

确定[渐近线](../asymptotes/)的极限为：

$$
\begin{align}
\lim_{x \to 0^{+}} x^{-n} &= +\infty \\[6pt]
\lim_{x \to \pm\infty} x^{-n} &= 0
\end{align}
$$

直线 $x = 0$ 是竖直渐近线，直线 $y = 0$ 是水平渐近线。原点处的左极限在 $n$ 为偶数时等于 $+\infty$，在 $n$ 为奇数时等于 $-\infty$。

## 有理指数与实指数

在半直线 $(0, +\infty)$ 上，幂 $x^a$ 对每个实指数都有定义。所有图像都经过 $(1, 1)$，因为对每个 $a$ 都有 $1^a = 1$。

![图 4](/assets/functions/svg/power-function-4.zh.svg)

指数的符号决定单调性，半直线两端的极限由 $x^a = e^{a\ln x}$ 得出：

$$
\lim_{x \to 0^{+}} x^{a} =
\begin{cases}
0 & a > 0 \\[6pt]
+\infty & a < 0
\end{cases}
\qquad
\lim_{x \to +\infty} x^{a} =
\begin{cases}
+\infty & a > 0 \\[6pt]
0 & a < 0
\end{cases}
$$

当 $a > 0$ 时，函数从 $0$ 递增到 $+\infty$，并且令 $0^a = 0$ 就可以连续地延拓到 $x = 0$。当 $a < 0$ 时，它从 $+\infty$ 递减到 $0$。当 $a = 0$ 时，它是常数。

两个指数可以在固定的底数处比较。如果 $a < b$，那么

$$x^{a} > x^{b} \quad (0 < x < 1), \qquad x^{a} < x^{b} \quad (x > 1)$$

当 $x$ 经过 $1$ 时，大小顺序颠倒，因为 $x^{b}/x^{a} = x^{b-a}$，其中 $b - a > 0$，而 $x$ 的正数次幂在 $0 < x < 1$ 时小于 $1$，在 $x > 1$ 时大于 $1$。

当 $0 < a < 1$ 时，图像是凹的，而当 $a > 1$ 时是凸的。平方根 $y = x^{1/2}$ 属于第一类，$y = x^{2}$ 属于第二类。这两条曲线关于角平分线 $y = x$ 互为反射，因为它们在 $[0, +\infty)$ 上互为反函数。

## 对称性

对整数指数 $n$，有

$$(-x)^{n} = (-1)^{n}x^{n}$$

因子 $(-1)^n$ 在 $n$ 为偶数时等于 $1$，在 $n$ 为奇数时等于 $-1$，所以 $x^n$ 是[偶函数](../even-and-odd-functions/)恰好当 $n$ 是偶数，是奇函数恰好当 $n$ 是奇数。

$q$ 为奇数的最简有理指数 $p/q$ 允许负底数，同样的计算适用，其中 $(-1)^{p/q} = (-1)^{p}$。$p$ 为偶数时函数是偶函数，$p$ 为奇数时是奇函数。当 $q$ 是偶数，或者指数是无理数时，定义域不含负数，也就谈不上对称性。

## 导数

在 $(0, +\infty)$ 上，求导公式对每个实指数都成立。写出 $x^a = e^{a\ln x}$ 并应用[链式法则](../chain-rule/)，得到

$$
\begin{align}
\frac{d}{dx}x^{a} &= e^{a\ln x}\frac{a}{x} \\[6pt]
&= x^{a}\frac{a}{x} \\[6pt]
&= ax^{a-1}
\end{align}
$$

对正整数指数，公式在 $\mathbb{R}$ 上成立，而对负整数指数，公式在 $\mathbb{R} \setminus \{0\}$ 上成立。当 $a = 0$ 时，[导数](../derivatives/)在函数有定义的地方都为零。当 $a \neq 0$ 时，导数是指数为 $a - 1$ 的幂函数的常数倍。

[二阶导数](../higher-order-derivatives/)决定半直线上的凹凸性：

$$\frac{d^{2}}{dx^{2}}x^{a} = a(a-1)x^{a-2}$$

由于 $x > 0$ 时 $x^{a-2} > 0$，二阶导数的符号就是 $a(a-1)$ 的符号。这个乘积在 $a < 0$ 和 $a > 1$ 时为正，此时图像是凸的；在 $0 < a < 1$ 时为负，此时图像是凹的。指数 $a = 0$ 和 $a = 1$ 给出直线，它们的二阶导数为零。

当 $a > 0$ 时，一阶导数还描述了图像在原点附近的形状。当 $x \to 0^{+}$ 时，量 $ax^{a-1}$ 在 $a > 1$ 时趋于 $0$，在 $0 < a < 1$ 时趋于 $+\infty$。因此，图像在第一种情形以水平切线到达原点，在第二种情形以竖直的半切线到达原点。在第二种情形，右差商发散，所以连续延拓在原点处有一个[不可导点](../points-of-non-differentiability/)。

## 积分

当 $a \neq -1$ 时，对 $x^{a+1}/(a+1)$ 求导得到 $x^a$。因此 $(0, +\infty)$ 上的[不定积分](../indefinite-integrals/)为：

$$\int x^{a} \ dx = \frac{x^{a+1}}{a+1} + c \qquad a \neq -1$$

当 $a = -1$ 时，上面表达式中的分母为零。这种情形下的原函数是对数：

$$\int \frac{1}{x} \ dx = \ln|x| + c$$

## 增长速度的比较

两个指数为正的幂函数在无穷远处都发散，指数较大的函数增长更快。对 $0 < a < b$：

$$\lim_{x \to +\infty}\frac{x^{a}}{x^{b}} = \lim_{x \to +\infty}x^{a-b} = 0$$

这个商是指数为负的幂，所以趋于零，这意味着 $x^a$ 相对于 $x^b$ 是[可忽略的](../little-o-notation/)。正数次幂还可以与[对数函数](../logarithmic-function/)和指数函数比较。对每个 $a > 0$ 和每个 $c > 1$：

$$\ln x = o(x^{a}) \qquad x^{a} = o(c^{x}) \qquad x \to +\infty$$

对数比每个正数次幂增长得慢，而每个正数次幂比每个底数大于一的指数函数增长得慢。

## 幂函数与指数函数

幂函数和指数函数有不同的缩放规律。对于 $(0, +\infty)$ 上的幂函数，把输入乘以因子 $\lambda > 0$，输出就乘以一个只依赖于 $\lambda$ 的因子：

$$f(\lambda x) = (\lambda x)^{a} = \lambda^{a}f(x)$$

对于指数函数 $g(x) = c^x$（$c > 0$ 且 $c \neq 1$），给输入加上 $h$，输出就乘以 $c^h$：

$$g(x + h) = c^{x+h} = c^{h}g(x)$$

幂函数把输入的固定比值变为输出的固定比值，而指数函数把输入的固定差值变为输出的固定比值。正方形的面积作为边长的函数是幂律，而在相等的时间间隔内按固定倍数增长的种群服从指数律。

## 例题

我们来研究函数

$$f(x) = x^{5/3} = \sqrt[3]{x^{5}}$$

指数 $5/3$ 是最简分数，分母为奇数，分子为正，所以定义域是 $\mathbb{R}$。分子是奇数，因此 $f$ 是奇函数，它的图像关于原点对称。唯一的零点是 $x = 0$。

- - -

当 $x \neq 0$ 时，有 $f(x) = x\sqrt[3]{x^2}$，由[乘积法则](../differentiation-rules/)和链式法则得到

$$
\begin{align}
f'(x) &= \sqrt[3]{x^2} + \frac{2x^2}{3(x^2)^{2/3}} \\[6pt]
&= \frac{5}{3}x^{2/3} \\[6pt]
&= \frac{5}{3}\sqrt[3]{x^2}
\end{align}
$$

平方的立方根对每个 $x \neq 0$ 都为正，所以 $f'$ 在两条半直线上都为正。在原点处，[差商](../difference-quotient/)为

$$f'(0) = \lim_{h \to 0}\frac{h^{5/3}}{h} = \lim_{h \to 0}h^{2/3} = 0$$

因此图像在原点处有水平切线。函数在每条半直线上严格递增，并且 $x < 0$ 时 $f(x) < 0$，而 $f(0) = 0$，$x > 0$ 时 $f(x) > 0$。这些事实表明 $f$ 在 $\mathbb{R}$ 上严格递增。由于导数不变号，原点是驻点，但不是极值点。

- - -

当 $x \neq 0$ 时，二阶导数为

$$f''(x) = \frac{10}{9}x^{-1/3} = \frac{10}{9\sqrt[3]{x}}$$

它在 $x < 0$ 时为负，在 $x > 0$ 时为正，所以图像在 $(-\infty, 0)$ 上是凹的，在 $(0, +\infty)$ 上是凸的。二阶导数在 $x = 0$ 处没有定义，但它的符号在那里改变，所以原点是具有水平切线的拐点。

- - -

定义域两端的极限为

$$\lim_{x \to -\infty}f(x) = -\infty \qquad \lim_{x \to +\infty}f(x) = +\infty$$

由于 $f$ 连续，由这些极限和[介值定理](../intermediate-value-theorem/)可知它的值域是 $\mathbb{R}$。函数严格递增，所以它是从 $\mathbb{R}$ 到 $\mathbb{R}$ 的双射。它的反函数是指数互为倒数的幂函数：

$$f^{-1}(x) = x^{3/5}$$

由于当 $x \to \pm\infty$ 时 $x^{5/3}/x = x^{2/3}$ 趋于 $+\infty$，图像没有斜渐近线。上面两端的极限也排除了水平渐近线。
