import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const { run } = Ember;

moduleForComponent('uic-context-menu-container', 'Unit | Component | uic context menu container', {
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
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.deepEqual(component.get('classNames'), ['ember-view', 'uic-context-menu-container', 'uic-menu-container']);
});

test('attributeBindings', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('attributeBindings').length, 2);
  assert.equal(component.get('attributeBindings')[1], 'tabindex');
});

test('classNameBindings', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNameBindings').length, 1);
  assert.equal(component.get('classNameBindings')[0], 'hideOutline:no-outline');
});

test('tabindex', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('tabindex'), 1);
});

test('hideOutline', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('hideOutline'), true);
});

test('keyDown() event - enter', function(assert) {
  assert.expect(2);
  let event = {
    preventDefault: () => assert.ok(false),
    keyCode: 13
  };
  var component = this.subject();
  // component.set('showContextMenu', true);
  component.set('action', () => assert.ok(true));
  this.render();
  run(() => component.keyDown(event));
  assert.ok(component);
});

test('keyDown() event - escape', function(assert) {
  assert.expect(2);
  let event = {
    preventDefault: () => assert.ok(false),
    keyCode: 27
  };
  var component = this.subject();
  // component.set('showContextMenu', true);
  component.set('action', () => assert.ok(true));
  this.render();
  run(() => component.keyDown(event));
  assert.ok(component);
});
