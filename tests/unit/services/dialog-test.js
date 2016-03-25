import { moduleFor, test } from 'ember-qunit';

moduleFor('service:dialog', 'Unit | Service | dialog', {
  // needs: ['service:foo']
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('open should be false', function(assert) {
  let service = this.subject();
  assert.equal(service.get('open'), false);
});

test('openModal() method', function(assert) {
  let service = this.subject();
  let msg = { title: 'foo', body: 'bar' };
  let promise = service.openModal(msg, 'baz');

  assert.equal(service.get('title'), 'foo');
  assert.equal(service.get('body'), 'bar');
  assert.equal(service.get('type'), 'baz');
  assert.equal(service.get('open'), true);
  assert.deepEqual(promise, service.get('deferred.promise'));
});

test('openModal() method - type should have a default', function(assert) {
  let service = this.subject();
  service.openModal();
  assert.equal(service.get('type'), 'uic-modal');
});

test('closeModal() method', function(assert) {
  assert.expect(1);
  let service = this.subject();
  service.set('reject', () => assert.ok(true));
  service.closeModal();
});

test('alert() method', function(assert) {
  assert.expect(3);
  let service = this.subject();
  let msg = { title: 'foo', body: 'bar' };
  service.set('openModal', (m, type) => {
    assert.deepEqual(m, msg);
    assert.equal(type, 'uic-modal-alert');
    return true;
  });
  assert.equal(service.alert(msg), true);
});

test('confirm() method', function(assert) {
  let service = this.subject();
  let msg = {title: 'foo', body: 'bar' };
  service.set('openModal', (m, type) => {
    assert.equal(m.title, msg.title);
    assert.equal(m.body, msg.body);
    assert.equal(m.clickOutsideModal, 'shake');
    assert.equal(type, 'uic-modal-confirm');
    return true;
  });
  assert.equal(service.confirm(msg), true);
});

test('confirm() method - message is string', function(assert) {
  let service = this.subject();
  let msg = 'foo';
  service.set('openModal', (m, type) => {
    assert.equal(m.title, msg);
    assert.equal(m.body, '');
    assert.equal(m.clickOutsideModal, 'shake');
    assert.equal(type, 'uic-modal-confirm');
    return true;
  });
  assert.equal(service.confirm(msg), true);
});

test('confirm() method, override clickOutsideModal', function(assert) {
  let service = this.subject();
  let msg = {title: 'foo', body: 'bar', clickOutsideModal: 'cancel' };
  service.set('openModal', (m, type) => {
    assert.equal(m.title, msg.title);
    assert.equal(m.body, msg.body);
    assert.equal(m.clickOutsideModal, 'cancel');
    assert.equal(type, 'uic-modal-confirm');
    return true;
  });
  assert.equal(service.confirm(msg), true);
});

test('resolve() method', function(assert) {
  assert.expect(2);
  let service = this.subject();
  service.set('reset', () => assert.ok(true));
  service.set('deferred', {
    resolve: () => assert.ok(true)
  });
  service.resolve();
});

test('resolve() method - defered null', function(assert) {
  assert.expect(1);
  let service = this.subject();
  service.set('reset', () => assert.ok(true));
  service.set('deferred', null);
  service.resolve();
});

test('reject() method', function(assert) {
  assert.expect(2);
  let service = this.subject();
  service.set('reset', () => assert.ok(true));
  service.set('deferred', {
    reject: () => assert.ok(true)
  });
  service.reject();
});

test('reject() method - defered null', function(assert) {
  assert.expect(1);
  let service = this.subject();
  service.set('reset', () => assert.ok(true));
  service.set('deferred', null);
  service.reject();
});

test('convertMessageToObject() method - object', function (assert) {
  let service = this.subject();
  let result = service.convertMessageToObject('foo');
  assert.deepEqual(result, {title: 'foo', body: ''});
});

test('convertMessageToObject() method - string', function (assert) {
  let service = this.subject();
  let result = service.convertMessageToObject({title: 'foo', body: 'bar'});
  assert.deepEqual(result, {title: 'foo', body: 'bar'});
});

test('convertMessageToObject() method - undefined', function (assert) {
  let service = this.subject();
  let result = service.convertMessageToObject();
  assert.deepEqual(result, {title: undefined, body: ''});
});

test('reset() method', function(assert) {
  let service = this.subject();

  service.set('open', true);
  service.set('type', 'confirm');
  service.set('title', 'foo');
  service.set('body', 'bar');
  service.set('deffered', 'baz');

  service.reset();

  assert.equal(service.get('open'), false);
  assert.equal(service.get('type'), null);
  assert.equal(service.get('title'), null);
  assert.equal(service.get('body'), null);
  assert.equal(service.get('deferred'), null);
});
