# Review and feedback records

Use these compact records so another supervisor can reproduce the decision.

## Admission review

```markdown
# Translation admission: <section>/<slug>

Source: ../algebrica/<section>/<slug>.md
Candidate: content-zh/<section>/<slug>.md

## Deterministic gates

- validate-translation:
- LaTeX topology:
- focused translation tests:
- full test suite:
- forced build:
- rendered-content gate:
- translation status:

## Fidelity review

- Structure:
- Mathematics:
- Terminology and Chinese copy:
- Links/images/tables/shortcodes:
- Article graph:

## Visual review

- Desktop 1440x900:
- Mobile 390x844:
- Console/MathJax errors:
- Overflow/centering:
- Screenshots:

## Decision

PASS | FAIL

Reason:
Non-blocking observations:
```

## OMP retry feedback

Keep feedback concrete and local to the rejected target. Do not ask the model to rewrite unrelated sections.

```markdown
目标：修订 <section>/<slug>，保留全部正确内容。

门禁失败：
- <failure with source and candidate line evidence>

必须修改：
- <specific correction>

不得修改：
- 公式、链接、图片和 shortcode 占位符。
- 已经通过审校的章节。
- 原文没有授权扩写的数学内容。

验收条件：
- <objective condition>
```

If the source itself appears mathematically wrong, do not conceal that inside model feedback. Stop and ask whether the Chinese edition should preserve the source or carry an explicitly reviewed correction.

