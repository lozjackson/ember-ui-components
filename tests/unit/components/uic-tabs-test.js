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

test('defaultTabName should be Untitled', function(assert) {
  assert.expect(1);
  let component = this.subject();
  this.render();
  assert.deepEqual(component.get('defaultTabName'), 'Untitled');
});

test('renderAllTabs should be false', function(assert) {
  assert.expect(1);
  let component = this.subject();
  this.render();
  assert.deepEqual(component.get('renderAllTabs'), false);
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

test('setDefaultTab() method - pass an enumerable ember array of ember objects', function(assert) {
  assert.expect(2);
  let tab = Ember.Object.create({ id: 1 });
  let component = this.subject({
    tabs: Ember.A([ tab ])
  });
  this.render();
  run(() => component.set('activeTab', null));
  assert.deepEqual(component.get('activeTab'), null);

  run(() => component.setDefaultTab());
  assert.deepEqual(component.get('activeTab'), tab);
});

test('setDefaultTab() method - pass a vanilla array of ember objects', function(assert) {
  assert.expect(2);
  let tab = Ember.Object.create({ id: 1 });
  let component = this.subject({
    tabs: [ tab ]
  });
  this.render();
  run(() => component.set('activeTab', null));
  assert.deepEqual(component.get('activeTab'), null);

  run(() => component.setDefaultTab());
  assert.deepEqual(component.get('activeTab'), tab);
});

test('setDefaultTab() method - pass an enumerable ember array of pojos', function(assert) {
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

test('setDefaultTab() method - pass a vanilla array of pojos', function(assert) {
  assert.expect(2);
  let tab = { id: 1 };
  let component = this.subject({
    tabs: [ tab ]
  });
  this.render();
  run(() => component.set('activeTab', null));
  assert.deepEqual(component.get('activeTab'), null);

  run(() => component.setDefaultTab());
  assert.deepEqual(component.get('activeTab'), tab);
});

test('setDefaultTab() method - pass an empty vanilla js array', function(assert) {
  assert.expect(2);
  let component = this.subject({
    tabs: []
  });
  this.render();
  run(() => component.set('activeTab', null));
  assert.deepEqual(component.get('activeTab'), null);

  run(() => component.setDefaultTab());
  assert.deepEqual(component.get('activeTab'), null);
});

test('setDefaultTab() method - tabs = null', function(assert) {
  assert.expect(2);
  let component = this.subject({
    tabs: null
  });
  this.render();
  run(() => component.set('activeTab', null));
  assert.deepEqual(component.get('activeTab'), null);

  run(() => component.setDefaultTab());
  assert.deepEqual(component.get('activeTab'), null);
});

test('selectTab() method sets activeTab', function(assert) {
  assert.expect(1);
  let tab = { id: 1 };
  let component = this.subject();
  this.render();
  run(() => component.selectTab(tab));
  assert.deepEqual(component.get('activeTab'), tab);
});
