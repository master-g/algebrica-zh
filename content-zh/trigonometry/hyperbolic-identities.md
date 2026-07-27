---
title: 双曲恒等式
title_en: Hyperbolic Identities
source: https://algebrica.org/hyperbolic-identities/
license: CC BY-NC 4.0
tags:
  - hyperbolic-functions
  - hyperbolic-identities
  - trigonometry
translation:
  status: current
  source_hash: 9c2f9532d9d1b6feb2b3dd11c95155acdeda68bd31e69e08dc915c844b44e600
  translator: omp
  updated: "2026-07-25T06:45:51.009Z"
---
## 引言

双曲恒等式是涉及双曲函数的方程，对变量的每一个容许值都成立。与针对特定一组自变量值求解的双曲方程不同，恒等式是在所涉函数共同定义域上成立的等式。

对这些恒等式的研究，整理了将[双曲正弦与余弦](../hyperbolic-sine-and-cosine/)、[双曲正切与余切](../hyperbolic-tangent-and-cotangent/)联系在一起的代数关系，并提供了将双曲表达式化为等价形式——以便于求值、[求导](../derivatives/)、[求积分](../indefinite-integrals/)或作几何解释——所需的工具。

下面给出的恒等式按其所执行的变换类型归为若干族。其中一些将变元改变后的[函数](../functions/)用原变元表示，另一些实现积化和差或和差化积，还有一些将一般变元化为某个参数变量。

每一族在双曲方程的求解、表达式的化简，以及更广泛的微积分工具体系中各自扮演不同的角色。

## 基本恒等式

在考察联系不同变元下双曲函数的变换之前，先回顾连接同一个变元下六个双曲函数的初等恒等式是有益的。这些恒等式直接源于等轴[双曲线](../hyperbola/)的定义以及 $\sinh(x)$ 和 $\cosh(x)$ 的指数表示，并构成了后续每一个恒等式所赖以建立的代数基础。双曲基本恒等式表达了单位等轴双曲线右支上任一点的坐标满足该曲线本身的方程这一约束：

$$
\cosh^2(x) - \sinh^2(x) = 1
$$

将此恒等式两边同除以 $\cosh^2(x)$（其值永不为零），得到涉及双曲正切与双曲正割的相应恒等式：

$$
1 - \tanh^2(x) = \operatorname{sech}^2(x)
$$

在假设 $\sinh(x) \neq 0$ 下类似地除以 $\sinh^2(x)$，得到涉及双曲余切与双曲余割的恒等式：

$$
\coth^2(x) - 1 = \operatorname{csch}^2(x)
$$

商恒等式将双曲正切与余切表为双曲正弦与余弦之商。它们直接由这四个函数的定义得出：

$$
\begin{align}
&\tanh(x) = \frac{\sinh(x)}{\cosh(x)} \\[6pt]
&\coth(x) = \frac{\cosh(x)}{\sinh(x)}
\end{align}
$$

> 第一个恒等式对每一实数 $x$ 成立，因为 $\cosh(x) \geq 1$；第二个要求 $\sinh(x) \neq 0$，即 $x \neq 0$。基本恒等式与商恒等式合在一起，足以将任何双曲表达式仅用双曲正弦与余弦重新表示，这一化简往往是简化更复杂公式的第一步。

## 奇偶性与对称性

三角函数由于单位圆的象限而拥有一族丰富的[诱导公式](../reduction-formulas-and-reference-angles/)，而定义于等轴双曲线单一右支上的双曲函数，则具有一个仅由其变元奇偶性决定的更简单的对称结构。双曲正弦是奇函数，双曲余弦是偶函数：

$$
\begin{align}
&\sinh(-x) = -\sinh(x) \\[6pt]
&\cosh(-x) = \cosh(x)
\end{align}
$$

$\sinh$ 与 $\cosh$ 的奇偶性被其余双曲函数所继承。双曲正切与余切作为一个奇函数与一个偶函数的商，本身也是奇函数：

$$
\begin{align}
&\tanh(-x) = -\tanh(x) \\[6pt]
&\coth(-x) = -\coth(x)
\end{align}
$$

而双曲正割继承余弦的奇偶性，双曲余割继承正弦的奇偶性：

$$
\begin{align}
&\operatorname{sech}(-x) = \operatorname{sech}(x) \\[6pt]
&\operatorname{csch}(-x) = -\operatorname{csch}(x)
\end{align}
$$

这些恒等式直接由指数定义 $\sinh(x) = (e^{x} - e^{-x})/2$ 与 $\cosh(x) = (e^{x} + e^{-x})/2$ 得出，因为代换 $x \mapsto -x$ 交换两个指数函数，使余弦不变而使正弦变号。缺乏更多诱导公式反映了圆与双曲线之间的拓扑差异：圆是闭合的，而双曲线的分支向两个方向延伸至无穷。

## 和差

和差公式将两个变元之和或差的双曲函数表为各变元双曲函数的组合。对正弦与余弦，下列恒等式成立：

$$
\begin{align}
&\sinh(a + b) = \sinh(a)\cosh(b) + \cosh(a)\sinh(b) \\[6pt]
&\sinh(a - b) = \sinh(a)\cosh(b) - \cosh(a)\sinh(b) \\[6pt]
&\cosh(a + b) = \cosh(a)\cosh(b) + \sinh(a)\sinh(b) \\[6pt]
&\cosh(a - b) = \cosh(a)\cosh(b) - \sinh(a)\sinh(b)
\end{align}
$$

对双曲正切与余切的相应恒等式，可在分母不为零的前提下取相应正弦与余弦公式之商得出：

$$
\begin{align}
&\tanh(a + b) = \frac{\tanh(a) + \tanh(b)}{1 + \tanh(a)\tanh(b)} \\[6pt]
&\tanh(a - b) = \frac{\tanh(a) - \tanh(b)}{1 - \tanh(a)\tanh(b)} \\[6pt]
&\coth(a + b) = \frac{\coth(a)\coth(b) + 1}{\coth(a) + \coth(b)} \\[6pt]
&\coth(a - b) = \frac{\coth(a)\coth(b) - 1}{\coth(b) - \coth(a)}
\end{align}
$$

> 这些恒等式构成了整个双曲恒等式体系的骨干。二倍角、半角以及和差化积型公式，都通过适当的代换或代数运算由它们导出。与对应的圆函数公式相比，余弦和公式带正号而非负号，这一差异源于基本恒等式中符号的改变。

## 二倍角

二倍角公式将变元 $2x$ 的双曲函数表为 $x$ 的双曲函数。对正弦与余弦，下列恒等式成立：

$$
\begin{align}
&\sinh(2x) = 2\sinh(x)\cosh(x) \\[6pt]
&\cosh(2x) = \cosh^2(x) + \sinh^2(x)
\end{align}
$$

双曲余弦的二倍角公式，通过应用基本恒等式 $\cosh^2(x) - \sinh^2(x) = 1$，可得到两个等价形式：

$$
\begin{align}
&\cosh(2x) = 1 + 2\sinh^2(x) \\[6pt]
&\cosh(2x) = 2\cosh^2(x) - 1
\end{align}
$$

双曲正切与余切的相应恒等式为：

$$
\begin{align}
&\tanh(2x) = \frac{2\tanh(x)}{1 + \tanh^2(x)} \\[6pt]
&\coth(2x) = \frac{\coth^2(x) + 1}{2\coth(x)}
\end{align}
$$

双曲正弦二倍角公式的推导，从正弦的和恒等式出发：

$$
\sinh(a + b) = \sinh(a)\cosh(b) + \cosh(a)\sinh(b)
$$

令 $a = b = x$，左端成为 $\sinh(2x)$，右端化为两个相同项：

$$
\sinh(2x) = \sinh(x)\cosh(x) + \cosh(x)\sinh(x)
$$

将右端两个相同项合并，即得最终结果：

$$
\sinh(2x) = 2\sinh(x)\cosh(x)
$$

将同样的推理应用于余弦的和恒等式，并取 $a = b = x$，便得到双曲余弦的二倍角公式。

## 例题

考虑如下[积分](../indefinite-integrals/)：

$$
\int \frac{\cosh(2x) - 1}{2}\ dx
$$

被积函数含有一个二倍变元的双曲余弦，这使得直接计算颇为棘手。二倍角恒等式 $\cosh(2x) = 1 + 2\sinh^2(x)$ 可将分子改写为：

$$
\cosh(2x) - 1 = \left(1 + 2\sinh^2(x)\right) - 1 = 2\sinh^2(x)
$$

将此结果代入原表达式，被积函数化为双曲正弦的单一[幂](../powers/)：

$$
\int \frac{2\sinh^2(x)}{2}\ dx = \int \sinh^2(x)\ dx
$$

该恒等式将问题化为 $\sinh^2(x)$ 的积分，而这是一个标准形式。同一个二倍角恒等式现在可朝相反方向应用，将平方线性化，写作：

$$\sinh^2(x) = \frac{\cosh(2x) - 1}{2}$$

积分变为初等积分：

$$\int \sinh^2(x)\ dx = \frac{\sinh(2x)}{4} - \frac{x}{2} + C$$

> 这个初看需要某种非平凡技巧的积分，通过单一的双曲恒等式就化为了一组初等原函数之和。

## 三倍角公式

三倍角公式把二倍角恒等式的构造推广到角被增至三倍的情形。它们将角 $3x$ 的双曲函数表示为 $x$ 相应函数的[多项式](../polynomials/)表达式。双曲正弦与双曲余弦的恒等式为：

$$
\begin{align}
&\sinh(3x) = 3\sinh(x) + 4\sinh^3(x) \\[6pt]
&\cosh(3x) = 4\cosh^3(x) - 3\cosh(x)
\end{align}
$$

双曲正切对应的恒等式取有理形式：

$$
\tanh(3x) = \frac{3\tanh(x) + \tanh^3(x)}{1 + 3\tanh^2(x)}
$$

推导立足于分解 $3x = 2x + x$，并反复应用和角恒等式。和角的双曲正弦给出：

$$
\sinh(3x) = \sinh(2x)\cosh(x) + \cosh(2x)\sinh(x)
$$

代入二倍角表达式 $\sinh(2x) = 2\sinh(x)\cosh(x)$ 与 $\cosh(2x) = 1 + 2\sinh^2(x)$，得到：

$$
\sinh(3x) = 2\sinh(x)\cosh^2(x) + \sinh(x) + 2\sinh^3(x)
$$

基本恒等式允许将 $\cosh^2(x)$ 替换为 $1 + \sinh^2(x)$，合并所得各项后即得最终的多项式形式 $3\sinh(x) + 4\sinh^3(x)$。对 $\cosh(3x) = \cosh(2x + x)$ 施行相同程序便得双曲余弦恒等式；将双曲正弦的展开式除以双曲余弦的展开式，并把所得商改写为 $\tanh(x)$ 的有理函数，即得双曲正切恒等式。

> 三倍角公式是下述更一般规律最简单的非平凡例子：$nx$ 的双曲正弦与双曲余弦可表示为 $\sinh(x)$ 与 $\cosh(x)$ 的多项式；而双曲正切与双曲余切一般是相应函数的有理式，并须受共同定义域的限制。对 $n = 3$ 而言，多项式形式尤为紧凑，除其他用途外，它可通过卡尔达诺公式给出某些不可约三次方程的双曲解法。

## 半角公式

半角公式用 $x$ 的双曲函数表示 $\frac{x}{2}$ 的双曲函数。对双曲正弦与双曲余弦，下列恒等式成立：

$$
\begin{align}
&\sinh\left(\frac{x}{2}\right) = \pm\sqrt{\frac{\cosh(x) - 1}{2}} \\[6pt]
&\cosh\left(\frac{x}{2}\right) = \sqrt{\frac{\cosh(x) + 1}{2}}
\end{align}
$$

双曲正弦恒等式右端的符号由 $x$ 的符号决定，因为 $\sinh$ 是奇函数；双曲余弦处处为正，无需处理符号歧义。

双曲正切与双曲余切的半角公式既可写成根式形式，也可写成有理形式。通常偏好有理形式，因为它避免了符号歧义：

$$
\begin{align}
&\tanh\left(\frac{x}{2}\right) = \frac{\sinh(x)}{\cosh(x) + 1} = \frac{\cosh(x) - 1}{\sinh(x)} \\[6pt]
&\coth\left(\frac{x}{2}\right) = \frac{\cosh(x) + 1}{\sinh(x)} = \frac{\sinh(x)}{\cosh(x) - 1}
\end{align}
$$

> 半角公式的推导源自双曲余弦二倍角恒等式的两种变形。写出 $\cosh(x) = 1 + 2\sinh^2(x/2)$ 并解出 $\sinh(x/2)$，即得双曲正弦的半角公式；对 $\cosh(x) = 2\cosh^2(x/2) - 1$ 作类似操作，便得双曲余弦的半角公式。须按表达式逐式区分定义域：$\dfrac{\sinh x}{\cosh x+1}$ 对一切实数 $x$ 均有定义；$\dfrac{\cosh x-1}{\sinh x}$ 在 $x=0$ 处呈 $0/0$，仅当 $x\ne 0$ 时可用；而 $\coth(x/2)$ 及其两个有理等价式均要求 $x\ne 0$。

## 参数公式

参数公式借助单个辅助变量表示角 $x$ 的双曲函数：

$$
t = \tanh\left(\frac{x}{2}\right)
$$

作此代换后，双曲正弦与双曲余弦取有理形式：

$$
\begin{align}
&\sinh(x) = \frac{2t}{1 - t^2} \\[6pt]
&\cosh(x) = \frac{1 + t^2}{1 - t^2}
\end{align}
$$

双曲正切与双曲余切对应表达式为：

$$
\begin{align}
&\tanh(x) = \frac{2t}{1 + t^2} \\[6pt]
&\coth(x) = \frac{1 + t^2}{2t}
\end{align}
$$

此代换对一切实数 $x$ 均有效，因为 $|t| = |\tanh(x/2)| < 1$，且在上述代换的值域内分母 $1 - t^2$ 恒不为零。须补充说明：对任意实数 $x$ 均有 $|t|<1$，但 $\coth x=\dfrac{1+t^2}{2t}$ 还要求 $t\ne 0$（等价于 $x\ne 0$）。参数公式的重要实用价值在于它能把一个双曲表达式化为单一代数变量的有理函数，这一性质在求双曲正弦与双曲余弦有理函数的积分时被广泛利用，与三角积分中的魏尔斯特拉斯代换如出一辙。

## 积化和差公式（韦尔纳型）

积化和差公式（韦尔纳型）将两个双曲函数的乘积化为双曲函数的和或差。三个恒等式为：

$$
\begin{align}
&\sinh(\alpha)\sinh(\beta) = \frac{1}{2}[\cosh(\alpha + \beta) - \cosh(\alpha - \beta)] \\[6pt]
&\cosh(\alpha)\cosh(\beta) = \frac{1}{2}[\cosh(\alpha + \beta) + \cosh(\alpha - \beta)] \\[6pt]
&\sinh(\alpha)\cosh(\beta) = \frac{1}{2}[\sinh(\alpha + \beta) + \sinh(\alpha - \beta)]
\end{align}
$$

每个恒等式都由适当选取一对和角公式与差角公式相加或相减得到。例如，将 $\cosh(\alpha + \beta)$ 与 $\cosh(\alpha - \beta)$ 的展开式相加，双曲正弦项相互抵消，剩下乘积 $\cosh(\alpha)\cosh(\beta)$ 的两倍，由此立得第二个恒等式。这类公式在求双曲函数乘积的积分、分析阻尼振动与指数增长时格外有用，因为在这些场合两个双曲信号的乘积可自然分解为对应于和角与差角处的分量。

## 和差化积公式

和差化积公式实施与韦尔纳型相反的变换：它们把双曲正弦或双曲余弦的和或差改写为双曲函数的乘积。四个恒等式为：

$$
\begin{align}
&\sinh(p) + \sinh(q) = 2\sinh\left(\frac{p+q}{2}\right)\cosh\left(\frac{p-q}{2}\right) \\[6pt]
&\sinh(p) - \sinh(q) = 2\cosh\left(\frac{p+q}{2}\right)\sinh\left(\frac{p-q}{2}\right) \\[6pt]
&\cosh(p) + \cosh(q) = 2\cosh\left(\frac{p+q}{2}\right)\cosh\left(\frac{p-q}{2}\right) \\[6pt]
&\cosh(p) - \cosh(q) = 2\sinh\left(\frac{p+q}{2}\right)\sinh\left(\frac{p-q}{2}\right)
\end{align}
$$

这些恒等式可由积化和差（韦尔纳型）公式通过下述代换导出：

$$
\alpha = \frac{p+q}{2},\quad \beta = \frac{p-q}{2}
$$

从而 $p = \alpha + \beta$ 与 $q = \alpha - \beta$。将这些值代入韦尔纳型恒等式，并将两边同乘以二，即得和差化积公式。其结构与三角函数的对应公式完全一致，唯一差别出现在双曲余弦的减法公式中——前端缺少一个负号，这反映了基本双曲恒等式中符号的反转。

## 双曲正弦与余弦的线性组合

双曲正弦与双曲余弦取同一辐角的[线性组合](../linear-combinations/)，可按系数的相对大小改写为辐角移位、幅度调整后的单个双曲函数。给定实系数 $a$ 与 $b$，若 $|a|>|b|$，令 $R=\sqrt{a^2-b^2}>0$、$s=\operatorname{sgn}(a)$，则对任意 $x$ 有：

$$
a\sinh(x) + b\cosh(x) = sR\sinh(x + \varphi)
$$

移位 $\varphi$ 由以下关系唯一确定：

$$
\cosh(\varphi) = \frac{|a|}{R} \qquad \sinh(\varphi) = \frac{sb}{R} \qquad \tanh(\varphi)=\frac{b}{a}
$$

推导从双曲正弦的加法公式出发。展开右端得到：

$$
sR\sinh(x + \varphi) = sR\cosh(\varphi)\sinh(x) + sR\sinh(\varphi)\cosh(x)
$$

将 $\sinh(x)$ 与 $\cosh(x)$ 的系数与原组合逐一匹配，得到 $sR\cosh(\varphi)=a$ 与 $sR\sinh(\varphi)=b$。两式平方后相减得到 $R=\sqrt{a^2-b^2}$；两式相除得到 $\tanh(\varphi)=b/a$。由于双曲正切是实数轴到 $(-1,1)$ 的双射，移位 $\varphi$ 唯一确定。该组合在 $a>0$ 时严格递增，在 $a<0$ 时严格递减，但两种情况下都一一取遍所有实数值。

若 $|b|>|a|$，令 $R=\sqrt{b^2-a^2}>0$、$s=\operatorname{sgn}(b)$，则相应表示采用单个双曲余弦：

$$
a\sinh(x) + b\cosh(x) = sR\cosh(x + \psi)
$$

此时移位满足 $\cosh(\psi)=|b|/R$ 与 $\sinh(\psi)=sa/R$。若 $|a|=|b|$ 且系数不全为零，组合退化为单个指数函数的常数倍：$a=b$ 时为 $ae^x$，$a=-b$ 时为 $-ae^{-x}$。若 $a=b=0$，组合恒为零。

这一分类可直接判断方程 $a\sinh(x)+b\cosh(x)=c$ 的解。在 $|a|>|b|$ 的情形，方程化为：

$$
\sinh(x + \varphi) = \frac{sc}{R}
$$

因此每个实数 $c$ 都对应唯一解。在 $|b|>|a|$ 的情形，双曲余弦型方程有解当且仅当 $sc\geq R$；等号成立时恰有一解，严格大于时有两个解，否则无解。退化的指数情形则按其指数值域另行判断。该构造也是把按指数变化的量表示为两个双曲分量之合成的依据，这一描述贯穿于悬链线、相对论快度以及色散介质中波的传播分析之中。

> 对具有共同辐角的双曲正弦与双曲余弦线性组合，必须按上述三种系数范围分类。当双曲辐角互不相同时，这一分类不再适用，相应的变换属于积化和差公式（韦尔纳型）或和差化积公式族。
