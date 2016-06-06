import Ember from 'ember';

export default Ember.Controller.extend({

  modal: Ember.inject.service(),

  // BEGIN-SNIPPET array-of-items
  items: ['Foo', 'Bar', 'Baz'],
  // END-SNIPPET

  actions: {

    toggle(propertyName) {
      this.toggleProperty(propertyName);
    }
  }
});
