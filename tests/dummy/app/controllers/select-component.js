import Controller from '@ember/controller';

const example = {
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
}

export default Controller.extend({
  selectedString: example.selectedString,
  arrayOfStrings: example.arrayOfStrings,
  selectedObject: example.selectedObject,
  arrayOfObjects: example.arrayOfObjects
});
