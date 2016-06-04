/**
  @module ember-ui-components
*/
import Ember from 'ember';

const { computed } = Ember;

/**
  @class ModalService
  @namespace Services
*/
export default Ember.Service.extend({

  /**
    The id of the menu.
    @property modal
    @type {String}
    @private
  */
  modalId: null,
  
  /**
    @property modalIsOpen
    @type {Boolean}
    @private
    @readonly
  */
  modalIsOpen: computed.bool('modalId'),

  /**
    @method open
    @param {String} modalId
    @return {Boolean} `false`
  */
  open(modalId) {

    this.set('modalId', modalId);

    return false;
  },

  /**
    @method close
  */
  close() {
    this.reset();
  },
  
  /**
    ## Toggle

    Toggle the `open` or `close` methods.  The `toggle` method accepts the same
    arguments as the `open` method.

    @method toggle
    @param {String} modalId
    @return {Boolean}
  */
  toggle() {
    return this.get('modalIsOpen') ? this.close() : this.open(...arguments);
  },
  
  /**
    @method reset
    @private
  */
  reset() {
    this.set('modalId', null);
  }
});
