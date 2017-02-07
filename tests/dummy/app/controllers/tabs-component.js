import Ember from 'ember';

let n = 0;

export default Ember.Controller.extend({

  // BEGIN-SNIPPET tab-names
  tabs: [
    { tabName: 'First Tab' },
    { tabName: 'Second Tab' }
  ],
  // END-SNIPPET

  // BEGIN-SNIPPET array-of-components
  tabComponents: [
    { tabName: 'Tab 1', tabComponent: 'my-first-tab' },
    { tabName: 'Tab 2', tabComponent: 'my-second-tab' }
  ],
  // END-SNIPPET

  // BEGIN-SNIPPET array-of-templates
  tabTemplates: [
    { tabName: 'Tab 1', tabTemplate: 'my-first-tab' },
    { tabName: 'Tab 2', tabTemplate: 'my-second-tab' }
  ],
  // END-SNIPPET

  tabObjects: Ember.A([]),

  addTab() {
    this.get('tabObjects').pushObject({ tabName: `Tab ${ ++n }`, someData: `... some data for tab ${ n } ...` });
  },

  removeTab() {
    this.get('tabObjects').removeObject(this.get('tabObjects.firstObject'));
  }
});
