---
title: 函数项级数
title_en: Function Series
source: https://algebrica.org/function-series/
license: CC BY-NC 4.0
tags:
  - function-series
  - pointwise-convergence
  - series
  - uniform-convergence
  - weierstrass-criterion
translation:
  status: current
  source_hash: 1c7fa6d8d3dd85aabeae09ccb34896928cc131d3dc2060de37ff772b7e61c711
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 函数列

取一个集合 $A \subseteq \mathbb{R}$，并规定对每个自然数 $n$ 都对应一个[函数](../functions/) $f_n$。这样得到的不再是数字列表，而是一列[定义域](.../determining-the-domain-of-a-function/)相同、都定义在 $A$ 上的函数：

$$
f_0(x), \ f_1(x), \ f_2(x), \ \dots, \ f_n(x), \ \dots
$$

这类对象称为 $A$ 上的函数列。下面的例子展示了这个概念：

$$
f_n(x) = \frac{x^n}{1+x^n} \qquad x \in [0, +\infty) \tag{1}
$$

对于固定的指数 $n$，它是关于 $x$ 的一个函数；而当 $n$ 遍历 $\mathbb{N}$ 时，就会产生无穷多个函数。在所选定义域上，量 $1+x^n$ 始终为正，因此每一项都处处有定义。

## 函数列的逐点收敛

将 $x$ 固定为一个值后，函数 $f_n(x)$ 就退化为每个下标对应的普通数字。它们的极限刻画了函数列在这一点的行为；让这个值遍历定义域，就能从各个局部行为拼出整体图景，同时把每个 $f_n(x)$ 看作一个数值[数列](../sequences/)。

应用于 $(1)$，根据 $x$ 的大小可以得到三种情形：

+ 当 $0 \leq x < 1$ 时，幂 $x^n \to 0$，因此 $f_n(x) \to 0$；
+ 当 $x = 1$ 时，每一项都等于 $\tfrac{1}{2}$，所以这个常数数列趋于 $\tfrac{1}{2}$；
+ 当 $x > 1$ 时，分子和分母同除以 $x^n$，得到 $f_n(x) = \dfrac{1}{1+x^{-n}} \to 1$。

汇总这三种结果，极限函数为：

$$
f(x) =
\begin{cases}
0 & 0 \leq x < 1 \\[6pt]
\dfrac{1}{2} & x = 1 \\[6pt]
1 & x > 1
\end{cases}
$$

每个 $f_n$ 都连续，但极限函数在 $x = 1$ 处出现了间断。因此，这种收敛方式不会自动保持连续性，这一观察为后面介绍的更强收敛方式做了铺垫。

设 $f_n$ 定义在公共定义域 $A \subseteq \mathbb{R}$ 上。如果对每个 $x \in E$，数列 $f_n(x)$ 都趋于有限极限，就称其在子集 $E \subseteq A$ 上逐点收敛。逐点计算这些极限，就在 $E$ 上定义了一个函数：

$$
f(x) = \lim_{n \to +\infty} f_n(x) \qquad \forall x \in E
$$

所有满足条件的 $E$ 中最大的一个，就是逐点收敛集。如果在某一点 $c$ 处，$f_n(c)$ 无法趋于有限值，那么函数列在该点发散或不定。

## 函数项级数

从定义在 $A \subseteq \mathbb{R}$ 上的函数列 $f_n$ 出发，用数值[级数](../series/)中相同的方式构造部分和：

$$
\begin{align}
s_0(x) &= f_0(x) \\[6pt]
s_1(x) &= f_0(x) + f_1(x) \\[6pt]
s_2(x) &= f_0(x) + f_1(x) + f_2(x) \\[6pt]
       &\ \vdots \\[6pt]
s_n(x) &= f_0(x) + f_1(x) + \dots + f_n(x)
\end{align}
$$

令 $n$ 趋于无穷，就把这些部分和变成无穷多个函数的和，即由 $f_n$ 生成的函数项级数：

$$
\sum_{n=0}^{\infty} f_n(x)
$$

在这个对象中，$f_n(x)$ 是通项，$s_n(x)$ 是 $n$ 阶部分和。记作 $r_n(x)$ 的 $n$ 阶余项，汇集了前 $n+1$ 项之后的所有项：

$$
r_n(x) = \sum_{k=n+1}^{\infty} f_k(x) = f_{n+1}(x) + f_{n+2}(x) + \dots
$$

公共定义域 $A$ 就成为级数的定义域。在所有函数项级数中，有两类级数会被单独研究：通项为单项式的[幂级数](../power-series/)，以及通项为三角函数的[傅里叶级数](../fourier-series/)。

> 用一个数字替换 $x$，就会把函数项级数变成数值级数。对于 $\sum_{n=0}^{\infty} x^n$，这种代入得到一个[等比级数](../geometric-series/)，其公比正好就是代入的那个数字。

## 函数项级数的逐点收敛

在一个固定点处，该级数的行为就像逐项取值后得到的数值级数。对 $x \in A \subseteq \mathbb{R}$ 写出 $\sum_{n=0}^{\infty} f_n(x)$，点 $c$ 处的性质由 $\sum_{n=0}^{\infty} f_n(c)$ 读出：

+ 当 $\sum_{n=0}^{\infty} f_n(c)$ 收敛时，称为收敛点；
+ 当 $\sum_{n=0}^{\infty} f_n(c)$ 发散时，称为发散点；
+ 当 $\sum_{n=0}^{\infty} f_n(c)$ 不定时，称为不定点。

收集所有收敛的 $x$，得到逐点收敛集 $E \subseteq A$。在 $E$ 上，该级数定义了一个和函数 $s : E \to \mathbb{R}$：

$$
s(x) = \sum_{n=0}^{\infty} f_n(x) \qquad \forall x \in E
$$

于是，级数在 $E$ 上逐点收敛到 $s(x)$。确定 $E$ 的方法是把 $x$ 当作参数，然后使用数值级数的判别法。

- - -

下面是一个具体例子：

$$
\sum_{n=1}^{\infty} \frac{1}{(1+x^2)^n}
$$

对固定的 $x$，这是公比为 $\dfrac{1}{1+x^2}$ 的等比级数。对每个实数 $x$，这个公比都属于 $(0, 1]$，并且只在原点处取得 $1$，所以除了 $x = 0$ 之外的每一点都收敛。逐点收敛集为

$$
E = \{\ x \in \mathbb{R} \mid x \neq 0 \ \}
$$

在 $E$ 上，使用等比级数求和公式可得闭式：

$$
s(x) = \frac{\dfrac{1}{1+x^2}}{1-\dfrac{1}{1+x^2}} = \frac{1}{x^2}
$$

在每个非零点处，部分和都会趋于这个值。

## 一致收敛

在逐点收敛中，使余项 $r_n(x)$ 小于给定 $\varepsilon$ 的下标可以随点而变化，并且当 $x$ 移动时，这个下标可能无限增大。要求存在一个同时适用于所有点的下标，就得到更强的性质。

设级数 $\sum_{n=0}^{\infty} f_n(x)$ 在 $E \subseteq \mathbb{R}$ 上收敛到 $s(x)$。如果存在子集 $F \subseteq E$，使得它在该子集上一致收敛到 $s(x)$：

$$
\forall \varepsilon > 0 \ \ \exists p \in \mathbb{N} \ : \ \forall n > p \ \land \ \forall x \in F, \quad |r_n(x)| < \varepsilon
$$

在一个集合上一致收敛会强制该集合上的逐点收敛，因此一致收敛集包含在逐点收敛集之内，并且可能严格更小。

- - -

等比级数 $\sum_{n=0}^{\infty} x^n$ 清楚地展示了这一差别。当 $|x| < 1$ 时，其余项可以写成等比形式：

$$
r_n(x) = \sum_{k=n+1}^{\infty} x^k = \frac{x^{n+1}}{1-x}
$$

将 $x$ 限制在 $[-\rho, \rho]$ 上，其中 $0 \leq \rho < 1$。分子至多为 $\rho^{n+1}$，分母至少为 $1-\rho$，因此：

$$
|r_n(x)| = \frac{|x|^{n+1}}{|1-x|} \leq \frac{\rho^{n+1}}{1-\rho} \qquad \forall \ x \in [-\rho, \rho]
$$

这个估计不依赖于 $x$，并且当 $n$ 增大时趋于零，因此一个阈值就能服务于整个区间，级数在 $[-\rho, \rho]$ 上一致收敛。在开区间 $]-1, 1[$ 上，情况则不成立：当 $x \to 1^-$ 时，对于每个固定的 $n$，$\dfrac{x^{n+1}}{1-x}$ 都趋于无穷大，余项不存在统一的上界；尽管逐点收敛仍然成立，一致收敛却失败。

## 一致收敛的柯西判别法

有一种不必先求和的判别法，它通过要求连续的有限段项之和保持足够小来工作。级数 $\sum_{n=0}^{\infty} f_n(x)$ 在 $E \subseteq \mathbb{R}$ 上一致收敛，当且仅当对给定的 $\varepsilon > 0$，存在某个下标 $n_\varepsilon \in \mathbb{N}$，使得对所有 $n > m > n_\varepsilon$ 及所有 $x \in E$，都有：

$$
|f_{m+1}(x) + f_{m+2}(x) + \dots + f_n(x)| < \varepsilon
$$

这与数值级数的[柯西判别法](../cauchy-convergence-criterion-series/)相对应，关键特征在于 $n_\varepsilon$ 只由 $\varepsilon$ 决定，而不需要针对 $x$ 进行调整。

## 总收敛与魏尔斯特拉斯判别法

直接估计余项通常很困难，因此与数值级数进行比较就很有吸引力。假设在 $E \subseteq \mathbb{R}$ 上，对于 $\sum_{n=0}^{\infty} f_n(x)$，存在一列非负常数 $M_n$，它们组成一个收敛级数 $\sum_{n=0}^{\infty} M_n$，并且控制每一项：

$$
|f_n(x)| \leq M_n \qquad \forall \ n \in \mathbb{N}, \ \ \forall \ x \in E
$$

那么级数在 $E$ 上一致收敛。这些控制项将函数项级数的每个尾部压在 $\sum_{n=0}^{\infty} M_n$ 的对应尾部之下，而后者根据柯西条件已经一致地足够小。

- - -

在整个实轴上，级数 $\sum_{n=1}^{\infty} \dfrac{\cos(nx)}{n^2}$ 符合这一框架。由于余弦的绝对值从不超过 $1$，每一项都有一个常数控制项：

$$
\left|\frac{\cos(nx)}{n^2}\right| \leq \frac{1}{n^2} \quad \forall \ n \in \mathbb{N}, \ \  \forall \ x \in \mathbb{R}
$$

级数 $\sum_{n=1}^{\infty} \dfrac{1}{n^2}$ 收敛，因此假设得到满足，原级数在 $\mathbb{R}$ 上一致收敛。

> 具有这类控制项的级数称为总收敛级数。总收敛可以推出一致收敛；并且由于 $\sum_{n} |f_n(x)| \leq \sum_{n} M_n$，它还可以推出绝对收敛，进而推出逐点收敛。

## 按项取极限

下面的结果都表达了同一个原则：在一致收敛下，可以把某个运算移入无穷和中。先考虑极限。设 $\sum_{n=0}^{\infty} f_n(x)$ 在 $E \subseteq \mathbb{R}$ 上一致收敛到 $s(x)$，令 $c$ 为 $E$ 的一个聚点，并假设每一项都有有限极限：

$$
\lim_{x \to c} f_n(x) = a_n \qquad \forall n \in \mathbb{N}
$$

那么 $\sum_{n=0}^{\infty} a_n$ 收敛，并且两个取极限的过程可以交换：

$$
\lim_{x \to c} \sum_{n=0}^{\infty} f_n(x) = \sum_{n=0}^{\infty} \lim_{x \to c} f_n(x)
$$

即使没有和函数的公式，这也能计算和的极限。考虑 $[0, +\infty[$ 上的 $\sum_{n=1}^{\infty} \dfrac{1}{n^2+x}$。不等式 $\dfrac{1}{n^2+x} \leq \dfrac{1}{n^2}$ 保证一致收敛，而当 $x \to 0$ 时，$\dfrac{1}{n^2+x} \to \dfrac{1}{n^2}$，因此极限可以移入求和号：

$$
\lim_{x \to 0} \sum_{n=1}^{\infty} \frac{1}{n^2+x} = \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## 和函数的连续性

一致收敛的和仍然保持连续性。只要 $\sum_{n=0}^{\infty} f_n(x)$ 在 $E \subseteq \mathbb{R}$ 上一致收敛，并且每一项在点 $c \in E$ 处[连续](../continuous-functions/)，和函数 $s(x)$ 就在 $c$ 处连续；如果各项在整个 $E$ 上连续，那么 $s(x)$ 也在整个 $E$ 上连续。证明的做法是选取一个在一致意义下接近 $s$ 的部分和，再把该部分和的连续性转移到 $c$ 的某个邻域中的 $s$。

考虑 $\mathbb{R}$ 上的 $\sum_{n=1}^{\infty} \dfrac{\cos^n x}{2^n}$。

控制项 $\left|\dfrac{\cos^n x}{2^n}\right| \leq \dfrac{1}{2^n}$ 与收敛级数 $\sum_{n=1}^{\infty} \dfrac{1}{2^n}$ 配合，根据魏尔斯特拉斯判别法得到一致收敛；又因为每一项都连续，所以和函数也连续。这里的和是公比为 $\tfrac{1}{2}\cos x$、从 $n = 1$ 开始的等比级数，其闭式为：

$$
s(x) = \frac{\tfrac{1}{2}\cos x}{1-\tfrac{1}{2}\cos x} = \frac{\cos x}{2-\cos x}
$$

这个函数在整个 $\mathbb{R}$ 上连续。

## 按项积分

对于有限个函数，积分可以分配到和的每一项；一致收敛则把这个结论扩展到无穷和。如果 $\sum_{n=0}^{\infty} f_n(x)$ 在 $[a, b]$ 上一致收敛，并且每一项都在 $[a, b]$ 上[可积](../definite-integrals/)，那么 $s(x)$ 在 $[a, b]$ 上可积，并且

$$
\int_a^b \left[\sum_{n=0}^{\infty} f_n(x)\right] dx = \sum_{n=0}^{\infty} \int_a^b f_n(x) \ dx
$$

这种交换可以双向进行：既可以由各项的积分得到和函数的积分，也可以由这些积分得到一个数值级数的和。

- - -

在 $\left[0, \tfrac{1}{2}\right]$ 上，等比级数一致收敛，并且各项都可积。逐项积分得到一串等式：

$$
\int_0^{1/2} \frac{1}{1-x} \ dx = \sum_{n=0}^{\infty} \int_0^{1/2} x^n \ dx = \sum_{n=0}^{\infty} \frac{1}{(n+1)2^{n+1}}
$$

左侧的积分等于 $\ln 2$，因此移动求和下标可以确定一个数值级数：

$$
\sum_{n=1}^{\infty} \frac{1}{n2^n} = \ln 2
$$

这个值无需直接求原函数项级数的和即可得到。

## 按项求导

求导更加微妙，因为导数可能放大函数本身保持很小的振荡，所以仅有级数的一致收敛并不足够。起作用的条件是导数级数一致收敛。

设 $\sum_{n=0}^{\infty} f_n(x)$ 在 $[a, b]$ 上收敛，每一项都在 $[a, b]$ 上[可导](../derivatives/)，并且 $\sum_{n=0}^{\infty} f_n'(x)$ 在 $[a, b]$ 上一致收敛。那么 $s(x)$ 在 $[a, b]$ 上可导，并且其导数可以逐项计算：

$$
s'(x) = \sum_{n=0}^{\infty} f_n'(x) \qquad \forall x \in [a, b]
$$

和的导数等于各项导数之和。额外假设背后使用的是[拉格朗日中值定理](../lagrange-theorem/)，它应用于差 $f_m - f_n$，将部分和的增量与其导数联系起来。

对等比级数逐项求导会产生一个新的闭式。固定区间 $[-\rho, \rho]$，其中 $0 \leq \rho < 1$。求导后的各项满足 $|nx^{n-1}| \leq n\rho^{n-1}$，并且 $\sum_{n=1}^{\infty} n\rho^{n-1}$ 收敛，因此 $\sum_{n=1}^{\infty} nx^{n-1}$ 在该区间上一致收敛。

然后对 $\sum_{n=0}^{\infty} x^n = \dfrac{1}{1-x}$ 逐项求导，得到闭式：

$$
\sum_{n=1}^{\infty} n x^{n-1} = \frac{d}{dx}\left(\frac{1}{1-x}\right) = \frac{1}{(1-x)^2} \qquad -1 < x < 1
$$

这个恒等式在整个 $(-1, 1)$ 上成立，因为其中每个点都属于某个区间 $[-\rho, \rho]$。
