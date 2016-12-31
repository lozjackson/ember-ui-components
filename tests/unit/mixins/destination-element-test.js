import Ember from 'ember';
import DestinationElementMixin from 'ember-ui-components/mixins/destination-element';
import { module, test } from 'qunit';

module('Unit | Mixin | destination element');

// Replace this with your real tests.
test('it works', function(assert) {
  let DestinationElementObject = Ember.Object.extend(DestinationElementMixin);
  let subject = DestinationElementObject.create();
  assert.ok(subject);
});
