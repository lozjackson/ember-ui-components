import Ember from 'ember';

const { inject: { service }, Helper } = Ember;

export default Helper.extend({

  dialog: service(),

  compute([message]) {
    let dialog = this.get('dialog');
    return function () {
      return dialog.alert(message);
    };
  }
});
