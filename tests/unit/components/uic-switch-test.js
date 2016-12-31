import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const { run } = Ember;

moduleForComponent('uic-switch', 'Unit | Component | uic switch', {
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
  assert.equal(component.get('tagName'), 'button');
});

test('selected', function(assert) {

  assert.expect(2);

  let prop = null;
  let component = this.subject();
  this.render();

  run(() => component.setProperties({
    property: prop,
    value: 'foo'
  }));
  assert.equal(component.get('selected'), false);
  prop = 'foo';
  run(() => component.set('property', prop));
  assert.equal(component.get('selected'), true);
});
