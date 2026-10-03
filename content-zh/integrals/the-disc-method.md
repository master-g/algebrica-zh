---
title: 旋转体体积的圆盘法
title_en: The Disc Method for Volumes of Revolution
source: https://algebrica.org/the-disc-method/
license: CC BY-NC 4.0
tags:
  - calculus
  - disc-method
  - integral-applications
  - solids-of-revolution
  - volume
translation:
  status: current
  source_hash: 854b728f63c8cf3be1e32e22e2a4e82eda41ccfbb0f43f3dda00df893406ecc9
  translator: claude
  updated: "2026-10-03T00:00:00.000Z"
---
## 旋转生成的立体

圆盘法用于计算旋转体的体积；旋转体是平面区域绕一条固定直线旋转生成的立体。旋转过程中，区域中的每个点都描出一个[圆](../circumference/)，圆所在的平面垂直于旋转轴，所有这些圆的并集就构成了这个立体。

设 $f$ 是 $[a, b]$ 上的[连续](../continuous-functions/)函数，且 $f(x) \geq 0$，设 $R$ 是上方以图像 $y = f(x)$ 为界、下方以 $x$ 轴为界、两侧以直线 $x = a$ 和 $x = b$ 为界的区域。在这种情形下，$x$ 轴就是旋转轴。

![图 1](/assets/integrals/svg/the-disk-method-1.zh.svg)

区域 $R$ 绕 $x$ 轴旋转生成一个立体，记为 $S$，它[垂直于旋转轴的横截面](../volumes-by-parallel-cross-sections/)都是圆盘。

![图 2](/assets/integrals/svg/the-disk-method-2.zh.svg)


我们得到的立体像一个随 $x$ 减小而变粗的圆柱。怎样计算它的体积？先回顾底面半径为 $r$、高为 $h$ 的直圆柱的体积公式：

$$V = \pi r^2h \tag{1}$$

现在把区间 $[a, b]$ 分成 $n$ 个子区间，每个子区间的宽度为 $\Delta x = (b - a)/n$，分点满足：

$$a = x_0 < x_1 < \dots < x_n = b.$$

一个典型的子区间 $[x_{k-1}, x_k]$ 确定了 $S$ 的一个垂直于 $x$ 轴的薄片。在这个子区间内（不含端点）选取一点 $x_k^{*}$，在该点处度量图像的高度。然后用一个厚度为 $\Delta x$ 的圆柱来近似这个薄片，圆柱底面的半径等于图像在 $x_k^{*}$ 处的高度，即 $f(x_k^{*})$。对这个圆盘应用圆柱体积公式 $(1)$，得到：

$$\Delta V_k = \pi \big(f(x_k^{*})\big)^2 \Delta x$$

把这个做法推广开来，设想把立体在整个区间上分成许多薄片，将所有薄片的贡献相加，就得到 $S$ 的体积的如下近似：

$$V \approx \sum_{k=1}^{n} \pi \big(f(x_k^{*})\big)^2 \Delta x \tag{2}$$

右端是函数 $\pi(f(x))^2$ 在 $[a, b]$ 上的一个[黎曼和](../riemann-integrability-criteria/)。当划分中的 $\Delta x$ 趋于 $0$ 时，圆盘越来越薄，也越来越贴合立体的轮廓，所以这个和收敛到[定积分](../definite-integrals/)。因此，$R$ 绕 $x$ 轴旋转所生成的旋转体的体积可以表示为区间上的如下积分：

$$V = \int_a^b \pi \big(f(x)\big)^2 \ dx \tag{3}$$

位于 $x$ 处的圆盘的半径是函数值 $f(x)$，它的平方乘以 $\pi$，就是每个圆形底面的面积 $\pi r^2$。

- - -

旋转轴是 $y$ 轴时，同样的构造也适用。如果区域位于图像 $x = g(y)$ 与 $y$ 轴之间，其中 $c \leq y \leq d$ 且 $g(y) \geq 0$，那么它绕 $y$ 轴旋转会生成垂直于该轴的圆盘，$(3)$ 可以改写为：

$$V = \int_c^d \pi \big(g(y)\big)^2 \ dy \tag{4}$$

可以看到，两个变量的角色互换了，而构造体积所用的原理不变。

## 例题

作为例子，我们计算曲线 $y = \sqrt{x}$ 与 $x$ 轴之间、区间 $0 \leq x \leq 4$ 上的区域 $R$ 绕 $x$ 轴旋转所生成的立体的体积。所得立体是一个[旋转抛物面](../surface-area-of-revolution/)，像一只表面光滑的碗。

![图 3](/assets/integrals/svg/the-disk-method-3.zh.svg)

在 $x$ 处，垂直于旋转轴的横截面是半径为 $f(x) = \sqrt{x}$ 的圆盘，所以它的面积为 $\pi(\sqrt{x})^2 = \pi x$。由于旋转轴与 $x$ 轴重合，可以直接应用圆盘法，用 $(3)$ 计算体积，得到：

$$V = \int_0^4 \pi \big(\sqrt{x}\big)^2 \ dx$$

进行计算，得到：

$$V = \int_0^4 \pi x \ dx = \pi \int_0^4 x \ dx$$

然后利用[微积分基本定理](../fundamental-theorem-of-calculus/)，在区间端点处求值，算出体积：

$$V = \pi \left[ \frac{x^2}{2} \right]_0^4 = \pi \left( \frac{16}{2} - \frac{0}{2} \right) = 8\pi$$

因此，$R$ 旋转所得的抛物面的体积为 $8\pi$。


## 方法的适用条件

在什么条件下可以用 $(3)$ 和 $(4)$ 计算旋转体的体积？前面的构造用到了两个主要假设。

第一个假设是 $f$ 在 $[a, b]$ 上连续，这保证 $f$ [可积](../riemann-integrability-criteria/)，它的平方也可积，所以黎曼和收敛到给出体积的积分。连续性是充分条件，但不是必要条件。例如，对只有有限个[间断点](../discontinuities-of-real-functions/)的有界函数，这个方法同样适用。

第二个假设涉及区域相对于旋转轴的位置。当立体垂直于旋转轴的每个横截面都是完整的圆盘时，圆盘法适用；但如果区域与旋转轴分离，横截面就是圆环，这时可以使用[垫圈法](../the-washer-method/)。也可以改用[柱壳法](../the-shell-method/)。

- - -

当被旋转的区域位于图像与 $x$ 轴之间时，条件 $f(x) \geq 0$ 可以去掉。如果 $f(x) < 0$，连接旋转轴与图像的线段位于轴的下方，但它旋转后仍然生成一个圆盘。圆盘的半径是这条线段的长度，由 $f(x)$ 的[绝对值](../absolute-value/)给出。

例如，考虑图像上纵坐标为 $2$ 的一点和纵坐标为 $-2$ 的另一点。在这两种情形下，把该点与旋转轴之间的线段旋转一周，都生成半径为 $2$、面积为 $4\pi$ 的圆盘。因此，圆盘的半径总是正的。

于是一般地，横截面的面积为 $\pi|f(x)|^2 = \pi(f(x))^2$，所以即使 $f$ 取负值或在区间内变号，体积公式仍然成立。

同样的推理适用于绕任何一条平行于坐标轴的直线的旋转。如果图像 $y = f(x)$ 与水平直线 $y = c$ 之间的区域（其中 $a \leq x \leq b$ 且 $f(x) \geq c$）绕这条直线旋转，那么 $x$ 处的半径是距离 $f(x) - c$，体积变为：

$$\int_a^b \pi\big(f(x) - c\big)^2 \ dx$$

公式的结构与 $(3)$ 和 $(4)$ 基本相同，只是半径要从实际的旋转轴量起。
