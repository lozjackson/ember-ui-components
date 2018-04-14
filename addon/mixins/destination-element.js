/**
  @module ember-ui-components
*/
import Mixin from '@ember/object/mixin';
import { alias } from '@ember/object/computed';

/**
  @class DestinationElementMixin
  @namespace Mixins
*/
export default Mixin.create({

  /**
    @property destinationElementId
    @type {String}
    @private
  */
  destinationElementId: null,

  /**
    @property to
    @type {String}
  */
  to: alias('destinationElementId')
});
