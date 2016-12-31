import Ember from 'ember';

export default Ember.Controller.extend({

  // BEGIN-SNIPPET tab-names
  tabs: [
    { tabName: 'First Tab' },
    { tabName: 'Second Tab' }
  ],
  // END-SNIPPET

  // BEGIN-SNIPPET array-of-pojos
  tabObjects: [
    { tabName: 'Tab 1', someData: 'Content for tab 1...' },
    { tabName: 'Tab 2', someData: 'Some other content for tab 2' }
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
  ]
  // END-SNIPPET


});
