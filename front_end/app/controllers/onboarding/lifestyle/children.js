import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  children: null,

  actions: {

    optionOne() {
      this.set('children', '0');
      this.actions.continue(this);
    },

    optionTwo() {
      this.set('children', '1-2');
      this.actions.continue(this); 
    },

    optionThree() {
      this.set('children', '3-4');
      this.actions.continue(this); 
    },
    
    optionFour() {
      this.set('children', '5+');
      this.actions.continue(this); 
    },

    continue(controller) {
      // Update survey record for user
      let currentUser = controller.get('currentUser');

      controller.store.findRecord( 'survey', currentUser.id).then(function(survey){
          survey.set('children', controller.children);
          survey.save();
       });

      // should wait for promise return before tansition?
      controller.transitionToRoute('onboarding.medical');
    }
  }
});