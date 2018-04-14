import EmberObject from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('uic-modal-alert', 'Unit | Component | uic modal alert', {
  needs: [
    'component:uic-button',
    'service:dialog'
  ],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('_ok() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('dialog', EmberObject.create({
    resolve: () => assert.ok(true)
  }));
  this.render();
  component._ok();
});

test('ok action', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_ok', () => assert.ok(true));
  this.render();
  component.send('ok');
});
