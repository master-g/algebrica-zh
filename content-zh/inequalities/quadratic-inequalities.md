---
title: 二次不等式
title_en: Quadratic Inequalities
source: https://algebrica.org/quadratic-inequalities/
license: CC BY-NC 4.0
tags:
  - discriminant
  - parabola
  - quadratic-inequality
  - sign-analysis
translation:
  status: current
  source_hash: b45a32d44fe78a1e0aacd40bc7b308db50d0ee803c7af04648871eb85a4e44b5
  translator: omp
  updated: "2026-07-31T02:54:37.064Z"
---
## 引言

二次不等式，即次数为二的[不等式](../inequalities/)，是关于一个变量的二次[多项式](../polynomials/)不等式，也是[一次不等式](../linear-inequalities/)向二次情形的自然推广。其标准形式中各项的排列与[二次方程](../quadratic-equations/)相同，但等号被替换为关系 $>$、$<$、$\geq$ 或 $\leq$ 之一。

标准形式的二次不等式即如下关系：

$$ax^2 + bx + c > 0 \quad \text{其中} \quad a \neq 0$$

其中 $a$、$b$、$c$ 为实系数，$x$ 为未知数。

+ $a$ 是二次项 $x^2$ 的系数，$b$ 是一次项 $x$ 的系数，$c$ 是常数项。
+ 当 $a = 0$ 时，表达式不再属于二次，不等式退化为一次不等式 $bx + c > 0$；若 $b = 0$ 也成立，则退化为常数之间的比较。

若二次不等式尚未处于标准形式，可将其所有项移到一边，使另一边为零，从而化为标准形式。例如，不等式 $x^2 + 3 < 2x + 1$ 先改写为 $x^2 - 2x + 2 < 0$，再应用本条目所讨论的方法。

## 二次不等式解的性质

二次不等式的解通常不是单独一个值，而是一个取值范围。根据对应方程判别式的符号、首项系数的符号以及不等号的方向，解集可能呈现以下形式之一：

+ 单个有界区间，端点开或闭，
+ 两个无界区间的并集，
+ 一个点，当不等式仅在抛物线顶点处成立时，
+ 整条实数轴 $\mathbb{R}$，当不等式对每个实数值都成立时，
+ 实数轴去掉一个点，当仅有抛物线顶点不满足不等式时，
+ 空集，当不等式永不成立时。

以下各节将逐一详细分析这些情形，并将其与抛物线的几何行为联系起来。

## 求解方法

求解二次不等式的第一步，是确定对应的二次方程的解。根据这些解在实数轴上的位置以及首项系数的符号，即可读出满足不等式的值。求二次方程的解有两种常用方法：[求根公式](../quadratic-formula/)和[因式分解法](../factoring-quadratic-equations/)。

> 求根公式以系统的方式给出任意二次方程的解，而因式分解法则将二次多项式写成一次因式的乘积，其根可直接从因式分解中读出。

- - -

给定一个标准形式的不等式，对应的二次方程由令多项式等于零得到。

$$ax^2 + bx + c = 0$$

对应方程的实[根](../roots-of-a-polynomial/)将实数轴划分为若干子区间，二次多项式在每个区间上保持定号。通过确定表达式在这些区间上的符号，即可找出满足不等式的值。

在以下讨论的三种情形中，我们假设 $a > 0$，即对应的抛物线开口向上。$a < 0$ 的情形可通过在不等式两边同时乘以 $-1$ 来转化为开口向上的情形，但这会反转不等号的方向。符号的反转是处理不等式时最常见的错误来源之一，因此将这一变换明确写出是有益的。若 $a < 0$，则不等式 $ax^2 + bx + c > 0$ 变为 $-ax^2 - bx - c < 0$，其首项系数 $-a$ 为正。

> 当系数依赖于某个参数时，二次表达式的符号由视为该参数函数的判别式所决定，正值区间或负值区间随之移动。此情形的完整讨论见专门条目[含参数的二次方程](../quadratic-equations-with-parameters/)。

## $\Delta > 0$ 时的解

当 $\Delta > 0$ 时，对应方程有两个不同的实根，分别记为 $x_1$ 与 $x_2$，约定 $x_1 < x_2$。这两个根把实数轴分成三个子区间，二次多项式在每一个子区间上都取定常正负号。由于 $a > 0$，抛物线开口向上，并在 $x_1$ 与 $x_2$ 处与 $x$ 轴相交，因此该式在内区间 $(x_1, x_2)$ 上取负值，在两个外区间 $(-\infty, x_1)$ 与 $(x_2, +\infty)$ 上取正值。

![图 1](/assets/inequalities/svg/quadratic-inequalities-1.zh.svg)

四种可能不等式的解集可直接由这一正负分布得出。

$$\begin{align}
ax^2 + bx + c > 0 &\iff x < x_1 \lor x > x_2 \\[6pt]
ax^2 + bx + c \geq 0 &\iff x \leq x_1 \lor x \geq x_2 \\[6pt]
ax^2 + bx + c < 0 &\iff x_1 < x < x_2 \\[6pt]
ax^2 + bx + c \leq 0 &\iff x_1 \leq x \leq x_2
\end{align}$$

两根本身是使该式为零的点，因此它们恰在不等式非严格时才属于解集。

## $\Delta = 0$ 时的解

当 $\Delta = 0$ 时，对应方程有一个二重实根，即 $x_1 = x_2$。开口向上的抛物线在该根处与 $x$ 轴相切，并在其他所有点处严格位于该轴之上，因此二次多项式在二重根处为零，在其他所有点处严格为正。

![图 2](/assets/inequalities/svg/quadratic-inequalities-2.zh.svg)

四种可能不等式的解集相应如下。

$$\begin{align}
ax^2 + bx + c > 0 &\iff x \neq x_1 \\[6pt]
ax^2 + bx + c \geq 0 &\iff x \in \mathbb{R} \\[6pt]
ax^2 + bx + c < 0 &\iff x \in \varnothing \\[6pt]
ax^2 + bx + c \leq 0 &\iff x = x_1
\end{align}$$

## $\Delta < 0$ 时的解

当 $\Delta < 0$ 时，对应方程有[复根](../quadratic-equations-with-complex-solutions/)，没有实数解。开口向上的抛物线不与 $x$ 轴相交，且对任意实数 $x$ 都严格位于该轴之上，因此二次多项式在整个实数轴上严格为正。

![图 3](/assets/inequalities/svg/quadratic-inequalities-3.zh.svg)

四种可能不等式的解集随之立得。

$$\begin{align}
ax^2 + bx + c > 0 &\iff x \in \mathbb{R} \\[6pt]
ax^2 + bx + c \geq 0 &\iff x \in \mathbb{R} \\[6pt]
ax^2 + bx + c < 0 &\iff x \in \varnothing \\[6pt]
ax^2 + bx + c \leq 0 &\iff x \in \varnothing
\end{align}$$

## 例 1

求解二次不等式

$$2x^2 + 5x - 3 > 0$$

第一步是将多项式设为零，写出对应的二次方程。

$$2x^2 + 5x - 3 = 0$$

应用[求根公式](../quadratic-formula/)可得以下结果。

$$\begin{align}
x_{1,2} &= \frac{-5 \pm \sqrt{5^2 - 4 \cdot 2 \cdot (-3)}}{2 \cdot 2} \\[6pt]
&= \frac{-5 \pm \sqrt{25 + 24}}{4} \\[6pt]
&= \frac{-5 \pm 7}{4}
\end{align}$$

按照惯例 $x_1 < x_2$，两个根为

$$\begin{align}
x_1 &= \frac{-5 - 7}{4} = -3 \\[6pt]
x_2 &= \frac{-5 + 7}{4} = \frac{1}{2}
\end{align}$$

- - -

该不等式形如 $ax^2 + bx + c > 0$，其中 $a > 0$ 且 $\Delta > 0$，因此其解集由两根外侧的两个区间构成。

[shortcode="intervals"]
|     | $-3$         | $1/2$           |     |
|:----|------------|---------------|-----|
|     | sign+r-o-h | sign+l-o-h    |     |
[/shortcode]

于是解集是 $-3$ 左侧与 $1/2$ 右侧两个无界区间的并集。

$$x < -3 \lor x > \frac{1}{2} \quad\text{或}\quad x \in (-\infty, -3) \cup \left(\frac{1}{2}, +\infty\right)$$

若该不等式改为 $2x^2 + 5x - 3 < 0$，则解集将是两根之间的内部区间。

[shortcode="intervals"]
|     | $-3$            | $1/2$           |     |
|:----|---------------|---------------|-----|
|     | sign+l-c      |               |     |
|     |               | sign+r-o      |     |
|     | sign+l-in-o-h | sign+r-in-o-h |     |
[/shortcode]

此时满足不等式的值落在开区间 $\left(-3, 1/2\right)$ 内。

## 符号分析

另一种求解不等式的有用方法是[符号分析](../sign-analysis-in-inequalities/)，它通过分别研究每个因式的符号来确定给定表达式在哪些区间上为正、为负或为零。例如，考虑下面的不等式。

$$x^2 - 2x - 3 > 0$$

该多项式可以[因式分解](../factoring-polynomials-ac-method/)为两个一次因式的乘积。

$$(x - 3)(x + 1) > 0$$

两个因式的乘积在两者同号时为正，在两者异号时为负。为了应用这一规则，我们通过求解两个对应的一次不等式来研究每个因式在实数轴上的符号。

$$\begin{align}
x + 1 &> 0 \iff x > -1 \\[6pt]
x - 3 &> 0 \iff x > 3
\end{align}$$

两个值 $x = -1$ 与 $x = 3$ 将实数轴划分为三个子区间，在每个子区间上两个因式都具有恒定的符号。下面的符号表总结了由此得到的分布。

[class="table-sign"]

|                        |                  |      $$-1$$      |      $$3$$       |     |
| :--------------------: | :--------------: | :--------------: | :--------------: | --- |
|        $$x + 1$$       | $\boldsymbol{-}$ | $\boldsymbol{+}$ | $\boldsymbol{+}$ |     |
|        $$x - 3$$       | $\boldsymbol{-}$ | $\boldsymbol{-}$ | $\boldsymbol{+}$ |     |
| $$(x + 1)(x - 3)$$     | $\boldsymbol{+}$ | $\boldsymbol{-}$ | $\boldsymbol{+}$ |     |
[/class]

> 关于该方法的完整讨论，包括两个以上因式的乘积以及有理表达式，可参阅[符号分析](../sign-analysis-in-inequalities/)的专门条目。

该乘积在两个外侧区间上为正（因式同号），在中间区间上为负（因式异号）。因此，原不等式在以下情形成立：

$$x < -1 \lor x > 3 \quad\text{或}\quad x \in (-\infty, -1) \cup (3, +\infty)$$

![图 4](/assets/inequalities/svg/quadratic-inequalities-4.zh.svg)

符号表通过研究因式分解所得的每个一次因式的符号来得到结果，而无需调用[求根公式](../quadratic-formula/)。多项式的根仍然发挥作用，因为它们恰好是各因式为零时对应的值；不过这里是从因式分解的形式中读出，而非由判别式计算得出。

## 例 2

考虑下面的不等式，其中判别式决定了解集的形式。

$$3x^2 - 2x + 5 > 0$$

关联方程 $3x^2 - 2x + 5 = 0$ 的判别式为

$$\Delta = (-2)^2 - 4 \cdot 3 \cdot 5 = 4 - 60 = -56$$

由于 $\Delta < 0$，且首项系数 $a = 3 > 0$，抛物线开口向上且不与 $x$ 轴相交。

![图 5](/assets/inequalities/svg/quadratic-inequalities-5.zh.svg)

因此，该二次表达式对 $x$ 的每个实数值都严格为正，解集为整个实数轴 $\mathbb{R}$。
