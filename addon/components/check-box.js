/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/check-box';

const computed = Ember.computed;

/**
  # CheckBox

  ```
  {{check-box checked=checkboxValue checkboxId="checkbox-id"}}
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
    @default `['checkbox-slider']`
  */
  classNames: ['check-box'],

  /**
    @property checked
    @type {Boolean}
    @default `false`
  */
  checked: false,

  /**
    ## Checkbox Id

    This is the `id` attribute of the checkbox element.  This is required.

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
  _checkboxId: computed('checkboxId', function () {
    let id = this.get('checkboxId');
    Ember.warn(`'checkboxId' is a required attribute of the CheckboxSliderComponent.  Pass it into the component like this: {{checkbox-slider checkboxId="unique-id"}}`, id, {id: 'ember-debug.required-attribute'});
    return id;
  })
});
