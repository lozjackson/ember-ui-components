import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-content-mask', 'Integration | Component | uic content mask', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{uic-content-mask}}`);
  assert.equal(this.$('.uic-content-mask').length, 1);

  this.render(hbs`
    {{#uic-content-mask}}
      template block text
    {{/uic-content-mask}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('click triggers sendAction', function(assert) {
  assert.expect(1);
  this.on('closeMenu', () => assert.ok(true));
  this.render(hbs`{{uic-content-mask action="closeMenu"}}`);
  this.$('div.uic-content-mask').click();
});

test('didInsertElement calls didInsertMask', function(assert) {
  assert.expect(1);
  this.set('didInsertMask', () => assert.ok(true));
  this.render(hbs`
    {{#uic-content-mask didInsertMask=didInsertMask}}
      content
    {{/uic-content-mask}}
  `);
});
