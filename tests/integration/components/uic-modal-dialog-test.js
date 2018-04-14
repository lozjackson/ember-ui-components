import $ from 'jquery';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-modal-dialog', 'Integration | Component | uic modal dialog', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{uic-modal-dialog}}`);
  assert.equal($('.uic-modal-dialog.no-outline').length, 1);
});
