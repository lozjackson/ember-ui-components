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
    @method openModal
    @param {Object|String} message
    @param {String} type
    @private
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
    @method alert
    @param {Object|String} message
    @return {Object} Promise
  */
  alert(message) {
    return this.openModal(message, 'uic-modal-alert');
  },

  /**
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
