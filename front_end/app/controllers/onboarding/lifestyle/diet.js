import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  healthyDiet: '2.5', // setting default value explicitly, otherwise null if user doesn't slide

  actions: {
    continue() {
      // Update survey record for user
      let currentUser = this.get('currentUser');

      
      var diet = Number(this.healthyDiet);
      this.store.findRecord( 'survey', currentUser.id).then(function(survey){
        // value from slider is a string, need to convert to number
          survey.set('healthyDiet', diet);
          survey.save();
       });
  
      // should wait for promise return before tansition?
      this.transitionToRoute('onboarding.lifestyle.married');
    }
  }
});
