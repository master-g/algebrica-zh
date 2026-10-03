---
title: 圆锥曲线导论
title_en: Introduction to Conics
source: https://algebrica.org/introduction-to-conics/
license: CC BY-NC 4.0
tags:
  - analytic-geometry
  - canonical-form
  - conic-sections
  - eigenvalues
  - invariants
  - quadratic-forms
translation:
  status: current
  source_hash: 50980b01e7fa47b60f315011cc120ed211f9a6ac5a7f2fb57f4c768fdc373d46
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 一般二次方程

圆锥曲线由一个二元二次方程定义。在笛卡尔坐标下，它的一般方程为：

$$f(x,y) = a_{11}x^2 + 2a_{12}xy + a_{22}y^2 + 2a_{13}x + 2a_{23}y + a_{33} = 0$$

系数 $a_{ij}$ 是[实数](../real-numbers/)，并且 $a_{11}$、$a_{12}$、$a_{22}$ 不全为零。因此 $f$ 的次数是二。因子 $2$ 是记法上的约定。这样选取之后，相应的[对称矩阵](../matrices/)的非对角元素恰好是 $a_{12}$、$a_{13}$ 和 $a_{23}$。不过顶点而与圆锥面相交的[平面](../planes/)，截口是[圆](../circumference/)、[椭圆](../ellipse/)、[抛物线](../parabola/)或[双曲线](../hyperbola/)。 

![图 1](/assets/lines-planes-conic-sections/svg/introduction-to-conics-1.zh.svg)

选定笛卡尔坐标之后，每个截口都有上述形式的方程。这里把问题反过来。给定六个系数，我们来确定圆锥曲线的类型、位置和方向。专门讨论各种圆锥曲线的条目处理它们的焦点、准线和离心率。

设 $\mathbf{X}$ 是齐次坐标的列，$A$ 是系数的对称矩阵：

$$
\mathbf{X} = \begin{pmatrix}
x \\[6pt]
y \\[6pt]
1
\end{pmatrix}
\qquad
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\[6pt]
a_{12} & a_{22} & a_{23} \\[6pt]
a_{13} & a_{23} & a_{33}
\end{pmatrix}
$$

乘积 $\mathbf{X}^{\mathrm{T}}A\mathbf{X}$ 等于 $f(x,y)$，因为每个非对角元素出现两次。因此圆锥曲线的方程为：

$$\mathbf{X}^{\mathrm{T}}A\mathbf{X} = 0$$

我们把 $A$ 称为圆锥曲线的矩阵。它的 $2\times2$ 顺序主子矩阵记为 $A_0$，形式为：

$$
A_0 = \begin{pmatrix}
a_{11} & a_{12} \\[6pt]
a_{12} & a_{22}
\end{pmatrix}
$$

与 $A_0$ 相对应的二次型是 $a_{11}x^2+2a_{12}xy+a_{22}y^2$。如果 $\mathbf{v}=(x,y)^{\mathrm{T}}$ 是普通坐标的列，$\mathbf{b}=(a_{13},a_{23})^{\mathrm{T}}$ 是一次项系数的列，方程就是：

$$\mathbf{v}^{\mathrm{T}}A_0\mathbf{v} + 2\mathbf{b}^{\mathrm{T}}\mathbf{v} + a_{33} = 0$$

这个分解把二次部分与低次项分开。矩阵 $A_0$ 确定二次型的类型，并在它的特征值互不相同时确定主方向。全部系数合起来确定是否退化、大小或开口、是否有实点以及位置。

> 许多教材把一般方程写成 $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$。在那种记法中，$B=2a_{12}$、$D=2a_{13}$、$E=2a_{23}$，而 $A$、$C$、$F$ 分别是 $a_{11}$、$a_{22}$、$a_{33}$。

## 退化圆锥曲线

在[复数](../complex-numbers/)域 $\mathbb{C}$ 上，多项式 $f$ 可能是两个一次多项式的乘积：

$$f(x,y) = (\alpha x + \beta y + \gamma)(\alpha'x + \beta'y + \gamma')$$

有这种因式分解的圆锥曲线是退化的，它的复轨迹是两条[直线](../lines/)的并，这两条直线可能重合。它的实轨迹可能是两条实直线、一条二重实直线、一个点或空集。

$A$ 的[行列式](../determinant/)是退化的判别标准。圆锥曲线退化，恰好当：

$$\det A = 0$$

对于一个方向的蕴含，设 $L=(\alpha,\beta,\gamma)^{\mathrm{T}}$ 和 $L'=(\alpha',\beta',\gamma')^{\mathrm{T}}$ 是两个因式的系数列。因式分解就是 $f=\mathbf{X}^{\mathrm{T}}LL'^{\mathrm{T}}\mathbf{X}$。由于标量等于它自己的转置，也有 $f=\mathbf{X}^{\mathrm{T}}L'L^{\mathrm{T}}\mathbf{X}$。因此这个二次多项式的唯一的对称矩阵是：

$$A = \frac{1}{2}\left(LL'^{\mathrm{T}} + L'L^{\mathrm{T}}\right)$$

这个矩阵的每一列都是 $L$ 和 $L'$ 的线性组合，所以它的秩至多为 $2$，行列式为零。逆命题由本条目后面的化简得出。如果 $\det A=0$，一个刚性坐标变换把方程化为 $\lambda_1x^2+\lambda_2y^2=0$ 或 $\lambda_1x^2=k$，而这两个多项式都能在 $\mathbb{C}$ 上分解。

$A$ 的[秩](../rank-of-a-matrix/)区分了在 $\mathbb{C}$ 上可能的因式分解。当 $\mathrm{rank}(A)=3$ 时，圆锥曲线是非退化的。当 $\mathrm{rank}(A)=2$ 时，两个因式不同。当 $\mathrm{rank}(A)=1$ 时，它们成比例，所以圆锥曲线是一条计两次的直线。

系数共轭的两条复直线，乘积的系数是实数。因此，一个实方程可能定义一条只有一个实点或没有实点的退化圆锥曲线。例如，$x^2+y^2=0$ 分解为 $(x+iy)(x-iy)$，但它的实轨迹只有原点。非退化的圆锥曲线的实轨迹也可能是空集。方程 $x^2+y^2+1=0$ 满足 $\det A=1\neq0$，却没有实数解。下面的分类包括所有这些情形。

## 刚体运动下的不变量

笛卡尔坐标的刚性变换保持距离和角度。设 $R$ 是正交矩阵，即 $R^{\mathrm{T}}R=I$，并设 $\mathbf{t}$ 是平移向量。刚性坐标变换的形式为：

$$\mathbf{v} = R\mathbf{v}' + \mathbf{t}$$

在齐次坐标下，同一个变换是 $\mathbf{X}=M\mathbf{X}'$，其中 $M$ 为：

$$
M = \begin{pmatrix}
R & \mathbf{t} \\[6pt]
\mathbf{0}^{\mathrm{T}} & 1
\end{pmatrix}
$$

代入之后，方程是 $\mathbf{X}'^{\mathrm{T}}(M^{\mathrm{T}}AM)\mathbf{X}'=0$，所以它在新坐标下的矩阵是 $A'=M^{\mathrm{T}}AM$。矩阵 $M$ 是分块三角矩阵，满足 $\det M=\det R=\pm1$。由行列式的乘法性质，有：

$$\det A' = (\det M)^2 \det A = \det A$$

$A'$ 的左上块是 $R^{\mathrm{T}}A_0R=R^{-1}A_0R$，所以 $A_0'$ 和 $A_0$ 是[相似矩阵](../change-of-basis-matrix/)。它们有相同的特征多项式，并且：

$$\det A_0' = \det A_0 \qquad \mathrm{tr}(A_0') = \mathrm{tr}(A_0)$$

对于固定的定义多项式，数 $\det A$、$\det A_0$ 和 $\mathrm{tr}(A_0)$ 在刚性坐标变换下不变。它们对下面的所有情形进行分类，只有边界情形 $\det A=\det A_0=0$ 除外，这时还需要一个量。

- - -

把方程乘以非零常数 $\mu$ 不改变它的轨迹，但把 $A$ 换成了 $\mu A$。于是 $\det A$、$\det A_0$ 和 $\mathrm{tr}(A_0)$ 分别换成 $\mu^3\det A$、$\mu^2\det A_0$ 和 $\mu\mathrm{tr}(A_0)$。它们是否为零与所选的方程无关。$\det A_0$ 的符号以及乘积 $\det A\cdot\mathrm{tr}(A_0)$ 的符号也与这个选择无关，而 $\det A$ 和 $\mathrm{tr}(A_0)$ 各自的符号在 $\mu<0$ 时会反过来。

在边界情形，第四个量是 $A$ 的三个二阶主子式之和 $\Delta_2$：

$$\Delta_2 = (a_{22}a_{33} - a_{23}^2) + (a_{11}a_{33} - a_{13}^2) + (a_{11}a_{22} - a_{12}^2)$$

正交的坐标变换使 $\Delta_2$ 保持不变，而一般的平移则不然。如果 $\det A=\det A_0=0$，那么 $\Delta_2$ 在平移下也不变。我们只在这个边界情形使用它。把方程乘以 $\mu\neq0$，$\Delta_2$ 就换成 $\mu^2\Delta_2$，所以它的符号与定义方程无关。

## 用不变量分类

矩阵 $A_0$ 是实对称矩阵，所以它的[特征值](../eigenvalues-and-eigenvectors/) $\lambda_1$ 和 $\lambda_2$ 是实数。它们满足：

$$\det A_0 = \lambda_1\lambda_2 \qquad \mathrm{tr}(A_0) = \lambda_1 + \lambda_2$$

$\det A_0$ 的符号决定两个特征值是同号、异号，还是其中一个为零。这三种情况就是椭圆型、双曲型和抛物型的二次型。条件 $\det A=0$ 等价于退化。连同 $\det A=\det A_0=0$ 时的 $\Delta_2$，这些条件给出完整的分类。

[class="table-1"]

|                                                                     |                                                       |
| ------------------------------------------------------------------- | ----------------------------------------------------- |
| $\det A\neq0$，$\det A_0>0$，$\det A\cdot\mathrm{tr}(A_0)<0$        | 椭圆                                               |
| $\det A\neq0$，$\det A_0>0$，$\det A\cdot\mathrm{tr}(A_0)>0$        | 没有实点的椭圆                           |
| $\det A\neq0$，$\det A_0<0$                                         | 双曲线                                             |
| $\det A\neq0$，$\det A_0=0$                                         | 抛物线                                              |
| $\det A=0$，$\det A_0>0$                                            | 交于一个实点的两条共轭虚直线 |
| $\det A=0$，$\det A_0<0$                                            | 交于一点的两条不同的实直线            |
| $\det A=0$，$\det A_0=0$，$\Delta_2<0$                              | 两条不同的平行实直线                      |
| $\det A=0$，$\det A_0=0$，$\Delta_2>0$                              | 两条共轭的平行虚直线                |
| $\det A=0$，$\det A_0=0$，$\Delta_2=0$                              | 一条计两次的直线                                |

[/class]

第一行中的条件 $\det A\cdot\mathrm{tr}(A_0)<0$ 来自中心化的方程 $\lambda_1x^2+\lambda_2y^2+k=0$。当 $\lambda_1\lambda_2>0$ 时，两个特征值都与它们的和同号。实点存在，恰好当 $k$ 的符号与之相反。下面的化简表明 $k=\det A/\det A_0$。由于 $\det A_0>0$，$k$ 的符号就是 $\det A$ 的符号，实轨迹非空恰好当 $\det A\cdot\mathrm{tr}(A_0)<0$。

在记法 $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$ 中，[判别式](../quadratic-formula/) $B^2-4AC$ 与二次块的关系为：

$$\det A_0 = a_{11}a_{22} - a_{12}^2 = AC - \frac{B^2}{4} = -\frac{1}{4}\left(B^2 - 4AC\right)$$

于是 $B^2-4AC$ 的符号区分了椭圆型、抛物型和双曲型的二次部分。当 $\det A\neq0$ 时，这些情形分别对应于椭圆（可能没有实点）、抛物线和双曲线。当 $\det A=0$ 时，圆锥曲线是退化的。有实点的非退化椭圆是圆，恰好当 $A_0$ 是单位矩阵的非零倍数，也就是当 $a_{11}=a_{22}\neq0$ 且 $a_{12}=0$。在这种情形下，两个特征值相等。

## 圆锥曲线的中心

如果对每个 $\mathbf{w}$ 都有 $f(\mathbf{c}+\mathbf{w})=f(\mathbf{c}-\mathbf{w})$，坐标向量为 $\mathbf{c}$ 的点 $C$ 就是圆锥曲线的代数中心。对于非空的非退化实圆锥曲线，这个条件等价于关于 $C$ 的中心对称下的不变性。作代换 $\mathbf{v}=\mathbf{c}+\mathbf{w}$ 之后的展开式是：

$$
\begin{align}
f(\mathbf{c}+\mathbf{w}) &= (\mathbf{c}+\mathbf{w})^{\mathrm{T}}A_0(\mathbf{c}+\mathbf{w}) + 2\mathbf{b}^{\mathrm{T}}(\mathbf{c}+\mathbf{w}) + a_{33} \\[6pt]
&= \mathbf{w}^{\mathrm{T}}A_0\mathbf{w} + 2\left(A_0\mathbf{c}+\mathbf{b}\right)^{\mathrm{T}}\mathbf{w} + f(\mathbf{c})
\end{align}
$$

映射 $\mathbf{w}\mapsto-\mathbf{w}$ 改变一次项的符号，而使另外两项不变。因此这个表达式关于 $\mathbf{w}$ 是偶的，恰好当：

$$A_0\mathbf{c} + \mathbf{b} = \mathbf{0}$$

用坐标来写，中心是下面的[线性方程组](../systems-of-linear-equations-in-two-variables/)的解：

$$
\begin{cases}
a_{11}x_0 + a_{12}y_0 + a_{13} = 0 \\[6pt]
a_{12}x_0 + a_{22}y_0 + a_{23} = 0
\end{cases}
$$

两个左端是 $f$ 的[偏导数](../partial-derivatives/)的一半。因此中心恰好是 $f$ 的梯度为零的点。

方程组的系数矩阵是 $A_0$。如果 $\det A_0\neq0$，方程组有一个解，所以圆锥曲线有唯一的中心。这种情形包括椭圆、双曲线和退化的相交直线对。如果 $\det A_0=0$，[鲁歇-卡佩利定理](../rouche-capelli-theorem/)表明方程组要么无解，要么有无穷多个解。在无解的情形，圆锥曲线是非退化的抛物线。在第二种情形，它是 $\mathbb{C}$ 上的一对平行直线，可能重合。中心构成一条与这两个因式平行的直线。对于两条不同的实直线，这就是它们正中间的那条直线。

对于有心圆锥曲线，把原点平移到中心就消去了一次项。方程变为：

$$\mathbf{w}^{\mathrm{T}}A_0\mathbf{w} + f(\mathbf{c}) = 0$$

这次平移之后的矩阵是分块对角矩阵，两个块是 $A_0$ 和 $f(\mathbf{c})$。它的行列式是 $f(\mathbf{c})\det A_0$，并且等于 $\det A$。因此常数项为：

$$f(\mathbf{c}) = \frac{\det A}{\det A_0}$$

## 渐近方向

一个非零的数对 $(l,m)$，在相差非零标量倍的意义下，确定平面上的一个方向。过 $(x_0,y_0)$ 且具有这个方向的直线有[参数方程](../vector-and-parametric-equations-of-a-line/) $x=x_0+lt$ 和 $y=y_0+mt$。多项式 $f(x_0+lt,y_0+mt)$ 中 $t^2$ 的系数是：

$$a_{11}l^2 + 2a_{12}lm + a_{22}m^2$$

如果这个系数不为零，$f$ 在这条直线上的限制是一个二次多项式，按重数计有两个复[根](../roots-of-a-polynomial/)。如果它为零，限制的次数至多为一；当这条直线是退化圆锥曲线的一个分支时，限制恒为零。除非这条直线是一个分支，否则至少有一个交点位于射影闭包中的无穷远处。这个方向称为渐近方向。这个条件与 $(x_0,y_0)$ 无关，恰好就是与 $A_0$ 相对应的二次型为零。

作为关于 $l$ 和 $m$ 的齐次二次方程，这个条件的判别式是 $4(a_{12}^2-a_{11}a_{22})=-4\det A_0$。非退化的双曲线有两个不同的实渐近方向，因为 $\det A_0<0$。抛物线有一个二重的实渐近方向，因为 $\det A_0=0$。非退化的实椭圆没有实渐近方向，因为 $\det A_0>0$。它的实轨迹有界，因为它的二次型是定的。

对于双曲线，渐近线是过中心且具有两个渐近方向的直线。在中心化的坐标下，它们的并的方程是 $\mathbf{w}^{\mathrm{T}}A_0\mathbf{w}=0$，它分解为这两条直线。由于 $f(x,y)-f(\mathbf{c})=\mathbf{w}^{\mathrm{T}}A_0\mathbf{w}$ 且 $f(\mathbf{c})=\det A/\det A_0$，它们在原坐标下的方程是：

$$f(x,y) - \frac{\det A}{\det A_0} = 0$$

> 对于椭圆，这是过中心的两条共轭虚直线的方程，这与它没有实渐近方向相符。

## 化为标准形

由[谱定理](../matrix-diagonalization/)，实对称矩阵 $A_0$ 有一个由特征向量构成的[标准正交基](../inner-product-spaces/)。设 $\mathbf{u}_1$ 和 $\mathbf{u}_2$ 分别是属于 $\lambda_1$ 和 $\lambda_2$ 的单位特征向量。设 $R$ 是以 $\mathbf{u}_1$ 和 $\mathbf{u}_2$ 为列的矩阵。必要时把一个特征向量反号之后，$\det R=1$，所以 $R$ 是旋转矩阵。$A_0$ 的对角化为：

$$R^{\mathrm{T}}A_0R = \begin{pmatrix}\lambda_1 & 0 \\[6pt] 0 & \lambda_2\end{pmatrix}$$

在坐标变换 $\mathbf{v}=R\mathbf{v}'$ 下，二次部分是 $\lambda_1x'^2+\lambda_2y'^2$。交叉项为零，方程的形式为：

$$\lambda_1x'^2 + \lambda_2y'^2 + 2dx' + 2ey' + g = 0$$

这里 $d$、$e$、$g$ 是实系数。新的坐标轴平行于 $\mathbf{u}_1$ 和 $\mathbf{u}_2$。当特征值互不相同时，这两个向量就是主方向。第二步是一个平移，通过对每个有二次项的变量[配方](../completing-the-square/)得到。它的形式取决于是否有特征值为零。

如果 $\det A_0\neq0$，两个平方都可以配出。平移把原点移到中心，常数项的值就是上一节算出的：

$$\lambda_1x''^2 + \lambda_2y''^2 + \frac{\det A}{\det A_0} = 0$$

如果 $\det A\neq0$，令 $K=-\det A/\det A_0$。中心化的方程是 $\lambda_1x''^2+\lambda_2y''^2=K$，且 $K\neq0$。除以 $K$ 之后，方程成为椭圆型的形式（可能没有实点）或双曲型的形式。对于有实点的椭圆或双曲线，沿 $\mathbf{u}_1$ 和 $\mathbf{u}_2$ 方向的半轴长分别是 $\sqrt{\lvert K/\lambda_1\rvert}$ 和 $\sqrt{\lvert K/\lambda_2\rvert}$。如果 $\det A=0$，常数项为零，标准方程在 $\mathbb{C}$ 上分解为两条直线。

假设 $\det A_0=0$ 且 $\det A\neq0$。有一个特征值为零，设 $\lambda_2=0$，而 $\lambda_1=\mathrm{tr}(A_0)$。在旋转后的方程中，$\det A=-\lambda_1e^2$。因此 $e\neq0$。可以对 $x'$ 配方，常数项可以通过平移 $y'$ 消去。所得的方程是 $\lambda_1x''^2+2ey''=0$。必要时把 $y''$ 轴反向之后，标准方程为：

$$x''^2 = 2py''$$

参数是 $p=\lvert e\rvert/\lvert\lambda_1\rvert$。由于 $\lambda_1=\mathrm{tr}(A_0)$ 且 $e^2=-\det A/\mathrm{tr}(A_0)$，这就是：

$$p = \sqrt{-\frac{\det A}{\mathrm{tr}(A_0)^3}}$$

根号下的表达式为正，因为 $\det A=-\mathrm{tr}(A_0)e^2$。把方程乘以非零常数时它不变，并且按照构造 $p$ 为正。

剩下要考虑的是 $\det A_0=\det A=0$。由于二次部分不为零，$A_0$ 的秩为 $1$。经过旋转，方程的形式为 $\lambda x'^2+2dx'+2ey'+g=0$，其中 $\lambda\neq0$。它的行列式是 $-\lambda e^2$，所以 $\det A=0$ 蕴含 $e=0$。对 $x'$ 配方之后，方程为：

$$\lambda x''^2 + h = 0$$

在这种形式下 $\Delta_2=\lambda h$。如果 $\Delta_2<0$，方程表示两条不同的平行实直线。如果 $\Delta_2>0$，它表示两条共轭的平行虚直线。如果 $\Delta_2=0$，它是一条计两次的直线。这就证明了分类表的最后三行，并完成了退化圆锥曲线的因式分解论证。

- - -

特征向量确定了各轴在原坐标下的方向。对于有心圆锥曲线，中心确定了它们的位置。如果 $\lambda_1\neq\lambda_2$，两条主轴的方向是 $\mathbf{u}_1$ 和 $\mathbf{u}_2$。如果 $\lambda_1=\lambda_2$，过中心的每条直线都是轴，就像圆那样。抛物线有一条轴，平行于属于特征值 $0$ 的特征向量，这也是它唯一的渐近方向。化简中的平移确定了这条轴的位置。

## 由不变量对圆锥曲线分类

考虑方程：

$$x^2 - 2xy - 3y^2 + 4y - 1 = 0$$

系数是 $a_{11}=1$、$a_{12}=-1$、$a_{22}=-3$、$a_{13}=0$、$a_{23}=2$ 和 $a_{33}=-1$。因此两个矩阵是：

$$
A = \begin{pmatrix}
1 & -1 & 0 \\[6pt]
-1 & -3 & 2 \\[6pt]
0 & 2 & -1
\end{pmatrix}
\qquad
A_0 = \begin{pmatrix}
1 & -1 \\[6pt]
-1 & -3
\end{pmatrix}
$$

二次部分的行列式是：

$$\det A_0 = (1)(-3) - (-1)^2 = -4$$

$\det A$ 沿第一行作拉普拉斯展开时的三个子式是：

$$
\begin{vmatrix}
-3 & 2 \\[6pt]
2 & -1
\end{vmatrix} = -1
\qquad
\begin{vmatrix}
-1 & 2 \\[6pt]
0 & -1
\end{vmatrix} = 1
\qquad
\begin{vmatrix}
-1 & -3 \\[6pt]
0 & 2
\end{vmatrix} = -2
$$

配上第一行的元素和交错的代数余子式符号，展开式为：

$$
\begin{align}
\det A &= (1)(-1) - (-1)(1) + (0)(-2) \\[6pt]
&= -1 + 1 \\[6pt]
&= 0
\end{align}
$$

由于 $\det A=0$，圆锥曲线是退化的。不等式 $\det A_0<0$ 表明它是交于一点的一对不同的实直线。这个点就是中心，它是 $A_0\mathbf{c}=-\mathbf{b}$ 的解：

$$
\begin{cases}
x_0 - y_0 = 0 \\[6pt]
-x_0 - 3y_0 = -2
\end{cases}
$$

第一个方程等价于 $x_0=y_0$。代入第二个方程，得到 $-4y_0=-2$。于是中心是 $\left(\frac{1}{2},\frac{1}{2}\right)$。

因式分解证实了这个分类。二次部分是 $x^2-2xy-3y^2=(x-3y)(x+y)$，所以 $f$ 的因式具有 $x-3y+\alpha$ 和 $x+y+\beta$ 的形式。它们的乘积中，$x$ 的系数是 $\alpha+\beta$，$y$ 的系数是 $\alpha-3\beta$。系数方程是 $\alpha+\beta=0$ 和 $\alpha-3\beta=4$，解为 $\alpha=1$ 和 $\beta=-1$。常数项也是对的，因为 $\alpha\beta=-1=a_{33}$。因此因式分解为：

$$x^2 - 2xy - 3y^2 + 4y - 1 = (x - 3y + 1)(x + y - 1)$$

两条直线 $x-3y+1=0$ 和 $x+y-1=0$ 交于 $\left(\frac{1}{2},\frac{1}{2}\right)$，即上面算出的中心。

## 把圆锥曲线化为标准形

考虑方程：

$$5x^2 - 4xy + 8y^2 - 16x - 8y - 16 = 0$$

系数是 $a_{11}=5$、$a_{12}=-2$、$a_{22}=8$、$a_{13}=-8$、$a_{23}=-4$ 和 $a_{33}=-16$。相应的矩阵是：

$$
A = \begin{pmatrix}
5 & -2 & -8 \\[6pt]
-2 & 8 & -4 \\[6pt]
-8 & -4 & -16
\end{pmatrix}
\qquad
A_0 = \begin{pmatrix}
5 & -2 \\[6pt]
-2 & 8
\end{pmatrix}
$$

二次部分的不变量是：

$$\det A_0 = 40 - 4 = 36 \qquad \mathrm{tr}(A_0) = 13$$

在 $\det A$ 沿第一行的拉普拉斯展开中，三个子式是 $-144$、$0$ 和 $72$。因此展开式为：

$$
\begin{align}
\det A &= (5)(-144) - (-2)(0) + (-8)(72) \\[6pt]
&= -720 - 576 \\[6pt]
&= -1296
\end{align}
$$

条件 $\det A\neq0$ 和 $\det A_0>0$ 表明圆锥曲线是椭圆。此外，$\det A\cdot\mathrm{tr}(A_0)=-16848<0$，所以它的实轨迹非空。

中心是 $A_0\mathbf{c}=-\mathbf{b}$ 的解：

$$
\begin{cases}
5x_0 - 2y_0 = 8 \\[6pt]
-2x_0 + 8y_0 = 4
\end{cases}
$$

第二个方程等价于 $x_0=4y_0-2$。代入之后，第一个方程是 $18y_0=18$，所以 $y_0=1$，$x_0=2$。中心是 $(2,1)$。

- - -

$A_0$ 的特征向量确定旋转。$A_0$ 的特征方程是：

$$\lambda^2 - 13\lambda + 36 = 0$$

它的根是 $\lambda_1=4$ 和 $\lambda_2=9$。对于 $\lambda_1=4$，方程组 $(A_0-4I)\mathbf{u}=\mathbf{0}$ 等价于 $x-2y=0$，所以 $(2,1)$ 是特征向量。对于 $\lambda_2=9$，相应的方程是 $2x+y=0$，所以 $(1,-2)$ 是特征向量。两个特征向量正交。归一化之后，把第二个反号，使所得矩阵的行列式为 $1$：

$$
R = \frac{1}{\sqrt5}\begin{pmatrix}
2 & -1 \\[6pt]
1 & 2
\end{pmatrix}
\qquad
\det R = \frac{4+1}{5} = 1
$$

矩阵 $R$ 是转过角 $\theta=\arctan\frac{1}{2}\approx26^\circ34'$ 的旋转。在坐标变换 $\mathbf{v}=R\mathbf{v}''+(2,1)^{\mathrm{T}}$ 下，方程为：

$$4x''^2 + 9y''^2 - 36 = 0$$

除以 $36$ 之后，标准形为：

$$\frac{x''^2}{9} + \frac{y''^2}{4} = 1$$

椭圆的半轴是 $a=3$ 和 $b=2$。较大的半轴对应较小的特征值，所以长轴的方向是 $\mathbf{u}_1=(2,1)/\sqrt5$，短轴的方向是 $\mathbf{u}_2=(-1,2)/\sqrt5$。焦距的一半是 $c=\sqrt{a^2-b^2}=\sqrt5$，所以离心率是 $e=\frac{\sqrt5}{3}$。

在原坐标下，两条轴是过 $(2,1)$、方向为 $\mathbf{u}_1$ 和 $\mathbf{u}_2$ 的直线：

$$x - 2y = 0 \qquad 2x + y - 5 = 0$$

焦点在长轴上，到中心的距离是 $c=\sqrt5$。由于 $\mathbf{u}_1$ 是单位向量，焦点是：

$$F_1 = (4,2) \qquad F_2 = (0,0)$$

> 如果把 $\mathbf{v}=R\mathbf{v}''+(2,1)^{\mathrm{T}}$ 代入原多项式，结果是 $4x''^2+9y''^2-36$。这证实了化简过程和 $R$ 的选取。
