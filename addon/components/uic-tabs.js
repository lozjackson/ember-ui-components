/**
  @module ember-ui-components
*/
import Component from '@ember/component';
import layout from '../templates/components/uic-tabs';
import { get } from '@ember/object';
import { next } from '@ember/runloop';
import { alias } from '@ember/object/computed';

/**
  @class TabsComponent
  @namespace Components
*/
export default Component.extend({
  layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-tabs', 'tabs']`
  */
  classNames: ['uic-tabs', 'tabs'],

  /**
    ## Tabs

    Provide an array of tab objects, one for each tab.  The tab objects can be
    `Ember.Object`s, `DS.Model`s, or POJOs.

    Each tab object should have a `tabName` property.

    ```
    tabs: [
      { tabName: 'First Tab', tabTemplate: 'my-first-tab' },
      { tabName: 'Second Tab', tabTemplate: 'my-second-tab' }
    ]
    ```

    ```
    {{uic-tabs tabs=tabs}}
    ```

    @property tabs
    @type {Array}
  */

  /**
    ## Default Tab Name

    If the tab objects don't provide a `tabName` property then `defaultTabName`
    will be used for the tab names.

    @property defaultTabName
    @type {String}
    @default `Untitled`
  */
  defaultTabName: 'Untitled',

  /**
    @property activeTab
    @type {Object}
  */
  activeTab: null,

  /**
    ## Render All Tabs
    If this property is set to `true` then all tabs will be rendered at the same
    time.  The inactive tabs will be hidden using CSS.

    If `false` then only the active tab will be rendered.


    @property renderAllTabs
    @type {Boolean}
    @default `false`
  */
  renderAllTabs: false,

  /**
    Computed property.
    @property tab
    @type {Object}
  */
  tab: alias('activeTab'),

  /**
    Returns the default tab.  The first tab in the list, or `undefined`
    if there are no tabs

    @method getDefaultTab
    @return {Object}
    @private
  */
  getDefaultTab() {
    let tabs = get(this, 'tabs');
    if (tabs && get(tabs, 'length')) {
      return get(tabs, 'firstObject') || tabs[0];
    }
  },

  /**
    @method setActiveTab
    @param {Object} tab
  */
  setActiveTab(tab) {
    if (this.isDestroyed || this.isDestroying) { return; }
    this.set('activeTab', tab);
  },

  /**
    @method _confirmActiveTab
    @private
  */
  _confirmActiveTab() {
    let { activeTab, tabs } = this.getProperties('activeTab', 'tabs');
    return activeTab && tabs.indexOf(activeTab) !== -1;
  },

  /**
    @method _initActiveTab
    @private
  */
  _initActiveTab() {
    if (!this._confirmActiveTab()) {
      next(() => this.setActiveTab(this.getDefaultTab()));
    }
  },

  didRender() {
    this._initActiveTab();
  }
});
