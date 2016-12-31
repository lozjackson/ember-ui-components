import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-button-group', 'Unit | Component | uic button group', {
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});
