# 数学书籍网站模板调研

日期：2026-08-05

## 结论

不建议把现有 Astro 站点整体迁移到另一个模板框架。推荐采用组合方案：

1. 用 Tufte CSS 的正文尺度、旁注和图文关系作为文章页视觉基线。
2. 用 LaTeX.css 的定理、定义、证明、表格和打印文档语法作为数学组件基线。
3. 保留当前 Astro 路由、Markdown 处理、搜索、插图和知识图谱实现。
4. 保留当前原型中的分类索引和移动端知识图谱，不采用文档站的永久双侧栏。
5. 中文正文继续使用系统衬线字体栈，不复制候选项目的拉丁字体文件。

这套方案比直接使用 Calculus Made Easy 主题具有更清晰的许可证边界，也比迁移到 Starlight、MATbook、PreTeXt 或 Quarto 的改动范围小。

## 候选对比

| 候选 | 类型 | 许可证 | 适合借鉴的部分 | 主要问题 | 结论 |
| --- | --- | --- | --- | --- | --- |
| Calculus Made Easy | 单本书网站与定制主题 | 仓库未声明统一许可证；站点说明主题来自 Dive Into HTML5 | 约 680px 正文宽度、章节目录、居中插图、前后章导航、纸质书节奏 | 仓库含旧字体、旧 JavaScript、分析代码和商业推广内容；主题声明与 CSS 文件头的许可证表述不统一 | 仅作视觉参考，不复制代码或资产 |
| Tufte CSS | CSS 视觉系统 | MIT | 窄正文、宽边注、旁注、图表和正文的紧密关系、移动端旁注降级 | 默认 ET Book 字体不覆盖中文；没有分类页、搜索和知识图谱 | 文章页视觉基线 |
| LaTeX.css | 近乎无 class 的 CSS 库 | MIT | 定理、定义、引理、证明、脚注、表格、打印文档样式；提供简体中文标签文件 | 默认外观接近通用 LaTeX 文档；导航、分类页和知识图谱需要自行实现 | 数学组件基线 |
| Astro Starlight | Astro 文档站框架 | MIT | 搜索、国际化、可访问导航、移动菜单、目录和组件覆盖机制 | 默认双侧栏更像开发文档；接入现有自定义内容集合和知识图谱需要大量覆盖 | 不作为整站模板，可参考可访问交互 |
| MATbook | Zola 书籍主题 | MIT | 章节编号、左右目录、搜索、MathJax、TikZ、定理环境和键盘快捷键 | 需要从 Astro 迁移到 Zola；项目采用量小，运行时功能多于本站需求 | 仅参考章节导航 |
| PreTeXt | STEM 出版系统 | GPL | 结构化教材、多格式输出、无障碍和数学出版语义 | 需要重写内容源格式和构建管线 | 排除 |
| Quarto Book | 科学出版系统 | CLI 1.4+ 为 MIT；组件具有多种许可证 | 搜索、章节编号、交叉引用、HTML/PDF/EPUB 多格式输出 | 需要 Pandoc/Quarto 构建链，并与现有 Astro 门禁重复 | 排除 |

## Calculus Made Easy 审计

网站说明正文根据 Project Gutenberg 版本手工转换为 HTML，并说明主题借自 Dive Into HTML5。网站把主题标记为 CC BY 3.0。仓库的 `public/screen.css` 文件头则包含 Mark Pilgrim 的 BSD 风格再分发条款。仓库根目录没有 `LICENSE` 文件，GitHub API 也没有识别到仓库许可证。

因此，不能把整个仓库或 `screen.css` 当作一个许可证明确的模板包。可以独立实现以下通用设计原则：

- 把文章正文控制在约 680–760px。
- 首页首先呈现书名、说明和章节目录。
- 使用衬线正文、清晰的章节层级和克制的颜色。
- 将插图与独立公式放在正文中轴线上。
- 在文章末尾提供上一章、下一章和返回目录入口。

不应复制以下材料：

- `screen.css` 和 `mobile.css` 原文件。
- Essays 1743、Libertine 与 Alphabet of Children 字体文件。
- 商业推广区块、图片、jQuery、Modernizr 和 Google Analytics 页面。
- Calculus Made Easy 的站点字标和装饰性首字母实现。

来源：

- [Calculus Made Easy 网站](https://calculusmadeeasy.org/)
- [Calculus Made Easy GitHub 仓库](https://github.com/nadvornix/calculus-made-easy)
- [CC BY 3.0 许可说明](https://creativecommons.org/licenses/by/3.0/)

## 推荐视觉结构

### 分类页

- 保留当前原型的单列编号章节索引。
- 将分类说明限制为一段，不增加卡片网格。
- 桌面端最多显示一列正文和一列短说明。
- 移动端将编号、标题和状态压缩到一行或两行。

### 文章页

- 正文宽度使用 700–760px。
- 桌面端在正文左侧保留窄目录；大屏幕允许右侧出现来源注和术语注。
- 移动端把目录改为横向可滚动锚点。
- 定义、定理、证明和例题采用 LaTeX.css 风格的轻量语义框，不使用彩色卡片。
- 公式、表格和插图保持正文中轴线对齐。
- 文章末尾依次显示知识图谱、许可署名和前后章导航。

### 字体和颜色

- 中文正文使用系统衬线字体。
- 导航和元数据使用系统无衬线与等宽字体。
- 拉丁数学字体由现有 MathJax/KaTeX 渲染链负责。
- 页面使用纸张色背景、深色正文和一个低饱和蓝色强调色。
- 不引入候选模板的 Web 字体，除非后续单独审查字体许可证与中文覆盖。

## 实施影响

推荐方案不新增站点框架依赖。实现时只需要：

1. 从零编写本站 `site.css`，将 Tufte CSS 和 LaTeX.css 视为行为参考。
2. 为 Markdown 输出增加 `definition`、`theorem`、`proof` 和 `example` 等本站 class 契约。
3. 扩展文章布局以支持可选旁注，不要求每篇文章使用旁注。
4. 在 `THIRD_PARTY_NOTICES.md` 中记录实际复制的 MIT 代码片段；如果只采用设计原则，则不复制源代码。
5. 继续运行公式、移动端、知识图谱、公开发布和许可证门禁。

## 主要来源

- [Tufte CSS 官方仓库](https://github.com/edwardtufte/tufte-css) — MIT，CSS-only，旁注与图文布局。
- [LaTeX.css 官方仓库](https://github.com/vincentdoerig/latex-css) — MIT，数学文档组件与简体中文标签。
- [Astro Starlight 官方仓库](https://github.com/withastro/starlight) — MIT，Astro 文档框架。
- [Astro Starlight 主题说明](https://astro.build/themes/details/starlight/) — 搜索、国际化和可访问功能。
- [MATbook 官方仓库](https://github.com/srliu3264/MATbook) — MIT，Zola 书籍主题。
- [MATbook 官方主题页](https://www.getzola.org/themes/matbook/) — 数学、章节目录和搜索功能。
- [PreTeXt 官方仓库](https://github.com/PreTeXtBook/pretext) — STEM 出版系统。
- [Quarto Book 官方文档](https://quarto.org/docs/books/index.html) — HTML 书籍、搜索和多格式输出。
- [Quarto 许可证说明](https://quarto.org/license.html) — CLI 和相关组件许可证范围。
