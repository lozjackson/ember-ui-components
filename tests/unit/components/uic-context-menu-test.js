import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const run = Ember.run;

moduleForComponent('uic-context-menu', 'Unit | Component | uic context menu', {
  needs: [
    'component:uic-content-mask'
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
  assert.equal(component.get('classNames')[1], 'uic-context-menu');
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


test('showContextMenu', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('showContextMenu'), false);
});

test('contextMenuParams', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(Ember.typeOf( component.get('contextMenuParams') ), "instance");
});

test('initContextMenuParams() method', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  component.set('contextMenuParams', null);
  component.initContextMenuParams();
  assert.equal(Ember.typeOf( component.get('contextMenuParams') ), "instance");
  assert.equal(Ember.typeOf( component.get('contextMenuParams.event') ), "null");
});

test('_closeContextMenu() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('showContextMenu', true);
  this.render();
  run(() => component._closeContextMenu());
  assert.equal(component.get('showContextMenu'), false);
});

test('contextMenu() event', function(assert) {
  assert.expect(4);
  let returnValue;
  let event = {
    preventDefault: () => assert.ok(true)
  };
  var component = this.subject();
  component.set('showContextMenu', false);
  this.render();
  run(() => returnValue = component.contextMenu(event));
  assert.deepEqual(component.get('contextMenuParams.event'), event);
  assert.equal(component.get('showContextMenu'), true);
  assert.equal(returnValue, false);
});

test('keyDown() event - enter', function(assert) {
  assert.expect(2);
  let event = {
    preventDefault: () => assert.ok(false),
    keyCode: 13
  };
  var component = this.subject();
  component.set('showContextMenu', true);
  component.set('_closeContextMenu', () => assert.ok(true));
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
  component.set('showContextMenu', true);
  component.set('_closeContextMenu', () => assert.ok(true));
  this.render();
  run(() => component.keyDown(event));
  assert.ok(component);
});

test('closeContextMenu action', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_closeContextMenu', () => assert.ok(true));
  this.render();
  run(() => component.send('closeContextMenu'));
});
