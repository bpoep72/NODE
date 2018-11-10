/************************************************
 * Application:  NOD
 * File:  app/router.js
 * Author:
 * Creation Date: 01 Nov 2018
 * Feature: Baseline
 *  22 -login route
 *  46 - onboarding route
 * Purpose: Free-flow text with gist of filename
 * Modification History:
 * - 01 Nov 2018 (bwp) - Initial build (no features)
 * - 05 Nov 2018 (bwp) - Added route for login
 * - 09 Nov 2018 (bwp) - Added route for onboarding
 * Licensing Information
 ***********************************************/

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('onboarding');
});

export default Router;
