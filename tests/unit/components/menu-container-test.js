import { moduleForComponent, test } from 'ember-qunit';
// import Ember from 'ember';

// const run = Ember.run;

moduleForComponent('menu-container', 'Unit | Component | menu container', {
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

test('classNames', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNames').length, 2);
  assert.equal(component.get('classNames')[1], 'menu-container');
});

test('getParentMenu() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();

  component.getParentMenu();

  assert.equal(component.get('classNames')[1], 'menu-container');
});

test('didInsertElement', function(assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('didInsertMenu', () => assert.ok(true));
  this.render();
  assert.ok(component);
});
