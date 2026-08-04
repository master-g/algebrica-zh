---
title: 向量
title_en: Vectors
source: https://algebrica.org/vectors/
license: CC BY-NC 4.0
tags:
  - cross-product
  - dot-product
  - euclidean-space
  - linear-algebra
  - scalar-triple-product
  - vectors
translation:
  status: current
  source_hash: a3c5647992304d314621f3043c09ebb62cd58cd26e3af0b95748a324e7f7a2c0
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 几何表示

向量是同时具有大小与方向的量，与此相对，标量仅由其大小来描述。这一区分源于几何学与物理学：位移、速度、力等量都需要方向信息，而单个实数无法编码这种信息。

此处所建立的正式处理是代数的，适用于欧几里得空间 $\mathbb{R}^2$ 与 $\mathbb{R}^3$ 中的向量，这对微积分、几何学与力学中的大多数基本应用已足够。平面或三维空间中的向量表示为一条有向线段，即一条具有确定起点与终点的线段。线段的方向指示向量的方向，其长度即向量的大小。

![图 1](/assets/vectors-and-matrices/svg/vectors-1.zh.svg)

方向相同且长度相同的两条有向线段，无论在空间中的位置如何，都被视为表示同一个向量。这一等价关系是自由向量概念的基础：自由向量完全由其方向与大小来刻画，与绘制位置无关。

![图 2](/assets/vectors-and-matrices/svg/vectors-2.zh.svg)

当选取一个固定原点 $O$ 时，平面或空间中的每一个点 $P$ 都确定一个向量，即从 $O$ 到 $P$ 的有向线段，称为 $P$ 的位置向量。这一对应关系将点与始于原点的向量等同起来，从而将空间的几何描述与下一节中建立的坐标代数描述联系起来。自由向量描述与任何特定点无关的位移，而位置向量则指定了相对于原点的某一确定位置。

向量通常用粗体字母如 $\mathbf{v}$ 来表示，或采用箭头记号 $\vec{v}$。零向量记作 $\mathbf{0}$，其大小为零且无确定方向，是向量运算中的加法单位元。

## 分量与坐标表示

在笛卡尔坐标系中，$\mathbb{R}^n$ 中的每个向量都可以用沿坐标轴的分量来表示。$\mathbb{R}^2$ 中的向量 $\mathbf{v}$ 写成一个有序对：

$$\mathbf{v} = (v_1, v_2) \in \mathbb{R}^2$$

![图 3](/assets/vectors-and-matrices/svg/vectors-3.zh.svg)

$\mathbb{R}^3$ 中的向量写成一个有序三元组。

$$\mathbf{v} = (v_1, v_2, v_3) \in \mathbb{R}^3$$

![图 4](/assets/vectors-and-matrices/svg/vectors-4.zh.svg)

[实数](../properties-of-real-numbers/) $v_1, v_2, v_3$ 称为 $\mathbf{v}$ 在所选坐标系中的分量。更一般地，$\mathbb{R}^n$ 中的向量是一个实数的有序 $n$ 元组 $(v_1, v_2, \ldots, v_n)$，本条目中定义的运算都可推广到这一一般情形，但叉积除外，它是 $\mathbb{R}^3$ 所特有的。当两个向量属于同一空间且各对应分量相等时，它们相等，因此 $\mathbb{R}^n$ 中的等式 $\mathbf{u} = \mathbf{v}$ 等价于 $n$ 个标量等式 $u_1 = v_1, \ldots, u_n = v_n$。

$\mathbb{R}^3$ 中的标准基向量定义如下。

$$\mathbf{i} = (1, 0, 0) \qquad \mathbf{j} = (0, 1, 0) \qquad \mathbf{k} = (0, 0, 1)$$

$\mathbb{R}^3$ 中的每个向量都可以表示为这些基向量的[线性组合](../linear-combinations/)。

$$\mathbf{v} = v_1\mathbf{i} + v_2\mathbf{j} + v_3\mathbf{k}$$

在该表达式中，系数 $v_1$ 使 $\mathbf{i}$ 沿 $x$ 轴缩放，$v_2$ 使 $\mathbf{j}$ 沿 $y$ 轴缩放，$v_3$ 使 $\mathbf{k}$ 沿 $z$ 轴缩放。这三个缩放后的基向量之和精确地重构了 $\mathbf{v}$。

例如，向量 $(3, -1, 2)$ 写成 $3\mathbf{i} - \mathbf{j} + 2\mathbf{k}$，表示沿 $x$ 方向移动三个单位，沿 $y$ 负方向移动一个单位，沿 $z$ 方向移动两个单位。这种表示明确展示了 $\mathbf{v}$ 沿各坐标方向的分解。

> $\mathbb{R}^n$ 中的同样构造使用标准单位向量 $\mathbf{e}_1, \ldots, \mathbf{e}_n$，其中 $\mathbf{e}_i$ 的第 $i$ 个分量等于 $1$，其余所有分量等于 $0$。每个向量 $\mathbf{v} \in \mathbb{R}^n$ 分解为 $\mathbf{v} = v_1\mathbf{e}_1 + \cdots + v_n\mathbf{e}_n$，且向量 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 对应于 $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$。

## 向量运算

向量的基本代数运算包括加法、减法和数乘。这些运算按分量定义，并具有明确的几何意义。给定 $\mathbb{R}^3$ 中的两个向量 $\mathbf{u} = (u_1, u_2, u_3)$ 和 $\mathbf{v} = (v_1, v_2, v_3)$，它们的和定义如下。

$$\mathbf{u} + \mathbf{v} = (u_1+v_1, u_2+v_2, u_3+v_3)$$

在几何上，向量加法相当于将 $\mathbf{v}$ 的起点放置在 $\mathbf{u}$ 的终点处。所得的向量连接 $\mathbf{u}$ 的起点与 $\mathbf{v}$ 的终点。这一构造称为三角形法则。

![图 5](/assets/vectors-and-matrices/svg/vectors-5.zh.svg)

等价的表述即平行四边形法则，将两个向量置于同一公共起点，并将它们的和等同于它们所张成的平行四边形的对角线。

![图 6](/assets/vectors-and-matrices/svg/vectors-6.zh.svg)

用实数 $\lambda \in \mathbb{R}$ 进行的数乘会均匀地缩放每个分量。

$$\lambda\mathbf{v} = (\lambda v_1, \lambda v_2, \lambda v_3)$$

当 $\lambda > 0$ 时，所得向量与 $\mathbf{v}$ 同向，其大小按 $\lambda$ 缩放。当 $\lambda < 0$ 时，方向反转。当 $\lambda = 0$ 时，结果为零向量。减法由前述两种运算组合定义，$\mathbf{u} - \mathbf{v} = \mathbf{u} + (-1)\mathbf{v}$，由此得到 $(u_1-v_1, u_2-v_2, u_3-v_3)$。

差 $\mathbf{u} - \mathbf{v}$ 同样具有直接的几何意义。当两个向量从同一公共起点出发时，$\mathbf{u} - \mathbf{v}$ 是连接 $\mathbf{v}$ 的终点与 $\mathbf{u}$ 的终点的向量，因为将它加上 $\mathbf{v}$ 便得到 $\mathbf{u}$。在两个向量所确定的平行四边形中，和对应一条对角线，差对应另一条对角线。特别地，若两点 $P$ 和 $Q$ 的位置向量分别为 $\mathbf{p}$ 和 $\mathbf{q}$，则差 $\mathbf{p} - \mathbf{q}$ 是从 $Q$ 到 $P$ 的位移。

## 代数性质

向量加法和数乘这两种运算满足一组基本性质，它们对所有向量 $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^n$ 和所有标量 $\lambda, \mu \in \mathbb{R}$ 都成立。

+ 加法满足交换律，即 $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$；同时满足结合律，即 $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$。
+ 零向量 $\mathbf{0}$ 是加法单位元，对每个 $\mathbf{v}$ 都满足 $\mathbf{v} + \mathbf{0} = \mathbf{v}$；每个向量 $\mathbf{v}$ 都有加法逆元 $-\mathbf{v} = (-1)\mathbf{v}$，使得 $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$。
+ 数乘对向量加法满足分配律，即 $\lambda(\mathbf{u} + \mathbf{v}) = \lambda\mathbf{u} + \lambda\mathbf{v}$；对标量加法也满足分配律，即 $(\lambda + \mu)\mathbf{v} = \lambda\mathbf{v} + \mu\mathbf{v}$。数乘与标量的乘法相容，因为 $(\lambda\mu)\mathbf{v} = \lambda(\mu\mathbf{v})$；标量 $1$ 是乘法单位元，有 $1 \cdot \mathbf{v} = \mathbf{v}$。

> 这些性质合起来构成向量空间的定义公理。集合 $\mathbb{R}^n$ 连同这两种运算构成[域](../fields/) $\mathbb{R}$ 上的向量空间，详见[向量空间](../vector-spaces/)条目中更一般的讨论。

## 向量的范数

向量 $\mathbf{v} = (v_1, v_2, v_3)$ 的范数（或称模）是一个非负实数，用于衡量其长度。它由以下表达式定义：

$$\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + v_3^2}$$

该公式是[勾股定理](../pythagorean-theorem/)沿各坐标轴逐次应用的直接推论。在 $\mathbb{R}^2$ 中，类似的公式如下：

$$\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2}$$

举例来说，考虑 $\mathbb{R}^3$ 中的向量 $\mathbf{v} = (2, -3, 6)$。它的范数通过将各分量的平方求和再取平方根来计算：

$$
\begin{align}
\|\mathbf{v}\| &= \sqrt{2^2+(-3)^2+6^2} \\[6pt]
               &= \sqrt{4+9+36} \\[6pt]
               &= \sqrt{49} \\[6pt]
               &= 7
\end{align}
$$

根式下的每一项对应一个坐标方向的平方贡献，结果确认 $\mathbf{v}$ 的长度为 $7$。范数等于 1 的向量称为单位向量。给定任意非零向量 $\mathbf{v}$，将其除以自身的范数即得到同方向的单位向量。这一运算称为归一化。

$$\hat{\mathbf{v}} = \frac{\mathbf{v}}{\|\mathbf{v}\|}$$

所得向量 $\hat{\mathbf{v}}$ 由构造方式可知满足 $\|\hat{\mathbf{v}}\| = 1$。

## 点积

点积，又称标量积或内积，是 $\mathbb{R}^n$ 上的标准[内积](../inner-product-spaces/)。对于 $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$，点积在代数上定义为对应分量乘积之和。

$$\mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^{n} u_i v_i = u_1 v_1 + u_2 v_2 + \cdots + u_n v_n$$

点积也有等价的几何表述，用两个向量之间的[夹角](../angles-and-angular-measure/) $\theta$ 来表示。

$$\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\|\|\mathbf{v}\|\cos\theta$$

除以两个向量的范数，便得到[余弦相似度](../cosine-similarity/)，它能在不受长度影响的情况下比较非零向量的方向。

因子 $\cos\theta$ 将点积与两个向量之间夹角的[余弦](../sine-and-cosine/)联系起来。当 $\mathbf{u} \cdot \mathbf{v} = 0$ 且两个向量均不为零时，可得 $\cos\theta = 0$，因此 $\theta = \pi/2$。满足此条件的两个向量称为正交。反之，当两向量平行时，$\theta = 0$ 或 $\theta = \pi$，点积等于 $\pm\|\mathbf{u}\|\|\mathbf{v}\|$。范数也可由点积导出，因为 $\|\mathbf{v}\|^2 = \mathbf{v} \cdot \mathbf{v}$。作为应用，考虑 $\mathbf{u} = (1, 2, -1)$ 和 $\mathbf{v} = (3, 0, 3)$。点积计算如下。

$$
\begin{align}
\mathbf{u} \cdot \mathbf{v} &= (1)(3)+(2)(0)+(-1)(3) \\[6pt]
                             &= 3+0-3 \\[6pt]
                             &= 0
\end{align}
$$

由于结果为零，这两个向量正交。

## 叉积

叉积是定义于 $\mathbb{R}^3$ 中向量的一种运算，它取两个向量并返回第三个向量。与点积不同，结果不是标量而是向量，因此该运算也称为向量积。给定 $\mathbf{u} = (u_1, u_2, u_3)$ 和 $\mathbf{v} = (v_1, v_2, v_3)$，它们的叉积由以下公式定义，写成[矩阵](../matrices/)的[行列式](../determinant/)。

$$
\mathbf{u} \times \mathbf{v} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[6pt]
u_1 & u_2 & u_3 \\[6pt]
v_1 & v_2 & v_3
\end{vmatrix}
$$

沿第一行展开得到分量形式。

$$\mathbf{u} \times \mathbf{v} = (u_2 v_3 - u_3 v_2, u_3 v_1 - u_1 v_3, u_1 v_2 - u_2 v_1)$$

所得向量与 $\mathbf{u}$ 和 $\mathbf{v}$ 都正交，可以通过计算点积 $(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{u}$ 和 $(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{v}$ 来验证，两者都等于零。$\mathbf{u} \times \mathbf{v}$ 的方向由右手定则确定。将右手的手指从 $\mathbf{u}$ 卷向 $\mathbf{v}$，拇指所指的方向即为 $\mathbf{u} \times \mathbf{v}$ 的方向。叉积的大小有一个几何解释：

$$\|\mathbf{u} \times \mathbf{v}\| = \|\mathbf{u}\|\|\mathbf{v}\|\sin\theta$$

这个量等于由 $\mathbf{u}$ 和 $\mathbf{v}$ 张成的平行四边形的面积。特别地，$\mathbf{u} \times \mathbf{v} = \mathbf{0}$ 当且仅当 $\sin\theta = 0$，即当且仅当两向量平行。叉积是反交换的，$\mathbf{v} \times \mathbf{u} = -(\mathbf{u} \times \mathbf{v})$，这反映了交换操作数顺序时方向的改变。

- - -

作为一个具体例子，考虑 $\mathbf{u} = (1, 2, 3)$ 和 $\mathbf{v} = (4, 5, 6)$。套用分量公式得到如下结果。

$$
\begin{align}
\mathbf{u} \times \mathbf{v} &= (u_2v_3-u_3v_2, u_3v_1-u_1v_3, u_1v_2-u_2v_1) \\[6pt]
&= (2\cdot6-3\cdot5, 3\cdot4-1\cdot6, 1\cdot5-2\cdot4) \\[6pt]
&= (12-15, 12-6, 5-8) \\[6pt]
&= (-3, 6, -3)
\end{align}
$$

可以通过计算两个点积来验证结果与 $\mathbf{u}$ 和 $\mathbf{v}$ 都正交。第一个：

$$(-3, 6, -3)\cdot(1, 2, 3) = -3 + 12 - 9 = 0$$

第二个：

$$(-3, 6, -3)\cdot(4, 5, 6) = -12 + 30 - 18 = 0$$

两个结果都是零，确认 $\mathbf{u} \times \mathbf{v}$ 与两个因子都正交。

- - -

由于叉积的大小是平行四边形的面积，它也给出了由顶点构成的三角形的面积。三个不共线的点 $A$、$B$、$C$ 确定一个三角形，从 $A$ 出发的两条边是向量 $B - A$ 和 $C - A$。三角形是这两个向量张成的平行四边形的一半，因此其面积为：

$$\mathrm{Area}(ABC) = \frac{1}{2}\|(B - A) \times (C - A)\|$$

对于平面上的三个点，设 $A = (x_A, y_A)$、$B = (x_B, y_B)$、$C = (x_C, y_C)$，叉积只有沿 $\mathbf{k}$ 方向的分量，面积化为一个行列式的绝对值：

$$
\mathrm{Area}(ABC) = \frac{1}{2}\left|\begin{vmatrix}
x_B - x_A & y_B - y_A \\[6pt]
x_C - x_A & y_C - y_A
\end{vmatrix}\right|
= \frac{1}{2}\left|\begin{vmatrix}
x_A & y_A & 1 \\[6pt]
x_B & y_B & 1 \\[6pt]
x_C & y_C & 1
\end{vmatrix}\right|
$$

> 行列式公式仅适用于平面上的三角形。对于空间中的三个点，面积由完整的叉积 $\frac{1}{2}\|(B - A) \times (C - A)\|$ 计算，因为二维行列式会丢弃其余两个分量。

例如，取 $A = (1, 1, 1)$、$B = (2, -1, 3)$、$C = (-1, 0, 1)$。从 $A$ 出发的两条边是 $B - A = (1, -2, 2)$ 和 $C - A = (-2, -1, 0)$，它们不成比例，因此三个点不共线。它们的叉积是：

$$
\begin{align}
(B - A) \times (C - A) &= ((-2)(0)-(2)(-1), (2)(-2)-(1)(0), (1)(-1)-(-2)(-2)) \\[6pt]
&= (2, -4, -5)
\end{align}
$$

三角形的面积是其范数的一半：

$$
\begin{align}
\mathrm{Area}(ABC) &= \frac{1}{2}\|(2, -4, -5)\| \\[6pt]
&= \frac{1}{2}\sqrt{4+16+25} \\[6pt]
&= \frac{1}{2}\sqrt{45} \\[6pt]
&= \frac{3}{2}\sqrt{5}
\end{align}
$$

这些点不在坐标平面上，因此平面行列式公式在此不适用，面积由完整的叉积给出。

## 混合积

混合积通过结合点积和叉积，将一个实数赋予 $\mathbb{R}^3$ 中的三个向量。对于 $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^3$，其定义如下。

$$\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})$$

先计算叉积 $\mathbf{v} \times \mathbf{w}$，它返回一个向量，再通过点积与 $\mathbf{u}$ 结合，得到一个标量。将三个向量写成分量形式，该运算等于以它们的坐标为行构成的矩阵的[行列式](../determinant/)。

$$
\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) =
\begin{vmatrix}
u_1 & u_2 & u_3 \\[6pt]
v_1 & v_2 & v_3 \\[6pt]
w_1 & w_2 & w_3
\end{vmatrix}
$$

这一恒等式由沿第一行展开行列式得到，从而再现了 $\mathbf{u}$ 与上一节求得的 $\mathbf{v} \times \mathbf{w}$ 各分量的点积。

混合积的绝对值等于三个向量所张成的平行六面体的体积。叉积 $\mathbf{v} \times \mathbf{w}$ 的大小等于由 $\mathbf{v}$ 和 $\mathbf{w}$ 所确定的底面平行四边形的面积，其方向与该底面垂直。与 $\mathbf{u}$ 做点积，就是将该面积乘以 $\mathbf{u}$ 垂直于底面的分量，即平行六面体的高。

$$V = |\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})|$$

> 由同样三条棱所构成的四面体，体积为该体积的六分之一。将向量置于公共顶点 $A$ 处，分别为 $\mathbf{u} = B - A$、$\mathbf{v} = C - A$ 和 $\mathbf{w} = D - A$，则四面体 $ABCD$ 的体积为 $\frac{1}{6}|\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})|$。

当 $\mathbf{u}, \mathbf{v}, \mathbf{w}$ 构成右手系时该积为正，构成左手系时为负，因此其符号标示了它们的方向。交换行列式的任意两行会反转其符号，故交换三个向量中的任意两个都会反转积的符号，而循环排列则保持不变。

$$\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = \mathbf{v} \cdot (\mathbf{w} \times \mathbf{u}) = \mathbf{w} \cdot (\mathbf{u} \times \mathbf{v})$$

同一不变性允许点积与叉积互换，因为 $\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = (\mathbf{u} \times \mathbf{v}) \cdot \mathbf{w}$。混合积恰好在这三个向量共面时为零，因为零体积意味着平行六面体退化。这给出了共面性的直接判据：$\mathbf{u}, \mathbf{v}, \mathbf{w}$ 位于同一个[平面](../planes/)中的充要条件是

$$\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = 0$$

> 以这三个向量为行的行列式为零，恰与它们线性相关一致，因此共面条件等价于其分量矩阵的[秩](../rank-of-a-matrix/)小于 $3$。

- - -

举例而言，考虑 $\mathbf{u} = (1, 0, 2)$、$\mathbf{v} = (3, 1, 0)$ 和 $\mathbf{w} = (0, 4, 1)$。混合积即由它们的分量所构成的矩阵的行列式。

$$
\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) =
\begin{vmatrix}
1 & 0 & 2 \\[6pt]
3 & 1 & 0 \\[6pt]
0 & 4 & 1
\end{vmatrix}
$$

沿第一行展开即得其值。

$$
\begin{align}
\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) &= 1(1\cdot1 - 0\cdot4) - 0(3\cdot1 - 0\cdot0) + 2(3\cdot4 - 1\cdot0) \\[6pt]
&= 1(1) - 0 + 2(12) \\[6pt]
&= 25
\end{align}
$$

结果非零，故这三个向量不共面，它们所张成的平行六面体体积为 $25$，而由同样三条棱构成的四面体体积为 $\frac{25}{6}$。
