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

test('input element can be passed an id from the template', function(assert) {
  this.render(hbs`{{uic-input id="theId" }}`);
  assert.equal(this.$('#theId').length, 1);
});

test('input element can be disabled', function(assert) {

  this.render(hbs`{{uic-input disabled=disabled}}`);
  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('input').attr('disabled'), undefined);

  this.set('disabled', true);

  assert.equal(this.$('input').attr('disabled'), 'disabled');

  this.set('disabled', false);
  assert.equal(this.$('input').attr('disabled'), undefined);

});

test('input element can be set to readonly', function(assert) {

  this.render(hbs`{{uic-input readonly=readonly}}`);
  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('input').attr('readonly'), undefined);

  this.set('readonly', true);

  assert.equal(this.$('input').attr('readonly'), 'readonly');
});

test('input element can be set to autofocus', function(assert) {

  this.render(hbs`{{uic-input autofocus=autofocus}}`);
  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('input').attr('autofocus'), undefined);

  this.set('autofocus', true);

  assert.equal(this.$('input').attr('autofocus'), 'autofocus');

  this.set('autofocus', false);

  assert.equal(this.$('input').attr('autofocus'), undefined);
});

test('input element type can be set', function(assert) {

  this.render(hbs`{{uic-input type=type}}`);
  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('input').attr('type'), undefined);

  this.set('type', 'number');

  assert.equal(this.$('input').attr('type'), 'number');

  this.set('type', 'password');

  assert.equal(this.$('input').attr('type'), 'password');

  this.set('type', undefined);

  assert.equal(this.$('input').attr('type'), undefined);
});

test('input element - placeholder can be set', function(assert) {

  this.render(hbs`{{uic-input placeholder=placeholder}}`);
  assert.equal(this.$('input').length, 1);
  assert.equal(this.$('input').attr('placeholder'), undefined);

  this.set('placeholder', 'Some text...');

  assert.equal(this.$('input').attr('placeholder'), 'Some text...');

  this.set('placeholder', '');
  assert.equal(this.$('input').attr('placeholder'), '');

});
