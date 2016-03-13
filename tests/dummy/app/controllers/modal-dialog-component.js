import Ember from 'ember';

export default Ember.Controller.extend({

  dialog: Ember.inject.service(),

  result: null,

  openDialog: false,

  actions: {
    openConfirm() {
      this.get('dialog').confirm({
        title: 'Are you sure?',
        body: 'Do you really want to do this?'
      }).then(() => {
        this.set('result', 'Confirmed');
      }, () => {
        this.set('result', 'Canceled');
      });
    },

    openAlert() {
      this.get('dialog').alert({
        title: 'An event has happened',
        body: 'You clicked a button!'
      });
    },

    openDialog() {
      // this.transitionToRoute('modal-dialog-component.modal');
      this.set('openDialog', true);
    },

    closeDialog() {
      this.set('openDialog', false);
    },

    openRoutedDialog() {
      this.transitionToRoute('modal-dialog-component.modal');
    }
  }
});
