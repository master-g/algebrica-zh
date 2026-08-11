---
title: 对数
title_en: Logarithms
source: https://algebrica.org/logarithms/
license: CC BY-NC 4.0
tags:
  - change-of-base
  - exponential-inverse
  - logarithmic-function
  - logarithmic-properties
  - logarithms
translation:
  status: current
  source_hash: 2cbf768e14090d89f33f676f56e603e0e937406f2a77965fc0d5915af5923c0f
  translator: omp
  updated: "2026-08-11T00:00:00.000Z"
---
## 定义

若 $a$ 和 $b$ 为正[实数](../properties-of-real-numbers/)，且 $a \neq 1$，则以 $a$ 为底数的 $b$ 的对数记为 $\log_a b$，它是满足 $a^c=b$ 的实数 $c$。

$$\log_a b = c \iff a^c = b$$

需满足以下条件：

$$a>0 \qquad a \neq 1 \qquad b>0$$

例如，$\log_2 8=3$，因为 $2^3=8$。一个数的对数就是使给定底数的某次幂等于该数的指数。因此，对数是[乘方](../exponential-function/)的逆运算。

+ $a$ 是对数的底数。
+ $b$ 是对数的真数。

当 $a>0$ 时，对每个 $x\in\mathbb{R}$，$a^x$ 都是正实数。负底数和零底数不能对每个实数指数都定义实数幂。当 $a=1$ 时，对每个 $x\in\mathbb{R}$，表达式 $a^x$ 都等于 $1^x=1$。此时指数函数为常值函数，并且不[可逆](../inverse-function/)，所以它没有对数反函数。因此，底数必须满足 $a>0$ 且 $a\neq1$。

## 基本恒等式

[幂](../powers/)的运算法则和对数定义给出以下恒等式：

$$a^0 = 1 \Rightarrow \log_a 1 = 0$$

$$a^1 = a \Rightarrow \log_a a = 1$$

对每个 $c\in\mathbb{R}$ 都有 $a^c>0$，所以非正数没有实对数。等价地，当 $b\leq0$ 时，不存在实数 $c$ 满足 $a^c=b$。

+ 以 $e$ 为底的对数称为自然对数，记为 $\ln x$；[常数 $e$](../euler-number-limit-sequence/)约等于 $2.71828$，是自然指数函数 $e^x$ 的底数。

+ 以 $10$ 为底的对数称为常用对数，明确记为 $\log_{10}x$。上下文已经固定底数为 $10$ 时，也常用较短的记号 $\log x$。

> 以 10 为底的对数度量数量级，因为把一个正数乘以 $10^k$，会使其对数增加 $k$。

## 对数函数

[对数函数](../logarithmic-function/)是指数函数的[反函数](../inverse-function/)。因此，它的[定义域](../determining-the-domain-of-a-function/)和值域与[指数函数](../exponential-function/)的定义域和值域互换。固定底数 $a$ 后，函数具有如下形式：

$$
\log_a : (0,+\infty) \to \mathbb{R}, \quad a > 0 \quad a \neq 1
$$

定义域是 $(0,+\infty)$，值域是 $\mathbb{R}$。该函数在 $(0,+\infty)$ 上[连续](../continuous-functions/)且[可导](../derivatives/)。

![IMG. 1](/assets/powers-radicals-logarithms/svg/logarithms-1.svg)

上图展示了对数函数的单调行为和渐近性质。当 $a > 1$ 时，函数 $f(x) = \log_a x$ 在 $(0,+\infty)$ 上严格递增。它在 $x = 0$ 处有一条垂直[渐近线](../asymptotes/)，其极限为：

$$
\begin{align}
\lim_{x \to 0^+} \log_a x &= -\infty \\[6pt]
\lim_{x \to +\infty} \log_a x &= +\infty
\end{align}
$$

当 $0 < a < 1$ 时，函数在 $(0,+\infty)$ 上严格递减。

![IMG. 2](/assets/powers-radicals-logarithms/svg/logarithms-2.svg)

直线 $x = 0$ 同样是垂直渐近线，但极限行为相反：

$$
\begin{align}
\lim_{x \to 0^+} \log_a x &= +\infty \\[6pt]
\lim_{x \to +\infty} \log_a x &= -\infty
\end{align}
$$

> 在二分查找中，每次比较都会把剩余搜索区间减半。从 $n$ 个条目开始，经过 $k$ 次比较后，区间至多包含 $n/2^k$ 个条目，所以比较次数与 $\log_2 n$ 成正比。

## 性质

以下恒等式描述了如何处理对数表达式。每条性质都附有关于底数和真数的条件，以确保这些表达式在[实数](../properties-of-real-numbers/)中有明确定义。在所有情况下，底数都必须满足 $a > 0$ 和 $a \neq 1$，并且每个作为对数真数的量都必须严格为正。

由于对数被定义为指数函数的反函数，以下恒等式成立：

$$
\begin{align}
a^{\log_a x} &= x \qquad \forall x \in (0,+\infty) \\[6pt]
\log_a(a^x) &= x \qquad \forall x \in \mathbb{R}
\end{align}
$$

这两个恒等式表达了这样一个事实：以 $a$ 为底数的幂运算与以 $a$ 为底的对数在各自的[定义域](../determining-the-domain-of-a-function/)内互为反函数。

- - -

对于 $x, y > 0$，积的对数等于各因子对数之和：

$$
\log_a(xy) = \log_a x + \log_a y
$$

这就是积的对数律。它将乘法关系转化为加法关系，可直接由相应的指数律推出。

- - -

对于 $x, y > 0$，商的对数等于分子的对数减去分母的对数：

$$
\log_a{\frac{x}{y}} = \log_a x - \log_a y
$$

这就是商的对数律。作为特例，令 $x = 1$ 可得：

$$
\log_a{\frac{1}{y}} = -\log_a y
$$

因此，$y$ 的倒数的对数等于 $y$ 的对数的相反数。

- - -

对于 $x>0$ 和 $n\in\mathbb{R}$，[幂](../powers/)的对数等于指数乘以 $x$ 的对数：

$$
\log_a x^n = n\log_a x
$$

这就是幂的对数律。令 $u=\log_a x$，则 $x=a^u$ 且 $x^n=a^{nu}$。两边取以 $a$ 为底的对数，可得 $\log_a x^n=nu=n\log_a x$，该式对每个实指数 $n$ 都成立。

- - -

对于 $b > 0$ 和 $n \in \mathbb{N}$（满足 $n \ge 1$），[根式](../radicals/)的对数等于被开方数的对数除以根指数：

$$
\log_a\sqrt[n]{b} = \frac{1}{n}\log_a b
$$

该恒等式是幂运算律的直接推论，因为 $\sqrt[n]{b} = b^{1/n}$。

- - -

对于 $a, p > 0$（满足 $a, p \neq 1$ 和 $b > 0$），以 $a$ 为底的对数可以表示为以同一底数 $p$ 取的两个对数之商：

$$
\log_a b = \frac{\log_p b}{\log_p a}
$$

这就是换底公式。它把任意对数表示成能够取得数值的底数，例如 $e$ 或 $10$。

## 自然对数的基本不等式

自然对数满足下面的不等式：

$$
\ln x \le x - 1 \qquad \forall \ x > 0
$$

当且仅当 $x = 1$ 时等号成立。该结果直接来源于函数 $\ln x$ 在区间 $(0,+\infty)$ 上为凹函数这一事实。

![IMG. 3](/assets/powers-radicals-logarithms/svg/logarithms-3.svg)

其二阶导数为负，所以 $\ln x$ 在 $(0,+\infty)$ 上严格凹：

$$
(\ln x)^{\prime\prime} = -\frac{1}{x^2} < 0 \qquad \forall \ x > 0
$$

对任意可导凹函数，函数图像都位于每条切线下方。特别地，考虑 $x=1$ 处的切线，其中：

$$
\ln 1 = 0 \qquad (\ln x)' \big|_{x=1} = 1
$$

该切线的方程为：

$$
y = x - 1
$$

因此，不等式 $\ln x \le x - 1$ 表达了几何事实：曲线 $y = \ln x$ 始终不超过其在 $x = 1$ 处的切线，且仅在 $x = 1$ 处与之相切。

## 对数与代数结构

正实数[集合](../sets/) $(0,+\infty)$ 关于乘法构成群，$\mathbb{R}$ 关于加法构成群。对数把乘积映射为和。例如，对 $x,y>0$，考虑乘积：

$$
x^3 y^2
$$

取对数可得：

$$
\log_a(x^3 y^2) = 3\log_a x + 2\log_a y
$$

因此，对数是从乘法群 $(0,+\infty)$ 到加法群 $\mathbb{R}$ 的同态。它是双射，所以也是群同构。积的对数律和幂的对数律明确描述了这种对应关系。

> [同态](../homomorphisms-and-isomorphisms/)是两个代数结构之间保持运算的函数，即 $\varphi(x \star y) = \varphi(x) \circ \varphi(y)$。其中 $\star$ 和 $\circ$ 表示两个代数结构的运算，例如加法或乘法。

## 示例 1

设 $a>0$、$a\neq1$ 且 $x,y,z>0$。利用对数性质化简以下表达式：

$$
\log_a \left( \frac{x^3 \cdot y}{z^2} \right)
$$

商的对数律把该对数写成分子对数与分母对数之差：

$$
\log_a \left( \frac{x^3 \cdot y}{z^2} \right) = \log_a(x^3 \cdot y) - \log_a(z^2)
$$

积的对数律把分子中的因子分开：

$$
\log_a(x^3 \cdot y) = \log_a(x^3) + \log_a(y)
$$

于是，表达式变为：

$$
\log_a \left( \frac{x^3 \cdot y}{z^2} \right) = \log_a(x^3) + \log_a(y) - \log_a(z^2)
$$

幂的对数律把每个指数移到相应对数之前：

$$
\log_a(x^3) = 3 \log_a(x) \qquad \log_a(z^2) = 2 \log_a(z)
$$

代入可得化简后的表达式：

$$
\log_a \left( \frac{x^3 \cdot y}{z^2} \right) = 3 \log_a(x) + \log_a(y) - 2 \log_a(z)
$$

分子中各因子的指数成为正系数，分母中因子的指数成为负系数 $-2$。

## 对数的换底

换底公式可以直接从定义推出。设 $a,b>0$、$a,b\neq1$ 且 $x>0$，则：

$$\log_a x = \frac{\log_b x}{\log_b a}$$

> 这个公式可以把对数转换到任意已有数值的底数，包括底数 $10$ 或底数 $e$。

- - -

令 $y=\log_a x$。根据对数定义，$a^y=x$。对等式两边取以 $b$ 为底的对数，得到：

$$\log_b(a^y) = \log_b(x)$$

应用幂的对数律，得到：

$$y\log_b(a) = \log_b(x)$$

由于 $a\neq1$，分母 $\log_b a$ 不为零。两边除以该数，得到：

$$y = \frac{\log_b(x)}{\log_b(a)}$$

由于 $y=\log_a x$，换底公式得证：

$$\log_a(x) = \frac{\log_b(x)}{\log_b(a)}$$

## 对数方程

[对数方程](../logarithmic-equations/)是变量出现在对数内部的[方程](../equations/)。它的解必须满足每个对数真数的定义域条件。典型的对数方程具有如下形式：

$$\log_a f(x) = g(x)$$

+ 底数 $a$ 必须满足 $a>0$ 且 $a\neq1$。

+ $f(x)$ 是对数的真数，必须严格为正，即 $f(x)>0$。

## 自然对数

自然对数可以不依赖乘方，使用[定积分](../definite-integrals/)定义。对每个实数 $x>0$，令：

$$
\ln x = \int_1^x \frac{1}{t} \ dt
$$

函数 $1/t$ 在 $1$ 与任意固定的 $x>0$ 之间的区间上连续，所以这个积分有定义。根据[微积分基本定理](../fundamental-theorem-of-calculus/)，自然对数可导，并且满足：

$$
(\ln x)' = \frac{1}{x} \qquad x>0
$$

自然对数[严格递增](../increasing-and-decreasing-functions/)，因为它的[导数](../derivatives/)在 $(0,+\infty)$ 上为正。它也严格凹，因为：

$$
(\ln x)^{\prime\prime}= -\frac{1}{x^2} < 0
$$

- - -

指数函数 $e^x$ 是自然对数 $\ln x$ 的反函数。确立 $\ln x$ 后，对任意满足 $a>0$ 且 $a\neq1$ 的底数，对数定义为：

$$
\log_a x = \frac{\ln x}{\ln a}
$$

对每个允许的底数 $a$，都有 $\ln a\neq0$，所以这个商有定义。作为关于 $x$ 的函数，它在 $(0,+\infty)$ 上连续且可导。

## 自然对数的级数展开

当 $x>-1$ 时，自然对数的[积分](../definite-integrals/)定义给出恒等式：

$$
\ln(1+x) = \int_0^x \frac{1}{1+t} \ dt
$$

被积函数可以展开为[几何级数](../geometric-series/)。当 $|t|<1$ 时：

$$
\frac{1}{1+t} = \sum_{n=0}^{\infty} (-1)^nt^n = 1-t+t^2-t^3+\cdots
$$

该[级数](../series/)在 $(-1,1)$ 的每个闭[子区间](../intervals/)上一致收敛，因此当 $|x|<1$ 时可以逐项积分。从 $0$ 到 $x$ 积分，得到：

$$
\ln(1+x) = \sum_{n=0}^{\infty} \frac{(-1)^nx^{n+1}}{n+1} = x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots
$$

所得级数在 $-1<x\leq1$ 时收敛。端点 $x=-1$ 被排除，因为此时级数除符号外退化为发散的[调和级数](../harmonic-series/)。当 $x=1$ 时，交错级数判别法给出收敛性，阿贝尔定理把恒等式延拓到该端点：

$$
\ln 2 = 1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\cdots
$$

当 $|x|<1$ 时，部分和逼近 $\ln(1+x)$。在第一项后截断展开式，得到线性近似：

$$
\ln(1+x) \approx x \qquad x \to 0
$$

误差为 $x^2$ 阶。特别地，该近似蕴含：

$$
\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1
$$

这个极限出现在[极限](../limits/)和[导数](../derivatives/)计算中，并给出对数在 $1$ 附近的局部线性化。

当 $x$ 接近 $1$ 时，$\ln(1+x)$ 的级数收敛缓慢。当 $|y|<1$ 时，用 $\ln(1+y)$ 的级数减去 $\ln(1-y)$ 的级数，得到：

$$\ln\frac{1+y}{1-y} = 2\left(y+\frac{y^3}{3}+\frac{y^5}{5}+\cdots\right)$$

例如，令 $y=1/3$，可以得到 $\ln2$ 的一个级数，其各项比交错调和级数的各项下降得快得多。

## 对数微分法

设 $f$ 和 $g$ 在一个区间上可导，并且在整个区间上 $f(x)>0$。形如 $y=f(x)^{g(x)}$ 的函数，其底数和指数都依赖于变量，一般不能直接使用幂函数求导法则或指数函数求导法则。对数微分法先对等式两边取自然对数，再进行隐式求导，从而处理这类表达式。

对 $y = f(x)^{g(x)}$ 取自然对数，并利用对数的幂运算律，得到：

$$
\ln y = g(x)\ln f(x)
$$

对两边关于 $x$ 求导，左端运用链式法则，右端运用乘积法则，得到：

$$
\frac{y'}{y} = g'(x)\ln f(x)+g(x)\frac{f'(x)}{f(x)}
$$

解出 $y'$ 并将 $y$ 的原表达式代入，便得到显式导数：

$$
y' = f(x)^{g(x)}\left[g'(x)\ln f(x)+g(x)\frac{f'(x)}{f(x)}\right]
$$

条件 $f(x)>0$ 保证对数在所讨论的区间上有定义。例如，考虑 $x>0$ 时 $y=x^x$ 的导数。对两边取自然对数，得到：

$$
\ln y = x \ln x
$$

对两边关于 $x$ 求导，左端由[链式法则](../the-derivative-of-a-composite-function/)变为 $y'/y$，而右端则用乘积法则来计算：

$$
\frac{y'}{y} = \ln x+x \cdot \frac{1}{x} = \ln x+1
$$

两边乘以 $y = x^x$ 即得结果：

$$
\frac{d}{dx}x^x = x^x(\ln x+1)
$$

变量同时出现在底数和指数中时，可以使用同一方法。它也适用于多个正因子的乘积，因为对数在求导前把乘积转换为和。

## 用对数证明 AM-GM 不等式

正实数的[算术平均数](../arithmetic-mean/)和[几何平均数](../geometric-mean/)满足 AM-GM 不等式。对满足 $n\in\mathbb{N}$、$n\geq1$ 和 $x_1,x_2,\ldots,x_n>0$ 的数列，该不等式为：

$$
\frac{x_1 + x_2 + \cdots + x_n}{n} \geq \left( x_1 x_2 \cdots x_n \right)^{\frac{1}{n}}
$$

等号成立当且仅当 $x_1=x_2=\cdots=x_n$。函数 $\ln$ 在 $(0,+\infty)$ 上严格凹，因为对每个 $x>0$ 都有 $(\ln x)''=-1/x^2<0$。因此，詹森不等式给出：

$$
\frac{1}{n} \sum_{i=1}^{n} \ln x_i \leq \ln \left( \frac{1}{n} \sum_{i=1}^{n} x_i \right)
$$

左端是 $\ln x_1, \ldots, \ln x_n$ 的算术平均数，根据[几何平均数](../geometric-mean/)的对数形式，它等于 $\ln M_g$。右端是 $\ln M_a$，其中 $M_a$ 表示[算术平均数](../arithmetic-mean/)。因此该不等式变为：

$$
\ln M_g \leq \ln M_a
$$

由于 $\ln$ 严格递增，这等价于 $M_g\leq M_a$，即 AM-GM 不等式。严格凹性说明等号成立当且仅当 $x_1=x_2=\cdots=x_n$。
