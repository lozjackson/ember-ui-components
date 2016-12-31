import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-sub-menu', 'Integration | Component | uic sub menu', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uic-sub-menu}}`);
  assert.equal(this.$().text().trim(), '');
  this.render(hbs`
    {{#uic-sub-menu showMenu=true}}
      sub menu...
    {{/uic-sub-menu}}
  `);
  assert.equal(this.$().text().trim(), 'sub menu...');
});

test('has correct tag and class', function(assert) {
  this.render(hbs`{{uic-sub-menu}}`);
  assert.equal(this.$('menuitem.uic-sub-menu').length, 1);
});

test('disabled', function(assert) {
  this.set('disabled', true);
  this.render(hbs`{{uic-sub-menu disabled=disabled}}`);
  assert.equal(this.$('menuitem[disabled].uic-sub-menu').length, 1);
  this.set('disabled', null);
  assert.equal(this.$('menuitem[disabled].uic-sub-menu').length, 0);
});
