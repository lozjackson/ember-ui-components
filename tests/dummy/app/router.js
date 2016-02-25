import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('check-box-component');
  this.route('select-box-component');
  this.route('panel-class');
});

export default Router;
