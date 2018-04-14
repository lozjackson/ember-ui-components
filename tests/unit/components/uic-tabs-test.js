import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';

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

test('tab should be an alias of activeTab', function(assert) {
  assert.expect(1);
  let tab1 = { id: 1 };
  let tab2 = { id: 1 };
  let component = this.subject({
    tabs: A([ tab1, tab2 ])
  });
  this.render();
  run(() => component.set('activeTab', tab2));
  assert.deepEqual(component.get('tab'), tab2);
});

test('getDefaultTab() method returns the first tab', function(assert) {
  assert.expect(1);
  let tab1 = { id: 1 };
  let tab2 = { id: 1 };
  let component = this.subject({
    tabs: A([ tab1, tab2 ])
  });
  this.render();
  assert.deepEqual(component.getDefaultTab(), tab1);
});

test('getDefaultTab() - pass an enumerable ember array of ember objects', function(assert) {
  assert.expect(1);
  let tab = EmberObject.create({ id: 1 });
  let component = this.subject({
    tabs: A([ tab ])
  });
  this.render();
  assert.deepEqual(component.getDefaultTab(), tab);
});

test('getDefaultTab() - pass a vanilla array of ember objects', function(assert) {
  assert.expect(1);
  let tab = EmberObject.create({ id: 1 });
  let component = this.subject({
    tabs: [ tab ]
  });
  this.render();
  assert.deepEqual(component.getDefaultTab(), tab);
});


test('getDefaultTab() pass an enumerable ember array of pojos', function(assert) {
  assert.expect(1);
  let tab1 = { id: 1 };
  let tab2 = { id: 2 };
  let component = this.subject({ tabs: A([tab1, tab2]) });
  this.render();
  assert.deepEqual(component.getDefaultTab(), tab1);
});

test('getDefaultTab() - pass a vanilla array of pojos', function(assert) {
  assert.expect(1);
  let tab1 = { id: 1 };
  let tab2 = { id: 2 };
  let component = this.subject({ tabs: [tab1, tab2] });
  this.render();
  assert.deepEqual(component.getDefaultTab(), tab1);
});

test('getDefaultTab() - pass an empty vanilla js array', function(assert) {
  assert.expect(1);
  let component = this.subject({
    tabs: []
  });
  this.render();
  assert.deepEqual(component.getDefaultTab(), undefined);
});

test('getDefaultTab() - tabs = null', function(assert) {
  assert.expect(1);
  let component = this.subject({
    tabs: null
  });
  this.render();
  assert.deepEqual(component.getDefaultTab(), undefined);
});

test('setActiveTab() method sets activeTab', function(assert) {
  assert.expect(1);
  let tab1 = { id: 1 };
  let tab2 = { id: 2 };
  let component = this.subject({
    initActiveTab() {},
    tabs: [tab1, tab2]
  });
  this.render();
  run(() => component.setActiveTab(tab2));
  assert.deepEqual(component.get('activeTab'), tab2);
});

test('_initActiveTab() method sets activeTab', function(assert) {
  assert.expect(1);
  let tab1 = { id: 1 };
  let tab2 = { id: 2 };
  let component = this.subject({
    initActiveTab() {},
    tabs: [tab1, tab2]
  });
  this.render();
  run(() => component.setActiveTab(tab2));
  assert.deepEqual(component.get('activeTab'), tab2);
});

test('_initActiveTab is run on didRender', function(assert) {
  assert.expect(1);
  this.subject({
    _initActiveTab: () => assert.ok(true)
  });
  this.render();
});

test('_confirmActiveTab() method', function(assert) {
  assert.expect(5);
  let tab1 = { id: 1 };
  let tab2 = { id: 2 };
  let component = this.subject({
    tabs: A([tab1, tab2]),
    _initActiveTab: () => {},
    activeTab: null
  });
  this.render();
  assert.ok(!component._confirmActiveTab());

  run(() => component.set('activeTab', tab1));
  assert.equal(component._confirmActiveTab(), true);

  run(() => component.get('tabs').removeObject(tab1));
  assert.ok(!component._confirmActiveTab());

  run(() => component.set('activeTab', tab2));
  assert.equal(component._confirmActiveTab(), true);

  run(() => component.get('tabs').removeObject(tab2));
  assert.ok(!component._confirmActiveTab());
});

test('_initActiveTab - stub confirmActiveTab method', function(assert) {
  assert.expect(2);
  let tab1 = { id: 1 };
  let tab2 = { id: 2 };
  let component = this.subject({
    tabs: A([tab1, tab2]),
    _confirmActiveTab: () => {
      assert.ok(true);
      return true;
    },
    activeTab: null
  });
  this.render();
  assert.deepEqual(component.get('activeTab'), null);
});

test('_initActiveTab - stub all the methods', function(assert) {
  assert.expect(3);
  let tab1 = { id: 1 };
  let tab2 = { id: 2 };
  this.subject({
    tabs: A([tab1, tab2]),
    setActiveTab: (tab) => assert.deepEqual(tab, tab2),
    getDefaultTab: () => {
      assert.ok(true);
      return tab2;
    },
    _confirmActiveTab: () => {
      assert.ok(true);
      return false;
    },
    activeTab: null
  });
  this.render();
});
