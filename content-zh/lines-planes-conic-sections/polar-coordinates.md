---
title: 极坐标
title_en: Polar Coordinates
source: https://algebrica.org/polar-coordinates/
license: CC BY-NC 4.0
tags:
  - cartesian-coordinates
  - coordinate-transformation
  - polar-coordinates
  - spherical-coordinates
translation:
  status: current
  source_hash: 6cdbe52fd0592d53db05ca7fe12755b80bf251e78f94300c3bbb6306dc93bf7e
  translator: omp
  updated: "2026-07-31T09:30:28.370Z"
---
## 点的径向与角向描述

笛卡尔坐标系通过将平面中的点投影到两条相互垂直的坐标轴上来描述该点，这赋予了水平和垂直方向以特殊地位。在许多问题中，到一个固定点的距离以及相对于一条固定射线的方向是更自然的描述量，由此引出了极坐标系。在平面中固定如下要素：

+ 一个点 $O$，称为极点
+ 从 $O$ 出发的一条参考半直线，称为极轴
+ 一个逆时针方向

每一个点 $Q\neq O$ 都确定了一个到极点的距离 $\rho=|OQ|$，以及极轴与射线 $OQ$ 之间的一个有向[角](../angles-and-angular-measure/) $\theta$。有序对 $(\rho,\theta)$ 是 $Q$ 的一组极坐标。第一个分量 $\rho$ 是[径矢](../vectors/)，第二个分量 $\theta$ 是极角。

![图 1](/assets/lines-planes-conic-sections/svg/polar-coordinates-1.zh.svg)

设 $(x,y)$ 是 $Q$ 的笛卡尔坐标，$(\rho,\theta)$ 是其极坐标。考虑由原点 $O$、点 $Q$ 及其在 $x$ 轴上的投影所构成的[直角三角形](../right-triangle-trigonometry/)。斜边是长度为 $\rho$ 的线段 $OQ$，原点处的角为 $\theta$。通过 $\theta$ 的[正弦与余弦](../sine-and-cosine/)将该线段分解为水平和垂直分量，可得：

$$
\begin{align}
x &= \rho\cos\theta \\[6pt]
y &= \rho\sin\theta
\end{align}
$$

该点可通过将与极轴成角 $\theta$ 的长度为 $\rho$ 的线段投影到各坐标轴上来重建。反之，若从 $Q$ 的笛卡尔描述出发，对同一直角三角形应用[勾股定理](../pythagorean-theorem/)，便得到径向坐标：

$$\rho=\sqrt{x^2+y^2}$$

量 $\rho$ 是该点到原点的欧几里得距离，不随所取方向而变。

> 将平面视为复平面时，有序对 $(\rho,\theta)$ 给出了复数 $z=x+iy$ 的[三角形式](../complex-numbers-trigonometric-form/) $z=\rho(\cos\theta+i\sin\theta)$ 与[指数形式](../complex-numbers-exponential-form/) $z=\rho e^{i\theta}$，其中 $\rho$ 为模，$\theta$ 为辐角。

## 确定角度 $\theta$

给定一点的笛卡尔坐标，求出 $\rho$ 很直接，而确定 $\theta$ 则需要更谨慎。相关三角函数在整个圆周上并非单射，直接通过正切求角会留下必须借助几何消解的歧义。若 $x\neq 0$，将第二个变换公式除以第一个：

$$\frac{y}{x}=\frac{\rho\sin\theta}{\rho\cos\theta}$$

由于 $\rho>0$，因子 $\rho$ 相消：

$$\frac{y}{x}=\frac{\sin\theta}{\cos\theta}$$

根据[正切函数](../tangent-function/)的定义，得到：

$$\tan\theta=\frac{y}{x}$$

此方程本身并不能唯一确定 $\theta$，因为：

$$\tan\theta=\tan(\theta+\pi)$$

正确的角度根据该点所在的[象限](../unit-circle/)来选取。$\theta$ 的值取满足以下条件的角度：

$$\cos\theta=\frac{x}{\rho}\qquad\sin\theta=\frac{y}{\rho}$$

这两个条件可以唯一确定 $\theta$，因为 $\cos\theta$ 与 $\sin\theta$ 的正负号确定象限，从而消解了仅凭正切遗留的歧义。

若 $Q=O$，则 $\rho=0$。此时角度坐标失去意义，因为从极点出发的每一条射线都经过原点，角度不再承载几何含义。原点写作：

$$O=(0,\theta)\quad\forall\ \theta$$

当径向距离为零时，角度信息随之坍缩。

## 极坐标的非唯一性

极坐标并不唯一。对任意整数 $k$，有：

$$(\rho,\theta)=(\rho,\theta+2\pi k)$$

同一个几何点也可以这样表示：取径向坐标的相反数，同时将角度坐标加上 $\pi$。将径向线段反向并旋转半周，端点保持不变，故：

$$(\rho,\theta)=(-\rho,\theta+\pi)$$

因此，有无穷多对坐标表示同一点。施加如下约束即可得到一个规范表示：

$$\rho\ge 0,\qquad\theta\in[0,2\pi)$$

这种非唯一性源于平面的旋转对称性：角度具有周期性，且方向可以沿相反朝向遍历。

## 例题 1

我们完成一个从直角坐标到极坐标的完整转换。所选的点位于第二象限，这里正切的歧义性变得相关，必须明确加以解决。考虑该点：

$$(x,y)=(-3,\ \sqrt{3})$$

我们先计算径向坐标。应用毕达哥拉斯关系：

$$\rho=\sqrt{(-3)^2+(\sqrt{3})^2}=\sqrt{9+3}=2\sqrt{3}$$

然后我们计算角坐标。$\theta$ 的正切为：

$$\tan\theta=\frac{\sqrt{3}}{-3}=-\frac{\sqrt{3}}{3}$$

该[方程](../equations/)在 $[0,2\pi)$ 中有两个解，相差 $\pi$。为了选择正确的解，我们注意到该点具有 $x<0$ 和 $y>0$，因此位于第二象限。与该象限一致的角是：

$$\theta=\frac{5\pi}{6}$$

我们直接验证：

$$\cos\frac{5\pi}{6}=-\frac{\sqrt{3}}{2}<0$$

$$\sin\frac{5\pi}{6}=\frac{1}{2}>0$$

这些符号分别与 $x$ 和 $y$ 一致。该点的一个极坐标表示为：

$$\left(2\sqrt{3},\ \frac{5\pi}{6}\right)$$

## 例题 2

从极坐标到直角坐标的转换更为直接，因为它不需要象限分析。我们选择一个极坐标形式简洁但直角坐标形式不明显的点，因此计算值得完整进行。考虑由如下极坐标给出的点：

$$\left(\sqrt{6},\ \frac{7\pi}{4}\right)$$

角 $\frac{7\pi}{4}$ 位于第四象限，差一点完成一整周。我们直接应用变换公式：

$$x=\rho\cos\theta=\sqrt{6}\cos\frac{7\pi}{4}$$

回忆 $\cos\frac{7\pi}{4}=\frac{\sqrt{2}}{2}$，我们得到：

$$x=\sqrt{6}\cdot\frac{\sqrt{2}}{2}=\frac{\sqrt{12}}{2}=\frac{2\sqrt{3}}{2}=\sqrt{3}$$

对于竖直分量：

$$y=\rho\sin\theta=\sqrt{6}\sin\frac{7\pi}{4}$$

由于 $\sin\frac{7\pi}{4}=-\frac{\sqrt{2}}{2}$，同样的计算给出：

$$y=\sqrt{6}\cdot\left(-\frac{\sqrt{2}}{2}\right)=-\sqrt{3}$$

> 角 $\frac{7\pi}{4}$ 位于第四象限，可写成 $2\pi-\frac{\pi}{4}$。在第四象限正弦为负，且与[参考角](../reduction-formulas-and-reference-angles/) $\frac{\pi}{4}$ 有相同的绝对值，故 $\sin\frac{7\pi}{4}=-\frac{\sqrt{2}}{2}$

该点的直角坐标表示为：

$$(x,y)=\left(\sqrt{3},\ -\sqrt{3}\right)$$

## 规范表示与双射性

极坐标的非唯一性引出了一个自然的问题。虽然许多数对 $(\rho,\theta)$ 表示同一个点，我们能否选出唯一的优选代表？只要对坐标的值域加以适当限制，这便是可能的。考虑对应关系 $f$，它为每个点 $Q\neq O$ 指派满足以下条件的数对 $(\rho,\theta)$：

$$\rho>0,\qquad\theta\in[0,2\pi)$$

在这些限制下，穿孔平面 $\mathbb{R}^2\setminus\{O\}$ 的每个点恰好确定一个这样的数对，而每个容许数对也恰好确定一个点。映射 $f$ 是穿孔平面与半开条带 $(0,+\infty)\times[0,2\pi)$ 之间的一个[双射](../inverse-function/)。

要理解为何单射性成立，取两个不同的点 $Q$ 和 $Q'$，它们都不等于 $O$。每个点确定从极点出发的唯一射线。

+ 若这两条射线不同，它们与极轴形成不同的角，因此角坐标不同。
+ 若两个点在同一条射线上，它们到极点的距离不同，因此径坐标不同。

无论哪种情况，关联的数对都不可能重合。

- - -

反向蕴涵可通过逆转构造过程得到。给定任意数对 $(\rho,\theta)$，满足 $\rho>0$ 和 $\theta\in[0,2\pi)$，取与极轴成角 $\theta$ 的射线，并在其上标记到极点距离为 $\rho$ 的点。这产生唯一的点 $Q\neq O$，映回原来的数对。一旦要求 $\rho$ 严格为正，便不再有歧义。

- - -

原点单独处理。当 $\rho=0$ 时，从极点出发的每条射线都经过同一个点，因此将原点纳入定义域会破坏单射性。它的坐标写作 $(0,\theta)$，其中 $\theta$ 任意取值，并约定在此退化情形中角分量不携带任何几何信息。

## 空间中的极坐标

极坐标通过一个径向距离和两个角度参数扩展到三维空间。设 $O$ 为空间中笛卡尔参考系的原点。对于具有笛卡尔坐标 $(x,y,z)$ 的点 $Q$，我们用 $\rho$ 表示到原点的欧几里得距离：

$$\rho=\sqrt{x^2+y^2+z^2}$$

为了描述 $Q$ 的方向，我们分两步进行。

+ 我们将 $Q$ 正交投影到平面 $XY$ 上，并用 $\theta$ 表示该投影相对于正 $x$ 轴的极角。
+ 我们引入角 $\psi$，从正 $z$ 轴量到线段 $OQ$。

![图 2](/assets/lines-planes-conic-sections/svg/polar-coordinates-2.zh.svg)

三元组 $(\rho,\theta,\psi)$ 给出了空间中点的径向和角度描述，其中 $\rho$ 是径向距离，$\theta$ 是 $XY$ 平面中的方位角，$\psi$ 是从正 $z$ 轴量起的天顶角。根据相关几何中的[直角三角形关系](../right-triangle-trigonometry/)：

$$
\begin{align}
x &= \rho\sin\psi\cos\theta \\[6pt]
y &= \rho\sin\psi\sin\theta \\[6pt]
z &= \rho\cos\psi
\end{align}
$$

通过将线段 $OQ$ 分解为长度为 $\rho\cos\psi$ 的竖直分量和长度为 $\rho\sin\psi$ 的水平分量，后者通过平面极坐标关系在平面内分解，即可恢复笛卡尔坐标。这种坐标系适合具有球对称性的问题，其中到原点的距离比与坐标轴的对齐更重要。

## 极坐标中的积分

极坐标适用于在具有径向对称性的平面区域上进行[积分](../definite-integrals/)。当一个区域由到原点的距离和角度范围描述时，笛卡尔坐标可能会掩盖其结构。在极坐标中，面积微元不是两个独立微分的乘积。由变化量 $d\rho$ 和 $d\theta$ 确定的小区域面积为：

$$dA=\rho\ d\rho\ d\theta$$

额外的因子 $\rho$ 的出现是因为圆弧的长度与到原点的距离成正比。在区域 $D$ 上的二重积分改写为：

$$\iint_D f(x,y)\ dx\ dy=\iint_{D'} f(\rho\cos\theta,\rho\sin\theta)\ \rho\ d\rho\ d\theta$$

其中 $D'$ 是 $(\rho,\theta)$ 平面中的对应区域。当问题的几何用径向方式表达时，这种变换简化了计算。
