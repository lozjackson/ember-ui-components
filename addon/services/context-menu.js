/**
  @module ember-ui-components
*/
import Ember from 'ember';

/**
  ## Context Menu Service

  This service provides methods for opening and closing a context menu.

  To open a context menu, call the `open()` method passing in the `elementId` of 
  the context menu component and the `event` that triggered the context menu.

  ```
  contextMenuService.open('menu-id', event);
  ```

  NOTE: The `event` is needed for positioning the context-menu.

  Call the `close()` method to close the currently open context menu.

  ```
  contextMenuService.close();
  ```

  @class ContextMenuService
  @namespace Services
*/
export default Ember.Service.extend({

  /**
    The id of the menu.
    @property menu
    @type {String}
    @private
  */
  menu: null,

  /**
    @property contextMenuParams
    @type {Object}
    @private
  */
  contextMenuParams: null,

  /**
    @method init
    @private
  */
  init() {
    this._super(...arguments);
    this.reset();
  },

  /**
    @method initContextMenuParams
    @private
  */
  initContextMenuParams() {
    this.set('contextMenuParams', Ember.Object.create({
      event: null
    }));
  },

  /**
    @method open
    @param {String} menuId
    @param {Object} event
    @return {Boolean} `false`
  */
  open(menuId, event) {
    event = event || window.event;
    this.set('menu', null);
    Ember.run.next(() => {
      this.set('contextMenuParams.event', event);
      this.set('menu', menuId);
      Ember.$(`#${menuId}`).focus(); // set focus so that keyUp/Down events can be recieved.
    });
    return false;
  },

  /**
    @method close
  */
  close() {
    this.reset();
  },

  /**
    @method reset
    @private
  */
  reset() {
    this.set('menu', null);
    this.initContextMenuParams();
  }
});
