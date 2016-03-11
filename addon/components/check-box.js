/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/check-box';

const computed = Ember.computed;

/**
  # CheckBox

  ```
  {{check-box checked=checkboxValue"}}
  ```

  @class CheckBoxComponent
  @namespace Components
*/
export default Ember.Component.extend({

  /**
    @property layout
    @type {String}
    @private
  */
  layout: layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['euic-check-box']`
  */
  classNames: ['euic-check-box'],

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

    This is the `id` attribute of the checkbox element.  This is required for
    `slider` and `toggle` checkbox classes.

    When you provide the `checkboxId` attribute, a `label` element is rendered
    next to the input element.

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
    let {checkboxId, classNames} = this.getProperties('checkboxId', 'classNames');
    if (classNames && classNames.length && (classNames.indexOf('slider') !== -1 || classNames.indexOf('toggle')  !== -1 )) {
      Ember.warn(`'checkboxId' is a required attribute of the CheckBoxComponent when using the 'slider' or 'toggle' classes.  Pass it into the component like this: {{check-box checkboxId="unique-id"}}`, checkboxId, {id: 'ember-debug.required-attribute'});
    }
    return checkboxId;
  })
});
