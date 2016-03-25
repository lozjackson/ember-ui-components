import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('uic-slide-menu', 'Integration | Component | uic slide menu', {
  integration: true,
  beforeEach: function () {
    this.inject.service('lookup');
  }
});

test('it renders', function(assert) {
  assert.expect(1);
  this.render(hbs`{{uic-slide-menu lookup=lookup}}`);
  assert.equal(this.$('div.uic-slide-menu').length, 1);
});

test('it renders the content', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#uic-slide-menu}}
      template block text
    {{/uic-slide-menu}}
  `);

  assert.equal(this.$('div.uic-content-container').text().trim(), 'template block text');
});

test('menuPosition - default', function(assert) {
  assert.expect(1);
  this.render(hbs`{{uic-slide-menu}}`);
  assert.equal(this.$('div.uic-slide-menu.left').length, 1);
});

test('menuPosition left and right', function(assert) {
  assert.expect(6);

  this.set('menuPosition', 'left');
  this.render(hbs`{{uic-slide-menu menuPosition=menuPosition}}`);
  assert.equal(this.$('div.uic-slide-menu.left').length, 1);
  assert.equal(this.$('div.uic-slide-menu.right').length, 0);

  this.set('menuPosition', 'right');
  assert.equal(this.$('div.uic-slide-menu.left').length, 0);
  assert.equal(this.$('div.uic-slide-menu.right').length, 1);

  this.set('menuPosition', 'left');
  assert.equal(this.$('div.uic-slide-menu.left').length, 1);
  assert.equal(this.$('div.uic-slide-menu.right').length, 0);
});

test('pushContent', function (assert) {
  assert.expect(4);
  this.set('pushContent', false);
  this.render(hbs`{{uic-slide-menu pushContent=pushContent}}`);
  assert.equal(this.$('div.uic-content-container').length, 1);
  assert.equal(this.$('div.uic-content-container.push-content').length, 0);

  this.set('pushContent', true);
  assert.equal(this.$('div.uic-content-container.push-content').length, 1);

  this.set('pushContent', false);
  assert.equal(this.$('div.uic-content-container.push-content').length, 0);
});

test('pushContentType - squeeze-content', function (assert) {
  assert.expect(2);
  this.set('pushContent', true);
  this.render(hbs`{{uic-slide-menu pushContent=pushContent pushContentType="squeeze-content"}}`);
  assert.equal(this.$('div.uic-content-container.squeeze-content').length, 1);
  assert.equal(this.$('div.uic-content-container.push-content').length, 0);
});

test('maskContent', function (assert) {
  assert.expect(3);
  this.set('maskContent', false);
  this.render(hbs`{{uic-slide-menu maskContent=maskContent}}`);
  assert.equal(this.$('.slide-menu-mask').length, 0);

  this.set('maskContent', true);
  assert.equal(this.$('.slide-menu-mask').length, 1);

  this.set('maskContent', false);
  assert.equal(this.$('.slide-menu-mask').length, 0);
});

test('showDefaultToggle', function (assert) {
  assert.expect(3);
  this.set('showDefaultToggle', false);
  this.render(hbs`{{uic-slide-menu showDefaultToggle=showDefaultToggle}}`);
  assert.equal(this.$('input[type=checkbox].menu-toggle + label').length, 0);

  this.set('showDefaultToggle', true);
  assert.equal(this.$('input[type=checkbox].menu-toggle + label').length, 1);

  this.set('showDefaultToggle', false);
  assert.equal(this.$('input[type=checkbox].menu-toggle + label').length, 0);
});

test('menuOpenChanged', function (assert) {
  assert.expect(3);
  this.set('menuOpen', false);
  this.render(hbs`{{uic-slide-menu menuOpen=menuOpen}}`);
  assert.equal(Ember.$('body.menu-is-open').length, 0);

  this.set('menuOpen', true);
  assert.equal(Ember.$('body.menu-is-open').length, 1);

  this.set('menuOpen', false);
  assert.equal(Ember.$('body.menu-is-open').length, 0);
});

test('disableScroll when menu is open', function (assert) {
  assert.expect(3);
  this.set('menuOpen', false);
  this.set('disableScroll', true);
  this.render(hbs`{{uic-slide-menu menuOpen=menuOpen disableScroll=disableScroll}}`);
  assert.equal(Ember.$('body.uic-disable-scroll').length, 0);

  this.set('menuOpen', true);
  assert.equal(Ember.$('body.uic-disable-scroll').length, 1);

  this.set('menuOpen', false);
  assert.equal(Ember.$('body.uic-disable-scroll').length, 0);
});
