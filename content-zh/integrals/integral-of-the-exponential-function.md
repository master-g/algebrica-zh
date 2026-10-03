---
title: 指数函数的积分
title_en: Integral of the Exponential Function
source: https://algebrica.org/integral-of-the-exponential-function/
license: CC BY-NC 4.0
tags:
  - antiderivative
  - chain-rule
  - error-function
  - exponential-function
  - indefinite-integral
  - integration
  - integration-by-parts
  - integration-by-substitution
  - linearity
  - logarithms
translation:
  status: current
  source_hash: d735f235a19ce400eae08d5514a8b0ffcd4c020cb12c37843cbf36f96347559a
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---

## 回顾指数函数

[指数函数](../exponential-function/)是形如 $e^x$ 或 $\alpha^x$ 的函数，其中 $\alpha > 0$ 且 $\alpha \neq 1$。数 $e$ 在分析中处于核心地位，因为它是唯一使指数函数的[导数](../derivatives/)等于函数本身的底数。对于一般的指数函数 $\alpha^x$（$\alpha > 0$），求导会多出一个因子：

$$\frac{d}{dx}\alpha^x = \alpha^x \ln \alpha$$

这个[对数](../logarithms/)项表示底数的选取怎样影响函数的增长。这个因子只在一种情形下消失，即 $\ln \alpha = 1$ 时，此时导数等于函数本身：

$$\frac{d}{dx}\alpha^x = \alpha^x$$

满足这个条件的数只有 $e$，所以 $e^x$ 是唯一在求导下保持不变的指数函数，这个性质同样延伸到积分。这就解释了 $e$ 在微分学和积分学中的作用。

- - -

计算指数函数的[积分](../indefinite-integrals/)时，按底数是 $e$ 还是一般的正数 $\alpha \neq 1$ 区分两种情形。$e^x$ 的积分很简单，由下式给出：

$$\int e^x \ dx = e^x + c \tag{1}$$

对右边求导，得到：

$$\frac{d}{dx}\left[e^x + c\right] = \frac{d}{dx}e^x + \frac{d}{dx}c = e^x + 0 = e^x$$

这样就验证了 $e^x + c$ 是 $e^x$ 的原函数。而 $\alpha^x$ 的积分由下式给出：

$$\int \alpha^x \ dx = \frac{1}{\ln \alpha} \cdot \alpha^x + c \tag{2}$$

这个公式也可以直接验证如下：

$$\frac{d}{dx}\left[ \frac{1}{\ln \alpha} \cdot \alpha^x + c \right] = \frac{1}{\ln \alpha} \cdot (\ln \alpha \cdot \alpha^x) = \alpha^x$$

因子 $1/\ln \alpha$ 抵消了求导引入的对数项，所以回到原来的被积函数。

## 指数积分的标准形式

下表列出最常见的指数形式的原函数，左边是积分，右边是相应的原函数。常数 $a$ 和 $b$ 是实数，且 $a \neq 0$，而 $\alpha > 0$ 且 $\alpha \neq 1$。在最后一行中，$f(x)$ 是任意可导函数。这些形式涵盖了积分练习中最常遇到的情形。

[class="table-1"]

|    |                                            |                                                                |
| -- | ------------------------------------------ | -------------------------------------------------------------- |
| 1. | $$\int e^x \ dx$$                          | $$e^x + c$$                                                    |
| 2. | $$\int \alpha^x \ dx$$                     | $$\dfrac{1}{\ln \alpha} \alpha^x + c$$                         |
| 3. | $$\int e^{ax + b} \ dx$$                   | $$\dfrac{1}{a} e^{ax + b} + c$$                                |
| 4. | $$\int \alpha^{ax + b} \ dx$$              | $$\dfrac{1}{a \ln \alpha} \alpha^{ax + b} + c$$                |
| 5. | $$\int e^{f(x)} f'(x) \ dx$$               | $$e^{f(x)} + c$$                                               |

[/class]

> 可以看到，在这些公式中，积分都保持指数形式不变。除了积分常数之外，原函数中的指数项与原来的指数项只相差一个常数因子，这个因子取决于指数中的系数或幂的底数。

## 例 1

作为第一个例子，计算下面的积分：

$$\int (e^x + 3^x) \ dx$$

由[不定积分](../indefinite-integrals/)的[线性性质](../integration-strategies/)，和的积分等于积分的和，所以可以把它改写为：

$$\int (e^x + 3^x) \ dx = \int e^x \ dx + \int 3^x \ dx$$

第一个积分直接由公式 $(1)$ 得到，等于 $e^x + c$。对第二个积分，用公式 $(2)$ 并取 $\alpha = 3$，得到：

$$\int 3^x \ dx = \frac{1}{\ln 3} \cdot 3^x + c$$

把两部分相加，得到：

$$e^x + \frac{1}{\ln 3} \cdot 3^x + c$$

## 自变量为一次式的指数函数

在应用中，常常遇到自变量是一次函数 $ax + b$（$a \neq 0$）的指数函数。在这种情形下，相应的积分公式为：

$$\int e^{ax + b} \ dx = \frac{1}{a} e^{ax + b} + c \tag{3}$$

因子 $1/a$ 抵消了[链式法则](../chain-rule/)引入的系数。为了验证这一点，对右边求导，得到：

$$\frac{d}{dx}\left[ \frac{1}{a} e^{ax + b} + c \right] = \frac{1}{a} \cdot a \cdot e^{ax + b} = e^{ax + b}$$

不出所料，结果等于原来的被积函数。当指数是可导函数 $f(x)$ 时，可以通过[换元积分法](../integration-by-substitution/)推广公式 $(3)$：

$$\int e^{f(x)} \cdot f'(x) \ dx = e^{f(x)} + c$$

被积函数必须含有指数函数 $e^{f(x)}$ 与其指数的导数的乘积。在这种情况下，积分可以直接写出，原函数是 $e^{f(x)} + c$。如果被积函数中没有因子 $f'(x)$，就必须先通过代数变形或适当的换元得到这种形式，然后才能应用这条规则。

同样的推理可以推广到底数为一般的 $\alpha$ 的指数函数。当指数是 $ax + b$ 而不是 $x$ 时，求导产生两个因子，一个是来自指数的系数 $a$，另一个是来自底数的 $\ln \alpha$。于是得到下面的公式：

$$\int \alpha^{ax + b} \ dx = \frac{1}{a \ln \alpha} \alpha^{ax + b} + c$$

当我们分解较复杂的积分、试图把它们化为初等积分时，这类表达式常常出现在中间步骤中。

## 例 2

计算下面的积分，它含有两个底数不同的指数项的乘积：

$$\int 8^x \cdot 2^{-3x + 4} \ dx$$

可以用[幂的性质](../powers/)化简被积函数。在第二个因子中，把 $2$ 的指数中的各项分开，写出：

$$2^{-3x + 4} = 2^{-3x} \cdot 2^4 = 16 \cdot 2^{-3x}$$

把这个恒等式代入积分，并把常数提到积分号外，得到：

$$\int 8^x \cdot 2^{-3x + 4} \ dx = 16 \int 8^x \cdot 2^{-3x} \ dx$$

可以把底数 $8$ 改写为 $2$ 的幂，使被积函数化为 $2$ 的单个幂：

$$
\begin{align}
16 \int 8^x \cdot 2^{-3x} \ dx &= 16 \int (2^3)^x \cdot 2^{-3x} \ dx \\[6pt]
                               &= 16 \int 2^{3x} \cdot 2^{-3x} \ dx \\[6pt]
                               &= 16 \int 2^{3x - 3x} \ dx \\[6pt]
                               &= 16 \int 1 \ dx\\[6pt]
                               &= 16x + c
\end{align}
$$

> 可以看到，一旦把两个指数因子写成同一底数，被积函数就得到化简，剩下的只是对常数积分。

## 例 3

接下来考虑下面的积分，其中两个因子都是自变量为一次式的指数函数，底数可以化为同一个底数：

$$\int 9^{x - 1} \cdot 3^{-x + 2} \ dx$$

利用幂的性质，可以把每个指数中的各项分开，写出：

$$9^{x - 1} \cdot 3^{-x + 2} = 9^x \cdot 9^{-1} \cdot 3^{-x} \cdot 3^2$$

简单计算后，被积函数化为：

$$9^x \cdot 3^{-x}$$

把 $9^x$ 改写为 $3^{2x}$，就可以把底数为 $3$ 的两个指数因子合并为单个幂：

$$9^x \cdot 3^{-x} = 3^{2x} \cdot 3^{-x} = 3^{2x - x} = 3^x$$

因此积分化为标准形式 $\int \alpha^x \ dx$，其中 $\alpha = 3$：

$$\int 9^{x - 1} \cdot 3^{-x + 2} \ dx = \int 3^x \ dx$$

应用公式 $(2)$，得到结果：

$$\frac{1}{\ln 3} \cdot 3^x + c$$

> 计算这类积分时，主要的一步是把各因子化为同一底数。一旦两个因子都表示为同一底数的幂，被积函数就变成单个指数函数，可以直接积分。

## 例 4

再举一个例子，计算下面的积分，其中指数是 $x$ 的一次函数：

$$\int e^{3x - 2} \ dx$$

我们知道，可以直接应用形如 $e^{ax + b}$ 的指数函数的规则。$3x - 2$ 的导数是 $3$，所以原函数中必须带上因子 $1/3$：

$$\int e^{3x - 2} \ dx = \frac{1}{3} e^{3x - 2} + c$$

对右边求导来验证结果：

$$\frac{d}{dx}\left[ \frac{1}{3} e^{3x - 2} + c \right] = \frac{1}{3} \cdot 3 \cdot e^{3x - 2} = e^{3x - 2}$$

求导回到了原来的被积函数，所以这个原函数与积分规则相符。


## 例 5

现在考虑下面的积分，其中指数是 $x$ 的[二次函数](../polynomial-function/)而不是一次函数。

$$\int x e^{x^2} \ dx$$

在这种情形下，不能直接应用形如 $e^{ax + b}$ 的指数函数的规则。不过，被积函数的形式提示了该怎么做。$x^2$ 的导数是 $2x$，而被积函数已经含有因子 $x$。同时乘以并除以 $2$，就补上了缺少的常数，而不改变积分的值：

$$\int x e^{x^2} \ dx = \frac{1}{2} \int 2x e^{x^2} \ dx$$

现在被积函数具有标准形式 $e^{f(x)} f'(x)$，其中 $f(x) = x^2$，所以可以应用表中第 $(5)$ 行的公式直接积分：

$$\int x e^{x^2} \ dx = \frac{1}{2} e^{x^2} + c$$

对右边求导来验证结果：

$$\frac{d}{dx}\left[ \frac{1}{2} e^{x^2} + c \right] = \frac{1}{2} \cdot 2x \cdot e^{x^2} = x e^{x^2}$$

求导回到了原来的被积函数，从而确认了所得的原函数。

## 缺少导数因子时

为了完整起见，我们简单谈一个更深入的话题。为了理解上一个例子中因子 $x$ 的作用，来看看去掉它会怎样。积分将变为：

$$\int e^{x^2} \ dx$$

这个积分没有能用初等函数表示的原函数。它的原函数习惯上用所谓的虚误差函数 $\mathrm{erfi}(x)$ 来表示，其定义为：

$$\mathrm{erfi}(x) = \frac{2}{\sqrt{\pi}} \int_0^x e^{t^2} \ dt$$

它不是初等函数，也就是说，它不能由多项式、指数函数、对数函数和三角函数经过有限次代数运算的组合得到。不过，[微积分基本定理](../fundamental-theorem-of-calculus/)使我们能够直接从定义它的积分求出它的导数。反复求导还表明它[无穷次可导](../higher-order-derivatives/)。

与例 $5$ 作比较，可以看清因子 $x$ 的作用。总结一下，在积分 $\int x e^{x^2} \ dx$ 中，因子 $x$ 在相差常数 $1/2$ 的意义下提供了指数 $x^2$ 的导数。被积函数具有标准形式 $e^{f(x)} f'(x)$，原函数是初等的。当因子 $x$ 不存在时，这种对应就没有了，积分不再能用初等技巧计算，这超出了我们目前的范围。

> 当没有初等闭式时，仍然可以用[数值积分](../numerical-integration/)来近似相应的[定积分](../definite-integrals/)，例如[有限区间](../intervals/)上的 $\int e^{x^2} \ dx$。

## 含指数因子的分部积分

有些含指数函数的积分无法仅靠代数变形化为标准形式。当被积函数是指数函数与多项式的乘积，或者是指数函数与另一个[超越函数](../functions/)的乘积时，[分部积分法](../integration-by-parts/)为我们提供了一种系统的方法。这种方法以下面的公式为基础：

$$\int u(x) v'(x) \ dx = u(x) v(x) - \int u'(x) v(x) \ dx$$

当有指数因子时，取 $v'(x) = e^{ax + b}$ 一般比较方便，因为我们知道，积分使指数函数除了一个常数因子外保持不变，而另一个因子被求导并逐步化简。

- - -

最简单的情形是被积函数为一次多项式与指数函数的乘积。例如，计算下面的积分：

$$\int x e^x \ dx$$

令 $u(x) = x$ 和 $v'(x) = e^x$，于是 $u'(x) = 1$ 和 $v(x) = e^x$。把这些表达式代入分部积分公式，得到：

$$\int x e^x \ dx = x e^x - \int e^x \ dx = x e^x - e^x + c$$

提出指数函数，得到：

$$\int x e^x \ dx = (x - 1) e^x + c$$

对结果求导直接回到原来的被积函数，验证了这个原函数：

$$\frac{d}{dx}\left[ (x - 1) e^x + c \right] = e^x + (x - 1) e^x = x e^x$$

- - -

当[多项式](../polynomials/)因子的次数大于 $1$ 时，应用一次公式是不够的，必须把这个步骤重复几次。例如，考虑下面的积分：

$$\int x^2 e^x \ dx$$

令 $u(x) = x^2$ 和 $v'(x) = e^x$。第一次应用公式，得到：

$$\int x^2 e^x \ dx = x^2 e^x - \int 2x e^x \ dx$$

剩下的积分与上一个例子中的积分形式相同，我们已经算过。代入那个结果，得到：

$$\int x^2 e^x \ dx = x^2 e^x - 2(x - 1) e^x + c = (x^2 - 2x + 2) e^x + c$$

同样的推理可以推广到任何 $n$ 次多项式 $P(x)$。连续应用 $n$ 次分部积分之后，多项式因子化为常数，计算完成。[一般的递推关系](../reduction-formulas/)为：

$$\int x^n e^x \ dx = x^n e^x - n \int x^{n - 1} e^x \ dx$$

这个等式用 $x^{n - 1} e^x$ 的积分表示 $x^n e^x$ 的积分，使我们能够在有限步内得到闭式的原函数。

- - -

另一种变化是指数为 $x$ 的一次函数的情形。可以使用与上面相同的方法，只是要记得在 $e^{ax + b}$ 的原函数中带上因子 $1/a$。于是计算积分：

$$\int x e^{2x} \ dx$$

令 $u(x) = x$ 和 $v'(x) = e^{2x}$。$v'(x)$ 的一个原函数是 $v(x) = 1/2 \cdot e^{2x}$，应用分部积分公式，得到：

$$\int x e^{2x} \ dx = \frac{x}{2} e^{2x} - \int \frac{1}{2} e^{2x} \ dx = \frac{x}{2} e^{2x} - \frac{1}{4} e^{2x} + c$$

提出指数项，得到结果：

$$\frac{1}{4} e^{2x} (2x - 1) + c$$

指数中的系数 $a = 2$ 不改变步骤。它只是在每一步积分时引入一个因子 $1/2$，其影响体现在最终的表达式中。
