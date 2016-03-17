import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    closeDialog() {
      this.set('openDialog', false);
    },

    openRoutedDialog() {
      this.transitionToRoute('modal-window-component.modal');
    },

    toggle(propertyName) {
      this.toggleProperty(propertyName);
    }
  }
});
