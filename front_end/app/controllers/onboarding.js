// Trying to handle creation of user's records in here during onboarding process
// Couldn't figure out how to trigger actions in this parent controller from children controllers/routes so not a go for now

import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend(Authenticated, {
  activePage: 0,  // starting at 0 hides progress-indicator

  actions: {
    createProfile() {
      // do it
      console.log('Creating Profile...')
    }
  }
});
