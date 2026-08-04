---
title: 偏导数
title_en: Partial Derivatives
source: https://algebrica.org/partial-derivatives/
license: CC BY-NC 4.0
tags:
  - gradient
  - hessian-matrix
  - jacobian-matrix
  - multivariable-calculus
  - partial-derivatives
  - schwarz-theorem
translation:
  status: current
  source_hash: 19f8aa5ec6a80b35214c3347ecfba8c66dcb627d7f83e283bc375e59b1cf8877
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

偏导数将[导数](../derivatives/)的概念推广到多元实函数。对于[函数](../functions/)的单变量情形，导数刻画函数值沿唯一可用方向的变化率。在多变量情形中，需要指定计算变化率所针对的变量，同时将其他变量保持不变。形式化地说：

+ 设 $f : A \subseteq \mathbb{R}^n \to \mathbb{R}$ 是定义在开集 $A$ 上的函数。
+ 设 $x_0 = (x_1^0, \ldots, x_n^0) \in A$ 是一个固定点。

函数 $f$ 在 $x_0$ 处关于变量 $x_i$ 的偏导数，定义为下列极限：

$$\frac{\partial f}{\partial x_i}(x_0) = \lim_{h \to 0} \frac{f(x_1^0, \ldots, x_i^0 + h, \ldots, x_n^0) - f(x_0)}{h}$$

只要这个[极限](../limits/)存在且有限，该定义就适用。在这种情况下，称 $f$ 在 $x_0$ 处关于 $x_i$ 偏可导。

这种记号与普通导数的记号类似：

$$f'(c) = \lim_{h \to 0} \frac{f(c+h) - f(c)}{h}$$

对于偏导数，符号 $\partial$ 表示只有一个坐标发生变化。常见的其他记号包括 $\partial_{x_i} f(x_0)$ 和 $f_{x_i}(x_0)$。从计算角度看，求 $\partial f/\partial x_i$ 就是使用标准微积分法则对 $f$ 关于 $x_i$ 求导，同时把其他变量视为常数。

- - -

考虑 $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ 的情形，其中 $A$ 是开集，且 $(x_0, y_0) \in A$。两个偏导数定义为：

$$\frac{\partial f}{\partial x}(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$$

$$\frac{\partial f}{\partial y}(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}$$

从几何上看，$\frac{\partial f}{\partial x}(x_0, y_0)$ 表示用[平面](../planes/) $y = y_0$ 与 $f$ 的图像相交所得曲线的斜率，而 $\frac{\partial f}{\partial y}(x_0, y_0)$ 对应于用平面 $x = x_0$ 相交所得曲线的斜率。在每一条这样的曲线上，$f$ 都变成单个实变量的函数。

例如，考虑二元函数：

$$f(x, y) = x^3 y^2 - \sin(xy)$$

依次将 $y$ 和 $x$ 视为常数，可得：

$$
\begin{align}
\frac{\partial f}{\partial x} &= 3x^2 y^2 - y\cos(xy) \\[6pt]
\frac{\partial f}{\partial y} &= 2x^3 y - x\cos(xy)
\end{align}
$$

> 第一个表达式是在保持 $y$ 不变的情况下对 $f$ 关于 $x$ 求导得到的。第二个表达式是在保持 $x$ 不变的情况下关于 $y$ 求导得到的。在这两种情形中，标准的[求导法则](../differentiation-rules/)（例如幂法则和[链式法则](../chain-rule/)）都与单变量情形一样适用。

## 例 1

为了说明偏导的过程，考虑一个三元函数，而不是二元函数。增加一个变量不会带来概念上的复杂性，步骤保持不变。这个例子说明如何独立处理每一个变量，把其余变量视为常数。计算下列函数的偏导数：

$$f(x, y, z) = e^{x^2 z} \ln(1 + y^2 z)$$

关于 $x$ 求导很直接。此时将 $y$ 和 $z$ 视为常数，因此 $\ln(1 + y^2 z)$ 提取为因子，并对 $e^{x^2 z}$ 应用链式法则，其中内函数是 $x^2 z$：

$$\frac{\partial f}{\partial x} = 2xze^{x^2 z} \ln(1 + y^2 z)$$

关于 $y$ 的导数具有类似结构，但作用于另一个因子。此时 $e^{x^2 z}$ 作为常数乘子，对 $\ln(1 + y^2 z)$ 应用链式法则，其中内函数是 $1 + y^2 z$：

$$\frac{\partial f}{\partial y} = \frac{2yze^{x^2 z}}{1 + y^2 z}$$

关于 $z$ 的导数是三种情形中最复杂的。由于两个因子都不是关于 $z$ 的常数，必须使用乘积法则。指数项 $e^{x^2 z}$ 的导数为 $x^2 e^{x^2 z}$，而 $\ln(1 + y^2 z)$ 的导数为 $\frac{y^2}{1 + y^2 z}$：

$$\frac{\partial f}{\partial z} = x^2 e^{x^2 z} \ln(1 + y^2 z) + \frac{y^2 e^{x^2 z}}{1 + y^2 z}$$

## 高阶偏导数

如果偏导数本身是在 $A$ 上可导的函数，还可以再对任意变量 $x_j$ 求导，得到二阶偏导数；这类似于单变量函数的[高阶导数](../higher-order-derivatives/)。对于二元函数 $f(x, y)$，有四种可能的二阶偏导数：

$$\frac{\partial^2 f}{\partial x^2} \qquad \frac{\partial^2 f}{\partial y^2} \qquad \frac{\partial^2 f}{\partial y \ \partial x} \qquad \frac{\partial^2 f}{\partial x \ \partial y}$$

最后两个称为混合偏导数。它们的区别在于求导顺序：

+ 在 $\dfrac{\partial^2 f}{\partial y \ \partial x}$ 中，先关于 $x$ 求导，再关于 $y$ 求导。
+ 在 $\dfrac{\partial^2 f}{\partial x \ \partial y}$ 中，求导顺序相反，先关于 $y$ 求导，再关于 $x$ 求导。

- - -

考虑函数 $f(x, y) = x^3 \sin(xy)$，计算其全部四个二阶偏导数。先求一阶偏导数：

$$
\begin{align}
\frac{\partial f}{\partial x} &= 3x^2 \sin(xy) + x^3 y \cos(xy) \\[6pt]
\frac{\partial f}{\partial y} &= x^4 \cos(xy)
\end{align}
$$

四个二阶导数通过对每个一阶偏导数关于相应变量求导得到。对 $\frac{\partial f}{\partial x}$ 关于 $x$ 求导时，需要两次应用乘积法则：

$$
\begin{align}
\frac{\partial^2 f}{\partial x^2} &= 6x \sin(xy) + 3x^2 y \cos(xy) + 3x^2 y \cos(xy) - x^3 y^2 \sin(xy) \\[6pt]
&= 6x \sin(xy) + 6x^2 y \cos(xy) - x^3 y^2 \sin(xy)
\end{align}
$$

对 $\frac{\partial f}{\partial y}$ 关于 $y$ 求导则更直接，因为其结构更简单：

$$\frac{\partial^2 f}{\partial y^2} = -x^5 \sin(xy)$$

对于混合偏导数，对 $\frac{\partial f}{\partial x}$ 关于 $y$ 求导得到：

$$
\begin{align}
\frac{\partial^2 f}{\partial y \ \partial x} &= 3x^2 \cdot x\cos(xy) + x^3 \cos(xy) - x^3 y \cdot x \sin(xy) \\[6pt]
&= 4x^3 \cos(xy) - x^4 y \sin(xy)
\end{align}
$$

同样地，对 $\frac{\partial f}{\partial y}$ 关于 $x$ 求导得到：

$$\frac{\partial^2 f}{\partial x \ \partial y} = 4x^3 \cos(xy) - x^4 y \sin(xy)$$

## 施瓦茨定理

施瓦茨定理讨论求导顺序是否会影响混合偏导数的计算。分析学中的一个基本结果表明，在适当的正则性条件下，求导顺序并不重要。具体而言，施瓦茨定理如下。

设 $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ 是一个函数，混合偏导数在 $A$ 上存在，并且在点 $(x_0, y_0) \in A$ 处[连续](../continuous-functions/)。那么，这两个混合偏导数在该点相等：

$$\frac{\partial^2 f}{\partial y \ \partial x}(x_0, y_0) = \frac{\partial^2 f}{\partial x \ \partial y}(x_0, y_0)$$

- - -

混合偏导数的连续性是施瓦茨定理的关键假设。有些函数的两个混合偏导数都存在，但它们是[不连续的](../discontinuities-of-real-functions/)，因而在某些点取不同的值。下面给出一个经典反例。

$$f(x,y) = \begin{cases} xy\dfrac{x^2 - y^2}{x^2 + y^2} & (x,y) \neq (0,0) \\[8pt] 0 & (x,y) = (0,0) \end{cases}$$

两个混合偏导数在原点都存在，可以直接根据定义计算。为了计算 $\frac{\partial^2 f}{\partial y \ \partial x}(0,0)$，先求：

$$
\begin{align}
\frac{\partial f}{\partial x}(0,y) &= \lim_{h \to 0} \frac{f(h,y) - f(0,y)}{h} \\[6pt]
&= \lim_{h \to 0} \frac{hy\dfrac{h^2 - y^2}{h^2 + y^2}}{h} \\[6pt]
&= \lim_{h \to 0} y\frac{h^2 - y^2}{h^2 + y^2} \\[6pt]
&= -y
\end{align}
$$

接着在原点处关于 $y$ 求导：

$$\frac{\partial^2 f}{\partial y \ \partial x}(0,0) = \frac{\partial}{\partial y}(-y)\bigg|_{y=0} = -1$$

反过来按相反顺序计算，可得：

$$\frac{\partial f}{\partial y}(x,0) = x \qquad \frac{\partial^2 f}{\partial x \ \partial y}(0,0) = \frac{\partial}{\partial x}(x)\bigg|_{x=0} = +1$$

因此，两个混合偏导数在原点取相反的值，说明当连续性假设不满足时，施瓦茨定理的结论不成立：

$$\frac{\partial^2 f}{\partial y \ \partial x}(0,0) = -1 \neq +1 = \frac{\partial^2 f}{\partial x \ \partial y}(0,0)$$

## 梯度

若 $f : A \subseteq \mathbb{R}^n \to \mathbb{R}$ 在点 $x_0 \in A$ 处关于每个变量都偏可导，则所有偏导数构成一个[向量](../vectors/)，称为 $f$ 在 $x_0$ 处的梯度。梯度记作 $\nabla f(x_0)$ 或 $\mathrm{grad}\ f(x_0)$：

$$\nabla f(x_0) = \left( \frac{\partial f}{\partial x_1}(x_0), \frac{\partial f}{\partial x_2}(x_0), \ldots, \frac{\partial f}{\partial x_n}(x_0) \right) \in \mathbb{R}^n$$

梯度是多元分析的基础，它给出 $f$ 在 $x_0$ 附近变化的最优线性近似，其方向表示上升最快的方向。下面关于可导性的定义会进一步解释这一线性近似的确切含义。

> 这一几何性质也是梯度下降的基础。梯度下降是一种迭代优化算法，在机器学习中广泛用于沿梯度的反方向移动，以最小化损失函数。

## 偏导数的存在性与连续性

在一点存在所有偏导数，是一个比表面上看起来更弱的条件，因为它甚至不能保证函数在该点[连续](../continuous-functions/)。每个偏导数只记录 $f$ 沿一个坐标方向的行为，因此函数可能沿每条坐标轴都很规整，却在其他方向表现异常。下面是一个标准例子。

$$f(x,y) = \begin{cases} \dfrac{xy}{x^2 + y^2} & (x,y) \neq (0,0) \\[8pt] 0 & (x,y) = (0,0) \end{cases}$$

两个偏导数在原点都存在，因为 $f$ 沿两条坐标轴恒等于零。直接计算极限得到：

$$\frac{\partial f}{\partial x}(0,0) = \lim_{h \to 0} \frac{f(h,0) - f(0,0)}{h} = 0, \qquad \frac{\partial f}{\partial y}(0,0) = 0$$

然而，函数在原点并不连续。沿直线 $y = mx$ 趋近原点时，有：

$$f(x, mx) = \frac{x\cdot mx}{x^2 + m^2 x^2} = \frac{m}{1 + m^2}$$

所得值取决于斜率 $m$，所以 $f$ 在原点没有[极限](../limits/)，也不可能在那里连续。这说明偏可导并不推出连续性，也正因此需要下面介绍的更强概念。

## 可导性与全微分

在一点存在偏导数，一般并不能保证可导。可导性是更强的条件，它要求函数在该点具有线性近似。函数 $f : A \subseteq \mathbb{R}^n \to \mathbb{R}$ 在 $x_0 \in A$ 处可导，是指存在一个[线性映射](../linear-maps/) $L : \mathbb{R}^n \to \mathbb{R}$，使得：

$$\lim_{h \to 0} \frac{f(x_0 + h) - f(x_0) - L(h)}{|h|} = 0$$

线性映射 $L$ 由此唯一确定，并且具有如下形式：

$$L(h) = \nabla f(x_0) \cdot h$$

可导性意味着在 $x_0$ 的某个邻域内，函数具有如下展开式：

$$f(x_0 + h) = f(x_0) + \nabla f(x_0) \cdot h + o(|h|)$$

在这个公式中，$o(|h|)$ 表示当 $h \to 0$ 时比 $|h|$ 更快趋于零的项。线性映射 $h \mapsto \nabla f(x_0) \cdot h$ 称为 $f$ 在 $x_0$ 处的全微分，这与单变量函数的[微分](../differential-of-a-function/)相类比。

因此，可导性强于连续性和偏导数存在这两个条件。在 $x_0$ 处可导的函数自动在 $x_0$ 处连续，并且在那里拥有所有偏导数；反之，这两个较弱的性质都不能推出可导性。

## 雅可比矩阵

考虑取向量值的函数，具体地说，设 $f : A \subseteq \mathbb{R}^n \to \mathbb{R}^m$，其中 $f = (f_1, \ldots, f_m)$。可以计算每个分量 $f_k$ 关于每个变量 $x_j$ 的偏导数。$f$ 在 $x_0$ 处的雅可比矩阵组织了这些信息，定义为一个 $m \times n$ 的[矩阵](../matrices/)：

$$J_{f}(x_0) = \begin{pmatrix} \dfrac{\partial f_1}{\partial x_1}(x_0) & \cdots & \dfrac{\partial f_1}{\partial x_n}(x_0) \\[10pt] \vdots & \ddots & \vdots \\[4pt] \dfrac{\partial f_m}{\partial x_1}(x_0) & \cdots & \dfrac{\partial f_m}{\partial x_n}(x_0) \end{pmatrix}$$

$J_{f}(x_0)$ 的第 $k$ 行对应于梯度 $\nabla f_k(x_0)$。当 $m = 1$ 时，雅可比矩阵退化为行向量，这与 $f$ 的梯度等价。

## 方向导数

关于 $x_i$ 的偏导数，是更一般的方向导数的一个特例，其方向为第 $i$ 个标准基向量 $e_i$。对于满足 $|v| = 1$ 的任意单位向量 $v \in \mathbb{R}^n$，$f$ 在 $x_0$ 处沿 $v$ 方向的方向导数定义为：

$$D_{v} f(x_0) = \lim_{t \to 0} \frac{f(x_0 + tv) - f(x_0)}{t}$$

当 $f$ 在 $x_0$ 处可导时，有如下公式：

$$D_{v} f(x_0) = \nabla f(x_0) \cdot v = \sum_{i=1}^n \frac{\partial f}{\partial x_i}(x_0)v_i$$

点号表示 $\mathbb{R}^n$ 上的[欧几里得内积](../inner-product-spaces/)。取 $v = e_i$ 就得到 $\frac{\partial f}{\partial x_i}(x_0)$，这与偏导数的原始定义一致。这个公式只有在 $f$ 在 $x_0$ 处可导时才成立，而不是仅在偏导数存在时成立。

## 多元微积分中的链式法则

复合函数的[链式法则](../chain-rule/)是多元分析的基础。设 $g : U \subseteq \mathbb{R}^k \to \mathbb{R}^n$ 在 $t_0 \in U$ 处可导，且 $f : A \subseteq \mathbb{R}^n \to \mathbb{R}$ 在 $x_0 = g(t_0) \in A$ 处可导。那么复合函数 $h = f \circ g$ 在 $t_0$ 处可导，并且关于 $t_j$ 的偏导数为：

$$\frac{\partial h}{\partial t_j}(t_0) = \sum_{i=1}^n \frac{\partial f}{\partial x_i}(x_0)\frac{\partial g_i}{\partial t_j}(t_0)$$

用矩阵记号可以表示为：

$$J_h(t_0) = J_f(x_0)J_g(t_0)$$

该公式表示雅可比矩阵按正确顺序相乘。在 $k = 1$ 且 $g(t)$ 定义一条曲线的特殊情形下，公式退化为 $h(t) = f(g(t))$ 的标准导数：

$$\frac{d}{dt} f(g(t))\bigg|_{t=t_0} = \nabla f(g(t_0)) \cdot g'(t_0)$$

## 正则性类别

如果函数 $f$ 在开集 $A$ 上的所有一阶偏导数都存在且连续，就称 $f$ 在 $A$ 上属于 $C^1$ 类，记作 $f \in C^1(A)$。更一般地，如果直到 $k$ 阶的所有偏导数都存在且连续，就记作 $f \in C^k(A)$。记号 $f \in C^\infty(A)$ 表示对每个 $k \geq 1$ 都有 $f \in C^k(A)$。

+ $C^1$ 类函数具有一个重要性质：偏导数的连续性保证函数可导。具体来说，如果 $f \in C^1(A)$，那么 $f$ 在 $A$ 的每一点都可导。不过，这个条件是充分而非必要的，因为存在偏导数不连续但仍然可导的函数。
+ 对于 $C^2$ 类函数，施瓦茨定理自动适用，因为所需的连续性已经得到假设。因此，在整个 $A$ 上混合偏导数相等。

## 海森矩阵

设函数 $f : A \subseteq \mathbb{R}^n \to \mathbb{R}$ 定义在开集 $A$ 上且属于 $C^2$ 类。它的二阶偏导数可以排列成一个方阵。$f$ 在点 $x_0 \in A$ 处的海森矩阵，是如下定义的 $n \times n$ 对称矩阵：

$$H_f(x_0) = \begin{pmatrix} \dfrac{\partial^2 f}{\partial x_1^2}(x_0) & \cdots & \dfrac{\partial^2 f}{\partial x_1 \ \partial x_n}(x_0) \\[10pt] \vdots & \ddots & \vdots \\[4pt] \dfrac{\partial^2 f}{\partial x_n \ \partial x_1}(x_0) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(x_0) \end{pmatrix}$$

位置 $(j, k)$ 处的元素为：

$$\frac{\partial^2 f}{\partial x_j \ \partial x_k}(x_0)$$

由于 $f \in C^2(A)$，施瓦茨定理保证所有混合偏导数相等，因此海森矩阵是对称的：

$$H_f(x_0) = H_f(x_0)^T$$

海森矩阵是分析 $f$ 二阶性质的基础。在满足 $\nabla f(x_0) = 0$ 的临界点 $x_0$ 处，$H_f(x_0)$ 的定性决定了该点的性质：如果 $H_f(x_0)$ 正定，则 $x_0$ 是局部极小值点；如果负定，则是局部极大值点；如果不定，则是鞍点。这一结果将二阶导数判别法推广到多元函数，详见[极大值、极小值与拐点](../maximum-minimum-and-inflection-points/)条目。
