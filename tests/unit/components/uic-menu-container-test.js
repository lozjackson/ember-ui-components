import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-menu-container', 'Unit | Component | uic menu container', {
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
  component.set('didInsertMenu', () => assert.ok(true));
  this.render();
  assert.ok(component);
});
