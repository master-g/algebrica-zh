---
title: 反常积分
title_en: Improper Integrals
source: https://algebrica.org/improper-integrals/
license: CC BY-NC 4.0
tags:
  - absolute-convergence
  - comparison-test
  - continuous-functions
  - convergence
  - definite-integral
  - divergence
  - improper-integrals
  - integration
  - limits
  - p-integral-test
  - riemann-integral
  - unbounded-intervals
translation:
  status: current
  source_hash: 276ce0a638d80b800988b153e9dbd78fdf43d3e6ed1748507157313890830bb3
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 无界区间上的积分

到目前为止，我们已经分析了[不定积分](../indefinite-integrals/)和[定积分](../definite-integrals/)，介绍了最常见解析函数的原函数以及主要的积分法则。简单地说，不定积分没有积分限，而定积分总是在有界[区间](../intervals/)（例如 $[a,b]$）上计算。在后一种情形中，我们遇到过这样的积分：

$$\int_{a}^{b} f(x) \ dx = F(b) - F(a) \tag{1}$$

当 $f$ 在 $[a,b]$ 上连续且 $F$ 是 $f$ 的一个原函数时，微积分基本定理给出 $(1)$。计算 $F$ 在端点 $a$ 和 $b$ 处的值就得到这个积分。从几何上看，它是 $f$ 的图像与 $x$ 轴之间在 $[a,b]$ 上的有向面积。位于轴上方的区域贡献为正，位于轴下方的区域贡献为负。

这种做法有一个不容忽视的限制：只有当两个端点围出一个有界区间时它才适用。更准确地说，回顾[黎曼可积性判据](../riemann-integrability-criteria/)，定义积分的区间必须有界，并且 $f$ 必须有界。

如果其中一个假设不成立，某个积分限是 $+\infty$ 或 $-\infty$，会发生什么？我们会遇到这样的情形：

$$\int_{a}^{+\infty} f(x) \ dx$$

由于 $+\infty$ 不是实数，表达式 $F(+\infty)$ 不能当作普通的端点值来计算。


![图 1](/assets/integrals/svg/improper-integrals-3.zh.svg)


这类表达式借助[极限](../limits/)来处理。更准确地说，反常积分定义为有界区间上常义黎曼积分的极限，后面各节将说明这一点。

## 无界区间上的反常积分

设 $f$ 在每个区间 $[a,t]$（$t>a$）上黎曼可积。$[a,+\infty)$ 上的反常积分由下面的[极限](../limits/)定义：

$$\int_a^{+\infty} f(x) \ dx := \lim_{t \to +\infty} \int_a^t f(x) \ dx$$

也就是说，先把上端点取为有限数 $t$，再求 $t\to+\infty$ 时的极限。

![图 1](/assets/integrals/svg/improper-integrals-1.zh.svg)

+ 当极限存在且有限时，积分收敛。
+ 当极限等于 $+\infty$ 或 $-\infty$ 时，积分分别发散到 $+\infty$ 或 $-\infty$。
+ 当极限不存在时，反常积分发散。

- - -

当下端点为 $-\infty$ 时，可以重复同样的过程。此时设 $f$ 在每个区间 $[t,b]$（$t<b$）上黎曼可积。反常积分的相应定义为：

$$\int_{-\infty}^b f(x) \ dx := \lim_{t \to -\infty} \int_t^b f(x) \ dx$$

第三种情形是下端点为 $-\infty$、上端点为 $+\infty$，此时一个极限已经不够。任取一点 $c$，并定义：

$$\int_{-\infty}^{+\infty} f(x) \ dx := \int_{-\infty}^c f(x) \ dx + \int_c^{+\infty} f(x) \ dx$$

只有当右端的两个积分分别收敛时，反常积分才收敛，并且此时结果与 $c$ 的选取无关。

## 例 1

为了说明一种十分常见的情形，我们计算下面的反常积分：

$$\int_1^{+\infty} \frac{1}{x^2} \ dx$$

当 $b>1$ 时，常义黎曼积分为：

$$\int_1^b \frac{1}{x^2} \ dx = \int_1^b x^{-2} \ dx = \left[ -x^{-1} \right]_1^b = -\frac{1}{b} + 1$$

由于当 $b\to+\infty$ 时 $1/b\to0$，定义该积分的极限为：

$$\lim_{b \to +\infty} \left(1 - \frac{1}{b}\right) = 1$$

这个极限有限，因此反常积分收敛到 $1$。

## 例 2

现在考虑分母中指数等于 $1$ 的类似情形：

$$\int_1^{+\infty} \frac{1}{x} \ dx$$

当 $b>1$ 时，积分变为：

$$\int_1^b \frac{1}{x} \ dx = \left[ \ln x \right]_1^b = \ln b$$

定义它的极限为：

$$\lim_{b \to +\infty} \ln b = +\infty$$

这个极限为无穷，因此积分发散。

## 被积函数无界的反常积分

第二类反常积分出现在 $f$ 在区间的某一点处无界的情形。设 $f$ 在 $a$ 的每个右邻域内无界，但在每个区间 $[t,b]$（$a<t<b$）上黎曼可积。反常积分定义为：

$$\int_a^b f(x) \ dx := \lim_{t \to a^+} \int_t^b f(x) \ dx$$

当极限存在且有限时，反常积分收敛。类似地，设 $f$ 在 $b$ 的每个左邻域内无界，但在每个区间 $[a,t]$（$a<t<b$）上黎曼可积。相应的定义为：

$$\int_a^b f(x) \ dx := \lim_{t \to b^-} \int_a^t f(x) \ dx$$

设 $c\in(a,b)$ 是唯一的奇点，并且 $f$ 在每个区间 $[a,t]$（$a<t<c$）以及每个区间 $[s,b]$（$c<s<b$）上黎曼可积。定义用到两个相互独立的单侧极限：

$$
\int_a^b f(x) \ dx
:=\lim_{t\to c^-}\int_a^t f(x) \ dx
+\lim_{s\to c^+}\int_s^b f(x) \ dx
$$

只有当两个单侧极限都存在且有限时，反常积分才收敛。

如果一个积分有多个反常端点或多个奇点，就选取正常的分割点，使每个单侧部分只有一个反常来源。在这些情形中，原积分收敛当且仅当积分的每一部分都收敛。

## 例 3

下面这个积分的被积函数在下端点处无界：

$$\int_0^1 \frac{1}{\sqrt{x}} \ dx$$

由于 $1/\sqrt{x}$ 在 $x\to0^+$ 时无界，定义中使用下端点 $t>0$ 以及 $t\to0^+$ 时的极限：

$$\int_0^1 \frac{1}{\sqrt{x}} \ dx := \lim_{t \to 0^+} \int_t^1 x^{-1/2} \ dx$$

原函数为：

$$\int x^{-1/2} \ dx = 2x^{1/2} + C$$

当 $t>0$ 时，常义黎曼积分为：

$$\int_t^1 x^{-1/2} \ dx = 2 - 2\sqrt{t}$$

定义该积分的极限为：

$$\lim_{t \to 0^+} (2 - 2\sqrt{t}) = 2$$

极限存在且有限，因此积分收敛，其值为 $2$。

## $p$-积分判别法

$p$-积分判别法对下面这一族积分进行分类：

$$\int_1^{+\infty} \frac{1}{x^p} \ dx \tag{2}$$

参数 $p$ 是实数，此时收敛性取决于它的值。当 $p\neq1$ 时，常义黎曼积分为：

$$\int_1^b x^{-p} \ dx = \left[ \frac{x^{1-p}}{1-p} \right]_1^b = \frac{b^{1-p} - 1}{1 - p}$$

取 $b \to +\infty$ 时的极限，得到三种情形：

[class="table-1"]

|         |                       |                              |
| ------- | --------------------- | ---------------------------- |
| $p > 1$ | $b^{1-p} \to 0$       | 收敛到 $\dfrac{1}{p - 1}$ |
| $p = 1$ | $\ln b \to +\infty$   | 发散                     |
| $p < 1$ | $b^{1-p} \to +\infty$ | 发散                     |

[/class]

积分 $(2)$ 收敛当且仅当 $p>1$。原点附近的相应积分为：

$$\int_0^1 \frac{1}{x^p} \ dx \tag{3}$$

在原点处，端点的行为正好相反。只有当 $p>0$ 时被积函数才在 $x=0$ 处奇异，而积分 $(3)$ 收敛当且仅当 $p<1$。

> 这些[幂函数](../powers/)是下面介绍的比较判别法的参照情形。

## 收敛性与比较判别法

比较判别法可以在不求原函数、不精确计算积分的情况下确定收敛性。下面用到的两种判别法是直接比较判别法和极限比较判别法。

直接比较判别法使用逐点的界。设 $f$ 和 $g$ 在 $[a,+\infty)$ 的每个有界子区间上黎曼可积，并且对每个 $x\geq a$ 都有 $0\leq f(x)\leq g(x)$：

+ 如果 $\int_a^{+\infty} g(x) \ dx$ 收敛，那么 $\int_a^{+\infty} f(x) \ dx$ 也收敛。
+ 如果 $\int_a^{+\infty} f(x) \ dx$ 发散，那么 $\int_a^{+\infty} g(x) \ dx$ 也发散。


![图 2](/assets/integrals/svg/improper-integrals-2.zh.svg)

极限比较判别法用渐近比值代替逐点的界。设 $f$ 和 $g$ 为正，并在 $[a,+\infty)$ 的每个有界子区间上黎曼可积，且它们的比值有极限：

$$\lim_{x \to +\infty} \frac{f(x)}{g(x)} = L \qquad 0 < L < +\infty$$

那么 $\int_a^{+\infty} f(x) \ dx$ 和 $\int_a^{+\infty} g(x) \ dx$ 要么都收敛，要么都发散。

等价地说，当 $x\to+\infty$ 时 $f(x)\sim Lg(x)$；$f$ 与 $g$ 渐近等价是 $L=1$ 的特殊情形。取 $g(x)=1/x^p$，问题就归结为 $p$-积分判别法。

$L$ 取退化值时，只能得到单方向的蕴含关系：

+ 如果 $L=0$ 且 $\int_a^{+\infty} g(x) \ dx$ 收敛，那么 $\int_a^{+\infty} f(x) \ dx$ 收敛。
+ 如果 $L=+\infty$ 且 $\int_a^{+\infty} g(x) \ dx$ 发散，那么 $\int_a^{+\infty} f(x) \ dx$ 发散。

如果 $f$ 和 $g$ 为正，并在有限点 $c$ 右侧的每个紧区间上黎曼可积，那么当 $x\to c^+$ 时，同样的结论对相应的反常积分成立。当 $x\to c^-$ 时，在左侧有类似的结论。作为参照的幂模型是 $1/|x-c|^p$，它在 $c$ 每一侧的积分收敛当且仅当 $p<1$。

## 实用的收敛性分析策略

下面的步骤给出了收敛性分析的顺序。

+ 首先，找出每一个反常来源，包括每个无穷端点、每个使被积函数无界的端点，以及每个内部奇点。
+ 把有多个反常来源的积分拆成单侧部分，使每一部分只有一个反常来源。
+ 如果能求出原函数，就必须对反常积分的每一部分应用定义。当[洛必达法则](../hopital-rule/)的假设满足时，它有助于处理未定式的商。
+ 对于非负的被积函数，如果能用参照函数给出逐点的界，就可以使用直接比较判别法。
+ 如果得不到逐点的界，而被积函数最终为正，那么当它与参照函数的比值具有上述极限之一时，可以使用极限比较判别法。常用的模型是无穷远处的 $1/x^p$ 和有限奇点附近的 $1/|x-c|^p$。

## 例 4

考虑下面的积分：

$$\int_1^{+\infty} \frac{1}{x^2 + 1} \ dx$$

被积函数有原函数 $\arctan x$，但用比较的方法不必计算反常积分就能证明收敛。比较所用的比值为：

$$\lim_{x \to +\infty} \frac{\dfrac{1}{x^2 + 1}}{\dfrac{1}{x^2}} = \lim_{x \to +\infty} \frac{x^2}{x^2 + 1} = 1$$

比值趋于 $1$，因此下面两个积分同时收敛或同时发散：

$$\int_1^{+\infty} \frac{1}{x^2 + 1} \ dx \qquad \int_1^{+\infty} \frac{1}{x^2} \ dx$$

由于 $p=2>1$，根据 $p$-积分判别法，第二个积分收敛。因此第一个积分也收敛。

## 例 5

考虑下面的积分：

$$\int_2^{+\infty} \frac{\cos^2 x}{x^2} \ dx$$

由于对每个 $x$ 都有 $0 \leq \cos^2 x \leq 1$，被积函数满足：

$$0 \leq \frac{\cos^2 x}{x^2} \leq \frac{1}{x^2}$$

由于 $p=2>1$，$p$-积分判别法给出：

$$\int_2^{+\infty} \frac{1}{x^2} \ dx<+\infty$$

于是直接比较判别法给出：

$$\int_2^{+\infty} \frac{\cos^2 x}{x^2} \ dx<+\infty$$

原积分收敛。

## 例 6

固定 $\beta>0$，我们来确定使下面的积分收敛的 $\alpha\in\mathbb{R}$ 的值：

$$I_{\alpha,\beta}:=\int_0^{+\infty}\frac{x^\alpha}{1+x^\beta} \ dx$$

对每个 $\alpha$，端点 $+\infty$ 都是反常的，而当 $\alpha<0$ 时 $0$ 是奇异端点。在 $1$ 处拆分，得到两个相互独立的积分：

$$I_{\alpha,\beta}=\int_0^1\frac{x^\alpha}{1+x^\beta} \ dx+\int_1^{+\infty}\frac{x^\alpha}{1+x^\beta} \ dx$$

在原点附近，与 $x^\alpha$ 的比较来自：

$$\lim_{x\to0^+}\frac{\dfrac{x^\alpha}{1+x^\beta}}{x^\alpha}=\lim_{x\to0^+}\frac{1}{1+x^\beta}=1$$

第一个积分收敛当且仅当 $\alpha>-1$。在无穷远处，比较函数是 $x^{\alpha-\beta}$，因为：

$$\lim_{x\to+\infty}\frac{\dfrac{x^\alpha}{1+x^\beta}}{x^{\alpha-\beta}}=\lim_{x\to+\infty}\frac{x^\beta}{1+x^\beta}=1$$

第二个积分收敛当且仅当 $\alpha-\beta<-1$，即 $\alpha<\beta-1$。因此两部分都收敛当且仅当：

$$-1<\alpha<\beta-1$$

对 $\alpha$ 的其他任何值，积分都发散。

## 绝对收敛

考虑如下形式的反常积分：

$$\int_a^{+\infty} f(x) \ dx$$

当绝对值的积分收敛时，称该积分绝对收敛：

$$\int_a^{+\infty} |f(x)| \ dx < +\infty$$

绝对收敛蕴含收敛，但反过来不成立。例如：

$$\int_1^{+\infty} \frac{\sin x}{x} \ dx$$

[分部积分法](../integration-by-parts/)表明这个积分收敛。它的绝对值的积分为：

$$\int_1^{+\infty} \frac{|\sin x|}{x} \ dx$$

第二个积分发散。收敛但不绝对收敛的积分称为[条件收敛](../convergence-tests-for-improper-integrals/)。

> 设 $f$ 在 $[a,+\infty)$ 的每个有界子区间上黎曼可积。函数 $f$ 在 $[a,+\infty)$ 上勒贝格可积，当且仅当它的反常积分绝对收敛，并且此时两个值相等。因此，$\int_1^{+\infty}\sin x/x \ dx$ 作为反常积分收敛，但 $x\mapsto\sin x/x$ 在 $[1,+\infty)$ 上不是勒贝格可积的，因为 $|\sin x|/x$ 的积分发散。
