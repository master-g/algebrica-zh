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
- [2026-10-03] 公式里的文字：validate-translation 同时拒绝 \text{} 内的中文和英文散文，译文改用符号（\forall、\mathrm 缩写）或把说明移到正文
- [2026-10-03] 公式拓扑审计（audit-latex-topology）在 9 篇早期译文上不通过（前任译者有意增删公式：unit-circle、tangent-and-cotangent、trigonometric-identities、hyperbolic-secant/tangent 等）；用户决定保留 current 标记，不重写

## 失败尝试

<!-- 追加：走不通的路径及原因，每条一行。 -->
- [2026-10-03] 本机没有 agent-browser 命令，监督技能要求的浏览器验收改用无头 Chrome + CDP 脚本完成（astro preview 起服务，--remote-debugging-port 连接）

## 上次会话
<!-- 整块改写：分支、验证命令及实际结果、停在何处；任务细节只留一行指向证据目录。 -->
- [2026-10-03] main：存量过期译文 59 → 1、缺失译文 18 → 0（current 295），分三个提交（补链接 / 重写 / 新译）经短分支快进合并后推送
  逐篇 validate-translation 通过；test:unit 191 通过，build --force、check:public-release、check:public-history、translation-status --verify、test:smoke（部署前缀）均通过；18 个新页面桌面与手机视口无公式报错和断图

## 下次运行
<!-- 整块改写：接下来的任务和优先级，含仍受阻的项。 -->
- [2026-10-03] 确认本次推送的 CI 与部署结果；35 篇重写和新译未经人工通读，docs/qa 未写验收记录
  functions/composite-functions 故意保持过期：上游唯一改动是把标题 “## Definition” 写坏成 “f## Definition”，等上游修正后只需重盖 source_hash
  待决：单行公式居中的样式修复；手机视口下 .table-1 内过宽公式被裁切（integration-strategies 有理化换元表首行，overflow hidden 所致）；squeeze-theorem 上游 -3.svg 引用两次
