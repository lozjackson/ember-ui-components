import Controller from '@ember/controller';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Controller.extend({

  contextMenuService: service('context-menu'),

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
