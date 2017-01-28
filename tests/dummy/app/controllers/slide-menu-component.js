import Ember from 'ember';

export default Ember.Controller.extend({

  menuOpen: false,
  menuPosition: "left",
  pushContent: true,
  maskContent: true,
  showDefaultToggle: true,
  pushContentType: 'push-content',
  disableScroll: true,

  menuPositions: ['left', 'right', 'top', 'bottom'],

  pushContentTypeOptions: ['push-content', 'squeeze-content']
});
