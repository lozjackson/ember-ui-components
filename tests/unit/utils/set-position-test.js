import EmberObject from '@ember/object';
import setPosition from 'dummy/utils/set-position';
import { module, test } from 'qunit';

module('Unit | Utility | set position');

test('it works', function(assert) {
  assert.expect(1);

  let element = {
    css: (obj) => {
      assert.deepEqual(obj, {
        left: 12,
        top: 20
      });
    }
  };

  let position = EmberObject.create({
    x: 10,
    y: 20
  });

  setPosition(element, position);
});


test('it works using window.event', function(assert) {
  assert.expect(1);
  let element = {
    css: (obj) => {
      assert.deepEqual(obj, {
        left: 12,
        top: 20
      });
    }
  };
  let event = {
    clientX: 10,
    clientY: 20
  };

  window.event = event;

  setPosition(element);
});

test('it works using window._event', function(assert) {
  assert.expect(1);
  let element = {
    css: (obj) => {
      assert.deepEqual(obj, {
        left: 12,
        top: 20
      });
    }
  };
  let event = {
    clientX: 10,
    clientY: 20
  };

  window._event = event;

  setPosition(element);
});
