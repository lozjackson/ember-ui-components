/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/euic-modal-dialog';

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
    @default `['euic-modal-dialog']`
  */
  classNames: ['euic-modal-dialog'],

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
  */
  dialogOpenChanged: Ember.observer('dialog.open', function() {
    if (this.get('dialog.open')) {
      Ember.$(this.get('element')).focus();
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
