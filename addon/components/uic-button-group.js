/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import layout from '../templates/components/uic-button-group';

/**
  # ButtonGroupComponent

  ```
  {{#uic-button-group}}
    // buttons...
  {{/uic-button-group}}
  ```

  @class ButtonGroupComponent
  @namespace Components
*/
export default Component.extend({
  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-button-group']`
  */
  classNames: ['uic-button-group']
});
