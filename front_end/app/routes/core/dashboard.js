/************************************************
 * Application:  NOD
 * File:  app/routes/core/dashboard.js
 * Author:
 * Creation Date: 18 Nov 2018
 * Feature: 43 -Dashboard route
 * Purpose: Route / path to dashboard
 * Modification History:
 * - 18 Nov 2018 (bwp) - Initial build
 * - 25 Nov 2018 (bmp/bwp) Relocated under core
 * - 26 Nov 2018 (bwp) delegated authentication to core route
 * - 03 Nov 2018 (bwp) created request for all posts without
 *      delimiting them by user
 ***********************************************/
import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
  beforeModel() {
    // Check if user has created their profile yet, if not redirect to Onboarding
    let currentUser = this.get('currentUser');

    // it's async call, so route continues to render page before catching error
    // maybe should halt that, but could slow experience for users who have profiles already
    this.store.findRecord('profile', currentUser.id).catch((err) => {
      console.log("error = ", err)
      //should probably handle error better, but works for our purpose
      this.transitionTo('onboarding.profile');
    })

    this.controllerFor('core').set('header', 'Dashboard');
  },
  model() {
//    let onePost = this.get('currentUser');
//    this.controllerFor('core.dashboard').set('currentUserID', onePost.id);
  return this.store.findAll('post');

//    this.controllerFor('core').set('header', 'Dashboard')
  },
  actions: {
    updateDashboard() {
      let controller = this.get('controller');

//      let image = controller.get('image')
//      let title = controller.get('title')
//      let description = controller.get('description')
//      let dateMade = controller.get('dateMade')
/*
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
*/
    }
    }
});

