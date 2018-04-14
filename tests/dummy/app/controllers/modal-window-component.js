import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({

  modal: service(),

  // BEGIN-SNIPPET array-of-items
  items: ['Foo', 'Bar', 'Baz'],
  // END-SNIPPET

  // BEGIN-SNIPPET display-modal
  // controller/component
  displayModal: false,

  actions: {

    toggleModal() {
      this.toggleProperty('displayModal');
    }
  }
  // END-SNIPPET
});
