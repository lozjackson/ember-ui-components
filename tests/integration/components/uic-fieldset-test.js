import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-fieldset', 'Integration | Component | uic fieldset', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{uic-fieldset}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#uic-fieldset}}
      template block text
    {{/uic-fieldset}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has the correct tagName', function(assert) {
  this.render(hbs`{{uic-fieldset}}`);
  assert.equal(this.$('fieldset').length, 1);
});

test('it has the correct classNames', function(assert) {
  this.render(hbs`{{uic-fieldset}}`);
  assert.equal(this.$('.uic-fieldset').length, 1);
});
