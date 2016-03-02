/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/slide-menu';

const computed = Ember.computed;
const alias = computed.alias;

/**
  @class SlideMenuComponent
  @namespace Components
*/
export default Ember.Component.extend({

  /**
    Injected LookupService
    @property lookup
    @type {Object}
  */
  lookup: Ember.inject.service(),

  /**
    @property layout
    @type {String}
    @private
  */
  layout: layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['slide-menu']`
  */
  classNames: ['slide-menu'],

  /**
    @property classNameBindings
    @type {Array}
    @private
    @default `['menuPosition']`
  */
  classNameBindings: ['menuPosition'],

  /**
    @property menuPosition
    @type {String}
    @default `left`
  */
  menuPosition: 'left',

  /**
    @property menuOpen
    @type {Boolean}
    @default `false`
  */
  menuOpen: false,

  /**
    @property pushContent
    @type {Boolean}
    @default `false`
  */
  pushContent: false,

  /**
    @property maskContent
    @type {Boolean}
    @default `true`
  */
  maskContent: true,

  /**
    @property showDefaultToggle
    @type {Boolean}
    @default `true`
  */
  showDefaultToggle: true,

  /**
    @property staticTemplate
    @type {Boolean}
    @default `false`
  */
  staticTemplate: false,

  /**
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
      Ember.$('body').addClass('menu-is-open');
    } else {
      Ember.$('body').removeClass('menu-is-open');
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
