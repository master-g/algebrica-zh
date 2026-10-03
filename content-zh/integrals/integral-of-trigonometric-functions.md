---
title: 三角函数的积分
title_en: Integral of Trigonometric Functions
source: https://algebrica.org/integral-of-trigonometric-functions/
license: CC BY-NC 4.0
tags:
  - antiderivative
  - hyperbolic-functions
  - indefinite-integral
  - integration
  - integration-by-substitution
  - power-reduction
  - pythagorean-identity
  - trigonometric-functions
  - trigonometric-identities
translation:
  status: current
  source_hash: 06f703a4005d14613c460e85bdde7863b385d8bf13c99cae2b33a55f2f1abb85
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 引言

含有[正弦](../sine-function/)、[余弦](../cosine-function/)、[正切](../tangent-function/)和[余切](../cotangent-function/)等三角函数的积分，计算起来往往相当有难度。一般说来（这对所有积分都适用），需要熟悉几种[基本技巧](../integration-strategies/)，对被积函数作变形，得到更容易计算的积分。本页介绍处理最常见情形的最常用方法，它们足以算出这类积分中的很大一部分。

首先，你需要记住基本三角函数的[原函数](../indefinite-integrals/)，因为基本步骤都建立在它们之上。下表提供了一份简明实用的参考。

[class="table-1"]

|     |                                                                              |
| --- | ---------------------------------------------------------------------------- |
| 1.  | $$\int \sin x \ dx = -\cos x + c$$                                           |
| 2.  | $$\int \cos x \ dx = \sin x + c$$                                            |
| 3.  | $$\int \tan x \ dx = -\ln \mid \cos x \mid + c$$                             |
| 4.  | $$\int \cot x \ dx = \ln \mid \sin x \mid + c$$                              |
| 5.  | $$\int \sec x \ dx = \ln \mid \sec x + \tan x \mid + c$$                     |
| 6.  | $$\int \csc x \ dx = \ln \mid \csc x - \cot x  \mid + c$$                    |
| 7.  | $$\int \sinh x \ dx = \cosh x + c$$                                          |
| 8.  | $$\int \cosh x \ dx = \sinh x + c$$                                          |
| 9.  | $$\int \tanh x \ dx = \ln \mid \cosh x \mid + c$$                            |
| 10. | $$\int \coth x \ dx = \ln \mid \sinh x \mid + c$$                            |
| 11. | $$\int \mathrm{sech} x \ dx = 2 \arctan\!\left(\tanh\frac{x}{2}\right) + c$$ |
| 12. | $$\int \operatorname{csch} x \ dx = \ln\left\lvert\tanh\frac{x}{2}\right\rvert + c$$ |

[/class]

需要记住的情形不算多，但这要花些功夫；经过练习，回忆它们会变得自动。因此，在继续之前，建议你确保熟悉上面的表达式，因为其中一些在后面的理论和例题中会用到。

## $n$ 为偶数的三角函数幂的积分

我们从一种简单而相当常见的情形开始：被积函数含有正弦或余弦的整数次幂，例如 $\sin^4x$，它的原函数并不是一眼就能看出的。这类积分具有如下一般形式：

$$\int \sin^{n} x \ dx \qquad \int \cos^{n} x \ dx \tag{1}$$

先考虑指数 $n$ 为偶数的情形。这时，我们用正弦和余弦的降幂公式改写平方的三角项，从而化简积分：

$$\sin^{2} x = \frac{1 - \cos 2x}{2} \tag{2}$$

$$\cos^{2} x = \frac{1 + \cos 2x}{2} \tag{3}$$

在每个恒等式中，右边用比左边更低的幂表示正弦或余弦的平方，这样我们就能计算积分。第一个表达式来自[勾股恒等式](../pythagorean-identity/)：

$$\sin^{2}x + \cos^{2}x = 1$$

第二个来自余弦的[二倍角公式](../trigonometric-identities/)：

$$\cos 2x = \cos^{2}x - \sin^{2}x$$

把这两个恒等式结合起来，就可以用 $\cos^{2}x$ 或 $\sin^{2}x$ 表示 $\cos 2x$。把 $\sin^{2}x$ 换成 $1 - \cos^{2}x$，得到：

$$\cos 2x = \cos^{2}x - (1 - \cos^{2}x) = 2\cos^{2}x - 1$$

解出 $\cos^{2}x$，恰好得到恒等式 $(3)$：

$$\cos^{2}x = \frac{1 + \cos 2x}{2}$$

同样的推理适用于 $\sin^{2}x$。把 $\cos^{2}x = 1 - \sin^{2}x$ 代入二倍角公式，得到：

$$\cos 2x = (1 - \sin^{2}x) - \sin^{2}x = 1 - 2\sin^{2}x$$

解出 $\sin^{2}x$，得到恒等式 $(2)$：

$$\sin^{2}x = \frac{1 - \cos 2x}{2}$$
- - -

为了说明这种方法的实际用法，考虑下面的积分：

$$\int 2\cos^{4}x \ dx$$

这里出现余弦的四次幂，用恒等式 $(3)$ 比较方便。因此把四次幂改写如下：

$$
\begin{align}
\cos^{4}x &= \left(\frac{1 + \cos 2x}{2}\right)^{2} \\[6pt]
          &= \frac{1}{4}\left(1 + 2\cos 2x + \cos^{2} 2x\right) \tag{4}
\end{align}
$$

这样就降低了余弦的幂，但还剩一个平方项。用同一个恒等式把它降幂，得到：

$$\cos^{2} 2x = \frac{1 + \cos 4x}{2}$$

把这个表达式代入 $(4)$ 并化简，得到：

$$
\begin{align}
\cos^{4}x &= \frac{1}{4}\left(1 + 2\cos 2x + \frac{1 + \cos 4x}{2}\right) \\[6pt]
          &= \frac{1}{4}\left(\frac{3}{2} + 2\cos 2x + \frac{1}{2}\cos 4x\right) \\[6pt]
          &= \frac{3}{8} + \frac{1}{2}\cos 2x + \frac{1}{8}\cos 4x
\end{align}
$$

按原积分的要求乘以 $2$，得到：

$$\int 2\cos^{4}x \ dx = \int \left(\frac{3}{4} + \cos 2x + \frac{1}{4}\cos 4x\right) \ dx$$

现在原积分已经改写成可以分别积分的若干项之和，得到：

$$\frac{3}{4}x + \frac{1}{2}\sin 2x + \frac{1}{16}\sin 4x + c$$

> 请记住，这里的目标是把高于 $(1)$ 的幂化为初等项之和，其中每一项都可以分别直接积分。

## $n$ 为奇数的三角函数幂的积分

当指数 $n$ 为奇数时，方法是把奇次幂的函数留出一个因子，并用勾股恒等式改写剩下的偶次幂。考虑形如 $n = 2k + 1$ 的一般奇次幂。对于正弦，有：

$$
\begin{align}
\int \sin^{n} x \ dx &= \int \sin x (\sin^{2}x)^{k} \ dx \\[6pt]
                     &= \int \sin x (1 - \cos^{2}x)^{k} \ dx
\end{align}
$$

然后使用[换元积分法](../integration-by-substitution/)，令 $u = \cos x$ 和 $du = -\sin x \ dx$。这样得到关于 $u$ 的[多项式](../polynomials/)的积分，可以直接计算。

余弦奇次幂的做法完全类似。同样留出一个因子 $\cos x$，并用下面的恒等式改写剩下的偶次幂：

$$\cos^{2}x = 1 - \sin^{2}x$$

然后作换元 $u = \sin x$，同样得到多项式的积分。

- - -

作为一个实际例子，考虑下面含有奇次幂的积分：

$$\int \cos^{5}x \ dx$$

指数是奇数，所以留出一个余弦因子，并用勾股恒等式改写剩下的偶次[幂](../powers/)。先把积分改写为：

$$\int \cos^{5}x \ dx = \int \cos^{4}x \cdot \cos x \ dx$$

因子 $\cos^{4}x$ 是偶次幂，所以按前面描述的做法，可以用下面的恒等式把它表示为 $\sin^{2}x$ 的式子：

$$\cos^{4}x = (\cos^{2}x)^{2} = (1 - \sin^{2}x)^{2}$$

于是积分变为：

$$\int (1 - \sin^{2}x)^{2} \cdot \cos x \ dx$$

稍加练习就能立刻认出，因子 $\cos x \ dx$ 含有 $\sin x$ 的[导数](../derivatives/)，所以代入 $u = \sin x$ 和 $du = \cos x \ dx$，得到关于 $u$ 的多项式的积分：

$$\int (1 - u^{2})^{2} \ du$$

[展开平方](../notable-products/)，得到：

$$\int (1 - 2u^{2} + u^{4}) \ du$$

逐项积分，得到：

$$u - \frac{2}{3}u^{3} + \frac{1}{5}u^{5} + c$$

把 $u = \sin x$ 代回，得到下面的结果：

$$\sin x - \frac{2}{3}\sin^{3}x + \frac{1}{5}\sin^{5}x + c$$

## 正弦与余弦的幂的乘积

当正弦和余弦一起出现在如下形式的积分中时，情况更一般：

$$\int \sin^{m} x \cos^{n} x \ dx \tag{5}$$

这里，方法的选择取决于指数，并把前面描述的两种做法结合起来。假设 $n$ 是奇数。只要至少有一个指数是奇数，就使用奇次幂的方法。在这种情形下，留出一个因子 $\cos x$，用 $\cos^{2}x = 1 - \sin^{2}x$ 把余弦剩下的偶次幂表示为正弦的式子，并代入 $u = \sin x$。如果 $m$ 是奇数，就留出一个因子 $\sin x$，并令 $u = \cos x$。当两个指数都是奇数时，两种选择都可以。

当 $m$ 和 $n$ 都是偶数时，第一步是对每个平方项应用降幂公式 $(2)$ 和 $(3)$。另一个常常有用的恒等式是：

$$\sin x \cos x = \frac{1}{2}\sin 2x$$

它使我们能够一步降低总的幂次。反复应用这些恒等式，就把被积函数化为形如 $\cos kx$ 的项之和，其中每一项都可以直接积分，与前面的例子一样。

- - -

作为一个实际例子，考虑下面形如 $(5)$ 的积分：

$$\int \sin^{2} x \cos^{3} x \ dx$$

一眼就能看出余弦的指数是奇数，所以留出一个因子 $\cos x$，并把余弦的偶次幂改写为正弦的式子：

$$\int \sin^{2} x \cos^{3} x \ dx = \int \sin^{2} x \cdot \cos^{2} x \cdot \cos x \ dx$$

利用恒等式 $\cos^{2}x = 1 - \sin^{2}x$，积分变为：

$$\int \sin^{2} x (1 - \sin^{2}x) \cdot \cos x \ dx$$

因子 $\cos x \ dx$ 是 $\sin x$ 的[微分](../differential-of-a-function/)，所以令 $u = \sin x$ 和 $du = \cos x \ dx$，得到关于 $u$ 的多项式的积分：

$$\int u^{2}(1 - u^{2}) \ du = \int (u^{2} - u^{4}) \ du$$

逐项积分，得到：

$$\frac{1}{3}u^{3} - \frac{1}{5}u^{5} + c$$

最后把 $u = \sin x$ 代回，求得积分为：

$$\frac{1}{3}\sin^{3}x - \frac{1}{5}\sin^{5}x + c$$

## 正弦和余弦的倒数

另一类常见情形是正弦和余弦的倒数的积分。这些表达式看起来没那么直接，但它们的积分可以用同样的代数步骤算出。例如，考虑余弦的倒数：

$$\int \frac{1}{\cos x} \ dx$$

我们知道被积函数是[正割函数](../secant-function/)。现在把正割乘以一个等于 $1$ 的分式：

$$\begin{align}
\int \sec x \ dx &= \int \sec x \cdot \frac{\sec x + \tan x}{\sec x + \tan x} \ dx \\[12pt]
                 &= \int \frac{\sec^{2}x + \sec x\tan x}{\sec x + \tan x} \ dx
\end{align}
$$

这个技巧使分子成为分母的导数，因为下面的恒等式成立：

$$\frac{d}{dx}(\sec x + \tan x) = \sec x\tan x + \sec^{2}x$$

因此积分具有如下形式：

$$\int \frac{f'(x)}{f(x)} \ dx$$

它的一个原函数是 $\ln|f(x)|$。于是得到：

$$\int \frac{1}{\cos x} \ dx = \int \sec x \ dx = \ln|\sec x + \tan x| + c$$

同样的做法适用于正弦的倒数的积分：

$$\int \frac{1}{\sin x} \ dx$$

这里被积函数是[余割函数](../cosecant-function/)。像上面那样把它乘以一个等于 $1$ 的分式，就得到与余弦倒数的表达式相对应的式子：

$$
\begin{align}
\int \csc x \ dx &= \int \csc x \cdot \frac{\csc x - \cot x}{\csc x - \cot x} \ dx \\[12pt]
                 &= \int \frac{\csc^{2}x - \csc x\cot x}{\csc x - \cot x} \ dx
\end{align}
$$

分子同样是分母的导数，因为下面的恒等式成立：

$$\frac{d}{dx}(\csc x - \cot x) = -\csc x\cot x + \csc^{2}x$$

因此 $\csc x$ 的积分为：

$$\int \frac{1}{\sin x} \ dx = \int \csc x \ dx = \ln|\csc x - \cot x| + c$$

## 选择方法的步骤

现在可以列出一套步骤，总结怎样把上面讨论的各种情形应用于一般的三角函数积分。

+ 首先，当被积函数是单个三角函数或双曲函数时，用基本原函数表直接积分。
+ 当被积函数是 $n$ 为偶数的幂 $\sin^{n} x$ 或 $\cos^{n} x$ 时，对每个平方项应用降幂公式，反复进行直到不再有偶次幂。这样把被积函数化为形如 $\cos kx$ 的表达式之和，可以直接积分。
+ 当被积函数是 $n$ 为奇数的幂 $\sin^{n} x$ 或 $\cos^{n} x$ 时，留出函数的一个因子，用勾股恒等式改写剩下的偶次幂，并代入 $u = \cos x$ 或 $u = \sin x$，使微分与留出的因子相配。这样得到关于 $u$ 的多项式的积分，很容易计算。
+ 当被积函数形如 $\sin^{m} x \cos^{n} x$ 且至少有一个指数为奇数时，留出指数为奇数的那个函数的一个因子，用勾股恒等式改写剩下的偶次幂。然后选另一个函数作为新变量：余弦的指数为奇数时令 $u = \sin x$，余弦的指数为偶数时令 $u = \cos x$。
+ 当 $m$ 和 $n$ 都是偶数时，对每个平方项应用降幂公式，再逐项积分。
+ 对于 $\sec x$ 和 $\csc x$，把被积函数乘以一个等于 $1$ 的分式，选取这个分式使分子成为分母的导数。这样得到相应的[对数形式](../logarithms/)。
+ 最后，当被积函数是 $\sin x$ 和 $\cos x$ 的有理函数，且不属于前面任何一种情形时，使用[魏尔斯特拉斯换元](../the-weierstrass-substitution/)，它把被积函数变换为新变量的[有理函数](../rational-functions/)。对于二次式的[根式](../radicals/)，使用[三角换元](../trigonometric-substitution-for-integrals/)。

> 这些技巧非常有用，但三角函数积分并不总能化为本页介绍的情形。例如，当两个函数的乘积不属于所讨论的任何情形时，[分部积分法](../integration-by-parts/)是常用的替代方法。在更复杂的情形中，如果不存在闭式原函数，[定积分](../definite-integrals/)的值仍然可以用[数值积分](../numerical-integration/)来近似。
