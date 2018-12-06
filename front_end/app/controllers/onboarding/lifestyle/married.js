import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  maritalStatus: null,

  actions: {

    optionOne() {
      this.set('maritalStatus', 'never married');
      this.actions.continue(this);
    },

    optionTwo() {
      this.set('maritalStatus', 'married');
      this.actions.continue(this); 
    },

    optionThree() {
      this.set('maritalStatus', 'divorced');
      this.actions.continue(this); 
    },
    
    optionFour() {
      this.set('maritalStatus', 'widowed');
      this.actions.continue(this); 
    },

    continue(controller) {
      // Update survey record for user
      let currentUser = controller.get('currentUser');

      controller.store.findRecord( 'survey', currentUser.id).then(function(survey){
          survey.set('maritalStatus', controller.maritalStatus);
          survey.save();
       });

      // should wait for promise return before tansition?
      controller.transitionToRoute('onboarding.lifestyle.children');
    }
  }
});