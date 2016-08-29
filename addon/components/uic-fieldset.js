/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-fieldset';

/**
  @class FieldsetComponent
  @namespace Components
*/
export default Ember.Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @default `fieldset`
    @private
  */
  tagName: 'fieldset',

  /**
    @property classNames
    @type {Array}
    @default `['uic-fieldset']`
    @private
  */
  classNames: ['uic-fieldset']
});
