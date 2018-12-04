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
 ***********************************************/
import Route from '@ember/routing/route';

export default Route.extend( {
  beforeModel() {
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

      let image = controller.get('image')
      let title = controller.get('title')
      let description = controller.get('description')
      let comments = controller.get('comments')
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

