import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | can add remove tabs');

test('visiting /tabs-component can-add-remove-tabs', function(assert) {
  visit('/tabs-component');

  click('#add-tab-button');

  andThen(function() {
    assert.equal(find('.can-add-remove-tabs .tab-header > li').length, 1);
  });

  click('#add-tab-button');

  andThen(function() {
    assert.equal(find('.can-add-remove-tabs .tab-header > li').length, 2);
  });

  click('#remove-tab-button');

  andThen(function() {
    assert.equal(find('.can-add-remove-tabs .tab-header > li').length, 1);
  });

  click('#remove-tab-button');

  andThen(function() {
    assert.equal(find('.can-add-remove-tabs .tab-header > li').length, 0);
  });
});
