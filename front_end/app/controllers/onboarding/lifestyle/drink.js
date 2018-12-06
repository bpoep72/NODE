import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  drinks: null,

  actions: {

    optionOne() {
      this.set('drinks', '0');
      this.actions.continue(this);
    },

    optionTwo() {
      this.set('drinks', '1-2');
      this.actions.continue(this); 
    },

    optionThree() {
      this.set('drinks', '3-6');
      this.actions.continue(this); 
    },
    
    optionFour() {
      this.set('drinks', '7+');
      this.actions.continue(this); 
    },

    continue(controller) {
      // Update survey record for user
      let currentUser = controller.get('currentUser');

      controller.store.findRecord( 'survey', currentUser.id).then(function(survey){
          survey.set('drinks', controller.drinks);
          survey.save();
       });

      // should wait for promise return before tansition?
      controller.transitionToRoute('onboarding.lifestyle.smoke');
    }
  }
});
