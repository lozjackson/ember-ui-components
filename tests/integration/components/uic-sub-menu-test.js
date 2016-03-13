import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('euic-sub-menu', 'Integration | Component | euic sub menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{euic-sub-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#euic-sub-menu showMenu=true}}
      sub menu...
    {{/euic-sub-menu}}
  `);

  assert.equal(this.$().text().trim(), 'sub menu...');
});

test('has correct tag and class', function(assert) {
  this.render(hbs`{{euic-sub-menu}}`);
  assert.equal(this.$('li.euic-sub-menu').length, 1);
});
