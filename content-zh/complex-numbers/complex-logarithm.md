---
title: 复对数
title_en: Complex Logarithm
source: https://algebrica.org/complex-logarithm/
license: CC BY-NC 4.0
tags:
  - branch-cut
  - complex-argument
  - complex-exponential
  - complex-logarithm
  - complex-numbers
  - principal-logarithm
translation:
  status: current
  source_hash: e9e25c94a92f77ebdef6814d47fabc53e3a432ee4f762ef035c1c34ed4803bb7
  translator: omp
  updated: "2026-07-24T12:20:57.837Z"
---
## 定义

[实指数函数](../exponential-function/)是从 $\mathbb{R}$ 到 $(0,\infty)$ 的[双射](../functions/)，其[反函数](../inverse-function/)是实对数。[复指数函数](../eulers-formula/)以 $2\pi i$ 为周期，故它在 $\mathbb{C}$ 上不是单射。对每个 $w\in\mathbb{C}$ 及每个[整数](../integers/) $k\in\mathbb{Z}$，有：

$$e^{w+2k\pi i}=e^w$$

相差 $2\pi i$ 的整数倍的两个复数，其指数函数值相同。取定一个非零[复数](../complex-numbers/) $z$。以下方程的每个解 $w\in\mathbb{C}$ 都称为 $z$ 的一个复对数：

$$e^w=z$$

为求解此方程，将 $w=u+iv$ 写成 $u,v\in\mathbb{R}$，并将 $z$ 写成[指数形式](../complex-numbers-exponential-form/) $z=re^{i\theta}$，其中 $r=|z|>0$，$\theta$ 是 $z$ 的一个辐角。$e^w$ 可写为：

$$e^w=e^{u+iv}=e^u(\cos v+i\sin v)$$

等式 $e^w=z$ 成立当且仅当 $e^u=r$ 且对某个 $k\in\mathbb{Z}$ 有 $v=\theta+2k\pi$。由 $e^u=r$ 可得 $u=\ln r$。$z$ 的对数的完整[集合](../sets/)为：

$$\log z:=\{\ \ln|z|+i(\theta+2k\pi)\mid k\in\mathbb{Z}\ \}$$

另取辐角 $\theta+2m\pi$ 不改变此集合，因为这只相当于对整数指标 $k$ 重新编号。固定 $z$ 的所有对数的实部均为 $\ln|z|$，其虚部相差 $2\pi$ 的整数倍。在复平面上，它们位于实坐标为 $\ln|z|$ 的竖直线上，等间距排列，相邻两点的距离为 $2\pi$。

对任意 $u\in\mathbb{R}$，[模](../complex-numbers/) $|e^{u+iv}|=e^u$ 均为正。复指数函数从不为零，故数 $0$ 没有复对数。

## 主值对数

通常利用[主辐角](../complex-numbers/)从多值对数中选取一个单值。对于 $z\neq0$，$\mathrm{Arg}(z)$ 是区间 $(-\pi,\pi]$ 中唯一的辐角。主值对数为：

$$\mathrm{Log}(z):=\ln|z|+i\mathrm{Arg}(z)$$

大写符号 $\mathrm{Log}$ 表示所选定的值，而小写符号 $\log z$ 表示整个集合。在正实轴上，该定义与实[自然对数](../logarithms/)一致。若 $x>0$，则 $\mathrm{Arg}(x)=0$ 且 $\mathrm{Arg}(-x)=\pi$，因此相应的主值为：

$$\mathrm{Log}(x)=\ln x,\qquad \mathrm{Log}(-x)=\ln x+i\pi$$

数 $z=-\sqrt{3}-i$ 位于第三象限。其模和主辐角为：

$$
\begin{align}
|z|&=\sqrt{(-\sqrt{3})^2+(-1)^2}=2\\[6pt]
\mathrm{Arg}(z)&=-\frac{5\pi}{6}
\end{align}
$$

其主值对数为：

$$\mathrm{Log}(-\sqrt{3}-i)=\ln 2-\frac{5\pi i}{6}$$

$-\sqrt{3}-i$ 的所有对数为：

$$\log(-\sqrt{3}-i)=\left\{\ \ln 2+i\left(-\frac{5\pi}{6}+2k\pi\right)\mid k\in\mathbb{Z}\ \right\}$$

其中 $k=0$ 对应的值为主值，其余每个值与它相差 $2k\pi i$。

- - -

主值对数是指数函数在非零复数上的右逆：

$$e^{\mathrm{Log}(z)}=z$$

反向复合的等式只在一个水平带内成立。若 $w=x+iy$，设 $k$ 为使 $-\pi<y-2k\pi\leq\pi$ 成立的唯一整数，则：

$$\mathrm{Log}(e^w)=w-2k\pi i$$

等式 $\mathrm{Log}(e^w)=w$ 恰在 $-\pi<\mathrm{Im}(w)\leq\pi$ 时成立。在这个半开水平带内，主值对数是指数函数的逆函数。

## 对数分支与支割线

设 $U$ 为 $\mathbb{C}^{*}:=\mathbb{C}\setminus\{\ 0\ \}$ 的一个连通开子集。$U$ 上的对数分支是一个[连续函数](../continuous-functions/) $L:U\to\mathbb{C}$，并且对每个 $z\in U$ 都满足：

$$e^{L(z)}=z$$

在整个穿孔平面 $\mathbb{C}^{*}$ 上不存在任何对数分支。若这样的分支 $L$ 存在，并用 $z=e^{it}$（$0\leq t\leq2\pi$）参数化[单位圆](../unit-circle/)，则可定义连续函数：

$$h(t):=L(e^{it})-it$$

对每个 $t$，有 $e^{h(t)}=1$，故 $h(t)$ 属于离散集合 $2\pi i\mathbb{Z}$。从区间到离散集合的连续函数是常数。路径的两个端点都是点 $1$，因为 $e^0=e^{2\pi i}=1$，但：

$$h(0)=L(1),\qquad h(2\pi)=L(1)-2\pi i$$

这两个值相差 $2\pi i$，与常值性矛盾。沿单位圆环绕一周时，沿路径连续选取的辐角增加了 $2\pi$，尽管起点和终点都是 $1$。

- - -

支割线是从定义域中删去的一条曲线，用来阻止路径绕原点一周。从平面中移除一条由原点通往无穷远的射线后，便可在剩余平面上连续选取辐角。固定一个角度 $\beta$，移除射线：

$$R_{\beta}:=\{\ re^{i\beta}\mid r\geq0\ \}$$

$\mathbb{C}\setminus R_{\beta}$ 的每个点都有唯一的辐角 $\mathrm{Arg}_{\beta}(z)$ 落在区间 $(\beta,\beta+2\pi)$ 内。对应此区间的分支为：

$$L_{\beta}(z):=\ln|z|+i\mathrm{Arg}_{\beta}(z)$$

当 $\beta=-\pi$ 时，被移除的射线是非正实轴，所选辐角落在 $(-\pi,\pi)$ 内。此分支是以下区域上的主分支：

$$\mathbb{C}\setminus(-\infty,0]$$

主值 $\mathrm{Log}(z)$ 对每个 $z\neq0$ 都有定义，包括负实数。它在 $\mathbb{C}\setminus(-\infty,0]$ 上的限制连续且复可微，因此该限制就是主分支。在整个穿孔平面 $\mathbb{C}^{*}$ 上，主值不是对数分支。

对于固定的 $x<0$，支割线两侧的值有极限：

$$
\begin{align}
\lim_{y\to0^+}\mathrm{Log}(x+iy)&=\ln|x|+i\pi\\[6pt]
\lim_{y\to0^-}\mathrm{Log}(x+iy)&=\ln|x|-i\pi
\end{align}
$$

跨越负实轴的跳跃为 $2\pi i$。采用不同的支割线时，跳跃发生在不同的曲线上。单值分支的任何[定义域](../determining-the-domain-of-a-function/)都不能包含绕原点的绕数不为零的闭合路径。

若 $L_1$ 和 $L_2$ 是同一连通定义域上的两个分支，它们的差取值于 $2\pi i\mathbb{Z}$，因为 $e^{L_1(z)-L_2(z)}=1$。该差是连续的，且定义域是连通的，所以它是常数。此常数具有 $2m\pi i$ 的形式，其中 $m$ 为某个固定整数：

$$L_1(z)-L_2(z)=2m\pi i$$

## 对数恒等式及其限制

对于多值对数，乘积律应理解为集合之间的等式。对于非零的 $z_1$ 和 $z_2$，有：

$$\log(z_1z_2)=\log z_1+\log z_2$$

等号右端表示：分别从两个因子的对数集合中各取一个值并相加，由所得的所有和组成一个集合。若 $\theta_1$ 和 $\theta_2$ 分别是 $z_1$ 和 $z_2$ 的辐角，则这些和具有如下形式：

$$\ln|z_1|+\ln|z_2|+i(\theta_1+\theta_2+2k\pi)$$

由于 $|z_1z_2|=|z_1||z_2|$，而 $\theta_1+\theta_2$ 是 $z_1z_2$ 的一个辐角，上述各值恰好就是乘积的全部对数。

对于主值而言，同一公式可能不再成立，因为两个主辐角之和可能超出 $(-\pi,\pi]$。正确的公式为：

$$\mathrm{Log}(z_1z_2)=\mathrm{Log}(z_1)+\mathrm{Log}(z_2)-2m\pi i$$

其中 $m$ 是 $\{\ -1,0,1\ \}$ 中使 $\mathrm{Arg}(z_1)+\mathrm{Arg}(z_2)-2m\pi$ 落在 $(-\pi,\pi]$ 内的唯一整数。在下述情况下，乘积律无需修正项：

$$-\pi<\mathrm{Arg}(z_1)+\mathrm{Arg}(z_2)\leq\pi$$

例如，$\mathrm{Log}(-1)=i\pi$，而 $(-1)(-1)=1$。两端分别为：

$$
\begin{align}
\mathrm{Log}((-1)(-1))&=\mathrm{Log}(1)=0\\[6pt]
\mathrm{Log}(-1)+\mathrm{Log}(-1)&=2\pi i
\end{align}
$$

两个表达式相差 $2\pi i$。相应的[商律](../complex-number-operations/)和[整数幂](../de-moivre-theorem/)的主值对数公式也需要加入属于 $2\pi i\mathbb{Z}$ 的修正项。在把实对数的运算法则用于复数的主值对数之前，必须检查运算后的辐角是否越过主辐角区间的边界，也就是相应的点是否跨过所选支割线。

## 导数与局部幂级数

定义在开集上的每个对数分支都是复可微的。在 $L$ 的定义域内任取一点 $z_0$。指数函数在 $L(z_0)$ 处的[导数](../derivatives/)为 $e^{L(z_0)}=z_0\neq0$。由局部[反函数定理](../inverse-function/)，指数函数在 $L(z_0)$ 的某个邻域 $V$ 上是单射的，且它在 $V$ 的像上的反函数是复可微的。由于 $L$ 连续，可取 $z_0$ 的一个充分小的邻域 $W$，使 $W$ 包含在此像中且 $L(W)\subseteq V$。对每个 $z\in W$，$L(z)$ 和局部反函数都在 $V$ 中，且二者的指数函数值均为 $z$，故它们相等。因此 $L$ 在其定义域内处处复可微。

利用[链式法则](../chain-rule/)对恒等式 $e^{L(z)}=z$ 求导，得：

$$
\begin{align}
e^{L(z)}L'(z)&=1\\[6pt]
zL'(z)&=1\\[6pt]
L'(z)&=\frac{1}{z}
\end{align}
$$

导数与分支无关，因为连通定义域上的两个分支之差是一个形如 $2m\pi i$ 的常数。

在 $z=1$ 附近，主分支有一个[幂级数](../power-series/)。对于 $|u|<1$，$1/(1+u)$ 的[几何级数](../geometric-series/)收敛。对该级数逐项积分，并令原函数在 $u=0$ 处取值为 $0$，便得到 $\mathrm{Log}(1+u)$：

$$\mathrm{Log}(1+u)=\sum_{n=1}^{\infty}(-1)^{n+1}\frac{u^n}{n}=u-\frac{u^2}{2}+\frac{u^3}{3}-\frac{u^4}{4}+\cdots$$

条件 $|u|<1$ 意味着 $1+u$ 在以 $1$ 为圆心、半径为 $1$ 的开圆盘内。该圆盘既不含原点，也不含支割线上的任何点，因此级数的和在整个圆盘内都等于 $\mathrm{Log}(1+u)$。

## 与复数幂的联系

一旦在定义域 $U$ 上固定了对数分支 $L$，对于 $a\in\mathbb{C}$ 和 $z\in U$，可定义相应的复数[幂](../powers/)：

$$z^a:=e^{aL(z)}$$

若将 $L$ 替换为分支 $L+2k\pi i$，则该值乘以 $e^{2k\pi ia}$。当 $a$ 为整数时，该因子为 $1$，故该值与分支无关。对一般的复指数，幂在不同分支上可取不同的值。

对于 $i^i$，$i$ 的所有对数为：

$$\log i=\left\{\ i\left(\frac{\pi}{2}+2k\pi\right)\mid k\in\mathbb{Z}\ \right\}$$

$i^i$ 对应的值为：

$$i^i=\left\{\ e^{-\pi/2-2k\pi}\mid k\in\mathbb{Z}\ \right\}$$

此集合中的每个值均为正实数。取主值对数时 $k=0$，故 $i^i$ 的主值为 $e^{-\pi/2}$。
