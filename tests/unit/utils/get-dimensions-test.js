import getDimensions from 'dummy/utils/get-dimensions';
import { module, test } from 'qunit';

module('Unit | Utility | get dimensions');

test('it works', function(assert) {
  let result = getDimensions();
  assert.deepEqual(result, { width: 0, height: 0 });
});

test('it works', function(assert) {
  let element = [
    { offsetWidth: 10, offsetHeight: 20 }
  ];
  let result = getDimensions(element);
  assert.deepEqual(result, { width: 10, height: 20 });
});
