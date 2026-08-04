---
name: algebrica-translation-supervisor
description: "Supervise the Algebrica Chinese translation pipeline in this workspace: select one article, translate it directly, independently review mathematical and editorial fidelity, enforce Markdown/shortcode/LaTeX/article-graph/build/browser gates, revise through feedback, and admit only accepted work. Use this skill whenever the user asks to continue, supervise, audit, review, fix, or accept Algebrica translations, asks about untranslated Markdown, or reports formula, shortcode, image, layout, or knowledge-graph defects in translated articles."
compatibility: "Requires this repository, its sibling ../algebrica source checkout, Node.js/npm, and agent-browser for visual acceptance."
---

# Algebrica Translation Supervisor

Act as the translator, independent editor, and admission controller. Translation is performed directly from the sibling English source; automated gates do not decide whether the wording or mathematics is acceptable.

## Non-negotiable boundaries

- Work on one `section/slug` at a time. Do not use `--all-missing` in supervised work.
- Preserve the user's dirty worktree. Scope every diff, validation, and eventual staging action to the current article and its graph entry.
- Do not invoke external translation models or model CLIs. Translate and revise the candidate directly in the workspace using the source article, glossary, and existing Chinese conventions.
- Preserve the source's formulas, links, images, shortcodes, and graph topology while translating visible prose yourself.
- Direct translation is still only a candidate until every applicable gate below passes and the article receives visual review.
- If any gate fails, stop admission and do not begin another article. Diagnose, prepare a precise revision, and rerun the applicable gates before continuing.
- Never discard a previously better candidate merely because a revision regressed or produced a weaker automatic-pass result. Snapshot the current candidate outside the worktree before a substantial revision, compare revisions, and retain the stronger file.
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

## 2. Produce exactly one self-translated candidate

Read the complete sibling source and the relevant glossary entries before editing. Create or update only the current article, its graph entry, and any localized SVG assets. Translate section by section while preserving the source's Markdown structure and all opaque placeholders.

Before validation, inspect only the candidate's paths:

```bash
git diff -- content-zh/<section>/<slug>.md src/data/article-graphs-zh.json translation-failures.json
git ls-files --others --ignored --exclude-standard \
  public/assets/<section>/svg/<slug>-*.zh.svg
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

`validate-translation.mjs <section>/<slug>` is the strict editorial admission gate and must never be skipped for a candidate. `translation-status.mjs --verify` checks repository-wide structural validity, current/stale/missing state, and the failure ledger; it intentionally does not reclassify legacy visible-math-text debt as a translation-state failure. Audit that legacy debt explicitly with `node scripts/validate-translation.mjs --all` and report it as backlog.

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
- never put Chinese prose inside `\text{...}`. With the site's sanitized MathJax SVG output, CJK text glyphs collapse to subpixel size. Replace conjunctions and conditions with conventional symbols such as `\land`, `\lor`, commas, or surrounding prose, then require `validate-translation.mjs` to pass;
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
- the localized knowledge graph is present and readable at the end on desktop when the source has one; on mobile, confirm either a readable responsive graph or the source theme's explicit `no-mobile` contract rather than treating an intentional upstream hide as missing content.

Do not substitute automated bounding-box checks for screenshots and visual judgment.

## 6. Decide admission

### Pass

Report:

- accepted `section/slug`;
- automatic gates and browser viewports checked;
- any non-blocking warnings;
- current/stale/missing counts after admission;
- exact files changed.

Only then move to another article, and only if the user's requested scope still authorizes it.

### Fail

Classify the failure as structural, LaTeX, mathematical, editorial, graph, or visual. Preserve evidence and write a focused feedback file under `/tmp`, for example:

```bash
/tmp/algebrica-<slug>-review.txt
```

Before a substantial revision, snapshot the current candidate outside the worktree:

```bash
cp content-zh/<section>/<slug>.md \
  /tmp/algebrica-<slug>-candidate-before-revision.md
```

The snapshot is a recovery copy, not an admitted revision. Compare revisions, return to deterministic admission gates, and restore the stronger wording if a revision regresses. Never skip directly to acceptance.

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
   git add -f public/assets/<section>/svg/<slug>-*.zh.svg  # when localized SVGs exist
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
