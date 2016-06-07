import Ember from 'ember';

export default Ember.Controller.extend({

  modal: Ember.inject.service(),

  // BEGIN-SNIPPET array-of-items
  items: ['Foo', 'Bar', 'Baz'],
  // END-SNIPPET

  // BEGIN-SNIPPET display-modal
  // controller/component
  displayModal: false,

  actions: {

    toggleModal() {
      this.toggleProperty('displayModal');
    }
  }
  // END-SNIPPET
});
