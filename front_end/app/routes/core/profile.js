/************************************************
 * Application:  NOD
 * File:  app/routes/core/profile.js
 * Author: Bard Polley
 * Creation Date: 18 Nov 2018
 * Feature: 86 - Profile route
 * Purpose: Behavior for Profile route
 * Modification History:
 * - 18 Nov 2018 (bwp) - Initial build
 * - 25 Nov 2018 (bwp) - relocated to core route
 * - 26 Nov 2018 (bwp) - Delegated authentication to core route
 ***********************************************/

import Route from '@ember/routing/route';

export default Route.extend( {
  model() {
    this.controllerFor('core').set('header', 'Profile');
    let currentProfile = this.get ('currentUser');
  }
});
