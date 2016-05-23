/**
  @module ember-ui-components
*/
import Ember from 'ember';
import ClickOutsideMixin from 'ember-ui-components/mixins/click-outside';
import layout from '../templates/components/uic-dropdown-container';

/**
  @class DropdownContainerComponent
  @namespace Components
  @uses Mixins.ClickOutsideMixin
*/
export default Ember.Component.extend(ClickOutsideMixin, {

  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-dropdown-container', 'uic-menu-container']`
  */
  classNames: ['uic-dropdown-container', 'uic-menu-container'],

  /**
    ## AutoClose

    If this property is `false` then the default will be prevented - The default
    is that the click will bubble up to the `DropdownComponent` and will close
    the dropdown.

    @property autoClose
    @type {Boolean}
    @default `true`
  */
  autoClose: true,

  /**
    Alias of `element.parentElement`
    @property targetElement
    @type {Object}
    @private
  */
  targetElement: Ember.computed.alias('element.parentElement'),

  /**
    @method handleClickOutside
    @private
  */
  handleClickOutside() {
    this.sendAction();
  },

  /**
    @event click
    @param {Object} event
    @private
    @return {Boolean}
  */
  click(event) {
    if (!this.get('autoClose')) {
      event.preventDefault();
      return false;
    }
  }
});