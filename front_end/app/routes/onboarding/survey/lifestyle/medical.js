/************************************************
 * Application:  NOD
 * File:  app/routes/onboarding/survey/lifestyle/medical.js
 * Author: Bard Polley
 * Creation Date: 11 Nov 2018
 * Feature: 46 -onboarding route
 * Purpose: Behavior for medical survey
 * Modification History:
 * - 11 Nov 2018 (bwp) - Initial build
 * - 12 Nov 2018 (bwp) - reorganized under lifestyle
 * - 25 Nov 2018 (bwp) - added authentication requirement
 ***********************************************/

import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
});
