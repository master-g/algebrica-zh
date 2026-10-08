---
title: 实数的性质
title_en: Properties of Real Numbers
source: https://algebrica.org/properties-of-real-numbers/
license: CC BY-NC 4.0
tags:
  - absolute-value
  - additive-identity
  - additive-inverse
  - associativity
  - cauchy-sequence
  - closure
  - commutativity
  - completeness
  - density
  - distributivity
  - multiplicative-identity
  - multiplicative-inverse
  - order-relation
  - ordered-field
  - pemdas
  - rational-exponentiation
  - real-numbers
  - transitivity
  - triangle-inequality
  - trichotomy
translation:
  status: current
  source_hash: 2dbd59537e494deee7a7c97889e18485df7e5fb588fb1f6cee75b99251e2bdca
  translator: omp
  updated: "2026-07-22T14:37:29.467Z"
---
## 运算顺序

涉及多种运算的表达式需要固定的求值顺序才能具有确定的值。记忆法 PEMDAS 记录了这一顺序：

+ P，括号
+ E，指数
+ M，乘法
+ D，除法
+ A，加法
+ S，减法

括号内的表达式首先求值。接下来计算指数。乘法和除法从左到右执行。然后加法和减法从左到右进行。

> 乘法和除法具有相同的优先级，加法和减法亦然。当两种运算具有相同的优先级时，按从左到右的顺序求值。

- - -

以下几个例子说明了这一规则：

+ 在 $3 + 4 \cdot 2$ 中，乘法先于加法。由于 $4 \cdot 2 = 8$，其值为 $3 + 8 = 11$。
+ 在 $(3 + 4) \cdot 2$ 中，括号要求先做加法。由于 $3 + 4 = 7$，其值为 $7 \cdot 2 = 14$。
+ 在 $5 + 2^3 \cdot 4$ 中，乘方得 $2^3 = 8$，乘法得 $8 \cdot 4 = 32$，加法得 $5 + 32 = 37$。

## $\mathbb{R}$ 中的稠密性与完备性

实数是稠密的。对于满足 $a<b$ 的每个 $a,b\in\mathbb{R}$，算术平均数 $c=(a+b)/2$ 满足 $a<c<b$。反复取均值可在 $a$ 和 $b$ 之间得到无穷多个实数。

[整数](../integers/)不是稠密的，因为没有整数介于 $2$ 和 $3$ 之间。[有理数](../rational-numbers/) $\mathbb{Q}$ 稠密但不完备。例如，$\sqrt{2}$ 和 $\pi$ 是实数但[无理](../irrational-numbers/)的。

> 实数是稠密且完备的。$\mathbb{R}$ 的每个有上界的非空子集在 $\mathbb{R}$ 中都有最小上界，即[上确界](../supremum-and-infimum/)，每个由实数组成的[柯西数列](../cauchy-sequence/)都收敛于实数极限。域 $\mathbb{Q}$ 稠密，但存在极限为无理数的柯西数列。

序在[极限](../theorems-on-limits/)下以其非严格形式保持。若收敛数列对每个 $n$ 满足 $a_n\geq b_n$，则 $\lim a_n\geq\lim b_n$。严格不等式不一定保持严格。例如，$1+1/n>1-1/n$ 对每个正整数 $n$ 成立，但两个数列都收敛于 $1$。

对于非严格陈述，记 $a=\lim a_n$ 和 $b=\lim b_n$。若 $a<b$，令 $\varepsilon=(b-a)/3$。对所有足够大的 $n$，有 $a_n<a+\varepsilon<b-\varepsilon<b_n$，与 $a_n\geq b_n$ 矛盾。因此 $a\geq b$。

分析中通篇使用两个相关的 $\varepsilon$ 判据。对于实数 $x$ 和 $y$，若 $x\leq y+\varepsilon$ 对每个 $\varepsilon>0$ 成立，则 $x\leq y$。否则 $x-y>0$，而选择 $\varepsilon=(x-y)/2$ 导出矛盾。类似地，若 $|x-y|\leq\varepsilon$ 对每个 $\varepsilon>0$ 成立，则 $x=y$。

## 封闭性

[集合](../sets/) $\mathbb{R}$ 在加法和乘法下是封闭的。对所有 $a,b\in\mathbb{R}$：

$$
a + b \in \mathbb{R}
$$

$$
a \cdot b \in \mathbb{R}
$$

封闭性同时取决于集合和运算。整数在加法和乘法下封闭，但在除法下不封闭，因为 $1\div2$ 不是整数。[自然数](../natural-numbers/)在减法下不封闭，因为 $3-5$ 不是自然数。

> 封闭性使加法和乘法成为 $\mathbb{R}$ 上的二元运算。每种运算将一对实数映射到另一个实数。

## 交换律

$\mathbb{R}$ 上的加法和乘法满足交换律。对所有 $a,b\in\mathbb{R}$：

$$
a + b = b + a
$$

$$
a \cdot b = b \cdot a
$$

实数构成一个交换[域](../fields/)。减法和除法一般不满足交换律：

$$
5-2\neq2-5 \qquad \text{且} \qquad \frac{2}{5}\neq\frac{5}{2}
$$

例如，$3+7=7+3=10$ 和 $3\cdot7=7\cdot3=21$。在这两种运算中，交换操作数不改变值。

> 交换律允许重排和中的各项以及积中的各因子。例如，$2x+5=5+2x$。

## 结合律

结合律允许将若干个实数的和或积重新分组而不改变其值。对所有 $a,b,c\in\mathbb{R}$：

$$
a + (b + c) = (a + b) + c
$$

$$
a \cdot (b \cdot c) = (a \cdot b) \cdot c
$$

括号的位置不改变和或积。减法和除法一般不满足结合律：

$$
8-(4-2)=6\neq2=(8-4)-2
$$

$$
16\div(8\div2)=4\neq1=(16\div8)\div2
$$

令 $a = 2$、$b = 3$ 和 $c = 4$。对于加法：

$$
2 + (3 + 4) = 2 + 7 = 9
$$

$$
(2 + 3) + 4 = 5 + 4 = 9
$$

对于乘法：

$$
2 \cdot (3 \cdot 4) = 2 \cdot 12 = 24
$$

$$
(2 \cdot 3) \cdot 4 = 6 \cdot 4 = 24
$$

两种情况下，重新分组都保持值不变。因此诸如 $a+b+c$ 的表达式不需要括号即无歧义。

## 分配律

分配律将乘法与加法联系起来。对所有 $a,b,c\in\mathbb{R}$：

$$
a \cdot (b + c) = a \cdot b + a \cdot c
$$

$$
(b + c) \cdot a = b \cdot a + c \cdot a
$$

用一个实数乘以一个和等于两个乘积之和。由于减法是加法逆元的加法，该定律还给出：

$$
a \cdot (b - c) = a \cdot b - a \cdot c
$$

- - -

令 $a = 3$、$b = 4$ 和 $c = 5$。左边给出：

$$
3 \cdot (4 + 5) = 3 \cdot 9 = 27
$$

右边给出：

$$
3 \cdot 4 + 3 \cdot 5 = 12 + 15 = 27
$$

两个表达式的值相同。分配律将 $a(x+y)$ 展开为 $ax+ay$，将 $ax+ay$ 分解为 $a(x+y)$。这两种形式在化简表达式、求解[方程](../equations/)和处理[多项式](../polynomials/)时使用。

> 分配律是将加法和乘法联系起来的域公理。

## 单位元性质

实数具有加法单位元和乘法单位元。

加法单位元 $0$ 满足，对每个 $a\in\mathbb{R}$：

$$
a + 0 = a \quad \text{且} \quad 0 + a = a
$$

数 $0$ 是加法单位元，因为加零不改变实数。它是唯一的。若 $a+n=a$ 对所有 $a\in\mathbb{R}$ 成立，则 $n=0$。

乘法单位元 $1$ 满足，对每个 $a\in\mathbb{R}$：

$$
a \cdot 1 = a \quad \text{且} \quad 1 \cdot a = a
$$

数 $1$ 是乘法单位元，因为乘以一使每个实数保持不变。它是唯一的。若 $an=a$ 对所有 $a\in\mathbb{R}$ 成立，则 $n=1$。

> 加法单位元 $0$ 对加法是中性的，乘法单位元 $1$ 对乘法是中性的。

## 逆元性质

每个实数都有加法逆元，每个非零实数都有乘法逆元。将一个元素与其逆元结合得到相应的单位元。

每个 $a\in\mathbb{R}$ 都有加法逆元 $-a$，满足：

$$
a + (-a) = 0
$$

数 $-a$ 是 $a$ 的加法逆元，即相反数。它是唯一的。若 $a+b=0$，则 $b=-a$。

- - -

每个非零 $a\in\mathbb{R}$ 都有乘法逆元 $1/a$，满足：

$$
a \cdot \frac{1}{a} = 1
$$

数 $\frac{1}{a}$ 是 $a$ 的乘法逆元，即倒数。它仅对 $a\neq0$ 有定义，因为每个与 $0$ 的乘积都等于 $0$。若 $ab=1$，则 $b=1/a$。

> 封闭性、结合律、加法单位元和加法逆元使 $(\mathbb{R},+)$ 成为一个阿贝尔[群](../groups/)。非零元素上相应的乘法公理和分配律使 $\mathbb{R}$ 成为一个[域](../fields/)。

## 序关系

除了域运算 $+$ 和 $\cdot$ 外，实数还有序关系 $<$。关系 $a>b$ 表示 $b<a$，关系 $a\leq b$ 表示 $a<b$ 或 $a=b$，而 $a\geq b$ 表示 $a>b$ 或 $a=b$。实数 $a$ 在 $a>0$ 时为正，在 $a<0$ 时为负。

序关系是一种二元关系，而非算术运算。它与域运算的相容性使 $\mathbb{R}$ 成为全序域。

[绝对值](../absolute-value/)由序定义为：当 $x\geq0$ 时 $|x|=x$，当 $x<0$ 时 $|x|=-x$。对所有实数 $x,y$，满足：

$$
|x|\geq0,\qquad |x|=0\Longleftrightarrow x=0
$$

$$
|xy|=|x||y|
$$

$$
|x+y|\leq|x|+|y|
$$

界 $-|x|\leq x\leq|x|$ 和 $-|y|\leq y\leq|y|$ 给出 $-(|x|+|y|)\leq x+y\leq|x|+|y|$，由此证明了三角不等式。

函数 $d(x,y)=|x-y|$ 是 $\mathbb{R}$ 上的一个距离。它是非负的，当且仅当 $x=y$ 时满足 $d(x,y)=0$，是对称的，且满足：

$$
d(x,z)\leq d(x,y)+d(y,z)
$$

## 三歧性与传递性

三歧律指出，对于实数 $a$ 和 $b$，以下条件恰有一个成立：

$$a < b \qquad a = b \qquad a > b$$

三个条件互斥且穷尽。因此每对实数都是可比较的。

序具有传递性。对任意实数 $a,b,c$：

$$a < b \text{ 且 } b < c \quad \Longrightarrow \quad a < c$$

传递性使链式记法 $a<b<c$ 合理，它还蕴含 $a<c$。

> 三歧性和传递性共同使 $\mathbb{R}$ 成为全序集。它们独立于域运算，仅涉及实数对的可比较性。

## 与加法的相容性

加法保持序。对任意实数 $a,b,c$：

$$a < b \quad \Longrightarrow \quad a + c < b + c$$

同样的陈述对 $\leq$、$>$ 和 $\geq$ 成立。从两边减去同一个量是通过加 $-c$ 得到的情形。

两个同向的不等式可以相加。对任意实数 $a,b,c,d$：

$$a < b \text{ 且 } c < d \quad \Longrightarrow \quad a + c < b + d$$

将 $c$ 加到第一个不等式，将 $b$ 加到第二个不等式，得到两个可通过传递性合并的不等式。类似的减法规则不成立。由 $a<b$ 和 $c<d$，一般不能推出 $a-c<b-d$。

## 与乘法的相容性

乘法对不等式的影响取决于乘数的符号。对任意实数 $a,b,c$，分两种情形。

$$a < b \text{ 且 } c > 0 \quad \Longrightarrow \quad ac < bc$$

$$a < b \text{ 且 } c < 0 \quad \Longrightarrow \quad ac > bc$$

乘以正数保持不等式，乘以负数反转不等式。乘以任何非零数保持等式。

同样的陈述对 $\leq$、$>$ 和 $\geq$ 成立。除法具有相同的规则，因为除以非零数等于乘以其倒数。

一个相关的规则涉及正数的倒数。若 $0 < a < b$，则倒数满足 $0 < 1/b < 1/a$，因此取两个正数的倒数反转其序。正数的倒数本身为正，因为正数乘以负数会给出负的乘积，与 $a(1/a) = 1 > 0$ 矛盾。将不等式 $a < b$ 乘以正量 $1/(ab)$ 则得 $1/b < 1/a$。

> 乘以负数反转不等式但保持等式。这一区别在求解[不等式](../inequalities/)时使用。

## 乘积的符号

乘法规则确定乘积的符号。对任意实数 $a$ 和 $b$：

+ 若 $a$ 和 $b$ 同号（同为正或同为负），其乘积 $ab$ 为正。
+ 若 $a$ 和 $b$ 异号，其乘积 $ab$ 为负。
+ 若 $a$ 和 $b$ 中至少有一个为零，其乘积 $ab$ 为零。

该规则通过归纳法推广到任意有限个非零实因子的乘积。当负因子的个数为偶数时乘积为正，为奇数时为负。

## 平方规则

每个实数的平方都是非负的。对任意实数 $a$：

$$a^2 \geq 0$$

等式 $a^2 = 0$ 当且仅当 $a = 0$ 时成立，因此非零实数的平方是严格正的。这一事实的证明是符号规则的直接应用。当 $a > 0$ 时，$a^2 = a \cdot a$ 的两个因子都为正，乘积为正。当 $a < 0$ 时，两个因子都为负，乘积为正。当 $a = 0$ 时，乘积为零。

例如，$a^2+b^2$ 对所有实数 $a,b$ 非负，且当且仅当 $a=b=0$ 时为零。

平方在非负数上也是单调的。若 $0 \leq a < b$，则 $a^2 < b^2$，这可由分解 $b^2 - a^2 = (b - a)(b + a)$ 得出，因为两个因子均为正。对于非负数，逆也成立，因此 $a^2 < b^2$ 迫使 $a < b$。由于这种单调性，平方根在 $[0, +\infty)$ 上是平方运算的逆运算，两个非负数可以通过其平方进行比较。

同样的推理适用于偶数次幂 $a^{2k}$，对任意正整数 $k$，因为 $a^{2k} = (a^k)^2$ 是实数的平方。奇数次幂保持底数的符号，因此 $a^{2k+1}$ 在 $a > 0$ 时为正，在 $a < 0$ 时为负。

更一般地，对每个正整数 $n$，映射 $x\mapsto x^n$ 在 $[0,+\infty)$ 上[严格递增](../increasing-and-decreasing-functions/)。若 $0\leq a<b$，则：

$$
b^n-a^n=(b-a)(b^{n-1}+b^{n-2}a+\cdots+a^{n-1})>0
$$

因此，每个非负实数至多有一个非负的[$n$ 次根](../radicals/)。其存在性由完备性得出，如[实数](../real-numbers/)中所述。对于 $x>0$ 和[有理指数](../powers/) $q=a/b$，其中 $a\in\mathbb{Z}$，$b\in\mathbb{N}$ 为正，定义 $x^q=(x^{1/b})^a$。若 $a/b=c/d$ 是另一种表示，其中 $c\in\mathbb{Z}$，$d\in\mathbb{N}$ 为正，则正数 $(x^{1/b})^a$ 和 $(x^{1/d})^c$ 具有相同的 $bd$ 次幂，因为 $ad=bc$。正根的唯一性使定义不依赖于 $q$ 的表示。指数律 $x^{q+r}=x^qx^r$、$(x^q)^r=x^{qr}$ 和 $x^{-q}=1/x^q$ 由相应的整数律得出。

## 有序域结构

上述域公理和序公理使 $\mathbb{R}$ 成为一个有序域。域公理包括封闭性、结合律、交换律、分配律、单位元和逆元。序公理包括三歧性、传递性、与加法的相容性以及与乘以正数的相容性。关于 $<$、$\leq$、$>$ 和 $\geq$ 的通常规则由这些公理得出。

有序域公理不区分 $\mathbb{R}$ 和 $\mathbb{Q}$，因为两者都是有序域。差别在于完备性。$\mathbb{R}$ 的每个有上界的非空子集在 $\mathbb{R}$ 中有最小上界，而相应的陈述在 $\mathbb{Q}$ 中不成立。有序域公理连同完备性唯一刻画了 $\mathbb{R}$。

并非每个域都能被赋予与其运算相容的序。[复数](../complex-numbers/) $\mathbb{C}$ 构成一个域，但任何相容的序都会使每个非零元素的平方为正。由于 $i^2=-1$，这样的序将蕴含 $-1>0$，与 $1>0$ 矛盾。因此 $\mathbb{R}$ 是有序域而 $\mathbb{C}$ 不是。
