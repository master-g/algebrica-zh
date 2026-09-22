---
title: 无理函数的积分
title_en: Integrals of Irrational Functions
source: https://algebrica.org/integrals-of-irrational-functions/
license: CC BY-NC 4.0
tags:
  - binomial-differentials
  - completing-the-square
  - euler-substitution
  - indefinite-integral
  - integration-by-substitution
  - integration-techniques
  - irrational-functions
  - rationalizing-substitution
translation:
  status: current
  source_hash: 4a5850360400c36d83d7587de4a27c4f95d12ab5bf8a04d8b527900b9b9d0654
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 引言

[无理函数](../irrational-functions/)的积分——变量出现在根号下的积分——如果不知道所需的技巧，可能会相当费力。一般地说，我们的目标是把原积分化为不含根式的形式，从而把问题转化为[有理函数的积分](../integral-of-rational-functions/)，后者的计算要简单得多。

设 $R(u,v)$ 表示两个未定元 $u$ 与 $v$ 的有理函数。考虑[换元](../integration-by-substitution/) $x=\chi(t)$，并设 $\psi(t)=\sqrt[n]{\varphi\big(\chi(t)\big)}$。若 $\chi(t)$ 与 $\psi(t)$ 都是 $t$ 的有理函数，则该换元把积分有理化，且有：

$$\int R\big(x,\sqrt[n]{\varphi(x)}\big) \ dx=\int R\big(\chi(t),\psi(t)\big)\chi'(t) \ dt$$

在下文中，每个换元都理解为在实定义域的某个区间上进行，在该区间上[根式](../radicals/)的一个分支已取定且分母不为零。借助这一约定，我们可以在根式与幂之间的恒等式中不引入符号变化。

这是一般方法的公式，但应记住：并非每个无理函数都有初等原函数。像下面这样的积分属于椭圆积分类，不能用初等函数表示：

$$\int\frac{dx}{\sqrt{1-x^4}}$$

因此，本条目讨论的所有换元都只涉及可以有理化的情形，椭圆积分留待单独处理。在继续之前，请确保已经掌握主要的[积分技巧](../integration-strategies/)，否则下面的内容可能难以理解。

## 线性分式的根式

从相对简单的情形开始：被积函数关于 $x$ 以及两个一次二项式之比的 $n$ 次根式是有理的：

$$\int R\left(x,\sqrt[n]{\frac{ax+b}{cx+d}}\right) \tag{1}dx$$

在继续之前，必须施加条件 $ad-bc\neq0$，它排除了分子分母成比例的情形。否则根式会退化为一个数，无需任何换元。下面的例子可以更清楚地说明这一点。取 $a=2$，$b=4$，$c=1$，$d=2$，得：

$$\sqrt{\frac{2x+4}{x+2}}=\sqrt2 \qquad x\neq-2$$

根式是常数，被积函数单独关于 $x$ 已经是有理的，因此不需要换元。幸运眷顾的人很少，更常见的是确实需要换元的积分。对 $(1)$，换元就是把根式换成 $t$：

$$t=\sqrt[n]{\frac{ax+b}{cx+d}}$$

由上述表达式可得：

$$t^n=\frac{ax+b}{cx+d}$$

此时从第二个等式中解出 $x$，几步初等代数运算给出：

$$x=\frac{b-dt^n}{ct^n-a}$$

这是 $t$ 的有理函数，它的导数也是有理函数。展开商的导数，分子坍缩为常数 $ad-bc$ 乘以 $nt^{n-1}$：

$$dx=\frac{n(ad-bc)t^{n-1}}{(ct^n-a)^2} \ dt$$

这样，有理化就完成了。

- - -

一个常见情形是 $c=0$ 且 $d=1$，此时根号下是一个简单的一次二项式：

$$\int R\big(x,\sqrt[n]{ax+b}\big) \ dx \qquad t=\sqrt[n]{ax+b}$$

这里逆换元为 $x=(t^n-b)/a$，微分为 $dx=(n/a)t^{n-1} \ dt$。

当同一个二项式出现在不同指数的根号下时，只要所选的指数能被每个指数整除，一个换元就可以把全部根式有理化。含多个根式的一般形式如下：

$$\int R\big(x,\sqrt[n_1]{ax+b},\dots,\sqrt[n_j]{ax+b}\big) \ dx$$

这里设 $t^m=ax+b$，其中 $m$ 取 $n_1,\dots,n_j$ 的最小公倍数。若 $m$ 为偶数，取 $t\geq0$。于是每个根式都变成 $t$ 的整数次幂，因为 $\sqrt[n_i]{ax+b}=t^{m/n_i}$，而按 $m$ 的取法，指数 $m/n_i$ 是整数。

为使这个判据更具体，把它应用于下面的积分：

$$\int\frac{dx}{\sqrt x+\sqrt[3]x}$$

在这个例子中，根式的指数分别为 $2$ 与 $3$，最小公倍数为 $6$。设 $x=t^6$（$t>0$），得 $dx=6t^5 \ dt$，$\sqrt x=t^3$，$\sqrt[3]x=t^2$。简短的计算给出：

$$\int\frac{6t^5}{t^3+t^2} \ dt=6\int\frac{t^3}{t+1} \ dt$$

现在分子的次数高于分母，可以应用[多项式除法](../polynomial-division/)，得：

$$\frac{t^3}{t+1}=t^2-t+1-\frac{1}{t+1}$$

该积分是初等的，可以逐项计算：

$$6\left(\frac{t^3}{3}-\frac{t^2}{2}+t-\ln|t+1|\right)=2t^3-3t^2+6t-6\ln(t+1)$$

由于 $t > 0$，对数内的绝对值可以去掉。现在回到原变量，$t=\sqrt[6]x$，因此 $t^3=\sqrt x$，$t^2=\sqrt[3]x$。于是原积分为：

$$\int\frac{dx}{\sqrt x+\sqrt[3]x}=2\sqrt x-3\sqrt[3]x+6\sqrt[6]x-6\ln\big(\sqrt[6]x+1\big)+k$$

- - -

再看第二个例子，计算下面的积分：

$$\int\sqrt{\frac{x}{1-x}} \ dx \qquad 0\leq x<1$$

系数为 $a=1$，$b=0$，$c=-1$，$d=1$，所以 $ad-bc=1$，必须应用换元。设 $t=\sqrt{x/(1-x)}$，由此 $t^2(1-x)=x$，解得：

$$x=\frac{t^2}{1+t^2} \qquad dx=\frac{2t}{(1+t^2)^2} \ dt$$

此时被积函数变成有理函数：

$$\int t\cdot\frac{2t}{(1+t^2)^2} \ dt=2\int\frac{t^2}{(1+t^2)^2} \ dt$$

简短离题一下：请记住，在许多情形下，在你似乎陷入困境的表达式中加上并减去同一个量，可以扭转局面。一个经典的技巧——学生们要么不知道，要么难以驾驭，因为标准数学课程把它当作几乎多余的点缀——就是加上并减去 $1$。在我们的例子中，写出 $t^2=(1+t^2)-1$ 就把该分式拆成 $1/(1+t^2)$ 与 $1/(1+t^2)^2$ 之差。第二项可化为二次分母幂的[递推公式](../reduction-formulas/)中 $n=2$ 的情形，于是得到：

$$\int\frac{dt}{(1+t^2)^2}=\frac{t}{2(1+t^2)}+\frac{1}{2}\arctan t$$

现在回到原变量。注意 $1+t^2=1/(1-x)$，因此 $t/(1+t^2)=t(1-x)=\sqrt{x(1-x)}$。结果为：

$$\int\sqrt{\frac{x}{1-x}} \ dx=\arctan\sqrt{\frac{x}{1-x}}-\sqrt{x(1-x)}+k$$

## 二次三项式的平方根

现在转向最常见的一族积分：根号下出现二次多项式的情形：

$$\int R\big(x,\sqrt{ax^2+bx+c}\big) \ dx$$

必须施加条件 $a\neq0$ 与 $b^2-4ac\neq0$ 以排除退化情形。这里第一个工具是[配方](../completing-the-square/)，它把三项式化为[三角换元](../trigonometric-substitution-for-integrals/)词条中处理的三种典范形式之一。不过，最好先记下这一族几乎每次计算都会用到的两个基本原函数。记 $Q(x)=ax^2+bx+c$，$D=b^2-4ac$，注意把 $Q$ 乘以 $4a$ 并配方，得恒等式：

$$4aQ(x)=(2ax+b)^2-D$$

这个关系提示作线性换元 $w=2ax+b$，$dw=2a \ dx$。对 $a>0$，该恒等式给出 $\sqrt{Q(x)}=\sqrt{w^2-D}/(2\sqrt a)$，积分化为 $1/\sqrt{w^2-D}$ 的原函数：

$$\int\frac{dx}{\sqrt{ax^2+bx+c}}=\frac{1}{\sqrt a}\ln\left|2ax+b+2\sqrt a\sqrt{ax^2+bx+c}\right|+k$$

对 $a<0$，被开方式只在一个有界区间上为正，这迫使[判别式](../trinomials/)为正。此时恒等式给出 $\sqrt{Q(x)}=\sqrt{D-w^2}/(2\sqrt{-a})$，积分化为[反正弦](../arcsine-function/)的原函数：

$$\int\frac{dx}{\sqrt{ax^2+bx+c}}=-\frac{1}{\sqrt{-a}}\arcsin\frac{2ax+b}{\sqrt{b^2-4ac}}+k$$

由于 $Q'(x)=2ax+b$，每个二项式 $mx+n$ 都可以分解为三项式的导数与常数 $1$ 的线性组合：

$$mx+n=\frac{m}{2a}(2ax+b)+\left(n-\frac{mb}{2a}\right)$$

第一个被加数产生一个立即可得的积分，因为它的分子恰好是被开方式的导数，且 $Q'/\sqrt Q$ 的原函数是 $2\sqrt Q$。第二个则回到上面写出的两个公式，因此：

$$\int\frac{mx+n}{\sqrt{ax^2+bx+c}} \ dx=\frac{m}{a}\sqrt{ax^2+bx+c}+\left(n-\frac{mb}{2a}\right)\int\frac{dx}{\sqrt{ax^2+bx+c}}$$

## 欧拉换元

然而，事情并不总是一帆风顺。配方只能解决根式单独出现在分子或分母中的情形。当 $R$ 把 $x$ 与根式组合成任意分式时，三角路线会导致正弦余弦的有理函数的积分，进而需要[魏尔斯特拉斯换元](../the-weierstrass-substitution/)。

在这些情形，就要动用欧拉换元。它们直接有理化被积函数，不经过三角函数。

第一个换元要求 $a>0$，设：

$$\sqrt{ax^2+bx+c}=t-x\sqrt a$$

两边平方消去 $ax^2$ 项，剩下 $bx+c=t^2-2\sqrt atx$。由此 $x$ 表示为 $t$ 的有理函数：

$$x=\frac{t^2-c}{2\sqrt at+b}$$

对商求导得微分，把 $x$ 的表达式代回换元式得根式：

$$dx=\frac{2\big(\sqrt at^2+bt+\sqrt ac\big)}{(2\sqrt at+b)^2} 
\ dt$$

$$\sqrt{ax^2+bx+c}=\frac{\sqrt at^2+bt+\sqrt ac}{2\sqrt at+b}$$

- - -

第二个换元要求 $c>0$，设：

$$\sqrt{ax^2+bx+c}=xt+\sqrt c$$

平方消去常数项，剩下 $ax^2+bx=x^2t^2+2\sqrt cxt$。提取公因子 $x$ 会给出解 $x=0$，它不能确定变量替换。在 $x\neq0$ 的区间上，除以 $x$ 得到一个一次方程，因此：

$$x=\frac{2\sqrt ct-b}{a-t^2}$$

- - -

第三个换元要求三项式有两个不同的实[根](../roots-of-a-polynomial/) $\alpha$ 与 $\beta$，即 $b^2-4ac>0$。此时因式分解成立：

$$ax^2+bx+c=a(x-\alpha)(x-\beta)$$

于是设：

$$\sqrt{ax^2+bx+c}=t(x-\alpha)$$

全部平方并除以公因子 $x-\alpha$，得：

$$x=\frac{a\beta-\alpha t^2}{a-t^2}$$

值得了解的是，三个换元覆盖的情形有重叠。$a>0$ 时第一个适用。$a<0$ 时被开方式只在有界区间上为正，判别式因此为正，这使第三个适用。第一个与第三个足以覆盖被开方式不恒负的每个三项式，而第二个在 $c>0$ 时是值得采用的捷径，因为它能明显缩短计算。

- - -

为用一个算例弄清迄今所述的内容，用这一方法计算下面的积分：

$$\int\frac{dx}{x\sqrt{x^2+x+1}}$$

该三项式 $a=1$，$c=1$，因此可以用第一个或第二个换元（由于判别式等于 $-3$，可以排除第三个）。我们选第二个，设：

$$\sqrt{x^2+x+1}=xt+1$$

平方并消去常数项，剩下 $x^2+x=x^2t^2+2xt$。除以 $x$ 得 $x+1=xt^2+2t$，因此：

$$x=\frac{2t-1}{1-t^2}$$

由该表达式得到微分与根式作为 $t$ 的有理函数：

$$dx=\frac{2\big(t^2-t+1\big)}{(1-t^2)^2} \ dt$$

$$\sqrt{x^2+x+1}=xt+1=\frac{t^2-t+1}{1-t^2}$$

把三个因子代入被积函数并计算，得：

$$
\begin{align}
\int\frac{dx}{x\sqrt{x^2+x+1}} &= \int\frac{1-t^2}{2t-1}\cdot\frac{1-t^2}{t^2-t+1}\cdot\frac{2\big(t^2-t+1\big)}{(1-t^2)^2} \ dt \\[6pt]
&= \int\frac{2}{2t-1} \ dt
\end{align}
$$

最后的积分等于 $\ln|2t-1|$。由换元式得 $t=\big(\sqrt{x^2+x+1}-1\big)/x$，因此 $2t-1=\big(2\sqrt{x^2+x+1}-x-2\big)/x$，原函数为：

$$\int\frac{dx}{x\sqrt{x^2+x+1}}=\ln\left|\frac{2\sqrt{x^2+x+1}-x-2}{x}\right|+k$$

> 请相信，这一方法比三角换元高效得多——后者在某些情形下会使原积分变得相当复杂，让计算冗长得多，甚至几乎无法操作。因此，建议学会自信地运用这些方法，因为它们适用的实际情形相当常见，对于那些乍一看十分费力的积分，它们可能非常有用，甚至是决定性的。

## 多项式分子与待定系数

现在考察另一种情形：根式只出现在分母中，而分子是多项式。好消息是，存在一种完全避免换元的方法。设 $P_n$ 表示 $n$ 次多项式，与上面一样，设 $Q(x)=ax^2+bx+c$ 为根号下的三项式。我们寻找如下形式的原函数：

$$\int\frac{P_n(x)}{\sqrt{Q(x)}} \ dx=S_{n-1}(x)\sqrt{Q(x)}+\lambda\int\frac{dx}{\sqrt{Q(x)}}$$

$S_{n-1}$ 是系数待定的 $n-1$ 次多项式，$\lambda$ 是常数。右边的积分是上面通过配方得到的两个原函数之一，因此已经知道。为确定系数，把该等式关于 $x$ 求导并两边乘以 $\sqrt Q$——这一运算消去所有根式，留下一个多项式之间的恒等式：

$$P_n(x)=S_{n-1}'(x)Q(x)+\frac{1}{2}S_{n-1}(x)Q'(x)+\lambda$$

两边次数相同，都是 $n$ 次，因为 $S_{n-1}'$ 为 $n-2$ 次而 $Q$ 为 $2$ 次，$S_{n-1}$ 为 $n-1$ 次而 $Q'$ 为 $1$ 次。比较系数产生 $n+1$ 个[线性方程](../systems-of-linear-equations/)，未知量是 $S_{n-1}$ 的 $n$ 个系数和 $\lambda$，共 $n+1$ 个，方程组从最高次开始依次求解。看一个算例，希望它能让整件事不那么晦涩。计算下面的积分：

$$\int\frac{x^2}{\sqrt{x^2+1}} \ dx$$

这里 $n=2$，所以 $S_1(x)=Ax+B$，多项式恒等式变为：

$$x^2=A\big(x^2+1\big)+\frac{1}{2}(Ax+B)(2x)+\lambda=2Ax^2+Bx+(A+\lambda)$$

比较系数：二次项给出 $A=1/2$，一次项给出 $B=0$，常数项给出 $\lambda=-1/2$。剩余的积分是 $a>0$ 公式中 $a=1$，$b=0$，$c=1$ 的情形，它化为 $\ln\big(x+\sqrt{x^2+1}\big)$。因此原函数为：

$$\int\frac{x^2}{\sqrt{x^2+1}} \ dx=\frac{x}{2}\sqrt{x^2+1}-\frac{1}{2}\ln\big(x+\sqrt{x^2+1}\big)+k$$

## 二项式微分

我们要看的最后一族积分结构与迄今所见不同，因为根式作用于变量以任意指数出现的[二项式](../binomials/)。二项式微分定义为如下形式的表达式：

$$x^m\big(a+bx^n\big)^p \ dx \qquad a,b\neq0, \quad m,n,p\in\mathbb{Q}, \quad n\neq0$$

假设 $n\neq0$ 排除了退化情形 $n=0$：此时因子 $(a+bx^n)^p$ 是常数，积分（当有定义时）化为单项式的积分。

设 $z=x^n$，由此 $dz=nx^{n-1} \ dx$，积分改写为凸显指数 $(m+1)/n-1$ 与 $p$ 的形式，下面的分类正依赖于这两个指数：

$$\int x^m\big(a+bx^n\big)^p \ dx=\frac{1}{n}\int z^{\frac{m+1}{n}-1}(a+bz)^p \ dz$$

一般情形下，原函数完全不是初等的。确切给出它何时为初等的结果归功于切比雪夫（但超出我们的讨论范围），它涉及下面三个数：

$$p \qquad \frac{m+1}{n} \qquad \frac{m+1}{n}+p$$

只需注意：在这些情形，积分可用初等函数表示，当且仅当这三个数中至少有一个是整数。

+ 若 $p$ 是整数，被积函数关于 $x^{1/s}$ 的幂是有理的，其中 $s$ 是 $m$ 与 $n$ 的分母的最小公倍数，因此设 $x=t^s$。
+ 若 $(m+1)/n$ 是整数，设 $a+bx^n=t^s$，其中 $s$ 是 $p$ 的分母。
+ 若 $(m+1)/n+p$ 是整数，设 $ax^{-n}+b=t^s$，$s$ 同上。

- - -

第二种情形容易识别。例如：

$$\int\frac{\sqrt[3]{1+\sqrt[4]x}}{\sqrt x} \ dx \qquad x>0$$

改写为二项式微分，它有 $m=-1/2$，$n=1/4$，$p=1/3$。$p$ 的分母为 $3$，换元为 $1+x^{1/4}=t^3$，由此：

$$x=\big(t^3-1\big)^4$$

$$dx=12t^2\big(t^3-1\big)^3 \ dt$$

$$\sqrt x=\big(t^3-1\big)^2$$

可以把一切改写为

$$
\begin{align}
\int\frac{t\cdot12t^2\big(t^3-1\big)^3}{\big(t^3-1\big)^2} \ dt &= 12\int\big(t^6-t^3\big) \ dt \\[6pt]
&= \frac{12t^7}{7}-3t^4
\end{align}
$$

用 $t=\sqrt[3]{1+\sqrt[4]x}$ 回到原变量，得：

$$\int\frac{\sqrt[3]{1+\sqrt[4]x}}{\sqrt x} \ dx=\frac{12}{7}\big(1+\sqrt[4]x\big)^{7/3}-3\big(1+\sqrt[4]x\big)^{4/3}+k$$

如你所见，有点费力，但可行。

- - -

第三种情形最不容易识别，因为条件涉及一个和而不是单个指数。例如：

$$\int\frac{dx}{x^4\sqrt{1+x^2}} \qquad x>0$$

指数为 $m=-4$，$n=2$，$p=-1/2$。$p$ 与 $(m+1)/n=-3/2$ 都不是整数，而和 $(m+1)/n+p=-2$ 是整数，因此设 $x^{-2}+1=t^2$（$t>1$）。由该关系 $x^2=1/(t^2-1)$，求导得：

$$dx=-t\big(t^2-1\big)^{-3/2} \ dt$$

$$\sqrt{1+x^2}=\frac{t}{\sqrt{t^2-1}}$$

约去 $t^2-1$ 的幂，被积函数再次化为多项式，因此：

$$
\begin{align}
\int\frac{dx}{x^4\sqrt{1+x^2}} &= \int\big(t^2-1\big)^2\cdot\frac{\sqrt{t^2-1}}{t}\cdot\Big({-t}\big(t^2-1\big)^{-3/2}\Big) \ dt \\[6pt]
&= -\int\big(t^2-1\big) \ dt \\[6pt]
&= t-\frac{t^3}{3}
\end{align}
$$

回到原换元，由 $t=\sqrt{1+x^2}/x$ 并提取根式作为公因子，得：

$$\int\frac{dx}{x^4\sqrt{1+x^2}}=\frac{\big(2x^2-1\big)\sqrt{1+x^2}}{3x^3}+k$$

## 关于换元选择的注记

可以把判别准则的选择总结为以下几点。

+ 对一次二项式的根式（包括不同指数的根式），设 $t^m=ax+b$，$m$ 取各指数的最小公倍数。
+ 对两个一次二项式之比的根式，在验证 $ad-bc\neq0$ 之后，设 $t$ 等于该根式。
+ 对单独出现的二次三项式的平方根，配方并应用三角换元，或使用上面得到的两个直接公式。
+ 对任意有理表达式中三项式的根式，根据 $a$ 的符号、$c$ 的符号与判别式，在三个欧拉换元中选择。
+ 对多项式除以三项式平方根的情形，应用待定系数法。
+ 对 $x$ 的幂乘以 $x^n$ 的二项式幂的情形，检验切比雪夫判据，并在对应的三个换元中选择。

一个积分可能落入列表中不止一项，此时最好根据每条路线涉及的计算长度来决策。当然，这一点事先难以判断，但稍加经验后，就能看出哪个换元更可取。

> 在这些函数族之外，初等原函数一般不存在。若 $P$ 是 $3$ 次或 $4$ 次且无重根的多项式，则积分 $\int \frac{dx}{\sqrt{P(x)}}$ 是椭圆积分。被积函数中仅仅出现 $\sqrt{P(x)}$ 并不足以排除初等原函数，因为重根或特定的分子可以把积分化为初等形式。椭圆积分出现在例如计算椭圆弧[长度](../arc-length-of-a-curve/)的问题中，并作为特殊函数来研究。
