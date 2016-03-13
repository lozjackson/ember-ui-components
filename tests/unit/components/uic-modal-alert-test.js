import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('euic-modal-alert', 'Unit | Component | euic modal alert', {
  // needs: [],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('classNames', function(assert) {
  assert.expect(3);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNames').length, 3);
  assert.equal(component.get('classNames')[1], 'euic-modal');
  assert.equal(component.get('classNames')[2], 'euic-modal-alert');

});

test('_ok() method', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('dialog', Ember.Object.create({
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
