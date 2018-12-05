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
      this.store.findRecord('profile', ':' + currentUser.id).then(function(prof){
        if(fname) prof.set('fname', fname);
        if(lname) prof.set('lname', lname);
        if(age) prof.set('age', age); // need to validate as # somewhere
        if(ethnicity) prof.set('ethnicity', ethnicity);
        if(orientation)  prof.set('orientation', orientation);
        if(height)  prof.set('height', height);
        if(weight)  prof.set('weight', weight);
        prof.save(); // => PATCH to '/profiles/1' ???
      }) 

      // attempt at creating a new record in the store and persisting to db

/*       let newProfile = this.store.createRecord( 'profile', {
        owner: '5c05c20dec78477db379bacc',
        fname: 'test',
        lname: 'test',
        age: 0,
        ethnicity: 'test',
        orientation: 'test',
        height: 'test',
        weight: 'test',
      }).save(); */
    
      
    }
  }

});
