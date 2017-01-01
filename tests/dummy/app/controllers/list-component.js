import Ember from 'ember';

export default Ember.Controller.extend({

  builtInClassNames: [
    { name: 'default' },
    { name: 'inset-border' }
  ],

  // BEGIN-SNIPPET list-model-example
  array: [
    { name: 'foo' },
    { name: 'bar' },
    { name: 'baz' }
  ]
  // END-SNIPPET



});
