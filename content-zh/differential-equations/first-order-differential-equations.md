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
  source_hash: 0b42803b83e482f0f20cba5228198c0ffd582cba1733eaed233bd620044ca58f
  translator: codex
  updated: "2026-08-11T00:00:00.000Z"
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

两个可能斜率是 $\sqrt{1-y^2}$ 和 $-\sqrt{1-y^2}$。当 $|y|=1$ 时，唯一可能的导数为零；当 $|y|>1$ 时，没有实斜率满足该方程。

## 解与极大区间

在一个[区间](../intervals/) $I$ 上，$y'=f(x,y)$ 的解是一个可微函数 $y:I\to\mathbb{R}$，满足：

$$y'(x)=f(x,y(x)) \qquad \forall x\in I$$

[定义域](../determining-the-domain-of-a-function/)是解的一部分。某个公式可能在其有定义的地方满足方程，却仍然无法延拓通过公式或方程无定义的点。

下面的方程有一些解，其极大区间在有限点处终止：

$$y'=y^2$$

在 $y\neq0$ 的区间上，该方程是[可分离的](../separable-differential-equations/)。分离变量把依赖 $y$ 的因子放在一边，把依赖 $x$ 的因子放在另一边。这里除以 $y^2$，得到：

$$\frac{1}{y^2} \ dy=1 \ dx$$

对两边[积分](../indefinite-integrals/)，得到：

$$
\begin{align}
\int y^{-2} \ dy&=\int 1 \ dx \\[6pt]
-\frac{1}{y}&=x+C_0 \\[6pt]
y&=\frac{1}{C-x}
\end{align}
$$

对每个 $C\in\mathbb{R}$，两个极大解区间为 $(-\infty,C)$ 和 $(C,+\infty)$。由于解在 $x=C$ 附近无界，无法延拓通过该点。除以 $y^2$ 排除了常值解 $y=0$，该解的极大区间为 $\mathbb{R}$。

> 含有未知函数的表达式在相除前必须检查其零点。相除可能会移除有效解。反过来，平方等运算可能会增加候选解，因此必须将每个候选解代入原方程进行检验。

非恒定特解具有固定的 $C$ 值和上述两个极大区间之一。因此，不带区间的公式是不完整的。

## 初值问题

一个[初值问题](../initial-value-problems/)包含一个微分方程，以及未知函数在某一点处的值：

$$y'=f(x,y) \qquad y(x_0)=y_0$$

从几何上看，解的图像经过 $(x_0,y_0)$，并且在每一点都具有由 $f$ 规定的斜率。初值通常会确定解族中的任意常数，但这个结论取决于方程。有些初值问题无解，有些有一个解，还有些有多个解。

下面的初值问题是可分离的：

$$y'=\frac{x}{y} \qquad y(0)=2$$

该方程只在 $y\neq0$ 时有定义，所以可以乘以 $y$ 而不改变其解。分离后的方程为：

$$y \ dy=x \ dx$$

积分得到：

$$
\begin{align}
\int y \ dy&=\int x \ dx \\[6pt]
\frac{y^2}{2}&=\frac{x^2}{2}+C \\[6pt]
y^2&=x^2+C_1
\end{align}
$$

条件 $y(0)=2$ 蕴含 $C_1=4$。方程 $y^2=x^2+4$ 有两个分支：

$$y=\pm\sqrt{x^2+4}$$

只有正分支在 $x=0$ 时的值为 $2$，因此解为：

$$y(x)=\sqrt{x^2+4}$$

[平方根](../radicals/)下的表达式对每个实数 $x$ 都为正，且解的定义域为 $\mathbb{R}$。其导数为：

$$y'(x)=\frac{x}{\sqrt{x^2+4}}$$

由于 $x/y(x)=x/\sqrt{x^2+4}$，该函数同时满足微分方程和初值条件。

## 主要类型

若干常见形式具有标准的代换或积分方法。

+ [可分离方程](../separable-differential-equations/)具有形式 $y'=g(x)h(y)$。在 $h(y)\neq0$ 的区间上，它变为 $\frac{1}{h(y)} \ dy=g(x) \ dx$，然后可以对两边积分。必须单独检查 $h$ 的零点，因为相除可能会移除常值解。

+ [线性方程](../first-order-linear-differential-equations/)具有形式 $y'+p(x)y=q(x)$。乘以只依赖 $x$ 的积分因子后，左端成为乘积的导数。当 $q=0$ 时，线性方程称为齐次方程。

+ [恰当方程](../exact-differential-equations/)具有形式 $A(x,y) \ dx+B(x,y) \ dy=0$。其左端是势函数 $\Phi(x,y)$ 的微分，解满足 $\Phi(x,y)=C$。第一步是根据 $A$ 和 $B$ 计算这个势函数。

+ “齐次”的另一种含义见[齐次方程](../homogeneous-differential-equations/)：右端只通过 $x$ 与 $y$ 的商依赖两个变量。在 $x\neq0$ 的区间上，其标准形式为 $y'=R(y/x)$；令 $v=y/x$ 后，方程关于 $v$ 可分离。

+ [自治方程](../autonomous-differential-equations/)具有形式 $y'=f(y)$，其中不显式出现 $x$。对 $f$ 的每个零点 $y_*$，函数 $y=y_*$ 都是常值平衡解。避开这些零点后，方程可分离。

+ [伯努利方程](../bernoulli-differential-equation/)具有形式 $y'+a(x)y=b(x)y^m$。当 $m\neq0,1$ 时，在幂有定义且 $y\neq0$ 的区间上，代换 $z=y^{1-m}$ 会将它变成关于 $z$ 的线性方程。

这些类型并不互斥。下面的方程同时是可分离的和线性的：

$$y'=x(1+y)$$

它是可分离的，因为它的右端是一个关于 $x$ 的函数与一个关于 $y$ 的函数的乘积。它也是线性的，因为可以将其写成：

$$y'-xy=x$$

只要补回分离变量时排除的常值解 $y=-1$，两种方法就给出同一个解族。

## 一阶线性方程

线性情形的标准形式为：

$$y'+p(x)y=q(x)$$

设 $p$ 和 $q$ 在区间 $I$ 上[连续](../continuous-functions/)。选取 $p$ 的一个固定原函数 $P$，令 $\mu=e^P$。根据[链式法则](../chain-rule/)，$\mu'=p\mu$。标准形式乘以 $\mu$ 后，[乘积法则](../differentiation-rules/)表明变换后的方程为：

$$\left(\mu y\right)'=\mu q$$

若 $Q$ 是 $\mu q$ 的一个固定原函数，则由于 $\mu=e^P>0$，通解为：

$$y=e^{-P}(Q+C)$$

对 $x_0\in I$，条件 $y(x_0)=y_0$ 恰好确定一个 $C$ 值。

设某个物体的温度为 $T(t)$，周围环境的恒定温度为 $T_a$。牛顿冷却定律假设 $T'$ 等于温差 $T-T_a$ 乘以 $-k$。它的线性形式为：

$$T'+kT=kT_a \qquad k>0$$

$p(t)=k$ 和 $q(t)=kT_a$ 都是常数，因此积分因子为 $\mu(t)=e^{kt}$。乘以该因子后，变换后的方程为：

$$\left(e^{kt}T\right)'=kT_ae^{kt}$$

函数 $T_ae^{kt}$ 是 $kT_ae^{kt}$ 的一个原函数，所以 $e^{kt}T=T_ae^{kt}+C$。由于 $e^{kt}>0$，温度为：

$$T(t)=T_a+Ce^{-kt}$$

常数 $C$ 就是初始温差 $T(0)-T_a$，并且当 $t\to+\infty$ 时，温度趋近于 $T_a$。

一般方法、解集结构、初值问题、奇异首项系数与进一步应用详见[一阶线性微分方程](../first-order-linear-differential-equations/)。

## 恰当、齐次、自治与伯努利方程

一个[恰当微分方程](../exact-differential-equations/)具有形式：

$$A(x,y) \ dx+B(x,y) \ dy=0$$

如果某个函数 $\Phi(x,y)$ 的[偏导数](../partial-derivatives/)满足 $\Phi_x=A$ 和 $\Phi_y=B$，它就是恰当的。此时方程为 $d\Phi=0$，因此其解具有隐式形式：

$$\Phi(x,y)=C$$

假设 $A$ 和 $B$ 在一个开单连通区域上具有连续的一阶偏导数。方程在该区域上恰当，当且仅当：

$$\frac{\partial A}{\partial y}=\frac{\partial B}{\partial x}$$

单连通性保证逆命题成立。如果没有该条件，带孔区域上的微分形式可能满足这个等式，却在整个区域上没有单值势函数。要计算 $\Phi$，先对一个系数积分，再与另一个系数比较。

不满足该判据的方程乘以一个非零因子后可能变为恰当方程。若函数 $\mu(x,y)$ 使 $\mu A \ dx+\mu B \ dy=0$ 变为恰当方程，那么该函数就是方程的一个[积分因子](../integrating-factors/)。记上面的两个偏导数为 $A_y$ 和 $B_x$。如果积分因子只依赖于 $x$，恰当性要求 $\mu A_y=\mu'B+\mu B_x$。在 $B\neq0$ 的区域上，两边除以 $\mu B$ 得到：

$$\frac{\mu'}{\mu}=\frac{A_y-B_x}{B}$$

当右端只依赖于 $x$ 时，这样的因子存在。类似地，在 $A\neq0$ 的区域上，只依赖于 $y$ 的因子必须满足 $\frac{1}{\mu}\frac{d\mu}{dy}=(B_x-A_y)/A$；当右端只依赖于 $y$ 时，这样的因子存在。考虑方程：

$$\left(3xy+y^2\right) \ dx+\left(x^2+xy\right) \ dy=0$$

两个偏导数为 $A_y=3x+2y$ 和 $B_x=2x+y$。当 $B=x(x+y)\neq0$ 时，积分因子判据中的表达式为：

$$\frac{A_y-B_x}{B}=\frac{x+y}{x(x+y)}=\frac{1}{x}$$

这个计算提示取 $\mu(x)=x$。在半平面 $x>0$ 或 $x<0$ 上，该因子非零；直接求导可验证，即使在 $x+y=0$ 的点处，方程也恰当。乘以 $x$ 后，方程的势函数为 $\Phi(x,y)=x^3y+\frac12x^2y^2$，解满足 $\Phi(x,y)=C$。

在 $x\neq0$ 的区间上，商意义下的[齐次方程](../homogeneous-differential-equations/)具有标准形式：

$$y'=R\left(\frac{y}{x}\right)$$

右端只通过两个变量的商依赖它们。如果 $A\,dx+B\,dy=0$ 中的 $A$ 和 $B$ 是同次数 $k$ 的齐次函数，那么在 $x\neq0$ 且 $B\neq0$ 的每个区域上，标准形式只依赖 $y/x$。齐次性意味着，对每个 $\lambda>0$，都有 $A(\lambda x,\lambda y)=\lambda^kA(x,y)$ 和 $B(\lambda x,\lambda y)=\lambda^kB(x,y)$。公因子 $\lambda^k$ 在商 $-A/B$ 中消去。令 $v=y/x$，则 $y=vx$ 且 $y'=v+xv'$，变换后的方程为：

$$xv'=R(v)-v$$

这个方程是可分离的。$R(v)=v$ 的每个根 $c$ 都在 $x\neq0$ 的区间上给出解直线 $y=cx$；在除以 $R(v)-v$ 之前，必须记录这些解。考虑方程：

$$y'=\frac{y}{x}+\frac{y^2}{x^2}$$

令 $v=y/x$，方程变为 $xv'=v^2$。当 $v\neq0$ 时，分离变量并积分，得到 $-1/v=\ln|x|+C$。因为 $v=y/x$，非零解为：

$$y(x)=-\frac{x}{\ln|x|+C}$$

该公式在 $x\neq0$ 且 $\ln|x|+C\neq0$ 的任意区间上定义一个解。被相除排除的根 $v=0$ 对应解 $y=0$，其两个极大区间为 $(-\infty,0)$ 和 $(0,+\infty)$。

一个[自治方程](../autonomous-differential-equations/)是：

$$y'=f(y)$$

$f$ 的每个零点 $y_*$ 都给出一个常值解 $y=y_*$。在除以 $f(y)$ 之前，必须记录这些平衡解。在 $f(y)\neq0$ 的区间上，非恒定解满足：

$$\frac{1}{f(y)} \ dy=1 \ dx$$

$f(y)$ 的符号足以判断单调性。当 $f(y)>0$ 时，解递增；当 $f(y)<0$ 时，解递减。

一个[伯努利方程](../bernoulli-differential-equation/)是：

$$y'+a(x)y=b(x)y^m$$

设 $m\neq0,1$，并在幂有定义且 $y\neq0$ 的区间上工作。代换 $z=y^{1-m}$ 给出：

$$z'=(1-m)y^{-m}y'$$

伯努利方程除以 $y^m$ 再乘以 $1-m$ 后，得到关于 $z$ 的线性方程：

$$z'+(1-m)a(x)z=(1-m)b(x)$$

由于条件 $y\neq0$ 而排除的任何解，都必须代入原方程进行检查。

## 存在性与唯一性

考虑初值问题：

$$y'=f(x,y) \qquad y(x_0)=y_0$$

方程和初值本身并不能保证存在解。如果 $f$ 在包含 $(x_0,y_0)$ 的矩形上连续，皮亚诺定理保证在 $x_0$ 附近的某个区间上至少存在一个解。如果 $f$ 还关于 $y$ 局部满足利普希茨条件，则恰好存在一个局部解。这些就是皮卡–林德勒夫定理的假设。

局部利普希茨条件指：在一个更小的矩形上，存在常数 $L>0$，使得只要 $(x,y_1)$ 和 $(x,y_2)$ 属于该矩形，就有：

$$\left|f(x,y_1)-f(x,y_2)\right|\leq L\left|y_1-y_2\right|$$

初始点附近连续的偏导数 $\partial f/\partial y$ 是该条件的充分条件。

皮卡–林德勒夫定理的证明从问题的积分形式开始。根据[微积分基本定理](../fundamental-theorem-of-calculus/)，微分问题等价于：

$$y(x)=y_0+\int_{x_0}^{x}f\left(t,y(t)\right) \ dt$$

定义积分算子 $T$：

$$(T\phi)(x):=y_0+\int_{x_0}^{x}f\left(t,\phi(t)\right) \ dt$$

连续函数恰在它是 $T$ 的不动点时满足初值问题。取包含 $x_0$ 的足够短闭区间 $J$，令 $C(J)$ 为 $J$ 上连续实函数组成的空间，并赋予一致范数 $\|u\|_\infty=\max_{x\in J}|u(x)|$。把 $T$ 限制在一个闭子集上，该子集中的函数图像都位于 $f$ 连续且利普希茨常数为 $L$ 的闭矩形内。$f$ 在该矩形上连续，因而有界；当 $J$ 足够短时，算子把该子集映到自身。

若 $h=\max_{x\in J}|x-x_0|$，则对该子集中的任意两个函数 $\phi$ 和 $\psi$：

$$\|T\phi-T\psi\|_\infty\leq Lh\|\phi-\psi\|_\infty$$

选取 $J$ 使 $Lh<1$。空间 $C(J)$ 完备，限制后的子集闭，因而也完备。巴拿赫不动点定理说明 $T$ 有唯一不动点。从常值函数 $\phi_0(x)=y_0$ 开始，皮卡迭代 $\phi_{k+1}=T\phi_k$ 一致收敛到该不动点，而它就是初值问题的解。

连续性本身不能保证唯一性。考虑问题：

$$y'=3|y|^{2/3} \qquad y(0)=0$$

经过 $(0,0)$ 的两个解为：

$$y_1(x)=0 \qquad y_2(x)=x^3$$

对于 $y_2=x^3$，导数为 $3x^2$，而 $3|x^3|^{2/3}=3x^2$。函数 $f(y)=3|y|^{2/3}$ 在 $y=0$ 处连续，但在那里不满足局部利普希茨条件。这两个解并不与唯一性定理矛盾，因为该定理的利普希茨假设没有满足。

局部存在性与唯一性不意味着解对每个实数 $x$ 都有定义。对上面讨论的方程 $y'=y^2$，条件 $y(0)=1$ 蕴含 $C=1$。唯一局部解是 $y=1/(1-x)$，其极大区间为 $(-\infty,1)$，并在 $x\to1^-$ 时无界。

相反，若[一阶线性方程](../first-order-linear-differential-equations/)中的 $p$ 和 $q$ 在区间 $I$ 上连续，且 $x_0\in I$，那么对 $x_0$ 处的每个初值，线性问题在整个 $I$ 上都有唯一解。

## 将高阶方程化为一阶方程组

某些高阶方程可以直接化为一阶方程。如果二阶方程中不出现未知函数本身，其形式为：

$$F(x,y',y'')=0$$

令 $p=y'$，一阶方程为 $F(x,p,p')=0$。求得 $p$ 后，对 $y'=p$ 积分即可得到 $y$。

如果方程中不出现自变量，其形式为：

$$F(y,y',y'')=0$$

在可以将 $y$ 作为自变量的区间上，令 $p(y)=y'$。根据[链式法则](../chain-rule/)，$y''=p\frac{dp}{dy}$，所以方程关于 $p(y)$ 是一阶的。对 $yy''=(y')^2$，变换后的方程为：

$$yp\frac{dp}{dy}=p^2$$

在 $p\neq0$ 且 $y\neq0$ 的区间上，除以 $p$ 和 $y$，得到 $\frac{dp}{p}=\frac{dy}{y}$。积分后，$\ln|p|=\ln|y|+C$，因而 $p=C_1y$。剩下的方程 $y'=C_1y$ 的解为：

$$y(x)=C_2e^{C_1x}$$

当 $p=0$ 时，解为常值函数；当 $C_1=0$ 时，上式也包含这些解。

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
