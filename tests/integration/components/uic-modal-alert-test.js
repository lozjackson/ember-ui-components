import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('euic-modal-alert', 'Integration | Component | euic modal alert', {
  integration: true
});

test('it has correct class names', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{euic-modal-alert}}`);

  assert.equal(Ember.$('.euic-modal.euic-modal-alert').length, 1);
});
