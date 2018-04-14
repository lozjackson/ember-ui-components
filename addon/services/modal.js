/**
  @module ember-ui-components
*/
import EmberObject from '@ember/object';
import Service from '@ember/service';
import { bool } from '@ember/object/computed';

/**

  ## Modal Service

  This service provides methods for opening and closing a modal.

  ### Open

  To open a modal, call the `open()` method passing in the `elementId` of
  the modal-window component.

  ```
  modalService.open('modal-id');
  ```

  You can also pass in a `model` object as the second argument to the `open()` method.

  ```
  modalService.open('modal-id', model);
  ```

  The `model` will then be available to the modal-window component as the `params.model` property.

  ### Close

  Call the `close()` method to close the currently open modal.

  ```
  modalService.close();
  ```

  NOTE: The `close()` method will only close modals that have been opened using the `ModalService`.

  ### Toggle

  Call the `toggle()` method to toggle the `open()` and `close()` methods.  Pass
  in the same arguments as you would the `open()` method.

  ```
  modalService.toggle('modal-id', model);
  ```

  @class ModalService
  @namespace Services
*/
export default Service.extend({

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
  modalIsOpen: bool('modalId'),

  /**
    @property params
    @type {Object}
    @private
  */
  params: null,

   /**
    @method init
    @private
  */
  init() {
    this._super(...arguments);
    this.initParams();
  },

  /**
    @method initParams
    @private
  */
  initParams() {
    this.set('params', EmberObject.create({
      model: null
    }));
  },

  /**
    @method open
    @param {String} modalId
    @return {Boolean} `false`
  */
  open(modalId, model) {
    this.set('modalId', modalId);
    this.set('params.model', model);
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
    this.set('params.model', null);
  }
});
