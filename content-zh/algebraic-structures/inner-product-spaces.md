---
title: 内积空间
title_en: Inner Product Spaces
source: https://algebrica.org/inner-product-spaces/
license: CC BY-NC 4.0
tags:
  - cauchy-schwarz-inequality
  - euclidean-space
  - gram-schmidt-process
  - hilbert-space
  - inner-product
  - linear-algebra
  - norm
  - orthogonality
  - orthonormal-basis
  - vector-space
translation:
  status: current
  source_hash: 2911e68e4ae1ea92cbd5a93a9e4842c61c2c4c51a69ecbe3c222459f141a75a3
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 长度与角度作为代数数据

[向量空间](../vector-spaces/)规定了加法和数乘这两种运算，而其公理没有涉及大小或方向。我们可以对向量做加法和数乘，也可以检验它们是否线性无关，但任意向量空间既没有长度，也没有角度。在 $\mathbb{R}^n$ 中，这两个概念都由两个向量的[点积](../vectors/)定义：

$$\mathbf{x}\cdot\mathbf{y}=x_1y_1+\cdots+x_ny_n$$

向量的长度以及两个向量之间的角度都可以用这个运算表示。

$$\|\mathbf{x}\|=\sqrt{\mathbf{x}\cdot\mathbf{x}}\qquad\cos\theta=\frac{\mathbf{x}\cdot\mathbf{y}}{\|\mathbf{x}\|\|\mathbf{y}\|}$$

这些公式依赖于点积的三个性质：它对每个自变量都是线性的、具有对称性，并且当 $\mathbf{x}\neq\mathbf{0}$ 时 $\mathbf{x}\cdot\mathbf{x}$ 为正。把这些性质作为公理，就能在[矩阵](../matrices/)、[多项式](../polynomials/)、[连续函数](../continuous-functions/)或随机变量空间上定义长度和角度。它们的元素未必有直接的几何表示，但相同的计算仍然成立。

- - -

将点积推广到 $\mathbb{C}^n$ 的第一个尝试，是保留同一公式并令 $\mathbf{z}\cdot\mathbf{w}=z_1w_1+\cdots+z_nw_n$。对于 $\mathbb{C}^2$ 中的 $\mathbf{z}=(1,i)$，正定性失效，因为：

$$\mathbf{z}\cdot\mathbf{z}=1^2+i^2=1-1=0$$

该向量并不为零，所以 $\mathbf{z}\cdot\mathbf{z}=0$ 不能推出 $\mathbf{z}=\mathbf{0}$，表达式 $\sqrt{\mathbf{z}\cdot\mathbf{z}}$ 也就不能定义长度。不过，对于[复数](../complex-numbers/) $z$，其[复共轭](../complex-number-operations/)满足 $z\overline{z}=|z|^2$，这是一个非负实数。因此，我们对两个自变量中的一个取共轭：

$$\langle\mathbf{w},\mathbf{z}\rangle=w_1\overline{z_1}+\cdots+w_n\overline{z_n}$$

按照这个约定，$\langle\mathbf{z},\mathbf{z}\rangle=|z_1|^2+\cdots+|z_n|^2$ 非负，并且仅当 $\mathbf{z}=\mathbf{0}$ 时为零。这个运算不再具有对称性，因为交换自变量会对其值取共轭；它对第一个自变量线性，而对第二个自变量共轭线性。在 $\mathbb{R}$ 上，共轭就是恒等运算，因此内积又恢复为对称的双线性运算。所以，同一组公理适用于这两个域。

## 内积的公理

下文中，$\mathbb{F}$ 表示 $\mathbb{R}$ 或 $\mathbb{C}$，$V$ 是 $\mathbb{F}$ 上的向量空间。$V$ 上的内积为每一对有序向量指定一个标量 $\langle\mathbf{u},\mathbf{v}\rangle\in\mathbb{F}$，并且对所有 $\mathbf{u},\mathbf{v},\mathbf{w}\in V$ 及所有 $\lambda\in\mathbb{F}$ 满足以下三个要求。

+ 第一个自变量的线性，即 $\langle\mathbf{u}+\mathbf{v},\mathbf{w}\rangle=\langle\mathbf{u},\mathbf{w}\rangle+\langle\mathbf{v},\mathbf{w}\rangle$，且 $\langle\lambda\mathbf{u},\mathbf{v}\rangle=\lambda\langle\mathbf{u},\mathbf{v}\rangle$。
+ 共轭对称性，即 $\langle\mathbf{u},\mathbf{v}\rangle=\overline{\langle\mathbf{v},\mathbf{u}\rangle}$。
+ 正定性，即对每个 $\mathbf{v}\neq\mathbf{0}$ 都有 $\langle\mathbf{v},\mathbf{v}\rangle>0$。

在共轭对称性中令 $\mathbf{u}=\mathbf{v}$，得到 $\langle\mathbf{v},\mathbf{v}\rangle=\overline{\langle\mathbf{v},\mathbf{v}\rangle}$，所以这个标量是实数，第三条公理中的不等式也就有意义。令 $\lambda=0$ 的齐次性给出对每个 $\mathbf{v}$ 都有 $\langle\mathbf{0},\mathbf{v}\rangle=0$，从而 $\langle\mathbf{0},\mathbf{0}\rangle=0$。因此，第三条公理等价于对每个向量都有 $\langle\mathbf{v},\mathbf{v}\rangle\geq0$，且等号仅在零向量时成立。

前两条公理决定了第二个自变量的行为。两次应用共轭对称性可证明可加性：

$$
\begin{align}
\langle\mathbf{u},\mathbf{v}+\mathbf{w}\rangle &= \overline{\langle\mathbf{v}+\mathbf{w},\mathbf{u}\rangle} \\[6pt]
&= \overline{\langle\mathbf{v},\mathbf{u}\rangle}+\overline{\langle\mathbf{w},\mathbf{u}\rangle} \\[6pt]
&= \langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{u},\mathbf{w}\rangle
\end{align}
$$

对于数乘，同样的论证给出共轭齐次性：

$$
\begin{align}
\langle\mathbf{u},\lambda\mathbf{v}\rangle &= \overline{\langle\lambda\mathbf{v},\mathbf{u}\rangle} \\[6pt]
&= \overline{\lambda\langle\mathbf{v},\mathbf{u}\rangle} \\[6pt]
&= \overline{\lambda}\langle\mathbf{u},\mathbf{v}\rangle
\end{align}
$$

在一个自变量上线性、在另一个自变量上共轭线性的映射称为半双线性映射。在 $\mathbb{R}$ 上，共轭是恒等运算，内积就是对称的正定双线性型。

带有内积的向量空间称为内积空间。当 $\mathbb{F}=\mathbb{R}$ 时，该空间也称为欧几里得空间；当 $\mathbb{F}=\mathbb{C}$ 时，称为酉空间。

> 物理学和部分工程学采用相反的约定：内积对第一个自变量共轭线性、对第二个自变量线性。这两个约定是等价的，交换两个自变量即可把一个约定下的公式转换为另一个约定下的公式。因此，不同来源可能会以相反的自变量顺序给出同一个公式。

## 内积的例子

在 $\mathbb{F}^n$ 上，标准内积就是上面定义的内积。除非另有指定，在 $\mathbb{R}^n$ 和 $\mathbb{C}^n$ 上，符号 $\langle\cdot,\cdot\rangle$ 都表示这个内积。在坐标上取正权重 $c_1,\ldots,c_n$，可以在同一个空间上定义不同的内积。

$$\langle\mathbf{x},\mathbf{y}\rangle=c_1x_1\overline{y_1}+\cdots+c_nx_n\overline{y_n}$$

逐坐标即可验证每条公理，而正定性来自 $c_k>0$。这些权重可以表示坐标重要程度的差异。所得几何与标准几何不同，因为在一种权重选择下正交的向量，在另一种选择下未必正交。

这两种构造都是矩阵公式的特例。当 $\mathbb{F}^n$ 中的向量看作列向量，$\mathbf{y}^{*}$ 表示 $\mathbf{y}$ 的共轭转置时，每个厄米正定矩阵 $A$ 都定义了一个内积。

$$\langle\mathbf{x},\mathbf{y}\rangle=\mathbf{y}^{*}A\mathbf{x}$$

反过来，在标准基上的内积值完全决定了这个内积。若 $a_{ij}=\langle\mathbf{e}_j,\mathbf{e}_i\rangle$，由半双线性展开即可得到上面的公式。因此，$\mathbb{F}^n$ 上的内积与厄米正定矩阵之间存在一一对应关系。矩阵 $A$ 是该基的 Gram 矩阵，而 $A=I$ 给出标准内积。

- - -

连续函数 $f:[a,b]\to\mathbb{C}$ 的空间带有如下内积：

$$\langle f,g\rangle=\int_a^b f(x)\overline{g(x)} \ dx$$

三条公理分别来自[积分](../definite-integrals/)的相应性质。正定性依赖于连续性。若 $\int_a^b|f(x)|^2 \ dx=0$ 且 $f$ 连续，则 $f$ 恒等于零。事实上，如果 $f$ 在某点不为零，连续性会使得该点的某个邻域内 $|f|^2$ 为正，从而积分为正。没有连续性时，正定性会失效：在有限集合之外处处为零的函数，其范数可能为零，但它本身并不一定是零函数。

$m\times n$ 复矩阵空间带有 Frobenius 内积，它定义为对应元素乘积之和。

$$\langle A,B\rangle=\mathrm{tr}(B^{*}A)=\sum_{i=1}^{m}\sum_{j=1}^{n}a_{ij}\overline{b_{ij}}$$

这两个表达式相等，因为 $B^{*}A$ 的第 $i$ 个对角元素为 $\sum_k \overline{b_{ki}}a_{ki}$，而对角元素之和包含每一对对应元素。将 $m\times n$ 矩阵认作 $\mathbb{C}^{mn}$ 中的向量后，Frobenius 内积就是标准内积。

另一个例子是具有有限二阶矩的实随机变量构成的向量空间。用[期望值](../mean-or-expected-value-of-a-random-variable/)表示，公式 $\langle X,Y\rangle=E[XY]$ 对每个自变量都线性，并满足 $\langle X,X\rangle=E[X^2]\geq0$。只有将几乎处处相等的随机变量视为同一个元素时，正定性才成立，因为 $E[X^2]=0$ 推出的是 $X$ 以概率 1 为零，而不是在每个结果处都为零。[方差与协方差](../variance-and-covariance-of-a-random-variable/)可以从这个内积出发，通过对随机变量作中心化得到。

## 内积诱导的范数

每个内积都有一个相应的范数，定义为：

$$\|\mathbf{v}\|=\sqrt{\langle\mathbf{v},\mathbf{v}\rangle}$$

由于 $\langle\mathbf{v},\mathbf{v}\rangle$ 是非负实数，平方根为实数。范数为零当且仅当 $\mathbf{v}=\mathbf{0}$，并且满足绝对齐次性：

$$\|\lambda\mathbf{v}\|^2=\langle\lambda\mathbf{v},\lambda\mathbf{v}\rangle=\lambda\overline{\lambda}\langle\mathbf{v},\mathbf{v}\rangle=|\lambda|^2\|\mathbf{v}\|^2$$

开平方得到 $\|\lambda\mathbf{v}\|=|\lambda|\|\mathbf{v}\|$。使用平方范数可以使计算更简短，而基本展开式来自半双线性：

$$
\begin{align}
\|\mathbf{u}+\mathbf{v}\|^2 &= \langle\mathbf{u}+\mathbf{v},\mathbf{u}+\mathbf{v}\rangle \\[6pt]
&= \langle\mathbf{u},\mathbf{u}\rangle+\langle\mathbf{u},\mathbf{v}\rangle+\langle\mathbf{v},\mathbf{u}\rangle+\langle\mathbf{v},\mathbf{v}\rangle \\[6pt]
&= \|\mathbf{u}\|^2+2\mathrm{Re}\langle\mathbf{u},\mathbf{v}\rangle+\|\mathbf{v}\|^2
\end{align}
$$

中间两项互为共轭，它们的和是其中任一项的实部的两倍。在实空间中，中间项为 $2\langle\mathbf{u},\mathbf{v}\rangle$，所以展开式具有通常的二项式形式。下面的柯西—施瓦茨不等式将推出剩下的范数公理——三角不等式。

## 正交性与勾股恒等式

当内积为零时，称两个向量正交：

$$\mathbf{u}\perp\mathbf{v}\iff\langle\mathbf{u},\mathbf{v}\rangle=0$$

这个关系是对称的，因为 $\langle\mathbf{v},\mathbf{u}\rangle$ 是 $\langle\mathbf{u},\mathbf{v}\rangle$ 的共轭，而一个数为零当且仅当它的共轭为零。零向量与每个向量都正交，而正定性意味着它是唯一一个与自身正交的向量。

若 $\mathbf{u}$ 和 $\mathbf{v}$ 正交，则 $\mathrm{Re}\langle\mathbf{u},\mathbf{v}\rangle=0$。展开 $\|\mathbf{u}+\mathbf{v}\|^2$，便得到[勾股定理](../pythagorean-theorem/)的抽象形式。

$$\|\mathbf{u}+\mathbf{v}\|^2=\|\mathbf{u}\|^2+\|\mathbf{v}\|^2$$

对于 $\mathbb{R}^2$ 中的单位向量 $(\cos\theta,\sin\theta)$，同一个范数公式就是三角[勾股恒等式](../pythagorean-identity/) $\cos^2\theta+\sin^2\theta=1$。

由归纳法可知，对于任意有限族 $\mathbf{v}_1,\ldots,\mathbf{v}_m$ 的两两正交向量，同一恒等式都成立。

$$\left\|\sum_{k=1}^{m}\mathbf{v}_k\right\|^2=\sum_{k=1}^{m}\|\mathbf{v}_k\|^2$$

当且仅当 $\mathrm{Re}\langle\mathbf{u},\mathbf{v}\rangle=0$ 时，上述恒等式成立。在实空间中，这个条件等价于正交性，因此定理的逆命题成立。在复空间中，条件较弱。对任意 $\mathbf{u}\neq\mathbf{0}$，令 $\mathbf{v}=i\mathbf{u}$。则 $\langle\mathbf{u},i\mathbf{u}\rangle=\overline{i}\|\mathbf{u}\|^2=-i\|\mathbf{u}\|^2$ 非零，但实部为零。两个向量并不正交，然而它们的范数仍满足勾股恒等式。

$$\|\mathbf{u}+i\mathbf{u}\|^2=|1+i|^2\|\mathbf{u}\|^2=2\|\mathbf{u}\|^2=\|\mathbf{u}\|^2+\|i\mathbf{u}\|^2$$

因此，勾股定理的逆命题在复内积空间中不成立。

## 投影到一条直线

设 $\mathbf{v}\neq\mathbf{0}$，$\mathbf{u}$ 为任意向量。我们要把 $\mathbf{u}$ 分解为 $\mathbf{v}$ 的倍数与一个和 $\mathbf{v}$ 正交的余项。因此，需要找到一个标量 $c$，使得 $\mathbf{u}-c\mathbf{v}\perp\mathbf{v}$。正交条件为：

$$\langle\mathbf{u}-c\mathbf{v},\mathbf{v}\rangle=\langle\mathbf{u},\mathbf{v}\rangle-c\|\mathbf{v}\|^2=0$$

唯一的解为 $c=\langle\mathbf{u},\mathbf{v}\rangle/\|\mathbf{v}\|^2$，所以分解为：

$$\mathbf{u}=\frac{\langle\mathbf{u},\mathbf{v}\rangle}{\|\mathbf{v}\|^2}\mathbf{v}+\mathbf{w}\qquad\langle\mathbf{w},\mathbf{v}\rangle=0$$

![IMG. 1](/assets/algebraic-structures/svg/inner-product-spaces-1.svg)

第一项是 $\mathbf{u}$ 在由 $\mathbf{v}$ 张成的直线上的正交投影。在 $\mathbb{R}^2$ 和 $\mathbb{R}^3$ 中，它就是 $\mathbf{u}$ 沿该直线的分量。由于两项正交，勾股恒等式适用。此外，$\|c\mathbf{v}\|^2=|c|^2\|\mathbf{v}\|^2=|\langle\mathbf{u},\mathbf{v}\rangle|^2/\|\mathbf{v}\|^2$。因此：

$$\|\mathbf{u}\|^2=\frac{|\langle\mathbf{u},\mathbf{v}\rangle|^2}{\|\mathbf{v}\|^2}+\|\mathbf{w}\|^2$$

## 柯西—施瓦茨不等式

由于 $\|\mathbf{w}\|^2\geq0$，最后一个恒等式蕴含一个不等式。两边乘以 $\|\mathbf{v}\|^2$ 并开平方，得到内积空间中所有向量都满足的柯西—施瓦茨不等式：

$$|\langle\mathbf{u},\mathbf{v}\rangle|\leq\|\mathbf{u}\|\|\mathbf{v}\|$$

在构造投影时排除了 $\mathbf{v}=\mathbf{0}$ 的情形；此时不等式两边都等于零。当 $\mathbf{v}\neq\mathbf{0}$ 时，等号当且仅当 $\|\mathbf{w}\|^2=0$，也就是 $\mathbf{w}=\mathbf{0}$ 且 $\mathbf{u}$ 是 $\mathbf{v}$ 的倍数。把退化情形也包括在内，等号刻画的正是线性相关的向量对。

对于 $\mathbb{R}^n$ 上的标准内积，不等式为：

$$\left(\sum_{k=1}^{n}x_ky_k\right)^2\leq\left(\sum_{k=1}^{n}x_k^2\right)\left(\sum_{k=1}^{n}y_k^2\right)$$

对于复坐标，对应的结论是[复数的有限项柯西—施瓦茨不等式](../complex-number-fundamental-inequalities/)。

对于 $[a,b]$ 上的连续实值函数，不等式为：

$$\left(\int_a^b f(x)g(x) \ dx\right)^2\leq\left(\int_a^b f(x)^2 \ dx\right)\left(\int_a^b g(x)^2 \ dx\right)$$

对于随机变量，不等式为 $E[XY]^2\leq E[X^2]E[Y^2]$。将它应用于中心化变量 $X-E[X]$ 与 $Y-E[Y]$，就能把协方差的绝对值限制在标准差之积以内。因此，相关系数属于 $[-1,1]$。

## 三角不等式

柯西—施瓦茨不等式蕴含由内积诱导的范数的三角不等式。我们先用内积的绝对值界定其实部，再应用柯西—施瓦茨不等式。

$$
\begin{align}
\|\mathbf{u}+\mathbf{v}\|^2 &= \|\mathbf{u}\|^2+2\mathrm{Re}\langle\mathbf{u},\mathbf{v}\rangle+\|\mathbf{v}\|^2 \\[6pt]
&\leq \|\mathbf{u}\|^2+2|\langle\mathbf{u},\mathbf{v}\rangle|+\|\mathbf{v}\|^2 \\[6pt]
&\leq \|\mathbf{u}\|^2+2\|\mathbf{u}\|\|\mathbf{v}\|+\|\mathbf{v}\|^2 \\[6pt]
&= (\|\mathbf{u}\|+\|\mathbf{v}\|)^2
\end{align}
$$

开平方得到 $\|\mathbf{u}+\mathbf{v}\|\leq\|\mathbf{u}\|+\|\mathbf{v}\|$。等号要求两个步骤都取等，因此 $\mathrm{Re}\langle\mathbf{u},\mathbf{v}\rangle=|\langle\mathbf{u},\mathbf{v}\rangle|=\|\mathbf{u}\|\|\mathbf{v}\|$。柯西—施瓦茨不等式中的等号意味着两个向量线性相关。实部与绝对值相等，则要求联系它们的标量为非负实数。因此，三角不等式取等当且仅当其中一个向量是另一个向量的非负实数倍。

现在已经证明的三个性质说明 $\|\cdot\|$ 是一个范数。因此，每个内积空间都是赋范空间。公式 $d(\mathbf{u},\mathbf{v})=\|\mathbf{u}-\mathbf{v}\|$ 定义了一个度量，所以内积空间也具有收敛性、连续性以及[柯西数列](../cauchy-sequence/)等概念。

## 来自内积的范数

内积诱导的范数唯一决定该内积。此外，一个范数恰好在满足平行四边形法则时由某个内积诱导。把 $\|\mathbf{u}+\mathbf{v}\|^2$ 和 $\|\mathbf{u}-\mathbf{v}\|^2$ 的展开式相加，含有实部的项会抵消，得到：

$$\|\mathbf{u}+\mathbf{v}\|^2+\|\mathbf{u}-\mathbf{v}\|^2=2\|\mathbf{u}\|^2+2\|\mathbf{v}\|^2$$

![IMG. 3](/assets/algebraic-structures/svg/inner-product-spaces-3.svg)

对于相邻边为 $\mathbf{u}$ 和 $\mathbf{v}$ 的平行四边形，上述恒等式说明，两条对角线的平方和等于四条边的平方和。于是，每个满足平行四边形法则的范数都由唯一的内积诱导。极化恒等式可以从范数恢复这个内积。在实空间中，一个平方范数之差就足够了。

$$\langle\mathbf{u},\mathbf{v}\rangle=\frac{\|\mathbf{u}+\mathbf{v}\|^2-\|\mathbf{u}-\mathbf{v}\|^2}{4}$$

在复空间中，需要四项，每一项对应一个四次[单位根](../roots-of-unity/)：

$$\langle\mathbf{u},\mathbf{v}\rangle=\frac{1}{4}\sum_{k=0}^{3}i^k\|\mathbf{u}+i^k\mathbf{v}\|^2$$

展开平方范数即可验证该公式。求和后，$\|\mathbf{u}\|^2$、$\|\mathbf{v}\|^2$ 和 $\langle\mathbf{v},\mathbf{u}\rangle$ 的系数都为零，而 $\langle\mathbf{u},\mathbf{v}\rangle$ 的系数为一。

例如，考虑 $\mathbb{R}^2$ 上的范数 $\|\mathbf{x}\|_1=|x_1|+|x_2|$。令 $\mathbf{u}=(1,0)$、$\mathbf{v}=(0,1)$，则 $\mathbf{u}+\mathbf{v}$ 和 $\mathbf{u}-\mathbf{v}$ 的范数都为 $2$。因此，平行四边形法则的左侧为 $8$，右侧为 $4$。所以，$\mathbb{R}^2$ 上不存在诱导出这个范数的内积。

## 两个向量之间的角度

在实内积空间中，柯西—施瓦茨不等式给出：

$$-1\leq\frac{\langle\mathbf{u},\mathbf{v}\rangle}{\|\mathbf{u}\|\|\mathbf{v}\|}\leq1$$

对于非零向量，中间的商属于[反余弦函数](../arcsine-and-arccosine/)的定义域。$\mathbf{u}$ 与 $\mathbf{v}$ 之间的[角度](../angles-and-angular-measure/)是满足下式的唯一 $\theta\in[0,\pi]$：

$$\cos\theta=\frac{\langle\mathbf{u},\mathbf{v}\rangle}{\|\mathbf{u}\|\|\mathbf{v}\|}$$

![IMG. 2](/assets/algebraic-structures/svg/inner-product-spaces-2.svg)

在标准内积下的 $\mathbb{R}^2$ 和 $\mathbb{R}^3$ 中，这个定义与通常的欧几里得角一致。$\theta=\pi/2$ 等价于正交，而 $\theta=0$ 和 $\theta=\pi$ 分别对应方向相同和相反的向量。两个数据向量之间的[余弦相似度](../cosine-similarity/)就是 $\cos\theta$。

在 $\mathbb{R}^3$ 中取 $\mathbf{u}=(1,2,2)$ 和 $\mathbf{v}=(2,-1,2)$，其内积和范数为：

$$\langle\mathbf{u},\mathbf{v}\rangle=2-2+4=4\qquad\|\mathbf{u}\|=\|\mathbf{v}\|=3$$

角度的余弦为 $4/9$，所以 $\theta=\arccos(4/9)$，约为 $63.6$ 度。这两个向量既不正交也不平行。由于它们的余弦为正，夹角是锐角。

在复空间中，上述商可能不是实数，因此不能确定 $[0,\pi]$ 中的角度。一种替代定义使用内积的绝对值：

$$q=\frac{|\langle\mathbf{u},\mathbf{v}\rangle|}{\|\mathbf{u}\|\|\mathbf{v}\|}$$

柯西—施瓦茨不等式给出 $q\in[0,1]$，所以 $\arccos q$ 是 $[0,\pi/2]$ 中的无向角。对于正交向量，这个角度为 $\pi/2$；对于线性相关的非零向量，角度为 $0$。

## 正交归一向量组与基

向量组 $\mathbf{e}_1,\ldots,\mathbf{e}_m$ 在两两正交且每个向量的范数为 $1$ 时称为正交归一向量组。这两个条件等价于：

$$\langle\mathbf{e}_i,\mathbf{e}_j\rangle=\delta_{ij}=\begin{cases}1 & i=j \\[6pt] 0 & i\neq j\end{cases}$$

对于正交归一向量的[线性组合](../linear-combinations/)，平方范数中的每个混合项都为零。因此：

$$\left\|\sum_{k=1}^{m}a_k\mathbf{e}_k\right\|^2=\sum_{k=1}^{m}|a_k|^2$$

由此可得线性无关性。若该组合等于 $\mathbf{0}$，右侧为零，于是每个 $|a_k|^2$ 都为零，每个系数也都为零。因此，长度为 $\dim V$ 的正交归一向量组就是一个基，称为正交归一基。

正交归一基无需解线性方程组，就能给出向量的坐标。若 $\mathbf{v}=a_1\mathbf{e}_1+\cdots+a_n\mathbf{e}_n$，对 $\mathbf{e}_j$ 取内积得到 $\langle\mathbf{v},\mathbf{e}_j\rangle=a_j$。因此：

$$\mathbf{v}=\sum_{k=1}^{n}\langle\mathbf{v},\mathbf{e}_k\rangle\mathbf{e}_k$$

正交归一组合的范数公式现在给出 Parseval 恒等式。

$$\|\mathbf{v}\|^2=\sum_{k=1}^{n}|\langle\mathbf{v},\mathbf{e}_k\rangle|^2$$

对于不一定是基的正交归一向量组，从 $\mathbf{v}$ 中减去其在 $\mathbf{e}_1,\ldots,\mathbf{e}_m$ 上的投影，所得余项与向量组中的每个向量都正交。于是勾股恒等式给出 Bessel 不等式：

$$\sum_{k=1}^{m}|\langle\mathbf{v},\mathbf{e}_k\rangle|^2\leq\|\mathbf{v}\|^2$$

在有限维空间中，对每个 $\mathbf{v}$ 都取等，当且仅当正交余项总是为零；这等价于该向量组是一个基。

> 给定 $S\subseteq V$，正交补 $S^{\perp}$ 是与 $S$ 中每个元素都正交的向量所组成的集合。第一个自变量的线性意味着，对任意子集 $S$，$S^{\perp}$ 都是一个[子空间](../subspaces/)；而正定性给出 $S\cap S^{\perp}\subseteq\{\ \mathbf{0}\ \}$。

## Gram–Schmidt 过程

每个有限维内积空间都有一个正交归一基。Gram–Schmidt 过程从任意一个基出发，一次处理一个向量，构造出正交归一基。对于线性无关向量组 $\mathbf{v}_1,\ldots,\mathbf{v}_m$，第一个归一化向量为：

$$\mathbf{e}_1=\frac{\mathbf{v}_1}{\|\mathbf{v}_1\|}$$

在第 $j$ 步，从已得到的向量上减去投影后剩下 $\mathbf{w}_j$，其归一化结果为 $\mathbf{e}_j$：

$$\mathbf{w}_j=\mathbf{v}_j-\sum_{k=1}^{j-1}\langle\mathbf{v}_j,\mathbf{e}_k\rangle\mathbf{e}_k\qquad\mathbf{e}_j=\frac{\mathbf{w}_j}{\|\mathbf{w}_j\|}$$

![IMG. 4](/assets/algebraic-structures/svg/inner-product-spaces-4.svg)

对于 $i<j$，将 $\mathbf{w}_j$ 与 $\mathbf{e}_i$ 取内积，得到 $\langle\mathbf{v}_j,\mathbf{e}_i\rangle-\langle\mathbf{v}_j,\mathbf{e}_i\rangle=0$。因此，新向量与它之前的所有向量正交，向量组仍然是正交归一的。除以 $\|\mathbf{w}_j\|$ 是合法的，因为 $\mathbf{w}_j$ 不可能为零。事实上，归纳可知，$\mathbf{e}_1,\ldots,\mathbf{e}_{j-1}$ 与 $\mathbf{v}_1,\ldots,\mathbf{v}_{j-1}$ 张成同一个空间。若 $\mathbf{w}_j=\mathbf{0}$，则 $\mathbf{v}_j$ 会属于这个张成空间，与线性无关性矛盾。同样的归纳还表明，在每一步中两个向量组都有相同的张成空间。

当初始向量组是有限维空间的一个基时，所得正交归一向量组的长度为 $\dim V$，因而也是一个基。若先把正交归一向量组补成一个基，Gram–Schmidt 过程会保持原有向量不变，因为它们已经具有范数 $1$，并且与之前的向量正交。因此，每个正交归一向量组都可以扩充为一个正交归一基。

- - -

例如，考虑 $\mathbb{R}^3$ 的基 $\mathbf{v}_1=(1,1,1)$、$\mathbf{v}_2=(1,1,0)$、$\mathbf{v}_3=(1,0,0)$，并取标准内积。第一个向量的范数为 $\sqrt{3}$，所以其归一化结果为：

$$\mathbf{e}_1=\frac{1}{\sqrt{3}}(1,1,1)$$

$\mathbf{v}_2$ 在 $\mathbf{e}_1$ 上的投影系数为 $\langle\mathbf{v}_2,\mathbf{e}_1\rangle=2/\sqrt{3}$。减去投影后的余项为：

$$
\begin{align}
\mathbf{w}_2 &= (1,1,0)-\frac{2}{\sqrt{3}}\cdot\frac{1}{\sqrt{3}}(1,1,1) \\[6pt]
&= (1,1,0)-\frac{2}{3}(1,1,1) \\[6pt]
&= \left(\frac{1}{3},\frac{1}{3},-\frac{2}{3}\right)
\end{align}
$$

向量 $\mathbf{w}_2$ 的范数为 $\sqrt{6}/3$，所以其归一化结果为：

$$\mathbf{e}_2=\frac{1}{\sqrt{6}}(1,1,-2)$$

对于 $\mathbf{v}_3$，两个投影系数分别为 $\langle\mathbf{v}_3,\mathbf{e}_1\rangle=1/\sqrt{3}$ 和 $\langle\mathbf{v}_3,\mathbf{e}_2\rangle=1/\sqrt{6}$。因此：

$$
\begin{align}
\mathbf{w}_3 &= (1,0,0)-\frac{1}{3}(1,1,1)-\frac{1}{6}(1,1,-2) \\[6pt]
&= \left(1-\frac{1}{3}-\frac{1}{6},-\frac{1}{3}-\frac{1}{6},-\frac{1}{3}+\frac{1}{3}\right) \\[6pt]
&= \left(\frac{1}{2},-\frac{1}{2},0\right)
\end{align}
$$

这个余项的范数为 $1/\sqrt{2}$，因此基的最后一个向量为：

$$\mathbf{e}_3=\frac{1}{\sqrt{2}}(1,-1,0)$$

三个内积 $\langle\mathbf{e}_1,\mathbf{e}_2\rangle$、$\langle\mathbf{e}_1,\mathbf{e}_3\rangle$、$\langle\mathbf{e}_2,\mathbf{e}_3\rangle$ 全都为零，并且每个向量的范数都为 $1$，所以 $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$ 是 $\mathbb{R}^3$ 的一个正交归一基。

## 超越有限维

上面证明的所有代数恒等式在无限维内积空间中仍然成立，但完备性不再自动成立。每个有限维内积空间都是完备的，因此每个柯西数列都收敛到该空间中的一个向量。相比之下，$[0,1]$ 上带有积分内积的连续函数空间并不完备。对 $n\geq2$，定义 $f_n$：在 $[0,1/2]$ 上为 $0$，在 $[1/2,1/2+1/n]$ 上从 $0$ 线性变到 $1$，在 $[1/2+1/n,1]$ 上为 $1$。对于诱导范数，数列 $(f_n)$ 是柯西数列，因为当 $m,n\to\infty$ 时，$f_n$ 与 $f_m$ 可能不同的区间长度趋于零。但它在该范数下没有连续极限，因为任何极限都必须几乎处处等于不连续的阶跃函数。

在其诱导范数下完备的内积空间称为希尔伯特空间。每个内积空间都有一个完备化，而完备化是一个希尔伯特空间；原空间是其完备化中的稠密子空间。内积通过连续性延拓到完备化。在平方可积周期函数构成的希尔伯特空间中，归一化的三角函数构成一个正交归一基。

[傅里叶级数](../fourier-series/)就是相应的正交归一展开，其系数是内积，正如有限维正交归一基中的坐标也是内积。
