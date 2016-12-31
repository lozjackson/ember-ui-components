import calculatePosition from 'dummy/utils/calculate-position';
import { module, test } from 'qunit';

module('Unit | Utility | calculate position');

test('it works', function(assert) {
  assert.equal(calculatePosition(5, 10, 20), 5);
  assert.equal(calculatePosition(11, 10, 20), 10);
});
