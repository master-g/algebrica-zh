import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { translationDisplayState } from '../../src/lib/translation-index.mjs';

describe('translation display state', () => {
  it('labels current, stale, and missing articles without treating stale as current', () => {
    assert.deepEqual(translationDisplayState('current'), {
      language: '简体中文',
      label: '当前译文',
      notice: null,
    });
    assert.deepEqual(translationDisplayState('stale'), {
      language: '简体中文',
      label: '待同步译文',
      notice: '本文译文对应较早的英文版本，正在等待同步。',
    });
    assert.deepEqual(translationDisplayState('missing'), {
      language: '英文原文',
      label: '待翻译',
      notice: '本文尚未翻译，以下为英文原文。',
    });
  });
});
