import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-dropdown', 'Integration | Component | uic dropdown', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{uic-dropdown}}`);
  assert.equal(this.$().text().trim(), '');

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

test('click dropdown-container', function(assert) {

  this.set('showDropdown', true);
  this.set('autoClose', false);
  this.render(hbs`
    {{#uic-dropdown showDropdown=showDropdown autoClose=autoClose}}
      <div class="dropdown-content"></div>
    {{else}}
      <button>Click</button>
    {{/uic-dropdown}}
    `);

  assert.equal(this.$('.uic-dropdown-container').length, 1);
  this.$('.uic-dropdown-container').click();
  assert.equal(this.get('showDropdown'), true);
  assert.equal(this.$('.uic-dropdown-container').length, 1);

  this.set('autoClose', true);

  this.$('.uic-dropdown-container').click();
  assert.equal(this.get('showDropdown'), false);
  assert.equal(this.$('.uic-dropdown-container').length, 0);
});
