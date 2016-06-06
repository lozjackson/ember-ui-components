import Ember from 'ember';

export default Ember.Controller.extend({

  modal: Ember.inject.service(),

  actions: {

    toggle(propertyName) {
      this.toggleProperty(propertyName);
    }
  }
});
