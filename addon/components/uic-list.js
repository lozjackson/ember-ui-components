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
    @property classNames
    @type {Array}
    @default `ul`
  */
  tagName: 'ul',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-list']`
  */
  classNames: ['uic-list']
});
