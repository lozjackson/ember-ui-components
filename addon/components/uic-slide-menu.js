/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-slide-menu';

const computed = Ember.computed;
const alias = computed.alias;

/**
  @class SlideMenuComponent
  @namespace Components
*/
export default Ember.Component.extend({

  layout,

  /**
    Injected LookupService
    @property lookup
    @type {Object}
    @private
  */
  lookup: Ember.inject.service(),

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-slide-menu']`
  */
  classNames: ['uic-slide-menu'],

  /**
    @property classNameBindings
    @type {Array}
    @private
    @default `['menuPosition']`
  */
  classNameBindings: ['menuPosition'],

  /**
    This is the position of the menu on the window.

    Options are: left, right, top, or bottom

    @property menuPosition
    @type {String}
    @default `left`
  */
  menuPosition: 'left',

  /**
    Set this property to true or false to open or close the menu.
    @property menuOpen
    @type {Boolean}
    @default `false`
  */
  menuOpen: false,

  /**
    If true the page content will slide with the menu.  If false the menu will
    slide over the top of the page content.
    @property pushContent
    @type {Boolean}
    @default `false`
  */
  pushContent: false,

  /**
    Options:
    * `push-content`
    * `squeeze-content`

    @property pushContentType
    @type {String}
    @default `push-content`
  */
  pushContentType: 'push-content',

  /**
    If true the page content will be masked while the menu is open.
    @property maskContent
    @type {Boolean}
    @default `true`
  */
  maskContent: true,

  /**
    @property disableScroll
    @type {Boolean}
    @default `true`
  */
  disableScroll: true,

  /**
    If true then the default menu toggle button will be displayed.  If you want
    to create your own menu toggle button, then set this parameter to false and
    the default toggle button will not be displayed.
    @property showDefaultToggle
    @type {Boolean}
    @default `true`
  */
  showDefaultToggle: true,

  /**
    If `staticTemplate` is true then the `menuTemplate` property will be required.
    If `staticTemplate` is false, then the menu template will be dynamically
    looked up if `menuTemplate` is not specified.
    @property staticTemplate
    @type {Boolean}
    @default `false`
  */
  staticTemplate: false,

  /**
    This is the menu template path.  This is only used when `menuTemplate` is null.
    @property menuTemplatePath
    @type {String}
    @default `menus`
  */
  menuTemplatePath: 'menus',

  /**
    Set the template name to use for the menu here.

    For example, if you set the `menuTemplate` to `menus/application`, then it
    will expect to find a template at `templates/menus/application.hbs`.

    If you leave this property set to `null`, and set `staticTemplate` to false,
    the default behaviour, then the template name will be set automatically.
    It will first look for a menu template with the same name as the route, if
    it doesn't find one, it looks up the route hierarchy until it gets to the
    application level.  If no menu templates can be found it will throw an error.

    @property menuTemplate
    @type {String}
    @default `null`
  */
  menuTemplate: null,

  /**
    By default this is not used.
    To use this property, set `menuTemplate` to `null` and `staticTemplate` to
    `true`, then fill this array with template names.

    @property _menuTemplates
    @type {Array} Array of Strings
    @private
  */
  _menuTemplates: [],

  /**
    Alias of `menuOpen`

    @property maskIsActive
    @type {Boolean}
    @private
  */
  maskIsActive: alias('menuOpen'),

  /**
    Alias of `lookup.currentRouteName`
    @property currentRouteName
    @type {String}
    @private
  */
  currentRouteName: alias('lookup.currentRouteName'),

  /**
    Computed Property
    @property _menuTemplatePath
    @type {String}
    @private
  */
  _menuTemplatePath: computed('menuTemplatePath', function () {
    let path = this.get('menuTemplatePath');
    if (!path) { return ''; }

    // add `/` on the end if it is not there already
    if (path.charAt(path.length -1) !== '/') {
      path = path + '/';
    }
    return path;
  }),

  /**
    Computed Property

    @property _menuTemplate
    @type {String}
    @private
  */
  _menuTemplate: computed('menuTemplate', 'currentRouteName', 'staticTemplate', '_menuTemplatePath', function () {

    let {
      menuTemplate:template,
      currentRouteName,
      staticTemplate,
      _menuTemplatePath
    } = this.getProperties('menuTemplate', 'currentRouteName', 'staticTemplate', '_menuTemplatePath');

    if (template) {

      // if a template is specified,
      // and it can be found, return the tamplate name.
      if (this.lookupTemplate(template)) {
        return template;
      }

    } else if (staticTemplate) {

      // if staticTemplate is true then `menuTemplate` must not be null, throw an error
      // no menu templates could be found, return `null`.
      Ember.Logger.error('The value of `menuTemplate` cannot be null when using static templates.');
      return null;

    } else {
      // `staticTemplate` false, and `menuTemplate` false

      // look for a route level menu
      if (currentRouteName) {
        if (currentRouteName.indexOf('.') === -1) {
          template = _menuTemplatePath + currentRouteName;
          if (this.lookupTemplate(template)) {
            return template;
          }
        } else {
          let route = currentRouteName.split('.');
          while (route.length) {
            template = _menuTemplatePath + route.join('/');
            if (this.lookupTemplate(template)) {
              return template;
            }
            route.pop();
          }
        }
      }

      // look for an application menu
      template = _menuTemplatePath + 'application';
      if (this.lookupTemplate(template)) {
        return template;
      }
    }

    // no menu templates could be found, throw an error, and return `null`.
    Ember.Logger.error(`Could not find menu template: '${template}'.  Create a template at 'templates/${template}.hbs' and put your menu template there.`);
    return null;
  }),

  /**
    @event menuOpenChanged
    @private
  */
  menuOpenChanged: Ember.observer('menuOpen', function() {
    if (this.get('menuOpen')) {
      let classNames = ['menu-is-open'];
      if (this.get('disableScroll')) {
        classNames.push('uic-disable-scroll');
      }
      Ember.$('body').addClass(classNames.join(' '));
    } else {
      Ember.$('body').removeClass('menu-is-open uic-disable-scroll');
    }
  }),

  /**
    @method lookupTemplate
    @private
    @param {String} templateName
    @return {Boolean} True if the template exists
  */
  lookupTemplate(templateName) {
    let lookup = this.get('lookup');
    if (!lookup) { return; }
    return lookup.hasTemplate(templateName);
  },

  /**
    @method _closeMenu
    @private
  */
  _closeMenu() {
    this.set('menuOpen', false);
  },

  actions: {

    /**
      ACTION
      @method closeMenu
    */
    closeMenu() {
      this._closeMenu();
    }
  }
});
