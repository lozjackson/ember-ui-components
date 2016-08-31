/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-form-element';

const { computed } = Ember;

/**


  @class FormElementComponent
  @namespace Components
*/
export default Ember.Component.extend({
  layout,

  classNames: ['uic-form-element'],

  classNameBindings: ['disabled', 'readonly'],

  /**
    @property readonly
    @type {Boolean}
  */

  /**
    @property disabled
    @type {Boolean}
  */

  /**
    @property formElementId
    @type {String}
  */

  /**
    @property _formElementId
    @type {String}
    @private
  */
  _formElementId: computed('formElementId', 'elementId', function () {
    let formElementId = this.get('formElementId');
    if (!formElementId) {
      formElementId = 'uic-form-element-' + this.get('elementId');
    }
    return formElementId;
  }),

  /**
    @property _params
    @type {Object}
    @private
  */
  _params: computed('_formElementId', function () {
    return {
      id: this.get('_formElementId')
    };
  })
});
