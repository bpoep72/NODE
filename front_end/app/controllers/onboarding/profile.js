import Controller from '@ember/controller';

export default Controller.extend({
  
  actions: {
    continue() {
      // TO DO
      this.transitionToRoute('onboarding.lifestyle')
    }
  }

});
