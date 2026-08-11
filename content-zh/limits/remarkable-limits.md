---
title: 重要极限
title_en: Remarkable Limits
source: https://algebrica.org/remarkable-limits/
license: CC BY-NC 4.0
tags:
  - derivatives
  - eulers-number
  - geometric-proof
  - growth-rates
  - indeterminate-forms
  - limits
  - remarkable-limits
  - taylor-series
translation:
  status: current
  source_hash: 6f045838e1c6c70b32ae7055516b44d461406ab5276465835eb85127f186bfa1
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 引言

一小组[极限](../limits/)在整个数学分析中都发挥着核心作用。它们既出现在常规计算中，也刻画了[函数](../functions/)在常规点附近的局部行为以及在无穷远处的行为。下面汇集其中最重要的情形。

这些极限包括三角、指数和对数表达式，也包括对无界增长量与趋于零的量之间的标准比较。

## 三角函数基本极限

在结构上最重要的三角极限是：

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

这个结果刻画了[正弦函数](../sine-and-cosine/)在原点处的局部线性性，并且等价于正弦函数在零点的[导数](../derivatives/)为一：

$$\left. \frac{d}{dx} \sin x \right|_{x = 0} = 1$$

由此可直接推出，对任意实常数 $a$：

$$\lim_{x \to 0} \frac{\sin(a x)}{a x} = 1$$

$$\lim_{x \to 0} \frac{\sin(a x)}{x} = a$$

## 三角函数基本极限的几何证明

这个极限的经典证明依赖于单位圆上的面积比较。固定一个[角](../angles-and-angular-measure/) $x \in (0, \pi/2)$，考虑三个共享原点 $O$ 为顶点的区域：三角形 $OPA$，其中 $A = (1, 0)$、$P = (\cos x, \sin x)$；扇形 $OPA$；以及三角形 $OQA$，其中 $Q$ 是过 $O$ 和 $P$ 的直线与圆在 $A$ 处的竖直切线的交点，因此 $Q = (1, \tan x)$。

三个区域彼此嵌套，三角形 $OPA$ 包含于扇形，扇形又包含于较大的三角形 $OQA$。计算相应面积可得不等式：

$$\frac{1}{2}\sin x < \frac{1}{2} x < \frac{1}{2}\tan x$$

两边乘以 $2$，得到基本几何不等式：

$$\sin x < x < \tan x \qquad x \in (0, \pi/2)$$

由于在这个区间内 $\sin x > 0$，每项除以 $\sin x$ 后不等式方向保持不变，得到：

$$1 < \frac{x}{\sin x} < \frac{1}{\cos x}$$

取倒数会反转不等式方向，从而得到 $\sin(x)/x$ 的双侧界：

$$\cos x < \frac{\sin x}{x} < 1$$

当 $x \to 0^+$ 时，下界 $\cos x$ 由余弦函数在原点处的连续性趋近 $1$，而上界是常数 $1$。应用[夹逼定理](../squeeze-theorem/)可得：

$$\lim_{x \to 0^+} \frac{\sin x}{x} = 1$$

函数 $\sin(x)/x$ 是偶函数，因此当 $x \to 0^-$ 时得到相同的值。两个单侧极限相等，所以双侧极限存在且等于 $1$。

## 正切极限

为了求[正切](../tangent-and-cotangent/)的极限，考虑恒等式：

$$\frac{\tan x}{x} = \frac{\sin x}{x} \cdot \frac{1}{\cos x}$$

利用余弦函数在原点处的连续性，得到：

$$\lim_{x \to 0} \frac{\tan x}{x} = 1$$

更一般地，对任意实常数 $a$：

$$\lim_{x \to 0} \frac{\tan(a x)}{x} = a$$

## 余弦极限

计算以下极限时会出现二次（或二阶）行为：

$$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$$

在这个情形中，分子关于 $x$ 按二次阶消失，而不是按一次阶消失。[余弦函数](../sine-and-cosine/)在原点处与水平直线 $y = 1$ 相切：它在 $x = 0$ 处的一阶导数为零，而其[泰勒展开](../taylor-series/)中第一个非零项的阶数为 $x^2$。事实上：

$$\cos x = 1 - \frac{x^2}{2} + o(x^2)$$

> 这里的 $o(x^2)$ 表示一个[小 o 项](../little-o-notation/)，即当 $x \to 0$ 时，相对于 $x^2$ 可以忽略的量。

除以 $x^2$ 就能分离出主导的二次项，从而得到该极限。更一般地：

$$\lim_{x \to 0} \frac{1 - \cos(a x)}{x^2} = \frac{a^2}{2}$$

## 余弦极限的证明

利用半角恒等式，可以从三角函数基本极限推出这一结果：

$$1 - \cos x = 2 \sin^2\!\left(\frac{x}{2}\right)$$

将这个表达式代入原分式，并把分母改写为与半角相匹配的形式：

$$\frac{1 - \cos x}{x^2} = \frac{2 \sin^2(x/2)}{x^2} = \frac{1}{2}\left(\frac{\sin(x/2)}{x/2}\right)^{\!2}$$

当 $x \to 0$ 时，参数 $x/2$ 也趋于 $0$，因此括号内的因子由三角函数基本极限趋于 $1$。取平方不会改变极限，前面的因子 $1/2$ 保持不变，于是：

$$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$$

## 指数函数基本极限

[指数函数](../exponential-function/)在原点附近表现出一阶行为：它偏离常数 $1$ 的部分关于 $x$ 是线性的：

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

这个极限反映了 $e^x$ 在原点处的导数等于一：

$$\left. \frac{d}{dx} e^x \right|_{x = 0} = 1$$

由 $e^x$ 在原点附近的[泰勒展开](../taylor-series/)可直接得到：

$$e^x = 1 + x + \frac{x^2}{2!} + o(x^2)$$

除以 $x$ 再取极限，立即得到 $1$，因为所有高阶项都消失。更一般地，对任意实常数 $a$：

$$\lim_{x \to 0} \frac{e^{a x} - 1}{x} = a$$

这是通过代换 $u = a x$ 并化归到标准形式得到的。

> 这里 $n!$ 表示 $n$ 的[阶乘](../factorial/)，即不超过 $n$ 的所有正整数之积；特别地，$2! = 2$。

## 指数函数基本极限的证明

可以直接从指数函数在原点处的泰勒展开得到一个自洽的证明：

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$

减去 $1$ 并除以 $x$，得到：

$$\frac{e^x - 1}{x} = 1 + \frac{x}{2!} + \frac{x^2}{3!} + \frac{x^3}{4!} + \cdots$$

除第一项外，每一项都是在原点处消失的 $x$ 的多项式。当 $x \to 0$ 时取极限，只留下常数项：

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

> 在这个论证中，极限与级数交换的合理性来自 $e^x$ 的泰勒级数在每个有界区间上一致收敛，因此可以在 $x = 0$ 处逐项求值。

## 对数函数基本极限

对于自然[对数](../logarithms/)，有如下极限：

$$\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$$

这个结果对应于 $\ln x$ 在 $x = 1$ 处的[导数](../derivatives/)：

$$\left. \frac{d}{dx} \ln x \right|_{x = 1} = 1$$

更一般地，对任意实常数 $a$：

$$\lim_{x \to 0} \frac{\ln(1 + a x)}{x} = a$$

## 对数函数基本极限的证明

通过变量替换，对数极限可以化归为指数极限。令：

$$y = \ln(1 + x) \quad \Longleftrightarrow \quad x = e^{y} - 1$$

自然对数在 $1$ 处连续，且 $\ln 1 = 0$，所以当 $x \to 0$ 时 $y \to 0$，并且映射 $x \mapsto y$ 在原点的两个邻域之间构成双射。将分式改写为关于 $y$ 的形式：

$$\frac{\ln(1 + x)}{x} = \frac{y}{e^{y} - 1} = \left(\frac{e^{y} - 1}{y}\right)^{\!-1}$$

括号内的分母由指数函数基本极限趋近 $1$，因此其倒数也趋近 $1$：

$$\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$$

## 定义指数函数的极限

一个标准极限定义了欧拉数 $e$：

$$\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e$$

或者，等价地，在离散形式下：

$$\lim_{n \to \infty} \left( 1 + \frac{1}{n} \right)^n = e$$

> 离散形式是将 $x$ 限制为 $\frac{1}{n}$ 这种形式得到的，其中 $n$ 是正整数，因此 $x \to 0$ 对应 $n \to \infty$。代入后得到[数列](../sequences/) $\left( 1 + \frac{1}{n} \right)^n$，它当 $n \to \infty$ 时的极限与连续形式的极限一致。关于这一数列的自洽处理见[欧拉数的极限](../euler-number-limit-sequence/)页面。

更一般地，对任意实常数 $a$：

$$\lim_{x \to 0} (1 + a x)^{\frac{1}{x}} = e^{a}$$

## 涉及幂函数的极限

对于实指数 $\alpha$ 的[幂函数](../power-function/)，下列极限成立：

$$\lim_{x \to 0} \frac{(1 + x)^\alpha - 1}{x} = \alpha$$

当 $\alpha$ 为有理数时，可以由[二项式展开](../binomial-theorem/)推出这个结果；一般情形则可以用对数求导得到。

## 增长速率比较

在计算趋于无穷的函数之商时，未定式 $\infty/\infty$ 可以通过判断哪个因子增长更快来解决。初等函数的主要类别在无穷远处形成严格的增长层级。对于正实常数 $\alpha > 0$ 和 $a > 1$，这一链式关系为：

$$\ln x \ \ll \ x^{\alpha} \ \ll \ a^{x} \ \ll \ x! \ \ll \ x^{x} \qquad x \to +\infty$$

符号 $f \ll g$ 等价于[小 o 关系](../little-o-notation/) $f = o(g)$，表示商 $f/g$ 的极限为零：

$$f \ll g \quad \Longleftrightarrow \quad \lim_{x \to +\infty} \frac{f(x)}{g(x)} = 0$$

链中的每个环节都对应一个标准极限，可以直接验证，也可以反复应用[洛必达法则](../hopital-rule/)验证。下面列出最常用的情形。

对数比任何正幂增长得慢：

$$\lim_{x \to +\infty} \frac{\ln x}{x^{\alpha}} = 0 \qquad \alpha > 0$$

多项式比底数大于 $1$ 的任何指数函数增长得慢：

$$\lim_{x \to +\infty} \frac{x^{n}}{a^{x}} = 0 \qquad n \in \mathbb{N}, \ a > 1$$

在离散情形下，指数函数比阶乘增长得慢：

$$\lim_{n \to +\infty} \frac{a^{n}}{n!} = 0 \qquad a > 0$$

最后，阶乘本身被自幂 $n^{n}$ 所支配：

$$\lim_{n \to +\infty} \frac{n!}{n^{n}} = 0$$

这些比较关系支配着微积分中各种表达式的渐近行为。它们对研究[级数](../series/)的收敛至关重要，因为被求和的项必须足够快地减小；在算法分析中它们同样处于核心地位，因为程序的运行时间也按照同一层级分类。

> 这里使用的记号 $f \ll g$ 是 $x \to +\infty$ 时[小 o 记号](../little-o-notation/)的严格支配版本。倒置的层级关系 $g \gg f$ 从支配函数的角度描述同一情形。

## 渐近等价

上面汇集的重要极限可以改写为原点附近的局部渐近等价关系：

$$\sin x \sim x \qquad \tan x \sim x \qquad 1 - \cos x \sim \frac{x^2}{2}$$

$$e^x - 1 \sim x \qquad \ln(1 + x) \sim x$$

记号 $f(x) \sim g(x)$（当 $x \to 0$ 时）表示两个函数在原点附近渐近等价：

$$\lim_{x \to 0} \frac{f(x)}{g(x)} = 1$$

这些关系分别对应于光滑函数在常规点附近的局部[泰勒展开](../taylor-series/)中的第一个非零项。因此，在计算极限时可以用更简单的表达式替代复杂表达式，也可以用它们处理[未定式](../indeterminate-forms/)。

## 结构性解释

从更高级的角度看，重要极限是可微性与局部线性化的表达。以下形式的每个极限：

$$\lim_{x \to 0} \frac{f(x) - f(0)}{x}$$

都与 $f$ 在原点处的[导数](../derivatives/)定义一致。经典的重要极限恰好是其中可以显式计算导数的特例。它们随后成为处理更复杂[未定式](../indeterminate-forms/)的起点，通常会结合[洛必达法则](../hopital-rule/)，或在泰勒展开中结合[小 o 记号](../little-o-notation/)。

## 总结

下表总结了最常见的重要极限。这些结果在微分学与积分学中发挥基础作用，并经常作为起点，通过代数运算、变量替换、渐近等价或[洛必达法则](../hopital-rule/)来求更复杂的极限。

[class="table-1"]

|                                                         |                  |
| ------------------------------------------------------- | ---------------- |
| $\lim_{x \to 0} \dfrac{\sin x}{x}$                      | $1$              |
| $\lim_{x \to 0} \dfrac{\sin(a x)}{a x}$                 | $1$              |
| $\lim_{x \to 0} \dfrac{\sin(a x)}{x}$                   | $a$              |
| $\lim_{x \to 0} \dfrac{\tan x}{x}$                      | $1$              |
| $\lim_{x \to 0} \dfrac{\tan(a x)}{x}$                   | $a$              |
| $\lim_{x \to 0} \dfrac{1 - \cos x}{x^2}$                | $\dfrac{1}{2}$   |
| $\lim_{x \to 0} \dfrac{1 - \cos(a x)}{x^2}$             | $\dfrac{a^2}{2}$ |
| $\lim_{x \to 0} \dfrac{e^x - 1}{x}$                     | $1$              |
| $\lim_{x \to 0} \dfrac{e^{a x} - 1}{x}$                 | $a$              |
| $\lim_{x \to 0} \dfrac{\ln(1 + x)}{x}$                  | $1$              |
| $\lim_{x \to 0} \dfrac{\ln(1 + a x)}{x}$                | $a$              |
| $\lim_{x \to 0} (1 + x)^{1/x}$                          | $e$              |
| $\lim_{n \to \infty} \left( 1 + \dfrac{1}{n} \right)^n$ | $e$              |
| $\lim_{x \to 0} (1 + a x)^{1/x}$                        | $e^a$            |
| $\lim_{x \to 0} \dfrac{(1 + x)^\alpha - 1}{x}$          | $\alpha$         |

[/class]
