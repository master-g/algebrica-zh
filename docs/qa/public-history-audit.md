# 公开 Git 历史审计

- 日期：2026-08-05
- 远端：`master-g/algebrica-zh`
- 审计范围：远端全部分支与标签
- 审计时远端引用：`main` 1 个，标签 0 个

## 结果

历史审计通过。

| 检查 | 清理前 | 清理后 |
| --- | --- | --- |
| `main` 提交 | `ae2a714e32b9208e65c5a46a7853931df3f217fd` | `8ae135a7783083deb931f11bd2eee34853e0a0c6` |
| 可达提交 | 58 | 57 |
| 禁止路径 | 29 | 0 |
| 分支 | `main` | `main` |
| 标签 | 0 | 0 |
| `gitleaks` 凭据命中 | 未作为通过依据 | 0 |

清理前后的最终树哈希均为 `91e95748e41c7c5be02d41e05496cf92e1faa42f`。历史重写没有改变待发布文件内容。

`gitleaks` 对清理后的 57 个提交扫描约 5.74 MB，未发现凭据。输出使用完全脱敏模式，报告条目数为 0。

## 清理范围

- `public/theme/`
- `public/media/`
- `public/styles/zh-overrides.css`
- `reference/`
- `scripts/fetch-assets.mjs`

## 回退证据

清理前远端已保存为完整 bundle：`/Users/mg/Documents/algebrica-zh-pre-public-20260805.bundle`。`git bundle verify` 确认 bundle 包含完整的旧 `main` 历史。

## 工具内部引用

本地存在不参与发布的 `refs/codex/*` checkpoint。公开历史门禁只扫描分支、远端分支和标签。隔离镜像没有该类引用，并以全引用对象扫描确认禁止路径为 0。
