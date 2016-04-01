/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-button-group';

/**
  @class ButtonGroupComponent
  @namespace Components
*/
export default Ember.Component.extend({
  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-button-group']`
  */
  classNames: ['uic-button-group']
});
