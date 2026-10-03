---
title: 定积分
title_en: Definite Integrals
source: https://algebrica.org/definite-integrals/
license: CC BY-NC 4.0
tags:
  - antiderivative
  - definite-integral
  - exponential-function
  - fundamental-theorem-of-calculus
  - geometric-sequence
  - improper-integrals
  - integration
  - linearity
  - mean-value-theorem
  - oriented-area
  - riemann-integral
  - riemann-sum
translation:
  status: current
  source_hash: e92793bee1c0ada88a7c560f03c15fd05c0555dbe09e4ce9ada072474f5764c1
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 不要操之过急

阿德里安-马里·勒让德是十八世纪最著名、最有影响的数学家之一。他 1752 年生于巴黎，三十岁左右开始对椭圆积分理论产生兴趣；椭圆积分是用来计算[椭圆](../ellipse/)弧长的数学对象。

这个问题并不平凡，在当时更是如此，因为那时还没有成熟的理论可以解决它。对于长半轴为 $a$、离心率为 $e\in[0,1)$ 的椭圆，周长由下面的第二类完全椭圆积分给出：

$$
L=4aE(e)=4a\int_{0}^{\pi/2}\sqrt{1-e^2\sin^2\theta} \ d\theta
$$

我们的讲解不会涉及如此复杂的对象，而是集中于中学和大学低年级微积分课程中通常讲授的那几类定积分。不过要知道，这类怪物是存在的，而且它们需要的求解方法绝不平凡。

在这个公式中，$\pi/2$ 和 $0$ 是积分限；至少就记号而言，定积分与[不定积分](../indefinite-integrals/)的区别就在于此。

回到我们的故事。据资料记载，勒让德关于椭圆积分理论的最早著作发表于 1786 年。他在 1811 年至 1819 年间的研究又促成了几卷著作的出版，专门阐述这一理论的发展及其应用。他对自己的工作并不满意，几年之后干脆把全部内容从头重写，并且一直修订到生命的最后几年。

八月初的一个早晨，勒让德收到了当时二十二岁的卡尔·古斯塔夫·雅可比的来信，信中为这一课题提供了新的视角，并提出了一种新理论，使勒让德研究了将近四十年的理论变得过时。年轻的挪威人尼尔斯·亨里克·阿贝尔也得到了同样的结果。

据资料记载，勒让德公开支持这两位年轻人的工作，尽管他们的工作使他四十年的研究几乎完全过时。阿贝尔 26 岁去世，雅可比 46 岁去世，而勒让德活到了八十岁。

言归正传，我们用不着四十年来学会计算定积分，所需的时间要少得多。如果你已经理解了什么是不定积分，并记住了它的主要性质和基本的原函数，那你已经走在正路上了。否则，我建议你就此停下，先退回去补上这一步。

简而言之，定积分表示由函数 $y=f(x)$ 给出的量在区间 $[a, b]$ 上的累积。用不那么精确但仍然成立的话说，它度量的是给定曲线与 $x$ 轴之间的有向面积，其中位于 $x$ 轴上方的部分相加，位于下方的部分相减。

本条目讨论定积分的主要定义和性质；各种方法和[积分策略](../integration-strategies/)构成积分学中解题的核心，另有专门的章节讲述。

## 函数下的面积：从曲线到积分

考虑定义在[闭区间](../intervals/) $[a, b]$ 上的[函数](../functions/) $f(x)$，其中 $a < b$。如果 $f(x)$ 在 $[a, b]$ 上[连续](../continuous-functions/)且非负，那么它的图像、$x$ 轴以及直线 $x = a$ 和 $x = b$ 围成一个曲边梯形。该区域的面积由定积分给出：

$$\int_{a}^{b} f(x) \ dx$$

![图 1](/assets/integrals/svg/definite-integrals-1.zh.svg)

初等几何的标准公式不能直接应用于一般的曲边梯形，因为它的一条边界是曲线而不是直线段。可以把区间 $[a, b]$ 划分为 $n$ 个等宽子区间，用矩形近似曲边梯形的面积：

$$\Delta x = \frac{b - a}{n}$$

在每个子区间上用一个矩形近似该区域，将这些矩形的面积相加，就得到总面积的一个估计。

![图 2](/assets/integrals/svg/definite-integrals-2.zh.svg)

将分割点写为 $x_i = a + i\Delta x$，（其中 $i=0,\ldots,n$）。于是 $x_0=a$ 且 $x_n=b$，第 $i$ 个子区间为 $[x_{i-1},x_i]$。记 $m_i$ 和 $M_i$ 为 $f(x)$ 在该子区间上的下确界和上确界，则下和与上和定义为：

$$s_n^{-} = \sum_{i=1}^{n} m_i \Delta x \qquad s_n^{+} = \sum_{i=1}^{n} M_i \Delta x$$

下和 $s_n^{-}$ 从下方近似面积，而上和 $s_n^{+}$ 从上方近似面积。

![图 3](/assets/integrals/svg/definite-integrals-3.zh.svg)

下表展示了每个子区间上、下矩形的相同模式：

| 矩形 |   子区间   | 下高度 | 上高度 |  下方面积   |  上方面积   |
| :-------: | :-------------: | :----------: | :----------: | :-----------: | :-----------: |
|    $1$    |   $[x_0,x_1]$   |    $m_1$     |    $M_1$     | $m_1\Delta x$ | $M_1\Delta x$ |
|    $2$    |   $[x_1,x_2]$   |    $m_2$     |    $M_2$     | $m_2\Delta x$ | $M_2\Delta x$ |
|    $3$    |   $[x_2,x_3]$   |    $m_3$     |    $M_3$     | $m_3\Delta x$ | $M_3\Delta x$ |
| $\vdots$  |    $\vdots$     |   $\vdots$   |   $\vdots$   |   $\vdots$    |   $\vdots$    |
|    $n$    | $[x_{n-1},x_n]$ |    $m_n$     |    $M_n$     | $m_n\Delta x$ | $M_n\Delta x$ |

等宽划分是一般划分的特殊情形；一般划分的子区间不必等宽。对于任意划分 $P$，记作 $a = x_0 < x_1 < \cdots < x_n = b$，其下和与上和为：

$$
\begin{align}
L(f, P) &= \sum_{i=1}^{n} m_i(x_i - x_{i-1}) \\[6pt]
U(f, P) &= \sum_{i=1}^{n} M_i(x_i - x_{i-1})
\end{align}
$$

如果划分 $P'$ 通过添加分割点细化了 $P$，那么下和不会减小，上和不会增大。因此：

$$L(f, P) \leq L(f, P') \leq U(f, P') \leq U(f, P)$$

对于定义在 $[a, b]$ 上的有界函数 $f(x)$，下积分和上积分收集所有可能划分所得到的最佳估计：

$$
\begin{align}
L(f, [a, b]) &= \sup_P L(f, P) \\[6pt]
U(f, [a, b]) &= \inf_P U(f, P)
\end{align}
$$

每个下和都不大于每个上和，因此 $L(f, [a, b]) \leq U(f, [a, b])$。函数 $f(x)$ [黎曼可积](../riemann-integrability-criteria/)当且仅当这两个值相等。它们的公共值就是定积分：

$$L(f, [a, b]) = U(f, [a, b]) = \int_{a}^{b} f(x) \ dx$$

定积分还有一个等价定义，它使用带标记的黎曼和。对于划分 $P$，记作 $a = x_0 < x_1 < \cdots < x_n = b$，在每个子区间中选取一点 $\xi_i \in [x_{i-1},x_i]$，并令 $\Delta x_i = x_i - x_{i-1}$。点 $\xi_i$ 称为第 $i$ 个子区间的标记，$P$ 的网格定义为：

$$
\|P\| = \max_{1 \leq i \leq n} \Delta x_i
$$

如果对每个 $\varepsilon>0$，都存在 $\delta>0$，使每个划分 $P$ 和每种标记选择均满足下式，则有界函数 $f$ 黎曼可积，且积分为 $I$：

$$
\|P\|<\delta
\implies
\left|\sum_{i=1}^{n}f(\xi_i)\Delta x_i-I\right|<\varepsilon
$$

该条件要求网格充分小时，所有带标记的黎曼和都趋近同一个值。它通常简写为：

$$
\int_a^b f(x) \ dx
=
\lim_{\|P\| \to 0}
\sum_{i=1}^{n} f(\xi_i)\Delta x_i
$$

因此，上式的极限遍历所有带标记的划分，而非某个预先指定的序列。本文将继续使用通过 $L(f,P)$ 和 $U(f,P)$ 表述的达布定义。每个带标记的黎曼和都位于对应的下和与上和之间。结合对充分细划分的估计，这个界证明了定义在 $[a,b]$ 上的有界函数在一个定义下可积，当且仅当它在另一个定义下可积，并且两个定义给出相同的值。

> John K. Hunter 在列于[参考书目](../bibliography/)的 Introduction to Analysis 中使用带标记划分给出这一表述，并证明它与达布定义等价。

- - -

在 $[a, b]$ 上的每个连续实值函数都是黎曼可积的。在该区间上的连续性蕴含一致连续性；当子区间足够短时，这会使振幅 $M_i - m_i$ 一致地变小。$a$ 和 $b$ 是积分的下限与上限，而 $f(x)$ 是被积函数。记号 $f(x) \ dx$ 来自每个近似矩形的面积 $f(x)\Delta x$。符号 $dx$ 标识 $x$ 是积分变量，并记录子区间宽度在取极限过程中的作用。

## 计算定积分

如果 $f(x)$ 在 $[a, b]$ 上连续，而 $F(x)$ 是 $f(x)$ 的任意一个[反导数](../indefinite-integrals/)，那么定积分等于反导数在两个端点处的值之差：

$$\int_{a}^{b} f(x) \ dx = F(b) - F(a)$$

这个表达式中的两个量具有如下含义：

+ $F(x)$ 在 $[a, b]$ 上连续、在 $(a, b)$ 上可导，并且对每个 $x \in (a, b)$ 都满足 $F'(x) = f(x)$。
+ $F(b)$ 和 $F(a)$ 分别是反导数在积分上限和下限处的值。

这个公式是[微积分基本定理](../fundamental-theorem-of-calculus/)第二部分的结论。定理的第一部分说明，从固定点积分到可变端点所得的函数是可导的，其导数等于被积函数。定义累积函数：

$$F(x) = \int_{a}^{x} f(t) \ dt$$

对每个 $x \in (a, b)$，该函数都满足 $F'(x) = f(x)$，这使求导和积分在精确意义下互为逆运算。两个结果都在[微积分基本定理](../fundamental-theorem-of-calculus/)专页中有详细讨论。

## 性质

当积分的两个端点重合时，积分为零：

$$\int_{a}^{a} f(x) \ dx = 0$$

这个恒等式直接来自定义：宽度为零的区间不贡献面积。交换积分上下限会改变积分的符号：

$$\int_{a}^{b} f(x) \ dx = -\int_{b}^{a} f(x) \ dx$$

这反映了定积分的有向性质：沿相反方向遍历区间会反转累积面积的符号。如果 $f(x) = k$ 在 $[a, b]$ 上为常数，则其积分等于常数值乘以区间长度：

$$\int_{a}^{b} k \ dx = k(b - a)$$

常数因子可以移到积分号外：

$$\int_{a}^{b} kf(x) \ dx = k \int_{a}^{b} f(x) \ dx$$

积分对函数之和具有可加性：

$$\int_{a}^{b} (f(x) + g(x)) \ dx = \int_{a}^{b} f(x) \ dx + \int_{a}^{b} g(x) \ dx$$

前面两个性质共同说明，定积分是一个线性算子。积分对相邻区间也具有可加性：对于定义域中 $f$ 的任意三个点 $a$、$b$、$c$，都有恒等式：

$$\int_{a}^{c} f(x) \ dx = \int_{a}^{b} f(x) \ dx + \int_{b}^{c} f(x) \ dx$$

这一可加性允许在连接点处分割区间，从而[积分分段函数](../piecewise-functions/)。

如果对每个 $x \in [a, b]$ 都有 $f(x) \leq g(x)$，则同样的不等式会传递到积分：

$$\int_{a}^{b} f(x) \ dx \leq \int_{a}^{b} g(x) \ dx$$

> 这就是积分的比较性质。竖直差值 $g(x) - f(x)$ 在整个区间上非负，因此它的积分也非负。

- - -

对于在 $[a, b]$ 上有界且黎曼可积的函数 $f(x)$，将比较性质应用于恒等于其下确界和上确界的常函数，可得界：

$$
(b - a)\inf_{x \in [a, b]} f(x)
\leq \int_{a}^{b} f(x) \ dx
\leq (b - a)\sup_{x \in [a, b]} f(x)
$$

如果 $f(x)$ 黎曼可积，那么 $|f(x)|$ 也黎曼可积。不等式 $-|f(x)| \leq f(x) \leq |f(x)|$ 和比较性质蕴含：

$$\left|\int_{a}^{b} f(x) \ dx\right| \leq \int_{a}^{b} |f(x)| \ dx$$

## 积分中值定理

[积分中值定理](../mean-value-theorem-for-integrals/)指出，如果 $f(x)$ 在 $[a, b]$ 上连续，那么至少存在一个点 $c \in (a, b)$，使得：

$$\int_{a}^{b} f(x) \ dx = f(c)(b - a)$$

值 $f(c)$ 是函数在该区间上的平均值。从几何上看，该定理断言存在一个底为 $b - a$、高为 $f(c)$ 的矩形，其有向面积等于定积分。定理保证了这样一个点的存在，但没有提供定位它的方法。解出 $f(c)$，即可将 $f$ 在 $[a, b]$ 上的平均值写成：

$$f(c) = \frac{1}{b - a} \int_{a}^{b} f(x) \ dx$$

> 积分中值定理是[拉格朗日中值定理](../lagrange-theorem/)在积分方面的对应物。微分形式保证存在一个点，使瞬时变化率等于平均变化率；积分形式保证存在一个点，使函数值等于区间上的平均值。

## 例 1

计算下列定积分：

$$\int_{0}^{3} (3x - x^2) \ dx$$

应用线性性质，并将常数因子移到第一个积分号外，得到：

$$3\int_{0}^{3} x \ dx - \int_{0}^{3} x^2 \ dx$$

每一项的反导数都来自[不定积分](../indefinite-integrals/)页面中讨论的幂法则：

$$F(x) = \frac{3x^2}{2} - \frac{x^3}{3}$$

计算 $F(3) - F(0)$：

$$
\begin{align}
F(3) - F(0) &= \left(\frac{3 \cdot 9}{2} - \frac{27}{3}\right) - \left(\frac{3 \cdot 0}{2} - \frac{0}{3}\right) \\[6pt]
            &= \frac{27}{2} - 9 \\[6pt]
            &= \frac{27 - 18}{2} \\[6pt]
            &= \frac{9}{2}
\end{align}
$$

因此，图像 $f(x) = 3x - x^2$ 与 $x$ 轴在 $[0, 3]$ 上围成的区域面积为：

$$\int_{0}^{3} (3x - x^2) \ dx = \frac{9}{2}$$

> 当反导数不能立即看出时，可以使用[换元积分](../integration-by-substitution/)和[分部积分](../integration-by-parts/)等技巧求出它。如果不存在初等反导数，定积分可能需要数值方法或特殊函数。

## 例 2

计算下列定积分：

$$\int_{0}^{\pi} (x + \sin x) \ dx$$

> 被积函数由多项式项和三角函数组成。相关反导数汇总在[三角函数积分](../integral-of-trigonometric-functions/)页面中。

应用线性性质，积分拆分为：

$$\int_{0}^{\pi} x \ dx + \int_{0}^{\pi} \sin x \ dx$$

每一项的反导数给出：

$$F(x) = \frac{x^2}{2} - \cos x$$

计算 $F(\pi) - F(0)$：

$$
\begin{align}
F(\pi) - F(0) &= \left(\frac{\pi^2}{2} - \cos\pi\right) - \left(\frac{0}{2} - \cos 0\right) \\[6pt]
              &= \left(\frac{\pi^2}{2} + 1\right) - (0 - 1) \\[6pt]
              &= \frac{\pi^2}{2} + 2
\end{align}
$$

因此，图像 $f(x) = x + \sin x$ 与 $x$ 轴在 $[0, \pi]$ 上围成的区域面积为：

$$\int_{0}^{\pi} (x + \sin x) \ dx = \frac{\pi^2}{2} + 2$$

## 例 3

直接使用右端点黎曼和，计算指数曲线 $f(x)=e^{2x}$ 在 $[0,2]$ 下方的面积。将 $[0,2]$ 划分为 $n$ 个等宽子区间。第 $k$ 个子区间的宽度和右端点为：

$$\Delta x = \frac{2}{n} \qquad x_k = \frac{2k}{n}$$

函数 $f(x)=e^{2x}$ 单调递增，因此右端点矩形给出上和。第 $k$ 个矩形的高度为：

$$f(x_k) = e^{2x_k} = e^{4k/n}$$

因此矩形面积之和为：

$$R_n = \sum_{k=1}^{n} f(x_k)\Delta x = \frac{2}{n}\sum_{k=1}^{n} e^{4k/n}$$

令 $q_n=e^{4/n}$。项 $e^{4k/n}=q_n^k$ 构成有限[等比数列](../geometric-sequence/)，且 $q_n^n=e^4$。有限和公式给出：

$$
\begin{align}
R_n &= \frac{2}{n}\sum_{k=1}^{n}q_n^k \\[6pt]
    &= \frac{2}{n}\frac{q_n(q_n^n-1)}{q_n-1} \\[6pt]
    &= \frac{2q_n(e^4-1)}{n(q_n-1)}
\end{align}
$$

当 $n$ 趋于无穷时，$q_n$ 趋于 $1$。应用指数函数的[重要极限](../remarkable-limits/)：

$$
\lim_{n \to \infty}n(q_n-1)
= \lim_{n \to \infty}4\left(\frac{e^{4/n}-1}{4/n}\right)
= 4
$$

对上和取极限，得到定积分：

$$
\int_{0}^{2}e^{2x} \ dx
= \lim_{n \to \infty}R_n
= \frac{e^4-1}{2}
$$

由于 $e^{2x}$ 在 $[0,2]$ 上为正，该积分就是曲线下的几何面积，约为 $26.799$。

## 处理正负面积共存的定积分

当 $f(x) \geq 0$ 在整个 $[a, b]$ 上成立时，可以把定积分解释为面积。当 $f(x)$ 在区间内变号时，积分会为位于 $x$ 轴下方的区域赋予负值，结果是有向面积，而不是纯粹的几何面积。

![图 4](/assets/integrals/svg/definite-integrals-4.zh.svg)

为了得到几何面积，将区间 $[a, b]$ 划分为若干个子区间，使 $f(x)$ 在每个子区间上保持恒定符号。如果 $f(x) \geq 0$ 在 $[a, c]$ 上成立，而 $f(x) \leq 0$ 在 $[c, b]$ 上成立，则由可加性得到有向积分：

$$\int_{a}^{b} f(x) \ dx = \int_{a}^{c} f(x) \ dx + \int_{c}^{b} f(x) \ dx$$

将负贡献的符号改变，即可得到几何面积：

$$S = \int_{a}^{c} f(x) \ dx - \int_{c}^{b} f(x) \ dx = \int_{a}^{b} |f(x)| \ dx$$

对于[偶函数](../even-and-odd-functions/)，关于 $y$ 轴的对称性意味着 $[-a, 0]$ 和 $[0, a]$ 的贡献相等。因此：

$$\int_{-a}^{a} f(x) \ dx = 2\int_{0}^{a} f(x) \ dx$$

![图 5](/assets/integrals/svg/definite-integrals-5.zh.svg)

对于[奇函数](../even-and-odd-functions/)，关于原点的对称性意味着 $[-a, 0]$ 和 $[0, a]$ 的贡献大小相等、符号相反。因此：

$$\int_{-a}^{a} f(x) \ dx = 0$$

![图 6](/assets/integrals/svg/definite-integrals-6.zh.svg)

在这两种情况下，图像 $f(x)$ 与 $x$ 轴在 $[-a, a]$ 上围成的几何面积，都可以通过对函数的[绝对值](../absolute-value/)积分得到。由于当 $f(x)$ 为偶函数或奇函数时，$|f(x)|$ 都是偶函数，面积为：

$$S = 2\int_{0}^{a} |f(x)| \ dx$$

如果 $f(x)$ 在 $[0, a]$ 上为偶函数且非负，则该公式化为：

$$S = 2\int_{0}^{a} f(x) \ dx$$

更多几何面积计算的例子见[用积分求面积](../finding-areas-by-integration/)页面。

## 反常积分

上面讨论的黎曼积分要求区间有界、被积函数有界。如果区间无界，或者被积函数在某个端点或内点附近变得无界，可以用一个参数替代有问题的积分限并取极限，从而定义[反常积分](../improper-integrals/)。例如，如果 $f(x)$ 在每个满足 $t>a$ 的区间 $[a,t]$ 上黎曼可积，那么：

$$\int_a^{+\infty}f(x) \ dx:=\lim_{t\to+\infty}\int_a^t f(x) \ dx$$

只有当定义它的极限存在且有限时，积分才收敛。专页给出了其他类型反常积分的定义、收敛判别法和例题。
