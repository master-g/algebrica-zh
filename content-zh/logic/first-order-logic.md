---
title: 一阶逻辑
title_en: First-Order Logic
source: https://algebrica.org/first-order-logic/
license: CC BY-NC 4.0
tags:
  - atomic-formula
  - bound-variable
  - domain-of-discourse
  - existential-quantifier
  - first-order-logic
  - free-variable
  - interpretation
  - logical-consequence
  - model
  - predicate-symbol
  - satisfaction
  - second-order-logic
  - sentence
  - signature
  - structure
  - substitution
  - term
  - universal-quantifier
  - validity
  - variable-assignment
translation:
  status: current
  source_hash: 0301b49dceaba7c9d4442bcdfaeb5a5f7c4d6baa54f808dab79575a252097598
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 引言

考虑下面的论证：每个大于 $2$ 的素数都是奇数；数 $7$ 是大于 $2$ 的素数；所以 $7$ 是奇数。在[命题逻辑](../propositional-logic/)中作符号化，把 $p$ 和 $q$ 指定给两个前提，把 $r$ 指定给结论。解释 $M(p) = M(q) = T$、$M(r) = F$ 满足两个前提而使结论为假，所以 $\{p, q\} \not\models r$。原来的论证是有效的，而它的命题论证形式却是无效的。

这种不相称来自符号化。命题逻辑把原子看作带有真值的整体，所以“每个”“素数”“大于”这些词以及名称“$7$”在公式中没有留下任何痕迹。因此，这种符号化丢掉了一般性前提与特殊性前提之间的联系。

一阶逻辑保留了这些信息。它从命题所提到的对象、赋予这些对象的性质和关系，以及说明一个断言涉及每个对象还是至少一个对象的量词这几个方面来分析命题。我们把这三个命题符号化如下：

$$
\forall x\ ((P(x) \wedge G(x, c)) \rightarrow O(x)) \qquad P(d) \wedge G(d, c) \qquad O(d)
$$

这里 $P$ 读作“是素数”，$O$ 读作“是奇数”，$G$ 读作“大于”，常量符号 $c$ 和 $d$ 是 $2$ 和 $7$ 的名称。把第一个前提在 $d$ 处实例化，得到 $(P(d) \wedge G(d, c)) \rightarrow O(d)$，再由第二个前提得到 $O(d)$。

## 符号与签名

一阶语言的符号分为两组。我们始终使用下列逻辑符号：

+ 无穷多个变量 $x, y, z, x_1, x_2, \dots$
+ 联结词 $\neg$、$\wedge$、$\lor$、$\rightarrow$、$\leftrightarrow$
+ 量词 $\forall$ 和 $\exists$
+ 等号 $=$
+ 括号和逗号

非逻辑符号随讨论的主题而变，它们构成语言的签名 $\Sigma$：

+ 常量符号 $a, b, c, \dots$
+ 函数符号 $f, g, h, \dots$，每个都有元数 $n \geq 1$
+ 谓词符号 $P, Q, R, \dots$，每个都有元数 $n \geq 1$

一元谓词符号用于表示性质，元数为 $2$ 或更大的谓词符号用于表示关系。有些讲法把常量符号看作元数为 $0$ 的函数符号，这样下面的定义可以少一条。我们始终使用等号，它的解释固定为论域上的恒等关系。

签名决定可以构成哪些项和公式，但它不给非逻辑符号指定含义。只有一个二元谓词 $D$ 而没有函数符号的签名可以表达 $D$ 是传递的，但在加入相应的函数符号之前，它不能含有表示两个对象的最大公约数的项。

## 项与公式

一阶语言有两个语法范畴：项和公式。项是对象的名称，公式作出断言。这两个范畴不相交，所以项从不是公式，公式也从不是项。这种区分在命题逻辑中没有对应物，在那里公式是唯一的范畴。

$\Sigma$ 的项归纳地定义如下：

+ 每个变量都是项。
+ $\Sigma$ 的每个常量符号都是项。
+ 如果 $f$ 是 $\Sigma$ 的 $n$ 元函数符号，$t_1, \dots, t_n$ 是项，那么 $f(t_1, \dots, t_n)$ 是项。
+ 除此之外没有别的项。

不含变量的项是基项。公式则由第二个归纳来定义：

+ 如果 $P$ 是 $\Sigma$ 的 $n$ 元谓词符号，$t_1, \dots, t_n$ 是项，那么 $P(t_1, \dots, t_n)$ 是公式，称为原子公式。
+ 如果 $t_1$ 和 $t_2$ 是项，那么 $t_1 = t_2$ 是原子公式。
+ 如果 $\varphi$ 是公式，那么 $\neg\varphi$ 是公式。
+ 如果 $\varphi$ 和 $\psi$ 是公式，那么 $(\varphi \wedge \psi)$、$(\varphi \lor \psi)$、$(\varphi \rightarrow \psi)$ 和 $(\varphi \leftrightarrow \psi)$ 是公式。
+ 如果 $\varphi$ 是公式，$x$ 是变量，那么 $\forall x\varphi$ 和 $\exists x\varphi$ 是公式。
+ 除此之外没有别的公式。

原子公式对应于命题逻辑的原子命题，关于联结词的各条不变。关于量词的那一条在命题逻辑中没有对应物。在 $\forall x\varphi$ 和 $\exists x\varphi$ 中，公式 $\varphi$ 是这个量词出现的辖域。

优先级的约定照样沿用，量词比二元联结词结合得更紧。按照这个约定，$\forall x P(x) \rightarrow Q(x)$ 是 $(\forall x P(x)) \rightarrow Q(x)$ 的缩写，它与 $\forall x (P(x) \rightarrow Q(x))$ 是不同的公式。明确写出括号可以使辖域一目了然，因为这两个公式的区别就在于量词管辖 $x$ 的哪些出现。

## 自由变量与约束变量

变量 $x$ 在公式中的一次出现，如果位于关于 $x$ 的量词的辖域内，就是约束的，否则是自由的。在 $\varphi$ 中有自由出现的变量的集合 $\mathrm{FV}(\varphi)$ 按 $\varphi$ 的构造归纳地定义。对于项 $t$，设 $\mathrm{Var}(t)$ 是在 $t$ 中出现的变量的集合。

$$
\begin{array}{ll}
\mathrm{FV}(P(t_1, \dots, t_n)) = \mathrm{Var}(t_1) \cup \cdots \cup \mathrm{Var}(t_n) \\[6pt]
\mathrm{FV}(t_1 = t_2) = \mathrm{Var}(t_1) \cup \mathrm{Var}(t_2) \\[6pt]
\mathrm{FV}(\neg\varphi) = \mathrm{FV}(\varphi) \\[6pt]
\mathrm{FV}(\varphi \star \psi) = \mathrm{FV}(\varphi) \cup \mathrm{FV}(\psi) \qquad \star \in \{\ \wedge, \lor, \rightarrow, \leftrightarrow\ \} \\[6pt]
\mathrm{FV}(\forall x\varphi) = \mathrm{FV}(\exists x\varphi) = \mathrm{FV}(\varphi) \setminus \{x\}
\end{array}
$$

只有最后一条从自由变量的集合中去掉一个变量。关于 $x$ 的量词约束它的辖域内 $x$ 的自由出现，而不触及其他任何变量。

同一个变量可以在一个公式中既有自由出现又有约束出现。在

$$
L(x, y) \wedge \exists y\ L(y, x)
$$

中，$x$ 的两次出现都是自由的。$y$ 在左合取支中的出现是自由的，而 $y$ 在 $L(y, x)$ 中的出现被 $\exists y$ 约束。因此上面这个公式的自由变量是 $\{x, y\}$。把约束变量改名为 $z$，得到 $L(x, y) \wedge \exists z\ L(z, x)$，它说的是同一件事，而没有让 $y$ 身兼两个角色。

满足 $\mathrm{FV}(\varphi) = \varnothing$ 的公式是闭的，也称为句子。句子作出断言而不需要变量的取值。带有自由变量的公式则需要给这些变量指定值。例如，在 $>$ 和 $3$ 的通常解释下，公式 $x > 3$ 在 $x$ 确定之前既不真也不假。

## 代入

用 $\varphi[t/x]$ 表示把 $\varphi$ 中 $x$ 的每个自由出现都替换为项 $t$ 所得的结果。约束出现保持不变，因为代入只作用于自由出现。

只有当替换不会使 $t$ 的某个变量变成约束变量时，替换才是允许的。取只有一个二元谓词 $L$ 的签名，把它读作严格序。考虑公式：

$$
\varphi := \exists y\ L(x, y)
$$

在整数上把 $L$ 读作 $<$，公式 $\varphi$ 对 $x$ 的每个值都成立，因为每个整数都有比它大的整数。用项 $y$ 代入 $x$，得到 $\exists y\ L(y, y)$，它断言有某个整数小于它自身，这是假的。这次代入造成了变量捕获。量词约束了代入引入的 $y$ 的出现，所以所得的公式含义不同。

如果 $\varphi$ 中 $x$ 的任何自由出现都不在约束 $t$ 的某个变量的量词的辖域内，就说项 $t$ 在 $\varphi$ 中对 $x$ 可代入。把 $\varphi$ 的约束变量改名为新变量，可以恢复可代入性而不改变公式的含义。在上面的例子中，把 $\varphi$ 改写为 $\exists z\ L(x, z)$ 就使 $y$ 可代入，并得到 $\exists z\ L(y, z)$，它对 $y$ 所说的正是 $\varphi$ 对 $x$ 所说的。只要量词规则用项代入变量，这个附加条件就适用。

## 结构

命题语义需要给原子指定真值。一阶语义还需要一个论域以及对非逻辑符号的解释。签名 $\Sigma$ 的结构，也称为解释，由下列数据组成：

+ 一个非空集合 $M$，即论域
+ 对 $\Sigma$ 的每个常量符号 $c$，一个元素 $c^{\mathcal{M}} \in M$
+ 对 $\Sigma$ 的每个 $n$ 元函数符号 $f$，一个函数 $f^{\mathcal{M}} : M^n \rightarrow M$
+ 对 $\Sigma$ 的每个 $n$ 元谓词符号 $P$，一个关系 $P^{\mathcal{M}} \subseteq M^n$

我们把这个结构记为 $\mathcal{M}$。它的论域确定变量的取值范围，解释 $c \mapsto c^{\mathcal{M}}$、$f \mapsto f^{\mathcal{M}}$、$P \mapsto P^{\mathcal{M}}$ 确定非逻辑符号的含义。我们始终要求 $M \neq \varnothing$。

作为贯穿全文的例子，取 $\Sigma$ 含有常量符号 $a$ 和 $b$、二元函数符号 $g$ 和 $l$，以及一个二元谓词符号 $D$。把论域和常量的解释定义为：

$$
M = \{\ 1, 2, 3, 6\ \} \qquad a^{\mathcal{M}} = 1 \qquad b^{\mathcal{M}} = 6
$$

把 $g^{\mathcal{M}}$ 解释为最大公约数，把 $l^{\mathcal{M}}$ 解释为最小公倍数。谓词 $D$ 的解释是整除关系：

$$
D^{\mathcal{M}} = \{\ (m, n) \in M^2 : m \mid n\ \}
$$

论域是 $6$ 的因数的集合，它在 $\gcd$ 和 $\mathrm{lcm}$ 下都封闭，所以 $g^{\mathcal{M}}$ 和 $l^{\mathcal{M}}$ 如所要求的那样是 $M$ 上处处有定义的函数。

## 赋值与满足

为了计算含有变量的项的值，还需要这些变量的值。变量赋值是从变量到论域的函数 $s$，即 $s : \mathrm{Var} \rightarrow M$。用 $s[x \mapsto d]$ 表示除了在 $x$ 处取值 $d$ 之外处处与 $s$ 相同的赋值。于是每个项 $t$ 表示 $M$ 的一个元素 $t^{\mathcal{M}}[s]$，它按 $t$ 的结构递归地计算：

$$
x^{\mathcal{M}}[s] = s(x) \qquad c^{\mathcal{M}}[s] = c^{\mathcal{M}} \qquad (f(t_1, \dots, t_n))^{\mathcal{M}}[s] = f^{\mathcal{M}}(t_1^{\mathcal{M}}[s], \dots, t_n^{\mathcal{M}}[s])
$$

在上面的结构中，取 $s(x) = 2$ 和 $s(y) = 3$，项 $l(x, g(y, b))$ 分两步求值。内层的项给出 $g^{\mathcal{M}}(3, 6) = 3$，外层的项给出 $l^{\mathcal{M}}(2, 3) = 6$。

记号 $\mathcal{M} \models \varphi[s]$ 的意思是 $\varphi$ 在 $\mathcal{M}$ 中在 $s$ 下为真。满足关系按 $\varphi$ 的构造递归地定义。在下面各条中，右边的 ∧ 和 ∨ 在元语言的层面上分别读作“且”和“或”，∀ 和 ∃ 分别读作“对每个”和“对某个”。

$$
\begin{array}{ll}
\mathcal{M} \models P(t_1, \dots, t_n)[s] & \iff \quad (t_1^{\mathcal{M}}[s], \dots, t_n^{\mathcal{M}}[s]) \in P^{\mathcal{M}} \\[6pt]
\mathcal{M} \models (t_1 = t_2)[s] & \iff \quad t_1^{\mathcal{M}}[s] = t_2^{\mathcal{M}}[s] \\[6pt]
\mathcal{M} \models \neg\varphi[s] & \iff \quad \mathcal{M} \not\models \varphi[s] \\[6pt]
\mathcal{M} \models (\varphi \wedge \psi)[s] & \iff \quad \mathcal{M} \models \varphi[s] \ \wedge \ \mathcal{M} \models \psi[s] \\[6pt]
\mathcal{M} \models (\varphi \lor \psi)[s] & \iff \quad \mathcal{M} \models \varphi[s] \ \vee \ \mathcal{M} \models \psi[s] \\[6pt]
\mathcal{M} \models (\varphi \rightarrow \psi)[s] & \iff \quad \mathcal{M} \not\models \varphi[s] \ \vee \ \mathcal{M} \models \psi[s] \\[6pt]
\mathcal{M} \models (\varphi \leftrightarrow \psi)[s] & \iff \quad (\mathcal{M} \models \varphi[s] \ \wedge \ \mathcal{M} \models \psi[s]) \ \vee \ (\mathcal{M} \not\models \varphi[s] \ \wedge \ \mathcal{M} \not\models \psi[s]) \\[6pt]
\mathcal{M} \models \forall x\varphi[s] & \iff \quad \mathcal{M} \models \varphi[s[x \mapsto d]] \quad \forall \ d \in M \\[6pt]
\mathcal{M} \models \exists x\varphi[s] & \iff \quad \mathcal{M} \models \varphi[s[x \mapsto d]] \quad \exists \ d \in M
\end{array}
$$

关于联结词的各条重现了命题逻辑的真值表。关于量词的各条取遍论域。由于论域可能是无限的，一阶公式一般不能用有限的真值表来求值。

满足关系只通过自由变量依赖于赋值。如果 $s$ 和 $s'$ 在 $\mathrm{FV}(\varphi)$ 上一致，那么 $\mathcal{M} \models \varphi[s]$ 当且仅当 $\mathcal{M} \models \varphi[s']$。证明是对 $\varphi$ 作归纳。原子的情形成立，因为 $t^{\mathcal{M}}[s]$ 只依赖于 $s$ 在 $\mathrm{Var}(t)$ 上的值；联结词的情形由归纳假设立即得到。对于 $\forall x\varphi$，对每个 $d$，赋值 $s[x \mapsto d]$ 和 $s'[x \mapsto d]$ 在 $\mathrm{FV}(\varphi) \subseteq \mathrm{FV}(\forall x\varphi) \cup \{x\}$ 上一致，所以归纳假设适用于其中每一个。

句子没有自由变量，所以赋值不起作用，我们写作 $\mathcal{M} \models \varphi$。论域和非逻辑符号的解释确定了句子的真值。

## 模型、有效性与逻辑后承

命题逻辑的语义概念按下面的方式推广到结构。

+ 当 $\mathcal{M} \models \varphi$ 时，结构 $\mathcal{M}$ 是句子 $\varphi$ 的模型。
+ 如果句子有模型，它就是可满足的，否则是不可满足的。
+ 如果句子的签名的每个结构都是它的模型，就说句子是有效的，记作 $\models \varphi$。
+ 如果公式 $\varphi$ 和 $\psi$ 在每个结构中、在每个变量赋值下都有相同的真值，就说它们逻辑等价，记作 $\varphi \equiv \psi$。
+ 如果满足句子集 $S$ 的每个成员的结构也都满足 $\varphi$，就说句子 $\varphi$ 是 $S$ 的逻辑后承，记作 $S \models \varphi$。

对于带有自由变量的公式，$\varphi \models \psi$ 的意思是，满足 $\varphi$ 的每个结构和变量赋值也满足 $\psi$。

同样的[反驳等价关系](../automated-deduction-in-propositional-logic/)在一阶逻辑中成立。对于句子集 $S$ 和句子 $\varphi$，$S \models \varphi$ 当且仅当 $S \cup \{\neg\varphi\}$ 不可满足。证明与命题的情形相同，不依赖于解释的内部结构。

对于有 $n$ 个原子的命题公式，有效性涉及 $2^n$ 个解释，可以用一张有限的表来判定。一阶有效性涉及签名的所有结构，它们的论域可以有[任意的基数](../cardinality-and-countable-sets/)。没有任何有限的真值表能列举所有这些结构，所以[自动演绎的方法](../automated-deduction-in-first-order-logic/)改为寻找反驳。

句子的真值是相对于结构而言的。句子 $\exists x \forall y\ D(y, x)$ 在上面的因数结构中为真，在那里 $6$ 能被论域的每个元素整除。在带有同样整除关系的正整数结构中，这个句子为假，因为没有任何正整数是所有正整数的倍数。同一个句子在一个结构中为真而在另一个结构中为假，所以它是偶真的，而不是有效的。

同一签名的下列句子在因数结构中都为真：

+ $\forall x\ D(a, x)$，因为 $1$ 整除每个元素。
+ $\forall x \forall y\ ((D(x, y) \wedge D(y, x)) \rightarrow x = y)$，即整除关系的反对称性。
+ $\forall x \forall y\ D(g(x, y), x)$，因为最大公约数整除它的各个自变量。

句子 $\forall x \exists y\ (D(x, y) \wedge \neg(x = y))$ 在 $\mathcal{M}$ 中为假。对于 $x = 6$，$y$ 没有见证，因为 $6$ 是论域在整除关系下的最大元。在正整数上，同一个句子为真，$y = 2x$ 是一个见证。

## 量词律

由满足关系的各条可以得到支配量词的等价式。两条对偶律如下：

$$
\neg \forall x\varphi \equiv \exists x \neg\varphi \qquad \neg \exists x\varphi \equiv \forall x \neg\varphi
$$

对于第一条，固定 $\mathcal{M}$ 和 $s$。那么 $\mathcal{M} \models \neg\forall x\varphi[s]$ 成立，当且仅当 $\mathcal{M} \models \varphi[s[x \mapsto d]]$ 对至少一个 $d \in M$ 不成立，也就是当且仅当 $\mathcal{M} \models \neg\varphi[s[x \mapsto d]]$ 对至少一个 $d \in M$ 成立。最后这句话就是 $\exists x\neg\varphi$ 的满足条件。第二条律可以用同样的论证得到，或者把第一条应用于 $\neg\varphi$ 得到。

因此，两个量词中的任何一个都可以由另一个连同否定来定义，一种语言可以只取其中一个作为初始符号。两个都保留，公式更短，读起来也更直接。

下面两个分配等价式成立：

$$
\forall x (\varphi \wedge \psi) \equiv \forall x \varphi \wedge \forall x \psi \qquad \exists x (\varphi \lor \psi) \equiv \exists x \varphi \lor \exists x \psi
$$

全称量词对析取不满足分配律。在整数上，把 $\varphi$ 读作“$x$ 是偶数”，把 $\psi$ 读作“$x$ 是奇数”，句子 $\forall x (\varphi \lor \psi)$ 为真，而 $\forall x \varphi \lor \forall x \psi$ 为假。对偶地，同一对公式使 $\exists x \varphi \wedge \exists x \psi$ 为真而使 $\exists x(\varphi \wedge \psi)$ 为假，因为没有整数既是偶数又是奇数。在每种情形中仍有一个方向是有效的，即从 $\forall x \varphi \lor \forall x \psi$ 到 $\forall x (\varphi \lor \psi)$，以及从 $\exists x (\varphi \wedge \psi)$ 到 $\exists x \varphi \wedge \exists x \psi$。

量词可以越过不含它的变量的子公式。如果 $x \notin \mathrm{FV}(\psi)$，那么

$$
\forall x (\varphi \lor \psi) \equiv \forall x \varphi \lor \psi \qquad \exists x (\varphi \wedge \psi) \equiv \exists x \varphi \wedge \psi
$$

把约束变量改名使它们互不相同之后，反复应用这些律和命题等价式，就得到前束形式的公式，其中每个量词都在最前面。

- - -

相邻的同种量词可以交换，所以 $\forall x \forall y \varphi \equiv \forall y \forall x \varphi$，对 $\exists$ 也一样。不同种的量词一般不能交换。对不同的变量 $x$ 和 $y$，下面的蕴含是有效的：

$$
\exists y \forall x\ \varphi \models \forall x \exists y\ \varphi
$$

固定结构 $\mathcal{M}$ 和赋值 $s$，并假设 $\mathcal{M} \models \exists y \forall x\ \varphi[s]$。有某个 $e \in M$ 在 $s[y \mapsto e]$ 下满足 $\forall x \varphi$，所以对每个 $d \in M$，赋值 $s[y \mapsto e][x \mapsto d]$ 满足 $\varphi$。由于 $x$ 和 $y$ 不同，这个赋值也就是 $s[x \mapsto d][y \mapsto e]$。因此元素 $e$ 对每个 $d$ 都是内层存在量词的见证，所以 $\mathcal{M} \models \forall x \exists y\ \varphi[s]$。同一个 $e$ 对每个 $d$ 都管用，这是比结论所要求的更强的条件。

逆命题不成立。在整数上把 $\varphi$ 读作 $x + y = 0$，句子 $\forall x \exists y\ (x + y = 0)$ 为真，因为 $y = -x$ 是每个 $x$ 的见证。句子 $\exists y \forall x\ (x + y = 0)$ 为假，因为单独一个 $y$ 必须同时是每个整数的加法逆元。量词的顺序记录了见证是否可以依赖于被全称量化的对象，交换它们就改变了断言。

## 量化陈述的符号化

基本的全称模式以条件式为母式，而基本的存在模式以合取式为母式。下面左边的公式对应“每个 F 都是 G”，右边的公式对应“有的 F 是 G”：

$$
\forall x\ (F(x) \rightarrow G(x)) \qquad \exists x\ (F(x) \wedge G(x))
$$

把联结词对调，在两种情形下都会给出错误的内容。公式 $\forall x (F(x) \wedge G(x))$ 说的是论域中的每个对象都既是 $F$ 又是 $G$，这是关于整个论域的断言，而不是关于满足 $F$ 的对象的断言。公式 $\exists x (F(x) \rightarrow G(x))$ 被任何不是 $F$ 的对象满足，因为前件为假的条件式为真。因此，即使没有任何对象既是 $F$ 又是 $G$，它也可能为真。

> 当没有对象满足前件时，全称量化的条件式为真。句子 $\forall x (F(x) \rightarrow G(x))$ 在任何满足 $F^{\mathcal{M}} = \varnothing$ 的结构中成立，与 $G$ 无关。日常语言可能暗示存在满足 $F$ 的对象，但这个公式并不断言它们存在。把 $\exists x F(x)$ 作为单独的合取支加上，才明确说出这一点。

- - -

因数签名提供了更多例子。在正整数上把 $D(x, y)$ 读作“$x$ 整除 $y$”，并加入表示素数的一元谓词 $P$：

+ “每个数都能被 $1$ 整除”成为 $\forall x\ D(a, x)$。
+ “素数除了 $1$ 和它自身之外没有别的因数”成为 $\forall x \forall y\ ((P(x) \wedge D(y, x)) \rightarrow (y = a \lor y = x))$。
+ “有的数有不同于它自身的素因数”成为 $\exists x \exists y\ (P(y) \wedge D(y, x) \wedge \neg(y = x))$。
+ “每个数都是某个素数的倍数”成为 $\forall x \exists y\ (P(y) \wedge D(y, x))$，它在正整数上为假，因为 $1$ 没有素因数。

[素数无界](../integers/)这一陈述不能用这个签名直接从大小的角度表达，因为它没有序符号。在正整数上，句子 $\forall x \exists y\ (P(y) \wedge \neg D(y, x))$ 是用整除关系作出的等价表述，因为它说的是每个数都有一个不整除它的素数。加入表示严格序的二元谓词 $L$，就可以把无界性直接表达为 $\forall x \exists y\ (P(y) \wedge L(x, y))$。签名决定有哪些表述可用，而结构决定它们的真假。

## 一阶逻辑与二阶逻辑

向签名中加入符号并不改变量词的取值范围。在一阶语言中，量词约束的变量取遍论域，而不是取遍[论域的子集](../sets/)、关系或函数。二阶语言有这样的变量。在标准语义下，公式 $\exists X\ (X(a) \wedge \neg X(b))$ 对 $M$ 的子集 $X$ 作量化。

[自然数的归纳原理](../principle-of-mathematical-induction/)说明了这种区别。它的二阶陈述对 $\mathbb{N}$ 的所有子集作量化：

$$
\forall X\ ((X(0) \wedge \forall n\ (X(n) \rightarrow X(n+1))) \rightarrow \forall n\ X(n))
$$

一阶算术不能对 $X$ 作量化。因此它的归纳原理是一个公理模式，对语言的每个公式 $\varphi(n, \overline{y})$ 有一个实例。在下面的公式中，默认对参数 $\overline{y}$ 取全称闭包：

$$
(\varphi(0, \overline{y}) \wedge \forall n\ (\varphi(n, \overline{y}) \rightarrow \varphi(n+1, \overline{y}))) \rightarrow \forall n\ \varphi(n, \overline{y})
$$

这个模式有可数多个实例，每个公式一个，而二阶公理涵盖 $\mathbb{N}$ 的所有子集，它们有不可数多个。连同其余的[自然数公理](../natural-numbers/)，二阶表述[在同构的意义下](../homomorphisms-and-isomorphisms/)确定了 $\mathbb{N}$，而一阶理论有非标准模型。

一阶逻辑有可靠且完备的证明系统，并满足紧致性。在可数语言中，任何有无限模型的句子集都有可数无限的模型，以及每种无限基数的模型。标准语义下的二阶逻辑没有完备的、可递归公理化的证明系统。一阶逻辑的演绎过程依赖于完备性，并适用于一阶公式。
