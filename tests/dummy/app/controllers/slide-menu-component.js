import Ember from 'ember';

export default Ember.Controller.extend({

  application: Ember.inject.controller(),

  menuPositions: ['left', 'right', 'top', 'bottom'],

  pushContentTypeOptions: ['push-content', 'squeeze-content']
});