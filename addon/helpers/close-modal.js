import Ember from 'ember';

/**
  @class CloseModalHelper
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
    @private
    @return {Function}
  */
  compute(/*params, hash*/) {
    let modal = this.get('modal');
    return function (/*event*/) {
      return modal.close();
    };
  }
});
