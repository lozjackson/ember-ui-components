import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uic-list', 'Integration | Component | uic list', {
  integration: true
});

test('tagName and classNames are correct', function(assert) {
  this.render(hbs`{{uic-list}}`);
  assert.equal(this.$('ul.uic-list').length, 1);
});

test('it renders a list', function(assert) {

  this.set('array', [
    { name: 'foo' },
    { name: 'bar' },
    { name: 'baz' }
  ]);

  this.render(hbs`{{uic-list model=array}}`);
  assert.equal(this.$('ul.uic-list li').length, 3);
});

test('selectItem', function(assert) {
  assert.expect(1);
  this.on('select', (item) => {
    assert.equal(item.name, 'foo');
  });
  this.set('array', [
    { name: 'foo' },
    { name: 'bar' },
    { name: 'baz' }
  ]);

  this.render(hbs`{{uic-list model=array selectItem="select"}}`);
  this.$('ul.uic-list li:first').click();
});
