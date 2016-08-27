import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-form-element', 'Integration | Component | uic form element', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uic-form-element}}`);
  assert.equal(this.$().text().trim(), '');
  this.render(hbs`
    {{#uic-form-element}}
      template block text
    {{/uic-form-element}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has the correct classnames', function(assert) {
  this.render(hbs`{{uic-form-element}}`);
  assert.equal(this.$('.uic-form-element').length, 2);
});

test('it has the correct label', function(assert) {
  this.render(hbs`{{uic-form-element label="Some Text"}}`);
  assert.equal(this.$('label').length, 1);
  assert.equal(this.$('label').text().trim(), 'Some Text');
});

test('input element can be passed an id from the template', function(assert) {
  this.render(hbs`{{uic-form-element formElementId="theId" }}`);
  assert.equal(this.$('#theId').length, 1);
});

test('input element can be disabled', function(assert) {

  this.render(hbs`{{uic-form-element disabled=disabled}}`);
  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('input').attr('disabled'), undefined);

  this.set('disabled', true);

  assert.equal(this.$('input').attr('disabled'), 'disabled');

  this.set('disabled', false);
  assert.equal(this.$('input').attr('disabled'), undefined);

});

test('input element can be set to readonly', function(assert) {

  this.render(hbs`{{uic-form-element readonly=readonly}}`);
  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('input').attr('readonly'), undefined);

  this.set('readonly', true);

  assert.equal(this.$('input').attr('readonly'), 'readonly');
});

test('input element - placeholder can be set', function(assert) {

  this.render(hbs`{{uic-form-element placeholder=placeholder}}`);
  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('input').attr('placeholder'), undefined);

  this.set('placeholder', 'Some text...');

  assert.equal(this.$('input').attr('placeholder'), 'Some text...');

  this.set('placeholder', '');
  assert.equal(this.$('input').attr('placeholder'), '');

});

test('formElementId is passed to the template block as params.id', function(assert) {

  this.set('formElementId', 'theId');
  this.render(hbs`
    {{#uic-form-element
      formElementId=formElementId
      as |params|}}
      {{params.id}}
    {{/uic-form-element}}
  `);
  assert.equal(this.$().text().trim(), 'theId');
});
