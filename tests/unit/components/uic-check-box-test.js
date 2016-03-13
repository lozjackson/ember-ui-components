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

test('classNames', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('checkboxId', 1);
  this.render();
  assert.equal(component.get('classNames').length, 2);
  assert.equal(component.get('classNames')[1], 'uic-check-box');
});

test('checked should be false', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('checkboxId', 1);
  this.render();
  assert.equal(component.get('checked'), false);
});

test('if slider class exists _checkboxId throws a warning if checkboxId is not set', function(assert) {
  let _warn = Ember.warn;
  assert.expect(3);
  Ember.warn = (desc, test) => {
    assert.equal(desc, `'checkboxId' is a required attribute of the CheckBoxComponent when using the 'slider' or 'toggle' classes.  Pass it into the component like this: {{uic-check-box checkboxId="unique-id"}}`);
    assert.equal(test, null);
  };

  var component = this.subject();

  component.get('classNames').push('slider');

  this.render();
  component.get('_checkboxId');
  assert.ok(component);
  Ember.warn = _warn;
});

test('if toggle class exists _checkboxId throws a warning if checkboxId is not set', function(assert) {
  let _warn = Ember.warn;
  assert.expect(3);
  Ember.warn = (desc, test) => {
    assert.equal(desc, `'checkboxId' is a required attribute of the CheckBoxComponent when using the 'slider' or 'toggle' classes.  Pass it into the component like this: {{uic-check-box checkboxId="unique-id"}}`);
    assert.equal(test, null);
  };

  var component = this.subject();

  component.get('classNames').push('toggle');

  this.render();
  component.get('_checkboxId');
  assert.ok(component);
  Ember.warn = _warn;
});

test('if slider or toggle class does not exist _checkboxId should not throws a warning if checkboxId is not set', function(assert) {
  let _warn = Ember.warn;
  assert.expect(1);
  Ember.warn = () => {
    assert.ok(false, 'this warning should not happen');
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
