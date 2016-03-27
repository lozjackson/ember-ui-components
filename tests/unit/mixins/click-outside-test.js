import Ember from 'ember';
import ClickOutsideMixin from 'ember-ui-components/mixins/click-outside';
import { module, test } from 'qunit';

module('Unit | Mixin | click outside');

test('it works', function(assert) {
  let ClickOutsideObject = Ember.Object.extend(ClickOutsideMixin);
  let subject = ClickOutsideObject.create();
  assert.ok(subject);
});
