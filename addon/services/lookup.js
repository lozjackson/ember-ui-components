/**
  @module ember-ui-components
*/
import Service from '@ember/service';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';
const { alias } = computed;

/**
  @class LookupService
  @namespace Services
*/
export default Service.extend({

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
    @method componentById
    @param {String|Object} id
    @return {Object}
  */
  componentById(id) {
    if (id instanceof HTMLElement) {
      id = id.id;
    }
    return getOwner(this).lookup('-view-registry:main')[id];
  },

  /**
    @method hasTemplate
    @param templateName
    @return {Boolean}
  */
  hasTemplate(templateName) {
    return getOwner(this).lookup('template:' + templateName) ? true : false;
  }
});
