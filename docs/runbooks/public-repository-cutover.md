# 公开仓库 cutover

## 停止条件

- 当前工作区不干净。
- 远端存在未纳入审计的分支或标签。
- 历史门禁仍报告禁止路径。
- `gitleaks` 报告未解决的凭据命中。
- 本地公开发布门禁失败。

## 执行顺序

1. 记录远端分支、标签和 `main` 提交。
2. 创建远端仓库的隔离镜像和可恢复 bundle。
3. 将待发布的本地 `main` 获取到隔离镜像。
4. 使用 `git-filter-repo` 删除 `public/theme/`、`public/media/`、`public/styles/zh-overrides.css`、`reference/` 和 `scripts/fetch-assets.mjs` 的全部历史。
5. 运行 `npm run check:public-history -- <mirror>`。
6. 运行 `gitleaks git --redact <mirror>`。
7. 比较清理前后的远端分支与标签集合。
8. 使用远端旧 `main` 提交作为 `--force-with-lease` 边界替换 `main`。
9. 将本地 `main` 对齐到已审计的新提交。
10. 将仓库设为公开并将 Pages 发布源设为 GitHub Actions。
11. 推送或人工触发 Pages 工作流。
12. 验证 Actions、线上 URL、控制台和运行时资源。

## 回退

- 部署失败时先关闭 Pages，保留公开历史以便诊断。
- 发现敏感内容时立即将仓库改回私有。
- 使用 cutover 前 bundle 恢复远端旧 `main`。恢复旧历史后不得保持仓库公开。
