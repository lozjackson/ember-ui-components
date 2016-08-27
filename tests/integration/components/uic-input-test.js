import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-input', 'Integration | Component | uic input', {
  integration: true
});

test('it renders an input element', function(assert) {
  this.render(hbs`{{uic-input}}`);
  assert.equal(this.$('input').length, 1);
});

test('it renders the correct class names', function(assert) {
  this.render(hbs`{{uic-input}}`);
  assert.equal(this.$('.uic-input.uic-form-element').length, 1);
});
