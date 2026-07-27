---
title: 欧拉公式
title_en: Euler's Formula
source: https://algebrica.org/eulers-formula/
license: CC BY-NC 4.0
tags:
  - complex-exponential
  - complex-numbers
  - euler-formula
  - euler-identity
  - imaginary-unit
  - taylor-series
  - trigonometric-identities
translation:
  status: current
  source_hash: e53680a56ea06586cf071e7055aa5e4b8e0be1847bd15c1715de286cf4d39871
  translator: omp
  updated: "2026-07-23T10:10:53.335Z"
---
## 引言

欧拉公式将指数函数与三角函数联系起来，并沟通了关于[复数](../complex-numbers-introduction/)的代数视角与几何视角。该恒等式表明，对每个实数 $\theta$，以下等式成立：

$$e^{i\theta} = \cos\theta + i\sin\theta$$

这一关系是复数的[指数形式](../complex-numbers-exponential-form/)与[三角形式](../complex-numbers-trigonometric-form/)的共同基础，由它可以推出[棣莫弗定理](../de-moivre-theorem/)以及[单位根](../roots-of-unity/)的刻画。对于该公式的地位，有两种理解方式。

+ 第一种是通过[泰勒级数](../taylor-series/)对任意复变元定义复指数函数，然后欧拉恒等式作为定理得到证明。
+ 第二种是将公式作为 $e^{i\theta}$ 的定义，而成为定理的则是该定义与实指数函数代数性质的一致性。

> 这两种观点等价且导向同一对象。在下文中我们采用第一种理解，因为它将公式置于[指数函数](../exponential-function/)的构造中已经使用的更广泛的分析框架之内。

## 命题

对每个实数 $\theta$，以下恒等式成立：

$$e^{i\theta} = \cos\theta + i\sin\theta$$

等式左边是复指数函数在纯虚自变量 $i\theta$ 处的取值。等式右边是一个实部为 $\cos\theta$、虚部为 $\sin\theta$ 的复数。该恒等式描述了指数函数限制在虚轴上时如何参数化复平面上的[单位圆](../unit-circle/)。

![IMG. 1](/assets/complex-numbers/svg/euler-formula-1.svg)

一个直接的推论涉及 $e^{i\theta}$ 的模。直接从其代数形式计算可得：

$$|e^{i\theta}|^2 = \cos^2\theta + \sin^2\theta = 1$$

对每个实数 $\theta$，值 $e^{i\theta}$ 的模均为 1，当 $\theta$ 在 $\mathbb{R}$ 上变化时，该函数沿逆时针方向描出单位圆。该运动的周期为 $2\pi$，即[正弦与余弦](../sine-and-cosine/)的共同周期。

## 通过泰勒级数的证明

欧拉公式最直接的推导利用指数函数、正弦函数和余弦函数的[泰勒级数](../taylor-series/)展开。这些级数对所有实变元或复变元均收敛，下面的运算由绝对收敛保证其合理性，因为绝对收敛允许重排各项而不改变和的值。

对实变量 $x$，三个函数的级数如下：

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}$$

$$\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}$$

$$\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}$$

将指数函数推广到复变元的方法是用复变量替换实变量。对每个 $z \in \mathbb{C}$，定义：

$$e^z := \sum_{n=0}^{\infty} \frac{z^n}{n!}$$

该级数对每个 $z$ 绝对收敛，因为 $\sum_{n=0}^{\infty} |z|^n / n!$ 等于 $e^{|z|}$，后者是有限的。由这一定义，将 $z = i\theta$ 代入级数来计算 $e^{i\theta}$：

$$e^{i\theta} = \sum_{n=0}^{\infty} \frac{(i\theta)^n}{n!} = \sum_{n=0}^{\infty} \frac{i^n \ \theta^n}{n!}$$

级数的行为取决于虚数单位的幂。直接计算可得：

$$
\begin{align}
i^0 &= 1 \\[6pt]
i^1 &= i \\[6pt]
i^2 &= -1 \\[6pt]
i^3 &= -i
\end{align}
$$

从四次幂起循环重复，因为 $i^4 = (i^2)^2 = 1$，从而对每个 $n$ 有 $i^{n+4} = i^n$。因此 $i^n$ 的值只依赖于 $n$ [模 $4$](../modules/) 的余数。

现在根据下标的奇偶性拆分级数。对偶数项令 $n = 2k$，对奇数项令 $n = 2k+1$，则 $i$ 的相应幂分别为 $i^{2k} = (i^2)^k = (-1)^k$ 和 $i^{2k+1} = i \cdot (-1)^k$。两部分可以分别归并：

$$
\begin{align}
e^{i\theta} &= \sum_{k=0}^{\infty} \frac{i^{2k} \ \theta^{2k}}{(2k)!} + \sum_{k=0}^{\infty} \frac{i^{2k+1} \ \theta^{2k+1}}{(2k+1)!} \\[6pt]
&= \sum_{k=0}^{\infty} (-1)^k \frac{\theta^{2k}}{(2k)!} + i \sum_{k=0}^{\infty} (-1)^k \frac{\theta^{2k+1}}{(2k+1)!}
\end{align}
$$

右边的两个级数恰好是 $\cos\theta$ 和 $\sin\theta$ 的泰勒展开。将这两个表达式代入即得欧拉公式：

$$e^{i\theta} = \cos\theta + i\sin\theta$$

> 证明中使用的重排是合理的，因为 $e^{i\theta}$ 的级数绝对收敛。对于绝对收敛的复数项级数，任何重排求和项都给出相同的和。正是这一性质保证了将级数拆分为偶数项和奇数项的合理性。

## 通过微分方程的证明

第二种推导在概念上独立于级数展开，它利用了[指数函数](../exponential-function/)作为带预定初始值的一阶线性微分方程唯一解这一刻画。设 $f : \mathbb{R} \to \mathbb{C}$ 为如下定义的函数：

$$f(\theta) = \cos\theta + i\sin\theta$$

$f$ 的[导数](../derivatives/)按分量求取，即分别对实部和虚部求导。应用余弦和正弦的导数，得到：

$$
\begin{align}
f'(\theta) &= -\sin\theta + i\cos\theta \\[6pt]
&= i\bigl(\cos\theta + i\sin\theta\bigr) \\[6pt]
&= i f(\theta)
\end{align}
$$

在第二行中，我们从右端提取 $i$，所依据的是恒等式 $-\sin\theta = i \cdot (i\sin\theta)$，它由 $i^2 = -1$ 推出。因此 $f$ 满足微分方程：

$$f'(\theta) = if(\theta)$$

初始值为 $f(0) = \cos 0 + i\sin 0 = 1$。

现在考虑复指数 $g(\theta) = e^{i\theta}$，它由泰勒级数定义。对级数逐项求导——这由在有界区间上的一致收敛所保证——得到：

$$g'(\theta) = \sum_{n=1}^{\infty} \frac{i^n \ n \ \theta^{n-1}}{n!} = i \sum_{n=1}^{\infty} \frac{(i\theta)^{n-1}}{(n-1)!} = ig(\theta)$$

初始值为 $g(0) = 1$。同一一阶线性微分方程的两个解，若在某一点取相同的值，则处处一致。我们得出结论：对每个实数 $\theta$，$f(\theta) = g(\theta)$ 成立，此即欧拉公式。

> 唯一性这一步可以通过引入辅助函数 $h(\theta) = f(\theta) \ e^{-i\theta}$ 来显式说明。它的导数恒为零，因为 $h'(\theta) = f'(\theta)e^{-i\theta} - i \ f(\theta)e^{-i\theta} = 0$，故 $h$ 为常数。值 $h(0) = 1$ 进而迫使对每个 $\theta$ 都有 $f(\theta) = e^{i\theta}$。

## 欧拉恒等式

将欧拉公式在 $\theta = \pi$ 处特化，即得到所谓的欧拉恒等式。代入该自变量的值并计算三角函数，得到：

$$e^{i\pi} = \cos\pi + i\sin\pi = -1$$

重新整理该等式，可得更熟悉的形式：

$$e^{i\pi} + 1 = 0$$

该恒等式在单个方程中结合了数学的五个基本常数：

+ 加法单位元 $0$
+ 乘法单位元 $1$
+ 虚数单位 $i$
+ 自然指数函数的底数 $e$
+ 圆的[周长](../circumference/)与其直径之比 $\pi$

该恒等式表明，$i\pi$ 的指数给出 $1$ 在单位圆上的对径点，也就是将单位向量旋转[$\pi$ 弧度的角](../angles-and-angular-measure/)。

该公式也可在其他特殊值 $\theta$ 处特化，以恢复更多恒等式。令 $\theta = \pi/2$ 得到 $e^{i\pi/2} = i$，即旋转四分之一圈、把 $1$ 送到虚数单位。令 $\theta = 2\pi$ 得到 $e^{2\pi i} = 1$，这一周期性关系是[单位根](../roots-of-unity/)理论的基础。

## 由指数函数导出三角函数

欧拉公式也可以立即反解：余弦和正弦可以写成 $e^{i\theta}$ 与 $e^{-i\theta}$ 的[线性组合](../linear-combinations/)。在该公式中将 $\theta$ 替换为 $-\theta$，并利用余弦是偶函数、正弦是奇函数这一事实，便可得到如下关系：

$$e^{-i\theta} = \cos\theta - i\sin\theta$$

将两个表达式 $e^{i\theta}$ 与 $e^{-i\theta}$ 相加即可消去虚部，相减则消去实部。由此得到以下用复指数表示三角函数的恒等式：

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}$$

$$\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

这些公式是将三角函数推广到复变元的出发点。用同样的表达式对 $z \in \mathbb{C}$ 定义 $\cos z$ 和 $\sin z$，所得函数在 $\mathbb{R}$ 上与实余弦、实正弦一致，并继承指数函数的代数恒等式。这一视角统一了三角函数与双曲函数，因为作代换 $\theta = iy$ 即得 $\cos(iy) = \cosh y$ 与 $\sin(iy) = i\sinh y$，这种关系在[实数情形](../real-numbers/)中没有对应物。

欧拉公式的一个推论是正弦和余弦的[加法公式](../reduction-formulas-and-reference-angles/)的推导。由指数函数的乘法规律可得：

$$e^{i(\alpha + \beta)} = e^{i\alpha} \cdot e^{i\beta}$$

利用欧拉公式展开两边得：

$$\cos(\alpha + \beta) + i\sin(\alpha + \beta) = (\cos\alpha + i\sin\alpha)(\cos\beta + i\sin\beta)$$

计算右端的乘积，并令方程两端的实部与虚部分别相等，便得到加法公式：

$$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$$

$$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$$

在这一视角下，三角恒等式便成为指数函数的[同态](../fields/)性质——即规则 $e^{a+b} = e^a e^b$——的推论。

## 与三角形式及指数形式的联系

欧拉公式是复数的[三角形式](../complex-numbers-trigonometric-form/)与[指数形式](../complex-numbers-exponential-form/)等价性的基础。一个非零复数 $z = a + bi$，其三角形式写作 $z = r(\cos\theta + i\sin\theta)$，其中 $r = |z|$ 且 $\theta = \arg(z)$，可直接用欧拉公式改写。所得等式为：

$$
\begin{align}
z &= r(\cos\theta + i\sin\theta) \\[6pt]
&= r \ e^{i\theta}
\end{align}
$$

这一变换把两个带有三角系数的实数项之和替换为单一的复指数。其优势在涉及乘法、除法及整数幂的运算中立竿见影，因为指数运算的规则将这些运算化为对模和辐角的简单操作。

该恒等式也阐明了在指数表示下取共轭的效果。由于余弦是偶函数、正弦是奇函数，$e^{i\theta}$ 的共轭为 $e^{-i\theta}$。因此，$z = re^{i\theta}$ 的共轭由如下表达式给出：

$$\overline{z} = re^{-i\theta}$$

在指数形式下，共轭只是改变辐角的符号，而模保持不变。这与 $\overline{z}$ 作为 $z$ 在复平面上关于实轴的反射的几何描述相吻合。

## 周期性与复指数

正弦和余弦都以 $2\pi$ 为公共周期，这一周期性通过欧拉公式传递为 $e^{i\theta}$ 沿虚轴的周期性。对每个 $\theta \in \mathbb{R}$ 和每个整数 $k$，有如下恒等式：

$$e^{i(\theta + 2k\pi)} = \cos(\theta + 2k\pi) + i\sin(\theta + 2k\pi) = e^{i\theta}$$

因此，复指数当限制于纯虚变元时，以 $2\pi i$ 为虚周期而成为周期函数。这一周期性是复数[辐角](../complex-numbers-introduction/)不唯一性的分析根源，也正是它使得在定义复对数时必须引入支割。

当自变量取一般复数时，该关系同样成立。对于 $z = x + iy$，其中 $x, y \in \mathbb{R}$，指数函数的乘法性质与欧拉公式相结合给出：

$$
\begin{align}
e^z &= e^{x + iy} \\[6pt]
    &= e^x \cdot e^{iy} \\[6pt]
    &= e^x\bigl(\cos y + i\sin y\bigr)
\end{align}
$$

因此，复指数完全由两方面信息决定：实指数 $e^x$ 控制结果的模，虚部 $y$ 控制辐角。$e^z$ 的模和辐角分别由如下表达式给出：

$$|e^z| = e^x \qquad \arg(e^z) = y + 2k\pi \quad k \in \mathbb{Z}$$

这一分解是复指数作为 $\mathbb{C}$ 上的整函数的解析理论基础。
