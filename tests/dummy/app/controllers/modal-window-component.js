import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

const example = {
  // BEGIN-SNIPPET array-of-items
  items: ['Foo', 'Bar', 'Baz'],
  // END-SNIPPET
}
export default Controller.extend({

  modal: service(),

  items: example.items,

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
