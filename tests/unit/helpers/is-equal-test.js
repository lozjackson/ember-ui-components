import { isEqual } from '../../../helpers/is-equal';
import { module, test } from 'qunit';

module('Unit | Helper | is equal');

test('left should equal right', function(assert) {
  assert.ok(isEqual([ 42, 42 ]), 'should be true');
});

test('left should not equal right', function(assert) {
  assert.ok(!isEqual([ 42, 41 ]), 'should be false');
});
