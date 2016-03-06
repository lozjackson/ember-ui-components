/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/context-menu';
import { getPosition } from 'ember-ui-components/lib/fn';

/**
  @class ContextMenuComponent
  @namespace Components
*/
export default Ember.Component.extend({

  /**
    @property layout
    @type {String}
    @private
  */
  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['context-menu']`
  */
  classNames: ['context-menu'],

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
    @method setPosition
    @private
  */
  setPosition() {
    let position = getPosition(window.event);
    Ember.$('.context-menu-container').css({
			'left':position.get('x'),
			'top':position.get('y')
		});
  },

  /**
    @method _closeContextMenu
    @private
  */
  _closeContextMenu() {
    this.set('showContextMenu', false);
  },

  /**
    @event contextMenu
    @param {Object} event
    @return {Boolean} false
  */
  contextMenu(event) {
    event.preventDefault();
    this.set('contextMenuParams.event', event);
    this.set('showContextMenu', true);
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
