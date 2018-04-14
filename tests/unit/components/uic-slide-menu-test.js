import EmberObject from '@ember/object';
import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

const lookup = EmberObject.create({
  hasTemplate() {
    return false;
  }
});

let _error;

moduleForComponent('uic-slide-menu', 'Unit | Component | uic slide menu', {
  needs: [
    'component:uic-content-mask',
    'template:menus.application',
    'template:menus.index',
    'template:menus.check-box-component.index',
    'service:lookup'
  ],
  unit: true,
  beforeEach: function () {
    _error = Ember.Logger.error;
    Ember.Logger.error = function () {};
  },
  afterEach: function () {
    Ember.Logger.error = _error;
  }

});

test('it renders', function(assert) {
  assert.expect(2);
  var component = this.subject();
  // Ember.Logger.log('messagelookup', this.lookup);
  component.set('lookup', lookup);
  assert.equal(component._state, 'preRender');
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('classNameBindings', function(assert) {
  assert.expect(3);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('classNameBindings').length, 2);
  assert.equal(component.get('classNameBindings')[0], 'menuPosition');
  assert.equal(component.get('classNameBindings')[1], '_menuOpen:uic-slide-menu-open');
});

test('menuPosition should be left', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('menuPosition'), 'left', `'menuPosition' should be left`);
});

test('menuOpen should be false', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('menuOpen'), false, `'menuOpen' should be false`);
});

test('_menuOpen', function (assert) {
  assert.expect(3);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();

  assert.equal(component.get('_menuOpen'), false, `'menuOpen' should be false`);

  run(() => component.set('menuOpen', true));
  assert.equal(component.get('_menuOpen'), true, `'menuOpen' should be true`);

  run(() => component.set('menuOpen', false));
  assert.equal(component.get('_menuOpen'), false, `'menuOpen' should be false`);
});

test('pushContent should be false', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('pushContent'), false, `'pushContent' should be false`);
});

test('pushContentType should have a default', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('pushContentType'), 'push-content', `'pushContentType' should be 'push-content'`);
});

test('maskContent should be true', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('maskContent'), true, `'maskContent' should be true`);
});

test('disableScroll should be true', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('disableScroll'), true, `'disableScroll' should be true`);
});

test('showDefaultToggle', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('showDefaultToggle'), true, `'showDefaultToggle' should be true`);
});

test('menuToggleClass', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('menuToggleClass'), 'uic-menu-toggle-fixed');
});

test('staticTemplate should be false', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('staticTemplate'), false, `'staticTemplate' should be false`);
});

test('menuTemplatePath should be `menus` by default', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('menuTemplatePath'), 'menus', `'menuTemplatePath' should be 'menus'`);
});

test('maskIsActive should be false', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('maskIsActive'), false, `'maskIsActive' should be false`);
});

test('maskIsActive should be true when menu is open', function (assert) {
  assert.expect(3);
  var component = this.subject();
  component.set('lookup', lookup);
  this.render();
  assert.equal(component.get('maskIsActive'), false, `'maskIsActive' should be false`);
  run(() => component.set('menuOpen', true));
  assert.equal(component.get('maskIsActive'), true, `'maskIsActive' should be true`);
  run(() => component.set('menuOpen', false));
  assert.equal(component.get('maskIsActive'), false, `'maskIsActive' should be false`);
});

test('currentRouteName', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', EmberObject.create({
    currentRouteName: 'index',
    hasTemplate() {
      return false;
    }
  }));
  this.render();
  assert.equal(component.get('currentRouteName'), 'index', `'currentRouteName' should be 'index'`);
});

test('_menuTemplatesPath', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  component.set('menuTemplatePath', 'menus/');
  this.render();
  assert.equal(component.get('_menuTemplatePath'), 'menus/', `'_menuTemplatePath' should be 'menus/'`);
});

test('_menuTemplatesPath - menuTemplatePath null', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  component.set('menuTemplatePath', null);
  this.render();
  assert.equal(component.get('_menuTemplatePath'), '', `'_menuTemplatePath' should be ''`);
});

test('_menuTemplatesPath add / on the end if its not there already', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  component.set('menuTemplatePath', 'menus');
  this.render();
  assert.equal(component.get('_menuTemplatePath'), 'menus/', `'_menuTemplatePath' should be 'menus/'`);
});

test('_menuTemplate returns menuTemplate if it exists', function (assert) {
  assert.expect(2);
  var component = this.subject();
  component.set('lookupTemplate', (templateName) => {
    assert.equal(templateName, 'menus/index');
    return true;
  });
  component.set('menuTemplate', 'menus/index');
  this.render();
  assert.equal(component.get('_menuTemplate'), 'menus/index', `'_menuTemplate' should be 'menus/index'`);
});

test('_menuTemplate - if menuTemplate does not exist and staticTemplate is true', function (assert) {
  assert.expect(3);

  Ember.Logger.error = (m) => {
    assert.equal(m, `Could not find menu template: 'menus/something-else'.  Create a template at 'templates/menus/something-else.hbs' and put your menu template there.`);
  };
  var component = this.subject();
  component.set('staticTemplate', true);
  component.set('menuTemplate', 'menus/something-else');
  component.set('lookupTemplate', (templateName) => {
    assert.ok(templateName);
    return false;
  });
  this.render();
  assert.equal(component.get('_menuTemplate'), null, `'_menuTemplate' should be null`);
});

test('_menuTemplate - menuTemplate null, staticTemplate true', function (assert) {
  assert.expect(2);

  Ember.Logger.error = (m) => {
    assert.equal(m, 'The value of `menuTemplate` cannot be null when using static templates.');
  };
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'index' });
  component.set('staticTemplate', true);
  component.set('menuTemplate', null);
  component.set('lookupTemplate', (templateName) => {
    assert.ok(templateName);
    return false;
  });
  this.render();
  assert.equal(component.get('_menuTemplate'), null, `'_menuTemplate' should be null`);
});

test('_menuTemplate - if menuTemplate does not exist and staticTemplate is false', function (assert) {
  assert.expect(3);

  Ember.Logger.error = (m) => {
    assert.equal(m, `Could not find menu template: 'menus/something-else'.  Create a template at 'templates/menus/something-else.hbs' and put your menu template there.`);
  };
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'index' });
  component.set('staticTemplate', false);
  component.set('menuTemplate', 'menus/something-else');
  component.set('lookupTemplate', (templateName) => {
    if (templateName === 'menus/index') {
      assert.ok(false, `this should not be run`);
      return true;
    }
    assert.ok(templateName);
    return false;
  });
  this.render();
  assert.equal(component.get('_menuTemplate'), null, `'_menuTemplate' should be null`);
});

test('_menuTemplate - if menuTemplate is not set and staticTemplate is false, fall back to route', function (assert) {
  assert.expect(2);

  Ember.Logger.error = () => {
    assert.ok(false, `this should not be run`);
  };
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'index' });
  component.set('staticTemplate', false);
  component.set('menuTemplate', null);
  component.set('lookupTemplate', (templateName) => {
    assert.ok(templateName);
    if (templateName === 'menus/index') {
      return true;
    }
    return false;
  });
  this.render();
  assert.equal(component.get('_menuTemplate'), 'menus/index', `'_menuTemplate' should be 'menus/index'`);
});

test('_menuTemplate - menuTemplate null, staticTemplate false, nested route', function (assert) {
  assert.expect(2);

  Ember.Logger.error = () => {
    assert.ok(false, `this should not be run`);
  };
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'check-box-component.index' });
  component.set('staticTemplate', false);
  component.set('menuTemplate', null);
  component.set('lookupTemplate', (templateName) => {
    assert.ok(templateName);
    if (templateName === 'menus/check-box-component/index') {
      return true;
    }
    return false;
  });
  this.render();
  assert.equal(component.get('_menuTemplate'), 'menus/check-box-component/index', `'_menuTemplate' should be 'menus/check-box-component/index'`);
});
test('_menuTemplate - menuTemplate null, staticTemplate false, double nested route', function (assert) {
  assert.expect(5);

  Ember.Logger.error = () => {
    assert.ok(false, `this should not be run`);
  };
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'posts.comments.index' });
  component.set('staticTemplate', false);
  component.set('menuTemplate', null);
  component.set('lookupTemplate', (templateName) => {
    assert.ok(templateName);
    if (templateName === 'menus/application') {
      return true;
    }
    return false;
  });
  this.render();
  assert.equal(component.get('_menuTemplate'), 'menus/application', `'_menuTemplate' should be 'menus/application'`);
});

test('_menuTemplate - menuTemplate not set, staticTemplate false, no route template, fall back to `menus/application` template', function (assert) {
  assert.expect(3);

  Ember.Logger.error = () => {
    assert.ok(false, `this should not be run`);
  };
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'index' });
  component.set('staticTemplate', false);
  component.set('menuTemplate', null);
  component.set('lookupTemplate', (templateName) => {
    assert.ok(templateName);
    if (templateName === 'menus/application') {
      return true;
    }
    return false;
  });
  this.render();
  assert.equal(component.get('_menuTemplate'), 'menus/application', `'_menuTemplate' should be 'menus/application'`);
});

test('_menuTemplate - no templates found, staticTemplate false', function (assert) {
  assert.expect(4);

  Ember.Logger.error = (m) => {
    assert.equal(m, `Could not find menu template: 'menus/application'.  Create a template at 'templates/menus/application.hbs' and put your menu template there.`);
  };
  var component = this.subject();
  component.set('lookup', { currentRouteName: 'index' });
  component.set('staticTemplate', false);
  component.set('menuTemplate', null);
  component.set('lookupTemplate', (templateName) => {
    assert.ok(templateName);
    return false;
  });
  this.render();
  assert.equal(component.get('_menuTemplate'), null, `'_menuTemplate' should be null`);
});

test('lookupTemplate returns true if lookup.hasTemplate is true', function (assert) {
  assert.expect(3);
  var component = this.subject();
  component.set('staticTemplate', true);
  component.set('lookup', EmberObject.create({
    hasTemplate(templateName) {
      assert.equal(templateName, 'template-name');
      return true;
    }
  }));
  let resultOfLookup = component.lookupTemplate('template-name');
  assert.equal(resultOfLookup, true, `resultOfLookup should be true`);

  this.render();
  assert.ok(component);
});

test('lookupTemplate returns false if lookup.hasTemplate is false', function (assert) {
  assert.expect(3);
  var component = this.subject();
  component.set('staticTemplate', true);
  component.set('lookup', EmberObject.create({
    hasTemplate(templateName) {
      assert.equal(templateName, 'template-name');
      return false;
    }
  }));
  let resultOfLookup = component.lookupTemplate('template-name');
  assert.equal(resultOfLookup, false, `resultOfLookup should be false`);
  this.render();
  assert.ok(component);
});

test('_closeMenu method', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  component.set('menuOpen', true);
  this.render();
  run(() => component._closeMenu());
  assert.equal(component.get('menuOpen'), false, `'menuOpen' should be false`);
});

test('closeMenu action', function (assert) {
  assert.expect(1);
  var component = this.subject();
  component.set('lookup', lookup);
  component.set('_closeMenu', () => assert.ok(true));
  this.render();
  component.send('closeMenu');
});
