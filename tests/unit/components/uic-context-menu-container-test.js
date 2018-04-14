import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-context-menu-container', 'Unit | Component | uic context menu container', {
  needs: [
    'service:context-menu',
    'service:lookup'
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

test('attributeBindings', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.ok(component.get('attributeBindings').indexOf('tabindex') !== -1);
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
  component.set('closeContextMenu', () => assert.ok(true));
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
  component.set('closeContextMenu', () => assert.ok(true));
  this.render();
  run(() => component.keyDown(event));
  assert.ok(component);
});
