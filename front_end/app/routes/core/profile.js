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
 ***********************************************/

import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
});
