---
title: 命题逻辑
title_en: Propositional Logic
source: https://algebrica.org/propositional-logic/
license: CC BY-NC 4.0
tags:
  - atomic-proposition
  - conjunctive-normal-form
  - contradiction
  - disjunctive-normal-form
  - inference-rules
  - interpretation
  - logical-connective
  - logical-consequence
  - logical-equivalence
  - modus-ponens
  - modus-tollens
  - propositional-logic
  - satisfiability
  - semantics
  - tautology
  - truth-table
  - valuation
  - well-formed-formula
translation:
  status: current
  source_hash: 33252e2e672d16be08654d6705d361ca1afb3dcf1a2ab16c778444427c400548
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 命题语言

命题逻辑研究这样一类论证：其有效性取决于命题联结词如何组合命题。它把每个原子命题视为真或假，并根据各组成部分的真值确定复合命题的真值。

原子命题所谈论的对象与这种计算无关。如果一个论证的形式是 $p$、$p \rightarrow q$，因此 $q$，那么它的有效性取决于这种形式，与 $p$ 和 $q$ 所代表的命题无关。这一限制使命题逻辑变得精确，但也限制了语言能够表达的内容。

一个命题语言 $\mathrm{Prop}[P]$ 包含原子符号、逻辑联结词和括号。集合 $P$ 包含原子命题符号，例如 $P = \{p, q, r\}$。括号记录联结词如何对公式分组。

这里使用的语言包含下列联结词：

+ 否定 $\neg$
+ 合取 $\wedge$
+ 析取 $\lor$
+ 实质条件 $\rightarrow$
+ 实质双条件 $\leftrightarrow$
+ 异或 $\oplus$

原始联结词的选择是约定俗成的。双条件和异或可以用其他联结词定义，但使用独立符号可以缩短常见公式。

根据形成规则，由 $P$ 中的符号构成的公式称为良构公式（WFF）。原子命题是最简单的 WFF，而每个其他 WFF 都以一个或多个 WFF 作为直接组成部分。

## 逻辑联结词

当一个联结词的直接组成部分的真值能够唯一确定复合公式的真值时，它称为真值函项的。$\mathrm{Prop}[P]$ 中的每个联结词都是真值函项的。

+ 否定 $\neg p$ 当且仅当 $p$ 为假时为真。
+ 合取 $p \wedge q$ 当且仅当 $p$ 和 $q$ 都为真时为真。
+ 析取 $p \lor q$ 当且仅当 $p$ 和 $q$ 中至少一个为真时为真。联结词 $\lor$ 表示包含性的“或”，因此当两个析取项都为真时，$p \lor q$ 也为真。
+ 实质条件 $p \rightarrow q$ 当且仅当前件 $p$ 为真且后件 $q$ 为假时为假。
+ 实质双条件 $p \leftrightarrow q$ 当且仅当 $p$ 和 $q$ 的真值相同时为真。
+ 异或 $p \oplus q$ 当且仅当 $p$ 和 $q$ 的真值不同时为真。

条件句的方向需要谨慎处理。“$p$ 仅当 $q$”表示 $p \rightarrow q$，而“$p$ 如果 $q$”表示 $q \rightarrow p$。在第一个公式中，$p$ 是 $q$ 的充分条件，而 $q$ 是 $p$ 的必要条件。

自然语言中有些联结词不是真值函项的。“有必要使 $p$ 成立”的真值不能仅由 $p$ 的真值确定。“但是”和“虽然”等词可以表达合取无法保留的对比，而反事实条件句通常也不是真值函项的。命题逻辑中的符号化只保留原命题的真值函项结构。

## 符号化示例

考虑定义在 $P = \{p, q\}$ 上的命题语言 $\mathrm{Prop}[P]$，其符号化对照表如下：

+ $p =$ 门是开着的。
+ $q =$ 窗是开着的。

这两个原子命题和这些联结词足以符号化若干复合命题。

+ 门没有开着写作 $\neg p$。
+ 门和窗都开着写作 $p \wedge q$。
+ 门或窗开着（也可能两者都开）写作 $p \lor q$。
+ 如果门开着，那么窗开着，写作 $p \rightarrow q$。
+ 门开着当且仅当窗开着，写作 $p \leftrightarrow q$。
+ 门或窗开着，但不是两者同时开着，写作 $p \oplus q$。
+ 门和窗都没有开着，写作 $\neg(p \lor q)$。
+ “如果门开着，那么窗开着”这一条件句的否定，写作 $\neg(p \rightarrow q)$。

最后两个公式需要括号，因为否定的作用域覆盖整个复合公式。因此，$\neg(p \lor q)$ 不同于 $\neg p \lor q$。

## 形成规则

形成规则是 $\mathrm{Prop}[P]$ 中良构公式的归纳定义。

+ 每个原子命题 $p \in P$ 都是 WFF。
+ 如果 $\varphi$ 是 WFF，那么 $\neg\varphi$ 是 WFF。
+ 如果 $\varphi$ 和 $\psi$ 是 WFF，那么 $(\varphi \wedge \psi)$、$(\varphi \lor \psi)$、$(\varphi \rightarrow \psi)$、$(\varphi \leftrightarrow \psi)$ 和 $(\varphi \oplus \psi)$ 都是 WFF。
+ 没有其他表达式是 WFF。

最后一条排除了所有无法通过有限次应用前述条款得到的字符串。这些条款也确定了每个公式的结构。每个复合 WFF 都有唯一的主联结词，即在构造的最后一步应用的联结词。

在不致产生歧义时，我们省略最外层的一对括号。按照这一约定，$\neg(p \wedge q)$ 的主联结词是 $\neg$，而 $\neg p \wedge q$ 的主联结词是 $\wedge$。某次联结词出现的作用域，是该次出现所作用的子公式。因此，括号同时决定主联结词和内部联结词的作用域。

## 语义

命题逻辑的语义有两个真值：

$$
\mathrm{Bool} := \{\ T, F\ \}
$$

特征真值表定义了这些联结词。六个联结词的单一真值表如下：

$$
\begin{array}{cc|cccccc}
p & q & \neg p & p \wedge q & p \lor q & p \rightarrow q & p \leftrightarrow q & p \oplus q \\[6pt]
\hline
T & T & F & T & T & T & T & F \\[6pt]
T & F & F & F & T & F & F & T \\[6pt]
F & T & T & F & T & T & F & T \\[6pt]
F & F & T & F & F & T & T & F
\end{array}
$$

完整真值表为公式中不同原子命题的每一种真值赋值各提供一行。如果公式包含 $n$ 个不同的原子命题，其完整真值表就有 $2^n$ 行。主联结词所在列包含公式在每种赋值下的整体真值。

该表还给出以下逻辑等价式：

+ $p \rightarrow q \equiv \neg p \lor q$
+ $p \leftrightarrow q \equiv (p \rightarrow q) \wedge (q \rightarrow p)$
+ $p \oplus q \equiv (p \lor q) \wedge \neg(p \wedge q)$

符号 $\equiv$ 是元语言中公式之间的关系，表示这些公式在每种赋值下都具有相同的真值。它不是 $\mathrm{Prop}[P]$ 的另一个联结词。

## 解释

解释在命题逻辑中也称为赋值，是一个为 $P$ 中每个原子命题赋予真值的函数：

$$
M : P \rightarrow \{T, F\}
$$

复合公式在 $M$ 下的值，则由其形成方式和联结词的真值表递归确定。

+ 如果 $\varphi$ 在 $M$ 下为真，我们写作 $M \models \varphi$，并称 $M$ 是 $\varphi$ 的模型。
+ 如果 $\varphi$ 在 $M$ 下为假，我们写作 $M \not\models \varphi$，并称 $M$ 是 $\varphi$ 的反模型。

考虑这样一个解释：$p$ 为真而 $q$ 为假。公式 $p \rightarrow \neg q$ 的对应行如下：

$$
\begin{array}{cc|cc}
p & q & \neg q & p \rightarrow \neg q \\[6pt]
\hline
T & F & T & T
\end{array}
$$

在这个解释下，前件 $p$ 和后件 $\neg q$ 都为真。因此 $p \rightarrow \neg q$ 为真，并且 $M \models p \rightarrow \neg q$。

下面的概念通过对解释进行量化来定义。

+ 如果某个解释满足公式 $\varphi$，则称该公式是可满足的。
+ 如果每个解释都满足公式 $\varphi$，则称该公式是重言式。
+ 如果没有解释满足公式 $\varphi$，则称该公式是矛盾式。
+ 如果某个解释满足公式 $\varphi$，而某个解释不满足它，则称该公式是偶然式。

因此，每个重言式和每个偶然式都是可满足的，而每个矛盾式都是不可满足的。若某个解释满足公式集合 $S$ 中的每个公式，则称 $S$ 是联合可满足的。如果不存在这样的解释，则称 $S$ 是联合不可满足的，或称不一致。

当两个公式 $\varphi$ 和 $\psi$ 在每个解释下都具有相同真值时，它们逻辑等价：

$$
\varphi \equiv \psi \Longleftrightarrow \forall M \ (M \models \varphi \Longleftrightarrow M \models \psi)
$$

## 逻辑后承

如果每个满足公式集合 $S$ 中所有公式的解释也满足 $\varphi$，则称 $\varphi$ 是 $S$ 的逻辑后承。这个关系写作：

$$
S \models \varphi
$$

等价地说，不存在这样的解释：它使 $S$ 中每个公式为真而使 $\varphi$ 为假。符号 $\models$ 是元语言中的关系，而 $\rightarrow$ 是构造新公式的联结词。对于两个公式 $\varphi$ 和 $\psi$，二者之间的联系如下：

$$
\varphi \models \psi \Longleftrightarrow \models \varphi \rightarrow \psi
$$

考虑集合 $S = \{p, p \rightarrow q\}$ 和拟议的后承 $q$。相关真值表如下：

$$
\begin{array}{cc|c}
p & q & p \rightarrow q \\[6pt]
\hline
T & T & T \\[6pt]
T & F & F \\[6pt]
F & T & T \\[6pt]
F & F & T
\end{array}
$$

只有第一行使 $S$ 的两个成员都为真，而该行也使 $q$ 为真。因此 $S \models q$。相应的推理规则是肯定前件。

## 推理规则

推理规则是从一个或多个前提推出结论的模式。如果 $S \vdash \varphi$，那么在选定的证明系统中，$\varphi$ 可以由 $S$ 中的前提推导出来。符号 $\vdash$ 关注推导，而 $\models$ 关注解释。

如果 $S \vdash \varphi$ 蕴含 $S \models \varphi$，则称证明系统是可靠的；如果 $S \models \varphi$ 蕴含 $S \vdash \varphi$，则称证明系统是完备的。命题逻辑的标准证明系统同时具有这两个性质。

肯定前件从 $p$ 和 $p \rightarrow q$ 推出 $q$：

$$
\frac{p \qquad p \rightarrow q}{q}
$$

否定后件从 $\neg q$ 和 $p \rightarrow q$ 推出 $\neg p$：

$$
\frac{\neg q \qquad p \rightarrow q}{\neg p}
$$

假言三段论从 $p \rightarrow q$ 和 $q \rightarrow r$ 推出 $p \rightarrow r$：

$$
\frac{p \rightarrow q \qquad q \rightarrow r}{p \rightarrow r}
$$

在每个模式中，横线以上的公式是前提，横线以下的公式是结论。

例如，令 $p$ 表示正在下雨，$q$ 表示地面是湿的，$r$ 表示比赛被取消。由 $p \rightarrow q$ 和 $q \rightarrow r$，假言三段论给出 $p \rightarrow r$。如果 $p$ 也是一个前提，那么肯定前件给出 $r$。

## 范式

文字是一个原子命题，或一个原子命题的否定。子句是文字的析取，项是文字的合取。

如果一个公式是子句的合取，则它处于合取范式（CNF）：

$$
(l_{1,1} \lor \cdots \lor l_{1,k}) \wedge (l_{2,1} \lor \cdots \lor l_{2,m}) \wedge \cdots
$$

如果一个公式是项的析取，则它处于析取范式（DNF）：

$$
(l_{1,1} \wedge \cdots \wedge l_{1,k}) \lor (l_{2,1} \wedge \cdots \wedge l_{2,m}) \lor \cdots
$$

在任一范式中，只出现 $\neg$、$\wedge$ 和 $\lor$，并且每个否定的作用域都是一个原子命题。单个文字既是子句也是项，因此既是 CNF 公式也是 DNF 公式。

每个命题公式都逻辑等价于某个 CNF 公式，也逻辑等价于某个 DNF 公式。一种转换方法是先去除 $\rightarrow$、$\leftrightarrow$ 和 $\oplus$，再利用双重否定和德摩根律把每个否定向内移动，最后应用分配律。

例如，考虑 $\neg(p \lor q) \rightarrow r$。等价式 $\varphi \rightarrow \psi \equiv \neg\varphi \lor \psi$ 给出如下计算：

$$
\neg(p \lor q) \rightarrow r \equiv \neg\neg(p \lor q) \lor r \equiv (p \lor q) \lor r
$$

所得公式等价于 $p \lor q \lor r$。它是一个单独的子句，因此处于 CNF。同时，由于每个析取项也是只含一个文字的项，同一个公式也处于 DNF。

完整真值表还可以证明范式定理。对于 DNF，取原公式为真的每一行，为该行构造一个仅在该行取真的项，再把这些项析取起来。对于 CNF，取公式为假的每一行，为该行构造一个仅在该行取假的子句，再把这些子句合取起来。当公式是矛盾式时，$p \wedge \neg p$ 是一个等价的范式；当公式是重言式时，$p \lor \neg p$ 是一个等价的范式。

DPLL 过程和其他几个相关的可满足性方法都以 CNF 公式作为输入。
