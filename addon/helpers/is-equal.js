/**
  @module ember-ui-components
*/
import { helper } from '@ember/component/helper';

/**
  ## IsEqual

  JS example:

  ```
  isEqual([ 42, 42 ]); // true
  isEqual([ 42, 41 ]); // false
  ```

  Hbs example:

  ```
  {{is-equal 42 42}} // true
  ```

  @class IsEqualHelper
  @namespace Helpers
*/
export function isEqual([left, right]/*, hash*/) {
  return left === right;
}

export default helper(isEqual);
