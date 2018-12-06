import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  smoker: null,

  actions: {
    
    yes() {
      this.set('smoker', true);
      this.actions.continue(this);
    },

    no() {
      this.set('smoker', false);
      this.actions.continue(this);
    },

    continue(controller) {
      // Update survey record for user
      let currentUser = controller.get('currentUser');

      controller.store.findRecord( 'survey', currentUser.id).then(function(survey){
          survey.set('smoker', controller.smoker);
          survey.save();
       });

      // should wait for promise return before tansition?
      controller.transitionToRoute('onboarding.lifestyle.drugs');
    }
  }
});
