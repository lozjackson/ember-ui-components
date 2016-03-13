/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-modal';

/**
  @class ModalComponent
  @namespace Components
*/
export default Ember.Component.extend({
  layout,

  /**
    @property dialog
    @type {Object}
    @private
  */
  dialog: Ember.inject.service(),

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-modal']`
  */
  classNames: ['uic-modal']
});
