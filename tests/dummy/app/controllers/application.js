import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({

  menuOpen: false,
  menuPosition: "left",
  pushContent: true,
  maskContent: true,
  showDefaultToggle: true,
  pushContentType: 'push-content',
  disableScroll: true,

  version: Ember.computed(function() {
    const [version, git] = ENV.APP.version.split('+');
    if ('development' === ENV.environment) {
      Ember.Logger.debug(`${ENV.APP.name} v${version} ${git}`);
    }
    return version;
  })
});
