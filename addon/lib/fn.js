/**
  @module ember-ui-components
*/

/**
  @class fn
  @namespace lib
*/

/**
  @method getPosition
  @param {Object} event
  @return {Object}
*/
export function getPosition(event) {
  let position = {x:null,y:null};
  if (event && event.clientX && event.clientY) {
    position = {
      x: event.clientX,
      y: event.clientY
    }
  }
  return Ember.Object.create(position);
}
