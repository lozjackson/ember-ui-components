import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:context-menu', 'Unit | Service | context menu');

test('init() method shoud call reset', function(assert) {
  assert.expect(2);
  let service = this.subject({
    initContextMenuParams: () => assert.ok(true)
  });
  assert.ok(service);
});

test('initContextMenuParams() method', function(assert) {
  assert.expect(2);
  let service = this.subject({
    init: () => {}
  });
  service.initContextMenuParams();
  assert.equal(typeof service.get('contextMenuParams'), 'object');
  assert.equal(service.get('contextMenuParams.event'), null);
});

test('open() method', function(assert) {
  assert.expect(3);
  let next = Ember.run.next;
  Ember.run.next = (fn) => {
    assert.equal(typeof fn, 'function');
    fn();
  };
  let event = { type: 'contextmenu' };
  let service = this.subject();
  service.open('menu-id', event);
  assert.deepEqual(service.get('contextMenuParams.event'), event);
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

test('reset() method', function(assert) {
  assert.expect(2);
  let service = this.subject();
  service.set('contextMenuParams.event', {target:1});
  service.set('menu', 'abc');
  service.reset();
  assert.equal(service.get('menu'), null);
  assert.equal(service.get('contextMenuParams.event'), null);
});
