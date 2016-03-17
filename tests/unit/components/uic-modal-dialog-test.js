import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const run = Ember.run;

moduleForComponent('uic-modal-dialog', 'Unit | Component | uic modal dialog', {
  needs: [
    'component:uic-content-mask',
    'component:uic-modal'
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
  assert.expect(3);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNames').length, 3);
  assert.equal(component.get('classNames')[1], 'uic-modal-dialog');
  assert.equal(component.get('classNames')[2], 'no-outline');
});

test('classNameBindings', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNameBindings').length, 1);
  assert.equal(component.get('classNameBindings')[0], 'dialog.open:uic-modal-container');
});

test('attributeBindings', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('attributeBindings').length, 2);
  assert.equal(component.get('attributeBindings')[1], 'tabindex');
});

test('tabindex', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('tabindex'), 1);
});

test('displayModal', function(assert) {
  assert.expect(4);
  var component = this.subject();
  component.set('dialog', Ember.Object.create({
    open: false,
    type: null
  }));
  this.render();
  assert.equal(component.get('displayModal'), false);

  run(() => component.set('dialog.open', true));
  assert.equal(component.get('displayModal'), false);

  run(() => component.set('dialog.type', 'uic-modal'));
  assert.equal(component.get('displayModal'), true);

  run(() => component.set('dialog.open', false));
  assert.equal(component.get('displayModal'), false);
});

test('_confirm() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('dialog', Ember.Object.create({
    resolve: () => assert.ok(true)
  }));
  this.render();
  component._confirm();
});

test('_cancel() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('dialog', Ember.Object.create({
    reject: () => assert.ok(true)
  }));
  this.render();
  component._cancel();
});

test('keyDown event - enter key', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('dialog', { open: true });
  component.set('_confirm', () => assert.ok(true));
  this.render();
  component.keyDown({keyCode: 13});
});

test('keyDown event - escape key', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('dialog', { open: true });
  component.set('_cancel', () => assert.ok(true));
  this.render();
  component.keyDown({keyCode: 27});
});
