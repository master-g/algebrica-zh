---
title: 绝对值
title_en: Absolute Value
source: https://algebrica.org/absolute-value/
license: CC BY-NC 4.0
tags:
  - absolute-value
  - distance
  - even-function
  - inequalities
  - norm
  - real-line
  - reverse-triangle-inequality
  - sign-function
  - triangle-inequality
translation:
  status: current
  source_hash: 77834938c2b9b6c9ab0d656c9ca212ff14b989f5ed38c610bc6cfc4ba387a272
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

[实数](../real-numbers/)的绝对值是它在数轴上到零的距离，因此总是非负的。绝对值记作 $|x|$，定义为：

$$
|x| =
\begin{cases}
+x & x \geq 0 \\[6pt]
-x & x < 0
\end{cases}
\quad
\forall \, x \in \mathbb{R}
$$

例如，$|5|=5$，而 $|-6|=-(-6)=6$。作为函数，$f(x):=|x|$ 的[定义域](../determining-the-domain-of-a-function/)为 $\mathbb{R}$，值域为 $f(\mathbb{R})=[0,+\infty)$。

- - -

从几何上看，负数与其正的相反数具有相同的绝对值，而非负数保持不变。

![IMG. 1](/assets/sets-and-numbers/svg/real-numbers-1.svg)

更一般地，$|x-a|$ 是数轴上 $x$ 与 $a$ 之间的距离。距离的对称性给出：

$$
|x-a| = |a-x|
$$

例如，$3$ 与 $7$ 之间的距离是 $|3-7|=4$。交换两个点后，$|7-3|=4$，得到相同的值。

- - -

符号函数还给出了绝对值的另一种公式：

$$
|x| = x \cdot \mathrm{sgn}(x)
$$

[符号函数](../sign-function/)定义为：

$$
\mathrm{sgn}(x) =
\begin{cases}
-1 & x < 0 \\[6pt]
0 & x = 0 \\[6pt]
1 & x > 0
\end{cases}
$$

在每种情形下，这个乘积都是非负的：

+ 若 $x > 0$，则 $\mathrm{sgn}(x) = 1$，且 $x \cdot \mathrm{sgn}(x) = x$。
+ 若 $x < 0$，则 $\mathrm{sgn}(x) = -1$，且 $x \cdot \mathrm{sgn}(x) = -x$。
+ 若 $x = 0$，则 $\mathrm{sgn}(x) = 0$，且 $x \cdot \mathrm{sgn}(x) = 0$。

## 性质

一个实数及其相反数到原点的距离相同，因此它们具有相同的绝对值。例如，$|3|=|-3|=3$。

$$
|x| = |-x| \quad \forall \, x \in \mathbb{R}
$$

- - -

对每个实数 $x$，$x$ 与 $-x$ 中的一个等于 $|x|$，另一个等于 $-|x|$。因此，$x$ 位于 $-|x|$ 与 $|x|$ 之间：

$$
-|x| \leq x \leq |x| \quad \forall \, x \in \mathbb{R}
$$

等价地，绝对值是 $x$ 与 $-x$ 中较大的一个：

$$
|x| = \max\{x,-x\} \quad \forall \, x \in \mathbb{R}
$$

- - -

乘积的绝对值等于绝对值的乘积。重复应用这一性质可得，对每个有限乘积都有 $|x_1 \cdot x_2 \cdots x_n|=|x_1| \cdot |x_2| \cdots |x_n|$。特别地，令 $y=x$，得到 $|x^2|=|x|^2=x^2$。

$$
|x \cdot y| = |x| \cdot |y| \quad \forall \, x, y \in \mathbb{R}
$$

- - -

两个实数的绝对值相等，当且仅当它们相等或互为相反数。从几何上看，$|x|=|y|$ 表明 $x$ 与 $y$ 到原点的距离相同，而这恰好在 $x=y$ 或 $x=-y$ 时成立。

$$
|x| = |y| \iff x = \pm y \quad \forall \, x, y \in \mathbb{R}
$$

求解[绝对值方程](../absolute-value-equations/)时会用到这一等价关系。

- - -

平方函数在非负实数上严格递增。由于 $|x|$ 和 $|y|$ 非负，且它们的平方分别为 $x^2$ 和 $y^2$，比较绝对值等价于比较平方。

$$
|x| \leq |y| \iff x^2 \leq y^2 \quad \forall \, x, y \in \mathbb{R}
$$

- - -

当分母非零时，商的绝对值等于绝对值的商。对于 $y \ne 0$，将乘积性质应用于 $yy^{-1}=1$，得到 $|y^{-1}|=|y|^{-1}$。因此，商的公式为：

$$
\left| \frac{x}{y} \right| = \frac{|x|}{|y|} \quad \forall \, x, y \in \mathbb{R},\ y \ne 0
$$

- - -

$x^2$ 的[主平方根](../radicals/)是 $x$ 的绝对值，而不是 $x$ 本身。由于根号表示非负的根，只有在 $x \geq 0$ 时才有 $\sqrt{x^2}=x$，而在 $x<0$ 时有 $\sqrt{x^2}=-x$。因此，等式 $\sqrt{x^2}=x$ 只对非负的 $x$ 成立。

$$
\sqrt{x^2} = |x| \quad \forall \, x \in \mathbb{R}
$$

## 三角不等式

对所有 $a,b \in \mathbb{R}$，绝对值都满足三角不等式：

$$
|a + b| \le |a| + |b|
$$

$a+b$ 到零的距离至多等于 $a$ 和 $b$ 到零的距离之和。当 $ab \geq 0$ 时等号成立；当 $ab<0$ 时，抵消作用使不等式严格成立。

- - -

为了证明这个不等式，考虑 $a$ 与 $b$ 的符号组合：

$$
\begin{align}
(1)\quad & a \ge 0, \quad b \ge 0 \\[6pt]
(2)\quad & a \le 0, \quad b \le 0 \\[6pt]
(3)\quad & a \ge 0, \quad b \le 0 \\[6pt]
(4)\quad & a \le 0, \quad b \ge 0
\end{align}
$$

在情形 $(1)$ 中，$a+b \geq 0$：

$$
|a + b| = a + b = |a| + |b|
$$

在情形 $(2)$ 中，$a+b \leq 0$：

$$
|a + b| = -(a + b) = (-a) + (-b) = |a| + |b|
$$

在情形 $(3)$ 中，由于 $a \geq 0$ 且 $b \leq 0$，有 $|a|=a$ 和 $|b|=-b$，因此 $|a|+|b|=a-b$。我们需要证明 $|a+b|\leq a-b$：

+ 当 $a+b \geq 0$ 时，$|a+b|=a+b\leq a-b$，因为 $b\leq 0$。
+ 当 $a+b \leq 0$ 时，$|a+b|=-(a+b)=-a-b\leq a-b$，这等价于 $-a\leq a$，而该条件由 $a\geq 0$ 保证。

情形 $(4)$ 可由交换 $a$ 与 $b$，应用情形 $(3)$ 得到。

- - -

反三角不等式由三角不等式推出。对所有 $a,b \in \mathbb{R}$，有：

$$
\bigl||a| - |b|\bigr| \le |a - b|
$$

$a$ 与 $b$ 到零的距离之差的绝对值，至多等于 $a$ 与 $b$ 之间的距离。将 $a=(a-b)+b$ 代入三角不等式：

$$
|a| = |(a - b) + b| \le |a - b| + |b|
$$

这给出 $|a|-|b|\leq|a-b|$。交换 $a$ 与 $b$ 后，由对称性得到 $|b|-|a|\leq|a-b|$。由于 $|a|-|b|$ 及其相反数都不超过 $|a-b|$，因此：

$$
\bigl||a| - |b|\bigr| \le |a - b|
$$

## $y = |x|$ 的图像

恒等式 $|-x|=|x|$ 表明，[绝对值函数](../absolute-value-function/)是[偶函数](../even-and-odd-functions/)，因此它的图像关于 $y$ 轴对称：

$$
|{-x}| = |x| \quad \forall \, x \in \mathbb{R}
$$

![IMG. 1](/assets/sets-and-numbers/svg/absolute-value-1.svg)

## 解释绝对值不等式

含绝对值的不等式是在数轴上对距离提出的条件。量 $|A|$ 表示 $A$ 到零的距离。设 $k>0$。先考虑：

$$
|A| < k
$$

$A$ 到零的距离小于 $k$，因此 $A$ 位于以原点为中心、端点为 $-k$ 和 $k$ 的开[区间](../intervals/)内。等价地：

$$
-k < A < k
$$

- - -

第二种情形为：

$$
|A| > k
$$

此时 $A$ 到零的距离超过 $k$，所以 $A$ 位于区间 $(-k,k)$ 之外。等价地：

$$
A < -k \quad \lor \quad A > k
$$

> [含绝对值的不等式](../inequalities-with-absolute-value/)一文给出了这些等价关系的非严格形式，并讨论右端符号决定的各种情形。

## 绝对值作为范数

绝对值是 $\mathbb{R}$ 上的范数。实[向量空间](../vector-spaces/) $V$ 上的范数是一个函数 $\|\cdot\|:V \to [0,+\infty)$，对所有 $x,y \in V$ 及所有 $\lambda \in \mathbb{R}$ 满足以下三个性质：

$$
\|x\| = 0 \iff x = 0
$$

$$
\|\lambda x\| = |\lambda| \cdot \|x\|
$$

$$
\|x + y\| \le \|x\| + \|y\|
$$

绝对值具有全部三个性质。第一个是定义的一部分，因为 $|x|=0$ 当且仅当 $x=0$。第二个是将乘积性质应用于 $\lambda x$ 得到的，第三个就是上面证明的三角不等式。

> 范数 $|\cdot|$ 在 $\mathbb{R}$ 上定义[通常距离](../topology-of-the-real-line/) $d(x,y)=|x-y|$。对于这个距离，三角不等式是[数列](../convergent-and-divergent-sequences/)收敛的 $\varepsilon$ 定义以及[柯西数列](../cauchy-sequence/)定义中所使用的估计。
