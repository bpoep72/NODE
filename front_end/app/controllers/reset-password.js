import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    // gatekeeper code goes here

    resetPassword() {

      this.replaceRoute ('login');
    }
  }
});
