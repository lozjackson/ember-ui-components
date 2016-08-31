import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-button', 'Unit | Component | uic button', {
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
  assert.deepEqual(component.get('classNames'), ['ember-view', 'uic-button']);
});

test('classNameBindings', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.deepEqual(component.get('classNameBindings'), ['selected:selected']);
});


test('attributeBindings', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.ok(component.get('attributeBindings').indexOf('disabled') !== -1);
});
