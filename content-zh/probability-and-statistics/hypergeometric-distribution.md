---
title: 超几何分布
title_en: Hypergeometric Distribution
source: https://algebrica.org/hypergeometric-distribution/
license: CC BY-NC 4.0
tags:
  - binomial-distribution
  - discrete-random-variables
  - expected-value
  - hypergeometric-distribution
  - probability
  - probability-mass-function
  - sampling-without-replacement
  - statistics
  - variance
translation:
  status: current
  source_hash: bee0ff071004cd155361af6f37377ca74296ebd87ca7d97545b9c8e77c653bbd
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 定义

超几何分布是一种离散概率分布，用于描述从有限总体中不放回地抽取简单随机样本时，样本中成功的次数。在[二项分布](../binomial-distribution/)中，各次试验相互独立，成功概率保持不变。而在超几何模型中，每次抽取都会改变总体的构成，因此从一次抽取到下一次抽取，抽中成功项的概率会发生变化。

考虑一个划分为成功项和失败项的有限总体，从中不放回地抽取固定大小的样本。这个试验具有以下性质：

+ 总体大小固定为 $N \ge 2$，其中有 $K \in \{0,\ldots,N\}$ 个成功项，以及 $N-K$ 个失败项。
+ 样本量满足 $1 \le n \le N$，并且每个包含 $n$ 个项目的子集被选中的概率相同。
+ 抽出的每个项目不是成功项就是失败项。
+ [离散随机变量](../discrete-random-variables/) $X$ 表示样本中观察到的成功项数量。

依次抽取项目，并令每一步中剩余的每个项目都有相同的被抽中概率，就得到这种抽样方案。一个给定的子集可以按 $n!$ 种不同顺序抽出，而每一种顺序的概率都是 $1/[N(N-1)\cdots(N-n+1)]$。因此，抽取某个特定子集的概率为：

$$\frac{n!}{N(N-1)\cdots(N-n+1)} = \frac{1}{\binom{N}{n}}$$

样本中恰好观察到 $x$ 个成功项的概率为：

$$P(X = x) = \frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}$$

在这个表达式中，[二项式系数](../binomial-coefficient/) $\binom{K}{x}$ 统计从 $K$ 个可用成功项中选出 $x$ 个的方法数，$\binom{N-K}{n-x}$ 统计从 $N-K$ 个失败项中选出剩余 $n-x$ 个项目的方法数，而 $\binom{N}{n}$ 是从大小为 $N$ 的总体中抽取大小为 $n$ 的样本时，所有不同样本的数量。

> 当 $b > a$ 或 $b < 0$ 时，二项式系数 $\binom{a}{b}$ 为零，因此只有在 $\max(0, n-N+K) \le x \le \min(n, K)$ 时，$P(X = x)$ 才非零。

- - -

根据[范德蒙德恒等式](../binomial-coefficient/)，这些概率的和为 $1$，这是任何概率分布都必须满足的条件：

$$\sum_{x=0}^{n} \binom{K}{x}\binom{N-K}{n-x} = \binom{N}{n}$$

只要从有限总体中不放回地抽取简单随机样本，并且每个项目都有或没有某种指定特征，就可以使用同一个模型。在质量控制中，$X$ 可以统计一批已知不合格品与合格品数量的产品中，样本内的不合格品数。在民意调查中，若总体中有 $K$ 名成员会回答“是”，$X$ 就可以统计样本中回答“是”的人数。

- - -

对于 $X \sim \mathrm{Hyp}(N, K, n)$，其概率质量函数、均值、方差和[标准差](../variance-and-covariance-of-a-random-variable/)如下。

[class="table-1"]

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| $P(X = x) = \frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}} \quad x = 0, 1, \dots, n$  |
| $\mu = E(X) = n\frac{K}{N}$                                                              |
| $\sigma^{2} = \mathrm{Var}(X) = n\frac{K}{N}\left(1 - \frac{K}{N}\right)\frac{N-n}{N-1}$ |
| $\sigma = \sqrt{n\frac{K}{N}\left(1 - \frac{K}{N}\right)\frac{N-n}{N-1}}$                |

[/class]

## 超几何分布的均值

超几何分布的[均值](../introduction-to-the-mean/)或[期望值](../mean-or-expected-value-of-a-random-variable/)，是大小为 $n$ 的样本中预期成功项的数量。根据定义：

$$\mu = E(X) = \sum_{x=0}^{n} xP(X = x)$$

代入概率质量函数，得到：

$$E(X) = \sum_{x=0}^{n} x\frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}$$

我们使用恒等式：

$$x\binom{K}{x} = K\binom{K-1}{x-1}$$

如果 $K=0$，则 $X=0$，均值公式直接成立。对于 $K \ge 1$，含有 $x = 0$ 的项因为因子 $x$ 而为零。这个恒等式可以改写其余每一项，从而提出常数因子 $K$：

$$E(X) = \frac{K}{\binom{N}{n}} \sum_{x=1}^{n} \binom{K-1}{x-1}\binom{N-K}{n-x}$$

由于 $N-K = (N-1)-(K-1)$，范德蒙德恒等式可以再次应用；这次总体大小为 $N-1$，其中有 $K-1$ 个成功项，样本量为 $n-1$：

$$\sum_{x=1}^{n} \binom{K-1}{x-1}\binom{N-K}{n-x} = \binom{N-1}{n-1}$$

将这个值代入 $E(X)$ 的表达式，得到：

$$E(X) = \frac{K}{\binom{N}{n}} \binom{N-1}{n-1}$$

由 $\binom{N}{n} = \frac{N}{n}\binom{N-1}{n-1}$ 可得 $\binom{N-1}{n-1}/\binom{N}{n} = n/N$，因此均值为：

$$\mu = E(X) = n\frac{K}{N}$$

因子 $K/N$ 是总体中成功项所占的比例。尽管这里的抽取相互依赖，但期望的成功项数量与有放回抽样时相同。

## 超几何分布的方差

超几何分布的[方差](../variance-and-covariance-of-a-random-variable/)衡量观察到的成功项数量围绕均值 $\mu = nK/N$ 的离散程度。它与二阶矩的关系为：

$$\sigma^{2} = \mathrm{Var}(X) = E(X^{2}) - [E(X)]^{2}$$

将 $X$ 写成 $n$ 个示性变量之和，每个示性变量对应一次抽取：

$$X = X_{1} + X_{2} + \cdots + X_{n}$$

示性变量 $X_{i}$ 在第 $i$ 次抽取成功时取 $1$，否则取 $0$。由对称性，样本的每个位置都等可能由总体中的任意一个 $N$ 个项目占据，因此每个示性变量的期望都是：

$$E(X_{i}) = P(X_{i} = 1) = \frac{K}{N}$$

由于 $X_{i}$ 是参数为 $K/N$ 的[伯努利变量](../bernoulli-distribution/)，其方差为：

$$\mathrm{Var}(X_{i}) = \frac{K}{N}\left(1 - \frac{K}{N}\right)$$

由于采用不放回抽样，示性变量并不相互独立，所以求和的方差中，每一对不同抽取都会额外产生一个协方差项：

$$\mathrm{Var}(X) = \sum_{i=1}^{n} \mathrm{Var}(X_{i}) + \sum_{i \neq j} \mathrm{Cov}(X_{i}, X_{j})$$

当 $i \neq j$ 时，乘积 $X_{i}X_{j}$ 恰好在第 $i$ 次和第 $j$ 次抽取都成功时等于 $1$。在总体中 $N(N-1)$ 个有序的不同项目对中，有 $K(K-1)$ 对由两个成功项组成。因此：

$$E(X_{i}X_{j}) = P(X_{i} = 1, X_{j} = 1) = \frac{K}{N} \cdot \frac{K-1}{N-1}$$

因此，两个不同示性变量的协方差为：

$$
\begin{align}
\mathrm{Cov}(X_{i}, X_{j}) &= E(X_{i}X_{j}) - E(X_{i})E(X_{j}) \\
&= \frac{K}{N} \cdot \frac{K-1}{N-1} - \frac{K^{2}}{N^{2}} \\
&= -\frac{K}{N}\left(1 - \frac{K}{N}\right)\frac{1}{N-1}
\end{align}
$$

协方差为负，因为某个位置抽到成功项后，其他位置可用的成功项就会减少。将 $n$ 个方差和 $n(n-1)$ 个协方差相加，得到：

$$
\begin{align}
\mathrm{Var}(X) &= n\frac{K}{N}\left(1 - \frac{K}{N}\right) - n(n-1)\frac{K}{N}\left(1 - \frac{K}{N}\right)\frac{1}{N-1} \\
&= n\frac{K}{N}\left(1 - \frac{K}{N}\right)\left(1 - \frac{n-1}{N-1}\right) \\
&= n\frac{K}{N}\left(1 - \frac{K}{N}\right)\frac{N-n}{N-1}
\end{align}
$$

> 因子 $(N-n)/(N-1)$ 称为有限总体校正。对于 $n > 1$，它小于 $1$，因此方差小于参数为 $p = K/N$ 的[二项分布](../binomial-distribution/)方差 $np(1-p)$；当 $n = N$ 时，样本就是整个总体，成功项数量确定，方差也就变为零。

## 示例 1

一批产品包含 $800$ 件，其中有 12% 不合格。质检员从中进行简单随机抽样，选取 $25$ 件产品进行质量控制。随机变量 $X$ 表示样本中的不合格品数量。

抽出的产品不会放回批次，因此每次抽取后总体构成都会改变，抽到不合格品的概率也不保持不变。各次抽取因此相互依赖。由于每个包含 $25$ 件产品的样本被抽到的概率相同，可能的样本数量为：

$$\binom{800}{25}$$

这批产品中有 $0.12 \times 800 = 96$ 件不合格品，以及 $800 - 96 = 704$ 件合格品。样本中恰好包含 $x$ 件不合格品的概率为：

$$P(X = x) = \frac{\binom{96}{x}\binom{704}{25-x}}{\binom{800}{25}}$$

因此，$X$ 服从参数为 $N = 800$、$K = 96$、$n = 25$ 的超几何分布。其均值为 $E(X) = 25 \times 96/800 = 3$，所以质检员平均会在样本中发现 $3$ 件不合格品。

## 与二项分布的比较

超几何分布和[二项分布](../binomial-distribution/)都描述固定次数抽取中观察到的成功数量，但两者使用的抽样假设不同。

+ 二项分布假设各次试验相互独立且成功概率恒定，就像每次抽取都来自无限总体，或者每次抽取后都把项目放回再进行下一次抽取。
+ 超几何分布适用于从有限总体中不放回抽样；每次抽取都会改变剩余项目的构成，成功概率随抽取次数变化，结果也不相互独立。

如果每次抽取后都把项目放回再进行下一次抽取，各次抽取就相互独立，成功概率始终为 $K/N$。此时成功数量服从精确分布：

$$X \sim \mathrm{Bin}\left(n, \frac{K}{N}\right)$$

当总体大小 $N$ 相对于样本量 $n$ 很大时，移除少量项目几乎不会改变总体构成。此时，超几何分布可以用参数为 $p = K/N$ 的二项分布很好地近似：

$$\mathrm{Hyp}(N, K, n) \approx \mathrm{Bin}\left(n, \frac{K}{N}\right)$$

一个经验规则是：当抽样比例满足 $n/N \le 0.05$ 时，可以使用二项近似。
