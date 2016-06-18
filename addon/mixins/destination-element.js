/**
  @module ember-ui-components
*/
import Ember from 'ember';

const { alias } = Ember.computed;

/**
  @class DestinationElementMixin
  @namespace Mixins
*/
export default Ember.Mixin.create({

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
  to: alias('destinationElementId'),
});
