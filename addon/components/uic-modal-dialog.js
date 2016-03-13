/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-modal-dialog';

/**
  @class ModalDialogComponent
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
    @default `['uic-modal-dialog']`
  */
  classNames: ['uic-modal-dialog'],

  /**
    @property attributeBindings
    @type {Array}
    @private
    @default `['tabindex']`
  */
  attributeBindings: ['tabindex'],

  /**
    @property tabindex
    @type {Integer}
    @private
    @default `1`
  */
  tabindex: 1,

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

  /**
    @event dialogOpenChanged
    @private
  */
  dialogOpenChanged: Ember.observer('dialog.open', function() {
    if (this.get('dialog.open')) {
      Ember.$('body').addClass('modal-dialog-is-open');
      Ember.$(this.get('element')).focus();
    }else {
      Ember.$('body').removeClass('modal-dialog-is-open');
    }
  }),

  /**
    @event keyDown
    @param {Object} event
    @private
  */
  keyDown(event) {
    if (this.get('dialog.open')) {
      switch(event.keyCode) {
        case 13: // enter
          this._confirm();
          break;
        case 27: // escape
          this._cancel();
          break;
      }
    }
  }
});
