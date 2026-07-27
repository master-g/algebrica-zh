---
title: 反正弦与反余弦
title_en: Arcsine and Arccosine
source: https://algebrica.org/arcsine-and-arccosine/
license: CC BY-NC 4.0
tags:
  - arccosine
  - arcsine
  - inverse-trigonometric-functions
  - trigonometry
translation:
  status: current
  source_hash: 9166aadf256497d17c5b9f4869719ed009a476508a74fa6aeafa6d21250502dc
  translator: omp
  updated: "2026-07-24T16:59:51.270Z"
---
## 反正弦

反正弦是[正弦](../sine-and-cosine/)函数在主值区间上的反函数。给定一个数 $x \in [-1, 1]$（即正弦函数所能取到的值），$\arcsin(x)$ 定义为区间 $[-\pi/2, \pi/2]$ 中正弦值等于 $x$ 的那个[角](../angles-and-angular-measure/) $\theta$。一般而言，[反函数](../inverse-function/)逆转原函数的运算：只有当函数在其定义域与陪域之间为双射时，反函数才是良定义的。若函数 $f$ 将值 $x$ 映射到值 $y$，则其反函数 $f^{-1}$ 将 $y$ 映回 $x$。正弦函数把一个角映射为 $[-1, 1]$ 中的实数，而反正弦做相反的运算，返回正弦值等于给定值的那个角。这一互逆关系由如下恒等式表达：

$$
\sin(\arcsin(x)) = x \quad \forall x \in [-1, 1]
$$

![图 1](/assets/trigonometry/svg/arcsine-and-arccosine-1.zh.svg)

形式上，反正弦的定义如下：

$$
\arcsin(x) = \theta \quad \iff \quad \sin(\theta) = x \quad \text{且} \quad \theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]
$$

将正弦函数的定义域限制在区间 $\left[-\pi/2, \pi/2 \right]$ 后，所得函数严格递增，并且从该区间到 $[-1,1]$ 为双射；反正弦正是这一限制函数的反函数。这一限制是必要的，因为正弦函数在其整个[定义域](../determining-the-domain-of-a-function/)上不是单射，若不加限制，反函数便不是良定义的。

- - -

例如，计算 $\arcsin(1/2)$。我们需要找角 $\theta \in \left[-\pi/2, \pi/2\right]$，使得 $\sin(\theta) = 1/2$。由正弦函数的标准值可知：

$$
\sin\!\left(\frac{\pi}{6}\right) = \frac{1}{2}
$$

由于 $\frac{\pi}{6}$ 属于区间 $\left[-\pi/2, \pi/2\right]$，满足定义所需的全部条件，故得：

$$\arcsin\!\left(\frac{1}{2}\right) = \frac{\pi}{6}$$

## 反正弦的常用值

以下表格列出 $\arcsin(x)$ 在最常见输入下的标准值：

$$
\begin{align}
x &= -1          &\quad& \arcsin(-1) = -\pi/2 \\[6pt]
x &= -\sqrt{3}/2 &\quad& \arcsin(-\sqrt{3}/2) = -\pi/3 \\[6pt]
x &= -1/2        &\quad& \arcsin(-1/2) = -\pi/6 \\[6pt]
x &= 0           &\quad& \arcsin(0) = 0 \\[6pt]
x &= 1/2         &\quad& \arcsin(1/2) = \pi/6 \\[6pt]
x &= \sqrt{3}/2  &\quad& \arcsin(\sqrt{3}/2) = \pi/3 \\[6pt]
x &= 1           &\quad& \arcsin(1) = \pi/2
\end{align}
$$

## 反余弦

反余弦是[余弦](../sine-and-cosine/)函数在主值区间上的反函数。给定一个数 $x \in [-1, 1]$（即余弦函数所能取到的值），$\arccos(x)$ 定义为区间 $[0, \pi]$ 中余弦值等于 $x$ 的那个角 $\theta$。与反正弦类似，将余弦函数的定义域限制在 $[0, \pi]$ 是必要的：余弦函数在其整个定义域上不是单射，经此限制后在该区间上严格单调且为双射，从而保证反函数良定义。相应的恒等式为：

$$
\cos(\arccos(x)) = x \quad \text{对所有 } x \in [-1, 1]
$$

![图 2](/assets/trigonometry/svg/arcsine-and-arccosine-2.zh.svg)

形式上，反余弦的定义如下：

$$
\arccos(x) = \theta \quad \text{当且仅当} \quad \cos(\theta) = x \quad \text{且} \quad \theta \in [0, \pi]
$$

## 反余弦的常用值

以下表格列出 $\arccos(x)$ 在最常见输入下的标准值：

$$
\begin{align}
x &= -1        &\quad& \arccos(-1) = \pi \\[6pt]
x &= -\sqrt{3}/2 &\quad& \arccos(-\sqrt{3}/2) = 5\pi/6 \\[6pt]
x &= -1/2      &\quad& \arccos(-1/2) = 2\pi/3 \\[6pt]
x &= 0         &\quad& \arccos(0) = \pi/2 \\[6pt]
x &= 1/2       &\quad& \arccos(1/2) = \pi/3 \\[6pt]
x &= \sqrt{3}/2  &\quad& \arccos(\sqrt{3}/2) = \pi/6 \\[6pt]
x &= 1         &\quad& \arccos(1) = 0
\end{align}
$$

## 反正弦与反余弦的性质

反正弦与反余弦函数之间有如下恒等式，它对一切 $x \in [-1, 1]$ 成立：

$$
\arcsin(x) + \arccos(x) = \frac{\pi}{2}
$$

这一恒等式反映了两函数的互补性：由于互余角的正弦与余弦相等，正弦值为 $x$ 的角与余弦值为 $x$ 的角之和恒为 $\pi/2$。

第二个值得注意的性质涉及函数与其反函数的复合。一个方向是直接的：对 $x\in[-1,1]$，先取反正弦再取正弦，或先取反余弦再取余弦，都会恢复原来的值。形式上：

$$
\sin(\arcsin(x)) = x \quad \forall x \in [-1, 1]
$$

$$
\cos(\arccos(x)) = x \quad \forall x \in [-1, 1]
$$

反方向的复合——即先取正弦再取反正弦，或先取余弦再取反余弦——则一般不能恢复原角。只有当角本身位于相应的主值区间时才能恢复原角。对任意角 $\theta$，有：

$$
\arcsin(\sin(\theta)) = \theta \quad \iff  \quad \theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]
$$

$$
\arccos(\cos(\theta)) = \theta \quad \iff \quad \theta \in [0, \pi]
$$

> 在主值区间之外，反正弦或反余弦返回主值区间内与原角具有相同正弦值或余弦值的唯一角，而不一定返回原角 $\theta$ 本身。这种不对称性是为保证反函数良定义而施加定义域限制的直接结果，也是真正的反函数与单纯的左逆或右逆的区别所在。

## 反正弦与反余弦函数

将正弦函数的定义域限制在主值区间 $[-\pi/2,\pi/2]$ 后，它从该区间到 $[-1,1]$ 严格递增且为双射，从而具有反函数；反正弦函数 $f(x) = \arcsin(x)$ 即为这一限制函数的反函数，它把每个值 $x \in [-1, 1]$ 对应到正弦等于 $x$ 的角 $\theta \in \left[-\pi/2, \pi/2\right]$。其图像是一条连续的严格递增曲线。

![图 3](/assets/trigonometry/svg/arcsine-and-arccosine-3.zh.svg)

+ [定义域](../determining-the-domain-of-a-function/)：$x \in [-1, 1]$
+ 值域：$y \in [-\pi/2, \pi/2]$
+ 周期性：反正弦函数不是周期函数。
+ 奇偶性：该函数为[奇函数](../even-and-odd-functions/)，满足 $\arcsin(-x) = -\arcsin(x)$。

将余弦函数的定义域限制在主值区间 $[0,\pi]$ 后，它从该区间到 $[-1,1]$ 严格递减且为双射，从而具有反函数；反余弦函数 $f(x) = \arccos(x)$ 即为这一限制函数的反函数，它把每个值 $x \in [-1, 1]$ 对应到余弦等于 $x$ 的角 $\theta \in [0, \pi]$。其图像是一条连续的严格递减曲线。

![图 4](/assets/trigonometry/svg/arcsine-and-arccosine-4.zh.svg)

+ 定义域：$x \in [-1, 1]$
+ 值域：$y \in [0, \pi]$
+ 周期性：反余弦函数不是周期函数。
+ 奇偶性：该函数既非奇函数也非偶函数，但满足恒等式 $\arccos(-x) = \pi - \arccos(x)$。

> 关于[反正弦函数](../arcsine-function/)与[反余弦函数](../arccosine-function/)的详细讨论，包括特殊值、极限、导数与积分，见各自条目。
