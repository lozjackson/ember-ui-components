import Ember from 'ember';
import layout from '../templates/components/sub-menu';
import { getElement, getDimensions, calculatePosition } from 'ember-ui-components/lib/fn';

const run = Ember.run;

export default Ember.Component.extend({

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
    @default `li`
  */
  tagName: 'li',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['sub-menu']`
  */
  classNames: ['sub-menu'],

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
    @method didInsertMenu
    @private
  */
  didInsertMenu() {
    let element = this.$();
    let el = getDimensions(element);
    if (element) {
      element.css({
        'top': calculatePosition( element.position().top, el.height, window.innerHeight - 5)
      });
    }
  },

  /**
    @event mouseEnter
    @private
  */
  mouseEnter() {
    run.cancel(this.get('_event'));
    this.set('showMenu', true);
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
