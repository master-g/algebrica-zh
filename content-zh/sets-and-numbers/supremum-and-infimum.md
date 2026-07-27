---
title: 上确界与下确界
title_en: Supremum and Infimum
source: https://algebrica.org/supremum-and-infimum/
license: CC BY-NC 4.0
tags:
  - approximation-property
  - bounded-set
  - completeness-axiom
  - infimum
  - lower-bound
  - maximum
  - minimum
  - supremum
  - upper-bound
translation:
  status: current
  source_hash: f97e5e841faf4296fcb15363196cf0b9d4ab7112278cdd3ce055158638fd0db1
  translator: omp
  updated: "2026-07-22T16:01:57.487Z"
---
## 完备性公理

虽然[实数](../real-numbers/)经常通过其代数性质引入，但 $\mathbb{R}$ 与 $\mathbb{Q}$ 的本质区别在于其序结构，尤其是该序的一个独特性质。$\mathbb{R}$ 中每个有上界的非空子集都有位于 $\mathbb{R}$ 中的最小上界。这一性质称为完备性公理，刻画了实数轴。上确界与下确界的概念是应用完备性公理的实际工具。

## 上界与下界

考虑一个非空[集合](../sets/) $A \subseteq \mathbb{R}$。实数 $M$ 是 $A$ 的上界，如果：

$$
a \leq M \quad \forall \ a \in A
$$

如果这样的数存在，则集合 $A$ 有上界。实数 $m$ 是 $A$ 的下界，如果：

$$
a \geq m \quad \forall \ a \in A
$$

此时，$A$ 有下界。如果一个集合既有上界又有下界，则称为有界集，即存在 $K > 0$ 使得：

$$
|a| \leq K \quad \forall \ a \in A
$$

上界如果存在，通常不唯一。若 $M$ 是 $A$ 的上界，则 $M + 1$ 和 $M + 100$ 也是上界。下界的情况对称地相同。若 $m$ 是 $A$ 的下界，则 $m - 1$ 也是下界。最小上界称为上确界，最大下界称为下确界。

![Img. 1](/assets/sets-and-numbers/svg/supremum-and-infimum-1.svg)

+ 若 $A$ 非空但无上界，则按惯例将上确界定义为 $\sup A = +\infty$。
+ 若 $A$ 无下界，则将下确界设为 $\inf A = -\infty$。
+ 对于空集，采用约定 $\sup \emptyset = -\infty$ 和 $\inf \emptyset = +\infty$。

## 上确界

考虑一个有上界的非空子集 $A \subseteq \mathbb{R}$。$A$ 的上确界，记为 $\sup A$，是其最小上界。实数 $s$ 等于 $\sup A$ 当且仅当以下两个条件同时满足。第一个条件要求 $s$ 是 $A$ 的上界：

$$
a \leq s \quad \forall \ a \in A
$$

第二个条件确保任何严格小于 $s$ 的数都会被 $A$ 的某个元素超过：

$$
\forall \ \varepsilon > 0 \quad \exists \ a \in A : a > s - \varepsilon
$$

这两个条件共同唯一地确定了 $s$。最小上界只能有一个。若 $s$ 和 $s'$ 都满足定义，则有：

$$
s \leq s' \ \wedge \ s' \leq s \ \to \ s = s'
$$

一个等价的刻画是：$s = \sup A$ 当且仅当 $s$ 是 $A$ 的上界，且存在一个[数列](../sequences/) $(a_n) \subseteq A$ 使得 $a_n \to s$。

> 完备性公理确保了当 $A$ 非空且有上界时，$\sup A$ 在 $\mathbb{R}$ 中存在。这一性质在 $\mathbb{Q}$ 中不成立。例如，集合 $\\{q \in \mathbb{Q} : q^2 < 2\\}$ 在 $\mathbb{Q}$ 中有上界，但其最小上界 $\sqrt{2}$ 不是[有理数](../rational-numbers/)，因此该集合在该有序集中没有上确界。这种情况在 $\mathbb{R}$ 中不会发生。

## 下确界

考虑一个有下界的非空子集 $A \subseteq \mathbb{R}$。$A$ 的下确界，记为 $\inf A$，是其最大下界。实数 $i$ 等于 $\inf A$ 当且仅当以下两个条件同时满足。第一个条件要求 $i$ 是 $A$ 的下界：

$$
a \geq i \quad \forall \ a \in A
$$

第二个条件确保对任意严格大于 $i$ 的数，其下方都存在 $A$ 的某个元素：

$$
\forall \ \varepsilon > 0 \quad \exists \ a \in A : a < i + \varepsilon
$$

这两个条件共同唯一地确定了 $i$。最大下界只能有一个。若 $i$ 和 $i'$ 都满足定义，则有：

$$
i \geq i' \ \wedge \ i' \geq i \ \to \ i = i'
$$

一个等价的刻画是：$i = \inf A$ 当且仅当 $i$ 是 $A$ 的下界，且存在一个数列 $(a_n) \subseteq A$ 使得 $a_n \to i$。

一个具体的例子是集合 $\\{ 1/n : n \in \mathbb{N} \\}$。它的每一项都是正数，所以 $0$ 是下界，而且没有正数可以作为下界，因为根据阿基米德性质，总能找到一个 $n$ 使得 $1/n$ 小于任何给定的正数阈值。因此 $\inf \\{ 1/n : n \in \mathbb{N} \\} = 0$。值 $0$ 不是集合中的任何一项，因此该集合有下确界但没有最小值。

## 上确界与最大值，下确界与最小值

上确界与最大值、下确界与最小值之间的关系经常被误解。集合 $A$ 的最大值是 $A$ 中大于或等于其他所有元素的元素。当最大值存在时，有：

$$
\max A = \sup A
$$

上确界不一定属于集合 $A$。考虑 $A = (0, 1)$。$A$ 的每个元素都严格小于 $1$，所以 $\sup A = 1$。由于 $1 \notin A$，集合 $A$ 没有最大值。数 $1$ 是最小上界，但它不是 $A$ 的元素。类似地，$\inf A = 0$，然而 $0 \notin A$，所以 $A$ 没有最小值。相比之下，对于闭[区间](../intervals/) $B = [0,1]$，有：

$$
\sup B = \max B = 1 \qquad \inf B = \min B = 0
$$

因为端点包含在集合中。

![Img. 2](/assets/sets-and-numbers/svg/supremum-and-infimum-2.svg)

一般地，以下蕴含关系成立：

$$
\max A \text{ 存在} \ \to \ \max A = \sup A
$$

$$
\min A \text{ 存在} \ \to \ \min A = \inf A
$$

其逆一般不成立。一个函数是否真正取到其上确界是一个非平凡的问题。[魏尔斯特拉斯定理](../weierstrass-theorem/)给出了一个充分条件：若函数在闭且有界的区间上连续，则上确界和下确界都能取到，最大值和最小值存在。在此条件之外，需逐案考察。

## 函数的上确界与下确界

上确界与下确界的概念自然地推广到函数。对于函数 $f : D \to \mathbb{R}$，$f$ 在 $D$ 上的上确界是其像集的上确界：

$$
\sup_{x \in D} f(x) = \sup \\{ f(x) : x \in D \\}
$$

类似地，下确界定义为：

$$
\inf_{x \in D} f(x) = \inf \\{ f(x) : x \in D \\}
$$

这些量是 $f$ 所取值的最小上界和最大下界，且二者都未必能取到。

+ 实数 $s$ 等于 $\sup_{x \in D} f(x)$ 当且仅当对所有 $x \in D$ 都有 $f(x) \leq s$，且对每个 $\varepsilon > 0$ 都存在 $x \in D$ 使得 $f(x) > s - \varepsilon$。
+ 对称地，实数 $i$ 等于 $\inf_{x \in D} f(x)$ 当且仅当对所有 $x \in D$ 都有 $f(x) \geq i$，且对每个 $\varepsilon > 0$ 都存在 $x \in D$ 使得 $f(x) < i + \varepsilon$。

函数的上确界和下确界未必取到。对于定义在开区间 $(0, 1)$ 上的函数 $f(x) = x$，$\sup_{x \in (0,1)} f(x) = 1$，但不存在 $x \in (0, 1)$ 使得 $f(x) = 1$。若上确界在某点 $x_0 \in D$ 取到，即 $f(x_0) = \sup_{x \in D} f(x)$，则它与 $f$ 在 $D$ 上的最大值一致。下确界与最小值之间也有同样的关系。

> 上确界与下确界是函数可以逼近但未必取到的界，而最大值与最小值是函数在 $D$ 的特定点处实际达到的值。

## 上确界与下确界的代数性质

上确界与下确界在集合的平移和缩放下表现简单，这常常简化了它们的计算。对于非空有界集 $A \subseteq \mathbb{R}$ 和实数 $c$，记 $c + A = \\{ c + a : a \in A \\}$ 和 $cA = \\{ ca : a \in A \\}$。平移一个集合会使两个界移动相同的量：

$$
\sup(c + A) = c + \sup A \qquad \inf(c + A) = c + \inf A
$$

用正因子缩放会同时缩放两个界并保持各自的角色：

$$
\sup(cA) = c \sup A \qquad \inf(cA) = c \inf A \qquad (c > 0)
$$

用负因子缩放会交换二者，因为乘以负数会反转序：

$$
\sup(cA) = c \inf A \qquad \inf(cA) = c \sup A \qquad (c < 0)
$$

每个恒等式都可以通过验证右端满足左端界的两个定义条件来证明。选取 $c = -1$ 给出有用的特殊情形 $\sup(-A) = -\inf A$，它将任何关于下确界的命题转化为关于上确界的命题。

两个集合的比较遵循同样的推理。假设 $A$ 和 $B$ 非空，且 $A$ 的每个元素都不超过 $B$ 的每个元素，即对所有 $a \in A$ 和 $b \in B$ 都有 $a \leq b$。于是每个 $a$ 都是 $B$ 的下界，所以 $a \leq \inf B$，而 $\inf B$ 反过来是 $A$ 的上界。取最小上界得：

$$
\sup A \leq \inf B
$$

即便将假设加强为对每对元素都成立 $a < b$，结论仍然是非严格的。取 $A = \\{ 0 \\}$ 和 $B = \\{ 1/n : n \in \mathbb{N} \\}$ 时，处处有 $a < b$，然而这两个界都等于 $0$，因此不能期望严格的不等式 $\sup A < \inf B$。

## 逼近性质

上确界与下确界的 $\varepsilon$ 刻画不仅仅是一个定义上的细节。它是这些概念在证明中最常出现的形式，常被作为一个独立的性质来陈述。若 $s = \sup A$，则对每个 $\varepsilon > 0$ 都存在元素 $a \in A$ 使得：

$$
s - \varepsilon < a \leq s
$$

等价地说，任何严格小于 $s$ 的数都不是 $A$ 的上界。类似的陈述适用于下确界：若 $i = \inf A$，则对每个 $\varepsilon > 0$ 都存在 $a \in A$ 使得：

$$
i \leq a < i + \varepsilon
$$

这一性质在分析学中无处不在，每当需要从一个集合中提取任意接近其上确界或下确界的元素时就会用到，它自然地出现在存在性论证中，如波尔查诺–魏尔斯特拉斯定理的证明和[黎曼积分](../riemann-integrability-criteria/)的构造。
