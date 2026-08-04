---
title: 均值简介
title_en: Introduction to the Mean
source: https://algebrica.org/introduction-to-the-mean/
license: CC BY-NC 4.0
tags:
  - arithmetic-mean
  - expected-value
  - geometric-mean
  - harmonic-mean
  - mean
  - statistics
translation:
  status: current
  source_hash: 25046cd9c6dc9769287e00978b6dd23c171f67015a559d676955072efc277df6
  translator: codex
  updated: "2026-08-03T00:00:00.000Z"
---
## 数据分布的中心行为

均值将一组观测值浓缩为一个数，用来反映数据分布所在的典型水平。它标示出数据的平衡点，并支持许多描述性与推断性分析方法。

1929 年，奥斯卡·基西尼提出了均值的一种一般定义。按照他的定义，一组数值的均值是数 $M$：将它代替每个观测值代入一个对称的[函数](../functions/) $F$ 后，整体结果保持不变：

$$F(x_1, x_2, \dots, x_n) = F(M, M, \dots, M)$$

> 当数据的排列顺序不重要、函数只取决于数值本身而不取决于它们的排列方式时，该函数称为对称函数。

- - -

这个定义将不同类型的均值统一在同一个框架中，例如[算术均值](../arithmetic-mean/)、[几何均值](../geometric-mean/)和[调和均值](../harmonic-mean/)。每一种具体均值都通过选择一个描述数据值之间关系的特定函数 $F$ 得到。当 $F$ 是所有数据值之和时，有：

$$F(x_1, x_2, \dots, x_n) = x_1 + x_2 + \dots + x_n$$

一般表达式变为：

$$x_1 + x_2 + \dots + x_n = nM$$

由此可得[算术均值](../arithmetic-mean/)的公式：

$$M = \frac{x_1 + x_2 + \dots + x_n}{n} = \frac{1}{n} \sum_{i=1}^{n} x_i$$

## 作为最小替代误差的均值

均值的第二种定义来自亚伯拉罕·瓦尔德，他将均值与替代误差联系起来。当所有数据点都被一个代表性数值替代时，均值是使总误差最小的数，也就是让观测值与共同替代值之间差异最小的点。这可以写成：

$$M = \arg\min_{\mu} \sum_{i=1}^{n} (x_i - \mu)^2$$

使该表达式最小的 $\mu$ 就是算术均值，它平衡了数据的平方偏差。

## 赫尔德均值

赫尔德均值也称为幂均值或广义均值，是一族均值，其中包含算术均值、几何均值和调和均值等特殊情形。对于正数 $x_1, x_2, \dots, x_n$，它定义为：

$$M_s = \left( \frac{1}{n} \sum_{i=1}^{n} x_i^s \right)^{\frac{1}{s}}$$

当 $s$ 取不同值时，赫尔德均值会还原出经典的主要均值。

+ 当 $s = 1$ 时，它对应算术均值。
+ 当 $s = 0$ 时，它变为几何均值。
+ 当 $s = -1$ 时，它得到调和均值。
+ 当 $s = 2$ 时，它表示均方根。

## 主要均值列表

下表列出了经典均值的简单形式和加权形式；它们分别对应赫尔德均值在特定 $s$ 值下的情形。

[class="table-1 -right"]

| | |
|---|---|
| $$M_1 = \frac{1}{n} \sum_{i=1}^{n} x_i$$ | [更多](../arithmetic-mean/) |
| $$M_1 = \frac{\sum_{i=1}^{n} w_i x_i}{\sum_{i=1}^{n} w_i}$$ | [更多](../arithmetic-mean/) |
| $$M_0 = \left( \prod_{i=1}^{n} x_i \right)^{\frac{1}{n}}$$ | [更多](../geometric-mean/) |
| $$M_0 = \left( \prod_{i=1}^{n} x_i^{w_i} \right)^{\frac{1}{\sum_{i=1}^{n} w_i}}$$ | [更多](../geometric-mean/) |
| $$M_{-1} = \frac{n}{\sum_{i=1}^{n} \frac{1}{x_i}}$$ | [更多](../harmonic-mean/) |
| $$M_2 = \left( \frac{1}{n} \sum_{i=1}^{n} x_i^2 \right)^{\frac{1}{2}}$$ | [更多](../root-mean-square/) |
[/class]

每个公式都以特定方式概括一组数值，具体取决于各个数值如何参与最终结果。所有均值都描述集中趋势，但其解释会随定义它们的数学运算而变化。

+ [算术均值](../arithmetic-mean/)（$M_1$）：适用于数值以加法方式合并的情形，例如收入、长度或温度等量的总和。它表示数据的平衡点，其中每个观测值对结果的贡献相同。

+ [加权算术均值](../arithmetic-mean/)（加权 $M_1$）：当某些数据点比其他数据点更重要或出现得更频繁时使用。计算平均值前，先为每个观测值乘以反映其重要性的权重。

+ [几何均值](../geometric-mean/)（$M_0$）：适用于增长因子、收益率或指数等以乘法方式合并的量。它描述随时间变化的代表性速率，体现数值如何按比例缩放。

+ [加权几何均值](../geometric-mean/)（加权 $M_0$）：当乘法数据的重要程度不同时使用，例如在金融或绩效分析中，某些元素对结果的影响更大。

+ [调和均值](../harmonic-mean/)（$M_{-1}$）：适合对速率、速度或比率求平均，此时较小的数值应当具有更大的权重。当总距离、总量或总工作量保持不变时，它反映真实的平均速率。

+ [均方根](../root-mean-square/)（$M_2$）：当数值以平方方式合并时使用，例如电压、加速度或功率。它会更强调较大的变化，因此反映数据的有效幅值。

## 随机变量的均值或期望值

对于[离散随机变量](../discrete-random-variables/)，均值或[期望值](../mean-or-expected-value-of-a-random-variable/)是所有 $X$ 的可能取值按其概率加权后的总和：

$$\mu = E(X) = \sum_x xf(x)$$

对于[连续随机变量](../continuous-random-variables/)，均值是在整个取值范围上，对每个 $X$ 的可能取值按其概率密度加权后进行积分：

$$\mu = E(X) = \int_{-\infty}^{+\infty} xf(x) \ dx$$

> 两种形式表达的是同一个思想：均值反映随机变量的取值趋向于聚集的位置。离散情形通过对所有可能结果求和得到；连续情形则通过积分将同一原则推广开来。

## 抽样分布的均值

[样本均值](../sampling-distributions/)是从总体中抽取的样本内各观测值的平均值，它可以估计总体均值。其定义为：

$$\overline{X} = \frac{1}{n} \sum_{i=1}^{n} X_i$$

其中，$\overline{X}$ 是样本均值，$n$ 是样本大小，$X_i$ 是样本中第 $i$ 个观测值。
