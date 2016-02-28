/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/content-mask';

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
    @default `['content-mask']`
  */
  classNames: ['content-mask'],

  /**
    @event click
  */
  click() {
    this.sendAction();
  }
});
