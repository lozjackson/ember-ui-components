/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-content-mask';

/**
  @class ContentMaskComponent
  @namespace Components
*/
export default Ember.Component.extend({
  /**
    @property layout
    @type {String}
    @private
  */
  layout: layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-content-mask']`
  */
  classNames: ['uic-content-mask'],

  didInsertElement() {
    this._super(...arguments);
    let didInsertMask = this.get('didInsertMask');
    if (typeof didInsertMask === 'function') {
      didInsertMask.call(this);
    }
  },

  /**
    @event click
  */
  click() {
    this.sendAction();
  }
});
