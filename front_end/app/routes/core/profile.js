/************************************************
 * Application:  NOD
 * File:  app/routes/core/profile.js
 * Author: Bard Polley
 * Creation Date: 18 Nov 2018
 * Feature: 86 - Profile route
 * Purpose: Behavior for Profile route
 * Modification History:
 * - 18 Nov 2018 (bwp) - Initial build
 * - 25 Nov 2018 (bwp) - relocated to core route
 * - 26 Nov 2018 (bwp) - Delegated authentication to core route
 ***********************************************/

import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {

  beforeModel() {
    this.controllerFor('core').set('header', 'Profile');
  },

  model() {
    let currentUser = this.get('currentUser');
    // should handle errors with profile lookup
    return this.store.findRecord('profile', currentUser.id);
  },

  actions: {
    updateProfile() {
      let controller = this.get('controller');

      let fname = controller.get('fname')
      let lname = controller.get('lname')
      let age = controller.get('age')
      let ethnicity = controller.get('ethnicity')
      let orientation = controller.get('orientation')
      let height = controller.get('height')
      let weight = controller.get('weight')

      let currentUser = this.get('currentUser');
      this.store.findRecord('profile', currentUser.id).then(function(profile){
        if(fname) profile.set('fname', fname);
        if(lname) profile.set('lname', lname);
        if(age) profile.set('age', age); // need to validate as # somewhere
        if(ethnicity) profile.set('ethnicity', ethnicity);
        if(orientation)  profile.set('orientation', orientation);
        if(height)  profile.set('height', height);
        if(weight)  profile.set('weight', weight);
        profile.save(); // => PATCH to '/profiles/1'
      })    
    }
  }

});
