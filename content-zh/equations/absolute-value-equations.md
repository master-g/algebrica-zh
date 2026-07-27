---
title: 绝对值方程
title_en: Absolute Value Equations
source: https://algebrica.org/absolute-value-equations/
license: CC BY-NC 4.0
tags:
  - absolute-value
  - equations
translation:
  status: current
  source_hash: eff78e3d3a4327c887c2217b79a2fd0e8361de10cc4db9f25feb2e133052a62c
  translator: omp
  updated: "2026-07-27T06:45:53.333Z"
---
## 引言

绝对值方程是一类特殊的[方程](../equations/)，其中未知数 $x$ 出现在[绝对值](../absolute-value/)表达式中。绝对值衡量一个[数](../types-of-numbers/)在数轴上与零的距离，不论其符号，因此它始终非负，其定义为：

$$
|x| =
\begin{cases}
x & \text{若 } x \geq 0 \\[6pt]
-x & \text{若 } x < 0
\end{cases}
$$

当方程涉及绝对值时，必须考虑两种情况，因为绝对值符号内表达式的符号决定了定义中哪一支适用。这一区分将问题拆分为若干个独立的方程，每个方程在各自的区间上成立，然后分别求解。

## 性质

[绝对值函数](../absolute-value-function/) $|x|$ 满足若干与其相关的代数性质，涉及算术运算和序比较。这些性质用于简化表达式以及求解含有绝对值的方程。最有用的如下：

[class="table-1"]

|                            |                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 对称性                     | $$\lvert x \rvert = \lvert -x \rvert \quad \forall x \in \mathbb{R}$$                                                           |
| 乘积                       | $$\lvert xy \rvert = \lvert x \rvert \cdot \lvert y \rvert \quad \forall x, y \in \mathbb{R}$$                                  |
| 绝对值相等                 | $$\lvert x \rvert = \lvert y \rvert \iff x = \pm y \quad \forall x, y \in \mathbb{R}$$                                          |
| 通过平方比较               | $$\lvert x \rvert \leq \lvert y \rvert \iff x^2 \leq y^2 \quad \forall x, y \in \mathbb{R}$$                                    |
| 商                         | $$\left\lvert \frac{x}{y} \right\rvert = \frac{\lvert x \rvert}{\lvert y \rvert} \quad \forall x, y \in \mathbb{R},\ y \neq 0$$ |
| 平方根关系                 | $$\sqrt{x^2} = \lvert x \rvert \quad \forall x \in \mathbb{R}$$                                                                 |
[/class]

> 这些性质使绝对值表达式可以改写为等价形式，通常能简化求解相关方程所需的计算。

## 求解绝对值方程

求解含有绝对值的方程，需要分析绝对值符号内的表达式及其可能取到的符号。策略取决于方程的结构，即绝对值等于常数、另一个表达式，还是第二个绝对值。在每种情形下，方程都被拆分为反映绝对值定义的不同情况。

首先考虑绝对值等于常数的基本情形：

$$|A(x)| = a$$

当 $a \geq 0$ 时，该方程等价于 $A(x) = a$ 或 $A(x) = -a$。当 $a < 0$ 时，方程无解，因为绝对值永远不会为负。例如，方程 $|3 + 2x| = -2$ 无解，因为对每个实数 $x$，左端都非负。

- - -

现在考虑绝对值等于另一个表达式的情形：

$$|A(x)| = B(x)$$

这里我们必须考虑 $A(x)$ 的符号，因为绝对值的定义必须在该符号为常数的每个区间上分别应用。

- - -

另一种情形是方程两边都是绝对值：

$$|A(x)| = |B(x)|$$

根据性质 $|A| = |B| \iff A = \pm B$，该方程等价于两个方程 $A(x) = B(x)$ 和 $A(x) = -B(x)$，可以直接求解而无需任何前置的符号分析。然后收集两个方程的解。以下示例按照复杂度递增的顺序说明这些情形。

## 例 1

我们求解绝对值等于正常数的方程：

$$|3x - 1| = 5$$

由于右端为正，根据绝对值的定义，符号内的表达式按其符号有两种可能。因此该方程等价于：

$$3x - 1 = 5 \quad \text{或} \quad 3x - 1 = -5$$

求解第一个方程，分离出未知数：

$$3x = 6 \rightarrow x = 2$$

用同样的方法求解第二个方程，得到：

$$3x = -4 \rightarrow x = -\frac{4}{3}$$

两个值都是可接受的，因为右端的常数为正，且无其他约束。该方程有两个解：

$$x = -\frac{4}{3} \quad x = 2$$

## 例 2

我们解方程：

$$|2x - 4| = x + 1$$

首先分析绝对值符号内表达式的符号。条件 $2x - 4 \geq 0$ 在 $x \geq 2$ 时成立，因此绝对值可以写成分段表达式：

$$
|2x - 4| =
\begin{cases}
2x - 4 & \text{若 } x \geq 2 \\[6pt]
-2x + 4 & \text{若 } x < 2
\end{cases}
$$

- - -

在区间 $x \geq 2$ 上，绝对值等于 $2x - 4$，从而得到方程组：

$$
\begin{cases}
x \geq 2 \\[6pt]
2x - 4 = x + 1
\end{cases}
$$

解第二个方程可分离出未知数：

$$
\begin{cases}
x \geq 2 \\[6pt]
2x - x = 1 + 4 \rightarrow x = 5
\end{cases}
$$

值 $x = 5$ 是可接受的，因为它满足条件 $x \geq 2$。

> 约束与方程构成的组合是关于单个变量的[不等式组](../systems-of-inequalities/)。专门的条目讨论了求解过程以及如何处理更复杂的情况。

- - -

在区间 $x < 2$ 上，绝对值等于 $-2x + 4$，从而得到第二个方程组：

$$
\begin{cases}
x < 2 \\[6pt]
-2x + 4 = x + 1
\end{cases}
$$

解第二个方程得：

$$
\begin{cases}
x < 2 \\[6pt]
-2x - x = 1 - 4 \rightarrow -3x = -3 \rightarrow x = 1
\end{cases}
$$

值 $x = 1$ 是可接受的，因为它满足条件 $x < 2$。综合两个区间的结果，方程有两个解：

$$x = 1 \quad x = 5$$

## 例 3

我们解方程：

$$\frac{|3x|}{|x + 1|} = |x|$$

这是一个[有理方程](../rational-equations/)，因此首先确定存在条件，即分母不为零的 $x$ 的取值。分母在 $x = -1$ 时为零，因此该值必须从解集合中排除。

- - -

利用绝对值的性质，左端可以改写为单个绝对值：

$$\left| \frac{3x}{x + 1} \right| = |x|$$

根据性质 $|A| = |B| \iff A = \pm B$，方程分为两种情况。先看第一种情况：

$$\frac{3x}{x + 1} = x \rightarrow 3x = x^2 + x \rightarrow x^2 - 2x = 0 \rightarrow x(x - 2) = 0$$

这是一个[二次方程](../quadratic-equations/)，其解为：

$$x = 0 \quad x = 2$$

两个值都是可接受的，因为它们都不同于 $-1$。

> 这里求解二次方程时并未使用[求根公式](../quadratic-formula/)，而是通过对相应的[多项式](../polynomials/)进行[因式分解](../factoring-quadratic-equations/)，找出使每个一次因式为零的 $x$ 的取值。

- - -

现在考虑第二种情况：

$$\frac{3x}{x + 1} = -x \rightarrow 3x = -x^2 - x \rightarrow x^2 + 4x = 0 \rightarrow x(x + 4) = 0$$

按上述方法处理，二次方程的解为：

$$x = 0 \quad x = -4$$

两个值都是可接受的，因为它们都不同于 $-1$。综合两种情况的解，方程有三个不同的解：

$$x = -4 \quad x = 0 \quad x = 2$$

## 例 4

我们求解一个含有两个不同绝对值的方程：

$$|x - 1| + |x + 2| = 5$$

当出现多个绝对值时，必须分别考察每个绝对值符号内部的表达式的符号。两个表达式分别在 $x = 1$ 和 $x = -2$ 处变号，这些临界点将实数轴划分为三个区间，在每个区间上绝对值符号内的表达式都具有恒定的符号。随后在每个区间上求解方程，将每个绝对值替换为其定义式中相应的分支。

- - -

在区间 $x < -2$ 上，两个表达式均为负，故方程变为：

$$
\begin{cases}
x < -2 \\[6pt]
-(x - 1) - (x + 2) = 5
\end{cases}
$$

展开并合并未知数，得：

$$
\begin{cases}
x < -2 \\[6pt]
-2x - 1 = 5 \rightarrow x = -3
\end{cases}
$$

值 $x = -3$ 可接受，因为它满足条件 $x < -2$。

- - -

在区间 $-2 \leq x < 1$ 上，第一个表达式为负而第二个非负，故方程变为：

$$
\begin{cases}
-2 \leq x < 1 \\[6pt]
-(x - 1) + (x + 2) = 5
\end{cases}
$$

含 $x$ 的项相消，方程化为一个矛盾式：

$$-(x - 1) + (x + 2) = 3 \neq 5$$

因此该区间不贡献任何解。

- - -

在区间 $x \geq 1$ 上，两个表达式均非负，故方程变为：

$$
\begin{cases}
x \geq 1 \\[6pt]
(x - 1) + (x + 2) = 5
\end{cases}
$$

合并未知数，得：

$$
\begin{cases}
x \geq 1 \\[6pt]
2x + 1 = 5 \rightarrow x = 2
\end{cases}
$$

值 $x = 2$ 可接受，因为它满足条件 $x \geq 1$。汇总三个区间的贡献，方程有两个解：

$$x = -3 \quad x = 2$$

> 此类方程与[含绝对值的不等式](../inequalities-with-absolute-value/)密切相关，其中同样的分类讨论应用于比较而非等式。
