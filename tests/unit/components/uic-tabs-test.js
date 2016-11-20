import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const { run } = Ember;

moduleForComponent('uic-tabs', 'Unit | Component | uic tabs', {
  needs: [
    'helper:is-equal'
  ],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  let component = this.subject();
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('tabs should be []', function(assert) {
  assert.expect(1);
  let component = this.subject();
  this.render();
  assert.deepEqual(component.get('tabs'), []);
});

test('defaultName should be Untitled', function(assert) {
  assert.expect(1);
  let component = this.subject();
  this.render();
  assert.deepEqual(component.get('defaultName'), 'Untitled');
});

test('init() method', function(assert) {
  assert.expect(1);
  let tab = { id: 1 };
  let component = this.subject({
    tabs: Ember.A([ tab ])
  });
  this.render();
  assert.deepEqual(component.get('activeTab'), tab);
});

test('setDefultTab() method', function(assert) {
  assert.expect(2);
  let tab = { id: 1 };
  let component = this.subject({
    tabs: Ember.A([ tab ])
  });
  this.render();
  run(() => component.set('activeTab', null));
  assert.deepEqual(component.get('activeTab'), null);

  run(() => component.setDefaultTab());
  assert.deepEqual(component.get('activeTab'), tab);
});

test('selectTab() method sets activeTab', function(assert) {
  assert.expect(1);
  let tab = { id: 1 };
  let component = this.subject();
  this.render();
  component.selectTab(tab);
  assert.deepEqual(component.get('activeTab'), tab);
});
