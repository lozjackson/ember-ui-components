/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-menu-container';
import { getDimensions, calculatePosition } from 'ember-ui-components/lib/fn';

/**
  @class MenuContainerComponent
  @namespace Components
*/
export default Ember.Component.extend({

  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-menu-container']`
  */
  classNames: ['uic-menu-container'],

  /**
    @method getParentMenu
    @private
    @return {Object}
  */
  getParentMenu() {
    return this.$().parents('.uic-menu-container');
  },

  /**
    @method didInsertMenu
    @private
  */
  didInsertMenu() {
    let element = this.$();
    let el = getDimensions(element);
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;
    let windowWidth = window.innerWidth || document.documentElement.clientWidth;
    let rect;
    let parent = this.getParentMenu();
    let css = {
      top: calculatePosition( element.position().top, el.height, windowHeight - 5)
    };

    if (element) {
      rect = element[0].getBoundingClientRect();
      if (rect.right > windowWidth && parent.offset()) {
        css.left = (element.css('position') === 'fixed') ? (parent.offset().left - el.width) + 15 : (el.width + parent.width() - 45) * -1;
      }

      element.css(css);
    }
  },

  /**
    @event didInsertElement
    @private
  */
  didInsertElement() {
    this._super(...arguments);
    this.didInsertMenu();
  }
});
