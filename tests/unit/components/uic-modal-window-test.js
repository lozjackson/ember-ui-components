import { moduleForComponent, test } from 'ember-qunit';
moduleForComponent('uic-modal-window', 'Unit | Component | uic modal window', {
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
  assert.equal(component.get('classNames')[1], 'uic-modal-window');
  assert.equal(component.get('classNames')[2], 'uic-modal-container');
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
