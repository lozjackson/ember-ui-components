import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

/**
  @class CloseModalHelper
  @namespace Helpers
*/
export default Helper.extend({

  /**
    ## CloseModal

    The `{{close-modal}}` helper can be used to close a modal that has been opened using the `ModalService`.

    ```
    {{close-modal}}
    ```

    The `{{close-modal}}` helper returns a function that can be used in actions:

    ```
    <div {{action (close-modal)}}>
      // ...
    </div>
    ```

    ```
    <div click={{close-modal}}>
      // ...
    </div>
    ```

    in a component:

    ```
    {{my-component action=(close-modal)}}
    ```

    @property modal
    @type {Object}
    @private
  */
  modal: service(),

  /**
    @method compute
    @private
    @return {Function}
  */
  compute(/*params, hash*/) {
    let modal = this.get('modal');
    return function (/*event*/) {
      return modal.close();
    };
  }
});
