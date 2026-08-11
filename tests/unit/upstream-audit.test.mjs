import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  applySvgPaletteMapping,
  classifySvgChange,
  collectMarkdownStructure,
  deriveSvgPaletteMapping,
  mergeLocalizedSvgText,
  parseNameStatus,
} from '../../src/lib/upstream-audit.mjs';

describe('upstream synchronization audit', () => {
  it('parses additions, modifications, deletions, and renames', () => {
    assert.deepEqual(parseNameStatus([
      'A\tfunctions/new.md',
      'M\tfunctions/functions.md',
      'D\tvarious/removed.md',
      'R078\tvarious/propositional-logic.md\tlogic/propositional-logic.md',
    ].join('\n')), [
      { status: 'added', path: 'functions/new.md' },
      { status: 'modified', path: 'functions/functions.md' },
      { status: 'deleted', path: 'various/removed.md' },
      {
        status: 'renamed',
        path: 'logic/propositional-logic.md',
        previousPath: 'various/propositional-logic.md',
        similarity: 78,
      },
    ]);
  });

  it('reports Markdown link, math, image, and shortcode structure', () => {
    const structure = collectMarkdownStructure(`Text [label](/target/) with $x+1$.\n\n![Plot](/assets/plot.svg)\n\n[shortcode="intervals"]\n[/shortcode]\n`);
    assert.deepEqual(structure.links, ['/target/']);
    assert.deepEqual(structure.images, ['/assets/plot.svg']);
    assert.equal(structure.inlineMath, 1);
    assert.equal(structure.displayMath, 0);
    assert.deepEqual(structure.shortcodes, ['[shortcode="intervals"]', '[/shortcode]']);
  });

  it('distinguishes palette-only SVG changes from structural changes', () => {
    assert.equal(
      classifySvgChange('<svg>\n  <path d="M0 0"/>\n</svg>', '<svg><path d="M0 0"/></svg>'),
      'whitespace-only',
    );
    assert.equal(
      classifySvgChange('<path fill="#111111" d="M0 0"/>', '<path fill="#abcdef" d="M0 0"/>'),
      'palette-only',
    );
    assert.equal(
      classifySvgChange('<path fill="#111111" d="M0 0"/>', '<path fill="#abcdef" d="M1 0"/>'),
      'structural',
    );
  });

  it('transplants an unambiguous palette without changing localized SVG structure', () => {
    const before = '<svg><path fill="#111111" stroke="rgb(1, 2, 3)" d="M0 0"/></svg>';
    const after = '<svg><path fill="#abcdef" stroke="rgb(4, 5, 6)" d="M0 0"/></svg>';
    const localized = '<svg><text fill="#111111">中文</text><path fill="#111111" stroke="rgb(1, 2, 3)" d="M0 0"/></svg>';
    const mapping = deriveSvgPaletteMapping(before, after);

    assert.equal(
      applySvgPaletteMapping(localized, mapping),
      '<svg><text fill="#abcdef">中文</text><path fill="#abcdef" stroke="rgb(4, 5, 6)" d="M0 0"/></svg>',
    );
  });

  it('rejects one old color that maps to multiple new colors', () => {
    assert.throws(
      () => deriveSvgPaletteMapping(
        '<path fill="#111" stroke="#111"/>',
        '<path fill="#aaa" stroke="#bbb"/>',
      ),
      /ambiguous SVG palette mapping/,
    );
  });

  it('uses current SVG structure while preserving localized text blocks', () => {
    const source = '<svg><path d="M2 2"/><text fill="#new"><tspan x="2">English</tspan></text><text>x</text></svg>';
    const localized = '<svg><path d="M1 1"/><text fill="#old"><tspan x="1">中文</tspan></text></svg>';
    assert.equal(
      mergeLocalizedSvgText(source, localized, { allowSourceTail: true }),
      '<svg><path d="M2 2"/><text fill="#new"><tspan x="1">中文</tspan></text><text>x</text></svg>',
    );
  });
});
