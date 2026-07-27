import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { findRenderedContentLeaks } from '../../scripts/check-rendered-content.mjs';

describe('rendered content gate', () => {
  it('reports leaked shortcode markers and sign tokens', () => {
    const leaks = findRenderedContentLeaks(
      '<p>[shortcode=“intervals”]</p><td>sign+l-in-o-h</td><td>[/shortcode]</td>',
    );

    assert.deepEqual(leaks, [
      'opening shortcode marker',
      'closing shortcode marker',
      'raw interval sign token',
    ]);
  });

  it('accepts rendered interval structures', () => {
    assert.deepEqual(
      findRenderedContentLeaks(
        '<div class="table-intervals"><div class="sign-plus-left-in -open"></div></div>',
      ),
      [],
    );
  });

  it('reports leaked field_math aliases', () => {
    assert.deepEqual(
      findRenderedContentLeaks('[field_math]<td>sign+s</td>[/field_math]'),
      [
        'opening shortcode marker',
        'closing shortcode marker',
        'raw interval sign token',
      ],
    );
  });

  it('reports leaked class table wrappers', () => {
    assert.deepEqual(
      findRenderedContentLeaks('<p>[class="table-1"]</p><table></table><p>[/class]</p>'),
      ['opening class wrapper', 'closing class wrapper'],
    );
  });
});
