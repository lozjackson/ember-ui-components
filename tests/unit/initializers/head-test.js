import $ from 'jquery';
import Application from '@ember/application';
import { run } from '@ember/runloop';
import HeadInitializer from 'dummy/initializers/head';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | head', {
  beforeEach() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  }
});

test('viewport is correctly modified', function(assert) {
  HeadInitializer.initialize(application);
  assert.equal($('head meta[name=viewport]').attr('content'), "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
});
