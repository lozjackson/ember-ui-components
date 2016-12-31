import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-tabs', 'Integration | Component | uic tabs', {
  integration: true
});

test('it has the correct class names', function(assert) {
  this.render(hbs`{{uic-tabs}}`);
  assert.equal(this.$('.uic-tabs.tabs').length, 1);
});
