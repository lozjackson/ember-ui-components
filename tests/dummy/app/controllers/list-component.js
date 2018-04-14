import Controller from '@ember/controller';

const example = {

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
}

export default Controller.extend({
  builtInClassNames: example.builtInClassNames,
  array: example.array
});
