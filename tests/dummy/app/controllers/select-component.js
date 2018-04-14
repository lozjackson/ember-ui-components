import Controller from '@ember/controller';

export default Controller.extend({

// BEGIN-SNIPPET array-of-strings
selectedString: null,

arrayOfStrings: [
  'Active',
  'Complete'
],
// END-SNIPPET



// BEGIN-SNIPPET array-of-objects
selectedObject: null,

arrayOfObjects: [
  {
    value: 'active-value',
    text: 'Active'
  },{
    value: 'complete-value',
    text: 'Complete'
  }
]
// END-SNIPPET
});
