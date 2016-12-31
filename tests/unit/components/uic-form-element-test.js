import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const run = Ember.run;

moduleForComponent('uic-form-element', 'Unit | Component | uic form element', {
  needs: [
    'component:uic-input'
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

test('classNameBindings', function(assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNameBindings').length, 2);
  assert.equal(component.get('classNameBindings')[0], 'disabled');
  assert.equal(component.get('classNameBindings')[1], 'readonly');
});

test('_formElementId', function(assert) {
  assert.expect(2);

  var component = this.subject();
  component.set('formElementId', 1);

  this.render();
  assert.equal(component.get('_formElementId'), 1);

  run(() => component.set('formElementId', 2));
  assert.equal(component.get('_formElementId'), 2);
});

test('_params', function(assert) {
  assert.expect(2);

  var component = this.subject({ _formElementId: '' });

  this.render();

  run(() => component.set('_formElementId', 'foo'));
  assert.deepEqual(component.get('_params'), { id: 'foo' });

  run(() => component.set('_formElementId', 'bar'));
  assert.deepEqual(component.get('_params'), { id: 'bar' });
});
