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
  source_hash: 691f3b8881fe53e3c7b8f2cbc4c314a367d99ce80666c28da7e128ac4034eaa0
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 定义

考虑实数轴，即包含从负无穷到正无穷的所有[实数](../real-numbers/)的直线，并固定一个长度单位来度量任意两点 $a$ 和 $b$ 之间的距离。这个距离由[欧几里得距离公式](../the-cartesian-coordinate-plane/)给出：

$$
d(a,b)=\sqrt{(a-b)^2} \tag{1}
$$

我们知道，距离总是非负的，并且只有当两点重合时才为零。由此得到实数的绝对值，它是点 $x$ 到零的距离。在 $(1)$ 中令 $a=x$、$b=0$，得到：

$$
|x|=d(x,0)=\sqrt{x^2} \tag{2}
$$

我们知道，[平方根](../radicals/)总是给出非负值，所以可以把 $(2)$ 改写成下面的形式：

$$ \tag{3}
|x| =
\begin{cases}
+x & x \geq 0 \\[6pt]
-x & x < 0
\end{cases}
\quad
\forall \ x \in \mathbb{R}
$$

例如，$|5|=5$，$|-6|=-(-6)=6$。如果把原点换成坐标为 $a$ 的任意一点，可以把 $(2)$ 改写如下：

$$
d(x,a)=\sqrt{(x-a)^2}=|x-a|  \tag{4}
$$

因此在这种情形下，坐标 $x$ 与 $a$ 之差的绝对值恰好给出两点之间的距离。


![图 1](/assets/sets-and-numbers/svg/real-numbers-1.svg)


更一般地，$(4)$ 中的距离满足下面的对称关系，因为交换两点不改变它们之间的距离。

$$
|x-a| = |a-x|
$$

例如，从 $3$ 到 $7$ 的距离是 $|3-7|=4$，它等于从 $7$ 到 $3$ 的距离，即 $|7-3|=4$。

- - -

到目前为止，我们把绝对值当作一个数来讨论，但如果让 $x$ 在 $\mathbb{R}$ 上变化，就得到一个[函数](../functions/)，它把每个实数对应到它的绝对值。这个函数定义为：

$$
y = |x| =
\begin{cases}
+x & x \geq 0 \\[6pt]
-x & x < 0
\end{cases}
$$


![图 1](/assets/sets-and-numbers/svg/absolute-value-1.svg)

如图所示，它的图像由在原点相交的两条射线组成，并且关于 $y$ 轴对称，所以它是[偶函数](../even-and-odd-functions/)，满足下面的关系：

$$|{-x}| = |x| \quad \forall \ x \in \mathbb{R}$$

关于[绝对值函数](../absolute-value-function/)的详细说明，见相应的词条。

- - -

在 $(3)$ 中我们看到，$x$ 的符号决定了它的绝对值如何计算。这种依赖关系可以通过[符号函数](../sign-function/)来表达，它使我们能够把绝对值写成：

$$
|x| = x \cdot \mathrm{sgn}(x)\tag{5}
$$

符号函数在下列[区间](../intervals/)上定义为：

$$
\mathrm{sgn}(x) =
\begin{cases}
-1 & x < 0 \\[6pt]
0 & x = 0 \\[6pt]
1 & x > 0
\end{cases}
$$

在每个区间上，$x$ 与 $\mathrm{sgn}(x)$ 的乘积总是非负的，所以得到下列结果，它们与 $(3)$ 中绝对值的定义一致：

+ 如果 $x > 0$，那么 $\mathrm{sgn}(x) = 1$，且 $x \cdot \mathrm{sgn}(x) = x$。
+ 如果 $x < 0$，那么 $\mathrm{sgn}(x) = -1$，且 $x \cdot \mathrm{sgn}(x) = -x$。
+ 如果 $x = 0$，那么 $\mathrm{sgn}(x) = 0$，且 $x \cdot \mathrm{sgn}(x) = 0$。

## 性质

定义了实数的绝对值之后，下面列出一些基本性质。先从最直接由定义得出的性质说起。前面说过，一个实数与它的相反数到原点的距离相同，因此有相同的绝对值。例如，$|3|=|-3|=3$。一般地，下面的恒等式成立：

$$
|x| = |-x| \quad \forall \ x \in \mathbb{R}
$$

- - -

由于 $x$ 和 $-x$ 到原点的距离相同，二者中较小的一个非正，等于 $-|x|$，较大的一个等于 $|x|$。由于 $x$ 是这两个值之一，它位于 $-|x|$ 与 $|x|$ 之间，所以下面的关系成立。

$$
-|x| \leq x \leq |x| \quad \forall \ x \in \mathbb{R}
$$

沿着这个思路，还可以得出绝对值是 $x$ 与 $-x$ 中的最大者，所以有：

$$
|x| = \max\{x,-x\} \quad \forall \ x \in \mathbb{R}
$$

- - -

从代数的角度看，重要的是要知道乘积的绝对值等于绝对值的乘积。事实上，反复应用这条性质，就对每个有限乘积得到下面的恒等式：

$$|x_1 \cdot x_2 \cdots x_n|=|x_1| \cdot |x_2| \cdots |x_n|$$

这条性质可以简洁地表述为：

$$
|x \cdot y| = |x| \cdot |y| \quad \forall \ x, y \in \mathbb{R} \tag{6}
$$

- - -

现在考虑两个实数 $x$ 和 $y$。这两个数有相同的绝对值，当且仅当它们相等或互为相反数。由绝对值的定义可知，$|x|=|y|$ 意味着 $x$ 和 $y$ 到原点的距离相同，而这恰好在 $x=y$ 或 $x=-y$ 时发生。这条性质的形式写法是：

$$
|x| = |y| \iff x = \pm y \quad \forall \ x, y \in \mathbb{R}
$$

- - -

对于两个非负数，第一个小于或等于第二个，当且仅当它的平方小于或等于第二个的平方。把这条性质应用于 $|x|$ 和 $|y|$，对任意一对实数 $x$ 和 $y$，它们都是非负的。由于 $|x|^2=x^2$ 且 $|y|^2=y^2$，可以写出：

$$
|x| \leq |y| \iff x^2 \leq y^2 \quad \forall \ x, y \in \mathbb{R}
$$

- - -

计算中另一条有用的性质是，商的绝对值等于绝对值的商。考虑两个数 $x$ 和 $y$，其中 $y \ne 0$ 以保证分母不为零，并把乘积性质 $(6)$ 应用于恒等式 $yy^{-1}=1$。得到 $|y^{-1}|=|y|^{-1}$，由此有：

$$
\left| \frac{x}{y} \right| = \frac{|x|}{|y|} \quad \forall \ x, y \in \mathbb{R},\ y \ne 0
$$

- - -

最后，考虑 $x^2$ 的平方根，我们知道它总是非负的，因此当 $x\geq 0$ 时等于 $x$，当 $x<0$ 时等于 $-x$。于是可以写出最后这个恒等式，它特别重要，因为它经常出现在方程中，尤其是[含根式的方程](../irrational-equations/)中：

$$
\sqrt{x^2} = |x| \quad \forall \ x \in \mathbb{R}
$$

## 三角不等式

为了引入三角不等式，先从一个直观的论证说起。如果要从点 $a$ 走到点 $b$，我们知道最短的路径是连接它们的线段。经过第三个点可能使路径变长，但不可能使它变短。把同样的推理应用于三角形，就得到一边的长度总是小于或等于另外两边的长度之和。现在考虑从 $0$ 经过 $a$ 到 $a+b$ 的路径，第一段的长度为 $|a|$，第二段的长度为 $|b|$。而起点与终点之间的距离是 $|a+b|$。这恰好给出三角不等式，它由下面的关系表示：

$$
|a + b| \le |a| + |b| \tag{7}
$$

为了说得更清楚，例如假设我们从 $0$ 出发向右移动，直到到达 $5$。然后折返并到达 $2$，又走了 3 个单位。我们一共走了 $8$ 个单位，但起点 $0$ 与终点 $2$ 之间的距离只有 $2$，这与 $(7)$ 一致。

- - -

为了严格证明 $(7)$，我们考虑 $a$ 和 $b$ 的符号的所有可能情形：

$$
\begin{align}
(1)\quad & a \ge 0, \quad b \ge 0 \\[6pt]
(2)\quad & a \le 0, \quad b \le 0 \\[6pt]
(3)\quad & a \ge 0, \quad b \le 0 \\[6pt]
(4)\quad & a \le 0, \quad b \ge 0
\end{align}
$$

在情形 $(1)$ 中，和满足 $a + b \geq 0$，所以有：

$$
|a + b| = a + b = |a| + |b|
$$

在情形 $(2)$ 中，和则满足 $a + b \leq 0$，所以下面的关系成立：

$$
|a + b| = -(a + b) = (-a) + (-b) = |a| + |b|
$$

在情形 $(3)$ 中，由于 $a \ge 0$ 且 $b \le 0$，有 $|a| = a$ 和 $|b| = -b$，所以 $|a| + |b| = a - b$。为了证明 $|a + b| \le a - b$，必须区分下列情形：

+ 当 $a + b \ge 0$ 时，有 $|a + b| = a + b \le a - b$，因为 $b \le 0$。
+ 当 $a + b \le 0$ 时，则得到 $|a + b| = -(a + b) = -a - b \le a - b$。

最后一个不等式等价于 $-a \le a$，而这个条件成立是因为 $a \ge 0$。最后，交换 $a$ 和 $b$，情形 $(4)$ 就化为情形 $(3)$。

- - -

反三角不等式也可以由 $(7)$ 得出；也就是说，对所有 $a,b \in \mathbb{R}$，有：

$$
\bigl||a| - |b|\bigr| \le |a - b| \tag{8}
$$

在这个关系中，$a$ 和 $b$ 到零的距离之差的绝对值，小于或等于 $a$ 与 $b$ 之间的距离。为了证明它，把三角不等式应用于恒等式 $a=(a-b)+b$，得到：

$$
|a| = |(a - b) + b| \le |a - b| + |b|
$$

由此得到 $|a| - |b| \le |a - b|$。交换 $a$ 和 $b$，得到 $|b| - |a| \le |a - b|$，由于 $|a| - |b|$ 和 $|b|-|a|$ 都小于或等于 $|a - b|$，我们断定 $(8)$ 成立。

## 进一步的讨论

绝对值适用于实数，并且正如本词条中多次指出的，它度量实数到零的距离。范数 $\|\cdot\|$ 把这个想法推广到[向量](../vectors/)，给每个向量指定一个非负的长度。一般地，实[向量空间](../vector-spaces/) $V$ 上的范数是一个函数 $\|\cdot\|:V \to [0,+\infty)$，它对所有 $x,y \in V$ 和所有 $\lambda \in \mathbb{R}$ 满足下列三条性质：

$$
\begin{align}
\quad & \|x\| = 0 \iff x = 0 \\[6pt]
\quad & \|\lambda x\| = |\lambda| \cdot \|x\| \\[6pt]
\quad & \|x + y\| \le \|x\| + \|y\|
\end{align}
$$

绝对值满足全部三条性质：第一条由 $(3)$ 中的定义得出，第二条是把乘积性质 $(6)$ 应用于 $\lambda x$，第三条就是 $(7)$ 给出的三角不等式。

- - -

最后，值得一提的是[含绝对值的不等式](../inequalities-with-absolute-value/)，它们表达的是实数轴上关于距离的条件。第一种情形是不等式 $|A| < k$，它可以等价地写成：

$$
-k < A < k
$$
第二种情形的形式为 $|A| > k$，它可以改写成：

$$
A < -k \quad \lor \quad A > k
$$

详细的解释见相应的词条。
