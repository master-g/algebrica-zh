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
  source_hash: 1e75addf0e03c589483fd944808eb47f053c10a18ea6f519296d02075000e436
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 标准反导数

各个[函数](../functions/)页面（例如[正弦](../sine-function/)、[余弦](../cosine-function/)、[正切](../tangent-function/)和[余切](../cotangent-function/)页面）会在其他定义性质旁列出相应的反导数。这些积分很容易计算，因为它们在解题中不断出现。下面的列表汇总了所有主要三角函数的反导数，便于直接总览这些基本结果。

最后六项记录了相应的[双曲函数](../hyperbolic-functions/)积分。之所以一并列出，是因为它们来自相同的技巧，而且经常需要与圆函数的积分配合使用。

[class="table-1"]

|     |                                                                                    |     |
| --- | ---------------------------------------------------------------------------------- | --- |
| 1.  | $$\int \sin x \ dx = -\cos x + c$$                                                 |     |
| 2.  | $$\int \cos x \ dx = \sin x + c$$                                                  |     |
| 3.  | $$\int \tan x \ dx = -\ln \mid \cos x \mid + c$$                                   |     |
| 4.  | $$\int \cot x \ dx = \ln \mid \sin x \mid + c$$                                    |     |
| 5.  | $$\int \sec x \ dx = \ln \mid \sec x + \tan x \mid + c$$                           |     |
| 6.  | $$\int \csc x \ dx = \ln \mid \csc x - \cot x  \mid + c$$                          |     |
| 7.  | $$\int \sinh x \ dx = \cosh x + c$$                                                |     |
| 8.  | $$\int \cosh x \ dx = \sinh x + c$$                                                |     |
| 9.  | $$\int \tanh x \ dx = \ln \mid \cosh x \mid + c$$                                  |     |
| 10. | $$\int \coth x \ dx = \ln \mid \sinh x \mid + c$$                                  |     |
| 11. | $$\int \operatorname{sech} x \ dx = 2 \arctan\!\left(\tanh\frac{x}{2}\right) + c$$ |     |
| 12. | $$\int \operatorname{csch} x \ dx = \ln\left\|\tanh\frac{x}{2}\right\| + c$$       |     |

[/class]

> 符号 $c$ 表示积分常数，用来代表与某个[不定积分](../indefinite-integrals/)相对应的整个反导数族。$c$ 的每一个取值都对应一个不同的原函数，而它们拥有相同的导数。

## $n$ 为偶数的三角函数幂积分

当正弦或余弦被提升为整数次幂时，反导数往往不能立即得到：

$$\int \sin^{n} x \ dx \qquad \int \cos^{n} x \ dx$$

当指数 $n$ 为偶数时，可以通过幂降公式重写平方三角项，从而简化积分：

$$\sin^{2} x = \frac{1 - \cos 2x}{2} \qquad \cos^{2} x = \frac{1 + \cos 2x}{2}$$

这些恒等式降低了函数的幂次，使积分变得可处理。它们直接来自两个标准关系。先从[勾股恒等式](../pythagorean-identity/)出发：

$$\sin^{2}x + \cos^{2}x = 1$$

再结合[二倍角公式](../trigonometric-identities/)：

$$\cos 2x = \cos^{2}x - \sin^{2}x$$

就可以把表达式 $\cos 2x$ 完全写成 $\cos^{2}x$ 或 $\sin^{2}x$ 的形式。将 $\sin^{2}x$ 替换为 $1 - \cos^{2}x$，得到：

$$\cos 2x = \cos^{2}x - (1 - \cos^{2}x) = 2\cos^{2}x - 1$$

解这个关于 $\cos^{2}x$ 的表达式，得到：

$$\cos^{2}x = \frac{1 + \cos 2x}{2}$$

对 $\sin^{2}x$ 也可以进行类似推导。将 $\cos^{2}x = 1 - \sin^{2}x$ 代入二倍角公式：

$$\cos 2x = (1 - \sin^{2}x) - \sin^{2}x = 1 - 2\sin^{2}x$$

解出 $\sin^{2}x$：

$$\sin^{2}x = \frac{1 - \cos 2x}{2}$$

## 例 1

作为这一方法的示例，考虑下面的积分：

$$\int 2\cos^{4}x \ dx$$

要处理余弦的四次幂，出发点是幂降恒等式：

$$\cos^{2}x = \frac{1 + \cos 2x}{2}$$

应用这一恒等式，可以把被积函数改写为更容易处理的形式：

$$
\begin{align}
\cos^{4}x &= \left(\frac{1 + \cos 2x}{2}\right)^{2} \\[6pt]
          &= \frac{1}{4}\left(1 + 2\cos 2x + \cos^{2} 2x\right)
\end{align}
$$

此时仍然有余弦的幂次残留，可以继续使用同一个恒等式降幂：

$$\cos^{2} 2x = \frac{1 + \cos 4x}{2}$$

将这个表达式代入前面的结果：

$$
\begin{align}
\cos^{4}x &= \frac{1}{4}\left(1 + 2\cos 2x + \frac{1 + \cos 4x}{2}\right) \\[6pt]
          &= \frac{1}{4}\left(\frac{3}{2} + 2\cos 2x + \frac{1}{2}\cos 4x\right) \\[6pt]
          &= \frac{3}{8} + \frac{1}{2}\cos 2x + \frac{1}{8}\cos 4x
\end{align}
$$

按照原积分的要求乘以 $2$，得到：

$$2\cos^{4}x = \frac{3}{4} + \cos 2x + \frac{1}{4}\cos 4x$$

分别对每一项积分：

$$\int 2\cos^{4}x \ dx = \frac{3}{4}x + \frac{1}{2}\sin 2x + \frac{1}{16}\sin 4x + c$$

> 因此，四次幂被化为若干初等项之和，每一项都可以直接积分；这正是指数为偶数时采用幂降方法的核心优势。

## $n$ 为奇数的三角函数幂积分

当指数 $n$ 为奇数时，方法会更直接。先分离出一个奇次幂函数的因子，再利用勾股恒等式重写剩余的偶次幂。令 $n = 2k + 1$，对于正弦有：

$$
\begin{align}
\int \sin^{n} x \ dx &= \int \sin x (\sin^{2}x)^{k} \ dx \\[6pt]
                     &= \int \sin x (1 - \cos^{2}x)^{k} \ dx
\end{align}
$$

作如下[换元](../integration-by-substitution/)：

$$u = \cos x \qquad du = -\sin x \ dx$$

这个换元把积分变成关于 $u$ 的一个[多项式](../polynomials/)，随后即可轻松完成积分。对于余弦的奇次幂，过程完全类似：分离出一个因子 $\cos x$，再使用下式重写剩余的偶次幂：

$$\cos^{2}x = 1 - \sin^{2}x$$

从而令 $u = \sin x$。在这两种情形中，分离一个因子都会把积分化为多项式形式。

## 例 2

考虑下面的积分：

$$\int \cos^{5}x \ dx$$

指数为奇数，因此策略是分离一个余弦因子，并利用勾股恒等式重写剩余的偶次[幂](../powers/)：

$$\int \cos^{5}x \ dx = \int \cos^{4}x \cdot \cos x \ dx$$

因子 $\cos^{4}x$ 是偶次幂，因此可以用 $\sin^{2}x$ 表示：

$$\cos^{4}x = (\cos^{2}x)^{2} = (1 - \sin^{2}x)^{2}$$

积分变为：

$$\int (1 - \sin^{2}x)^{2} \cdot \cos x \ dx$$

因子 $\cos x \ dx$ 正好是 $\sin x$ 的微分，因此令：

$$u = \sin x \qquad du = \cos x \ dx$$

积分变成关于 $u$ 的多项式：

$$\int (1 - u^{2})^{2} \ du$$

展开平方：

$$\int (1 - 2u^{2} + u^{4}) \ du$$

每一项都可以直接积分：

$$u - \frac{2}{3}u^{3} + \frac{1}{5}u^{5} + c$$

代回 $u = \sin x$：

$$\int \cos^{5}x \ dx = \sin x - \frac{2}{3}\sin^{3}x + \frac{1}{5}\sin^{5}x + c$$

> 这个换元之所以能干净地解决积分，是因为分离出的因子 $\cos x$ 恰好是 $u = \sin x$ 的导数。识别出这种模式，就能把奇次幂情形化为常规的多项式积分。

## 正弦和余弦的混合幂

更一般的情形是正弦和余弦同时出现，积分形如：

$$\int \sin^{m} x \cos^{n} x \ dx$$

解法取决于指数的奇偶性，并结合前面介绍的两种方法。当至少有一个指数为奇数时，可以直接使用奇次幂技巧。假设 $n$ 为奇数：分离出一个因子 $\cos x$，利用 $\cos^{2}x = 1 - \sin^{2}x$ 将余弦的剩余偶次幂转换为正弦的形式，再令 $u = \sin x$。如果 $m$ 为奇数，则对称地分离出一个因子 $\sin x$，并令 $u = \cos x$。当两个指数都是奇数时，任选一种方法都可以。

当 $m$ 和 $n$ 都为偶数时，无法分离出一个因子充当微分。此时要对每个平方项应用幂降恒等式：

$$\sin^{2} x = \frac{1 - \cos 2x}{2} \qquad \cos^{2} x = \frac{1 + \cos 2x}{2}$$

恒等式 $\sin x \cos x = \tfrac{1}{2}\sin 2x$ 也经常很有用，因为它可以一步降低整体次数。反复应用这些恒等式，就能把被积函数化为若干 $\cos kx$ 形式的项之和；每一项都可以直接积分，正如例 1 所示。

## 例 3

考虑下面的积分：

$$\int \sin^{2} x \cos^{3} x \ dx$$

余弦的指数为奇数，因此分离一个 $\cos x$ 因子，并将剩余的偶次幂改写为正弦的形式：

$$\int \sin^{2} x \cos^{3} x \ dx = \int \sin^{2} x \cdot \cos^{2} x \cdot \cos x \ dx$$

利用 $\cos^{2}x = 1 - \sin^{2}x$：

$$\int \sin^{2} x (1 - \sin^{2}x) \cdot \cos x \ dx$$

因子 $\cos x \ dx$ 是 $\sin x$ 的微分，因此令：

$$u = \sin x \qquad du = \cos x \ dx$$

积分变成关于 $u$ 的多项式：

$$\int u^{2}(1 - u^{2}) \ du = \int (u^{2} - u^{4}) \ du$$

每一项都可以直接积分：

$$\frac{1}{3}u^{3} - \frac{1}{5}u^{5} + c$$

代回 $u = \sin x$：

$$\int \sin^{2} x \cos^{3} x \ dx = \frac{1}{3}\sin^{3}x - \frac{1}{5}\sin^{5}x + c$$

第二个函数也带有幂次，并没有改变方法：只要能分离出一个奇次幂因子，积分就能化为关于互补函数的多项式。

## 正弦和余弦的倒数

另一类经常遇到的情形是正弦和余弦的倒数积分。虽然这些表达式乍看不太直接，但它们都来自同一个代数技巧。对于正割，被积函数乘以一个等于 $1$ 的分式：

$$
\begin{align}
\int \sec x \ dx &= \int \sec x \cdot \frac{\sec x + \tan x}{\sec x + \tan x} \ dx \\[6pt]
                 &= \int \frac{\sec^{2}x + \sec x\tan x}{\sec x + \tan x} \ dx
\end{align}
$$

现在，分子正好是分母的导数，因为：

$$\frac{d}{dx}(\sec x + \tan x) = \sec x\tan x + \sec^{2}x$$

因此积分具有 $\int f'(x)/f(x) \ dx$ 的形式，可以直接积分为 $\ln|f(x)|$：

$$\int \frac{1}{\cos x} \ dx = \int \sec x \ dx = \ln|\sec x + \tan x| + c$$

余割的结构也相同。将被积函数乘以 $(\csc x - \cot x)/(\csc x - \cot x)$：

$$
\begin{align}
\int \csc x \ dx &= \int \csc x \cdot \frac{\csc x - \cot x}{\csc x - \cot x} \ dx \\[6pt]
                 &= \int \frac{\csc^{2}x - \csc x\cot x}{\csc x - \cot x} \ dx
\end{align}
$$

这里分子同样是分母的导数，因为：

$$\frac{d}{dx}(\csc x - \cot x) = -\csc x\cot x + \csc^{2}x$$

因此，$\csc x$ 的积分为：

$$\int \frac{1}{\sin x} \ dx = \int \csc x \ dx = \ln|\csc x - \cot x| + c$$

在两种情形中，结果都是[对数](../logarithms/)形式，而[绝对值](../absolute-value/)内部的符号很容易混淆。最好把两个形式放在一起记忆：余弦倒数对应 $\sec x + \tan x$，正弦倒数对应 $\csc x - \cot x$。

## 决策流程

下面的分步流程总结了将上述技巧应用于一般三角积分的方法。

+ 当被积函数是单个三角函数或双曲函数时，直接查标准反导数表中的相应项进行积分。
+ 当被积函数是单个幂 $\sin^{n} x$ 或 $\cos^{n} x$，且 $n$ 为偶数时，对每个平方项应用幂降恒等式并反复进行，直到不再有偶次幂。此时被积函数会化为若干 $\cos kx$ 形式的表达式之和，可以直接积分。
+ 当被积函数是单个幂 $\sin^{n} x$ 或 $\cos^{n} x$，且 $n$ 为奇数时，分离出该函数的一个因子，利用勾股恒等式转换剩余的偶次幂，并令 $u = \cos x$ 或 $u = \sin x$，使微分与分离出的因子匹配。积分会变成关于 $u$ 的多项式，使用幂法则积分后再代回原变量。
+ 当被积函数形如 $\sin^{m} x \cos^{n} x$ 且至少有一个奇数指数时，分离出奇次幂函数的一个因子，利用勾股恒等式转换剩余偶次幂，并使用互补函数换元：余弦指数为奇数时令 $u = \sin x$，否则令 $u = \cos x$。
+ 当 $m$ 和 $n$ 都为偶数时，对每个平方项应用幂降恒等式，也可以结合 $\sin x \cos x = \tfrac{1}{2}\sin 2x$，然后逐项积分。
+ 对于 $\sec x$ 和 $\csc x$，将被积函数乘以一个精心选择的、等于 $1$ 的分式，使分子变成分母的导数，并识别所得的对数形式。
+ 当被积函数是 $\sin x$ 和 $\cos x$ 的有理函数，且不符合上述情形时，应用[魏尔斯特拉斯换元](../weierstrass-substitution/)，将被积函数化为新变量的[有理函数](../rational-functions/)。对于二次表达式的根式，则应改用[三角换元](../trigonometric-substitution-for-integrals/)。

> 当两个函数的乘积不符合上述任何模式时，通常的替代方法是[分部积分](../integration-by-parts/)。当不存在闭式反导数时，定积分的值仍然可以通过[数值积分](../numerical-integration/)近似计算。
