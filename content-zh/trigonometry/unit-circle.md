---
title: 单位圆
title_en: Unit Circle
source: https://algebrica.org/unit-circle/
license: CC BY-NC 4.0
tags:
  - radians
  - trigonometry
  - unit-circle
translation:
  status: current
  source_hash: b799bdd3053e73ad3df510c40bc3c853bee9a6acd3e3c3fb08ef7f7c53b4f68a
  translator: omp
  updated: "2026-07-24T15:08:14.918Z"
---
## 定义

单位圆（又称三角圆）是以笛卡尔平面原点为圆心、半径为一的[圆](../circumference/)。它作为表示角及其位置的几何参照，为描述旋转、方向以及圆上点随角变化的关系提供了精确的方式。

**定义 1。** 具体地，考虑以原点 $O$ 为圆心、单位半径的圆，设 $P$ 为圆上一点。线段 $\overline{OP}$ 长度为一，与正 $x$ 轴成角 $\theta$，$R$ 表示从 $P$ 向 $x$ 轴所作垂线的垂足。

![单位圆与三角函数的定义](/assets/trigonometry/svg/unit-circle-1.zh.svg)

按惯例，逆时针方向取正号，顺时针方向取负号。因此，当从正 $x$ 轴出发沿逆时针方向到达 $P$ 时，角 $\theta$ 为正；反之为负。

设 $S$ 为单位圆与正 $x$ 轴的交点 $(1, 0)$，再设 $T$ 为过 $O$ 与 $P$ 的直线与圆在 $S$ 处的竖直切线的交点（该构造仅当角的余弦不为零时才有意义）。

+ 取水平方向向右、竖直方向向上为正，则从 $R$ 到 $P$ 沿有向线段 $\overline{RP}$ 的竖直长度（即 $P$ 的纵坐标）等于角 $\theta$ 的[正弦](../sine-and-cosine/)。
+ 从 $O$ 到 $R$ 沿线段 $\overline{OR}$ 的有向水平长度（即 $P$ 的横坐标）等于角 $\theta$ 的[余弦](../sine-and-cosine/)。
+ 当 $\cos\theta\ne0$ 时，$T=(1,\tan\theta)$，故从 $S$ 到 $T$ 沿线段 $\overline{ST}$ 的有向竖直长度等于角 $\theta$ 的[正切](../tangent-and-cotangent/)；当 $\cos\theta=0$ 时，正切无定义，直线 $OP$ 与该切线平行，因而不存在交点 $T$。

> 单位圆的重要意义远超初等三角学。它是旋转、周期现象、复数以及贯穿数学、物理学和计算机科学的众多分析工具的几何基础。

## 基本三角恒等式

通过单位圆的几何引入[正弦与余弦](../sine-and-cosine/)的概念后，两者之间的关系便一目了然。若点 $P$ 位于单位圆上，线段 $\overline{OP}$ 与正 $x$ 轴成角 $\theta$，那么在终边不落在坐标轴上的情形中，以 $O$、$R$、$P$ 为顶点的直角三角形斜边长为 $1$，两条直角边的长度分别为 $|\cos\theta|$ 与 $|\sin\theta|$。对该三角形应用[勾股定理](../pythagorean-theorem/)，再利用绝对值平方与原数平方相同，可得如下恒等式；终边落在坐标轴上的退化情形也可直接验证：

$$
\sin^2\theta + \cos^2\theta = 1
$$

![基本三角恒等式的几何示意](/assets/trigonometry/svg/unit-circle-2.zh.svg)

此关系对所有角 $\theta$ 均成立，无论 $P$ 位于圆上何处。以解析的观点看，它表明点 $(\cos\theta, \sin\theta)$ 始终位于单位圆上，其方程如下：

$$
x^{2} + y^{2} = 1
$$

反过来看，单位圆上的每一点都可以写成 $(\cos\theta, \sin\theta)$ 的形式，其中 $\theta$ 为某个角，这便是圆的参数表示。需要指出，给定单位圆上的一点仅能确定模 $2\pi$ 的同终边角类；若取主值 $\theta \in [0, 2\pi)$，则该点对应唯一的角。

## 单位圆上的角

考虑单位圆上的一点 $P$。从正 $x$ 轴到线段 $\overline{OP}$ 的有向角 $\theta$ 唯一确定该点的位置，其中 $O$ 表示原点。按通常约定，逆时针方向为正。关于角的一般性讨论，包括度与弧度的定义及两者之间的换算，详见[角与角的度量](../angles-and-angular-measure/)。

角通常按六十进制以度表示，其中一整圈对应 $360^\circ$。由于圆是封闭曲线，旋转 $360^\circ$ 后点 $P$ 回到原位；若只关心终边或圆上对应点，相差 $360^\circ$ 整数倍的角可视为[模](../modulo-operator/) $360^\circ$ 等价，但具体的有向角仍保留完整旋转的圈数。因此，超过 $360^\circ$ 的度数表示含一圈或多圈完整旋转的转动，而负值表示顺时针旋转。

例如：

+ $450^\circ$ 表示一整圈（$360^\circ$）再加上 $90^\circ$。
+ $-90^\circ$ 对应沿顺时针方向的四分之一圈。

笛卡尔平面的四个象限对应角的四个范围，终边落入的象限决定了 $\cos\theta$ 和 $\sin\theta$ 的正负号：第一象限中两者均为正，第二象限中仅正弦为正，第三象限中两者均为负，第四象限中仅余弦为正：

| 象限     | 1   | 2   | 3   | 4   |
| ------------ | --- | --- | --- | --- |
| $\cos\theta$ | $+$ | $-$ | $-$ | $+$ |
| $\sin\theta$ | $+$ | $+$ | $-$ | $-$ |

利用这一正负号规律，在相应函数有定义时，可将非象限角的三角函数值归结为第一象限内某个锐角的对应值；象限角的函数值则可由单位圆坐标直接确定。[诱导公式与参考角](../reduction-formulas-and-reference-angles/)给出了系统进行这种化归所需的精确恒等式。

## 弧长与弧度

设 $A$ 为正 $x$ 轴与单位圆的交点，$P$ 为单位圆上的任意一点。若从 $A$ 出发沿单位圆逆时针方向量取，并且不绕过完整一周，则弧长有唯一代表 $s_0\in[0,2\pi)$，且 $s_0$ 与点 $P$ 一一对应。

![单位圆上的弧长](/assets/trigonometry/svg/unit-circle-3.zh.svg)

单位圆一周的周长为 $2\pi$。若还要记录旋转方向和完整圈数，则使用有向弧长，约定逆时针为正、顺时针为负。所有从 $A$ 到达同一点 $P$ 的有向弧长均可写成 $s_0+2k\pi$，其中 $k\in\mathbb{Z}$；因此，给定有向弧长可唯一确定终点 $P$，而给定 $P$ 只能确定该弧长模 $2\pi$ 的同余类。

这种有向弧长就是相应有向角的弧度数。将度数换算为弧度数时，需乘以因子 $\pi/180$。
例如，角 $\theta = 30^\circ$ 对应如下弧度数。

$$
\theta = 30 \times \frac{\pi}{180} = \frac{\pi}{6}
$$

## 直角坐标与参数表示

单位圆在直角坐标系中具有一种自然的参数表示。从正 $x$ 轴到线段 $\overline{OP}$ 的有向角 $\theta$ 唯一确定圆上点 $P$。当 $\theta$ 在 $[0, 2\pi)$ 上变化时，点 $P$ 恰好遍历整个圆周一次，这一对应关系由以下参数方程给出。

$$
\begin{align}
x &= \cos\theta \\[6pt]
y &= \sin\theta
\end{align}
$$

当 $\theta$ 取遍整个 $\mathbb{R}$ 时，同一点可能被多次到达，这反映了三角函数的周期性。将参数表达式代入方程 $x^2 + y^2 = 1$，便得到[基本三角恒等式](../pythagorean-identity/) $\sin^2\theta + \cos^2\theta = 1$，从而确认每一个这种形式的点都位于单位圆上。

![单位圆上一点的参数表示](/assets/trigonometry/svg/unit-circle-4.zh.svg)

举例来说，取角 $\theta = \pi/3$，[参数方程](../equations-with-parameters/)给出如下值。

$$\cos\frac{\pi}{3} = \frac{1}{2}$$
$$\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$$

因此，单位圆上对应的点为：
$$ P\!\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right) $$

可以直接验证：

$$ \left(\frac{1}{2}\right)^2 + \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{1}{4} + \frac{3}{4} = 1 $$

## 参数化的周期性

单位圆的参数表示反映了三角函数的一个基本性质：由于圆是闭合曲线，完整旋转 $2\pi$ 弧度后，点 $P$ 回到原位。因此，将 $\theta$ 加上 $2\pi$ 的任意整数倍，圆上对应的点保持不变。这一性质由以下恒等式表达：

$$
(\cos(\theta + 2k\pi), \sin(\theta + 2k\pi)) = (\cos\theta, \sin\theta)
$$

对任意整数 $k \in \mathbb{Z}$ 成立。特别地，这意味着以 $\theta \in \mathbb{R}$ 为参数的参数化不是单射：无穷多个 $\theta$ 的值对应圆上的同一点。只有将 $\theta$ 限制到长度为 $2\pi$ 的半开区间（例如 $[0, 2\pi)$ 或 $(-\pi,\pi]$），才能得到该区间与单位圆之间的双射。

这种周期行为是[正弦与余弦](../sine-and-cosine/)的本质属性，直接源自单位圆的几何。

## 特殊角及其坐标

在三角学中，某些角经常出现。在这些 $\theta$ 值处，正弦和余弦可以通过初等几何论证求出，无需数值近似。下表列出了常见角对应的坐标 $(\cos\theta, \sin\theta)$。

$$
\begin{align}
\theta &= 0 &\quad& \cos 0 = 1 &\quad& \sin 0 = 0 \\[6pt]
\theta &= \frac{\pi}{6} &\quad& \cos\frac{\pi}{6} = \frac{\sqrt{3}}{2} &\quad& \sin\frac{\pi}{6} = \frac{1}{2} \\[6pt]
\theta &= \frac{\pi}{4} &\quad& \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2} &\quad& \sin\frac{\pi}{4} = \frac{\sqrt{2}}{2} \\[6pt]
\theta &= \frac{\pi}{3} &\quad& \cos\frac{\pi}{3} = \frac{1}{2} &\quad& \sin\frac{\pi}{3} = \frac{\sqrt{3}}{2} \\[6pt]
\theta &= \frac{\pi}{2} &\quad& \cos\frac{\pi}{2} = 0 &\quad& \sin\frac{\pi}{2} = 1 \\[6pt]
\theta &= \pi &\quad& \cos\pi = -1 &\quad& \sin\pi = 0 \\[6pt]
\theta &= \frac{3\pi}{2} &\quad& \cos\frac{3\pi}{2} = 0 &\quad& \sin\frac{3\pi}{2} = -1
\end{align}
$$

$\theta = \pi/4$ 处的值源自一个简单的观察：半径 $OP$ 及其在两条坐标轴上的投影构成等腰直角三角形，因此 $\cos(\pi/4) = \sin(\pi/4) = \sqrt{2}/2$。$\theta = \pi/6$ 和 $\theta = \pi/3$ 处的值则来自等边三角形的几何性质，其内角均等于 $\pi/3$。

## 单位圆与复数

在复数的语境中，单位圆有一种自然的解释。[复数](../complex-numbers/) $z = x + iy$ 可以表示为笛卡尔平面上的点 $(x, y)$。$z$ 的模定义为 $|z| = \sqrt{x^2 + y^2}$，因此条件 $|z| = 1$ 恰好刻画了位于单位圆上的复数集合。根据上文建立的参数表示，每一个这样的数都可以写成如下形式：

$$
z = \cos\theta + i\sin\theta
$$

其中 $\theta$ 为某个角。这一表达式与复数的[指数形式](../complex-numbers-exponential-form/)相吻合，后者由[欧拉公式](../eulers-formula/)给出：

$$
e^{i\theta} = \cos\theta + i\sin\theta
$$

因此，当 $\theta$ 遍历 $\mathbb{R}$ 时，$e^{i\theta}$ 的取值集合恰好是单位圆，即 $\{ z \in \mathbb{C} : |z| = 1 \}$。两个单位圆上的复数相乘，在几何上对应于旋转：若 $z_1 = e^{i\alpha}$、$z_2 = e^{i\beta}$，则 $z_1 z_2 = e^{i(\alpha+\beta)}$，这相当于把 $z_1$ 旋转 $\beta$。这一几何解释既构成了[棣莫弗定理](../de-moivre-theorem/)的基础，也是研究[单位根](../roots-of-unity/)的基础。
