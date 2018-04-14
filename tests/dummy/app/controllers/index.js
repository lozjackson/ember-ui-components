import { alias } from '@ember/object/computed';
import Controller, { inject as controller } from '@ember/controller';

export default Controller.extend({
  application: controller(),
  version: alias('application.version'),
  checked: true,
  ok() {},
  cancel() {}
});
