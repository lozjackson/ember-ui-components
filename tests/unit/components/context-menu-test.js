import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import { getPosition } from 'ember-ui-components/lib/fn';

const run = Ember.run;

moduleForComponent('context-menu', 'Unit | Component | context menu', {
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
  assert.equal(component.get('classNames')[1], 'context-menu');
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

test('imported getPosition() method', function(assert) {
  assert.expect(2);
  let event = { clientX: 10, clientY: 25 };
  let position = getPosition(event);
  assert.equal(position.get('x'), 10, `'position.x' should be 10`);
  assert.equal(position.get('y'), 25, `'position.y' should be 25`);
});

test('_closeContextMenu() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('showContextMenu', true);
  this.render();
  run(() => component._closeContextMenu());
  assert.equal(component.get('showContextMenu'), false);
});

test('closeContextMenu action', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_closeContextMenu', () => assert.ok(true));
  this.render();
  run(() => component.send('closeContextMenu'));
});
