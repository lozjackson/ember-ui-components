/**
  @module ember-ui-components
*/
import Ember from 'ember';

/**
  ## OpenContextMenu

  ```
  {{open-context-menu "menu-name"}}
  ```

  ```
  <div oncontextmenu={{open-context-menu "menu-name"}}>
    // ...
  </div>
  ```

  ```
  <div {{action (open-context-menu "menu-name") on="contextMenu"}}>
    // ...
  </div>
  ```

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
  compute(params/*, hash*/) {
    let contextMenuService = this.get('contextMenuService');
    let menuId = params[0];
    return function (event) {
      return contextMenuService.open(menuId, event);
    };
  }
});
