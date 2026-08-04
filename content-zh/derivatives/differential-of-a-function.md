---
title: 函数的微分
title_en: Differential of a Function
source: https://algebrica.org/differential-of-a-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - differential
  - linear-approximation
  - tangent-line
translation:
  status: current
  source_hash: 9757d87e5137563c74d13df10d69ccf816f6155674286255ea57baafb799ac67
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 定义

考虑区间 $[a,b]$ 上的一个[可导](../derivatives/)函数 $f(x)$。由于函数可导，它在给定的[区间](../intervals/)上也[连续](../continuous-functions/)。取两个点 $x$ 和 $x + \Delta x \in [a,b]$，它们之间相隔的增量与[差商](../difference-quotient/)中出现的增量相同。

相对于点 $x$ 和增量 $\Delta x$，函数 $f(x)$ 的微分定义为：函数在 $x$ 处的导数与增量 $\Delta x$ 的乘积：

$$\mathrm{d}y = f'(x) \cdot \Delta x$$

自变量 $x$ 的微分等于变量本身的增量，即 $\mathrm{d}x = \Delta x$。将这个值代入定义，得到：

$$\mathrm{d}y = f'(x) \cdot \mathrm{d}x$$

由此可知，函数的一阶导数等于函数微分与自变量微分之比：

$$f'(x) = \frac{\mathrm{d}y}{\mathrm{d}x}$$

> 这个关系为导数采用莱布尼茨记号 $\mathrm{d}y/\mathrm{d}x$ 提供了依据；在这里，该记号具有微分之商的精确含义。

## 几何解释

考虑函数 $f$ 的图像在点 $A(x, f(x))$ 处的切线，可以看出微分的几何意义。设 $B(x + \Delta x, f(x))$ 是从 $A$ 出发沿水平方向移动增量 $\Delta x$ 后得到的点，再设 $C$ 是切线上横坐标为 $x + \Delta x$ 的点。三个点构成直角三角形 $ABC$，其两条直角边分别是水平线段 $\overline{AB}$ 和竖直线段 $\overline{BC}$。

![图 1](/assets/derivatives/svg/differential-of-a-function-1.zh.svg)

记 $\alpha$ 为切线与水平方向所成的角。根据[直角三角形三角学](../right-triangle-trigonometry/)，有：

$$\overline{BC} = \overline{AB} \cdot \tan(\alpha) \tag{1}$$

在这个三角形中，$\overline{AB} = \Delta x$，而切线的斜率满足 $\tan(\alpha) = f'(x)$。因此，等式 $(1)$ 可以改写为：

$$
\begin{align}
\overline{BC} &= \overline{AB} \cdot \tan(\alpha) \\[6pt]
&= \Delta x \cdot f'(x) \\[6pt]
&= \mathrm{d}y
\end{align}
$$

换句话说，当横坐标从 $x$ 移动到 $x + \Delta x$ 时，微分 $\mathrm{d}y$ 就是曲线切线的纵坐标变化。因而，微分度量的是函数线性近似所预测的增量，而函数的实际增量为 $\Delta y = f(x + \Delta x) - f(x)$。这两个量之间的关系可以写成：

$$\Delta y = \mathrm{d}y + o(\Delta x) \tag{2}$$

余项是一个[小 o](../little-o-notation/)项，所以当 $\Delta x \to 0$ 时，差值 $\Delta y - \mathrm{d}y$ 比 $\Delta x$ 更快趋于零。这正是微分在点附近给出函数最佳线性近似的精确含义。

## 微分与实际增量

通过考察函数 $f(x) = x^2$，可以具体说明微分与实际增量的区别。它的导数为 $f'(x) = 2x$，因此相对于点 $x$ 和增量 $\Delta x$ 的微分为：

$$\mathrm{d}y = f'(x) \cdot \Delta x = 2x \cdot \Delta x$$

函数在同一区间上的实际增量，是 $f$ 在两个端点处的函数值之差。展开平方，得到：

$$
\begin{align}
\Delta y &= f(x + \Delta x) - f(x) \\[6pt]
&= (x + \Delta x)^2 - x^2 \\[6pt]
&= 2x \cdot \Delta x + (\Delta x)^2
\end{align}
$$

比较这两个表达式可知，实际增量比微分多出 $(\Delta x)^2$，这正是公式 $(2)$ 预言的小 o 余项。作为数值说明，取 $x = 3$ 和 $\Delta x = 0.1$。微分给出 $\mathrm{d}y = 2 \cdot 3 \cdot 0.1 = 0.6$，而实际增量为 $\Delta y = 2 \cdot 3 \cdot 0.1 + (0.1)^2 = 0.61$。两个数相差 $0.01$，也就是增量的平方；随着 $\Delta x$ 减小，这个差异会迅速缩小。

## 在近似计算中的应用

当增量很小时，$\Delta y$ 与 $\mathrm{d}y$ 只相差一个可忽略的量。利用这一点，可以在函数容易计算的某个点附近估计函数值。从 $\Delta y = f(x + \Delta x) - f(x)$ 出发，用微分替代实际增量，得到近似式：

$$f(x + \Delta x) \approx f(x) + f'(x) \cdot \Delta x$$

当选取的基准点 $x$ 使 $f(x)$ 和 $f'(x)$ 都容易计算，且增量 $\Delta x$ 很小时，这个方法非常有效。例如，考虑用函数 $f(x) = \sqrt{x}$ 估计 $\sqrt{4.05}$，其导数为：

$$f'(x) = \frac{1}{2\sqrt{x}}$$

选取基准点 $x = 4$，因为该点的平方根可以精确求出；取增量 $\Delta x = 0.05$，则基准点处的导数为：

$$f'(4) = \frac{1}{2 \cdot 2} = \frac{1}{4}$$

将这些值代入近似式，得到：

$$
\begin{align}
\sqrt{4.05} &\approx f(4) + f'(4) \cdot 0.05 \\[6pt]
&= 2 + \frac{1}{4} \cdot 0.05 \\[6pt]
&= 2.0125
\end{align}
$$

直接计算得到的值为 $\sqrt{4.05} = 2.012461\ldots$，因此微分给出的估计值精确到小数点后四位。这个小误差反映了用微分替代实际增量时舍弃的[小 o](../little-o-notation/)余项。
