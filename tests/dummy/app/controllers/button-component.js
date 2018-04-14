import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  dialog: service(),

  actions: {
    doSomething() {
      this.get('dialog').alert({
        title:'You clicked a button!',
        clickOutsideModal: false
      });
    }
  }
});
