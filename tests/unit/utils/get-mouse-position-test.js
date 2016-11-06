import Ember from 'ember';
import getMousePosition from 'dummy/utils/get-mouse-position';
import { module, test } from 'qunit';

module('Unit | Utility | get mouse position');

test('it works', function(assert) {

  let event = {
    clientX: 10,
    clientY: 20
  };

  // window.event = event;

  let result = getMousePosition(event);
  assert.deepEqual(result, Ember.Object.create({ x: 10, y: 20 }));
});

test('it works - page=true', function(assert) {

  let event = {
    clientX: 10,
    clientY: 20,
    clientX: 30,
    clientY: 40
  };

  // window.event = event;

  let result = getMousePosition(event, true);
  assert.deepEqual(result, Ember.Object.create({ x: 30, y: 40 }));
});
