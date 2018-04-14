import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-context-menu', 'Integration | Component | uic context menu', {
  integration: true,
  beforeEach() {
    this.inject.service('context-menu', {as: 'contextMenuService'});
  }
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#uic-context-menu}}
      context menu content
    {{else}}
      template block text
    {{/uic-context-menu}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct class names', function(assert) {
  this.render(hbs`
    {{#uic-context-menu}}
      context menu content
    {{else}}
      template block text
    {{/uic-context-menu}}
  `);
  assert.equal(this.$('.uic-context-menu').length, 1);
});

test('menu opens', function(assert) {
  this.set('showContextMenu', false);
  this.render(hbs`
    {{#uic-context-menu showContextMenu=showContextMenu}}
      context menu content
    {{else}}
      template block text
    {{/uic-context-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$('.uic-context-menu-container').length, 0);

  this.set('showContextMenu', true);
  assert.equal(this.$('.uic-context-menu-container').text().trim(), 'context menu content');
  assert.equal(this.$('.uic-context-menu-container').length, 1);

  this.set('showContextMenu', false);
  assert.equal(this.$('.uic-context-menu-container').length, 0);
});

test('contextmenu', function(assert) {
  const next = run.next;
  run.next = (fn) => {
    assert.equal(typeof fn, 'function');
    fn();
  };
  this.render(hbs`
    {{#uic-context-menu}}
      context menu content
    {{else}}
      template block text
    {{/uic-context-menu}}
  `);

  this.$('.uic-context-menu').contextmenu();
  assert.equal(this.$('.uic-context-menu-container').length, 1);

  this.$('.uic-context-menu').contextmenu();
  assert.equal(this.$('.uic-context-menu-container').length, 0);

  this.$('.uic-context-menu').contextmenu();
  assert.equal(this.$('.uic-context-menu-container').length, 1);

  this.$('.uic-context-menu').contextmenu();
  assert.equal(this.$('.uic-context-menu-container').length, 0);

  run.next = next;
});
