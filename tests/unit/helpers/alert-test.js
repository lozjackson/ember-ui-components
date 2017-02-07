import alert from 'dummy/helpers/alert';
import { module, test } from 'qunit';

module('Unit | Helper | alert');

test('it works', function(assert) {
  assert.equal(typeof alert, 'function');
});
