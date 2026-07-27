---
title: 单位根
title_en: Roots of Unity
source: https://algebrica.org/roots-of-unity/
license: CC BY-NC 4.0
tags:
  - complex-numbers
  - complex-powers
  - cyclic-group
  - cyclotomic-polynomial
  - de-moivre-theorem
  - euler-formula
  - primitive-root
  - regular-polygon
  - roots-of-unity
  - unit-circle
translation:
  status: current
  source_hash: 9569ba61090db9dc97439c83652402b3906fcd1c92b0bcdd2102894f86cab22b
  translator: omp
  updated: "2026-07-24T11:25:44.669Z"
---
## 定义

给定正整数 $n$，$n$ 次单位根是满足[方程](../equations/) $z^n = 1$ 的[复数](../complex-numbers-introduction/) $z$。在 $\mathbb{C}$ 中恰好有 $n$ 个这样的数，它们可以通过[欧拉公式](../eulers-formula/)给出显式描述：欧拉公式指出，对每个实数 $\theta$，以下恒等式成立：

$$e^{i\theta} = \cos\theta + i\sin\theta$$

恰好存在 $n$ 个解，其理由如下：[多项式](../polynomials/) $z^n - 1$ 的次数为 $n$，因此至多有 $n$ 个不同的复根；下面的显式构造给出 $n$ 个互异的值，故恰好有 $n$ 个不同的单位根。这也与[代数学基本定理](../roots-of-a-polynomial/)一致。

- - -

为得到根的闭式，先对方程 $z^n = 1$ 取模，得 $|z|^n = 1$；由于 $n$ 为正整数，故 $|z| = 1$。于是可将单位模长复数写成[指数形式](../complex-numbers-exponential-form/) $z = e^{i\theta}$，原方程化为 $e^{in\theta} = 1$。由于关于实变量 $\theta$ 的函数 $e^{i\theta}$ 以 $2\pi$ 为周期，故需要存在整数 $k$ 使得 $n\theta = 2\pi k$，从而 $\theta = 2\pi k/n$。当 $k$ 取 $n$ 个连续[整数](../integers/)时，所得的 $\theta$ 值在单位圆上给出 $n$ 个不同的点。通常取 $k = 0, 1, \ldots, n-1$，得到 $n$ 次单位根如下：

$$z_k = e^{2\pi ik/n} \qquad k = 0, 1, \ldots, n-1$$

利用欧拉公式展开，每个根的直角坐标表示为：

$$z_k = \cos\left(\frac{2\pi k}{n}\right) + i\sin\left(\frac{2\pi k}{n}\right)$$

当 $k = 0$ 时得到 $z_0 = 1$，它对每个 $n$ 都是 $n$ 次单位根。当 $n = 2$ 时，两个根为 $1$ 和 $-1$。当 $n = 4$ 时，四个根为 $1, i, -1, -i$，这四个数也出现在高斯整数的运算中。对一般的 $n$，单位根成共轭对出现。当 $k$ 取 $1, \ldots, n-1$ 时，辐角 $2\pi k/n$ 与 $2\pi(n-k)/n$ 之和为 $2\pi$，故 $z_{n-k} = \overline{z_k}$。等价地，将下标按模 $n$ 理解时，对一切 $k$ 有 $\overline{z_k} = z_{(-k)\bmod n}$。$z_0$ 自共轭；$n$ 为偶数时 $z_{n/2}$ 亦自共轭；其余根两两成共轭对。

## 群结构

所有 $n$ 次单位根的[集合](../sets/) $\mu_n$ 在复数乘法下构成一个[群](../groups/)。封闭性由恒等式 $z_j \cdot z_k = e^{2\pi i(j+k)/n}$ 得出：该乘积仍是 $n$ 次单位根，因为：

$$(z_j z_k)^n = z_j^n z_k^n = 1$$

单位元是 $z_0 = 1$。对任意 $k$，$z_k$ 的逆元为 $z_{(-k)\bmod n} = \overline{z_k}$；当 $k = 0$ 时仍为 $z_0$，当 $1 \leq k \leq n-1$ 时可写为 $z_{n-k}$。乘法法则可以简洁地写为：

$$z_j \cdot z_k = z_{(j+k) \bmod n}$$

因此群 $\mu_n$ 是一个阶为 $n$ 的[循环群](../groups/)。当 $n \geq 2$ 时，它由元素 $z_1 = e^{2\pi i/n}$ 生成，且每个根都是 $z_1$ 的幂，因为 $z_k = z_1^k$；当 $n = 1$ 时，$\mu_1 = \{1\}$ 是平凡循环群。映射 $z_k \mapsto [k]$ 是 $\mu_n$ 与 $\mathbb{Z}/n\mathbb{Z}$ 之间的同构。

特别地，$\mu_n$ 是阿贝尔群（交换群），其子群结构与 $\mathbb{Z}/n\mathbb{Z}$ 如出一辙：对于 $n$ 的每个正因数 $d$，都存在唯一的阶为 $d$ 的子群，即 $\mu_d$，它自然地嵌入 $\mu_n$ 中。

> 由于 $\mathbb{Z}/n\mathbb{Z}$ 是阿贝尔群（交换群），$\mu_n$ 亦然：两个单位根相乘的先后次序无关紧要，因为恒等式 $z_j z_k = z_k z_j$ 由指数相加的交换律即可得出。

## 几何解释

在复平面上，$n$ 次单位根位于单位圆内接正 $n$ 边形的各顶点上（此描述仅当 $n \geq 3$ 时适用；$n = 1$ 时仅有点 $1$，$n = 2$ 时则为单位圆上的一对对径点），其中一个顶点固定在实轴上的 $1$ 处。这些顶点等距分布，任意两个相邻根之间的角间距为 $2\pi/n$。

这种等距分布是辐角 $2\pi k/n$ 均匀间隔的直接结果。当 $k$ 每增加一个单位，相应点沿单位圆转过固定[角度](../angles-and-angular-measure/)。$n = 3, 4, 6$ 的情形尤为自然，因为对应的正多边形可以铺满平面。当 $n = 3$ 时，三个顶点构成一个等边三角形，由下式给出：

$$
\begin{align}
z_0 &= 1 \\[6pt]
z_1 &= e^{2\pi i/3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2} \\[6pt]
z_2 &= e^{4\pi i/3} = -\frac{1}{2} - i\frac{\sqrt{3}}{2}
\end{align}
$$

![图 1：3 次单位根在单位圆上的几何表示](/assets/complex-numbers/svg/roots-of-unity-1.zh.svg)

> 当 $n = 6$ 时，六个根是正六边形的顶点，其中包含 $n = 2$ 和 $n = 3$ 的根，这是整除关系 $2 \mid 6$ 和 $3 \mid 6$ 以及相应子群包含关系 $\mu_2, \mu_3 \subset \mu_6$ 的结果。

## 本原单位根

若单位根 $z_k \in \mu_n$ 在群中的阶恰好为 $n$，即对每个正整数 $m < n$ 都有 $z_k^m \neq 1$，则称之为本原单位根。等价地说，$z_k$ 是 $\mu_n$ 的生成元：群中每个元素都可写成 $z_k$ 的幂。由于 $z_k = z_1^k$，$z_k$ 在循环群 $\mu_n$ 中的阶为 $n / \gcd(k, n)$，故 $z_k$ 是本原单位根当且仅当 $\gcd(k, n) = 1$。

因此，本原 $n$ 次单位根的个数等于 $\{1, 2, \ldots, n\}$ 中与 $n$ 互素的整数个数，按定义即欧拉函数 $\varphi(n)$。

- - -

例如，当 $n = 6$ 时，有 $\varphi(6) = 2$，本原单位根为 $z_1 = e^{\pi i/3}$ 和 $z_5 = e^{5\pi i/3}$，分别对应 $k = 1$ 和 $k = 5$。当 $n$ 为素数时，除 $z_0 = 1$ 外的每个根都是本原单位根，因为对每个 $k \in \{1, \ldots, n-1\}$ 都有 $\gcd(k, n) = 1$，从而 $\varphi(n) = n - 1$。

若 $\zeta$ 是任意一个本原 $n$ 次单位根，则整个集合 $\mu_n$ 即为由 $\zeta$ 生成的循环群，由它的第 $0$ 次幂至第 $n-1$ 次幂组成：

$$\mu_n = \{1, \zeta, \zeta^2, \ldots, \zeta^{n-1}\}$$

因此，选取哪个具体的本原单位根只是约定问题，在数学本质上并无区别，因为所有本原单位根生成的是同一个群。

## 单位根之和

所有 $n$ 次单位根之和对每个 $n \geq 2$ 均为零。为说明这一点，注意多项式 $z^n - 1$ 在 $\mathbb{C}$ 上完全分解为：

$$z^n - 1 = (z - z_0)(z - z_1) \cdots (z - z_{n-1})$$

将右端展开，比较两端 $z^{n-1}$ 的系数：左端该系数为零，右端为 $-(z_0 + z_1 + \cdots + z_{n-1})$。由此恒等关系可得：

$$\sum_{k=0}^{n-1} z_k = 0$$

另一种推导利用[等比级数](../geometric-series/)的求和公式。由于当 $n \geq 2$ 时 $z_1 \neq 1$，可得：

$$\sum_{k=0}^{n-1} z_1^k = \frac{z_1^n - 1}{z_1 - 1} = \frac{1 - 1}{z_1 - 1} = 0$$

在几何上，这一结果说明这些单位根对应点的平均位置（重心）为原点。当 $n = 2$ 时，它们是单位圆上的一对对径点；当 $n \geq 3$ 时，它们是内接于单位圆的正 $n$ 边形的顶点，重心由对称性可知位于原点。

## 单位根之积

所有 $n$ 次单位根的乘积也可由 $z^n - 1$ 的因式分解确定。由于 $z^n - 1$ 的常数项为 $-1$，首项系数为 $1$，比较以下恒等式中的常数项：

$$z^n - 1 = (z - z_0)(z - z_1) \cdots (z - z_{n-1})$$

得到：

$$\prod_{k=0}^{n-1} z_k = (-1)^{n+1}$$

这是[韦达公式](../vieta-formulas/)的直接应用，该公式将多项式的系数与其根的初等对称多项式联系起来。对 $n = 2$，根为 $1$ 和 $-1$，其乘积为 $-1 = (-1)^3$。对 $n = 3$，三个三次单位根的乘积为 $1 = (-1)^4$，也可通过将利用[棣莫弗定理](../de-moivre-theorem/)求出的显式表达式直接相乘来验证。

## 分圆多项式

本原 $n$ 次单位根恰为 $n$ 次分圆多项式 $\Phi_n(x)$ 的根，后者定义为以本原 $n$ 次单位根为全部根的首一多项式：

$$\Phi_n(x) = \prod_{\substack{k=1 \\ \gcd(k, n) = 1}}^{n} (x - e^{2\pi ik/n})$$

$\Phi_n(x)$ 的次数为 $\varphi(n)$。前几个分圆多项式为：

$$
\begin{align}
\Phi_1(x) &= x - 1 \\[6pt]
\Phi_2(x) &= x + 1 \\[6pt]
\Phi_3(x) &= x^2 + x + 1 \\[6pt]
\Phi_4(x) &= x^2 + 1
\end{align}
$$

下面的恒等式将分圆多项式与 $z^n - 1$ 的[因式分解](../factoring-ac-method/)联系起来。由于每个 $n$ 次单位根恰为 $n$ 的唯一正因数 $d$ 所对应的本原 $d$ 次单位根，故有：

$$z^n - 1 = \prod_{d \mid n} \Phi_d(z)$$

由此可以递推求出分圆多项式。代数数论中的一个经典定理断言，对每个正整数 $n$，$\Phi_n(x)$ 在 $\mathbb{Q}$ 上不可约，这一性质在分圆多项式的专门条目中有详细讨论。
