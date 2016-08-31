/**
  @module ember-ui-components
*/
import Ember from 'ember';
import ClickOutsideMixin from 'ember-ui-components/mixins/click-outside';
import layout from '../templates/components/uic-context-menu-container';
import { getDimensions, getMousePosition, calculatePosition } from 'ember-ui-components/lib/fn';

const { alias } = Ember.computed;

/**
  @class ContextMenuContainerComponent
  @namespace Components
*/
export default Ember.Component.extend(ClickOutsideMixin, {
  layout,

  /**
    Injected `contextMenu` service
    @property contextMenuService
    @type {Object}
    @private
  */
  contextMenuService: Ember.inject.service('context-menu'),

  /**
    @property tagName
    @type {String}
    @private
    @default 'menu'
  */
  tagName: 'menu',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-context-menu-container', 'uic-menu-container']`
  */
  classNames: ['uic-context-menu-container', 'uic-menu-container'],

  /**
    @property classNameBindings
    @type {Array}
    @private
    @default `['hideOutline:no-outline']`
  */
  classNameBindings: ['hideOutline:no-outline'],

  /**
    @property attributeBindings
    @type {Array}
    @private
    @default `['tabindex']`
  */
  attributeBindings: ['tabindex'],

  /**
    @property tabindex
    @type {Integer}
    @private
    @default `1`
  */
  tabindex: 1,

  /**
    If this property is true the element will be given the `no-outline` css class
    which will hide the outline that an element is given when it is focused.

    @property hideOutline
    @type {Boolean}
    @private
    @default `true`
  */
  hideOutline: true,

  /**
    @property contextMenuParams
    @type {Object}
    @private
  */
  contextMenuParams: alias('contextMenuService.contextMenuParams'),

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
    let scrollBarWidth = (window.innerWidth - Ember.$(window).width());
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

  /**
    @method didInsertElement
    @private
  */
  didInsertElement() {
    this._super(...arguments);
    this.setPosition(this.$(), getMousePosition(this.get('contextMenuParams.event')));
    this.$().focus();
  },

  /**
    @event keyDown
    @param {Object} event
    @private
  */
  keyDown(event) {
    switch(event.keyCode) {
      case 13: // enter
        this.sendAction();
        break;
      case 27: // escape
        this.sendAction();
        break;
    }
  },

  /**
    @event click
    @private
  */
  click() {
    this.sendAction();
  }
});
