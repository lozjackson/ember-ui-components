import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('uic-modal-confirm', 'Unit | Component | uic modal confirm', {
  needs: [
    'component:uic-button',
    'service:dialog'
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

test('confirm action', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_confirm', () => assert.ok(true));
  this.render();
  component.send('confirm');
});

test('cancel action', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_cancel', () => assert.ok(true));
  this.render();
  component.send('cancel');
});
