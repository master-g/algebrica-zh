---
title: 抛物线
title_en: The Parabola
source: https://algebrica.org/parabola/
license: CC BY-NC 4.0
tags:
  - analytic-geometry
  - conic-sections
  - directrix
  - focus
  - parabola
  - tangent-line
  - vertex
translation:
  status: current
  source_hash: 2c2bb8af40bc7a806d24b2ab9906a199d5eeaff41cc5588e93834622e965d0ef
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 圆锥曲线

当[平面](../planes/)切割一个直圆双锥且不经过其顶点时，交线是[圆](../circumference/)、抛物线、[椭圆](../ellipse/)或[双曲线](../hyperbola/)。这些曲线统称为圆锥曲线。代数上，圆锥曲线是满足关于 $x$ 和 $y$ 的二次方程的点 $(x,y)\in\mathbb{R}^2$ 的集合：

$$f(x, y) = a_{11}x^2 + 2a_{12}xy + a_{22}y^2 + 2a_{13}x + 2a_{23}y + a_{33} = 0$$

系数 $a_{ij}$ 为[实数](../real-numbers/)，其中 $a_{11}$、$a_{12}$、$a_{22}$ 不全为零，从而至少存在一个二次项。

+ 当 $a_{11}a_{22}-a_{12}^2>0$ 时，二次型为椭圆型；等于 $0$ 时为抛物型；小于 $0$ 时为双曲型。
+ 当且仅当 $a_{12}=0$ 时，所选坐标下的二次部分是对角形式。
+ 所有系数共同决定圆锥曲线的位置、大小或开口、是否退化以及是否具有实点。平移会改变一次项和常数项系数，但不改变二次项系数。

在[圆锥曲线的矩阵分类](../introduction-to-conics/)中，完整系数矩阵 $A$ 及其二次部分的首块 $A_0$ 为：

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

当且仅当 $\det A\neq0$ 且 $\det A_0=0$ 时，该方程定义非退化抛物线。因为 $A_0$ 非零，它的秩为 $1$，并有一个零特征值。该特征值对应的特征向量平行于抛物线轴。

当 $\det A=0$ 时，圆锥曲线退化。在[复数](../complex-numbers/)范围内，它的方程分解为两个一次多项式的乘积：

$$(ax + by + c)(a'x + b'y + c') = 0$$

> 退化圆锥曲线的实点集可能是一对直线、一条二重直线、一个点或空集。

## 抛物线

非退化抛物线是截平面平行于圆锥的一条母线且不经过圆锥顶点时所得的圆锥截线。交线是一条单一的无界曲线。

![图 1](/assets/lines-planes-conic-sections/svg/parabola-1.zh.svg)

抛物线是平面上所有到定点 $F$（焦点）和定直线 $d$（准线）距离相等的点的集合，其中 $F\notin d$。

![图 2](/assets/lines-planes-conic-sections/svg/parabola-2.zh.svg)

过焦点且垂直于准线的直线称为抛物线的轴。抛物线与其轴的交点 $V$ 称为顶点。顶点在[原点](../the-cartesian-coordinate-plane/)、轴沿 $y$ 轴的抛物线的方程为：

$$y = ax^2, \quad a \neq 0$$

这个方程可由焦点—准线定义推出。令 $p=\frac{1}{4a}$。点 $P(x,y)$ 到 $F=(0,p)$ 与直线 $y=-p$ 的距离相等，当且仅当：

$$\sqrt{x^2 + (y - p)^2} = |y + p|$$

两边平方并化简得到 $x^2=4py$，等价于 $y=ax^2$。该抛物线关于 $y$ 轴对称。其焦点和准线分别为：

$$F = \left(0, \frac{1}{4a}\right)$$

$$y = -\frac{1}{4a}$$

当 $a > 0$ 时，抛物线开口向上，因此对每个 $x$ 都有 $y \geq 0$，且焦点位于 $y$ 轴的正半轴上。当 $a < 0$ 时，开口向下。$a$ 的[绝对值](../absolute-value/)决定了曲线的宽窄：随着 $|a|$ 增大，开口变窄；随着 $|a|$ 减小，开口变宽。

![图 3](/assets/lines-planes-conic-sections/svg/parabola-3.zh.svg)

## 轴为水平方向的抛物线

交换 $x$ 和 $y$ 的角色，可使抛物线的轴变为水平方向。顶点在原点、轴沿 $x$ 轴的抛物线的方程为：

$$x = ay^2, \quad a \neq 0$$

![图 4](/assets/lines-planes-conic-sections/svg/parabola-4.zh.svg)

该抛物线关于 $x$ 轴对称。其焦点和准线分别为：

$$F = \left(\frac{1}{4a}, 0\right)$$

$$x = -\frac{1}{4a}$$

当 $a > 0$ 时，抛物线开口向右，因此对每个 $y$ 都有 $x \geq 0$；当 $a < 0$ 时，开口向左。同前，随着 $|a|$ 增大，开口变窄。轴平行于 $x$ 轴的一般方程为 $x = ay^2 + by + c$，其中 $a \neq 0$。其对称轴是水平直线：

$$y = -\frac{b}{2a}$$

对应的顶点、焦点和准线公式，可由下一节推出的竖直公式交换 $x$ 和 $y$ 得到。

## 标准二次形式的抛物线

轴与 $y$ 轴平行的抛物线的一般方程为：

$$y = ax^2 + bx + c, \quad a \neq 0$$

![图 5](/assets/lines-planes-conic-sections/svg/parabola-5.zh.svg)

这是关于 $x$ 的[二次方程](../quadratic-equations/)。令[判别式](../quadratic-formula/) $\Delta=b^2-4ac$，配方得到：

$$y = a\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a}$$

这个表达式具有形式 $y=a(x-h)^2+k$，其中 $h=-\frac{b}{2a}$、$k=-\frac{\Delta}{4a}$。其对称轴为竖直直线：

$$x = -\frac{b}{2a}$$

顶点为：

$$V\left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right)$$

焦点与准线相对顶点的有向竖直偏移分别为 $\frac{1}{4a}$ 和 $-\frac{1}{4a}$：

$$F\left(-\frac{b}{2a}, \frac{1 - \Delta}{4a}\right)$$

$$y = -\frac{1 + \Delta}{4a}$$

由一般方程可推出两种特殊情形。当 $b = 0$ 且 $c \neq 0$ 时，方程变为 $y = ax^2 + c$，其顶点为 $V(0, c)$，对称轴为 $y$ 轴。当 $c = 0$ 且 $b \neq 0$ 时，方程变为 $y = ax^2 + bx$，其顶点为：

$$V\left(-\frac{b}{2a}, -\frac{b^2}{4a}\right)$$

且该曲线经过原点 $O(0, 0)$。

## 顶点不在原点的抛物线

顶点不在原点的抛物线是原点形式之一的平移。将 $y = ax^2$ 的顶点移到点 $(h, k)$，会把 $x$ 替换为 $x - h$，把 $y$ 替换为 $y - k$，由此得到顶点式：

$$y - k = a(x - h)^2$$

对称轴是竖直线 $x = h$，顶点是 $(h, k)$，焦点和准线随顶点一起移动：

$$F = \left(h, k + \frac{1}{4a}\right)$$

$$y = k - \frac{1}{4a}$$

将同一平移施加于 $x = ay^2$，得到具有水平对称轴、顶点为 $(h, k)$ 的抛物线：

$$x - h = a(y - k)^2$$

其对称轴为 $y = k$，焦点为 $\left(h + \frac{1}{4a}, k\right)$，准线为 $x = h - \frac{1}{4a}$。

展开 $y = a(x - h)^2 + k$ 会回到标准二次形式 $y = ax^2 + bx + c$，因此顶点式与一般式描述的是同一条曲线。要从一般式中读出顶点，请[配方](../completing-the-square/)。

举一个例子，将 $y = 2x^2 - 12x + 13$ 写成顶点式。由于首项系数只乘以 $x$ 中的各项，因此把它从这些项中提取出来：

$$y = 2(x^2 - 6x) + 13$$

使 $x^2 - 6x$ 成为完全平方数的项是 $\left(\frac{6}{2}\right)^2 = 9$，因此在括号内加上再减去它，表达式的值保持不变：

$$
\begin{align}
y &= 2(x^2 - 6x + 9 - 9) + 13 \\[6pt]
  &= 2(x - 3)^2 - 18 + 13 \\[6pt]
  &= 2(x - 3)^2 - 5
\end{align}
$$

顶点是 $(3, -5)$，对称轴是 $x = 3$。由于 $a = 2$，焦点为 $\left(3, -5 + \frac{1}{8}\right) = \left(3, -\frac{39}{8}\right)$，准线为 $y = -5 - \frac{1}{8} = -\frac{41}{8}$。

## 通径

过抛物线的焦点且与准线平行的弦称为通径。通径的端点位于曲线上，其长度用来衡量抛物线在焦点处的开口程度。

![图 6](/assets/lines-planes-conic-sections/svg/parabola-6.zh.svg)

对于抛物线 $y=ax^2$，焦点的纵坐标为 $\frac{1}{4a}$，因此通径的端点是曲线上具有该纵坐标的点。令 $ax^2=\frac{1}{4a}$ 并解出 $x$，得到：

$$x = \pm\frac{1}{2|a|}$$

端点为：

$$\left(-\frac{1}{2|a|}, \frac{1}{4a}\right), \qquad \left(\frac{1}{2|a|}, \frac{1}{4a}\right)$$

通径的长度为：

$$\frac{1}{|a|}$$

$|a|$ 越大，通径越短，抛物线越窄。

## 离心率与极坐标方程

具有正离心率的非退化圆锥曲线共有一个焦点—准线描述。固定焦点 $F$ 和准线 $d$，其中 $F\notin d$。对一点 $P$，设 $r$ 为其到焦点的距离，$\delta$ 为其到准线的距离。圆锥曲线是两距离之比等于固定正数 $e$ 的点集：

$$e = \frac{r}{\delta}$$

当 $0<e<1$ 时，圆锥曲线是椭圆；当 $e=1$ 时是抛物线；当 $e>1$ 时是双曲线。抛物线的等距定义 $r=\delta$ 对应 $e=1$。

这一描述也给出抛物线的[极坐标](../polar-coordinates/)方程。把焦点置于极点，准线取为竖直线 $x=-h$，其中 $h>0$ 是焦点到准线的距离。极坐标为 $(r,\theta)$ 的点 $P$ 的横坐标为 $x=r\cos\theta$，所以它到准线的距离为 $|r\cos\theta+h|$。抛物线位于准线含焦点的一侧，在这一侧距离为 $r\cos\theta+h$。条件 $r=r\cos\theta+h$ 给出：

$$
\begin{align}
&r - r\cos\theta = h \\[6pt]
&r = \frac{h}{1 - \cos\theta}
\end{align}
$$

三角函数和符号取决于准线的位置。准线 $x = h$ 给出：

$$r = \frac{h}{1 + \cos\theta}$$

水平准线 $y=\pm h$ 给出：

$$r = \frac{h}{1 \pm \sin\theta}$$

在准线含焦点的一侧，离心率为 $e$ 的圆锥曲线满足 $r=e(r\cos\theta+h)$。因此：

$$r = \frac{eh}{1 - e\cos\theta}$$

当 $e=1$ 时，这是抛物线的极坐标方程。当 $e>1$ 时，满足 $r\geq0$ 的解构成双曲线的一支；完整点集满足 $r=e|r\cos\theta+h|$。

对抛物线，当 $\theta=\pm\pi/2$ 时，半径等于 $h$，即焦点到准线的距离，也就是半通径。完整通径长为 $2h$。对 $y=ax^2$，有 $h=\frac{1}{2|a|}$，所以 $2h=\frac{1}{|a|}$，与上文一致。

## 与直线的交点

抛物线 $y=ax^2+bx+c$ 与非竖直[直线](../lines/) $y=mx+q$ 的交点是下列方程组的解：

$$
\begin{cases}
y = ax^2 + bx + c \\[6pt]
y = mx + q
\end{cases}
$$

令等号两边相等并合并同类项，得到关于 $x$ 的一元二次方程：

$$
\begin{align}
&ax^2 + bx + c = mx + q \\[6pt]
&ax^2 + (b - m)x + (c - q) = 0
\end{align}
$$

![图 7](/assets/lines-planes-conic-sections/svg/parabola-7.zh.svg)

其解为交点的 $x$ 坐标。这个二次方程至多有两个不同的[根](../roots-of-a-polynomial/)。它的判别式为：

$$\Delta_{\ell} = (b - m)^2 - 4a(c - q)$$

$\Delta_\ell$ 的符号决定直线与抛物线的相交方式：

+ 当 $\Delta_\ell>0$ 时，根为两个互不相同的实数，直线与抛物线交于两点。该直线为割线。
+ 当 $\Delta_\ell=0$ 时，方程有一个二重实根，直线与抛物线相切于一点。
+ 当 $\Delta_\ell<0$ 时，无实数根，直线不与抛物线相交。该直线为外部直线。

> 令直线为 $x$ 轴，即 $y = 0$，可得[抛物线与 $x$ 轴的交点](../geometrical-meaning-quadratic-equations/)，其由 $b^2 - 4ac$ 的符号确定。

## 过一点的切线

抛物线把平面分成两个区域。含焦点的一侧是内部区域，另一侧是外部区域。给定平面上一点 $P$，过 $P$ 作抛物线切线的数目取决于 $P$ 的位置：

+ 当 $P$ 在抛物线外部时，有两条切线经过 $P$。
+ 当 $P$ 位于抛物线上时，有一条切线经过 $P$。
+ 当 $P$ 在抛物线内部时，无切线经过 $P$。

![图 8](/assets/lines-planes-conic-sections/svg/parabola-8.zh.svg)

抛物线 $y=ax^2+bx+c$ 的每条切线都不是竖直线，因此过 $P(x_0,y_0)$ 的候选直线具有有限斜率 $m$。它与抛物线的交点满足：

$$
\begin{cases}
y - y_0 = m(x - x_0) \\[6pt]
y = ax^2 + bx + c
\end{cases}
$$

消去 $y$，得到关于 $x$ 的二次方程，其系数与 $m$ 有关。相切要求判别式为零。解出所得方程中的 $m$，并把每个解代入 $y-y_0=m(x-x_0)$，即可得到切线。

## 示例

求过 $P(3,-6)$ 且与抛物线 $y=x^2-4$ 相切的直线方程。过 $P$ 的非竖直直线方程为：

$$y - y_0 = m(x - x_0)$$

将 $x_0 = 3$ 和 $y_0 = -6$ 代入，得到：

$$y + 6 = m(x - 3)$$

该直线束与抛物线构成的方程组为：

$$
\begin{cases}
y = x^2 - 4 \\[6pt]
y + 6 = m(x - 3)
\end{cases}
$$

将第一个方程代入第二个方程并合并同类项，得到关于 $x$ 的二次方程：

$$
\begin{align}
&x^2 - 4 = m(x - 3) - 6 \\[6pt]
&x^2 - mx + 3m + 2 = 0
\end{align}
$$

这个关于 $x$ 的二次方程的判别式为：

$$D(m) = (-m)^2 - 4(1)(3m + 2) = m^2 - 12m - 8$$

相切条件为 $D(m)=0$，所以 $m$ 满足：

$$
\begin{align}
&m^2 - 12m - 8 = 0 \\[6pt]
&m = \frac{12 \pm \sqrt{144 + 32}}{2} = \frac{12 \pm 4\sqrt{11}}{2} = 6 \pm 2\sqrt{11}
\end{align}
$$

两条斜率分别为 $m_1 = 6 - 2\sqrt{11}$ 和 $m_2 = 6 + 2\sqrt{11}$。将每条斜率代入 $y + 6 = m(x - 3)$，得到两条切线：

$$
\begin{align}
y &= \left(6 - 2\sqrt{11}\right)x + 6\sqrt{11} - 24 \\[6pt]
y &= \left(6 + 2\sqrt{11}\right)x - 6\sqrt{11} - 24
\end{align}
$$

这就是过 $P(3,-6)$ 的两条切线。
