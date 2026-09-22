---
title: 积分的递推公式
title_en: Reduction Formulas for Integrals
source: https://algebrica.org/reduction-formulas/
license: CC BY-NC 4.0
tags:
  - definite-integral
  - indefinite-integral
  - integration-by-parts
  - integration-techniques
  - recurrence-relations
  - reduction-formulas
translation:
  status: current
  source_hash: 70759f56cd7e113a75c3b4c63aca13b8b27bc08eadf2dfd270d753adb7ab8b8f
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 引言

下面介绍的递推公式可以让最初看似困难的积分变得容易计算。它们对计算某些涉及指数函数或三角函数的积分很有用。

一般地说，在介绍公式之前，我们把相关积分组织成带下标的函数族，其成员记作 $I_n$。这个记号允许我们使用一般的指数，从而简化计算。在下文中，除非某个特定的函数族要求更强的限制，$n$ 总表示非负整数。例如，考虑下面两个积分：

$$\int \sin^3 x dx \quad \lor \quad \int \sin^5 x dx$$

我们可以把它们都看作下面函数族的成员：

$$I_n=\int\sin^nx \ dx$$

这个推广让我们只对一般指数 $n$ 做一次计算，而不必对 $n=3$ 与 $n=5$ 分别重复。这种方法很有用，因为它能显著减少涉及此类积分的问题中的计算量。

本文考虑的递推公式具有如下形式：

$$I_n=g_n(x)+\lambda_nI_{n-k} \tag{1}$$

+ 项 $g_n(x)$ 是约化产生的显式项
+ 系数 $\lambda_n$ 依赖于下标，但不依赖于变量
+ 整数 $k\geq1$ 是下标降低的步长。

在下文中，[不定积分](../indefinite-integrals/)之间的每个等式都理解为模去一个加性常数。等价地，对每个函数族，我们选取与递推相容的原函数，并只在最终结果中添加任意常数。

方法将在下面各节中变得清晰。然而，数学中常见的情形是，它并不总像本引言暗示的那样方便。当指数足够高、以致[分部积分](../integration-by-parts/)或其他直接处理会很冗长时，递推公式通常才有用；对低次指数，它未必是最佳选择。

## $x$ 的幂与 $e^{ax}$、$\sin x$、$\cos x$ 的乘积

我们从 $x^n$ 乘以[指数函数](../integral-of-the-exponential-function/)构成的积分开始，定义 $J_n$：

$$J_n=\int x^ne^{ax} \ dx \qquad a\neq0, \quad n\geq0$$

因子 $e^{ax}$ 容易积分，而对 $x^n$ 求导会降低它的次数。因此我们作分部积分，取 $u=x^n$，$dv=e^{ax} \ dx$。这给出 $du=nx^{n-1} \ dx$ 与 $v=e^{ax}/a$，于是分部积分公式给出：

$$J_n=\frac{x^ne^{ax}}{a}-\frac{n}{a}J_{n-1} \qquad n\geq1 \tag{2}$$

对 $n=0$，基底情形是 $J_0=e^{ax}/a$。作为例子，计算下面的积分：

$$\int x^3e^x \ dx$$

迭代地应用关系 $(2)$，得：

$$
\begin{align}
J_3 &= x^3e^x-3J_2 \\[6pt]
J_2 &= x^2e^x-2J_1 \\[6pt]
J_1 &= xe^x-J_0 \\[6pt]
J_0 &= e^x
\end{align}
$$

从最后一行出发，得 $J_1=xe^x-e^x$，进而 $J_2=x^2e^x-2xe^x+2e^x$。把 $J_2$ 代入第一行并提取公因子 $e^x$，得：

$$\int x^3e^x \ dx=e^x(x^3-3x^2+6x-6)+c$$

对一般的 $n$，闭式中的系数由 $x^n$ 逐次求导产生的阶乘比给出：

$$\int x^ne^{ax} \ dx=e^{ax}\sum_{k=0}^{n}(-1)^k\frac{n!}{(n-k)!}\frac{x^{n-k}}{a^{k+1}}+c \tag{3}$$

- - -

把指数函数换成正弦或余弦，情况略有变化。设 $u=x^n$，$dv=\sin x \ dx$ 会引入余弦，第二次分部积分则回到含正弦的积分：

$$\int x^n\sin x \ dx=-x^n\cos x+nx^{n-1}\sin x-n(n-1)\int x^{n-2}\sin x \ dx \qquad n\geq2$$

现在有两个基底情形：$n$ 为偶数时递推终止于 $\int\sin x \ dx$，$n$ 为奇数时终止于 $\int x\sin x \ dx$。

## 正弦与余弦的幂

接下来考虑正弦的整数次幂。定义 $S_n$：

$$S_n=\int\sin^nx \ dx \qquad n\geq0$$

把被积函数写成 $\sin^{n-1}x\cdot\sin x$，并设 $u=\sin^{n-1}x$，$dv=\sin x \ dx$，由此 $du=(n-1)\sin^{n-2}x\cos x \ dx$，$v=-\cos x$。分部积分让我们可以把积分改写为：

$$S_n=-\sin^{n-1}x\cos x+(n-1)\int\sin^{n-2}x\cos^2x \ dx$$

右边的积分不属于该函数族，因为它含有 $\cos^2x$。代入[基本三角恒等式](../pythagorean-identity/) $\cos^2x=1-\sin^2x$，把积分拆成该族的两个成员，下标分别为 $n-2$ 与 $n$：

$$S_n=-\sin^{n-1}x\cos x+(n-1)S_{n-2}-(n-1)S_n$$

把项 $(n-1)S_n$ 移到左边并除以 $n$，得：

$$S_n=-\frac{\sin^{n-1}x\cos x}{n}+\frac{n-1}{n}S_{n-2} \qquad n\geq2 \tag{4}$$

余弦的情形类似。取 $u=\cos^{n-1}x$，$dv=\cos x \ dx$，得 $(4)$ 的对应形式：

$$C_n=\int\cos^nx \ dx=\frac{\cos^{n-1}x\sin x}{n}+\frac{n-1}{n}C_{n-2} \qquad n\geq2 \tag{5}$$

现在确定每个函数族的两个基底情形。对正弦族，$S_0=x$，$S_1=-\cos x$；对余弦族，$C_0=x$，$C_1=\sin x$。把 $(4)$ 应用于 $\int\sin^4x \ dx$：第一步把下标降到 2，第二步降到 0：

$$
\begin{align}
S_4 &= -\frac{\sin^3x\cos x}{4}+\frac{3}{4}S_2 \\[6pt]
S_2 &= -\frac{\sin x\cos x}{2}+\frac{1}{2}S_0 \\[6pt]
S_0 &= x
\end{align}
$$

把 $S_2$ 代入第一行并整理各项，得原函数：

$$\int\sin^4x \ dx=-\frac{\sin^3x\cos x}{4}-\frac{3\sin x\cos x}{8}+\frac{3x}{8}+c$$

对奇次指数，$(4)$ 仍然有效，但更好的做法是提取出 $\sin x$，并用基本三角恒等式把剩余因子用余弦表示。然后一个[换元](../integration-by-substitution/)即可算出积分，见[三角函数的积分](../integral-of-trigonometric-functions/)中的讨论。递推公式对偶次指数最有用，因为此时基本恒等式不会降低指数。

## $\tan x$ 与 $\ln x$ 的幂

接下来考虑正切的幂，对此一个代数恒等式就够了，不需要分部积分。考虑下面的函数族：

$$T_n=\int\tan^nx \ dx \qquad n\geq0$$

利用 $\tan^2x=\sec^2x-1$（由基本三角恒等式除以 $\cos^2x$ 得到），得：

$$
\begin{align}
T_n &= \int\tan^{n-2}x(\sec^2x-1) \ dx \\[6pt]
    &= \int\tan^{n-2}x\sec^2x \ dx-T_{n-2}
\end{align}
$$

第一个积分可以用换元 $u=\tan x$ 直接算出，因为 $du=\sec^2x \ dx$。于是：

$$T_n=\frac{\tan^{n-1}x}{n-1}-T_{n-2} \qquad n\geq2 \tag{6}$$

基底情形是 $T_0=x$ 与 $T_1=-\ln|\cos x|$。$(6)$ 中的系数等于 $-1$，不依赖于下标，因此递推产生正切幂的交错和。$n$ 为偶数时终止于 $T_0=x$，$n$ 为奇数时终止于 $T_1=-\ln|\cos x|$。对 $n=4$，递推给出 $T_4=\tan^3x/3-T_2$，进而 $T_2=\tan x-T_0$，因此：

$$\int\tan^4x \ dx=\frac{\tan^3x}{3}-\tan x+x+c$$

- - -

对[对数函数](../logarithmic-function/)的幂，我们回到分部积分。定义 $L_n$：

$$L_n=\int\ln^nx \ dx \qquad n\geq0$$

把被积函数看作 $\ln^nx\cdot1$，并作分部积分，取 $u=\ln^nx$，$dv=dx$。由于 $v=x$，$du=n\ln^{n-1}x/x \ dx$，来自 $v$ 的因子 $x$ 与 $du$ 中的分母相消，给出：

$$L_n=x\ln^nx-nL_{n-1} \qquad n\geq1 \tag{7}$$

基底情形是 $L_0=x$。该递推与 $(2)$ 结构相同。对 $n=3$，反复应用得 $L_3=x\ln^3x-3L_2$，$L_2=x\ln^2x-2L_1$，以及 $L_1=x\ln x-x$，因此：

$$\int\ln^3x \ dx=x\ln^3x-3x\ln^2x+6x\ln x-6x+c$$

系数 $1,3,6,6$ 与指数函数例子中的系数相同，这并非巧合。换元 $x=e^t$ 把 $dx$ 变为 $e^t \ dt$，把 $\ln^nx$ 变为 $t^n$，因此定义 $L_n$ 的积分变成 $J_n$ 在 $a=1$ 时的情形，只是积分变量为 $t$。在这一换元下，关系 $(2)$ 与 $(7)$ 相互对应。

## 二次分母的幂

最后一族出现在[有理函数的积分](../integral-of-rational-functions/)中，结构与前面各派不同。过程更复杂，但值得介绍，因为这类积分相当常见：

$$I_n=\int\frac{dx}{(x^2+a^2)^n} \qquad a\neq0, \quad n\geq1$$

基底情形是标准的[反正切](../arctangent-function/)积分：

$$I_1=\frac{1}{a}\arctan\frac{x}{a}$$

设 $u=(x^2+a^2)^{-n}$，$dv=dx$，因此 $v=x$，$du=-2nx(x^2+a^2)^{-n-1} \ dx$。分部积分产生：

$$I_n=\frac{x}{(x^2+a^2)^n}+2n\int\frac{x^2}{(x^2+a^2)^{n+1}} \ dx$$

用 $x^2=(x^2+a^2)-a^2$ 表示右边的积分，并把分式拆成两项，就用该函数族表示了它。第一项化为 $I_n$，第二项是 $-a^2I_{n+1}$，给出：

$$\int\frac{x^2}{(x^2+a^2)^{n+1}} \ dx=I_n-a^2I_{n+1}$$

代入并合并 $I_n$ 项，得：

$$I_n=x(x^2+a^2)^{-n}+2nI_n-2na^2I_{n+1}$$

解出 $I_{n+1}$，得递推公式：

$$I_{n+1}=\frac{1}{2na^2}\left[\frac{x}{(x^2+a^2)^n}+(2n-1)I_n\right] \tag{8}$$

这是上面唯一一个一开始把高下标积分写在左边的递推式。对负幂 $(x^2+a^2)^{-n}$ 求导会把指数变为 $-n-1$，使其绝对值增大。平移下标，得下降形式，对 $n\geq2$ 有效：

$$I_n=\frac{1}{2(n-1)a^2}\left[\frac{x}{(x^2+a^2)^{n-1}}+(2n-3)I_{n-1}\right]$$

无论哪种形式，递推都锚定在基底情形 $I_1$，即反正切积分。第一步就给出常用的 $I_2$ 公式：

$$I_2=\frac{x}{2a^2(x^2+a^2)}+\frac{1}{2a^3}\arctan\frac{x}{a}+c$$

公式 $(8)$ 用于计算具有重复不可约二次因子的有理函数作[部分分式分解](../partial-fraction-decomposition/)后产生的常数分子项。当分母含 $(x^2+bx+c)^k$ 且判别式为负时，分解式中该因子的每个幂次——从 1 到 $k$——各出现一项，每项的分子都是一次的：

$$\frac{A_1x+B_1}{x^2+bx+c}+\frac{A_2x+B_2}{(x^2+bx+c)^2}+\dots+\frac{A_kx+B_k}{(x^2+bx+c)^k}$$

每个分子都可以写成分母的导数的倍数加上一个常数。与导数成正比的部分用换元积分，给出分母的幂，指数为 1 时给出对数。[配方](../completing-the-square/)之后，常数部分化为 $I_j$ 形式的积分，因为换元 $u=x+b/2$ 把分母化为 $u^2+a^2$ 的形式，其中 $a^2=c-b^2/4$，由判别式为负可知它为正。

一个例子可以说明这个想法。对 $j=2$，分子已经就是分母的导数与一个常数之和，因此积分立刻分成两项：

$$\int\frac{2x+3}{(x^2+4)^2} \ dx=\int\frac{2x}{(x^2+4)^2} \ dx+3\int\frac{dx}{(x^2+4)^2}$$

对第一个积分，设 $u=x^2+4$，则 $du=2x \ dx$，积分变为 $\int u^{-2} \ du=-1/u$。第二个是 $a=2$ 的 $3I_2$，因此刚导出的公式给出：

$$I_2=x/\big(8(x^2+4)\big)+\frac{1}{16}\arctan(x/2).$$

把两部分相加，并把有理项合并到公分母上，得：

$$\int\frac{2x+3}{(x^2+4)^2} \ dx=\frac{3x-8}{8(x^2+4)}+\frac{3}{16}\arctan\frac{x}{2}+c$$

## 定积分的递推

对[定积分](../definite-integrals/)，分部积分给出：

$$\int_a^b u \ dv=\Big[uv\Big]_a^b-\int_a^b v \ du$$

对定积分，每个递推公式都变成数值之间的递推。$(1)$ 中的项 $g_n$ 贡献 $g_n(b)-g_n(a)$。当这个差为零时，递推具有纯数字系数，整个函数族仅由基底情形决定。

标准的例子是 $\sin^nx$ 在 $[0,\pi/2]$ 上的积分。$(4)$ 中的显式项是 $-\sin^{n-1}x\cos x/n$。它在 $0$ 处因正弦因子而为零，在 $\pi/2$ 处因余弦因子而为零，因此递推化为：

$$\int_0^{\pi/2}\sin^nx \ dx=\frac{n-1}{n}\int_0^{\pi/2}\sin^{n-2}x \ dx \qquad n\geq2 \tag{9}$$

两个基底情形是 $\int_0^{\pi/2}dx=\pi/2$ 与 $\int_0^{\pi/2}\sin x \ dx=1$。递推保持下标的奇偶性，因此 $n$ 为偶数时保留因子 $\pi/2$，$n$ 为奇数时则是有理数。例如，对 $n=4$ 与 $n=5$，得：

$$\int_0^{\pi/2}\sin^4x \ dx=\frac{3}{4}\cdot\frac{1}{2}\cdot\frac{\pi}{2}=\frac{3\pi}{16}$$

$$\int_0^{\pi/2}\sin^5x \ dx=\frac{4}{5}\cdot\frac{2}{3}=\frac{8}{15}$$

换元 $u=\pi/2-x$ 交换正弦与余弦，并把区间映到自身，因此两个定积分对每个 $n$ 都相等。在同一区间上应用 $(5)$ 产生同样的数值序列。

> $(9)$ 中的积分称为沃利斯积分。它们的单调性、渐近行为以及相关的无穷乘积，是这个数列本身的性质而不是积分技巧的性质，因此单独处理。
