import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

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
  service.set('application', Ember.Object.create({
    currentPath: 'index'
  }));
  assert.equal(service.get('currentPath'), 'index');
});

test('currentRouteName', function(assert) {
  assert.expect(1);
  let service = this.subject();
  service.set('application', Ember.Object.create({
    currentRouteName: 'index'
  }));
  assert.equal(service.get('currentRouteName'), 'index');
});

test('hasTemplate', function(assert) {
  assert.expect(3);
  let service = this.subject();
  assert.equal(service.hasTemplate('index'), true);
  assert.equal(service.hasTemplate('application'), true);
  assert.equal(service.hasTemplate('anothertemplate'), false);
});
