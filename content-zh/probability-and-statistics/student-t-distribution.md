---
title: 学生 t 分布
title_en: Student's t-Distribution
source: https://algebrica.org/student-t-distribution/
license: CC BY-NC 4.0
tags:
  - chi-square-distribution
  - confidence-intervals
  - continuous-random-variables
  - degrees-of-freedom
  - hypothesis-testing
  - normal-distribution
  - probability
  - sample-variance
  - student-t-distribution
translation:
  status: current
  source_hash: 580c297eddc554f0b5ff6278d50fc67bba3732ebce5d33a573aa627eb0313bbd
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 定义

在对正态总体的均值作推断时，如果总体[方差](../variance/)已知，[标准正态分布](../normal-distribution/) $\mathcal{N}(0,1)$ 就是参照模型。当方差未知、必须由样本估计时，这个估计本身带有抽样误差，标准正态分布会低估所得统计量的离散程度。学生 $t$ 分布就是把这部分额外的变异性考虑在内的参照模型。

[连续型随机变量](../continuous-random-variables/) $T$ 定义为下面的比：

$$T = \frac{Z}{\sqrt{V/k}}$$

+ $Z$ 是标准正态随机变量
+ $V$ 是自由度为 $k$ 的[卡方随机变量](../chi-square-distribution/)，与 $Z$ 独立
+ $k$ 是自由度，它决定分布的尾部有多重

由于 $V$ 的[期望值](../mean-or-expected-value-of-a-random-variable/)是 $E(V)=k$，分母的平方的均值为 $1$。$T$ 的分布仍然关于零对称，但因为分母是随机的，它的离散程度更大。由于 $Z$ 和 $V$ 独立，它们的比的密度可以算出闭式。

这个名称来自威廉·西利·戈塞特的笔名，他是都柏林吉尼斯啤酒厂的化学师。他 1908 年的论文“The Probable Error of a Mean”以“Student”的署名发表在《Biometrika》上。

## 分布的密度

对于自由度为 $k$ 的变量 $T$，概率密度函数为：

$$f(t;k) = \frac{\Gamma\left(\frac{k+1}{2}\right)}{\Gamma\left(\frac{k}{2}\right)\sqrt{k\pi}}\left(1+\frac{t^{2}}{k}\right)^{-\frac{k+1}{2}}$$

利用[贝塔函数](../beta-distribution/) $B(a,b)=\Gamma(a)\Gamma(b)/\Gamma(a+b)$ 和[伽马函数](../gamma-distribution/)的恒等式 $\Gamma(1/2)=\sqrt{\pi}$，密度有等价的形式：

$$f(t;k) = \frac{1}{\sqrt{k}B\left(\frac{k}{2},\frac{1}{2}\right)}\left(1+\frac{t^{2}}{k}\right)^{-\frac{k+1}{2}}$$

两种形式都只通过 $t^{2}$ 依赖于 $t$，所以图像关于原点对称。当 $|t|$ 很大时，密度像 $|t|^{-(k+1)}$ 那样衰减，这是幂律，而不是正态密度的指数衰减 $e^{-t^{2}/2}$。因此 $k$ 值小时尾部更重，曲线的形状只取决于 $k$。

当 $k=1$ 时，伽马因子为 $\Gamma(1)=1$ 和 $\Gamma(1/2)=\sqrt{\pi}$，密度为：

$$f(t;1) = \frac{1}{\pi\left(1+t^{2}\right)}$$

这是柯西密度，它的均值不存在。在另一端，当 $k \to \infty$ 时，第二个因子趋于 $e^{-t^{2}/2}$，归一化常数趋于 $1/\sqrt{2\pi}$，所以密度逐点收敛到标准正态密度。

![图 1](/assets/probability-and-statistics/svg/student-t-distribution-1.zh.svg)

> 随着自由度增大，曲线在原点附近变得更集中，并趋近标准正态曲线。

- - -

$f(t;k)$ 的图像有四个性质，它们都由上面的表达式得出。

+ 曲线下方的总面积为 $1$。由归一化常数的选取，对每个 $k>0$，密度在整个实数轴上的[积分](../definite-integrals/)都等于 $1$。
+ 曲线关于原点[对称](../even-and-odd-functions/)。总概率的一半位于原点的每一侧。当 $k>1$ 时，[均值](../introduction-to-the-mean/)存在并且等于 $0$。
+ 曲线有两个[拐点](../maximum-minimum-and-inflection-points/)，位于 $t=\pm\sqrt{k/(k+2)}$。随着 $k$ 增大，它们远离中心，并趋近标准正态曲线的拐点 $\pm1$。
+ 曲线以横轴为[渐近线](../asymptotes/)。当 $|t|$ 增大时密度趋于 $0$，对于小的 $k$，它趋于零的速度比正态密度慢。

## 均值、方差与峰度

对于 $T \sim t_k$，密度、[均值](mean-or-expected-value-of-a-random-variable)和[方差](../variance-and-covariance-of-a-random-variable/)以及超额峰度为：

[class="table-1"]

|  |
| :--- |
| $f(t;k) = \dfrac{\Gamma\left(\frac{k+1}{2}\right)}{\Gamma\left(\frac{k}{2}\right)\sqrt{k\pi}}\left(1+\frac{t^{2}}{k}\right)^{-\frac{k+1}{2}}$ |
| $\mu = E(T) = 0, \ k>1$ |
| $\sigma^{2} = \mathrm{Var}(T) = \dfrac{k}{k-2}, \ k>2$ |
| $\gamma_{2} = \dfrac{E\left[(T-\mu)^{4}\right]}{\sigma^{4}}-3 = \dfrac{6}{k-4}, \ k>4$ |

[/class]

对 $k$ 的条件是定义这些量的[反常积分](../improper-integrals/)收敛的条件。$m$ 阶矩要求 $|t|^{m}f(t;k)$ 可积，它在无穷远处的行为类似于 $|t|^{m-k-1}$，当 $k>m$ 时可积。均值在 $k>1$ 时存在，方差在 $k>2$ 时存在，需要四阶矩的超额峰度在 $k>4$ 时存在。当 $1<k\le2$ 时均值为 $0$ 而方差无穷，当 $k\le1$ 时二者都不存在。

把方差写成 $1+2/(k-2)$，就把它分成标准正态分布的方差和一个随 $k$ 增大而消失的正的超出部分。系数 $\gamma_{2}$ 从四阶标准化矩中减去 $3$，因为这个矩对每个正态分布都等于 $3$，所以 $\gamma_{2}=0$ 是正态的参照值。对于 $t$ 分布，$\gamma_{2}=6/(k-4)$ 在每个允许的 $k$ 处都为正，并趋于 $0$。把 $t$ 变量重新标度使方差为 $1$ 之后，它的密度在原点处的值比标准正态密度高，尾部也更重，这些差别随 $k$ 增大而减小。当 $k=5$ 时，$t$ 变量偏离均值超过四个标准差的概率是 $3.6\cdot10^{-3}$，而正态模型是 $6.3\cdot10^{-5}$。只要三阶矩存在，由对称性偏度就为 $0$。

## 累积分布函数

$T$ 的累积分布函数由下式给出：

$$F(t;k) = \int_{-\infty}^{t} f(u;k) \ du$$

对一般的 $k$，被积函数没有初等原函数，标准的闭式用到正则化贝塔函数 $I_x(a,b)=B(x;a,b)/B(a,b)$，即不完全贝塔函数与完全贝塔函数之比。当 $t>0$ 时，[换元](../integration-by-substitution/) $u=\sqrt{k}\sqrt{(1-x)/x}$ 把尾部积分变为一个不完全贝塔积分，得到：

$$F(t;k) = 1-\frac{1}{2}I_{\frac{k}{k+t^{2}}}\left(\frac{k}{2},\frac{1}{2}\right)$$

由对称性，通过 $F(-t;k)=1-F(t;k)$ 可以推广到负的自变量。临界值是用数值方法算出的[分位数](../median-and-quantiles/)，传统上列在 t 表中。

## 样本均值的 t 统计量

设 $X_1,X_2,\dots,X_n$ 是来自 $\mathcal{N}(\mu,\sigma^{2})$ 的独立观测值，[样本均值](../arithmetic-mean/)为 $\bar X$，无偏[样本方差](../variance/)为：

$$S^{2} = \frac{1}{n-1}\sum_{i=1}^{n}\left(X_i-\bar X\right)^{2}$$

用已知的 $\sigma$ 标准化的样本均值是标准正态变量，经过缩放的样本方差是与之独立的卡方变量：

$$Z = \frac{\bar X-\mu}{\sigma/\sqrt{n}} \sim \mathcal{N}(0,1), \quad V = \frac{(n-1)S^{2}}{\sigma^{2}} \sim \chi^{2}_{n-1}$$

把这两个变量代入 $T$ 的定义并取 $k=n-1$，得到：

$$
\begin{align}
T &= \frac{Z}{\sqrt{V/(n-1)}} \\[6pt]
&= \frac{\left(\bar X-\mu\right)\sqrt{n}/\sigma}{\sqrt{S^{2}/\sigma^{2}}} \\[6pt]
&= \frac{\bar X-\mu}{S/\sqrt{n}}
\end{align}
$$

未知的 $\sigma$ 被消去，最后一行的随机变量服从自由度为 $n-1$ 的学生 $t$ 分布。在假设检验中，原假设指定 $\mu=\mu_0$，统计量 $(\bar X-\mu_0)/(S/\sqrt{n})$ 可以由样本算出。与样本量相比少了一个自由度，因为偏差 $X_i-\bar X$ 满足约束 $\sum_{i=1}^{n}\left(X_i-\bar X\right)=0$，所以其中只有 $n-1$ 个可以独立取值。

## t 分布的对称性

关于零的对称性决定了临界值的读法。用 $t_{\alpha}$ 表示右尾概率为 $\alpha$ 的值，即 $P(T>t_{\alpha})=\alpha$。把曲线关于纵轴反射，$t_{\alpha}$ 右侧的右尾就映到 $-t_{\alpha}$ 左侧的左尾，两块面积相等。用这种记号：

$$t_{1-\alpha} = -t_{\alpha}$$

右尾面积为 $1-\alpha$ 的值是右尾面积为 $\alpha$ 的值的相反数。因此表中的一个数就同时给出两个尾部的边界。如果 $P(T>t_{\alpha})=\alpha$，那么 $P(T<-t_{\alpha})=\alpha$，两个尾部合起来的概率是 $2\alpha$。

![图 2](/assets/probability-and-statistics/svg/student-t-distribution-2.svg)

> 由对称性，$-t_{\alpha}$ 左侧和 $t_{\alpha}$ 右侧的阴影面积相等。

- - -

[z 表](../standard-normal-z-table/)通常给出标准正态分布的累积概率，而 t 表给出指定尾部概率的临界值。由于 $t$ 分布的形状取决于 $k$，t 表的每一行对应一个不同的自由度，每一列对应一个右尾概率。行列交叉处的数就是这两个参数对应的临界值 $t_{\alpha}$。

> 这些表直接给出概率或临界值的数值，不需要直接计算密度的积分。

## 例 1

假设我们要求自由度为 $k=12$ 的 $t$ 统计量的一个值，使左尾的面积为 $0.01$。左尾面积 $0.01$ 对应右尾面积 $0.99$，所以要找的值是 $t_{0.99}$，由对称性，它是右尾面积为 $0.01$ 的值的相反数：

$$t_{0.99} = -t_{0.01}$$

表中直接给出 $t_{0.01}$。查 $k=12$ 这一行和右尾概率 $0.01$ 这一列，交叉处的数是：

| $k$ | 0.10 | 0.05 | 0.025 | 0.01 | ... |
| --- | ---- | ---- | ----- | ---- | --- |
| 10 | 1.372 | 1.812 | 2.228 | 2.764 | ... |
| 11 | 1.363 | 1.796 | 2.201 | 2.718 | ... |
| 12 | 1.356 | 1.782 | 2.179 | 2.681 | ... |
| 13 | 1.350 | 1.771 | 2.160 | 2.650 | ... |
| ... | ... | ... | ... | ... | ... |

把 $t_{0.01}=2.681$ 代入对称关系，得到：

$$t_{0.99} = -2.681$$

当自由度为 $12$ 时，使总概率的 $1\%$ 落在其左侧的值是 $-2.681$。

## 关于尾部概率的说明

对于对称的分界点 $-a$ 和 $a$，两个尾部所含的概率是一个尾部概率的两倍。在这个例子中，$2.681$ 右侧的右尾面积为 $0.01$，$-2.681$ 左侧的左尾面积相同，[区间](../intervals/) $[-2.681,2.681]$ 之外的概率为：

$$2 \times 0.01 = 0.02$$

两个临界值之间的中间面积是它的补：

$$1-0.02 = 0.98$$

把这对临界值应用于上一节的统计量，就确定了一个置信区间。含 $13$ 个观测值的样本有 $n-1=12$ 个自由度，不等式 $-2.681 \le \left(\bar X-\mu\right)/\left(S/\sqrt{13}\right) \le 2.681$ 以概率 $0.98$ 成立。解出 $\mu$，得到区间：

$$\bar X \pm 2.681\frac{S}{\sqrt{13}}$$

在重复抽样下，这个区间在 $98\%$ 的样本中覆盖未知的总体均值。
