/**
  @module ember-ui-components
*/
import ModalComponent from 'ember-ui-components/components/euic-modal';
import Ember from 'ember';
import layout from '../templates/components/euic-modal-alert';

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
    @default `['euic-modal-alert']`
  */
  classNames: ['euic-modal-alert'],

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
