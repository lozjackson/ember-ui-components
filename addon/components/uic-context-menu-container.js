/**
  @module ember-ui-components
*/
import Ember from 'ember';
import ClickOutsideMixin from 'ember-ui-components/mixins/click-outside';
import layout from '../templates/components/uic-context-menu-container';
import { getDimensions, getMousePosition, calculatePosition } from 'ember-ui-components/lib/fn';

/**
  @class ContextMenuContainerComponent
  @namespace Components
*/
export default Ember.Component.extend(ClickOutsideMixin, {
  layout,

  /**
    @property tagName
    @type {String}
    @private
    @default 'nav'
  */
  tagName: 'nav',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-context-menu-container', 'uic-menu-container']`
  */
  classNames: ['uic-context-menu-container', 'uic-menu-container'],

  /**
    ## setPosition

    Set the left/top css properties of an element.

    `element` should be a reference to an HTML element.  Either a string selector
    that can be used with jQuery, or a jQuery selection object.

    If `position` is not specified, then the current mouse position will be used.

    `position` should be an Ember.Object with `x` and `y` properties.
    Both `x` and `y` should be numbers

    @method setPosition
    @param {String|Object} element
    @param {Object} position
  */
  setPosition(element, position) {
    let margin = 5;
    if (typeof element === 'string') {
      element = Ember.$(element);
    }
    if (!position) {
      position = getMousePosition(window.event || window._event);
    }
    let scrollBarWidth = (window.innerWidth - $(window).width());
    let el = getDimensions(element);
    element.css({
      'left': calculatePosition( position.get('x') + 2, el.width, window.innerWidth - ( margin + scrollBarWidth)),
      'top': calculatePosition( position.get('y'), el.height, window.innerHeight - margin)
    });
  },

  /**
    @method handleClickOutside
    @private
  */
  handleClickOutside() {
    this.sendAction();
  },

  didInsertElement() {
    this._super(...arguments);
    this.setPosition(this.$());
  },

  click() {
    this.sendAction();
  }

});
