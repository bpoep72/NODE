/************************************************
 * Application:  NOD
 * File:  app/routes/onboarding.js
 * Author: Bard Polley
 * Creation Date: 11 Nov 2018
 * Feature: 46 -login route
 * Purpose: Login route / pash for application
 * Modification History:
 * - 11 Nov 2018 (bwp) - Initial build
 * - 17 Nov 2018 (aib) - Added gatekeeper protection to onboarding route
 * - 26 Nov 2018 (bwp) - authentication for all subordinate routes
 ***********************************************/
import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

 export default Route.extend (Authenticated, {

});
