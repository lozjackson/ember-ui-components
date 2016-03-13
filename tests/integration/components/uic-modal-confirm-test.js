import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('uic-modal-confirm', 'Integration | Component | uic modal confirm', {
  integration: true
});

test('it has correct classnames', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{uic-modal-confirm}}`);

  assert.equal(Ember.$('.uic-modal.uic-modal-confirm').length, 1);
});
