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
        };
      } else if (!isNaN(event.clientX) || !isNaN(event.clientY)) {
        position = {
          x: event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
          y: event.clientY + document.body.scrollTop + document.documentElement.scrollTop
        };
      }
    } else {
      position = {
        x: event.clientX,
        y: event.clientY
      };
    }
  }
  return Ember.Object.create(position);
}

export function calculatePosition(position, element, container) {
  return ((container - position) < element) ? container - element : position;
}
