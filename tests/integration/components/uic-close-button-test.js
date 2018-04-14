import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-close-button', 'Integration | Component | uic close button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#uic-close-button}}
      template block text
    {{/uic-close-button}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct tagName and classNames', function(assert) {
  this.render(hbs`{{uic-close-button}}`);
  assert.equal(this.$('button.uic-close-button').length, 1);
});

test('click - sendAction', function(assert) {
  assert.expect(1);
  this.on('close', () => assert.ok(true));
  this.render(hbs`{{uic-close-button click=(action "close")}}`);
  this.$('button.uic-close-button').click();
});

test('click - pass in a method', function(assert) {
  assert.expect(1);
  this.on('close', () => assert.ok(true));
  this.render(hbs`{{uic-close-button click=(action "close") }}`);
  this.$('button.uic-close-button').click();
});
