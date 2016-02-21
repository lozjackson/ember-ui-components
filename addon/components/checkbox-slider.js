/**
  @module ember-ui-components
*/
import CheckBoxComponent from './check-box';

/**
  # CheckboxSlider

  ```
  {{checkbox-slider checked=checkboxValue checkboxId="checkbox-id"}}
  ```

  @class CheckboxSliderComponent
  @extends Components.CheckBoxComponent
  @namespace Components
*/
export default CheckBoxComponent.extend({

  /**
    @property classNames
    @type {Array}
    @private
    @default `['slider']`
  */
  classNames: ['slider']
});
