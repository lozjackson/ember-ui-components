import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-modal-window', 'Integration | Component | uic modal window', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`
    {{#uic-modal-window}}
      template block text
    {{/uic-modal-window}}
  `);

  assert.equal(this.$('.uic-modal-window').length, 1);
});
