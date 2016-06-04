import { moduleFor, test } from 'ember-qunit';

moduleFor('service:modal', 'Unit | Service | modal', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('modalIsOpen', function(assert) {
  assert.expect(3);

  let service = this.subject();
  assert.equal(service.get('modalIsOpen'), false);

  service.set('modalId', 'test');
  assert.equal(service.get('modalIsOpen'), true);

  service.set('modalId', null);
  assert.equal(service.get('modalIsOpen'), false);
});

test('open() method', function(assert) {
  assert.expect(1);
  let service = this.subject();
  service.open('modal-id');
  assert.equal(service.get('modalId'), 'modal-id');
});

test('close() method shoud call reset', function(assert) {
  assert.expect(1);
  let service = this.subject({
    // init: () => {},
    reset: () => assert.ok(true)
  });
  service.close();
});

test('toggle() method - modalIsOpen false', function(assert) {
  assert.expect(1);
  // let event = { type: 'contextmenu' };
  // let model = Ember.Object.create({id:1});
  let service = this.subject({
    modalIsOpen: false,
    open: (id) => {
      assert.equal(id, 'modal-id');
    },
    close: () => {
      assert.ok(false);
    }
  });
  service.toggle('modal-id');
});

test('toggle() method - modalIsOpen true', function(assert) {
  assert.expect(1);
  let service = this.subject({
    modalIsOpen: true,
    open: () => {
      assert.ok(false);
    },
    close: () => {
      assert.ok(true);
    }
  });
  service.toggle('modal-id');
});

test('reset() method', function(assert) {
  assert.expect(1);
  let service = this.subject();
  service.set('modalId', 'abc');
  service.reset();
  assert.equal(service.get('modalId'), null);
});
