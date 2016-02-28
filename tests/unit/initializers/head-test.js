import Ember from 'ember';
import HeadInitializer from 'dummy/initializers/head';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | head', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

test('viewport is correctly modified', function(assert) {
  HeadInitializer.initialize(application);
  assert.equal(Ember.$('head meta[name=viewport]').attr('content'), "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
});
