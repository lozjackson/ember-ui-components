import EmberObject from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-modal', 'Unit | Component | uic modal', {
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

test('_closeModal method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('dialog', EmberObject.create({
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
