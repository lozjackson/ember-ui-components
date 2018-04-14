import Controller from '@ember/controller';

export default Controller.extend({

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
