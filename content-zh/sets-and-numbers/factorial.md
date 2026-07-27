---
title: 阶乘
title_en: Factorial
source: https://algebrica.org/factorial/
license: CC BY-NC 4.0
tags:
  - asymptotic-analysis
  - binomial-coefficient
  - combinatorics
  - factorial
  - gamma-function
  - permutations
  - recursive-definition
  - stirling-approximation
translation:
  status: current
  source_hash: 3a5faa959c394b4fda9499879a5b5807fa45b5a61761ec29f3fd84edfa14a4c0
  translator: omp
  updated: "2026-07-22T16:23:45.738Z"
---
## 定义

非负[整数](../integers/) $n$ 的阶乘记作 $n!$，它是从 $1$ 到 $n$ 的所有正整数之积：

$$
\begin{align}
n! &= n \cdot (n-1) \cdot (n-2) \cdot \ldots \cdot 2 \cdot 1 \\[6pt]
&= n \cdot (n-1)!
\end{align}
$$

例如，$4$ 的阶乘按如下方式计算：

$$
4! = 4 \cdot 3 \cdot 2 \cdot 1 = 24
$$

按照约定，$0$ 的阶乘等于 $1$。阶乘也可以通过如下分情形定义的递归函数来表达：

$$
n! =
\begin{cases}
n \cdot (n-1)! & \text{若 } n \in \mathbb{N},\ n > 0 \\[6pt]
1 & \text{若 } n = 0
\end{cases}
$$

同一阶乘定义也可以用连乘号 $\prod$ 更紧凑地写出，其中下标 $k$ 从 $1$ 取到 $n$：

$$
n! =
\begin{cases}
\displaystyle\prod_{k=1}^{n} k & \text{若 } n \in \mathbb{N},\ n > 0 \\[6pt]
1 & \text{若 } n = 0
\end{cases}
$$

阶乘用于计算[二项式系数](../binomial-coefficient/)，即从一个更大的集合中选取给定数目元素的方法数。表达式 $a_n = n!$ 也定义了一个自然数的[数列](../sequences/)。

## 阶乘比的约分

设给定两个非负整数 $n$ 与 $k$，且 $n > k$，我们想计算如下比值：

$$
\frac{n!}{(n-k)!}
$$

分母将与从 $(n-k)$ 递减到 $1$ 的因子相消，从而在分子中留下 $k$ 项：

$$
\frac{n!}{(n-k)!} = n \cdot (n-1) \cdot \ldots \cdot (n-k+1)
$$

考虑 $7!$ 与 $4!$ 之间的比值。从 $4$ 递减到 $1$ 的因子同时出现在分子与分母中，因此相互抵消。分子中剩下的是从 $7$ 递减到 $5$ 的整数之积，它等于 $210$：

$$
\frac{7!}{4!} = \frac{7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}{4 \cdot 3 \cdot 2 \cdot 1} = 7 \cdot 6 \cdot 5 = 210
$$

## 组合学中的阶乘

在组合学中，$n!$ 给出 $n$ 个对象的可能排列数。例如，$n = 3$ 个对象共有 $3! = 6$ 种可能排列：

$$
\begin{array}{rrrr}
& o_1 & o_2 & o_3 \\[6pt]
\hline
& 1 & 2 & 3 \\[6pt]
& 1 & 3 & 2 \\[6pt]
& 2 & 1 & 3 \\[6pt]
& 2 & 3 & 1 \\[6pt]
& 3 & 1 & 2 \\[6pt]
& 3 & 2 & 1
\end{array}
$$

如果选取的顺序无关紧要，这些排列中有许多就变得等价。选取对象 $1, 2, 3$ 与选取 $3, 2, 1$ 或同一组三个元素的任何其他排列相同。由于每一组 $k$ 个元素都可以排成 $k!$ 种不同的方式，除以 $k!$ 即可消除重复，得到[二项式系数](../binomial-coefficient/)：

$$
\binom{n}{k} = \frac{n!}{k! \ (n-k)!}
$$

## 涉及阶乘的一个有用恒等式

从递归定义 $n! = n \cdot (n-1)!$ 出发，将其代入分数 $n/n!$ 的分母，因子 $n$ 会被消去，从而得到如下恒等式，它在简化涉及阶乘的表达式时常常很有用：

$$
\frac{n}{n!} = \frac{n}{n \cdot (n-1)!} = \frac{1}{(n-1)!}
$$

一个典型应用是推导泊松分布的均值，或将二项式系数改写为更简洁的形式。

## 阶乘与伽马函数的关系

伽马函数是阶乘的自然推广。阶乘仅在[自然数](../natural-numbers/)上有定义，而伽马函数对每一个正实数值都有定义。对任意 $c \in \mathbb{R}^+$，伽马函数由如下[反常积分](../improper-integrals/)定义：

$$
\Gamma(c) = \int_{0}^{+\infty} x^{c - 1} e^{-x} \ dx
$$

对于整数自变量，伽马函数与阶乘一致，如下面的恒等式所示：

$$
\Gamma(n) = (n - 1)!
$$

因此，阶乘是伽马函数在自然数上的离散限制。

> 伽马函数也出现在贝塔分布中，它提供了使总概率积分为一的归一化常数。

## 斯特林近似

斯特林近似在直接逐项相乘不可行时，用来对 $n$ 较大时的 $n!$ 作出估计。它给出如下的渐近形式：

$$
n! \approx \sqrt{2\pi n} \left(\frac{n}{e}\right)^n
$$

之所以需要这一近似，是因为阶乘的增长比多项式函数和指数函数都要快。在相对较小的取值处，阶乘就已经可以超过 $10^6$，而此时 $2^n$ 仍只有大约 $10^3$。

| $n$ | 多项式 $n^2$ | 指数 $2^n$ | 阶乘 $n!$ |
|-----|------------------|-------------------|----------------|
| 2   | 4                | 4                 | 2              |
| 5   | 25               | 32                | 120            |
| 10  | 100              | 1,024             | 3,628,800      |
| 15  | 225              | 32,768            | 约 1.308 万亿 |

$n!$ 与其斯特林近似之比当 $n$ 无界增大时趋于 $1$：

$$
\lim_{n \to \infty} \frac{n!}{\sqrt{2\pi n}\left(\dfrac{n}{e}\right)^n} = 1
$$

该近似随着 $n$ 增大而越来越精确。在 $n = 10$ 处，精确值 $10! = 3{,}628{,}800$ 与约为 $3{,}598{,}696$ 的斯特林估计相比，误差低于 $1\%$；而对于 $n > 100$，相对误差降到 $0.1\%$ 以下。表达这一近似的另一种方式是引入一个修正项：

$$
n! \approx \sqrt{2\pi n} \left(\frac{n}{e}\right)^n \left(1 + \frac{1}{12n}\right)
$$

> 斯特林近似用于二项式系数的渐近分析。对于任意底数 $a > 1$，阶乘 $n!$ 都支配指数 $a^n$，即 $\lim_{n \to \infty} a^n/n! = 0$。相应的渐近比较在[大 O 记号](../big-o-notation/)条目中展开。
