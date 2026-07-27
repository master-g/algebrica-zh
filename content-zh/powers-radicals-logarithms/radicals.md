---
title: 根式
title_en: Radicals
source: https://algebrica.org/radicals/
license: CC BY-NC 4.0
tags:
  - irrational-numbers
  - nth-root
  - radicals
  - rational-exponent
translation:
  status: current
  source_hash: fde9c2b4a5e9b4bbad612f547ae13641c8780a4d7907d7d0c3ce537f452b3d38
  translator: omp
  updated: "2026-07-23T08:19:04.773Z"
---
## 根式的定义

根式源于求解形如 $x^n = a$ 的[方程](../equations/)，其中 $n \in \mathbb{N}$、$n \ge 2$、$a \in \mathbb{R}$。在此背景下，一个数的 $n$ 次根是其 $n$ 次[幂](../powers/)等于该数的那个值。

当 $a \ge 0$ 时，$a$ 的实数主 $n$ 次根是唯一的非负实数 $b$，使得 $b^n = a$。该值记作 $\sqrt[n]{a}$。其定义性质为：$\sqrt[n]{a} = b$ 当且仅当 $b^n = a$ 且 $b \ge 0$。条件 $b \ge 0$ 在 $n$ 为偶数时保证了实数情形下的唯一性。

值 $a$ 称为被开方数，而[整数](../integers/) $n$ 称为根指数。该记号同时指明了开方运算及其次数。

根的性质取决于指数是偶数还是奇数。

+ 对于偶数 $n$，方程 $x^n = a$ 仅当 $a \ge 0$ 时才有实数解。此时主根 $\sqrt[n]{a}$ 定义为非负解。
+ 对于奇数 $n$，方程 $x^n = a$ 对每个实数 $a$ 恰有一个实数解，因此函数 $a \mapsto \sqrt[n]{a}$ 对所有 $a \in \mathbb{R}$ 都有定义。

> 例如，由于 $2^3 = 8$，可得 $\sqrt[3]{8} = 2$，因为 2 是立方等于 8 的唯一实数。更一般地，开 $n$ 次方是求数的 $n$ 次幂的逆运算。因此，解方程 $x^n = a$ 等价于对 $a$ 开 $n$ 次方。

- - -

像 $\sqrt{2}$、$\sqrt{3}$ 和 $\sqrt{5}$ 这样的根式属于[无理数](../types-of-numbers/)，因为它们无法精确地表示为两个整数之比。

![IMG. 1](/assets/powers-radicals-logarithms/svg/radicals-1.svg)

它们的小数展开是无限且不循环的。没有任何有理数的平方等于 2、3 或 5。尽管如此，这些值在实数轴上占据着精确的位置，穿插在有理数之间，彼此之间没有空隙。

形式上，若 $a \in \mathbb{N}$ 不是完全平方数，则 $\sqrt{a} \notin \mathbb{Q}$。

> 平方根并不总是无理数。完全平方数（如 $4$ 或 $9$）的平方根是有理数。相比之下，非完全平方数（如 $2$ 或 $5$）的平方根是无理数，因为它不能表示为分数。

## 恒等式 $\sqrt{a^2} = |a|$

关于 $\sqrt{a^2}$ 的化简，常常引起混淆。人们可能会很自然地写出 $\sqrt{a^2} = a$，但每当 $a$ 为负时，这个等式就不成立。正确的等式为：

$$
\sqrt{a^2} = |a| \qquad \forall a \in \mathbb{R}
$$

原因在于主平方根的定义。当指数为 $2$ 时，符号 $\sqrt{\cdot}$ 表示唯一的、平方等于被开方数的非负实数。由于 $a^2$ 总是非负的，$\sqrt{a^2}$ 对每个实数 $a$ 都有定义，但其结果本身必须是非负的。

+ 当 $a \ge 0$ 时，值 $a$ 已经满足这个条件。
+ 当 $a < 0$ 时，平方等于 $a^2$ 的非负数是 $-a$。
+ [绝对值](../absolute-value/) 是在这两种情况下都成立的一个统一表达式。

> 只要指数为偶数，就会出现同样的现象。对于 $n \ge 1$ 下的 $n \in \mathbb{N}$，等式 $\sqrt[2n]{a^{2n}} = |a|$ 对每个 $a \in \mathbb{R}$ 都成立。当指数为奇数时，这一限制便不复存在，于是对每个 $a \in \mathbb{R}$ 都有 $\sqrt[2n+1]{a^{2n+1}} = a$，因为函数 $x \mapsto x^{2n+1}$ 在实数轴上是双射的。

- - -

考虑 $a = -3$ 的情形。$-3$ 的平方是 $9$，而 $9$ 的主平方根是 $3$。因此：

$$
\sqrt{(-3)^2} = \sqrt{9} = 3 = |-3|
$$

写成 $\sqrt{(-3)^2} = -3$ 会违反主平方根非负的约定。因此，绝对值是定义本身的结构性要求。

这个等式也说明了如何处理形如 $\sqrt{x^2 - 2xy + y^2}$ 的表达式。将被开方数识别为完全平方数 $(x-y)^2$ 后，正确的化简为：

$$
\sqrt{x^2-2xy+y^2} = \sqrt{(x-y)^2} = |x-y|
$$

不含绝对值的表达式 $x-y$，只有在事先已知 $x-y$ 的符号时才正确。省略绝对值是涉及偶指数根式的代数运算中最常见的错误来源之一。

## 为什么 $\sqrt{2}$ 是无理数？

要证明 $\sqrt{2}$ 不是有理数，可采用反证法。假设 $\sqrt{2}$ 是有理数。那么它可以表示为两个整数的最简形式分数，其中 $a, b \in \mathbb{Z}$、$b \neq 0$、$\gcd(a,b) = 1$：

$$ \sqrt{2} = \frac{a}{b} $$

> $\gcd(a,b)$ 表示 $a$ 与 $b$ 的最大公约数，即同时整除这两个数的最大正整数。条件 $\gcd(a,b) = 1$ 意味着 $a$ 与 $b$ 互素。换言之，它们除 1 之外没有其他公因数。因此，分数 $a/b$ 已经是最简形式。

- - -

两边平方：
$$
2 = \frac{a^2}{b^2} \to a^2 = 2b^2
$$

这意味着 $a^2$ 是偶数，从而 $a$ 也是偶数。于是可以写成 $a = 2k$，其中 $k$ 是某个整数。代回得到：

$$
(2k)^2 = 2b^2 \Rightarrow 4k^2 = 2b^2 \Rightarrow b^2 = 2k^2
$$

这意味着 $b^2$ 也是偶数，因此 $b$ 也是偶数。但如果 $a$ 与 $b$ 都是偶数，它们就有公因数 $2$，这与最初假设 $a/b$ 已是最简形式相矛盾。因此 $\sqrt{2}$ 是无理数。

## 有理指数的幂

当指数为有理数时，根式与[幂](../powers/)之间的联系变得明确。对于 $a \in \mathbb{R}^+$ 与 $n \in \mathbb{N}$，当 $n \ge 1$ 时，$a$ 的 $n$ 次方根可以写成：

$$
\sqrt[n]{a} = a^{\frac{1}{n}}
$$

更一般地，对于 $m \in \mathbb{Z}$，被开方数提升到整数次幂的根式对应于有理指数 $m/n$ 的幂：

$$
\sqrt[n]{a^m} = a^{\frac{m}{n}}
$$

由于根式是有理指数的幂，所有标准的指数运算规则都适用于它们，无需修改。对于 $a, b \in \mathbb{R}^+$ 与 $\frac{m}{n}, \frac{p}{q} \in \mathbb{Q}$：

$$
\begin{align}
a^{\frac{m}{n}} \cdot a^{\frac{p}{q}} &= a^{\frac{m}{n}+\frac{p}{q}} \\[6pt]
a^{\frac{m}{n}}\div {a^{\frac{p}{q}}} &= a^{\frac{m}{n}-\frac{p}{q}} \\[6pt]
\left(a^{\frac{m}{n}}\right)^{\frac{p}{q}} &= a^{\frac{m}{n} \cdot \frac{p}{q}}
\end{align}
$$

例如：

$$\sqrt{a^3} = a^{\frac{3}{2}} \qquad \sqrt[3]{a^2} = a^{\frac{2}{3}} \qquad \sqrt[4]{a} = a^{\frac{1}{4}}$$

## 性质

以下恒等式描述了如何对根式进行运算。每条性质都连同被开方数和根指数的条件一起给出，这些条件确保表达式在[实数](../real-numbers/)内有定义。这些条件特别取决于根指数是偶数还是奇数。

对于 $a \ge 0$、$n \in \mathbb{N}$（其中 $n \ge 1$）以及 $m \in \mathbb{Z}$，每个根式都可以写成具有有理指数的幂：

$$
\sqrt[n]{a^m} = a^{\frac{m}{n}}
$$

若 $n$ 为偶数，条件 $a \ge 0$ 是必要的，以确保表达式保持在实数范围内。

- - -

对于 $n \in \mathbb{N}$（其中 $n \ge 2$），$n$ 次方根对乘法和除法满足分配律：

$$
\sqrt[n]{ab} = \sqrt[n]{a}\sqrt[n]{b}
$$

$$
\frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}}
$$

若 $n$ 为偶数，乘积法则要求 $a \ge 0$ 和 $b \ge 0$，商法则要求 $a \ge 0$ 和 $b > 0$，以确保表达式保持在实数范围内。若 $n$ 为奇数，两个恒等式对所有允许的实数值都成立：乘积的情形下任意 $a,\ b \in \mathbb{R}$ 均可，商的情形下任意 $a \in \mathbb{R}$、$b \in \mathbb{R} \setminus \{0\}$ 均可。

- - -

对于 $a \ge 0$、$n \in \mathbb{N}$（其中 $n \ge 1$）以及 $m \in \mathbb{Z}$，将根式提升到整数幂，等价于先将被开方数提升到该幂再开方：

$$
\left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m}
$$

若 $n$ 为偶数，需要满足条件 $a \ge 0$ 以保持在实数范围内。

- - -

设 $k \in \mathbb{N}$（其中 $k \ge 1$）。将根指数和被开方数的指数同时乘以同一个正整数 $k$，根式的值不变：

$$
\sqrt[n]{a^m} = \sqrt[nk]{a^{mk}}
$$

此恒等式将根式的根指数化为最简形式。例如，将两个指数同时除以 $2$，可得以下化简：

$$\sqrt[4]{a^2} = \sqrt[2]{a} = \sqrt{a}$$

若 $n$ 为偶数，条件 $a \ge 0$ 适用。

- - -

对于 $a \ge 0$ 和 $m, n \in \mathbb{N}$（其中 $m, n \ge 1$），嵌套根式可以改写为一个根指数为两个根指数之积的单一根式：

$$
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}
$$

若 $m$ 或 $n$ 为偶数，条件 $a \ge 0$ 是必要的，以确保表达式保持在实数范围内。若 $m$ 和 $n$ 均为奇数，此恒等式对所有 $a \in \mathbb{R}$ 都成立。

- - -

形如 $\sqrt[n]{a^m}$ 的根式，当 $m \ge n$ 时可以化简：将指数写成 $m = nq+r$，其中 $q$ 是 $m$ 除以 $n$ 的商，$0 \le r < n$ 是余数。这样我们就可以从根式中提取 $a^q$：

$$
\sqrt[n]{a^m} = \sqrt[n]{a^{nq+r}} = a^q \sqrt[n]{a^r}
$$

例如，$\sqrt{a^5} = \sqrt{a^4 \cdot a} = a^2\sqrt{a}$，因为 $5 = 2 \cdot 2 + 1$。类似地，$\sqrt[3]{a^7} = a^2\sqrt[3]{a}$，因为 $7 = 3 \cdot 2 + 1$。当根指数为偶数时，需要满足条件 $a \ge 0$ 以使表达式保持在实数范围内。

- - -

如果两个根式具有相同的根指数和相同的被开方数，则称它们为同类根式。同类根式可以通过合并系数来进行加减，就像[多项式](../polynomials/)中的同类项一样：

$$
p \sqrt[n]{a}+q \sqrt[n]{a} = (p+q) \sqrt[n]{a}
$$

例如：

$$
\begin{align}
3\sqrt{2}+5\sqrt{2} &= 8\sqrt{2} \\[6pt]
7\sqrt[3]{5}-2\sqrt[3]{5} &= 5\sqrt[3]{5}
\end{align}
$$

根指数或被开方数不同的根式不是同类根式，不能用这种方式合并。然而，有时先对根式进行化简会发现它们实际上是同类根式。例如：

$$ \sqrt{12}+\sqrt{3} = 2\sqrt{3}+\sqrt{3} = 3\sqrt{3} $$

因为：

$$\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$$

## 例 1

化简下列表达式，并将结果写成根式形式：

$$
\frac{\sqrt{a}}{\sqrt[3]{a}}
$$

先将每个根式转换成带有理指数的表达式：

$$
\sqrt{a} = a^{\frac{1}{2}} \qquad \sqrt[3]{a} = a^{\frac{1}{3}}
$$

现在应用[指数](../powers/)的商法则：

$$
\frac{a^{\frac{1}{2}}}{a^{\frac{1}{3}}} = a^{\frac{1}{2}-\frac{1}{3}} = a^{\frac{1}{6}}
$$

因此，得到：

$$
\frac{\sqrt{a}}{\sqrt[3]{a}} = \sqrt[6]{a}
$$

## 分母有理化

当分母中含有根式时，常将其改写为分母不含根式的等价形式。这一过程称为分母有理化，做法是将分子和分母同时乘以一个适当选取的表达式，使分数的值保持不变。当分母是形如 $\sqrt[n]{a^m}$ 的单个根式时，目标是使根式内 $a$ 的指数成为 $n$ 的倍数。为此，将分子和分母同时乘以 $\sqrt[n]{a^{n-m}}$，可使分母变为整数：

$$
\frac{1}{\sqrt[n]{a^m}} \cdot \frac{\sqrt[n]{a^{n-m}}}{\sqrt[n]{a^{n-m}}} = \frac{\sqrt[n]{a^{n-m}}}{\sqrt[n]{a^n}} = \frac{\sqrt[n]{a^{n-m}}}{a}
$$

最常见的情况是 $n = 2$ 且 $m = 1$，此时分母是一个平方根：

$$
\frac{1}{\sqrt{a}} \cdot \frac{\sqrt{a}}{\sqrt{a}} = \frac{\sqrt{a}}{a}
$$

当分母形如 $\sqrt{a}+\sqrt{b}$ 或 $\sqrt{a}-\sqrt{b}$ 时，乘以共轭表达式并应用[平方差](../notable-products/)恒等式 $(x+y)(x-y) = x^2-y^2$，即可消去根式：

$$
\frac{1}{\sqrt{a}+\sqrt{b}} \cdot \frac{\sqrt{a}-\sqrt{b}}{\sqrt{a}-\sqrt{b}} = \frac{\sqrt{a}-\sqrt{b}}{a-b} \qquad a \ne b \quad a,b \ge 0
$$

例如：

$$
\begin{align}
\frac{1}{\sqrt{3}+\sqrt{2}} &= \frac{\sqrt{3}-\sqrt{2}}{(\sqrt{3})^2-(\sqrt{2})^2} \\[6pt]
&= \frac{\sqrt{3}-\sqrt{2}}{3-2} \\[6pt]
&= \sqrt{3}-\sqrt{2}
\end{align}
$$

## 例 2

当有理化能简化表达式时，也可以对分子进行有理化。考虑下列出现在[导数](../derivatives/)定义中的[极限](../limits/)：

$$
\lim_{h \to 0} \frac{\sqrt{x+h}-\sqrt{x}}{h}
$$

直接代入 $h = 0$ 会得到[未定式](../indeterminate-forms/) $\frac{0}{0}$。为解决这一问题，我们将分子和分母同时乘以分子的共轭表达式：

$$
\begin{align}
\frac{\sqrt{x+h}-\sqrt{x}}{h} &= \frac{\sqrt{x+h}-\sqrt{x}}{h} \cdot \frac{\sqrt{x+h}+\sqrt{x}}{\sqrt{x+h}+\sqrt{x}} \\[6pt]
&= \frac{(x+h)-x}{h\left(\sqrt{x+h}+\sqrt{x}\right)} \\[6pt]
&= \frac{h}{h\left(\sqrt{x+h}+\sqrt{x}\right)} \\[6pt]
&= \frac{1}{\sqrt{x+h}+\sqrt{x}}
\end{align}
$$

现在令 $h \to 0$，取极限：

$$
\lim_{h \to 0} \frac{1}{\sqrt{x+h}+\sqrt{x}} = \frac{1}{2\sqrt{x}}
$$

> 这一结果即为 $\sqrt{x}$ 的导数，此处无需用到一般的幂运算律即可得到。

## 线段 $\sqrt{a}$ 的几何作图

平方根 $\sqrt{a}$ 可以仅用圆规和直尺作为一条线段作出。给定一条长度为 $a$ 的线段，步骤如下：

+ 作一条长度为 $a$ 的线段 $AB$。
+ 将该线段向左延长 1 个单位。取点 $C$ 使得 $CA = 1$。于是 $CB = a + 1$。
+ 以 $CB$ 为直径作一个半圆。
+ 过点 $A$ 作 $CB$ 的垂线，与半圆相交于点 $D$。
+ 则线段 $AD$ 的长度为 $\sqrt{a}$。

![IMG. 2](/assets/powers-radicals-logarithms/svg/radicals-2.svg)

在直角三角形 $\triangle DAB$ 中，线段 $AD$ 是从点 $A$ 向斜边 $CB$ 所作的高。根据直角三角形的欧几里得定理，该高是它将斜边分成的两条线段的[几何平均数](../geometric-mean/)。即：

$$\frac{AC}{AD} = \frac{AD}{AB}$$

两边同时乘以 $AD$，得到：

$$AD^2 = AB \cdot AC$$

由于 $AC = 1$ 且 $AB = a$，可得：

$$
AD^2 = a \cdot 1 = a
\quad \Rightarrow \quad
AD = \sqrt{a}
$$

至此作图完成：线段 $AD$ 的长度为 $\sqrt{a}$。
