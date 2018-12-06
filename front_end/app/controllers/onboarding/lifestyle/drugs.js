import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend(Authenticated,{

  actions: {
    yes() {
      // Update survey record for user
      let currentUser = this.get('currentUser');

      this.store.findRecord( 'survey', currentUser.id).then(function(survey){
        survey.set('recreationalDrugs', true); // can't access this.drinks in here... need to pass in
        survey.save();  // don't necessarily need to save each each time but better to save progress?
      });
      
      this.transitionToRoute('onboarding.lifestyle.diet');
    },
    no() {
      let currentUser = this.get('currentUser');

      this.store.findRecord( 'survey', currentUser.id).then(function(survey){
        survey.set('recreationalDrugs', false); // can't access this.drinks in here... need to pass in
        survey.save();
      });

      this.transitionToRoute('onboarding.lifestyle.diet');
    }
  }  
});
