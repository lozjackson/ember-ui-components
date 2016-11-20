import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const run = Ember.run;

moduleForComponent('uic-sub-menu', 'Unit | Component | uic sub menu', {
  needs: [
    'component:uic-menu-container',
    'component:svg-triangle'
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

test('tagName', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('tagName'), 'menuitem');
});


test('classNames', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNames').length, 2);
  assert.equal(component.get('classNames')[1], 'uic-sub-menu');
});

test('attributeBindings', function(assert) {
  assert.expect(1);
  let component = this.subject();
  this.render();
  assert.deepEqual(component.get('attributeBindings'), ['disabled']);
});

test('disabled should be false', function(assert) {
  assert.expect(1);
  let component = this.subject();
  this.render();
  assert.equal(component.get('disabled'), false);
});

test('showMenu', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('showMenu'), false);
});

test('delay', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('delay'), 300);
});

test('mouseEnter', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('showMenu', false);
  this.render();
  run(() => component.mouseEnter());
  assert.equal(component.get('showMenu'), true);
});

test('mouseEnter - disabled', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.setProperties({
    showMenu: false,
    disabled: true
  });
  this.render();
  run(() => component.mouseEnter());
  assert.equal(component.get('showMenu'), false);
});

test('mouseLeave', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('delay', null);
  component.set('showMenu', true);
  this.render();
  run(() => component.mouseLeave());
  assert.equal(component.get('showMenu'), false);
});
