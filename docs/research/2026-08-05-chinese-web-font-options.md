# 公开版中文网页字体调研

日期：2026-08-05

## 结论

正文首选 **Noto Serif SC**。导航、按钮、边注元数据和知识图谱继续使用系统无衬线字体。不要同时引入 Noto Serif SC 与思源宋体，因为两者来自同一套协作设计与不同发行包装，功能重叠。

部署时自托管 Noto Serif SC 的 WOFF2 子集。不要直接发布完整 TTF，也不要依赖 Google Fonts CDN。仓库当前 259 篇中文 Markdown 共包含 1,313 个不同汉字，适合建立全站字符集子集，并在内容变化时重新生成。

## 候选比较

| 候选 | 许可证 | 适用位置 | 官方文件规模 | 结论 |
| --- | --- | --- | ---: | --- |
| Noto Serif SC | SIL OFL 1.1 | 正文、标题 | 可变 TTF 25,125,512 B | 首选。中性宋体，适合长文和数学内容。 |
| Source Han Serif SC / 思源宋体 | SIL OFL 1.1 | 正文、标题 | 最新 SC 发布压缩包 138,632,153 B | 与 Noto Serif CJK 属于同一协作字体体系。只在偏好 Adobe 命名与发布包装时选用。 |
| Noto Sans SC | SIL OFL 1.1 | UI、短文本 | 可变 TTF 17,772,300 B | 字体质量适合 UI，但当前系统字体栈已经能完成该任务，不建议增加第二套中文网页字体。 |
| LXGW WenKai / 霞鹜文楷 | SIL OFL 1.1 | 引文、旁注、短标题 | Regular TTF 25,575,676 B | 可作为后续局部风格候选。作者明确指出它不适合大段正文，因此不作为默认正文。 |
| 系统中文字体栈 | 不分发字体文件 | UI、故障回退 | 0 B | 加载成本最低，但 macOS、Windows、Android 的字形差异明显。适合 UI 与回退，不适合要求一致性的正文。 |

## 推荐字体栈

正文：

```css
--serif: "Noto Serif SC", "Source Han Serif SC", "Songti SC", STSong, SimSun, serif;
```

界面与图谱：

```css
--sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  "PingFang SC", "Noto Sans CJK SC", "Microsoft YaHei", sans-serif;
```

数学公式继续使用 KaTeX 自带字体。不要用中文字体覆盖数学字形。

## 排版建议

- 正文使用 Noto Serif SC 400。
- 定义标签与少量强调使用 600。
- 中文标题不要模拟英文斜体。当前候选 B 的中文斜体应改为正常字形，通过字号、间距和字重建立层级。
- 拉丁正文可以保留 EB Garamond，但需要检查中英文基线、x-height 和标点衔接。若混排不稳定，正文全部交给 Noto Serif SC。
- UI 保留系统字体，不再自托管 Noto Sans SC。

## 斜体规则

原版 Algebrica 的 `public/theme/style.css` 将正文二级标题设为粗体正体，将正文段落与引用设为正体。原版只为五、六级标题保留斜体规则，并为 JSXGraph 图形文字设置独立斜体规则。候选 B 不使用五、六级标题，因此不继承装饰性斜体。

- 中文标题、导语、目录标题、定义标签、命题标签与证明标签使用正体。
- 数学公式由 KaTeX 决定变量字形。
- 行文中的拉丁数学变量使用语义化 `<var>` 元素，并使用具有真实 italic 字形的拉丁衬线字体。
- 书名、作品名、引文来源或语言强调只有在源内容明确使用 `<cite>` 或 `<em>` 时才使用斜体。
- 不通过 `font-style: italic` 建立中文视觉层级。
- 在书页根节点设置 `font-synthesis: none`，禁止浏览器合成缺失的斜体。

候选 B 已按以上规则移除目录标题、导语、二级标题、定义标签、命题标签和证明标签中的装饰性斜体。

## 网页加载与部署

Google Fonts 在现代 Chrome 下为 Noto Serif SC 的两个字重返回 202 个 `@font-face` 分片。浏览器只会请求命中的 `unicode-range`，但该方案增加第三方域名、缓存策略和网络可用性依赖。公开 GitHub Pages 应自托管字体子集。

完整 Noto Serif SC 可变 TTF 为 25.1 MB，不应直接作为网页字体。推荐流程：

1. 从 `content-zh/**/*.md`、导航文字和固定 UI 文案收集字符。
2. 保留 ASCII、常用标点、全角标点和已使用的 1,313 个汉字。
3. 生成 WOFF2 子集。
4. 在构建门禁中检查内容字符是否超出字体子集。
5. 在字体目录保留原始 `OFL.txt`、版权声明、版本号和上游链接。
6. 使用长期缓存和带内容哈希的字体文件名。

候选 B 的实测结果：全站字符集为 1,494 个字符，其中汉字 1,313 个。可变 WOFF2 子集为 541,228 B；400 与 600 两个静态 WOFF2 子集合计 569,256 B。候选 B 采用可变子集，并以 data URL 嵌入单文件原型。字体 cmap 覆盖全部汉字；`ř`、`⁵`、`⁹`、`ℝ` 和 `∖` 不在 Noto Serif SC 的字形范围内，由拉丁或数学回退字体渲染。生产实现应改为独立、带内容哈希的 WOFF2 文件。

## 许可证边界

SIL 的 OFL FAQ 明确允许通过 `@font-face` 使用网页字体，也允许完整或子集嵌入。自托管字体属于分发，应保留版权声明与许可证信息。Noto Serif SC 的官方 OFL 文件没有声明 Reserved Font Name；子集仍应保持 OFL，并保留来源和修改说明。

本说明不是法律意见。

## 来源

- [Noto 官方使用与许可证说明](https://notofonts.github.io/noto-docs/website/use/)
- [Noto CJK 官方仓库](https://github.com/notofonts/noto-cjk)
- [Google Fonts：Noto Serif SC 文件与 OFL](https://github.com/google/fonts/tree/main/ofl/notoserifsc)
- [Google Fonts：Noto Sans SC 文件与 OFL](https://github.com/google/fonts/tree/main/ofl/notosanssc)
- [Adobe：Source Han Serif / Noto Serif CJK 开发历史](https://ccjktype.fonts.adobe.com/2017/04/source-han-serif-history-development.html)
- [SIL Open Font License FAQ](https://openfontlicense.org/ofl-faq/)
- [霞鹜文楷官方仓库](https://github.com/lxgw/LxgwWenKai)
