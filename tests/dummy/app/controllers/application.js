import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({

  version: Ember.computed(function() {
    const [version, git] = ENV.APP.version.split('+');
    if ('development' === ENV.environment) {
      Ember.Logger.debug(`${ENV.APP.name} ${version} ${git}`);
    }
    return version;
  })
});
