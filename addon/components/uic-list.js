/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-list';

/**
  ## List Component

  ```hbs
  {{uic-list model=array}}
  ```

  ```hbs
  {{#uic-list model=array as |item|}}
    ...
  {{/uic-list}}
  ```

  @class ListComponent
  @namespace Components
*/
export default Ember.Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @default `ul`
  */
  tagName: 'ul',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-list']`
  */
  classNames: ['uic-list'],

  /**
    You can provide a component to be used for each list item by setting the
  `listItemComponent` attribute.

    @property listItemComponent
    @type {String}
  */

  /**
    You can provide an action name to the `selectItem` attribute.  This action will be
    called when a list item is clicked with the list-item as the first argument.

    @property selectItem
    @type {String}
  */

  /**
    @method select
    @param {*} item
    @private
  */
  select() {
    this.sendAction('selectItem', ...arguments);
  }
});
