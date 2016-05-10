import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-button', 'Integration | Component | uic button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uic-button}}`);
  assert.equal(this.$().text().trim(), '');
  this.render(hbs`
    {{#uic-button}}
      template block text
    {{/uic-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it has correct tagName and classNames', function(assert) {
  this.render(hbs`
    {{#uic-button}}
      template block text
    {{/uic-button}}
  `);
  assert.equal(this.$('button.uic-button').length, 1);
});

test('inline use', function(assert) {
  this.render(hbs`{{uic-button text="the text..."}}`);
  assert.equal(this.$().text().trim(), 'the text...');
});

test('click', function(assert) {
  assert.expect(1);
  this.on('doSomething', () => assert.ok(true));
  this.render(hbs`
    {{#uic-button action="doSomething"}}
      template block text
    {{/uic-button}}
  `);
  this.$('button.uic-button').click();
});

test('selected', function(assert) {
  assert.expect(3);
  this.set('selected', false);
  this.render(hbs`
    {{#uic-button selected=selected}}
      template block text
    {{/uic-button}}
  `);
  assert.equal(this.$('button.uic-button.selected').length, 0);
  this.set('selected', true);
  assert.equal(this.$('button.uic-button.selected').length, 1);
  this.set('selected', false);
  assert.equal(this.$('button.uic-button.selected').length, 0);
});

test('disabled', function(assert) {
  assert.expect(3);
  this.set('disabled', false);
  this.render(hbs`
    {{#uic-button disabled=disabled}}
      template block text
    {{/uic-button}}
  `);
  assert.equal(this.$('button.uic-button[disabled]').length, 0);
  this.set('disabled', true);
  assert.equal(this.$('button.uic-button[disabled]').length, 1);
  this.set('disabled', false);
  assert.equal(this.$('button.uic-button[disabled]').length, 0);
});
