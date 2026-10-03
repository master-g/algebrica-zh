---
title: 一阶线性微分方程
title_en: First-Order Linear Differential Equations
source: https://algebrica.org/first-order-linear-differential-equations/
license: CC BY-NC 4.0
tags:
  - differential-equations
  - first-order-differential-equations
  - initial-value-problem
  - integrating-factor
  - linear-differential-equations
  - ordinary-differential-equations
  - separable-differential-equations
translation:
  status: current
  source_hash: 25e2ebba1ceb62834a0e0ff2c684f1612e5777e31b197981ed5459337c5b8d52
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 标准形式

如果未知函数及其导数只以一次幂出现，不相乘，也不作为非线性函数的自变量，[一阶微分方程](../first-order-differential-equations/)就是线性的。它是一阶的[线性微分方程](../linear-differential-equations/)。它的标准形式为：

$$y'+p(x)y=q(x)$$

系数 $p$ 和右端 $q$ 只依赖于自变量。如果 $q$ 在整个区间上为零，方程是齐次的，否则是非齐次的。

+ $y'+3y=e^x$ 是线性的，其中 $p(x)=3$，$q(x)=e^x$。
+ $y'+\frac{y}{x}=\ln(x)$ 在 $(0,\infty)$ 所含的每个区间上是线性的。
+ $y'+y^2=x$ 不是线性的，因为未知函数被平方了。
+ $yy'=x$ 不是线性的，因为未知函数与它的导数相乘。
+ $y'+\sin(y)=0$ 不是线性的，因为 $y$ 是正弦的自变量。

在 $a_1(x)\neq0$ 的区间上，可以把写成 $a_1(x)y'+a_0(x)y=g(x)$ 的方程除以 $a_1(x)$，化为标准形式。因此，这个方法适用于首项系数不为零的区间。

线性是对未知函数怎样进入方程的要求。函数 $p$ 和 $q$ 可以是 $x$ 的非线性函数。方程 $y'+e^{x^2}y=\tan(x)$ 是线性的，而 $y'=y^2$ 不是。

## 积分因子

把标准形式乘以函数 $\mu(x)$ 之后，方程为：

$$\mu(x)y'+\mu(x)p(x)y=\mu(x)q(x)$$

由[乘积法则](../differentiation-rules/)，$(\mu y)'=\mu y'+\mu'y$。因此，上面的左端是乘积 $\mu y$ 的导数，恰好当：

$$\mu'(x)=p(x)\mu(x)$$

有一个这样的函数就够了。假设 $p$ 在[区间](../intervals/) $I$ 上[连续](../continuous-functions/)。由[微积分基本定理](../fundamental-theorem-of-calculus/)，$p$ 在 $I$ 上有原函数 $P$。由[链式法则](../chain-rule/)得到：

$$\left(e^{P(x)}\right)'=P'(x)e^{P(x)}=p(x)e^{P(x)}$$

于是 $\mu(x)=e^{P(x)}$ 是方程的一个[积分因子](../integrating-factors/)。通常的记法是：

$$\mu(x)=e^{\int p(x) \ dx}$$

在这里和下文中，不带附加常数的不定积分表示一个固定的原函数。$p$ 在 $I$ 上的两个原函数相差一个常数 $k$，所以相应的因子相差非零常数 $e^k$。用哪个因子，解集都相同。由于指数函数在 $I$ 上为正，可以在整个区间上除以 $\mu(x)$。

## 通解

取 $\mu(x)=e^{P(x)}$，方程为：

$$\left(\mu(x)y\right)'=\mu(x)q(x)$$

如果 $q$ 在 $I$ 上连续，右端就连续。对两边[积分](../indefinite-integrals/)之后，得到：

$$\mu(x)y=\int\mu(x)q(x) \ dx+C$$

由于在 $I$ 上 $\mu(x)>0$，通解为：

$$y(x)=e^{-P(x)}\left(\int e^{P(x)}q(x) \ dx+C\right)$$

每一步变换都是可逆的，所以这个函数族恰好是 $I$ 上的解集。没有丢失任何解，因为唯一的除法是除以正函数 $\mu$。与此不同，[分离变量法](../separable-differential-equations/)在需要除以依赖于 $y$ 的因子时，可能丢失常数解。

计算分四步。

+ 选取一个区间，在其上首项系数不为零，并且相除后得到的函数 $p$ 和 $q$ 连续，然后把方程写成 $y'+p(x)y=q(x)$ 的形式。
+ 选取 $p$ 的一个原函数 $P$，令 $\mu(x)=e^{P(x)}$。
+ 把方程乘以 $\mu$，得到 $(\mu y)'=\mu q$。
+ 积分，再除以正函数 $\mu$。

考虑区间 $\left(-\frac{\pi}{2},\frac{\pi}{2}\right)$ 上的下列方程。

$$y'+\tan(x)y=\cos(x)$$

[正切](../tangent-function/)在这个区间上连续。由于余弦在区间上为正，函数 $P(x)=-\ln\left(\cos(x)\right)$ 是正切的一个原函数。积分因子为：

$$\mu(x)=e^{-\ln(\cos(x))}=\frac{1}{\cos(x)}$$

乘以 $1/\cos(x)$ 之后，右端为 $1$，方程为：

$$\left(\frac{y}{\cos(x)}\right)'=1$$

积分，然后乘以 $\cos(x)$。两个等式为：

$$
\begin{align}
\frac{y}{\cos(x)}&=x+C \\[6pt]
y(x)&=(x+C)\cos(x)
\end{align}
$$

导数为 $y'(x)=\cos(x)-(x+C)\sin(x)$，含 $x+C$ 的项相消，所以 $y'+\tan(x)y=\cos(x)$。对 $C$ 的每个值，这个函数都是整个区间上的解。系数 $\tan(x)$ 在 $x=\pm\pi/2$ 处没有定义，所以方程在两个端点处都没有定义。

## 解集的结构

与 $y'+p(x)y=q(x)$ 相对应的齐次方程是：

$$y'+p(x)y=0$$

乘以 $\mu=e^P$ 之后，齐次方程为 $\left(e^{P(x)}y\right)'=0$。因此 $e^{P(x)}y$ 在 $I$ 上为常数，齐次方程的解为：

$$y(x)=Ce^{-P(x)}$$

$I$ 上的齐次解是单个函数 $e^{-P}$ 的倍数，这个函数处处不为零。它们构成一维的[向量空间](../vector-spaces/)。

现在假设 $y_1$ 和 $y_2$ 都是非齐次方程的解。两个方程相减得到：

$$(y_1-y_2)'+p(x)(y_1-y_2)=0$$

它们的差是齐次方程的解。反过来，一个非齐次解与一个齐次解的和是非齐次方程的另一个解。因此，如果 $y_p$ 是一个固定的解，$I$ 上的解集就是：

$$\{\ y_p+Ce^{-P(x)} \mid C\in\mathbb{R} \ \}$$

解集是一维齐次解空间的平移，因而是 $I$ 上可导函数空间中的一条仿射直线。如果 $Q$ 是 $e^Pq$ 的一个固定的原函数，那么 $e^{-P}Q$ 是一个特解，$Ce^{-P}$ 是齐次方程的通解。

考虑方程：

$$y'+y=x$$

积分因子为 $\mu(x)=e^x$，所以 $\left(e^xy\right)'=xe^x$。由[分部积分法](../integration-by-parts/)，函数 $(x-1)e^x$ 是 $xe^x$ 的一个原函数。因此通解为：

$$y(x)=x-1+Ce^{-x}$$

函数 $y_p(x)=x-1$ 是方程的解，$Ce^{-x}$ 是 $y'+y=0$ 的通解。如果把 $y_p$ 换成另一个特解，例如 $x-1+e^{-x}$，解集不变，因为 $x-1+e^{-x}+Ce^{-x}=x-1+(C+1)e^{-x}$。

- - -

线性还把右端不同的方程的解联系起来。假设 $y_1$ 是 $y'+p(x)y=q_1(x)$ 的解，$y_2$ 是 $y'+p(x)y=q_2(x)$ 的解。对任意常数 $c_1$ 和 $c_2$，下面的恒等式成立：

$$(c_1y_1+c_2y_2)'+p(x)(c_1y_1+c_2y_2)=c_1q_1(x)+c_2q_2(x)$$

如果右端是一个和，可以为每一项各取一个解再相加。例如，常值函数 $y_1=1$ 是 $y'+y=1$ 的解，而 $y_2=x-1$ 是 $y'+y=x$ 的解。它们的和 $y_1+y_2=x$ 是 $y'+y=x+1$ 的解。

## 初值问题

假设 $p$ 和 $q$ 在区间 $I$ 上连续，并设 $x_0\in I$。[初值问题](../initial-value-problems/)为：

$$y'+p(x)y=q(x) \qquad y(x_0)=y_0$$

选取在初始点处为零的原函数：

$$P(x)=\int_{x_0}^{x}p(t) \ dt$$

由于 $P(x_0)=0$，把 $\left(e^Py\right)'=e^Pq$ 从 $x_0$ 到 $x$ 积分。所得的等式为：

$$e^{P(x)}y(x)-y_0=\int_{x_0}^{x}e^{P(t)}q(t) \ dt$$

除以 $e^{P(x)}$ 之后，用[定积分](../definite-integrals/)表示的公式为：

$$y(x)=e^{-P(x)}\left(y_0+\int_{x_0}^{x}e^{P(t)}q(t) \ dt\right)$$

被积函数 $e^{P(t)}q(t)$ 在 $I$ 上连续，所以这个公式在整个区间上定义了一个可导函数。这个函数既满足方程又满足初始条件，而推导过程表明每个解都必须具有这种形式。因此问题在 $I$ 上有唯一解。

这个结果保证了在包含 $x_0$ 且 $p$ 和 $q$ 都连续的最大区间上解的存在性和唯一性。如果其中一个函数在某个端点处不连续，定理不能判定解是否能越过该点延续。这时必须直接考察原方程。

[非线性一阶方程](../first-order-differential-equations/)即使右端在整个平面上光滑，也可能在有限时间内爆破。问题 $y'=y^2$、$y(0)=1$ 的解是 $y=1/(1-x)$，它在 $x\to1^-$ 时变得无界。

当被积函数没有初等原函数时，定积分公式仍然有效。考虑问题：

$$y'+2xy=1 \qquad y(0)=0$$

这里 $P(x)=\int_0^x2t \ dt=x^2$，所以解为：

$$y(x)=e^{-x^2}\int_{0}^{x}e^{t^2} \ dt$$

由乘积法则和微积分基本定理得到 $y'(x)=-2xy(x)+1$，并且积分在 $x=0$ 处为零。函数 $e^{t^2}$ 没有初等原函数，但上面的积分对每个实数 $x$ 都是解的精确表示。

- - -

标准形式中的函数 $p$ 和 $q$ 必须满足连续性假设。当原方程的首项系数为零时，方程在该点不能化为标准形式，必须直接考察。考虑：

$$xy'-2y=x^4$$

在不含 $0$ 的区间上，标准形式为 $y'-\frac{2}{x}y=x^3$，它的积分因子是 $x^{-2}$。由于 $\left(x^{-2}y\right)'=x$，该区间上的解为：

$$y(x)=\frac{x^4}{2}+Cx^2$$

在 $x=0$ 处，原方程为 $-2y(0)=0$，所以在原点附近有定义的解不可能满足 $y(0)\neq0$。特别地，$y(0)=1$ 的初值问题没有解。

$y(0)=0$ 的初值问题有解，但解不唯一。选取两个常数 $C_+$ 和 $C_-$，定义：

$$
y(x)=
\begin{cases}
\dfrac{x^4}{2}+C_+x^2 & x\geq0 \\[6pt]
\dfrac{x^4}{2}+C_-x^2 & x<0
\end{cases}
$$

两个式子在原点处的值和导数都等于 $0$，所以这两段构成 $\mathbb{R}$ 上的一个可导函数。它们在原点之外满足方程，而在原点处方程两边都为 $0$。因此，对每一对 $(C_+,C_-)$，这个分段函数都是解，所以初值问题有无穷多个解。标准定理适用于首项系数不为零、且标准形式中的函数 $p$ 和 $q$ 连续的地方。在首项系数的零点处，存在性和唯一性必须单独研究。

## 带交流电源的电路

一个串联电路含有电阻为 $R>0$ 的电阻器、电感为 $L>0$ 的电感器和电压源 $E(t)$。如果 $i(t)$ 是电流，基尔霍夫电压定律指出，电源电压等于电压降 $Ri$ 和 $Li'$ 之和。电路方程为：

$$Li'+Ri=E(t)$$

除以 $L$ 之后，方程成为系数为常数 $R/L$ 的标准形式，它的积分因子是 $e^{Rt/L}$。假设电源为 $E(t)=E_0\sin(\omega t)$，其中 $E_0>0$ 是电压幅值，$\omega>0$ 是角频率。乘以积分因子之后，方程为：

$$\left(e^{Rt/L}i\right)'=\frac{E_0}{L}e^{Rt/L}\sin(\omega t)$$

令 $a=R/L$，并设 $I$ 和 $J$ 分别是 $e^{at}\sin(\omega t)$ 和 $e^{at}\cos(\omega t)$ 的原函数。第一次[分部积分](../integration-by-parts/)取 $u=\sin(\omega t)$ 和 $dv=e^{at} \ dt$。第二次取 $u=\cos(\omega t)$ 和同样的 $dv$。两个恒等式为：

$$
\begin{align}
I&=\frac{e^{at}\sin(\omega t)}{a}-\frac{\omega}{a}J+C_1 \\[6pt]
J&=\frac{e^{at}\cos(\omega t)}{a}+\frac{\omega}{a}I+C_2
\end{align}
$$

把第二个恒等式代入第一个，并合并含 $I$ 的项。由于 $C_1$ 和 $C_2$ 是任意的，由它们得到的线性组合是另一个任意常数 $C$。因此原函数 $I$ 为：

$$I=\frac{e^{at}\left(a\sin(\omega t)-\omega\cos(\omega t)\right)}{a^2+\omega^2}+C$$

把 $a$ 换成 $R/L$，把这个原函数代入微分方程，除以 $e^{Rt/L}$，并重新命名任意常数，就得到通解：

$$i(t)=\frac{E_0\left(R\sin(\omega t)-\omega L\cos(\omega t)\right)}{R^2+\omega^2L^2}+Ce^{-Rt/L}$$

第一项是一个周期的特解，$Ce^{-Rt/L}$ 是齐次方程 $Li'+Ri=0$ 的通解。初始电流只影响常数 $C$。由于 $R/L>0$，齐次项在 $t\to+\infty$ 时趋于 $0$。例如，如果 $i(0)=0$，那么常数为：

$$C=\frac{E_0\omega L}{R^2+\omega^2L^2}$$

相位角 $\varphi$ 定义为：

$$\varphi=\arctan\left(\frac{\omega L}{R}\right)$$

由于 $R$、$L$ 和 $\omega$ 都为正，这个角在 $(0,\pi/2)$ 内。它满足 $\cos(\varphi)=R/\sqrt{R^2+\omega^2L^2}$ 和 $\sin(\varphi)=\omega L/\sqrt{R^2+\omega^2L^2}$。因此周期项为：

$$\frac{E_0}{\sqrt{R^2+\omega^2L^2}}\sin(\omega t-\varphi)$$

复阻抗为 $Z=R+j\omega L$，其中 $j^2=-1$。它的模为 $\lvert Z\rvert=\sqrt{R^2+\omega^2L^2}$。于是周期电流的幅值为 $E_0/\lvert Z\rvert$，并且比电压滞后角 $\varphi$。比值 $\tau=L/R$ 是衰减的时间常数，因为齐次因子是 $e^{-t/\tau}$，经过一个时间常数后它的值为 $e^{-1}$。

## 关于另一个变量为线性的方程

关于 $y$ 不是线性的方程，在两个变量的角色互换之后可能是线性的。这种方法是局部的，因为从 $y(x)$ 过渡到 $x(y)$ 再返回，要求相关的导数不为零。考虑：

$$y'=\frac{1}{x+y^2}$$

未知函数被平方了，所以方程关于 $y$ 不是线性的。在每个解区间上，分母不为零且连续。因此 $y'$ 连续且处处不为零，所以它的符号不变。解严格[单调](../increasing-and-decreasing-functions/)，并有可导的[反函数](../inverse-function/)。反函数的导数为：

$$\frac{dx}{dy}=\frac{1}{y'}=x+y^2$$

作为关于 $x$（看作 $y$ 的函数）的方程，这个方程是线性的，系数为 $-1$，右端为 $y^2$。它的积分因子是 $\mu(y)=e^{-y}$，所以变换后的方程为：

$$\frac{d}{dy}\left(e^{-y}x\right)=y^2e^{-y}$$

应用两次[分部积分法](../integration-by-parts/)。函数 $-\left(y^2+2y+2\right)e^{-y}$ 是 $y^2e^{-y}$ 的一个原函数，所以关于 $x$ 的解为：

$$x(y)=-\left(y^2+2y+2\right)+Ce^y$$

对固定的 $C$，设 $J$ 是由 $y$ 值构成的一个区间，在其上：

$$\frac{dx}{dy}=Ce^y-2y-2\neq0$$

在 $J$ 上，函数 $x(y)$ 有可导的反函数 $y(x)$，这个反函数是原方程的解。$Ce^y-2y-2$ 的零点把不同的分支隔开，因为原方程的右端在那里没有定义。

当 $C=0$ 时，关系为 $x=-(y+1)^2-1$，它有两个初等的反函数分支：

$$y(x)=-1\pm\sqrt{-x-1} \qquad x<-1$$

正号对应 $y>-1$，负号对应 $y<-1$。点 $x=-1$ 被排除，因为原方程的分母在那里为 $0$。

对一般的 $C$ 值，反函数不一定是初等函数。在这种情形下，关系 $x=x(y)$ 是每个解分支的精确表示。

> 在幂代换有定义的区间上，[伯努利方程](../bernoulli-differential-equation/)经过幂代换后化为一阶线性方程。任何被代换排除的解都必须代回原方程检验。
