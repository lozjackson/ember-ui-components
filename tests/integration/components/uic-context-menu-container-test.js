import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-context-menu-container', 'Integration | Component | uic context menu container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uic-context-menu-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uic-context-menu-container}}
      template block text
    {{/uic-context-menu-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct tagName and classNames', function(assert) {
  this.render(hbs`
    {{#uic-context-menu-container}}
      template block text
    {{/uic-context-menu-container}}
  `);
  assert.equal(this.$('menu.uic-context-menu-container.uic-menu-container').length, 1);
});
