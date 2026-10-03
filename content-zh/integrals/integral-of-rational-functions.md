---
title: 有理函数的积分
title_en: Integral of Rational Functions
source: https://algebrica.org/integral-of-rational-functions/
license: CC BY-NC 4.0
tags:
  - antiderivative
  - arctangent
  - completing-the-square
  - indefinite-integral
  - integration
  - integration-by-substitution
  - linearity
  - logarithms
  - partial-fractions
  - polynomial-division
  - rational-functions
translation:
  status: current
  source_hash: 64b2b8f59b0795f7e4f2d59ad1b443ef5ac4c84b854d7da5b3781cf4bc4ffec2
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 如何处理有理函数的积分

回顾一下，[有理函数](../rational-functions/)是两个[多项式](../polynomials/)的商，分子为 $N(x)$，分母为 $D(x)$。它的[不定积分](../indefinite-integrals/)具有一般形式：

$$\int \frac{N(x)}{D(x)} \ dx \tag{1}$$

对有理函数积分时，必须先找出 $D(x)$ 的[零点](../roots-of-a-polynomial/)，以确定被积函数在哪里有定义。

下面我们考察形如 $(1)$ 的积分的几种常见情形，并说明每种情形最合适的方法。这些积分一般不算特别难算，但要一下子认出正确的方法需要大量练习，这样才能避免不必要的步骤，高效地完成计算。

选择方法时，先比较两个多项式的次数，目标是把商化为真分式，即分子的次数严格小于分母次数的分式。

如果原来的被积函数已经是真分式，可以直接应用下面介绍的方法。

但如果分子的次数大于或等于分母的次数，分式就是假分式。这时可以用[多项式除法](../polynomial-division/)得到商 $Q(x)$ 和余式 $R(x)$，它们满足恒等式：

$$N(x) = Q(x)D(x) + R(x)$$

余式要么为零，要么次数严格小于 $D(x)$ 的次数。在分母不为零的点处，可以把恒等式除以 $D(x)$，写出：

$$\frac{N(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)}$$

利用 $(1)$ 和[积分的线性性质](../integration-strategies/)，可以写出：

$$\int \frac{N(x)}{D(x)} \ dx = \int Q(x) \ dx + \int \frac{R(x)}{D(x)} \ dx \tag{2}$$

如果余式 $R(x)$ 为零，只需对 $Q(x)$ 积分，逐项应用幂函数的积分公式即可。如果余式不为零，还必须对分式 $R(x)/D(x)$ 积分。多项式除法已经使分子的次数小于分母的次数，这正是我们要找的真分式。

为了计算 $(2)$ 中的第二个积分，回顾一下，在实数范围内，每个非常数多项式都可以分解为[一次因式和不可约二次因式](../unique-factorization-of-polynomials/)，其中可能有重复的因式。有了这个分解，就可以把分式表示为部分分式之和，然后对它们应用后面各节介绍的积分公式。

> 在开始多项式除法或因式分解之前，总应检查分子和分母是否有可以约去的公因式，同时记得排除原分母的零点，它们不在[被积函数的定义域](../determining-the-domain-of-a-function/)内。

- - -

可以用一个例子说明这个过程。计算下面的积分，它的被积函数是假分式：

$$\int \frac{x^3 + x + 1}{x^2 + 1} \ dx$$

分子的次数为 $3$，分母的次数为 $2$，所以用多项式除法把积分化为 $(2)$ 的形式。首项的商为 $x^3/x^2 = x$。把分母乘以 $x$ 得到 $x^3 + x$，于是可以写出：

$$x^3 + x + 1 = x(x^2 + 1) + 1$$

商为 $Q(x) = x$，余式为 $R(x) = 1$。除以 $x^2 + 1$，得到：

$$\frac{x^3 + x + 1}{x^2 + 1} = x + \frac{1}{x^2 + 1}$$

因此可以把原积分改写为：

$$
\begin{align}
\int \frac{x^3 + x + 1}{x^2 + 1} \ dx &= \int x \ dx + \int \frac{1}{x^2 + 1} \ dx \\[6pt]
  &= \frac{x^2}{2} + \arctan x + k
\end{align}
$$

第一项用幂函数的积分公式很容易积出，而第二个被积函数是[反正切的导数](../arctangent-function/)。这样就求出了整个 $\mathbb{R}$ 上的原函数，因为分母 $x^2 + 1$ 恒为正。

## 分母为一次式的情形

如果真分式的分母是一次的，它的分子必定是常数。把这个常数记为 $c$，需要计算如下形式的积分：

$$\int \frac{c}{ax + b} \ dx \tag{3}$$

系数 $a$、$b$ 和 $c$ 是实数，且 $a \neq 0$。在这种情形下可以使用[换元积分法](../integration-by-substitution/)。令 $t = ax + b$ 和 $dt = a \ dx$，把积分 $(3)$ 改写为：

$$
\begin{align}
\int \frac{c}{ax + b} \ dx &= \frac{c}{a} \int \frac{1}{t} \ dt \\[8pt]
  &= \frac{c}{a} \ln|t| + k \\[10pt]
  &= \frac{c}{a} \ln|ax + b| + k
\end{align}
$$

- - -

把刚才描述的方法应用于下面的积分：

$$\int \frac{2}{6x + 1} \ dx$$

令 $t = 6x + 1$。$t$ 对 $x$ 的导数是 $6$，所以 $dt = 6 \ dx$，$dx = dt/6$。换元后得到：

$$
\begin{align}
\int \frac{2}{6x + 1} \ dx &= \frac{2}{6} \int \frac{1}{t} \ dt \\[8pt]
  &= \frac{1}{3} \ln|t| + k \\[10pt]
  &= \frac{1}{3} \ln|6x + 1| + k
\end{align}
$$

计算相当简单，因为它总是得到对数形式的原函数。一旦找到正确的换元，其余的就水到渠成。


## 部分分式分解

现在考虑含有多个因式的分母，用[部分分式分解](../partial-fraction-decomposition/)把它们的贡献分开。例如，考虑积分：



$$\int \frac{7x + 5}{(x - 1)(3x + 2)} \ dx$$

当各因式是一次的且互不相同时，每个因式贡献一个分子为常数的分式。

$$\frac{A}{x - 1} + \frac{B}{3x + 2}$$

要求这个和等于原函数，由此确定系数 $A$ 和 $B$：

$$\frac{7x + 5}{(x - 1)(3x + 2)} = \frac{A}{x - 1} + \frac{B}{3x + 2} \tag{4}$$

进行代数运算，得到：

$$7x + 5 = A(3x + 2) + B(x - 1)$$

令 $x=1$ 消去系数为 $B$ 的项，得到 $A = 12/5$。令 $x = -2/3$ 则消去系数为 $A$ 的项，得到 $B = -1/5$。把这些值代入 $(4)$，得到：

$$\frac{7x + 5}{(x - 1)(3x + 2)} = \frac{12}{5(x - 1)} - \frac{1}{5(3x + 2)}$$

因此可以把积分改写为：

$$
\begin{align}
\int \frac{7x + 5}{(x - 1)(3x + 2)} \ dx &= \frac{12}{5} \int \frac{1}{x - 1} \ dx - \frac{1}{5} \int \frac{1}{3x + 2} \ dx \\[6pt]
  &= \frac{12}{5} \ln|x - 1| - \frac{1}{15} \ln|3x + 2| + k
\end{align}
$$

因此，在[区间](../intervals/) $(-\infty,-2/3)$、$(-2/3,1)$ 和 $(1,+\infty)$ 上，原函数由这两个对数项的差给出。

## 重复的一次因式

接下来考虑分母含有重数为 $k \geq 2$ 的因式 $(x - r)^k$ 的情形。分解中必须对这个因式的每个幂各有一项，从一次幂到 $k$ 次幂，形式如下：

$$\frac{A_1}{x - r} + \frac{A_2}{(x - r)^2} + \dots + \frac{A_k}{(x - r)^k}$$

分子都是常数，用上面的部分分式方法确定。运气好的话，其中一些为零，计算就简化了。分母为 $x - r$ 的第一项，原函数是 $A_1\ln|x - r|$。对于更高次的幂，使用[幂函数的积分公式](../power-function/)，因为被积函数中的指数是 $-j \neq -1$。对每个 $j \geq 2$，有：

$$\int \frac{A_j}{(x - r)^j} \ dx = \frac{A_j}{1 - j}(x - r)^{1 - j} + k$$

我们用一个完整的例子来说明，计算下面的积分：

$$\int \frac{3x + 1}{(x - 1)^2(x + 2)} \ dx \tag{5}$$

因式 $x - 1$ 的重数为 $2$，而 $x + 2$ 只出现一次。因此写出分解式：

$$\frac{3x + 1}{(x - 1)^2(x + 2)} = \frac{A}{x - 1} + \frac{B}{(x - 1)^2} + \frac{C}{x + 2}$$

乘以公分母，得到：

$$3x + 1 = A(x - 1)(x + 2) + B(x + 2) + C(x - 1)^2$$

在 $x = 1$ 处，右边第一项和第三项为零，所以 $4 = 3B$，$B = 4/3$。在 $x = -2$ 处，只剩下含 $C$ 的项，所以 $-5 = 9C$，$C = -5/9$。为了求 $A$，可以比较 $x^2$ 的系数。左边的系数为零，右边的系数为 $A + C$。于是 $A + C = 0$，$A = 5/9$。因此分解式为：

$$\frac{3x + 1}{(x - 1)^2(x + 2)} = \frac{5}{9(x - 1)} + \frac{4}{3(x - 1)^2} - \frac{5}{9(x + 2)}$$

于是得到：

$$
\begin{align}
\int \frac{3x + 1}{(x - 1)^2(x + 2)} \ dx &= \frac{5}{9} \int \frac{1}{x - 1} \ dx + \frac{4}{3} \int \frac{1}{(x - 1)^2} \ dx - \frac{5}{9} \int \frac{1}{x + 2} \ dx \\[6pt]
  &= \frac{5}{9} \ln|x - 1| - \frac{4}{3(x - 1)} - \frac{5}{9} \ln|x + 2| + k
\end{align}
$$

这样就得到了在区间 $(-\infty,-2)$、$(-2,1)$ 和 $(1,+\infty)$ 中每一个上的原函数。这些区间不含 $x = -2$ 和 $x = 1$，在这两点处 $(5)$ 中的分母为零，原被积函数没有定义。

## 不可约二次因式

下一种情形比前面的稍微复杂一些。回顾一下，[判别式](../quadratic-formula/)为负的二次多项式没有实根，不能写成实一次因式的乘积。因此这个二次因式原封不动地留在分母中。为了简化计算，把分子和分母同除以 $x^2$ 的系数，使这个因式具有如下形式：

$$q(x) = x^2 + bx + c \qquad b^2 - 4c < 0$$

如果这个因式只出现一次，就给它配上如下形式的一项：

$$\frac{Ax + B}{q(x)}$$

分子的次数至多为 $1$，所以它也可能是常数或零。为了对这个分式积分，把分子与导数 $q'(x) = 2x + b$ 作比较。然后把分子写成这个导数的倍数加上一个常数：

$$Ax + B = \frac{A}{2}(2x + b) + \left(B - \frac{Ab}{2}\right)$$

于是积分拆成两部分：

$$\int \frac{Ax + B}{q(x)} \ dx = \frac{A}{2} \int \frac{q'(x)}{q(x)} \ dx + \left(B - \frac{Ab}{2}\right) \int \frac{1}{q(x)} \ dx$$

第一部分通过换元 $v = q(x)$ 得到一个[对数](../logarithmic-function/)。对第二部分，我们[配方](../completing-the-square/)：

$$q(x) = \left(x + \frac{b}{2}\right)^2 + c - \frac{b^2}{4}$$

判别式为负蕴含 $c - b^2/4 > 0$。因此令 $\rho = \sqrt{c - b^2/4} > 0$ 和 $u = x + b/2$。由于 $du = dx$，第二个积分变为：

$$\int \frac{1}{q(x)} \ dx = \int \frac{1}{u^2 + \rho^2} \ du$$

再作换元 $t = u/\rho$，有 $du = \rho \ dt$，并认出[反正切](../arctangent-and-arccotangent/)的导数：

$$
\begin{align}
\int \frac{1}{u^2 + \rho^2} \ du &= \frac{1}{\rho} \int \frac{1}{1 + t^2} \ dt \\[6pt]
  &= \frac{1}{\rho} \arctan t + k \\[6pt]
  &= \frac{1}{\rho} \arctan\left(\frac{u}{\rho}\right) + k
\end{align}
$$

把两部分的贡献合起来，得到公式：

$$\int \frac{Ax + B}{q(x)} \ dx = \frac{A}{2}\ln q(x) + \frac{B - Ab/2}{\rho}\arctan\left(\frac{x + b/2}{\rho}\right) + k$$

因此，这个公式使我们能够把原函数用一个对数和一个反正切表示出来，从而算出积分。应用它时，先确定系数 $A$、$B$、$b$ 和 $c$，计算 $\rho = \sqrt{c - b^2/4}$，再把这些值代入所得的表达式。

- - -

一个完整的例子有助于看清其中的步骤和换元。计算下面的积分：

$$\int \frac{5x^2 + 3x - 2}{(x + 1)(x^2 + 2x + 3)} \ dx$$

分母含有一次因式 $x + 1$ 和二次因式 $x^2 + 2x + 3$。后者的判别式为 $2^2 - 4 \cdot 3 = -8$，所以这个因式在实数范围内不可约。列出分解式：

$$\frac{5x^2 + 3x - 2}{(x + 1)(x^2 + 2x + 3)} = \frac{A}{x + 1} + \frac{Bx + C}{x^2 + 2x + 3}$$

乘以公分母，得到恒等式：

$$5x^2 + 3x - 2 = A(x^2 + 2x + 3) + (Bx + C)(x + 1)$$

在 $x = -1$ 处，左边为 $5 - 3 - 2 = 0$，右边化为 $2A$。于是 $A = 0$。展开剩下的乘积，得到：

$$5x^2 + 3x - 2 = Bx^2 + (B + C)x + C$$

比较 $x^2$ 的系数和常数项，得到 $B = 5$ 和 $C = -2$。$x$ 的系数也相符，因为 $B + C = 3$。因此当 $x \neq -1$ 时，分式化为：

$$\frac{5x^2 + 3x - 2}{(x + 1)(x^2 + 2x + 3)} = \frac{5x - 2}{x^2 + 2x + 3}$$

新分母的导数是 $2x + 2$。为了在分子中得到这一项，写出：

$$5x - 2 = \frac{5}{2}(2x + 2) - 7$$

把两部分的贡献分开，可以把原积分改写为：

$$\int \frac{5x - 2}{x^2 + 2x + 3} \ dx = \frac{5}{2} \int \frac{2x + 2}{x^2 + 2x + 3} \ dx - 7 \int \frac{1}{x^2 + 2x + 3} \ dx$$

在第一个积分中，分子是分母的导数，得到 $(5/2)\ln(x^2 + 2x + 3)$。分母为正，因为 $x^2 + 2x + 3 = (x + 1)^2 + 2$。利用同一个恒等式，令 $u = x + 1$ 并使用 $\rho = \sqrt{2}$ 的反正切公式，就可以算出第二个积分：

$$-7 \int \frac{1}{(x + 1)^2 + 2} \ dx = -\frac{7}{\sqrt{2}}\arctan\left(\frac{x + 1}{\sqrt{2}}\right) + k$$

把结果合起来，得到：

$$\int \frac{5x^2 + 3x - 2}{(x + 1)(x^2 + 2x + 3)} \ dx = \frac{5}{2}\ln(x^2 + 2x + 3) - \frac{7}{\sqrt{2}}\arctan\left(\frac{x + 1}{\sqrt{2}}\right) + k$$

这个过程比前面的情形稍微复杂一些，但不要气馁。只要记住想要得到的最终形式，并有条理地作适当的换元，经过练习你会发现这些积分算起来相当容易。

## 重复的不可约二次因式

最后一种情形更复杂一些，涉及分母含有不可约二次因式的幂 $q(x)^k$ 的积分。这里必须包括从 $1$ 到 $k$ 的每个幂，就像处理重复的一次因式时那样。设 $q(x) = x^2 + bx + c$ 且 $b^2 - 4c < 0$，分解式的相应部分为：

$$\frac{A_1x + B_1}{q(x)} + \frac{A_2x + B_2}{q(x)^2} + \dots + \frac{A_kx + B_k}{q(x)^k}$$

每个分子的次数至多为 $1$。为了对下标为 $j$ 的项积分，像上一种情形那样拆分分子：

$$A_jx + B_j = \frac{A_j}{2}q'(x) + \left(B_j - \frac{A_jb}{2}\right)$$

含 $q'(x)$ 的部分通过换元 $v = q(x)$ 积分。当 $j = 1$ 时，同样得到一个对数。而当 $j \geq 2$ 时，得到：

$$\int \frac{q'(x)}{q(x)^j} \ dx = \int v^{-j} \ dv = \frac{q(x)^{1-j}}{1-j} + K$$

剩下的是对分子为常数的项积分。与前面一样令 $u = x + b/2$ 和 $\rho = \sqrt{c - b^2/4} > 0$，把它化为下面的积分族：

$$I_j = \int \frac{1}{(u^2 + \rho^2)^j} \ du$$

刚才已经考虑了 $j = 1$ 的情形。当 $j \geq 2$ 时，可以用[递推公式](../reduction-formulas/)降低指数。为了推导它，从下面的导数出发：

$$
\begin{align}
\frac{d}{du}\left[\frac{u}{(u^2 + \rho^2)^{j-1}}\right] &= \frac{1}{(u^2 + \rho^2)^{j-1}} - \frac{2(j-1)u^2}{(u^2 + \rho^2)^j} \\[6pt]
  &= \frac{2(j-1)\rho^2}{(u^2 + \rho^2)^j} - \frac{2j-3}{(u^2 + \rho^2)^{j-1}}
\end{align}
$$

在最后一步中，我们代入了 $u^2 = (u^2 + \rho^2) - \rho^2$，并合并了分母相同的项。对这个恒等式积分并解出 $I_j$，得到：

$$I_j = \frac{u}{2(j-1)\rho^2(u^2 + \rho^2)^{j-1}} + \frac{2j-3}{2(j-1)\rho^2}I_{j-1} \qquad (j \geq 2)$$

每应用一次，下标就降低一，所以经过 $j - 1$ 步之后到达如下形式：

$$I_1 = \frac{1}{\rho}\arctan\left(\frac{u}{\rho}\right) + K$$

例如，当 $j = 2$ 时，应用一次公式就得到：

$$I_2 = \frac{u}{2\rho^2(u^2 + \rho^2)} + \frac{1}{2\rho^3}\arctan\left(\frac{u}{\rho}\right) + k$$

这个表达式给出了 $1/(u^2 + \rho^2)^2$ 在整个 $\mathbb{R}$ 上的原函数，因为 $\rho > 0$，分母永不为零。

这些情形可能相当繁琐，特别是当二次因式的重数很高时，因为要确定的系数更多，递推公式也要应用好几次。因此我们只讨论 $j = 2$ 的情形，它说明了怎样使用这个公式。再举一个例子，也只是重复已经演示过的分解和换元，主要是增加代数步骤，而不会引入新的积分技巧。
