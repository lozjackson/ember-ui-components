import Ember from 'ember';

export default Ember.Controller.extend({

// BEGIN-SNIPPET array-of-pojos
tabs: Ember.A([
  { name: 'Tab 1', data: 'Tab 1 content' },
  { name: 'Tab 2', data: 'Tab 2 content' }
])
// END-SNIPPET


});
