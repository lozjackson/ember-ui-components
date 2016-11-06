/**
  @module ember-ui-components
*/
import Ember from 'ember';
import getDimensions from 'ember-ui-components/utils/get-dimensions';
import calculatePosition from 'ember-ui-components/utils/calculate-position';
import getMousePosition from 'ember-ui-components/utils/get-mouse-position';

/**
  @class Utilities
  @namespace Utils
*/

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
  @private
*/
export default function setPosition(element, position) {
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
}
