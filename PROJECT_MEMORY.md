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

## 失败尝试

<!-- 追加：走不通的路径及原因，每条一行。 -->
- [2026-10-03] 本机没有 agent-browser 命令，监督技能要求的浏览器验收改用无头 Chrome + CDP 脚本完成（astro preview 起服务，--remote-debugging-port 连接）

## 上次会话
<!-- 整块改写：分支、验证命令及实际结果、停在何处；任务细节只留一行指向证据目录。 -->
- [2026-10-08] main（已提交，未推送）：修复矩阵括号断开——净化剥掉了拉伸定界符嵌套 <svg> 的 x/y，同批补回表格线、\boxed 边框、<text> 的属性，白名单合并为单一模块
  test:unit 192 通过；build --force 通过；dist 中 861 个拉伸定界符均带 y；无头 Chrome 截图确认 matrices 括号、factoring-quadratic-equations 表格线、binomial-coefficient 方框；test:smoke 未运行

## 下次运行
<!-- 整块改写：接下来的任务和优先级，含仍受阻的项。 -->
- [2026-10-08] 上游落后 7 个提交（锁定 5148aa2，远端 81d44d7，2026-10-07）：sets-and-numbers 拆为 numbers/ 与 sets/，新增 cartesian-product、de-morgan-laws 及 sets-6/7 图，sets、hopital-rule、big-o、little-o 大改；同步牵动 sections.yaml、译文路径和图谱，需单独做
  沿用未决项：35 篇重写和新译未经人工通读、docs/qa 无验收记录；composite-functions 等上游修标题；单行公式居中；手机视口 .table-1 过宽公式被裁切；squeeze-theorem 上游 -3.svg 引用两次
