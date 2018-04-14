/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import layout from '../templates/components/uic-content-mask';

/**
  @class ContentMaskComponent
  @namespace Components
*/
export default Component.extend({
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

  /**
    @property classNameBindings
    @type {Array}
    @default `['active']`
    @private
  */
  classNameBindings: ['active'],

  /**
    @property active
    @type {Boolean}
    @default `false`
  */
  active: false,

  /**
    @method didInsertElement
    @private
  */
  didInsertElement() {
    this._super(...arguments);
    let didInsertMask = this.get('didInsertMask');
    if (typeof didInsertMask === 'function') {
      didInsertMask.call(this);
    }
  }
});
