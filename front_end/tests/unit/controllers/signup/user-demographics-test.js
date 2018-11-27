import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | signup/user-demographics', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:signup/user-demographics');
    assert.ok(controller);
  });
});
