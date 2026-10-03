---
title: Sigmoid 函数
title_en: Sigmoid Function
source: https://algebrica.org/sigmoid-function/
license: CC BY-NC 4.0
tags:
  - derivatives
  - functions
  - heaviside-function
  - logistic-function
  - machine-learning
translation:
  status: current
  source_hash: 31b5de93906846e34138330ed36109033ba726daf21d459ac20a283a88f35105
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 定义

Sigmoid 函数是实变量的实值[函数](../functions/)，其取值严格介于 $0$ 和 $1$ 之间，并以[渐近方式](../asymptotes/)趋近两个端点。它把实数轴平滑地映射到[单位区间](../intervals/)，并用于数学分析和机器学习。其定义为：

$$\sigma(x) = \frac{1}{1 + e^{-x}}$$

将分子和分母同乘 $e^x$，可得等价形式：

$$\sigma(x) = \frac{e^x}{e^x + 1}$$

![图 1](/assets/functions/svg/sigmoid-function-1.zh.svg)

+ [定义域](../determining-the-domain-of-a-function/)为 $\mathbb{R}$，值域为开区间 $(0,1)$。
+ 函数在 $\mathbb{R}$ 上严格递增，因为它的[导数](../derivatives/)始终为正，因此它是从 $\mathbb{R}$ 到 $(0,1)$ 的双射。
+ 函数没有局部极值，并且只有一个[拐点](../maximum-minimum-and-inflection-points/)，即 $(0, \frac{1}{2})$。
+ 在无穷远处的[极限](../limits/)为 $\lim_{x \to -\infty} \sigma(x) = 0$ 和 $\lim_{x \to +\infty} \sigma(x) = 1$。

> 这条 S 形曲线对应三个阶段：$x$ 取很小的负值时增长缓慢；原点附近快速过渡；取很大的正值时趋于饱和。

## Sigmoid 函数的性质

该函数关于原点满足对称关系：

$$\sigma(-x) = 1 - \sigma(x)$$

直接代入即可验证这一恒等式，它说明 $\sigma$ 的图像关于点 $(0, \frac{1}{2})$ 中心对称。在原点处，函数值为：

$$\sigma(0) = \frac{1}{1 + e^{0}} = \frac{1}{2}$$

实数轴两端的极限为：

$$\lim_{x \to -\infty} \sigma(x) = 0 \qquad \lim_{x \to +\infty} \sigma(x) = 1$$

因此，直线 $y = 0$ 和 $y = 1$ 是图像的[水平渐近线](../asymptotes/)。

## Sigmoid 函数的导数

导数可以用函数自身表示：

$$\sigma'(x) = \sigma(x)(1 - \sigma(x))$$

下面直接计算验证这一恒等式。写成 $\sigma(x) = (1 + e^{-x})^{-1}$，并应用[链式法则](../chain-rule/)，得到：

$$\sigma'(x) = \frac{e^{-x}}{(1 + e^{-x})^2}$$

将分子写成 $(1 + e^{-x}) - 1$，即可把该表达式拆成乘积：

$$
\begin{align}
\sigma'(x) &= \frac{1}{1 + e^{-x}} \cdot \frac{e^{-x}}{1 + e^{-x}} \\[6pt]
&= \sigma(x)(1 - \sigma(x))
\end{align}
$$

由于对每个 $x \in \mathbb{R}$ 都有 $\sigma(x) \in (0, 1)$，导数严格为正，这证实了函数严格[递增](../increasing-and-decreasing-functions/)。导数在 $x = 0$ 处取得最大值，此时 $\sigma'(0) = \frac{1}{4}$。

## 二阶导数与凹凸性

对 $\sigma'(x) = \sigma(x)(1 - \sigma(x))$ 求导即可得到[二阶导数](../higher-order-derivatives/)。应用[乘积法则](../differentiation-rules/)，并代入 $\sigma'(x)$ 的表达式，得到：

$$
\begin{align}
\sigma''(x) &= \sigma'(x)(1 - \sigma(x)) - \sigma(x)\sigma'(x) \\[6pt]
&= \sigma'(x)(1 - 2\sigma(x)) \\[6pt]
&= \sigma(x)(1 - \sigma(x))(1 - 2\sigma(x))
\end{align}
$$

由于对所有 $x \in \mathbb{R}$ 都有 $\sigma(x)(1 - \sigma(x)) > 0$，因此 $\sigma''(x)$ 的符号只取决于因子 $1 - 2\sigma(x)$。又因为 $\sigma$ 严格递增且 $\sigma(0) = \frac{1}{2}$，所以当 $x < 0$ 时，因子 $1 - 2\sigma(x)$ 为正；当 $x > 0$ 时，该因子为负。

![图 2](/assets/functions/svg/sigmoid-function-2.zh.svg)

因此，函数在 $(-\infty, 0)$ 上呈[向上凸](../convexity-and-concavity-of-functions/)，在 $(0, +\infty)$ 上呈向下凹。点 $x = 0$ 是拐点，此处 $\sigma''(0) = 0$，且凹凸性发生改变。

## 与逻辑斯蒂函数的关系

Sigmoid 函数是逻辑斯蒂函数在增长率为 $1$ 且拐点位于原点时的特例。一般的逻辑斯蒂函数为：

$$f(x) = \frac{L}{1 + e^{-k(x - x_0)}}$$

其中 $L$ 表示上渐近值，$k$ 表示增长率，$x_0$ 表示拐点。标准 Sigmoid 函数对应 $L = 1$、$k = 1$ 和 $x_0 = 0$。

导数恒等式 $\sigma'(x) = \sigma(x)(1 - \sigma(x))$ 表明，$\sigma$ 是逻辑斯蒂微分方程 $y' = y(1 - y)$ 的一个解。右端是光滑函数，因此初始条件 $y(0) = \frac{1}{2}$ 唯一确定了 $\sigma$。一般的逻辑斯蒂函数同理满足 $y' = ky\left(1 - \dfrac{y}{L}\right)$。

## 趋近阶跃函数

对于缩放后的 Sigmoid 函数 $\sigma(kx) = \dfrac{1}{1 + e^{-kx}}$，较大的 $k$ 会压缩原点附近的过渡区域，而渐近值 $0$ 和 $1$ 保持不变。当 $k \to +\infty$ 时，函数逐点收敛到[Heaviside 阶跃函数](../heaviside-function/)：

$$
\lim_{k \to +\infty} \sigma(kx) =
\begin{cases}
0 & x < 0 \\[6pt]
\dfrac{1}{2} & x = 0 \\[6pt]
1 & x > 0
\end{cases}
$$

在原点处，极限等于 $\frac{1}{2}$，因为对每个 $k$ 都有 $\sigma(0) = \frac{1}{2}$。因此，缩放后的 Sigmoid 函数是阶跃函数的光滑近似，只有在取极限时才恢复不连续性。

## 与双曲正切的关系

Sigmoid 函数与[双曲正切](../hyperbolic-tangent-function/) $\tanh$ 满足恒等式：

$$\sigma(x) = \frac{1 + \tanh\left(\dfrac{x}{2}\right)}{2}$$

等价地，有：

$$\tanh(x) = 2\sigma(2x) - 1$$

这两个函数只相差一个竖直平移和一个缩放。Sigmoid 函数把 $\mathbb{R}$ 映射到 $(0, 1)$，而双曲正切把 $\mathbb{R}$ 映射到 $(-1, 1)$。二者都是 S 形曲线，并在两端趋于饱和。

## 作为分布函数的 Sigmoid 函数

Sigmoid 函数[连续](../continuous-functions/)、严格递增，并满足 $\lim_{x \to -\infty} \sigma(x) = 0$ 和 $\lim_{x \to +\infty} \sigma(x) = 1$。这些正是累积分布函数的定义性质，因此 $\sigma$ 是标准逻辑斯蒂分布的分布函数。其密度函数就是导数：

$$\sigma'(x) = \sigma(x)(1 - \sigma(x)) = \frac{e^{-x}}{(1 + e^{-x})^2}$$

由于对称关系 $\sigma(-x) = 1 - \sigma(x)$ 可推出 $\sigma'(-x) = \sigma'(x)$，所以密度函数是[偶函数](../even-and-odd-functions/)，呈钟形，并在原点处取得最大值。于是，$\sigma$ 的逆函数就是该分布的分位数函数。

## Sigmoid 函数的逆函数

由于 Sigmoid 函数严格单调，它在 $(0, 1)$ 上存在[逆函数](../inverse-function/)。这个逆函数就是 logit 函数：

$$\sigma^{-1}(p) = \ln\left(\frac{p}{1-p}\right)$$

[对数](../logarithms/)的自变量是赔率比。logit 函数把概率 $p \in (0,1)$ 映射到对数赔率尺度上的相应值。

## 示例

考虑计算 $x = 2$ 处的 Sigmoid 函数值，并检查该点的导数是否与公式 $\sigma'(x) = \sigma(x)(1 - \sigma(x))$ 一致。函数值为：

$$\sigma(2) = \frac{1}{1 + e^{-2}}$$

由于 $e^{-2} \approx 0.1353$，可得：

$$\sigma(2) \approx \frac{1}{1.1353} \approx 0.8808$$

应用导数公式，得到：

$$\sigma'(2) = \sigma(2)(1 - \sigma(2)) \approx 0.8808 \cdot 0.1192 \approx 0.1050$$

$x = 2$ 处的 Sigmoid 函数导数约为 $0.1050$。由于 $\sigma(2) \approx 0.88$ 接近上渐近线，函数在那里变化缓慢，导数也较小。
