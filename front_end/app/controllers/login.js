/************************************************
 * Application:  NOD
 * File:  app/controllers/login.js
 * Author: Bard Polley
 * Creation Date: 27 Nov 2018
 * Feature: 109 - Controller for login GUI
 * Purpose: Actions associated with the login route/template
 * Modification History:
 * - 27 Nov 2018 (xxx) - Initial build
 * --- TODO: Password Reset GUI
 * *********************************************/
import Controller from '@ember/controller';
import Completed  from 'ember-cli-gatekeeper/mixins/completed';

export default Controller.extend(Completed, {
  actions: {
    // gatekeeper code goes here

    executeResetPassword() {

      this.replaceRoute ('reset-password');
    },
    executeCreateAccount() {
      this.replaceRoute ('signup.create-account');
    }
  }
});
