---
title: 复合幂函数的导数
title_en: Derivative of Composite Power Functions
source: https://algebrica.org/derivative-of-composite-power-functions/
license: CC BY-NC 4.0
tags:
  - composite-functions
  - derivatives
  - logarithmic-differentiation
  - power-functions
translation:
  status: current
  source_hash: 3bc7eba69fa0cc50b9b481ad57b8f2c387f25276d3e062cfd67a84612c3ba13c
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 复合幂函数

前面我们已经介绍了如何用[差商](../difference-quotient/)的定义计算函数在一点处的[导数](../derivatives/)，如何通过基本的[求导法则](../differentiation-rules/)组合导数，以及如何通过[链式法则](../chain-rule/)对复合函数求导。对于底数和指数都依赖于变量的表达式，也就是形如下面的表达式，需要使用单独的技巧：

$$y = f(x)^{g(x)}$$

该表达式要求 $f(x) > 0$ 才有定义。由于变量同时出现在底数和指数中，[幂函数](../power-function/)求导法则和指数函数求导法则都不能直接应用。标准技巧称为对数求导，它将[对数](../logarithms/)的性质与链式法则结合起来。对于 $f$ 和 $g$ 均可导的情形，$f(x)^{g(x)}$ 的导数通式如下：

$$D\left[f(x)^{g(x)}\right] = f(x)^{g(x)} \left[ g'(x) \ln f(x) + g(x) \frac{f'(x)}{f(x)} \right]$$

在这个公式中：

+ $f(x)^{g(x)}$ 是原函数。
+ $f'(x)$ 是 $f(x)$ 的导数。
+ $\ln f(x)$ 是 $f(x)$ 的自然对数。
+ $g'(x)$ 是 $g(x)$ 的导数。

> 也可以将函数改写为指数形式 $f(x)^{g(x)} = e^{g(x)\ln f(x)}$，再对指数中的乘积同时应用链式法则和乘积法则，从而得到这个公式。

## 例 1

函数 $y = x^{2x}$ 在 $x > 0$ 时有定义，其导数计算如下。

首先，对等式两边取自然对数：

$$\ln y = \ln(x^{2x})$$

根据对数性质 $\log_a(b^c) = c \cdot \log_a(b)$，可将等式改写为：

$$\ln y = 2x\ln(x)$$

由于 $\ln y$ 是 $x$ 的复合函数，根据链式法则，对左侧关于 $x$ 求导得到：

$$D[\ln y] = \frac{1}{y} \cdot y'$$

右侧 $2x\ln(x)$ 是乘积，因此应用乘积法则：

$$D[2x\ln(x)] = 2\ln(x) + 2x \cdot \frac{1}{x} = 2\ln(x) + 2$$

令两个导数相等，得到：

$$\frac{1}{y} \cdot y' = 2\ln(x) + 2$$

等式两边乘以 $y$，并记住 $y = x^{2x}$，得到：

$$y' = x^{2x}(2\ln(x) + 2)$$

因此，$y = x^{2x}$ 的导数为 $x^{2x}(2\ln(x) + 2)$。

## 例 2

函数 $y = x^{\ln(x)}$ 在 $x > 0$ 时有定义，其导数计算如下。

对等式两边取自然对数并使用对数性质，得到：

$$\ln y = \ln(x)\ln(x) = \ln^2(x)$$

左侧的导数与之前相同，为 $\frac{1}{y}y'$。对于右侧，$\ln^2(x)$ 是一个复合函数，外层函数为 $t^2$，内层函数为 $\ln(x)$，因此根据链式法则：

$$D[\ln^2(x)] = 2\ln(x) \cdot \frac{1}{x}$$

令两个导数相等，并将等式两边乘以 $y = x^{\ln(x)}$，得到：

$$y' = x^{\ln(x)} \cdot \frac{2\ln(x)}{x}$$

因此，$y = x^{\ln(x)}$ 的导数为 $\dfrac{2\ln(x)}{x}x^{\ln(x)}$。

## 例 3

另一个例子是指数为三角函数的函数：

$$y = x^{2\cos(x)}$$

该函数在 $x > 0$ 时有定义。对等式两边取自然对数，得到：

$$\ln y = 2\cos(x)\ln(x)$$

左侧的导数为 $\frac{1}{y}y'$。右侧是 $2\cos(x)$ 与 $\ln(x)$ 的乘积，因此应用乘积法则：

$$D[2\cos(x)\ln(x)] = -2\sin(x)\ln(x) + \frac{2\cos(x)}{x}$$

令两个导数相等，并将等式两边乘以 $y = x^{2\cos(x)}$，得到：

$$y' = x^{2\cos(x)} \left( \frac{2\cos(x)}{x} - 2\sin(x)\ln(x) \right)$$

因此，$y = x^{2\cos(x)}$ 的导数为 $x^{2\cos(x)} \left( \frac{2\cos(x)}{x} - 2\sin(x)\ln(x) \right)$。

> 在每个例子中，都可以将函数写成 $e^{g(x)\ln f(x)}$ 后对指数形式求导来验证结果，也可以直接将其代入文章开头给出的通式进行验证。
