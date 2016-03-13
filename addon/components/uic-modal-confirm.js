/**
  @module ember-ui-components
*/
import ModalComponent from 'ember-ui-components/components/euic-modal';
import layout from '../templates/components/euic-modal-confirm';

/**
  @class ModalConfirmComponent
  @extends Components.ModalComponent
  @namespace Components
*/
export default ModalComponent.extend({

  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['euic-modal-confirm']`
  */
  classNames: ['euic-modal-confirm'],

  /**
    @method _confirm
    @private
  */
  _confirm() {
    this.get('dialog').resolve();
  },

  /**
    @method _cancel
    @private
  */
  _cancel() {
    this.get('dialog').reject();
  },

  actions: {

    /**
      @method confirm
    */
    confirm() {
      this._confirm();
    },

    /**
      @method cancel
    */
    cancel() {
      this._cancel();
    }
  }
});
