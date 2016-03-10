import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-mask', 'Integration | Component | content mask', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{content-mask}}`);
  assert.equal(this.$('.content-mask').length, 1);

  this.render(hbs`
    {{#content-mask}}
      template block text
    {{/content-mask}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('click triggers sendAction', function(assert) {
  assert.expect(1);
  this.on('closeMenu', () => assert.ok(true));
  this.render(hbs`{{content-mask action="closeMenu"}}`);
  this.$('div.content-mask').click();
});

test('didInsertElement calls didInsertMask', function(assert) {
  assert.expect(1);
  this.set('didInsertMask', () => assert.ok(true));
  this.render(hbs`
    {{#content-mask didInsertMask=didInsertMask}}
      content
    {{/content-mask}}
  `);
});
