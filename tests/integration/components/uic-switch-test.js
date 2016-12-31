import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-switch', 'Integration | Component | uic switch', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uic-switch}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#uic-switch}}
      template block text
    {{/uic-switch}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct tagName and classNames', function(assert) {
  this.render(hbs`
    {{#uic-switch}}
      template block text
    {{/uic-switch}}
  `);

  assert.equal(this.$('button.uic-button.uic-switch').length, 1);
});

test('click', function(assert) {
  this.render(hbs`
    {{#uic-switch targetProperty=foo value="bar"}}
      template block text
    {{/uic-switch}}
  `);

  assert.equal(this.get('foo'), null);
  this.$('button.uic-button.uic-switch').click();
  assert.equal(this.get('foo'), 'bar');
});

test('click - value already set', function(assert) {
  this.set('foo', 'bar');
  this.render(hbs`
    {{#uic-switch property=foo value="baz"}}
      template block text
    {{/uic-switch}}
  `);

  assert.equal(this.get('foo'), 'bar');

  this.$('.uic-switch').click();
  assert.equal(this.get('foo'), 'baz');
});

test('click - selected', function(assert) {
  this.render(hbs`
    {{uic-switch label="Bar" targetProperty=foo value="bar"}}
  `);
  assert.equal(this.$('button.uic-switch.selected').length, 0);
  this.$('button.uic-switch').click();
  assert.equal(this.$('button.uic-switch.selected').length, 1);

  this.set('foo', 'baz');
  assert.equal(this.$('button.uic-switch.selected').length, 0);
});

test('click - set property', function(assert) {
  this.render(hbs`
    {{uic-switch id="button1" label="Foo" targetProperty=prop value="foo"}}
    {{uic-switch id="button2" label="Bar" targetProperty=prop value="bar"}}
    {{uic-switch id="button3" label="Baz" targetProperty=prop value="baz"}}
  `);

  this.$('#button1').click();
  assert.equal(this.get('prop'), 'foo');

  this.$('#button2').click();
  assert.equal(this.get('prop'), 'bar');

  this.$('#button3').click();
  assert.equal(this.get('prop'), 'baz');
});
