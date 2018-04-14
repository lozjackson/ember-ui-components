/**
  @module ember-ui-components
*/
import $ from 'jquery';

/**
  @class Utilities
  @namespace Utils
*/

/**
  @method getDimensions
  @param {String|Object} element
  @private
  @return {Object}
*/
export default function getDimensions(element) {
  if (typeof element === 'string') {
    element = $(element);
  }
  let el = { width: 0, height: 0 };
  if (element && element.length) {
    el.width = element[0].offsetWidth;
    el.height = element[0].offsetHeight;
  }
  return el;
}
