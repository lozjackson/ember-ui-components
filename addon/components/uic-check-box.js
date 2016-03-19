/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-check-box';

const computed = Ember.computed;

/**
  # CheckBoxComponent

  ```
  {{uic-check-box checked=checkboxValue}}
  ```

  @class CheckBoxComponent
  @namespace Components
*/
export default Ember.Component.extend({

  layout: layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-check-box']`
  */
  classNames: ['uic-check-box'],

  /**
    @property classNameBindins
    @type {Array}
    @private
    @default `['disabled:disabled']`
  */
  classNameBindings: ['disabled:disabled'],

  /**
    @property checked
    @type {Boolean}
    @default `false`
  */
  checked: false,

  /**
    @property disabled
    @type {Boolean}
  */
  disabled: false,

  /**
    ## Checkbox Id

    This is the `id` attribute of the checkbox element.

    @property checkboxId
    @type {String}
    @required
  */
  checkboxId: null,

  /**
    @property _checkboxId
    @type {String}
    @private
  */
  _checkboxId: computed('checkboxId', 'classNames.[]', function () {
    let checkboxId = this.get('checkboxId');
    if (!checkboxId) {
      checkboxId = 'uic-check-box-' + this.get('elementId');
    }
    return checkboxId;
  })
});
