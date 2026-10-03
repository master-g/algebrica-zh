---
title: 双曲线
title_en: The Hyperbola
source: https://algebrica.org/hyperbola/
license: CC BY-NC 4.0
tags:
  - analytic-geometry
  - asymptote
  - conic-sections
  - eccentricity
  - focus
  - hyperbola
  - vertex
translation:
  status: current
  source_hash: f7cbeec4f8a3188b1c0a47c1f69821f63b94ac776161953f5ee231f7aa25f524
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 什么是双曲线

当[平面](../planes/)截切圆锥时，投影到平面上的交线是[圆周](../circumference/)、[抛物线](../parabola/)、[椭圆](../ellipse/)或双曲线。这些曲线即圆锥截线，简称圆锥曲线。圆锥曲线是二次平面代数曲线，即满足 $x$ 和 $y$ 的[二次方程](../quadratic-equations/)的点 $(x, y) \in \mathbb{R}^2$ 的集合：

$$f(x, y) = a_{11}x^2 + 2a_{12}xy + a_{22}y^2 + 2a_{13}x + 2a_{23}y + a_{33} = 0$$

系数 $a_{ij}$ 是[实数](../real-numbers/)，且 $a_{11}$、$a_{12}$、$a_{22}$ 不全为零，因此多项式的次数为二次。

在[圆锥曲线的矩阵分类](../introduction-to-conics/)中，完整系数矩阵 $A$ 及其二次项主块 $A_0$ 为：

$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\[6pt]
a_{12} & a_{22} & a_{23} \\[6pt]
a_{13} & a_{23} & a_{33}
\end{pmatrix}
\qquad
A_0 = \begin{pmatrix}
a_{11} & a_{12} \\[6pt]
a_{12} & a_{22}
\end{pmatrix}
$$

当且仅当 $\det A\neq0$ 且 $\det A_0<0$ 时，该方程定义非退化双曲线。此时 $A_0$ 的特征值异号，对应的特征向量给出主轴方向。平移到中心后，$\mathbf{w}^{\mathrm{T}}A_0\mathbf{w}=0$ 是两条渐近线的方程。

双曲线是当截切平面与圆锥的两个对顶面都相交时得到的圆锥截线，因此交线是两条分离的无界曲线，即双曲线的两支。

![图 1](/assets/lines-planes-conic-sections/svg/hyperbola-1.zh.svg)

给定平面上两个固定点 $F_1$ 和 $F_2$，双曲线是所有满足到两个焦点距离之差的[绝对值](../absolute-value/)为常数的点 $P$ 的集合：

$$\left| PF_1 - PF_2 \right| = k$$

![图 2](/assets/lines-planes-conic-sections/svg/hyperbola-2.zh.svg)

$F_1$ 和 $F_2$ 是焦点，$k$ 是该常数。线段 $\overline{F_1F_2}$ 的中点是中心，此处与[笛卡尔坐标轴](../the-cartesian-coordinate-plane/)的原点重合。

过两个焦点的直线是实轴所在直线，此处为 $x$ 轴。它与双曲线交于两个顶点 $A(a, 0)$ 和 $A'(-a, 0)$，因此 $a$ 是实半轴长。过中心且与实轴垂直的直线是虚轴所在直线，即 $y$ 轴。曲线不与它相交，点 $B(0, b)$ 和 $B'(0, -b)$ 是虚轴端点，$b$ 是虚半轴长。

![图 3](/assets/lines-planes-conic-sections/svg/hyperbola-3.zh.svg)

当 $P$ 是一个顶点时，设为 $(a, 0)$，它到 $F_1$ 和 $F_2$ 的距离之差等于 $2a$。由于 $k$ 对双曲线上每个点都相同，故 $k = 2a$：

$$\left| PF_1 - PF_2 \right| = 2a$$

以原点为中心、实轴为水平的双曲线的标准方程为：

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$

其焦点为 $(\pm c, 0)$，其中 $b^2 = c^2 - a^2$、$b > 0$、$c > a$，从而：

$$c = \sqrt{a^2 + b^2}$$

顶点和虚轴端点构成了中心矩形，其边 $2a$ 和 $2b$ 分别平行于坐标轴。其对角线的斜率为 $\pm\frac{b}{a}$，是双曲线的[渐近线](../asymptotes/)：

$$y = \pm \frac{b}{a}x$$

当 $|x|$ 增大时，每一支都趋近于其渐近线，但永远不会到达。

双曲线上一点 $(x_0, y_0)$ 处的切线，可通过在标准方程中将 $x^2$ 替换为 $xx_0$、$y^2$ 替换为 $yy_0$ 得到：

$$\frac{xx_0}{a^2} - \frac{yy_0}{b^2} = 1$$

当焦点位于 $y$ 轴上时，$x$ 和 $y$ 的角色互换。实轴变为竖直方向，顶点为 $(0, a)$ 和 $(0, -a)$，焦点为 $(0, \pm c)$，标准方程变为：

$$\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1$$

此时虚轴端点为 $(\pm b, 0)$，渐近线为 $y = \pm\frac{a}{b}x$。

> 使用同一组参数 $a$ 和 $b$ 时，双曲线 $\frac{x^2}{a^2} - \frac{y^2}{b^2} = -1$ 是上述水平双曲线的共轭双曲线。它们共享中心矩形和渐近线，其两支沿 $y$ 轴方向开口。

## 等轴双曲线

当 $a = b$ 时，双曲线为等轴双曲线。此时其两条渐近线互相垂直，离心率为 $e = \sqrt{2}$。若焦点位于 $x$ 轴上，方程变为：

$$\frac{x^2}{a^2} - \frac{y^2}{a^2} = 1 \quad \rightarrow \quad x^2 - y^2 = a^2$$

![图 4](/assets/lines-planes-conic-sections/svg/hyperbola-4.zh.svg)

> 对于等轴双曲线 $x^2 - y^2 = a^2$，其渐近线为直线 $y = x$ 与 $y = -x$，即各象限的角平分线。

将坐标轴旋转 $45^\circ$，可使渐近线落到坐标轴上，方程变为 $xy = \frac{a^2}{2}$。在此坐标系下，等轴双曲线即为[倒数函数](../rational-functions/) $y = \frac{a^2}{2x}$ 的图像。

## 离心率与准线

双曲线的离心率是焦距 $c$ 与实半轴长 $a$ 之比：

$$e = \frac{c}{a} = \frac{\sqrt{a^2 + b^2}}{a}$$

![图 5](/assets/lines-planes-conic-sections/svg/hyperbola-5.zh.svg)

由于 $c > a$，离心率始终大于 $1$。由 $b^2 = c^2 - a^2$ 可得 $b/a = \sqrt{e^2 - 1}$，故离心率决定了渐近线的斜率。

> 离心率衡量双曲线的张开程度。当 $e$ 接近 $1$ 时，两支狭窄；随着 $e$ 增大，焦点远离中心，两支张得更开。离心率仅取决于距离之比，与双曲线的大小无关，因此是纯粹的形状度量。

两条准线，即直线 $x = \pm a/e$，与两个焦点相伴。对于双曲线上的任一点，其到焦点的距离 $PF$ 与到对应准线的距离 $Pd$ 之比为常数：

$$\frac{PF}{Pd} = e$$

此焦点—准线之比是所有圆锥曲线共有的定义，其中椭圆为 $e < 1$，抛物线为 $e = 1$，双曲线为 $e > 1$。

过焦点且垂直于实轴的弦称为通径，长度为 $2b^2/a$。其一半 $\ell = b^2/a = a(e^2 - 1)$ 为半通径。将焦点置于极点，可得双曲线在[极坐标](../polar-coordinates/)下的方程：

$$r = \frac{\ell}{1 \pm e\cos\theta} = \frac{a(e^2 - 1)}{1 \pm e\cos\theta}$$

对于 $e$ 的相应取值，同一方程也描述椭圆与抛物线。

## 圆三角学与双曲三角学

正如圆三角函数中的[正弦与余弦](../sine-and-cosine/)源自[单位圆](../unit-circle/)，[双曲正弦与双曲余弦](../hyperbolic-sine-and-cosine/)源自等轴双曲线：

$$x^{2} - y^{2} = 1$$

一个双曲扇形确定了一个参数 $t$，该扇形在双曲线上对应的点 $P$ 的坐标为：

$$P_x = \cosh t = \frac{e^{t} + e^{-t}}{2}$$

$$P_y = \sinh t = \frac{e^{t} - e^{-t}}{2}$$

圆函数满足[毕达哥拉斯恒等式](../pythagorean-identity/) $\cos^2\theta + \sin^2\theta = 1$，而双曲函数满足[双曲恒等式](../hyperbolic-identities/) $\cosh^2 t - \sinh^2 t = 1$，这正是该双曲线的方程。依据同一恒等式，$x = a\cosh t$ 与 $y = b\sinh t$ 参数化了

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$

的右支，而 $x = -a\cosh t$ 给出左支。
