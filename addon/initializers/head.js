import Ember from 'ember';

export function initialize() {
  Ember.$('head meta[name=viewport]').attr('content', "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
}

export default {
  name: 'head',
  initialize
};
