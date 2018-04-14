/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import ClickOutsideMixin from 'ember-ui-components/mixins/click-outside';
import layout from '../templates/components/uic-context-menu-container';
import setPosition from 'ember-ui-components/utils/set-position';
import getMousePosition from 'ember-ui-components/utils/get-mouse-position';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

/**
  @class ContextMenuContainerComponent
  @namespace Components
*/
export default Component.extend(ClickOutsideMixin, {
  layout,

  /**
    Injected `contextMenu` service
    @property contextMenuService
    @type {Object}
    @private
  */
  contextMenuService: service('context-menu'),

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
  setPosition,

  /**
    @method handleClickOutside
    @private
  */
  handleClickOutside() {
    get(this, 'closeContextMenu')();
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
        get(this, 'closeContextMenu')();
        break;
      case 27: // escape
        get(this, 'closeContextMenu')();
        break;
    }
  },

  click() {
    get(this, 'closeContextMenu')();
  }
});
