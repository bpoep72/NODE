import Controller from '@ember/controller';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Controller.extend( Authenticated, {
  
  actions: {
    continue() {
      // create new direct-deposit record and save to db
      let currentUser = this.get('currentUser');

      this.store.createRecord( 'direct-deposit', {
        id: currentUser.id,
        accountNumber: this.accountNumber,
        bankName: this.bankName,
        routingNumber: this.routingNumber,
      }).save();

      // Go to to the dashboard
      this.transitionToRoute('core.dashboard');
      // Will eventually have a final confirmation page, and/or
      // maybe a "You're all done, here are some tips" page?
    }
  }

});
