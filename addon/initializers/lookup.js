export function initialize(/* application */) {
  let application = arguments[1] || arguments[0];
  application.inject('service:lookup', 'applicationRoute', 'route:application');
  application.inject('service:lookup', 'application', 'controller:application');
}

export default {
  name: 'lookup',
  initialize
};
