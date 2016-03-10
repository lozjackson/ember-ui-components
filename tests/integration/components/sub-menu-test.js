import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sub-menu', 'Integration | Component | sub menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{sub-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#sub-menu showMenu=true}}
      sub menu...
    {{/sub-menu}}
  `);

  assert.equal(this.$().text().trim(), 'sub menu...');
});

test('has correct tag and class', function(assert) {
  this.render(hbs`{{sub-menu}}`);
  assert.equal(this.$('li.sub-menu').length, 1);
});
