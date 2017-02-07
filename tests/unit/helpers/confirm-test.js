import confirm from 'dummy/helpers/confirm';
import { module, test } from 'qunit';

module('Unit | Helper | confirm');

test('it works', function(assert) {
  assert.equal(typeof confirm, 'function');
});
