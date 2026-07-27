---
title: 直角三角形三角学
title_en: Right Triangle Trigonometry
source: https://algebrica.org/right-triangle-trigonometry/
license: CC BY-NC 4.0
tags:
  - right-triangle
  - soh-cah-toa
  - trigonometry
translation:
  status: current
  source_hash: a77f45b3571e67a44becfd422e0ed1e2faf78196b48fe91a2c2270475de426cd
  translator: omp
  updated: "2026-07-25T08:26:45.137Z"
---
## 直角三角形各边的认识

三角学研究三角形[角](../angles-and-angular-measure/)与边之间的关系，而直角三角形通常是引入基本三角函数的地方：[正弦](../sine-and-cosine/)、[余弦](../sine-and-cosine/)和[正切](../tangent-and-cotangent/)。直角三角形有一个内角恰好为 $90^\circ$。直角处相交的两条边称为直角边，第三条边与直角相对，称为斜边，它总是三条边中最长的一条。

在三角形内固定一个锐角 $\theta$。斜边不依赖于 $\theta$ 的选取，但两条直角边却依赖于它。一条与 $\theta$ 相对，另一条与它相邻。三角函数正是源于这种不对称性，表现为成对边之间的比值。

![图 1](/assets/trigonometry/svg/right-triangle-trigonometry-1.zh.svg)

+ 斜边 $h$：最长边，与直角相对。
+ 对边 $y$：与 $\theta$ 相对的直角边。
+ 邻边 $x$：与斜边一起围成 $\theta$ 的直角边。

> 「对边」和「邻边」这两个名称并非两条直角边的固有属性，而是描述每条直角边相对于所选角的位置。将注意力从 $\theta$ 转向另一个锐角 $90^\circ - \theta$ 时，两个角色互换，因为与其中一个角相对的直角边与另一个角相邻。斜边由其相对于直角而非 $\theta$ 的位置确定，因此不受此选择的影响。

- - -

这些比值仅取决于 $\theta$，而与三角形的大小无关。任何两个共享锐角 $\theta$ 的直角三角形都具有相同的内角集合 $90^\circ$、$\theta$ 和 $90^\circ - \theta$，因此彼此相似。

相似性保持对应边之间的比值不变，因此与 $\theta$ 相关的六个比值在每一个含有该角的直角三角形中取相同的值。正因如此，三角函数作为仅依赖于角的函数是良定义的。

## SOH-CAH-TOA 方法

将一个直角三角形置于[单位圆](../unit-circle/)内，使锐角 $\theta$ 位于笛卡尔坐标系的原点，斜边从原点延伸到圆上的一点。在这种配置下，斜边的长度为 $h = 1$，两条直角边恰好与该点的水平坐标和垂直坐标重合。

在此处，定义三角函数的比值呈现出尤为清晰的形式，因为除以 $h = 1$ 后，坐标本身就成为正弦和余弦的值。

![图 2](/assets/trigonometry/svg/right-triangle-trigonometry-2.zh.svg)

SOH-CAH-TOA 这个名称是一个助记词，将三个基本三角函数编码为边的比值：[正弦](../sine-and-cosine/)等于对边比斜边，[余弦](../sine-and-cosine/)等于邻边比斜边，[正切](../tangent-and-cotangent/)等于对边比邻边。从左到右读每个三元组，左边给出函数，右边给出构成比值的两条边。三个倒数函数——[余割](../secant-and-cosecant/)、[正割](../secant-and-cosecant/)和[余切](../tangent-and-cotangent/)——通过取各比值的倒数得到。

SOH 组给出角的正弦及其倒数余割：

$$
\begin{align}
\sin(\theta) &= \frac{y}{h} \\[6pt]
\csc(\theta) &= \frac{h}{y}
\end{align}
$$

> 重排 SOH 关系可得 $y = h \sin(\theta)$，当角和斜边已知时，它给出对边的长度。CAH 和 TOA 关系可用同样的方式重排，从其余两条信息中恢复任意缺失的边。

- - -

CAH 组给出余弦及其倒数正割：

$$
\begin{align}
\cos(\theta) &= \frac{x}{h} \\[6pt]
\sec(\theta) &= \frac{h}{x}
\end{align}
$$

TOA 组给出正切及其倒数余切：

$$
\begin{align}
\tan(\theta) &= \frac{y}{x} \\[6pt]
\cot(\theta) &= \frac{x}{y}
\end{align}
$$

正切也可以直接用正弦和余弦表示，因为 $y/x = (y/h)/(x/h)$。这给出恒等式 $\tan(\theta) = \sin(\theta)/\cos(\theta)$，取倒数得 $\cot(\theta) = \cos(\theta)/\sin(\theta)$。在锐角范围内各分母均不为零，因此六个三角函数并非彼此独立：仅凭正弦和余弦即可确定全部。

## 取值范围与余角

锐角 $\theta$ 在开区间 $(0^\circ, 90^\circ)$ 内变化。在任何直角三角形中，斜边都严格长于任一直角边，因此 SOH 和 CAH 的比值严格介于零与一之间：

$$0 < \sin(\theta) < 1, \qquad 0 < \cos(\theta) < 1$$

正切则没有这样的上界。两条直角边之间的比值 $y/x$ 当对边趋于零时可以任意小，当对边相对于邻边增大时可以任意大。因此，当 $\theta$ 在其容许区间内变化时，正切是一个取值覆盖整个半直线 $(0, +\infty)$ 的正量。任何正实数都可以表示为某个锐角的正切值。

$\theta$ 与其余角之间的对称性将[函数](../functions/)成对组织。直角三角形的两个锐角之和为 $90^\circ$，因此如果其中一个为 $\theta$，另一个就是 $90^\circ - \theta$。

![图 3][svg/right-triangle-trigonometry–3.svg]

[svg/right-triangle-trigonometry–3.svg]: /assets/trigonometry/svg/right-triangle-trigonometry–3.zh.svg

当视角从一个角转向另一个角时，两条直角边交换各自的角色。与 $\theta$ 相对的边就是与 $90^\circ - \theta$ 相邻的边，反之亦然。斜边保持不变。从余角读取 SOH-CAH-TOA 比值，得到余函数恒等式：

$$
\begin{align}
\sin(90^\circ - \theta) &= \cos(\theta) \\[6pt]
\tan(90^\circ - \theta) &= \cot(\theta) \\[6pt]
\sec(90^\circ - \theta) &= \csc(\theta)
\end{align}
$$

余弦、余切和余割中的前缀「余」（co）记录了这一关系。$\theta$ 的每个余函数就是相应的基本函数在余角处的取值。传统三角函数值表利用这些恒等式将篇幅减半，只列出 $\theta$ 在 $0^\circ$ 与 $45^\circ$ 之间的值，其余通过互补关系恢复。

## 勾股恒等式

同一角的正弦与余弦满足[勾股恒等式](../pythagorean-identity/)，在任意以 $\theta$ 为锐角的直角三角形中，其形式为：

$$
\sin^2(\theta) + \cos^2(\theta) = 1
$$

该恒等式是[勾股定理](../pythagorean-theorem/)的直接推论。从 $x^2 + y^2 = h^2$ 出发，两边同时除以 $h^2$，方程变为：

$$
\left(\frac{y}{h}\right)^2 + \left(\frac{x}{h}\right)^2 = 1
$$

由 SOH 与 CAH 关系（即「正弦等于对边与斜边之比」「余弦等于邻边与斜边之比」），左侧两个比值正是 $\sin(\theta)$ 与 $\cos(\theta)$，由此得到标准形式的恒等式。同样的结论也可由[单位圆](../unit-circle/)从几何上得出。

圆上一点的坐标为 $(\cos(\theta), \sin(\theta))$，圆的方程 $x^2 + y^2 =1$ 正是用该坐标改写后的[勾股恒等式](../pythagorean-identity/)。该恒等式的一个直接推论是：对每个锐角 $\theta$，正弦与余弦之和大于一。把和平方并展开，得到：

$$
\begin{align}
(\sin(\theta) + \cos(\theta))^2
&= \sin^2(\theta) + \cos^2(\theta) + 2\sin(\theta)\cos(\theta) \\[6pt]
&= 1 + 2\sin(\theta)\cos(\theta)
\end{align}
$$

当 $\theta$ 为锐角时，$\sin(\theta)$ 与 $\cos(\theta)$ 均为正，故 $2\sin(\theta)\cos(\theta) > 0$，右侧严格大于一。两项为正，因此可开平方，得到：

$$\sin(\theta) + \cos(\theta) > 1$$

## 30°、45°、60° 的精确值

除少数经典角外，大多数锐角的三角比值通常没有像 30°、45°、60° 那样简洁的根式表达，实际计算时常用数值近似。少数角是例外，其精确值在计算中出现得足够频繁，通常需要熟记。

三个经典情形为 $30^\circ$、$45^\circ$、$60^\circ$，其值源自等边三角形和正方形的对称性。

取一个边长为 $2$ 的等边三角形，其三个角均为 $60^\circ$。从一个顶点向对边中点作垂线，把三角形分成两个全等的直角三角形。

![图 4](/assets/trigonometry/svg/right-triangle-trigonometry–4.zh.svg)

每个直角三角形的斜边长为 $2$，较短直角边长为 $1$（等于原边长的一半），第三条直角边的长度可由[勾股定理](../pythagorean-theorem/)得出：

$$x^2 + 1^2 = 2^2 \implies x = \sqrt{3}$$

该直角三角形的三个角分别为：顶点处的 $30^\circ$、底端的 $60^\circ$、垂足处的 $90^\circ$。两个锐角的 SOH-CAH-TOA 比值（其中 TOA 表示正切等于对边与邻边之比）可由边长直接读出：

$$
\begin{align}
\sin(30^\circ) &= \frac{1}{2} \qquad \cos(30^\circ) = \frac{\sqrt{3}}{2} \qquad \tan(30^\circ) = \frac{1}{\sqrt{3}} \\[6pt]
\sin(60^\circ) &= \frac{\sqrt{3}}{2} \qquad \cos(60^\circ) = \frac{1}{2} \qquad \tan(60^\circ) = \sqrt{3}
\end{align}
$$

倒数随之可得：$\csc(30^\circ) = 2$、$\sec(30^\circ) = 2/\sqrt{3}$、$\cot(30^\circ) = \sqrt{3}$，以及 $\csc(60^\circ) = 2/\sqrt{3}$、$\sec(60^\circ) = 2$、$\cot(60^\circ) = 1/\sqrt{3}$。余函数恒等式把 $30^\circ$ 处的每个值与 $60^\circ$ 处的对应值联系起来，这是记忆该表的一种方式。

$45^\circ$ 的构造以正方形代替等边三角形。画一个单位正方形，并描出其中一条对角线。对角线把正方形切成两个全等的等腰直角三角形。

每个三角形有两条长为 $1$ 的直角边和一条长为 $\sqrt{2}$ 的斜边（仍由勾股定理），以及两个 $45^\circ$ 的锐角。SOH-CAH-TOA 比值变为：

$$\sin(45^\circ) = \cos(45^\circ) = \frac{1}{\sqrt{2}}, \qquad \tan(45^\circ) = 1$$

倒数分别为 $\csc(45^\circ) = \sec(45^\circ) = \sqrt{2}$ 与 $\cot(45^\circ) = 1$。

比值 $1/\sqrt{2}$ 与 $1/\sqrt{3}$ 有时以有理化形式 $\sqrt{2}/2$ 与 $\sqrt{3}/3$ 给出，方法是用分母中出现的根式同时乘分子与分母。

有理化形式将 $\sqrt{2}$ 或 $\sqrt{3}$ 写在分子上，使分母变为整数，从而避开 $1$ 除以无理数的写法；这种形式便于传统代数书写和某些符号运算。

另一方面，原始形式使基本函数与倒数函数之间的倒数关系一目了然：$\cos(45^\circ) = 1/\sqrt{2}$ 与 $\sec(45^\circ) = \sqrt{2}$ 作为一对清晰的倒数并列出现，而有理化版本则部分掩盖了这一结构。两种表达表示同一个数，计算时任选其一皆可。

## 单位圆上的几何解释

前面引入的单位圆将正弦和余弦读作圆上某点的坐标。一旦把圆的切线引入画面，其余四个函数也有类似的几何解读。

将单位圆置于原点 $O$，在第一象限圆上取定点 $B$，并令 $\theta$ 为半径 $OB$ 与正 $x$ 轴所成的角。从 $B$ 向 $x$ 轴作垂线，垂足为 $A$。直角三角形 $OAB$ 的斜边为 $OB = 1$，水平直角边为 $OA$，铅垂直角边为 $AB$，由 SOH-CAH-TOA 比值（正弦为对边比斜边、余弦为邻边比斜边、正切为对边比邻边）可得：

$$OA = \cos(\theta) \qquad AB = \sin(\theta)$$

因此 $B$ 的两个坐标分别是 $\theta$ 的余弦和正弦。

![图 5](/assets/trigonometry/svg/right-triangle-trigonometry–5.zh.svg)

现在在 $B$ 处作圆的切线。切线与半径 $OB$ 垂直，因此把切线延伸到坐标轴之一所构成的任意直角三角形，其直角顶点都在 $B$。设 $D$ 为切线与正 $x$ 轴的交点。在直角三角形 $OBD$ 中，$O$ 处的角为 $\theta$，$B$ 处的角为 $90^\circ$，边 $OB = 1$ 与 $O$ 处的角相邻。其余两边为：

$$BD = \tan(\theta) \qquad OD = \sec(\theta)$$

$\theta$ 的正切表现为沿切线从切点 $B$ 到 $x$ 轴的线段长度。$\theta$ 的正割表现为从圆心 $O$ 到同一交点的距离。

设 $C$ 为切线与正 $y$ 轴的交点。在直角三角形 $OBC$ 中，由于 $OC$ 沿 $y$ 轴，$O$ 处的角为 $\theta$ 的余角 $90^\circ - \theta$，$B$ 处的角仍为 $90^\circ$。由余函数恒等式可得，其余两边为：

$$BC = \cot(\theta) \qquad OC = \csc(\theta)$$

至此六个三角函数全部表现为与单位圆及其在 $B$ 处的切线相关的线段长度。坐标线段 $OA$ 与 $AB$ 给出余弦和正弦；沿切线的线段 $BD$ 与 $BC$ 给出正切和余切；从圆心到切线与坐标轴交点的距离 $OD$ 与 $OC$ 给出正割和余割。

## 解直角三角形

直角三角形可由其直角之外的任意两个元素唯一确定，前提是这两个元素中至少有一个是边。已知一个锐角即可确定三角形的相似类，再知一边即可确定尺度；或者已知两边，便可由边长比确定锐角并确定整个三角形。其余元素随之由 SOH-CAH-TOA 比值与勾股恒等式联立求得。三种情形覆盖了所有实际情形。

+ 已知两边。第三边由勾股定理求出，两个锐角由 SOH-CAH-TOA 中的任一比值求出。
+ 已知一边和一锐角。另两边由 SOH-CAH-TOA 求出，第二个锐角为其补角 $90^\circ - \theta$。
+ 已知两角。此时三角形仅相似类被确定，需要额外的信息（通常是某条边的长度）才能确定其大小。

在实际应用中，最常见的是已知一边和一锐角的情形，因为在涉及高度、距离和斜率的问题中，角度通常可直接测得，而一条长度由问题设定给出。下例即说明此情形。

## 示例

考虑一个直角三角形，其中锐角 $\theta = 30^\circ$ 的对边长度为 $y = 5$，假设我们要求出邻边 $x$ 的长度。

两条直角边与角 $\theta$ 由 TOA 关系联系起来，该关系把角的正切表示为对边与邻边之比：

$$
\tan(\theta) = \frac{y}{x}
$$

代入已知数值后，方程变为：

$$
\tan(30^\circ) = \frac{5}{x}
$$

由于未知量 $x$ 出现在分母中，我们在两边同乘 $x$，将其移到分子，再除以 $\tan(30^\circ)$，使其单独留在左边：

$$
x = \frac{5}{\tan(30^\circ)}
$$

$30^\circ$ 的正切等于 $1/\sqrt{3}$，因此表达式化简为 $x = 5\sqrt{3}$，约等于 $8.66$。所以邻边的长度约为 $8.66$ 个单位。
