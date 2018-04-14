/**
  @module ember-ui-components
*/
import ContextMenuParams from 'ember-ui-components/utils/context-menu-params';
import Service, { inject as service } from '@ember/service';
import { bool } from '@ember/object/computed';
import { next } from '@ember/runloop';

/**
  ## Context Menu Service

  This service provides methods for opening and closing a context menu.

  ### Open

  To open a context menu, call the `open()` method passing in the `elementId` of
  the context menu component and the `event` that triggered the context menu.

  ```
  contextMenuService.open('menu-id', event);
  ```

  NOTE: The `event` is needed for positioning the context-menu.

  You can also pass in a `model` object as the third argument to the `open()` method.

  ```
  contextMenuService.open('menu-id', event, model);
  ```

  The `model` will then be available to the context-menu as the `contextMenuParams.model` property.

  ### Close

  Call the `close()` method to close the currently open context menu.

  ```
  contextMenuService.close();
  ```

  ### Toggle

  Call the `toggle()` method to toggle the `open()` and `close()` methods.  Pass
  in the same arguments as you would the `open()` method.

  ```
  contextMenuService.toggle('menu-id', event, model);
  ```

  @class ContextMenuService
  @namespace Services
*/
export default Service.extend({

  /**
    @property lookup
    @type {Object}
    @private
  */
  lookup: service(),

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
    @property menuIsOpen
    @type {Boolean}
    @private
    @readonly
  */
  menuIsOpen: bool('menu'),

  /**
    @method init
    @private
  */
  init() {
    this._super(...arguments);
    this.initContextMenuParams();
  },

  /**
    @method initContextMenuParams
    @private
  */
  initContextMenuParams() {
    this.set('contextMenuParams', ContextMenuParams.create({
      lookup: this.get('lookup'),
      event: null,
      model: null
    }));
  },

  /**
    @method open
    @param {String} menuId
    @param {Object} event
    @param {Object} model
    @return {Boolean} `false`
  */
  open(menuId, event, model) {
    event = event || window.event;
    this.set('menu', null);
    next(() => {
      this.set('contextMenuParams.event', event);
      this.set('contextMenuParams.model', model);
      this.set('menu', menuId);
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
    ## Toggle

    Toggle the `open` or `close` methods.  The `toggle` method accepts the same
    arguments as the `open` method.

    @method toggle
    @param {String} menuId
    @param {Object} event
    @param {Object} model
    @return {Boolean}
  */
  toggle() {
    return this.get('menuIsOpen') ? this.close() : this.open(...arguments);
  },

  /**
    @method reset
    @private
  */
  reset() {
    this.set('menu', null);
    this.set('contextMenuParams.event', null);
    this.set('contextMenuParams.model', null);
  }
});
