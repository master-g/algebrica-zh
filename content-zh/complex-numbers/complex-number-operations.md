---
title: 复数的运算
title_en: Operations with Complex Numbers
source: https://algebrica.org/complex-number-operations/
license: CC BY-NC 4.0
tags:
  - complex-conjugate
  - complex-division
  - complex-multiplication
  - complex-numbers
  - complex-reciprocal
  - complex-sum
  - field-operations
translation:
  status: current
  source_hash: ca1ad70d9d57638b7c4477e4a1847da2bdb747925a19357733fea203d5284352
  translator: omp
  updated: "2026-07-23T09:48:32.853Z"
---
## 引言

[复数](../complex-numbers-introduction/) $z$ 是形如 $z = a + bi$ 的表达式，其中 $a$ 和 $b$ 是[实数](../properties-of-real-numbers/)，$i$ 是虚数单位，由定义关系 $i^2 = -1$ 所确定。

[实数](../real-numbers/) $a$ 称为 $z$ 的实部，记作 $\mathrm{Re}(z)$。实数 $b$ 称为虚部，记作 $\mathrm{Im}(z)$。所有复数的集合定义如下：

$$\mathbb{C} := \{\ z = a + bi \mid a, b \in \mathbb{R} \ \}$$

每个实数 $a \in \mathbb{R}$ 都可视为复数 $a + 0i$，因此 $\mathbb{R}$ 自然地作为子域嵌入 $\mathbb{C}$。

- - -

[集合](../sets/) $\mathbb{C}$ 配备下文定义的加法和乘法后，构成一个[域](../fields/)。在讨论这些运算之前，先回顾支配复数运算的域公理会很有帮助。

+ 封闭性：对任意 $z_1, z_2 \in \mathbb{C}$，和 $z_1 + z_2$ 与积 $z_1 \cdot z_2$ 均属于 $\mathbb{C}$。
+ 交换律和结合律：加法和乘法均满足交换律和结合律，与 $\mathbb{R}$ 完全类似。
+ 单位元：数 $0 = 0 + 0i$ 是加法单位元，$1 = 1 + 0i$ 是乘法单位元。
+ 加法逆元：对每个 $z = a + bi$，其加法逆元为 $-z = -a - bi$，且有 $z + (-z) = 0$。
+ 乘法逆元：对每个 $z \neq 0$，存在唯一的 $z^{-1} \in \mathbb{C}$ 使得 $z \cdot z^{-1} = 1$。其显式公式将在下文除法一节中导出。
+ 分配律：对所有 $z_1, z_2, z_3 \in \mathbb{C}$，乘积按如下恒等式对和进行分配：

$$z_1 \cdot (z_2 + z_3) = z_1 \cdot z_2 + z_1 \cdot z_3$$

有两项结构性质使 $\mathbb{C}$ 区别于 $\mathbb{R}$。其一，与 $\mathbb{R}$ 不同，域 $\mathbb{C}$ 不是有序[域](../fields/)。$\mathbb{C}$ 上不存在与其域运算相容的全序，因此诸如 $z_1 < z_2$ 之类的表达式对一般复数而言没有定义。

其二，$\mathbb{C}$ 是代数闭的。每个系数取自 $\mathbb{C}$ 的非常数[多项式](../polynomials/)在 $\mathbb{C}$ 中至少有一个根。这一结果称为[代数学基本定理](../roots-of-a-polynomial/)，在 $\mathbb{R}$ 中没有类似结论，例如 $x^2 + 1$ 这样的多项式就没有[实根](../roots-of-a-polynomial/)。

## 复数的和与差

两个复数的和与差按分量定义，即分别对实部和虚部进行运算。给定 $z_1 = a + bi$ 与 $z_2 = c + di$，其定义如下。

$$z_1 + z_2 = (a + c) + (b + d)i$$

$$z_1 - z_2 = (a - c) + (b - d)i$$

- - -

设 $z_1 = 2 - 3i$ 与 $z_2 = 3 + 5i$。为计算 $z_1 - z_2$，我们分别相减实部和虚部。减去 $z_2$ 等价于加上加法逆元 $-z_2 = -3 - 5i$，故该运算归结为按分量相减。

$$
\begin{align}
z_1 - z_2 &= (2 - 3i) - (3 + 5i) \\[6pt]
          &= (2 - 3) + (-3 - 5)i \\[6pt]
          &= -1 - 8i
\end{align}
$$

设 $z_1 = -4 + 2i$ 与 $z_2 = 6 - 7i$。为计算 $z_1 + z_2$，我们分别相加实部和虚部，因为 $\mathbb{C}$ 中的加法按定义是按分量进行的。

$$
\begin{align}
z_1 + z_2 &= (-4 + 2i) + (6 - 7i) \\[6pt]
          &= (-4 + 6) + (2 - 7)i \\[6pt]
          &= 2 - 5i
\end{align}
$$

> 复数的和与差继承了 $\mathbb{C}$ 域结构中与 $\mathbb{R}$ 相同的代数性质：交换律、结合律，以及乘法对加法的分配律。

- - -

从几何观点看，复数可解释为复平面中的[向量](../vectors/)，其中横轴表示实部，纵轴表示虚部。给定两个复数 $z_1$ 与 $z_2$，表示为从原点出发的向量，其和 $z_1 + z_2$ 对应于按平行四边形法则进行的向量加法。

+ 将对应于 $z_2$ 的向量平移，使其起点与对应于 $z_1$ 的向量的终点重合。
+ 从原点指向新终点的向量即为所得复数 $z_1 + z_2$。

![IMG. 1](/assets/complex-numbers/svg/complex-number-operations-1.svg)

上述步骤共同给出了复平面中加法与减法的完整几何解释。

差 $z_1 - z_2$ 由 $z_1$ 与 $z_2$ 的加法逆元 $-z_2$ 相加得到，$-z_2$ 对应的向量是 $z_2$ 关于原点的反射。在几何上，当两个向量均从原点出发时，$z_1 - z_2$ 对应于从 $z_2$ 的终点指向 $z_1$ 的终点的向量。

## 复数的积

两个复数的积通过应用分配律及基本关系 $i^2 = -1$ 来定义。给定 $z_1 = a + bi$ 与 $z_2 = c + di$，展开该积得到如下结果。

$$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$

此公式不必作为规则来记忆：它不过是分配乘法并代入 $i^2 = -1$ 的结果，如下例所示。

$\mathbb{C}$ 中乘法的一个重要性质是模的乘性。回忆[模](../complex-numbers-introduction/)的定义：$z = a + bi$ 的模定义为 $|z| = \sqrt{a^2 + b^2}$，可以验证对任意 $z_1, z_2 \in \mathbb{C}$ 下列恒等式成立。

$$|z_1 \cdot z_2| = |z_1| \cdot |z_2|$$

这意味着积的模等于两个因子的模之积。同一恒等式可推广到除法：对任意满足 $z_2 \neq 0$ 的 $z_1, z_2 \in \mathbb{C}$，有如下结果。

$$\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}$$

两个恒等式的几何意义在[三角表示](../complex-numbers-trigonometric-form/)中变得完全清晰：乘法将辐角相加，除法将辐角相减。

## 复数共轭的性质

复[共轭](../complex-numbers-introduction/)满足若干代数恒等式，它们直接由定义得出。设 $z, z_1, z_2 \in \mathbb{C}$。共轭映射是一个对合，即对其施加两次会回到原数：

$$\overline{\overline{z}} = z$$

共轭与加法、减法、乘法在下述意义下是相容的：

$$\overline{z_1 + z_2} = \overline{z_1} + \overline{z_2}$$

$$\overline{z_1 - z_2} = \overline{z_1} - \overline{z_2}$$

$$\overline{z_1 \cdot z_2} = \overline{z_1} \cdot \overline{z_2}$$

这些恒等式表明共轭是 $\mathbb{C}$ 的一个域自同构。它在保持域的代数结构的同时固定 $\mathbb{R}$ 中的每个元素。最后，复数与其自身的共轭之积给出模的平方，这是一个非负实数。

$$z \cdot \overline{z} = a^2 + b^2 = |z|^2$$

最后这一恒等式是复数倒数与商的计算基础。将分母乘以其共轭得到实数 $|z|^2$，以该非零实数作除数即可消去分母的虚部。

> 域自同构是从域到其自身的双射，且保持加法与乘法。共轭满足此条件，且由于它固定每个实数，所以是 $\mathbb{C}$ 在 $\mathbb{R}$ 上的自同构。

## 复数的除法

要将两个复数相除，我们将分子和分母同时乘以分母的复共轭。这样可以消去分母中的虚部，并将商化为标准形式。设 $z_1 = a + bi$ 和 $z_2 = c + di$，且 $z_2 \neq 0$，则分母的共轭为 $\overline{z_2} = c - di$，计算从下式开始。

$$\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)}$$

由于 $(c + di)(c - di) = c^2 + d^2$，当 $z_2 \neq 0$ 时它是一个严格为正的实数，因此商化为如下的显式公式。

$$\frac{a + bi}{c + di} = \frac{ac + bd}{c^2 + d^2} + \frac{bc - ad}{c^2 + d^2}i$$

与乘法类似，这个显式公式不必死记：在每种情形下直接乘以共轭更能说明问题。

设 $z_1 = 5 + 3i$ 和 $z_2 = 2 - i$。为计算商 $z_1 / z_2$，我们将分子和分母同时乘以分母的共轭 $\overline{z_2} = 2 + i$。由于乘以 $\overline{z_2} / \overline{z_2} = 1$，该表达式的值不变，而分母变为一个正实数。

$$
\begin{align}
\frac{5 + 3i}{2 - i} &= \frac{(5 + 3i)(2 + i)}{(2 - i)(2 + i)} \\[6pt]
                    &= \frac{10 + 5i + 6i + 3i^2}{4 + 1} \\[6pt]
                    &= \frac{10 + 11i + 3(-1)}{5} \\[6pt]
                    &= \frac{7 + 11i}{5} \\[6pt]
                    &= \frac{7}{5} + \frac{11}{5}i
\end{align}
$$

## 复数的倒数

非零复数 $z = a + bi$ 的倒数就是乘法逆元 $z^{-1}$，由条件 $z \cdot z^{-1} = 1$ 所定义。它是分子为 $1$ 的除法的特殊情形，其计算方法相同：将分子和分母同时乘以共轭 $\overline{z} = a - bi$。一般公式如下。

$$z^{-1} = \frac{1}{a + bi} = \frac{a - bi}{a^2 + b^2} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}i$$

设 $z = 3 - 2i$。为计算 $z^{-1}$，我们将分子和分母同时乘以共轭 $\overline{z} = 3 + 2i$。分母变为 $|z|^2 = 3^2 + 2^2 = 13$，是一个正实数，于是表达式化为复数的标准代数形式。

$$
\begin{align}
\frac{1}{3 - 2i} &= \frac{3 + 2i}{(3 - 2i)(3 + 2i)} \\[6pt]
                 &= \frac{3 + 2i}{9 + 4} \\[6pt]
                 &= \frac{3 + 2i}{13} \\[6pt]
                 &= \frac{3}{13} + \frac{2}{13}i
\end{align}
$$

## 三角形式下的乘法与除法

当复数用三角形式或指数形式表示时，乘法和除法运算可以获得一种特别清晰的几何解释。考虑以下复数：

$$z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$$

$$z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$$

它们的积和商具有如下形式：

$$z_1 \cdot z_2 = r_1 r_2 \bigl(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\bigr)$$

$$\frac{z_1}{z_2} = \frac{r_1}{r_2} \bigl(\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)\bigr)$$

因此，乘法使模相乘、辐角相加，而除法使模相除、辐角相减。这种几何结构在代数形式 $a + bi$ 中完全隐藏，只有在复数的[三角表示](../complex-numbers-trigonometric-form/)和[指数表示](../complex-numbers-exponential-form/)中才能显现出来。
