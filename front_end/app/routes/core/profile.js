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
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {

  beforeModel() {
    this.controllerFor('core').set('header', 'Profile');
  },

  model() {
    let currentUser = this.get('currentUser');

    // make request for single record, where is is not known (use findRecord if id is known)
    return this.get('store').queryRecord('profile', {owner: currentUser.id});
  }
});
