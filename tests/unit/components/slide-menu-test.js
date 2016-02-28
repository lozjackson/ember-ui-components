import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const run = Ember.run;

moduleForComponent('slide-menu', 'Unit | Component | slide menu', {
  needs: [
    'component:content-mask'
  ],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('classNames', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNames').length, 2);
  assert.equal(component.get('classNames')[1], 'slide-menu');
});

test('classNameBindings', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNameBindings').length, 1);
  assert.equal(component.get('classNameBindings')[0], 'menuPosition');
});

test('menuPosition should be left', function (assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('menuPosition'), 'left', `'menuPosition' should be left`);
});

test('menuOpen should be false', function (assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('menuOpen'), false, `'menuOpen' should be false`);
});

test('pushContent should be false', function (assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('pushContent'), false, `'pushContent' should be false`);
});

test('maskContent should be true', function (assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('maskContent'), true, `'maskContent' should be true`);
});

test('showDefaultToggle', function (assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('showDefaultToggle'), true, `'showDefaultToggle' should be true`);
});

test('maskIsActive should be false', function (assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('maskIsActive'), false, `'maskIsActive' should be false`);
});

test('maskIsActive should be true when menu is open', function (assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();
  assert.equal(component.get('maskIsActive'), false, `'maskIsActive' should be false`);
  run(() => component.set('menuOpen', true));
  assert.equal(component.get('maskIsActive'), true, `'maskIsActive' should be true`);
  run(() => component.set('menuOpen', false));
  assert.equal(component.get('maskIsActive'), false, `'maskIsActive' should be false`);
});

test('menuButtonId', function (assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.ok(component.get('menuButtonId').indexOf('slide-menu-button-') !== -1);
});

test('_closeMenu method', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('menuOpen', true);
  this.render();
  run(() => component._closeMenu());
  assert.equal(component.get('menuOpen'), false, `'menuOpen' should be false`);
});

test('closeMenu action', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_closeMenu', () => assert.ok(true));
  this.render();
  component.send('closeMenu');
});
