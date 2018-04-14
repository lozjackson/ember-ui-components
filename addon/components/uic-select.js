/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import layout from '../templates/components/uic-select';

/**
  # SelectComponent

  Basic select element

  ```
  {{uic-select
    selected=selectBoxValue
    options=selectBoxOptions}}
  ```

  The above will produce the same result as manually crafting a select element like below.
  ```
  <select onchange={{action (mut selectBoxValue) value="target.value"}}>
    {{#each selectBoxOptions as |option|}}
      <option value={{option}} selected={{is-equal selectBoxValue option}}>
        {{option}}
      </option>
    {{/each}}
  </select>
  ```

  @class SelectComponent
  @namespace Components
*/
export default Component.extend({

  /**
    @property layout
    @type {String}
    @private
  */
  layout: layout,

  /**
    @property tagName
    @type {String}
    @private
    @default `select`
  */
  tagName: 'select',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-select', 'uic-form-element']`
  */
  classNames: ['uic-select', 'uic-form-element'],

  /**
    @property attributeBindings
    @type {Array}
    @private
    @default `['disabled']`
  */
  attributeBindings: ['disabled'],

  /**
    ## Selected

    The selected value.

    @property selected
    @type {String}
  */
  selected: null,

  /**
    ## Options

    This can be an array of strings

    ```
    ['Active', 'Complete']
    ```

    ...or can be an array of objects.  The objects should have a `value` and a
    `text` property.

    ```
    {
      value: 'active-value',
      text: 'Active'
    },
    {
      value: 'complete-value',
      text: 'Complete'
    }
    ```

    @property options
    @type {Array}
  */
  options: [],

  /**
    Set the `selected` value when the element changes.

    @event change
  */
  change(evt) {
    this.set('selected', evt.target.value);
  }
});
