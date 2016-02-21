import Ember from 'ember';

export default Ember.Controller.extend({

  checkboxSliderValue1: true,

  checkboxSliderValue2: false,

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
