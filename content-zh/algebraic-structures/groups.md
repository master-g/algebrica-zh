---
title: 群
title_en: Groups
source: https://algebrica.org/groups/
license: CC BY-NC 4.0
tags:
  - abelian-group
  - algebraic-structures
  - associativity
  - cayley-table
  - coset
  - cyclic-group
  - dihedral-group
  - group-theory
  - homomorphism
  - identity-element
  - inverse-element
  - isomorphism
  - klein-four-group
  - lagrange-theorem
  - normal-subgroup
  - subgroup
  - symmetric-group
translation:
  status: current
  source_hash: 2b6d443f92b525b82552ed75227162332ab0820a62b63ab1b90afc6e7bdfe995
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

群是一个集合 $G$ 连同一个二元运算 $\cdot : G \times G \to G$，满足三个公理：

+ 结合律：对所有 $a,b,c \in G$，恒等式 $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ 成立。
+ 单位元：存在元素 $e \in G$，使得对所有 $a \in G$ 都有 $a \cdot e = e \cdot a = a$。
+ 逆元：对每个 $a \in G$，存在元素 $a^{-1} \in G$，使得 $a \cdot a^{-1} = a^{-1} \cdot a = e$。

[整数](../integers/)在加法下、非零[实数](../real-numbers/)在乘法下、固定几何对象的对称变换在复合下（例如正多边形的[二面体群](../dihedral-groups/)），以及固定大小的可逆[矩阵](../matrices/)在乘法下，都是群的例子。

> 许多教材把封闭性列为额外公理，要求对所有 $a,b \in G$ 都有 $a \cdot b$ 属于 $G$。这里运算的陪域就是 $G$，因此定义本身已经包含了封闭性。判断一个子集是否为子群时仍需检查封闭性，因为该子集未必包含其元素的乘积。

- - -

若对所有 $a,b \in G$ 都有 $a \cdot b = b \cdot a$，群 $(G,\cdot)$ 称为阿贝尔群或交换群。

单位元是唯一的，每个元素的逆元也是唯一的。设 $e$ 和 $e'$ 都满足单位元公理，则由于 $e'$ 是单位元，$e=e\cdot e'$；又由于 $e$ 是单位元，$e\cdot e'=e'$，所以 $e=e'$。对于逆元，假设某个 $h \in G$ 满足 $h \cdot a=e$：

$$
h = h \cdot e = h \cdot (a \cdot a^{-1}) = (h \cdot a) \cdot a^{-1} = e \cdot a^{-1} = a^{-1}
$$

若 $a \cdot h=e$，交换计算中的左右次序可得相同结论。因此，$a$ 的每个单侧逆元都等于 $a^{-1}$。

## 性质

对 $a \in G$，映射 $L_a(x)=a \cdot x$ 和 $R_a(x)=x \cdot a$ 分别表示关于 $a$ 的左乘和右乘。$L_a$ 与 $L_{a^{-1}}$ 的复合满足：

$$
L_{a^{-1}}(L_a(x)) = a^{-1} \cdot (a \cdot x) = (a^{-1} \cdot a) \cdot x = e \cdot x = x
$$

交换复合次序后可得到同样的计算，因此 $L_a$ 与 $L_{a^{-1}}$ 互为逆映射，都是从 $G$ 到自身的双射。对 $R_a$ 的论证相同。

由于 $L_a$ 是单射，$a \cdot b=a \cdot c$ 蕴含 $b=c$，这就是左消去律；$R_a$ 的单射性给出右消去律。由于 $L_a$ 是双射，方程 $a \cdot x=b$ 对每个 $b \in G$ 都有唯一解 $x=a^{-1}\cdot b$。类似地，$x \cdot a=b$ 的唯一解为 $x=b\cdot a^{-1}$。

对于有限群，这些双射约束着它的乘法表，即凯莱表。行和列都由 $G$ 的元素编号，位置 $(a,b)$ 的条目是乘积 $a \cdot b$。以 $a$ 为编号的行列出 $L_a$ 的值，以 $a$ 为编号的列列出 $R_a$ 的值。两个映射都是双射，因此 $G$ 的每个元素在每一行和每一列中都恰好出现一次。所以凯莱表是拉丁方。

> 反向结论不成立，因为拉丁方不一定满足结合律。拉丁方是有限拟群的乘法表。在拟群中，方程 $a\cdot x=b$ 和 $y\cdot a=b$ 都有唯一解，但运算不必满足结合律。

- - -

乘积的逆元会以相反的顺序排列因子：

$$
(a \cdot b)^{-1} = b^{-1} \cdot a^{-1}
$$

这一恒等式由结合律推出，有时称为“穿袜穿鞋”性质。要撤销先穿袜子再穿鞋子的操作，必须先脱鞋再脱袜。由于 $a$ 是 $a^{-1}$ 的逆元，连续取两次逆元得到 $(a^{-1})^{-1}=a$。

群 $G$ 的阶记作 $|G|$，是其底层集合的基数。含有限个元素的群称为有限群，否则称为无限群。

## 代数结构层级

群、[环](../rings/)和[域](../fields/)可以按照运算和逆元进行比较：

+ 群有一个满足结合律的运算、一个单位元以及每个元素的逆元。
+ 环有加法和乘法。加法使环成为阿贝尔群，乘法满足结合律并对加法满足分配律。
+ 域是交换环，且每个非零元素都有乘法逆元。

> 整数 $\mathbb{Z}$ 是环而不是域，而[有理数](../rational-numbers/) $\mathbb{Q}$ 是域。[向量空间](../vector-spaces/)的标量取自域，而[模](../modules/)的标量取自环。

## 元素的幂

幂是相同因子的乘积，因此必须先定义多于两个因子的乘积。对于三个因子，结合律说明两种可能的分组相等。四个因子有五种分组方式，反复使用结合律可知这五种方式都相等：

$$
a(b(cd)) = a((bc)d) = (ab)(cd) = (a(bc))d = ((ab)c)d
$$

对于每个 $n \geq 1$，结合律使 $a_1a_2 \cdots a_n$ 的任何加括号方式都相等。对 $n$ 作[数学归纳法](../principle-of-mathematical-induction/)即可证明：任意带括号的乘积都能拆成 $k$ 个因子的乘积和 $n-k$ 个因子的乘积。归纳假设确定了这两个较短乘积的值，结合律则说明这个值与 $k$ 无关。这就是一般结合律，允许不加括号地书写多个因子的乘积。

对 $a \in G$ 和正整数 $n$，递归定义其幂为 $a^1=a$ 以及 $a^n=a^{n-1}\cdot a$。对正整数 $n$，其余幂定义为：

$$
a^0 = e \qquad a^{-n} = (a^{-1})^n
$$

对所有整数 $m$ 和 $n$，这些幂满足：

$$
a^m \cdot a^n = a^{m+n} \qquad (a^m)^n = a^{mn}
$$

对指数作归纳法即可从递归定义证明这两个恒等式。在加法记号下，幂 $a^n$ 变为倍数 $na$，两个恒等式变为 $ma+na=(m+n)a$ 和 $n(ma)=(mn)a$。

> 若 $a$ 与 $b$ 可交换，则对每个整数 $n$ 都有 $(a\cdot b)^n=a^n\cdot b^n$。没有交换性假设时，这个恒等式可能不成立。

## 示例

在普通加法下，$\mathbb{Z}$ 是无限阿贝尔群。其单位元是 $0$，整数 $n$ 的逆元是 $-n$。

设 $n$ 为正整数。在对 $n$ 作[取模](../modulo-operator/)加法下，集合 $\mathbb{Z}/n\mathbb{Z} = \{\ 0,1,\ldots,n-1\ \}$ 是一个阶为 $n$ 的有限阿贝尔群。例如，在 $\mathbb{Z}/5\mathbb{Z}$ 中有 $3+4=2$，因为 $7\equiv 2\pmod{5}$。单位元是 $0$，剩余类 $k$ 的逆元是剩余类 $-k$。

不是每个有限群都具有这种形式。按同构分类，阶为 $4$ 的群恰好有两个，一个是 $\mathbb{Z}/4\mathbb{Z}$，另一个是克莱因四元群 $V$。其元素是单位元 $e$ 和三个满足 $a^2=b^2=c^2=e$ 的元素 $a,b,c$；任意两个不同的非单位元的乘积都是第三个元素。这两个群不同构，因为 $V$ 的每个元素都满足 $x^2=e$，而 $\mathbb{Z}/4\mathbb{Z}$ 的生成元不满足。边长不等的矩形给出 $V$ 的几何实现；它是[二面体群](../dihedral-groups/) $D_2$。其元素是恒等对称、矩形平面内两条对称轴的半转，以及垂直于平面的轴的半转。每个半转的阶为 $2$，任意两个不同半转的乘积是第三个半转。模 $8$ 乘法下的剩余类 $\{\ 1,3,5,7\ \}$ 也是一个实现，因为每个剩余类的平方都是 $1$。群 $V$ 是最小的非循环群。

- - -

设 $F$ 为[域](../fields/)，$n$ 为正整数。一般线性群 $\mathrm{GL}(n,F)$ 的元素是 $F$ 上的可逆[矩阵](../inverse-matrix/) $n\times n$，运算是矩阵乘法。单位元是单位矩阵 $I_n$，$A$ 的逆元是 $A^{-1}$。当 $n\geq 2$ 时，该群不是阿贝尔群，因为矩阵乘法不一定可交换。

集合 $\{\ 1,2,\ldots,n\ \}$ 的一个排列是从该集合到自身的双射。[对称群](../symmetric-group/) $S_n$ 的元素就是这些排列，运算是[函数复合](../composite-functions/)。单位元是恒等排列，排列 $\sigma$ 的逆元是逆函数 $\sigma^{-1}$。该群的阶为 $n!$，即 $n$ 的[阶乘](../factorial/)，并且当 $n\geq 3$ 时是非阿贝尔群。

群 $S_3$ 是最小的非阿贝尔对称群，阶为 $6$。设 $\sigma$ 将 $1\mapsto2$、$2\mapsto3$、$3\mapsto1$，设 $\tau$ 交换 $1$ 与 $2$ 并固定 $3$：

$$
\sigma = \begin{pmatrix} 1 & 2 & 3 \\[6pt] 2 & 3 & 1 \end{pmatrix} \qquad \tau = \begin{pmatrix} 1 & 2 & 3 \\[6pt] 2 & 1 & 3 \end{pmatrix}
$$

两个复合满足 $\sigma\circ\tau\neq\tau\circ\sigma$。[对称群](../symmetric-group/)页面给出了计算并发展了排列理论。

正 $n$ 边形的对称变换是另一族有限群。当 $n\geq3$ 时，它们包括绕中心的 $n$ 个旋转和关于经过中心的轴的 $n$ 个反射，因此群的阶为 $2n$。这就是[二面体群](../dihedral-groups/) $D_n$。当 $n\geq3$ 时它都不是阿贝尔群，因为旋转与反射只有在旋转为恒等变换或半转时才可交换。最小的情形 $D_3$ 阶为 $6$，并且同构于 $S_3$，因为等边三角形三个顶点的每个排列都来自某个对称变换。

## 当公理失效时

下面的集合—运算组合都满足结合律并有单位元，但其中一些元素没有逆元。

考虑包含零的[自然数](../natural-numbers/) $\mathbb{N}_0 = \{\ 0,1,2,\ldots\ \}$，配备普通加法。该运算封闭且满足结合律，$0$ 是单位元。正整数 $n$ 在 $\mathbb{N}_0$ 中没有加法逆元，因为 $-n$ 不在这个集合中。因此 $(\mathbb{N}_0,+)$ 是幺半群而不是群。

对[整数](../integers/)作乘法是封闭的、满足结合律并有单位元 $1$，但只有 $1$ 和 $-1$ 在 $\mathbb{Z}$ 中有乘法逆元。对任何其他整数 $n$，倒数 $1/n$ 不是整数。移除不可逆元素后，剩下的集合 $\{\ 1,-1\ \}$ 在乘法下构成一个群。

每个非零[实数](../real-numbers/)都有乘法逆元，但零没有。因此 $(\mathbb{R},\cdot)$ 不是群。移除零后，$\mathbb{R}\setminus\{\ 0\ \}$ 在乘法下构成阿贝尔群，单位元为 $1$，每个 $a\neq0$ 的逆元为 $a^{-1}=1/a$。

## 子群

群 $G$ 的子集 $H$ 若在从 $G$ 继承的运算下构成群，就称为子群。下面的判别法无需逐一检查每条群公理。

非空子集 $H\subseteq G$ 是 $G$ 的子群，当且仅当对所有 $a,b\in H$，$a\cdot b^{-1}$ 属于 $H$。令 $a=b$ 可得 $e\in H$；令 $a=e$ 可得 $b^{-1}\in H$；再将 $b$ 换成 $b^{-1}$ 可得 $a\cdot b\in H$。记号 $H\leq G$ 表示 $H$ 是 $G$ 的子群。

每个群 $G$ 都有平凡子群 $\{\ e\ \}$ 和自身 $G$。当 $G=\{\ e\ \}$ 时这两个子群相同。不同于 $G$ 的子群称为真子群。

偶整数 $2\mathbb{Z}=\{\ \ldots,-4,-2,0,2,4,\ldots\ \}$ 是 $(\mathbb{Z},+)$ 的子群。若 $a=2m$、$b=2k$，则 $b$ 的逆元为 $-b=-2k$，且 $a+(-b)=2(m-k)$ 仍为偶数。因此 $2\mathbb{Z}$ 满足子群判别法。

子群的交集仍是子群。若 $H$ 和 $K$ 是 $G$ 的子群，则单位元属于 $H\cap K$，且 $a,b\in H\cap K$ 蕴含 $a\cdot b^{-1}\in H\cap K$。同样的论证适用于任意非空的子群族。

给定子集 $S\subseteq G$，考虑包含 $S$ 的所有 $G$ 的子群组成的族。这个族包含 $G$，因此非空。它们的交集是一个包含 $S$ 且包含于每个其他包含 $S$ 的子群中的子群，称为由 $S$ 生成的子群，记作 $\langle S\rangle$。

等价地，$\langle S\rangle$ 由单位元以及所有有限乘积 $g_1g_2\cdots g_n$ 组成，其中每个 $g_i$ 属于 $S$ 或是 $S$ 中某个元素的逆元。连接两串因子给出它们元素的乘积，反转一串因子并对每个因子取逆给出逆元。因此这个集合是包含 $S$ 的子群。每个包含 $S$ 的子群都包含这些乘积，所以该集合就是 $\langle S\rangle$。若 $\langle S\rangle=G$，则称 $S$ 是 $G$ 的生成集，称 $G$ 由 $S$ 生成。

若 $a\in G$ 与每个 $g\in G$ 可交换，则称 $a$ 为中心元素。$G$ 的中心是所有中心元素构成的集合：

$$
Z(G) = \{\ a \in G : a \cdot g = g \cdot a \ \forall \, g \in G \ \}
$$

单位元属于 $Z(G)$；若 $a$ 与 $b$ 都与 $G$ 的每个元素可交换，则 $a\cdot b$ 和 $a^{-1}$ 也如此。因此中心是子群。群是阿贝尔群，当且仅当 $Z(G)=G$。当 $n\geq3$ 时，$S_n$ 的中心是 $\{\ e\ \}$。

## 循环群

若群 $G$ 存在元素 $g$，使得 $G$ 的每个元素都是 $g$ 的幂，等价地 $G=\langle g\rangle$，则称为循环群：

$$
G = \{\ g^n : n \in \mathbb{Z} \ \}
$$

这样的元素 $g$ 称为 $G$ 的生成元，循环群有一个元素组成的生成集。每个无限循环群同构于 $\mathbb{Z}$，每个有限循环群同构于某个正整数 $n$ 对应的 $\mathbb{Z}/n\mathbb{Z}$。

群 $(\mathbb{Z}/6\mathbb{Z},+)$ 是循环群，生成元为 $1$，因为每个剩余类都是 $1$ 的倍数。$5$ 也是生成元，因为它的模 $6$ 倍数包含全部六个剩余类。$2$ 不是生成元，因为它的倍数只有 $\{\ 0,2,4\ \}$，这是 $\mathbb{Z}/6\mathbb{Z}$ 的真子群。

## 元素的阶

元素 $a$ 在群 $G$ 中的阶，是使 $a^n=e$ 的最小正整数 $n$，其中 $e$ 是单位元。如果不存在这样的整数，则 $a$ 具有无限阶，记作 $\mathrm{ord}(a)$。

在 $(\mathbb{Z}/6\mathbb{Z},+)$ 中，元素 $2$ 的阶为 $3$，因为 $2+2+2=6\equiv0\pmod{6}$，而 $2$ 和 $2+2=4$ 都不与 $0$ 同余。元素 $1$ 的阶为 $6$，因为 $6$ 是与 $0$ 模 $6$ 同余的最小正整数 $1$ 的倍数。在 $(\mathbb{Z},+)$ 中，每个非零元素都有无限阶，因为非零整数的正倍数不可能为 $0$。

> 取模运算符 $a\bmod n$ 是 $a$ 除以 $n$ 的余数。例如，$7\bmod5=2$，因为 $7=1\cdot5+2$。[取模运算符](../modulo-operator/)页面给出了它的一般定义。

元素的阶等于它生成的循环子群的阶。设 $a$ 的阶为有限值 $n$。幂 $e,a,a^2,\ldots,a^{n-1}$ 两两不同，因为若 $0\leq i<j\leq n-1$ 且 $a^i=a^j$，就会得到 $a^{j-i}=e$，其中 $0<j-i<n$，这与 $n$ 的最小性矛盾。将整数 $k$ 写成 $k=qn+r$，其中 $0\leq r<n$。则 $a^k=(a^n)^q\cdot a^r=a^r$，所以这 $n$ 个幂就是 $\langle a\rangle$ 的全部元素。因此：

$$
\langle a \rangle = \{\ e, a, a^2, \ldots, a^{n-1} \ \} \qquad \mathrm{ord}(a) = |\langle a \rangle|
$$

同样的除法论证表明，$a^k=a^l$ 当且仅当 $k\equiv l\pmod n$。若 $a$ 的阶为无限，则它的所有幂都不同，$\langle a\rangle$ 是无限的。因此，$a$ 具有无限阶，当且仅当 $\langle a\rangle$ 是无限的。

## 陪集与拉格朗日定理

设 $H$ 是 $G$ 的子群。对 $a\in G$，集合 $aH=\{\ a\cdot h:h\in H\ \}$ 称为 $H$ 的左陪集，$Ha$ 称为右陪集。陪集不一定是子群，因为只有当 $a\in H$ 时 $aH$ 才包含单位元。

两个左陪集要么相等，要么不相交。设 $c\in aH\cap bH$，于是对某些 $h_1,h_2\in H$ 有 $c=a\cdot h_1=b\cdot h_2$。那么 $k=b^{-1}\cdot a=h_2\cdot h_1^{-1}$ 属于 $H$，从而 $aH=bkH=bH$。因此：

$$
aH = bH \iff b^{-1} \cdot a \in H
$$

每个元素 $a$ 都属于 $aH$，所以左陪集覆盖 $G$。不同左陪集不相交，因此它们划分 $G$。所有陪集具有相同基数，因为映射 $x\mapsto b\cdot a^{-1}\cdot x$ 是从 $aH$ 到 $bH$ 的双射，逆映射为 $y\mapsto a\cdot b^{-1}\cdot y$。

$H$ 在 $G$ 中的指数记作 $[G:H]$，是 $H$ 的不同左陪集的数量。当 $G$ 有限时，陪集划分 $G$，每个陪集有 $|H|$ 个元素，因此拉格朗日定理给出：

$$
|G| = [G : H] \cdot |H|
$$

所以子群的阶整除群的阶。对于子群链 $K\leq H\leq G$，指数满足 $[G:K]=[G:H][H:K]$，这一恒等式对无限群同样成立。

> 指数对无限群也有定义，因为它计数的是陪集而不是元素。子群 $n\mathbb{Z}$ 在 $\mathbb{Z}$ 中的指数是 $n$，而 $\mathbb{Z}$ 在 $\mathbb{R}$ 中的陪集与 $[0,1)$ 一一对应。因此 $\mathbb{Z}$ 在 $\mathbb{R}$ 中具有不可数指数。

对每个 $a\in G$，拉格朗日定理表明 $\mathrm{ord}(a)$ 整除 $|G|$，因为 $\mathrm{ord}(a)=|\langle a\rangle|$。于是 $a^{|G|}=e$。若 $|G|=p$ 为素数，则子群的阶只有 $1$ 和 $p$ 两种可能。对任意 $a\neq e$，$\langle a\rangle$ 必为 $G$，因此每个素数阶群都是循环群，并同构于 $\mathbb{Z}/p\mathbb{Z}$。

> 拉格朗日定理的逆命题不成立。$|G|$ 的一个因子不一定是某个子群的阶：交错群 $A_4$ 的阶为 $12$，但不含阶为 $6$ 的子群。

## 正规子群

子群的左陪集和右陪集不一定相同。在 $S_3$ 中，由交换 $1$ 与 $2$ 的换位生成的子群具有不同的左右陪集；而阶为 $3$ 的子群 $K$ 满足对每个 $a\in S_3$ 都有 $aK=Ka$。

子群 $N\leq G$ 若对每个 $g\in G$ 都有 $gNg^{-1}=N$，则称为正规子群，其中 $gNg^{-1}$ 是所有形如 $g\cdot n\cdot g^{-1}$（$n\in N$）的元素组成的集合。记作 $N\trianglelefteq G$。元素 $g\cdot n\cdot g^{-1}$ 称为 $n$ 关于 $g$ 的共轭，因此正规子群在 $G$ 的每个元素的共轭下都封闭。

等价地，$N$ 正规当且仅当对每个 $g$ 都有 $gN=Ng$，也就是左右陪集相同。只需证明对每个 $g\in G$ 有 $gNg^{-1}\subseteq N$ 即可。将 $g$ 换成 $g^{-1}$ 可得 $g^{-1}Ng\subseteq N$，这等价于 $N\subseteq gNg^{-1}$，从而得到反向包含。

阿贝尔群的每个子群都是正规的，因为共轭固定每个元素。中心 $Z(G)$ 在任意群中都是正规子群。指数为 $2$ 的子群 $H$ 也正规：它的左右陪集都是 $H$ 及其补集，因此两种陪集分解相同。

若 $N$ 正规，则陪集集合 $G/N$ 在运算 $(aN)(bN)=abN$ 下构成群。乘积不依赖两个陪集代表元的选择。若 $N$ 不正规，不同代表元可能给出不同乘积，因此该运算定义不良。

> [第一同构定理](../homomorphisms-and-isomorphisms/)指出，对每个群同态 $\varphi$ 都有 $G/\ker(\varphi)\cong\mathrm{im}(\varphi)$。环、模和向量空间也有相应定理。

## 群同态与同构

对于群 $(G,\cdot)$ 和 $(H,\star)$，[函数](../functions/) $\varphi:G\to H$ 若对所有 $a,b\in G$ 都满足：

$$
\varphi(a \cdot b) = \varphi(a) \star \varphi(b)
$$

则称为同态。也就是说，先进行群运算再施加 $\varphi$，与先施加 $\varphi$ 再进行运算的结果相同。同态将 $G$ 的单位元映射到 $H$ 的单位元，并且对每个 $a\in G$ 满足 $\varphi(a^{-1})=\varphi(a)^{-1}$。若 $e_H$ 是 $H$ 的单位元，则[核](../homomorphisms-and-isomorphisms/)为：

$$
\ker(\varphi) = \{\ a \in G : \varphi(a) = e_H \ \}
$$

像集为：

$$
\mathrm{im}(\varphi) = \{\ \varphi(a) : a \in G \ \}
$$

核是 $G$ 的子群，像集是 $H$ 的子群。同态是单射，当且仅当其核只包含 $G$ 的单位元。

更一般地，对每个子群 $A\leq G$，像 $\varphi(A)$ 是 $H$ 的子群，因为 $\varphi(a_1)$ 与 $\varphi(a_2)$ 的乘积是 $\varphi(a_1\cdot a_2)$，而 $\varphi(a)$ 的逆元是 $\varphi(a^{-1})$。对每个子群 $B\leq H$，原像 $\varphi^{-1}(B)=\{\ a\in G:\varphi(a)\in B\ \}$ 是 $G$ 的子群，即使 $\varphi$ 不可逆。令 $A=G$ 得到 $\varphi$ 的像，令 $B=\{\ e_H\ \}$ 得到核。

核是正规的。对 $x\in\ker(\varphi)$ 和 $g\in G$，有：

$$
\varphi(g \cdot x \cdot g^{-1}) = \varphi(g) \star \varphi(x) \star \varphi(g)^{-1} = \varphi(g) \star e_H \star \varphi(g)^{-1} = e_H
$$

因此对每个 $g\in G$ 都有 $g\ker(\varphi)g^{-1}\subseteq\ker(\varphi)$，这证明了正规性。反过来，每个正规子群 $N$ 都是某个同态的核，即 $G$ 到 $G/N$ 的商映射，其将每个元素送到它所属的陪集。

对[域](../fields/) $F$ 和正整数 $n$，[行列式](../determinant-of-a-square-matrix/)满足 $\det(AB)=\det(A)\det(B)$，因此它是从 $\mathrm{GL}(n,F)$ 到 $F$ 的非零元素乘法群上的满同态。其核是特殊线性群 $\mathrm{SL}(n,F)$，由行列式为 $1$ 的矩阵组成，是 $\mathrm{GL}(n,F)$ 的正规子群。

- - -

双射同态 $\varphi:G\to H$ 称为同构。若存在这样的映射，则称两群同构，记作 $G\cong H$。同构群具有相同的群论性质。

考虑 $(\mathbb{Z}/2\mathbb{Z},+)$ 与乘法群 $(\{\ 1,-1\ \},\cdot)$。定义 $\varphi:\mathbb{Z}/2\mathbb{Z}\to\{\ 1,-1\ \}$，令 $\varphi(0)=1$、$\varphi(1)=-1$。所有涉及 $0$ 的和都满足同态条件，因为 $\varphi(0)=1$ 是乘法单位元。剩下的情形为：

$$
\begin{align}
\varphi(1 + 1) &= \varphi(0) \\[6pt]
               &= 1 \\[6pt]
               &= (-1)(-1) \\[6pt]
               &= \varphi(1) \cdot \varphi(1)
\end{align}
$$

因此 $\varphi$ 是同态。它是双射，所以是同构，并且 $\mathbb{Z}/2\mathbb{Z}\cong\{\ 1,-1\ \}$。

令 $\mathbb{R}^{+}$ 表示乘法下的正实数，$\mathbb{R}$ 表示加法下的实数。[对数](../logarithms/) $\log:\mathbb{R}^{+}\to\mathbb{R}$ 满足 $\log(xy)=\log(x)+\log(y)$，这正是这些运算下的同态条件。该映射是双射，逆映射是指数函数。因此它是同构，乘法群 $\mathbb{R}^{+}$ 与加法群 $\mathbb{R}$ 具有相同的群结构。

从一个群到自身的同态称为自同态，双射自同态称为自同构。恒等映射是每个群的自同构。两个同态的复合仍是同态。

同构 $\varphi^{-1}:H\to G$ 的逆映射也同构。它是双射；若 $y_i=\varphi(x_i)$（$i=1,2$），则 $\varphi^{-1}(y_1\star y_2)=\varphi^{-1}(\varphi(x_1\cdot x_2))=x_1\cdot x_2$，所以 $\varphi^{-1}$ 是同态。因此同构是群之间的对称关系。

> [环](../rings/)、[域](../fields/)、[向量空间](../vector-spaces/)和[模](../modules/)也有核、像和同构，它们相对于各自的运算定义。[同态与同构](../homomorphisms-and-isomorphisms/)页面比较了这些定义。
