import EmberObject from '@ember/object';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:lookup', 'Unit | Service | lookup', {
  needs: [
    'template:application',
    'template:index'
  ]
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('currentPath', function(assert) {
  assert.expect(1);
  let service = this.subject();
  service.set('application', EmberObject.create({
    currentPath: 'index'
  }));
  assert.equal(service.get('currentPath'), 'index');
});

test('currentRouteName', function(assert) {
  assert.expect(1);
  let service = this.subject();
  service.set('application', EmberObject.create({
    currentRouteName: 'index'
  }));
  assert.equal(service.get('currentRouteName'), 'index');
});

test('parentRouteName top-level route', function(assert) {
  assert.expect(1);
  var service = this.subject();
  service.set('application', EmberObject.create({
    currentRouteName: 'child-route'
  }));
  assert.equal(service.get('parentRouteName'), 'index');
});

test('parentRouteName 1 nested route', function(assert) {
  assert.expect(1);
  var service = this.subject();
  service.set('application', EmberObject.create({
    currentRouteName: 'parent-route.child-route'
  }));
  assert.equal(service.get('parentRouteName'), 'parent-route');
});

test('parentRouteName 2 nested routes', function(assert) {
  assert.expect(1);
  var service = this.subject();
  service.set('application', EmberObject.create({
    currentRouteName: 'top-level-route.parent-route.child-route'
  }));
  assert.equal(service.get('parentRouteName'), 'top-level-route.parent-route');
});

// test('componentById() method', function(assert) {
//   assert.expect(3);
//   let service = this.subject();
//   assert.equal(service.componentById('index'), true);
// });

test('hasTemplate', function(assert) {
  assert.expect(3);
  let service = this.subject();
  assert.equal(service.hasTemplate('index'), true);
  assert.equal(service.hasTemplate('application'), true);
  assert.equal(service.hasTemplate('anothertemplate'), false);
});
