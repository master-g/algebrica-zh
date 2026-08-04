---
title: 一阶微分方程
title_en: First-Order Differential Equations
source: https://algebrica.org/first-order-differential-equations/
license: CC BY-NC 4.0
tags:
  - autonomous-differential-equations
  - bernoulli-differential-equation
  - differential-equations
  - exact-differential-equations
  - first-order-differential-equations
  - homogeneous-differential-equations
  - initial-value-problem
  - integrating-factor
  - linear-differential-equations
  - ordinary-differential-equations
  - separable-differential-equations
translation:
  status: current
  source_hash: fec9114a0e4e2e9438f8357db9ab8a31a556509cdc2e441e4396248d26068039
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 一阶方程

当标量[常微分方程](../differential-equations/)中出现一阶[导数](../derivatives/) $y'$，而不存在任何[高阶导数](../higher-order-derivatives/)时，它就是一阶方程。其隐式形式为：

$$F(x,y,y')=0$$

变量 $x$ 是自变量，$y=y(x)$ 是未知函数。如果能够解出 $y'$，它就具有标准形式：

$$y'=f(x,y)$$

在标准形式中，$f(x,y)$ 是点 $(x,y)$ 处的斜率。解是一个可微函数，其图像在每一点都具有这个斜率。并非每个隐式方程都只有一个标准形式。例如，方程：

$$(y')^2+y^2=1$$

在 $|y|<1$ 的任何地方，它的两个标准形式为：

$$y'=\pm\sqrt{1-y^2}$$

两个符号表示通过同一点的两种可能斜率。当 $|y|=1$ 时，唯一可能的导数为零；当 $|y|>1$ 时，没有实斜率满足该方程。

## 解与极大区间

在一个[区间](../intervals/) $I$ 上，$y'=f(x,y)$ 的解是一个可微函数 $y:I\to\mathbb{R}$，满足：

$$y'(x)=f(x,y(x)) \qquad \forall x\in I$$

[定义域](../determining-the-domain-of-a-function/)是解的一部分。某个公式可能在其有定义的地方满足方程，却仍然无法延拓通过公式或方程无定义的点。

下面的方程有一些解，其极大区间在有限点处终止：

$$y'=y^2$$

在 $y\neq0$ 的区间上，分离变量得到：

$$\frac{1}{y^2}\frac{dy}{dx}=1$$

[不定积分](../indefinite-integrals/)给出：

$$
\begin{align}
\int y^{-2} \ dy&=\int 1 \ dx \\[6pt]
-\frac{1}{y}&=x+C_0 \\[6pt]
y&=\frac{1}{C-x}
\end{align}
$$

对于每个 $C\in\mathbb{R}$，这个公式都有两个极大区间 $(-\infty,C)$ 和 $(C,+\infty)$。由于它的值在那里无界，无法延拓通过 $x=C$。除以 $y^2$ 时排除了常值解 $y=0$，因此必须将它补回解族中。

> 含有未知函数的表达式在相除前必须检查其零点。相除可能会移除有效解。反过来，平方等运算可能会增加候选解，因此必须将每个候选解代入原方程进行检验。

每个 $C$ 的取值和两个极大区间中的一个共同给出解族中的一个成员。特解具有固定的 $C$ 值和指定区间。因此，不带区间的公式是不完整的。

## 初值问题

一个[初值问题](../initial-value-problems/)包含一个微分方程，以及未知函数在某一点处的值：

$$y'=f(x,y) \qquad y(x_0)=y_0$$

从几何上看，解的图像经过 $(x_0,y_0)$，并且在每一点都具有由 $f$ 规定的斜率。初值通常会确定解族中的任意常数，但这个结论取决于方程。有些初值问题无解，有些有一个解，还有些有多个解。

下面的初值问题是可分离的：

$$y'=\frac{x}{y} \qquad y(0)=2$$

该方程只在 $y\neq0$ 时有定义。两边乘以 $y$，即可分离变量：

$$y\frac{dy}{dx}=x$$

积分得到：

$$
\begin{align}
\int y \ dy&=\int x \ dx \\[6pt]
\frac{y^2}{2}&=\frac{x^2}{2}+C \\[6pt]
y^2&=x^2+C_1
\end{align}
$$

条件 $y(0)=2$ 给出 $C_1=4$。解出 $y$ 可得两个分支：

$$y=\pm\sqrt{x^2+4}$$

只有正分支在 $x=0$ 时的值为 $2$，因此解为：

$$y(x)=\sqrt{x^2+4}$$

[平方根](../radicals/)下的表达式对每个实数 $x$ 都为正，且解的定义域为 $\mathbb{R}$。其导数为：

$$y'(x)=\frac{x}{\sqrt{x^2+4}}$$

由于 $x/y(x)=x/\sqrt{x^2+4}$，该函数同时满足微分方程和初值条件。

## 主要类型

一阶方程的形式通常暗示了应使用哪种代换或积分方法。

+ [可分离方程](../separable-differential-equations/)具有形式 $y'=g(x)h(y)$。在 $h(y)\neq0$ 的区间上，它变为 $\frac{1}{h(y)} \ dy=g(x) \ dx$，然后可以对两边积分。必须单独检查 $h$ 的零点，因为相除可能会移除常值解。

+ [线性方程](../first-order-linear-differential-equations/)具有形式 $y'+p(x)y=q(x)$。只依赖于 $x$ 的积分因子可以使左端成为一个乘积的导数。

+ [恰当方程](../exact-differential-equations/)具有形式 $A(x,y) \ dx+B(x,y) \ dy=0$。其左端是势函数 $\Phi(x,y)$ 的微分，解满足 $\Phi(x,y)=C$。第一步是根据 $A$ 和 $B$ 计算这个势函数。

+ [齐次方程](../homogeneous-differential-equations/)的右端只通过 $x$ 与 $y$ 的商来依赖这两个变量，因此在 $x\neq0$ 的区间上，其标准形式为 $y'=R(y/x)$。代换 $v=y/x$ 后得到关于 $v$ 的可分离方程。

+ [自治方程](../autonomous-differential-equations/)具有形式 $y'=f(y)$，其中不显式出现 $x$。$f$ 的零点给出常值平衡解。避开这些零点后，方程是可分离的。

+ [伯努利方程](../bernoulli-differential-equation/)具有形式 $y'+a(x)y=b(x)y^m$。当 $m\neq0,1$ 时，在幂有定义且 $y\neq0$ 的区间上，代换 $z=y^{1-m}$ 会将它变成关于 $z$ 的线性方程。

这些类型并不互斥。下面的方程同时是可分离的和线性的：

$$y'=x(1+y)$$

它是可分离的，因为它的右端是一个关于 $x$ 的函数与一个关于 $y$ 的函数的乘积。它也是线性的，因为可以将其写成：

$$y'-xy=x$$

两种分类都可以用来求出同一个解族。

## 一阶线性方程

线性情形的标准形式为：

$$y'+p(x)y=q(x)$$

在 $p$ 和 $q$ [连续](../continuous-functions/)的区间上，[积分因子](../integrating-factors/)为：

$$\mu(x)=e^{\int p(x) \ dx}$$

[微积分基本定理](../fundamental-theorem-of-calculus/)和[链式法则](../chain-rule/)给出 $\mu'(x)=p(x)\mu(x)$。两边乘以 $\mu(x)$ 得到：

$$\mu(x)y'+\mu(x)p(x)y=\mu(x)q(x)$$

根据[乘积法则](../differentiation-rules/)，左端是 $\mu(x)y$ 的导数：

$$\left(\mu(x)y\right)'=\mu(x)q(x)$$

积分一次得到：

$$\mu(x)y=\int \mu(x)q(x) \ dx+C$$

因此：

$$y=\frac{1}{\mu(x)}\left(\int \mu(x)q(x) \ dx+C\right)$$

指定一个初值后，就能确定任意常数 $C$。

设某个物体的温度为 $T(t)$，周围环境的恒定温度为 $T_a$。牛顿冷却定律假设 $T'$ 等于温差 $T-T_a$ 乘以 $-k$。它的线性形式为：

$$T'+kT=kT_a \qquad k>0$$

$p(t)=k$ 和 $q(t)=kT_a$ 都是常数，因此积分因子为 $\mu(t)=e^{kt}$，方程变为：

$$\left(e^{kt}T\right)'=kT_ae^{kt}$$

积分一次得到 $e^{kt}T=T_ae^{kt}+C$。解出 $T$ 得：

$$T(t)=T_a+Ce^{-kt}$$

常数 $C$ 就是初始温差 $T(0)-T_a$，并且当 $t\to+\infty$ 时，温度趋近于 $T_a$。

更多例子见[一阶线性微分方程](../first-order-linear-differential-equations/)条目。

## 恰当、齐次、自治与伯努利方程

一个[恰当微分方程](../exact-differential-equations/)具有形式：

$$A(x,y) \ dx+B(x,y) \ dy=0$$

如果某个函数 $\Phi(x,y)$ 的偏导数满足 $\Phi_x=A$ 和 $\Phi_y=B$，它就是恰当的。此时方程为 $d\Phi=0$，因此其解具有隐式形式：

$$\Phi(x,y)=C$$

假设 $A$ 和 $B$ 在一个单连通区域上具有连续的一阶偏导数。方程在该区域上恰当，当且仅当：

$$\frac{\partial A}{\partial y}=\frac{\partial B}{\partial x}$$

这个等式是检验恰当性的判据。要计算 $\Phi$，先对一个系数积分，再与另一个系数比较。

不满足该判据的方程乘以一个非零因子后可能变为恰当方程。若函数 $\mu(x,y)$ 使 $\mu A \ dx+\mu B \ dy=0$ 变为恰当方程，那么 $\mu(x,y)$ 就是该方程的一个[积分因子](../integrating-factors/)。记上面的两个偏导数为 $A_y$ 和 $B_x$。如果积分因子只依赖于 $x$，恰当性要求 $\mu A_y=\mu'B+\mu B_x$。在 $B\neq0$ 的区域上，两边除以 $\mu B$ 得到：

$$\frac{\mu'}{\mu}=\frac{A_y-B_x}{B}$$

当右端只依赖于 $x$ 时，这样的因子存在。类似地，在 $A\neq0$ 的区域上，只依赖于 $y$ 的因子必须满足 $\frac{1}{\mu}\frac{d\mu}{dy}=(B_x-A_y)/A$；当右端只依赖于 $y$ 时，这样的因子存在。考虑方程：

$$\left(3xy+y^2\right) \ dx+\left(x^2+xy\right) \ dy=0$$

两个偏导数为 $A_y=3x+2y$ 和 $B_x=2x+y$，因此 $(A_y-B_x)/B=1/x$。在 $x\neq0$ 的区域上，函数 $\mu(x)=x$ 非零，是一个积分因子。乘以 $x$ 后得到恰当方程，其势函数为 $\Phi(x,y)=x^3y+\frac{1}{2}x^2y^2$，解满足 $\Phi(x,y)=C$。

[齐次方程](../homogeneous-differential-equations/)在 $x\neq0$ 的区间上具有标准形式：

$$y'=R\left(\frac{y}{x}\right)$$

右端只通过两个变量的商来依赖它们。如果 $A \ dx+B \ dy=0$ 中的 $A$ 和 $B$ 是同阶数 $k$ 的齐次函数，该方程也具有这种标准形式。齐次性意味着，对于每个 $\lambda>0$，都有 $A(\lambda x,\lambda y)=\lambda^kA(x,y)$ 和 $B(\lambda x,\lambda y)=\lambda^kB(x,y)$。公因子 $\lambda^k$ 会在商 $-A/B$ 中消去。令 $v=y/x$，则 $y=vx$ 且 $y'=v+xv'$，于是方程变为：

$$xv'=R(v)-v$$

这个方程是可分离的。$R(v)=v$ 的每个根 $c$ 都在 $x\neq0$ 的区间上给出解直线 $y=cx$；在除以 $R(v)-v$ 之前，必须记录这些解。考虑方程：

$$y'=\frac{y}{x}+\frac{y^2}{x^2}$$

代换得到 $xv'=v^2$。当 $v\neq0$ 时，分离变量并积分得到 $-1/v=\ln|x|+C$，因此：

$$y(x)=-\frac{x}{\ln|x|+C}$$

该公式在 $x\neq0$ 且 $\ln|x|+C\neq0$ 的任意区间上定义一个解。被除法排除的根 $v=0$ 给出解 $y=0$，其定义区间不能包含 $0$。

> “齐次”一词在线性方程中还有一个无关的含义，即右端为零。上下文会区分这两种用法。

一个[自治方程](../autonomous-differential-equations/)是：

$$y'=f(y)$$

$f$ 的每个零点 $y_*$ 都给出一个常值解 $y=y_*$。在除以 $f(y)$ 之前，必须记录这些平衡解。在 $f(y)\neq0$ 的区间上，非恒定解满足：

$$\frac{1}{f(y)} \ dy=dx$$

$f(y)$ 的符号足以判断单调性。当 $f(y)>0$ 时，解递增；当 $f(y)<0$ 时，解递减。

一个[伯努利方程](../bernoulli-differential-equation/)是：

$$y'+a(x)y=b(x)y^m$$

设 $m\neq0,1$，并在幂有定义且 $y\neq0$ 的区间上工作。代换 $z=y^{1-m}$ 给出：

$$z'=(1-m)y^{-m}y'$$

除以 $y^m$ 后，伯努利方程变为关于 $z$ 的线性方程：

$$z'+(1-m)a(x)z=(1-m)b(x)$$

由于条件 $y\neq0$ 而排除的任何解，都必须代入原方程进行检查。

## 存在性与唯一性

考虑初值问题：

$$y'=f(x,y) \qquad y(x_0)=y_0$$

方程和初值本身并不能保证存在解。如果 $f$ 在包含 $(x_0,y_0)$ 的矩形上连续，皮亚诺定理保证在 $x_0$ 附近的某个区间上至少存在一个解。如果 $f$ 关于 $y$ 局部满足利普希茨条件，则至多有一个解经过 $(x_0,y_0)$。这两个假设结合起来，就得到皮卡–林德勒夫定理所断言的唯一局部解。在初始点附近，连续的[偏导数](../partial-derivatives/) $\partial f/\partial y$ 足以保证该局部利普希茨条件。

皮卡–林德勒夫定理的证明从将问题写成积分形式开始。从 $x_0$ 积分到 $x$ 并使用初值，得到：

$$y(x)=y_0+\int_{x_0}^{x}f\left(t,y(t)\right) \ dt$$

在 $x_0$ 附近的某个区间上，一个连续函数满足这个关系，当且仅当它在那里满足初值问题。从常值函数 $y_0(x)=y_0$ 开始，定义皮卡迭代：

$$y_{k+1}(x)=y_0+\int_{x_0}^{x}f\left(t,y_k(t)\right) \ dt$$

在足够短的区间上，利普希茨条件使这个递推中的积分算子在一致范数下成为压缩映射。迭代序列一致收敛到它的唯一不动点，而这个不动点就是初值问题的解。

连续性本身不能保证唯一性。考虑问题：

$$y'=3|y|^{2/3} \qquad y(0)=0$$

经过 $(0,0)$ 的两个解为：

$$y_1(x)=0 \qquad y_2(x)=x^3$$

对于 $y_2=x^3$，导数为 $3x^2$，而 $3|x^3|^{2/3}=3x^2$。函数 $f(y)=3|y|^{2/3}$ 在 $y=0$ 处连续，但在那里不满足局部利普希茨条件。这两个解并不与唯一性定理矛盾，因为该定理的利普希茨假设没有满足。

存在性和唯一性是局部结论。上面讨论的方程 $y'=y^2$ 也说明了这一点。初值 $y(0)=1$ 选出 $C=1$，因此唯一的局部解是 $y=1/(1-x)$。它的极大区间为 $(-\infty,1)$，当 $x\to1^-$ 时解变得无界。

如果线性方程 $y'+p(x)y=q(x)$ 中的 $p$ 和 $q$ 在区间 $I$ 上连续，且 $x_0\in I$，那么积分因子在整个 $I$ 上都非零。其公式对整个 $I$ 上的每个初值都给出一个解。

## 将高阶方程化为一阶方程组

某些高阶方程可以直接化为一阶方程。如果二阶方程中不出现未知函数本身，其形式为：

$$F(x,y',y'')=0$$

代换 $p=y'$ 得到一阶方程 $F(x,p,p')=0$。解出 $p$ 并积分一次，就能恢复 $y$。

如果方程中不出现自变量，其形式为：

$$F(y,y',y'')=0$$

在可以将 $y$ 作为自变量的区间上，令 $p(y)=y'$。[链式法则](../chain-rule/)给出 $y''=p\frac{dp}{dy}$，于是方程关于 $p(y)$ 是一阶的。对于 $yy''=(y')^2$，这个代换给出：

$$yp\frac{dp}{dy}=p^2$$

在 $p\neq0$ 且 $y\neq0$ 的区间上，相除得到 $y\frac{dp}{dy}=p$，因此 $\frac{dp}{p}=\frac{dy}{y}$，从而 $p=C_1y$。剩下的方程 $y'=C_1y$ 的解为：

$$y(x)=C_2e^{C_1x}$$

被排除的情形 $p=0$ 给出常值解，而当 $C_1=0$ 时，上式也包含这些解。

标准形式的任意 $n$ 阶方程都可以改写为一个由 $n$ 个一阶方程组成的方程组。一个标准形式的二阶方程为：

$$y''=G(x,y,y')$$

令 $y_1=y$ 且 $y_2=y'$。该方程等价于[微分方程组](../systems-of-differential-equations/)：

$$
\begin{align}
y_1'&=y_2 \\[6pt]
y_2'&=G(x,y_1,y_2)
\end{align}
$$

对于 $n$ 阶方程，令 $y_1=y$、$y_2=y'$、$\ldots$、$y_n=y^{(n-1)}$。所得一阶方程组有 $n$ 个未知函数。因此，一阶方程组的存在性与唯一性结论同样适用于高阶方程。
