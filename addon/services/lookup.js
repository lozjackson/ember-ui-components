/**
  @module ember-ui-components
*/
import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

const alias = Ember.computed.alias;

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
    @method hasTemplate
    @param templateName
    @return {Boolean}
  */
  hasTemplate(templateName) {
    return getOwner(this).lookup('template:' + templateName) ? true : false;
  }
});
