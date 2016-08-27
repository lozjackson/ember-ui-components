import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-input', 'Unit | Component | uic input', {
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

test('tagName', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('tagName'), 'input');
});

test('classNames', function(assert) {
  assert.expect(4);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNames').length, 4);
  assert.equal(component.get('classNames')[1], 'ember-text-field');
  assert.equal(component.get('classNames')[2], 'uic-input');
  assert.equal(component.get('classNames')[3], 'uic-form-element');
});
