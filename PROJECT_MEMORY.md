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

## 失败尝试

<!-- 追加：走不通的路径及原因，每条一行。 -->
- [2026-10-03] 本机没有 agent-browser 命令，监督技能要求的浏览器验收改用无头 Chrome + CDP 脚本完成（astro preview 起服务，--remote-debugging-port 连接）

## 上次会话
<!-- 整块改写：分支、验证命令及实际结果、停在何处；任务细节只留一行指向证据目录。 -->
- [2026-10-03] main，已提交未推送：上游同步至 5148aa2（重写 12 篇、新译 2 篇、同步参考文献页），并新增导言分区
  test:unit 191 通过；build --force、rendered-content、check:public-release、test:smoke、translation-status --verify 均通过（current 219 / stale 59 / missing 18）
  14 篇文章桌面与移动视口无溢出、无坏图、无公式错误

## 下次运行
<!-- 整块改写：接下来的任务和优先级，含仍受阻的项。 -->
- [2026-10-03] 推送需用户确认；上次 main 的 CI 在 smoke 步骤启动超时（600 秒），推送后留意是否复现
  待决：单行公式居中的样式修复；存量 59 篇过期、18 篇缺失译文
  squeeze-theorem 上游把 squeeze-theorem-3.svg 引用了两次、-4.svg 未引用，译文照搬，上游修正后跟进
