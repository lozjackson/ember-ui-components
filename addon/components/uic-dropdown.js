/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-dropdown';

/**
  @class DropdownComponent
  @namespace Components
*/
export default Ember.Component.extend({
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