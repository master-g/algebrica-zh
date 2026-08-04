---
title: 极限的代数
title_en: Algebra of Limits
source: https://algebrica.org/algebra-of-limits/
license: CC BY-NC 4.0
tags:
  - algebra-of-limits
  - continuous-functions
  - indeterminate-forms
  - limits
  - remarkable-limits
translation:
  status: current
  source_hash: 4f3a3906ab37e57348bb9fe61a2fd401959cf88bfd47dd25c776380cf60cc4e5
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 引言

[极限](../limits/)的定义描述了函数 $f(x)$ 在点 $x_0$ 附近如何趋近某个值，但定义本身并不是实用的计算工具。在大多数问题中，我们遇到的是由[函数](../functions/)相加、相乘、相除、复合或幂运算得到的函数的极限。极限的代数汇集了让极限穿过这些运算的规则，而每一条规则都由定义推导而来。在本文中，$L$ 和 $M$ 表示满足下式的[实数](../real-numbers/)：

$$\lim_{x \to x_0} f(x) = L \qquad \lim_{x \to x_0} g(x) = M$$

## 和的极限

当两个函数在某点附近趋近有限值时，它们的和趋近这些值的和。如果 $f(x)$ 保持接近 $L$，而 $g(x)$ 保持接近 $M$，那么它们的和就保持接近 $L + M$：

$$\lim_{x \to x_0} \big( f(x) + g(x) \big) = L + M$$

证明直接来自定义：给定 $L + M$ 附近的任意容许误差，可以分别将 $f(x)$ 和 $g(x)$ 的偏差控制得足够小，使它们的和落在界内。这条规则把一个棘手的和转化为两个已知的极限。取

$$
\begin{align}
f(x) &= \frac{\sin x}{x} \\[6pt]
g(x) &= \frac{1 - \cos x}{x^2}
\end{align}
$$

这两个函数在原点均未定义，并考虑它们的和的极限：

$$\lim_{x \to 0} \big( f(x) + g(x) \big)$$

其中每一项都是一个标准的[重要极限](../remarkable-limits/)：

$$
\begin{align}
\lim_{x \to 0} \frac{\sin x}{x} &= 1 \\[6pt]
\lim_{x \to 0} \frac{1 - \cos x}{x^2} &= \frac{1}{2}
\end{align}
$$

应用和的法则可得：

$$\lim_{x \to 0} \big( f(x) + g(x) \big) = 1 + \frac{1}{2} = \frac{3}{2}$$

## 差的极限

同样的论证也适用于减法：如果两个函数分别趋近 $L$ 和 $M$，那么它们的差趋近 $L - M$：

$$\lim_{x \to x_0} \big( f(x) - g(x) \big) = L - M$$

证明与和的证明相同，因为 $f - g$ 就是 $f$ 与 $-g$ 的和。一个更微妙的情形是，两个商都趋近 $\frac{1}{2}$，因此仅凭这两个值无法确定它们的差：

$$
\begin{align}
f(x) &= \frac{1 - \cos x}{x^2} \\[6pt]
g(x) &= \frac{\sin^2 x}{2x^2}
\end{align}
$$

逐项来看，差的表达式

$$\lim_{x \to 0} \big( f(x) - g(x) \big)$$

在 $x = 0$ 处未定义，但两个极限都是已知的：

$$
\begin{align}
\lim_{x \to 0} \frac{1 - \cos x}{x^2} &= \frac{1}{2} \\[6pt]
\lim_{x \to 0} \frac{\sin^2 x}{2x^2} &= \frac{1}{2}
\end{align}
$$

第二个极限由[重要极限](../remarkable-limits/) $lim_{x \to 0}\frac{\sin x}{x}=1$ 得到。应用差的法则可得：

$$\lim_{x \to 0} \big( f(x) - g(x) \big) = \frac{1}{2} - \frac{1}{2} = 0$$

如果写成单个分式：

$$\frac{1 - \cos x}{x^2} - \frac{\sin^2 x}{2 x^2}$$

由于两项都趋近 $\frac{1}{2}$，只有相互抵消后才得到 $0$，因此这个结果并不明显。将差拆分为两个已知极限，可以避开这种抵消。

## 常数倍的极限

如果一个函数趋近 $L$，用常数缩放它会使极限也按同一个常数缩放。这是极限线性的最简单形式：对于任意实常数 $c$，

$$\lim_{x \to x_0} c f(x) = c L$$

常数不参与极限过程，只会重新缩放最终值。一个直接的例子是：

$$\lim_{x \to 0} 3 \frac{\ln(1 + x)}{x}$$

这个[对数](../logarithms/)商在 $x = 0$ 处未定义，但[重要极限](../remarkable-limits/)

$$\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$$

给出了未缩放商的极限。乘以常数后，

$$\lim_{x \to 0} 3 \cdot \frac{\ln(1 + x)}{x} = 3 \cdot 1 = 3$$

## 积的极限

当两个函数在某点附近趋近有限值时，它们的积趋近这些值的积。如果 $f(x)$ 接近 $L$，而 $g(x)$ 接近 $M$，那么它们的积就接近 $L \cdot M$：

$$\lim_{x \to x_0} \big( f(x) \cdot g(x) \big) = L \cdot M$$

两个因子在 $x_0$ 附近都保持有界，并且可以分别控制，因此它们的积保持接近 $L \cdot M$。取

$$
\begin{align}
f(x) &= \frac{e^x - 1}{x} \\[6pt]
g(x) &= \frac{\ln(1 + x)}{x}
\end{align}
$$

二者在原点均未定义，且都是[重要极限](../remarkable-limits/)：

$$
\begin{align}
\lim_{x \to 0} \frac{e^x - 1}{x} &= 1 \\[6pt]
\lim_{x \to 0} \frac{\ln(1 + x)}{x} &= 1
\end{align}
$$

根据积的法则：

$$\lim_{x \to 0} \frac{(e^x - 1) \ln(1 + x)}{x^2} = 1 \cdot 1 = 1$$

## 商的极限

对两个极限作除法时，分母必须满足一个不可避免的限制。如果 $g(x)$ 趋近非零值 $M \neq 0$，那么商在 $x_0$ 附近表现良好。如果分母趋近零，表达式可能是 $0/0$ 或 $\ell/0$ 类型的[未定式](../indeterminate-forms/)，需要单独分析。假设 $M \neq 0$：

$$\lim_{x \to x_0} \frac{f(x)}{g(x)} = \frac{L}{M}$$

由于 $g(x)$ 保持接近非零数 $M$，它在 $x_0$ 的某个邻域内与零保持正距离；这排除了除以零的可能，并使商按预期变化。取

$$
\begin{align}
f(x) &= \frac{e^x - 1}{x} \\[6pt]
g(x) &= \frac{x^2 + 1}{x + 1}
\end{align}
$$

并考虑 $x \to 0$ 时它们的商：

$$\lim_{x \to 0} \frac{f(x)}{g(x)}$$

分子在 $x = 0$ 处未定义，其极限来自[重要极限](../remarkable-limits/)：

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

分母在 $x = 0$ 处[连续](../continuous-functions/)，可以直接代入：

$$\lim_{x \to 0} \frac{x^2 + 1}{x + 1} = \frac{0 + 1}{0 + 1} = 1$$

由于分母的极限为 $M = 1 \neq 0$，商的法则适用，得到：

$$\lim_{x \to 0} \frac{f(x)}{g(x)} = \frac{1}{1} = 1$$

## 幂与多项式的极限

在积的法则中令 $f = g$ 并反复应用，就得到幂的极限。如果 $f(x)$ 趋近 $L$，那么对任意正整数 $n$：

$$\lim_{x \to x_0} \big( f(x) \big)^n = L^n$$

[多项式](../polynomials/)由和与积构成，因此继承这些法则，可以通过代入极限值求出其极限。对于一个熟悉的商的幂，

$$\lim_{x \to 0} \left( \frac{e^x - 1}{x} \right)^4$$

底数在原点处未定义，但它仍是一个[重要极限](../remarkable-limits/)：

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

幂的法则取 $n = 4$，于是：

$$\lim_{x \to 0} \left( \frac{e^x - 1}{x} \right)^4 = 1^4 = 1$$

无需展开四次幂；展开只会增加工作量，却没有任何收益。

## 复合函数的极限

最后一条规则涉及复合。对于两个函数 $\varphi$ 和 $f$，复合函数 $\varphi(f(x))$ 先作用 $f$，再将结果代入 $\varphi$。设：

$$\lim_{x \to x_0} f(x) = L$$

如果 $\varphi$ 在 $L$ 处[连续](../continuous-functions/)，极限就可以穿过外层函数：

$$\lim_{x \to x_0} \varphi \big( f(x) \big) = \varphi(L)$$

正是 $\varphi$ 的连续性使这一规则成立，因为它保证输入在 $L$ 附近的小变化只会导致输出的小变化。如果没有连续性，这条规则就会失效。

一个重要极限的平方根是一个简单例子。令

$$f(x) = \frac{\ln(1 + x)}{x} \qquad \varphi(t) = \sqrt{t}$$

并计算：

$$\lim_{x \to 0} \sqrt{\frac{\ln(1 + x)}{x}}$$

内层函数在 $x = 0$ 处未定义，但它有如下[重要极限](../remarkable-limits/)：

$$\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$$

由于 $\varphi(t) = \sqrt{t}$ 在 $t = 1$ 处连续，极限可以穿过平方根：

$$\lim_{x \to 0} \sqrt{\frac{\ln(1 + x)}{x}} = \sqrt{1} = 1$$

## 总结

下表记录了上文建立的各条法则。只要各个极限 $L$ 和 $M$ 存在，并且满足所述的附加条件，这些法则都成立；特别是，商的法则要求 $M \neq 0$，复合法则要求 $\varphi$ 在 $L$ 处连续。

[class="table-1"]

|                   |                                                                                |
| ----------------- | ------------------------------------------------------------------------------ |
| 和                | $\lim_{x \to x_0} \big( f(x) + g(x) \big) = L + M$                             |
| 差                | $\lim_{x \to x_0} \big( f(x) - g(x) \big) = L - M$                             |
| 常数倍             | $\lim_{x \to x_0} c f(x) = c L$                                                |
| 积                | $\lim_{x \to x_0} \big( f(x) \cdot g(x) \big) = L \cdot M$                     |
| 商                | $\lim_{x \to x_0} \dfrac{f(x)}{g(x)} = \dfrac{L}{M}, \quad M \neq 0$           |
| 幂                | $\lim_{x \to x_0} \big( f(x) \big)^n = L^n$                                    |
| 复合              | $\lim_{x \to x_0} \varphi(f(x)) = \varphi(L), \quad \varphi$ 在 $L$ 处连续 |
[/class]

当一个或多个基础极限为无穷，或者商的分母趋近零时，这些法则不能直接应用。

此时得到的表达式属于[未定式](../indeterminate-forms/)，需要使用因式分解、渐近比较、[洛必达法则](../hopital-rule/)，或结合[小 o 记号](../little-o-notation/)的[泰勒展开](../taylor-series/)等专门技巧。
