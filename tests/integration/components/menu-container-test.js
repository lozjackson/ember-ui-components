import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('menu-container', 'Integration | Component | menu container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{menu-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#menu-container}}
      template block text
    {{/menu-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct class names', function(assert) {
  this.render(hbs`
    {{#menu-container}}
      menu container
    {{/menu-container}}
  `);
  assert.equal(this.$('.euic-menu-container').length, 1);
});

test('didInsertElement calls didInsertMenu', function(assert) {
  assert.expect(1);
  this.set('didInsertMenu', () => assert.ok(true));
  this.render(hbs`
    {{#menu-container didInsertMenu=didInsertMenu}}
      menu container
    {{/menu-container}}
  `);
});
