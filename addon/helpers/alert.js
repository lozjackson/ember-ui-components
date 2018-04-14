import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({

  dialog: service(),

  compute([message]) {
    let dialog = this.get('dialog');
    return function () {
      return dialog.alert(message);
    };
  }
});
