import Ember from 'ember';

const { computed } = Ember;

/**
  ## Context Menu Params

  This is an object that is available to the `ContextMenuComponent`'s block template.

  ```
  {{#uic-context-menu as |params|}}
    // params is this object
  {{/uic-context-menu}}
  ```

  ### Event

  This is the event that triggered the context menu.

  ```
  {{#uic-context-menu as |params|}}
    {{#if params.event.altKey}}
      // ... do something when Alt key is pressed ...
    {{/if}}
  {{/uic-context-menu}}
  ```

  ### Context

  This is typically the component that opened the context menu.

  ```
  {{#each array as model}}
    {{list-item
      model=model
      contextMenu=(open-context-menu "item-menu")}}
  {{/each}}

  {{#uic-context-menu as |params|}}
    <menuitem {{action "edit" params.context}}>Edit</menuitem>
  {{/uic-context-menu}}
  ```

  In the example above, the `params.context` property is the `{{list-item}}` component in the array.
  The `edit` action will recieve the `list-item` component as the first argument.

  NOTE: There is no need to pass in the `model` as the second argument of the
  `open-context-menu` helper because the `model` is available on the `list-item`
  component.

  In this following example the `edit` action will recieve the `model` as the first argument:

  ```
  {{#each array as model}}
    {{list-item
      model=model
      contextMenu=(open-context-menu "list-item-menu")}}
  {{/each}}

  {{#uic-context-menu id="list-item-menu" as |params|}}
    <menuitem {{action "edit" params.context.model}}>Edit</menuitem>
  {{/uic-context-menu}}
  ```

  ### Model

  If the element doesn't have a component, then the `context` property will be less helpful.

  In cases like this you can pass the model as the second argument to the `open-context-menu` helper
  which will then be available to the context menu as `params.model`.

  ```
  {{#each array as model}}
    <div oncontextmenu={{open-context-menu "item-menu" model}}>{{model.name}}</div>
  {{/each}}

  {{#uic-context-menu id="item-menu" as |params|}}
    <menuitem {{action "edit" params.model}}>Edit</menuitem>
  {{/uic-context-menu}}
  ```

  @class ContextMenuParams
  @namespace Utils
*/
export default Ember.Object.extend({

  /**
    @property lookup
    @type {Object}
    @private
  */
  lookup: null,

  /**
    This is the `event` object.

    @property event
    @type {Object}
  */
  event: null,

  /**
    @property model
    @type {Object}
  */
  model: null,

  /**
    This is typically the component that opened the context-menu.

    @property context
    @type {Object}
  */
  context: computed('event', function () {
    let event = this.get('event');
    if (!event) { return null; }
    return this.getContext(event.currentTarget);
  }),

  /**
    This method finds the closest `.ember-view` walking up the dom tree from
    the target element and then returns the component for that view.

    @method getContext
    @param {Object} target
    @private
    @return {Object}
  */
  getContext(target) {
    let view = Ember.$(target).closest('.ember-view');
    if (view.length) {
      return this.get('lookup').componentById(view[0].id);
    }
  }
});
