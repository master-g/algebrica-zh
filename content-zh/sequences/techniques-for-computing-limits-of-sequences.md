---
title: 数列极限的计算技巧
title_en: Techniques for Computing Limits of Sequences
source: https://algebrica.org/techniques-for-computing-limits-of-sequences/
license: CC BY-NC 4.0
tags:
  - asymptotic-equivalence
  - growth-rates
  - indeterminate-forms
  - limit-of-a-sequence
  - logarithms
  - rationalization
  - remarkable-limits
  - sequence
translation:
  status: current
  source_hash: 6ea5348c0583fa14ad8a4d207c6fa8ac22e86cf740a65dbe8da79695f4ee55b0
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 不直接的数列极限

计算极限的主要困难之一，在于其研究中可能出现的广泛情形。对[数列](../sequences/)来说，确定极限并不总是容易或直接的。例如，当我们遇到化为[未定式](../indeterminate-forms/)——如 $0/0$、$+\infty/+\infty$、$0\cdot\infty$ 或 $+\infty-\infty$——的数列时，仅靠[极限运算法则](../algebra-of-limits/)已不足以判定数列是否收敛。在这类情形，我们必须使用不同的工具，考察例如所涉及组成部分的结构与行为。

一般来说，务必记住：数列的极限仅仅依赖于它的尾部。这本身相当直观：一个数列从某点起越是一致地按某种方式表现，它就越接近某个给定的值，此时它[收敛](../convergent-and-divergent-sequences/)；否则它发散。具体地说，设两个数列 $(a_n)$ 与 $(b_n)$ 满足对每个 $n\geq n_0$ 都有 $a_n=b_n$。直观上很清楚，从下标 $n_0$ 起，两个数列有相同的行为，因而有相同的极限。这个推理让我们可以不顾只影响开头项的条件，而从某个下标 $n_i$ 起施加不同的条件，实质上简化了计算。

计算不直接的极限有几种途径，取决于构成给定数列的项的性质。下面几节详细讨论它们。

## 主导项

最简单的方法之一使用所谓的主导项。当数列的极限涉及[多项式](../polynomials/)之比时，我们把分子分母同除以两个多项式中出现的 $n$ 的最高次幂。考虑下面的简单情形：

$$\lim_{n\to+\infty}\frac{4n^3-5n+1}{2n^3+n^2-7}$$

让 $n$ 直接趋于无穷，会产生未定式 $\infty/\infty$，它不提供任何关于其行为的信息。改为把分子分母同除以 $n$ 的最高次幂，得：

$$\lim_{n\to+\infty}\frac{4-5/n^2+1/n^3}{2+1/n-7/n^3}=2$$

更一般地，若 $P$ 与 $Q$ 的次数分别为 $p$ 与 $q$，首项系数分别为 $a$ 与 $b$，则有如下恒等式：

$$
\frac{P(n)}{Q(n)}
=n^{p-q}\frac{a+o(1)}{b+o(1)}
$$

[小 o 记号](../little-o-notation/) $o(1)$ 简洁地收集了所有趋于零的项。这样，计算该比值时会出现三种情形：

+ 第一种情形：当 $p\lt q$ 时，比值趋于 $0$；
+ 第二种情形：当 $p=q$ 时，它趋于 $a/b$；
+ 最后一种情形：当 $p\gt q$ 时，其[绝对值](../absolute-value/)趋于无穷，且比值最终带有 $a/b$ 的符号。

- - -

同样的程序——提取指数较大的 $n$ 的幂作为公因子——也用于幂的和。例如，考虑差 $n^\alpha-3n^\beta$（$\alpha\lt\beta$）。提取指数较大的幂，得：

$$
n^\alpha-3n^\beta
=n^\beta\left(n^{\alpha-\beta}-3\right)
$$

由于 $n^{\alpha-\beta}$ 趋于零，括号内的因子趋于 $-3$，主导项是 $-3n^\beta$。

- - -

另一种情形是需要从平方根中提取平方因子。由于被开方式必须始终大于或等于零，对每个 $n$ 都有：

$$\sqrt{n^2}=|n|$$

因此必须使用绝对值。若考虑极限 $n\to+\infty$，则 $n$ 最终为正，因此 $|n|=n$，例如可以写出 $\sqrt{n^2+3}=n\sqrt{1+3/n^2}$。

## 增长层级

当 $n\to+\infty$ 时，对常数 $p,q\gt 0$ 与 $a\gt 1$ 的每种选择，有如下增长层级：

$$
(\ln n)^p\ll n^q\ll a^n\ll n!\ll n^n
$$

一般记号 $u_n\ll v_n$ 表示比值 $u_n/v_n\to0$。等价地说，$\ll$ 左边的数列比它右边紧邻的数列增长得慢。例如，比值 $(\ln n)^p/n^q$ 趋于 $0$，其他每一对相邻项也同样成立：分子取第 $i$ 位置的项，分母取第 $i+1$ 位置的项。

为使比较更明确，考虑第一个关系 $(\ln n)^p\ll n^q$。设 $t=\ln n$，比值变为：

$$
\frac{(\ln n)^p}{n^q}
=\frac{t^p}{e^{qt}}
\longrightarrow0
$$

对 $n^q\ll a^n$ 与 $a^n\ll n!$ 这两个比较，我们分别定义 $d_n=n^q/a^n$ 与 $c_n=a^n/n!$。相继项的比值满足如下恒等式：

$$
\begin{align}
\frac{d_{n+1}}{d_n}&=\frac{(1+1/n)^q}{a}\longrightarrow\frac{1}{a}\lt 1 \\[6pt]
\frac{c_{n+1}}{c_n}&=\frac{a}{n+1}\longrightarrow0
\end{align}
$$

因此两个数列都趋于零。

最后考虑涉及[阶乘](../factorial/)的最后一种情形。我们可以先写出如下恒等式：

$$n!/n^n=\prod_{k=1}^n(k/n)$$

至少有 $\lfloor n/2\rfloor$ 个因子小于或等于 $1/2$，而其余因子小于或等于 $1$。因此该关系可以写成如下估计：

$$
0\leq\frac{n!}{n^n}
\leq\left(\frac{1}{2}\right)^{\lfloor n/2\rfloor}
\longrightarrow0
$$

比较同一形式的数列时，次序取决于它们的参数。若 $0\lt r\lt s$，则 $n^r\ll n^s$；若 $1\lt a\lt b$，则 $a^n\ll b^n$。

因此，增长层级是一个具有重要实际应用的理论工具。它让我们可以计算那些无法直接用极限运算法则处理、且乍一看很复杂的数列极限。例如，考虑下面的数列：

$$
a_n=\frac{2^n+n^5}{3^n+\ln n}
$$

这个数列趋于零。确实，在分母中 $3^n$ 主导 $\ln n$，因此我们把分子分母同除以 $3^n$：

$$
a_n=\frac{(2/3)^n+n^5/3^n}{1+(\ln n)/3^n}
$$

增长层级给出 $n^5/3^n\to0$ 与 $(\ln n)/3^n\to0$。而且，[$(2/3)^n$](../geometric-sequence/)趋于 $0$，因为 $0\lt 2/3\lt 1$。因此分子趋于 $0$，分母趋于 $1$，从而 $a_n\to0$。

## 渐近行为与重要极限

比较两个数列的一种方法是利用它们的渐近行为。如果下面的等式成立，则称数列 $(a_n)$ 与 $(b_n)$ 渐近等价：

$$
\lim_{n\to+\infty}\frac{a_n}{b_n}=1 \tag{1}
$$

渐近等价也写作 $a_n\sim b_n$，并要求 $b_n\neq0$。由等式 $(1)$，我们可以把[重要极限](../remarkable-limits/)表示为数列之间的等价。例如，设 $(x_n)$ 是满足 $x_n\to0$ 且 $x_n\neq0$ 的数列。考虑下面的重要极限：

$$\lim_{x\to0}\frac{\sin x}{x}=1$$

同样由等式 $(1)$，必须有 $\sin x_n\sim x_n$。把同样的推理应用于基本极限，得到如下等价关系：

[class="table-1"]

|              |           |
| ------------ | --------- |
| $\sin x_n$   | $x_n$     |
| $\ln(1+x_n)$ | $x_n$     |
| $e^{x_n}-1$  | $x_n$     |
| $1-\cos x_n$ | $x_n^2/2$ |

[/class]

这些等价关系非常有用，因为渐近等价的因子在乘积与商中可以互相替换，从而简化对数列行为的分析，只要分母最终不为零。例如，考虑下面的数列。作适当的替换，得到如下渐近关系：

$$
\frac{(e^{2/n}-1)\ln(1+3/n)}{1-\cos(1/n)}
\sim
\frac{(2/n)(3/n)}{1/(2n^2)}=12
$$

如前所述，渐近等价的因子在乘积与商中可以互相替换，但在差中不能逐项替换，因为它们的领头项可能相互抵消，而逐个替换项可能因此改变所得的极限值。

这些等价形式的使用还可以计算涉及未定式乘积的极限。例如，考虑下面的数列：

$$
a_n=n^\alpha\ln\left(1+\frac{1}{n}\right),\qquad \alpha\gt 0
$$

因子 $n^\alpha$ 趋于 $+\infty$，而 $\ln(1+1/n)$ 趋于 $0$，因此直接代入会产生未定式 $\infty\cdot0$。为应用等价 $\ln(1+x)\sim x$，必须把对数与 $1/n$ 比较：

$$
a_n
=n^{\alpha-1}\frac{\ln(1+1/n)}{1/n}
\sim n^{\alpha-1}
$$

含对数的商趋于 $1$，因此 $a_n$ 的行为与 $n^{\alpha-1}$ 相同。由此得三种情形：$0\lt\alpha\lt 1$ 时 $a_n\to0$；$\alpha=1$ 时 $a_n\to1$；$\alpha\gt 1$ 时 $a_n\to+\infty$。

## 有理化

现在考虑差中两个项都趋于 $+\infty$、从而在直接代入时产生未定式 $+\infty-\infty$ 的情形。一种并不少见的情形涉及平方根之差。在这种情形，乘以并除以它们的和——也称为共轭表达式——很有用。例如，设 $A_n,B_n\geq0$ 且 $A_n+B_n\gt 0$，则：

$$
\sqrt{A_n}-\sqrt{B_n}
=\frac{A_n-B_n}{\sqrt{A_n}+\sqrt{B_n}} \tag{2}
$$

等式 $(2)$ 消去了根式之间的差，代之以被开方式之间的差。考虑下面的例子：

$$
\begin{align}
n\left(\sqrt{n^2+3}-n\right)
&=n\frac{(n^2+3)-n^2}{\sqrt{n^2+3}+n} \\[6pt]
&=\frac{3}{\sqrt{1+3/n^2}+1}
\longrightarrow\frac{3}{2}
\end{align}
$$

恒等式 $(2)$ 只适用于平方根。当出现更高次的根式时，我们先用幂差的因式分解把表达式[有理化](../radicals/)。

## 可变幂

现在考虑涉及可变[幂](../powers/)的数列，即项具有形式 $a_n=b_n^{c_n}$ 的数列，其中底数 $b_n$ 与指数 $c_n$ 都可以依赖于 $n$。在这种情形，计算极限时直接代入同样可能产生 $1^\infty$、$0^0$ 与 $(+\infty)^0$ 型的未定式，它们不提供关于数列行为的信息。当 $b_n\gt 0$ 最终成立时，可以利用 $\ln b_n$，通过恒等式把幂的分析化为乘积 $c_n\ln b_n$ 的分析：

$$
a_n=e^{c_n\ln b_n} \tag{3}
$$

因此极限只依赖于 $c_n\ln b_n$。若该乘积趋于某个值 $\ell\in\mathbb{R}$，则 $a_n\to e^\ell$；若它趋于 $-\infty$ 或 $+\infty$，则幂分别趋于 $0$ 或 $+\infty$。回忆重要极限及其渐近行为：设 $u_n\to0$，$u_n\neq0$ 最终成立，且 $c_nu_n\to\ell$。写成渐近形式的重要对数极限 $\ln(1+u_n)\sim u_n$ 给出：

$$
(1+u_n)^{c_n}\to e^\ell
$$

用一个例子弄清这个方法。考虑下面的数列：

$$
a_n=\left(\frac{n+2}{n-1}\right)^n
=\left(1+\frac{3}{n-1}\right)^n
$$

它的[对数](../logarithms/)满足如下关系：

$$
\ln a_n
=\frac{3n}{n-1}
\frac{\ln(1+3/(n-1))}{3/(n-1)}
\longrightarrow3
$$

由此得出 $a_n\to e^3$。

## 关于振荡数列

现在考虑绝对值保持有界、且本文称之为扰动的振荡数列。例子是 $\sin n$ 与 $\cos n$，它们振荡而绝对值不超过 $1$。当这样的数列乘以一个趋于零的数列时，它的贡献趋于零。用正式的语言说：若 $(u_n)$ 有界且 $v_n\to0$，则 $u_nv_n\to0$。例如：

$$
\left|\frac{\sin(n^2)}{\sqrt n}\right|
\leq\frac{1}{\sqrt n}\to0
$$

更一般地，若 $b_n\to\ell$，$r_n\to0$，且最终有 $|a_n-b_n|\leq r_n$，则由[夹逼定理](../squeeze-theorem/)得 $a_n\to\ell$。例如，考虑下面的数列：

$$
a_n=\frac{2n+\sin n}{n+\cos n}
$$

对 $n\geq2$，有如下估计：

$$
|a_n-2|
=\left|\frac{\sin n-2\cos n}{n+\cos n}\right|
\leq\frac{3}{n-1}\to0
$$

因此 $a_n\to2$，尽管三角扰动并不收敛。
