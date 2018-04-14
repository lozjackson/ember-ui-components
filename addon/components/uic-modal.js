/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import layout from '../templates/components/uic-modal';
import { inject as service } from '@ember/service';

/**
  @class ModalComponent
  @namespace Components
*/
export default Component.extend({
  layout,

  /**
    @property dialog
    @type {Object}
    @private
  */
  dialog: service(),

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-modal']`
  */
  classNames: ['uic-modal'],

  /**
    @method _closeModal
    @private
  */
  _closeModal() {
    this.get('dialog').closeModal();
  },

  actions: {

    /**
      @method closeModal
    */
    closeModal() {
      this._closeModal();
    }
  }
});
