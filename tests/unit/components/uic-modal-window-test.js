import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const { run } = Ember;

moduleForComponent('uic-modal-window', 'Unit | Component | uic modal window', {
  needs: [
    'component:uic-content-mask',
    'component:uic-modal',
    'component:ember-wormhole'
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

test('classNameBindings', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.deepEqual(component.get('classNameBindings'), ['disablePointerEvents:uic-disable-pointer-events']);
});

test('showModal', function(assert) {
  assert.expect(3);
  var component = this.subject({
    modal: {
      modalId: null,
    },
    elementId: 'abc'
  });
  this.render();
  assert.equal(component.get('showModal'), false);
  run(() => component.set('modal.modalId', 'abc'));
  assert.equal(component.get('showModal'), true);
  run(() => component.set('modal.modalId', null));
  assert.equal(component.get('showModal'), false);
});

test('disableScroll', function (assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('disableScroll'), false);
});

test('showCloseButton', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('showCloseButton'), true);
});

test('parentRouteName', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', { parentRouteName: 'child-route' });
  this.render();
  assert.equal(component.get('parentRouteName'), 'child-route');
});

test('_closeModal() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  component._closeModal();
  assert.ok(component);
});

test('closeModal action', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_closeModal',() => assert.ok(true));
  this.render();
  component.send('closeModal');
});
