/**
  @module ember-ui-components
*/
import Ember from 'ember';

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

export default Ember.Helper.helper(isEqual);
