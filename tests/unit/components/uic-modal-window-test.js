import { moduleForComponent, test } from 'ember-qunit';
moduleForComponent('uic-modal-window', 'Unit | Component | uic modal window', {
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
  assert.equal(component.get('classNames')[1], 'uic-modal-window');
});

test('showCloseButton', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('showCloseButton'), true);
});

test('parentRouteName top-level route', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'child-route' });
  this.render();
  assert.equal(component.get('parentRouteName'), 'index');
});

test('parentRouteName 1 nested route', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'parent-route.child-route' });
  this.render();
  assert.equal(component.get('parentRouteName'), 'parent-route');
});

test('parentRouteName 2 nested routes', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'top-level-route.parent-route.child-route' });
  this.render();
  assert.equal(component.get('parentRouteName'), 'top-level-route.parent-route');
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
