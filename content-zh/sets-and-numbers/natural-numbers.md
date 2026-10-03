---
title: 自然数
title_en: Natural Numbers
source: https://algebrica.org/natural-numbers/
license: CC BY-NC 4.0
tags:
  - addition
  - induction
  - multiplication
  - natural-numbers
  - peano-axioms
  - real-line
  - successor-function
  - von-neumann-construction
  - well-ordering
translation:
  status: current
  source_hash: dc12d23b541cd48591a10f24fd0f5125fe53b2624f7353effaddac76ac197820
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 公理化构造

如[数的总体介绍](../types-of-numbers/)中所述，各数系构成一个层级，其中每个集合都包含在下一个集合中：

$$
\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C} \tag{1}
$$

自然数的集合记为 $\mathbb{N}$，它是 $(1)$ 所示层级中的第一个集合，非形式地说，它源于对物体计数的需要。自然数可以表示为[实数轴](../real-numbers/)上的离散点。从 $0$ 开始（按照约定我们把它包含在 $\mathbb{N}$ 中），它们向右占据等间距的位置，对应于 $0, 1, 2, 3, \dots$，并沿这个方向无限延伸。

![图 1](/assets/sets-and-numbers/svg/integers-2.zh.svg)

离散性是把[整数](../integers/)与[有理数](../rational-numbers/)和[无理数](../irrational-numbers/)区分开来的性质之一，后两者在数轴上稠密分布，可以位于两个整数之间。如图所示，图中略去了负整数，它们不属于 $\mathbb{N}$，是在把自然数扩充到 $\mathbb{Z}$ 时引入的。

形式上，自然数通过皮亚诺公理引入。这些公理通过规定 $\mathbb{N}$ 的若干定义性质来描述它，其中包括一个特殊元素零，以及一个后继函数 $S : \mathbb{N} \to \mathbb{N}$，它们满足下列条件：

$$
\begin{align}
&\text{(P1)} \quad 0 \in \mathbb{N} \\[6pt]
&\text{(P2)} \quad \forall \ n \in \mathbb{N}, \ S(n) \in \mathbb{N} \\[6pt]
&\text{(P3)} \quad \forall \ n \in \mathbb{N}, \ S(n) \neq 0 \\[6pt]
&\text{(P4)} \quad \forall \ m, n \in \mathbb{N}, \ S(m) = S(n) \implies m = n \\[6pt]
&\text{(P5)} \quad \mathrm{Ind}
\end{align}
$$

这些公理的含义如下：

+ $(P1)$ 保证 $\mathbb{N}$ 有一个初始元素，集合的构造由它开始。
+ $(P2)$ 涉及后继运算 $S$，它指出自然数的后继仍是自然数。
+ $(P3)$ 指出 $0$ 不是任何自然数的后继。
+ $(P4)$ 保证不同的自然数有不同的后继。它与 $(P3)$ 一起保证，从 $0$ 出发反复应用 $S$，每一步都产生一个新的元素。
+ $(P5)$ 是[归纳原理](../principle-of-mathematical-induction/)（上式中记作 Ind），它指出，如果子集 $A\subseteq\mathbb{N}$ 包含 $0$ 以及它的每个元素的后继，那么它与 $\mathbb{N}$ 重合。

> 要证明某个性质对所有自然数成立，归纳原理要求我们对 $0$ 验证它，并证明对每个 $n\in\mathbb{N}$，如果它对 $n$ 成立，那么它对 $S(n)$ 也成立。

## 集合论构造

皮亚诺公理并没有给出 $\mathbb{N}$ 的显式模型。它们规定了自然数必须具有的性质，却没有规定用什么对象来表示自然数。现代数学在[集合论](../sets/)中给出了 $\mathbb{N}$ 的一种构造，其中零等同于空集，自然数的后继定义为该数与只含该数的单元素集的并集：

$$ \tag{1}
\begin{align}
&0 = \varnothing \\[6pt]
&S(n) = n \cup \{n\}
\end{align}
$$

反复应用 $S$，就产生一列实现自然数的集合。例如，要得到自然数 $1$，把 $S$ 应用于 $0=\varnothing$，因为 $1$ 是 $0$ 的后继。这就给出 $1=S(0)=0\cup\{0\}=\{\varnothing\}$。同样的步骤给出其他的数：

$$
\begin{align}
&\vdots\\[6pt]
&2 = \{0, 1\} = \{\varnothing, \{\varnothing\}\} \\[6pt]
&3 = \{0, 1, 2\} \\[6pt]
&4 = \{0, 1, 2, 3\} \\[6pt]
&\vdots
\end{align}
$$

在 $(1)$ 所示的构造中，每个自然数都与所有在它之前的自然数构成的集合重合，所以数 $n$ 恰有 $n$ 个元素。

## 自然数的加法

为了研究加法，我们固定一个自然数 $m$，并构造一个[序列](../sequences/)，它从 $m$ 开始，每一步都移到后继。经过 $n$ 步之后，结果就是和 $m + n$，其中第一个加数给出起点，第二个加数给出应用 $S$ 的次数。我们用 $S^n$ 表示把后继应用 $n$ 次的函数。当 $n = 0$ 时，一步也不走，所以 $S^0(m) = m$。此后的每一步由关系 $S^{S(n)}(m) = S(S^n(m))$ 描述。这使我们能够把加法定义为二元运算 $+ : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$，它由下式给出：

$$
m + n := S^n(m) \tag{2}
$$

定义 $(2)$ 等价于下列递归条件，它们对每个 $m, n \in \mathbb{N}$ 成立：

$$ \tag{3}
\begin{align}
&m + 0 = m \\[6pt]
&m + S(n) = S(m + n)
\end{align}
$$

第一个条件规定初始值，第二个条件使我们在已知第二个加数取前一个值时的和之后能够算出新的和。对固定的 $m$，这个和定义了一个函数 $\mathbb{N} \to \mathbb{N}$。由于 $S$ 把每个自然数映到另一个自然数，加法的结果也是自然数。例如，可以把 $(3)$ 中的递归定义应用于和 $4 + 2$。由于 $2=S(1)$，和 $4+2$ 是 $4+1$ 的后继。而由于 $1=S(0)$，和 $4+1$ 又是 $4+0$ 的后继。因此得到：

$$
\begin{align}
4+2 &= S(4+1) \\[6pt]
&= S(S(4+0)) \\[6pt]
&= S(S(4)) \\[6pt]
&= S(5) \\[6pt]
&= 6
\end{align}
$$

因此，把两个数 $m$ 和 $n$ 相加，就是从 $m$ 出发，应用后继函数 $n$ 次。

- - -

描述了自然数加法的构造之后，我们来看结合律，它指出重新组合加数不改变和。对任意三个数 $a, b, c \in \mathbb{N}$，下面的等式成立：

$$
(a + b) + c = a + (b + c) \tag{4}
$$

固定 $a$ 和 $b$，对 $c$ 作归纳。当 $c = 0$ 时，两边都化为 $a + b$。假设 $(4)$ 对某个自然数 $c$ 成立。我们必须证明它对其后继也成立，也就是说下面的等式成立：

$$(a+b)+S(c)=a+(b+S(c))$$

从左端出发，利用加法的递归定义和归纳假设，得到：

$$
\begin{align}
(a+b)+S(c) &= S((a+b)+c) \\[6pt]
&= S(a+(b+c)) \\[6pt]
&= a+S(b+c) \\[6pt]
&= a+(b+S(c))
\end{align}
$$

这样就证明了，如果 $(4)$ 对 $c$ 成立，那么它对 $S(c)$ 也成立。由于它对 $c=0$ 成立，归纳原理保证它对每个 $c\in\mathbb{N}$ 成立。

- - -

现在证明交换律，它指出交换加数不改变和。我们要证明下面的等式对每个 $a,n\in\mathbb{N}$ 成立：

$$a+n=n+a \tag{5}$$

首先，必须证明对每个 $n\in\mathbb{N}$ 都有 $0+n=n$。我们比较函数 $u(n)=0+n$ 和 $v(n)=n$。当 $n=0$ 时，$(3)$ 中的第一个关系给出 $u(0)=0+0=0$，而 $v$ 的定义给出 $v(0)=0$。因此两个函数有相同的初始值。从 $n$ 过渡到 $S(n)$，由 $(3)$ 和这两个函数的定义得到下列恒等式：

$$ \tag{6}
\begin{align}
u(S(n)) &= 0+S(n)=S(0+n)=S(u(n)) \\[6pt]
v(S(n)) &= S(n)=S(v(n))
\end{align}
$$

$(6)$ 中的等式表明，$u$ 和 $v$ 在 $S(n)$ 处的值都是把后继应用于各自在 $n$ 处的值得到的。由于它们从同一个值出发并遵循同一条规则，递归定理的唯一性部分保证下面的等式对每个 $n\in\mathbb{N}$ 成立：

$$u(n)=v(n) \tag{7}$$

我们暂且承认这个结果，后面会加以解释。把 $u$ 和 $v$ 的定义代入 $(7)$，得到 $0+n=n$。它与已经包含在 $(3)$ 中的恒等式 $n+0=n$ 一起，证明了 $0$ 是加法的单位元。

其次，必须证明把后继应用于第一个加数与把它应用于和有相同的效果。这由下面的等式表示：

$$S(a)+n=S(a+n)$$

为此，我们固定 $a$，并比较下列函数：

$$
\begin{align}
p(n) &= S(a)+n \\[6pt]
q(n) &= S(a+n)
\end{align}
$$

在 $0$ 处，两个函数的值都是 $S(a)$，而 $(3)$ 给出：

$$ \tag{8}
\begin{align}
p(S(n)) &= S(a)+S(n)=S(S(a)+n)=S(p(n)) \\[6pt]
q(S(n)) &= S(a+S(n))=S(S(a+n))=S(q(n))
\end{align}
$$

同样，递归定理中的唯一性蕴含这两个函数重合，所以 $S(a)+n=S(a+n)$。现在可以固定 $a$ 并比较另外两个函数来完成证明：

$$
\begin{align}
f(n) &= a+n \\[6pt]
g(n) &= n+a
\end{align}
$$

关于零的恒等式给出：

$$f(0)=a+0=a=0+a=g(0)$$

在后继处，得到：

$$
\begin{align}
f(S(n)) &= a+S(n)=S(a+n)=S(f(n)) \\[6pt]
g(S(n)) &= S(n)+a=S(n+a)=S(g(n))
\end{align}
$$

由递归定理中的唯一性，$f=g$，因此对每个 $n\in\mathbb{N}$ 都有 $a+n=n+a$。这就证明了加法的交换律。

- - -

我们简要陈述递归定理，因为这里只需要它的结论。给定一个集合 $X$、一个元素 $x_0\in X$ 和一个函数 $T:X\to X$，该定理断言存在唯一的函数 $h:\mathbb{N}\to X$，它满足 $h(0)=x_0$，并且对每个 $n\in\mathbb{N}$ 满足 $h(S(n))=T(h(n))$。

因此，如果两个函数 $h$ 和 $k$ 满足这些条件，它们就有相同的初始值 $h(0)=k(0)=x_0$。二者在 $S(n)$ 处的值也都是把同一个函数 $T$ 应用于各自在 $n$ 处的值算出的：

$$ \tag{9}
\begin{align}
h(S(n)) &= T(h(n)) \\[6pt]
k(S(n)) &= T(k(n))
\end{align}
$$

假设 $h(n)=k(n)$，由 $(9)$ 得到：

$$h(S(n))=T(h(n))=T(k(n))=k(S(n))$$

归纳法表明这两个函数在每个自然数处都重合。对于 $(7)$ 中的 $u$ 和 $v$，集合 $X$ 是 $\mathbb{N}$，初始值是 $0$，函数 $T$ 是后继 $S$。

- - -

接下来，我们建立一个有用的推论：把结合律和交换律结合起来，可以改变加数的分组和顺序。下面的等式依次应用结合律、交换律、再应用结合律，交换了两个加数：

$$
\begin{align}
(a+b)+c &= a+(b+c) \\[6pt]
&= a+(c+b) \\[6pt]
&= (a+c)+b
\end{align}
$$

加数更多时，就得到交换分组律，它通过重新组合加数来简化计算：

$$
\begin{align}
(a+b)+(c+d) &= ((a+b)+c)+d \\[6pt]
&= ((a+c)+b)+d \\[6pt]
&= (a+c)+(b+d)
\end{align}
$$

- - -

最后，加法满足消去律，它表述如下：

$$a+c=b+c\ \Longrightarrow\ a=b \tag{10}$$

当 $c=0$ 时，等式直接化为 $a=b$。假设这条性质对某个自然数 $c$ 成立，并考虑等式 $a+S(c)=b+S(c)$。利用 $(3)$ 中加法的递归定义，可以把它改写成：

$$S(a+c)=S(b+c)$$

在这个等式中，数 $a+c$ 和 $b+c$ 有相同的后继。因此，由 $(P4)$ 给出的 $S$ 的[单射性](../injective-surjective-and-bijective-functions/)，得到 $a+c=b+c$。归纳假设指出，当公共加数为 $c$ 时消去律成立。把它应用于刚得到的等式，就得出 $a=b$。这样就证明了，如果这条性质对 $c$ 成立，那么它对其后继 $S(c)$ 也成立。由于它对 $c=0$ 成立，归纳原理保证它对每个 $c\in\mathbb{N}$ 成立。

## 加法与函数的迭代

我们已经看到，加法是通过一个迭代过程中的一系列步骤构造出来的。这种构造可以推广到其他函数：取一个集合 $X$ 和一个函数 $f : X \to X$，并定义迭代 $f^n$，它是把 $f$ 一共应用 $n$ 次得到的。$f$ 的各次迭代由下列关系递归地定义，它们对每个 $x\in X$ 和 $n\in\mathbb{N}$ 成立：

$$ \tag{11}
\begin{align}
f^0(x) &= x \\[6pt]
f^{S(n)}(x) &= f(f^n(x))
\end{align}
$$

当 $f = S$ 时，就回到 $(3)$ 中用来定义加法的后继迭代。对任意函数，先应用它 $m$ 次、再应用 $n$ 次，相当于应用它 $m + n$ 次。这给出恒等式：

$$\tag{12}
f^{m+n}(x) = f^n(f^m(x))
$$

可以固定 $m$ 和 $x$，对 $n$ 作归纳来证明这个恒等式。当 $n = 0$ 时，左端是 $f^m(x)$，因为 $m + 0 = m$，而右端有相同的值，因为 $f^0$ 是恒等函数。假设结论对 $n$ 成立。加法的定义和 $(11)$ 给出：

$$
\begin{align}
f^{m+S(n)}(x) &= f^{S(m+n)}(x) \\[6pt]
&= f(f^{m+n}(x)) \\[6pt]
&= f(f^n(f^m(x))) \\[6pt]
&= f^{S(n)}(f^m(x))
\end{align}
$$

由于已经证明加法满足交换律，交换两个下标得到：

$$
f^n(f^m(x)) = f^{m+n}(x) = f^m(f^n(x))
$$

因此，同一个函数的各次迭代可以按任意顺序[复合](../composite-functions/)，结果相同。

## 乘法与幂

到目前为止，我们研究了加法及其定义和性质。乘法的定义与此类似，使用一个新的递归，并对每个 $m \in \mathbb{N}$ 规定下列关系：

$$ \tag{12}
\begin{align}
&m \cdot 0 = 0 \\[6pt]
&m \cdot S(n) = m \cdot n + m
\end{align}
$$

如定义所示，乘法是由加法建立起来的。例如，可以用 $(12)$ 中的乘法规则计算乘积 $3 \cdot 2$，得到：

$$
\begin{align}
3 \cdot 2 &= 3 \cdot S(S(0)) \\[6pt]
&= 3 \cdot S(0) + 3 \\[6pt]
&= (3 \cdot 0 + 3) + 3 \\[6pt]
&= (0 + 3) + 3 \\[6pt]
&= 6
\end{align}
$$

这个计算反复应用乘法的递归条款，直到乘数化为零。此后只需加法的规则就能得到结果。

- - -

[乘方](../powers/)由乘法通过类似的递归构造出来。相应的递归关系见 $(13)$：

$$ \tag{13}
\begin{align}
&m^0 = 1 \\[6pt]
&m^{S(n)} = m^n \cdot m
\end{align}
$$

第二个等式把底数为 $m$、指数为后继的幂化为再乘一次 $m$。可以看到，这些算术运算中的每一个都是借助前一个运算递归地定义的。

- - -

为了使讨论完整，我们指出：乘法满足结合律和交换律，以 $1$ 为单位元，并且对加法满足分配律。因此，下列等式对每个 $a, b, c \in \mathbb{N}$ 成立：

$$
\begin{align}
&(a \cdot b) \cdot c = a \cdot (b \cdot c) \\[6pt]
&a \cdot b = b \cdot a \\[6pt]
&a \cdot 1 = a \\[6pt]
&a \cdot (b + c) = a \cdot b + a \cdot c
\end{align}
$$

乘法还满足非零因子的消去律。对每个 $a, b, c \in \mathbb{N}$，当 $c \neq 0$ 时，等式 $a \cdot c = b \cdot c$ 蕴含 $a = b$。最后，自然数没有零因子，也就是说，两个自然数的乘积为零，仅当两个因子中至少有一个为零。

- - -

现在证明乘法对加法满足分配律，即下面的关系对每个 $a,b,c\in\mathbb{N}$ 成立：

$$ \tag{14}
a\cdot(b+c)=a\cdot b+a\cdot c
$$

固定两个自然数 $a$ 和 $b$，对 $c$ 作归纳。当 $c=0$ 时，和 $b+0$ 等于 $b$，乘积 $a\cdot 0$ 等于 $0$，所以等式两边相等：

$$
\begin{align}
a\cdot(b+0) &= a\cdot b \\[6pt]
&= a\cdot b+0 \\[6pt]
&= a\cdot b+a\cdot 0
\end{align}
$$

假设 $(14)$ 对任意一个自然数 $c$ 成立。我们必须证明 $a\cdot(b+S(c))=a\cdot b+a\cdot S(c)$。由 $(3)$，有 $b+S(c)=S(b+c)$。应用乘法的递归定义，得到：

$$
\begin{align}
a\cdot(b+S(c)) &= a\cdot S(b+c) \\[6pt]
&= a\cdot(b+c)+a
\end{align}
$$

在最后一个表达式中，归纳假设使我们可以把 $a\cdot(b+c)$ 换成 $a\cdot b+a\cdot c$。然后利用加法的结合律把最后两个加数组合起来，得到：

$$
\begin{align}
a\cdot(b+c)+a &= (a\cdot b+a\cdot c)+a \\[6pt]
&= a\cdot b+(a\cdot c+a) \\[6pt]
&= a\cdot b+a\cdot S(c)
\end{align}
$$

因此这条性质对每个 $c\in\mathbb{N}$ 成立，又由于 $a$ 和 $b$ 是任意选取的，分配律对所有自然数得证。当第一个因子是和时，乘法的交换律同样给出分配律：

$$
\begin{align}
(a+b)\cdot c &= c\cdot(a+b) \\[6pt]
&= c\cdot a+c\cdot b \\[6pt]
&= a\cdot c+b\cdot c
\end{align}
$$

## 序

集合 $\mathbb{N}$ 有一个全序，它可以直接用加法来定义。给定两个自然数 $m$ 和 $n$，关系 $m \leq n$ 成立，当且仅当有一个自然数 $k$ 满足下面的等式：

$$
n = m + k \tag{14}
$$

数 $k$ 恰好在 $m\leq n$ 时存在，它给出从 $m$ 到达 $n$ 所需应用后继的次数。全序性是指，对任意两个自然数 $m$ 和 $n$，关系 $m\leq n$ 与 $n\leq m$ 中至少有一个成立。这样定义的序还有两条性质：

+ 三歧性指出，对每个 $m, n \in \mathbb{N}$，关系 $m < n$、$m = n$、$n < m$ 中恰有一个成立。
+ 离散性指出，没有自然数严格位于两个相邻的自然数之间。因此，对每个 $n \in \mathbb{N}$，没有 $k \in \mathbb{N}$ 满足 $n < k < S(n)$。

这里描述的序是一个良序，也就是说，$\mathbb{N}$ 的每个非空子集都有关于 $\leq$ 的最小元素。
