/**
  @module ember-ui-components
*/
import Ember from 'ember';

/**
  # Dialog Service

  Use this service to open a modal dialog.

  ## Alert

  ```
  dialog.alert('Something happened!');
  ```

  ## Confirm

  ```
  dialog.confirm('Are you sure?').then(() => {

    // confirmed...

  }, () => {

    // canceled...

  });
  ```

  ## Open Modal

  The `alert` and `confirm` methods call `openModal` internally, passing in
  `uic-modal-alert` and `uic-modal-confirm` components respectivly.  You can
  manually call `openModal` and pass in a custom modal component.

  ```
  dialog.openModal('Your message', 'modal-name');
  ```

  @class DialogService
  @namespace Services
*/
export default Ember.Service.extend({

  /**
    @property open
    @type {Boolean}
    @default `false`
  */
  open: false,

  /**
    @property type
    @type {String}
    @private
  */
  type: null,

  /**
    @property title
    @type {String}
  */
  title: null,

  /**
    @property body
    @type {String}
  */
  body: null,

  /**
    @property maskContent
    @type {Boolean}
    @default `undefined`
  */
  maskContent: undefined,

  /**
    @property disableScroll
    @type {Boolean}
    @default `undefined`
  */
  disableScroll: undefined,

  /**
    ## clickOutsideModal

    Specify what should happen when the user clicks outside the modal dialog.

    Options

    * `Null` - do nothing
    * `Boolean` - `true` calls the `_confirm` method on the modal component, `false` calls the `_cancel` method.
    * `String` - if a method is found on the modal component, then call it.
    * `Function` - calls the passed in method

    Keywords & built-in methods

    * `confirm` calls the `_confirm` method
    * `cancel` calls the `_cancel` method
    * `shake` calls the `shake` method
    * `disable-pointer-events` applies the `uic-disable-pointer-events` class to the modal container

    @property clickOutsideModal
    @type {String|Function|Boolean|Null}
    @default `undefined`
  */
  clickOutsideModal: undefined,

  /**
    @property deferred
    @type {Object}
    @private
  */
  deferred: null,

  /**
    ## Open Modal

    Use this method to open a modal dialog.  It takes two arguments.  A `message`
    and a `type`.  The message can be a string, or an object describing the message.
    The `type` is the component name to render.

    An example passing in a message string:

    ```
    dialog.openModal('Something happened!', 'modal-name');
    ```

    An example passing in an message object:

    ```
    dialog.openModal({
      title: 'Foo',
      body: 'Bar'
    }, 'modal-name');
    ```

    An example using the returned Promise:

    ```
    dialog.openModal({
      title: 'Are you sure?',
      body: 'Do you really want to do this?'
    }, 'modal-name').then(() => {

      // confirmed...

    }, () => {

      // canceled...

    });
    ```

    @method openModal
    @param {Object|String} message
    @param {String} type
    @return {Object} Promise
  */
  openModal(message, type) {
    let deferred = Ember.RSVP.defer();
    if (Ember.typeOf(message) !== 'object') {
      message = this.convertMessageToObject(message);
    }

    if (!type) {
      type = 'uic-modal';
    }

    this.setProperties(message);
    this.setProperties({
      type: type,
      open: true,
      deferred: deferred
    });
    return deferred.promise;
  },

  /**
    ## Close Modal

    @method closeModal
  */
  closeModal() {
    this.reject();
  },

  /**
    ## Alert

    Use this method to open an alert dialog.  It takes one argument - A `message`.
    The message can be a string, or an object describing the message.

    An example passing in a message string:

    ```
    dialog.alert('Something happened!');
    ```

    An example passing in a message object:

    ```
    dialog.alert({
      title: 'An event has happened',
      body: 'You clicked a button!'
    });
    ```

    @method alert
    @param {Object|String} message
    @return {Object} Promise
  */
  alert(message) {
    if (Ember.typeOf(message) !== 'object') {
      message = this.convertMessageToObject(message);
    }
    if (Ember.typeOf(message.clickOutsideModal) === 'undefined') {
      message.clickOutsideModal = null;
    }
    return this.openModal(message, 'uic-modal-alert');
  },

  /**
    ## Confirm

    Use this method to open an confirmation dialog.  It takes one argument - A
    `message`.  The message can be a string, or an object describing the message.

    An example passing in a message string:

    ```
    dialog.confirm('Are you sure?').then(() => {

      // confirmed...

    }, () => {

      // canceled...

    });
    ```

    ```
    dialog.confirm({
      title: 'Are you sure?',
      body: 'Do you really want to do this?'
    }).then(() => {

      // confirmed...

    }, () => {

      // canceled...

    });
    ```

    @method confirm
    @param {Object|String} message
    @return {Object} Promise
  */
  confirm(message) {
    if (Ember.typeOf(message) !== 'object') {
      message = this.convertMessageToObject(message);
    }
    if (Ember.typeOf(message.clickOutsideModal) === 'undefined') {
      message.clickOutsideModal = 'shake';
    }
    return this.openModal(message, 'uic-modal-confirm');
  },

  /**
    @method resolve
    @private
  */
  resolve() {
    let deferred = this.get('deferred')
    if (deferred) {
      deferred.resolve();;
    }
    this.reset();
  },

  /**
    @method reject
    @private
  */
  reject() {
    let deferred = this.get('deferred')
    if (deferred) {
      deferred.reject();
    }
    this.reset();
  },

  /**
    @method convertMessageToObject
    @param {String} message
    @private
    @return {Object}
  */
  convertMessageToObject(message) {
    if (typeof message === 'string' || typeof message === 'undefined') {
      message = { title: message, body: '' };
    }
    return message;
  },

  /**
    @method reset
    @private
  */
  reset() {
    this.setProperties({
      title: null,
      body: null,
      open: false,
      type: null,
      maskContent: undefined,
      disableScroll: undefined,
      clickOutsideModal: undefined,
      deferred: null
    });
  }
});
