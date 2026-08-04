---
title: 链式法则
title_en: The Chain Rule
source: https://algebrica.org/chain-rule/
license: CC BY-NC 4.0
tags:
  - chain-rule
  - composite-functions
  - derivatives
  - differentiation-rules
translation:
  status: current
  source_hash: 53121345a55f444ec76e0433996de50c35cf3217ff37a9b5c144e54f24c95530
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 引言

设 $g$ 在 $x$ 处可导，且 $f$ 在 $z = g(x)$ 处可导。则复合函数 $y = f(g(x))$ 在 $x$ 处可导，其[导数](../derivatives/)等于：将 $f$ 的导数在 $g(x)$ 处取值，再乘以 $g$ 在 $x$ 处的导数：

$$D[f(g(x))] = f'(g(x)) \cdot g'(x)$$

这个结果称为链式法则。它说明，对复合函数求导时，应将外层函数的导数在内层函数处取值，再乘以内层函数的导数。

在莱布尼茨记号下，若 $y = f(u)$ 且 $u = g(x)$，链式法则写作：

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

## 证明

固定点 $x$，并记 $z = g(x)$。直接从[极限](../limits/)出发对复合函数求导比较棘手，因为差商的自然变形需要除以 $g(x+h) - g(x)$，而当 $h$ 任意接近 $0$ 时，这个量可能为零。为避开这个问题，我们用一个不涉及除法的辅助函数记录 $f$ 在 $z$ 处的导数。在 $f$ 的定义域上定义 $\varphi$：

$$
\varphi(w) =
\begin{cases}
\dfrac{f(w) - f(z)}{w - z} & w \neq z \\[8pt]
f'(z) & w = z
\end{cases}
$$

由于 $f$ 在 $z$ 处可导，当 $w \to z$ 时，差商趋于 $f'(z)$，这正是我们赋予 $\varphi$ 在 $z$ 处的值。因此，辅助函数在 $z$ 处[连续](../continuous-functions/)：

$$\lim_{w \to z} \varphi(w) = f'(z) = \varphi(z)$$

从定义直接可知，$\varphi$ 满足恒等式：

$$f(w) - f(z) = \varphi(w)(w - z)$$

当 $w \neq z$ 时，这是 $\varphi$ 的定义乘以 $w - z$；当 $w = z$ 时，两边都为零，所以该恒等式对所有 $w$ 都成立，没有例外。

在 $w = g(x+h)$ 处计算这个恒等式，此时 $w - z = g(x+h) - g(x)$。再除以 $h \neq 0$，复合函数的差商就分解为乘积：

$$\frac{f(g(x+h)) - f(g(x))}{h} = \varphi(g(x+h)) \cdot \frac{g(x+h) - g(x)}{h}$$

现在令 $h \to 0$。内层函数 $g$ 在 $x$ 处可导，因而在该点连续，所以 $g(x+h) \to g(x) = z$。由于 $\varphi$ 在 $z$ 处连续，复合后有 $\varphi(g(x+h)) \to \varphi(z) = f'(z)$。第二个因子是 $g$ 在 $x$ 处的差商，趋于 $g'(x)$。因此：

$$
\begin{align}
D[f(g(x))] &= \lim_{h \to 0} \left( \varphi(g(x+h)) \cdot \frac{g(x+h) - g(x)}{h} \right) \\[6pt]
&= f'(z) \cdot g'(x) \\[6pt]
&= f'(g(x)) \cdot g'(x)
\end{align}
$$

> 恒等式 $f(w) - f(z) = \varphi(w)(w - z)$ 正是朴素计算无法提供的关键步骤。它乘以 $w - z$ 而不是相除，因此即使在 $g(x+h) = g(x)$ 的那些 $h$ 值处也仍然有效；而在这些值处，除以 $g(x+h) - g(x)$ 恰恰会失效。

## 第一个例子

我们来计算下面这个复合函数的导数：

$$y = f(g(x)) = \sin(3x^2 + 2x)$$

在这个例子中：

+ 内层函数为 $g(x) = 3x^2 + 2x$。
+ 外层函数为 $f(t) = \sin(t)$，其中 $t = g(x) = 3x^2 + 2x$。

外层函数 $f(t) = \sin(t)$ 的导数为：

$$f'(t) = \cos(t)$$

代入 $t = g(x)$，得到：

$$f'(g(x)) = \cos(3x^2 + 2x)$$

内层函数 $g(x) = 3x^2 + 2x$ 的导数为：

$$g'(x) = 6x + 2$$

应用链式法则，将两个导数相乘：

$$D[f(g(x))] = f'(g(x)) \cdot g'(x) = (6x + 2)\cos(3x^2 + 2x)$$

因此，$y = \sin(3x^2 + 2x)$ 的导数为 $(6x + 2)\cos(3x^2 + 2x)$。

## 莱布尼茨记号下的链式法则

在莱布尼茨记号下，计算通过显式换元进行。考虑函数：

$$y = \ln(x^2 + 1)$$

令 $u = x^2 + 1$，函数就分解为 $y = \ln(u)$ 且 $u = x^2 + 1$。两个导数为：

$$\frac{dy}{du} = \frac{1}{u}, \qquad \frac{du}{dx} = 2x$$

根据链式法则，$y$ 对 $x$ 的导数是这两个导数的乘积：

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \frac{1}{u} \cdot 2x$$

由于结果必须用原变量表示，我们将 $u = x^2 + 1$ 代回表达式：

$$\frac{dy}{dx} = \frac{2x}{x^2 + 1}$$

> 最后代入 $u = g(x)$，对应于在撇号记号中将 $f'$ 在 $g(x)$ 而不是 $x$ 处取值。遗漏这一步，是应用该法则时最常见的错误之一。

## 特殊情形

当外层函数是幂函数、指数函数或对数函数时，链式法则会产生计算中反复出现的公式。对于可导函数 $f$：

$$
\begin{align}
D[f(x)^a] &= a[f(x)]^{a-1}f'(x) \\[14pt]
D\left[e^{f(x)}\right] &= e^{f(x)}f'(x) \\[6pt]
D[\ln f(x)] &= \frac{f'(x)}{f(x)}
\end{align}
$$

第一式适用于任意实指数 $a$，第三式要求 $f(x) > 0$。这三个公式分别由链式法则与外层函数 $t^a$、$e^t$ 和 $\ln(t)$ 得到。

例如，要对 $y = (x^3 + 2)^{50}$ 求导，无需展开这个幂。对 $f(x) = x^3 + 2$ 和 $a = 50$ 应用第一式，得到：

$$D[(x^3 + 2)^{50}] = 50(x^3 + 2)^{49} \cdot 3x^2 = 150x^2(x^3 + 2)^{49}$$

幂函数公式也适用于根式，因为 $\sqrt{f(x)} = f(x)^{1/2}$。要对 $y = \sqrt{x^2 + 1}$ 求导，我们对 $f(x) = x^2 + 1$ 和 $a = \frac{1}{2}$ 应用该公式：

$$D\left[\sqrt{x^2 + 1}\right] = \frac{1}{2}(x^2 + 1)^{-1/2} \cdot 2x = \frac{x}{\sqrt{x^2 + 1}}$$

因此，$y = \sqrt{x^2 + 1}$ 的导数为 $\dfrac{x}{\sqrt{x^2 + 1}}$。

> 幂函数公式只适用于指数为常数的情形。对于[复合幂函数](../derivative-of-composite-power-functions/)，也就是底数和指数都依赖于 $x$ 的 $f(x)^{g(x)}$ 型函数，需要使用相关的技巧。

## 与乘积法则结合

在大多数计算中，链式法则会与乘积法则或商法则配合使用，而不是单独出现。基本的[求导法则](../differentiation-rules/)负责处理表达式的代数结构，而链式法则负责处理一个函数嵌套在另一个函数中的情形。考虑函数：

$$y = x^2 e^{\sin(x)}$$

函数 $x^2$ 与 $e^{\sin(x)}$ 构成乘积，因此求导从乘积法则开始：

$$D\left[x^2 e^{\sin(x)}\right] = 2xe^{\sin(x)} + x^2 D\left[e^{\sin(x)}\right]$$

剩余因子 $e^{\sin(x)}$ 是一个复合函数，外层函数为 $e^t$，内层函数为 $\sin(x)$，因此由链式法则：

$$D\left[e^{\sin(x)}\right] = e^{\sin(x)}\cos(x)$$

将这个结果代入上一个表达式，并提取公因子 $xe^{\sin(x)}$，得到：

$$D\left[x^2 e^{\sin(x)}\right] = 2xe^{\sin(x)} + x^2 e^{\sin(x)}\cos(x) = xe^{\sin(x)}(2 + x\cos(x))$$

因此，$y = x^2 e^{\sin(x)}$ 的导数为 $xe^{\sin(x)}(2 + x\cos(x))$。

## 推广到多重复合

链式法则可以推广到包含三个或更多函数的复合。例如，给定 $y = f(g(h(x)))$，其导数为：

$$D[f(g(h(x)))] = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)$$

每个因子都是复合函数中某个函数的导数，并且取值于后续所有函数的复合结果。这个模式可以推广到任意有限层数的嵌套函数。对于 $y = f_1(f_2(\cdots f_n(x)\cdots))$，导数由以下乘积给出：

$$f_1'(f_2(\cdots f_n(x)\cdots)) \cdot f_2'(f_3(\cdots f_n(x)\cdots)) \cdots f_{n-1}'(f_n(x)) \cdot f_n'(x)$$

在实际应用中，求导从最外层函数向内层函数进行，每一步依次求导，再将所得结果相乘。

- - -

例如，考虑 $y = \sin(e^{3x})$。这个复合函数包含三个函数：

$$
\begin{align}
h(x) &= 3x \\[6pt]
g(t) &= e^t \\[6pt]
f(s) &= \sin(s)
\end{align}
$$

从外向内应用链式法则，得到：

$$
\begin{align}
D[\sin(e^{3x})] &= \cos(e^{3x}) \cdot e^{3x} \cdot 3 \\[6pt]
&= 3e^{3x}\cos(e^{3x})
\end{align}
$$

因此，$y = \sin(e^{3x})$ 的导数为 $3e^{3x}\cos(e^{3x})$。
