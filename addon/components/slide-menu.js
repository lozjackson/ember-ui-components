import Ember from 'ember';
import layout from '../templates/components/slide-menu';

const computed = Ember.computed;
const alias = computed.alias;

let count = 0;

export default Ember.Component.extend({

  /**
    @property layout
    @type {String}
    @private
  */
  layout: layout,

  /**
    @property classNames
    @type {Array}
    @private
    @default `['slide-menu']`
  */
  classNames: ['slide-menu'],

  /**
    @property classNameBindings
    @type {Array}
    @private
    @default `['menuPosition']`
  */
  classNameBindings: ['menuPosition'],

  /**
    @property menuPosition
    @type {String}
    @default `left`
  */
  menuPosition: 'left',

  /**
    @property menuOpen
    @type {Boolean}
    @default `false`
  */
  menuOpen: false,

  /**
    @property pushContent
    @type {Boolean}
    @default `false`
  */
  pushContent: false,

  /**
    @property maskContent
    @type {Boolean}
    @default `true`
  */
  maskContent: true,

  /**
    @property showDefaultToggle
    @type {Boolean}
    @default `true`
  */
  showDefaultToggle: true,

  /**
    @property menuTemplate
    @type {String}
  */
  menuTemplate: null,

  /**
    @property menuTemplates
    @type {Array} Array of Strings
    @private
  */
  menuTemplates: [],

  /**
    Alias of `menuOpen`

    @property maskIsActive
    @type {Boolean}
    @private
  */
  maskIsActive: alias('menuOpen'),

  /**
    Computed Property

    @property menuButtonId
    @type {String}
    @private
  */
  menuButtonId: computed(function () {
    return `slide-menu-button-${++count}`;
  }),

  /**
    @event menuOpenChanged
    @private
  */
  menuOpenChanged: Ember.observer('menuOpen', function() {
    if (this.get('menuOpen')) {
      Ember.$('body').addClass('menu-is-open');
    } else {
      Ember.$('body').removeClass('menu-is-open');
    }
  }),

  /**
    @method _closeMenu
    @private
  */
  _closeMenu() {
    this.set('menuOpen', false);
  },

  actions: {

    /**
      ACTION
      @method closeMenu
    */
    closeMenu() {
      this._closeMenu();
    }
  }
});
