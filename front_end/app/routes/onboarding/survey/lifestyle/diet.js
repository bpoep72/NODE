/************************************************
 * Application:  NOD
 * File:  app/routes/onboarding/survey/lifestyle/diet.js
 * Author: Bard Polley
 * Creation Date: 13 Nov 2018
 * Feature: 42 - Survey Diet
 * Purpose: Behavior for survey question healthy diet
 * Modification History:
 * - 13 Nov 2018 (bwp) - Initial build
 * - 25 Nov 2018 (bwp) - Added authentication requirement
 ***********************************************/
import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
});
