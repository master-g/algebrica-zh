# 公开版线上部署验收

- 日期：2026-08-05
- 仓库：https://github.com/master-g/algebrica-zh
- 站点：https://master-g.github.io/algebrica-zh/
- 部署提交：`fbb530606afbb46c417413b77c5ff7cfc6863441`
- GitHub Actions：https://github.com/master-g/algebrica-zh/actions/runs/30997022443

## 结论

线上部署验收通过。GitHub Pages 已启用 HTTPS，发布源为 GitHub Actions。部署工作流、代表性页面、项目子路径、搜索、公式、插图和知识图谱均符合公开版发布边界。

## 部署门禁

| 检查 | 结果 |
| --- | --- |
| 单元门禁 | 通过 |
| 公开 Git 历史门禁 | 通过 |
| 根路径与项目子路径开发服务器冒烟门禁 | 通过 |
| 项目子路径生产构建 | 通过 |
| 公开发布门禁 | 通过 |
| Pages 构建产物上传 | 通过 |
| GitHub Pages 部署 | 通过 |

`validate` 作业用时 19 分 17 秒。`deploy` 作业用时 12 秒。两个作业均以 `success` 结束。

## 线上 HTTP 冒烟验证

以下地址均返回 HTTP 200：

- 首页：`/algebrica-zh/`
- 分类目录：`/algebrica-zh/category/sets-and-numbers/`
- 集合：`/algebrica-zh/sets/`
- 中位数与分位数：`/algebrica-zh/median-and-quantiles/`
- 搜索索引：`/algebrica-zh/search.json`
- 含非 ASCII 文件名的中文 SVG：`/algebrica-zh/assets/trigonometry/svg/right-triangle-trigonometry–3.zh.svg`

## 线上浏览器验证

- 首页显示完整分类目录，站内链接均包含 `/algebrica-zh/` 项目子路径。
- 搜索按钮尺寸为 36 × 32 px，只显示 1 个 SVG 图标，文本为空，辅助名称为“搜索”。
- 搜索“集合”返回 5 条建议，建议链接均使用项目子路径。
- 集合页显示 50 个块级公式、6 幅已加载插图和完整知识图谱。
- 知识图谱包含 23 个节点、22 条连线和资料栏。
- 中位数与分位数页显示 4 个块级公式，页面没有水平溢出。
- 页面运行时资源只来自 `master-g.github.io` 和内联 `data:` URL。

线上浏览器控制面未提供历史控制台消息接口，因此本次没有重复采集线上控制台日志。生产构建预览的桌面端和移动端控制台均无 warning 或 error；对应证据记录在 [公开版迁移视觉验收](public-release-visual-acceptance.md)。线上 HTTP、DOM、资源来源和 GitHub Actions 结果提供补充证据。

## 发布问题与修正

首次运行因冷启动超过 180 秒而失败。CI 的开发服务器启动上限已调整为 600 秒，本地默认值保持 180 秒。

第二次运行发现 203 个中文 SVG 衍生文件被 `.gitignore` 排除。发布配置现已跟踪全部 230 个中文 SVG，并加入内容引用闭包门禁和非 ASCII Git 路径测试。

第三次运行完成全部门禁和部署。该运行是本次线上验收依据。

## 分支清理

- 已删除本地已合并分支 `codex/fix-section-index-dev-smoke`。
- 已删除本地已合并分支 `codex/public-redesign-migration`。
- 远端没有遗留的 `codex/*` 工作分支。
- 远端存在 5 个带开放更新用途的 `dependabot/*` 分支；本次不删除这些活动分支。
