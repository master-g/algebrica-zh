---
title: 复合函数
title_en: Composite Functions
source: https://algebrica.org/composite-functions/
license: CC BY-NC 4.0
tags:
  - function-composition
  - functions
  - identity-function
  - inverse-function
translation:
  status: current
  source_hash: b1ebe7ce43edf3840a57391e8be683ff7f9dc9e047ddbe2f366d033d58b638d1
  translator: codex
  updated: "2026-08-02T00:00:00.000Z"
---
## 复合函数的定义与性质

复合函数将一个[函数](../functions/)作用于另一个函数的结果。给定两个函数 $f(x)$ 和 $g(x)$，复合函数先计算 $f$ 的输出，再将其作为 $g$ 的输入，记作：

$$
(g \circ f)(x) = g(f(x))
$$

下图展示了复合函数。集合 $A$ 中的输入 $x$ 首先映射为集合 $B$ 中的 $f(x)$，然后 $f(x)$ 再映射为集合 $C$ 中的 $g(f(x))$，从而得到复合函数 $g \circ f$。

![图 1](/assets/functions/svg/composite-functions-1.zh.svg)

更正式地，给定两个函数 $f(x)$ 和 $g(x)$，满足：

$$
\begin{align}
f \colon A \rightarrow B \\[6pt]
g \colon B \rightarrow C \\[6pt]
f(A) \subseteq B
\end{align}
$$

复合函数定义如下：

$$
g \circ f \colon x \in A \rightarrow g(f(x)) \in C
$$

复合函数 $g \circ f$ 将[定义域](../determining-the-domain-of-a-function/) $A$ 中的每个元素 $x$ 映射到 $g(f(x))$，前提是 $f$ 的像包含于 $g$ 的定义域中。条件 $f(A) \subseteq B$ 确保 $g$ 在 $f$ 的每个输出处都有定义。一般情况下并不要求这种包含关系。任意两个函数 $f$ 和 $g$ 都可以复合，而 $g \circ f$ 的定义域是 $f$ 的定义域中满足其在 $f$ 下的像落在 $g$ 的定义域内的输入集合：

$$
\{\ x \in \mathrm{dom}(f) \mid f(x) \in \mathrm{dom}(g)\ \}
$$

复合运算满足结合律。对于三个函数 $f$、$g$ 和 $h$，无论采用哪种分组方式，结果都相同：

$$
(h \circ g) \circ f = h \circ (g \circ f)
$$

因此，可以无歧义地将这个共同结果写成 $h \circ g \circ f$。

## 例 1

考虑下列函数：

$$
\begin{align}
f(x) &= 2x + 3 \\[6pt]
g(x) &= x^2
\end{align}
$$

我们要定义复合函数 $g \circ f$。先计算 $f(x)$：

$$
f(x) = 2x + 3
$$

现在将这个表达式代入 $g(x)$，即对其自变量求平方：

$$
g(f(x)) = g(2x + 3) = (2x + 3)^2
$$

因此，复合函数为：

$$
(g \circ f)(x) = (2x + 3)^2
$$

## 与逆函数复合

如果函数 $f$ 可逆，将它与其[逆函数](../inverse-function/) $f^{-1}$ 复合会得到恒等函数；而复合的顺序决定了每个等式成立的定义域：

$$
\begin{align}
f^{-1}(f(x)) &= x \\[6pt]
f(f^{-1}(y)) &= y
\end{align}
$$

第一个等式对 $f$ 定义域中的每个 $x$ 成立，第二个等式对其像集中的每个 $y$ 成立。可逆性要求 $f$ 在其定义域上既是单射又是满射。当两个函数之间的复合有定义时，也就是第一个函数的输出落在第二个函数的定义域内时，可以写成：

$$
(g \circ f)(x) = g(f(x)) \quad \land \quad (f \circ g)(x) = f(g(x))
$$

函数复合不满足交换律。一般而言，复合顺序会影响结果，因此有：

$$
g \circ f \neq f \circ g
$$

## 例 2

下面用一个简单例子说明函数复合不满足交换律，即一般有 $g \circ f \neq f \circ g$。考虑两个函数：

$$
\begin{align}
f(x) &= e^x \\[6pt]
g(x) &= x + 1
\end{align}
$$

先计算 $f \circ g$，也就是将 $f$ 作用于 $g$ 的输出：

$$
(f \circ g)(x) = f(g(x)) = f(x + 1) = e^{x + 1}
$$

再计算 $g \circ f$，也就是将 $g$ 作用于 $f$ 的输出：

$$
(g \circ f)(x) = g(f(x)) = g(e^x) = e^x + 1
$$

比较两个结果可得：

+ $(f \circ g)(x) = e^{x + 1} = e \cdot e^x$
+ $(g \circ f)(x) = e^x + 1$

这两个表达式不相等，从而证明函数复合不满足交换律。
