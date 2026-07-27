---
title: 反正切与反余切
title_en: Arctangent and Arccotangent
source: https://algebrica.org/arctangent-and-arccotangent/
license: CC BY-NC 4.0
tags:
  - arccotangent
  - arctangent
  - inverse-trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: d5ead755a28597fb86c97a74f578bea2fb71247bc03f4ba709842f40ee5441dc
  translator: omp
  updated: "2026-07-24T17:22:46.137Z"
---
## 反正切的定义

在[单位圆](../unit-circle/)中，把一个[角](../angles-and-angular-measure/) $\theta$ 的终边延长到与过 $(1,0)$ 的竖直切线相交，则从 $(1,0)$ 到交点的有向线段表示该角的[正切](../tangent-and-cotangent/)。反正切执行相反的过程：给定一个[实数](../properties-of-real-numbers/) $x$，它返回区间 $\left(-\pi/2, \pi/2\right)$ 内唯一的角 $\theta$，其正切等于 $x$。这一几何关系阐明了正切与反正切如何作为一个函数及其反函数相互关联，其中每一个都反转了角与比值的作用。

![图 1](/assets/trigonometry/svg/arctangent-and-arccotangent-1.zh.svg)

通过把反正切与[函数](../functions/)的概念联系起来，我们可以将正切与反正切之间的关系形式化地表达如下：

$$
\begin{align}
\arctan(x) &= \theta \quad \iff \quad \tan(\theta) = x \\[6pt]
\theta &\in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)
\end{align}
$$

反正切在实数 $x$ 与区间 $\left(-\pi/2, \pi/2\right)$ 内正切等于 $x$ 的唯一角 $\theta$ 之间建立对应。之所以要把正切限制在该区间内，是因为正切函数具有周期性，因此在它的整个定义域上不是单射。把它限制在主值区间 $\left(-\pi/2, \pi/2\right)$ 上，就得到一个严格递增的双射，从而具有定义良好的[反函数](../inverse-function/)。这一互逆关系可由如下恒等式概括：

$$
\tan(\arctan(x)) = x \quad \forall x \in \mathbb{R}
$$

+ 当正切值 $x$ 为正时，对应的角 $\theta$ 位于第一象限。

+ 当 $x$ 为负时，角位于第四象限；当 $x = 0$ 时，角为零。

当 $x$ 无界增长时，对应的角 $\theta$ 趋近于[渐近](../asymptotes/)值：

$$
\begin{align}
\lim_{x \to +\infty} \arctan(x) &= \frac{\pi}{2} \\[6pt]
\lim_{x \to -\infty} \arctan(x) &= -\frac{\pi}{2}
\end{align}
$$

这些值永远不会被取到：正切函数在角 $\pm \pi/2$ 处无定义，因此任何有限实数 $x$ 的反正切都不会达到这些值。它们对应于角的终边变得与 $y$ 轴平行时的方向。

## 反正切的参考值

下面列出了在一些特定输入下 $\arctan(x)$ 的若干常见值，它们在三角学的各种应用中很有用：

$$
\begin{align}
x &\to -\infty  &\quad& \arctan(x) \to -\pi/2 \\[6pt]
x &= -\sqrt{3} &\quad& \arctan(-\sqrt{3}) = -\pi/3 \\[6pt]
x &= -1 &\quad& \arctan(-1) = -\pi/4 \\[6pt]
x &= -1/\sqrt{3} &\quad& \arctan(-1/\sqrt{3}) = -\pi/6 \\[6pt]
x &= 0 &\quad& \arctan(0) = 0 \\[6pt]
x &= 1/\sqrt{3} &\quad& \arctan(1/\sqrt{3}) = \pi/6 \\[6pt]
x &= 1 &\quad& \arctan(1) = \pi/4 \\[6pt]
x &= \sqrt{3} &\quad& \arctan(\sqrt{3}) = \pi/3 \\[6pt]
x &\to +\infty &\quad& \arctan(x) \to \pi/2
\end{align}
$$

## 反正切函数

反正切函数 $f(x) = \arctan(x)$ 为每个实数 $x \in \mathbb{R}$ 指定了唯一的角 $\theta \in \left(-\pi/2, \pi/2\right)$，其正切等于 $x$。它的图像是一条连续、严格递增的曲线，有两条水平渐近线，即 $y = -\pi/2$ 与 $y = \pi/2$。该函数是正切限制在其主值区间 $\left(-\pi/2, \pi/2\right)$ 上的[反函数](../inverse-function/)，在该区间上正切是严格递增且双射的。

+ 定义域：$x \in \mathbb{R}$
+ 值域：$y \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$
+ 反正切是一个[奇函数](../even-and-odd-functions/)，即：

$$\arctan(-x) = -\arctan(x) \quad \forall x \in \mathbb{R}$$

这直接源于正切本身也是奇函数这一事实，并反映了 $\arctan$ 的图像关于原点的对称性。

> 一个[双射函数](../functions/)既是单射又是满射，也就是说，对于每一个 $y \in B$，都存在唯一的 $x \in A$ 使得 $f(x) = y$。

## 反正切的解析表达式

反正切也可以借助[正弦与余弦](../sine-and-cosine/)函数来表示，这彰显了它在单位圆上的几何基础，以及它与其他反三角函数之间的联系。从恒等式出发：

$$
\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)}
$$

考虑一个[直角三角形](../right-triangle-trigonometry/)，其中的角 $\theta$ 满足 $\tan(\theta) = x$，即对边与邻边之比等于 $x$。由于直角三角形的边长不能取负值，以下推导先针对该比值为非负的情形：取邻边等于 $1$、对边等于 $x$，则由[勾股定理](../pythagorean-theorem/)得斜边为 $\sqrt{1 + x^2}$，于是：

$$
\begin{align}
\sin(\theta) &= \frac{x}{\sqrt{1 + x^2}} \\[6pt]
\cos(\theta) &= \frac{1}{\sqrt{1 + x^2}}
\end{align}
$$

将上述关系反过来写，可得反正切的两种表达式：

$$
\begin{align}
\arctan(x) &= \arcsin\!\left(\frac{x}{\sqrt{1 + x^2}}\right)
  && (x \in \mathbb{R}) \\[6pt]
\arctan(x) &= \arccos\!\left(\frac{1}{\sqrt{1 + x^2}}\right)
  && (x \ge 0)
\end{align}
$$

> 这两个等式并非对一切实数都同时成立：第一个等式对所有实数都成立，而第二个等式仅当 $x \ge 0$ 时成立。对于 $x < 0$ 的情形，应借助单位圆或有向坐标来理解，再结合主值区间与符号关系加以扩展。尽管带有上述条件，这种等价关系在微积分和解析推导中仍然常常有用，因为它允许把涉及反正切的表达式改写为[反正弦或反余弦](../arcsine-and-arccosine/)的形式，从而择取更便于计算的那一种。

## 反正切的加法公式

反正切满足一个著名的恒等式，它把和的反正切用各自的反正切表示出来。对任意两个满足 $xy < 1$ 的实数 $x$ 和 $y$，下列恒等式成立：

$$
\arctan(x) + \arctan(y) = \arctan\!\left(\frac{x + y}{1 - xy}\right)
$$

该公式可直接由正切函数的加法公式推出。若 $\alpha = \arctan(x)$ 且 $\beta = \arctan(y)$，则 $\tan(\alpha) = x$ 与 $\tan(\beta) = y$，由正切的加法公式可得：

$$
\tan(\alpha + \beta) = \frac{\tan(\alpha) + \tan(\beta)}{1 - \tan(\alpha)\tan(\beta)} = \frac{x + y}{1 - xy}
$$

对两边取反正切即得该恒等式。条件 $xy < 1$ 保证了 $\alpha + \beta \in \left(-\pi/2, \pi/2\right)$，而这正是反正切的主值区间；当 $xy > 1$ 时，须依 $x$ 的符号添加修正项 $\pm\pi$：两数同为正时加 $\pi$，同为负时减 $\pi$。

一个特别有用的特殊情形是令 $y = 1/x$ 且 $x > 0$，此时 $xy = 1$，即分母为零的边界情形。此时一般公式不能直接套用，但可以注意到 $\arctan(x)$ 与 $\arctan\!\left(1/x\right)$ 互为余角，从而验证结果。恒等式取如下形式：

$$
\arctan(x) + \arctan\!\left(\frac{1}{x}\right) = \frac{\pi}{2} \qquad (x > 0)
$$

这源于如下事实：当 $x > 0$ 时有 $\mathrm{arccot}(x) = \arctan\!\left(1/x\right)$，且互补关系 $\arctan(x) + \mathrm{arccot}(x) = \pi/2$ 对所有正的 $x$ 都成立。

## 反余切的定义

在[单位圆](../unit-circle/)中，把角 $\theta$ 的终边延长到与过 $(0,1)$ 的水平切线相交，则从 $(0,1)$ 到交点的有向线段表示该角的[余切](../tangent-and-cotangent/)。反余切执行相反的过程：给定实数 $x$，它返回区间 $(0, \pi)$ 内余切等于 $x$ 的唯一角 $\theta$。这一几何关系说明了余切与反余切如何作为一个函数及其反函数相互联系，彼此互换角与比值的位置。

![图 2](/assets/trigonometry/svg/arctangent-and-arccotangent-2.zh.svg)

将反余切与[函数](../functions/)的概念相联系，可以把余切与反余切之间的关系形式化表述如下：

$$
\begin{align}
\mathrm{arccot}(x) &= \theta \quad \iff \quad \cot(\theta) = x \\[6pt]
\theta &\in (0, \pi)
\end{align}
$$

反余切在实数 $x$ 与区间 $(0, \pi)$ 内余切等于 $x$ 的唯一角 $\theta$ 之间建立对应。之所以要限制在此区间，是因为余切函数具有周期性，在整个定义域上不是单射；将其限制到 $(0, \pi)$ 上，便得到一个严格递减的双射，从而具有定义良好的[反函数](../inverse-function/)。这一互逆关系可由以下恒等式概括：

$$
\cot(\mathrm{arccot}(x)) = x \quad \text{对所有 } x \in \mathbb{R}
$$

+ 当余切值 $x$ 为正时，相应的角 $\theta$ 位于第一象限。
+ 当 $x$ 为负时，角位于第二象限；当 $x = 0$ 时，角等于 $\frac{\pi}{2}$。

当 $x$ 无界增大时，相应的角 $\theta$ 趋近于渐近值：

$$
\begin{align}
\lim_{x \to +\infty} \mathrm{arccot}(x) &= 0 \\[6pt]
\lim_{x \to -\infty} \mathrm{arccot}(x) &= \pi
\end{align}
$$

这些端点值永远取不到：对任意有限实数 $x$，反余切的值都不会等于 $0$ 或 $\pi$；它们只是输入趋向正无穷或负无穷时的极限角，对应于角的终边变得与 $x$ 轴平行的方向。

## 反余切的参考值

下面列出了一些常见输入下 $\mathrm{arccot}(x)$ 的取值，在三角学的各类应用中很有用：

$$
\begin{align}
x &\to -\infty  &\quad& \mathrm{arccot}(x) \to \pi \\[6pt]
x &= -\sqrt{3} &\quad& \mathrm{arccot}(-\sqrt{3}) = 2\pi/3 \\[6pt]
x &= -1 &\quad& \mathrm{arccot}(-1) = 3\pi/4 \\[6pt]
x &= -1/\sqrt{3} &\quad& \mathrm{arccot}(-1/\sqrt{3}) = 5\pi/6 \\[6pt]
x &= 0 &\quad& \mathrm{arccot}(0) = \pi/2 \\[6pt]
x &= 1/\sqrt{3} &\quad& \mathrm{arccot}(1/\sqrt{3}) = \pi/3 \\[6pt]
x &= 1 &\quad& \mathrm{arccot}(1) = \pi/4 \\[6pt]
x &= \sqrt{3} &\quad& \mathrm{arccot}(\sqrt{3}) = \pi/6 \\[6pt]
x &\to +\infty &\quad& \mathrm{arccot}(x) \to 0
\end{align}
$$

## 反余切函数

反余切函数 $f(x) = \mathrm{arccot}(x)$ 将每个实数 $x \in \mathbb{R}$ 对应到余切等于 $x$ 的唯一角 $\theta \in (0, \pi)$。它的图像是一条连续且严格递减的曲线，有两条水平渐近线，即 $y = 0$ 与 $y = \pi$。该函数是余切限制在其主值定义域 $(0, \pi)$ 上的[反函数](../inverse-function/)；在该定义域上余切严格递减且为双射。

+ 定义域：$x \in \mathbb{R}$
+ 值域：$y \in (0, \pi)$
+ 反余切满足恒等式：

$$\mathrm{arccot}(-x) = \pi - \mathrm{arccot}(x) \quad \forall x \in \mathbb{R}$$

这源于余切为奇函数这一事实，反映出 $\mathrm{arccot}$ 的图像关于点 $\left(0, \pi/2\right)$ 对称。

## 反余切的解析表达

反余切也可以用与反正切、正弦和余弦函数的关系来表达，这体现了它在反三角函数族中的互补性质。从恒等式

$$
\cot(\theta) = \frac{\cos(\theta)}{\sin(\theta)}
$$

出发，可以考察一个直角三角形（此处先考虑输入非负的情形），其中 $\cot(\theta) = x$，即邻边与对边之比等于 $x$。取对边为 $1$、邻边为 $x$，由勾股定理得斜边为 $\sqrt{1 + x^2}$，于是：

$$\sin(\theta) = \frac{1}{\sqrt{1 + x^2}}$$
$$ \cos(\theta) = \frac{x}{\sqrt{1 + x^2}}$$

分别反转上述关系，可得到反余切的两个表达式：

$$
\begin{align}
\mathrm{arccot}(x) &= \arcsin\!\left(\frac{1}{\sqrt{1 + x^2}}\right)
  && (x \ge 0) \\[6pt]
\mathrm{arccot}(x) &= \arccos\!\left(\frac{x}{\sqrt{1 + x^2}}\right)
  && (x \in \mathbb{R})
\end{align}
$$

其中 $\arccos$ 形式对所有实数输入都成立，而 $\arcsin$ 形式仅对非负输入成立；对于负的输入，需要借助主值区间与符号关系另行讨论，不能将 $\arcsin$ 形式作为无条件恒等式使用。

此外，还有两个恒等式将反余切与反正切直接联系起来。对于正的 $x$，有：

$$
\mathrm{arccot}(x) = \arctan\!\left(\frac{1}{x}\right)
$$

这是因为同一角的余切与正切互为倒数。一个对所有 $x \in \mathbb{R}$ 都成立的更一般的恒等式是：

$$
\mathrm{arccot}(x) = \frac{\pi}{2} - \arctan(x)
$$

它由正切与余切的互补关系得出：对任意角 $\theta$，有 $\cot(\theta) = \tan\!\left(\frac{\pi}{2} - \theta\right)$，对两边取反函数便直接得到该恒等式。
