import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({

  dialog: service(),

  result: null,

  doSomething() {
    this.set('result', 'Confirmed');
  },
  cancelSomething() {
    this.set('result', 'Cancelled');
  },

  openBasicAlert() {
    this.get('dialog').alert("Your message!");
  },

  openAlert() {
    this.get('dialog').alert({
      title: 'An event has happened',
      body: 'You clicked a button!'
    });
  },

  openConfirm() {
    this.get('dialog').confirm({
      title: 'Are you sure?',
      body: 'Do you really want to do this?'
    }).then(() => {
      this.set('result', 'Confirmed');
    }, () => {
      this.set('result', 'Cancelled');
    });
  },

  openDialog() {
    this.get('dialog').openModal({
      title: 'Custom Modal',
      body: 'My custom modal'
    }, 'my-custom-modal');
  }
});
