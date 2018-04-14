/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import layout from '../templates/components/uic-button';

/**
  # ButtonComponent

  ```
  {{uic-button action="actionName"}}
  ```

  @class ButtonComponent
  @namespace Components
*/
export default Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @private
    @default `button`
  */
  tagName: 'button',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-button']`
  */
  classNames: ['uic-button'],

  /**
    @property classNameBindings
    @type {Array}
    @private
    @default `['selected:selected']`
  */
  classNameBindings: ['selected:selected'],

  /**
    @property attributeBindings
    @type {Array}
    @private
    @default `['disabled']`
  */
  attributeBindings: ['disabled'],

  /**
    @property disabled
    @type {Boolean}
    @default `false`
  */
  disabled: false,

  /**
    @event click
    @private
  */
  click() {
    this.sendAction();
  }
});
