/************************************************
 * Application:  NOD
 * File:  app/controllers/core/dashboard.js
 * Author:
 * Creation Date: 26 Nov 2018
 * Feature: XX -Dashboard Actions
 * Purpose: Actions associated with the Dashboard route/template
 * Modification History:
 * - 26 Nov 2018 (bwp) - Initial build (added signOut action to test authentication
 * *********************************************/
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    signOut () {
      this.get ('session').signOut ().then (() => {
        this.replaceRoute ('login');
      });
    }
  }
});
