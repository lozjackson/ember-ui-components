/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import layout from '../templates/components/uic-fieldset';

/**

  # FieldsetComponent

  ```
  {{#uic-fieldset}}

    ... form elements ...

  {/#uic-fieldset}}
  ```

  @class FieldsetComponent
  @namespace Components
*/
export default Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @default `fieldset`
    @private
  */
  tagName: 'fieldset',

  /**
    @property classNames
    @type {Array}
    @default `['uic-fieldset']`
    @private
  */
  classNames: ['uic-fieldset']
});
