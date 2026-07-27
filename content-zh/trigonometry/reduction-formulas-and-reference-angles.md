---
title: 诱导公式与参考角
title_en: Reduction Formulas and Reference Angles
source: https://algebrica.org/reduction-formulas-and-reference-angles/
license: CC BY-NC 4.0
tags:
  - reduction-formulas
  - reference-angles
  - trigonometric-identities
  - trigonometry
translation:
  status: current
  source_hash: eae4f881460a5e284e3d9a5370c94afe4d69235ee3ff7eb4c0e34155d70d9313
  translator: omp
  updated: "2026-07-25T08:50:19.742Z"
---
## 使用参考角改写角度

给定角 $\theta$ 在[单位圆](../unit-circle/)上处于[标准位置](../angles-and-angular-measure/)，其终边与水平轴之间所夹的锐角称为 $\theta$ 的参考角，通常记作 $\alpha$。参考角在一般角的三角函数值与第一象限锐角的三角函数值之间建立了直接联系；在第一象限中，所有函数值都为正，并且可以通过初等几何方法计算。

实现这种联系的恒等式称为诱导公式。每一个诱导公式都将 $\theta$ 的某个三角函数表示为同一个函数或其余函数在 $\alpha$ 处的值，其符号由 $\theta$ 所在的象限决定。出现最频繁的角的形式如下：

$$
\frac{\pi}{2}\pm\alpha,\quad \pi\pm\alpha,\quad \frac{3\pi}{2}\pm\alpha,\quad 2\pi-\alpha
$$

其他情形都可以通过加上或减去 $2\pi$ 的整数倍而归结为以上之一。

对于上述每一种形式，两条信息就可以完全确定相应的诱导公式：角所在的象限，它确定了四个三角函数的符号；以及作为参考的轴，它决定了诱导时每个函数保持不变还是与其余函数互换。

以 $\pi/2$ 或 $3\pi/2$ 为偏移量写出的角是从竖直轴度量的，其诱导过程涉及[正弦与余弦](../sine-and-cosine/)以及[正切与余切](../tangent-and-cotangent/)的交换。

以 $\pi$ 或 $2\pi$ 为偏移量写出的角是从水平轴度量的，其诱导过程中每个函数都保持不变。下表汇总了本页所考虑的所有形式的上述信息，列出角所在的象限、各三角函数的符号以及是否发生余函数互换。

| 形式 | 象限 | $\sin$ | $\cos$ | $\tan$ | $\cot$ | 余函数互换 |
| --- | --- | --- | --- | --- | --- | --- |
| $\pi/2-\alpha$ | I | $+$ | $+$ | $+$ | $+$ | 是 |
| $\pi/2+\alpha$ | II | $+$ | $-$ | $-$ | $-$ | 是 |
| $\pi-\alpha$ | II | $+$ | $-$ | $-$ | $-$ | 否 |
| $\pi+\alpha$ | III | $-$ | $-$ | $+$ | $+$ | 否 |
| $3\pi/2-\alpha$ | III | $-$ | $-$ | $+$ | $+$ | 是 |
| $3\pi/2+\alpha$ | IV | $-$ | $+$ | $-$ | $-$ | 是 |
| $2\pi-\alpha$ | IV | $-$ | $+$ | $-$ | $-$ | 否 |

> 接下来的各节将从单位圆上终边的位置出发，并直接从图中读出坐标的符号，对每一个恒等式进行几何推导。

## $\pi/2 + \alpha$ 的诱导公式

考虑形如 $\pi/2+\alpha$ 的角，其中 $\alpha$ 表示从正 $x$ 轴量起的锐角。从对应竖直方向的 $\frac{\pi}{2}$ 出发，加上 $\alpha$ 后，终边会向竖轴左侧略微旋转，如下图所示。所得角严格介于 $\frac{\pi}{2}$ 与 $\pi$ 之间，因此其终边落在笛卡尔平面的第二象限内。

![图 1](/assets/trigonometry/svg/reduction-formulas-and-reference-angles-1.zh.svg)

对由终边确定的直角三角形进行直接的几何分析，可得正弦与余弦的如下恒等式：

$$
\begin{align}
\sin\left(\frac{\pi}{2}+\alpha\right) &= \cos\alpha \\[6pt]
\cos\left(\frac{\pi}{2}+\alpha\right) &= -\sin\alpha
\end{align}
$$

这些恒等式的几何意义十分清晰。$\alpha$ 的[正弦](../sine-and-cosine/)等于第一象限中相应竖直线段的长度；该长度也等于第二象限中与 $\frac{\pi}{2}+\alpha$ 对应的水平线段的绝对值。由于后一条线段向竖轴左侧延伸，其有向长度为负，所以 $\frac{\pi}{2}+\alpha$ 的[余弦](../sine-and-cosine/)为 $-\sin\alpha$。正切与余切的恒等式可直接由其定义得出：

$$
\begin{align}
\tan\alpha &= \frac{\sin\alpha}{\cos\alpha} \\[6pt]
\cot\alpha &= \frac{\cos\alpha}{\sin\alpha}
\end{align}
$$

将上面得到的表达式代入这些定义，即得：

$$
\begin{align}
\tan\left(\frac{\pi}{2}+\alpha\right) &= \frac{\cos\alpha}{-\sin\alpha} = -\cot\alpha \\[6pt]
\cot\left(\frac{\pi}{2}+\alpha\right) &= \frac{-\sin\alpha}{\cos\alpha} = -\tan\alpha
\end{align}
$$

因此，$\pi/2+\alpha$ 的正切与余切仅在符号上分别与 $\alpha$ 的余切与正切相反，这与两个函数在第二象限均取负值的事实一致。

## $\pi/2 - \alpha$ 的诱导公式

现在考虑形如 $\frac{\pi}{2}-\alpha$ 的角，其中 $\alpha$ 表示第一象限内的锐角。该角是先从正 $x$ 轴逆时针旋转到 $\frac{\pi}{2}$，再反向回转 $\alpha$ 而得到的。反向回转使终边落在竖轴右侧，并介于 $0$ 与 $\frac{\pi}{2}$ 之间。因此所得角位于笛卡尔平面的第一象限内。

![图 2](/assets/trigonometry/svg/reduction-formulas-and-reference-angles-2.zh.svg)

对由终边所确定的直角三角形进行几何分析，可得正弦与余弦的如下恒等式：

$$
\begin{align}
\sin\left(\frac{\pi}{2}-\alpha\right) &= \cos\alpha \\[6pt]
\cos\left(\frac{\pi}{2}-\alpha\right) &= \sin\alpha
\end{align}
$$

此时两个函数都保持正号，与该角位于第一象限的事实一致，而余函数互换则以完全对称的方式将正弦与余弦相互交换。正切与余切的恒等式可直接由其作为商的定义得到：

$$
\begin{align}
\tan\left(\frac{\pi}{2}-\alpha\right) &= \frac{\cos\alpha}{\sin\alpha} = \cot\alpha \\[6pt]
\cot\left(\frac{\pi}{2}-\alpha\right) &= \frac{\sin\alpha}{\cos\alpha} = \tan\alpha
\end{align}
$$

因此，$\pi/2-\alpha$ 的正切恰好等于 $\alpha$ 的余切，反之亦然，这与「从竖直轴量起的角会产生余函数互换」这一一般规则相吻合。

## $\pi + \alpha$ 的诱导公式

现在考虑形如 $\pi+\alpha$ 的角，其中 $\alpha$ 表示锐角。从对应 $x$ 轴负方向的 $\pi$ 出发，加上 $\alpha$ 后，终边会略微向下旋转，进入笛卡尔平面的左下区域。所得角严格介于 $\pi$ 与 $3\pi/2$ 之间，因此其终边落在第三象限内。

![图 3](/assets/trigonometry/svg/reduction-formulas-and-reference-angles-3.zh.svg)

直接读取单位圆上终边的坐标，可得正弦与余弦的如下恒等式：

$$
\begin{align}
\sin(\pi+\alpha) &= -\sin\alpha \\[6pt]
\cos(\pi+\alpha) &= -\cos\alpha
\end{align}
$$

两个值都取负号，正如第三象限所预期的那样：在该象限内，终边位于水平轴下方且在竖轴左侧。然而就绝对值而言，每个函数都等于 $\alpha$ 处的对应值，因为 $\pi+\alpha$ 是由 $\alpha$ 精确旋转 $\pi$ 而得到的，这一旋转相当于让单位圆上的点关于原点对称反射。正切与余切的恒等式可直接由这两个函数作为商的定义得到：

$$
\begin{align}
\tan(\pi+\alpha) &= \frac{-\sin\alpha}{-\cos\alpha} = \tan\alpha \\[6pt]
\cot(\pi+\alpha) &= \frac{-\cos\alpha}{-\sin\alpha} = \cot\alpha
\end{align}
$$

两个负号在每个商中相互抵消，因此 $\pi+\alpha$ 的正切和余切分别等于 $\alpha$ 的正切和余切。这在分析上对应于如下事实：正切与余切以 $\pi$ 为周期，而正弦与余弦以 $2\pi$ 为周期。

## $\pi - \alpha$ 的诱导公式

现在考虑形如 $\pi-\alpha$ 的角，其中 $\alpha$ 表示一个锐角。由于 $\pi$ 对应 $x$ 轴的负方向，减去 $\alpha$ 会使终边略微向上转动，将其带入笛卡尔平面的左上区域。所得角严格介于 $\pi/2$ 与 $\pi$ 之间，因此其终边落在第二象限。

![图 4](/assets/trigonometry/svg/reduction-formulas-and-reference-angles-4.zh.svg)

直接读取单位圆上终边的坐标，可得正弦与余弦的如下恒等式：

$$
\begin{align}
\sin(\pi-\alpha) &= \sin\alpha \\[6pt]
\cos(\pi-\alpha) &= -\cos\alpha
\end{align}
$$

正弦保持正值，这与终边位于水平轴上方的事实相符；而余弦变号，因为终边被反射到竖直轴的左侧。就大小而言，两个函数的值都与 $\alpha$ 处的相应值一致，因为 $\pi-\alpha$ 与 $\alpha$ 关于竖直轴对称。正切与余切的恒等式可立即由这两个函数作为比值的定义得出：
$$
\begin{align}
\tan(\pi-\alpha) &= \frac{\sin\alpha}{-\cos\alpha} = -\tan\alpha \\[6pt]
\cot(\pi-\alpha) &= \frac{-\cos\alpha}{\sin\alpha} = -\cot\alpha
\end{align}
$$

两个比值都只含一个负号，因此 $\pi-\alpha$ 的正切与余切仅与 $\alpha$ 的相应值相差一个符号。这与第二象限中两个函数都取负值的事实相符。

## $3\pi/2 + \alpha$ 的诱导公式

现在考虑形如 $\frac{3\pi}{2}+\alpha$ 的角，其中 $\alpha$ 表示一个锐角。从对应 $y$ 轴负方向的 $3\pi/2$ 出发，加上 $\alpha$ 会将终边略微转向竖直轴的右侧。所得角严格介于 $3\pi/2$ 与 $2\pi$ 之间，因此其终边落在笛卡尔平面的第四象限。

![图 5](/assets/trigonometry/svg/reduction-formulas-and-reference-angles-5.zh.svg)

直接读取单位圆上终边的坐标，可得正弦与余弦的如下恒等式：

$$
\begin{align}
\sin\left(\frac{3\pi}{2}+\alpha\right) &= -\cos\alpha \\[6pt]
\cos\left(\frac{3\pi}{2}+\alpha\right) &= \sin\alpha
\end{align}
$$

由于终边位于水平轴下方，正弦取负值；而终边落在竖直轴右侧，余弦保持正值。这里再次出现余函数互换，符合「以竖直轴为基准度量的角会把正弦与余弦互换、正切与余切互换」的一般规则。正切与余切的恒等式可立即由这两个函数作为比值的定义得出：

$$
\begin{align}
\tan\left(\frac{3\pi}{2}+\alpha\right) &= \frac{-\cos\alpha}{\sin\alpha} = -\cot\alpha \\[6pt]
\cot\left(\frac{3\pi}{2}+\alpha\right) &= \frac{\sin\alpha}{-\cos\alpha} = -\tan\alpha
\end{align}
$$

两个比值都只含一个负号，因此 $3\pi/2+\alpha$ 的正切与余切仅与 $\alpha$ 的余切与正切相差一个符号。这与第四象限中两个函数都取负值的事实相符。

## $3\pi/2 - \alpha$ 的诱导公式

现在考虑形如 $\frac{3\pi}{2}-\alpha$ 的角，其中 $\alpha$ 表示一个锐角。由于 $3\pi/2$ 对应 $y$ 轴的负方向，减去 $\alpha$ 会将终边向后转向 $\pi$，带入笛卡尔平面的左下区域。所得角严格介于 $\pi$ 与 $3\pi/2$ 之间，因此其终边落在第三象限。

![图 6](/assets/trigonometry/svg/reduction-formulas-and-reference-angles-6.zh.svg)

直接读取单位圆上终边的坐标，可得正弦与余弦的如下恒等式：

$$
\begin{align}
\sin\left(\frac{3\pi}{2}-\alpha\right) &= -\cos\alpha \\[6pt]
\cos\left(\frac{3\pi}{2}-\alpha\right) &= -\sin\alpha
\end{align}
$$

两个值都带负号，这与第三象限中终边位于水平轴下方且竖直轴左侧的事实相符。这里再次出现余函数互换，正如对以竖直轴为偏离基准度量的角所预期的那样。正切与余切的恒等式可立即由这两个函数作为比值的定义得出：

$$
\begin{align}
\tan\left(\frac{3\pi}{2}-\alpha\right) &= \frac{-\cos\alpha}{-\sin\alpha} = \cot\alpha \\[6pt]
\cot\left(\frac{3\pi}{2}-\alpha\right) &= \frac{-\sin\alpha}{-\cos\alpha} = \tan\alpha
\end{align}
$$

两个负号在每个比值中相互抵消，因此 $3\pi/2-\alpha$ 的正切与 $\alpha$ 的余切相等，而 $3\pi/2-\alpha$ 的余切与 $\alpha$ 的正切相等。这与第三象限中两个函数都取正值的事实相符。

## $2\pi - \alpha = -\alpha$ 的诱导公式

最后考虑形如 $2\pi-\alpha$ 的角，其中 $\alpha$ 表示一个锐角。由于 $2\pi$ 对应一整圈旋转，因此与 $0$ 具有相同的终边，减去 $\alpha$ 会使终边略微转到正 $x$ 轴的下方。所得角严格介于 $3\pi/2$ 与 $2\pi$ 之间，因此其终边落在第四象限。

角 $2\pi-\alpha$ 与 $-\alpha$ 是[同终边角](../angles-and-angular-measure/)，即两角相差 $2\pi$ 的整数倍，因此在单位圆上确定同一点。由于三角函数的周期为 $2\pi$，它们在 $2\pi-\alpha$ 与 $-\alpha$ 处取相同的值，这一等价关系在恒等式中将被隐含使用。

![图 7](/assets/trigonometry/svg/reduction-formulas-and-reference-angles-7.zh.svg)

直接读取单位圆上终边的坐标，可得正弦与余弦的如下恒等式：

$$
\begin{align}
\sin(2\pi-\alpha) &= -\sin\alpha \\[6pt]
\cos(2\pi-\alpha) &= \cos\alpha
\end{align}
$$

由于终边位于水平轴下方，正弦取负值；而终边位于垂直轴右侧，余弦保持正值。这些恒等式也表明正弦是角的一个奇函数，余弦是角的一个偶函数，因为 $2\pi-\alpha$ 与 $-\alpha$ 是同终边角。正切与余切的恒等式可立即由这两个函数作为比值的定义得出：

$$
\begin{align}
\tan(2\pi-\alpha) &= \frac{-\sin\alpha}{\cos\alpha} = -\tan\alpha \\[6pt]
\cot(2\pi-\alpha) &= \frac{\cos\alpha}{-\sin\alpha} = -\cot\alpha
\end{align}
$$

两个商都只含一个负号，因此 $2\pi-\alpha$ 的正切与余切和 $\alpha$ 的正切与余切仅相差一个符号。这与第四象限中这两个函数都取负值的事实一致，也与正切和余切关于原点的奇对称性一致。

## 结构性注记

除了直接的计算用途之外，诱导公式还揭示了三角函数的一个值得明确表述的结构特征。本页所导出的每一个恒等式都是单位圆两种基本对称性的结果：坐标在绕 $2\pi$ 旋转下的不变性，它编码了正弦与余弦的周期性；以及坐标在关于坐标轴反射下的行为，它产生了符号变化与余函数互换。

从这个意义上说，诱导公式是单位圆上一点在由四分之一转动与关于坐标轴的反射所生成的有限对称变换下运动方式的代数描述。

在[三角方程](../trigonometric-equations/)的求解中，诱导公式可把方程中任意角的 $\sin\theta$、$\cos\theta$、$\tan\theta$ 或 $\cot\theta$ 的函数值化为参考角处的函数值；而求解方程本身通常还需配合恒等变形、代数求解以及对周期性的利用，才能恢复完整的解集。

在[积分学](../indefinite-integrals/)中，它们常被用来在应用标准积分技巧之前，将形如 $\sin(k\pi\pm x)$ 或 $\cos(k\pi\pm x)$（其中 k 为整数）的被积函数化简。

在[傅里叶级数](../fourier-series/)的研究中，同样的符号规则是判定一个函数为偶函数、奇函数或既非奇也非偶的依据，并决定级数中哪些系数为零。从更高等的观点来看，诱导公式预示了一般的加法公式：

$$
\begin{align}
\sin(\alpha+\beta) &= \sin\alpha\cos\beta+\cos\alpha\sin\beta \\[6pt]
\cos(\alpha+\beta) &= \cos\alpha\cos\beta-\sin\alpha\sin\beta
\end{align}
$$

只需令 $\beta$ 分别等于 $\pi/2$、$\pi$、$3\pi/2$ 或 $2\pi$，即可从该公式还原本页中的每一个恒等式。因此，此处呈现为一份个别情形清单的内容，实际上是一个连续结构的有限特化，而这正是解析三角学所系统采用的视角。
