/**
  @module ember-ui-components
*/
import Ember from 'ember';

/**
  @class ClickOutsideMixin
  @namespace Mixins
*/
export default Ember.Mixin.create({

  /**
    @event handleClickOutside
  */
  handleClickOutside: Ember.K,

  /**
    @method didInsertElement
    @private
  */
  didInsertElement() {
    this._super(...arguments);
    Ember.run.next(() => Ember.$(window).on(`click.${this.get('elementId')}`, (event) => {
      if (event.target !== this.get('element')) {
        this.handleClickOutside(event);
      }
    }));
  },

  /**
    @method willDestroyElement
    @private
  */
  willDestroyElement() {
    this._super(...arguments);
    Ember.$(window).off(`click.${this.get('elementId')}`)
  }
});
