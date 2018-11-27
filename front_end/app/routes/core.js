/************************************************
 * Application:  NOD
 * File:  app/routes/core.js
 * Author: Bard Polley
 * Creation Date: 26 Nov 2018
 * Feature: - Core route
 * Purpose: Provide container for core authenticated routes
 * Modification History:
 * - 26 Nov 2018 (bmp/bwp) Initial build
 ***********************************************/
import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
});
