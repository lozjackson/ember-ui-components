/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/menu-container';
import { getDimensions, calculatePosition } from 'ember-ui-components/lib/fn';

/**
  @class MenuContainerComponent
  @namespace Components
*/
export default Ember.Component.extend({

  /**
    @property layout
    @type {String}
    @private
  */
  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['menu-container']`
  */
  classNames: ['menu-container'],

  /**
    @method getParentMenu
    @private
    @return {Object}
  */
  getParentMenu() {
    return this.$().parents('.menu-container');
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
      'top': calculatePosition( element.position().top, el.height, window.innerHeight - 5)
    };

    if (element) {
      rect = element[0].getBoundingClientRect();
      if (rect.right > windowWidth && parent.offset()) {
        css.left = parent.offset().left - el.width
      }

      element.css(css);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.didInsertMenu();
  }
});
