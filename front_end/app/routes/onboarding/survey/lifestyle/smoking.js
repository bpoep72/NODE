/************************************************
 * Application:  NOD
 * File:  app/routes/onboarding/survey/lifestyle/smoking.js
 * Author: Bard Polley
 * Creation Date: 12 Nov 2018
 * Feature: 38 -Survey Smoking
 * Purpose: Survey Question Behavior for Smoking
 * Modification History:
 * - 12 Nov 2018 (bwp) - Initial build
 * - 25 Nov 2018 (bwp) - added authentication requirement
 ***********************************************/

import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
});
