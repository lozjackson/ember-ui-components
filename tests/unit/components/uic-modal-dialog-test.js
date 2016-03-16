import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('uic-modal-dialog', 'Unit | Component | uic modal dialog', {
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
