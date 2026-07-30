---
title: 齐次三角方程
title_en: Homogeneous Trigonometric Equations
source: https://algebrica.org/homogeneous-trigonometric-equations/
license: CC BY-NC 4.0
tags:
  - tangent
  - trigonometric-equation
  - trigonometric-identities
translation:
  status: current
  source_hash: 6cd6eb556e13d426b84900174b6d8c9ff35443a90158640952c380cba45d2a6a
  translator: omp
  updated: "2026-07-29T13:49:20.862Z"
---
## 什么是齐次三角方程

齐次三角方程是这样一种[三角方程](../trigonometric-equations/)，其中每一项都涉及三角函数，例如[正弦和余弦](../sine-and-cosine/)，且各项的次数相同。一次齐次方程的一般形式为：

$$a\sin x + b\cos x = 0$$

每一项的次数为 $1$，其中 $a$ 和 $b$ 是[实系数](../types-of-numbers/)。一般的一次三角方程为：

$$a\sin x + b\cos x + c = 0$$

当常数项满足 $c = 0$ 时，该方程为齐次方程。同样的思想可推广到二次，此时仅出现二次项：

$$a\sin^2 x + b\sin x\cos x + c\cos^2 x = 0$$

> 该定义可推广到三次、四次及更高次。在所有情形下，每一项都必须涉及同次幂的三角[函数](../functions/)，从而使方程保持齐次。

次数为 $n$ 的齐次方程可通过将每一项除以 $\cos^n x$ 来求解，从而将其转化为关于 $\tan x$ 的[多项式方程](../polynomial-equations/)。

## 除以余弦及余弦为零的情形

将每一项除以 $\cos^n x$ 仅在 $\cos x \neq 0$ 时才有效。余弦为零的值 $x = \frac{\pi}{2} + k\pi$ 被该除法排除在外，必须单独检验，否则可能丢失某些解。

验证很直接。当 $\cos x = 0$ 时，正弦等于 $\pm 1$，因此将这些值代入 $n$ 次齐次方程后，仅剩下 $\sin x$ 以 $n$ 次幂出现的那一项。对于二次方程 $a\sin^2 x + b\sin x\cos x + c\cos^2 x = 0$，这一项为 $a\sin^2 x$，化简后即为 $a$。因此，$x = \frac{\pi}{2} + k\pi$ 恰好在 $a = 0$ 时为解，即 $\sin x$ 的最高次项不存在时。

> 实际操作中，只需检验 $x = \frac{\pi}{2} + k\pi$ 是否满足原方程。若满足，则将这些值添加到由 $\tan x$ 的方程所得的解中。若不满足，则除以 $\cos^n x$ 不会丢失任何解，可以直接使用该方法。

## 例 1

考虑一次齐次三角方程：

$$\sin x - \sqrt{3}\cos x = 0$$

- - -

在除法之前，注意当 $x = \frac{\pi}{2} + k\pi$ 时，$\sin x = \pm 1$ 且 $\cos x = 0$，因此左边等于 $\pm 1$，不可能为零。余弦为零的值不是解，因此可以除以 $\cos x$，得到：

$$\frac{\sin x}{\cos x} - \sqrt{3} = 0$$

由于正弦与余弦之比是[正切](../tangent-and-cotangent/)，该方程可以用 $\tan x$ 改写：

$$\tan x = \sqrt{3}$$

满足此方程的值为：

$$x = \arctan(\sqrt{3}) = \frac{\pi}{3}$$

由于正切以 $\pi$ 为周期，通解为：

$$x = \frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$$

每当[三角恒等式](../trigonometric-identities/)允许将方程改写为齐次形式时，这样做通常更可取，因为它简化了计算。

## 例 2

考虑二次三角方程：

$$\sin^2 x + \sin 2x - \cos^2 x = 0$$

该方程目前不是齐次的，因为各项的次数不尽相同。具体而言，$\sin 2x$ 是一次项，而 $\sin^2 x$ 和 $\cos^2 x$ 是二次项。因此，此时尚不能将每一项除以 $\cos^2 x$，因为一次项无法化为便于求解的表达式。该方法仅当所有项的次数相同时才适用。

- - -

利用[三角恒等式](../trigonometric-identities/)中的二倍角公式，$\sin 2x$ 可改写为 $2\sin x\cos x$。方程变为：

$$\sin^2 x + 2\sin x\cos x - \cos^2 x = 0$$

现在这是一个二次齐次方程。$x = \frac{\pi}{2} + k\pi$ 使左边等于 $1$，故这些值不是解，可以将每一项除以 $\cos^2 x$：

$$\frac{\sin^2 x}{\cos^2 x} + \frac{2\sin x\cos x}{\cos^2 x} - \frac{\cos^2 x}{\cos^2 x} = 0$$

- - -

化简各项得到关于 $\tan x$ 的[二次方程](../quadratic-equations/)：

$$\tan^2 x + 2\tan x - 1 = 0$$

代入 $t = \tan x$，方程变为：

$$t^2 + 2t - 1 = 0$$

应用[求根公式](../quadratic-formula/)：

$$t = \frac{-2 \pm \sqrt{4 + 4}}{2} = \frac{-2 \pm 2\sqrt{2}}{2} = -1 \pm \sqrt{2}$$

两个解为：

$$t_1 = -1 + \sqrt{2}, \quad t_2 = -1 - \sqrt{2}$$

- - -

代回 $t = \tan x$ 得：

$$\tan x = -1 + \sqrt{2} \quad \text{且} \quad \tan x = -1 - \sqrt{2}$$

因此通解为：

$$
\begin{align}
x_1 &= \arctan(-1 + \sqrt{2}) + k\pi, \quad k \in \mathbb{Z} \\[6pt]
x_2 &= \arctan(-1 - \sqrt{2}) + k\pi, \quad k \in \mathbb{Z}
\end{align}
$$

## 例 3

一个含有非零常数项的三角方程通常可以化为齐次方程。考虑此二次方程：

$$2\sin^2 x - 3\sin x\cos x + 3\cos^2 x = 1$$

右端的常数使各项无法具有相同次数，因为 $1$ 的次数为零。[勾股恒等式](../pythagorean-identity/) 提供了恢复齐次性的工具，因为它使常数可以写成二次表达式：

$$1 = \sin^2 x + \cos^2 x$$

- - -

将 $1$ 用该恒等式替换，并将所有项移到左端，得到：

$$2\sin^2 x - 3\sin x\cos x + 3\cos^2 x - \sin^2 x - \cos^2 x = 0$$

合并同类项后得到二次齐次方程：

$$\sin^2 x - 3\sin x\cos x + 2\cos^2 x = 0$$

$x = \frac{\pi}{2} + k\pi$ 使左端等于 $1$，因此这些值不是解，可以除以 $\cos^2 x$。逐项相除后，得到关于 $\tan x$ 的二次方程：

$$\tan^2 x - 3\tan x + 2 = 0$$

- - -

代入 $t = \tan x$，对[二次方程](../quadratic-equations/)因式分解：

$$t^2 - 3t + 2 = (t - 1)(t - 2) = 0$$

两个根为 $t = 1$ 和 $t = 2$，分别对应：

$$\tan x = 1 \quad \text{且} \quad \tan x = 2$$

因此通解为：

$$
\begin{align}
x_1 &= \frac{\pi}{4} + k\pi, \quad k \in \mathbb{Z} \\[6pt]
x_2 &= \arctan(2) + k\pi, \quad k \in \mathbb{Z}
\end{align}
$$

## 例 4

下面的方程展示了余弦为零的值确为解的情形，因此预先检验必不可少。考虑此二次齐次方程：

$$\sin x\cos x - \sqrt{3}\cos^2 x = 0$$

$\sin^2 x$ 项缺失，即 $\sin x$ 最高次幂的系数 $a$ 为零。根据上文建立的判据，值 $x = \frac{\pi}{2} + k\pi$ 应为解。代入验证：$\sin x = \pm 1$ 和 $\cos x = 0$ 给出 $\pm 1 \cdot 0 - \sqrt{3} \cdot 0 = 0$。这些值满足方程，构成第一族解：

$$x = \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z}$$

- - -

对于其余解，在 $\cos x \neq 0$ 处，每一项除以 $\cos^2 x$，得到关于 $\tan x$ 的方程：

$$\frac{\sin x\cos x}{\cos^2 x} - \sqrt{3}\frac{\cos^2 x}{\cos^2 x} = 0$$

化简各项后，方程化为：

$$\tan x - \sqrt{3} = 0$$

由此得到 $\tan x = \sqrt{3}$，其通解为：

$$x = \frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}$$

- - -

完整解集合并了所得的两族解：

$$
\begin{align}
x_1 &= \frac{\pi}{2} + k\pi, \quad k \in \mathbb{Z} \\[6pt]
x_2 &= \frac{\pi}{3} + k\pi, \quad k \in \mathbb{Z}
\end{align}
$$

将原方程因式分解为 $\cos x(\sin x - \sqrt{3}\cos x) = 0$ 也可得到同样结论，该分解直接分离出两个分支。第一个因子给出余弦为零处的解，第二个因子给出从 $\tan x$ 的方程所得的解。这证实分支 $\cos x = 0$ 确为解，若不预先检验便直接相除，则会丢失该解。
