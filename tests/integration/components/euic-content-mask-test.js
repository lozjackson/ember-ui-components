import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('euic-content-mask', 'Integration | Component | euic content mask', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{euic-content-mask}}`);
  assert.equal(this.$('.euic-content-mask').length, 1);

  this.render(hbs`
    {{#euic-content-mask}}
      template block text
    {{/euic-content-mask}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('click triggers sendAction', function(assert) {
  assert.expect(1);
  this.on('closeMenu', () => assert.ok(true));
  this.render(hbs`{{euic-content-mask action="closeMenu"}}`);
  this.$('div.euic-content-mask').click();
});

test('didInsertElement calls didInsertMask', function(assert) {
  assert.expect(1);
  this.set('didInsertMask', () => assert.ok(true));
  this.render(hbs`
    {{#euic-content-mask didInsertMask=didInsertMask}}
      content
    {{/euic-content-mask}}
  `);
});
