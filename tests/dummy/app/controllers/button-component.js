import Ember from 'ember';

export default Ember.Controller.extend({

  dialog: Ember.inject.service(),

  actions: {
    doSomething() {
      this.get('dialog').alert({
        title:'You clicked a button!',
        clickOutsideModal: false
      });
    }
  }
});
