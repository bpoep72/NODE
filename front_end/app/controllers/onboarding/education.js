import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  educationLevel: null,

  actions: {

    optionOne() {
      this.set('educationLevel', 'high school / ged');
      this.actions.continue(this);
    },

    optionTwo() {
      this.set('educationLevel', 'some college');
      this.actions.continue(this); 
    },

    optionThree() {
      this.set('educationLevel', "bachelor's");
      this.actions.continue(this); 
    },
    
    optionFour() {
      this.set('educationLevel', 'masters or higher');
      this.actions.continue(this); 
    },

    optionFive() {
      this.set('educationLevel', 'other');
      this.actions.continue(this); 
    },

    continue(controller) {
      // Update survey record for user
      let currentUser = controller.get('currentUser');

      controller.store.findRecord( 'survey', currentUser.id).then(function(survey){
          survey.set('educationLevel', controller.educationLevel);
          survey.save();
       });

      // should wait for promise return before tansition?
      controller.transitionToRoute('onboarding.payment');
    }
  }
});