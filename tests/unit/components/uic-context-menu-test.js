import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const { run } = Ember;

moduleForComponent('uic-context-menu', 'Unit | Component | uic context menu', {
  needs: [
    'component:uic-context-menu-container',
    'component:uic-content-mask'
  ],
  unit: true,
  beforeEach() {
    this.inject.service('context-menu', {as: 'contextMenuService'});
  }
});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('classNames', function(assert) {
  assert.expect(2);
  var component = this.subject();
  this.render();
  assert.equal(component.get('classNames').length, 2);
  assert.equal(component.get('classNames')[1], 'uic-context-menu');
});

test('showContextMenu', function(assert) {
  assert.expect(1);
  var component = this.subject();
  this.render();
  assert.equal(component.get('showContextMenu'), false);
});

test('_closeContextMenu() method', function(assert) {
  assert.expect(1);

  var component = this.subject({
    contextMenuService: {
      close: () => assert.ok(true)
    }
  });
  this.render();
  run(() => component._closeContextMenu());
});

test('contextMenu() event', function(assert) {
  assert.expect(3);

  let event = {
    preventDefault: () => assert.ok(true)
  };
  let component = this.subject({
    elementId: 'menu-1',
    contextMenuService: Ember.Object.create({
      toggle: (menu, e) => {
        assert.equal(menu, 'menu-1');
        assert.deepEqual(e, event);
      }
    })
  });
  this.render();
  component.contextMenu(event);
});

test('closeContextMenu action', function(assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('_closeContextMenu', () => assert.ok(true));
  this.render();
  run(() => component.send('closeContextMenu'));
});
