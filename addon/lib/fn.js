/**
  @module ember-ui-components
*/
import Ember from 'ember';

/**
  @class fn
  @namespace lib
*/

/**
  ## Get Mouse Position

  If `page` is true then the mouse coordinates will be relative to the page. If
  false, then they will be relative to the client area (the window).

  @method getMousePosition
  @param {Object} event
  @param {Boolean} page
  @return {Object} An Ember.Object is returned.
*/
export function getMousePosition(event, page) {
  let position = { x: null, y: null };
  if (!event) {
    event = window.event;
  }

  if (event) {
    if (page) {
      if (!isNaN(event.pageX) || !isNaN(event.pageY)) {
        position = {
          x: event.pageX,
          y: event.pageY
        }
      } else if (!isNaN(event.clientX) || !isNaN(event.clientY)) {
        position = {
          x: event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
          y: event.clientY + document.body.scrollTop + document.documentElement.scrollTop
        }
      }
    } else {
      position = {
        x: event.clientX,
        y: event.clientY
      }
    }
  }
  return Ember.Object.create(position);
}

/**
  `element` should be a reference to an HTML element.  Either a string selector
  that can be used with jQuery, or a jQuery selection object.

  If `position` is not specified, then the current mouse position will be used.

  `position` should be an Ember.Object with `x` and `y` properties.
  Both `x` and `y` should be numbers

  @method setPosition
  @param {String|Object} element
  @param {Object} position
*/
export function setPosition(element, position) {
  if (typeof element === 'string') {
    element = getElement(element);
  }
  if (!position) {
    position = getMousePosition(window.event);
  }
  let el = getDimensions(element);
  element.css({
    'left': calculatePosition( position.get('x') + 2, el.width, window.innerWidth - 7),
    'top': calculatePosition( position.get('y'), el.height, window.innerHeight - 5)
  });
}

export function getDimensions(element) {
  if (typeof element === 'string') {
    element = getElement(element);
  }
  let el = { width: 0, height: 0 };
  if (element.length) {
    el.width = element[0].offsetWidth;
    el.height = element[0].offsetHeight;
  }
  return el;
}

export function getElement(element) {
    return Ember.$(element);
}

// export function checkOverflow(element, container) {
//   if (typeof element === 'string') {
//     element = getElement(element);
//   }
//   // if ()
//   let dimensions = getDimensions(element);
//
// }

export function calculatePosition(position, element, container) {
  return ((container - position) < element) ? container - element : position;
}
