import Ember from 'ember';
export default Ember.Controller.extend({

  dialog: Ember.inject.service(),

  result: null,

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
      this.get('dialog').openModal({
        title: 'Custom Modal',
        body: 'My custom modal'
      }, 'my-custom-modal');
    },

    clickOutsideModal(mode) {
      this.get('dialog').alert({
        title: 'An event has happened',
        clickOutsideModal: mode
      });
    },
  }
});
