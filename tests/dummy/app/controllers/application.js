import Controller from '@ember/controller';
import Ember from 'ember';
import ENV from '../config/environment';
import { computed } from '@ember/object';

export default Controller.extend({

  version: computed(function() {
    if (!ENV.APP.version) { return; }
    const [version, git] = ENV.APP.version.split('+');
    if ('development' === ENV.environment) {
      Ember.Logger.debug(`${ENV.APP.name} ${version} ${git}`);
    }
    return version;
  })
});
