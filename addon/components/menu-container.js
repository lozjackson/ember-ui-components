/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/menu-container';

/**
  @class MenuContainerComponent
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
    @default `['menu-container']`
  */
  classNames: ['menu-container']
});
