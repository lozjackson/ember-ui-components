import EmberObject from '@ember/object';
import DestinationElementMixin from 'ember-ui-components/mixins/destination-element';
import { module, test } from 'qunit';

module('Unit | Mixin | destination element');

// Replace this with your real tests.
test('it works', function(assert) {
  let DestinationElementObject = EmberObject.extend(DestinationElementMixin);
  let subject = DestinationElementObject.create();
  assert.ok(subject);
});
