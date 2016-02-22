import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkbox-slider', 'Integration | Component | checkbox slider', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(4);
  this.render(hbs`{{checkbox-slider checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('div.check-box.slider').length, 1);
  assert.equal(this.$('.check-box.slider input[type=checkbox]').length, 1);
  assert.equal(this.$('#checkboxSlider1').length, 1);
  assert.equal(this.$('label[for=checkboxSlider1]').length, 1);
});

test('checkbox visibility should be hidden', function(assert) {
  assert.expect(1);

  this.render(hbs`{{checkbox-slider checkboxId="checkboxSlider1"}}`);
  assert.equal(this.$('.check-box.slider input[type=checkbox]').css('visibility'), 'hidden');
});

test('it toggles when you click the label', function(assert) {
  assert.expect(8);
  this.set('checkboxValue', false);
  this.render(hbs`{{checkbox-slider checked=checkboxValue checkboxId="checkbox-slider-id"}}`);

  assert.equal(this.$('#checkbox-slider-id').prop('checked'), false);
  assert.equal(this.$('.check-box.slider input[type=checkbox]:checked + label').length, 0, 'the css selector should not match any elements');

  this.$('label[for=checkbox-slider-id]').click();
  assert.equal(this.$('#checkbox-slider-id').prop('checked'), true);
  assert.equal(this.get('checkboxValue'), true);
  assert.equal(this.$('.check-box.slider input[type=checkbox]:checked + label').length, 1, 'the css selector should match 1 element');

  this.$('label[for=checkbox-slider-id]').click();
  assert.equal(this.$('div.check-box.slider input').prop('checked'), false);
  assert.equal(this.get('checkboxValue'), false);
  assert.equal(this.$('.check-box.slider input[type=checkbox]:checked + label').length, 0, 'the css selector should not match any elements');
});

test('label is in the OFF position', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', false);
  this.render(hbs`{{checkbox-slider checked=checkboxValue checkboxId="checkbox-slider-id"}}`);
  assert.equal(this.$('.check-box.slider label').css('left'), '3px');
});

test('label is in the ON position', function(assert) {
  assert.expect(1);
  this.set('checkboxValue', true);
  this.render(hbs`{{checkbox-slider checked=checkboxValue checkboxId="checkbox-slider-id"}}`);
  assert.equal(this.$('.check-box.slider label').css('left'), '43px');
});
