# 项目记忆 — algebrica-zh

> 跨会话的持久信息，只记代码、Git 和文档推导不出的内容。回写约定见 [CLAUDE.md](./CLAUDE.md)。
> 门槛：全文 ≤ 24 KB，单行 ≤ 300 字符；改写节各只留一块。

## 已验证的事实

<!-- 追加：确认过的决策和约束，每条一行：结论 + 原因 + 来源。同主题改写既有条目，不追加第二条。 -->
- [2026-10-03] 同步上游的顺序：先在旧锁定提交下跑 sync:localized-svg-palette / -structure（两者按 upstream-lock..上游 HEAD 取差异），再改 upstream-lock.json；先改锁则差异为空，本地化插图不会同步
- [2026-10-03] 过期译文的基准版本可还原：译文 source_hash 等于上游历史中某个版本源文件的 sha256，逐个提交比对即可得到基准，再 diff 到当前上游就是完整漂移
- [2026-10-03] validate-translation 用 KaTeX 校验公式，不认 MathJax 扩展宏：binomial-coefficient 上游的 \enclose{circle}{6} 在译文中改成了 \boxed{6}（视觉由圆圈变方框），上游若再用此类宏需同样处理
- [2026-10-03] sections.yaml 新增 introduction 分区（order 0，导言）以修复 learning-mathematics 的 /category/introduction/ 断链；[slug].astro 用 ?? 取 order，否则 0 会显示成“—”
- [2026-10-03] 单行 $$…$$ 公式全站不居中：site.css 中 p > mjx-container:not([display]) 的 inline-block 规则覆盖了 p.standalone-math 的居中规则（definite-integrals 等未改动文章同样如此），属既有样式问题

- [2026-10-03] CI 冒烟慢的原因：astro dev 启动时整套内容（英文约 294 篇 + 中文约 279 篇）带 MathJax 全量渲染，换 SITE_BASE 会清空内容缓存，所以两种前缀加构建共渲染三遍；本地每遍约 70 秒，CI 约慢 6 倍（构建同步实测 6.5 分钟），上限已调到 1200 秒，CI 冒烟只测部署前缀（DEV_SMOKE_BASES）；ef44696 的 CI 实测两种前缀共 1329 秒、构建 621 秒；同前缀重启也不复用缓存，缓存 .astro 无效
- [2026-10-08] 公式里的文字：validate-translation 同时拒绝 \text{} 内的中文和英文散文，译文改用符号或把说明移到正文；“中文被压到亚像素”的原因是净化剥掉 <text> 的 font-size 与 scale(1,-1)，属性已恢复但未视觉验证，规则是否放宽待用户决定
- [2026-10-03] 公式拓扑审计（audit-latex-topology）在 9 篇早期译文上不通过（前任译者有意增删公式：unit-circle、tangent-and-cotangent、trigonometric-identities、hyperbolic-secant/tangent 等）；用户决定保留 current 标记，不重写
- [2026-10-08] 净化白名单（src/lib/math-sanitize-schema.mjs，astro.config 与 _render-page 共用）的键须按 hast 实际写法：SVG 表现属性带连字符（stroke-width、font-size），只有 data-* 是驼峰；写成 strokeWidth 之类不会匹配。新放行属性前先对比净化前后的属性集
- [2026-10-08] scripts/check-math.mjs 不在 CI 中，修复前后都以 1 退出（公式数量偏差）；放行 data-mjx-error 后它能看到上游英文 arctangent-and-arccotangent 的 6 处 MathJax 报错，中文构建产物无报错
- [2026-10-08] 上游 81d44d7 把 sets-and-numbers 拆成 numbers/ 与 sets/，但 functions/absolute-value-function.md 仍引用旧目录的两张图，Astro 构建报 ImageNotFound；astro.config.mjs 里的 remarkFixMovedUpstreamImages 临时改写，上游修正后删除
- [2026-10-08] 上游删除或改名 SVG 时两个 sync:localized-svg 脚本会因读不到文件崩溃，已加 --diff-filter=d；改名文件按新增处理、不会自动迁移，.zh.svg 需手工 git mv 到新分区并改译文里的 /assets/<section>/ 路径
- [2026-10-08] sections.yaml 的 entries 顺序取自 algebrica.org/category/<dir>/ 页面的文章顺序；上游旧地址 /category/sets-and-numbers/ 仍可访问，本站该地址在拆分后为 404，未加重定向
- [2026-10-08] sets/sets 译文保留 $\{a\}$ 为“单元素集”，上游 81d44d7 该处误写成 $a$；validate-translation 与拓扑审计不比较公式内容，故能通过

## 失败尝试

<!-- 追加：走不通的路径及原因，每条一行。 -->
- [2026-10-03] 本机没有 agent-browser 命令，监督技能要求的浏览器验收改用无头 Chrome + CDP 脚本完成（astro preview 起服务，--remote-debugging-port 连接）

## 上次会话
<!-- 整块改写：分支、验证命令及实际结果、停在何处；任务细节只留一行指向证据目录。 -->
- [2026-10-08] main（经短分支快进合并）：同步上游至 81d44d7——分区拆分、新译 cartesian-product 与 de-morgan-laws、重写 hopital-rule / big-o / little-o、收缩 sets、6 篇小补丁、补 3 条中文图谱
  逐篇 validate-translation 与拓扑审计通过；test:unit 192 通过；build --force、check:public-release、check:public-history、translation-status --verify、test:smoke（部署前缀）通过；12 个页面在 1440x900 与 390x844 下无公式报错、无坏图、无页面溢出

## 下次运行
<!-- 整块改写：接下来的任务和优先级，含仍受阻的项。 -->
- [2026-10-08] 待用户决定：是否为 /category/sets-and-numbers/ 加重定向；\text{} 内中文规则是否放宽
  沿用未决项：本次 6 篇与此前 35 篇重写和新译未经人工通读、docs/qa 无验收记录；composite-functions 等上游修标题；单行公式居中；手机视口 .table-1 过宽公式被裁切；23 篇文章有英文图谱而无中文图谱
