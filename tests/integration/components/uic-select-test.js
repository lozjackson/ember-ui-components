import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const {set, run} = Ember;

moduleForComponent('uic-select', 'Integration | Component | uic select', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  this.render(hbs`{{uic-select}}`);
  assert.equal(this.$('select').length, 1);
});

test('it has the .uic-select class name', function(assert) {
  assert.expect(1);
  this.render(hbs`{{uic-select}}`);
  assert.equal(this.$('select.uic-select').length, 1);
});

test('it has the .uic-form-element class name', function(assert) {
  assert.expect(1);
  this.render(hbs`{{uic-select}}`);
  assert.equal(this.$('select.uic-form-element').length, 1);
});

test('disabled', function(assert) {
  assert.expect(2);
  this.set('disabled', false);
  this.render(hbs`{{uic-select disabled=disabled}}`);
  assert.equal(this.$('select.uic-select[disabled]').length, 0);
  this.set('disabled', true);
  assert.equal(this.$('select.uic-select[disabled]').length, 1);
});

test('options - pass in array of strings', function(assert) {
  assert.expect(1);

  this.set('options', ['Active', 'Complete']);
  this.render(hbs`{{uic-select options=options}}`);

  assert.equal(this.$('select.uic-select option').length, 2);
});

test('options - pass in Ember.Array of strings', function(assert) {
  let options = Ember.A(['Active', 'Complete']);
  this.set('options', options);
  this.render(hbs`{{uic-select options=options}}`);

  assert.equal(this.$('select.uic-select option').length, 2);

  run(() => options.pushObject('Closed'));
  assert.equal(this.$('select.uic-select option').length, 3);

  assert.equal(this.$('select.uic-select option[value=Active]').length, 1);
});

test('options - pass in array of objects', function(assert) {
  let options = [
    {
      value: 'active-value',
      text: 'Active'
    },{
      value: 'complete-value',
      text: 'Complete'
    }
  ];
  this.set('options', options);
  this.render(hbs`{{uic-select options=options}}`);

  assert.equal(this.$('select.uic-select option').length, 2);
  assert.equal(this.$('select.uic-select option[value=active-value]').length, 1);
  run(() => set(options[0], 'value', 'AnotherValue'));
  assert.equal(this.$('select.uic-select option[value=active-value]').length, 0);
  assert.equal(this.$('select.uic-select option[value=AnotherValue]').length, 1);
});

test('options - pass in array of Ember.Objects', function(assert) {
  let options = [
    Ember.Object.create({
      value: 'active-value',
      text: 'Active'
    }),
    Ember.Object.create({
      value: 'complete-value',
      text: 'Complete'
    })
  ];
  this.set('options', options);
  this.render(hbs`{{uic-select options=options}}`);

  assert.equal(this.$('select.uic-select option').length, 2);
  assert.equal(this.$('select.uic-select option[value=active-value]').length, 1);
  run(() => set(options[0], 'value', 'AnotherValue'));
  assert.equal(this.$('select.uic-select option[value=active-value]').length, 0);
  assert.equal(this.$('select.uic-select option[value=AnotherValue]').length, 1);
});

test('options - pass in Ember.Array of Ember.Objects', function(assert) {
  let options = Ember.A([
    Ember.Object.create({
      value: 'active-value',
      text: 'Active'
    }),
    Ember.Object.create({
      value: 'complete-value',
      text: 'Complete'
    })
  ]);
  this.set('options', options);
  this.render(hbs`{{uic-select options=options}}`);

  assert.equal(this.$('select.uic-select option').length, 2);
  assert.equal(this.$('select.uic-select option[value=active-value]').length, 1);
  run(() => set(options[0], 'value', 'AnotherValue'));
  assert.equal(this.$('select.uic-select option[value=active-value]').length, 0);
  assert.equal(this.$('select.uic-select option[value=AnotherValue]').length, 1);
  run(() => options.pushObject(Ember.Object.create({
    value: 'closed-value',
    text: 'Closed'
  })));
  assert.equal(this.$('select.uic-select option').length, 3);
  assert.equal(this.$('select.uic-select option[value=closed-value]').length, 1);
});
