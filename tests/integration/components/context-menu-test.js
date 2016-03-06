import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('context-menu', 'Integration | Component | context menu', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#context-menu}}
      context menu content
    {{else}}
      template block text
    {{/context-menu}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct class names', function(assert) {
  this.render(hbs`
    {{#context-menu}}
      context menu content
    {{else}}
      template block text
    {{/context-menu}}
  `);
  assert.equal(this.$('.context-menu').length, 1);
});

test('menu opens', function(assert) {
  this.set('showContextMenu', false);
  this.render(hbs`
    {{#context-menu showContextMenu=showContextMenu}}
      context menu content
    {{else}}
      template block text
    {{/context-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$('.context-menu-container').length, 0);

  this.set('showContextMenu', true);
  assert.equal(this.$('.context-menu-container').text().trim(), 'context menu content');
  assert.equal(this.$('.context-menu-container').length, 1);

  this.set('showContextMenu', false);
  assert.equal(this.$('.context-menu-container').length, 0);
});
