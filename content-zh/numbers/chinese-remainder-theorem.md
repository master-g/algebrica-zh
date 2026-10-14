---
title: 中国剩余定理
title_en: Chinese Remainder Theorem
source: https://algebrica.org/chinese-remainder-theorem/
license: CC BY-NC 4.0
tags:
  - bezout-identity
  - chinese-remainder-theorem
  - congruence
  - coprime-integers
  - greatest-common-divisor
  - least-common-multiple
  - modular-arithmetic
  - multiplicative-inverse
  - residue-class
  - ring-isomorphism
  - systems-of-congruences
translation:
  status: current
  source_hash: 7734da05a369e9bdc596729b5118bbbf9a9d0e04b56eee6d44266b9593ce7d57
  translator: claude
  updated: "2026-10-14T00:00:00.000Z"
---

## 从余数到同余方程组

中国剩余定理保证：一个[整数](../integers/)可以由它除以若干个正整数（称为模数）所得的余数还原出来。当这些模数两两互素，即任意两个不同模数的最大公约数都是 $1$ 时，定理保证任意一组指定的余数都能由某个整数取到，并且具有这组余数的所有整数彼此相差模数之积的倍数。在陈述定理之前，先引入[同余](../modulo-operator/)的概念会很有帮助。如果两个整数 $a$ 和 $b$ 除以 $n$ 的余数相同，就称它们模 $n$ 同余，记作：

$$a\equiv b\pmod n \tag{1}$$

例如 $8\equiv5\pmod3$，因为 $8=2\cdot3+2$，$5=1\cdot3+2$，两者除以 $3$ 的余数都是 $2$。因此，要对同一个整数在几个模数下的余数作出规定，就对每个模数写一个形如 $(1)$ 的同余式。由于我们要找的是同时满足所有这些条件的整数，可以把它们合成一个同余方程组。例如，规定除以 $3$ 余 $2$、除以 $5$ 余 $3$，就得到方程组：

$$ \tag{2}
\begin{cases}
x \equiv 2 \pmod 3 \\[6pt]
x \equiv 3 \pmod 5
\end{cases}
$$

数 $8$ 满足这两个同余式，因为 $8=2\cdot3+2$ 且 $8=1\cdot5+3$；更一般地，每个形如 $8+15q$（$q\in\mathbb{Z}$）的整数也都满足。如前所述，由于 $3$ 和 $5$ 互素，中国剩余定理保证整数 $8+15q$ 恰好是这个方程组的全部解。下面会详细求解，目前直观理解这一过程就够了。现在把问题形式化：取两个大于 $1$ 的整数 $m$ 和 $n$，且 $\gcd(m,n)=1$。对任意整数 $a$ 和 $b$，考虑下面这个推广了 $(2)$ 的方程组：

$$ \tag{3}
\begin{cases}
x \equiv a \pmod m \\[6pt]
x \equiv b \pmod n
\end{cases}
$$

在这些假设下，中国剩余定理断言：方程组 $(3)$ 在 $0$ 到 $mn-1$ 的整数中恰有一个解 $x_0$。在 $x_0$ 上加上 $mn$ 的整数倍，就得到方程组的全部解，公式为：

$$
x=x_0+qmn \qquad q\in\mathbb{Z} \tag{4}
$$

整数解有无穷多个，但它们除以 $mn$ 的余数都是 $x_0$。因此称解在模 $mn$ 意义下唯一。

- - -

定理的证明分为两部分。先证明方程组 $(3)$ 至少有一个解，再证明所有解除以 $mn$ 的余数都相同。对于第一部分，我们利用[贝祖等式](../integers/)构造一个解。贝祖等式指出，对任意两个正整数 $m$ 和 $n$，存在整数 $s$ 和 $t$ 满足下面的关系：

$$
sm+tn=\gcd(m,n) \tag{5}
$$

按假设，$m$ 和 $n$ 互素，所以 $\gcd(m,n)=1$，于是 $(5)$ 可以改写为：

$$ \tag{6}
sm+tn=1
$$

我们从这个恒等式出发，寻找两个数，使它们能分别满足 $(3)$ 中的各个条件。先令 $e_1=tn$，$e_2=sm$。由于 $tn=1-sm$ 模 $m$ 同余于 $1$，$sm=1-tn$ 模 $n$ 同余于 $1$，下列关系成立：

$$ \tag{7}
\begin{align}
e_1 &\equiv 1 \pmod m & e_1 &\equiv 0 \pmod n \\[6pt]
e_2 &\equiv 0 \pmod m & e_2 &\equiv 1 \pmod n
\end{align}
$$

考虑和 $ae_1+be_2$。由 $(7)$ 中的关系，这个和模 $m$ 同余于 $a\cdot1+b\cdot0=a$，模 $n$ 同余于 $a\cdot0+b\cdot1=b$。所以它满足 $(3)$ 中的两个条件，方程组的一个解为：

$$ \tag{8}
x_0=ae_1+be_2=atn+bsm
$$

这就证明了对任意一对整数 $a$ 和 $b$，解都存在。下面证明第二部分，即模 $mn$ 唯一性。设 $x_0$ 和 $x_1$ 是方程组的两个解。由于两个解对两个模数的余数都必须相同，它们的差同时能被 $m$ 和 $n$ 整除。因此可写 $x_1-x_0=mq$。由于 $n$ 整除 $mq$ 且与 $m$ 互素，它必然也整除 $q$，所以对某个整数 $h$ 有 $q=nh$。由此得到：

$$
x_1-x_0=mnh \tag{9}
$$

因此两个解 $x_0$ 和 $x_1$ 模 $mn$ 同余。这样就对两个互素模数的情形证明了定理，并刻画了方程组 $(3)$ 的全部解。

- - -

作为具体例子，回到开头引入的方程组，用公式 $(8)$ 求解 $(2)$，其中 $m=3$，$n=5$，$a=2$，$b=3$。为了求出系数 $s$ 和 $t$，把贝祖等式写成 $(6)$ 的形式：

$$
2\cdot3-1\cdot5=1
$$

把这个等式与一般恒等式 $sm+tn=1$ 比较，得到 $m=3$，$s=2$，$n=5$，$t=-1$。再由定义 $e_1=tn$ 和 $e_2=sm$，得到 $e_1=(-1)\cdot5=-5$，$e_2=2\cdot3=6$。把这些值代入 $(8)$ 得：

$$
x_0=2\cdot(-5)+3\cdot6=-10+18=8
$$

由于模数互素，在 $8$ 上加上 $3\cdot5=15$ 的倍数就得到全部解。因此方程组的解集是由下式定义的[剩余类](../modulo-operator/)：

$$ \tag{10}
[8]_{15}=\{\ 8+15q\mid q\in\mathbb{Z}\ \}
$$

这是一个相当简单的例子，模数很小，可以直接找到贝祖系数。但一般情况下计算没有这么直接，需要用到[欧几里得算法](../euclidean-division/)。方程组 $(2)$ 也可以用代入法求解：把第一个同余式给出的 $x$ 的表达式代入第二个，得到：

$$
\begin{align}
2+3q &\equiv 3 \pmod 5 \\[6pt]
3q &\equiv 1 \pmod 5
\end{align}
$$

$3$ 模 $5$ 的逆元是 $2$，因为 $3\cdot2=6\equiv1\pmod5$。两边乘以这个逆元得 $q\equiv2\pmod5$，所以 $q=2+5h$，$h\in\mathbb{Z}$。回到原来的未知数，得到与 $(10)$ 相同的解集：

$$
x=2+3(2+5h)=8+15h
$$

## 定理的推广

定理也可以推广到有限个同余式的情形。设 $n_1,n_2,\ldots,n_k$ 是两两互素且都大于 $1$ 的整数，$k\geq2$。对任意整数 $a_1,a_2,\ldots,a_k$，构造下面的方程组：

$$ \tag{11}
\begin{cases}
x \equiv a_1 \pmod{n_1} \\[6pt]
x \equiv a_2 \pmod{n_2} \\[6pt]
\vdots \\[6pt]
x \equiv a_k \pmod{n_k}
\end{cases}
$$

一旦找到 $(11)$ 的一个解 $x_0$，在 $x_0$ 上加上乘积 $N=n_1n_2\cdots n_k$ 的整数倍，就得到全部解。为了构造 $(11)$ 的一个解，令：

$$
N_i=\frac{N}{n_i}
$$

数 $N_i$ 是除 $n_i$ 以外所有模数的乘积。由于这些因子都与 $n_i$ 互素，它们的乘积也与 $n_i$ 互素，因此 $\gcd(N_i,n_i)=1$。于是存在整数 $u_i$，它是 $N_i$ 模 $n_i$ 的[乘法逆元](../modulo-operator/)，满足：

$$
N_i u_i\equiv1\pmod{n_i}
$$

乘积 $N_i u_i$ 对其他每个模数 $n_j$ 都同余于零，因为当 $j\neq i$ 时 $n_j$ 是 $N_i$ 的因子。因此这些乘积所起的作用与两个同余式情形中的 $e_1$ 和 $e_2$ 相同，方程组 $(11)$ 的一个解由下面的和给出：

$$ \tag{12}
x_0=\sum_{i=1}^{k}a_iN_i u_i
$$

为了验证这一点，固定一个下标 $j$，考虑这个和模 $n_j$ 的情况。所有 $i\neq j$ 的项都是 $n_j$ 的倍数，所以它们模 $n_j$ 同余于零，不改变这个和除以 $n_j$ 的余数。因此这个和同余于单独一项 $a_jN_j u_j$，而由于 $N_j u_j\equiv1\pmod{n_j}$，这一项同余于 $a_j$。所以由 $(12)$ 给出的数 $x_0$ 满足方程组中的每个同余式。

为了证明模 $N$ 唯一性，把刚构造出的解 $x_0$ 与另一个解 $x_1$ 比较。两个解模每个 $n_i$ 的余数都相同，所以每个 $n_i$ 都整除 $x_1-x_0$。由于模数两两互素，它们的乘积 $N$ 也整除这个差。由此 $x_1\equiv x_0\pmod N$，所以每个解都与 $x_0$ 属于模 $N$ 的同一个剩余类，这就证明了模 $N$ 唯一性。

- - -

作为具体例子，给方程组 $(2)$ 添加第三个条件：

$$ \tag{13}
\begin{cases}
x \equiv 2 \pmod 3 \\[6pt]
x \equiv 3 \pmod 5 \\[6pt]
x \equiv 2 \pmod 7
\end{cases}
$$

由于模数 $3$、$5$ 和 $7$ 两两互素，方程组在模 $N=3\cdot5\cdot7=105$ 下有唯一的解类。每次取两个模数的乘积为：

$$
\begin{align}
N_1 &= 105/3=35 \\[6pt]
N_2 &= 105/5=21 \\[6pt]
N_3 &= 105/7=15
\end{align}
$$

要应用公式 $(12)$，需要求出 $35$ 模 $3$、$21$ 模 $5$ 和 $15$ 模 $7$ 的逆元。由于 $35\equiv2\pmod3$ 且 $2\cdot2\equiv1\pmod3$，可以取 $u_1=2$。另外两个逆元都是 $1$，因为 $21\equiv1\pmod5$，$15\equiv1\pmod7$。于是应用 $(12)$ 得：

$$
\begin{align}
x_0 &= 2\cdot35\cdot2+3\cdot21\cdot1+2\cdot15\cdot1 \\[6pt]
&=140+63+30=233
\end{align}
$$

由解 $x_0=233$ 取它除以 $105$ 的余数，就得到最小的非负解。由于 $233=2\cdot105+23$，得到 $23$，它与原解属于模 $105$ 的同一个剩余类。数 $23$ 满足 $(13)$ 中的全部三个同余式，如下列等式所示：

$$
\begin{align}
23 &= 7\cdot3+2 \\[6pt]
23 &= 4\cdot5+3 \\[6pt]
23 &= 3\cdot7+2
\end{align}
$$

因此方程组的全部解是形如下式的整数：

$$23+105q \quad q\in\mathbb{Z} \tag{14}$$

数 $23$ 是最小的非负解。与两个同余式的情形一样，也可以用代入法得到相同的结果。先看前两个同余式，它们的解是全部整数 $x=8+15h$，$h\in\mathbb{Z}$。于是需要找出使这些整数也满足第三个同余式 $x\equiv2\pmod7$ 的 $h$ 值。代入 $x=8+15h$ 得：

$$
8+15h\equiv2\pmod7
$$

由于 $8=7+1$，$15=2\cdot7+1$，两者模 $7$ 都同余于 $1$。因此 $15h\equiv h\pmod7$，同余式变为 $1+h\equiv2\pmod7$。两边减去 $1$ 得 $h\equiv1\pmod7$。这个条件意味着 $h-1$ 是 $7$ 的倍数，所以对某个整数 $q$ 有 $h=1+7q$。把这个表达式代入公式 $x=8+15h$ 得：

$$
\begin{align}
x &= 8+15(1+7q) \\[6pt]
&=8+15+105q \\[6pt]
&=23+105q
\end{align}
$$

这样就重新得到了 $(14)$ 给出的解。

## 模数不互素的情形

回到方程组 $(3)$，考虑模数 $m$ 和 $n$ 有大于 $1$ 的公约数的情形。这时两个同余式可能互相矛盾。例如 $x\equiv1\pmod4$ 要求 $x$ 是奇数，而 $x\equiv2\pmod6$ 要求它是偶数，所以没有整数能同时满足这两个条件。不过，模数不互素并不总是排除方程组有解的可能。考虑两个模数 $m,n>1$，令 $d=\gcd(m,n)$。方程组 $(3)$ 有解当且仅当：

$$ \tag{15}
d\mid(b-a)
$$

条件 $(15)$ 等价于要求 $a\equiv b\pmod d$。当它成立时，解在模两个模数的最小公倍数意义下唯一，这个最小公倍数为：

$$ \tag{16}
L=\mathrm{lcm}(m,n)=\frac{mn}{d}
$$

下面证明条件 $(15)$ 是方程组 $(3)$ 有解的充要条件。先证必要性：设 $x$ 满足方程组中的两个同余式。在这一假设下，$m$ 整除 $x-a$，$n$ 整除 $x-b$。由于 $d$ 整除两个模数，它也整除差 $(x-a)-(x-b)=b-a$。再证充分性：把方程组 $(3)$ 的第一个同余式 $x\equiv a\pmod m$ 改写为 $x=a+mq$，$q\in\mathbb{Z}$。把这个表达式代入第二个同余式 $x\equiv b\pmod n$，得到：

$$
mq\equiv b-a\pmod n
$$

如果 $d$ 整除 $b-a$，就可以除以 $d$，得到等价的同余式：

$$ \tag{17}
\frac{m}{d}q\equiv\frac{b-a}{d}\pmod{n/d}
$$

在同余式 $(17)$ 中，系数 $m/d$ 与模数 $n/d$ 互素，因为我们已经把 $m$ 和 $n$ 都除以了它们的最大公约数 $d$。因此若 $n/d>1$，就可以在两边乘以 $m/d$ 模 $n/d$ 的逆元，得到唯一的解类 $q\equiv q_0\pmod{n/d}$。写成 $q=q_0+(n/d)h$，$h\in\mathbb{Z}$，再把这个表达式代入 $x=a+mq$，就得到方程组 $(3)$ 的通解：

$$
x=a+mq_0+\frac{mn}{d}h \qquad h\in\mathbb{Z} \tag{18}
$$

当 $h$ 取遍 $\mathbb{Z}$ 时，公式 $(18)$ 给出方程组的全部解，它们构成模 $L=mn/d$ 的一个剩余类。反之，若 $n/d=1$，则 $n$ 整除 $m$，而条件 $(15)$ 保证第一个同余式已经蕴含第二个。这时所有整数 $x=a+mq$ 都是解，周期仍为 $L=m$。例如，考虑方程组：

$$
\begin{cases}
x \equiv 2 \pmod 6 \\[6pt]
x \equiv 5 \pmod 9
\end{cases}
$$

两个模数的最大公约数为 $3$，它整除差 $5-2=3$，所以方程组有解。由第一个同余式得 $x=2+6q$。第二个同余式变为 $6q\equiv3\pmod9$，除以 $3$ 得 $2q\equiv1\pmod3$。$2$ 模 $3$ 的逆元是 $2$，所以 $q\equiv2\pmod3$。由此 $q=2+3h$，解为：

$$
x=2+6(2+3h)=14+18h \qquad h\in\mathbb{Z}
$$

因此方程组在模 $18$ 下有唯一的解类。

## 用环的语言解释

这个定理也可以用[环](../rings/)的语言表述，这需要用到抽象代数中一些更深入的概念。设 $n_1,\ldots,n_k$ 两两互素，令 $N=n_1\cdots n_k$。定义映射 $\Phi$，即一个把每个类 $[x]_N$ 对应到同一整数模 $n_1,\ldots,n_k$ 的类所组成的元组的[函数](../functions/)，如下：

$$ \tag{19}
\begin{align}
&\Phi :\mathbb{Z}/N\mathbb{Z}\longrightarrow\mathbb{Z}/n_1\mathbb{Z}\times\cdots\times\mathbb{Z}/n_k\mathbb{Z} \\[6pt]
&\Phi([x]_N) =([x]_{n_1},\ldots,[x]_{n_k})
\end{align}
$$

这个映射是良定义的，因为如果在模 $N$ 的同一个类中任取一个元素 $y$，差 $x-y$ 能被 $N$ 整除，从而能被每个 $n_i$ 整除。对每个下标，类 $[x]_{n_i}$ 与 $[y]_{n_i}$ 都相同，所以对应的元组不依赖于代表元的选取。确认 $\Phi$ 是良定义的之后，下面证明陪域中的每个元组都恰是模 $N$ 的一个类的像。对每个元组 $([a_1]_{n_1},\ldots,[a_k]_{n_k})$，定理保证存在整数 $x$ 使 $x\equiv a_i\pmod{n_i}$。因此 $(19)$ 定义的函数把 $[x]_N$ 映到这个元组，所以 $\Phi$ 是[满射](../injective-surjective-and-bijective-functions/)。如果两个类的像相同，它们的元素对所有模数的余数都相同。由模 $N$ 唯一性，这些元素模 $N$ 同余，所以两个类相同。这就证明了 $\Phi$ 也是单射，从而是双射。

为了说明双射 $\Phi$ 还是环同构，需要验证它保持加法和乘法。对每个 $n_i$ 取模都保持这两种运算，所以对所有 $x,y\in\mathbb{Z}$，下列恒等式成立：

$$
\begin{align}
\Phi([x]_N+[y]_N)&=\Phi([x]_N)+\Phi([y]_N) \\[6pt]
\Phi([x]_N[y]_N)&=\Phi([x]_N)\Phi([y]_N)
\end{align}
$$

在 $(19)$ 中令 $x=1$，得到 $\Phi([1]_N)=([1]_{n_1},\ldots,[1]_{n_k})$。于是我们得到一个保持加法、乘法和乘法单位元的双射函数，也就是一个[环同构](../homomorphisms-and-isomorphisms/)。因此中国剩余定理可以写成：

$$
\mathbb{Z}/N\mathbb{Z}\cong\mathbb{Z}/n_1\mathbb{Z}\times\cdots\times\mathbb{Z}/n_k\mathbb{Z}
$$
