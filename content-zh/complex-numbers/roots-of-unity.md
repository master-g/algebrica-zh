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
  - dihedral-group
  - euler-formula
  - primitive-root
  - regular-polygon
  - roots-of-unity
  - unit-circle
translation:
  status: current
  source_hash: 1e8af887cb8c7be18adeb15a937c884417af488135e77b625ff2126da8bd07c0
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

给定正整数 $n$，$n$ 次单位根是满足[方程](../equations/) $z^n = 1$ 的[复数](../complex-numbers-introduction/) $z$。在 $\mathbb{C}$ 中恰好有 $n$ 个这样的数，它们可以通过[欧拉公式](../eulers-formula/)给出显式描述；该公式指出，对每个实数 $\theta$，以下恒等式成立：

$$e^{i\theta} = \cos\theta + i\sin\theta$$

恰好存在 $n$ 个解是[代数学基本定理](../roots-of-a-polynomial/)的结果：[多项式](../polynomials/) $z^n - 1$ 的次数为 $n$，因此在 $\mathbb{C}$ 中至多有 $n$ 个根，而下面的显式构造表明这 $n$ 个候选值彼此不同。

- - -

为得到根的闭式，将单位模的复数以[指数形式](../complex-numbers-exponential-form/)写作 $z = e^{i\theta}$，于是条件 $z^n = 1$ 变为 $e^{in\theta} = 1$。由于复指数函数以 $2\pi$ 为周期，这要求对某个整数 $k$ 有 $n\theta = 2\pi k$，从而 $\theta = 2\pi k/n$。当 $k$ 取任意连续的 $n$ 个[整数](../integers/)时，所得 $\theta$ 值在单位圆上产生 $n$ 个不同的点。通常取 $k = 0, 1, \ldots, n-1$，得到如下形式的 $n$ 次单位根：

$$z_k = e^{2\pi ik/n} \qquad k = 0, 1, \ldots, n-1$$

利用欧拉公式展开，每个根都有直角坐标表示：

$$z_k = \cos\left(\frac{2\pi k}{n}\right) + i\sin\left(\frac{2\pi k}{n}\right)$$

当 $k = 0$ 时得到 $z_0 = 1$，它对每个 $n$ 都是 $n$ 次单位根。当 $n = 2$ 时，两个根为 $1$ 和 $-1$。当 $n = 4$ 时，四个根为 $1, i, -1, -i$，这在高斯整数的运算中很熟悉。对于一般的 $n$，根成共轭对出现：因为辐角 $2\pi k/n$ 与 $2\pi(n-k)/n$ 之和为 $2\pi$，对每个 $k$ 都有 $z_{n-k} = \overline{z_k}$。

## 群结构

所有 $n$ 次单位根的[集合](../sets/) $\mu_n$ 在复数乘法下构成一个[群](../groups/)。封闭性由恒等式 $z_j \cdot z_k = e^{2\pi i(j+k)/n}$ 得出，该乘积仍是 $n$ 次单位根，因为：

$$(z_j z_k)^n = z_j^n z_k^n = 1$$

单位元是 $z_0 = 1$，而 $z_k$ 的逆元是 $z_{n-k}$；由于 $|z_k| = 1$，它也就是复共轭 $\overline{z_k}$。乘法法则可以简洁地写成：

$$z_j \cdot z_k = z_{(j+k) \bmod n}$$

因此，群 $\mu_n$ 是一个阶为 $n$ 的[循环群](../groups/)，由元素 $z_1 = e^{2\pi i/n}$ 生成。每个其他根都是 $z_1$ 的幂，因为 $z_k = z_1^k$。映射 $z_k \mapsto k$ 是 $\mu_n$ 与在模 $n$ 加法下的 $\mathbb{Z}/n\mathbb{Z}$ 之间的同构。

特别地，$\mu_n$ 是阿贝尔群，其子群结构与 $\mathbb{Z}/n\mathbb{Z}$ 的子群结构相同：对 $n$ 的每个因数 $d$，都有唯一一个阶为 $d$ 的子群，即 $\mu_d$，它自然嵌入 $\mu_n$。

> 由于 $\mathbb{Z}/n\mathbb{Z}$ 是阿贝尔群，$\mu_n$ 也具有这一性质：两个根相乘的先后次序无关紧要，因为恒等式 $z_j z_k = z_k z_j$ 源于指数相加的交换律。

## 几何解释

在复平面上，$n$ 次单位根位于内接于单位圆的正 $n$ 边形各顶点上，其中一个顶点固定在实轴上的点 $1$。这些顶点等距分布，任意两个相邻根之间的角间距为 $2\pi/n$。

这种规则性直接来自辐角 $2\pi k/n$ 的均匀间隔。当 $k$ 增加一个单位时，单位圆上的相应点沿固定[角度](../angles-and-angular-measure/)前进。$n = 3, 4, 6$ 的情形尤其自然，因为相应的正多边形可以铺满平面。当 $n = 3$ 时，三个顶点构成等边三角形，其坐标为：

$$
\begin{align}
z_0 &= 1 \\[6pt]
z_1 &= e^{2\pi i/3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2} \\[6pt]
z_2 &= e^{4\pi i/3} = -\frac{1}{2} - i\frac{\sqrt{3}}{2}
\end{align}
$$

![图 1](/assets/complex-numbers/svg/roots-of-unity-1.zh.svg)

这幅图把 $\mu_n$ 与正多边形的对称联系起来。乘以本原根 $z_1$ 会使平面旋转 $2\pi/n$，并循环置换各顶点，因此 $\mu_n$ 的元素实现了 $n$ 个旋转对称。经过中心的 $n$ 条轴上的反射构成其余对称，而这 $2n$ 个映射共同组成正 $n$ 边形的[二面体群](../dihedral-groups/)。

> 当 $n = 6$ 时，六个根是正六边形的顶点，其中包含 $n = 2$ 与 $n = 3$ 的根；这是整除关系 $2 \mid 6$、$3 \mid 6$ 以及相应子群包含关系 $\mu_2, \mu_3 \subset \mu_6$ 的结果。

## 本原根

单位根 $z_k \in \mu_n$ 若在群中的阶恰好为 $n$，即对每个正整数 $m < n$ 都有 $z_k^m \neq 1$，则称为本原根。等价地，$z_k$ 是 $\mu_n$ 的生成元：群中每个元素都可写成 $z_k$ 的幂。由于 $z_k = z_1^k$，$z_k$ 在循环群 $\mu_n$ 中的阶为 $n / \gcd(k, n)$，所以 $z_k$ 是本原的当且仅当 $\gcd(k, n) = 1$。

因此，本原 $n$ 次单位根的数量等于 $\{1, 2, \ldots, n\}$ 中与 $n$ 互素的整数数量，这按定义就是欧拉函数 $\varphi(n)$。

- - -

例如，当 $n = 6$ 时，$\varphi(6) = 2$，本原根为 $z_1 = e^{\pi i/3}$ 和 $z_5 = e^{5\pi i/3}$，分别对应 $k = 1$ 与 $k = 5$。当 $n$ 为素数时，除 $z_0 = 1$ 外的每个根都是本原的，因为对每个 $k \in \{1, \ldots, n-1\}$ 都有 $\gcd(k, n) = 1$，从而 $\varphi(n) = n - 1$。

若 $\zeta$ 是任意一个本原 $n$ 次单位根，则通过指数运算取 $\zeta$ 的轨道可以恢复整个集合 $\mu_n$：

$$\mu_n = \{1, \zeta, \zeta^2, \ldots, \zeta^{n-1}\}$$

因此，选择某个具体的本原根只是约定，而不是数学实质，因为所有本原根生成同一个群。

## 根的和

对每个 $n \geq 2$，所有 $n$ 次单位根之和为零。为说明这一点，注意多项式 $z^n - 1$ 在 $\mathbb{C}$ 上完全分解为：

$$z^n - 1 = (z - z_0)(z - z_1) \cdots (z - z_{n-1})$$

展开右端并比较两边 $z^{n-1}$ 的系数，左边的系数为零，而右边的系数等于 $-(z_0 + z_1 + \cdots + z_{n-1})$。于是得到：

$$\sum_{k=0}^{n-1} z_k = 0$$

另一种推导使用[等比级数](../geometric-series/)的公式。由于 $n \geq 2$ 时 $z_1 \neq 1$，有：

$$\sum_{k=0}^{n-1} z_1^k = \frac{z_1^n - 1}{z_1 - 1} = \frac{1 - 1}{z_1 - 1} = 0$$

在几何上，这说明内接于单位圆的正 $n$ 边形顶点的重心与原点重合，这由对称性显然可见。

## 根的积

所有 $n$ 次单位根的乘积同样由 $z^n - 1$ 的因式分解决定。由于 $z^n - 1$ 的常数项为 $-1$，首项系数为 $1$，比较恒等式中的常数项：

$$z^n - 1 = (z - z_0)(z - z_1) \cdots (z - z_{n-1})$$

得到：

$$\prod_{k=0}^{n-1} z_k = (-1)^{n+1}$$

这是[韦达公式](../trinomials/)的直接应用；韦达公式把多项式的系数与其根的初等对称多项式联系起来。当 $n = 2$ 时，根为 $1$ 和 $-1$，其乘积为 $-1 = (-1)^3$。当 $n = 3$ 时，三个三次单位根的乘积为 $1 = (-1)^4$，也可以直接相乘[棣莫弗定理](../de-moivre-theorem/)给出的显式表达式加以验证。

## 分圆多项式

本原 $n$ 次单位根正是第 $n$ 个分圆多项式 $\Phi_n(x)$ 的根。该多项式定义为以本原 $n$ 次单位根为全部根的首一多项式：

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

一个重要恒等式把分圆多项式与 $z^n - 1$ 的[因式分解](../factoring-ac-method/)联系起来。由于每个 $n$ 次单位根恰好是 $n$ 的某个因数 $d$ 对应的本原 $d$ 次单位根，故有：

$$z^n - 1 = \prod_{d \mid n} \Phi_d(z)$$

这个恒等式允许递归计算分圆多项式。代数数论中的经典定理断言，对每个正整数 $n$，$\Phi_n(x)$ 在 $\mathbb{Q}$ 上不可约；这一性质在分圆多项式的专门词条中有详细讨论。
