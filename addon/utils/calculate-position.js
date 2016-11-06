/**
  @module ember-ui-components
*/

/**
  @class Utilities
  @namespace Utils
*/

/**
  @method calculatePosition
  @param {Number} position
  @param {Number} element
  @param {Number} container
  @private
  @return {Number}
*/
export default function calculatePosition(position, element, container) {
  return ((container - position) < element) ? container - element : position;
}
