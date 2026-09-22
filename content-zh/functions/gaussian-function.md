---
title: 高斯函数
title_en: Gaussian Function
source: https://algebrica.org/gaussian-function/
license: CC BY-NC 4.0
tags:
  - error-function
  - exponential-function
  - functions
  - gaussian-function
  - improper-integrals
  - normal-distribution
  - probability-density-function
translation:
  status: current
  source_hash: c0ad5e137232ce34e442caab79c25afa60eeb7e9d8e7661c9deabcbc653fdc36
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 定义

实变量的高斯[函数](../functions/)是指数为负二次式的[指数函数](../exponential-function/)的实数倍。它的一般形式依赖于三个参数：

$$f(x) = ae^{-\frac{(x-b)^{2}}{2c^{2}}}$$

这里 $a$ 与 $b$ 为实数，$c \neq 0$。把 $c$ 换成 $-c$ 函数不变，因此取 $c > 0$。假设 $a > 0$。在这些假设下，$a$ 是最大值，$b$ 是中心，$c$ 控制宽度。

![图 1](/assets/functions/svg/gaussian-function-1.zh.svg)

+ [定义域](../determining-the-domain-of-a-function/)是 $\mathbb{R}$，因为该公式对每个实数 $x$ 都有定义。
+ 由于 $a > 0$ 且指数函数为正，对每个 $x$ 都有 $f(x) > 0$，值域为 $(0, a]$。
+ 图像关于 $x = b$ 对称。
+ 在无穷远处的[极限](../limits/)为 $\lim_{x \to -\infty} f(x) = 0$ 与 $\lim_{x \to +\infty} f(x) = 0$，因此横轴是一条[水平渐近线](../asymptotes/)。

指数 $-(x-b)^{2}/(2c^{2})$ 在 $x = b$ 处取最大值 $0$。由于指数函数[严格递增](../increasing-and-decreasing-functions/)，$f$ 在同一点取最大值 $a$。它的尾部满足：对每个 $k > 0$，$\lim_{|x| \to +\infty}f(x)e^{k|x|} = 0$。

- - -

除以 $a$ 并设 $t = (x-b)/c$，得到简化的高斯函数：

$$g(t) = e^{-\frac{t^{2}}{2}}$$

在恒等式 $f(x) = ag((x-b)/c)$ 中，参数 $b$ 使图像水平平移，$c$ 使它水平缩放，$a$ 使它竖直缩放。在这一变量替换下，$g$ 的性质传递给 $f$。

## 导数与单调性

对指数求导并应用[链式法则](../chain-rule/)，得与 $f$ 成正比的[导数](../derivatives/)：

$$f'(x) = -\frac{a(x-b)}{c^{2}}e^{-\frac{(x-b)^{2}}{2c^{2}}} = -\frac{x-b}{c^{2}}f(x)$$

由于对每个 $x$ 都有 $f(x) > 0$，$f'$ 的符号与 $x - b$ 的符号相反。因此函数在 $(-\infty, b)$ 上严格递增，在 $(b, +\infty)$ 上严格递减，在 $x = b$ 处有一个唯一的驻点。该点是取值为 $a$ 的绝对[最大值](../maximum-minimum-and-inflection-points/)点，且函数没有局部最小值。

> 恒等式 $f'(x) = -\dfrac{x-b}{c^{2}}f(x)$ 表明 $f$ 是[可分离变量的微分方程](../separable-differential-equations/) $y' = -\dfrac{x-b}{c^{2}}y$ 的解。分离变量并施加 $y(b) = a$，可以唯一地还原出 $f$。它的相对变化率为 $f'(x)/f(x) = -(x-b)/c^{2}$，是 $x$ 的递减线性函数。

## 拐点与凹性

用[乘积法则](../differentiation-rules/)对 $f'(x) = -\dfrac{x-b}{c^{2}}f(x)$ 求导，并代入 $f'$ 的表达式，得[二阶导数](../higher-order-derivatives/)：

$$
\begin{align}
f''(x) &= -\frac{1}{c^{2}}f(x) - \frac{x-b}{c^{2}}f'(x) \\[6pt]
&= -\frac{1}{c^{2}}f(x) + \frac{(x-b)^{2}}{c^{4}}f(x) \\[6pt]
&= \frac{f(x)}{c^{2}}\left(\frac{(x-b)^{2}}{c^{2}} - 1\right)
\end{align}
$$

由于 $f(x)/c^{2} > 0$，$f''$ 与 $(x-b)^{2} - c^{2}$ 同号。该表达式在 $(b-c, b+c)$ 上为负，在该区间之外为正，并在 $x = b-c$ 与 $x = b+c$ 处为零。因此函数在 $(b-c, b+c)$ 上[向下凹](../convexity-and-concavity-of-functions/)，在该区间之外向上凹，拐点为：

$$x = b - c \qquad x = b + c$$

函数在两个拐点处的值相同：

$$f(b \pm c) = ae^{-\frac{1}{2}} \approx 0.6065a$$

从对称轴到任一拐点的水平距离为 $c$。

## 半高全宽

曲线展宽程度的第二个度量是它在一半高度处的宽度。令 $f(x) = a/2$ 并除以 $a$ 得：

$$e^{-\frac{(x-b)^{2}}{2c^{2}}} = \frac{1}{2}$$

两边取[对数](../logarithms/)并利用 $\ln(1/2) = -\ln 2$，得 $(x-b)^{2} = 2c^{2}\ln 2$，因此两个解为：

$$x = b \pm c\sqrt{2\ln 2}$$

它们的距离就是半高全宽：

$$\mathrm{FWHM} = 2c\sqrt{2\ln 2} \approx 2.3548c$$

半高全宽与 $a$ 和 $b$ 无关。把 $c$ 乘以正因子 $k$，宽度也乘以 $k$，而最大值 $a$ 不变。

## 高斯积分

尽管定义域无界，曲线下方的面积是有限的。先计算[反常积分](../improper-integrals/)：

$$I = \int_{-\infty}^{+\infty} e^{-x^{2}} \ dx = \sqrt{\pi}$$

由于被积函数没有初等原函数，计算 $I^{2}$。把第二个因子换成另一个积分变量，平方就是平面上的二重积分：

$$I^{2} = \left(\int_{-\infty}^{+\infty} e^{-x^{2}} \ dx\right)\left(\int_{-\infty}^{+\infty} e^{-y^{2}} \ dy\right) = \iint_{\mathbb{R}^{2}} e^{-(x^{2}+y^{2})} \ dx \ dy$$

由于被积函数非负，Tonelli 定理保证该二重积分恒等式成立。

- - -

指数只通过 $x^{2} + y^{2}$ 依赖于 $x$ 与 $y$，因此使用[极坐标](../polar-coordinates/)。由 $x = r\cos\theta$、$y = r\sin\theta$，有 $x^{2} + y^{2} = r^{2}$，面积元为 $r \ dr \ d\theta$，且 $\mathbb{R}^{2}$ 对应 $r \in [0, +\infty)$ 与 $\theta \in [0, 2\pi]$：

$$I^{2} = \int_{0}^{2\pi} \int_{0}^{+\infty} e^{-r^{2}} r \ dr \ d\theta$$

作[换元](../integration-by-substitution/) $u = r^{2}$，$du = 2r \ dr$，得：

$$\int_{0}^{+\infty} e^{-r^{2}} r \ dr = \frac{1}{2}\int_{0}^{+\infty} e^{-u} \ du = \frac{1}{2}$$

由于内层积分等于 $1/2$，剩余积分为：

$$I^{2} = \int_{0}^{2\pi} \frac{1}{2} \ d\theta = \pi$$

由于被积函数为正，$I > 0$，所以 $I = \sqrt{\pi}$。

> 换成极坐标之所以可行，是因为 $e^{-(x^{2}+y^{2})}$ 的等值线是以原点为中心的圆。

## 一般高斯曲线下的面积

$I$ 的值决定了任何形式为 $ae^{-(x-b)^{2}/(2c^{2})}$ 的曲线下的面积。作换元 $t = (x-b)/(c\sqrt{2})$，$dx = c\sqrt{2} \ dt$，指数变为 $-t^{2}$，积分限 $\pm\infty$ 保持不变：

$$
\begin{align}
\int_{-\infty}^{+\infty} ae^{-\frac{(x-b)^{2}}{2c^{2}}} \ dx &= ac\sqrt{2}\int_{-\infty}^{+\infty} e^{-t^{2}} \ dt \\[6pt]
&= ac\sqrt{2}\sqrt{\pi} \\[6pt]
&= ac\sqrt{2\pi}
\end{align}
$$

面积与高度 $a$ 成正比，与宽度参数 $c$ 成正比，且与中心 $b$ 无关，因为平移不改变面积。

![图 2](/assets/functions/svg/gaussian-function-2.zh.svg)

单位面积要求 $ac\sqrt{2\pi} = 1$，即 $a = 1/(c\sqrt{2\pi})$。归一化后的函数为：

$$f(x) = \frac{1}{c\sqrt{2\pi}}e^{-\frac{(x-b)^{2}}{2c^{2}}}$$

这就是均值为 $b$、标准差为 $c$ 的[正态分布](../normal-distribution/)的密度。它非负且总积分为 $1$，满足概率密度的两个要求。它的对称轴是 $x = b$，从这条直线到任一拐点的水平距离就是标准差 $c$。

## 误差函数

函数 $e^{-x^{2}}$ 没有初等原函数。误差函数是它在 $0$ 到 $x$ 上的[定积分](../definite-integrals/)，并作了适当的缩放，使其在 $+\infty$ 处的极限为 $1$：

$$\mathrm{erf}(x) = \frac{2}{\sqrt{\pi}}\int_{0}^{x} e^{-t^{2}} \ dt$$

由于 $I = \sqrt{\pi}$ 且被积函数是偶函数，$\int_{0}^{+\infty} e^{-t^{2}} \ dt = \sqrt{\pi}/2$。因此因子 $2/\sqrt{\pi}$ 使 $\mathrm{erf}(x)$ 在 $x \to +\infty$ 时趋于 $1$。偶函数从 $0$ 到 $x$ 的积分是奇函数，而被积函数为正使 $\mathrm{erf}$ 严格递增。由奇偶性，$\mathrm{erf}(x)$ 在 $x \to -\infty$ 时趋于 $-1$，因此值域为 $(-1, 1)$，且 $\mathrm{erf}(0) = 0$。

标准正态变量的累积分布函数 $\Phi$ 是 $\mathrm{erf}$ 的重新缩放。把定义 $\Phi$ 的积分在原点处分开，并作换元 $t = u\sqrt{2}$，得：

$$\Phi(z) = \frac{1}{2}\left(1 + \mathrm{erf}\left(\frac{z}{\sqrt{2}}\right)\right)$$

[标准正态 Z 表](../standard-normal-z-table/)列出了由该恒等式或通过对密度作[数值积分](../numerical-integration/)得到的 $\Phi$ 值。

## 高斯函数的矩

对 $\lambda > 0$，高斯积分决定了每个非负整数 $n$ 对应的 $\int_{-\infty}^{+\infty} x^{n}e^{-\lambda x^{2}} \ dx$。当 $n = 0$ 时，作换元 $t = x\sqrt{\lambda}$ 得：

$$J(\lambda) = \int_{-\infty}^{+\infty} e^{-\lambda x^{2}} \ dx = \sqrt{\frac{\pi}{\lambda}}$$

对 $\lambda > 0$，指数衰减保证了积分号下求导的合法性。关于 $\lambda$ 求导会带下一个因子 $-x^{2}$：

$$\int_{-\infty}^{+\infty} x^{2}e^{-\lambda x^{2}} \ dx = -J'(\lambda) = \frac{1}{2}\sqrt{\frac{\pi}{\lambda^{3}}}$$

每对 $\lambda$ 求导一次，$x$ 的指数就升高 2，因此反复求导可得所有偶数情形。当 $n$ 为奇数时，被积函数是奇函数，积分为零。

- - -

把 $n = 2$、$\lambda = 1/2$ 的情形除以归一化常数 $\sqrt{2\pi}$，得标准正态变量的[方差](../variance-and-covariance-of-a-random-variable/)：

$$\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty} x^{2}e^{-\frac{x^{2}}{2}} \ dx = \frac{1}{\sqrt{2\pi}}\sqrt{2\pi} = 1$$

对一般密度，作换元 $x = b + ct$ 可把[期望值](../mean-or-expected-value-of-a-random-variable/)与方差的积分化为标准正态积分。因此期望值为 $b$，方差为 $c^{2}$。对 $n \geq 1$，标准正态变量的偶数阶矩是不超过 $2n-1$ 的奇数之积：

$$E(X^{2n}) = (2n-1)!! = 1 \cdot 3 \cdot 5 \cdots (2n-1)$$

奇数阶矩由对称性为 $0$。在 $\Gamma(1/2) = \int_{0}^{+\infty} t^{-1/2}e^{-t} \ dt$ 中作换元 $t = u^{2}$，得：

$$\Gamma\left(\frac{1}{2}\right) = 2\int_{0}^{+\infty} e^{-u^{2}} \ du = \sqrt{\pi}$$

结合 $\Gamma(s+1) = s\Gamma(s)$，该恒等式决定了每个非负整数 $n$ 对应的 $\Gamma(n+1/2)$。这些值出现在半整数形状参数的[伽马分布](../gamma-distribution/)与奇数自由度的[卡方分布](../chi-square-distribution/)的归一化常数中。自由度为 $k$ 的卡方变量是 $k$ 个独立标准正态变量的平方和。

## 乘积与卷积

两个高斯函数的乘积仍是高斯函数。把 $e^{-(x-b_1)^{2}/(2c_1^{2})}$ 与 $e^{-(x-b_2)^{2}/(2c_2^{2})}$ 相乘，指数相加，其和是 $x$ 的二次多项式，首项系数为负。[配方](../completing-the-square/)之后，该多项式具有 $-(x-b_3)^{2}/(2c_3^{2}) + k$ 的形式，其中 $k$ 与 $x$ 无关。参数满足：

$$\frac{1}{c_3^{2}} = \frac{1}{c_1^{2}} + \frac{1}{c_2^{2}} \qquad b_3 = c_3^{2}\left(\frac{b_1}{c_1^{2}} + \frac{b_2}{c_2^{2}}\right)$$

因子 $e^{k}$ 乘在两个高度因子上。乘积的中心为 $b_3$，宽度参数为 $c_3$。宽度平方的倒数相加，因此乘积比两个因子都窄。

两个归一化高斯函数的卷积是归一化高斯函数。若 $f_1$ 与 $f_2$ 的参数分别为 $(b_1, c_1)$ 与 $(b_2, c_2)$，在卷积积分中配方并利用高斯积分，可得卷积的参数：

$$b = b_1 + b_2 \qquad c = \sqrt{c_1^{2} + c_2^{2}}$$

中心相加，宽度平方相加。两个密度的卷积是两个独立变量之和的密度。因此独立正态变量之和仍服从正态分布，其均值与方差分别是各分量均值与方差之和。在关于求和（至多相差位置与尺度变换）稳定的非退化分布中，正态分布是唯一具有有限方差的分布。对具有有限非零方差的独立同分布随机变量，[中心极限定理](../normal-distribution/)断言：它们经过中心化与缩放后的和在分布上收敛于正态分布。

## 例题

考虑函数：

$$f(x) = 5e^{-2(x-3)^{2}}$$

把指数与一般形式对比，得 $b = 3$ 与 $\dfrac{1}{2c^{2}} = 2$。由于 $c > 0$，由方程 $c^{2} = \dfrac{1}{4}$ 得 $c = \dfrac{1}{2}$。指数函数的系数给出 $a = 5$。

最大值是 $f(3) = 5$，在 $x = 3$ 处取得，曲线关于直线 $x = 3$ 对称。拐点与中心相距 $c$：

$$x = 3 - \frac{1}{2} = 2.5 \qquad x = 3 + \frac{1}{2} = 3.5$$

在这两点处函数值都是 $5e^{-1/2} \approx 3.033$。半高全宽为：

$$\mathrm{FWHM} = 2c\sqrt{2\ln 2} = \sqrt{2\ln 2} \approx 1.177$$

曲线下的面积为 $ac\sqrt{2\pi}$：

$$\int_{-\infty}^{+\infty} 5e^{-2(x-3)^{2}} \ dx = 5 \cdot \frac{1}{2} \cdot \sqrt{2\pi} = \frac{5\sqrt{2\pi}}{2} \approx 6.267$$

把 $f$ 除以该面积，得到积分为 1 的函数：

$$\frac{2}{5\sqrt{2\pi}}f(x) = \frac{2}{\sqrt{2\pi}}e^{-2(x-3)^{2}}$$

该函数是均值为 $3$、标准差为 $\dfrac{1}{2}$、方差为 $\dfrac{1}{4}$ 的正态分布的密度。
