import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | 1', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:1');
    assert.ok(controller);
  });
});
