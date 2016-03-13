import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-menu-container', 'Integration | Component | uic menu container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{uic-menu-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#uic-menu-container}}
      template block text
    {{/uic-menu-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct class names', function(assert) {
  this.render(hbs`
    {{#uic-menu-container}}
      menu container
    {{/uic-menu-container}}
  `);
  assert.equal(this.$('.uic-menu-container').length, 1);
});

test('didInsertElement calls didInsertMenu', function(assert) {
  assert.expect(1);
  this.set('didInsertMenu', () => assert.ok(true));
  this.render(hbs`
    {{#uic-menu-container didInsertMenu=didInsertMenu}}
      menu container
    {{/uic-menu-container}}
  `);
});
