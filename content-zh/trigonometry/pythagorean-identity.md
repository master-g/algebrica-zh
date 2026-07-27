---
title: 勾股恒等式
title_en: Pythagorean Identity
source: https://algebrica.org/pythagorean-identity/
license: CC BY-NC 4.0
tags:
  - pythagorean-identity
  - trigonometric-identities
  - trigonometry
  - unit-circle
translation:
  status: current
  source_hash: 5c66a62ec52c944aa28d77cdbd4ce59db16b8a9dbb6c1e63bee7c401cf180899
  translator: omp
  updated: "2026-07-25T07:17:22.640Z"
---
## 定义

勾股恒等式是连接三角学与几何学的一个方程，它直接由[勾股定理](../pythagorean-theorem/)推出，而勾股定理刻画了直角三角形各边之间的关系。考虑一个斜边长度为 $1$ 的直角三角形。先考虑锐角的情形：将该三角形放在[单位圆](../unit-circle/)上，令 $\theta$ 表示原点处的一个锐[角](../angles-and-angular-measure/)，则两条直角边的长度分别等于 $\sin(\theta)$ 与 $\cos(\theta)$。

![图 1](/assets/trigonometry/svg/unit-circle-2.zh.svg)

该恒等式的形式为

$$
\sin^2\theta + \cos^2\theta = 1
$$

其中 $\sin^2\theta$ 表示 $(\sin\theta)^2$，$\cos^2\theta$ 表示 $(\cos\theta)^2$。要理解它为何成立，回顾勾股定理：在任意直角三角形中，斜边的平方等于两条直角边的平方之和。

![图 2](/assets/trigonometry/svg/pythagorean-theorem-1.zh.svg)

记斜边为 $c$，两条直角边为 $a$ 与 $b$，则该定理写作

$$
a^2 + b^2 = c^2
$$

将三角形置于单位圆内时，斜边 $c$ 与圆的半径重合，而由定义该半径等于一。将 $c = 1$、$a = \sin\theta$、$b = \cos\theta$ 代入上述方程，即直接得到勾股恒等式。

勾股恒等式可以把两个函数中的每一个用另一个表示出来。解出正弦得到

$$
\sin\theta = \pm \sqrt{1 - \cos^2\theta}
$$

而解出余弦则得到：

$$
\cos\theta = \pm \sqrt{1 - \sin^2\theta}
$$

在每种情形下，符号都取决于 $\theta$ 所在的[象限](../identities-using-reference-angles/)。在第一象限，两个函数都为正，因此取正的平方根；在其他象限，必须按照相关函数在该区域的已知符号来选择符号。

同一恒等式还可以衍生出另外两个关系：一个涉及[正切](../tangent-and-cotangent/)与[正割](../secant-and-cosecant/)，另一个涉及[余切](../tangent-and-cotangent/)与[余割](../secant-and-cosecant/)。

为得到第一个，将 $\sin^2\theta + \cos^2\theta = 1$ 的两边同时除以 $\cos^2\theta$：

$$
\frac{\sin^2\theta}{\cos^2\theta} + \frac{\cos^2\theta}{\cos^2\theta} = \frac{1}{\cos^2\theta}
$$

注意到 $\sin\theta / \cos\theta = \tan\theta$ 以及 $1/\cos\theta = \sec\theta$，该方程化为：

$$
\tan^2\theta + 1 = \sec^2\theta
$$

为得到第二个，改为将两边除以 $\sin^2\theta$：

$$
\frac{\sin^2\theta}{\sin^2\theta} + \frac{\cos^2\theta}{\sin^2\theta} = \frac{1}{\sin^2\theta}
$$

由于 $\cos\theta / \sin\theta = \cot\theta$ 以及 $1/\sin\theta = \csc\theta$，此式化简为：

$$
1 + \cot^2\theta = \csc^2\theta
$$

原始勾股恒等式与由它推导出的正切—正割、余切—余割两个恒等式，共同构成三个常用恒等式，是三角学中大多数代数化简的基础。

## 定义域限制

下列恒等式仅在相应除法有定义处成立。

$$
\begin{align}
\tan^2\theta + 1 &= \sec^2\theta \\[6pt]
1 + \cot^2\theta &= \csc^2\theta
\end{align}
$$

除以 $\cos^2\theta$ 对所有非 $\pi/2$ 的奇数倍的 $\theta$ 都成立，因为恰恰是在这些取值处 $\cos\theta = 0$ 与 $\tan\theta$ 以及 $\sec\theta$ 无定义。

类似地，除以 $\sin^2\theta$ 要求 $\sin\theta \neq 0$，这就排除了 $\pi$ 的所有整数倍，在该处 $\cot\theta$ 与 $\csc\theta$ 无定义。作为对比，原始恒等式 $\sin^2\theta + \cos^2\theta = 1$ 对 $\theta$ 的每一个实数值都毫无例外地成立。

这种[定义域](../determining-the-domain-of-a-function/)限制与 $\tan$、$\sec$、$\cot$、$\csc$ 的自然定义域之间的一致并非偶然。这四个函数恰好定义为涉及正弦与余弦的比值，因此从其定义域中排除的取值正是使相关分母为零的那些取值。因此，通过除法推导恒等式时出现的限制，与定义函数本身的限制相同，且必然如此。

## 任意角的有效性

上面给出的几何论证只对锐角确立了该恒等式，因为它依赖于将正弦和余弦解释为直角三角形两条直角边的长度。当 $\theta$ 为钝角、负角或大于 $2\pi$ 时，这种解释便不再有意义，因此需要更一般的基础。

标准做法是通过单位圆以解析方式定义正弦和余弦。对于任意实数 $\theta$，将 $\cos\theta$ 和 $\sin\theta$ 定义为从 $(1, 0)$ 出发沿单位圆移动距离 $\theta$ 所得点的坐标，并约定正值对应逆时针方向的运动。

在这一定义下，点 $(\cos\theta, \sin\theta)$ 按构造即位于单位圆上，而单位圆的方程为 $x^2 + y^2 = 1$。代入 $x = \cos\theta$ 和 $y = \sin\theta$ 得：

$$
\cos^2\theta + \sin^2\theta = 1
$$

该式对 $\theta$ 的每一个实数值都成立，不受象限或角度大小的限制。因此该恒等式并非三角形几何的推论，而是三角函数在实数轴上定义的直接表达。

## 例 1

勾股恒等式在化简乍看似乎与之无关的表达式时常常很有用。下面的例子展示了如何在分子中识别出代数结构，从而将一个看似不简单的分式化为常数。考虑表达式：

$$
\frac{\sin^4\theta - \cos^4\theta}{\sin^2\theta - \cos^2\theta}
$$

分子是两个平方数的差，因而可分解为：

$$
\sin^4\theta - \cos^4\theta = (\sin^2\theta + \cos^2\theta)(\sin^2\theta - \cos^2\theta)
$$

由勾股恒等式知 $\sin^2\theta + \cos^2\theta = 1$，故分子化为 $\sin^2\theta - \cos^2\theta$。因此该表达式化简为：

$$
\frac{\sin^2\theta - \cos^2\theta}{\sin^2\theta - \cos^2\theta} = 1
$$

前提是 $\sin^2\theta \neq \cos^2\theta$，即对所有不是 $\pi/4$ 的奇数倍的 $\theta$ 成立。

## 将表达式改写为单一函数

微积分与数学分析中的一个常见需求，是将三角表达式改写为只含一个函数的形式。三个勾股恒等式为此提供了系统的方法，这一技巧在大量问题中反复出现——从三角表达式的化简到积分的计算以及微分方程的求解。

由基本恒等式

$$\sin^2\theta + \cos^2\theta = 1$$

可得两条代换规则：

$$
\begin{align}
\sin^2\theta &= 1 - \cos^2\theta \\[6pt]
\cos^2\theta &= 1 - \sin^2\theta
\end{align}
$$

借助这两条规则，许多同时含正弦和余弦的[多项式](../polynomials/)表达式得以化简。勾股恒等式可直接替换其中的正弦平方或余弦平方，系统消去平方及相应的偶次幂；但当混合项中含有未配对的奇次幂时，通常还需借助其他恒等式，或在开方后结合象限与定义域确定符号。例如，形如：

$$\sin^2\theta + 2\sin\theta\cos\theta + \cos^2\theta$$

的表达式可通过注意到 $\sin^2\theta + \cos^2\theta = 1$ 来化简，剩下 $1 + 2\sin\theta\cos\theta$，即 $1 + \sin 2\theta$。

派生的恒等式对于涉及倒数函数和比函数的表达式起着同样的作用。由 $\tan^2\theta + 1 = \sec^2\theta$ 可得 $\tan^2\theta = \sec^2\theta - 1$，当表达式同时含有 $\tan\theta$ 和 $\sec\theta$ 且需要化为单一函数时，它十分有用。

类似地，由 $1 + \cot^2\theta = \csc^2\theta$ 可得 $\cot^2\theta = \csc^2\theta - 1$，使得含有 $\cot\theta$ 和 $\csc\theta$ 的表达式可以仅用 $\csc\theta$ 表示。

许多标准的[积分](../definite-integrals/)要求先将被积函数写成与某个已知模式匹配的形式，才能施行代换。例如，$\tan^2\theta$ 的积分无法直接用初等规则化简。代入 $\tan^2\theta = \sec^2\theta - 1$ 后，被积函数被改写为两项之差，每一项都易于积分：

$$
\begin{align}
\int \tan^2\theta \ d\theta &= \int (\sec^2\theta - 1) \ d\theta \\[6pt]
&= \int \sec^2\theta \ d\theta - \int d\theta \\[6pt]
&= \tan\theta - \theta + C
\end{align}
$$

同样的原理也是三角代换的基础：对于含有诸如 $\sqrt{1 - x^2}$ 或 $\sqrt{1 + x^2}$ 等根式的表达式，通过引入三角变量，再应用相应的勾股恒等式，即可完全消去根式。在 $\sqrt{1 - x^2}$ 的情形下，代换 $x = \sin\theta$ 将根式变换如下：

$$
\sqrt{1 - x^2} = \sqrt{1 - \sin^2\theta} = \sqrt{\cos^2\theta} = |\cos\theta|
$$

当 $\theta \in \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$（这一代换的标准取值范围）时，上式化为 $\cos\theta$。根式已被完全消去，所得的积分仅含三角函数，可直接应用标准方法。

## 例 2

代换 $x = \sin\theta$ 是处理含有根式 $\sqrt{1 - x^2}$ 的积分的标准技巧。勾股恒等式正是使该代换有效的关键：它保证根式能化为单个三角函数，从而彻底消除平方根。考虑如下积分：

$$
\int \sqrt{1 - x^2} \ dx
$$

令 $x = \sin\theta$，其中 $\theta \in \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$，可得 $dx = \cos\theta \ d\theta$。[根式](../radicals/)作如下变换：

$$
\sqrt{1 - x^2} = \sqrt{1 - \sin^2\theta} = \sqrt{\cos^2\theta} = \cos\theta
$$

其中最后一步用到了在所选区间上 $\cos\theta \geq 0$ 这一事实。代回积分得：

$$
\int \sqrt{1 - x^2} \ dx = \int \cos\theta \cdot \cos\theta \ d\theta = \int \cos^2\theta \ d\theta
$$

被积函数 $\cos^2\theta$ 借助恒等式 $\cos^2\theta = \dfrac{1 + \cos 2\theta}{2}$ 处理，得到：

$$
\begin{align}
\int \cos^2\theta \ d\theta &= \int \frac{1 + \cos 2\theta}{2} \ d\theta \\[6pt]
&= \frac{\theta}{2} + \frac{\sin 2\theta}{4} + C
\end{align}
$$

接下来只需回到原来的变量。由于 $x = \sin\theta$，可得 $\theta = \arcsin x$。对于项 $\sin 2\theta$，倍角公式给出 $\sin 2\theta = 2\sin\theta\cos\theta = 2x\sqrt{1-x^2}$。

因此解为：

$$
\int \sqrt{1 - x^2} \ dx = \frac{\arcsin x}{2} + \frac{x\sqrt{1 - x^2}}{2} + C
$$

> 由于 $y=\sqrt{1-x^2}$ 是单位圆上半圆，相应的定积分 $\displaystyle\int_{-1}^{1}\sqrt{1-x^2}\,dx=\dfrac{\pi}{2}$ 给出单位半圆的面积，与被积函数的几何解释一致。

## 从方程 $y'' + y = 0$ 出发的推导

勾股恒等式存在一种完全不依赖单位圆几何的纯分析证明。出发点是 $\sin x$ 与 $\cos x$ 都是如下线性二阶微分方程的解这一事实：

$$
y'' + y = 0
$$

这可直接由[导数](../derivatives/) $\sin'(x) = \cos(x)$ 与 $\cos'(x) = -\sin(x)$ 得到，二者合起来给出 $\sin''(x) = -\sin(x)$ 与 $\cos''(x) = -\cos(x)$。

对于任何满足 $f'' + f = 0$ 的二次可微函数 $f$，辅助量：

$$
E(x) := \bigl(f'(x)\bigr)^{2} + \bigl(f(x)\bigr)^{2}
$$

在整个实数轴上恒为常数。为验证这一点，我们计算其导数：

$$
\begin{align}
E'(x)
&= 2 f'(x) f''(x) + 2 f(x) f'(x) \\[6pt]
&= 2 f'(x) \bigl(f''(x) + f(x)\bigr)
\end{align}
$$

括号中的因子由假设为零，因此对每个 $x$ 都有 $E'(x) = 0$。在区间 $\mathbb{R}$ 上导数恒为零的函数为常数，该常数可通过在任取一点处计算 $E$ 来确定。选取原点得到：

$$
E(x) = E(0) = \bigl(f'(0)\bigr)^{2} + \bigl(f(0)\bigr)^{2}
$$

将这一守恒律应用于 $f = \sin$，其初始值为 $\sin(0) = 0$ 与 $\sin'(0) = \cos(0) = 1$，得到：

$$
\bigl(\sin'(x)\bigr)^{2} + \bigl(\sin(x)\bigr)^{2} = 1^{2} + 0^{2} = 1
$$

由于 $\sin'(x) = \cos(x)$，左端恰为 $\cos^{2}(x) + \sin^{2}(x)$，于是勾股恒等式对每个实数 $x$ 成立。

> 按此理解，该恒等式是与方程 $y'' + y = 0$ 相关联的守恒律。量 $(f')^{2} + f^{2}$ 扮演简谐振子总能量的角色，沿每条解保持为常数，其中 $\sin^{2} x + \cos^{2} x$ 的值由正弦函数的初始数据一劳永逸地确定。

## 与欧拉公式的联系

一旦将三角函数延拓到复平面，勾股恒等式就有一个尤为简洁透明的证明。[欧拉公式](../eulers-formula/)表明，对任意实数 $\theta$，[复指数](../complex-numbers-exponential-form/)满足：

$$e^{i\theta} = \cos\theta + i\sin\theta$$

由于 $e^{i\theta}$ 位于复平面上的单位圆上，其[模](../complex-numbers-introduction/)等于一。直接计算模的平方得到：

$$
|e^{i\theta}|^2 = \cos^2\theta + \sin^2\theta = 1
$$

由此便得到勾股恒等式，这是虚轴上指数函数定义的直接推论。
