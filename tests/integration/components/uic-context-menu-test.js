import Ember from 'ember';
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

test('hideOutline', function(assert) {
  this.set('hideOutline', true);
  this.render(hbs`
    {{#uic-context-menu hideOutline=hideOutline}}
      context menu content
    {{else}}
      template block text
    {{/uic-context-menu}}
  `);
  assert.equal(this.$('.uic-context-menu.no-outline').length, 1);
  this.set('hideOutline', false);
  assert.equal(this.$('.uic-context-menu').length, 1);
  assert.equal(this.$('.uic-context-menu.no-outline').length, 0);
});

test('tabindex', function(assert) {
  this.render(hbs`
    {{#uic-context-menu}}
      context menu content
    {{else}}
      template block text
    {{/uic-context-menu}}
  `);
  assert.equal(this.$('.uic-context-menu').attr('tabindex'), 1);
});

test('hideOutline', function(assert) {
  this.set('tabindex', 2);
  this.render(hbs`
    {{#uic-context-menu tabindex=tabindex}}
      context menu content
    {{else}}
      template block text
    {{/uic-context-menu}}
  `);
  assert.equal(this.$('.uic-context-menu').attr('tabindex'), 2);
  this.set('tabindex', 3);
  assert.equal(this.$('.uic-context-menu').attr('tabindex'), 3);
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
  let next = Ember.run.next;
  Ember.run.next = (fn) => {
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

  Ember.run.next = next;
});
