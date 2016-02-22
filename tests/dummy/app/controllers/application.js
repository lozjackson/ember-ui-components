import Ember from 'ember';

export default Ember.Controller.extend({

  selectBoxValue: null,

  selectBoxOptions: [
    'Active',
    'Complete'
  ],

  selectBoxValue2: null,

  selectBoxOptions2: [
    {
      value: 'active-value',
      text: 'Active'
    },{
      value: 'complete-value',
      text: 'Complete'
    }
  ]
});
