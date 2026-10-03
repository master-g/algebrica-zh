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
translation:
  status: current
  source_hash: 130f42ea8787a496684c6493b4471ab35ab06cb65d45320ea166968071a6d07f
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 定义

狄利克雷函数 $D : \mathbb{R} \to \{0, 1\}$ 是[有理数](../rational-numbers/)集的指示函数 $\mathbf{1}_{\mathbb{Q}}$。它在有理数处取值 $1$，在[无理数](../irrational-numbers/)处取值 $0$：

$$
D(x) = \mathbf{1}_{\mathbb{Q}}(x) =
\begin{cases}
1 & x \in \mathbb{Q} \\[6pt]
0 & x \in \mathbb{R} \setminus \mathbb{Q}
\end{cases}
$$

## 性质

+ [定义域](../determining-the-domain-of-a-function/)：$\mathbb{R}$
+ 值域：$\{0, 1\}$
+ 有界性：对每个 $x \in \mathbb{R}$ 都有 $0 \leq D(x) \leq 1$
+ 奇偶性：[偶函数](../even-and-odd-functions/)，满足 $D(-x) = D(x)$
+ 周期性：非零[周期](../functions/)的集合是 $\mathbb{Q} \setminus \{0\}$，不存在基本周期。

对有理数 $r$，数 $x + r$ 是有理数恰好当 $x$ 是有理数。由此对每个 $x \in \mathbb{R}$ 都有 $D(x + r) = D(x)$，所以每个非零有理数都是周期。反过来，如果 $r$ 是周期，令 $x = 0$ 得到 $D(r) = D(0) = 1$，这迫使 $r \in \mathbb{Q}$。正的有理周期没有最小元，所以 $D$ 没有基本周期。

$\mathbb{Q}$ 和 $\mathbb{R} \setminus \mathbb{Q}$ 在[实数轴](../real-numbers/)上都是[稠密](../topology-of-the-real-line/)的。固定 $x_0 \in \mathbb{R}$，取 $\varepsilon = 1/2$。如果 $x_0$ 是有理数，那么 $x_0$ 的每个 $\delta$ 邻域都含有满足 $0 < |x - x_0| < \delta$ 的无理数 $x$。函数值满足：

$$|D(x) - D(x_0)| = 1 > \varepsilon$$

如果 $x_0$ 是无理数，论证改用 $\delta$ 邻域中的有理数 $x$。因此[连续性](../continuous-functions/)的 $\varepsilon$-$\delta$ 条件在每个 $x_0$ 处都不成立，$D$ 处处不连续。

- - -

函数 $D$ 是连续函数的累次逐点极限：

$$D(x) = \lim_{k \to \infty} \lim_{j \to \infty} \cos^{2j}(k!\pi x)$$

如果 $x = p/q$ 是有理数，其中 $p \in \mathbb{Z}$、$q \in \mathbb{N}_{>0}$，那么对每个 $k \geq q$，[阶乘](../factorial/) $k!$ 都能被 $q$ 整除。对这些 $k$ 值，数 $k!x$ 是整数，$\cos(k!\pi x) = \pm 1$，内层极限为 $1$。如果 $x$ 是无理数，那么对每个[正整数](../natural-numbers/) $k$ 都有 $|\cos(k!\pi x)| < 1$，内层极限为 $0$。外层极限与 $D(x)$ 一致。

对固定的 $k$，把内层极限记为 $g_k$。每个 $g_k$ 都属于贝尔第一类，因为它是连续函数的[逐点极限](../sequence-of-functions/)。恒等式 $D = \lim_{k \to \infty} g_k$ 表明 $D$ 至多属于贝尔第二类。贝尔第一类函数在一个稠密集上连续，而 $D$ 处处不连续。这就排除了第一类，所以 $D$ 的贝尔类是二。

在一点可导蕴含在该点连续。由于 $D$ 处处不连续，它处处不[可导](../derivatives/)。

## 黎曼可积性与勒贝格可积性

设 $[a, b]$ 是一个[紧区间](../intervals/)，其中 $a < b$。划分 $P$ 的每个子区间都含有有理点和无理点。$D$ 在该子区间上的[上确界](../supremum-and-infimum/)为 $1$，下确界为 $0$。对每个划分，[达布上和与达布下和](../definite-integrals/)为：

$$
\begin{align}
U(D, P) &= b - a \\[6pt]
L(D, P) &= 0
\end{align}
$$

当 $a < b$ 时，这两个和不相等，不满足[达布判据](../riemann-integrability-criteria/)。函数 $D$ 在任何非退化的紧区间上都不是黎曼可积的。

- - -

[可数](../cardinality-and-countable-sets/)集 $\mathbb{Q}$ 是博雷尔集，并且[勒贝格测度为零](../riemann-integrability-criteria/)。它的指示函数 $D$ 可测，并且几乎处处等于零。对每个勒贝格可测集 $E \subseteq \mathbb{R}$，$D$ 在 $E$ 上的积分等于：

$$\int_E D(x) \ d\lambda = \lambda(E \cap \mathbb{Q}) = 0$$

特别地，取 $E = \mathbb{R}$ 可知 $D$ 在 $\mathbb{R}$ 上勒贝格可积，积分为零。
