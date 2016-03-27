import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-dropdown', 'Integration | Component | uic dropdown', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uic-dropdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uic-dropdown}}
      drop down content
    {{else}}
      template block text
    {{/uic-dropdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct tagName and classNames', function(assert) {
  this.render(hbs`{{uic-dropdown}}`);
  assert.equal(this.$('div.uic-dropdown').length, 1);
});

test('click', function(assert) {

  this.set('showDropdown', false);
  this.render(hbs`
    {{#uic-dropdown showDropdown=showDropdown}}
      <div class="dropdown-content"></div>
    {{else}}
      <button>Click</button>
    {{/uic-dropdown}}
    `);

  assert.equal(this.get('showDropdown'), false);
  assert.equal(this.$('div.dropdown-content').length, 0);

  this.$('.uic-dropdown button').click();
  assert.equal(this.get('showDropdown'), true);
  assert.equal(this.$('div.dropdown-content').length, 1);

  this.$('.uic-dropdown button').click();
  assert.equal(this.get('showDropdown'), false);
  assert.equal(this.$('div.dropdown-content').length, 0);
});
