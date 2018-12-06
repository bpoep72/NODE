import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend(Authenticated,{
  actions: {
    continue() {
      // Create new survey record for user
      let currentUser = this.get('currentUser');

      // Could save to database with each page, but we'll just save on completion
      this.store.createRecord( 'survey', {
        id: currentUser.id
      }).save() // Seems to need to save in order to update on next pages

      // should wait for promise return before tansition?
      this.transitionToRoute('onboarding.lifestyle.drink');
    }
  }
});
