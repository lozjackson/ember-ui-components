import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('slide-menu', 'Integration | Component | slide menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{slide-menu}}`);
  assert.equal(this.$('div.slide-menu').length, 1);
});

test('it renders the content', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#slide-menu}}
      template block text
    {{/slide-menu}}
  `);

  assert.equal(this.$('div.content-container').text().trim(), 'template block text');
});

test('menuPosition - default', function(assert) {
  assert.expect(1);
  this.render(hbs`{{slide-menu}}`);
  assert.equal(this.$('div.slide-menu.left').length, 1);
});

test('menuPosition left and right', function(assert) {
  assert.expect(6);

  this.set('menuPosition', 'left');
  this.render(hbs`{{slide-menu menuPosition=menuPosition}}`);
  assert.equal(this.$('div.slide-menu.left').length, 1);
  assert.equal(this.$('div.slide-menu.right').length, 0);

  this.set('menuPosition', 'right');
  assert.equal(this.$('div.slide-menu.left').length, 0);
  assert.equal(this.$('div.slide-menu.right').length, 1);

  this.set('menuPosition', 'left');
  assert.equal(this.$('div.slide-menu.left').length, 1);
  assert.equal(this.$('div.slide-menu.right').length, 0);
});

test('pushContent', function (assert) {
  assert.expect(4);
  this.set('pushContent', false);
  this.render(hbs`{{slide-menu pushContent=pushContent}}`);
  assert.equal(this.$('div.content-container').length, 1);
  assert.equal(this.$('div.content-container.push-content').length, 0);

  this.set('pushContent', true);
  assert.equal(this.$('div.content-container.push-content').length, 1);

  this.set('pushContent', false);
  assert.equal(this.$('div.content-container.push-content').length, 0);
});

test('maskContent', function (assert) {
  assert.expect(3);
  this.set('maskContent', false);
  this.render(hbs`{{slide-menu maskContent=maskContent}}`);
  assert.equal(this.$('.slide-menu-mask').length, 0);

  this.set('maskContent', true);
  assert.equal(this.$('.slide-menu-mask').length, 1);

  this.set('maskContent', false);
  assert.equal(this.$('.slide-menu-mask').length, 0);
});

test('showDefaultToggle', function (assert) {
  assert.expect(3);
  this.set('showDefaultToggle', false);
  this.render(hbs`{{slide-menu showDefaultToggle=showDefaultToggle}}`);
  assert.equal(this.$('input[type=checkbox].menu-toggle + label').length, 0);

  this.set('showDefaultToggle', true);
  assert.equal(this.$('input[type=checkbox].menu-toggle + label').length, 1);

  this.set('showDefaultToggle', false);
  assert.equal(this.$('input[type=checkbox].menu-toggle + label').length, 0);
});

test('menuOpenChanged', function (assert) {
  assert.expect(3);
  this.set('menuOpen', false);
  this.render(hbs`{{slide-menu menuOpen=menuOpen}}`);
  assert.equal(Ember.$('body.menu-is-open').length, 0);

  this.set('menuOpen', true);
  assert.equal(Ember.$('body.menu-is-open').length, 1);

  this.set('menuOpen', false);
  assert.equal(Ember.$('body.menu-is-open').length, 0);
});
