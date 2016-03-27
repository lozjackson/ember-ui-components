import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-dropdown-container', 'Integration | Component | uic dropdown container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uic-dropdown-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uic-dropdown-container}}
      template block text
    {{/uic-dropdown-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct tagName and classNames', function(assert) {
  this.render(hbs`{{uic-dropdown-container}}`);
  assert.equal(this.$('div.uic-dropdown-container').length, 1);
});
