---
title: 模
title_en: Modules
source: https://algebrica.org/modules/
license: CC BY-NC 4.0
tags:
  - abelian-group
  - algebraic-structures
  - annihilator
  - basis
  - cyclic-module
  - direct-sum
  - endomorphism-ring
  - free-module
  - homomorphism
  - ideal
  - linear-independence
  - module
  - module-theory
  - ring
  - submodule
  - torsion
translation:
  status: current
  source_hash: 3252b402fab58e32fd24df473755abacf37c4c2492e6f690310710f335f30b97
  translator: codex
  updated: "2026-08-04T00:00:00.000Z"
---
## 定义

模的定义与[向量空间](../vector-spaces/)类似，只是其标量构成[环](../rings/)而不是[域](../fields/)。环中的[理想](../rings/)、带有典范 $\mathbb{Z}$-作用的[阿贝尔群](../groups/)，以及一个[线性算子](../eigenvalues-and-eigenvectors/)作用下的向量空间，都具有这种形式，尽管它们的标量不一定可逆。每个向量空间都是模，模论是交换代数与同调代数的共同语言。

设 $R$ 为一个环。$R$ 上的左模（简称左 $R$-模）是一个[阿贝尔群](../groups/) $(M, +)$，配备数乘 $\cdot : R \times M \to M$，对所有 $r, s \in R$ 以及 $\mathbf{u}, \mathbf{v} \in M$ 满足以下公理：

+ 模加法上的分配律：$r \cdot (\mathbf{u} + \mathbf{v}) = r \cdot \mathbf{u} + r \cdot \mathbf{v}$。
+ 环加法上的分配律：$(r + s) \cdot \mathbf{v} = r \cdot \mathbf{v} + s \cdot \mathbf{v}$。
+ 与环乘法的相容性：$(rs) \cdot \mathbf{v} = r \cdot (s \cdot \mathbf{v})$。

这三个公理没有规定 $R$ 的乘法单位元。当 $R$ 有单位元 $1$ 时，如果额外满足对每个 $\mathbf{v} \in M$ 有 $1\mathbf{v} = \mathbf{v}$，则称模 $M$ 为含幺模。仅凭这三个公理不能推出该条件：在任意阿贝尔群上定义零乘法 $r\mathbf{v} = \mathbf{0}$ 仍满足全部公理，但当 $M \neq \{\ \mathbf{0} \ \}$ 时不满足单位元公理。

> 本页始终假设 $R$ 含有单位元，且每个模都含幺，这是标准约定。在此约定下，当 $R$ 为域时，这些公理恰好化为向量空间公理，因此每个向量空间都是模，而模论包含向量空间理论作为特殊情形。$M$ 所定义于其上的环 $R$ 称为 $M$ 的标量环。

$R$ 上的右模是一个阿贝尔群 $(M, +)$，带有乘积 $M \times R \to M$，满足 $\mathbf{v}(rs) = (\mathbf{v}r)s$、$\mathbf{v}(r + s) = \mathbf{v}r + \mathbf{v}s$ 以及 $(\mathbf{u} + \mathbf{v})r = \mathbf{u}r + \mathbf{v}r$。标量写在左侧还是右侧很重要。若把左作用转录到右侧，会得到 $(rs)\mathbf{v} = s(r\mathbf{v})$，这会反转因子顺序，因此非交换环上的左模与右模是不同结构。当 $R$ 交换时，二者重合，通常简称为 $R$-模。除非另有说明，本页中的模均指左模。

## 作为环作用的模

[群](../groups/) $G$ 在集合 $X$ 上的作用是一个[同态](../homomorphisms-and-isomorphisms/) $\rho : G \to \mathrm{Sym}(X)$，其值落在 $X$ 的置换群中。写作 $gx = \rho(g)(x)$，就把 $\rho$ 的同态性质转换为混合结合律 $(g_1g_2)x = g_1(g_2x)$。模就是环对阿贝尔群的类似作用。

设 $M$ 是一个阿贝尔群，令 $\mathrm{End}(M)$ 表示其群自同态的集合，即满足 $f(\mathbf{u} + \mathbf{v}) = f(\mathbf{u}) + f(\mathbf{v})$ 的映射 $f : M \to M$。按点加法 $(f + g)(\mathbf{v}) = f(\mathbf{v}) + g(\mathbf{v})$ 与复合 $(fg)(\mathbf{v}) = f(g(\mathbf{v}))$ 定义运算后，$\mathrm{End}(M)$ 是以 $\mathrm{id}_M$ 为单位元的环，称为 $M$ 的自同态环。环 $R$ 在 $M$ 上的作用是一个环同态：

$$\varphi : R \to \mathrm{End}(M)$$

给定这样的 $\varphi$，定义乘积 $r\mathbf{v} = \varphi(r)(\mathbf{v})$。每个 $\varphi(r)$ 都属于 $\mathrm{End}(M)$，正是第一个分配律；$\varphi$ 的可加性是第二个分配律；$\varphi$ 的可乘性是相容性公理：

$$
\begin{align}
r(\mathbf{u} + \mathbf{v}) &= \varphi(r)(\mathbf{u} + \mathbf{v}) = \varphi(r)(\mathbf{u}) + \varphi(r)(\mathbf{v}) = r\mathbf{u} + r\mathbf{v} \\[6pt]
(r + s)\mathbf{v} &= \varphi(r + s)(\mathbf{v}) = \big(\varphi(r) + \varphi(s)\big)(\mathbf{v}) = r\mathbf{v} + s\mathbf{v} \\[6pt]
(rs)\mathbf{v} &= \varphi(rs)(\mathbf{v}) = \big(\varphi(r)\varphi(s)\big)(\mathbf{v}) = r(s\mathbf{v})
\end{align}
$$

反过来，若乘积 $R \times M \to M$ 满足三个公理，就可以用 $\varphi(r)(\mathbf{v}) = r\mathbf{v}$ 定义映射 $\varphi(r) : M \to M$。第一个公理说明 $\varphi(r) \in \mathrm{End}(M)$，其余两个说明 $\varphi$ 保持加法与乘法。因此，在 $M$ 上指定一个 $R$-模结构，等价于指定一个从 $R$ 到 $\mathrm{End}(M)$ 的环同态；且模含幺当且仅当 $\varphi(1) = \mathrm{id}_M$。

> 对 $M$ 的任意模结构，标量环都通过一个到 $\mathrm{End}(M)$ 的环同态发挥作用。特别地，取 $R = \mathrm{End}(M)$ 且 $\varphi = \mathrm{id}$，每个阿贝尔群都是其自身自同态环上的模。$\varphi$ 的核由把 $M$ 的所有元素都送到 $\mathbf{0}$ 的标量组成，因此作用忠实当且仅当 $\ker(\varphi) = \{\ 0 \ \}$。

## 性质

由公理可直接推出若干结论。对任意 $\mathbf{v} \in M$，乘以环的加法单位元满足 $0\mathbf{v} = \mathbf{0}$。为此写出：

$$0\mathbf{v} = (0 + 0)\mathbf{v} = 0\mathbf{v} + 0\mathbf{v}$$

然后利用 $(M, +)$ 的阿贝尔群结构从两边消去 $0\mathbf{v}$。将同样的消去法应用于第一个分配律，对每个 $r \in R$ 得到 $r\mathbf{0} = \mathbf{0}$。由于 $r\mathbf{v} + r(-\mathbf{v}) = r(\mathbf{v} - \mathbf{v}) = r\mathbf{0} = \mathbf{0}$，有 $r(-\mathbf{v}) = -(r\mathbf{v})$。对第二个公理作对称计算，得到 $(-r)\mathbf{v} = -(r\mathbf{v})$。取 $r = 1$，这个恒等式就是 $(-1)\mathbf{v} = -\mathbf{v}$。这些论证只用到了三个公理与 $M$ 的群结构，正是向量空间中相应法则的证明。

不同于[向量空间](../vector-spaces/)，模中可能有被非零标量零化的非零元素。若存在非零 $r \in R$ 满足 $r\mathbf{v} = \mathbf{0}$，则称元素 $\mathbf{v} \in M$ 为挠元。$M$ 的所有挠元组成的集合记为 $T(M)$；当 $R$ 是[整环](../rings/)时，它是 $M$ 的子模。当 $T(M) = \{\ \mathbf{0} \ \}$ 时，称模为无挠模；当 $T(M) = M$ 时，称为挠模。向量空间自动无挠，因为在[域](../fields/)中，若 $\alpha \neq 0$，$\alpha\mathbf{v} = \mathbf{0}$ 由 $\alpha$ 的可逆性必然推出 $\mathbf{v} = \mathbf{0}$。

## 代数层级

到目前为止介绍的结构构成一条刚性递增的链。[群](../groups/)有一个运算，且每个元素都有逆元。[环](../rings/)有两个运算，每个元素都有加法逆元，但非零元素不一定有乘法逆元。在[域](../fields/)中，每个非零元素都有乘法逆元。[向量空间](../vector-spaces/)以一个域为底层标量，并有一个独立的向量集合供该域作数乘。

模与向量空间形式相同，只是标量环不一定是域。一般标量没有乘法逆元，因此会出现线性代数中不存在的现象：

+ 基不一定存在。
+ 秩即使有定义，也不一定在非交换环上保持不变。
+ 可能出现挠元。
+ 子模不一定有补模。
+ 模可能同构于自身的真子模。

> 每个向量空间都是其标量域上的模，每个阿贝尔群都是[整数](../integers/)环上的模。环 $R$ 上的模范畴同时推广向量空间与阿贝尔群，并在相应的特殊情形下化为二者。

## 示例

每个阿贝尔群 $(A, +)$ 都恰好有一个含幺 $\mathbb{Z}$-模结构。单位元公理固定 $1a = a$，而对环加法的分配律迫使正整数 $n$ 乘以 $a \in A$ 时采用重复加法：

$$n \cdot a = \underbrace{a + a + \cdots + a}_{n}$$

当 $n < 0$ 时，上一节的规则 $(-r)\mathbf{v} = -(r\mathbf{v})$ 给出 $n \cdot a = -((-n) \cdot a)$；而 $0 \cdot a = 0$ 也已在那里证明，因此整个数乘都被确定。此时模公理化为阿贝尔群中整数倍的标准法则，所以 $\mathbb{Z}$-模论与阿贝尔群论完全一致。

设 $R$ 为环，$n$ 为正整数。由 $R$ 中元素组成的有序 $n$-元组集合 $R^n$，带有逐分量加法与逐分量数乘，是一个 $R$-模。这是域 $F$ 上[向量空间](../vector-spaces/) $F^n$ 的直接推广。当 $R = \mathbb{Z}$ 时，模 $\mathbb{Z}^n$ 是有限秩自由模的原型。

- - -

每个环 $R$ 都是自身上的模，数乘就是环乘法。更一般地，$R$ 的每个[左理想](../rings/)都是左 $R$-模，每个右理想都是右 $R$-模，因为理想按定义对相应侧的任意环元素乘法封闭。这些理想正是这种形式的模，说明了模论在交换代数中的作用。

集合 $\mathbb{Z}/n\mathbb{Z}$ 在[模](../modulo-operator/) $n$ 的加法下是一个 $n$ 阶阿贝尔群，因此由上述构造它是一个 $\mathbb{Z}$-模。每个元素 $\bar{a} \in \mathbb{Z}/n\mathbb{Z}$ 都满足 $n\bar{a} = 0$，所以整个模都是挠模。

设 $V$ 是域 $K$ 上的向量空间，令 $\mathrm{End}_K(V)$ 为从 $V$ 到自身的[$K$-线性映射](../linear-maps/)所成的环。以 $T\mathbf{v} = T(\mathbf{v})$ 为求值作用时，向量空间 $V$ 是 $\mathrm{End}_K(V)$ 上的含幺模。相容性公理就是复合的定义，两个分配律分别来自每个 $T$ 的线性性与逐点加法的定义。这个作用的矩阵形式如下。

设 $K$ 为域，令 $R = \mathrm{M}_n(K)$ 为 $K$ 上的 $n \times n$ [矩阵环](../matrices/)。对每个 $s \geq 1$，所有 $K$ 上的 $n \times s$ 矩阵在左乘矩阵下构成左 $R$-模，所有 $s \times n$ 矩阵在右乘矩阵下构成右 $R$-模。矩阵乘法的结合律是两种情形中的相容性公理，矩阵的分配律给出另外两个公理。当 $s = 1$ 时，左模是列空间 $K^n$，它是 $\mathrm{End}_K(V)$ 在 $V$ 上作用的坐标版本。当 $s = n$ 时，同一矩阵集合同时具有两种结构，它们是同一个非交换环的不同作用。

## 多项式环上的模

设 $V$ 是域 $K$ 上的向量空间，$T : V \to V$ 是 $K$-线性映射。在 $T$ 处对[多项式](../polynomials/)求值给出一个含幺环同态：

$$\varphi_T : K[x] \to \mathrm{End}_K(V)$$

$$\sum_i \alpha_ix^i \mapsto \sum_i \alpha_iT^i$$

约定 $T^0 = \mathrm{id}_V$。每个 $K$-线性映射特别是可加的，因此 $\mathrm{End}_K(V)$ 是 $\mathrm{End}(V)$ 的子环，而 $\varphi_T$ 是 $K[x]$ 对 $V$ 加法群的作用。因此，$V$ 是含幺 $K[x]$-模，数乘为：

$$\Big(\sum_i \alpha_ix^i\Big) \cdot \mathbf{v} = \sum_i \alpha_iT^i(\mathbf{v})$$

这个构造也可以反向进行。设 $V$ 是含幺 $K[x]$-模，令 $\varphi : K[x] \to \mathrm{End}(V)$ 为对应同态。将标量限制为常数多项式后，$V$ 是含幺 $K$-模，因而是 $K$-向量空间，且 $\alpha\mathbf{v} = \varphi(\alpha)(\mathbf{v})$。令 $T = \varphi(x)$。由于 $K[x]$ 交换，$\varphi(x)$ 与 $\varphi(\alpha)$ 在 $\mathrm{End}(V)$ 中可交换，所以对所有 $\alpha \in K$ 与 $\mathbf{v} \in V$：

$$T(\alpha\mathbf{v}) = \varphi(x)\varphi(\alpha)(\mathbf{v}) = \varphi(\alpha)\varphi(x)(\mathbf{v}) = \alpha T(\mathbf{v})$$

这说明 $T$ 是 $K$-线性的。$\varphi$ 的可乘性给出 $\varphi(x^i) = T^i$，可加性则给出 $\varphi(\sum_i \alpha_ix^i) = \sum_i \alpha_iT^i$，这与上面定义的模结构一致。因此，一个含幺 $K[x]$-模等价于一个 $K$-向量空间连同其上的一个线性算子。

> 在这种对应下，$K[x]$-子模恰好是 $T$ 的不变子空间，而 $V$ 的零化子是由 $T$ 的最小多项式生成的理想。有限生成 $K[x]$-模的分类给出线性映射的标准形。当 $T$ 有一组特征向量基时，其矩阵可[对角化](../matrix-diagonalization/)。对于 $\mathbb{Z}$-模，有限生成模的分类就是有限生成阿贝尔群的结构定理。

## 子模

子集 $N \subseteq M$ 称为 $M$ 的子模，当 $N$ 是 $(M, +)$ 的子群，且对所有 $r \in R$ 与 $\mathbf{v} \in N$ 有 $r\mathbf{v} \in N$。在含幺约定下，对取负封闭是自动的，因为 $-\mathbf{v} = (-1)\mathbf{v}$。因此，非空 $N$ 只要对所有 $\mathbf{u}, \mathbf{v} \in N$ 与 $r \in R$ 满足 $\mathbf{u} + \mathbf{v} \in N$ 和 $r\mathbf{v} \in N$，就是子模。这两个条件表达了对任意 $R$-线性组合的封闭性，并蕴含 $\mathbf{0}$ 属于每个子模。每个模 $M$ 都有平凡子模 $\{\ \mathbf{0} \ \}$ 与 $M$ 自身；任何不同于 $M$ 的子模称为真子模。

考虑 $\mathbb{Z}$-模 $\mathbb{Z}$ 及偶整数子集 $2\mathbb{Z}$。对 $a, b \in 2\mathbb{Z}$，和 $a + b$ 仍为偶数；对 $n \in \mathbb{Z}$ 与 $a \in 2\mathbb{Z}$，乘积 $na$ 也是偶数，所以 $2\mathbb{Z}$ 是 $\mathbb{Z}$ 的子模。更一般地，阿贝尔群 $A$ 的每个[子群](../groups/)自动是 $A$ 的 $\mathbb{Z}$-子模，因为加法结构已经决定了整数数乘。

当 $R$ 通过左乘作用于自身时，$R$ 的子模恰好是 $R$ 的左理想，因为两个封闭条件逐字就是左理想的定义。对右模结构，子模是右理想。与算子 $T$ 关联的 $K[x]$-模的子模也有直接描述：对每个多项式作用封闭的子集 $W \subseteq V$，特别对常数封闭，因而是 $K$-子空间；它对 $x$ 封闭，因而在 $T$ 下不变。反过来，满足 $T(W) \subseteq W$ 的子空间 $W$ 对所有 $i$ 都满足 $T^i(W) \subseteq W$，所以对所有 $K[x]$ 封闭。$V$ 的 $K[x]$-子模恰好是 $T$-不变子空间。每个 $T$ 至少有两个这样的子模：核 $\ker(T)$（被 $T$ 送到 $\mathbf{0}$）与像 $\mathrm{im}(T)$（被 $T$ 映到自身）。

- - -

子模对一些集合运算稳定，对另一些则不稳定。若 $\{\ N_\alpha \ \}$ 是 $M$ 的任意子模族，则交集 $\bigcap_\alpha N_\alpha$ 是子模，因为每个封闭条件在每个 $N_\alpha$ 中都成立，因而在交集中也成立。并集不一定是子模：$2\mathbb{Z}$ 与 $3\mathbb{Z}$ 都是 $\mathbb{Z}$-模 $\mathbb{Z}$ 的子模，但 $2 + 3 = 5$ 不属于 $2\mathbb{Z} \cup 3\mathbb{Z}$。对于递增序列 $N_1 \subseteq N_2 \subseteq \cdots$，这个障碍消失，并集 $\bigcup_n N_n$ 是子模，因为其中任意两个元素都已经属于同一个 $N_n$，其和也属于其中。对 $A$ 与 $B$ 两个子模，集合

$$A + B = \{\ \mathbf{a} + \mathbf{b} : \mathbf{a} \in A,\ \mathbf{b} \in B \ \}$$

是子模，并且是包含 $A$ 与 $B$ 的最小子模。在交与和这两个运算下，$M$ 的子模构成格，$\{\ \mathbf{0} \ \}$ 与 $M$ 分别是最小元和最大元。

## 生成子模与零化子

设 $S \subseteq M$ 为任意子集，定义：

$$RS = \{\ r_1\mathbf{s}_1 + \cdots + r_n\mathbf{s}_n : n \in \mathbb{N},\ r_i \in R,\ \mathbf{s}_i \in S \ \}$$

$RS$ 对加法封闭，将这种组合乘以 $r \in R$ 得到 $\sum_i (rr_i)\mathbf{s}_i$，仍为相同形式，因此 $RS$ 是 $M$ 的子模。恒等式 $\mathbf{s} = 1\mathbf{s}$ 给出 $S \subseteq RS$；任何包含 $S$ 的子模都包含其元素的所有 $R$-线性组合，所以 $RS$ 是包含 $S$ 的最小 $M$-子模。它称为由 $S$ 生成的子模，或 $S$ 的[张成](../linear-combinations/)。

> 没有单位元公理时，包含关系 $S \subseteq RS$ 可能失败，包含 $S$ 的最小子模是 $\langle S \rangle + RS$，其中 $\langle S \rangle$ 是 $(M, +)$ 中由 $S$ 生成的子群。只要 $R$ 含单位元且 $M$ 含幺，二者就重合；本页讨论的正是这种情形。

对于单个元素 $\mathbf{x} \in M$，子模 $R\mathbf{x} = \{\ r\mathbf{x} : r \in R \ \}$ 称为由 $\mathbf{x}$ 生成的循环子模。若对某个 $\mathbf{x} \in M$ 有 $M = R\mathbf{x}$，则称模为循环模；若对某个有限集 $S \subseteq M$ 有 $M = RS$，则称模有限生成。环 $R$ 作为自身上的模是循环模，由 $1$ 生成；$\mathbb{Z}/n\mathbb{Z}$ 是 $\mathbb{Z}$-模上的循环模，由 $\bar{1}$ 生成。循环 $\mathbb{Z}$-模恰好是循环阿贝尔群。

还有两个构造把 $M$ 的子模与 $R$ 的理想联系起来。设 $I$ 是 $R$ 的左理想，定义：

$$IM = \{\ r_1\mathbf{x}_1 + \cdots + r_k\mathbf{x}_k : k \geq 1,\ r_i \in I,\ \mathbf{x}_i \in M \ \}$$

这类表达式的和仍为相同形式；对 $r \in R$，有 $r\sum_i r_i\mathbf{x}_i = \sum_i (rr_i)\mathbf{x}_i$，且由于 $I$ 是左理想，$rr_i \in I$，所以 $IM$ 是 $M$ 的子模。

反过来，设 $N$ 是 $M$ 的子模，在 $R$ 中定义 $N$ 的零化子为：

$$\mathrm{ann}(N) = \{\ r \in R : r\mathbf{x} = \mathbf{0} \mid \mathbf{x} \in N \ \}$$

若 $r, r' \in \mathrm{ann}(N)$，则 $(r - r')\mathbf{x} = r\mathbf{x} - r'\mathbf{x} = \mathbf{0}$，因此 $\mathrm{ann}(N)$ 是 $(R, +)$ 的子群。对 $s \in R$ 与 $\mathbf{x} \in N$，有 $(sr)\mathbf{x} = s(r\mathbf{x}) = s\mathbf{0} = \mathbf{0}$，所以 $\mathrm{ann}(N)$ 是左理想；又有 $(rs)\mathbf{x} = r(s\mathbf{x}) = \mathbf{0}$，因为 $s\mathbf{x}$ 仍属于 $N$。因此零化子是 $R$ 的双边理想，后一个计算要求 $N$ 是子模而不是任意子集。

当 $N = M$ 时，零化子是与该作用关联的环同态 $\varphi : R \to \mathrm{End}(M)$ 的核，所以作用忠实当且仅当 $\mathrm{ann}(M) = \{\ 0 \ \}$。在 $\mathbb{Z}$-模 $\mathbb{Z}/n\mathbb{Z}$ 中，整个模的零化子是 $n\mathbb{Z}$。对与有限维空间上算子 $T$ 关联的 $K[x]$-模，$V$ 的零化子由满足 $p(T) = 0$ 的多项式 $p$ 构成，正是由算子 $T$ 的最小多项式生成的理想。

## 直和

给定 $R$-模 $M_1, M_2, \ldots, M_n$，它们的外直和是笛卡尔积 $M_1 \times \cdots \times M_n$，带有逐分量运算：

$$
(\mathbf{x}_1, \ldots, \mathbf{x}_n) + (\mathbf{y}_1, \ldots, \mathbf{y}_n) = (\mathbf{x}_1 + \mathbf{y}_1, \ldots, \mathbf{x}_n + \mathbf{y}_n)
$$

$$
r(\mathbf{x}_1, \ldots, \mathbf{x}_n) = (r\mathbf{x}_1, \ldots, r\mathbf{x}_n)
$$

这个模记作 $M_1 \oplus M_2 \oplus \cdots \oplus M_n$。每个分量都满足每条公理，所以直和也满足。直和内部，只有第 $i$ 个位置可能非零的元组集合 $\widetilde{M}_i$ 是同构于 $M_i$ 的子模，而这 $n$ 个子模的和就是整个直和。模 $R^n$ 是 $n$ 个 $R$ 的直和。

内直和把一个模描述为其已经包含的若干子模之和。设 $A_1, \ldots, A_s$ 是 $M$ 的子模，满足 $M = A_1 + \cdots + A_s$，考虑映射：

$$\sigma : A_1 \oplus \cdots \oplus A_s \to M$$

$$\sigma(\mathbf{a}_1, \ldots, \mathbf{a}_s) = \mathbf{a}_1 + \cdots + \mathbf{a}_s$$

以下四个条件等价：

1. 映射 $\sigma$ 是阿贝尔群同构。
2. 映射 $\sigma$ 是 $R$-模同构。
3. 每个 $\mathbf{x} \in M$ 都能以唯一方式写成 $\mathbf{x} = \mathbf{a}_1 + \cdots + \mathbf{a}_s$，其中 $\mathbf{a}_i \in A_i$。
4. 唯一的分解 $\mathbf{0} = \mathbf{a}_1 + \cdots + \mathbf{a}_s$（其中 $\mathbf{a}_i \in A_i$）是所有 $\mathbf{a}_i = \mathbf{0}$，对每个 $i$ 都如此。

$\sigma$ 的满射性就是假设 $M = A_1 + \cdots + A_s$，而 $\sigma$ 的单射性就是第四个条件，因此根据阿贝尔群的相应结论，第一、第三、第四个条件等价。第二个条件蕴含第一个。反之，$\sigma$ 保持每个标量的作用：

$$\sigma\big(r(\mathbf{a}_1, \ldots, \mathbf{a}_s)\big) = r\mathbf{a}_1 + \cdots + r\mathbf{a}_s = r\sigma(\mathbf{a}_1, \ldots, \mathbf{a}_s)$$

因此双射 $\sigma$ 是模同构。当这些条件成立时，记作 $M = A_1 \oplus \cdots \oplus A_s$，称 $M$ 为 $A_i$ 的内直和。对两个子模，判据化为 $M = A + B$ 且 $A \cap B = \{\ \mathbf{0} \ \}$。

> 向量空间的每个子空间都有补空间，因此向量空间总能分解为给定子空间与另一个子空间的直和。模不具备这一性质。在 $\mathbb{Z}$-模 $\mathbb{Z}$ 中，子模 $2\mathbb{Z}$ 没有补模：补模若为 $n\mathbb{Z}$，则 $2\mathbb{Z} \cap n\mathbb{Z} = \{\ 0 \ \}$；但当 $n \neq 0$ 时元素 $2n$ 同时属于二者，而 $n = 0$ 时 $2\mathbb{Z} + n\mathbb{Z} = 2\mathbb{Z} \neq \mathbb{Z}$。

## 自由模与基

当对任意互不相同的 $\mathbf{x}_1, \ldots, \mathbf{x}_n \in S$ 以及任意 $r_1, \ldots, r_n \in R$，关系

$$r_1\mathbf{x}_1 + r_2\mathbf{x}_2 + \cdots + r_n\mathbf{x}_n = \mathbf{0}$$

必然迫使每个 $r_i = 0$（对每个 $i$）时，称子集 $S \subseteq M$ 在 $R$ 上线性无关。$M$ 的基是满足 $RB = M$ 的线性无关子集 $B$，有基的模 $M$ 称为自由模。模 $R^n$ 是自由模，其标准基为 $\hat{\mathbf{e}}_1, \ldots, \hat{\mathbf{e}}_n$，其中 $\hat{\mathbf{e}}_j$ 在位置 $j$ 为 $1$，其他位置为 $0$。每个向量空间都是其标量域上的自由模，因此向量空间中自由性自动成立。

设 $\mathbf{x}_1, \ldots, \mathbf{x}_n$ 是 $M$ 中互不相同的非零元素。以下三个条件等价：

1. 集合 $B = \{\ \mathbf{x}_1, \ldots, \mathbf{x}_n \ \}$ 是 $M$ 的基。
2. 将 $(r_1, \ldots, r_n)$ 映为 $r_1\mathbf{x}_1 + \cdots + r_n\mathbf{x}_n$ 的映射 $R^n \to M$ 是 $R$-模同构。
3. 对每个 $i$，映射 $r \mapsto r\mathbf{x}_i$ 是单射，且 $M = R\mathbf{x}_1 \oplus R\mathbf{x}_2 \oplus \cdots \oplus R\mathbf{x}_n$。

第二个条件中的映射是 $R$-线性的；它单射当且仅当 $B$ 线性无关，满射当且仅当 $B$ 生成 $M$，因此前两个条件等价。对于第三个条件，$r \mapsto r\mathbf{x}_i$ 单射说明 $R \cong R\mathbf{x}_i$，而直和分解说明若 $\sum_i r_i\mathbf{x}_i$ 为零，则每一项 $r_i\mathbf{x}_i$ 都为 $\mathbf{0}$；结合单射性就得到 $r_i = 0$。

关于生成集还有两个结论。基是极小生成集：若 $B$ 是基而 $B'$ 是其真子集，取 $\mathbf{b} \in B \setminus B'$。若 $\mathbf{b}$ 属于 $RB'$，就能把它写成 $B'$ 中元素的线性组合，从而得到违背 $B$ 的线性无关性的关系。因此 $\mathbf{b} \notin RB'$，$B'$ 不能生成 $M$。有限生成自由模的每个基都有限：若 $B$ 是基而 $S$ 是有限生成集，$S$ 中每个元素都只涉及 $B$ 中有限多个元素，所以存在有限集 $B_0 \subseteq B$ 使 $S \subseteq RB_0$。于是 $M = RS \subseteq RB_0$，因此 $B_0$ 也生成 $M$，由极小性得 $B_0 = B$。因此有限生成自由模同构于某个自然数 $n$ 对应的 $R^n$。

- - -

自由模的基的基数称为其秩。在满足 $1 \neq 0$ 的交换环 $R$ 上，秩是良定义的，因此 $R^m \cong R^n$ 蕴含 $m = n$；在域上它与维数一致。非交换环上这一结论可能失败。设 $V$ 是 $K$ 上的无限维向量空间，令 $R = \mathrm{End}_K(V)$，则 $R$ 作为自身上的模是秩为 $1$ 的自由模，基为 $\{\ \mathrm{id}_V \ \}$。因为 $\dim_K V$ 无限，$V$ 可分解为 $V_1 \oplus V_2$，且 $V_1 \cong V_2 \cong V$。将线性映射限制到源空间的每个直和分量，得到阿贝尔群同构 $R \cong \mathrm{Hom}_K(V_1, V) \oplus \mathrm{Hom}_K(V_2, V)$；该同构与在左侧复合 $R$ 中元素的操作相容，也就是 $R$-模作用。每个分量都同构于 $R$，因为 $V_i \cong V$，所以作为左 $R$-模有 $R \cong R \oplus R$，同一个模既是秩 $1$ 也可视为秩 $2$ 的自由模。

许多模并不自由。设 $G$ 是含有多于一个元素的有限阿贝尔群，并把它看成 $\mathbb{Z}$-模，令 $n$ 为其阶。每个 $\mathbf{x} \in G$ 都满足 $n\mathbf{x} = 0$ 且 $n \neq 0$，所以 $G$ 的任何非空子集都不线性无关；基若为空就会得到 $G = \{\ 0 \ \}$，矛盾。因此 $G$ 不是自由模。当 $n > 1$ 时，模 $\mathbb{Z}/n\mathbb{Z}$ 是最小的例子：它由单个元素 $\bar{1}$ 生成，但 $\bar{1}$ 不是线性无关的，因为 $n\bar{1} = 0$ 而 $\mathbb{Z}$ 中 $n \neq 0$。更一般地，每个挠元单独就线性相关。

前面的构造还给出两个非自由模。设 $V$ 是 $K$ 上非零有限维向量空间，并带有与算子 $T$ 关联的 $K[x]$-模结构。幂 $\mathrm{id}_V, T, T^2, \ldots$ 属于有限维空间 $\mathrm{End}_K(V)$，所以存在非零多项式 $p$ 满足 $p(T) = 0$。于是对每个 $\mathbf{v} \in V$ 有 $p \cdot \mathbf{v} = \mathbf{0}$，$V$ 的每个元素都是挠元，故 $V$ 不是 $K[x]$ 上的自由模。

令 $\dim_K V = n$，令 $R = \mathrm{End}_K(V)$ 通过求值作用于 $V$。对任意非零 $\mathbf{v} \in V$ 与任意 $\mathbf{w} \in V$，都存在把 $\mathbf{v}$ 送到 $\mathbf{w}$ 的线性映射，因此 $R\mathbf{v} = V$，$V$ 是循环模。当 $n > 1$ 时，将 $\mathbf{v}$ 扩展为 $V$ 的一组基，令 $T$ 把 $\mathbf{v}$ 送到 $\mathbf{0}$ 并固定其余基向量。此时 $T \neq 0$ 且 $T\mathbf{v} = \mathbf{0}$，所以 $\{\ \mathbf{v} \ \}$ 线性相关。$V$ 的每个非零元素都同理自身相关，因此 $V$ 上没有非空线性无关集，$V$ 不是 $R$ 上的自由模。相反，$n$ 个 $V$ 的直和 $V^n$ 是自由模。固定 $V$ 的一组基 $\mathbf{e}_1, \ldots, \mathbf{e}_n$，映射 $T \mapsto (T\mathbf{e}_1, \ldots, T\mathbf{e}_n)$ 是从 $R$ 到 $V^n$ 的双射，因为线性映射由其在基上的值唯一决定，任意值元组都能实现。它是 $R$-线性的，因为 $ST$ 的像为 $(ST\mathbf{e}_1, \ldots, ST\mathbf{e}_n) = S(T\mathbf{e}_1, \ldots, T\mathbf{e}_n)$。因此作为左 $R$-模有 $V^n \cong R$，$V^n$ 是秩 $1$ 的自由模。

也存在无限秩自由模。令 $R^{(\infty)}$ 为所有序列 $(x_1, x_2, \ldots)$ 的集合，其中元素取自 $R$，且除有限多个 $i$ 外均有 $x_i = 0$，并采用逐分量运算。元素 $\hat{\mathbf{e}}_i$ 在位置 $i$ 为 $1$、其余位置为 $0$，它们生成 $R^{(\infty)}$，因为每个元素只有有限个非零项，正是相应的有限线性组合。它们线性无关，因为关系 $\sum_i r_i\hat{\mathbf{e}}_i = \mathbf{0}$ 按分量读出每个 $i$ 的 $r_i = 0$。因此 $R^{(\infty)}$ 是具有可数无限基的自由模。所有项都可任意取值的序列集合也是 $R$-模，但 $\hat{\mathbf{e}}_i$ 不生成它，因为每个 $R$-线性组合只有有限个非零项。

> 在域上每个模都是自由模，每个生成集都包含一组基，因此每个向量空间都有维数。在一般环上这两个结论都不成立，向量空间中等价的两种基刻画也会分离。基仍是极小生成集，但极大线性无关集不一定是基：$\{\ 2 \ \}$ 在 $\mathbb{Z}$-模 $\mathbb{Z}$ 中线性无关且无法扩充，却只生成 $2\mathbb{Z}$。

## 模同态与同构

模同态也称为 $R$-线性映射，是两个左 $R$-模之间保持加法结构与环作用的[函数](../functions/) $\varphi : M \to N$。明确地说，$\varphi$ 对所有 $\mathbf{u}, \mathbf{v} \in M$ 与 $r \in R$ 满足：

$$\varphi(\mathbf{u} + \mathbf{v}) = \varphi(\mathbf{u}) + \varphi(\mathbf{v})$$

$$\varphi(r \cdot \mathbf{v}) = r \cdot \varphi(\mathbf{v})$$

这两个条件合并为：对所有 $r, s \in R$ 与 $\mathbf{u}, \mathbf{v} \in M$，$\varphi(r\mathbf{u} + s\mathbf{v}) = r\varphi(\mathbf{u}) + s\varphi(\mathbf{v})$。[核](../homomorphisms-and-isomorphisms/)与像定义为：

$$\ker(\varphi) = \{\ \mathbf{v} \in M : \varphi(\mathbf{v}) = \mathbf{0} \ \}$$

$$\mathrm{im}(\varphi) = \{\ \varphi(\mathbf{v}) : \mathbf{v} \in M \ \}$$

核是 $M$ 的子模，像是 $N$ 的子模，且模同态的复合仍是模同态。一个同态是单射，当且仅当其核退化为零子模。

从 $M$ 到 $N$ 的所有 $R$-模同态记为 $\mathrm{Hom}_R(M, N)$。按点加法 $(\varphi + \psi)(\mathbf{v}) = \varphi(\mathbf{v}) + \psi(\mathbf{v})$，它是以零映射为单位元的阿贝尔群。从 $M$ 到自身的同态称为自同态，所有这类映射记为 $\mathrm{End}_R(M)$。配以逐点加法与复合，$\mathrm{End}_R(M)$ 是以 $\mathrm{id}_M$ 为单位元的环。它是 $\mathrm{End}(M)$ 的子环，由与每个标量作用可交换的加法自同态组成。当 $R = \mathbb{Z}$ 时两个环重合：阿贝尔群之间保持加法的映射 $\varphi : A \to B$ 对每个整数 $n$ 都满足 $\varphi(n\mathbf{a}) = n\varphi(\mathbf{a})$，当 $n > 0$ 时由归纳法得到，$n < 0$ 时由 $\varphi(-\mathbf{a}) = -\varphi(\mathbf{a})$ 得到。因此阿贝尔群同态与 $\mathbb{Z}$-模同态是同一类映射。

设 $R$ 交换，把 $R^n$ 看作由 $R$ 中元素组成的 $n \times 1$ 列。对于元素在 $R$ 中的固定 $n \times m$ 矩阵 $A$，左乘 $\mathbf{x} \mapsto A\mathbf{x}$ 是从 $R^m$ 到 $R^n$ 的 $R$-模同态。可加性来自矩阵分配律，而恒等式 $A(r\mathbf{x}) = r(A\mathbf{x})$ 用到了交换性：$A(r\mathbf{x})$ 的第 $i$ 个分量是 $\sum_j a_{ij}rx_j$，将其改写为 $r\sum_j a_{ij}x_j$ 需要 $a_{ij}r = ra_{ij}$。在非交换 $R$ 上，只要 $A$ 的元素为中心元，同样结论仍成立，特别是它们为 $1$ 的整数倍时。作为非交换例子，令 $R = \mathrm{M}_n(K)$，令 $M$ 为 $K$ 上 $n \times s$ 矩阵组成的左 $R$-模。固定 $K$ 上的 $s \times s$ 矩阵 $C$，右乘 $X \mapsto XC$ 是 $M$ 的自同态，因为对每个 $A \in R$ 有 $(AX)C = A(XC)$。

- - -

双射的模同态称为模同构；两个模之间存在同构时称它们同构，记作 $M \cong N$。模可能同构于自身的真子模。考虑 $\mathbb{Z}$-模 $\mathbb{Z}$ 及映射 $\varphi : \mathbb{Z} \to \mathbb{Z}$，定义为 $\varphi(a) = 2a$。对任意 $a, b \in \mathbb{Z}$：

$$
\begin{align}
\varphi(a + b) &= 2(a + b) \\[6pt]
               &= 2a + 2b \\[6pt]
               &= \varphi(a) + \varphi(b)
\end{align}
$$

直接验证还表明，对每个 $n \in \mathbb{Z}$ 有 $\varphi(na) = 2na = n\varphi(a)$，因此 $\varphi$ 是 $\mathbb{Z}$-线性的。其核是平凡子模 $\{\ 0 \ \}$，所以 $\varphi$ 是单射，像是真子模 $2\mathbb{Z}$。因此 $\varphi$ 给出 $\mathbb{Z}$ 与其一个真子模之间的同构；这是有限维[向量空间](../vector-spaces/)中不可能发生的现象，因为空间到自身的单射线性映射必然是满射。

> 这个例子区分了模与有限维向量空间。在有限维向量空间中，[秩-零化度定理](../rank-of-a-matrix/)说明自同态单射当且仅当满射。一般环上的非零标量不一定可逆，因此即使秩为 $1$ 的自由模的自同态也可能单射而不满射。[同态与同构](../homomorphisms-and-isomorphisms/)页面定义了单态射、满态射、同构、自同态与自同构等相关概念。
