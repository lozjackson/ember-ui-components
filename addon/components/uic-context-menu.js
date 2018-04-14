/**
  @module ember-ui-components
*/
import Component from '@ember/component';
// import openContextMenu from 'ember-ui-components/helpers/open-context-menu';
import layout from '../templates/components/uic-context-menu';
import DestinationElementMixin from 'ember-ui-components/mixins/destination-element';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

/**
  @class ContextMenuComponent
  @namespace Components
  @uses Mixins.DestinationElementMixin
*/
export default Component.extend(DestinationElementMixin, {

  layout,

  /**
    Injected `contextMenu` service
    @property contextMenuService
    @type {Object}
    @private
  */
  contextMenuService: service('context-menu'),

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-context-menu']`
  */
  classNames: ['uic-context-menu'],

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
    @event contextMenu
    @param {Object} event
    @private
    @return {Boolean} false
  */
  contextMenu(event) {
    event.preventDefault();
    this.get('contextMenuService').toggle(this.get('elementId'), event);
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
