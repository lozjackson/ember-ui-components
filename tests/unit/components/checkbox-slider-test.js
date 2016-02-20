import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const run = Ember.run;

moduleForComponent('checkbox-slider', 'Unit | Component | checkbox slider', {
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

test('classNames', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('checkboxId', 1);
  this.render();
  assert.equal(component.get('classNames').length, 2);
  assert.equal(component.get('classNames')[1], 'checkbox-slider');
});

test('checked should be false', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('checkboxId', 1);
  this.render();
  assert.equal(component.get('checked'), false);
});

test('_checkboxId throws a warning if checkboxId is not set', function(assert) {
  let _warn = Ember.warn;
  assert.expect(3);
  Ember.warn = (desc, test) => {
    assert.equal(desc, `'checkboxId' is a required attribute of the CheckboxSliderComponent.  Pass it into the component like this: {{checkbox-slider checkboxId="unique-id"}}`);
    assert.equal(test, null);
  };

  var component = this.subject();
  this.render();
  component.get('_checkboxId');
  assert.ok(component);
  Ember.warn = _warn;
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
