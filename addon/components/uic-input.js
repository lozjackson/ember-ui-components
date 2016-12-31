/**
  @module ember-ui-components
*/
import Ember from 'ember';

/**

  # InputComponent

  This component extends `Ember.TextField`.

  ```
  {{uic-input value=value}}
  ```

  @class InputComponent
  @namespace Components
*/
export default Ember.TextField.extend({
  classNames: ['uic-input', 'uic-form-element']
});
