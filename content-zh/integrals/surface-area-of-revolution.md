---
title: 旋转曲面的面积
title_en: Area of a Surface of Revolution
source: https://algebrica.org/surface-area-of-revolution/
license: CC BY-NC 4.0
tags:
  - arc-length
  - cone-frustum
  - definite-integral
  - integral-applications
  - parametric-curves
  - solids-of-revolution
  - surface-area
  - surfaces-of-revolution
translation:
  status: current
  source_hash: 7d64698796e73d58c739c7f5c8b86ca55d88cc7b50d6c3a5316bb2575020ca42
  translator: pi
  updated: "2026-09-22T12:43:32.000Z"
---
## 圆锥台的侧面积

本条目将看到，一段曲线的弧绕一条直线旋转所生成的曲面面积，是如何用[定积分](../definite-integrals/)计算的。正如相关各条目多次强调的那样，积分与几何有非常密切的联系，而不仅仅是分析工具。不过，在投入讲解之前，值得先退后一小步，回顾一些初等几何的概念。

为此，我们从正圆锥（即轴垂直于底面的圆锥）开始，设其斜高为 $\ell$。回忆一下，斜高是连接顶点与底面圆上一点的倾斜线段的长度，由公式给出：

$$\ell = \sqrt{h^2 + r^2} \tag{1}$$

这个表达式你应该非常熟悉，其中 $h$ 是圆锥的高，$r$ 是底面半径。它不是别的，正是应用于圆锥的[勾股定理](../pythagorean-theorem/)：斜高是直角三角形的斜边，$h$ 与 $r$ 是它的两条直角边。上面描述的圆锥在平面内展开为一个半径为 $\ell$ 的[扇形](../circumference/)，其弧长为 $2\pi r$，等于底面周长。由于扇形面积是半径与弧长乘积的一半，圆锥的侧面积可以写成：

$$S=\pi r\ell \tag{2}$$

现在考虑一个圆锥台，其半径为 $r_1$ 与 $r_2$（$r_1\lt r_2$），斜高为 $\ell$。我们用 $L_1$ 表示半径为 $r_1$ 的圆锥的斜高，用 $L_2$ 表示半径为 $r_2$ 的圆锥的斜高。这两个圆锥相似，因为它们有相同的顶点且底面平行，而它们的斜高满足 $L_2-L_1=\ell$。因此可以写出如下比例关系：

$$\frac{r_1}{L_1}=\frac{r_2}{L_2}$$

由这个比例以及三个斜高之间的关系，可得：

$$L_1=\frac{r_1\ell}{r_2-r_1} \qquad L_2=\frac{r_2\ell}{r_2-r_1}$$

圆锥台的侧面积由两个圆锥侧面积之差给出，公式 $(2)$ 可以改写为：

$$
\begin{align}
S &= \pi r_2L_2-\pi r_1L_1 \\[6pt]
  &= \frac{\pi\ell r_2^2}{r_2-r_1}-\frac{\pi\ell r_1^2}{r_2-r_1} \\[6pt]
  &= \frac{\pi\ell(r_2^2-r_1^2)}{r_2-r_1} \\[6pt]
  &= \pi(r_1+r_2)\ell
\end{align}
$$

现在引入平均半径 $\bar r=(r_1+r_2)/2$，以便把公式写得更紧凑：

$$S=2\pi\bar r\ell \tag{3}$$

注意，若两个半径相同，圆锥台退化为圆柱，面积变为 $2\pi r\ell$；若其中一个半径为零，则回到圆锥的侧面积。

## 从求和到积分

经过这段乏味的几何引言，我们终于来到与积分相关的部分。设 $f$ 是在[闭区间](../intervals/) $[a,b]$ 上非负的 $C^1$ 类[函数](../functions/)（即[可导](../derivatives/)且导数 $f'$ 连续），设 $\Sigma$ 是它的图像绕 $x$-轴完整旋转一周所生成的曲面。考虑区间的一个[分割](../riemann-integrability-criteria/)：

$$a=x_0 \lt x_1 \lt \dots \lt x_n=b$$

现在，在子区间 $[x_{k-1},x_k]$ 上，用连接两端点的弦代替曲线的弧。旋转这条弦生成一个圆锥台，其半径是两端点的纵坐标，斜高是弦本身的长度。回忆公式 $(1)$，得：

$$\ell_k=\sqrt{(\Delta x_k)^2+\big(f(x_k)-f(x_{k-1})\big)^2}$$

由[中值定理](../lagrange-theorem/)，存在子区间内部的一点 $\xi_k$，使纵坐标之差等于 $f'(\xi_k)\Delta x_k$。在根号下提取公因子 $(\Delta x_k)^2$，公式变为：

$$\ell_k=\sqrt{1+\big[f'(\xi_k)\big]^2} \ \Delta x_k$$

此时，按公式 $(3)$ 把各个圆锥台的贡献相加，就得到曲面面积，它近似地由下式给出：

$$\Sigma_n=\pi\sum_{k=1}^{n}\big(f(x_{k-1})+f(x_k)\big)\sqrt{1+\big[f'(\xi_k)\big]^2} \ \Delta x_k \tag{4}$$

小心！表达式 $(4)$ 不是黎曼和，因为每个被加项涉及同一子区间上的三个不同点：两个端点处的纵坐标，以及中值定理所提供的点处的导数。取[极限](../limits/)需要一点额外的工作，我们马上就会看到。

- - -

让我直说：下面的步骤初看可能很不直观，但我向你保证，再读一遍就会清楚得多。所以不要在胜利之前放弃战斗，再坚持一下。你感到疲惫的时刻，正是一切都变得显然的时刻。借助一点抽象（或者不如说，因为已经有人在我们之前做过），设：

$$M=\max_{[a,b]}\sqrt{1+[f'(x)]^2}$$

我们知道这个[最大值](../weierstrass-theorem/)存在，因为 $f'$ 在闭区间上连续。现在对每个下标 $k$，把两个纵坐标之和写出来，并分离出中值定理所提供的点 $\xi_k$ 处的值：

$$f(x_{k-1})+f(x_k)=2f(\xi_k)+\eta_k$$
$$\eta_k=\big(f(x_{k-1})-f(\xi_k)\big)+\big(f(x_k)-f(\xi_k)\big)$$

由于 $f$ 在[紧区间](../topology-of-the-real-line/)上连续，它也[一致连续](../uniform-continuity/)。设 $\delta=\max_{1\leq k\leq n}\Delta x_k$，用 $\omega(\delta)$ 表示它的一致连续模。点 $x_{k-1}$、$x_k$ 与 $\xi_k$ 彼此之间的距离至多为 $\delta$，因此 $|\eta_k|\leq2\omega(\delta)$ 成立。$\Sigma_n$ 与用点 $\xi_k$ 构造的和之间的差可以表示为：

$$\left|\Sigma_n-2\pi\sum_{k=1}^{n}f(\xi_k)\sqrt{1+\big[f'(\xi_k)\big]^2} \ \Delta x_k\right|\leq2\pi M\omega(\delta)(b-a)$$

让分割的网眼 $\delta$ 趋于零，一致连续性保证 $\omega(\delta)$ 趋于零，因此表达式右边消失。剩下的和现在是[连续函数](../continuous-functions/) $2\pi f\sqrt{1+(f')^2}$ 相对于点 $\xi_k$ 的黎曼和，由[黎曼可积判别法](../riemann-integrability-criteria/)可知，它收敛于该函数的积分。因此可以把曲面面积写成：

$$S=2\pi\int_a^b f(x)\sqrt{1+\big[f'(x)\big]^2} \ dx \tag{5}$$

对正则曲面，面积也有参数化定义。在现在的情形，它与刚才得到的极限一致，我们把它取作 $\Sigma$ 面积的定义。

> 注意，若 $f$ 变号，公式 $(5)$ 仍然有效，只需把 $f$ 换成 $|f|$，因为每个圆锥台的半径是曲线与轴之间的距离。[圆盘法](../the-disc-method/)需要澄清一点：那里半径以平方出现，因此[绝对值](../absolute-value/)是多余的。

## 曲面元素

公式 $(5)$ 是两个因子的乘积：为[弧长](../arc-length-of-a-curve/)引入的长度 $ds=\sqrt{1+[f'(x)]^2} \ dx$，以及曲线上的点旋转时画出的圆的周长。用 $r$ 表示点到旋转轴的距离，定义曲面元素为：

$$dS=2\pi r \ ds \tag{6}$$

公式的每个变体都是通过按问题的构型选择 $r$ 与 $ds$ 得到的，而不必每次都从头重做构造，这无疑非常有用。各种情形的概要，记住下表即可：

[class="table-1"]

|                                                   |                                                                             |
| ------------------------------------------------- | --------------------------------------------------------------------------- |
| $f$ 的图像绕 $x$-轴旋转                   | $$2\pi\int_a^b f(x)\sqrt{1+\big[f'(x)\big]^2} \ dx$$                        |
| $f$ 的图像绕 $y$-轴旋转（$a\geq0$）    | $$2\pi\int_a^b x\sqrt{1+\big[f'(x)\big]^2} \ dx$$                           |
| $f$ 的图像绕直线 $y=c$ 旋转                 | $$2\pi\int_a^b\lvert f(x)-c\rvert\sqrt{1+\big[f'(x)\big]^2} \ dx$$                        |
| 参数曲线绕 $x$-轴旋转               | $$2\pi\int_{t_0}^{t_1}\lvert y(t)\rvert\sqrt{\big[x'(t)\big]^2+\big[y'(t)\big]^2} \ dt$$ |

[/class]

第二行中半径是点的横坐标，条件 $a\geq0$ 防止曲线穿过旋转轴。最后一行使用参数形式的长度元素，也覆盖不是函数图像的曲线。若旋转时同一片曲面被覆盖多次，积分会按同样的重数计算其面积。

## 例 1

计算半径为 $r$ 的球面的面积，把它看作半圆 $f(x)=\sqrt{r^2-x^2}$ 绕 $x$-轴旋转生成的曲面。该函数在端点处不是 $C^1$ 类，因此我们在 $[-r+\varepsilon,r-\varepsilon]$ 上应用公式 $(5)$，再令 $\varepsilon\to0$ 取极限。对 $-r\lt x\lt r$，函数的导数为：

$$f'(x)=-\frac{x}{\sqrt{r^2-x^2}}$$

几步代数运算给出：

$$1+\big[f'(x)\big]^2=1+\frac{x^2}{r^2-x^2}=\frac{r^2}{r^2-x^2}$$

纵坐标的因子 $\sqrt{r^2-x^2}$ 与分母中的因子相消，公式 $(5)$ 中出现的乘积化为常数：

$$f(x)\sqrt{1+\big[f'(x)\big]^2}=\sqrt{r^2-x^2}\cdot\frac{r}{\sqrt{r^2-x^2}}=r$$

该乘积在端点处也允许取值为 $r$ 的连续延拓，因此[反常积分](../improper-integrals/)为：

$$S=2\pi\int_{-r}^{r}r \ dx=4\pi r^2$$

因此半径为 $r$ 的球面面积为 $4\pi r^2$，正如我们从中学带来的初等几何知识所知道的那样。注意球面带的面积只依赖于界定它的两个平行平面之间的距离，而不依赖于它们相对于球心的位置。这意味着球面带与由同样平面界定的外切圆柱面部分具有相同的面积。

## 例 2

现在考虑区间 $[0,4]$ 上的函数 $f(x)=\sqrt{x}$，把它的图像绕 $x$-轴旋转，得到体积由[圆盘法](../the-disc-method/)给出的抛物面。导数与被开方式为：

$$f'(x)=\frac{1}{2\sqrt{x}}$$
$$1+\big[f'(x)\big]^2=1+\frac{1}{4x}=\frac{4x+1}{4x}$$

纵坐标的因子 $\sqrt{x}$ 与根式的分母相消，被积函数化为线性函数的平方根：

$$f(x)\sqrt{1+\big[f'(x)\big]^2}=\sqrt{x}\cdot\frac{\sqrt{4x+1}}{2\sqrt{x}}=\sqrt{x+\frac{1}{4}}$$

计算这个同样立即可得的积分，得：

$$
\begin{align}
S &= 2\pi\int_0^4\sqrt{x+\frac{1}{4}} \ dx \\[6pt]
  &= 2\pi\cdot\frac{2}{3}\left[\left(x+\frac{1}{4}\right)^{3/2}\right]_0^4 \\[6pt]
  &= \frac{4\pi}{3}\left(\left(\frac{17}{4}\right)^{3/2}-\left(\frac{1}{4}\right)^{3/2}\right) \\[6pt]
  &= \frac{4\pi}{3}\cdot\frac{17\sqrt{17}-1}{8} \\[6pt]
  &= \frac{\pi}{6}\big(17\sqrt{17}-1\big)
\end{align}
$$

曲面面积等于 $\pi(17\sqrt{17}-1)/6$。$f$ 的导数在原点的[右邻域](../topology-of-the-real-line/)内无界，因此 $f$ 在闭区间上不是 $C^1$ 类，但定义在 $(0,4]$ 上的被积函数允许连续延拓到 $[0,4]$，因为因子 $f(x)$ 在原点处趋于零的速率与根式发散的速率相同。延拓在原点处的值为 $1/2$。

## 例 3

现在看[摆线](../arc-length-of-a-curve/)的一段拱，它由下面的参数方程描述，$t$ 在 $[0,2\pi]$ 内变化，$r$ 是圆的半径：

$$x(t)=r(t-\sin t)$$
$$y(t)=r(1-\cos t)$$

当我们把这拱绕 $x$-轴旋转时，可以重用计算弧长时已经得到的长度元素：

$$\sqrt{\big[x'(t)\big]^2+\big[y'(t)\big]^2}=2r\sin\frac{t}{2}$$

纵坐标用[半角恒等式](../trigonometric-identities/)改写为 $y(t)=2r\sin^2(t/2)$，被积函数随后只含 $t/2$ 的正弦的幂：

$$
\begin{align}
S &= 2\pi\int_0^{2\pi}2r\sin^2\frac{t}{2}\cdot2r\sin\frac{t}{2} \ dt \\[6pt]
  &= 8\pi r^2\int_0^{2\pi}\sin^3\frac{t}{2} \ dt \\[6pt]
  &= 16\pi r^2\int_0^{\pi}\sin^3u \ du
\end{align}
$$

最后一步是[换元](../integration-by-substitution/) $u=t/2$，它把 $dt$ 变为 $2 \ du$ 并把积分限减半。回忆一下，[正弦的奇次幂](../integral-of-trigonometric-functions/)的积分通过分离出一个因子并使用[基本恒等式](../pythagorean-identity/)来计算，它等于 $4/3$：

$$S=16\pi r^2\cdot\frac{4}{3}=\frac{64}{3}\pi r^2$$

> 曲面的面积一般不能定义为内接多面体面积的极限。即使面的直径趋于零，极限也可能依赖于多面体的构造方式，施瓦茨灯笼（Schwarz lantern）对圆柱就说明了这一点。用圆锥台近似避免了这种不确定性，因为它把每个元素的倾斜程度与生成曲线的相应弦联系起来。

## 结束语

最后补充几点注记，为刚才所讲内容的使用提供一些指引。

+ 公式 $(5)$ 是在 $f$ 非负且在 $[a,b]$ 上为 $C^1$ 类的假设下导出的，该假设使被积函数连续。如前两例所示，这是充分而非必要条件。例如，若 $f$ 在 $[a,b]$ 上连续，在有限个点之外为 $C^1$ 类，且被积函数的反常积分收敛，公式仍然有效。
+ 在表的第二行中，条件 $a\geq0$ 允许用 $x$ 作为半径。若图像穿过 $y$-轴，半径是 $|x|$，只有两个点纵坐标相同、横坐标互为相反数时，它们才生成同一个圆。对参数曲线同样必须检查曲面没有被多次覆盖。
+ [平行截面](../volumes-by-parallel-cross-sections/)方法返回的是精确体积，但近似圆柱的侧壁形成一个阶梯面，其面积一般不收敛于 $\Sigma$ 的面积。旋转体的体积与它的表面积需要两种不同的构造。
+ 当 $(5)$ 中的积分没有初等[原函数](../indefinite-integrals/)时，其值用[数值方法](../numerical-integration/)确定。
