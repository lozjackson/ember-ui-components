import Ember from 'ember';
import layout from '../templates/components/uic-list';

export default Ember.Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['uic-list']
});
