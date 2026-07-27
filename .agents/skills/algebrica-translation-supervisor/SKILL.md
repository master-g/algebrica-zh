---
name: algebrica-translation-supervisor
description: "Supervise the Algebrica Chinese translation pipeline in this workspace: select one article, delegate a protected candidate translation to OMP using zhipu-coding-plan/glm-5.2, independently review mathematical and editorial fidelity, enforce Markdown/shortcode/LaTeX/article-graph/build/browser gates, revise through feedback, and admit only accepted work. Use this skill whenever the user asks to continue, supervise, audit, review, fix, or accept Algebrica translations, mentions OMP/GLM translation work, asks about untranslated Markdown, or reports formula, shortcode, image, layout, or knowledge-graph defects in translated articles."
compatibility: "Requires this repository, its sibling ../algebrica source checkout, Node.js/npm, OMP for approved translation calls, and agent-browser for visual acceptance."
---

# Algebrica Translation Supervisor

Act as the independent editor and admission controller. OMP produces a candidate; it does not decide whether the candidate is correct or whether work may continue.

## Non-negotiable boundaries

- Work on one `section/slug` at a time. Do not use `--all-missing` in supervised work.
- Preserve the user's dirty worktree. Scope every diff, validation, and eventual staging action to the current article and its graph entry.
- Do not invoke OMP automatically. The repository translation command invokes an external model CLI, so obtain the user's explicit confirmation immediately before each invocation, including feedback retries.
- Do not call OMP directly with an ad-hoc prompt. Use `scripts/translate.mjs`; it supplies the glossary, masks formulas/links/images/shortcodes, pins `zhipu-coding-plan/glm-5.2`, and rejects malformed output.
- A successful OMP process is only candidate generation. Independently run every applicable gate below.
- If any gate fails, stop admission and do not begin another article. Diagnose, prepare precise feedback, and wait for approval before the next OMP invocation.
- Never discard a previously better candidate merely because a retry failed or produced a weaker automatic-pass result. Snapshot the current candidate outside the worktree before a feedback retry, compare revisions, and retain the stronger file.
- Do not commit, push, publish, or begin a new translation after a requested pause unless the user separately asks.

## 1. Establish the current state

Run read-only preflight:

```bash
git status --short
node scripts/translation-status.mjs
```

Record:

- current, stale, and missing counts;
- the current branch and unrelated dirty paths;
- any pre-existing changes that overlap the proposed article or graph translation.

Choose the next target from `missing` unless the user named a target or requested a stale/rejected article. Confirm that the sibling source exists:

```bash
test -f ../algebrica/<section>/<slug>.md
```

For `pages/*`, use `../algebrica/pages/<slug>.md`.

## 2. Generate exactly one candidate through OMP

Explain which target will be sent and ask for explicit approval immediately before running:

```bash
node scripts/translate.mjs <section>/<slug>
```

This command may also translate and store the article knowledge graph. It performs bounded retries internally, but those retries belong to the single explicitly approved invocation.

For long-running calls, avoid noisy polling. Check external process state roughly every three minutes when practical; send concise progress updates without repeatedly re-running probes.

After completion, inspect only the candidate's paths:

```bash
git diff -- content-zh/<section>/<slug>.md src/data/article-graphs-zh.json translation-failures.json
```

If unrelated graph entries changed, treat that as a scope failure.

## 3. Run deterministic admission gates

All commands must pass for the target:

```bash
node scripts/validate-translation.mjs <section>/<slug>
node .agents/skills/algebrica-translation-supervisor/scripts/audit-latex-topology.mjs <section>/<slug>
node --test \
  tests/unit/translation-prompt.test.mjs \
  tests/unit/mask-restore.test.mjs \
  tests/unit/validate.test.mjs
npm test
npm run build -- --force
node scripts/check-rendered-content.mjs
node scripts/translation-status.mjs --verify
```

Interpret warnings instead of silently ignoring them. A known raw-HTML warning is not automatically fatal, but inspect the exact tag and rendered output.

### Structural invariants

Verify against the sibling English Markdown:

- frontmatter has `title`, `title_en`, source, license, tags, and a current translation block;
- headings, paragraphs, lists, blockquotes, links, images, tables, and section order are preserved;
- no source paragraph is omitted, duplicated, merged beyond recognition, or expanded with unsupported mathematical claims;
- Markdown links keep translated visible labels and valid targets;
- images remain present and their localized assets resolve;
- `[class="..."]` wrappers and shortcode blocks remain structurally intact;
- `[shortcode=...]`, `[field_math]`, `[/shortcode]`, `[/field_math]`, and interval sign tokens never leak into rendered prose.

Treat complete shortcode blocks as opaque. In particular, smart quotes such as `[shortcode=“intervals”]` are source syntax, not prose to normalize. An orphan `[/shortcode]` inside a table is a hard failure.

### LaTeX topology gate

Do not equate parse success with faithful rendering. Check:

- inline and display math span counts match the source;
- every source `\\` row break has a corresponding row break in the candidate;
- `\\[6pt]` or similar spacing survives;
- `\\{` and `\\}` remain escaped set braces and render as braces, not rows;
- environments and their row counts match;
- a literal `//` is allowed only when source-identical, such as `\text{//}` cancellation markers in polynomial division;
- no single trailing backslash, raw delimiter, placeholder, or MathJax error remains.

The bundled topology script is strict for new candidates. `--all` is useful for auditing legacy translations, but existing drift should be reported as backlog rather than silently grandfathered into a new candidate.

## 4. Perform mathematical and editorial review

Read the English source and Chinese candidate side by side. Confirm:

- every theorem condition, quantifier, domain restriction, inequality direction, index range, sign, and exceptional case is preserved;
- formulas are mathematically equivalent to the source unless a documented reviewer correction intentionally fixes a source error;
- terminology follows `glossary.yaml` and common mainland Chinese mathematical usage;
- visible English prose is not left inside `\text{...}`, diagrams, tables, link labels, or the article graph;
- Chinese prose is concise, grammatical, and free of half-width punctuation, duplicated clauses, generic AI filler, and unsupported elaboration;
- added formulas or explanatory paragraphs are explicitly justified. Unexplained additions are fidelity failures even if they render correctly;
- graph node count/order matches the source graph, names and descriptions are specific, and difficulty/type labels use the repository's fixed mappings.

Use [references/review-and-feedback.md](references/review-and-feedback.md) for the review record and retry feedback format.

## 5. Perform browser acceptance

Static gates do not prove layout. Load the `agent-browser` skill, start the built preview, and inspect the target at:

- desktop: `1440x900`;
- mobile: `390x844`.

Check the article top, every unusual table/figure/formula section, and the article end. Capture evidence for:

- zero console errors and zero MathJax `merror` nodes;
- no horizontal page or formula overflow;
- block formulas and article illustrations are horizontally centered;
- intended `\\` rows are visually separate;
- escaped braces display as braces;
- breadcrumbs and section headings follow the site visual contract;
- the localized knowledge graph is present and readable at the end when the source has one.

Do not substitute automated bounding-box checks for screenshots and visual judgment.

## 6. Decide admission

### Pass

Report:

- accepted `section/slug`;
- automatic gates and browser viewports checked;
- any non-blocking warnings;
- current/stale/missing counts after admission;
- exact files changed.

Only then move to another article, and only if the user's requested scope still authorizes it. Each next OMP invocation still requires immediate confirmation.

### Fail

Classify the failure as structural, LaTeX, mathematical, editorial, graph, or visual. Preserve evidence and write a focused feedback file under `/tmp`, for example:

```bash
/tmp/algebrica-<slug>-review.txt
```

After the user explicitly approves the retry, run:

```bash
cp content-zh/<section>/<slug>.md \
  /tmp/algebrica-<slug>-candidate-before-retry.md

node scripts/translate.mjs \
  --feedback-file /tmp/algebrica-<slug>-review.txt \
  <section>/<slug>
```

The snapshot is a recovery copy, not an admitted revision. Compare it with the
new candidate, return to deterministic admission gates, and restore the prior
candidate if the retry regresses. Never skip directly to acceptance.

Stop and ask for user judgment when the proposed correction changes the source mathematics, removes a source section, adds new explanatory content, or makes a visible design choice.

## 7. Land accepted work

Only after the user asks to commit. Never commit directly on `main`.

1. Create a short-lived branch named after the article:

   ```bash
   git checkout -b feat/zh-<slug>
   ```

2. Stage only the admitted paths and commit:

   ```bash
   git add content-zh/<section>/<slug>.md src/data/article-graphs-zh.json
   git commit -m "feat(content): translate <section>/<slug> to zh"
   ```

   The commit body lists the gates run and any reviewer edits.

3. Fast-forward `main`, push, and delete the branch:

   ```bash
   git checkout main
   git merge --ff-only feat/zh-<slug>
   git push origin main
   git branch -d feat/zh-<slug>
   ```

   If the branch was pushed, also `git push origin --delete feat/zh-<slug>` and `git fetch --prune origin`.

4. Verify the end state: working tree clean, and only `main` exists locally and remotely:

   ```bash
   git branch -a
   gh api repos/<owner>/<repo>/branches --jq '.[].name'
   ```

Routine admitted translations land as fast-forwards with no merge commit or PR; history on `main` stays linear. If the fast-forward is not possible, stop and report instead of merging.

## 8. Pause and hand off cleanly

When pausing, state:

- last accepted target;
- current target and gate status;
- exact blocker or pending approval;
- candidate and feedback-file paths;
- current translation counts;
- whether preview/browser processes remain active.

Do not start speculative translation work while waiting for confirmation.
