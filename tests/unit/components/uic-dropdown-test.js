import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const run = Ember.run;

moduleForComponent('uic-dropdown', 'Unit | Component | uic dropdown', {
  needs: [
    'component:uic-dropdown-container'
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

test('classNames', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.deepEqual(component.get('classNames'), ['ember-view', 'uic-dropdown']);
});
test('showDropdown', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('showDropdown'), false);
});

test('_hideDropdown() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('showDropdown', true);
  this.render();
  run(() => component._hideDropdown());
  assert.equal(component.get('showDropdown'), false);
});

test('click', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('showDropdown', false);
  this.render();

  run(() => component.click());
  assert.equal(component.get('showDropdown'), true);

  run(() => component.click());
  assert.equal(component.get('showDropdown'), false);
});

test('hideDropdown action', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_hideDropdown', () => assert.ok(true));
  this.render();
  component.send('hideDropdown');
});
