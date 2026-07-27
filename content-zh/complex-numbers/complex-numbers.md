---
title: 复数
title_en: Complex Numbers
source: https://algebrica.org/complex-numbers/
license: CC BY-NC 4.0
tags:
  - argand-plane
  - complex-argument
  - complex-conjugate
  - complex-numbers
  - complex-plane
  - imaginary-unity
  - modulus
translation:
  status: current
  source_hash: c78f7bbe5d4b3b8050541f0e985d836f5296581b4a35df72d82502bd0e322c3e
  translator: omp
  updated: "2026-07-23T09:29:04.973Z"
---
## 引言

复数的出现是为了克服[实数](../types-of-numbers/)集合 $\mathbb{R}$ 的某些局限，特别是无法对负数取偶次方根的问题。这一限制的一个后果是，一些具有负[判别式](../quadratic-formula/)的[二次方程](../quadratic-equations/)在 $\mathbb{R}$ 中无解。

在[实数](../properties-of-real-numbers/)集合 $\mathbb{R}$ 中，不存在平方为 $-1$ 的数，因为任何实数的平方总是非负的。因此，方程 $p(x) = x^2 + 1 = 0$ 在 $\mathbb{R}$ 中没有解。实际上，求解该方程需要 $x^2 = -1$，而这在实数集合 $\mathbb{R}$ 中永远无法满足。

为了解决这一问题，我们引入符号 $i$，称为虚数单位，它由以下性质定义：

$$ i^2 = -1 $$

有了这一定义，方程 $x^2 + 1 = 0$ 现在有两个不同的复[根](../roots-of-a-polynomial/)，即 $\pm i$。

## 复数的构造

复数的引入有时被当作记号上的权宜之计，仿佛只需规定符号 $i$ 满足 $i^2 = -1$，问题便已解决。这种做法留下了一个重要问题未答：这样的对象是否确实存在？若存在，又是以何种数学意义存在？要回答这个问题，需要对从[实数](../real-numbers/)构造 $\mathbb{C}$ 的过程作一简要考察。

出发点是笛卡尔积 $\mathbb{R}^2$，即所有实数有序对的集合。该集合中的每个元素都是形如 $(a, b)$ 的有序对，其中 $a, b \in \mathbb{R}$。这个[集合](../sets/)就是熟知的欧几里得平面，但在此我们想为它配备一种代数结构，使其成为一个[域](../fields/)。为此，必须在 $\mathbb{R}^2$ 上定义加法和乘法。

加法按分量定义。给定两个有序对 $(a, b)$ 和 $(c, d)$，它们的和为：

$$
(a, b) + (c, d) \ = \ (a + c, \ b + d)
$$

这是平面上[向量](../vectors/)加法的自然推广，顺理成章。

- - -

乘法更为微妙，恰恰是在这里，复数的代数结构与仅将其视为[向量空间](../vector-spaces/)的 $\mathbb{R}^2$ 的代数结构产生了分歧。两个有序对的乘积定义为：

$$
(a, b) \cdot (c, d) \ = \ (ac - bd, \ ad + bc)
$$

这一规则是使 $\mathbb{R}^2$ 成为 $\mathbb{R}$ 的扩域的唯一乘法规则；明确它与标准代数记号之间的联系后，这一点便会一目了然。配备上述两种运算的集合 $\mathbb{R}^2$ 记作 $\mathbb{C}$，其元素称为复数。

实数通过对应 $a \mapsto (a, 0)$ 嵌入 $\mathbb{C}$。可以直接验证，这一映射既保持加法又保持乘法，因此 $\mathbb{R}$ 以精确的代数意义作为子域嵌入 $\mathbb{C}$ 之中。元素 $(0, 1)$ 在 $\mathbb{R}$ 的这一嵌入副本中没有对应物。用乘法规则计算它的平方，得到：

$$
(0, 1) \cdot (0, 1) \ = \ (0 \cdot 0 - 1 \cdot 1,\ 0 \cdot 1 + 1 \cdot 0) \ =\ (-1,0)
$$

在上述对应下，有序对 $(-1, 0)$ 对应于实数 $-1$。换言之，$\mathbb{C}$ 中的元素 $(0, 1)$ 恰好满足符号 $i$ 按传统所要求满足的关系。这一元素称为虚数单位，记作 $i$，于是按定义 $i = (0, 1)$，进而 $i^2 = -1$。因此，性质 $i^2 = -1$ 并非施加于一个未定义符号之上的公设：它是从 $\mathbb{R}^2$ 上的乘法规则推出的定理。

有了这一记号，每个复数 $(a, b)$ 都可以分解为两个基元素 $(1, 0)$ 和 $(0, 1)$ 的组合，它们分别对应于 $1$ 和 $i$。这一分解取熟知的形式 $a + bi$，因为以下等式链成立：

$$
\begin{align}
(a, \ b) &= (a,\ 0) + (0,\ b) \\[6pt]
&= a\cdot(1,\ 0) + b\cdot(0,\ 1) \\[6pt]
&= a + bi
\end{align}
$$

因此记号 $z = a + bi$ 是有序对 $(a, b)$ 的一种紧凑编码，其中 $a$ 称为 $z$ 的实部，$b$ 称为其虚部。它们分别记作 $\mathrm{Re}(z) = a$ 和 $\mathrm{Im}(z) = b$。需要注意的是，虚部是实数 $b$，而非 $bi$。

- - -

还需验证域所要求的代数性质确实成立。验证是常规的，但值得概述。在加法下，$\mathbb{C}$ 构成一个交换[群](../groups/)：交换律和结合律继承自 $\mathbb{R}$，加法单位元为 $(0, 0)$，而 $(a, b)$ 的加法逆元为 $(-a, -b)$。

乘法同样是交换的且结合的，这可以通过直接计算来确认，乘法单位元为 $(1, 0)$。分配律也成立。唯一需要注意的性质是非零元素的乘法逆元的存在性。给定 $(a, b) \neq (0, 0)$，可以验证其乘法逆元为以下有序对：

$$
(a, \ b)^{-1} \ = \ \left(\frac{a}{a^2 + b^2}, \ \frac{-b}{a^2 + b^2}\right)
$$

当 $(a, b) \neq (0, 0)$ 时，分母 $a^2 + b^2$ 严格为正，这保证了该公式对每个非零复数都有良好定义。结论是，如此构造的 $\mathbb{C}$ 是一个域。此外，由于 $\mathbb{R}$ 作为子域嵌入其中，$\mathbb{C}$ 是 $\mathbb{R}$ 的扩域。这便是复数扩展实数系统的精确数学意义。

还可以注意到，作为 $\mathbb{R}$ 上的向量空间，域 $\mathbb{C}$ 的维数为二，基为 $\{1, i\}$。这种二维性是复平面中自然几何解释的基础。复数的实部和虚部充当关于这组基的坐标。

上述构造还可以推广：将 $\mathbb{R}$ 替换为任意域 $F$，并寻求一个扩域使得某个选定的不可约[多项式](../polynomials/)在其中有根，便引向了更一般的[域](../fields/)扩张理论。例子 $\mathbb{C} \cong \mathbb{R}[x]/(x^2 + 1)$ 是这一一般构造中最简单也最重要的实例之一。

## 定义

复数 $z$ 是形如 $z = a + bi$ 的数，其中 $a$ 与 $b$ 均为实数。复数集合记作 $\mathbb{C}$，其形式定义为：
$$
\mathbb{C} := \{ z = a + ib \mid a, b \in \mathbb{R}\}
$$

设 $z$ 为任意复数。$a$ 是 $z$ 的实部，记作 $\mathrm{Re}(z)$；$b$ 是 $z$ 的虚部，记作 $\mathrm{Im}(z)$：

$$
z = a + ib \quad \Longrightarrow \quad
\begin{cases}
\mathrm{Re}(z) = a \\[6pt]
\mathrm{Im}(z) = b \\
\end{cases}
$$

+ 表达式 $z = a + ib$ 称为复数的代数形式。按上述构造，复数 $a + bi$ 即为有序对 $(a, b) \in \mathbb{R} \times \mathbb{R}$，而集合 $\mathbb{C}$ 与配备上述运算的笛卡儿积 $\mathbb{R} \times \mathbb{R}$ 一致。
+ 复数 $z = 2 + 3i$ 的实部为 $2$，虚部为 $3$。
+ 形如 $z = ib$ 的数为纯虚数。

代数形式虽然是复数最为人熟知的表示法，但另一种通常更为便利的表达方式是采用其极坐标[三角形式](../complex-numbers-trigonometric-form/)：

$$z = r(\cos\theta + i\sin\theta)$$

另一种广泛使用的表示法是[指数形式](../complex-numbers-exponential-form/)：

$$z = re^{i\theta}$$

## 复平面

由于集合 $\mathbb{C}$ 具有笛卡儿积的结构，复数可在复平面（亦称高斯平面或阿尔冈平面）中作几何表示。在这一表示下，实部对应 $x$ 坐标，虚部对应 $y$ 坐标。

因此，复数 $z  = x + iy$ 可表示为复平面中的点 $(x, y)$。

![IMG. 1](/assets/complex-numbers/svg/complex-numbers-1.svg)

例如，纯虚数可由有序对 $i = (0,1)$ 表示。

## 共轭与模

给定复数 $z = a + bi$，其共轭定义为如下复数：

$$ \overline{z} = a - bi $$

在几何上，$\overline{z}$ 是 $z$ 关于复平面中实轴的反射。

![IMG. 2](/assets/complex-numbers/svg/complex-numbers-2.svg)

给定复数 $z = a + bi$，$z$ 的模定义为：

$$
|z| = \sqrt{a^2 + b^2}
$$

它是复平面中从原点到点 $(a, b)$ 的距离。这可由[勾股定理](../pythagorean-theorem/)直接得到，因为模是一个直角三角形斜边的长度，而该直角三角形两条直角边的长度分别为 $|a|$ 与 $|b|$：

$$
|z|^2 = a^2 + b^2
$$

![IMG. 3](/assets/complex-numbers/svg/complex-numbers-3.svg)

例如，考虑复数 $z = 3 + 2i$。将 $a = 3$ 与 $b = 2$ 代入模的公式，得：

$$|z| = \sqrt{3^2 + 2^2} = \sqrt{9 + 4} = \sqrt{13}$$

因此，$z = 3 + 2i$ 的模为：

$$|z| = \sqrt{13} \approx 3.61 $$

> 此值即 $z = 3 + 2i$ 在复平面中到原点的距离。

## 辐角

复数 $z = a + bi$ 的辐角是复平面内正实轴与从原点到点 $(a, b)$ 的[线段](../lines/)之间的[夹角](../angles-and-angular-measure/) $\theta$。辐角以弧度为单位，从正实轴逆时针方向度量，记作 $\arg(z)$。

辐角并非唯一确定。任意两个相差 $2\pi$ 的整数倍的角表示相同的几何方向。为消除这一歧义，通常采用主辐角，记作 $\mathrm{Arg}(z)$，它是满足以下条件的 $\theta$ 的唯一取值。

$$
-\pi < \mathrm{Arg}(z) \leq \pi
$$

计算辐角时需要谨慎，因为朴素的公式 $\theta = \arctan(b/a)$ 并不充分。[反正切函数](../arctangent-function/)仅在区间 $(-\pi/2, \pi/2)$ 内取值，该区间仅覆盖复平面的右半部分，且当 $a = 0$ 时无定义。$\theta$ 的正确取值取决于 $(a, b)$ 所在的象限，必须逐案确定。

当 $a > 0$ 时，该点位于右半平面，主辐角由[反正切](../arctangent-and-arccotangent/)给出：

$$
\mathrm{Arg}(z) = \arctan \left(\frac{b}{a}\right)
$$

当 $a < 0$ 且 $b \geq 0$ 时，该点位于第二象限，必须加上修正值 $\pi$ 才能将角度纳入正确的值域：

$$
\mathrm{Arg}(z) = \arctan \left(\frac{b}{a}\right) + \pi
$$

当 $a < 0$ 且 $b < 0$ 时，该点位于第三象限，修正值为 $-\pi$：

$$
\mathrm{Arg}(z) = \arctan \left(\frac{b}{a}\right) - \pi
$$

当 $a = 0$ 时，该点位于虚轴上，反正切无定义。此时辐角直接由 $b$ 的符号确定：若 $b > 0$ 则 $\mathrm{Arg}(z) = \pi/2$，若 $b < 0$ 则 $\mathrm{Arg}(z) = -\pi/2$。$z = 0$ 的情形被排除，因为原点的辐角无定义。

作为示例，考虑复数 $z = -1 + i$。它的实部为负、虚部为正，因此该点位于第二象限。对比值 $b/a = 1/(-1) = -1$ 取反正切得到 $\arctan(-1) = -\pi/4$，该值位于第四象限，因此不表示正确的辐角。由于 $a < 0$ 且 $b \geq 0$，必须施加修正值 $+\pi$：

$$
\mathrm{Arg}(z) = -\frac{\pi}{4} + \pi = \frac{3\pi}{4}
$$

> 该值与 $z = -1 + i$ 的几何位置吻合：该点在第二象限内到两轴的距离相等，与正实轴形成 $135°$ 的角。

## $\mathbb{C}$ 的性质

复数的[和与积](../complex-number-operations/)满足结合律、交换律与分配律，正如实数一样。

加法与乘法的结合律：复数相加或相乘时，数的分组方式不影响结果。

$$(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3) $$

$$(z_1 \cdot z_2) \cdot z_3 = z_1 \cdot (z_2 \cdot z_3) $$

交换律：两个复数相加或相乘的顺序不改变结果。

$$z_1 + z_2 = z_2 + z_1 $$

$$z_1 \cdot z_2 = z_2 \cdot z_1 $$

分配律：一个数乘以一个和，等于该数分别乘以每个加数后再相加。

$$z_1 \cdot (z_2 + z_3) = z_1 \cdot z_2 + z_1 \cdot z_3 $$

- - -

复数 $0 + 0i$ 是 $\mathbb{C}$ 中的加法单位元，因为对于每个复数 $z = a + bi$，有：

$$
\begin{align}
z + (0 + 0i) &= (a + bi) + (0 + 0i) \\[6pt]
&= (a + 0) + (b + 0)i \\[6pt]
&= a + bi \\[6pt]
&= z
\end{align}
$$

复数 $1 + 0i$ 是 $\mathbb{C}$ 中的乘法单位元，因为对于每个复数 $z = a + bi$，有：

$$
\begin{align}
z \cdot (1 + 0i) &= (a + bi) \cdot (1 + 0i) \\[6pt]
&= a \cdot 1 + a \cdot 0i + bi \cdot 1 + bi \cdot 0i \\[6pt]
&= a + bi \\[6pt]
&= z
\end{align}
$$
- - -

$a + bi$ 的相反数是复数：

$$-(a + bi) = -a - bi $$

非零复数 $z = a + bi$ 的倒数是复数：

$$\frac{1}{z} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2} i $$

形如 $z = a + 0i$ 的复数，其中虚部为零，恰好就是实数。

复数集合 $\mathbb{C}$ 无法以一种与加法和乘法相容的方式进行排序。假设在 $\mathbb{C}$ 上存在一个全序 $\leq$，它与这些运算相容。那么我们应能比较 $i$ 与 $0$。有两种可能的情形：

+ 若 $i > 0$，两边同乘 $i$，得 $i^2 = -1 > 0$，矛盾。
+ 若 $i < 0$，则两边同乘 $i$，不等号方向反转，得到 $-1 > 0$，仍为矛盾。

由于两种情形均不成立，因此无法在 $\mathbb{C}$ 上定义与[域](../fields/)运算相容的全序。
