# 项目记忆 — algebrica-zh

> 跨会话的持久信息，只记代码、Git 和文档推导不出的内容。回写约定见 [AGENTS.md](./AGENTS.md)。
> 门槛：全文 ≤ 24 KB，单行 ≤ 300 字符；改写节各只留一块。

## 已验证的事实

<!-- 追加：确认过的决策和约束，每条一行：结论 + 原因 + 来源。同主题改写既有条目，不追加第二条。 -->
- [2026-10-03] 过期译文的基准版本可还原：译文 source_hash 等于上游历史中某个版本源文件的 sha256，逐个提交比对即可得到基准，再 diff 到当前上游就是完整漂移
- [2026-10-03] validate-translation 用 KaTeX 校验公式，不认 MathJax 扩展宏：binomial-coefficient 上游的 \enclose{circle}{6} 在译文中改成了 \boxed{6}（视觉由圆圈变方框），上游若再用此类宏需同样处理
- [2026-10-03] sections.yaml 新增 introduction 分区（order 0，导言）以修复 learning-mathematics 的 /category/introduction/ 断链；[slug].astro 用 ?? 取 order，否则 0 会显示成“—”
- [2026-10-14] 单行 $$…$$ 被 remark-math 6 解析为行内公式（\tag 丢失、不居中），已由 src/plugins/remark-display-math.mjs 提升为块级；21 篇（如 inequalities-with-absolute-value）把多行公式开头 $$ 与内容写在同一行，配对被打乱，仍按行内渲染，属上游写法
- [2026-10-14] 改 Markdown 管线（astro.config 或 _render-page 的插件）后必须 npm run build -- --force：内容层按文件摘要缓存渲染结果，未改动的文章会沿用旧 HTML，普通构建看不出插件是否生效
- [2026-10-14] Astro 在自定义 rehype 插件之后才给标题加 id，且保留已有 id；rehype-article-outline 用 github-slugger 按同一规则先行赋 id，大纲链接才能拿到 href
- [2026-10-14] 字体按 tufte-reader 拆成拉丁 STIX Two Text + 中文 Noto Serif SC；STIX 用上游 WOFF2 原样分发、不子集：OFL 保留名是 TM Math，不禁止子集沿用原名，但 STIX Fonts 是 IEEE 商标，保守起见不修改；公式容器钉在 Noto 上，否则 ex 随拉丁字体变、公式整体缩小约 8%

- [2026-10-03] CI 冒烟慢的原因：astro dev 启动时整套内容（英文约 294 篇 + 中文约 279 篇）带 MathJax 全量渲染，换 SITE_BASE 会清空内容缓存，所以两种前缀加构建共渲染三遍；本地每遍约 70 秒，CI 约慢 6 倍（构建同步实测 6.5 分钟），上限已调到 1200 秒，CI 冒烟只测部署前缀（DEV_SMOKE_BASES）；ef44696 的 CI 实测两种前缀共 1329 秒、构建 621 秒；同前缀重启也不复用缓存，缓存 .astro 无效
- [2026-10-08] 公式里的文字：validate-translation 同时拒绝 \text{} 内的中文和英文散文，译文改用符号或把说明移到正文；“中文被压到亚像素”的原因是净化剥掉 <text> 的 font-size 与 scale(1,-1)，属性已恢复但未视觉验证，规则是否放宽待用户决定
- [2026-10-03] 公式拓扑审计（audit-latex-topology）在 9 篇早期译文上不通过（前任译者有意增删公式：unit-circle、tangent-and-cotangent、trigonometric-identities、hyperbolic-secant/tangent 等）；用户决定保留 current 标记，不重写
- [2026-10-08] scripts/check-math.mjs 不在 CI 中，修复前后都以 1 退出（公式数量偏差）；放行 data-mjx-error 后它能看到上游英文 arctangent-and-arccotangent 的 6 处 MathJax 报错，中文构建产物无报错
- [2026-10-08] sections.yaml 的 entries 顺序取自 algebrica.org/category/<dir>/ 页面的文章顺序；上游旧地址 /category/sets-and-numbers/ 仍可访问，本站该地址在拆分后为 404，未加重定向
- [2026-10-08] sets/sets 译文保留 $\{a\}$ 为“单元素集”，上游 81d44d7 该处误写成 $a$；validate-translation 与拓扑审计不比较公式内容，故能通过

## 失败尝试

<!-- 追加：走不通的路径及原因，每条一行。 -->
- [2026-10-03] 本机没有 agent-browser 命令，监督技能要求的浏览器验收改用无头 Chrome + CDP 脚本完成（astro preview 起服务，--remote-debugging-port 连接）

## 上次会话
<!-- 整块改写：分支、验证命令及实际结果、停在何处；任务细节只留一行指向证据目录。 -->
- [2026-10-14] main（未推送，领先 origin 5 个提交）：上游 4de32f4 同步、显示公式、大纲、Makefile 之后，重新生成中文字体子集（补 235 缺字，加覆盖门禁），正文拉丁字体换 STIX Two Text、strong 650→600
  test:unit 195 通过；build、check:licenses、check:public-release、check:static-site 通过；无头 Chrome 确认三份字体已加载、公式 ex/em 仍为 0.516、390 宽 9 篇无溢出，桌面、手机、暗色截图已看过

## 下次运行
<!-- 整块改写：接下来的任务和优先级，含仍受阻的项。 -->
- [2026-10-14] 待用户：确认后推送 main（触发 CI 与 Pages 部署）；是否照 tufte-reader 把正文改为 20px/1.75（会同比放大全部公式，加重手机 .table-1 裁切）；\text{} 内中文规则；sets-and-numbers 重定向
  沿用未决项：modulo-operator 等早期译文公式计数漂移（拓扑审计不过）；glossary 定“互素”但 integers 等 2 篇写“互质”；手机 .table-1 公式裁切；23 篇缺中文图谱；5 篇 source_absent 来源不明
