import Ember from 'ember';

const { computed: { alias }, inject: { controller } } = Ember;

export default Ember.Controller.extend({
  application: controller(),
  version: alias('application.version'),
  checked: true,
  ok() {},
  cancel() {}
});
