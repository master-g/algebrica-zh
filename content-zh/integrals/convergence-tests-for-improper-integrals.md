---
title: 反常积分的收敛判别法
title_en: Convergence Tests for Improper Integrals
source: https://algebrica.org/convergence-tests-for-improper-integrals/
license: CC BY-NC 4.0
tags:
  - abel-test
  - absolute-convergence
  - cauchy-criterion
  - cauchy-principal-value
  - conditional-convergence
  - dirichlet-test
  - fresnel-integrals
  - improper-integrals
  - oscillating-integrands
  - second-mean-value-theorem
translation:
  status: current
  source_hash: e096ee29f44abe21fcc303dceba2070f4a995869d7d1e747712a5a8b76754563
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 引言

本条目研究[反常积分](../improper-integrals/)的收敛判别法。反常积分是这样一类积分：它的一个或两个积分限是 $\pm \infty$，或者被积函数在某个有限端点附近无界。回忆一下，这些积分不能简单地用在端点处代入[原函数](../indefinite-integrals/)求差来计算，因为那会涉及无穷量。因此，我们研究相应的[极限](../limits/)，通常写成如下形式：

$$\int_a^{+\infty} f(x) \ dx := \lim_{t \to +\infty} \int_a^t f(x) \ dx \tag{1}$$

反常积分条目给出了直接比较判别法与极限比较判别法，它们无需找出原函数即可确立收敛性。然而，按那里陈述的形式，这些判别法要求被积函数符号不变，并且当被积函数振荡时无法检测条件收敛，因为此时的收敛依赖于正负部分之间的相互抵消。本条目收集的判别法正是针对这种情形。

## 柯西判别法

第一个是柯西判别法。我们将会看到，它不要求函数符号固定，更重要的是，它不给出的积分值，而只判定积分是否收敛。设 $f$ 在每个区间 $[a,t]$（$t\gt a$）上[黎曼可积](../riemann-integrability-criteria/)，且 $F$ 是它的[累积函数](../fundamental-theorem-of-calculus/)：

$$F(t):=\int_a^t f(x) \ dx$$

由收敛的定义，反常积分收敛只有当 $F$ 在 $t\to+\infty$ 时有有限极限。考虑 $(1)$ 中的积分：

$$\int_a^{+\infty}f(x) \ dx$$

该积分收敛，当且仅当对每个 $\varepsilon\gt0$，都存在 $c\geq a$，使得：

$$\left|\int_u^v f(x) \ dx\right|\lt\varepsilon \qquad v\gt u\gt c \tag{2}$$

端点 $u$ 与 $v$ 是任意的，只要它们都超过依赖于 $\varepsilon$ 的阈值 $c$。

- - -

$(2)$ 的类似形式在单个有限端点处也成立。设 $f$ 在每个区间 $[t,b]$（$a\lt t\lt b$）上黎曼可积，且在 $a$ 的每个右邻域内无界。考虑积分：

$$\int_a^b f(x) \ dx$$

该积分收敛，当且仅当对每个 $\varepsilon\gt0$，都存在 $\delta\gt0$，使得：

$$\left|\int_u^v f(x) \ dx\right|\lt\varepsilon \qquad a\lt u\lt v\lt a+\delta \tag{3}$$

$(3)$ 的一个直接推论是：绝对收敛——即被积函数的[绝对值](../absolute-value/)的积分收敛——蕴涵收敛。相关的不等式为：

$$\left|\int_u^v f(x) \ dx\right|\leq\int_u^v|f(x)| \ dx$$

因此，若 $|f|$ 满足柯西条件，则 $f$ 也满足。

## 狄利克雷判别法

第二个判别法是狄利克雷判别法，针对振荡被积函数的反常积分。它考虑定义在区间 $[a,+\infty)$ 上的两个函数 $f$ 与 $g$，其中 $f$ 在每个区间 $[a,t]$ 上黎曼可积，$g$ [单调](../increasing-and-decreasing-functions/)。考虑累积函数：

$$F(t)=\int_a^t f(x) \ dx \tag{4}$$

该判别法要求两个假设：

+ 第一是 $F$ 有界，即对每个 $t\geq a$ 都有 $|F(t)|\leq K$。
+ 第二是当 $x\to+\infty$ 时 $g(x)\to0$。

现在考虑积分：

$$\int_a^{+\infty}f(x)g(x) \ dx \tag{5}$$

若这些假设成立，则该积分收敛。

- - -

为证明这一点，设 $K\gt0$，并取定 $v\gt u\geq a$。[积分第二中值定理](../mean-value-theorem-for-integrals/)给出一点 $\xi\in[u,v]$，使如下恒等式成立：

$$\int_u^v f(x)g(x) \ dx=g(u)\int_u^{\xi}f(x) \ dx+g(v)\int_{\xi}^v f(x) \ dx \tag{6}$$

可以用 $F$ 表示右边的两个积分：

$$\left|\int_u^{\xi}f(x) \ dx\right|=|F(\xi)-F(u)|\leq2K$$

$$\left|\int_{\xi}^v f(x) \ dx\right|=|F(v)-F(\xi)|\leq2K$$

把上述关系代入 $(6)$，得：

$$\left|\int_u^v f(x)g(x) \ dx\right|\leq2K\big(|g(u)|+|g(v)|\big)$$

取定 $\varepsilon\gt0$。由第二个假设，$g$ 趋于零，因此存在 $c\geq a$，使得对每个 $x\geq c$ 都有 $|g(x)|\lt\varepsilon/(4K)$。若 $v\gt u\geq c$，则 $|g(u)|$ 与 $|g(v)|$ 都满足该不等式，前述上界变为：

$$\left|\int_u^v f(x)g(x) \ dx\right|\leq2K\left(|g(u)|+|g(v)|\right)\lt2K\left(\frac{\varepsilon}{4K}+\frac{\varepsilon}{4K}\right)=\varepsilon$$

因此柯西判别法证明了积分 $(5)$ 收敛。

## 阿贝尔判别法

阿贝尔判别法修改了狄利克雷判别法，去掉了函数 $g$ 趋于零的假设。设 $f$ 与 $g$ 定义在 $[a,+\infty)$ 上，$f$ 在每个区间 $[a,t]$ 上黎曼可积，$g$ 单调且有界。再设下面的积分收敛：

$$\int_a^{+\infty}f(x) \ dx \tag{7}$$

这些假设蕴涵下面的积分收敛：

$$\int_a^{+\infty}f(x)g(x) \ dx$$

证明并不困难，可以把结论化归到狄利克雷判别法。有界单调函数在 $x\to+\infty$ 时有有限极限 $L$，因此函数 $h=g-L$ 单调且趋于零。累积函数 $F$ [连续](../continuous-functions/)，且在 $t\to+\infty$ 时有有限极限，因此在 $[a,+\infty)$ 上有界。把狄利克雷判别法应用于函数对 $f$ 与 $h$，保证下面的积分收敛：

$$\int_a^{+\infty}f(x)h(x) \ dx$$

该分解给出：

$$f(x)g(x)=f(x)h(x)+Lf(x)$$

因此 $(7)$ 的收敛证明了结论。

## 涉及正弦函数的积分

涉及[正弦函数](../sine-function/)的一族常见积分为：

$$\int_1^{+\infty}\frac{\sin x}{x^p} \ dx \tag{8}$$

在这种情形，对每个 $p\gt0$，函数对 $f(x)=\sin x$ 与 $g(x)=x^{-p}$ 满足狄利克雷判别法的假设。而且，$f$ 的累积函数有界，因为：

$$\left|\int_1^t\sin x \ dx\right|=|\cos1-\cos t|\leq2$$

函数 $x^{-p}$ 递减且趋于零。因此积分 $(8)$ 对每个 $p\gt0$ 收敛。

- - -

$(8)$ 的绝对收敛要求更强的条件。对 $p\gt1$，考虑如下上界：

$$|\sin x|/x^p\leq1/x^p$$

由该上界与 $p$-积分判别法可确立绝对收敛。对 $0\lt p\leq1$，绝对值的积分发散。由不等式 $\sin^2x\leq|\sin x|$ 与恒等式 $\sin^2x=(1-\cos2x)/2$，得：

$$\int_1^T\frac{|\sin x|}{x^p} \ dx\geq\frac{1}{2}\int_1^T\frac{dx}{x^p}-\frac{1}{2}\int_1^T\frac{\cos2x}{x^p} \ dx$$

右边第一个积分因 $p\leq1$ 而趋于 $+\infty$，第二个由狄利克雷判别法收敛，因为 $\int_1^t\cos2x \ dx$ 有界且 $x^{-p}$ 趋于零。因此右边趋于 $+\infty$，从而对 $0\lt p\leq1$，积分 $(8)$ 条件收敛。

对 $p\leq0$，柯西判别法不成立。设 $k$ 为正整数，定义区间：

$$I_k=[2k\pi+\pi/6,\ 2k\pi+5\pi/6]$$

在该区间上 $\sin x\geq1/2$，而 $p\leq0$ 蕴涵 $x^{-p}\geq1$（$x\geq1$），所以：

$$\int_{I_k}\frac{\sin x}{x^p} \ dx\geq\frac{1}{2}\cdot\frac{2\pi}{3}=\frac{\pi}{3}$$

$I_k$ 的端点趋于 $+\infty$，而 $I_k$ 上的积分始终不趋于零，因此积分 $(8)$ 不收敛。于是可以把各种情形总结为下表：

[class="table-1"]

|              |                          |
| ------------ | ------------------------ |
| $p\gt1$        | 绝对收敛     |
| $0\lt p\leq1$   | 条件收敛  |
| $p\leq0$     | 不收敛        |

[/class]

## 菲涅耳积分

狄利克雷判别法也适用于菲涅耳积分，其被积函数并不趋于零。这些积分的形式为：

$$\int_0^{+\infty}\sin(x^2) \ dx=\int_0^{+\infty}\cos(x^2) \ dx=\frac{1}{2}\sqrt{\frac{\pi}{2}}$$

考虑正弦的情形：

$$\int_0^{+\infty}\sin(x^2) \ dx \tag{9}$$

在区间 $[0,1]$ 上被积函数连续，积分是常义积分。在区间 $[1,T]$ 上作[换元](../integration-by-substitution/) $t=x^2$，其中 $x=\sqrt t$，$dx=dt/(2\sqrt t)$，得：

$$\int_1^T\sin(x^2) \ dx=\frac{1}{2}\int_1^{T^2}\frac{\sin t}{\sqrt t} \ dt$$

右边在 $T\to+\infty$ 时有有限极限，因为它对应函数族 $(8)$ 中 $p=1/2$ 的情形。加上 $[0,1]$ 上的常义积分，可知 $(9)$ 收敛。由于 $p=1/2\lt1$，绝对值的积分发散，因此收敛是条件的。同一换元也适用于 $\cos(x^2)$，并得出同样的结论。

这两个积分称为菲涅耳积分，且取值相同：

$$\int_0^{+\infty}\sin(x^2) \ dx=\int_0^{+\infty}\cos(x^2) \ dx=\frac{1}{2}\sqrt{\frac{\pi}{2}}$$

该值可以用复分析的方法计算。

> 回忆一下，[级数](../cauchy-convergence-criterion-series/) $\sum a_n$ 收敛要求 $a_n\to0$，而反常积分没有类似的条件，$\sin(x^2)$ 就是一个反例：它在 $-1$ 与 $1$ 之间振荡而没有极限，但它的积分收敛。其局部波长渐近于 $\pi/x$，因此相继波瓣上的积分符号交替、绝对值递减到零，它们的贡献如同[交错级数](../leibniz-criterion/)的项。

## 柯西主值

最后介绍柯西主值：它是在关于原点对称的区间上的积分的极限，定义为：

$$\mathrm{p.v.}\int_{-\infty}^{+\infty}f(x) \ dx:=\lim_{R\to+\infty}\int_{-R}^{R}f(x) \ dx$$

考虑下面的[奇函数](../even-and-odd-functions/)：

$$f(x)=\frac{2x}{1+x^2}$$

现在考虑在 $\mathbb{R}$ 上的反常积分：

$$\int_{-\infty}^{+\infty}\frac{2x}{1+x^2} \ dx$$

该积分不收敛，因为对每个 $R$ 都有

$$\int_0^R f(x) \ dx=\ln(1+R^2) \to +\infty$$

$$\int_{-R}^R f(x) \ dx=0$$

因此主值为零。

如果在 $\mathbb{R}$ 上的常义反常积分收敛，那么它的主值存在且与该反常积分一致，因为取对称积分限是两个积分限独立地趋于无穷的特殊情形。但反过来不成立，前面的例子即是证明。
