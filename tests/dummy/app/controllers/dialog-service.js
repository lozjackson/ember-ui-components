import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
export default Controller.extend({

  dialog: service(),

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

    alert(message) {
      this.get('dialog').alert(message);
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

    applyOption(option, value) {
      this.get('dialog').alert({
        title: 'An event has happened',
        [option]: value
      });
    }
  }
});
