# 公开版迁移视觉验收

- 日期：2026-08-05
- 验收对象：`codex/public-redesign-migration`
- 预览地址：`http://127.0.0.1:4321/algebrica-zh/`
- 预览方式：项目子路径生产构建与 Astro Preview
- 桌面视口：1440 × 900
- 移动视口：390 × 844

## 结论

视觉验收通过。桌面端与移动端均未出现页面级水平溢出。搜索、公式、插图、知识图谱与黑白主题均符合迁移设计。

## 验收记录

| 项目 | 桌面端 | 移动端 | 结果 |
| --- | --- | --- | --- |
| 搜索按钮 | 36 × 32 px；1 个 Lucide SVG；无文本 | 36 × 38 px；1 个 Lucide SVG；无文本 | 通过 |
| 站内搜索 | “集合”返回 5 条建议；链接均含 `/algebrica-zh/` | 导航面板内搜索框与图标单行显示 | 通过 |
| 集合页插图 | 6 幅插图在 680 px 阅读列内中心偏差为 0 | 6 幅插图在 350 px 阅读列内中心偏差为 0 | 通过 |
| 集合页公式 | 50 个块级公式中心偏差为 0 | 50 个块级公式宽度不超过 350 px 阅读列 | 通过 |
| 中位数页公式 | 4 个块级公式中心偏差为 0 | 4 个块级公式中心偏差为 0 | 通过 |
| 知识图谱 | 23 个节点、22 条连线；798 × 440 px 画布完整显示 | 350 px 可视区承载 798 px 画布；横向滚动 430 px 后资料栏完整可见 | 通过 |
| 黑色主题 | 入口可见 | 背景 `rgb(15, 15, 15)`；正文 `rgb(240, 239, 232)` | 通过 |
| 控制台 | 关键页面无 warning 或 error | 关键页面无 warning 或 error | 通过 |

## 发布边界证据

- 项目子路径生产构建生成 283 个页面。
- 静态发布门禁检查 HTML 内部链接与资源、CSS `url()` 引用，以及 JavaScript 中的禁止运行时域名。
- 页面资源路径均包含 `/algebrica-zh/`。
- 页面没有加载 Google Fonts、Google Analytics、上游 WordPress 主题或其他外部运行时资源。
- 页面保留 CC BY-NC 4.0 许可链接；该链接不是运行时资源。

## 截图

### 桌面端

- [首页](screenshots/home-desktop.png)
- [集合页首屏](screenshots/sets-top-desktop.png)
- [集合知识图谱](screenshots/sets-graph-desktop.png)
- [中位数与分位数](screenshots/median-desktop.png)

### 移动端

- [首页](screenshots/home-mobile.png)
- [导航与搜索](screenshots/mobile-menu-search.png)
- [集合页首屏](screenshots/sets-top-mobile.png)
- [集合知识图谱画布](screenshots/sets-graph-mobile.png)
- [集合知识图谱资料栏](screenshots/sets-graph-mobile-meta.png)
- [中位数与分位数](screenshots/median-mobile.png)
- [黑色主题](screenshots/median-mobile-dark.png)

## 未覆盖边界

- 本次未验证 GitHub Pages 的线上部署。工作流需要在公开仓库的 `main` 分支运行后取得线上证据。
- 本机未安装 `actionlint`。工作流已通过 YAML 解析、不可变 Action 提交检查和权限边界单元测试。
