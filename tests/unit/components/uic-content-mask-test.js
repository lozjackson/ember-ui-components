import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-content-mask', 'Unit | Component | uic content mask', {
  // needs: [],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('didInsertElement', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('didInsertMask', () => assert.ok(true));
  this.render();
  assert.ok(component);
});
