/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-modal-dialog';

const computed = Ember.computed;

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
    @default `['uic-modal-dialog', 'no-outline']`
  */
  classNames: ['uic-modal-dialog', 'no-outline'],

  /**
    @property classNameBindings
    @type {Array}
    @private
    @default `['dialogOpen:uic-modal-container', '_disablePointerEvents:uic-disable-pointer-events']`
  */
  classNameBindings: ['dialog.open:uic-modal-container', '_disablePointerEvents:uic-disable-pointer-events'],

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
    @property maskContent
    @type {Boolean}
    @default `true`
  */
  maskContent: true,

  /**
    Computed property
    @property _maskContent
    @type {Boolean}
    @private
  */
  _maskContent: computed('dialog.maskContent', 'maskContent', function () {
    let maskContent = this.get('dialog.maskContent');
    if (Ember.typeOf(maskContent) === 'undefined') {
      maskContent = this.get('maskContent');
    }
    return maskContent;
  }),

  /**
    ## clickOutsideModal

    Specify what should happen when the user clicks outside the modal dialog.

    Options

    * `Null` - do nothing
    * `Boolean` - `true` calls the `_confirm` method, `false` calls the `_cancel` method.
    * `String` - if a method is found on the component, then call it.
    * `Function` - calls the method

    Keywords & built-in methods

    * `confirm` calls the `_confirm` method
    * `cancel` calls the `_cancel` method
    * `shake` calls the `shake` method
    * `disable-pointer-events` applies the `uic-disable-pointer-events` class to the modal container

    @property clickOutsideModal
    @type {String|Function|Boolean|Null}
    @default false
  */
  clickOutsideModal: false,

  /**
    Computed property.
    @property _clickOutsideModal
    @type {String|Function|Boolean}
    @private
  */
  _clickOutsideModal: computed('dialog.clickOutsideModal', 'clickOutsideModal', function () {
    let clickOutsideModal = this.get('dialog.clickOutsideModal');
    if (Ember.typeOf(clickOutsideModal) === 'undefined') {
      clickOutsideModal = this.get('clickOutsideModal');
    }
    return clickOutsideModal;
  }),

  /**
    To disable pointer events set the `clickOutsideModal` property to the string `disable-pointer-events`.

    @property _disablePointerEvents
    @type {Boolean}
    @private
  */
  _disablePointerEvents: computed('_clickOutsideModal', function () {
    let _clickOutsideModal = this.get('_clickOutsideModal');
    return Ember.typeOf(_clickOutsideModal) === 'string' && _clickOutsideModal === 'disable-pointer-events';
  }),

  /**
    @property disableScroll
    @type {Boolean}
    @default `false`
  */
  disableScroll: false,

  /**
    @property _disableScroll
    @type {Boolean}
    @private
  */
  _disableScroll: computed('dialog.disableScroll', 'disableScroll', '_disablePointerEvents', function () {
    let disableScroll = this.get('dialog.disableScroll');
    if (Ember.typeOf(disableScroll) === 'undefined') {
      disableScroll = this.get('disableScroll');
    }
    return disableScroll && !this.get('_disablePointerEvents');
  }),

  /**
    @property displayModal
    @type {Boolean}
    @readonly
    @private
  */
  displayModal: computed('dialog.open', 'dialog.type', function () {
    return (this.get('dialog.open') && typeof this.get('dialog.type') === 'string');
  }),

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
  },

  /**
    @method shake
    @param {Object} element
  */
  shake(element) {
    let interval = 50;
    let distance = 10;
    let times = 4;
    if (!element) {
      element = this.$('.uic-modal');
    }
    element.css('position', 'relative');
    for(let i = 0, t = (times+1); i < t; i++) {
      element.animate({
        left:((i%2===0 ? distance : distance *-1))
      }, interval);
    }
    element.animate({ left: 0 }, interval);
  },

  /**
    @event dialogOpenChanged
    @private
  */
  dialogOpenChanged: Ember.observer('dialog.open', '_disableScroll', function() {
    if (this.get('dialog.open')) {
      Ember.$(this.get('element')).focus();
      if (this.get('_disableScroll')) {
        Ember.$('body').addClass('modal-dialog-is-open');
      }
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
  },

  /**
    @event click
  */
  click(event) {
    if (event.target === this.get('element')) {
      let clickOutsideModal = this.get('_clickOutsideModal');
      if (Ember.typeOf(clickOutsideModal) === 'boolean') {
        this[ clickOutsideModal ? '_confirm' : '_cancel' ]();
      } else if (Ember.typeOf(clickOutsideModal) === 'string' && Ember.typeOf(this[clickOutsideModal]) === 'function') {
        this[clickOutsideModal]();
      } else if (Ember.typeOf(clickOutsideModal) === 'function') {
        clickOutsideModal();
      }
    }
  }
});
