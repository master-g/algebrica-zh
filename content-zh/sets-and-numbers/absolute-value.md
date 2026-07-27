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
  source_hash: 2a63a96103722e42e6aa7d5d293ad2836c68d15776b45103c5cc67fb139270fb
  translator: omp
  updated: "2026-07-22T15:26:03.445Z"
---
## 定义

一个数的绝对值表示它在数轴上与零的距离，不考虑其正负号。它告诉我们一个数离零有多远，无论正数还是负数，且总是非负的。绝对值用竖线 $|x|$ 表示，定义如下：

$$
|x| =
\begin{cases}
+x & \text{若 } x \geq 0 \\[6pt]
-x & \text{若 } x < 0
\end{cases}
\quad
\forall \ x \in \mathbb{R}
$$

例如，$|5| = 5$ 和 $|-6| = -(-6) = 6$。表达式 $f(x) := |x|$，其中 $x \in \mathbb{R}$，定义了一个函数 $f: \mathbb{R} \rightarrow \mathbb{R}$，其像集为 $f(\mathbb{R}) = [0, +\infty)$。

- - -

绝对值函数将每个[实数](../real-numbers/)对应到它在实数轴上与零的距离。负数被映射到其正的对应数，而正数保持不变，因为距离总是非负的。

![IMG. 1](/assets/sets-and-numbers/svg/real-numbers-1.svg)

更一般地，绝对值表达式 $|x - a|$ 可以理解为数轴上点 $x$ 与点 $a$ 之间的距离。我们有：

$$
|x-a| = |a-x|
$$

例如，$x = 3$ 与 $a = 7$ 之间的距离为 $|3 - 7| = |-4| = 4$，等于 $|7 - 3| = |4| = 4$，这证实了距离是对称的。

- - -

绝对值 $|x|$ 也可以用符号函数 $\mathrm{sgn}(x)$ 表示为：

$$
|x| = x \cdot \mathrm{sgn}(x)
$$

[符号函数](../sign-functions/) 定义为：

$$
\mathrm{sgn}(x) =
\begin{cases}
-1 & \text{若 } x < 0 \\[6pt]
0 & \text{若 } x = 0 \\[6pt]
1 & \text{若 } x > 0
\end{cases}
$$

将 $x$ 乘以 $\mathrm{sgn}(x)$ 可确保结果总是非负的，这符合绝对值的定义。具体而言：

+ 若 $x > 0$，则 $\mathrm{sgn}(x) = 1$ 且 $x \cdot \mathrm{sgn}(x) = x$。
+ 若 $x < 0$，则 $\mathrm{sgn}(x) = -1$ 且 $x \cdot \mathrm{sgn}(x) = -x$。
+ 若 $x = 0$，则 $\mathrm{sgn}(x) = 0$ 且 $x \cdot \mathrm{sgn}(x) = 0$。

## 性质

一个数的绝对值等于其相反数的绝对值。这直接由定义得出：无论从正值还是负值出发，到原点的距离都是相同的。例如，$|3| = |-3| = 3$。

$$
|x| = |-x| \quad \forall \ x \in \mathbb{R}
$$

- - -

乘积的绝对值等于绝对值的乘积。该性质自然地推广到任意有限个因子：$|x_1 \cdot x_2 \cdots x_n| = |x_1| \cdot |x_2| \cdots |x_n|$。作为特例，取 $x = y$ 得到 $|x^2| = |x|^2$，这与平方总是非负的事实一致。

$$
|x \cdot y| = |x| \cdot |y| \quad \forall \ x, y \in \mathbb{R}
$$

- - -

两个实数具有相等的绝对值，当且仅当它们相等或互为相反数。从几何上看，$|x| = |y|$ 意味着 $x$ 和 $y$ 在实数轴上到原点的距离相同，这恰好发生在 $x = y$ 或 $x = -y$ 时。

$$
|x| = |y| \iff x = \pm y \quad \forall \ x, y \in \mathbb{R}
$$

- - -

绝对值的比较等价于平方的比较。这成立是因为 $|x|$ 和 $|y|$ 都是非负的，而对于非负数，平方函数是严格递增的：当 $a, b \geq 0$ 时有 $a \leq b \iff a^2 \leq b^2$。等价关系 $|x|^2 = x^2$ 随即完成了论证。

$$
|x| \leq |y| \iff x^2 \leq y^2 \quad \forall \ x, y \in \mathbb{R}
$$

- - -

商的绝对值等于绝对值的商，前提是分母非零。这是乘法性质的直接推论：将 $x/y = x \cdot y^{-1}$ 写出并应用 $|x \cdot y^{-1}| = |x| \cdot |y^{-1}| = |x|/|y|$。

$$
\left| \frac{x}{y} \right| = \frac{|x|}{|y|} \quad \forall \ x, y \in \mathbb{R},\ y \ne 0
$$

- - -

$x^2$ 的主平方根是 $x$ 的绝对值，而非 $x$ 本身。由于平方根符号表示非负根，仅当 $x \geq 0$ 时才有 $\sqrt{x^2} = x$，而当 $x < 0$ 时有 $\sqrt{x^2} = -x$。不加条件地写出 $\sqrt{x^2} = x$ 是一个常见错误，仅对非负值成立。

$$
\sqrt{x^2} = |x| \quad \forall \ x \in \mathbb{R}
$$

> 此处列出的性质是研究涉及绝对值的方程和不等式的基础，并且与下一节讨论的几何解释直接相关。

## 三角不等式

三角不等式是实数轴上绝对值的一个基本性质。对于任意数 $a, b \in \mathbb{R}$，以下不等式成立：

$$
|a + b| \le |a| + |b|
$$

该不等式表明，和 $a + b$ 与零的距离不会超过 $a$ 和 $b$ 各自距离之和。当两个数同号或至少有一个为零时，等号成立。当它们异号且均非零时，会发生部分抵消，从而得到严格不等式。

- - -

为了证明该不等式，我们考虑 $a$ 和 $b$ 的所有可能符号组合：

$$
\begin{align}
(1)\quad & a \ge 0, \quad b \ge 0 \\[6pt]
(2)\quad & a \le 0, \quad b \le 0 \\[6pt]
(3)\quad & a \ge 0, \quad b \le 0 \\[6pt]
(4)\quad & a \le 0, \quad b \ge 0
\end{align}
$$

在情形 $(1)$ 中，我们有 $a + b \geq 0$：

$$
|a + b| = a + b = |a| + |b|
$$

在情形 $(2)$ 中，我们有 $a + b \leq 0$：

$$
|a + b| = -(a + b) = (-a) + (-b) = |a| + |b|
$$

在情形 $(3)$ 中，由于 $a \ge 0$ 且 $b \le 0$，我们有 $|a| = a$ 和 $|b| = -b$，因此 $|a| + |b| = a - b$。我们需要证明 $|a + b| \le a - b$：

+ 当 $a + b \ge 0$ 时，我们有 $|a + b| = a + b \le a - b$，因为 $b \le 0$。
+ 当 $a + b \le 0$ 时，我们得到 $|a + b| = -(a + b) = -a - b \le a - b$，这等价于 $-a \le a$，该条件因 $a \ge 0$ 而成立。

在情形 $(4)$ 中，即 $a \le 0$ 且 $b \ge 0$，论证与情形 $(3)$ 对称，并得出相同的结论。

- - -

三角不等式的一个推论是反三角不等式。对于任意 $a, b \in \mathbb{R}$：

$$
\bigl||a| - |b|\bigr| \le |a - b|
$$

反三角不等式表明，$a$ 和 $b$ 各自与零的距离之差不会超过 $a$ 和 $b$ 之间的距离。为了说明原因，将三角不等式应用于恒等式 $a = (a - b) + b$：

$$
|a| = |(a - b) + b| \le |a - b| + |b|
$$

这给出 $|a| - |b| \le |a - b|$。由对称性，交换 $a$ 和 $b$ 得到 $|b| - |a| \le |a - b|$。由于 $|a| - |b|$ 及其相反数都被 $|a - b|$ 控制，我们得出结论：

$$
\bigl||a| - |b|\bigr| \le |a - b|
$$

## $y = |x|$ 的图像

绝对值函数 $|x|$ 的图像关于 $y$ 轴对称。这种对称性意味着该函数是偶函数，即它满足恒等式：

$$
|{-x}| = |x| \quad \text{对所有 } x \in \mathbb{R}
$$

![IMG. 1](/assets/sets-and-numbers/svg/absolute-value-1.svg)

## 解释绝对值不等式

涉及绝对值的不等式表达了关于数轴上距离的条件。记号 $|A|$ 表示量 $A$ 与零的距离，它总是非负的。首先考虑不等式：

$$
|A| < k
$$

该不等式告诉我们，$A$ 与零之间的距离小于正数 $k$。从几何上看，满足该不等式的所有数都位于以原点为中心的开[区间](../intervals/)内，向左延伸 $k$ 个单位、向右延伸 $k$ 个单位。在代数上，这一条件可以改写为：

$$
-k < A < k
$$

- - -

如果不等式改为：

$$
|A| > k
$$

含义就完全不同了。$A$ 与零的距离现在超过正数 $k$，因此 $A$ 的可取值是那些位于区间 $(-k, k)$ 之外的值。用代数语言表述，不等式变为：

$$
A < -k \quad \text{或} \quad A > k
$$

> 这类变换在求解包含绝对值的不等式时特别有用。通过将条件改写为不含绝对值符号的形式，问题就转化为一个或多个标准不等式，可以用熟悉的代数技巧来求解。

## 绝对值作为范数

绝对值不仅仅是去掉正负号的方便记法。它是 $\mathbb{R}$ 上的范数，即一个将每个实数赋予非负长度的函数，就如同向量空间上的范数衡量向量的大小。实[向量空间](../vector-spaces/) $V$ 上的范数是一个函数 $\|\cdot\| : V \to [0, +\infty)$，对所有 $x, y \in V$ 和所有 $\lambda \in \mathbb{R}$ 满足三个条件：

$$
\|x\| = 0 \iff x = 0
$$

$$
\|\lambda x\| = |\lambda| \cdot \|x\|
$$

$$
\|x + y\| \le \|x\| + \|y\|
$$

绝对值 $|\cdot|$ 满足全部三个条件。第一个由定义成立，因为 $|x| = 0$ 当且仅当 $x = 0$。第二个直接由乘法性质 $|x \cdot y| = |x| \cdot |y|$ 得出，取 $y = \lambda$。第三个正是上面证明的三角不等式。

> 这一观察将绝对值置于更广泛的数学结构之中，并阐明了其性质——特别是三角不等式——并非孤立的事实，而是在分析和线性代数中反复出现的普遍原理的具体实例。在用 $\varepsilon$ 语言定义[数列](../convergent-and-divergent-sequences/)及[柯西数列](../cauchy-sequence/)的收敛性时，三角不等式是控制距离的标准工具。
