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
    @default `['uic-dropdown-container']`
  */
  classNames: ['uic-dropdown-container'],

  /**
    @event handleClickOutside
  */
  handleClickOutside() {
    this.sendAction();
  },
});
