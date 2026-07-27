import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  intervalSignClasses,
  normalizeIntervalTableDelimiters,
  normalizeMultilineDisplayMath,
} from '../../src/plugins/remark-intervals-shortcode.mjs';

describe('intervalSignClasses', () => {
  it('supports every interval token currently used by the upstream corpus', () => {
    const expected = new Map([
      ['sign+l-c', ['sign-plus-left', '-closed']],
      ['sign+l-c-h', ['sign-plus-left', '-closed', '-highlight']],
      ['sign+l-in-c', ['sign-plus-left-in', '-closed']],
      ['sign+l-in-c-h', ['sign-plus-left-in', '-closed', '-highlight']],
      ['sign+l-in-o', ['sign-plus-left-in', '-open']],
      ['sign+l-in-o-h', ['sign-plus-left-in', '-open', '-highlight']],
      ['sign+l-o', ['sign-plus-left', '-open']],
      ['sign+l-o-h', ['sign-plus-left', '-open', '-highlight']],
      ['sign+p-c', ['sign-point-c']],
      ['sign+r-c', ['sign-plus-right', '-closed']],
      ['sign+r-c-h', ['sign-plus-right', '-closed', '-highlight']],
      ['sign+r-in-c', ['sign-plus-right-in', '-closed']],
      ['sign+r-in-c-h', ['sign-plus-right-in', '-closed', '-highlight']],
      ['sign+r-in-o', ['sign-plus-right-in', '-open']],
      ['sign+r-in-o-h', ['sign-plus-right-in', '-open', '-highlight']],
      ['sign+r-o', ['sign-plus-right', '-open']],
      ['sign+r-o-h', ['sign-plus-right', '-open', '-highlight']],
      ['sign+s', ['sign-spacer']],
      ['sign+s-h', ['sign-spacer', '-highlight']],
    ]);

    for (const [token, classes] of expected) {
      assert.deepEqual(intervalSignClasses(token), classes, token);
    }
  });

  it('fails closed for unknown tokens', () => {
    assert.equal(intervalSignClasses('sign+unknown'), null);
  });
});

describe('normalizeIntervalTableDelimiters', () => {
  it('expands only shorthand delimiter cells inside intervals shortcodes', () => {
    const source = `Before

[shortcode="intervals"]
| | $a$ |
|-|:--:|
| | sign+s |
[/shortcode]

|-| untouched |`;

    assert.equal(
      normalizeIntervalTableDelimiters(source),
      `Before

[shortcode="intervals"]
| | $a$ |
|---|:---:|
| | sign+s |
[/shortcode]

|-| untouched |`,
    );
  });
});

describe('normalizeMultilineDisplayMath', () => {
  it('moves multiline display delimiters to their own lines', () => {
    assert.equal(
      normalizeMultilineDisplayMath('$$\\begin{align}\nx &= 1\n\\end{align}$$'),
      '$$\n\\begin{align}\nx &= 1\n\\end{align}\n$$',
    );
  });

  it('leaves inline display expressions unchanged', () => {
    assert.equal(normalizeMultilineDisplayMath('Before $$x + y$$ after'), 'Before $$x + y$$ after');
  });
});
