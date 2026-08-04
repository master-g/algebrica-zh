---
title: 求导法则
title_en: Differentiation Rules
source: https://algebrica.org/differentiation-rules/
license: CC BY-NC 4.0
tags:
  - derivatives
  - differentiation-rules
  - linearity
  - product-rule
  - quotient-rule
  - sum-rule
translation:
  status: current
  source_hash: 413d2748ab77a716fbe1edafc1a73d5c9d42ea2aab2d184597584bdb0acb57e3
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 引言

原则上，可以直接从[差商](../difference-quotient/)的极限计算[导数](../derivatives/)，但除了最简单的函数之外，这种做法都不切实际。求导法则描述了导数在对[函数](../functions/)进行基本运算时的行为，也就是乘以常数、相加、相乘和相除时的规律。结合[基本导数](../derivatives/)表中列出的初等函数导数，这些法则使我们能够计算实际中大多数函数的导数，而无需回到定义。

在本文中，$f$ 和 $g$ 始终表示在所考察的点 $x$ 处可导的函数。下面陈述的每条法则，都适用于满足这一假设的任意点。

## 导数的线性性

前两条法则表达了求导运算的线性性。函数常数倍的导数等于该常数乘以函数的导数：

$$D[c \cdot f(x)] = c \cdot f'(x)$$

两个函数之和的导数等于两个导数之和：

$$D[f(x) + g(x)] = f'(x) + g'(x)$$

差的法则可以将上述两条陈述与 $c = -1$ 结合得到：

$$D[f(x) - g(x)] = f'(x) - g'(x)$$

综合来看，这些性质意味着，可导函数线性组合的导数等于其导数的同一线性组合。这正是多项式可以逐项求导的原因。

## 线性性的证明

常数倍法则直接由导数定义和常数因子可以移出[极限](../limits/)这一事实得到：

$$
\begin{align}
D[c \cdot f(x)] &= \lim_{h \to 0} \frac{c f(x+h) - c f(x)}{h} \\[6pt]
&= c \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} \\[6pt]
&= c \cdot f'(x)
\end{align}
$$

对于和法则，我们写出 $f + g$ 的差商，并将它拆成分别对应两个函数的两个分式：

$$
\begin{align}
D[f(x) + g(x)] &= \lim_{h \to 0} \frac{[f(x+h) + g(x+h)] - [f(x) + g(x)]}{h} \\[6pt]
&= \lim_{h \to 0} \left( \frac{f(x+h) - f(x)}{h} + \frac{g(x+h) - g(x)}{h} \right) \\[6pt]
&= f'(x) + g'(x)
\end{align}
$$

最后一个等号使用了“和的极限等于极限之和”的法则；由于假设两个极限都存在，该法则可以应用。

## 乘积法则

乘积的导数并不是两个导数的乘积。正确的表达式由乘积法则给出，它也称为莱布尼茨法则：

$$D[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)$$

换句话说，乘积的导数需要每次对一个因子求导，再将两项贡献相加。这个公式的结构可以推广到两个以上因子的乘积：每一项只对一个因子求导，其余因子保持不变。

## 乘积法则的证明

从乘积 $f \cdot g$ 的差商出发：

$$D[f(x) \cdot g(x)] = \lim_{h \to 0} \frac{f(x+h) g(x+h) - f(x) g(x)}{h}$$

分子不能直接因式分解。因此，我们加上并减去项 $f(x+h) g(x)$；这一操作不会改变原式的值：

$$f(x+h) g(x+h) - f(x+h) g(x) + f(x+h) g(x) - f(x) g(x)$$

将这四项两两分组，第一组以 $f(x+h)$ 为公因子，第二组以 $g(x)$ 为公因子：

$$f(x+h) [g(x+h) - g(x)] + g(x) [f(x+h) - f(x)]$$

除以 $h$ 并取极限后，差商分成两部分：

$$
\begin{align}
D[f(x) \cdot g(x)] &= \lim_{h \to 0} \left( f(x+h) \frac{g(x+h) - g(x)}{h} + g(x) \frac{f(x+h) - f(x)}{h} \right) \\[6pt]
&= f(x) \cdot g'(x) + g(x) \cdot f'(x)
\end{align}
$$

由于函数在 $x$ 处可导就必然在该点[连续](../continuous-functions/)，当 $h \to 0$ 时，因子 $f(x+h)$ 趋近于 $f(x)$。另外两个商分别趋近于 $g'(x)$ 和 $f'(x)$，于是得到所述公式。

## 商法则

只要分母不为零，两个函数的商的导数由商法则给出：

$$D\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g^2(x)}$$

分子中两项的顺序很重要，因为减法不具有对称性。分母是原分母的平方，整个表达式只在 $g(x) \neq 0$ 的地方有定义。

## 商法则的证明

推导商法则的一种直接方法，是先建立 $1/g$ 的倒数法则，再将它与乘积法则结合。从定义出发，$1/g$ 的差商为：

$$D\left[\frac{1}{g(x)}\right] = \lim_{h \to 0} \frac{1}{h} \left( \frac{1}{g(x+h)} - \frac{1}{g(x)} \right)$$

将括号中的两个分式通分，得到：

$$
\begin{align}
D\left[\frac{1}{g(x)}\right] &= \lim_{h \to 0} \frac{1}{h} \cdot \frac{g(x) - g(x+h)}{g(x+h) g(x)} \\[6pt]
&= \lim_{h \to 0} \left( -\frac{g(x+h) - g(x)}{h} \cdot \frac{1}{g(x+h) g(x)} \right) \\[6pt]
&= -\frac{g'(x)}{g^2(x)}
\end{align}
$$

在最后一步中，第一个因子根据定义趋近于 $g'(x)$，而 $g(x+h)$ 根据连续性趋近于 $g(x)$，因此第二个因子趋近于 $1/g^2(x)$。这就建立了倒数法则：

$$D\left[\frac{1}{g(x)}\right] = -\frac{g'(x)}{g^2(x)}$$

现在可以将商 $f/g$ 写成 $f$ 与 $1/g$ 的乘积。先应用乘积法则，再应用倒数法则，得到：

$$
\begin{align}
D\left[\frac{f(x)}{g(x)}\right] &= D\left[ f(x) \cdot \frac{1}{g(x)} \right] \\[6pt]
&= f'(x) \cdot \frac{1}{g(x)} + f(x) \cdot \left( -\frac{g'(x)}{g^2(x)} \right) \\[6pt]
&= \frac{f'(x)}{g(x)} - \frac{f(x) g'(x)}{g^2(x)} \\[6pt]
&= \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g^2(x)}
\end{align}
$$

最后一行通分，得到商法则的标准形式。

## 示例 1

考虑由[幂函数](../powers/)和[对数函数](../logarithms/)相乘得到的函数：

$$f(x) = x^3 \ln(x)$$

两个因子分别是 $x^3$（导数为 $3x^2$）和 $\ln(x)$（导数为 $1/x$），这些导数都取自[基本导数](../derivatives/)表。应用乘积法则，对两个因子分别求导：

$$
\begin{align}
f'(x) &= 3x^2 \cdot \ln(x) + x^3 \cdot \frac{1}{x} \\[6pt]
&= 3x^2 \ln(x) + x^2
\end{align}
$$

提出公因子 $x^2$，导数可写成紧凑形式：

$$f'(x) = x^2 \left( 3\ln(x) + 1 \right)$$

## 示例 2

考虑指数函数与二次多项式之商：

$$f(x) = \frac{e^x}{x^2 + 1}$$

分子的导数为 $e^x$，分母的导数为 $2x$。应用商法则，得到：

$$
\begin{align}
f'(x) &= \frac{e^x (x^2 + 1) - e^x \cdot 2x}{(x^2 + 1)^2} \\[6pt]
&= \frac{e^x (x^2 - 2x + 1)}{(x^2 + 1)^2}
\end{align}
$$

分子包含完全平方 $x^2 - 2x + 1 = (x-1)^2$，因此导数可以写成：

$$f'(x) = \frac{e^x (x - 1)^2}{(x^2 + 1)^2}$$

由于分子永不为负，这说明 $f$ 在整个实轴上递增，并且在 $x = 1$ 处有水平切线。

## 复合函数与链式法则

这里介绍的法则涵盖乘积、商和线性组合，但不涵盖函数复合。当一个函数通过将一个表达式代入另一个表达式构造出来时，例如 $y = f(g(x))$，它的导数由另一个独立结果——[链式法则](../chain-rule/)——决定。实际计算中，求导法则与链式法则结合使用：前者处理表达式的代数结构，后者处理一个函数嵌套在另一个函数中的情形。
