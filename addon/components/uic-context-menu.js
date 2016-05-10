/**
  @module ember-ui-components
*/
import Ember from 'ember';
import openContextMenu from 'ember-ui-components/helpers/open-context-menu';
import layout from '../templates/components/uic-context-menu';

const { computed } = Ember;
const { alias } = computed;

/**
  @class ContextMenuComponent
  @namespace Components
*/
export default Ember.Component.extend({

  layout,

  contextMenuService: Ember.inject.service('context-menu'),

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-context-menu']`
  */
  classNames: ['uic-context-menu'],

  /**
    @property attributeBindings
    @type {Array}
    @private
    @default `['tabindex']`
  */
  attributeBindings: ['tabindex'],

  /**
    @property classNameBindings
    @type {Array}
    @private
    @default `['hideOutline:no-outline']`
  */
  classNameBindings: ['hideOutline:no-outline'],

  /**
    @property tabindex
    @type {Integer}
    @default `1`
  */
  tabindex: 1,

  /**
    If this property is true the element will be given the `no-outline` css class
    which will hide the outline that an element is given when it is focused.

    @property hideOutline
    @type {Boolean}
    @default `true`
  */
  hideOutline: true,

  /**
    @property showContextMenu
    @type {Boolean}
  */
  showContextMenu: computed('contextMenuService.menu', 'elementId', function () {
    return this.get('contextMenuService.menu') === this.get('elementId');
  }),

  /**
    @property contextMenuParams
    @type {Object}
    @private
  */
  contextMenuParams: alias('contextMenuService.contextMenuParams'),

  /**
    @method _closeContextMenu
    @private
  */
  _closeContextMenu() {
    this.get('contextMenuService').close();
  },

  /**
    @event keyDown
    @param {Object} event
    @private
  */
  keyDown(event) {
    if (this.get('showContextMenu')) {
      switch(event.keyCode) {
        case 13: // enter
          this._closeContextMenu();
          break;
        case 27: // escape
          this._closeContextMenu();
          break;
      }
    }
  },

  /**
    @event contextMenu
    @param {Object} event
    @private
    @return {Boolean} false
  */
  contextMenu(event) {
    event.preventDefault();
    this.get('contextMenuService').open(this.get('elementId'), event);
    return false;
  },

  actions: {
    /**
      @method closeContextMenu
    */
    closeContextMenu() {
      this._closeContextMenu();
    }
  }
});
