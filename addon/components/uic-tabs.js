import Ember from 'ember';
import layout from '../templates/components/uic-tabs';

export default Ember.Component.extend({
  layout,

  classNames: ['uic-tabs', 'tabs'],

  tabs: [],

  defaultName: 'Untitled',

  activeTab: null,

  tabsChanged: Ember.observer('tabs.[]', function() {
    if (!this.get('activeTab')) {
      this.setDefaultTab();
    }
  }),
  
  init() {
    this._super(...arguments);
    if (!this.get('activeTab')) {
      this.setDefaultTab();
    }
  },

  setDefaultTab() {
    let tab = this.get('tabs.firstObject');
    if (tab) {
      this.selectTab(tab);
    }
  },

  selectTab(tab) {
    this.set('activeTab', tab);
  }
});
