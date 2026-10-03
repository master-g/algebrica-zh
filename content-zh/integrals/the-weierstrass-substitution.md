---
title: 魏尔斯特拉斯换元
title_en: The Weierstrass Substitution
source: https://algebrica.org/the-weierstrass-substitution/
license: CC BY-NC 4.0
tags:
  - arctangent
  - half-angle-substitution
  - indefinite-integral
  - integration-by-substitution
  - partial-fractions
  - rational-functions
  - trigonometric-identities
  - trigonometric-integrals
  - weierstrass-substitution
translation:
  status: current
  source_hash: dcf816a52ce711fd780f30a7e1ea8cbe683fbf252055cda48100f353cf0cd3f7
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 何时使用这种换元

魏尔斯特拉斯换元是一种通过适当的变量代换来计算某些无法直接求出的积分的方法，这些积分的被积函数是含有正弦和余弦的[有理函数](../rational-functions/)。一般说来，这类积分的形式与下面列出的类似，其中分子和分母是关于 $\sin x$ 和 $\cos x$ 的多项式：

$$\frac{1}{1 + \sin x} \qquad \frac{1}{5 - 3\cos x} \qquad \frac{1}{\sin x + \cos x} \tag{1}$$

我们已经讲过一些[三角函数积分](../integral-of-trigonometric-functions/)的技巧，它们以降幂公式或分离因子为基础。但在 $(1)$ 这样的情形中，这些技巧并不能让我们轻松得到结果。在下面要考虑的情形中，需要作一个变量代换，把问题化为简单有理函数的积分，后者一般用[多项式除法](../polynomial-division/)和[部分分式分解](../partial-fraction-decomposition/)来处理。

魏尔斯特拉斯换元以引入下面的变量为基础：

$$t = \tan\left(\frac{x}{2}\right) \tag{2}$$

这个换元使我们能够把 $\sin x$、$\cos x$ 和[微分](../differential-of-a-function/) $dx$ 写成 $t$ 的有理表达式。稍后会看到，推导这些表达式要用到二倍角公式和[勾股恒等式](../pythagorean-identity/)。求出关于 $t$ 的原函数之后，再代入 $t = \tan(x/2)$ 回到原变量 $x$。

首先来看怎样推导正弦、余弦和微分的表达式。先要说明，回忆计算中用到的各个三角恒等式需要花一点力气，所以建议你在继续之前先查阅相关页面。对于正弦，从[二倍角公式](../trigonometric-identities/)出发，它给出：

$$\sin x = 2\sin\left(\frac{x}{2}\right)\cos\left(\frac{x}{2}\right) \tag{3}$$

乘以 $\cos(x/2) / \cos(x/2)$，可以把右边改写为：

$$2\tan\left(\frac{x}{2}\right)\cos^2\left(\frac{x}{2}\right) \tag{4}$$

对于余弦，下面的三角恒等式成立：

$$\cos^2\left(\frac{x}{2}\right) = \frac{1}{1 + \tan^2(x/2)}$$

把它代入 $(4)$，就可以把 $(3)$ 中正弦的表达式改写为：

$$\sin x = \frac{2t}{1 + t^2} \tag{5}$$

- - -

推导余弦的表达式时步骤类似，使用相应的二倍角公式：

$$\cos x = \cos^2\left(\frac{x}{2}\right) - \sin^2\left(\frac{x}{2}\right)$$

把右边除以 $\cos^2(x/2) + \sin^2(x/2)$，再把分子和分母同除以 $\cos^2(x/2)$，得到：

$$\cos x = \frac{1 - t^2}{1 + t^2} \tag{6}$$

- - -

最后，把关系 $(2)$ 对 $x$ 求导来计算微分。这样得到：

$$\frac{dt}{dx} = \frac{1}{2}\sec^2\left(\frac{x}{2}\right) = \frac{1}{2}\left(1 + \tan^2\left(\frac{x}{2}\right)\right) = \frac{1 + t^2}{2}$$

解出 $dx$，就得到这种换元所依据的第三个恒等式，即：

$$dx = \frac{2}{1 + t^2} \ dt \tag{7}$$

因此，有了刚推导出的公式 $(5)$、$(6)$ 和 $(7)$，就可以应用魏尔斯特拉斯方法：把它们代入任何关于 $\sin x$ 和 $\cos x$ 的有理表达式的积分，用更简单的变量 $t$ 来表示。总结一下，要作的代换如下：

[class="table-1"]

|          |                         |
| -------- | ----------------------- |
| $\sin x$ | $\dfrac{2t}{1+t^2}$     |
| $\cos x$ | $\dfrac{1-t^2}{1+t^2}$  |
| $dx$     | $\dfrac{2}{1+t^2} \ dt$ |

[/class]

## 实际应用

我们通过几个例子说明魏尔斯特拉斯方法在实际中如何应用。考虑下面的积分，它的被积函数是正弦的有理函数：

$$\int \frac{dx}{1 + \sin x}$$

利用恒等式 $(5)$，可以把分母改写如下：

$$
\begin{align}
1 + \sin x &= 1 + \frac{2t}{1+t^2} \\[6pt]
           &= \frac{1 + t^2 + 2t}{1+t^2} \\[6pt]
           &= \frac{(1+t)^2}{1+t^2}
\end{align}
$$

现在用 $(7)$ 改写微分，得到：

$$
\begin{align}
\frac{1}{1+\sin x} \ dx &= \frac{1+t^2}{(1+t)^2} \cdot \frac{2}{1+t^2} \ dt \\[6pt]
                       &= \frac{2}{(1+t)^2} \ dt
\end{align}
$$

这样得到的被积函数，其[原函数](../indefinite-integrals/)可以直接求出：

$$\int \frac{2}{(1+t)^2} \ dt = -\frac{2}{1+t} + c$$

此时通过恒等式 $t = \tan(x/2)$ 回到原变量，得到结果：

$$\int \frac{dx}{1 + \sin x} = -\frac{2}{1 + \tan(x/2)} + c$$

- - -

现在考虑下面的积分，它的被积函数是余弦的有理函数：

$$\int \frac{dx}{5 - 3\cos x}$$

利用恒等式 $(6)$，可以把分母改写为：

$$
\begin{align}
5 - 3\cos x &= 5 - 3 \cdot \frac{1 - t^2}{1+t^2} \\[6pt]
            &= \frac{5(1+t^2) - 3(1-t^2)}{1+t^2} \\[6pt]
            &= \frac{2 + 8t^2}{1+t^2} \\[8pt]
            &= \frac{2(1 + 4t^2)}{1+t^2}
\end{align}
$$

现在用 $(7)$ 代入微分的表达式，得到：

$$
\begin{align}
\frac{1}{5-3\cos x} \ dx &= \frac{1+t^2}{2(1+4t^2)} \cdot \frac{2}{1+t^2} \ dt \\[6pt]
                        &= \frac{dt}{1 + 4t^2}
\end{align}
$$

这里剩下的积分同样化为初等形式；由于 $1 + 4t^2 = 1 + (2t)^2$，令 $u = 2t$ 和 $du = 2 \ dt$，积分变为：

$$
\begin{align}
\int \frac{dt}{1 + 4t^2} &= \frac{1}{2}\int \frac{du}{1 + u^2} \\[6pt]
                        &= \frac{1}{2}\arctan u + c \\[6pt]
                        &= \frac{1}{2}\arctan(2t) + c
\end{align}
$$

回到变量 $x$，得到原函数：

$$\int \frac{dx}{5 - 3\cos x} = \frac{1}{2}\arctan(2\tan(x/2)) + c$$

- - -

最后再举一例，计算下面的积分：

$$\int \frac{dx}{2 + \sin x}$$

应用已经推导出的恒等式，可以把分母改写如下：

$$
\begin{align}
2 + \sin x &= 2 + \frac{2t}{1+t^2} \\[6pt]
           &= \frac{2(1+t^2) + 2t}{1+t^2} \\[6pt]
           &= \frac{2(t^2 + t + 1)}{1+t^2}
\end{align}
$$

因此要积分的表达式变为：

$$
\begin{align}
\frac{1}{2+\sin x} \ dx &= \frac{1+t^2}{2(t^2+t+1)} \cdot \frac{2}{1+t^2} \ dt \\[6pt]
                       &= \frac{dt}{t^2+t+1}
\end{align}
$$

对分母[配方](../completing-the-square/)，得到：

$$t^2 + t + 1 = \left(t + \frac{1}{2}\right)^2 + \frac{3}{4}$$

于是积分变为：

$$\int \frac{dt}{\left(t+\frac{1}{2}\right)^2 + \frac{3}{4}}$$

稍加练习就能认出，这个表达式与下面的初等形式相符：

$$\int \frac{du}{u^2 + a^2}$$

在这里，$u = t + 1/2$，$a = \sqrt{3}/2$。利用相应的积分公式，得到：

$$\int \frac{dt}{t^2+t+1} = \frac{2}{\sqrt{3}}\arctan\left(\frac{2t+1}{\sqrt{3}}\right) + c$$

再次代入 $t = \tan(x/2)$，得到最终表达式：

$$\int \frac{dx}{2+\sin x} = \frac{2}{\sqrt{3}}\arctan\left(\frac{2\tan(x/2)+1}{\sqrt{3}}\right) + c$$

> 这里同样可以看到，换元之后，被积函数变成 $t$ 的有理函数，比原来的更简单，它的原函数可能含有[反正切](../arctangent-function/)和[对数](../logarithms/)，这两者在[有理函数的积分](../integral-of-rational-functions/)中很常见。

## 定义域条件

我们需要考虑换元中所涉及函数的定义域。换元 $t = \tan(x/2)$ 对每个满足 $x/2 \neq \pi/2 + k\pi$ 的 $x$ 有定义，也就是对每个 $x \notin \pi + 2\pi\mathbb{Z}$ 有定义。计算[不定积分](../indefinite-integrals/)时，所得公式在原被积函数和换元都有定义的区间上成立。

把这种换元应用于[定积分](../definite-integrals/)时需要更加小心，因为积分限可能落在不同的区间内。这时，我们把积分的[定义域](../determining-the-domain-of-a-function/)分成若干部分，在每一部分上换元有定义、导数连续且不为零，并且在该区间上[可逆](../inverse-function/)；在每一部分上分别应用换元，再把所得的贡献相加。如果跨过形如 $x = (2k+1)\pi$ 的点机械地套用上面的代换，就可能得到错误的结果，因为换元在该点可能没有定义。例如，考虑定积分：

$$\int_0^{2\pi} \frac{dx}{5 - 3\cos x}$$

被积函数在整个区间 $[0,2\pi]$ 上[连续](../continuous-functions/)，而换元 $t = \tan(x/2)$ 却在 $x = \pi$ 处没有定义。因此，必须在这一点把积分拆开，并用下面的[极限](../limits/)改写两部分的贡献：

$$
\lim_{a \to \pi^-}\int_0^a \frac{dx}{5 - 3\cos x}
+ \lim_{b \to \pi^+}\int_b^{2\pi} \frac{dx}{5 - 3\cos x}
$$

前面的例题已经表明，魏尔斯特拉斯换元把要积分的表达式变为：

$$\frac{dx}{5 - 3\cos x} = \frac{dt}{1 + 4t^2}$$

在第一个区间上，$x = 0$ 对应 $t = 0$，而当 $x \to \pi^-$ 时 $t \to +\infty$。在第二个区间上，当 $x \to \pi^+$ 时 $t \to -\infty$，而 $x = 2\pi$ 对应 $t = 0$。于是得到两个[反常积分](../improper-integrals/)，写成：

$$\int_0^{+\infty} \frac{dt}{1 + 4t^2} + \int_{-\infty}^0 \frac{dt}{1 + 4t^2}$$

分别计算这两部分的贡献，得到两个积分的值如下：

$$
\begin{align}
\int_0^{+\infty} \frac{dt}{1 + 4t^2}
&= \lim_{A \to +\infty}\left[\frac{1}{2}\arctan(2t)\right]_0^A
= \frac{\pi}{4} \\[6pt]
\int_{-\infty}^0 \frac{dt}{1 + 4t^2}
&= \lim_{B \to -\infty}\left[\frac{1}{2}\arctan(2t)\right]_B^0
= \frac{\pi}{4}
\end{align}
$$

把两部分的贡献相加，最终得到原积分的值：

$$\frac{\pi}{4} + \frac{\pi}{4} = \frac{\pi}{2}$$

> 因此所给积分等于 $\pi/2$。如果只变换原来的积分限 $0$ 和 $2\pi$，就会得到两个都等于零的积分限，没有考虑到中间经过了换元无定义的点。

## 结语

魏尔斯特拉斯换元并不总是最高效的方法。当被积函数只含 $\sin x$ 和 $\cos x$ 的偶次幂时，最好使用三角函数积分的基本方法。当被积函数可以用下面的恒等式改写时也是如此：

$$\sin^2 x = (1 - \cos 2x)/2$$
$$\cos^2 x = (1 + \cos 2x)/2$$ 

当被积函数形如 $R(\sin x)\cos x$ 或 $R(\cos x)\sin x$ 时，直接[换元](../integration-by-substitution/) $u = \sin x$ 或 $u = \cos x$ 更快。作为实用的准则，只有当被积函数是 $\sin x$ 和 $\cos x$ 的有理函数，并且无法通过[三角恒等式](../trigonometric-identities/)或直接换元作明显化简时，才建议使用魏尔斯特拉斯换元。在其他情形下，更简单的技巧计算更短。
