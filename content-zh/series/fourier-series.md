---
title: 傅里叶级数
title_en: Fourier Series
source: https://algebrica.org/fourier-series/
license: CC BY-NC 4.0
tags:
  - fourier-coefficients
  - fourier-series
  - orthogonality
  - periodic-functions
  - trigonometric-series
translation:
  status: current
  source_hash: c05cdaf3ae11ac94324dd370dbbb80fd74c6776e793ad653d4829f154a1ad014
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

傅里叶级数把一个周期函数表示成由[正弦](../sine-function/)和[余弦函数](../cosine-function/)组成的无穷[级数](../series/)。更准确地说，它说明周期性行为可以分解为基本的谐波振荡。这个结果体现了周期[函数](../functions/)的一种结构性质：振荡分量构成了描述重复现象的一组坐标系。

设 $f : \mathbb{R} \to \mathbb{R}$ 是一个以 $2\pi$ 为周期的函数，也就是：

$$
f(x + 2\pi) = f(x) \ \forall x \in \mathbb{R}
$$

假设 $f$ 在[区间](../intervals/) $[-\pi,\pi]$ 上[可积](../definite-integrals/)。$f$ 的傅里叶级数是下面的形式三角展开：

$$
f(x) \sim \frac{a_0}{2}
+
\sum_{n=1}^{\infty}
a_n \cos(nx) + b_n \sin(nx)
$$

+ 符号 $\sim$ 强调我们此时尚未断言等式成立，而是在定义一个与 $f$ 相关的三角级数；
+ 级数是否收敛到 $f$，将在后文讨论；
+ 每一项 $\cos(nx)$ 和 $\sin(nx)$ 表示频率为 $n$ 的振荡；
+ 因此，这个展开把 $f$ 分解成它的各个谐波分量。

## 傅里叶系数

系数 $a_n$ 和 $b_n$ 由下面的积分定义：

$$
\begin{align}
a_0 &= \frac{1}{\pi}
\int_{-\pi}^{\pi} f(x)\ dx \\[6pt]
a_n &= \frac{1}{\pi}
\int_{-\pi}^{\pi} f(x)\cos(nx)\ dx \\[6pt]
b_n &= \frac{1}{\pi}
\int_{-\pi}^{\pi} f(x)\sin(nx)\ dx
\quad n \ge 1
\end{align}
$$

这些公式来自[正弦和余弦](../sine-and-cosine/)的一项结构性质，即它们在完整周期上的正交性。在区间 $[-\pi,\pi]$ 上，不同频率的三角波在积分意义下保持独立：

$$
\begin{align}
\int_{-\pi}^{\pi} \cos(nx)\cos(mx)\ dx &=
\begin{cases}
\pi & n=m\neq 0 \\[6pt]
0 & n\ne m
\end{cases} \\[6pt]
\int_{-\pi}^{\pi} \sin(nx)\sin(mx)\ dx &=
\begin{cases}
\pi & n=m\neq 0 \\[6pt]
0 & n\ne m
\end{cases} \\[6pt]
\int_{-\pi}^{\pi} \sin(nx)\cos(mx)\ dx &= 0
\end{align}
$$

这些关系使我们可以从函数本身恢复每一个系数。暂时假设级数收敛到 $f$，并且可以逐项积分。用 $\cos(mx)$ 乘展开式，再在 $[-\pi,\pi]$ 上积分时，所有 $n\neq m$ 的乘积都消失，每个混合项 $\sin(nx)\cos(mx)$ 也都消失。只有 $n=m$ 的项保留下来：

$$
\int_{-\pi}^{\pi} f(x)\cos(mx)\ dx
=
a_m \int_{-\pi}^{\pi} \cos^2(mx)\ dx
=
\pi a_m
$$

解出 $a_m$，再把下标改名，就得到 $a_n$ 的公式。用 $\sin(mx)$ 重复同样的论证会得到 $b_n$，对不带三角因子的展开式积分则得到 $a_0$。正交关系还会在下面的[内积](../inner-product-spaces/)下把三角系统变成一个正交族：

$$
\langle f, g \rangle =
\int_{-\pi}^{\pi} f(x)g(x)\ dx
$$

每个系数衡量函数中包含多少特定的谐波方向。从这个意义上说，傅里叶展开是无限维空间中的投影过程。

## 例子：锯齿波

这个例子展示了，即使是简单的线性函数，在周期延拓后也会获得丰富的谐波结构。考虑函数 $f(x) = x$，它定义在 $(-\pi,\pi)$ 上，并以 $2\pi$ 为周期延拓。这个函数是奇函数，因此：

$$
a_0 = 0
\quad
a_n = 0
$$

我们计算[正弦](../sine-and-cosine/)系数：

$$
b_n =
\frac{1}{\pi}
\int_{-\pi}^{\pi}
x\sin(nx)\ dx
$$

使用[分部积分](../integration-by-parts/)，得到：

$$
b_n = \frac{2(-1)^{n+1}}{n}
$$

所以傅里叶级数为：

$$
x \sim
2
\sum_{n=1}^{\infty}
\frac{(-1)^{n+1}}{n}
\sin(nx)
$$

点 $x = \frac{\pi}{2}$ 位于一个周期内部，远离延拓函数在 $\pi$ 的奇数倍处的跳跃，因此级数在此收敛到 $\frac{\pi}{2}$。由于偶数 $n$ 时 $\sin(nx)$ 为零，奇数 $n$ 时它在 $1$ 和 $-1$ 之间交替，展开式化为：

$$
\frac{\pi}{2}
=
2\left(
1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots
\right)
$$

两边除以 $2$，就得到莱布尼茨的 $\pi$ 级数：

$$
\frac{\pi}{4}
=
\sum_{k=0}^{\infty}
\frac{(-1)^k}{2k+1}
$$

> 系数以 $\frac{1}{n}$ 的速度衰减。衰减缓慢反映了这样一个事实：$f$ 在周期内部连续，但它的周期延拓在 $\pi$ 的整数倍处有跳跃间断，这会影响收敛行为。

## 例子：三角波

现在考虑区间 $[-\pi,\pi]$ 上的偶函数 $f(x) = |x|$，并以 $2\pi$ 为周期延拓。由于 $f$ 是偶函数，所有正弦系数都为零，展开式只含余弦项。常数项是 $f$ 在一个周期上的平均值：

$$
a_0 =
\frac{1}{\pi}
\int_{-\pi}^{\pi} |x|\ dx
=
\frac{2}{\pi}
\int_{0}^{\pi} x\ dx
=
\pi
$$

对于其余系数，利用被积函数的偶性和[分部积分](../integration-by-parts/)：

$$
a_n =
\frac{2}{\pi}
\int_{0}^{\pi} x\cos(nx)\ dx
=
\frac{2}{\pi}\cdot
\frac{(-1)^n - 1}{n^2}
$$

当 $n$ 为偶数时，这个表达式为零；当 $n$ 为奇数时，它等于 $-\frac{4}{\pi n^2}$。用下标 $2k+1$ 表示保留下来的项，傅里叶级数为：

$$
|x| \sim
\frac{\pi}{2}
-
\frac{4}{\pi}
\sum_{k=0}^{\infty}
\frac{\cos\big((2k+1)x\big)}{(2k+1)^2}
$$

这个函数处处连续，包括 $\pi$ 的整数倍处的尖角，因此级数在每一点都收敛到 $f$。在 $x = 0$ 处计算，此时 $|x| = 0$，得到一个数值级数：

$$
\sum_{k=0}^{\infty}
\frac{1}{(2k+1)^2}
=
\frac{\pi^2}{8}
$$

把所有正整数下标拆成奇数和偶数，就能把这个值与巴塞尔级数联系起来：

$$
\sum_{n=1}^{\infty}
\frac{1}{n^2}
=
\frac{\pi^2}{6}
$$

> 这里的系数以 $\frac{1}{n^2}$ 的速度衰减，比锯齿波的 $\frac{1}{n}$ 更快。$|x|$ 的尖角比跳跃间断更温和，周期行为越光滑，谐波振幅就衰减得越快。

## 任意周期的函数

通过改变尺度，这个构造可以推广到任意周期。设 $f$ 的周期为 $2L$，并且在 $[-L,L]$ 上可积。[代换](../integration-by-substitution/) $x = \frac{Lt}{\pi}$ 把 $[-L,L]$ 映射到 $[-\pi,\pi]$，并把 $f$ 变成关于 $t$ 的周期为 $2\pi$ 的函数，前面的公式便可以应用于它。把结果换回 $x$，得到傅里叶级数：

$$
f(x) \sim
\frac{a_0}{2}
+
\sum_{n=1}^{\infty}
a_n \cos\frac{n\pi x}{L}
+
b_n \sin\frac{n\pi x}{L}
$$

系数具有相同的结构，只是周期通过频率 $\frac{n\pi}{L}$ 进入公式：

$$
\begin{align}
a_0 &= \frac{1}{L}
\int_{-L}^{L} f(x)\ dx \\[6pt]
a_n &= \frac{1}{L}
\int_{-L}^{L} f(x)\cos\frac{n\pi x}{L}\ dx \\[6pt]
b_n &= \frac{1}{L}
\int_{-L}^{L} f(x)\sin\frac{n\pi x}{L}\ dx
\quad n \ge 1
\end{align}
$$

当 $L = \pi$ 时，这些公式就退化为 $[-\pi,\pi]$ 上的公式。离散频率 $\frac{n\pi}{L}$ 取代了整数 $n$，因此周期越长，谐波在频率轴上排列得越密集。

## 傅里叶级数的收敛性

傅里叶级数的定义本身并不能保证它收敛到原函数。一个充分条件是：$f$ 为周期函数，并且 $f$ 与其导数 $f'$ 在一个周期上分段连续。具体来说，在 $[-\pi,\pi]$ 上，函数应满足：

+ $f$ 有界，并且只有有限个极大值和极小值；
+ $f$ 只有有限个间断点，且这些间断点都属于跳跃间断。

在这些假设下，级数在每个点 $x$ 都收敛。和任何[函数项级数](../function-series/)一样，它的行为可以通过部分和读出。考虑 $N$ 阶部分和：

$$
S_N(x) =
\frac{a_0}{2}
+
\sum_{n=1}^{N}
a_n\cos(nx)+b_n\sin(nx)
$$

部分和的极限等于 $f$ 在该点的左右单侧极限的平均值：

$$
\lim_{N\to\infty}
S_N(x)
=
\frac{f(x^+)+f(x^-)}{2}
$$

在 $f$ 连续的地方，两个单侧极限相同，级数就还原为 $f(x)$。在跳跃点，它会稳定在左右[极限](../limits/)的中点，因此傅里叶逼近再现的是局部行为的平均值，而不是某一侧的函数值。

在跳跃附近，部分和会呈现一个典型特征。随着 $N$ 增大，它会越过跳跃，超出量约为跳跃高度的百分之九，而且这个超调不会缩小；只有发生超调的区域宽度会向间断点收缩。这种持续存在的超调称为吉布斯现象。

系数的衰减速度反映了 $f$ 的正则性：

+ 如果 $f$ 连续可导，系数衰减得更快；
+ 如果 $f$ 有间断，衰减得更慢；
+ 函数越光滑，谐波振幅下降得越快。

## 谐波与应用

固定频率的两项可以合并成一个振荡，即 $f$ 的第 $n$ 个谐波：

$$
a_n \cos\frac{n\pi x}{L}
+
b_n \sin\frac{n\pi x}{L}
$$

它的振幅记录了该频率在函数中的强弱：

$$
A_n = \sqrt{a_n^2 + b_n^2}
$$

振幅平方序列 $A_n^2$ 描述了函数如何在各个频率之间分配权重，这种描述被物理学家称为能谱。由同一组频率构成的两个周期信号，恰恰通过这些振幅的相对大小区分开来。

傅里叶在研究热传导时引入了这些级数，而丹尼尔·伯努利和欧拉更早就在振动弦的分析中遇到过它们。其动机在于，许多现象天然具有周期性，包括潮汐、声音和机械振荡，因此用周期构件表示它们很自然。同一个音符由两种乐器演奏时会产生不同的谐波振幅，而这种差异正是耳朵感知到的音色。相同的展开还可以求解波动方程和热方程；把解写成谐波之和，就能分离空间行为与时间行为。
