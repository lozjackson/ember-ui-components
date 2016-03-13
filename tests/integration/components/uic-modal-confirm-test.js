import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('euic-modal-confirm', 'Integration | Component | euic modal confirm', {
  integration: true
});

test('it has correct classnames', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{euic-modal-confirm}}`);

  assert.equal(Ember.$('.euic-modal.euic-modal-confirm').length, 1);
});
