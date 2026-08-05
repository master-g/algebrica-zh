---
title: 可分离微分方程
title_en: Separable Differential Equations
source: https://algebrica.org/separable-differential-equations/
license: CC BY-NC 4.0
tags:
  - autonomous-differential-equations
  - differential-equations
  - first-order-differential-equations
  - homogeneous-differential-equations
  - initial-value-problem
  - ordinary-differential-equations
  - separable-differential-equations
translation:
  status: current
  source_hash: 321fb27bd861b1fae0ed4a20225934b61c31fd5c3576717605d3b58fdfdca61b
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 可分离方程

当[一阶微分方程](../first-order-differential-equations/)的标准形式右端是自变量的一个函数与未知函数的一个函数的乘积时，称该方程是可分离的：

$$y' = g(x)h(y)$$

这种因式分解是方程本身的性质。在 $h(y)\neq0$ 的地方，分离后的方程把依赖 $y$ 的项放在左边，把依赖 $x$ 的项放在右边。下面每个方程都具有所需形式。

+ $y' = x^2y^3$，其中 $g(x)=x^2$ 且 $h(y)=y^3$
+ $y' = e^{x+y}$，其中 $g(x)=e^x$ 且 $h(y)=e^y$
+ $y' = \frac{\cos(x)}{y}$，其中 $g(x)=\cos(x)$ 且 $h(y)=\frac{1}{y}$，在 $y\neq0$ 的任意区域内成立
+ $y'=f(y)$，其中 $g(x)=1$，这是[自治](../autonomous-differential-equations/)情形

识别这种形式有时需要先进行[因式分解](../multiplying-polynomials/)。方程 $y'=xy+x$ 是可分离的，因为它的右端为 $x(y+1)$。

有些方程不存在这样的因式分解。假设对所有实数 $x$ 和 $y$ 都有 $x+y=g(x)h(y)$。令 $y=0$，得到 $x=g(x)h(0)$，因此 $h(0)\neq0$，因为若 $h(0)=0$，就会迫使所有 $x$ 都满足 $x=0$。于是 $g(x)=x/h(0)$。再令 $y=1$，得到：

$$x+1=\frac{h(1)}{h(0)}x$$

在 $x=0$ 时，这变成 $1=0$。因此不存在这种因式分解，而方程 $y'=x+y$ 可以改用线性方程的方法求解。

## 分离变量

假设 $g$ 在自变量的某个[区间](../intervals/)上[连续](../continuous-functions/)，且 $h$ 在包含某个解 $y(x)$ 值域的区间上连续。再假设在这个值域上始终有 $h(y)\neq0$。将方程除以 $h(y)$ 得到：

$$\frac{y'(x)}{h(y(x))}=g(x)$$

令 $H$ 是 $1/h$ 的一个原函数，$G$ 是 $g$ 的一个原函数。根据[链式法则](../chain-rule/)，左端是复合函数 $H(y(x))$ 的导数：

$$\frac{d}{dx}H(y(x))=H'(y(x))y'(x)=\frac{y'(x)}{h(y(x))}$$

函数 $H(y(x))$ 和 $G(x)$ 在该区间上具有相同的导数，因此它们相差一个常数：

$$H(y(x))=G(x)+C$$

这个关系是隐式形式的通解。同样的计算可以简写为：

$$\int \frac{dy}{h(y)}=\int g(x) \ dx$$

这两个[不定积分](../indefinite-integrals/)的积分变量不同。[换元积分](../integration-by-substitution/)说明了左端为何可以看作关于 $y$ 的积分。微分符号表示变量的这种变化，它们不是被移到等式另一边的量。

当 $h$ 符号恒定时，$H'=1/h$ 也具有相同符号，因此 $H$ 严格[单调](../increasing-and-decreasing-functions/)，并且在其像上有一个[逆函数](../inverse-function/)。对隐式关系解出 $y$ 得到：

$$y(x)=H^{-1}(G(x)+C)$$

逆函数不一定能用初等表达式表示，因此隐式关系往往就是答案的最终形式。在下面的方程中，$H^{-1}$ 可以用根式表示，但无需写出它就能确定定义域：

$$y'=\frac{2x}{1+y^2}$$

这里 $h(y)=1/(1+y^2)$ 没有零点，因此对每个 $y$ 都可以进行除法。积分得到：

$$
\begin{align}
\int \left(1+y^2\right) \ dy &= \int 2x \ dx \\[6pt]
y + \frac{y^3}{3} &= x^2 + C
\end{align}
$$

函数 $H(y)=y+y^3/3$ 在 $\mathbb{R}$ 上严格递增，并且当自变量趋于 $\pm\infty$ 时，其极限分别为 $\pm\infty$，所以它把 $\mathbb{R}$ 映射到 $\mathbb{R}$ 上。于是，$C$ 的每个取值都在整条实线上确定一个解。无需写出根式形式的公式即可确定这个定义域。

## 平衡解

除以 $h(y)$ 要求 $h(y)\neq0$，因此会排除它的零点。如果 $h(y_*)=0$，常值函数 $y(x)=y_*$ 满足 $y'=0$ 且 $g(x)h(y_*)=0$，所以它在每个区间上都满足方程。这些常值解就是平衡解。

它们是否会重新出现在积分得到的解族中，取决于具体方程。考虑方程：

$$y'=(y-2)\cos(x)$$

这里 $h(y)=y-2$ 只有一个零点 $y=2$。在 $y\neq2$ 的区域内，分离并积分得到 $\ln|y-2|=\sin(x)+C_0$。取指数得到 $|y-2|=e^{C_0}e^{\sin(x)}$。$y-2$ 在解区间上符号恒定，因此非恒定解具有如下形式：

$$y(x)=2+Ae^{\sin(x)}$$

推导过程假设 $A\neq0$。当 $A=0$ 时，同一个公式给出平衡解 $y=2$，因此允许该常数取零就包含了所有解。

![图 1](/assets/differential-equations/svg/separable-differential-equations-1.svg)


方程 $y'=y^3$ 的情况不同。在 $y\neq0$ 的区域内，积分得到 $y=\pm1/\sqrt{C-2x}$，其所在区间满足 $C-2x>0$。$C$ 的任何取值都不能给出常值解 $y=0$。

> 必须在相除之前记录平衡解，然后将它们与积分得到的解族进行比较。如果解族不包含这些解，就必须单独列出。

- - -

当 $g$ 连续且 $h$ 具有连续导数时，右端 $g(x)h(y)$ 关于 $y$ 局部满足利普希茨条件，因此两个不同的解不可能相交。非恒定解不可能在其区间的有限点达到平衡值，因为唯一性会使它等于经过该点的常值解。平衡值的补集是若干区间的并，每个非恒定解都停留在其中一个区间内。

## 初值与极大区间

一个[初值问题](../initial-value-problems/)确定积分常数。下面的问题是可分离的：

$$y'=-\frac{x}{y} \qquad y(0)=3$$

右端只在 $y\neq0$ 时有定义。将方程乘以 $y$ 即可分离变量，积分得到：

$$
\begin{align}
\int y \ dy &= -\int x \ dx \\[6pt]
\frac{y^2}{2} &= -\frac{x^2}{2} + C \\[6pt]
y^2 &= C_1 - x^2
\end{align}
$$

隐式解是以原点为圆心的圆。初值给出 $C_1=9$，并选出经过 $(0,3)$ 的分支：

$$y(x)=\sqrt{9-x^2}$$

[平方根](../radicals/)在 $(-3,3)$ 上为正，并在端点处变为零；在端点处，微分方程的右端没有定义。其导数为：

$$y'(x)=-\frac{x}{\sqrt{9-x^2}}$$

当 $x$ 趋近任一端点时，它无界，因此该解没有可微延拓，而 $(-3,3)$ 是它的极大区间。右端 $-x/y$ 在 $y=0$ 轴以外的每一点都有定义，初值点是一个普通点。极大区间由解本身决定。

作为比较，考虑 $y'=x/(1+y)$ 且初值为 $y(0)=1$。分离变量得到 $(y+1)^2-x^2=4$，其隐式曲线是一个[双曲线](../hyperbola/)。初值选出 $y(x)=-1+\sqrt{x^2+4}$。由于 $1+y(x)=\sqrt{x^2+4}$ 永不为零，解的[定义域](../determining-the-domain-of-a-function/)是整条[实数轴](../real-numbers/)。

## 可化为可分离形式的方程

下面的代换可以把一些不可分离方程转化为可分离方程。

一个[齐次方程](../homogeneous-differential-equations/)的右端具有 $R(y/x)$ 的形式，但不一定是所需类型的乘积。在 $x\neq0$ 的区间上，商 $v=y/x$ 有定义。于是 $y=vx$ 且 $y'=v+xv'$，所以方程为 $xv'=R(v)-v$。分离后的形式是：

$$\frac{dv}{R(v)-v}=\frac{dx}{x}$$

$R(v)-v$ 的零点是关于 $v$ 的方程的平衡解。对应的原变量解是直线 $y=cx$。

考虑一个右端通过某个线性表达式依赖变量的方程：

$$y'=f(ax+by+c) \qquad b\neq0$$

在代换 $z=ax+by+c$ 下，有 $z'=a+by'$，因此：

$$z'=a+bf(z)$$

右端只依赖于 $z$，所以新方程是自治的。对于 $y'=(x+y)^2$，代换 $z=x+y$ 得到 $z'=1+z^2$。积分给出 $\arctan(z)=x+C$，再代回 $z=x+y$ 得到：

$$y(x)=\tan(x+C)-x$$

对每个 $C$ 和每个整数 $k$，该公式在区间上给出一个解：

$$\left(-C-\frac{\pi}{2}+k\pi, -C+\frac{\pi}{2}+k\pi\right)$$

由于[正切函数](../tangent-function/)在端点处有极点，该区间是极大的。
