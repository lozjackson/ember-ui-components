/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-tabs';

const { computed, get, on } = Ember;
const { alias } = computed;

/**
  @class TabsComponent
  @namespace Components
*/
export default Ember.Component.extend({
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
  tabs: [],

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
    this.set('activeTab', tab);
  },

  _confirmActiveTab() {
    let { activeTab, tabs } = this.getProperties('activeTab', 'tabs');
    return activeTab && tabs.includes(activeTab);
  },

  _initActiveTab: on('didRender', function () {
    if (!this._confirmActiveTab()) {
      this.setActiveTab(this.getDefaultTab());
    }
  })
});
