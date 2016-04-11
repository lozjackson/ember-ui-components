/**
  @module arms
*/
import Ember from 'ember';
import layout from '../templates/components/uic-close-button';

/**
  @class CloseButtonComponent
  @namespace Arms
*/
export default Ember.Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @private
    @default `button`
  */
  tagName: 'button',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-close-button']`
  */
  classNames: ['uic-close-button'],

  /**
    @event click
  */
  click() {
    this.sendAction();
  }
});
