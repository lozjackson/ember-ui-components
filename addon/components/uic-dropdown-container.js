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
  }
});
