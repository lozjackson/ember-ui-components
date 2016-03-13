import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('euic-context-menu', 'Integration | Component | euic context menu', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#euic-context-menu}}
      context menu content
    {{else}}
      template block text
    {{/euic-context-menu}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct class names', function(assert) {
  this.render(hbs`
    {{#euic-context-menu}}
      context menu content
    {{else}}
      template block text
    {{/euic-context-menu}}
  `);
  assert.equal(this.$('.euic-context-menu').length, 1);
});

test('hideOutline', function(assert) {
  this.set('hideOutline', true);
  this.render(hbs`
    {{#euic-context-menu hideOutline=hideOutline}}
      context menu content
    {{else}}
      template block text
    {{/euic-context-menu}}
  `);
  assert.equal(this.$('.euic-context-menu.no-outline').length, 1);
  this.set('hideOutline', false);
  assert.equal(this.$('.euic-context-menu').length, 1);
  assert.equal(this.$('.euic-context-menu.no-outline').length, 0);
});

test('tabindex', function(assert) {
  this.render(hbs`
    {{#euic-context-menu}}
      context menu content
    {{else}}
      template block text
    {{/euic-context-menu}}
  `);
  assert.equal(this.$('.euic-context-menu').attr('tabindex'), 1);
});

test('hideOutline', function(assert) {
  this.set('tabindex', 2);
  this.render(hbs`
    {{#euic-context-menu tabindex=tabindex}}
      context menu content
    {{else}}
      template block text
    {{/euic-context-menu}}
  `);
  assert.equal(this.$('.euic-context-menu').attr('tabindex'), 2);
  this.set('tabindex', 3);
  assert.equal(this.$('.euic-context-menu').attr('tabindex'), 3);
});

test('menu opens', function(assert) {
  this.set('showContextMenu', false);
  this.render(hbs`
    {{#euic-context-menu showContextMenu=showContextMenu}}
      context menu content
    {{else}}
      template block text
    {{/euic-context-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$('.euic-context-menu-container').length, 0);

  this.set('showContextMenu', true);
  assert.equal(this.$('.euic-context-menu-container').text().trim(), 'context menu content');
  assert.equal(this.$('.euic-context-menu-container').length, 1);

  this.set('showContextMenu', false);
  assert.equal(this.$('.euic-context-menu-container').length, 0);
});

test('contextmenu', function(assert) {
  this.render(hbs`
    {{#euic-context-menu}}
      context menu content
    {{else}}
      template block text
    {{/euic-context-menu}}
  `);

  this.$('.euic-context-menu').contextmenu();
  assert.equal(this.$('.euic-context-menu-container').length, 1);
  assert.equal(this.$('.euic-content-mask').length, 1);

  this.$('.euic-content-mask').click();
  assert.equal(this.$('.euic-context-menu-container').length, 0);
  assert.equal(this.$('.euic-content-mask').length, 0);
});
