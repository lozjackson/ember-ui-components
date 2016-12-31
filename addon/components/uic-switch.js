/**
  @module ember-ui-components
*/
import Ember from 'ember';
import ButtonComponent from 'ember-ui-components/components/uic-button';
import layout from '../templates/components/uic-switch';

const { computed } = Ember;
const { alias } = computed;

/**
  ## SwitchComponent

  ### Description
  The `{{uic-switch}}` component can be used to render a button with switch-like
  behaviour.  When the button is clicked the `property` will be set to the `value`
  assigned to the switch.

  ```hbs
  {{uic-switch label="Bar" property=foo value="bar"}}
  {{uic-switch label="Baz" property=foo value="baz"}}
  ```
  ### Switch Groups

  The `SwitchComponent` works well with the `ButtonGroupComponent`.

  ```hbs
  {{#uic-button-group}}
    {{uic-switch label="Foo" property=prop value="foo"}}
    {{uic-switch label="Bar" property=prop value="bar"}}
    {{uic-switch label="Baz" property=prop value="baz"}}
  {{/uic-button-group}}
  ```

  ### Properties

  * label
    The `label` attribute of the `SwitchComponent` will be used as the display
    name of the button element.

  * property
    Set the `property` attribute of the `SwitchComponent` to the property that
    you want to modify.

  * value
    Set the `value` attribute of the `SwitchComponent` to the value that the `property`
    should be set to when this switch is clicked.

  @class SwitchComponent
  @extends Components.ButtonComponent
  @namespace Components
*/
export default ButtonComponent.extend({
  layout,

  /**
    The property to set.

    @property targetProperty
    @type {*}
    @private
  */
  targetProperty: alias('property'),

  /**
    The property to set.

    @property property
    @type {*}
  */
  property: null,

  /**
    The value to set.

    @property value
    @type {*}
  */
  value: null,

  /**
    The label for the switch element.

    @property label
    @type {String}
  */
  label: null,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-switch']`
  */
  classNames: ['uic-switch'],

  /**
    @property selected
    @type {Boolean}
    @private
  */
  selected: computed('targetProperty', 'value', function () {
    return this.get('targetProperty') === this.get('value');
  }),

  /**
    @method click
    @private
  */
  click() {
    this.set('targetProperty', this.get('value'));
  }
});
