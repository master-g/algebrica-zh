---
title: 含三个未知数的线性方程组
title_en: Systems of Linear Equations in Three Variables
source: https://algebrica.org/systems-of-linear-equations-in-three-variables/
license: CC BY-NC 4.0
tags:
  - back-substitution
  - consistent-system
  - elimination-method
  - inconsistent-system
  - linear-equations
  - linear-systems
  - three-variables
translation:
  status: current
  source_hash: e00246363172cb4f97209f8c7d11ba0990e5cd717a4e993249114650c2944d2c
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 引言

由三个关于未知数 $x$、$y$ 和 $z$ 的[线性方程](../linear-equations/)组成的方程组具有如下形式：

$$
\begin{cases}
a_1x + b_1y + c_1z = d_1 \\[6pt]
a_2x + b_2y + c_2z = d_2 \\[6pt]
a_3x + b_3y + c_3z = d_3
\end{cases}
$$

所有系数和常数都是[实数](../real-numbers/)，且每个方程中 $x$、$y$ 和 $z$ 的系数至少有一个非零。解是同时满足三个方程的有序三元组 $(x,y,z)$。[线性方程组](../systems-of-linear-equations/)条目给出了相容性、相关性和解集的定义。本文聚焦于三个未知数情形下的初等消元。

一个含三个未知数的线性方程的[解集](../sets/)是一个[平面](../planes/)。方程组的解是三个平面的公共点。它们的交集有三种形式：

+ 一个公共点对应一个解。
+ 一条公共直线或一个公共平面包含无穷多个点，因此方程组有无穷多个解。
+ 没有公共点时，方程组无解。

当三个方程留下一个未受约束的独立方向时，交集是一条直线；当三个方程描述同一个平面时，交集是一个平面。交集可能为空，因为两个平面互不相同且互相平行，但平行并不是必要条件。三个平面可能两两相交，却没有三者共有的点。两两相交不足以保证相容性。

## 消元为含两个未知数的方程组

初等消元用一个方程与另一个方程的倍数之和替换原方程。替换前后的方程组具有相同的解集，因为这一运算可逆。对于记作 $E_1$、$E_2$ 和 $E_3$ 的方程，一次消元具有如下形式：

$$E_j \leftarrow E_j + kE_i$$

下面的步骤将三个未知数的方程组化为[含两个未知数的线性方程组](../systems-of-linear-equations-in-two-variables/)中所处理的问题：

1. 选择一个要消去的未知数。选择具有较小公倍数的系数通常更方便。
2. 选取两对不同的方程，分别得到两个不含该未知数的方程。
3. 求解所得的含两个未知数的方程组。
4. 如果化简后的方程组有一个解，将两个已知值代入原方程之一，求出剩余的未知数。
5. 将所得的有序三元组代入原来的三个方程进行检验。

第二步中的两次消元必须消去同一个未知数，否则所得结果就不是关于同一对变量的方程组。这些方程运算是[高斯消元法](../gaussian-elimination/)中行运算的标量版本；对于更大的方程组，高斯消元法是同一方法的系统形式。

## 一个有唯一解的方程组

考虑方程组：

$$
\begin{cases}
x + y + z = 4 \\[6pt]
2x - y + z = 8 \\[6pt]
x + 2y - z = -3
\end{cases}
$$

第一个方程中 $x$ 的系数是 $1$，因此适合用于两次消元。从第二个方程中减去第一个方程的两倍即可消去 $x$：

$$
\begin{align}
(2x - y + z) - 2(x + y + z) &= 8 - 2(4) \\[6pt]
-3y - z &= 0
\end{align}
$$

从第三个方程中减去第一个方程，得到关于 $y$ 和 $z$ 的第二个方程：

$$
\begin{align}
(x + 2y - z) - (x + y + z) &= -3 - 4 \\[6pt]
y - 2z &= -7
\end{align}
$$

第一个化简后的方程等价于 $z=-3y$。代入后，第二个化简后的方程只含有 $y$：

$$
\begin{align}
y - 2(-3y) &= -7 \\[6pt]
7y &= -7 \\[6pt]
y &= -1
\end{align}
$$

由于 $y=-1$，所以 $z=3$。将这两个值代入第一个原方程，得到：

$$
\begin{align}
x + (-1) + 3 &= 4 \\[6pt]
x &= 2
\end{align}
$$

将所得三元组代入三个原方程，可以验证它确实满足每一个方程：

$$
\begin{align}
2 + (-1) + 3 &= 4 \\[6pt]
2(2) - (-1) + 3 &= 8 \\[6pt]
2 + 2(-1) - 3 &= -3
\end{align}
$$

该方程组的唯一解为：

$$(x,y,z)=(2,-1,3)$$

## 矛盾与无解

消元后，可能得到一个变量项全部抵消、但常数项不相等的等式。考虑方程组：

$$
\begin{cases}
x + y + z = 2 \\[6pt]
2x - y + z = 1 \\[6pt]
3x + 2z = 5
\end{cases}
$$

将前两个方程相加得到 $3x+2z=3$，而第三个方程要求 $3x+2z=5$。从第三个方程中减去第一个和第二个方程，同样可得到矛盾：

$$
\begin{align}
(3x + 2z) - (x + y + z) - (2x - y + z) &= 5 - 2 - 1 \\[6pt]
0 &= 2
\end{align}
$$

没有任何有序三元组能够满足这一矛盾，因此方程组不相容。所有同时属于前两个平面的点都位于平面 $3x+2z=3$ 上。该平面与第三个方程 $3x+2z=5$ 所表示的平面平行，三个平面没有公共点。

## 恒等式与自由变量

当消元以恒等式结束时，其中一个方程没有增加新的条件。考虑方程组：

$$
\begin{cases}
x + y + z = 2 \\[6pt]
2x - y + 3z = 1 \\[6pt]
3x + 4z = 3
\end{cases}
$$

第三个方程是前两个方程的一个[线性组合](../linear-combinations/)，在这里就是它们的和。对于第二个方程，有：

$$
\begin{align}
(2x - y + 3z) - 2(x + y + z) &= 1 - 2(2) \\[6pt]
-3y + z &= -3
\end{align}
$$

对于第三个方程，得到相同的化简方程：

$$
\begin{align}
(3x + 4z) - 3(x + y + z) &= 3 - 3(2) \\[6pt]
-3y + z &= -3
\end{align}
$$

两个化简后的方程完全相同，因此有一个未知数是自由的。令 $y=t$，其中 $t \in \mathbb{R}$。由化简后的方程和第一个原方程可得：

$$
\begin{align}
z &= 3t - 3 \\[6pt]
x &= 2 - y - z \\[6pt]
  &= 5 - 4t
\end{align}
$$

每个解都具有如下形式：

$$(x,y,z)=(5-4t,t,3t-3), \qquad t \in \mathbb{R}$$

代入可以验证，对于每个实数 $t$，这个参数表示都成立：

$$
\begin{align}
(5 - 4t) + t + (3t - 3) &= 2 \\[6pt]
2(5 - 4t) - t + 3(3t - 3) &= 1 \\[6pt]
3(5 - 4t) + 4(3t - 3) &= 3
\end{align}
$$

同一条直线还可以写成如下[向量方程](../vector-and-parametric-equations-of-a-line/)：

$$(x,y,z)=(5,0,-3)+t(-4,1,3), \qquad t \in \mathbb{R}$$

这就是三个平面的公共直线。恒等式表示一个条件是多余的，但仅凭恒等式还不足以对方程组进行分类。另一次消元仍可能产生矛盾。如果没有矛盾且至少有一个未知数保持自由，则方程组有无穷多个解。相应的矩阵判据是[罗歇–卡佩利定理](../rouche-capelli-theorem/)，它通过[矩阵的秩](../rank-of-a-matrix/)来表述。
