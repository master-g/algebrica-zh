---
title: 三角不等式
title_en: Trigonometric Inequalities
source: https://algebrica.org/trigonometric-inequalities/
license: CC BY-NC 4.0
tags:
  - cosine
  - sine
  - tangent
  - trigonometric-inequality
  - unit-circle
translation:
  status: current
  source_hash: ccdbcd5e7a4c8aea9c18159bfd98ed7bbe7e401699dd28b95946bfaac106e10d
  translator: omp
  updated: "2026-07-31T07:09:52.229Z"
---
## 引言

三角不等式是这样一种[不等式](../inequalities/)：其未知量作为一个或多个三角函数的自变量出现。与代数不等式不同，其解集通常是无穷多个区间的并集，这是由所涉函数的周期性导致的。本页讨论三种基本情形，涉及[正弦与余弦](../sine-and-cosine/)以及[正切](../tangent-and-cotangent/)，随后考察如何将更复杂的表达式归约为这些标准形式。

- - -

求解三角不等式的方法基于[单位圆](../unit-circle/)的几何解释。给定由单位圆上[角](../angles-and-angular-measure/) $x$ 所确定的点：

![图 1](/assets/trigonometry/svg/unit-circle-1.zh.svg)

+ $\sin x$ 是该点的纵坐标（线段 $\overline{PR}$）。
+ $\cos x$ 是该点的横坐标（线段 $\overline{OR}$）。
+ $\tan x$ 是两个坐标之比，其几何表示为：过原点与该点的直线，与圆在 $(1, 0)$ 处的竖直切线相交，交点的纵坐标（线段 $\overline{ST}$）。

确定这些量大于或小于某个指定值的位置，便构成求解此类不等式的几何方法。由于正弦与余弦以 $2\pi$ 为周期，正切以 $\pi$ 为周期，因此在一个周期内确定的解，必须通过加上相关周期的整数倍，推广到整条实数轴。

## 涉及正弦的不等式

考虑如下形式的不等式，其中 $k$ 为实常数。

$$\sin x > k$$

两种极端情形可以立即判定。当 $k \geq 1$ 时不等式无解，因为对所有 $x$ 均有 $\sin x \leq 1$；当 $k < -1$ 时每个实数都满足该不等式，因为 $\sin x \geq -1$。因此，相关的情形为 $-1 \leq k < 1$。

第一步是确定[参考角](../reduction-formulas-and-reference-angles/) $\alpha = \arcsin k$，它位于 $[-\pi/2, \pi/2]$，且与求解对应的[三角方程](../trigonometric-equations/) $\sin x = k$ 所得的角度相同。在单位圆上，条件 $\sin x > k$ 在纵坐标超过 $k$ 的弧段上得到满足。该弧段从 $\alpha$ 沿逆时针方向延伸至 $\pi - \alpha$。

![图 1](/assets/inequalities/svg/trigonometric-inequalities-1.zh.svg)

因此，一个周期内的解为开区间 $(\alpha, \pi - \alpha)$，而 $\mathbb{R}$ 上的通解如下。

$$\alpha + 2n\pi < x < \pi - \alpha + 2n\pi$$

$$n \in \mathbb{Z}$$

对于非严格的情形 $\sin x \geq k$，端点被包含在内，区间变为闭区间。此时 $k = 1$ 也是容许的，解集退化为孤立点 $x = \pi/2 + 2n\pi$。

反向不等式 $\sin x < k$ 由相同的构造求解，其解为互补弧段，在一个周期内为开区间 $(\pi - \alpha, 2\pi + \alpha)$。

- - -

例如，求以下不等式的所有实数解：

$$\sin x > \frac{\sqrt{3}}{2}$$

参考角为 $\arcsin(\sqrt{3}/2) = \pi/3$。由于正弦函数在 $\pi/3$ 与 $\pi - \pi/3 = 2\pi/3$ 之间的弧段上超过 $\sqrt{3}/2$，通解为：

$$\frac{\pi}{3} + 2n\pi < x < \frac{2\pi}{3} + 2n\pi$$

$$n \in \mathbb{Z}$$

> 实用提示：以闭式求解三角不等式，需要熟悉正弦和余弦在标准角 $\pi/6$、$\pi/4$、$\pi/3$ 和 $\pi/2$ 处的函数值。否则，从 $\arcsin(\sqrt{3}/2)$ 到 $\pi/3$ 的步骤并非显然。

## 涉及余弦的不等式

下列形式的不等式处理方式类似，只是单位圆上相关的弧关于水平轴对称。

$$\cos x < k$$

当 $k \leq -1$ 时该不等式无解，因为对所有 $x$ 都有 $\cos x \geq -1$；当 $k > 1$ 时，它对每个实数都成立。对于 $-1 < k \leq 1$，令 $\alpha = \arccos k$，它位于 $[0, \pi)$。条件 $\cos x < k$ 在单位圆上点的水平坐标低于 $k$ 时成立，这发生在从 $\alpha$ 沿逆时针方向到 $2\pi - \alpha$ 的弧上。

![图 2](/assets/inequalities/svg/trigonometric-inequalities-2.zh.svg)

通解如下：

$$\alpha + 2n\pi < x < 2\pi - \alpha + 2n\pi$$

$$n \in \mathbb{Z}$$

每个区间以 $\pi + 2n\pi$ 为中心、半径为 $\pi - \alpha$，因此该解有紧凑的等价形式 $|x - \pi - 2n\pi| < \pi - \alpha$。

反向不等式 $\cos x > k$ 在关于正水平轴对称的弧上成立，即 $-\alpha + 2n\pi < x < \alpha + 2n\pi$。

- - -

例如，求下列不等式的解集：

$$\cos x \leq -\frac{1}{2}$$

[参考角](../reduction-formulas-and-reference-angles/)为 $\arccos(-1/2) = 2\pi/3$。由于该不等式是非严格的，每个周期内的解为闭区间 $[2\pi/3, 4\pi/3]$，而 $\mathbb{R}$ 上的通解如下。

$$\frac{2\pi}{3} + 2n\pi \leq x \leq \frac{4\pi}{3} + 2n\pi$$

$$n \in \mathbb{Z}$$

> 与上面讨论的正弦情形一样，以闭式求解余弦不等式需要熟悉余弦在标准角 $\pi/6$、$\pi/4$、$\pi/3$ 和 $\pi/2$ 处的函数值。否则，从 $\arccos(-1/2)$ 到 $2\pi/3$ 这一步并非显然。

## 涉及正切的不等式

正切函数的周期为 $\pi$，并且在形如 $(-\pi/2 + n\pi, \pi/2 + n\pi)$ 的每个区间上严格递增，在这些区间上它取遍一切实数值。因此，不需要对 $k$ 施加限制，并且在每个这样的区间内，不等式归结为与参考角 $\arctan k$ 的直接比较，该参考角位于 $(-\pi/2, \pi/2)$ 中。

![图 3](/assets/inequalities/svg/trigonometric-inequalities-3.zh.svg)

考虑以下不等式：

$$\tan x > k$$

通解为：

$$\arctan k + n\pi < x < \frac{\pi}{2} + n\pi$$

$$n \in \mathbb{Z}$$

上界 $\pi/2 + n\pi$ 是一条垂直渐近线，因此始终被排除在外，无论该不等式是否取严格不等号。反向不等式 $\tan x < k$ 在每个分支的剩余部分上成立，即 $-\pi/2 + n\pi < x < \arctan k + n\pi$。

- - -

例如，求解以下不等式：

$$\tan x \leq -1$$

参考角为 $\arctan(-1) = -\pi/4$。由于[正切](../tangent-and-cotangent/)在每个分支上递增，条件 $\tan x \leq -1$ 从每个分支的左端点起直至并包含 $-\pi/4$ 都成立。通解如下。

$$-\frac{\pi}{2} + n\pi < x \leq -\frac{\pi}{4} + n\pi$$

$$n \in \mathbb{Z}$$

左端点被排除在外，因为正切函数在该处无定义。

## 可化简的不等式

许多三角不等式并不以标准形式出现，但可以通过代数变形或应用三角恒等式化简为上述情形之一。

考虑下面的不等式，其中正弦函数出现在一个线性表达式内部。

$$2\sin x - \sqrt{2} \geq 0$$

将正弦函数分离，得到 $\sin x \geq \sqrt{2}/2$。此时已化为标准形式，其中 $k = \sqrt{2}/2$，参考角为 $\pi/4$，因此通解如下。

$$\frac{\pi}{4} + 2n\pi \leq x \leq \frac{3\pi}{4} + 2n\pi$$

$$n \in \mathbb{Z}$$

- - -

第二类可化简的不等式出现在三角函数的自变量不是简单的 $x$，而是关于 $x$ 的线性表达式时。考虑下面的不等式：

$$\sin\!\left(2x - \frac{\pi}{3}\right) > \frac{1}{2}$$

引入换元 $t = 2x - \pi/3$，该不等式变为：

$$\sin t > \frac{1}{2}$$

参考角为 $\arcsin(1/2) = \pi/6$，因此关于 $t$ 的解为：

$$\frac{\pi}{6} + 2n\pi < t < \frac{5\pi}{6} + 2n\pi$$

代回 $t = 2x - \pi/3$，可以写出：

$$\frac{\pi}{6} + 2n\pi < 2x - \frac{\pi}{3} < \frac{5\pi}{6} + 2n\pi$$

将各项同加 $\pi/3$，得到：

$$\frac{\pi}{2} + 2n\pi < 2x < \frac{7\pi}{6} + 2n\pi$$

将每一项除以 $2$，这一操作对所有表达式进行均匀缩放而不改变不等式的方向，由此得到如下结果。

$$\frac{\pi}{4} + n\pi < x < \frac{7\pi}{12} + n\pi$$

$$n \in \mathbb{Z}$$

解以周期 $\pi$ 而非 $2\pi$ 重复出现，这与函数 $\sin(2x - \pi/3)$ 的周期为 $\pi$ 这一事实一致。

- - -

第三种化简技巧适用于不等式关于某个三角函数为[二次](../quadratic-equations/)式的情形。考虑下面的不等式：

$$2\cos^2 x - \cos x - 1 > 0$$

设 $u = \cos x$，该不等式化为如下[二次不等式](../quadratic-inequalities/)：

$$2u^2 - u - 1 > 0$$

[因式分解](../factoring-polynomials-ac-method/)后得到 $(2u + 1)(u - 1) > 0$，当 $u < -1/2$ 或 $u > 1$ 时成立。由于对所有实数 $x$ 都有 $\cos x \leq 1$，条件 $\cos x > 1$ 永远不成立。

因此该不等式化简为 $\cos x < -1/2$，这是标准的余弦情形，参考角为 $2\pi/3$，结果如下。

$$\frac{2\pi}{3} + 2n\pi < x < \frac{4\pi}{3} + 2n\pi$$

$$n \in \mathbb{Z}$$

## 通过勾股恒等式化简

当不等式同时含有 $\sin x$ 和 $\cos^2 x$ 时，会出现更复杂的化简情形，这时若不先应用[三角恒等式](../trigonometric-identities/)，就无法直接换元。考虑如下不等式：

$$\cos^2 x - \sin x - 1 > 0$$

通过[勾股恒等式](../pythagorean-identity/)将 $\cos^2 x$ 替换为 $1 - \sin^2 x$，可把表达式化为只含一个三角函数的形式。于是不等式变为如下形式。

$$1 - \sin^2 x - \sin x - 1 > 0$$

化简后得到 $-\sin^2 x - \sin x > 0$，等价地即 $\sin^2 x + \sin x < 0$。令 $u = \sin x$，上式化为：

$$u^2 + u < 0$$

可因式分解为：

$$u(u + 1) < 0$$

此式在 $-1 < u < 0$ 时成立，即在 $-1 < \sin x < 0$ 时成立。条件 $\sin x < 0$ 在一个周期内的开区间 $(\pi, 2\pi)$ 上得到满足，而条件 $\sin x > -1$ 则排除了点 $x = 3\pi/2$；在该点 $\sin x = -1$，严格不等式不成立。

因此通解如下。

$$\pi + 2n\pi < x < 2\pi + 2n\pi, \quad x \neq \frac{3\pi}{2} + 2n\pi, \quad n \in \mathbb{Z}$$

## 化为正切函数的齐次不等式

还有一种技巧适用于关于 $\sin x$ 与 $\cos x$ 的齐次不等式，即每一项在两个函数中的总次数相同。考虑下面的不等式，其中两项的总次数均为 2：

$$\sin^2 x - \sin x \cos x < 0$$

除以 $\cos^2 x$ 可将二次齐次不等式转化为仅含 $\tan x$ 的不等式。由于在 $\cos x \neq 0$ 处 $\cos^2 x > 0$，该除法在正切函数的每个分支上都保持不等号的方向。满足 $\cos x = 0$ 的点，即 $x = \pi/2 + n\pi$，必须单独考察，因为在该处不允许作此除法。在这些点上 $\sin^2 x = 1$ 且 $\sin x \cos x = 0$，故左端等于 $1$，严格不等式不成立；因此这些点不是解，从一开始就可排除。

两边同时除以 $\cos^2 x$，该不等式变为如下形式。

$$\frac{\sin x}{\cos x}\left(\frac{\sin x}{\cos x} - 1\right) < 0$$

令 $u = \tan x$，它就化为代数不等式 $u(u - 1) < 0$，该不等式在 $0 < u < 1$ 时成立，也就是在 $0 < \tan x < 1$ 时成立。这相当于在正切函数的每个分支内，同时求解由两个标准正切不等式构成的不等式组。不等式 $\tan x > 0$ 在如下区间上成立：

$$\left(n\pi, \frac{\pi}{2} + n\pi\right)$$

不等式 $\tan x < 1$ 在如下区间上成立：

$$\left(-\frac{\pi}{2} + n\pi, \frac{\pi}{4} + n\pi\right)$$

在每个分支内取交集，通解如下。

$$n\pi < x < \frac{\pi}{4} + n\pi$$

$$n \in \mathbb{Z}$$

快速验证：点 $x = \pi/8$ 属于解集，而 $\sin(\pi/8) > 0$ 且 $\sin(\pi/8) - \cos(\pi/8) < 0$，因此乘积确实为负，符合不等式要求。

## 三角不等式组

三角不等式组与任何[不等式组](../systems-of-inequalities/)一样，由两个或多个需要同时满足的不等式组成。解集是各个解集的交集，按周期逐一计算。

- - -

例如，求解由以下两个不等式组成的不等式组：

$$\begin{cases}
\sin x \geq 0 \\[6pt]
\cos x < \dfrac{1}{2}
\end{cases}$$

第一个不等式 $\sin x \geq 0$ 对每个 $n \in \mathbb{Z}$ 在以下区间上成立：

$$[2n\pi, \pi + 2n\pi]$$

第二个不等式 $\cos x < 1/2$ 的参考角为 $\arccos(1/2) = \pi/3$，在以下区间上成立：

$$\left(\frac{\pi}{3} + 2n\pi, \frac{5\pi}{3} + 2n\pi\right)$$

为求交集，只需在一个周期内讨论，例如 $[0, 2\pi)$。第一个条件将范围限定在 $[0, \pi]$。在该区间上，第二个条件在 $x > \pi/3$ 处满足。因此一个周期内的交集为 $(\pi/3, \pi]$，通解如下。

$$\frac{\pi}{3} + 2n\pi < x \leq \pi + 2n\pi$$

$$n \in \mathbb{Z}$$
