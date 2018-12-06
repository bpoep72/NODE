import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  
  actions: {
    continue() {
      
      let currentUser = this.get('currentUser');

      // Will medical info go with survey, profile, or a new model?
      // Either create new record or update existing one here...

      // next page
      this.transitionToRoute('onboarding.education');
    }
  }

});
