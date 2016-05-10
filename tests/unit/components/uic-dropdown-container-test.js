import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-dropdown-container', 'Unit | Component | uic dropdown container', {
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
  assert.deepEqual(component.get('classNames'), ['ember-view', 'uic-dropdown-container', 'uic-menu-container']);
});

test('autoClose', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('autoClose'), true);
});

test('click() method - autoClose=true', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('autoClose', true);
  this.render();
  let event = {
    preventDefault: () => assert.ok(false)
  };
  assert.equal(component.click(event), undefined);
});

test('click() method - autoClose=false', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('autoClose', false);
  this.render();
  let event = {
    preventDefault: () => assert.ok(true)
  };
  assert.equal(component.click(event), false);
});
