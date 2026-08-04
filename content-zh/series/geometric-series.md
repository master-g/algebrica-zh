---
title: 等比级数
title_en: Geometric Series
source: https://algebrica.org/geometric-series/
license: CC BY-NC 4.0
tags:
  - common-ratio
  - convergence
  - geometric-series
  - series
translation:
  status: current
  source_hash: 4f5727e240c0f437fe23db74a34a12b43ae35e1657fe6a9f0429bd4d1495581f
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 定义

等比级数建立在[等比数列](../geometric-sequence/)之上，其中每一项都由前一项乘以一个固定的公比得到。它定义为如下的和：

$$
\sum_{n=0}^{\infty} r^n
$$

数值 $r$ 是用来将每一项变为下一项的固定因子。当 $r = 0$ 时，级数收敛于 $1$，因为后续各项都为零：

$$
\sum_{n=0}^{\infty} 0^n = 1 + 0 + 0 + \dots = 1
$$

当 $r = 1$ 时，级数发散，因为部分和数列没有上界：

$$
s_n = 1 + 1 + \dots + 1 = n + 1 \quad \rightarrow \quad \lim_{n \to \infty} s_n = \infty
$$

等比级数是分析更复杂级数时的参考模型，因为它的行为清晰且容易确定。对于[正项级数](../series-with-positive-terms/)，等比级数可用于比较判别，以判断其收敛或发散。如果某个级数可以由一个等比级数从上方或下方控制，我们通常就能通过类比推断该级数的性质。

- - -

公比满足 $r \ne 0$ 且 $r \ne 1$ 的等比[级数](../series/)的第 $n$ 阶部分和为：

$$
S_n = \sum_{k=0}^{n} r^k = \frac{1 - r^{n+1}}{1 - r}
$$

这个结果从如下表达式开始推导：

$$
s_n = 1 + r + r^2 + r^3 + \dots + r^n
$$

等式两边乘以 $r$，得到：

$$
\begin{align}
r \cdot s_n &= r(1 + r + r^2 + \dots + r^n) \\[6pt]
&= r + r^2 + r^3 + \dots + r^n + r^{n+1} \\[6pt]
&= 1+ r + r^2 + r^3 + \dots + r^n + r^{n+1} -1 \\[6pt]
\end{align}
$$

在等式的最后一项中，我们加上并减去了 $+1$。这样，表达式中的 $1 + \dots + r^n$ 就变成了 $s_n$。代入并整理，得到：

$$
\begin{align}
r \cdot s_n &= s_n + r^{n+1} - 1 \\[6pt]
s_n (1 - r) &= 1 - r^{n+1}
\end{align}
$$

最后：

$$
s_n = \frac{1 - r^{n+1}}{1 - r} \quad r \ne 1
$$

> 条件 $r \ne 1$ 至关重要；否则分母为零，公式没有定义。

- - -

当 $|r| < 1$ 时，等比级数收敛，因为各项的绝对值不断减小。无穷和可由下式计算：

$$
\sum_{n=0}^{\infty} r^n = \frac{1}{1 - r}
$$

这是因为当 $|r| < 1$ 时，$\lim_{n \to \infty} r^{n+1} = 0$，部分和公式因此化为：

$$
s_n = \frac{1 - r^{n+1}}{1 - r} \quad \rightarrow \quad \lim_{n \to \infty} s_n = \frac{1}{1 - r}
$$

等比级数的首项不一定是 $1$。将每一项乘以常数 $a$，得到一般形式：

$$
\sum_{n=0}^{\infty} ar^n = a + ar + ar^2 + \dots
$$

常数 $a$ 可以从和式中提出，因此部分和可以直接由首项为 $1$ 的情形得到：

$$
S_n = a\frac{1 - r^{n+1}}{1 - r}
$$

当 $|r| < 1$ 时，级数收敛，且其和为：

$$
\sum_{n=0}^{\infty} ar^n = \frac{a}{1 - r}
$$

非零常数 $a$ 会将每一项按同一个因子缩放，因此它会改变极限的值，却不改变级数是否收敛。一般地，当求和下标从某个正值开始，即 $n > 0$（例如 $\alpha$）时，等比级数的和公式变为：

$$
\sum_{n=\alpha}^{\infty} r^n = \frac{r^{\alpha}}{1 - r}
$$

- - -

当 $r > 1$ 时，等比级数发散，因为当 $n \to \infty$ 时，项 $r^n$ 没有上界，部分和数列也没有上界：

$$
\lim_{n \to \infty} s_n = \lim_{n \to \infty} \sum_{k=0}^{n} r^k = \infty
$$

由于各项不趋于零且其和无限增长，级数没有有限极限，因而发散。

- - -

当 $r \leq -1$ 时，$s_n$ 的极限不存在，级数是不定的。各项 $r^n$ 的符号交替且绝对值不断增大，所以部分和 $s_n$ 在没有趋近任何有限值的情况下振荡；级数既不收敛，也不发散到无穷大。例如，当 $r = -2$ 时，各项变为：

$$
1 - 2 + 4 - 8 + 16 - \dots
$$

部分和不断波动，无法稳定下来。

在边界情形 $r = -1$ 时，行为有所不同：各项的绝对值保持不变，而不是不断增大：

$$
1 - 1 + 1 - 1 + \dots
$$

部分和在 $1$ 和 $0$ 之间交替，因此虽然有界，却仍然不会趋近某个单一值。和所有 $r \leq -1$ 的情形一样，该级数是不定的。

- - -

因此，我们可以得到如下结论：

+ 当 $|r| < 1$ 时，级数收敛；当求和下标从 $n = 0$ 开始时，其和为 $\dfrac{1}{1 - r}$，当下标从某个正值 $n > 0$ 开始时，其和为 $\dfrac{r^\alpha}{1 - r}$。
+ 当 $r \geq 1$ 时，级数发散到 $+\infty$。
+ 当 $r \leq -1$ 时，级数是不定的。

## 与幂级数的关系

将公比替换为变量 $x$，就把等比级数变成了一个[幂级数](../power-series/)：

$$
\sum_{n=0}^{\infty} x^n = \frac{1}{1 - x} \quad |x| < 1
$$

这是最简单的幂级数，其系数全部等于 $1$；条件 $|x| < 1$ 表明它的收敛半径等于 $1$。同一个恒等式还支持[比值判别法](../ratio-test-for-series-convergence/)和[根值判别法](../root-test-for-series-convergence/)，这两种方法通过将一般级数与等比级数比较来判断其收敛性。

## 示例

我们研究下面的等比级数并计算其和：

$$
\sum_{n=0}^{\infty} \frac{3^n + 4^n}{5^n}
$$

利用求和的线性性质，可以将其改写为两个等比级数之和：

$$
\sum_{n=0}^{\infty} \left( \frac{3}{5} \right)^n +  \sum_{n=0}^{\infty} \left( \frac{4}{5} \right)^n
$$

两个级数的公比都满足 $r < 1$，因此根据等比级数的性质，它们都收敛。等比级数的和为：

$$
\sum_{n=0}^{\infty} r^n = \frac{1}{1 - r}
$$

于是：

$$
\sum_{n=0}^{\infty} \left( \frac{3}{5} \right)^n = \frac{1}{1 - \frac{3}{5}} = \frac{1}{\frac{2}{5}} = \frac{5}{2}
$$

$$
\sum_{n=0}^{\infty} \left( \frac{4}{5} \right)^n = \frac{1}{1 - \frac{4}{5}} = \frac{1}{\frac{1}{5}} = 5
$$

将两个值相加，得到：

$$
\frac{5}{2} + 5 = \frac{15}{2}
$$

因此，该级数收敛，且其和为：

$$
\frac{15}{2}
$$

## 循环小数

带有无限循环模式的小数可以写成等比级数，从而表示为两个整数之比。考虑小数 $0.\overline{12} = 0.121212\dots$，其中数字块 $12$ 无限重复。它可以表示为：

$$
0.\overline{12} = \sum_{n=1}^{\infty} \frac{12}{100^n}
$$

这是一个首项 $a=\frac{12}{100}$、公比 $r=\frac{1}{100}$ 的等比级数。由于 $|r| < 1$，级数收敛；应用求和公式，得到：

$$
0.\overline{12} = \frac{\frac{12}{100}}{1 - \frac{1}{100}} = \frac{\frac{12}{100}}{\frac{99}{100}} = \frac{12}{99} = \frac{4}{33}
$$

同样的步骤可以将任意循环小数改写为分数，这说明每个这样的数都是[有理数](../rational-numbers/)。
