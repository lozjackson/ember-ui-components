/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/slide-menu';

const computed = Ember.computed;
const alias = computed.alias;

let count = 0;

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
    @property menuTemplate
    @type {String}
  */
  menuTemplate: null,

  /**
    @property menuTemplates
    @type {Array} Array of Strings
    @private
  */
  menuTemplates: [],

  /**
    Computed Property

    @property _menuTemplate
    @type {String}
    @private
  */
  _menuTemplate: computed('menuTemplate', 'currentRouteName', 'staticTemplate', function () {

    let { menuTemplate:template, currentRouteName, staticTemplate } = this.getProperties('menuTemplate', 'currentRouteName', 'staticTemplate');

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
          template = 'menus/' + currentRouteName;
          if (this.lookupTemplate(template)) {
            return template;
          }
        } else {
          let route = currentRouteName.split('.');
          while (route.length) {
            template = 'menus/' + route.join('/');
            if (this.lookupTemplate(template)) {
              return template;
            }
            route.pop();
          }
        }
      }

      // look for an application menu
      template = 'menus/application';
      if (this.lookupTemplate(template)) {
        return template;
      }
    }

    // no menu templates could be found, throw an error, and return `null`.
    Ember.Logger.error(`Could not find menu template: '${template}'.  Create a template at 'templates/${template}.hbs' and put your menu template there.`);
    return null;
  }),

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

    @property menuButtonId
    @type {String}
    @private
  */
  menuButtonId: computed(function () {
    return `slide-menu-button-${++count}`;
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
