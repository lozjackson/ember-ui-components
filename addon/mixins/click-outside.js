/**
  @module ember-ui-components
*/
import Ember from 'ember';

/**
  # Click Outside Mixin

  This mixin attaches event listeners when the consuming component is inserted
  into the DOM and provides a method for handling clicks outside the target element.

  ```
  import Ember from 'ember';
  import ClickOutsideMixin from 'ember-ui-components/mixins/click-outside';

  export default Ember.Component.extend(ClickOutsideMixin, {

    handleClickOutside(event) {
      // handle the click event...
    }

  });
  ```

  @class ClickOutsideMixin
  @namespace Mixins
*/
export default Ember.Mixin.create({

  /**
    Override this method to handle the click outside event.

    @method handleClickOutside
  */
  handleClickOutside: Ember.K,

  /**
    ## Target Element

    This element is the target element which is used to determine if the click is
    inside or outside.

    By default this is an alias of `element`, which means that the `targetElement`
    is this component (the component that has consumed the `ClickOutsideMixin`).

    You may want to set the targetElement to something else.
    For example, the parent element:

    ```
    targetElement: Ember.computed.alias('element.parentElement')
    ```

    @property targetElement
    @type {Object}
  */
  targetElement: Ember.computed.alias('element'),

  /**
    @method _attachEventListeners
    @private
  */
  _attachEventListeners() {
    let { targetElement, elementId }  = this.getProperties('targetElement', 'elementId');
    let _window = Ember.$(window);
    let handler = (event) => {
      if (event.target !== targetElement && !Ember.$.contains( targetElement, event.target )) {
        this.handleClickOutside(event);
      }
    };
    Ember.run.later(this, () => {
      _window.on(`click.${elementId}`, handler);
      _window.on(`touchend.${elementId}`, handler);
    }, 300);
  },

  /**
    @method _removeEventListeners
    @private
  */
  _removeEventListeners() {
    let elementId = this.get('elementId');
    let _window = Ember.$(window);
    _window.off(`click.${elementId}`);
    _window.off(`touchend.${elementId}`);
  },

  /**
    @method didInsertElement
    @private
  */
  didInsertElement() {
    this._super(...arguments);
    this._attachEventListeners();
  },

  /**
    @method willDestroyElement
    @private
  */
  willDestroyElement() {
    this._super(...arguments);
    this._removeEventListeners();
  }
});
