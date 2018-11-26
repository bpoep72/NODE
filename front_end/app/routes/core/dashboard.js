/************************************************
 * Application:  NOD
 * File:  app/routes/dashboard.js
 * Author:
 * Creation Date: 18 Nov 2018
 * Feature: 43 -Dashboard route
 * Purpose: Route / path to dashboard
 * Modification History:
 * - 18 Nov 2018 (bwp) - Initial build
 * - 25 Nov 2018 (bmp/bwp) Relocated under core
 ***********************************************/
import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
});
