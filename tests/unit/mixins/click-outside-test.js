import EmberObject from '@ember/object';
import ClickOutsideMixin from 'ember-ui-components/mixins/click-outside';
import { module, test } from 'qunit';

module('Unit | Mixin | click outside');

test('it works', function(assert) {
  let ClickOutsideObject = EmberObject.extend(ClickOutsideMixin);
  let subject = ClickOutsideObject.create();
  assert.ok(subject);
});
