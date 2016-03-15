/**
  @module ember-ui-components
*/
import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

const computed = Ember.computed;
const alias = computed.alias;

/**
  @class LookupService
  @namespace Services
*/
export default Ember.Service.extend({

  /**
    Alias of `application.currentPath`
    @property currentPath
    @type {String}
  */
  currentPath: alias('application.currentPath'),

  /**
    Alias of `application.currentRouteName`
    @property currentRouteName
    @type {String}
  */
  currentRouteName: alias('application.currentRouteName'),

  /**
    @property parentRouteName
    @type {String}
  */
  parentRouteName: computed('currentRouteName', function () {
    let currentRouteName = this.get('currentRouteName');
    if (typeof currentRouteName === 'string') {
      let currentRoute = currentRouteName.split('.');
      currentRoute.pop();
      if (currentRoute.length) {
        return currentRoute.join('.');
      }
    }
    return 'index';
  }),

  /**
    @method hasTemplate
    @param templateName
    @return {Boolean}
  */
  hasTemplate(templateName) {
    return getOwner(this).lookup('template:' + templateName) ? true : false;
  }
});
