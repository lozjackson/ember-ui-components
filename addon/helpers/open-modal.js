import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

/**
  ## OpenModal

  The `{{open-modal}}` helper can be used to open a modal from within templates.

  ### ModalId

  Pass the `id` of the modal to open as the first argument.

  ```
  {{open-modal "modal-id"}}
  ```

  The `{{open-modal}}` helper returns a function that can be used in actions:

  ```
  <div {{action (open-modal "modal-id")}}>
    // ...
  </div>
  ```

  ```
  <div click={{open-modal "modal-id"}}>
    // ...
  </div>
  ```

  in a component:

  ```
  {{my-component action=(open-modal "modal-id")}}
  ```

  ### Model

  Optionally, you can pass in a model or object as the second argument.  This
  object will be available as the `modalParams.model` property within the
  `modal-window` component.

  ```
  <div {{action (open-modal "modal-id" model)}}>
    // ...
  </div>

  {{#uic-modal-window as |params|}}
    // model is available at params.model
  {{/uic-modal-window}}
  ```

  In the example above, the `model` property passed as the second argument to
  the `{{open-modal}}` helper is available in the `{{uic-modal-window}}`
  component as the `params.model` property.

  @class OpenModalHelper
  @namespace Helpers
*/
export default Helper.extend({

  /**
    @property modal
    @type {Object}
    @private
  */
  modal: service(),

  /**
    @method compute
    @param {Array} params
    @private
    @return {Function}
  */
  compute([modalId, model]/*, hash*/) {
    let modal = this.get('modal');
    return function (/*event*/) {
      return modal.open(modalId, model);
    };
  }
});
