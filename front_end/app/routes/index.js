/************************************************
 * Application:  NOD
 * File:  app/routes/index.js
 * Author:
 * Creation Date: 05 Nov 2018
 * Feature: XX - Index route
 * Purpose: Initial page routing - defaults to the dashboard
 *  - will revert to the login page if not authenticated
 * Modification History:
 * - 27 Nov 2018 (bwp) - Initial build
 ***********************************************/

import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.replaceWith('core.dashboard');
  }
});
