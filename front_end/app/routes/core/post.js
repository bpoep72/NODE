/************************************************
 * Application:  NOD
 * File:  app/routes/core/post.js
 * Author: Bard Polley
 * Creation Date: 18 Nov 2018
 * Feature: 86 - Post route
 * Purpose: Behavior for Post route
 * Modification History:
 * - 18 Nov 2018 (bwp) - Initial build
 * - 25 Nov 2018 (bwp) - Relocated to core route
 * - 26 Nov 2018 (bwp) - Delegated authentication to core route
 ***********************************************/

import Route from '@ember/routing/route';

export default Route.extend( {

  beforeModel() {
    this.controllerFor('core').set('header', 'Posting')
  },

  model(params) {
    return this.store.findRecord('post', params.post_id);
  }
});
