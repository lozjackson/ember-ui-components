import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('check-box-component');
  this.route('select-component');
  this.route('button-component');
  this.route('button-group-component');
  this.route('slide-menu-component');
  this.route('context-menu-component');
  this.route('dropdown-component');
  this.route('form-element-component');
  this.route('fieldset-component');
  this.route('input-component');
  this.route('modal-window-component', function () {
    this.route('modal');
  });
  this.route('modal-dialog-component');
  this.route('tabs-component');
  this.route('switch-component');
  this.route('dialog-service');
  this.route('modal-service');
  this.route('button-class');
  this.route('button-group-class');
  this.route('panel-class');
  this.route('form-element-class');
  this.route('fieldset-class');
});

export default Router;
