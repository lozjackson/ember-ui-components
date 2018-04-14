import EmberObject from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-modal', 'Integration | Component | uic modal', {
  integration: true
});

test('it renders', function(assert) {
  this.set('dialog', EmberObject.create({
    title: 'The Title',
    body: 'An interesting story.'
  }));
  this.render(hbs`{{uic-modal dialog=dialog}}`);
  assert.equal(this.$('h2').text().trim(), 'The Title');
  assert.equal(this.$('p').text().trim(), 'An interesting story.');
  assert.equal(this.$('button').text().trim(), 'Close');

  this.render(hbs`
    {{#uic-modal dialog=dialog}}
      custom template...
    {{/uic-modal}}
  `);

  assert.equal(this.$().text().trim(), 'custom template...');
});


test('it has correct class name', function(assert) {
  this.render(hbs`{{uic-modal}}`);
  assert.equal(this.$('.uic-modal').length, 1);
});
