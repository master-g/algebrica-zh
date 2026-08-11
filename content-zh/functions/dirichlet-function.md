---
title: 狄利克雷函数
title_en: Dirichlet Function
source: https://algebrica.org/dirichlet-function/
license: CC BY-NC 4.0
tags:
  - differentiability
  - discontinuity
  - lebesgue-integration
  - riemann-integrability
  - thomae-function
translation:
  status: current
  source_hash: 095c7fa145d2ff15b6e0d6d6a743685b6edab3e3691e566368b603e7d10ea6db
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 定义

狄利克雷函数在 $\mathbb{R}$ 上按以下[分段规则](../piecewise-functions/)定义：

$$
D(x) =
\begin{cases}
1 & x \in \mathbb{Q} \\[6pt]
0 & x \in \mathbb{R} \setminus \mathbb{Q}
\end{cases}
$$

乍看之下，这个定义几乎微不足道，只是区分[有理数](../rational-numbers/)与[无理数](../irrational-numbers/)。函数是[偶函数](../even-and-odd-functions/)，且每个非零有理数都是 $D$ 的一个周期，因为 $x + r$ 为有理数当且仅当 $x$ 为有理数，所以 $D$ 是没有基本周期的周期函数。然而，这种简单性掩盖了极不规则的分析行为，也正因为如此，狄利克雷函数成为[积分](../definite-integrals/)理论和实分析中的标准参考对象。

- - -

$D$ 的一个显著性质是它在 $\mathbb{R}$ 的每一点都[不连续](../discontinuities-of-real-functions/)。这一结论来自 $\mathbb{Q}$ 与 $\mathbb{R} \setminus \mathbb{Q}$ 在[实数轴](../real-numbers/)上的相互稠密性。

对任意固定点 $x_0 \in \mathbb{R}$ 和任意 $\varepsilon > 0$，[区间](../intervals/) $(x_0 - \varepsilon, x_0 + \varepsilon)$ 同时包含有理数和无理数。因此，不存在一个使 $D$ 保持常值的 $x_0$ 邻域；任何收敛到 $x_0$ 的[序列](../convergent-and-divergent-sequences/)，都可以构造成使 $D$ 的值在 $0$ 与 $1$ 之间无限交替。于是，下面的[极限](../limits/)：

$$\lim_{x \to x_0} D(x)$$

对任意 $x_0$ 都不存在，从而证明函数处处不连续。由于处处不连续的函数不可能在任何非退化区间上[黎曼可积](../riemann-integrability-criteria/)，还可以注意到：对区间的任意划分，上达布和与下达布和始终分别为 $1$ 和 $0$。

> 达布和是这样得到的和：将函数在划分的每个子区间上的最大值或最小值乘以该子区间的长度，再把所得结果相加。这些和用于从上方和下方逼近积分。

- - -

狄利克雷最初的构造把 $D$ 表示为连续函数的二重极限：

$$D(x) = \lim_{k \to \infty} \lim_{j \to \infty} \cos^{2j}(k!\pi x)$$

当 $x$ 为有理数时，只要 $k$ 足够大，$k!x$ 就是整数，因此 $\cos(k!\pi x) = \pm 1$，内层极限等于 $1$。当 $x$ 为无理数时，$k!x$ 永远不是整数，所以 $|\cos(k!\pi x)| < 1$，内层极限等于 $0$。这使 $D$ 属于贝尔第二类。它不可能属于第一类，因为第一类贝尔函数在一个稠密点集上连续，而 $D$ 处处不连续。

## 黎曼意义下的不可积性

考虑区间 $[a, b]$，其中 $a < b$，并取任意满足下式的划分 $\mathcal{P}$：

$$\mathcal{P} = \{\ a = x_0 < x_1 < \cdots < x_n = b \ \}$$

在每个子区间 $[x_{i-1}, x_i]$ 上，由于有理数稠密，$D$ 的[上确界](../supremum-and-infimum/)为 $1$；由于无理数稠密，下确界为 $0$。因此：

$$U(D, \mathcal{P}) = \sum_{i=1}^{n} 1 \cdot (x_i - x_{i-1}) = b - a$$

$$L(D, \mathcal{P}) = \sum_{i=1}^{n} 0 \cdot (x_i - x_{i-1}) = 0$$

对于每个划分 $\mathcal{P}$，都有 $U(D, \mathcal{P}) - L(D, \mathcal{P}) = b - a > 0$，因此不满足黎曼判别准则。于是，在任何非平凡区间上，该函数都不具有经典意义下的积分。

- - -

勒贝格积分理论带来了重要的视角转变。集合 $\mathbb{Q}$ 是可数集，因此其勒贝格测度为零：$\lambda(\mathbb{Q}) = 0$。这意味着相对于勒贝格测度，$D(x) = 0$ 几乎处处成立；又因为几乎处处等于零的函数积分为零，所以有

$$\int_{a}^{b} D(x) \ d\lambda = 0$$

对每个区间 $[a, b]$ 都成立。这是勒贝格理论相对于黎曼理论具有更强能力的一个直接例证：按照构造，即使某些集合在实数轴上稠密，它也不会为测度为零的集合赋予权重。

## 可导性

关于 $D$ 是否在某一点具有[导数](../derivatives/)的问题，有一个确定答案：$D$ 处处不可导。$D$ 在点 $x_0$ 处的导数定义为极限：

$$D'(x_0) = \lim_{h \to 0} \frac{D(x_0 + h) - D(x_0)}{h}$$

前提是这个极限存在。由于可导性蕴含[连续性](../continuous-functions/)，而 $D$ 在 $\mathbb{R}$ 的每一点都不连续，因此立即可知 $D$ 不可能在任何一点可导。

这一结论也可以通过[差商](../difference-quotient/)直接看出。固定任意 $x_0$，考虑两个收敛到 $x_0$ 的序列 $(r_n)$ 和 $(s_n)$，其中对所有 $n$ 都有 $r_n \in \mathbb{Q}$ 以及 $s_n \in \mathbb{R} \setminus \mathbb{Q}$。若 $x_0 \in \mathbb{Q}$，则：

$$\frac{D(r_n) - D(x_0)}{r_n - x_0} = \frac{1 - 1}{r_n - x_0} = 0$$

$$\frac{D(s_n) - D(x_0)}{s_n - x_0} = \frac{0 - 1}{s_n - x_0} = \frac{-1}{s_n - x_0}$$

当 $s_n \to x_0$ 时，第二个表达式无界。反之，若 $x_0 \in \mathbb{R} \setminus \mathbb{Q}$，则：

$$\frac{D(r_n) - D(x_0)}{r_n - x_0} = \frac{1 - 0}{r_n - x_0} = \frac{1}{r_n - x_0}$$

$$\frac{D(s_n) - D(x_0)}{s_n - x_0} = \frac{0 - 0}{s_n - x_0} = 0$$

此时第一个表达式在 $r_n \to x_0$ 时无界。无论哪种情形，差商都没有有限极限，这就证实 $D'(x_0)$ 不存在。

## 托马函数

有一个与狄利克雷函数密切相关的函数，称为托马函数或爆米花函数，其定义如下：

$$
T(x) =
\begin{cases}
\dfrac{1}{q} & x = \dfrac{p}{q} \\[6pt]
0 & x \in \mathbb{R} \setminus \mathbb{Q}
\end{cases}
$$

其中 $p \in \mathbb{Z}$，$q \in \mathbb{N}_{>0}$，且 $\gcd(|p|, q) = 1$，也就是说，分数 $p/q$ 已约分到最简。

与狄利克雷函数不同，托马函数在每个无理点连续、在每个有理点不连续。这一行为体现了勒贝格判别准则为黎曼可积性允许的边界情形：黎曼可积函数可以在一个测度为零的集合上不连续，而有理数虽然稠密，恰好构成了这样一个集合。

因此，托马函数是黎曼可积的，在每个区间上的积分都等于零，并且是狄利克雷函数的一个性质良好的对应对象。
