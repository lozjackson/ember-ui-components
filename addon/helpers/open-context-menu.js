/**
  @module ember-ui-components
*/
import Ember from 'ember';

/**
  ## OpenContextMenu

  The `{{open-context-menu}}` helper can be used to open a context-menu from within templates.

  ### MenuId

  Pass the `id` of the menu to open as the first argument.

  ```
  {{open-context-menu "menu-id"}}
  ```

  The `{{open-context-menu}}` helper returns a function that can be used in actions:

  ```
  <div oncontextmenu={{open-context-menu "menu-id"}}>
    // ...
  </div>
  ```

  ```
  <div {{action (open-context-menu "menu-id") on="contextMenu"}}>
    // ...
  </div>
  ```

  in a component:

  ```
  {{my-component contextMenu=(open-context-menu "menu-id")}}
  ```

  ### Model

  Optionally, you can pass in a model or object as the second argument.  This
  object will be available as the `contextMenuParams.model` property within the
  `context-menu` component.

  ```
  <div oncontextmenu={{open-context-menu "menu-id" model}}>
    // ...
  </div>

  {{#uic-context-menu as |params|}}
    // model is available at params.model
  {{/uic-context-menu}}
  ```

  In the example above, the `model` property passed as the second argument to
  the `{{open-context-menu}}` helper is available in the `{{uic-context-menu}}`
  component as the `params.model` property.

  @class OpenContextMenuHelper
  @namespace Helpers
*/
export default Ember.Helper.extend({

  /**
    @property contextMenuService
    @type {Object}
    @private
  */
  contextMenuService: Ember.inject.service('context-menu'),

  /**
    @method compute
    @param {Array} params
    @private
    @return {Function}
  */
  compute([menuId, model]/*, hash*/) {
    let contextMenuService = this.get('contextMenuService');
    return function (event) {
      return contextMenuService.open(menuId, event, model);
    };
  }
});
