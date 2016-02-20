/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/checkbox-slider';

const computed = Ember.computed;

/**
  # CheckboxSlider

  ```
  {{checkbox-slider checked=checkboxValue checkboxId="checkbox-id"}}
  ```

  @class CheckboxSliderComponent
  @namespace Components
*/
export default Ember.Component.extend({
  layout: layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['checkbox-slider']`
  */
  classNames: ['checkbox-slider'],

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
