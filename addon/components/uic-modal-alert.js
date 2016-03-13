/**
  @module ember-ui-components
*/
import ModalComponent from 'ember-ui-components/components/uic-modal';
import Ember from 'ember';
import layout from '../templates/components/uic-modal-alert';

/**
  @class ModalAlertComponent
  @extends Components.ModalComponent
  @namespace Components
*/
export default ModalComponent.extend({

  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-modal-alert']`
  */
  classNames: ['uic-modal-alert'],

  /**
    @method _ok
    @private
  */
  _ok() {
    this.get('dialog').resolve();
  },

  actions: {

    /**
      @method ok
    */
    ok() {
      this._ok();
    }
  }
});
