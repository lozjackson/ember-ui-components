/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import layout from '../templates/components/uic-modal-window';
import DestinationElementMixin from 'ember-ui-components/mixins/destination-element';
import { inject as service } from '@ember/service';
import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import $ from 'jquery';

/**
  @class ModalWindowComponent
  @namespace Components
  @uses Mixins.DestinationElementMixin
*/
export default Component.extend(DestinationElementMixin, {

  layout,

  /**
    Injected ModalService
    @property modal
    @type {Object}
    @private
  */
  modal: service(),

  /**
    Injected LookupService
    @property lookup
    @type {Object}
    @private
  */
  lookup: service(),

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-modal-window']`
  */
  classNames: ['uic-modal-window'],

  /**
    @property classNameBindings
    @type {Array}
    @private
    @default `['disablePointerEvents:uic-disable-pointer-events']`
  */
  classNameBindings: ['disablePointerEvents:uic-disable-pointer-events'],

  /**
    @property showCloseButton
    @type {Boolean}
    @default `true`
  */
  showCloseButton: true,

  /**
    @property maskContent
    @type {Boolean}
    @default `true`
  */
  maskContent: true,

  /**
    @property disableScroll
    @type {Boolean}
    @default `false`
  */
  disableScroll: false,

  /**
    @property disablePointerEvents
    @type {Boolean}
    @default 'false'
  */
  disablePointerEvents: false,

  /**
    Alias of `lookup.currentRouteName`
    @property currentRouteName
    @type {String}
    @private
  */
  currentRouteName: alias('lookup.currentRouteName'),

  /**
    @property parentRouteName
    @type {String}
    @private
  */
  parentRouteName: alias('lookup.parentRouteName'),

  /**
    @property showModal
    @type {Boolean}
  */
  showModal: computed('modal.modalId', 'elementId', function () {
    return this.get('modal.modalId') === this.get('elementId');
  }),

  /**
    @event didInsertElement
    @private
  */
  didInsertElement() {
    this._super(...arguments);
    if (this.get('disableScroll')) {
      $('body').addClass('modal-window-is-open');
    }
  },

  /**
    @event didDestroyElement
    @private
  */
  didDestroyElement() {
    this._super(...arguments);
    $('body').removeClass('modal-window-is-open');
  },

  /**
    @method _closeModal
    @private
  */
  _closeModal() {
    const closeModal = get(this, 'closeModal');
    if (closeModal) {
      closeModal();
    }
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
