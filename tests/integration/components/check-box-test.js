import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('check-box', 'Integration | Component | check box', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(4);
  this.render(hbs`{{check-box checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('div.check-box').length, 1);
  assert.equal(this.$('.check-box input[type=checkbox]').length, 1);
  assert.equal(this.$('#checkboxSlider1').length, 1);
  assert.equal(this.$('label[for=checkboxSlider1]').length, 1);
});

test('checkbox visibility should not be hidden', function(assert) {
  assert.expect(1);

  this.render(hbs`{{check-box checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('.check-box input[type=checkbox]').css('visibility'), 'visible');
});

test('check-box.slider visibility should be hidden', function(assert) {
  assert.expect(1);

  this.render(hbs`{{check-box class="slider" checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('.check-box input[type=checkbox]').css('visibility'), 'hidden');
});

test('check-box.toggle visibility should be hidden', function(assert) {
  assert.expect(1);

  this.render(hbs`{{check-box class="toggle" checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('.check-box.toggle input[type=checkbox]').css('visibility'), 'hidden');
});

test('it toggles when you click the label', function(assert) {
  assert.expect(8);
  this.set('checkboxValue', false);
  this.render(hbs`{{check-box checked=checkboxValue checkboxId="check-box-id"}}`);

  assert.equal(this.$('#check-box-id').prop('checked'), false);
  assert.equal(this.$('.check-box input[type=checkbox]:checked + label').length, 0, 'the css selector should not match any elements');

  this.$('label[for=check-box-id]').click();
  assert.equal(this.$('#check-box-id').prop('checked'), true);
  assert.equal(this.get('checkboxValue'), true);
  assert.equal(this.$('.check-box input[type=checkbox]:checked + label').length, 1, 'the css selector should match 1 element');

  this.$('label[for=check-box-id]').click();
  assert.equal(this.$('div.check-box input').prop('checked'), false);
  assert.equal(this.get('checkboxValue'), false);
  assert.equal(this.$('.check-box input[type=checkbox]:checked + label').length, 0, 'the css selector should not match any elements');
});

test('check-box.slider label is in the OFF position', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', false);
  this.render(hbs`{{check-box class="slider" checked=checkboxValue checkboxId="check-box-id"}}`);
  assert.equal(this.$('.check-box label').css('left'), '3px');
});

test('check-box.toggle label is in the OFF position', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', false);
  this.render(hbs`{{check-box class="toggle" checked=checkboxValue checkboxId="check-box-id"}}`);
  assert.equal(this.$('.check-box label').css('left'), '0px');
});

test('check-box.slider label is in the ON position', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', true);
  this.render(hbs`{{check-box class="slider" checked=checkboxValue checkboxId="check-box-id"}}`);
  assert.equal(this.$('.check-box label').css('left'), '43px');
});

test('check-box.toggle label is at 0px', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', true);
  this.render(hbs`{{check-box class="toggle" checked=checkboxValue checkboxId="check-box-id"}}`);
  assert.equal(this.$('.check-box label').css('left'), '0px');
  // assert.equal(this.$('.check-box.toggle input[type=checkbox]:checked + label:after').css('left'), '2rem');
});
