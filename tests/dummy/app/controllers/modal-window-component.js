import Ember from 'ember';

export default Ember.Controller.extend({

  modal: Ember.inject.service(),

  actions: {

    openRoutedDialog() {
      this.transitionToRoute('modal-window-component.modal');
    },

    toggle(propertyName) {
      this.toggleProperty(propertyName);
    }
  }
});
