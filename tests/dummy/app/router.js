import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('check-box-component');
  this.route('select-component');
  this.route('slide-menu-component');
  this.route('context-menu-component');
  this.route('modal-window-component', function () {
    this.route('modal');
  });
  this.route('modal-dialog-component');
  this.route('dialog-service');
  this.route('button-class');
  this.route('panel-class');
});

export default Router;
