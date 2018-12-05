import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(){
    this.controllerFor('onboarding').set('activePage', 1);
  },
  
  actions: {
    continue() {
      // check if user filled out all fields?
      console.log('continue action in onboarding/profile Route')
      // validate data... on back-end?

 /*      // create the profile record and persist to database
      let currentUser = this.get('currentUser');

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
      this.transitionToRoute('onboarding.lifestyle') */
    }
  }
});
