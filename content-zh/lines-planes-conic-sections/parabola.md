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
  source_hash: 50a4bdc02a8fb9d2093b1dd3cd9dfabbdd039a61601fbfc429a3bd210760ffe0
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 圆锥曲线

当[平面](../planes/)切割圆锥时，投影到该平面上的交线是[圆周](../circumference/)、抛物线、[椭圆](../ellipse/)或[双曲线](../hyperbola/)。这些曲线统称为圆锥曲线。圆锥曲线是二次平面代数曲线，即满足关于 $x$ 和 $y$ 的二次方程的点 $(x, y) \in \mathbb{R}^2$ 的集合：

$$f(x, y) = a_{11}x^2 + 2a_{12}xy + a_{22}y^2 + 2a_{13}x + 2a_{23}y + a_{33} = 0$$

系数 $a_{ij}$ 为[实数](../real-numbers/)，其中 $a_{11}$、$a_{12}$、$a_{22}$ 不全为零，从而至少存在一个二次项。

+ 二次项系数 $a_{11}$、$a_{12}$、$a_{22}$ 通过 $a_{11}a_{22} - a_{12}^2$ 的符号决定圆锥曲线的类型：为正时是椭圆，为零时是抛物线，为负时是双曲线。
+ 系数 $a_{12}$ 控制曲线相对于坐标轴的旋转；当且仅当 $a_{12} = 0$ 时，圆锥曲线的轴线与坐标轴对齐。
+ 一次项系数 $a_{13}$、$a_{23}$ 和常数项 $a_{33}$ 确定曲线在平面中的位置；对圆锥曲线作平移会改变它们，而二次项系数保持不变。

当多项式 $f(x, y)$ 可分解为两个一次多项式的乘积时：

$$f(x, y) = (ax + by + c)(a'x + b'y + c') = 0$$

其中 $a, b, c, a', b', c' \in \mathbb{C}$ 为[复系数](../complex-numbers/)，则该圆锥曲线退化。

> 退化圆锥曲线可化为两条直线、一条直线，或在某些情形下为空集合。

## 抛物线

抛物线是当截平面平行于圆锥的一条母线时所得的圆锥截线，因此交线是一条单一的无限延伸曲线。

![图 1](/assets/lines-planes-conic-sections/svg/parabola-1.zh.svg)

抛物线是平面上所有到一定点 $F$（焦点）和一定直线 $d$（准线）距离相等的点的集合。

![图 2](/assets/lines-planes-conic-sections/svg/parabola-2.zh.svg)

过焦点且垂直于准线的直线称为抛物线的轴。抛物线与其轴的交点 $V$ 称为顶点。顶点在原点、轴沿 $y$ 轴的抛物线的方程为：

$$y = ax^2, \quad a \neq 0$$

该抛物线关于 $y$ 轴对称。其焦点和准线分别为：

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

其顶点、焦点和准线可由竖直情形交换两个坐标得到。

## 标准二次形式的抛物线

轴与 $y$ 轴平行的抛物线的一般方程为：

$$y = ax^2 + bx + c, \quad a \neq 0$$

![图 5](/assets/lines-planes-conic-sections/svg/parabola-5.zh.svg)

这是关于 $x$ 的[二次方程](../quadratic-equations/)。其对称轴为竖直直线：

$$x = -\frac{b}{2a}$$

顶点为：

$$V\left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right)$$

其中 $\Delta = b^2 - 4ac$ 是该二次式的[判别式](../quadratic-formula/)。焦点和准线分别为：

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

对于抛物线 $y = ax^2$，焦点的纵坐标为 $1/4a$，因此通径的端点是曲线上具有该纵坐标的点。令 $ax^2 = 1/4a$，得：

$$x = \pm\frac{1}{2|a|}$$

端点为：

$$\left(-\frac{1}{2|a|}, \frac{1}{4a}\right), \qquad \left(\frac{1}{2|a|}, \frac{1}{4a}\right)$$

通径的长度为：

$$\frac{1}{|a|}$$

$|a|$ 越大，通径越短，抛物线越窄。

## 离心率与极坐标方程

抛物线具有一个适用于所有圆锥曲线的描述。固定一个焦点 $F$ 和一条准线 $d$，对于一点 $P$，设 $r$ 为其到焦点的距离，$\delta$ 为其到准线的距离。离心率是常数比值：

$$e = \frac{r}{\delta}$$

$e$ 的值决定圆锥曲线的类型：$e < 1$ 给出椭圆，$e = 1$ 给出抛物线，$e > 1$ 给出双曲线。抛物线的定义性等距条件 $r = \delta$ 对应 $e = 1$ 的情形。

这一描述也给出了抛物线在[极坐标](../polar-coordinates/)下的方程。将焦点置于极点，取准线为竖直线 $x = -h$，其中 $h > 0$ 是从焦点到准线的距离。极坐标为 $(r, \theta)$ 的点 $P$ 的横坐标为 $x = r\cos\theta$，因此其到准线的距离为 $r\cos\theta + h$。条件 $r = r\cos\theta + h$ 给出：

$$
\begin{align}
&r - r\cos\theta = h \\[6pt]
&r = \frac{h}{1 - \cos\theta}
\end{align}
$$

三角函数和符号取决于准线的位置。准线 $x = h$ 给出：

$$r = \frac{h}{1 + \cos\theta}$$

水平准线 $y = \mp h$ 给出：

$$r = \frac{h}{1 \pm \sin\theta}$$

对一般圆锥曲线做同样的构造，得到：

$$r = \frac{eh}{1 - e\cos\theta}$$

当 $e = 1$ 时即为抛物线。

在 $\theta = \pi/2$ 处，半径等于 $h$，即焦点到准线的距离，也就是半通径。完整通径的长度为 $2h$，这与 $y = ax^2$（其中 $h=1/2\lvert a\rvert$）所求得的值 $1/\lvert a\rvert$ 一致。

## 与直线的交点

抛物线 $y = ax^2 + bx + c$ 与[直线](../lines/) $y = mx + q$ 的交点是下述由两个方程构成的方程组的解：

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

其解为交点的 $x$ 坐标。作为二次方程，它至多有 2 个不同的[根](../roots-of-a-polynomial/)，判别式 $\Delta$ 决定直线与抛物线相交的方式：

+ 当 $\Delta > 0$ 时，根为两个互不相同的实数，直线与抛物线交于两点。该直线为割线。
+ 当 $\Delta = 0$ 时，方程有一个二重实根，直线与抛物线相切于一点。
+ 当 $\Delta < 0$ 时，无实数根，直线不与抛物线相交。该直线为外部直线。

> 令直线为 $x$ 轴，即 $y = 0$，可得[抛物线与 $x$ 轴的交点](../geometrical-meaning-quadratic-equations/)，其由 $b^2 - 4ac$ 的符号确定。

## 过一点的切线

给定平面上一点 $P$，过 $P$ 作抛物线切线的数目取决于 $P$ 的位置：

+ 当 $P$ 在抛物线外部时，有两条切线经过 $P$。
+ 当 $P$ 位于抛物线上时，有一条切线经过 $P$。
+ 当 $P$ 在抛物线内部时，无切线经过 $P$。

![图 8](/assets/lines-planes-conic-sections/svg/parabola-8.zh.svg)

要求由 $P(x_0, y_0)$ 到抛物线 $y = ax^2 + bx + c$ 的切线，求解抛物线与过 $P$ 的直线束构成的方程组：

$$
\begin{cases}
y - y_0 = m(x - x_0) \\[6pt]
y = ax^2 + bx + c
\end{cases}
$$

消去 $y$，得到关于 $x$ 的二次方程，其系数与 $m$ 有关。相切条件令其判别式为零，得到关于 $m$ 的方程。解出 $m$ 并代回直线束，即得切线。

## 示例

求过 $P(3, -6)$ 且与抛物线 $y = x^2 - 4$ 相切的切线方程。过 $P$ 的直线束为：

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

其中 $a = 1$、$b = -m$、$c = 3m + 2$，判别式为：

$$\Delta = m^2 - 12m - 8$$

令其满足相切条件 $\Delta = 0$，并求解关于 $m$ 的二次方程：

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
