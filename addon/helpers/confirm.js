import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { typeOf } from '@ember/utils';

export default Helper.extend({

  dialog: service(),

  compute([message, resolve, reject]) {
    let dialog = this.get('dialog');
    return function () {
      return dialog.confirm(message).then(() => {
        if (typeOf(resolve) === 'function') {
          resolve.call(this);
        }
      }, () => {
        if (typeOf(reject) === 'function') {
          reject.call(this);
        }
      });
    };
  }
});
