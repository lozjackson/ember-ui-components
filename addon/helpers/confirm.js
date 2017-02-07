import Ember from 'ember';

const { inject: { service }, typeOf, Helper } = Ember;

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
