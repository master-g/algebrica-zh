---
title: 余弦定理
title_en: The Law of Cosines
source: https://algebrica.org/law-of-cosines/
license: CC BY-NC 4.0
tags:
  - law-of-cosines
  - triangle
  - trigonometry
translation:
  status: current
  source_hash: b72e4923b9de10820ddebce62d23e59bd2ca6d4d3a61c47cf115d9c24e9b5252
  translator: omp
  updated: "2026-07-25T11:19:45.512Z"
---
## 定义

余弦定理通过三角形中某条边的[对角](../angles-and-angular-measure/)将三角形各边联系起来。它可以看作[勾股定理](../pythagorean-theorem/)的推广，不仅对直角三角形成立，对任意三角形都成立：一条边的平方等于另外两条边的平方和，减去一个用于刻画这两条边之间夹角张开程度的修正项。对于边长为 $a, b, c$、且边 $c$ 的对角为 $\theta$ 的三角形，余弦定理为：

$$
c^2 = a^2 + b^2 - 2ab \cos(\theta)
$$

当 $\theta = 90^\circ$ 时，[余弦](../sine-and-cosine/)项消失，公式恰好退化为勾股定理，这印证了余弦定理是勾股定理的推广。对于其他任何角度，修正项要么从和 $a^2 + b^2$ 中减去，要么加到该和上，这取决于 $\theta$ 是锐角还是钝角。

![图 1](/assets/trigonometry/svg/law-of-cosines-1.zh.svg)

上图展示的是锐角情形（垂足落在边 $b$ 内部）；当夹角为钝角时，可将相应投影段视为有向投影，或由后文的向量推导得到同一公式。

为推导该公式，从边 $a$ 与边 $c$ 的公共顶点（即边 $b$ 的对顶点）向边 $b$ 所在直线作高 $h$。这把 $b$ 分成两段：$m = a\cos(\theta)$ 与 $n = b - a\cos(\theta)$，而高本身满足 $h = a\sin(\theta)$。对由 $n$、$h$ 与 $c$ 构成的直角三角形应用勾股定理，得到：

$$
\begin{align}
c^2 &= n^2 + h^2 \\[6pt]
&= (b - a\cos(\theta))^2 + (a\sin(\theta))^2 \\[6pt]
&= b^2 - 2ab\cos(\theta) + a^2\cos^2(\theta) + a^2\sin^2(\theta) \\[6pt]
&= b^2 - 2ab\cos(\theta) + a^2(\cos^2(\theta) + \sin^2(\theta))
\end{align}
$$

由于[勾股恒等式](../pythagorean-identity/)给出 $\sin^2(\theta) + \cos^2(\theta) = 1$，表达式化简为：

$$
c^2 = a^2 + b^2 - 2ab\cos(\theta)
$$

> 余弦定理常与[正弦定理](../law-of-sines/)配合使用；当已知不同的边角组合时，正弦定理提供了一种互补的求解三角形的方法。

## 例 1

考虑一个边长为 $a = 8$、$b = 6$，夹角为 $\theta = 60^\circ$ 的三角形。目标是求出第三边 $c$ 的长度。将已知值代入余弦定理，得到：

$$
\begin{align}
c^2 &= a^2 + b^2 - 2ab\cos(\theta) \\[6pt]
&= 64 + 36 - 2(8)(6)\cos(60^\circ) \\[6pt]
&= 64 + 36 - 96 \cdot \frac{1}{2} \\[6pt]
&= 100 - 48 \\[6pt]
&= 52
\end{align}
$$

取正平方根，得到 $c = \sqrt{52} = 2\sqrt{13} \approx 7.21$。

第三边的长度约为 $7.21$ 个单位。

## 例 2

考虑一个边长为 $a = 5$、$b = 7$ 与 $c = 9$ 的三角形。目标是求出边 $c$ 的对角 $\theta$。将余弦定理解出 $\cos(\theta)$，得到：

$$
\cos(\theta) = \frac{a^2 + b^2 - c^2}{2ab}
$$

代入已知值：

$$
\begin{align}
\cos(\theta) &= \frac{25 + 49 - 81}{2(5)(7)} \\[6pt]
&= \frac{-7}{70} \\[6pt]
&= -0.1
\end{align}
$$

由于 $\cos(\theta) < 0$，角 $\theta$ 为钝角。取反余弦，得到：

$$
\theta = \arccos(-0.1) \approx 95.7^\circ
$$

最长边的对角约为 $95.7^\circ$。

## 海伦公式

余弦定理为海伦公式提供了一条直接推导途径，后者仅用三边即可表达三角形面积，完全不涉及角。对于边长为 $a$、$b$、$c$，面积为 $K$ 的三角形，该公式为：

$$
K = \sqrt{s(s-a)(s-b)(s-c)}
$$

其中 $s$ 为该三角形的半周长：

$$s = \frac{a+b+c}{2}$$

推导从用两边及其夹角表示面积的表达式出发：

$$
K = \frac{1}{2}ab\sin(\theta)
$$

这里 $\theta$ 表示与边 $c$ 相对的角，即边 $a$ 与 $b$ 之间的夹角。两边平方，并应用[勾股恒等式](../pythagorean-identity/)将 $\sin^2(\theta)$ 改写为 $1 - \cos^2(\theta)$，得：

$$
4K^2 = a^2b^2(1 - \cos^2(\theta)) = a^2b^2(1 - \cos(\theta))(1 + \cos(\theta))
$$

由余弦定理解出 $\cos(\theta)$，得：

$$\cos(\theta) = \frac{a^2 + b^2 - c^2}{2ab}$$

将此值代入两个因子，得：

$$
\begin{align}
1 - \cos(\theta) &= \frac{2ab - a^2 - b^2 + c^2}{2ab} = \frac{c^2 - (a - b)^2}{2ab} \\[6pt]
1 + \cos(\theta) &= \frac{2ab + a^2 + b^2 - c^2}{2ab} = \frac{(a + b)^2 - c^2}{2ab}
\end{align}
$$

每个分子都可分解为[两数平方差](../notable-products/)：

$$
\begin{align}
c^2 - (a - b)^2 &= (c - a + b)(c + a - b) \\[6pt]
(a + b)^2 - c^2 &= (a + b - c)(a + b + c)
\end{align}
$$

将这些分解代回 $4K^2$ 的表达式，并约去分子与分母中的公因子 $a^2b^2$，得：

$$
16K^2 = (a + b + c)(-a + b + c)(a - b + c)(a + b - c)
$$

引入半周长 $s = \frac{a + b + c}{2}$ 后，四个因子化为紧凑形式 $2s$、$2(s - a)$、$2(s - b)$、$2(s - c)$，恒等式变为：

$$
16K^2 = 16\ s(s - a)(s - b)(s - c)
$$

两边除以 $16$，并取正平方根（面积非负，且三边满足三角形不等式，故根号内非负），即得上述形式的海伦公式。

> 这一推导表明，海伦公式并非独立的结论，而是余弦定理与勾股恒等式的纯代数推论。通过联用这两个关系消去了角，最终表达式中仅保留三边。

## 例 3

考虑一个边长为 $a = 13$、$b = 14$、$c = 15$ 的三角形。其半周长为：

$$
s = \frac{13 + 14 + 15}{2} = 21
$$

与三边的三个差为：

$$
s - a = 8, \quad s - b = 7, \quad s - c = 6
$$

代入海伦公式，得：

$$
\begin{align}
K &= \sqrt{21 \cdot 8 \cdot 7 \cdot 6} \\[6pt]
  &= \sqrt{7056} \\[6pt]
  &= 84
\end{align}
$$

该三角形面积为 $84$ 平方单位。结果为精确值，且无需计算任何角即可得到，这正体现了在仅知三边的情形下海伦公式的实用优势。

## 向量解释

余弦定理可以通过[向量](../vectors/)的角度来理解，这能揭示其更深层的结构，并将其与内积联系起来。考虑一个以顶点 $O$ 为角的三角形，设 $\vec{u}$ 和 $\vec{v}$ 为从 $O$ 出发、长度分别为 $a$ 和 $b$ 的两条边，即 $a = \|\vec{u}\|$ 和 $b = \|\vec{v}\|$。三角形的第三边长度为 $c$，由向量 $\vec{v} - \vec{u}$ 表示，它连接 $\vec{u}$ 和 $\vec{v}$ 的端点。利用内积的双线性性展开该向量范数的平方，得到：

$$
\begin{align}
\|\vec{v} - \vec{u}\|^2 &= (\vec{v} - \vec{u}) \cdot (\vec{v} - \vec{u}) \\[6pt]
&= \|\vec{v}\|^2 - 2\vec{u} \cdot \vec{v} + \|\vec{u}\|^2
\end{align}
$$

内积的几何定义给出：

$$\vec{u} \cdot \vec{v} = \|\vec{u}\|\|\vec{v}\|\cos\theta$$

其中 $\theta$ 是这两个向量在 $O$ 处的夹角，也就是三角形边 $a$ 与 $b$ 之间的夹角。将这一恒等式代入上述展开式，得到：

$$
c^2 = a^2 + b^2 - 2ab\cos\theta
$$

从这个角度看，余弦定理不过是把定义内积的那个恒等式，用长度和角度重新表述出来。区分一般三角形与直角三角形的修正项 $-2ab\cos\theta$，正是 $-2\vec{u} \cdot \vec{v}$；而勾股定理对应的情形，即两个向量相互正交、从而 $\vec{u} \cdot \vec{v} = 0$。
