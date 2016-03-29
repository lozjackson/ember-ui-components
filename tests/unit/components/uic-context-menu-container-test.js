import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-context-menu-container', 'Unit | Component | uic context menu container', {
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
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.deepEqual(component.get('classNames'), ['ember-view', 'uic-context-menu-container', 'uic-menu-container']);
});
