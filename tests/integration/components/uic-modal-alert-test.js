import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('uic-modal-alert', 'Integration | Component | uic modal alert', {
  integration: true
});

test('it has correct class names', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{uic-modal-alert}}`);

  assert.equal(Ember.$('.uic-modal.uic-modal-alert').length, 1);
});
