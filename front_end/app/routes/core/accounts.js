/************************************************
 * Application:  NOD
 * File:  app/routes/core/accounts.js
 * Author: Bard Polley
 * Creation Date: 18 Nov 2018
 * Feature: 86 - Account route
 * Purpose: Behavior for account route
 * Modification History:
 * - 18 Nov 2018 (bwp) - Initial build
 * - 25 Nov 2018 (bwp) - Relocated under core
 ***********************************************/
import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';


export default Route.extend(Authenticated, {

});
