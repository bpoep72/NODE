import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  actions: {
    updateProfile() {
      let controller = this;
      let currentUser = this.get('currentUser');
      this.store.findRecord('profile', currentUser.id).then(function(profile){
        if(controller.fname) profile.set('fname', controller.fname);
        if(controller.lname) profile.set('lname', controller.lname);
        if(controller.age) profile.set('age', controller.age); // need to validate as # somewhere
        if(controller.ethnicity) profile.set('ethnicity', controller.ethnicity);
        if(controller.orientation)  profile.set('orientation', controller.orientation);
        if(controller.height)  profile.set('height', controller.height);
        if(controller.weight)  profile.set('weight', controller.weight);
        profile.save(); // => PATCH to '/profiles/1'
      })    
    }
  }
});
