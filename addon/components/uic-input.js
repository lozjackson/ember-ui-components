/**
  @module ember-ui-components
*/
import TextField from '@ember/component/text-field';

/**

  # InputComponent

  This component extends `Ember.TextField`.

  ```
  {{uic-input value=value}}
  ```

  @class InputComponent
  @namespace Components
*/
export default TextField.extend({
  classNames: ['uic-input', 'uic-form-element']
});
