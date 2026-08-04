---
title: 卡方分布
title_en: Chi-Square Distribution
source: https://algebrica.org/chi-square-distribution/
license: CC BY-NC 4.0
tags:
  - chi-square-distribution
  - confidence-intervals
  - continuous-random-variables
  - degrees-of-freedom
  - gamma-distribution
  - hypothesis-testing
  - moment-generating-function
  - normal-distribution
  - probability
  - sample-variance
translation:
  status: current
  source_hash: 39d15fca58f850debf225442b1652abc376a9f5f97264ffc02a24dfea72dcc7a
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 标准正态变量平方和

卡方分布是相互独立的标准正态变量平方和所服从的[连续概率分布](../continuous-random-variables/)。设 $Z_1, Z_2, \dots, Z_k$ 是相互独立的随机变量，均服从[标准正态分布](../normal-distribution/)，其密度为 $\varphi(z)=\frac{1}{\sqrt{2\pi}}e^{-z^{2}/2}$。它们的平方和为：

$$X = \sum_{i=1}^{k} Z_i^{2}$$

$X$ 服从自由度为 $k$ 的卡方分布，记作 $X \sim \chi^{2}_{k}$。正整数 $k$ 是平方和中相互独立的平方项数量。当 $k=1$ 时，平方和退化为单个标准正态变量的平方，即 $X=Z^{2}$。对于 $x>0$，其累积分布函数为：

$$
\begin{align}
F(x) &= P(Z^{2} \le x) \\[12pt]
&= P(-\sqrt{x} \le Z \le \sqrt{x}) \\[6pt]
&= \int_{-\sqrt{x}}^{\sqrt{x}} \varphi(z) \ dz = 2\Phi(\sqrt{x}) - 1
\end{align}
$$

这里的 $\Phi$ 是[标准正态累积分布函数](../standard-normal-z-table/)。对 $x$ 求导，得到 $X$ 的密度：

$$f(x) = 2\varphi(\sqrt{x}) \cdot \frac{1}{2\sqrt{x}} = \frac{1}{\sqrt{2\pi x}}e^{-x/2}, \ x>0$$

这就是自由度为 1 的卡方分布的密度。

## 作为伽马分布特例的密度

$k=1$ 时的密度是形状参数 $\alpha=1/2$、尺度参数 $\beta=2$ 的[伽马密度](../gamma-distribution/)。由于 $\Gamma(1/2)=\sqrt{\pi}$，该密度为：

$$G\!\left(x;\tfrac{1}{2},2\right) = \frac{1}{2^{1/2}\Gamma(1/2)}x^{-1/2}e^{-x/2} = \frac{1}{\sqrt{2\pi x}}e^{-x/2}$$

上式就是 $f(x)$。具有相同尺度参数的相互独立伽马变量之和仍服从伽马分布，其形状参数等于各变量形状参数之和。$k$ 个相互独立的 $\mathrm{Gamma}(1/2,2)$ 变量之和服从 $\mathrm{Gamma}(k/2,2)$ 分布，因此自由度为 $k$ 的卡方分布密度为：

$$
{\chi^2}(x;k) =
\begin{cases}
\dfrac{1}{2^{k/2}\Gamma(k/2)}x^{k/2-1}e^{-x/2} & x>0 \\[6pt]
0 & x \le 0
\end{cases}
$$

在这个构造中，$k$ 是正整数；但由于伽马密度对每个正形状参数都有定义，$\chi^2(x;k)$ 的公式对所有实数 $k>0$ 都是概率密度。当 $k \le 2$ 时，密度在 $(0,+\infty)$ 上单调递减。当 $k \ge 3$ 时，密度从 $0$ 开始上升，达到一个峰值后再衰减。

![图 1](/assets/probability-and-statistics/svg/chi-square-distribution-1.svg)

- - -

对于 $X \sim \chi^{2}_{k}$，其密度、均值、方差和标准差分别为：

[class="table-1"]

|  |
| :--- |
| $\chi^2(x;k) = \dfrac{1}{2^{k/2}\Gamma(k/2)}x^{k/2-1}e^{-x/2}, \ x>0$ |
| $\mu = E(X) = k$ |
| $\sigma^{2} = \mathrm{Var}(X) = 2k$ |
| $\sigma = \sqrt{2k}$ |

[/class]

## 卡方分布的均值与方差

$X \sim \chi^2_k$ 的[期望值](../mean-or-expected-value-of-a-random-variable/)为：

$$
\begin{align}
\mu = E(X) &= \int_{0}^{+\infty} x \cdot \frac{1}{2^{k/2}\Gamma(k/2)}x^{k/2-1}e^{-x/2} \ dx \\[12pt]
&= \frac{1}{2^{k/2}\Gamma(k/2)}\int_{0}^{+\infty}x^{k/2}e^{-x/2} \ dx
\end{align}
$$

作[换元](../integration-by-substitution/) $x=2t$，于是 $dx=2 \ dt$，积分变为：

$$
\begin{align}
\mu &= \frac{1}{2^{k/2}\Gamma(k/2)}\int_{0}^{+\infty}(2t)^{k/2}e^{-t}\cdot 2 \ dt \\[12pt]
&= \frac{2^{k/2+1}}{2^{k/2}\Gamma(k/2)}\int_{0}^{+\infty}t^{k/2}e^{-t} \ dt \\[20pt]
&= \frac{2\Gamma(k/2+1)}{\Gamma(k/2)}
\end{align}
$$

利用递推关系 $\Gamma(k/2+1)=(k/2)\Gamma(k/2)$，得到 $\mu=2\cdot(k/2)=k$。卡方分布的均值等于其自由度。

- - -

方差需要用到二阶矩 $E(X^2)$。作同样的换元可得：

$$E(X^2) = \frac{1}{2^{k/2}\Gamma(k/2)}\int_{0}^{+\infty}x^{k/2+1}e^{-x/2} \ dx = \frac{4\Gamma(k/2+2)}{\Gamma(k/2)}$$

利用递推关系 $\Gamma(k/2+2)=(k/2+1)(k/2)\Gamma(k/2)$，得到：

$$E(X^2) = 4\left(\frac{k}{2}+1\right)\frac{k}{2} = k^{2}+2k$$

[方差](../variance-and-covariance-of-a-random-variable/)为 $\sigma^2=E(X^2)-\mu^2$：

$$\sigma^{2} = (k^{2}+2k) - k^{2} = 2k$$

卡方分布的方差与自由度成正比。每增加一个平方后的标准正态项，方差就增加 $2$。

## 矩母函数、矩与可加性

对于 $t<1/2$，$X \sim \chi^2_k$ 的矩母函数为：

$$
\begin{align}
M(t) = E(e^{tX}) &= \frac{1}{2^{k/2}\Gamma(k/2)}\int_{0}^{+\infty}x^{k/2-1}e^{-x(1/2-t)} \ dx \\[6pt]
&= \frac{1}{2^{k/2}\Gamma(k/2)}\cdot\frac{\Gamma(k/2)}{(1/2-t)^{k/2}} \\[6pt]
&= (1-2t)^{-k/2}
\end{align}
$$

第二行使用了积分公式 $\int_{0}^{+\infty}x^{a-1}e^{-\lambda x} \ dx = \Gamma(a)/\lambda^{a}$，其中 $a=k/2$、$\lambda=1/2-t$。将 $M(t)$ 展开为关于 $t$ 的[幂级数](../taylor-series/)，再与 $M(t)=\sum_{n=0}^{\infty}E(X^n)t^n/n!$ 比较，得到原始矩：

$$E(X^{n}) = k(k+2)(k+4)\cdots(k+2n-2)$$

该公式对每个正整数 $n$ 都成立。当 $n=1$ 和 $n=2$ 时，分别得到 $\mu=k$ 和 $E(X^2)=k^2+2k$。

- - -

设 $X_1,\dots,X_m$ 是相互独立的卡方变量，其自由度分别为 $k_1,\dots,k_m$，并令 $S=X_1+\cdots+X_m$。由独立性可得：

$$M_S(t) = \prod_{j=1}^{m}M_{X_j}(t) = \prod_{j=1}^{m}(1-2t)^{-k_j/2} = (1-2t)^{-(k_1+\cdots+k_m)/2}$$

这是自由度为 $k_1+\cdots+k_m$ 的卡方变量的矩母函数，因此 $S \sim \chi^2_{k_1+\cdots+k_m}$。相互独立的卡方变量之和仍是卡方变量，其自由度等于各变量自由度之和。

- - -

矩母函数的对数为 $K(t)=-\frac{k}{2}\ln(1-2t)$。将 $\ln(1-2t)$ 展开为幂级数，并将系数与 $K(t)=\sum_{n=1}^{\infty}\kappa_n t^n/n!$ 对照，得到累积量 $\kappa_n=2^{n-1}(n-1)!k$。偏度和超额峰度分别为 $\gamma_1=\kappa_3/\kappa_2^{3/2}$ 和 $\gamma_2=\kappa_4/\kappa_2^2$。它们的值为：

$$\gamma_1 = \sqrt{\frac{8}{k}} \ \gamma_2 = \frac{12}{k}$$

当 $k \to \infty$ 时，二者都趋于 $0$。变量 $(X-k)/\sqrt{2k}$ 依分布收敛于标准正态分布，因为它是相互独立同分布变量 $Z_i^2$ 之和的标准化形式。

## 累积分布函数

对于 $x>0$，$X \sim \chi^2_k$ 的累积分布函数为：

$$F(x) = \int_{0}^{x}\frac{1}{2^{k/2}\Gamma(k/2)}u^{k/2-1}e^{-u/2} \ du$$

作换元 $u=2t$ 后，上限变为 $x/2$，累积分布函数为：

$$F(x) = \frac{1}{\Gamma(k/2)}\int_{0}^{x/2}t^{k/2-1}e^{-t} \ dt$$

剩下的积分是下不完全伽马函数 $\gamma(k/2,x/2)=\int_{0}^{x/2}t^{k/2-1}e^{-t} \ dt$。代入可得：

$$F(x) = \frac{\gamma(k/2,x/2)}{\Gamma(k/2)}$$

这个比值就是在 $k/2$ 和 $x/2$ 处取值的正则化不完全伽马函数。对于一般的 $k$，该积分没有初等闭式，因此[卡方分位数](../median-and-quantiles/)需要用数值方法计算或查表得到。

## 众数与形状

密度的对数导数为：

$$\frac{d}{dx}\ln{\chi^2}(x;k) = \frac{k/2-1}{x}-\frac{1}{2}$$

令该导数等于零，得到 $x=k-2$。当 $k \ge 3$ 时，这个临界点位于支集内且为最大值，因此卡方分布的众数为 $k-2$。当 $k \le 2$ 时，导数在 $(0,+\infty)$ 上始终为负，所以密度从左端点处的上确界开始单调递减。

## 样本方差的抽样分布

在重复抽样中，[样本方差](../variance/) $S^2$ 是一个随机变量。设相互独立的观测值服从[正态分布](../normal-distribution/)：

$$X_1, X_2, \dots, X_n \sim \mathcal{N}(\mu,\sigma^{2})$$

样本方差为：

$$S^{2} = \frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^{2}$$

使用除数 $n-1$ 时，统计量 $S^2$ 是 $\sigma^2$ 的无偏估计量。在这些假设下，标准化量服从卡方分布：

$$\frac{(n-1)S^{2}}{\sigma^{2}} \sim \chi^{2}_{n-1}$$

每个标准化偏差 $(X_i-\mu)/\sigma$ 都服从标准正态分布；如果 $\mu$ 已知，则 $n$ 个平方偏差之和会服从 $\chi^2_n$ 分布。由于 $\mu$ 是用 $\bar X$ 估计的，这些偏差满足线性约束 $\sum_i(X_i-\bar X)=0$，因此少了一个自由度，使卡方参数从 $n$ 降为 $n-1$。

这一结果是关于 $\sigma^2$ 的置信区间和假设检验的基础。

## 卡方临界值

在正态性假设下，方差统计量为：

$$\chi^{2} = \frac{(n-1)S^{2}}{\sigma^{2}}$$

对于大小为 $n$ 的样本，该统计量服从自由度 $k=n-1$ 的卡方分布。要检验观测到的 $\chi^2$ 值是否与假设的 $\sigma^2$ 相容，需要使用卡方临界值。对于自由度 $k$ 和 $0<\alpha<1$，临界值 $\chi^{2}_{\alpha,k}$ 的右尾概率为 $\alpha$：

$$P(\chi^{2}_{k} > \chi^{2}_{\alpha,k}) = \alpha$$

![图 2](/assets/probability-and-statistics/svg/chi-square-distribution-2.svg)

由于卡方密度不对称，且其累积分布函数没有初等反函数，这些临界值不存在闭式公式。表格会列出每个自由度 $k$ 和尾部概率 $\alpha$ 对应的 $\chi^2_{\alpha,k}$。

- - -

这是一个节选表格。表格的行是自由度 $k$，列是右尾概率 $\alpha$，表中给出相应的临界值 $\chi^2_{\alpha,k}$。

| $k$ | $\chi^2_{.995,k}$ | $\chi^2_{.990,k}$ | $\chi^2_{.975,k}$ | $\chi^2_{.950,k}$ | $\chi^2_{.900,k}$ | ... |
| --- | ----------------- | ----------------- | ----------------- | ----------------- | ----------------- | --- |
| 1   | 0.000              | 0.000              | 0.001              | 0.004              | 0.016              | ... |
| 2   | 0.010              | 0.020              | 0.051              | 0.103              | 0.211              | ... |
| 3   | 0.072              | 0.115              | 0.216              | 0.352              | 0.584              | ... |
| 4   | 0.207              | 0.297              | 0.484              | 0.711              | 1.064              | ... |
| 5   | 0.412              | 0.554              | 0.831              | 1.145              | 1.610              | ... |
| ... | ...                | ...                | ...                | ...                | ...                | ... |

完整的卡方表格还会列出更多自由度和尾部概率的条目，包括分布上尾中的 $\alpha=0.05,0.025,0.01,0.005$。

这些临界值决定总体方差的置信区间。对于双侧置信水平 $1-\alpha$，每个尾部的概率为 $\alpha/2$。卡方统计量的界限为：

$$\chi^{2}_{1-\alpha/2,k} \le \chi^{2} \le \chi^{2}_{\alpha/2,k}$$

左界 $\chi^2_{1-\alpha/2,k}$ 的右尾概率较大，因此两个值中它较小；右界 $\chi^2_{\alpha/2,k}$ 的右尾概率较小，因此它较大。如果计算出的统计量落在这两个界限之内，则样本变异性与假设的方差一致。如果落在界限之外，则数据表明：相对于假设的 $\sigma^2$，离散程度可能过小或过大。

## 示例 1

某工业压力传感器制造商声称，其设备的输出偏差服从正态分布，标准差为 $\sigma=0.8$ PSI（磅每平方英寸）。工程师随机选取四个传感器，因此 $n=4$，并记录它们相对于标称压力的偏差。测量值及其相对于样本均值的偏差如下：

| 传感器 | 测量偏差（PSI） | $X_i-\bar X$ | $(X_i-\bar X)^2$ |
| ------ | ------------------------- | ------------- | ------------------ |
| 1      | 0.5                        | -0.075         | 0.005625            |
| 2      | 1.1                         | 0.525          | 0.275625            |
| 3      | -0.2                        | -0.775         | 0.600625            |
| 4      | 0.9                         | 0.325          | 0.105625            |

样本均值为：

$$\bar X = \frac{0.5+1.1-0.2+0.9}{4} = 0.575$$

平方偏差之和为 $0.9875$。无偏样本方差为：

$$S^{2} = \frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2 = \frac{0.9875}{3} \approx 0.329$$

样本标准差为：

$$S = \sqrt{0.329} \approx 0.574\ \mathrm{PSI}$$

在总体方差为 $\sigma^{2}=0.8^{2}=0.64$ 的假设下，卡方统计量为：

$$\chi^{2} = \frac{(n-1)S^{2}}{\sigma^{2}}$$

该统计量服从自由度为 $n-1=3$ 的卡方分布。代入平方偏差的精确和可得：

$$\chi^{2} = \frac{0.9875}{0.64} \approx 1.543$$

对于 $\alpha=0.05$ 的双侧检验，$\chi^2_3$ 统计量的接受域端点为 $\chi^2_{0.975,3}=0.216$ 和 $\chi^2_{0.025,3}=9.348$：

$$0.216 \le \chi^{2} \le 9.348$$

由于观测值 $1.543$ 位于该范围内，样本与制造商关于 $\sigma=0.8$ PSI 的声明相容。
