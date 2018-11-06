/************************************************
 * Application:  NOD
 * File:  tests/unit/routes/login-test.js
 * Author:  Bard Polley
 * Creation Date: 05 Nov 2018
 * Feature: Baseline
 *  22 -login route
 * Purpose: Testing required for login route functionality
 * Modification History:
 * - 05 Nov 2018 (bwp) - Initial build
 * Licensing Information
 ***********************************************/

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | login', function(hooks) {
  setupTest(hooks);

//ISSUE=22 - Login route testing

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:login');
    assert.ok(route);
  });
});
