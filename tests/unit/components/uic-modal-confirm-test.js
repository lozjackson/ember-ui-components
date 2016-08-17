import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('uic-modal-confirm', 'Unit | Component | uic modal confirm', {
  needs: [
    'component:uic-button'
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
  assert.equal(component.get('classNames')[1], 'uic-modal');
  assert.equal(component.get('classNames')[2], 'uic-modal-confirm');

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
