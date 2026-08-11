---
title: 三角方程
title_en: Trigonometric Equations
source: https://algebrica.org/trigonometric-equations/
license: CC BY-NC 4.0
tags:
  - arccosine
  - arcsine
  - arctangent
  - cosine
  - sine
  - tangent
  - trigonometric-equation
  - unit-circle
translation:
  status: current
  source_hash: c533abcf3f2ebff0c70d1b63f43a90deae424075d6bc29e311922dd90d8d63ec
  translator: omp
  updated: "2026-07-30T11:41:04.547Z"
---
## 定义

三角方程是一种[方程](../equations/)，其中未知量作为一个或多个三角函数的自变量出现。最简单的情形是单个函数等于一个常数，形式为：

$$\sin(x) = m, \quad \cos(x) = m, \quad \tan(x) = m$$

第二类方程将未知量的一个函数置于三角函数的内部，形式为：

$$\sin[f(x)] = m, \quad \cos[f(x)] = m, \quad \tan[f(x)] = m$$

这两类方程将在下文讨论。由于三角函数具有周期性，此类方程中每一个可解的方程都有无穷多个解，核心任务是用一个简洁的通式描述所有解。将等号替换为不等号，便得到[三角不等式](../trigonometric-inequalities/)；同样的周期性会产生无穷多个区间的并集，而非离散的解族。

## 形如正弦函数等于 m 的方程

考虑方程

$$\sin(x) = m \tag{1}$$

求解它意味着确定每一个[角](../angles-and-angular-measure/) $x$，其[正弦](../sine-and-cosine/)等于 $m$。正弦函数在区间 $[-1, 1]$ 内取值，因此仅当 $-1 \leq m \leq 1$ 时才存在实数解。若 $|m| > 1$，则方程 $(1)$ 无实数解，称为无解方程。

在[单位圆](../unit-circle/)上，该方程对应水平直线 $y = m$。当 $-1 < m < 1$ 时，该直线与圆相交于两个不同的点，关于纵轴对称，从而在 $[0, 2\pi)$ 中产生两个角：

$$x = \alpha, \qquad x = \pi - \alpha$$

其中 $\alpha$ 是 $m$ 的[反正弦](../arcsine-function/)，即在 $[-\pi/2, \pi/2]$ 中满足 $\sin(\alpha) = m$ 的唯一角。由于正弦函数以 $2\pi$ 为周期，完整的解集合为：

$$
\begin{align}
x &= \alpha + 2k\pi \\[6pt]
x &= \pi - \alpha + 2k\pi, \quad k \in \mathbb{Z}
\end{align}
$$

整数 $k$ 遍历整个 $\mathbb{Z}$，其中 $\mathbb{Z}$ 表示[整数](../integers/)集合，体现了函数的周期性。

> 这两族解在 $m$ 的边界值处重合。当 $m = 1$ 时，该直线在顶部与圆相切，给出单一的解族 $x = \pi/2 + 2k\pi$；当 $m = -1$ 时给出 $x = -\pi/2 + 2k\pi$。当 $m = 0$ 时，解合并为 $x = k\pi$。

例如，考虑方程

$$\sin(x) = \frac{1}{2}$$

参考角为 $\alpha = \pi/6$，因为 $\sin(\pi/6) = 1/2$。因此两个解族为：

$$
\begin{align}
x &= \frac{\pi}{6} + 2k\pi \\[6pt]
x &= \pi - \frac{\pi}{6} + 2k\pi = \frac{5\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}
\end{align}
$$

在区间 $[0, 2\pi)$ 内，它们简化为两个值 $x = \pi/6$ 和 $x = 5\pi/6$。

## 形如余弦函数等于 m 的方程

方程

$$\cos(x) = m \tag{2}$$

同样受到值域条件的约束，因为[余弦](../sine-and-cosine/)的取值也在 $[-1, 1]$ 内。当 $-1 < m < 1$ 时，直线 $x = m$ 与单位圆相交于两点，这两点关于横轴对称，对应两个相反的角。令 $\alpha = \arccos(m)$ 表示 $m$ 的[反余弦](../arccosine-function/)，即 $[0, \pi]$ 中满足 $\cos(\alpha) = m$ 的唯一值，则通解为：

$$x = \pm\alpha + 2k\pi, \quad k \in \mathbb{Z}$$

正负两个符号反映了余弦函数关于横轴的对称性，因此在 $[0, 2\pi)$ 内的解为 $\alpha$ 和 $2\pi - \alpha$。

举例说明，考虑方程

$$\cos(x) = \frac{1}{2}$$

由已知值 $\cos(\pi/3) = 1/2$ 可得 $\alpha = \pi/3$，故通解为：

$$x = \pm\frac{\pi}{3} + 2k\pi, \quad k \in \mathbb{Z}$$

在区间 $[0, 2\pi)$ 内，得到两个值：

$$x_1 = \frac{\pi}{3}, \quad x_2 = \frac{5\pi}{3}$$

> 边界值同样使两族解合二为一：$m = 1$ 给出 $x = 2k\pi$，$m = -1$ 给出 $x = \pi + 2k\pi$，而 $m = 0$ 给出 $x = \pi/2 + k\pi$。

## 形如正切函数等于 m 的方程

方程

$$\tan(x) = m \tag{3}$$

与前两类不同，[正切](../tangent-and-cotangent/)函数没有界。其值域是整个实数轴，所以方程 $(3)$ 对 $m$ 的每个实数值都有解，无需施加值域条件。正切函数以 $\pi$ 为周期，因此一旦得到一个解，其余解可由该解加上 $\pi$ 的整数倍得到。令 $\alpha = \arctan(m)$ 表示 $m$ 的[反正切](../arctangent-and-arccotangent/)，即 $(-\pi/2, \pi/2)$ 中满足 $\tan(\alpha) = m$ 的主值，则通解为：

$$x = \arctan(m) + k\pi, \quad k \in \mathbb{Z}$$

例如，考虑方程

$$\tan(x) = 2$$

正切值 $2$ 并非特殊角对应的常见值，因此直接用反正切表示主值角。通解为：

$$x = \arctan(2) + k\pi, \quad k \in \mathbb{Z}$$

当函数值不是特殊角对应的常见值时，可用相应反函数表示主值角。同样的方法也适用于反正弦和反余弦，它们可为正弦或余弦的任意可取值给出主值角。

## 通过代换求解的方程

第二类方程把一个未知数的函数放在三角函数内部，最简单的情形是：

$$\sin[f(x)] = m \tag{4}$$

策略是把 $f(x)$ 当作新未知数。令 $u = f(x)$，可将问题化为上文已处理的简单方程 $\sin(u) = m$。写出 $u$ 的通解后，再还原代换并求解所得的关于 $x$ 的方程。与所有正弦方程一样，只有当 $-1 \leq m \leq 1$ 时才存在实数解。

考虑方程

$$\sin(2x) = \frac{1}{2}$$

$1/2$ 在允许范围内，所以由 $u = 2x$，方程 $\sin(u) = 1/2$ 有两个解族：

$$
\begin{align}
u &= \frac{\pi}{6} + 2k\pi \\[6pt]
u &= \frac{5\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}
\end{align}
$$

反向代换 $u = 2x$ 得：

$$
\begin{align}
2x &= \frac{\pi}{6} + 2k\pi \\[6pt]
2x &= \frac{5\pi}{6} + 2k\pi
\end{align}
$$

将两个方程都除以 $2$，$x$ 的解为：

$$
\begin{align}
x &= \frac{\pi}{12} + k\pi \\[6pt]
x &= \frac{5\pi}{12} + k\pi, \quad k \in \mathbb{Z}
\end{align}
$$

> 将周期项除以 $x$ 的系数正是缩短周期的原因：角 $u = 2x$ 的周期是 $2\pi$，所以 $x$ 的周期是 $\pi$。忘记连同其余各项一起除掉 $2k\pi$ 这一项，是这类方程中最常见的错误，它会使解的数目减半。

## 完整求解示例

解方程

$$\cos(3x + 2) = \frac{1}{\sqrt{2}}$$

自变量 $3x + 2$ 对应代换变量 $u = 3x + 2$，方程变为 $\cos(u) = 1/\sqrt{2}$。由于 $\cos(\pi/4) = 1/\sqrt{2}$，该余弦方程的通解为：

$$u = \pm\frac{\pi}{4} + 2k\pi, \quad k \in \mathbb{Z}$$

代回原变量后，变量 $x$ 满足以下两个方程：

$$
\begin{align}
3x + 2 &= \frac{\pi}{4} + 2k\pi \\[6pt]
3x + 2 &= -\frac{\pi}{4} + 2k\pi
\end{align}
$$

两边同时减去 $2$，即可分离含 $x$ 的项：

$$
\begin{align}
3x &= \frac{\pi}{4} - 2 + 2k\pi \\[6pt]
3x &= -\frac{\pi}{4} - 2 + 2k\pi
\end{align}
$$

将每个方程除以 $3$，得到：

$$
\begin{align}
x &= \frac{\pi}{12} - \frac{2}{3} + \frac{2k\pi}{3} \\[6pt]
x &= -\frac{\pi}{12} - \frac{2}{3} + \frac{2k\pi}{3}, \quad k \in \mathbb{Z}
\end{align}
$$

通分合并常数项后，通解可写成如下简洁形式：

$$
\begin{align}
x &= \frac{\pi - 8}{12} + \frac{2k\pi}{3} \\[6pt]
x &= \frac{-\pi - 8}{12} + \frac{2k\pi}{3}, \quad k \in \mathbb{Z}
\end{align}
$$

这两族解给出了满足原方程的所有 $x$ 值。

## 可化为代数方程的方程

一大类三角方程只含单一三角函数，该函数可能带有幂次，而不是直接等于常数。这类方程可通过引入一个等于该三角函数的新变量，化为普通的代数方程。解出代数方程后，每个可取值都会产生一个上文讨论过的初等三角方程。

考虑如下方程：

$$2\sin^2(x) - 3\sin(x) + 1 = 0$$

其中只出现正弦函数，因此作代换 $t = \sin(x)$ 后，方程变为一个[二次方程](../quadratic-equations/)：

$$2t^2 - 3t + 1 = 0$$

套用[求根公式](../quadratic-formula/)得：

$$t = \frac{3 \pm \sqrt{9 - 8}}{4} = \frac{3 \pm 1}{4}$$

故 $t_1 = 1$ 和 $t_2 = \frac{1}{2}$。两个值都落在区间 $[-1, 1]$ 内，因而都是可取的。

- - -

还原代换 $t = \sin(x)$，得到两个初等方程。第一个是：

$$\sin(x) = 1$$

它给出一族解：

$$x = \frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$

第二个是：

$$\sin(x) = \frac{1}{2}$$

它给出两族解：

$$
\begin{align}
x &= \frac{\pi}{6} + 2k\pi \\[6pt]
x &= \frac{5\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}
\end{align}
$$

> 当函数为正弦或余弦时，辅助变量落在区间 $[-1, 1]$ 之外的取值必须舍去，因为两者的值域都不能超出该范围。但当函数为正切时则无此限制，其值域为整个实数轴。

## 含混合函数的方程

当方程中包含不同的三角函数时，需要先将每一项用单一函数表示，然后才能进行代换。[三角恒等式](../trigonometric-identities/)提供了所需的工具：勾股恒等式 $\sin^2(x) + \cos^2(x) = 1$ 可将一个函数的平方转化为另一个函数，而二倍角公式则把 $\sin(2x)$ 和 $\cos(2x)$ 用 $\sin(x)$ 和 $\cos(x)$ 表示。

考虑下面的方程：

$$2\cos^2(x) + \sin(x) - 1 = 0$$

余弦与正弦同时出现，因此方程还无法化归为单一函数。应用勾股恒等式 $\cos^2(x) = 1 - \sin^2(x)$，可将每一项都改用正弦表示：

$$2\bigl(1 - \sin^2(x)\bigr) + \sin(x) - 1 = 0$$

展开并合并同类项，得到：

$$-2\sin^2(x) + \sin(x) + 1 = 0$$

两边同乘 $-1$，得到标准形式：

$$2\sin^2(x) - \sin(x) - 1 = 0$$

- - -

令 $t = \sin(x)$，方程化为如下[二次方程](../quadratic-equations/)：

$$2t^2 - t - 1 = 0$$

应用[求根公式](../quadratic-formula/)，得到：

$$t = \frac{1 \pm \sqrt{1 + 8}}{4} = \frac{1 \pm 3}{4}$$

因此 $t_1 = 1$ 和 $t_2 = -\frac{1}{2}$。两个值都落在 $[-1, 1]$ 内，因而都是可取的。

- - -

将代换 $t = \sin(x)$ 还原，得到两个基本方程。第一个是：

$$\sin(x) = 1$$

它给出解：

$$x = \frac{\pi}{2} + 2k\pi, \quad k \in \mathbb{Z}$$

第二个是：

$$\sin(x) = -\frac{1}{2}$$

它给出两族解：

$$
\begin{align}
x &= -\frac{\pi}{6} + 2k\pi \\[6pt]
x &= \frac{7\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}
\end{align}
$$

> 勾股恒等式保持等价性，因此不会引入增根。需要注意方程两边同时除以某个三角函数的情形，因为使该函数为零的取值本身可能也是解，若不单独检验便会丢失这些解。

- - -

若方程的每一项都含有同次的若干三角函数，它就属于单独的一类，详见[齐次三角方程](../homogeneous-trigonometric-equations/)。求解前，[诱导公式](../reduction-formulas-and-reference-angles/)常可用于改写角。
