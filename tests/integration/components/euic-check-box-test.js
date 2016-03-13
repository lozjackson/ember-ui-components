import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('euic-check-box', 'Integration | Component | euic check box', {
  integration: true
});

test('it renders - basic', function(assert) {
  assert.expect(2);
  this.render(hbs`{{euic-check-box}}`);
  assert.equal(this.$('div.euic-check-box').length, 1);
  assert.equal(this.$('div.euic-check-box input[type=checkbox]').length, 1);
});

test('it renders - slider', function(assert) {
  assert.expect(4);
  this.render(hbs`{{euic-check-box class="slider" checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('div.euic-check-box.slider').length, 1, `there should 1 top level 'div' with class names 'check-box' and 'slider'`);
  assert.equal(this.$('div.euic-check-box input[type=checkbox]').length, 1, `'there should be 1 checkbox element'`);
  assert.equal(this.$('#checkboxSlider1').length, 1, `'there' should be an element with an 'id' equal to 'checkboxId'`);
  assert.equal(this.$('label[for=checkboxSlider1]').length, 1, `there should be a label element`);
});

test('disabled', function(assert) {
  assert.expect(4);
  this.set('disabled', false);
  this.render(hbs`{{euic-check-box disabled=disabled}}`);
  assert.equal(this.$('div.euic-check-box.disabled').length, 0);
  assert.equal(this.$('div.euic-check-box input[disabled]').length, 0);

  this.set('disabled', true);
  assert.equal(this.$('div.euic-check-box.disabled').length, 1);
  assert.equal(this.$('div.euic-check-box input[disabled]').length, 1);
});

test('checkbox visibility should not be hidden', function(assert) {
  assert.expect(1);

  this.render(hbs`{{euic-check-box checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('.euic-check-box input[type=checkbox]').css('visibility'), 'visible');
});

test('euic-check-box.slider visibility should be hidden', function(assert) {
  assert.expect(1);

  this.render(hbs`{{euic-check-box class="slider" checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('.euic-check-box input[type=checkbox]').css('visibility'), 'hidden');
});

test('euic-check-box.toggle visibility should be hidden', function(assert) {
  assert.expect(1);

  this.render(hbs`{{euic-check-box class="toggle" checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('.euic-check-box.toggle input[type=checkbox]').css('visibility'), 'hidden');
});

test('it toggles when you click the label', function(assert) {
  assert.expect(8);
  this.set('checkboxValue', false);
  this.render(hbs`{{euic-check-box checked=checkboxValue checkboxId="check-box-id"}}`);

  assert.equal(this.$('#check-box-id').prop('checked'), false);
  assert.equal(this.$('.euic-check-box input[type=checkbox]:checked + label').length, 0, 'the css selector should not match any elements');

  this.$('label[for=check-box-id]').click();
  assert.equal(this.$('#check-box-id').prop('checked'), true);
  assert.equal(this.get('checkboxValue'), true);
  assert.equal(this.$('.euic-check-box input[type=checkbox]:checked + label').length, 1, 'the css selector should match 1 element');

  this.$('label[for=check-box-id]').click();
  assert.equal(this.$('div.euic-check-box input').prop('checked'), false);
  assert.equal(this.get('checkboxValue'), false);
  assert.equal(this.$('.euic-check-box input[type=checkbox]:checked + label').length, 0, 'the css selector should not match any elements');
});

test('euic-check-box.slider label is in the OFF position', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', false);
  this.render(hbs`{{euic-check-box class="slider" checked=checkboxValue checkboxId="check-box-id"}}`);
  assert.equal(this.$('.euic-check-box label').css('left'), '3px');
});

test('check-box.toggle label is in the OFF position', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', false);
  this.render(hbs`{{euic-check-box class="toggle" checked=checkboxValue checkboxId="check-box-id"}}`);
  assert.equal(this.$('.euic-check-box label').css('left'), '0px');
});

test('euic-check-box.slider label is in the ON position', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', true);
  this.render(hbs`{{euic-check-box class="slider" checked=checkboxValue checkboxId="check-box-id"}}`);
  assert.equal(this.$('.euic-check-box label').css('left'), '43px');
});

test('euic-check-box.toggle label is at 0px', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', true);
  this.render(hbs`{{euic-check-box class="toggle" checked=checkboxValue checkboxId="check-box-id"}}`);
  assert.equal(this.$('.euic-check-box label').css('left'), '0px');
});
