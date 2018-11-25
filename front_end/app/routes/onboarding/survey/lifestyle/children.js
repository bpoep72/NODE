/************************************************
 * Application:  NOD
 * File:  app/routes/onboarding/survey/lifestyle/children.js
 * Author: Bard Polley
 * Creation Date: 14 Nov 2018
 * Feature: 70 - Survey Children
 * Purpose: Survey Question Behavior for number of children
 * Modification History:
 * - 14 Nov 2018 (bwp) - Initial build
 * - 25 Nov 2018 (bwp) - Added authentication requirement
 ***********************************************/
import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authentication, {
});
