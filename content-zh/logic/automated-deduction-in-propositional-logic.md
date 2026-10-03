---
title: 命题逻辑中的自动演绎
title_en: Automated Deduction in Propositional Logic
source: https://algebrica.org/automated-deduction-in-propositional-logic/
license: CC BY-NC 4.0
tags:
  - automated-deduction
  - backward-chaining
  - clause
  - conjunctive-normal-form
  - empty-clause
  - forward-chaining
  - horn-clause
  - propositional-logic
  - refutation
  - resolution
  - satisfiability
  - semantic-tableaux
  - unit-resolution
translation:
  status: current
  source_hash: d1b3293cc7054442d6094085f2cfeeac141ad7ce6e6cd353552e19744f2f4a8d
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 反驳

[命题逻辑](../propositional-logic/)的演绎过程回答如下形式的问题：给定有限的公式集 $S$ 和公式 $\varphi$，$S \models \varphi$ 是否成立？逻辑后承的定义对所有解释作量化，所以直接的检验要查看 $S \cup \{\varphi\}$ 中出现的 $n$ 个原子命题的真值表的 $2^n$ 行。这里介绍的过程不作这种查看，而是对前提连同结论的否定作不可满足性检验。

允许这种替换的等价关系如下，其中右边表示这个集合不可满足。

$$
S \models \varphi \Longleftrightarrow S \cup \{\neg\varphi\} \models \bot
$$

假设 $S \models \varphi$，并设 $M$ 满足 $S \cup \{\neg\varphi\}$ 的每个公式。由 $M \models S$ 得到 $M \models \varphi$，而由 $M \models \neg\varphi$ 得到 $M \not\models \varphi$，没有任何解释使 $\varphi$ 既真又假。因此这样的 $M$ 不存在。反过来，假设 $S \cup \{\neg\varphi\}$ 不可满足，并设 $M \models S$。如果 $\varphi$ 在 $M$ 下为假，$M$ 就满足 $\neg\varphi$，从而满足整个集合。所以 $S$ 的每个模型都是 $\varphi$ 的模型。

反驳是表明一个公式集不可满足的推导。下面的归结过程和表过程把 $\neg\varphi$ 加入前提，并寻找对扩大后的集合的这样一个反驳。对有限的命题输入，两种过程都会终止，并判定后承关系是否成立。后面关于前向链接和后向链接的各节，针对形式受限的前提，通过直接遍历规则来回答同一个问题。

## 子句与归结规则

归结处理合取范式的公式。文字是原子命题或其否定，子句是文字的析取。由于 $\lor$ 满足结合律、交换律和幂等律，文字的顺序和重复都无关紧要，所以把子句等同于它的文字的集合。于是子句 $p \lor \neg q \lor r$ 就是集合 $\{p, \neg q, r\}$，而 CNF 公式是按合取来读的子句集。空子句记为 $\square$。按照约定，零个文字的析取在每个解释下都为假，所以 $\square$ 不可满足。

如果两个文字中一个是另一个的否定，就说它们是互补的。如果 $C$ 和 $D$ 是子句，$l$ 是文字，归结规则为：

$$
\frac{C \cup \{l\} \qquad D \cup \{\neg l\}}{C \cup D}
$$

结论 $C \cup D$ 是两个前提关于文字 $l$ 的归结式。这条规则是可靠的。设 $M$ 满足两个前提。如果 $M \models l$，那么 $M \not\models \neg l$，所以 $M$ 使 $D$ 的某个文字为真；如果 $M \not\models l$，那么 $M$ 使 $C$ 的某个文字为真。无论哪种情形，$M$ 都满足 $C \cup D$。

单元归结是其中一个前提为单个文字的特殊情形。取 $C = \varnothing$ 和 $D = \varnothing$，就把 $p$ 与 $\neg p$ 归结，得到 $\square$。归结还给出两条熟悉的规则。由 $p$ 和 $\neg p \lor q$（即 $p \rightarrow q$ 的子句形式）归结得到 $q$，这就是肯定前件。由 $\neg q$ 和同一个子句归结得到 $\neg p$，这就是否定后件。

> 每次应用消去一对互补文字。一次消去两对是不可靠的，因为子句 $p \lor q$ 和 $\neg p \lor \neg q$ 会给出 $\square$，尽管解释 $M(p) = T$、$M(q) = F$ 同时满足二者。这一对子句的两个合法归结式是 $q \lor \neg q$ 和 $p \lor \neg p$，它们都是重言式。

## 归结过程

为了判定 $S \models \varphi$ 是否成立，过程执行三步。

+ 把 $S \cup \{\neg\varphi\}$ 转换为子句集。
+ 有条理地选取含有一对互补文字的两个子句，计算它们的归结式，如果它还不在集合中，就把它加入集合。
+ 重复进行，直到出现 $\square$，这时 $S \models \varphi$；或者直到没有任何应用能产生新子句，这时 $S \not\models \varphi$。

这个过程会终止。在 $n$ 个原子命题上，每个原子在子句中要么以肯定形式出现，要么以否定形式出现，要么两种形式都出现，要么不出现。因此至多可以构成 $4^n$ 个不同的子句，子句集只能增大有限次。由可靠性，推出 $\square$ 就证明初始子句合起来不可满足。如果饱和时没有出现 $\square$，反驳完备性保证子句集可满足，并且可以由它构造出一个模型。

反驳完备性并不是说，仅对 $S$ 作饱和就能推出 $S$ 的每个子句形式的后承。从子句 $p$ 出发无法进行任何归结步骤，然而 $p \models p \lor q$。这个过程通过结论的否定来判定后承关系，而不是生成子句集的全部后承。

> 用分配律把公式转换为 CNF，每一步都可能使子句数加倍，产生指数规模的公式。定义式变换给每个子公式指定一个新原子，得到的 CNF 公式的规模与原公式的规模成线性关系。所得结果与原公式等可满足，而不是逻辑等价。对反驳过程来说，等可满足就够了。

- - -

命题可满足性问题是 NP 完全的，即使对 CNF 公式也是如此。有些不可满足的公式族，包括鸽巢原理的否定的标准 CNF 编码，需要指数规模的归结反驳。因此，在大的输入上完全饱和可能不切实际。DPLL 过程改为这样搜索模型：一次给一个原子赋值，传播单元子句，并在某个子句变假时回溯。现代的 SAT 求解器通常用冲突驱动的子句学习来扩展这个方案。

## 一个归结反驳

考虑“每个大于 $1$ 的整数都有素因数”这一强归纳论证的命题骨架，其中分情形讨论被明确写出。$P = \{p, q, r, s\}$ 上的符号化约定如下：

+ $p =$ 整数 $n$ 大于 $1$。
+ $q =$ 整数 $n$ 是素数。
+ $r =$ 整数 $n$ 有满足 $1 < d < n$ 的因数 $d$。
+ $s =$ 整数 $n$ 有素因数。

前提是 $p \rightarrow (q \lor r)$、$q \rightarrow s$、$r \rightarrow s$ 和 $p$，要证的结论是 $s$。在对 $n$ 的强归纳证明中，蕴含式 $r \rightarrow s$ 是把归纳假设应用于 $d < n$ 得到的。消去条件式得到四个子句，结论的否定给出第五个。给它们编号并归结，得到下面的推导，其中 P 标出前提，N 标出结论的否定，其余各行标出所用的两个子句和被归结的文字：

$$
\begin{array}{rll}
C_1 & \neg p \lor q \lor r & \mathrm{P} \\[6pt]
C_2 & \neg q \lor s & \mathrm{P} \\[6pt]
C_3 & \neg r \lor s & \mathrm{P} \\[6pt]
C_4 & p & \mathrm{P} \\[6pt]
C_5 & \neg s & \mathrm{N} \\[6pt]
C_6 & q \lor r & C_4, \ C_1 \ (p) \\[6pt]
C_7 & \neg q & C_2, \ C_5 \ (s) \\[6pt]
C_8 & r & C_6, \ C_7 \ (q) \\[6pt]
C_9 & \neg r & C_3, \ C_5 \ (s) \\[6pt]
C_{10} & \square & C_8, \ C_9 \ (r)
\end{array}
$$

同一个推导可以写成树的形式，其中每条横线是规则的一次应用，叶子是初始子句：

$$
\dfrac{\dfrac{\dfrac{p \qquad \neg p \lor q \lor r}{q \lor r} \qquad \dfrac{\neg q \lor s \qquad \neg s}{\neg q}}{r} \qquad \dfrac{\neg r \lor s \qquad \neg s}{\neg r}}{\square}
$$

空子句出现了，所以前提连同 $\neg s$ 没有模型，前提蕴含 $s$。

- - -

饱和而没有出现 $\square$ 时，则可以得到一个反模型。取前提 $p \rightarrow q$ 和 $q \rightarrow r$，以 $p$ 为要证的结论。子句是 $\neg p \lor q$、$\neg q \lor r$ 和 $\neg p$，最后一个来自结论的否定。唯一可用的步骤是把前两个子句关于 $q$ 归结，得到 $\neg p \lor r$。加入它之后，集合中仅有的互补文字是 $q$ 和 $\neg q$，把含有它们的子句归结，重新得到 $\neg p \lor r$：

$$
\{\ \neg p \lor q, \ \neg q \lor r, \ \neg p, \ \neg p \lor r \ \}
$$

这个集合在归结下封闭，并且不含 $\square$。因此前提不蕴含 $p$。解释 $M(p) = M(q) = M(r) = F$ 使每个子句为真，是所提出的后承关系的反模型。

## 语义表

表方法不需要任何预先的转换就能判定可满足性。有限公式集的表是一棵树，它的结点带有公式集。结点处的集合按合取来读，从一个结点分出的分支按析取来读，每个展开步骤按照复合公式主联结词的真值条件，把它替换为它的各个分量。

展开规则分为两组。当满足一个公式需要满足相应行中列出的每个分量时，适用 α 规则，它们延长当前分支而不分叉。下表中 F 是公式，F₁ 和 F₂ 是它的第一、第二分量。

$$
\begin{array}{c|c|cc}
 & F & F_1 & F_2 \\[6pt]
\hline
\alpha_1 & \neg\neg\varphi & \varphi & \\[6pt]
\alpha_2 & \varphi \wedge \psi & \varphi & \psi \\[6pt]
\alpha_3 & \neg(\varphi \lor \psi) & \neg\varphi & \neg\psi \\[6pt]
\alpha_4 & \neg(\varphi \rightarrow \psi) & \varphi & \neg\psi
\end{array}
$$

β 规则适用于真值分两种情形的公式。每次 β 展开把当前分支分成这两种情形。下表中 L 和 R 分别是左分支和右分支。

$$
\begin{array}{c|c|cc}
 & F & L & R \\[6pt]
\hline
\beta_1 & \varphi \lor \psi & \varphi & \psi \\[6pt]
\beta_2 & \neg(\varphi \wedge \psi) & \neg\varphi & \neg\psi \\[6pt]
\beta_3 & \varphi \rightarrow \psi & \neg\varphi & \psi \\[6pt]
\beta_4 & \varphi \leftrightarrow \psi & \varphi, \ \psi & \neg\varphi, \ \neg\psi \\[6pt]
\beta_5 & \neg(\varphi \leftrightarrow \psi) & \varphi, \ \neg\psi & \neg\varphi, \ \psi
\end{array}
$$

如果一个分支含有某个公式及其否定，它就是闭的，闭合用 $\times$ 标记。如果一个分支上的每个公式要么是文字，要么已经展开过，它就是饱和的。因此 $S \cup \{\neg\varphi\}$ 的表有两种可能的结果：

+ 如果每个分支都闭合，这个集合不可满足，$S \models \varphi$。
+ 如果某个饱和的分支保持开放，它的文字确定了一个满足这个集合的解释，$S \not\models \varphi$。

对有限的根，每个分支的长度有界，因为每个复合公式至多展开一次，而每次展开加入的公式联结词复杂度更低。由于每次 β 展开产生两个分支，整个表是有限的。

开放的饱和分支不含互补的文字对，所以使它的每个文字为真的赋值是有明确定义的。把这个部分赋值任意地延拓到它没有确定的原子上，就得到分支上每个公式（包括根处的公式）的一个模型。在 β 分叉之前先展开 α 公式，可以避免在两个新分支中重复同一个 α 步骤，所以这个顺序往往使树更小。

## 表的展开

第一个展开检验逆否律，即 $(p \rightarrow q) \rightarrow (\neg q \rightarrow \neg p)$ 的有效性。根是这个公式的否定。规则 $\alpha_4$ 应用两次，接着是 $\alpha_1$ 和 $\beta_3$：

$$
\begin{array}{c}
\neg((p \rightarrow q) \rightarrow (\neg q \rightarrow \neg p)) \\[6pt]
\downarrow \ \alpha_4 \\[6pt]
p \rightarrow q, \ \neg(\neg q \rightarrow \neg p) \\[6pt]
\downarrow \ \alpha_4 \\[6pt]
p \rightarrow q, \ \neg q, \ \neg\neg p \\[6pt]
\downarrow \ \alpha_1 \\[6pt]
p \rightarrow q, \ \neg q, \ p \\[6pt]
\swarrow \ \beta_3 \ \searrow \\[6pt]
\begin{array}{ccc}
\neg p, \ \neg q, \ p & \quad & q, \ \neg q, \ p \\[6pt]
\times & & \times
\end{array}
\end{array}
$$

左分支含有 $p$ 和 $\neg p$，右分支含有 $q$ 和 $\neg q$，所以两个分支都闭合。公式的否定不可满足，这个公式是重言式。

第二个展开检验 $p \lor q \models q$ 是否成立。根是 $\{p \lor q, \neg q\}$，唯一可用的规则是 $\beta_1$。下面用圆圈标记开放的分支：

$$
\begin{array}{c}
p \lor q, \ \neg q \\[6pt]
\swarrow \ \beta_1 \ \searrow \\[6pt]
\begin{array}{ccc}
p, \ \neg q & \quad & q, \ \neg q \\[6pt]
\bigcirc & & \times
\end{array}
\end{array}
$$

右分支闭合，而左分支饱和且开放。它的文字给出解释 $M(p) = T$ 和 $M(q) = F$，这个解释满足 $p \lor q$ 而使 $q$ 为假，所以 $p \lor q \not\models q$。从开放分支读出的解释是一个反模型，得到它并不需要构造真值表的四行。

## 霍恩子句

霍恩子句是至多含一个肯定文字的子句。霍恩子句有三种形式，每种都等价于一个蕴含式：

+ 事实是单个肯定文字 $q$，等价于 $\top \rightarrow q$。
+ 规则是恰好含一个肯定文字的子句 $q \lor \neg p_1 \lor \cdots \lor \neg p_n$，等价于 $(p_1 \wedge \cdots \wedge p_n) \rightarrow q$。
+ 目标是只含否定文字的子句 $\neg p_1 \lor \cdots \lor \neg p_n$，等价于 $(p_1 \wedge \cdots \wedge p_n) \rightarrow \bot$。

事实和规则称为确定子句，因为它们恰好含一个肯定文字。由确定子句组成的知识库 $KB$ 总是可满足的，因为使每个原子为真的解释满足其中每个子句。回答查询 $q$ 的办法是加入目标 $\neg q$，再反驳所得的集合。

单凭单元归结，在霍恩子句上就是反驳完备的。反复把一条规则与现有的肯定单元子句归结，一次去掉它的一个否定文字，最终留下它的肯定结论作为单元子句。把否定的目标与现有的肯定单元子句归结，同样一次去掉它的一个文字；对不可满足的霍恩子句集，这个过程最终得到 $\square$。霍恩子句集的可满足性可以在线性时间内判定，而同一问题对任意子句是 NP 完全的。这个线性界依赖于“至多一个肯定文字”的限制。确定子句只有一个结论，不需要分情形讨论。

前向链接和后向链接沿相反的方向遍历确定知识库的规则。二者都使用下面的知识库，以 $u$ 为查询，其中 R 开头的是规则，F 开头的是事实：

$$
\begin{array}{lll}
R_1 & p \wedge q \rightarrow r & \\[6pt]
R_2 & r \rightarrow s & \\[6pt]
R_3 & q \wedge s \rightarrow t & \\[6pt]
R_4 & r \wedge t \rightarrow u & \\[6pt]
F_1 & p & \\[6pt]
F_2 & q &
\end{array}
$$

## 前向链接

前向链接从已知的事实出发，反复应用前提都已知而结论尚未知的规则。当查询出现，或者没有任何规则能加入新内容时，过程停止。每一步应用一条前提全在当前集合中的规则，下表三列依次是步数、所用的规则和已知的原子：

$$
\begin{array}{cll}
k & R & A_k \\[6pt]
\hline
0 & & p, \ q \\[6pt]
1 & R_1 & p, \ q, \ r \\[6pt]
2 & R_2 & p, \ q, \ r, \ s \\[6pt]
3 & R_3 & p, \ q, \ r, \ s, \ t \\[6pt]
4 & R_4 & p, \ q, \ r, \ s, \ t, \ u
\end{array}
$$

查询 $u$ 在第 $4$ 步进入集合。因此 $KB \models u$。这个过程会终止，因为每条被应用的规则加入一个新原子，而知识库中只出现有限个原子。每个推出的原子都是 $KB$ 的后承。如果过程到达不动点，恰好使已知原子为真的解释满足每条规则，因为任何前提为真的规则都已经加入了它的结论。于是，在不动点处不出现的查询不是 $KB$ 的后承。

这种策略是数据驱动的。运行到饱和时，它推出 $KB$ 蕴含的全部原子，包括查询不需要的那些。在上面的知识库中，$s$ 和 $t$ 是推出 $u$ 所需要的，而如果再有一条规则，例如 $s \rightarrow v$，还会推出 $v$，它对答案没有贡献。

## 后向链接

后向链接从查询出发，朝事实的方向进行。为了确立一个还不是事实的原子，过程尝试以该原子为结论的规则，并递归地确立它们的前提。只要至少有一条这样的规则的全部前提都能确立，它就成功；只有当每种选择都失败时，它才失败。在上面的知识库上，查询 $u$ 分解如下：

$$
\begin{array}{c}
u \\[6pt]
\swarrow \ R_4 \ \searrow \\[6pt]
\begin{array}{ccc}
r & \quad & t \\[6pt]
\downarrow \ R_1 & & \downarrow \ R_3 \\[6pt]
p, \ q & & q, \ s \\[6pt]
 & & \downarrow \ R_2 \\[6pt]
 & & r \\[6pt]
 & & \downarrow \ R_1 \\[6pt]
 & & p, \ q
\end{array}
\end{array}
$$

$R_4$ 之下的后代是合取的义务，两个都必须完成。而 β 表分叉记录的是满足被展开公式的不同选择。分解的每个叶子都是事实，所以 $KB \models u$。从叶子向上读，同一棵树就是用肯定前件作出的推导：

$$
\dfrac{\dfrac{p \qquad q}{r} \qquad \dfrac{q \qquad \dfrac{\dfrac{p \qquad q}{r}}{s}}{t}}{u}
$$

原子 $r$ 在这棵树中被推出两次，一次作为 $R_4$ 的前提，一次在 $s$ 的推导内部，事实 $p$ 和 $q$ 也被使用了不止一次。实现时会把已证明的原子存入一张表，在重复工作之前先查表。它还记录正在处理的目标以检测循环。含有 $a \rightarrow b$ 和 $b \rightarrow a$ 的知识库会使对查询 $a$ 的朴素递归陷入循环，而记录正在处理的目标的过程一旦发现 $a$ 再次出现，就结束这个分支。其他以 $a$ 为结论的规则仍然可以作为别的选择。

这种策略是目标驱动的。在规则按结论建立索引的情况下，它可以只查看知识库中与查询相关的部分，而前向链接可能处理对查询没有贡献的规则。

## 三种方法的适用范围

归结、表和链接在不同的语法限制下判定后承关系。它们在所要求的形式、所返回的结果和代价上各不相同。

归结要求子句。它返回一个反驳，或者一个饱和的集合，从中可以构造出前提连同结论的否定的模型。在后一种情形下，这个模型是后承关系的反模型。转换为 CNF 是单独的一步，为子公式引入新原子，可以使所得 CNF 的规模与原公式的规模成线性关系。

表接受任何形状的公式，返回一棵闭合的树或一个开放的饱和分支。开放的饱和分支明确给出一个反模型。不过，如果一个分支上有 $k$ 次 β 展开，表可能生成多达 $2^k$ 个分支。

霍恩可满足性，以及由此而来的原子查询是否为确定知识库的后承，可以在线性时间内判定。前向链接和后向链接适用于这种受限的情形。两个方向都不接受头部为析取的规则，例如 $p \rightarrow (q \lor r)$，因为它的子句形式 $\neg p \lor q \lor r$ 有两个肯定文字。归结把这个公式作为非霍恩子句处理，而表在析取处分叉。
