/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-tabs';

const { computed: { alias }, get, observer } = Ember;

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
    @private
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
    @property tab
    @type {Object}
  */
  tab: alias('activeTab'),

  tabsChanged: observer('tabs.[]', function() {
    let { activeTab, tabs } = this.getProperties('activeTab', 'tabs');
    if (!activeTab || !tabs.includes(activeTab)) {
      this.setDefaultTab();
    }
  }),

  /**
    @method init
    @private
  */
  init() {
    this._super(...arguments);
    if (!this.get('activeTab')) {
      this.setDefaultTab();
    }
  },

  /**
    @method setDefaultTab
    @private
  */
  setDefaultTab() {
    let tabs = get(this, 'tabs');
    if (tabs && get(tabs, 'length')) {
      let tab = get(tabs, 'firstObject') || tabs[0];
      if (tab) {
        this.selectTab(tab);
      }
    }
  },

  /**
    @method selectTab
    @param {Object} tab
    @private
  */
  selectTab(tab) {
    this.set('activeTab', tab);
  }
});
