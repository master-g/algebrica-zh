---
title: 正弦定理
title_en: The Law of Sines
source: https://algebrica.org/law-of-sines/
license: CC BY-NC 4.0
tags:
  - law-of-sines
  - triangle
  - trigonometry
translation:
  status: current
  source_hash: 268b37e293542477dc46d26d912264e6e7e05e5ab2da8b456edad45cf1590fa6
  translator: omp
  updated: "2026-07-25T11:06:28.449Z"
---
## 定义

正弦定理指出，在任意三角形中，一条边的长度与其所对[角](../angles-and-angular-measure/)的[正弦](../sine-and-cosine/)之比，对三条边而言都相同。对于各边 $a, b, c$ 分别对角 $\alpha, \beta, \gamma$ 的三角形，此公共比值等于其外接[圆](../circumference/)半径 $r$ 的两倍：

$$
\frac{a}{\sin \alpha} = \frac{b}{\sin \beta} = \frac{c}{\sin \gamma} = 2r
$$

$2r$ 即外接圆的直径，也就是唯一通过三角形三个顶点的圆。

![图 1](/assets/trigonometry/svg/the-law-of-sines-1.zh.svg)

正弦定理在已知三角形某些边或角、而需要确定其余边角时尤为有用，因为每一个未知量都可通过简单的比例关系求得。

为证明这三个比值相等，考虑从边 $c$ 所对顶点向边 $c$ 本身所作的高 $h$。将正弦函数的[直角三角形定义](../right-triangle-trigonometry/)应用于角 $\alpha$ 与 $\beta$，可得 $\sin(\alpha) = h/b$ 与 $\sin(\beta) = h/a$，由此推出 $b\sin(\alpha) = h = a\sin(\beta)$。两边同除以 $\sin(\alpha)\sin(\beta)$，即得：

$$
\frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)}
$$

对边 $a$ 所对顶点作高，进行同样的论证，可得 $\sin(\beta) = h'/c$ 与 $\sin(\gamma) = h'/b$，因此：

$$
\frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)}
$$

由于第一个比值等于第二个，第二个又等于第三个，故三者相等。

为说明该公共值为 $2r$，注意当三角形内接于半径为 $r$ 的外接圆时，由圆周角定理，长度为 $a$ 的弦所对弧的度数为 $2\alpha$。弦与圆半径的关系给出 $a = 2r\sin(\alpha)$，由此得 $a/\sin(\alpha) = 2r$。对另两条边由对称性同理可得。

> 正弦定理常与[余弦定理](../law-of-cosines/)配合使用；当已知条件涉及边和角的不同组合时，余弦定理提供了互补的解三角形方法。

## 示例 1

考虑一个三角形，其中 $\alpha = 40^\circ$、$\beta = 65^\circ$ 且 $a = 10$。目标是求出边 $b$ 的长度，它与角 $\beta$ 相对。由于任意三角形的内角之和为 $180^\circ$，第三个角为 $\gamma = 180^\circ - 40^\circ - 65^\circ = 75^\circ$。将正弦定理应用于涉及 $a$ 与 $b$ 的一对量，得：

$$
\frac{10}{\sin 40^\circ} = \frac{b}{\sin 65^\circ}
$$

两边同乘 $\sin 65^\circ$，即可解出 $b$：

$$
b = \frac{10 \cdot \sin 65^\circ}{\sin 40^\circ} = \frac{10 \cdot 0.9063}{0.6428} \approx 14.1
$$

边 $b$ 的长度约为 $14.1$ 单位。

## SSA 多解情形

在「边-边-角」（SSA）配置中，已知两边 $a$ 与 $b$ 以及其中一边的对角 $\alpha$，正弦定理未必能唯一确定一个三角形。从比例式中解出 $\sin(\beta)$，得：

$$
\sin(\beta) = \frac{b \sin(\alpha)}{a}
$$

由于 [诱导公式](../reduction-formulas-and-reference-angles/) $\sin(\theta) = \sin(180^\circ - \theta)$ 对一切 $\theta \in (0^\circ, 180^\circ)$ 成立，该值可能对应两个不同的角 $\beta$ 与 $180^\circ - \beta$。这两个值中究竟无解、唯一解还是两解，取决于 $a$、$b$ 以及由 $c$ 所对顶点引出的高的相对大小。因此，$\beta$ 的每个候选值都必须逐一检验，以确保所得角之和小于 $180^\circ$，且各边均为正。

## 示例 2

考虑一个三角形，其中 $\alpha = 35^\circ$、$a = 7$ 且 $b = 10$。目标是求出角 $\beta$ 的所有可能取值，并对每一取值求出对应的三角形。应用正弦定理解出 $\sin(\beta)$，得：

$$
\begin{align}
\sin(\beta) &= \frac{b \sin(\alpha)}{a} \\[6pt]
&= \frac{10 \cdot \sin 35^\circ}{7} \\[6pt]
&= \frac{10 \cdot 0.5736}{7} \\[6pt]
&\approx 0.8194
\end{align}
$$

由于 $0 < 0.8194 < 1$，方程 $\sin(\beta) = 0.8194$ 在 $(0^\circ, 180^\circ)$ 上有两解，分别由 [反正弦](../arcsine-and-arccosine/) 及其补角给出：

$$
\begin{align}
\beta_1 &= \arcsin(0.8194) \approx 55.02^\circ \\[6pt]
\beta_2 &= 180^\circ - \beta_1 \approx 124.98^\circ
\end{align}
$$

每个值都必须检验三内角之和等于 $180^\circ$ 这一约束条件。对 $\beta_1 \approx 55.02^\circ$，第三角为：

$$\gamma_1 = 180^\circ - 35^\circ - \beta_1 \approx 89.98^\circ$$

该角为正，故第一个三角形有效。对 $\beta_2 \approx 124.98^\circ$，第三角为：

$$\gamma_2 = 180^\circ - 35^\circ - \beta_2 \approx 20.02^\circ$$

此情形下该角亦为正，故第二个三角形同样有效。两个三角形并不全等：第一个的三个角约为 $35^\circ, 55.02^\circ, 89.98^\circ$，第二个的三个角约为 $35^\circ, 124.98^\circ, 20.02^\circ$。

二者均与给定数据 $\alpha = 35^\circ$、$a = 7$、$b = 10$ 一致，证实了两个不同的三角形可以满足相同的初始条件。

## SSA 多解情形的几何判据

对 SSA 多解情形的代数分析，可辅以一个几何判据，使得在施行任何计算之前便能确定合法三角形的个数。设给定角 $\alpha$ 与两条边 $a$、$b$，则量 $b \sin(\alpha)$ 恰等于从边 $c$ 所对顶点引出的三角形之高。将此高与 $a$ 之长度作比较，便足以预测有多少个三角形与给定数据相容。

根据 $a$ 相对于 $b \sin(\alpha)$ 与 $b$ 的大小关系，会出现四种情形（以下讨论假定已知角为锐角；若该角为钝角，则其对边必须长于邻边，且至多存在一个三角形）：

+ 当 $a < b \sin(\alpha)$ 时，边 $a$ 过短，无法从角 $\alpha$ 的顶点抵达底边，三角形不存在。
+ 当 $a = b \sin(\alpha)$ 时，边 $a$ 恰与高本身重合，产生唯一一个直角三角形，其直角位于边 $b$ 所对的顶点（即 $\beta=90^\circ$）。
+ 当 $b \sin(\alpha) < a < b$ 时，边 $a$ 在底边上触及两个不同点，故有两个不全等的三角形满足给定数据。
+ 当 $a \geq b$ 时，两个可能位置中仅有一个给出几何上相容的三角形，构型仍被唯一确定。

> 表达式 $b \sin(\alpha)$ 应理解为自角 $\alpha$ 的顶点向包含边 $c$ 的直线所作之高。按此解读，判据便易于记忆，因为问题归结为 $a$ 是不及此高、与之相等、介于其与 $b$ 之间，还是超过 $b$。

- - -

该判据与上文讨论的第二个示例相符。取 $\alpha = 35^\circ$ 与 $b = 10$ 时，高为：

$$
b \sin(\alpha) = 10 \cdot \sin 35^\circ \approx 5.74
$$

由于 $a = 7$ 满足 $5.74 < 7 < 10$，该构型落入两个三角形并存的值域，这正是代数分析所得之结果。

## 正切定理

正弦定理有一个相伴恒等式，称为正切定理，它把两边之差与和同对角之半差与半和联系起来。对于边 $a, b$ 分别对角 $\alpha, \beta$ 的三角形，该恒等式为：

$$
\frac{a-b}{a+b} = \frac{\tan\left(\frac{\alpha - \beta}{2}\right)}{\tan\left(\frac{\alpha + \beta}{2}\right)}
$$

其推导完全依赖正弦定理。由比例 $a = 2r\sin(\alpha)$ 与 $b = 2r\sin(\beta)$，左端比值中因子 $2r$ 相消，得到：

$$
\frac{a-b}{a+b} = \frac{\sin(\alpha) - \sin(\beta)}{\sin(\alpha) + \sin(\beta)}
$$

对分子与分母应用[和差化积恒等式](../trigonometric-identities/) $\sin(\alpha) \pm \sin(\beta) = 2\sin\left(\frac{\alpha \pm \beta}{2}\right)\cos\left(\frac{\alpha \mp \beta}{2}\right)$，得：

$$
\frac{\sin(\alpha) - \sin(\beta)}{\sin(\alpha) + \sin(\beta)} = \frac{2\cos\left(\frac{\alpha+\beta}{2}\right)\sin\left(\frac{\alpha-\beta}{2}\right)}{2\sin\left(\frac{\alpha+\beta}{2}\right)\cos\left(\frac{\alpha-\beta}{2}\right)} = \frac{\tan\left(\frac{\alpha-\beta}{2}\right)}{\tan\left(\frac{\alpha+\beta}{2}\right)}
$$

当两边及其夹角 $\gamma$ 已知时，此恒等式尤为有用。此时和 $\alpha + \beta = 180^\circ - \gamma$ 立即可定，而半差 $(\alpha - \beta)/2$ 可由上式求出。合并两值，便得 $\alpha$ 与 $\beta$，其间无需借助反正弦或反余弦。

## 球面推广

正弦定理可推广到球面上的三角形，此时边为大圆弧而非直线段。对于单位球面上弧长为 $a, b, c$、对角为 $\alpha, \beta, \gamma$ 的球面三角形，球面正弦定理为：

$$
\frac{\sin(a)}{\sin(\alpha)} = \frac{\sin(b)}{\sin(\beta)} = \frac{\sin(c)}{\sin(\gamma)}
$$

其与平面版本的结构性差异在于边所扮演的角色：在欧氏情形中，每条边以线性方式进入比例，而在球面上则以其正弦进入。两种表述在小三角形的极限下吻合，因为当 $x$ 接近 $0$ 时 $\sin(x) \approx x$，且充分小的球面三角形在几何上与平面三角形无从区分。

> 球面情形下三个比值的公共值并不像平面情形那样等于外接圆的直径。在半径为 $R$ 的球面上，应使用各边所对应的中心角，即把 $\sin(a)$、$\sin(b)$、$\sin(c)$ 分别替换为 $\sin(a/R)$、$\sin(b/R)$、$\sin(c/R)$。公共值由具体球面三角形决定，并非只由球半径决定。
