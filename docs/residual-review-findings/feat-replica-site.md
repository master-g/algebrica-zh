# Residual Review Findings — feat/replica-site

来源:ce-code-review run `20260722-012503-a990aacd`(base 6aee3e8,head c0ffefc)。
处置:用户在 Residual Work Gate 选择「接受并记录后继续」(2026-07-22)。以下为未修复的 advisory 级残留与测试缺口,逐字记录。

## Advisory(守卫强化建议,非缺陷)

1. **check-math 计数相等 ≠ 公式身份一致** — `scripts/check-math.mjs` 仅在总数偏差 ≠ 0 时失败;per-file 偏差只记日志。建议:保留 per-file deviation=0,并增加参考公式字面断言(输出包含预期公式文本)。
2. **validate-translation 只做结构校验** — `scripts/lib/validate.mjs` 校验 frontmatter/定界符/KaTeX/内链/HTML,不评估译文与源文的语义对应;语义把关依赖编排方审读闸(R20)。建议:文档化本脚本为结构门。
3. **restore 不做深层映射比对** — `scripts/lib/mask-restore.mjs` 校验占位符计数与顺序,不与源数学表达式做 hash/规范形比对(LLM 对调占位符可过)。建议:还原后按数学表达式与源 span 比对。
4. **glob 集合假设单层目录** — `src/content.config.ts` 使用 `['*/*.md', ...]`;上游若出现更深层目录将漏收。建议:文档化单层假设或改 `**/*.md` 加显式排除。
5. **xlinkHref 未做协议过滤**(anchor 50)— `astro.config.mjs` sanitize 对 `<use>` 放行 xlinkHref;当前 MathJax 输出未用外部引用,风险理论性。建议:必要时加入 protocols 白名单。
6. **loadDangling 解析失败静默回退空清单**(anchor 50)— `scripts/lib/validate.mjs` 的 catch 回退 `{external:[],text:[]}`;建议至少 warn。
7. **sync-svg 对缺失 svg 目录的跳过仅记 info**(anchor 75,记录性)— 已知行为,保留观察。
8. **--mode json 截断 guard 偏离已确认** — omp 的 `--mode json` 在本环境挂起;截断/损坏守卫改用占位符计数一致性。计划 KTD-9 提及的 json 元数据冒烟确认未执行,当前替代方案有效。

## Testing gaps

9. **分支覆盖不全** — slug-map / translation-index / rehype-rewrite-algebrica / mask-restore 的边界分支(非字符串 href、空集合、currentSection 缺失等)仅部分覆盖。
10. **SearchBox 客户端交互无浏览器级测试** — `src/components/SearchBox.astro` 约 190 行客户端 JS(fetch/键盘导航/渲染)无自动化覆盖;当前靠 check-search.mjs 静态验证评分逻辑。
11. **check-*.mjs 冒烟未纳入 npm test** — `scripts/check-math.mjs`、`scripts/check-search.mjs` 是集成冒烟,当前需手动运行;建议纳入 CI 或 npm scripts 链。

## 已修复(对照)

23 项 actionable findings 全部修复并验证:#1-#11、#13-#23(commit `117fed6`、`c0ffefc`)。41 测试全绿、259 页构建、公式偏差 0、AE1-AE4 走查通过。
