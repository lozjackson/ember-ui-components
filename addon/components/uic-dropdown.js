/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import layout from '../templates/components/uic-dropdown';

/**
  @class DropdownComponent
  @namespace Components
*/
export default Component.extend({
  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-dropdown']`
  */
  classNames: ['uic-dropdown'],

  /**
    @property showDropdown
    @type {Boolean}
    @default `false`
  */
  showDropdown: false,

  /**
    @property autoClose
    @type {Boolean}
    @default `true`
  */
  autoClose: true,

  /**
    @method _hideDropdown
    @private
  */
  _hideDropdown() {
    this.set('showDropdown', false);
  },

  /**
    @event click
    @private
  */
  click() {
    this.toggleProperty('showDropdown');
  },

  actions: {

    /**
      @method hideDropdown
    */
    hideDropdown() {
      this._hideDropdown();
    }
  }
});
