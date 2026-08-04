---
title: 泊松分布
title_en: Poisson Distribution
source: https://algebrica.org/poisson-distribution/
license: CC BY-NC 4.0
tags:
  - binomial-distribution
  - cumulative-distribution-function
  - discrete-random-variables
  - expected-value
  - poisson-distribution
  - poisson-process
  - probability
  - probability-mass-function
  - statistics
  - variance
translation:
  status: current
  source_hash: 1f76142978cf0232b0fd4e0583a947906866f34229ed16df424a0f6b29360adb
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 定义

泊松分布是描述固定时间或空间区域内计数的[离散概率分布](../discrete-random-variables/)。当不相交子区域中的计数相互独立、平均速率恒定，并且在足够小的子区域内发生两次或更多次事件的可能性很低时，可以使用它。例子包括十分钟内接到的电话数、一秒内探测到的放射性粒子数，或一米电线上的缺陷数。

如果离散随机变量 $X$ 服从参数为 $\lambda>0$ 的泊松分布，记作 $X\sim\mathrm{Poisson}(\lambda)$，其概率质量函数为：

$$
P(X=x)=p(x;\lambda)=\frac{e^{-\lambda}\lambda^x}{x!},\qquad x=0,1,2,\ldots
$$

在这个表达式中，$x$ 是观测到的发生次数，$\lambda$ 是固定区间内预期的发生次数，$e$ 是[欧拉数](../euler-number-limit-sequence/)，而 $x!$ 是 $x$ 的[阶乘](../factorial/)。因此，$\lambda$ 是所选区间内的平均计数。当某个过程的速率为 $\rho$（按每单位时间计）时，长度为 $t$ 的区间的参数为 $\lambda=\rho t$。

概率质量函数的取值非负，而且其所有取值之和为 $1$，这是每个离散概率分布都必须满足的条件。指数函数的[泰勒级数](../taylor-series/)给出：

$$
\sum_{x=0}^{\infty}P(X=x)=e^{-\lambda}\sum_{x=0}^{\infty}\frac{\lambda^x}{x!}=e^{-\lambda}e^{\lambda}=1
$$

## 泊松过程

齐次泊松过程描述事件累积发生的时刻。设其强度为 $\rho>0$，单位为每单位时间的发生次数，并令 $R_1,R_2,\ldots$ 为相互独立且服从同一个指数分布的等待时间：

$$
P(R_i>s)=e^{-\rho s},\qquad s\geq 0
$$

第 $n$ 次事件发生的时刻，是前 $n$ 个等待时间之和：

$$
T_0=0,\qquad T_n=R_1+R_2+\cdots+R_n
$$

对于 $t\geq0$，计数随机变量为：

$$
N(t)=\max\{\ n\geq0\mid T_n\leq t\ \}
$$

因此，$N(t)$ 是截至时刻 $t$ 的事件发生次数。它服从参数为 $\rho t$ 的泊松分布：

$$
N(t)\sim\mathrm{Poisson}(\rho t),\qquad P(N(t)=x)=\frac{e^{-\rho t}(\rho t)^x}{x!}
$$

不相交时间区间中的计数相互独立。更精确地，对于 $0\leq s<t$，增量 $N(t)-N(s)$ 统计区间 $(s,t]$ 中的事件发生次数，并满足：

$$
N(t)-N(s)\sim\mathrm{Poisson}(\rho(t-s))
$$

因此，增量的分布只取决于区间长度 $t-s$，而与区间所处的位置无关。这个过程具有平稳增量和独立增量。对于长度为 $h$ 的短区间，泊松增量公式给出：

$$
\begin{align}
P(N(t+h)-N(t)=1)&=\rho h+o(h) \\[6pt]
P(N(t+h)-N(t)\geq2)&=o(h)
\end{align}
$$

这里的 $o(h)$ 表示其与 $h$ 的比值在 $h\to0$ 时趋于零的量，具体含义见[小 o 记号](../little-o-notation/)。这些关系准确地说明了速率为 $\rho$，并且在极短区间内发生两次或更多次事件的概率，相对于区间长度而言可以忽略。

例如，假设 $N(t)$ 的强度为 $\rho=4$。要计算在时刻 $2$ 前发生三次、时刻 $5$ 前发生四次的概率，将事件写成不相交区间上的计数：

$$
\{\ N(2)=3,N(5)=4\ \}=\{\ N(2)=3,N(5)-N(2)=1\ \}
$$

第一个计数的参数为 $4\cdot2=8$，第二个计数的参数为 $4\cdot(5-2)=12$。根据独立性，有：

$$
\begin{align}
P(N(2)=3,N(5)=4)
&=P(N(2)=3)P(N(5)-N(2)=1) \\[6pt]
&=\frac{e^{-8}8^3}{3!}\frac{e^{-12}12}{1!} \\[6pt]
&\approx0.0000021
\end{align}
$$

## 主要性质

对于 $X\sim\mathrm{Poisson}(\lambda)$，其概率质量函数、[期望值](../mean-or-expected-value-of-a-random-variable/)、[方差](../variance-and-covariance-of-a-random-variable/)和[标准差](../variance/)如下。

[class="table-1"]

|                                                                 |
| :-------------------------------------------------------------- |
| $P(X=x)=\dfrac{\lambda^xe^{-\lambda}}{x!},\quad x=0,1,2,\ldots$ |
| $\mu=E(X)=\lambda$                                              |
| $\sigma^2=\mathrm{Var}(X)=\lambda$                              |
| $\sigma=\sqrt{\lambda}$                                         |

[/class]

等式 $E(X)=\mathrm{Var}(X)$ 是精确泊松模型的必要条件。样本均值与样本方差之间如果长期存在差异，可能说明泊松假设并不适合描述该事件机制。

## 泊松分布的均值

$X$ 的期望值定义为：

$$
E(X)=\sum_{x=0}^{\infty}xP(X=x)
$$

代入概率质量函数，得到：

$$
E(X)=\sum_{x=0}^{\infty}x\frac{e^{-\lambda}\lambda^x}{x!}
$$

含 $x=0$ 的项为零。对于每个 $x\geq1$，利用恒等式 $x/x!=1/(x-1)!$，得到：

$$
E(X)=e^{-\lambda}\lambda\sum_{x=1}^{\infty}\frac{\lambda^{x-1}}{(x-1)!}
$$

令 $k=x-1$，由指数级数可得：

$$
E(X)=e^{-\lambda}\lambda\sum_{k=0}^{\infty}\frac{\lambda^k}{k!}=e^{-\lambda}\lambda e^{\lambda}=\lambda
$$

因此，固定区间内的期望计数就是参数 $\lambda$。

## 泊松分布的方差

利用下式可以从二阶矩计算方差：

$$
\mathrm{Var}(X)=E(X^2)-[E(X)]^2
$$

恒等式 $x^2=x(x-1)+x$ 可以将二阶矩拆成两个和：

$$
E(X^2)=\sum_{x=0}^{\infty}x(x-1)\frac{e^{-\lambda}\lambda^x}{x!}+\sum_{x=0}^{\infty}x\frac{e^{-\lambda}\lambda^x}{x!}
$$

第二个和就是 $E(X)=\lambda$。在第一个和中，$x=0$ 和 $x=1$ 对应的项为零。将 $x(x-1)$ 与 $x!$ 约去，并令 $k=x-2$，得到：

$$
\sum_{x=2}^{\infty}\frac{e^{-\lambda}\lambda^x}{(x-2)!}=\lambda^2e^{-\lambda}\sum_{k=0}^{\infty}\frac{\lambda^k}{k!}=\lambda^2
$$

所以 $E(X^2)=\lambda^2+\lambda$，从而：

$$
\mathrm{Var}(X)=\lambda^2+\lambda-\lambda^2=\lambda
$$

标准差是正平方根 $\sqrt{\lambda}$。

## 泊松累积分布

对于非负整数 $r$，[累积分布函数](../discrete-random-variables/)给出至多 $r$ 次事件发生的概率：

$$
F(r;\lambda)=P(X\leq r)=e^{-\lambda}\sum_{x=0}^{r}\frac{\lambda^x}{x!}
$$

同一个函数也可以给出上尾概率和区间概率。对于整数 $1\leq a\leq b$，有：

$$
\begin{align}
&P(X\geq a)=1-F(a-1;\lambda) \\[6pt]
&P(a\leq X\leq b)=F(b;\lambda)-F(a-1;\lambda)
\end{align}
$$

累积泊松表列出选定 $r$ 和 $\lambda$ 值所对应的 $F(r;\lambda)$ 预计算值。下面给出这样一张表的一小部分。

| $\lambda$ | $r=0$ | $1$ | $2$ | $3$ | $4$ | ... |
| :-------- | :---- | :-- | :-- | :-- | :-- | :-- |
| 0.02 | 0.980 | 1.000 | | | | ... |
| 0.04 | 0.961 | 0.999 | 1.000 | | | ... |
| 0.06 | 0.942 | 0.998 | 1.000 | | | ... |
| 0.08 | 0.923 | 0.997 | 1.000 | | | ... |
| 0.10 | 0.905 | 0.995 | 1.000 | | | ... |
| 0.15 | 0.861 | 0.990 | 0.999 | 1.000 | | ... |
| ... | ... | ... | ... | ... | ... | ... |

第 $\lambda$ 行、第 $r$ 列中的数值是 $P(X\leq r)$。这张缩短表中的空白单元格，表示相应数值保留三位小数后四舍五入为 $1.000$。

## 泊松概率的计算

假设呼叫中心每十分钟平均接到五个电话。假定电话以恒定速率、相互独立地到达，求十分钟内恰好到达八个电话的概率。

令 $X$ 表示十分钟内接到的电话数。则 $X\sim\mathrm{Poisson}(5)$，直接代入可得：

$$
P(X=8)=\frac{e^{-5}5^8}{8!}=\frac{e^{-5}390625}{40320}\approx0.0653
$$

这个概率约为 $0.0653$，即 $6.53\%$。

同一个概率也可以从累积表中恢复。当 $\lambda=5$ 时，假设表中给出：

$$
\begin{align}
P(X\leq8)&=0.9319 \\[6pt]
P(X\leq7)&=0.8666
\end{align}
$$

恰好接到八个电话的概率，就是这两个累积概率之差：

$$
P(X=8)=P(X\leq8)-P(X\leq7)=0.9319-0.8666=0.0653
$$

## 从二项分布到泊松分布

当试验次数趋于无穷、成功概率趋于零，同时成功次数的期望保持不变时，泊松分布是[二项分布](../binomial-distribution/)的极限。将固定区间分成 $n$ 个子区间，并假设：

+ 每个子区间至多发生一次事件。
+ 子区间内发生一次事件的概率为 $p=\lambda/n$。
+ 不同子区间中的计数相互独立。

在这些假设下，总计数 $X$ 服从参数为 $n$ 和 $p$ 的二项分布。对于固定的非负整数 $x$，其概率为：

$$
P(X=x)=\binom{n}{x}p^x(1-p)^{n-x}
$$

将 $p=\lambda/n$ 代入，并展开[二项式系数](../binomial-coefficient/)后，概率变为：

$$
\begin{align}
P(X=x)
&=\binom{n}{x}\left(\frac{\lambda}{n}\right)^x\left(1-\frac{\lambda}{n}\right)^{n-x} \\[6pt]
&=\frac{n!}{x!(n-x)!}\frac{\lambda^x}{n^x}\left(1-\frac{\lambda}{n}\right)^n\left(1-\frac{\lambda}{n}\right)^{-x}
\end{align}
$$

当 $n\to\infty$ 且 $x$ 与 $\lambda$ 固定时，依赖于 $n$ 的各因子具有如下[极限](../limits/)：

$$
\frac{n!}{n^x(n-x)!}\to1,\qquad \left(1-\frac{\lambda}{n}\right)^n\to e^{-\lambda},\qquad \left(1-\frac{\lambda}{n}\right)^{-x}\to1
$$

因此：

$$
\lim_{n\to\infty}P(X=x)=\frac{e^{-\lambda}\lambda^x}{x!}
$$

对于有限的 $n$，当 $n$ 较大、$p$ 较小且 $np=\lambda$ 时，这个极限支持用泊松分布近似二项计数。
