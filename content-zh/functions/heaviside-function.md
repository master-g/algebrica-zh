---
title: 赫维赛德函数
title_en: Heaviside Function
source: https://algebrica.org/heaviside-function/
license: CC BY-NC 4.0
tags:
  - discontinuity
  - heaviside-function
  - laplace-transform
  - one-sided-limits
  - piecewise-function
  - ramp-function
  - sign-function
  - step-function
translation:
  status: current
  source_hash: 0f4d90937d1228669734c68c38b1ff91b1ad3131dc5e1c402e72bc7ad124a79c
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 引言

赫维赛德阶跃函数在原点左侧为 $0$，在原点右侧为 $1$。取 $H(0)=\frac{1}{2}$，它的[分段定义](../piecewise-functions/)为：

$$
H(x) =
\begin{cases}
0 & x < 0 \\[6pt]
\dfrac{1}{2} & x = 0 \\[8pt]
1 & x > 0
\end{cases}
\quad \forall \ x \in \mathbb{R}
$$

例如，由定义得到：

$$
H(-3) = 0 \qquad H(0) = \frac{1}{2} \qquad H(5) = 1
$$

当 $x$ 表示时间时，$H(x)$ 描述一个在 $x<0$ 时为 $0$、在 $x>0$ 时取常值 $1$ 的量，例如在零时刻接通的电路的归一化电压。

![图 1](/assets/functions/svg/heaviside-function-1.zh.svg)

图像由两条水平射线组成，一条在 $x<0$ 时位于高度 $0$ 处，另一条在 $x>0$ 时位于高度 $1$ 处，还有一个孤立点 $\left(0, \frac{1}{2}\right)$ 位于二者正中间。两条水平射线都不与 $y$ 轴相交。

> $H(0)$ 的值取决于约定。取 $H(0)=0$ 使 $H$ 在跳跃处左连续，取 $H(0)=1$ 则使它右连续。这里采用的值 $\frac{1}{2}$ 使恒等式 $H(x)+H(-x)=1$ 在整个实数轴上成立，并使 $H$ 成为重新标度的[Sigmoid 函数](../sigmoid-function/) $\sigma(kx)$ 在 $k \to +\infty$ 时的[逐点极限](../sequence-of-functions/)。

## 性质

+ [定义域](../determining-the-domain-of-a-function/)：$\mathbb{R}$
+ 值域：$\left\{ 0,\ \dfrac{1}{2},\ 1 \right\}$
+ 函数有界，因为对每个 $x \in \mathbb{R}$ 都有 $0 \leq H(x) \leq 1$。
+ 函数在 $\mathbb{R}$ 上[不减](../increasing-and-decreasing-functions/)，并且在区间 $(-\infty, 0)$ 和 $(0, +\infty)$ 上分别为常数。
+ 函数既不是[偶函数也不是奇函数](../even-and-odd-functions/)；它对每个 $x \in \mathbb{R}$ 满足 $H(x)+H(-x)=1$。
+ 函数在 $x=0$ 处有幅度为 $1$ 的[跳跃间断](../discontinuities-of-real-functions/)，在其他每一点都[连续](../continuous-functions/)。
+ 在两条开射线的每一点处，[导数](../derivatives/)存在并且等于零。在原点处导数不存在。
+ 函数在原点之外是幂等的，因为只要 $x \neq 0$ 就有 $H(x)^2 = H(x)$。
+ 函数在每个有界区间上[黎曼可积](../riemann-integrability-criteria/)，因为它有界，并且唯一的间断点在 $x=0$ 处。

原点处的两个[单侧极限](../limits/)为：

$$
\begin{align}
\lim_{x \to 0^-} H(x) &= 0 \\[6pt]
\lim_{x \to 0^+} H(x) &= 1
\end{align}
$$

它们的值不同，所以双侧极限 $\lim_{x \to 0} H(x)$ 不存在，$H$ 在原点处有跳跃间断。跳跃的幅度为 $1-0=1$。

## 极限、导数与积分

由于 $H$ 在每条射线上为常数，它在无穷远处的极限为：

$$
\begin{align}
\lim_{x \to -\infty} H(x) &= 0 \\[6pt]
\lim_{x \to +\infty} H(x) &= 1
\end{align}
$$

直线 $y=0$ 和 $y=1$ 是[水平渐近线](../asymptotes/)。图像在 $(-\infty,0)$ 上与 $y=0$ 重合，在 $(0,+\infty)$ 上与 $y=1$ 重合。

- - -

由于 $H$ 在每条开射线上为常数，它的导数为：

$$
\frac{d}{dx} H(x) = 0 \quad x \neq 0
$$

在 $x=0$ 处，经典意义下的导数不存在，因为在一点不连续的函数不可能在该点可导。在分布的意义下，赫维赛德函数的导数是狄拉克 δ 函数：

$$
\frac{d}{dx} H(x) = \delta(x)
$$

狄拉克 δ 函数的支集在原点，总质量为 $1$，等于跳跃的幅度。等价地，$H$ 是 $\delta$ 在分布意义下的一个原函数。这个恒等式并不确定原点处的值，因为改变函数在一点处的值不会改变与它相联系的分布。

[符号函数](../sign-function/)在原点处从 $-1$ 跳到 $1$。它的跳跃幅度为 $2$，在分布意义下的导数是 $2\delta(x)$。

- - -

在每条开射线上，$xH(x)+c$ 是 $H$ 的一个经典意义下的[原函数](../indefinite-integrals/)。在任何含有原点的开区间上都不存在经典意义下的原函数，因为[达布定理](../darboux-theorem/)使每个导函数都具有介值性质，而 $H$ 有跳跃。从原点起的[累积积分](../fundamental-theorem-of-calculus/)为：

$$
\int_0^x H(t) \ dt = xH(x)
$$

区间 $[a,b]$ 上的[定积分](../definite-integrals/)度量这个区间位于原点右侧的那一部分。当 $a<b$ 时得到：

$$
\int_a^b H(x) \ dx =
\begin{cases}
0 & b \leq 0 \\[6pt]
b & a < 0 < b \\[6pt]
b-a & 0 \leq a
\end{cases}
$$

在中间的情形，$H$ 在 $[a,0)$ 上为 $0$，在 $(0,b]$ 上为 $1$。它在 $0$ 处的值不影响积分，积分等于 $[0,b]$ 的长度，即 $b$。

## 斜坡函数

上面的累积积分就是斜坡函数：

$$R(x) = xH(x)$$

![图 2](/assets/functions/svg/heaviside-function-2.zh.svg)

图像由 $x$ 轴的负半轴与第一象限中的角平分线 $y=x$ 连接而成。在电路模型中，$R$ 描述开关闭合后以恒定速率增大的电压，而 $H$ 有一个瞬时的跳跃。

斜坡函数在原点处[连续](../continuous-functions/)，因为两个单侧极限都为零且 $R(0)=0$。在每条射线上求导，得到 $x<0$ 时 $R'(x)=0$，$x>0$ 时 $R'(x)=1$。原点处的两个单侧导数不同，所以 $R$ 在那里有一个[角点](../points-of-non-differentiability/)。于是对每个 $x\neq 0$ 都有 $R'(x)=H(x)$。

斜坡函数可以用[绝对值](../absolute-value-function/)写成等价的表达式：

$$R(x) = \frac{x+|x|}{2}$$

当 $x>0$ 时，分子等于 $2x$，商等于 $x$。当 $x<0$ 时有 $|x|=-x$，所以分子等于 $x-x=0$。在原点处两个表达式都为零，两个公式在整个 $\mathbb{R}$ 上一致。

## 与符号函数和绝对值的关系

赫维赛德函数与[符号函数](../sign-function/)的值相差一个仿射变换。把 $\mathrm{sgn}(x)$ 加上 $1$ 再减半，得到：

$$H(x) = \frac{1+\mathrm{sgn}(x)}{2}$$

从这个关系中解出 $\mathrm{sgn}(x)$，得到：

$$\mathrm{sgn}(x) = 2H(x)-1$$

在原点处 $H(0)=\frac{1}{2}$，两个恒等式化为 $\frac{1}{2}=\frac{1+0}{2}$ 和 $0=2\cdot\frac{1}{2}-1$。

把第二个恒等式代入 $|x| = x\mathrm{sgn}(x)$，得到用 $H$ 表示绝对值的式子：

$$|x| = x\left(2H(x)-1\right)$$

当 $x>0$ 时，括号等于 $1$，乘积等于 $x$；当 $x<0$ 时，括号等于 $-1$，乘积等于 $-x$。

## 平移阶跃与分段函数的紧凑写法

把 $x$ 换成 $x-a$，就把跳跃从原点移到点 $a$：

$$
H(x-a) =
\begin{cases}
0 & x < a \\[6pt]
\dfrac{1}{2} & x = a \\[8pt]
1 & x > a
\end{cases}
$$

平移后的阶跃在 $x<a$ 时为 $0$，在 $x>a$ 时为 $1$。把一个式子乘以 $H(x-a)$，在 $x>a$ 时保留它，在 $x<a$ 时使它为零，这就给出了[分段函数](../piecewise-functions/)的一种紧凑记法。给定在 $a$ 处衔接的两个式子 $f_1$ 和 $f_2$，考虑表达式：

$$f(x) = f_1(x) + \left(f_2(x)-f_1(x)\right)H(x-a)$$

它在 $x<a$ 时等于 $f_1(x)$，在 $x>a$ 时等于 $f_2(x)$，因为在第一种情形 $H(x-a)=0$，在第二种情形 $H(x-a)=1$。在衔接点处，表达式的值为 $\frac{f_1(a)+f_2(a)}{2}$。考虑如下定义的函数：

$$
f(x) =
\begin{cases}
2 & x < 3 \\[6pt]
x^2 & x > 3
\end{cases}
$$

当 $x\neq 3$ 时，它可以写成 $f(x) = 2 + (x^2-2)H(x-3)$。在 $x=3$ 处，这个表达式的值为 $\frac{11}{2}$，而上面的分段定义没有指定这一点的值。

- - -

把两个平移后的阶跃相减，可以分离出一个有界区间。对 $a<b$，定义：

$$p(x) = H(x-a)-H(x-b)$$

函数 $p$ 在 $(a,b)$ 上等于 $1$，在 $x<a$ 或 $x>b$ 时等于 $0$。

![图 3](/assets/functions/svg/heaviside-function-3.zh.svg)

由于 $H(0)=\frac{1}{2}$，有 $p(a)=p(b)=\frac{1}{2}$。函数 $p$ 是支集为 $[a,b]$ 的单位高度矩形脉冲。把一个式子乘以 $p$，在 $(a,b)$ 上保留它，在 $[a,b]$ 之外使它为零，并使它在端点处的值减半。在衔接点之外，一个在 $(-\infty,a)$、$(a,b)$ 和 $(b,+\infty)$ 上分别由式子 $f_1$、$f_2$ 和 $f_3$ 给出的函数可以写成：

$$f(x) = f_1(x) + \left(f_2(x)-f_1(x)\right)H(x-a) + \left(f_3(x)-f_2(x)\right)H(x-b)$$

在 $a$ 和 $b$ 处，这个公式给出相邻两值的平均。衔接点处的任何其他取值必须另行指定。

- - -

如果 $t$ 表示时间，在 $t=5$ 时把电压从 $0$ 变为 $120$ 伏的开关可以用下式描述：

$$V(t) = 120H(t-5)$$

电压在 $t<5$ 时为 $0$，在 $t>5$ 时为 $120$ 伏，按所采用的约定在 $t=5$ 时等于 $60$ 伏。

在最初 $60$ 秒内以恒定速率从 $0$ 升到 $120$ 伏、然后保持不变的电压，可以用两个斜坡的线性组合描述：

$$V(t) = 2tH(t)-2(t-60)H(t-60)$$

当 $0<t<60$ 时，第二项为零，$V(t)=2t$，在 $t=60$ 时达到 $120$。当 $t>60$ 时，两个赫维赛德因子都等于 $1$，差为 $2t-2(t-60)=120$，所以电压保持在 $120$ 伏不变。

## 赫维赛德函数的拉普拉斯变换

对实数 $s$，定义在 $t \geq 0$ 上的函数 $f$ 的拉普拉斯变换是下面的[反常积分](../improper-integrals/)，只要它收敛：

$$\mathcal{L}\{f(t)\}(s) = \int_0^{+\infty} f(t)e^{-st} \ dt$$

对于 $a \geq 0$ 的平移阶跃，因子 $H(t-a)$ 在 $t<a$ 时为 $0$，在 $t>a$ 时为 $1$。它在 $t=a$ 处的值 $\frac{1}{2}$ 不影响积分，所以积分下限变为 $a$：

$$\mathcal{L}\{H(t-a)\}(s) = \int_a^{+\infty} e^{-st} \ dt$$

先积分到有限的上限 $M$，再令 $M \to +\infty$，对 $s>0$ 得到：

$$
\begin{align}
\int_a^{M} e^{-st} \ dt &= \frac{e^{-as}-e^{-Ms}}{s} \\[6pt]
\lim_{M \to +\infty} \frac{e^{-as}-e^{-Ms}}{s} &= \frac{e^{-as}}{s}
\end{align}
$$

因此平移阶跃的变换为：

$$\mathcal{L}\{H(t-a)\}(s) = \frac{e^{-as}}{s} \quad s>0$$

令 $a=0$ 就回到原点处阶跃的变换 $\mathcal{L}\{H(t)\}(s)=\frac{1}{s}$。限制 $s>0$ 是反常积分收敛所必需的，因为只有当 $s$ 为正时 $e^{-Ms}$ 才趋于零。

对 $a \geq 0$，把同样的计算应用于乘积，就得到平移法则。如果 $F(s)=\mathcal{L}\{f(t)\}(s)$，在定义积分中作[换元](../integration-by-substitution/) $u=t-a$，得到：

$$\mathcal{L}\{H(t-a)f(t-a)\}(s) = e^{-as}F(s)$$

于是 $H(t-a)f(t-a)$ 是延迟了 $a$ 的输入 $f$，它的拉普拉斯变换是 $e^{-as}F(s)$。
