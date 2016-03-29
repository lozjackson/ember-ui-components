/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-context-menu';

/**
  @class ContextMenuComponent
  @namespace Components
*/
export default Ember.Component.extend({

  layout,

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
    @default false
  */
  showContextMenu: false,

  /**
    @property contextMenuParams
    @type {Object}
    @private
  */
  contextMenuParams: null,

  /**
    @method init
    @private
  */
  init() {
    this._super(...arguments);
    this.initContextMenuParams();
  },

  /**
    @method initContextMenuParams
    @private
  */
  initContextMenuParams() {
    this.set('contextMenuParams', Ember.Object.create({
      event: null
    }));
  },

  /**
    @method _closeContextMenu
    @private
  */
  _closeContextMenu() {
    this.set('showContextMenu', false);
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
    if (!window.event) {
      window._event = event;
    }
    this.set('contextMenuParams.event', event);
    this.set('showContextMenu', true);
    this.$().focus(); // set focus so that keyUp/Down events can be recieved.
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
