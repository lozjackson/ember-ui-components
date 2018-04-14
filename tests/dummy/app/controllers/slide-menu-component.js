import Controller from '@ember/controller';

const params = {

  menuOpen: false,
  menuPosition: "left",
  pushContent: true,
  maskContent: true,
  showDefaultToggle: true,
  pushContentType: 'push-content',
  disableScroll: true,

  menuPositions: ['left', 'right', 'top', 'bottom'],

  pushContentTypeOptions: ['push-content', 'squeeze-content']
}

export default Controller.extend(params);
