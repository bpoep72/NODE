import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | onboarding/survey/lifestyle/drugs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:onboarding/survey/lifestyle/drugs');
    assert.ok(route);
  });
});
