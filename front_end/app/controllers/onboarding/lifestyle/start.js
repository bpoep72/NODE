import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    continue() {
      this.transitionToRoute('onboarding.lifestyle.drink');
    }
  }
});
