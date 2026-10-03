---
title: 夹逼定理
title_en: Squeeze Theorem
source: https://algebrica.org/squeeze-theorem/
license: CC BY-NC 4.0
tags:
  - bounded-functions
  - geometric-proof
  - limits
  - oscillating-functions
  - remarkable-limits
  - squeeze-theorem
translation:
  status: current
  source_hash: 19b8730825cfa00cffdb87fd3f52b29b37c3bbd6c50d02478c8a992378b19f22
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 陈述

计算[极限](../limits/)时，可能遇到直接代入并不奏效的问题。极限部分的相关词条中会看到，某些技巧使我们能够处理特定的形式，例如[未定式](../indeterminate-forms/)。有些函数，例如[正弦和余弦](../sine-and-cosine/)，具有振荡行为，需要单独讨论。在这些情形中，我们使用夹逼定理，它使我们能够轻松地求出下面这类表达式的极限：

$$x\sin\left( \frac{1}{x} \right) \qquad \frac{\sin x}{x} \qquad x^2\cos\left( \frac{1}{x} \right)$$

从实用的角度说，这个定理使我们能够把原来的[函数](../functions/)夹在两个极限相同的函数之间，从而确定它的极限。考虑一个[极限点](../topology-of-the-real-line/) $x_0 \in \mathbb{R} \cup \{ \pm\infty \}$。按照定义，这个点的每个邻域都至少包含[定义域](../determining-the-domain-of-a-function/)中一个不同于 $x_0$ 的点。然后考虑三个实值函数 $f$、$g$ 和 $h$，它们在定义域中位于 $x_0$ 的某个邻域 $I$ 内的点处有定义。再假设下面的[不等式](../inequalities/)成立，它表示 $f$ 的图像始终位于 $g$ 与 $h$ 的图像之间：

$$g(x) \leq f(x) \leq h(x) \tag{1}$$

此时，假设我们知道下面的极限 $\ell$：

$$\lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = \ell\tag{2}$$

那么在这些假设下，函数 $f(x)$ 也有极限，其值恰好是 $(2)$ 中的极限：

$$\lim_{x \to x_0} f(x) = \ell\tag{3}$$

从图像上看，表示 $f(x)$ 的曲线始终位于下界函数 $g(x)$ 与上界函数 $h(x)$ 之间，由于二者都趋于 $\ell$，函数 $f(x)$ 也必然收敛到同一个极限。


![图 1](/assets/limits/svg/squeeze-theorem-1.zh.svg)



为了证明这个结果，我们固定任意一个数 $\varepsilon > 0$，并证明夹在 $g(x)$ 与 $h(x)$ 之间的函数 $f(x)$ 在 $x \to x_0$ 时趋于同一个极限 $\ell$。由 $(1)$ 中所述的假设，我们知道 $\lim_{x \to x_0} g(x) = \ell$。因此，按照极限的定义，存在正数 $\delta_1$，使得对定义域中每个满足 $0 < |x - x_0| < \delta_1$ 的 $x$，都有：

$$\ell - \varepsilon < g(x) < \ell + \varepsilon \tag{4}$$

同样由 $(1)$，由于我们知道 $\lim_{x \to x_0} h(x) = \ell$，与刚才类似的论证给出正数 $\delta_2$，使得对定义域中每个满足 $0 < |x - x_0| < \delta_2$ 的 $x$，都有：

$$\ell - \varepsilon < h(x) < \ell + \varepsilon \tag{5}$$

令 $\delta = \min(\delta_1, \delta_2)$，可知对定义域中每个满足 $0 < |x - x_0| < \delta$ 的 $x$，$(4)$ 和 $(5)$ 都成立。由于 $(1)$ 也成立，我们得到：

$$\ell - \varepsilon < f(x) < \ell + \varepsilon \tag{6}$$

由于这个条件对每个 $\varepsilon > 0$ 都成立，我们得出结论：

$$\lim_{x \to x_0} f(x) = \ell$$

当 $x_0 = +\infty$ 时，条件 $0 < |x - x_0| < \delta_1$ 和 $0 < |x - x_0| < \delta_2$ 换成 $x > M_1$ 和 $x > M_2$。取 $M = \max(M_1, M_2)$ 充分大，就能保证两个界在 $x > M$ 时都成立，夹逼定理给出的结论与刚才证明的情形相同。对于 $x_0 = -\infty$，则改用条件 $x < M_1$ 和 $x < M_2$，并取 $M = \min(M_1, M_2)$。

## 例题

下面给出几个例子，说明这个定理在实际中如何应用。我们来计算下面这个函数的极限：

$$\lim_{x \to 0} x \cdot \sin\left( \frac{1}{x} \right) \tag{7}$$

不能直接代入 $x = 0$，因为 $1/x$ 在零处没有定义。因子 $x$ 趋于零，而 $\sin(1/x)$ 在 $x \to 0$ 时没有极限，因为它在 $-1$ 与 $1$ 之间无限振荡。不过我们知道，当 $x \neq 0$ 时下面的不等式成立，因为[正弦函数](../sine-function/)的值位于这两个值之间：

$$-1 \leq \sin\left( \frac{1}{x} \right) \leq 1 \tag{8}$$

为了计算 $(7)$ 中的极限，注意 $(8)$ 保证正弦的[绝对值](../absolute-value/)不超过 $1$，由此乘以 $x$，得到：

$$-|x| \leq x \cdot \sin\left( \frac{1}{x} \right) \leq |x| \tag{9}$$

由 $(9)$ 可以看出，函数 $-|x|$ 和 $|x|$ 在 $x \to 0$ 时趋于零，因此，由于 $x \sin(1/x)$ 位于它们之间，夹逼定理给出 $(7)$ 中极限的值为零：

$$\lim_{x \to 0} x \cdot \sin\left( \frac{1}{x} \right) = 0$$

一般地，请记住下面这条规则，它对解决与刚才类似的问题非常有用：有界的振荡函数乘以[幂](../powers/) $x^n$（$n$ 为正整数）时，乘积在 $x$ 趋于零时趋于零。

- - -

现在考虑下面的极限：

$$\lim_{x \to +\infty} \frac{\ln(3 + \sin x)}{x^3} \tag{10}$$

分子振荡但保持有界，而分母趋于 $+\infty$。为了应用夹逼定理，我们考察对数的真数。首先，我们知道：

$$-1 \leq \sin x \leq 1 \tag{11}$$

为了与对数真数的结构相对应，给 $(11)$ 的每一项加上 $3$，得到：

$$2 \leq 3 + \sin x \leq 4$$

现在对不等式应用[对数函数](../logarithmic-function/)，得到：

$$\ln 2 \leq \ln(3 + \sin x) \leq \ln 4$$

然后除以 $(10)$ 中的分母，得到：

$$\frac{\ln 2}{x^3} \leq \frac{\ln(3 + \sin x)}{x^3} \leq \frac{\ln 4}{x^3}$$

不等式写成这种形式后，下界函数和上界函数在 $x \to +\infty$ 时都趋于零，所以 $(10)$ 中的极限也为零。因此可以写出：

$$\lim_{x \to +\infty} \frac{\ln(3 + \sin x)}{x^3} = 0$$

- - -

现在计算极限：

$$\lim_{x \to 0} \left( x^4 \cdot \cos\left( \frac{2}{x} \right) + 2 \right) \tag{12}$$

与正弦一样，[余弦函数](../cosine-function/)的值位于 $-1$ 与 $1$ 之间，所以下面的不等式对每个 $x \neq 0$ 成立：

$$-1 \leq \cos\left( \frac{2}{x} \right) \leq 1$$

像 $(12)$ 中那样，把三项都乘以 $x^4$，得到：

$$-x^4 \leq x^4 \cdot \cos\left( \frac{2}{x} \right) \leq x^4$$

当 $x$ 趋于 $0$ 时，下界函数和上界函数的极限都为零，所以夹逼定理给出：
$$\lim_{x \to 0} x^4 \cdot \cos\left( \frac{2}{x} \right) = 0$$

可以看到，我们还需要处理 $(12)$ 中的常数 2，所以利用[极限的运算法则](../algebra-of-limits/)，特别是和的极限法则，得到：

$$\lim_{x \to 0} \left( x^4 \cdot \cos\left( \frac{2}{x} \right) + 2 \right) = 0 + 2 = 2$$

因此 $(12)$ 中的极限为 $2$。

## 一个基本极限

夹逼定理还值得通过它在一个[基本三角极限](../remarkable-limits/)上的应用作进一步考察：

$$\lim_{x \to 0} \frac{\sin x}{x} = 1 \tag{13}$$

考虑[单位圆](../unit-circle/)上的一个[角](../angles-and-angular-measure/) $x \in (0, \pi/2)$，设 $O$ 为圆心，$A$ 为水平正半轴上的点 $(1, 0)$，$P$ 为由角 $x$ 确定的圆上的点，该角从 $OA$ 起按逆时针方向度量。再确定射线 $OP$ 与过 $A$ 的竖直切线的交点 $T$。这样就得到三个区域：

+ 三角形 $OAP$
+ 由 $OA$、$OP$ 和弧 $AP$ 围成的扇形
+ 三角形 $OAT$。

现在可以比较这些区域，先从第一个开始，即三角形 $OAP$，它的面积为

$$\mathrm{Area}(OAP) = \frac{1}{2} \sin x$$

![图 2](/assets/limits/svg/squeeze-theorem-2.svg)


第二项中的扇形记为 S，它的面积为

$$\mathrm{Area}(\mathrm{S}) = \frac{1}{2} x$$

![图 3](/assets/limits/svg/squeeze-theorem-3.svg)

最后，三角形 $OAT$ 的面积为：

$$\mathrm{Area}(OAT) = \frac{1}{2} \tan x$$

![图 3](/assets/limits/svg/squeeze-theorem-3.svg)

由这个作图可以推出，三角形 $OAP$ 包含于扇形内，而扇形又包含于三角形 $OAT$ 内，所以它们的面积满足下面的不等式：

$$\frac{1}{2} \sin x < \frac{1}{2} x < \frac{1}{2} \tan x \tag{14}$$

把 $(14)$ 乘以 $2$ 消去分母，得到：

$$\sin x < x < \tan x \tag{15}$$

由于当 $x \in (0, \pi/2)$ 时 $\sin x$ 严格为正，把 $(15)$ 除以 $\sin x$，得到：

$$1 < \frac{x}{\sin x} < \frac{1}{\cos x}$$

中间的表达式是 $(13)$ 的极限中出现的函数的倒数，所以可以对 $(15)$ 取倒数加以改写，得到：

$$\cos x < \frac{\sin x}{x} < 1$$

刚得到的不等式对 $0 < x < \pi/2$ 成立，所以它使我们能够研究 $x$ 从右侧趋近零时比值 $\sin x/x$ 的行为。下界函数 $\cos x$ 和常数上界函数 $1$ 的极限都是 $1$：

$$
\begin{align}
& \lim_{x \to 0^+} \cos x = 1 \\[6pt]
&\lim_{x \to 0^+} 1 = 1
\end{align}
$$

当 $x$ 从右侧趋近零时，$\cos x$ 趋近 $1$，而上界本身就是 $1$。因此，位于这两个值之间的比值 $\sin x/x$ 也必须趋近 $1$，夹逼定理给出：

$$\lim_{x \to 0^+} \frac{\sin x}{x} = 1$$

当 $x$ 从左侧趋近零时，同样的结果成立。事实上，改变 $x$ 的符号会同时改变正弦和分母的符号，比值保持不变：

$$\frac{\sin(-x)}{-x} = \frac{-\sin x}{-x} = \frac{\sin x}{x}$$

因此比值从两侧都趋于 $1$，于是可以断定 $(13)$ 中的极限已经得到证明。
