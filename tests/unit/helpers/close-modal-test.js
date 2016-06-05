import closeModal from 'dummy/helpers/close-modal';
import { module, test } from 'qunit';

module('Unit | Helper | close modal');

test('it works', function(assert) {
  assert.equal(typeof closeModal, 'function');
});
