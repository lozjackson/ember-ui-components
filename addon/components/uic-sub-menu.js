/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-sub-menu';

const run = Ember.run;

/**
  @class SubMenuComponent
  @namespace Components
*/
export default Ember.Component.extend( {

  /**
    @property layout
    @type {String}
    @private
  */
  layout,

  /**
    @property tagName
    @type {String}
    @private
    @default `menuitem`
  */
  tagName: 'menuitem',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-sub-menu']`
  */
  classNames: ['uic-sub-menu'],

  /**
    @property attributeBindings
    @type {Array}
    @private
    @default `['disabled']`
  */
  attributeBindings: ['disabled'],

  /**
    @property disabled
    @type {Boolean}
    @default `false`
  */
  disabled: false,

  /**
    @property showMenu
    @type {Boolean}
    @default `false`
  */
  showMenu: false,

  /**
    @property delay
    @type {Integer}
    @default `300`
  */
  delay: 300,

  /**
    This is a reference to the scheduled `run.later` function in the mouseLeave
    event which will close the menu after the specified delay.  It is used in the
    mouseEnter event to cancel the scheduled function and prevent the menu from
    closing.

    @property _event
    @type {Object}
    @private
  */
  _event: null,

  /**
    @event mouseEnter
    @private
  */
  mouseEnter() {
    run.cancel(this.get('_event'));
    if (!this.get('disabled')) {
      this.set('showMenu', true);
    }
  },

  /**
    @event mouseLeave
    @private
  */
  mouseLeave() {
    let delay = this.get('delay');
    if (!delay) {
      this.set('showMenu', false);
    } else {
      this.set('_event', run.later(() => {
        if ( !(this.get('isDestroyed') || this.get('isDestroying')) ) {
          this.set('showMenu', false);
        }
      }, delay));
    }
  }
});
