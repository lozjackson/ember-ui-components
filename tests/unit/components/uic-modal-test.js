import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('uic-modal', 'Unit | Component | uic modal', {
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
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNames').length, 2);
  assert.equal(component.get('classNames')[1], 'uic-modal');
});

test('_closeModal method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('dialog', Ember.Object.create({
    closeModal: () => assert.ok(true)
  }));
  this.render();
  component._closeModal();
});

test('closeModal action', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_closeModal', () => assert.ok(true));
  this.render();
  component.send('closeModal');
});
