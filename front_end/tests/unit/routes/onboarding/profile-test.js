import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | onboarding/profile', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:onboarding/profile');
    assert.ok(route);
  });
});
