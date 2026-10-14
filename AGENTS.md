# algebrica-zh — Claude 项目上下文

> 项目指令与常用命令，供 Claude / AI 编码代理按任务需要查阅。
> 跨会话记忆见 [PROJECT_MEMORY.md](./PROJECT_MEMORY.md)。

## 技术栈

<!-- 使用的语言、框架、工具链、版本约束。例: Python 3.12 / FastAPI / uv / Postgres 16 -->

- Node.js 22（README 与 CI 均固定 22），npm，ESM（`"type": "module"`，脚本与库均为 `.mjs`）。
- Astro `~7.1.0` 静态站点，部署到 GitHub Pages；内容集合定义在 `src/content.config.ts`。
- Markdown 管线：`remark-math` + `rehype-mathjax`（`mathjax-full`）+ `rehype-sanitize`，另有 `katex`、`js-yaml`；自定义插件在 `src/plugins/`。
- 测试用 Node 内置 `node --test`，无测试框架。
- 硬性前置：英文上游仓库 checkout，默认 `../algebrica`，可用 `ALGEBRICA_SOURCE_DIR` 覆盖；其 HEAD 必须等于 `upstream-lock.json` 的提交（`src/lib/upstream-source.mjs`）。
- 其他环境变量：`SITE_URL`、`SITE_BASE`（Pages 子路径构建用）；`DEV_SMOKE_BASES`（逗号分隔，限定 `test:smoke` 测哪些站点前缀，默认 `/` 和 `/algebrica-zh/`，CI 只测部署前缀）。

## 命令

<!-- 常用脚本、构建命令、测试命令、lint/格式化命令。让代理无需猜测即可运行。 -->

- 安装依赖: `npm ci`
- 开发 / 预览: `npm run dev`、`npm run preview`
- 构建: `npm run build`（prebuild 跑 `check-upstream` + `sync-svg`，postbuild 跑 `check-rendered-content`；没有上游 checkout 会失败）
- 测试: `npm test`（= `npm run test:unit` + `npm run test:smoke`）；单文件 `node --test tests/unit/<name>.test.mjs`
- 发布门禁: `npm run check:public-history`、`npm run check:public-release`（后者需先构建）；另有 `check:upstream`、`check:licenses`、`check:static-site`
- 翻译状态: `node scripts/translation-status.mjs [--verify]`
- 单篇译文准入: `node scripts/validate-translation.mjs <section>/<slug>`（`--all` 审计存量）
- 上游同步审计: `npm run audit:upstream`
- 本地化 SVG: `npm run sync:localized-svg-palette`、`npm run sync:localized-svg-structure`
- Lint / 格式化: 暂无（仓库没有 eslint / prettier / editorconfig / tsconfig 配置）

## 代码风格

<!-- 命名约定、格式规则、架构偏好。例: 函数用 snake_case、组件单文件、优先组合而非继承 -->

- 无格式化工具，以现有代码为准：2 空格缩进、单引号、分号、多行尾逗号、`node:` 前缀导入内置模块。
- `scripts/*.mjs` 是入口，可复用逻辑放 `scripts/lib/` 或 `src/lib/` 并具名导出，供 `tests/unit/*.test.mjs` 直接导入；失败用 `process.exitCode = 1`。
- 译文路径 `content-zh/<section>/<slug>.md`，frontmatter 含 `title`、`title_en`、`source`、`license`、`tags`、`translation`；术语以 `glossary.yaml` 为准，章节结构以 `sections.yaml` 为准。
- 译文保持上游的公式、链接、图片、shortcode 结构不变；`\text{...}` 内不放中文（净化后的 MathJax SVG 会把 CJK 字形压到亚像素）。
- 本地化插图命名 `public/assets/<section>/svg/<name>.zh.svg`，每个都要在 `public/assets/provenance.json` 有完整来源条目。

## 禁止文件

<!-- 绝对不能修改的文件清单: 生成物、密钥、锁文件、迁移历史、第三方 vendor 目录等 -->

- 永不入库（`scripts/check-public-release.mjs` 的 `FORBIDDEN_PATHS`）：`public/theme/`、`public/media/`、`public/styles/zh-overrides.css`、`reference/{home,entry,category}.html`、`scripts/fetch-assets.mjs`。`check:public-history` 扫描全部 Git 历史，提交后再删除同样会让 CI 失败。
- 生成物，不手改：`src/data/article-graphs.json`（`scripts/sync-article-graphs.mjs`）、`public/assets/provenance.json`（`scripts/generate-asset-provenance.mjs`）、`public/assets/*/svg/` 下非 `.zh.svg` 文件（`sync-svg` 从上游复制，已忽略）。
- `package-lock.json` 只经 npm 变更；`upstream-lock.json` 只在本地验证新上游提交后单独修改。
- 已忽略的本地产物：`node_modules/`、`dist/`、`.astro/`、`browser-data/`、`.env`、`translation-failures.json`。
- `../algebrica` 上游 checkout 只读。

## 审查规则

<!-- PR 审查的标准和流程: 必须通过的检查、谁审、合并条件、提交信息规范 -->

- CI（`.github/workflows/deploy-pages.yml`）在 PR 和 `main` 推送时依次跑：`test:unit` → `check:public-history` → `test:smoke` → `build` → `check:public-release`；全部通过后仅 `main` 部署 Pages。
- 提交信息用 `type(scope): subject`，如 `feat(content)`、`fix(ci)`、`docs(qa)`、`refactor(release)`；纯文档提交可带 `[skip ci]`。
- 译文准入流程见 `.agents/skills/algebrica-translation-supervisor/SKILL.md`：一次一篇 `section/slug`，不用 `--all-missing`，不调用外部模型 CLI，需浏览器视觉验收。`scripts/translate.mjs` 会调用外部 `omp` CLI，受监督的翻译工作不使用它。
- 自动化门禁不替代桌面与移动端视觉验收（README）；验收记录放 `docs/qa/`。
- 计划见 `docs/plans/`，公开仓库切换流程见 `docs/runbooks/public-repository-cutover.md`，未处理的审查遗留见 `docs/residual-review-findings/`。
- 无 CODEOWNERS、PR 模板或 CONTRIBUTING；依赖更新由 Dependabot 每周提 PR。

## 导航

<!-- 代码放在哪、开工前先读哪份文档、怎么搜（大仓库限定目录或用专用索引工具，而不是全仓 grep）、哪些子目录有自己的 CLAUDE.md / AGENTS.md。单包小仓库写一行即可。 -->

- 单包仓库。中文译文在 `content-zh/<section>/`，英文原文从上游 checkout 读取；页面与渲染入口在 `src/pages/`（`[slug].astro`、`_render-page.mjs`），共享逻辑在 `src/lib/`，Markdown 插件在 `src/plugins/`，样式只有 `src/styles/site.css`。
- 脚本入口在 `scripts/`，测试在 `tests/unit/`；插图在 `public/assets/<section>/svg/`。
- 动手前先读 `PROJECT_MEMORY.md`；翻译任务读 `.agents/skills/algebrica-translation-supervisor/SKILL.md`；`docs/` 下按需读 plans、qa、runbooks。没有嵌套的 AGENTS.md / CLAUDE.md。

## 工作流与陷阱

<!-- 每条写做法 + 原因。需用户确认才能做的操作（推送、开 PR、跑付费 CI、改生产配置）；慢命令把输出重定向到文件再选读，不用管道过滤；按改动范围选构建 / 测试变体；检出过旧先同步；踩过的坑及其原因。 -->

- 推送 `main` 前须用户确认：推送即触发 CI 并在通过后部署 GitHub Pages。运行 `scripts/translate.mjs`（调用外部 `omp` CLI）同样须确认。
- 同步上游的顺序：先在旧锁定提交下跑 `sync:localized-svg-palette` / `-structure`，再改 `upstream-lock.json`。两个脚本按「锁定提交..上游 HEAD」取差异，先改锁会得到空差异，本地化插图不会同步。
- 上游改名 SVG 时，sync 脚本按新增处理、不迁移：`.zh.svg` 需手工 `git mv` 到新分区，并改译文里的 `/assets/<section>/` 路径。
- `test:smoke` 和 `build` 很慢（MathJax 全量渲染，本地每遍约 70 秒，换 `SITE_BASE` 会清空内容缓存）：输出重定向到文件再选读；只改单篇时先跑 `validate-translation` 和相关单测，最后再跑全量。
- 净化白名单 `src/lib/math-sanitize-schema.mjs` 的键按 hast 实际写法：SVG 表现属性带连字符（`stroke-width`），只有 `data-*` 是驼峰；写错不会匹配，也不报错。

## 项目记忆 (回写约定)

跨会话的持久信息记录在 [PROJECT_MEMORY.md](./PROJECT_MEMORY.md)，只写代码、Git 和文档推导不出的内容。

收尾顺序：验证 → 回写记忆 → 提交 → 推送。回写与本次改动进同一个提交；不提交的任务在结束前回写。

回写是提炼，不是记录：

- 「上次会话」「下次运行」整节改写成一块（分支、验证命令与实际结果、停在何处；接下来做什么），旧块直接删，历史由 Git 保存。
- 本次确认的决策追加到「已验证的事实」，走不通的路径及原因追加到「失败尝试」；每条一行，写结论、原因和来源或适用范围。能从 `git log`、代码或计划文档 30 秒内推出来的（commit SHA、进度状态、计划内容）不写，只留一行指向证据目录。
- 同主题已有条目就改写它，不追加；结论被推翻就删旧条。写不进两行的长期知识搬进 docs/ 后只留一行指针；反复出现或每次会话都要先知道的陷阱，晋升到本文件「工作流与陷阱」后从记忆里删掉。
- 结束前核对门槛：全文 ≤ 24 KB，单行 ≤ 300 字符，改写节各一块。装了 bootstrap-claude 技能的会话用它的 `scripts/memory.py check` 校验，`compact` 只压改写节；追加节条目由人合并或搬出，脚本不自动删。

<!-- bootstrap-claude convention v3 -->

