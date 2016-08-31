import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-select', 'Unit | Component | uic select', {
  needs: [
    'helper:is-equal'
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

test('tagName', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('tagName'), 'select');
});

test('classNames', function(assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNames').length, 3);
  assert.equal(component.get('classNames')[1], 'uic-select');
  assert.equal(component.get('classNames')[2], 'uic-form-element');
});

test('options should be empty array', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('options.length'), 0);
});

test('change() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  let evt = {
    target: { value: 'Test' }
  };
  component.change(evt);

  assert.equal(component.get('selected'), 'Test');
});
