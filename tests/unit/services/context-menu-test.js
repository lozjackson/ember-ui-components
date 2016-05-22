import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:context-menu', 'Unit | Service | context menu');

test('menuIsOpen', function(assert) {
  assert.expect(3);

  let service = this.subject();
  assert.equal(service.get('menuIsOpen'), false);

  service.set('menu', 'test');
  assert.equal(service.get('menuIsOpen'), true);

  service.set('menu', null);
  assert.equal(service.get('menuIsOpen'), false);
});

test('init() method shoud call reset', function(assert) {
  assert.expect(2);
  let service = this.subject({
    initContextMenuParams: () => assert.ok(true)
  });
  assert.ok(service);
});

test('initContextMenuParams() method', function(assert) {
  assert.expect(3);
  let service = this.subject({
    init: () => {}
  });
  service.initContextMenuParams();
  assert.equal(typeof service.get('contextMenuParams'), 'object');
  assert.equal(service.get('contextMenuParams.event'), null);
  assert.equal(service.get('contextMenuParams.model'), null);
});

test('open() method', function(assert) {
  assert.expect(4);
  let next = Ember.run.next;
  Ember.run.next = (fn) => {
    assert.equal(typeof fn, 'function');
    fn();
  };
  let event = { type: 'contextmenu' };
  let model = Ember.Object.create({id:1});
  let service = this.subject();
  service.open('menu-id', event, model);
  assert.deepEqual(service.get('contextMenuParams.event'), event);
  assert.deepEqual(service.get('contextMenuParams.model'), model);
  assert.equal(service.get('menu'), 'menu-id');
  Ember.run.next = next;
});

test('close() method shoud call reset', function(assert) {
  assert.expect(1);
  let service = this.subject({
    init: () => {},
    reset: () => assert.ok(true)
  });
  service.close();
});

test('toggle() method - menuIsOpen false', function(assert) {
  assert.expect(3);
  let event = { type: 'contextmenu' };
  let model = Ember.Object.create({id:1});
  let service = this.subject({
    menuIsOpen: false,
    open: (id, e, m) => {
      assert.deepEqual(e, event);
      assert.deepEqual(m, model);
      assert.equal(id, 'menu-id');
    },
    close: () => {
      assert.ok(false);
    }
  });
  service.toggle('menu-id', event, model);
});

test('toggle() method - menuIsOpen true', function(assert) {
  assert.expect(1);
  let event = { type: 'contextmenu' };
  let model = Ember.Object.create({id:1});
  let service = this.subject({
    menuIsOpen: true,
    open: () => {
      assert.ok(false);
    },
    close: () => {
      assert.ok(true);
    }
  });
  service.toggle('menu-id', event, model);
});

test('reset() method', function(assert) {
  assert.expect(2);
  let service = this.subject();
  service.set('contextMenuParams.event', {target:1});
  service.set('menu', 'abc');
  service.reset();
  assert.equal(service.get('menu'), null);
  assert.equal(service.get('contextMenuParams.event'), null);
});
