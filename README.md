# Algebrica 中文译本

Algebrica 中文译本是 [Antonio Lupetti](https://github.com/antoniolupetti) 的
[Algebrica](https://algebrica.org/) 的非官方、非商业简体中文译本。本站保留
数学内容、章节结构、公式、插图和知识图谱，并采用独立设计与中文排版。

中文译文与标记为衍生的插图按
[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) 提供。使用时
必须署名 Antonio Lupetti 与 Algebrica，链接原文和许可，并说明翻译改动和
视觉改动。本站原创软件代码采用 MIT License。完整边界见 [LICENSE.md](LICENSE.md)。

## 本地运行

需要 Node.js 22 或兼容版本，以及位于本仓库同级目录的 Algebrica 上游仓库。

```bash
npm ci
npm test
npm run dev
```

默认上游目录为 `../algebrica`。公开发布流程会使用固定的上游提交，避免构建
结果随上游分支变化。

## GitHub Pages

公开仓库的 `main` 分支通过全部门禁后，会部署到
[master-g.github.io/algebrica-zh](https://master-g.github.io/algebrica-zh/)。仓库设置中
需要将 Pages 的来源设为 **GitHub Actions**。拉取请求只执行测试与构建，不会部署。

工作流从 [upstream-lock.json](upstream-lock.json) 读取固定的 Algebrica 上游提交。
更新上游内容时，先在本地验证新提交，再单独修改该文件。

## 质量门禁

```bash
npm run test:unit
npm run test:smoke
npm run build
npm run check:public-release
```

门禁覆盖翻译状态、术语、Markdown、LaTeX、内部链接、插图、知识图谱、开发
服务器和生产构建。自动化门禁不能替代桌面与移动端视觉验收。

## 许可与来源

- [复合许可范围](LICENSE.md)
- [第三方声明](THIRD_PARTY_NOTICES.md)
- [衍生插图来源](public/assets/provenance.json)
- [原始 Algebrica 仓库](https://github.com/antoniolupetti/algebrica)

本项目不代表 Antonio Lupetti 或 algebrica.org 的立场。
