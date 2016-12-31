import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const run = Ember.run;

moduleForComponent('uic-check-box', 'Unit | Component | uic check box', {
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  component.set('checkboxId', 'checkboxSlider');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('checked should be false', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('checkboxId', 1);
  this.render();
  assert.equal(component.get('checked'), false);
});

test('_checkboxId should have a default value if slider', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.get('classNames').push('slider');
  this.render();
  assert.equal(typeof component.get('_checkboxId'), 'string');
  assert.equal(component.get('_checkboxId').indexOf('uic-check-box-'), 0);
});

test('_checkboxId should have a default value if toggle', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.get('classNames').push('toggle');
  this.render();
  assert.equal(typeof component.get('_checkboxId'), 'string');
  assert.equal(component.get('_checkboxId').indexOf('uic-check-box-'), 0);
});

test('_checkboxId', function(assert) {
  assert.expect(2);

  var component = this.subject();
  component.set('checkboxId', 1);

  this.render();
  assert.equal(component.get('_checkboxId'), 1);

  run(() => component.set('checkboxId', 2));
  assert.equal(component.get('_checkboxId'), 2);
});
