import Ember from 'ember';

export default Ember.Controller.extend({

  contextMenuService: Ember.inject.service('context-menu'),
  
  actions: {
    newItem() {
      // Ember.Logger.log('newItem');
    },
    edit() {
      // Ember.Logger.log('edit');
    },
    delete() {
      // Ember.Logger.log('delete');
    },
    doSomething() {
      Ember.Logger.log('doSomething');
    },
    doSomethingElse() {
      Ember.Logger.log('doSomethingElse');
    },

    // contextmenu(id) {
    //   Ember.Logger.log('contextmenu', id);
    // }
  }
});
