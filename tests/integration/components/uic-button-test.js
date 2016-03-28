import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-button', 'Integration | Component | uic button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uic-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
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
  // assert.equal(this.$('button.uic-button').length, 1);
});
