import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    this.controllerFor('onboarding').set('activePage', 4);
  }
});
