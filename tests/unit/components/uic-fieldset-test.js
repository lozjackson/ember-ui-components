import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-fieldset', 'Unit | Component | uic fieldset', {
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('tagName should be fieldset', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('tagName'), 'fieldset');
});
