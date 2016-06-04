import Ember from 'ember';

/**
  @class OpenModalHelper
  @namespace Helpers
*/
export default Ember.Helper.extend({

  /**
    @property modal
    @type {Object}
    @private
  */
  modal: Ember.inject.service(),

  /**
    @method compute
    @param {Array} params
    @private
    @return {Function}
  */
  compute([menalId]/*, hash*/) {
    let modal = this.get('modal');
    return function (/*event*/) {
      return modal.open(menalId);
    };
  }
});
