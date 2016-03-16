/**
  @module ember-ui-components
*/
import Ember from 'ember';

/**
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
    if (typeof message === 'string') {
      message = { title: message, body: '' };
    }
    this.setProperties({
      title: message.title,
      body: message.body,
      type: type,
      open: true,
      deferred: deferred
    });
    return deferred.promise;
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
    return this.openModal(message, 'uic-modal-confirm');
  },

  /**
    @method resolve
    @private
  */
  resolve() {
    this.get('deferred').resolve();
    this.reset();
  },

  /**
    @method reject
    @private
  */
  reject() {
    this.get('deferred').reject();
    this.reset();
  },

  /**
    @method reset
    @private
  */
  reset() {
    this.set('open', false);
    this.set('type', null);
    this.set('title', null);
    this.set('body', null);
    this.set('deferred', null);
  }
});
