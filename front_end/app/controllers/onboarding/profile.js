import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  
  actions: {
    continue() {
      // check if user filled out all fields?
      console.log("First Name: ", this.fname);

      // create the profile record and persist to database
      let currentUser = this.get('currentUser');

      console.log("Current User ID: ", currentUser.id);

      this.store.createRecord( 'profile', {
        id: currentUser.id,
        fname: this.fname,
        lname: this.lname,
        age: this.age,
        ethnicity: this.ethnicity,
        orientation: this.orientation,
        height: this.height,
        weight: this.weight,
      }).save();

      // next page
      this.transitionToRoute('onboarding.lifestyle')
    }
  }

});
