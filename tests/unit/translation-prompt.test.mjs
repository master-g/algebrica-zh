import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  assertNoCopywritingReports,
  buildArticleGraphPrompt,
  buildOmpArgs,
  buildPrompt,
  clearFailure,
  localizePlaceholders,
  normalizeLegacyInternalLinkPaths,
  parseTranslateArgs,
  restoreStandalonePlaceholderLines,
  rewriteImagePaths,
  splitMaskedBody,
  validateTranslatedChunkStructure,
  validateArticleGraphTranslation,
} from '../../scripts/translate.mjs';

describe('translation prompt', () => {
  it('pins OMP to the approved GLM model', () => {
    assert.deepEqual(buildOmpArgs('/tmp/prompt.md'), [
      '-p',
      '--model',
      'zhipu-coding-plan/glm-5.2',
      '--no-session',
      '--no-tools',
      '--max-time',
      '20m',
      '@/tmp/prompt.md',
    ]);
  });

  it('requires article graph JSON to preserve structure and translate visible text', () => {
    const source = {
      dataset: {
        name: 'root',
        children: [{ name: 'definition' }],
      },
      type: 'Concept',
      description: 'A conceptual map.',
      difficulty: { level: 2, label: 'Intermediate' },
    };
    const translated = {
      dataset: {
        name: '群',
        children: [{ name: '定义' }],
      },
      type: '概念',
      description: '本文概念之间的关系图。',
      difficulty: { label: '中级' },
    };

    const prompt = buildArticleGraphPrompt('Groups', source);
    assert.match(prompt, /只翻译所有 name、type、description 和 difficulty\.label/);
    assert.match(prompt, /必须完整保留 JSON 层级、键名、数组顺序和节点数量/);
    assert.match(prompt, /Concept→概念/);
    assert.match(prompt, /Intermediate→中级/);
    assert.match(prompt, /不得写成「根」或「根节点」/);
    assert.deepEqual(validateArticleGraphTranslation(source, translated), []);
    assert.match(
      validateArticleGraphTranslation(source, {
        ...translated,
        dataset: { name: 'root', children: [] },
      }).join('; '),
      /must contain Chinese visible text|preserve the source node count/,
    );
    assert.match(
      validateArticleGraphTranslation(source, {
        ...translated,
        dataset: { ...translated.dataset, name: '根' },
      }).join('; '),
      /generic root label/,
    );
    assert.match(
      validateArticleGraphTranslation(source, {
        ...translated,
        description: '条目的结构如概念图所示，每个分支代表一个核心组成部分。',
      }).join('; '),
      /generic graph boilerplate/,
    );
    assert.match(
      validateArticleGraphTranslation(source, {
        ...translated,
        difficulty: { label: '简单' },
      }).join('; '),
      /fixed label 中级/,
    );
  });

  it('passes reviewer terminology feedback into an article graph retry', () => {
    const prompt = buildArticleGraphPrompt(
      'Rational Equations',
      {
        dataset: { name: 'root', children: [{ name: 'rational equations' }] },
        type: 'Concept',
        description: 'A conceptual map.',
        difficulty: { level: 1, label: 'Easy' },
      },
      null,
      '知识图谱根节点与对应子节点统一使用「有理方程」。',
    );

    assert.match(prompt, /只采纳其中与知识图谱术语和说明有关的要求/);
    assert.match(prompt, /统一使用「有理方程」/);
  });

  it('prefers a localized SVG when one exists and preserves the source asset otherwise', (t) => {
    const publicRoot = mkdtempSync(join(tmpdir(), 'algebrica-assets-'));
    t.after(() => rmSync(publicRoot, { recursive: true, force: true }));
    const svgDir = join(publicRoot, 'assets', 'trigonometry', 'svg');
    mkdirSync(svgDir, { recursive: true });
    writeFileSync(join(svgDir, 'localized.zh.svg'), '<svg/>');

    const rewritten = rewriteImagePaths(
      '![IMG. 1](svg/localized.svg)\n![B](svg/source-only.svg)',
      'trigonometry',
      publicRoot,
    );

    assert.equal(
      rewritten,
      '![图 1](/assets/trigonometry/svg/localized.zh.svg)\n' +
        '![B](/assets/trigonometry/svg/source-only.svg)',
    );
  });

  it('normalizes legacy cross-section article links after placeholder restoration', () => {
    assert.equal(
      normalizeLegacyInternalLinkPaths(
        '参见 [多项式根](../../polynomials/roots-of-a-polynomial/) 与 ' +
          '[普通链接](../quadratic-equations/)。\n' +
          '![插图](../../complex-numbers/svg/complex-numbers-2.svg)',
      ),
      '参见 [多项式根](../roots-of-a-polynomial/) 与 ' +
        '[普通链接](../quadratic-equations/)。\n' +
        '![插图](../../complex-numbers/svg/complex-numbers-2.svg)',
    );
  });

  it('requires placeholders and their Markdown structure to be preserved exactly', () => {
    const prompt = buildPrompt(
      'Types of Numbers',
      'Read [sets](__LINK_0__) and keep __MATH_0__. Peano axioms, the principle of mathematical induction, John von Neumann, Dedekind, an integral domain, Euclidean division, modular arithmetic, and an equivalence class.',
    );

    assert.match(prompt, /Markdown 结构必须完整保留/);
    assert.match(prompt, /每个占位符 ID 的出现次数必须和输入完全一致/);
    assert.match(prompt, /不得猜测、补号或生成输入中不存在的 ID/);
    assert.match(prompt, /每个段落恰好翻译一次/);
    assert.match(prompt, /只有中文语序确有需要时才可调整占位符顺序/);
    assert.match(prompt, /即使中文语句不需要链接/);
    assert.match(prompt, /链接的可见文本必须翻译成中文/);
    assert.match(prompt, /Peano axioms → 皮亚诺公理/);
    assert.match(prompt, /principle of mathematical induction → 数学归纳法原理/);
    assert.match(prompt, /John von Neumann → 约翰·冯·诺伊曼/);
    assert.match(prompt, /Dedekind → 戴德金/);
    assert.match(prompt, /integral domain → 整环/);
    assert.match(prompt, /Euclidean division → 欧几里得除法/);
    assert.match(prompt, /modular arithmetic → 模运算/);
    assert.match(prompt, /equivalence class → 等价类/);
    assert.doesNotMatch(prompt, /median → 中位数/);
    assert.match(prompt, /中文正文使用全角标点/);
    assert.match(prompt, /引用使用「」/);
    assert.match(prompt, /\[class="..."\].*逐字原样保留/);
    assert.match(prompt, /数学占位符自身可能已经包含句末逗号或句号/);
    assert.match(prompt, /不要在 __MATH_n__ 后盲目追加中文标点/);
    assert.match(prompt, /\[sets\]\(__LINK_0__\)/);
  });

  it('lists standalone display placeholders that must remain on their own lines', () => {
    const prompt = buildPrompt(
      'Trinomials',
      'The form is:\n\n__MATH_2__\n\nThen [roots](__LINK_0__) use __MATH_3__.',
    );

    assert.match(
      prompt,
      /以下占位符在输入中独占一行[\s\S]*__MATH_2__/,
    );
    assert.doesNotMatch(
      prompt,
      /以下占位符在输入中独占一行[^\n]*__MATH_3__/,
    );
  });

  it('deterministically restores standalone math and shortcode line layout', () => {
    const source = [
      'The form is:',
      '',
      '__MATH_2__',
      '',
      '__SHORTCODE_0__',
      '',
      'Inline __MATH_3__ stays inline.',
    ].join('\n');
    const translated = [
      '形式如下：__MATH_2__。',
      '区间为 __SHORTCODE_0__，继续说明。',
      '行内 __MATH_3__ 保持行内。',
    ].join('\n');

    assert.equal(
      restoreStandalonePlaceholderLines(translated, source),
      [
        '形式如下：',
        '',
        '__MATH_2__',
        '',
        '区间为',
        '',
        '__SHORTCODE_0__',
        '',
        '继续说明。',
        '行内 __MATH_3__ 保持行内。',
      ].join('\n'),
    );
  });

  it('treats shortcode placeholders as immutable structural content', () => {
    const prompt = buildPrompt(
      'Intervals',
      'Number line:\n\n__SHORTCODE_0__',
    );

    assert.match(prompt, /__SHORTCODE_0__/);
    assert.match(prompt, /SHORTCODE/);
    assert.match(prompt, /结构块/);
  });

  it('rejects a translated chunk that drops a heading before article assembly', () => {
    const source = '## Example 1\n\nText.\n\n## Example 2\n\nMore text.';
    const translated = '# 中文标题\n\n## 例 1\n\n正文。';
    assert.match(
      validateTranslatedChunkStructure(source, translated, { firstChunk: true })[0],
      /heading structure mismatch/,
    );
  });

  it('splits long articles at H2 boundaries and renumbers placeholders per chunk', () => {
    const body = [
      '# Groups',
      '',
      '## Definition',
      '__MATH_4__ and [sets](__LINK_2__)',
      '',
      '## Examples',
      '__MATH_9__ then __MATH_10__',
    ].join('\n');
    const chunks = splitMaskedBody(body, 2);

    assert.equal(chunks.length, 2);
    const localized = localizePlaceholders(chunks[1], {
      math: Array.from({ length: 11 }, (_, index) => `$${index}$`),
      link: Array.from({ length: 3 }, (_, index) => `/link-${index}/`),
      img: [],
      title: [],
      shortcode: ['[shortcode="intervals"]\n[/shortcode]'],
    });
    assert.match(localized.masked, /__MATH_0__ then __MATH_1__/);
    assert.deepEqual(localized.placeholders.math, ['$9$', '$10$']);

    const prompt = buildPrompt('Groups', localized.masked, null, {
      chunkIndex: 1,
      chunkCount: 2,
    });
    assert.match(prompt, /第 2\/2 段/);
    assert.match(prompt, /不要添加 # 一级标题/);
  });

  it('renumbers shortcode placeholders when localizing a chunk', () => {
    const localized = localizePlaceholders('__SHORTCODE_3__', {
      math: [],
      link: [],
      img: [],
      title: [],
      shortcode: ['zero', 'one', 'two', 'three'],
    });

    assert.equal(localized.masked, '__SHORTCODE_0__');
    assert.deepEqual(localized.placeholders.shortcode, ['three']);
  });

  it('accepts reviewer feedback without confusing its file path for the target', () => {
    assert.deepEqual(
      parseTranslateArgs([
        '--feedback-file',
        '/tmp/integers-review.txt',
        'sets-and-numbers/integers',
      ]),
      {
        allMissing: false,
        dryRun: false,
        feedbackFile: '/tmp/integers-review.txt',
        target: 'sets-and-numbers/integers',
      },
    );

    const prompt = buildPrompt('Integers', 'Body', '保留证明中的对应关系。');
    assert.match(prompt, /上一轮输出存在以下问题/);
    assert.match(prompt, /审校反馈优先于英文原文/);
    assert.match(prompt, /保留证明中的对应关系/);
  });

  it('rejects unresolved Chinese copywriting reports', () => {
    assert.doesNotThrow(() => assertNoCopywritingReports([]));
    assert.throws(
      () => assertNoCopywritingReports([
        { line: 12, message: '建议改用「」引号' },
      ]),
      /copywriting lint failed: line 12: 建议改用「」引号/,
    );
  });

  it('clears a stale failure after the same target succeeds', (t) => {
    const tempDir = mkdtempSync(join(tmpdir(), 'algebrica-failures-'));
    t.after(() => rmSync(tempDir, { recursive: true, force: true }));
    const failuresFile = join(tempDir, 'translation-failures.json');
    writeFileSync(failuresFile, JSON.stringify([
      { section: 'algebraic-structures', slug: 'groups', reason: 'still failing' },
      { section: 'powers-radicals-logarithms', slug: 'radicals', reason: 'stale' },
    ]));

    clearFailure('powers-radicals-logarithms', 'radicals', failuresFile);

    assert.deepEqual(JSON.parse(readFileSync(failuresFile, 'utf8')), [
      { section: 'algebraic-structures', slug: 'groups', reason: 'still failing' },
    ]);
  });
});
